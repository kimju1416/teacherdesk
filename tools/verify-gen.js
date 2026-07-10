// setup.html의 생성기 스크립트를 vm 샌드박스에서 실행해 __TD_REGEN__로 실제 생성물을 뽑아 검사
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execSync } = require('child_process');

const setupPath = process.argv[2];
const outPath = process.argv[3];
const html = fs.readFileSync(setupPath, 'utf8');
const blocks = [...html.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);

// ── 만능 요소 스텁 ──
function makeEl() {
  const el = {
    style: {}, dataset: {}, classList: {
      add() {}, remove() {}, toggle() {}, contains() { return false; }
    },
    children: [], value: '', innerHTML: '', textContent: '',
    setAttribute() {}, getAttribute() { return null; }, removeAttribute() {},
    appendChild(c) { return c; }, removeChild() {}, remove() {},
    addEventListener() {}, removeEventListener() {},
    querySelector() { return makeEl(); }, querySelectorAll() { return []; },
    click() {}, focus() {}, blur() {}, scrollIntoView() {},
    getBoundingClientRect() { return { left: 0, top: 0, width: 100, height: 100, right: 100, bottom: 100 }; },
    closest() { return null; }, contains() { return false; },
    nextElementSibling: null, parentNode: { removeChild() {}, appendChild() {} },
    href: '', download: ''
  };
  return el;
}

let capturedBlob = null;
const elCache = {};
const sandbox = {
  console, JSON, Math, Date, RegExp, Array, Object, String, Number, Boolean, parseInt, parseFloat, isNaN, encodeURIComponent, decodeURIComponent, escape, unescape, Promise,
  setTimeout: (fn) => { try { fn(); } catch (e) { console.log('  (setTimeout fn error: ' + e.message + ')'); } return 1; },
  setInterval: () => 1, clearTimeout() {}, clearInterval() {},
  alert: (m) => console.log('  [alert]', String(m).slice(0, 100)),
  fetch: () => Promise.resolve({ ok: false, json: () => Promise.resolve({}) }),
  localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
  navigator: { userAgent: 'test' },
  location: { href: '', reload() {} },
  XLSX: { read() { return { SheetNames: [], Sheets: {} }; }, utils: { sheet_to_csv() { return ''; } } },
  Blob: function (parts) { capturedBlob = parts.join(''); this.size = capturedBlob.length; },
  URL: { createObjectURL: () => 'blob:test', revokeObjectURL() {} },
  FileReader: function () { this.readAsArrayBuffer = () => {}; this.readAsText = () => {}; this.readAsDataURL = () => {}; },
  atob: (s) => Buffer.from(s, 'base64').toString('binary'),
  btoa: (s) => Buffer.from(s, 'binary').toString('base64'),
  document: {
    getElementById: (id) => (elCache[id] = elCache[id] || makeEl()),
    createElement: () => makeEl(),
    querySelector: () => makeEl(),
    querySelectorAll: () => [],
    addEventListener() {},
    body: makeEl(), title: '', documentElement: makeEl()
  }
};
sandbox.window = sandbox;
sandbox.self = sandbox;
vm.createContext(sandbox);

for (let i = 0; i < blocks.length; i++) {
  try {
    vm.runInContext(blocks[i], sandbox, { filename: 'block' + i + '.js' });
    console.log('block', i, 'evaluated OK');
  } catch (e) {
    console.log('block', i, 'EVAL ERROR:', e.message);
  }
}

if (typeof sandbox.__TD_REGEN__ !== 'function') {
  console.log('FAIL: __TD_REGEN__ not defined');
  process.exit(1);
}

const sample = {
  templateVersion: '1.4.0', off: 'R10', sch: '1234567', neis: 'testkey', gem: 'gemkey',
  ttData: { '월': ['체육', '수학', '', '', '', '', ''], '화': [], '수': [], '목': [], '금': [] },
  evData: [{ date: '2026-07-20', title: '여름방학식' }],
  rosterData: null, extData: null, theme: 2, layout: 4, skin: 'bento',
  schoolLat: 36.5, schoolLon: 128.7, schoolName: '테스트중학교'
};
const ret = sandbox.__TD_REGEN__(JSON.stringify(sample));
console.log('__TD_REGEN__ returned:', ret);

if (!capturedBlob) { console.log('FAIL: no blob captured'); process.exit(1); }
fs.writeFileSync(outPath, capturedBlob, 'utf8');
console.log('generated dashboard size:', capturedBlob.length);

// 생성물 검사
const checks = {
  'dash-data 임베드': /<script id="dash-data" type="application\/json">/.test(capturedBlob),
  'templateVersion 1.7.0': capturedBlob.includes('"templateVersion":"1.7.0"') || capturedBlob.includes('TEMPLATE_VERSION = "1.7.0"'),
  '🔑 API 키 탭': capturedBlob.includes('data-tab="apikey"') && capturedBlob.includes('api-gem-inp') && capturedBlob.includes('api-neis-inp'),
  '🔑 키 헬퍼 일원화': capturedBlob.includes('function getNeisKey()') && capturedBlob.includes('api_gem'),
  '생기부 few-shot 예시': capturedBlob.includes('스크린 플레이') && capturedBlob.includes('그대로 베끼지 말 것'),
  '생기부 이름감지': capturedBlob.includes('sgbDetectName'),
  '생기부 후처리 nounize': capturedBlob.includes('sgbNounizeText(String(x))'),
  '✨ fx 토글': capturedBlob.includes('id="fx-on"') && capturedBlob.includes('no-fx'),
  '✨ 스태거·shine·blob': capturedBlob.includes('@keyframes cardIn') && capturedBlob.includes('@keyframes progShine') && capturedBlob.includes('@keyframes aqFloat1'),
  '✨ reduced-motion 존중': capturedBlob.includes('prefers-reduced-motion'),
  '🖥️ 동적 height resizeScale': capturedBlob.includes('window.innerHeight/zoom') && capturedBlob.includes('function getStageH'),
  '레이아웃4 CSS': capturedBlob.includes('[data-layout="4"]'),
  '레이아웃4 적용(body)': /data-layout="4"/.test(capturedBlob),
  '스킨 bento 적용': /data-skin="bento"/.test(capturedBlob),
  '생기부 도우미(sgb-page)': capturedBlob.includes('sgb-page'),
  '달력 카드': capturedBlob.includes('cal-card'),
  '편집모드(edit-btn)': capturedBlob.includes('edit-btn') || capturedBlob.includes('enterEditMode'),
  '떨림수정(transition:none)': capturedBlob.includes('transition:none!important'),
  '플레이스홀더 잔존 없음(TVER)': !capturedBlob.includes('/*TVER*/'),
  '플레이스홀더 잔존 없음(SKN)': !capturedBlob.includes('/*SKN*/'),
  '📁 폴더런처 저장키(folder_items)': capturedBlob.includes('getDKey("folder_items")'),
  '📁 tdesk 감지·폴백 안내': capturedBlob.includes('window.tdesk') && capturedBlob.includes('TeacherDesk 앱에서는 실제 폴더를 담을 수 있어요'),
  '📁 드롭 등록(getPathForFile·중복방지)': capturedBlob.includes('getPathForFile') && capturedBlob.includes('handleFolderDrop'),
  '📁 창 전체 드롭 기본동작 차단': /document\.addEventListener\('drop', function\(e\)\{ e\.preventDefault\(\); \}\);/.test(capturedBlob),
  '📁 팬아웃 오버레이·스태거': capturedBlob.includes('folder-fan') && capturedBlob.includes('fan-item') && capturedBlob.includes('i*0.03'),
  '📁 열기(openPath)·경로검사(pathExists)': capturedBlob.includes('openPath') && capturedBlob.includes('pathExists') && capturedBlob.includes('경로를 찾을 수 없어요'),
  '📁 아이콘 캐시(getFileIcon)': capturedBlob.includes('getFileIcon'),
  '📁 제거 버튼·설정 목록': capturedBlob.includes('fan-x') && capturedBlob.includes('folder-items-list'),
  '📁 fx·reduced-motion 존중(fxOff)': capturedBlob.includes('function fxOff()') && capturedBlob.includes('body.no-fx .fan-item')
};
let fail = 0;
for (const [k, v] of Object.entries(checks)) { console.log((v ? '✅' : '❌'), k); if (!v) fail++; }

// dash-data 파싱
try {
  const dm = capturedBlob.match(/<script id="dash-data" type="application\/json">([\s\S]*?)<\/script>/);
  const dd = JSON.parse(dm[1]);
  console.log('✅ dash-data JSON 파싱 OK — keys:', Object.keys(dd).length, '| templateVersion:', dd.templateVersion, '| layout:', dd.layout, '| skin:', dd.skin);
} catch (e) { console.log('❌ dash-data 파싱 실패:', e.message); fail++; }

// 생성물 스크립트 문법 검사
const genBlocks = [...capturedBlob.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/g)];
const tmpDir = path.join(__dirname, 'synchk-tmp');
fs.mkdirSync(tmpDir, { recursive: true });
genBlocks.forEach((b, i) => {
  const openTag = b[0].slice(0, b[0].indexOf('>') + 1);
  if (openTag.includes('application/json')) return; // dash-data는 JS 아님 (⚠️ 여는 태그만 검사 — 본문 fetch 헤더의 'application/json'에 낚이지 않게)
  const f = path.join(tmpDir, 'gen' + i + '.js');
  fs.writeFileSync(f, b[1]);
  try { execSync('node --check "' + f + '"', { stdio: 'pipe' }); console.log('✅ 생성물 script', i, '문법 OK (' + b[1].length + ' chars)'); }
  catch (e) { console.log('❌ 생성물 script', i, '문법 오류'); console.log(String(e.stderr).split('\n').slice(0, 4).join('\n')); fail++; }
});

console.log(fail === 0 ? '\n=== ALL CHECKS PASSED ===' : '\n=== FAILURES: ' + fail + ' ===');
process.exit(fail === 0 ? 0 : 1);
