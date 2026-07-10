// 대시보드(renderer)에 앱 전용 기능을 안전하게 노출
const { contextBridge, ipcRenderer, webUtils } = require('electron');

contextBridge.exposeInMainWorld('tdesk', {
  isApp: true,
  // 드롭된 File 객체 → 실제 윈도우 경로
  getPathForFile: (file) => {
    try { return webUtils.getPathForFile(file); } catch (e) { return null; }
  },
  // 실제 폴더/파일 열기 (탐색기)
  openPath: (p) => ipcRenderer.invoke('td-open-path', p),
  // 실제 파일 아이콘 (dataURL)
  getFileIcon: (p) => ipcRenderer.invoke('td-file-icon', p),
  // 경로 존재 여부
  pathExists: (p) => ipcRenderer.invoke('td-path-exists', p),
  // 위젯 모드: 빈 영역에서 마우스가 바탕화면으로 통과하게
  setIgnoreMouse: (flag) => ipcRenderer.send('td-set-ignore', !!flag),
  // 현재 배치 모드 ('widget' | 'wallpaper' | 'above')
  getMode: () => ipcRenderer.invoke('td-get-mode')
});
