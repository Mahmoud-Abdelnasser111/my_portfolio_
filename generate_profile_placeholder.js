import fs from 'fs';
import path from 'path';
import jpeg from 'jpeg-js';

const width = 600;
const height = 600;
const frameData = Buffer.alloc(width * height * 4);

function setPixel(x, y, r, g, b, a = 255) {
  if (x < 0 || x >= width || y < 0 || y >= height) return;
  const idx = (y * width + x) * 4;
  frameData[idx] = r;
  frameData[idx + 1] = g;
  frameData[idx + 2] = b;
  frameData[idx + 3] = a;
}

function drawLine(x0, y0, x1, y1, r, g, b) {
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  let cx = x0;
  let cy = y0;
  while (true) {
    setPixel(cx, cy, r, g, b);
    if (cx === x1 && cy === y1) break;
    const e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      cx += sx;
    }
    if (e2 < dx) {
      err += dx;
      cy += sy;
    }
  }
}

function drawRect(x, y, w, h, r, g, b) {
  for (let i = x; i < x + w; i++) {
    setPixel(i, y, r, g, b);
    setPixel(i, y + h - 1, r, g, b);
  }
  for (let j = y; j < y + h; j++) {
    setPixel(x, j, r, g, b);
    setPixel(x + w - 1, j, r, g, b);
  }
}

function fillCircle(cx, cy, rad, r, g, b) {
  for (let y = cy - rad; y <= cy + rad; y++) {
    for (let x = cx - rad; x <= cx + rad; x++) {
      if ((x - cx) ** 2 + (y - cy) ** 2 <= rad ** 2) {
        setPixel(x, y, r, g, b);
      }
    }
  }
}

// 1. Fill base dark gradient
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const distFromCenter = Math.sqrt((x - width / 2) ** 2 + (y - height / 2) ** 2);
    // Center is slightly deeper navy, edges are near-black #030712
    const factor = Math.max(0, 1 - distFromCenter / 400);
    const r = Math.floor(3 + 4 * factor);
    const g = Math.floor(7 + 13 * factor);
    const b = Math.floor(18 + 20 * factor);
    setPixel(x, y, r, g, b);
  }
}

// 2. Draw subtle silicon grid
for (let x = 0; x < width; x += 30) {
  for (let y = 0; y < height; y++) {
    if (y % 4 !== 0) continue;
    const idx = (y * width + x) * 4;
    frameData[idx] = Math.min(255, frameData[idx] + 8);
    frameData[idx + 1] = Math.min(255, frameData[idx + 1] + 25);
    frameData[idx + 2] = Math.min(255, frameData[idx + 2] + 45);
  }
}
for (let y = 0; y < height; y += 30) {
  for (let x = 0; x < width; x++) {
    if (x % 4 !== 0) continue;
    const idx = (y * width + x) * 4;
    frameData[idx] = Math.min(255, frameData[idx] + 8);
    frameData[idx + 1] = Math.min(255, frameData[idx + 1] + 25);
    frameData[idx + 2] = Math.min(255, frameData[idx + 2] + 45);
  }
}

// 3. Central Silicon Die Carrier
drawRect(140, 140, 320, 320, 0, 168, 255);
drawRect(141, 141, 318, 318, 0, 168, 255);
drawRect(150, 150, 300, 300, 0, 229, 255);

// Inner Core
drawRect(190, 190, 220, 220, 0, 168, 255);

// 4. Trace Lines from Outer frame to Die
for (let i = 0; i < 7; i++) {
  const offset = 180 + i * 40;
  // Left
  drawLine(40, offset, 140, offset, 0, 229, 255);
  fillCircle(40, offset, 4, 0, 229, 255);
  // Right
  drawLine(460, offset, 560, offset, 0, 229, 255);
  fillCircle(560, offset, 4, 0, 229, 255);
  // Top
  drawLine(offset, 40, offset, 140, 0, 168, 255);
  fillCircle(offset, 40, 4, 0, 168, 255);
  // Bottom
  drawLine(offset, 460, offset, 560, 0, 168, 255);
  fillCircle(offset, 560, 4, 0, 168, 255);
}

// Corner 45-degree traces
drawLine(80, 80, 140, 140, 0, 229, 255);
fillCircle(80, 80, 5, 0, 229, 255);
drawLine(520, 80, 460, 140, 0, 229, 255);
fillCircle(520, 80, 5, 0, 229, 255);
drawLine(80, 520, 140, 460, 0, 229, 255);
fillCircle(80, 520, 5, 0, 229, 255);
drawLine(520, 520, 460, 460, 0, 229, 255);
fillCircle(520, 520, 5, 0, 229, 255);

// 5. Stylized Head / Engineer Silhouette in Center
fillCircle(300, 275, 42, 0, 168, 255);
// Shoulders
for (let y = 330; y <= 385; y++) {
  const w = (y - 330) * 1.8;
  drawLine(Math.floor(300 - w), y, Math.floor(300 + w), y, 0, 168, 255);
}

// Glowing Core Ring
for (let deg = 0; deg < 360; deg += 3) {
  const rad = (deg * Math.PI) / 180;
  const x = Math.round(300 + 75 * Math.cos(rad));
  const y = Math.round(290 + 75 * Math.sin(rad));
  setPixel(x, y, 0, 229, 255);
}

const rawImageData = {
  data: frameData,
  width: width,
  height: height,
};

const jpegImageData = jpeg.encode(rawImageData, 90);
fs.writeFileSync(path.join(process.cwd(), 'public', 'profile.jpg'), jpegImageData.data);
console.log('Successfully generated premium semiconductor portrait placeholder at public/profile.jpg');
