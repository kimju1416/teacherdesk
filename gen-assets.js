// 앱 아이콘(icon.ico)과 트레이 아이콘(tray.png)을 순수 Node로 생성
const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

function crc32(buf) {
  return zlib.crc32(buf) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function makePng(size) {
  const px = Buffer.alloc(size * size * 4);
  const r = Math.round(size * 0.19); // 모서리 반경
  const top = [139, 92, 246], bot = [109, 40, 217]; // 보라 그라데이션

  function inRounded(x, y, x0, y0, x1, y1, rad) {
    if (x < x0 || x > x1 || y < y0 || y > y1) return false;
    const cx = Math.max(x0 + rad, Math.min(x, x1 - rad));
    const cy = Math.max(y0 + rad, Math.min(y, y1 - rad));
    const dx = x - cx, dy = y - cy;
    return dx * dx + dy * dy <= rad * rad;
  }

  // 대시보드 카드 블록 (비율 기반)
  const s = size / 256;
  const blocks = [
    [40, 56, 100, 200], // 좌측 세로 카드
    [116, 56, 216, 112], // 우상단 카드
    [116, 128, 216, 200] // 우하단 카드
  ].map(b => b.map(v => Math.round(v * s)));
  const br = Math.max(2, Math.round(10 * s));

  for (let y = 0; y < size; y++) {
    const t = y / (size - 1);
    const bg = [
      Math.round(top[0] + (bot[0] - top[0]) * t),
      Math.round(top[1] + (bot[1] - top[1]) * t),
      Math.round(top[2] + (bot[2] - top[2]) * t)
    ];
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      if (!inRounded(x, y, 0, 0, size - 1, size - 1, r)) {
        px[i + 3] = 0;
        continue;
      }
      let c = bg, a = 255;
      for (const [x0, y0, x1, y1] of blocks) {
        if (inRounded(x, y, x0, y0, x1, y1, br)) { c = [255, 255, 255]; a = 235; break; }
      }
      px[i] = c[0]; px[i + 1] = c[1]; px[i + 2] = c[2]; px[i + 3] = a;
    }
  }

  // 스캔라인(필터 0) → deflate
  const raw = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0;
    px.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6; // 8bit RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

function makeIco(png) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // count
  const entry = Buffer.alloc(16);
  entry[0] = 0; // 256
  entry[1] = 0; // 256
  entry.writeUInt16LE(1, 4); // planes
  entry.writeUInt16LE(32, 6); // bpp
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12); // offset
  return Buffer.concat([header, entry, png]);
}

const dir = path.join(__dirname, 'assets');
fs.writeFileSync(path.join(dir, 'icon.ico'), makeIco(makePng(256)));
fs.writeFileSync(path.join(dir, 'icon.png'), makePng(256));
fs.writeFileSync(path.join(dir, 'tray.png'), makePng(32));
console.log('assets generated');
