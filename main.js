const { app, BrowserWindow, Tray, Menu, screen, shell, dialog, nativeImage, globalShortcut } = require('electron');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

// 테스트 모드: 실제 사용자 데이터를 건드리지 않도록 격리
const TEST_MODE = !!process.env.TDESK_TEST_UD;
if (TEST_MODE) app.setPath('userData', process.env.TDESK_TEST_UD);

// ───────────────────────── 상태 ─────────────────────────
let win = null;
let tray = null;
let psHelper = null; // 창을 맨 뒤(z-order bottom)로 보내는 PowerShell 도우미
let hwndStr = null;
let bottomMode = false; // 대시보드 모드에서만 맨 뒤 고정
let frontMode = false; // "앞으로 보기" 토글
let quitting = false;
let pendingLS = null; // 가져오기(복원) 시 주입할 localStorage

const dashPath = () => path.join(app.getPath('userData'), 'dashboard.html');
const bakPath = () => path.join(app.getPath('userData'), 'dashboard.backup.html');
const configPath = () => path.join(app.getPath('userData'), 'config.json');

function loadConfig() {
  try { return JSON.parse(fs.readFileSync(configPath(), 'utf8')); } catch (e) { return {}; }
}
function saveConfig(patch) {
  const cfg = Object.assign(loadConfig(), patch);
  try { fs.writeFileSync(configPath(), JSON.stringify(cfg)); } catch (e) { /* ignore */ }
  return cfg;
}

// ─────────────── 단일 인스턴스 ───────────────
if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (win) { win.show(); }
  });
}

// ─────────────── 창 맨 뒤 고정 (SetWindowPos HWND_BOTTOM) ───────────────
const PS_SCRIPT = `
Add-Type -Namespace W -Name U -MemberDefinition '[DllImport("user32.dll")] public static extern bool SetWindowPos(IntPtr hWnd, IntPtr hWndInsertAfter, int X, int Y, int cx, int cy, uint uFlags);'
while ($line = [Console]::In.ReadLine()) {
  if ($line -match '^[0-9]+$') {
    [W.U]::SetWindowPos([IntPtr][long]$line, [IntPtr]1, 0, 0, 0, 0, 0x0013) | Out-Null
  }
}
`;

function startPsHelper() {
  try {
    const helperFile = path.join(app.getPath('userData'), 'bottom-helper.ps1');
    fs.writeFileSync(helperFile, PS_SCRIPT, 'utf8');
    psHelper = spawn('powershell.exe', ['-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass', '-File', helperFile], {
      windowsHide: true, stdio: ['pipe', 'ignore', 'ignore']
    });
    psHelper.on('exit', () => { psHelper = null; });
  } catch (e) { psHelper = null; }
}

function sendToBottom() {
  if (!win || !bottomMode || frontMode) return;
  if (!psHelper) startPsHelper();
  if (psHelper && hwndStr) {
    try { psHelper.stdin.write(hwndStr + '\n'); } catch (e) { /* ignore */ }
  }
}

// ─────────────── 모니터 선택 ───────────────
function targetDisplay() {
  const cfg = loadConfig();
  const displays = screen.getAllDisplays();
  return displays.find(d => d.id === cfg.displayId) || screen.getPrimaryDisplay();
}

function fitToScreen() {
  if (!win || win.isDestroyed()) return;
  const b = targetDisplay().bounds;
  win.setResizable(true);
  win.setBounds({ x: b.x, y: b.y, width: b.width, height: b.height });
  win.setResizable(false);
  sendToBottom();
}

// ─────────────── 창 생성 ───────────────
function createWindow() {
  const d = targetDisplay();
  win = new BrowserWindow({
    x: d.bounds.x, y: d.bounds.y,
    width: d.bounds.width, height: d.bounds.height,
    frame: false,
    resizable: false,
    movable: false,
    skipTaskbar: false,
    show: false,
    backgroundColor: '#0c0e14',
    icon: path.join(__dirname, 'assets', 'icon.png'),
    webPreferences: { contextIsolation: true, sandbox: true }
  });

  const buf = win.getNativeWindowHandle();
  hwndStr = (buf.length === 8 ? buf.readBigUInt64LE() : BigInt(buf.readUInt32LE())).toString();

  // 해상도 변경·프로젝터 연결/해제 시 화면에 다시 꽉 채우기
  let fitTimer = null;
  const deferFit = () => { clearTimeout(fitTimer); fitTimer = setTimeout(() => { fitToScreen(); refreshTrayMenu(); }, 400); };
  screen.on('display-metrics-changed', deferFit);
  screen.on('display-added', deferFit);
  screen.on('display-removed', deferFit);

  win.once('ready-to-show', () => { win.show(); sendToBottom(); });
  win.on('focus', () => sendToBottom());
  // Win+D(바탕화면 보기)로 최소화돼도 자동 복원 → 항상 열려 있는 대시보드
  win.on('minimize', () => {
    setTimeout(() => { if (win && !win.isDestroyed()) { win.restore(); sendToBottom(); } }, 250);
  });
  win.on('close', (e) => {
    if (!quitting) { e.preventDefault(); } // Alt+F4 방지, 종료는 트레이에서
  });

  // 외부 링크는 기본 브라우저로
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:/i.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });
  win.webContents.on('will-navigate', (e, url) => {
    if (/^https?:/i.test(url)) { e.preventDefault(); shell.openExternal(url); }
  });

  // 설정 화면의 "기존 대시보드로 돌아가기" 버튼 신호
  win.webContents.on('page-title-updated', (e, title) => {
    if (title === 'TDESK_BACK' && fs.existsSync(dashPath())) loadDashboard();
  });

  // 생성기가 만든 dashboard.html 다운로드를 가로채 앱 데이터에 저장
  win.webContents.session.on('will-download', (event, item) => {
    if (item.getFilename().toLowerCase().includes('dashboard')) {
      item.setSavePath(dashPath());
      item.once('done', (e2, state) => {
        if (state === 'completed') {
          try { fs.copyFileSync(dashPath(), bakPath()); } catch (err) { /* ignore */ }
          setTimeout(() => loadDashboard(), 900);
        }
      });
    }
  });

  // 15초마다 맨 뒤 재고정 (안전벨트)
  setInterval(() => sendToBottom(), 15000);
}

function loadDashboard() {
  if (!win) return;
  bottomMode = true;
  frontMode = false;
  win.setAlwaysOnTop(false);
  win.setSkipTaskbar(true);
  win.loadFile(dashPath());
  win.webContents.once('did-finish-load', () => {
    // 복원 파일에서 가져온 즐겨찾기·할일 등 주입
    if (pendingLS) {
      const data = pendingLS; pendingLS = null;
      win.webContents.executeJavaScript(
        '(function(d){try{localStorage.clear();Object.keys(d).forEach(function(k){localStorage.setItem(k,d[k]);});}catch(e){}location.reload();})(' + JSON.stringify(data) + ')'
      ).catch(() => {});
    }
    sendToBottom();
  });
  refreshTrayMenu();
}

function loadSetup() {
  if (!win) return;
  bottomMode = false; // 설정 중에는 일반 창처럼 동작
  frontMode = false;
  win.setAlwaysOnTop(false);
  win.setSkipTaskbar(false);
  win.loadFile(path.join(__dirname, 'setup.html'));
  win.webContents.once('did-finish-load', () => {
    // 기존 대시보드가 있으면 "돌아가기" 버튼 표시
    if (fs.existsSync(dashPath())) {
      win.webContents.executeJavaScript(`(function(){
        if (document.getElementById('td-back-btn')) return;
        var b = document.createElement('button');
        b.id = 'td-back-btn';
        b.textContent = '← 기존 대시보드로 돌아가기';
        b.style.cssText = 'position:fixed;top:16px;right:16px;z-index:2147483647;padding:12px 20px;background:linear-gradient(135deg,#10b981,#059669);color:#fff;border:none;border-radius:12px;font-size:14px;font-weight:700;cursor:pointer;font-family:"Noto Sans KR",sans-serif;box-shadow:0 8px 24px rgba(16,185,129,.35);';
        b.onclick = function(){ document.title = 'TDESK_BACK'; };
        document.body.appendChild(b);
      })()`).catch(() => {});
    }
  });
  win.show();
  win.focus();
  refreshTrayMenu();
}

function toggleFront() {
  if (!win || !bottomMode) return;
  frontMode = !frontMode;
  if (frontMode) {
    win.setAlwaysOnTop(true, 'normal');
    win.show();
    win.focus();
  } else {
    win.setAlwaysOnTop(false);
    sendToBottom();
  }
  refreshTrayMenu();
}

// ─────────────── 설정 내보내기 / 가져오기 ───────────────
async function exportBackup() {
  if (!fs.existsSync(dashPath())) {
    dialog.showMessageBox(win, { type: 'info', message: '아직 생성된 대시보드가 없어요.', detail: '먼저 설정 마법사에서 대시보드를 생성해주세요.' });
    return;
  }
  let ls = {};
  try { ls = JSON.parse(await win.webContents.executeJavaScript('JSON.stringify(localStorage)')); } catch (e) { /* ignore */ }
  const today = new Date().toISOString().slice(0, 10);
  const r = await dialog.showSaveDialog(win, {
    title: 'TeacherDesk 설정 백업 저장',
    defaultPath: path.join(app.getPath('documents'), 'TeacherDesk-백업-' + today + '.tdbk'),
    filters: [{ name: 'TeacherDesk 백업', extensions: ['tdbk'] }]
  });
  if (r.canceled || !r.filePath) return;
  const payload = {
    app: 'TeacherDesk', format: 1, exportedAt: new Date().toISOString(),
    dashboardHtml: fs.readFileSync(dashPath(), 'utf8'),
    localStorage: ls
  };
  fs.writeFileSync(r.filePath, JSON.stringify(payload), 'utf8');
  dialog.showMessageBox(win, { type: 'info', message: '백업 완료!', detail: '이 파일 하나면 다른 컴퓨터에서도 [설정 가져오기]로 지금 상태 그대로 복원됩니다.\n\n' + r.filePath });
}

async function importBackup() {
  const r = await dialog.showOpenDialog(win, {
    title: 'TeacherDesk 백업 파일 선택',
    filters: [{ name: 'TeacherDesk 백업', extensions: ['tdbk', 'json'] }],
    properties: ['openFile']
  });
  if (r.canceled || !r.filePaths.length) return;
  let payload;
  try {
    payload = JSON.parse(fs.readFileSync(r.filePaths[0], 'utf8'));
    if (payload.app !== 'TeacherDesk' || !payload.dashboardHtml) throw new Error('bad');
  } catch (e) {
    dialog.showMessageBox(win, { type: 'error', message: '백업 파일이 아니거나 손상됐어요.' });
    return;
  }
  const c = await dialog.showMessageBox(win, {
    type: 'question', buttons: ['복원하기', '취소'], defaultId: 0, cancelId: 1,
    message: '백업을 복원할까요?', detail: '현재 대시보드와 설정(할일·즐겨찾기 등)을 백업 시점의 내용으로 덮어씁니다.'
  });
  if (c.response !== 0) return;
  fs.writeFileSync(dashPath(), payload.dashboardHtml, 'utf8');
  try { fs.copyFileSync(dashPath(), bakPath()); } catch (e) { /* ignore */ }
  pendingLS = payload.localStorage || {};
  loadDashboard();
}

// ─────────────── 트레이 ───────────────
function refreshTrayMenu() {
  if (!tray) return;
  const login = app.getLoginItemSettings().openAtLogin;
  const cfg = loadConfig();
  const displays = screen.getAllDisplays();
  const primaryId = screen.getPrimaryDisplay().id;
  const currentId = (displays.find(d => d.id === cfg.displayId) || screen.getPrimaryDisplay()).id;
  const displayItems = displays.map((d, i) => ({
    label: '모니터 ' + (i + 1) + ' (' + d.bounds.width + '×' + d.bounds.height + ')' + (d.id === primaryId ? ' — 주 모니터' : ''),
    type: 'radio',
    checked: d.id === currentId,
    click: () => { saveConfig({ displayId: d.id }); fitToScreen(); }
  }));
  const menu = Menu.buildFromTemplate([
    { label: 'TeacherDesk 선생님 바탕화면', enabled: false },
    { type: 'separator' },
    { label: '🔄 대시보드 새로고침', click: () => { if (win) win.reload(); } },
    {
      label: frontMode ? '⬇ 다시 바탕화면으로 보내기 (Ctrl+Alt+D)' : '⬆ 대시보드 앞으로 보기 (Ctrl+Alt+D)',
      enabled: bottomMode,
      click: () => toggleFront()
    },
    { label: '🖥️ 표시할 모니터', visible: displays.length > 1, submenu: displayItems },
    { type: 'separator' },
    { label: '💾 설정 내보내기 (백업 파일 저장)', click: () => exportBackup() },
    { label: '📂 설정 가져오기 (백업 복원)', click: () => importBackup() },
    { type: 'separator' },
    {
      label: '⚙️ 처음부터 다시 설정 (생성기 열기)',
      click: () => {
        dialog.showMessageBox(win, {
          type: 'question', buttons: ['다시 설정', '취소'], defaultId: 0, cancelId: 1,
          message: '설정 마법사를 다시 열까요?', detail: '새 대시보드를 생성하기 전까지 기존 대시보드는 유지되며, 마법사 화면 오른쪽 위 [돌아가기] 버튼으로 언제든 복귀할 수 있어요.'
        }).then(r => { if (r.response === 0) loadSetup(); });
      }
    },
    {
      label: '📁 dashboard.html 저장 폴더 열기',
      click: () => { if (fs.existsSync(dashPath())) shell.showItemInFolder(dashPath()); else shell.openPath(app.getPath('userData')); }
    },
    { type: 'separator' },
    {
      label: '🚀 윈도우 시작 시 자동 실행', type: 'checkbox', checked: login,
      click: (item) => { app.setLoginItemSettings({ openAtLogin: item.checked }); }
    },
    { type: 'separator' },
    { label: '❌ 종료', click: () => { quitting = true; app.quit(); } }
  ]);
  tray.setContextMenu(menu);
}

function createTray() {
  const img = nativeImage.createFromPath(path.join(__dirname, 'assets', 'tray.png'));
  tray = new Tray(img);
  tray.setToolTip('TeacherDesk 선생님 바탕화면 (Ctrl+Alt+D: 앞으로 보기)');
  tray.on('double-click', () => toggleFront());
  refreshTrayMenu();
}

// ─────────────── 앱 라이프사이클 ───────────────
app.whenReady().then(() => {
  // 대시보드 파일이 사라졌으면 자동 백업본에서 복구
  if (!fs.existsSync(dashPath()) && fs.existsSync(bakPath())) {
    try { fs.copyFileSync(bakPath(), dashPath()); } catch (e) { /* ignore */ }
  }

  startPsHelper();
  createWindow();
  createTray();
  globalShortcut.register('CommandOrControl+Alt+D', () => toggleFront());

  // 첫 실행 시 자동 시작 기본 켜기 (한 번만)
  const cfg = loadConfig();
  if (!cfg.autoStartInitialized && app.isPackaged && !TEST_MODE) {
    app.setLoginItemSettings({ openAtLogin: true });
    saveConfig({ autoStartInitialized: true });
    refreshTrayMenu();
  }

  if (fs.existsSync(dashPath())) {
    loadDashboard();
  } else {
    loadSetup();
  }
});

app.on('before-quit', () => {
  quitting = true;
  globalShortcut.unregisterAll();
  if (psHelper) { try { psHelper.kill(); } catch (e) { /* ignore */ } }
});

app.on('window-all-closed', () => {
  if (quitting) app.quit();
});
