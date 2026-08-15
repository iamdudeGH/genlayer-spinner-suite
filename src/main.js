import './style.css';
import { SPINNERS } from './spinners.js';

// State
let activeSpecimenId = 'prism';
let isPlaying = true;
let isWireframeActive = false;
let currentTab = 'react';
let animSpeed = 2.0;
let animSize = 150;

// SVG Icons
const ICONS = {
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  pause: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`,
  inspect: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`
};

// DOM Ready
window.addEventListener('DOMContentLoaded', () => {
  renderCrucible();
  renderSpecimenGrid();
  initControls();
  initKeyboardShortcuts();
  initTimeline();
  initSpatialGyro();
});

// Render Crucible Stage
function renderCrucible() {
  const stage = document.getElementById('crucible-stage');
  if (!stage) return;
  const s = SPINNERS[activeSpecimenId];

  stage.innerHTML = `
    <!-- Spatial Crosshairs -->
    <div class="crosshair-corner ch-tl"></div>
    <div class="crosshair-corner ch-tr"></div>
    <div class="crosshair-corner ch-bl"></div>
    <div class="crosshair-corner ch-br"></div>

    <!-- Top HUD -->
    <div class="stage-hud-top">
      <div>SPECIMEN: <span>${s.name.toUpperCase()}</span></div>
      <div>CORE: <span>GENLAYER_KINETIC_V1</span></div>
      <div>GPU: <span>60.0 FPS</span></div>
    </div>

    <!-- Vector Vertices Layer (Wireframe) -->
    <div class="vector-vertices-layer ${isWireframeActive ? 'active' : ''}" id="vertices-layer">
      <div class="vertex-node" style="top: 25%; left: 45%;"></div>
      <div class="vertex-node" style="top: 70%; left: 30%;"></div>
      <div class="vertex-node" style="top: 75%; left: 44%;"></div>
      <div class="vertex-node" style="top: 25%; left: 55%;"></div>
      <div class="vertex-node" style="top: 70%; left: 70%;"></div>
      <div class="vertex-node" style="top: 75%; left: 56%;"></div>
      <div class="vertex-node" style="top: 50%; left: 50%;"></div>
    </div>

    <!-- Spinner Output -->
    ${s.render()}

    <!-- Timeline Scrubber Dock -->
    <div class="timeline-dock">
      <button class="btn-playback" id="btn-play-pause" onclick="window.togglePlayPause()" title="Spacebar to Play/Pause">
        ${isPlaying ? ICONS.pause : ICONS.play}
      </button>
      <div class="timeline-track-wrap">
        <input type="range" class="timeline-slider" id="timeline-scrubber" min="0" max="100" value="50" />
      </div>
      <div class="timeline-timecode" id="timeline-timecode">00:01:12</div>
    </div>
  `;
}

// 3D Spatial Gyro Perspective Tracking
function initSpatialGyro() {
  const stage = document.getElementById('crucible-stage');
  if (!stage) return;

  stage.addEventListener('mousemove', (e) => {
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const tiltX = -(y / (rect.height / 2)) * 16;
    const tiltY = (x / (rect.width / 2)) * 16;

    stage.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
    stage.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
  });

  stage.addEventListener('mouseleave', () => {
    stage.style.setProperty('--tilt-x', '0deg');
    stage.style.setProperty('--tilt-y', '0deg');
  });

  // Mobile DeviceOrientation
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (e) => {
      if (e.beta !== null && e.gamma !== null) {
        const tiltX = Math.min(Math.max(-e.beta * 0.35, -16), 16);
        const tiltY = Math.min(Math.max(e.gamma * 0.35, -16), 16);
        stage.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
        stage.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
      }
    });
  }
}

// Render Specimen Collection
function renderSpecimenGrid() {
  const grid = document.getElementById('specimen-grid');
  if (!grid) return;

  grid.innerHTML = Object.values(SPINNERS).map(s => `
    <div class="specimen-box" id="box-${s.id}">
      <div class="specimen-meta">
        <span class="specimen-index">${s.tag}</span>
        <span style="font-family:'JetBrains Mono',monospace; font-size:0.68rem; color:var(--text-dim);">GPU OPTIMIZED</span>
      </div>
      <div class="specimen-name">${s.name}</div>
      <div class="specimen-stage-mini">
        ${s.render()}
      </div>
      <div class="specimen-desc">${s.description}</div>
      <div class="specimen-actions">
        <button class="btn-spec-action" onclick="window.selectSpecimen('${s.id}')">
          ${ICONS.inspect} Inspect
        </button>
        <button class="btn-spec-action" onclick="window.openCodeSheet('${s.id}')">
          ${ICONS.code} Code
        </button>
        <button class="btn-spec-action" onclick="window.downloadSvg('${s.id}')">
          ${ICONS.download} SVG
        </button>
      </div>
    </div>
  `).join('');
}

// Global Actions
window.selectSpecimen = function(id) {
  if (SPINNERS[id]) {
    activeSpecimenId = id;
    renderCrucible();
    showToast(`Loaded Specimen: ${SPINNERS[id].name}`);
    window.scrollTo({ top: 220, behavior: 'smooth' });
  }
};

window.togglePlayPause = function() {
  isPlaying = !isPlaying;
  document.documentElement.style.setProperty('--anim-state', isPlaying ? 'running' : 'paused');
  const btn = document.getElementById('btn-play-pause');
  if (btn) btn.innerHTML = isPlaying ? ICONS.pause : ICONS.play;
  showToast(isPlaying ? 'Playback Resumed' : 'Motion Paused');
};

window.toggleWireframe = function() {
  isWireframeActive = !isWireframeActive;
  const layer = document.getElementById('vertices-layer');
  if (layer) layer.classList.toggle('active', isWireframeActive);
  const btn = document.getElementById('btn-wireframe');
  if (btn) btn.classList.toggle('active', isWireframeActive);
  showToast(isWireframeActive ? 'Vector Vertices Overlay: ON' : 'Vector Vertices: OFF');
};

// Export Code Sheet
window.openCodeSheet = function(id = activeSpecimenId) {
  activeSpecimenId = id;
  const modal = document.getElementById('code-modal-sheet');
  const title = document.getElementById('sheet-specimen-title');
  if (title) title.textContent = `${SPINNERS[id].name} — Integration Spec`;
  updateCodeSheetContent();
  if (modal) modal.classList.remove('hidden');
};

window.closeCodeSheet = function() {
  const modal = document.getElementById('code-modal-sheet');
  if (modal) modal.classList.add('hidden');
};

window.switchSheetTab = function(tab) {
  currentTab = tab;
  document.querySelectorAll('.sheet-tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tab);
  });
  updateCodeSheetContent();
};

function updateCodeSheetContent() {
  const pre = document.getElementById('sheet-code-pre');
  if (!pre) return;
  const s = SPINNERS[activeSpecimenId];

  if (currentTab === 'react') pre.textContent = s.react;
  else if (currentTab === 'vue') pre.textContent = s.vue;
  else if (currentTab === 'css') pre.textContent = s.css;
  else if (currentTab === 'html') pre.textContent = s.render().trim();
}

window.copySnippet = function() {
  const pre = document.getElementById('sheet-code-pre');
  if (!pre) return;
  navigator.clipboard.writeText(pre.textContent).then(() => {
    showToast('Component code copied to clipboard!');
  });
};

window.downloadSvg = function(id = activeSpecimenId) {
  const s = SPINNERS[id];
  if (!s || !s.standaloneSvg) return;

  const blob = new Blob([s.standaloneSvg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `genlayer-${id}-spinner.svg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`Exported genlayer-${id}-spinner.svg!`);
};

// Controls
function initControls() {
  const speedSlider = document.getElementById('speed-range');
  const sizeSlider = document.getElementById('size-range');

  speedSlider?.addEventListener('input', (e) => {
    animSpeed = parseFloat(e.target.value);
    document.documentElement.style.setProperty('--anim-speed', `${animSpeed}s`);
    document.getElementById('val-speed').textContent = `${animSpeed.toFixed(1)}s`;
  });

  sizeSlider?.addEventListener('input', (e) => {
    animSize = parseInt(e.target.value, 10);
    document.documentElement.style.setProperty('--anim-size', `${animSize}px`);
    document.getElementById('val-size').textContent = `${animSize}px`;
  });
}

// Timeline & Keyboard Shortcuts
function initTimeline() {
  let timecodeVal = 0;
  setInterval(() => {
    if (!isPlaying) return;
    timecodeVal = (timecodeVal + 1) % 240;
    const scrubber = document.getElementById('timeline-scrubber');
    const tc = document.getElementById('timeline-timecode');
    if (scrubber) scrubber.value = (timecodeVal / 240) * 100;
    if (tc) {
      const s = Math.floor(timecodeVal / 30);
      const f = timecodeVal % 30;
      tc.textContent = `00:0${s}:${f < 10 ? '0' : ''}${f}`;
    }
  }, 33);
}

function initKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.code === 'Space') {
      e.preventDefault();
      window.togglePlayPause();
    } else if (e.key.toLowerCase() === 'w') {
      window.toggleWireframe();
    } else if (['1', '2', '3', '4', '5'].includes(e.key)) {
      const keys = Object.keys(SPINNERS);
      const idx = parseInt(e.key, 10) - 1;
      if (keys[idx]) window.selectSpecimen(keys[idx]);
    }
  });
}

// Toast
function showToast(msg) {
  const toast = document.getElementById('toast-banner');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
