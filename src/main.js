import './style.css';
import { SPINNERS } from './spinners.js';

// State
let currentSpinnerId = 'quantum';
let currentTab = 'css';
let customSpeed = 2.2;
let customSize = 140;
let customGlow = 1;
let currentPalette = 'cyberpunk';
let isConsensusRunning = false;

// DOM Ready
window.addEventListener('DOMContentLoaded', () => {
  renderHeroSpinner();
  renderGallery();
  initControls();
  init3DHologramTracking();
  initConsensusPlayground();
});

// Render Hero
function renderHeroSpinner() {
  const stage = document.getElementById('hero-stage');
  if (!stage) return;
  const s = SPINNERS[currentSpinnerId];
  stage.innerHTML = `
    <div class="hologram-shimmer"></div>
    ${s.render()}
    <div style="position: absolute; bottom: 1.25rem; font-size: 0.85rem; color: var(--text-muted); font-weight: 600; z-index: 10;">
      3D Interactive Mode • Active: <span style="color: var(--gl-cyan-light);">${s.name}</span>
    </div>
  `;
}

// 3D Holographic Gyro Tracking (Mouse + Mobile Device Orientation)
function init3DHologramTracking() {
  const stage = document.getElementById('hero-stage');
  if (!stage) return;

  // Desktop Mouse
  stage.addEventListener('mousemove', (e) => {
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const tiltX = -(y / (rect.height / 2)) * 22;
    const tiltY = (x / (rect.width / 2)) * 22;

    stage.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
    stage.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
  });

  stage.addEventListener('mouseleave', () => {
    stage.style.setProperty('--tilt-x', '0deg');
    stage.style.setProperty('--tilt-y', '0deg');
  });

  // Mobile DeviceOrientation (Tilt Gyroscope)
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (e) => {
      if (e.beta !== null && e.gamma !== null) {
        const tiltX = Math.min(Math.max(-e.beta * 0.4, -20), 20);
        const tiltY = Math.min(Math.max(e.gamma * 0.4, -20), 20);
        stage.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
        stage.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
      }
    });
  }
}

// Render Gallery with Balanced Toolbar Layout
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  grid.innerHTML = Object.values(SPINNERS).map(s => `
    <div class="spinner-card" id="card-${s.id}">
      <div class="card-spinner-box">
        ${s.render()}
      </div>
      <div class="card-info">
        <div class="card-header-line">
          <div class="card-name">${s.name}</div>
          <span class="card-tag">${s.tag}</span>
        </div>
        <div class="card-btn-toolbar">
          <button class="btn-card-action" onclick="window.selectHeroSpinner('${s.id}')">
            <span>🔍</span> Inspect
          </button>
          <button class="btn-card-action" onclick="window.openCodeModal('${s.id}')">
            <span>📋</span> Code
          </button>
          <button class="btn-card-action" onclick="window.downloadSvgFile('${s.id}')" title="Download standalone animated SVG">
            <span>📥</span> SVG
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Global Actions
window.selectHeroSpinner = function(id) {
  if (SPINNERS[id]) {
    currentSpinnerId = id;
    renderHeroSpinner();
    showToast(`✨ Selected: ${SPINNERS[id].name}`);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  }
};

window.openCodeModal = function(id = currentSpinnerId) {
  currentSpinnerId = id;
  const modal = document.getElementById('code-modal');
  const title = document.getElementById('modal-spinner-title');
  if (title) title.textContent = `${SPINNERS[id].name} — Integration Code`;
  updateCodeView();
  if (modal) modal.classList.remove('hidden');
};

window.closeCodeModal = function() {
  const modal = document.getElementById('code-modal');
  if (modal) modal.classList.add('hidden');
};

window.switchCodeTab = function(tab) {
  currentTab = tab;
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  updateCodeView();
};

function updateCodeView() {
  const codeEl = document.getElementById('modal-code-content');
  if (!codeEl) return;
  const s = SPINNERS[currentSpinnerId];

  if (currentTab === 'css') {
    codeEl.textContent = s.css;
  } else if (currentTab === 'react') {
    codeEl.textContent = s.react;
  } else if (currentTab === 'html') {
    codeEl.textContent = s.render().trim();
  }
}

window.copyCurrentSnippet = function() {
  const codeEl = document.getElementById('modal-code-content');
  if (!codeEl) return;
  navigator.clipboard.writeText(codeEl.textContent).then(() => {
    showToast('📋 Code copied to clipboard!');
  });
};

// Download Standalone Animated SVG
window.downloadSvgFile = function(id = currentSpinnerId) {
  const s = SPINNERS[id];
  if (!s || !s.standaloneSvg) return;

  const blob = new Blob([s.standaloneSvg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `genlayer-spinner-${id}.svg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`📥 Downloaded genlayer-spinner-${id}.svg!`);
};

// Controls
function initControls() {
  const speedSlider = document.getElementById('speed-slider');
  const sizeSlider = document.getElementById('size-slider');
  const glowSlider = document.getElementById('glow-slider');

  speedSlider?.addEventListener('input', (e) => {
    customSpeed = parseFloat(e.target.value);
    document.documentElement.style.setProperty('--spin-speed', `${customSpeed}s`);
    document.getElementById('speed-val').textContent = `${customSpeed.toFixed(1)}s`;
  });

  sizeSlider?.addEventListener('input', (e) => {
    customSize = parseInt(e.target.value, 10);
    document.documentElement.style.setProperty('--spin-size', `${customSize}px`);
    document.getElementById('size-val').textContent = `${customSize}px`;
  });

  glowSlider?.addEventListener('input', (e) => {
    customGlow = parseFloat(e.target.value);
    document.documentElement.style.setProperty('--glow-intensity', customGlow);
    document.getElementById('glow-val').textContent = `${Math.round(customGlow * 100)}%`;
  });
}

// Environment Switcher
window.setEnvironment = function(env) {
  document.body.className = env === 'space' ? '' : `env-${env}`;
  document.querySelectorAll('.btn-env').forEach(b => {
    b.classList.toggle('active', b.dataset.env === env);
  });
  showToast(`🌐 Environment: ${env.toUpperCase()}`);
};

window.setPalette = function(paletteName) {
  currentPalette = paletteName;
  document.querySelectorAll('.palette-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.palette === paletteName);
  });

  if (paletteName === 'cyberpunk') {
    document.documentElement.style.setProperty('--gl-purple', '#8B5CF6');
    document.documentElement.style.setProperty('--gl-cyan', '#06B6D4');
    document.documentElement.style.setProperty('--gl-pink', '#EC4899');
  } else if (paletteName === 'emerald') {
    document.documentElement.style.setProperty('--gl-purple', '#10B981');
    document.documentElement.style.setProperty('--gl-cyan', '#34D399');
    document.documentElement.style.setProperty('--gl-pink', '#059669');
  } else if (paletteName === 'electric') {
    document.documentElement.style.setProperty('--gl-purple', '#3B82F6');
    document.documentElement.style.setProperty('--gl-cyan', '#60A5FA');
    document.documentElement.style.setProperty('--gl-pink', '#93C5FD');
  }
  showToast(`🎨 Palette: ${paletteName.toUpperCase()}`);
};

// ==========================================================================
// CINEMATIC CONSENSUS PLAYGROUND
// ==========================================================================
function initConsensusPlayground() {
  const btn = document.getElementById('btn-trigger-consensus');
  if (btn) {
    btn.addEventListener('click', runConsensusSimulation);
  }
}

window.runConsensusSimulation = function() {
  if (isConsensusRunning) return;
  isConsensusRunning = true;

  const btn = document.getElementById('btn-trigger-consensus');
  const logStream = document.getElementById('cp-log-stream');
  if (btn) {
    btn.disabled = true;
    btn.textContent = '⏳ Simulating Consensus Round...';
  }
  if (logStream) logStream.innerHTML = '';

  // Reset Node classes
  for (let i = 1; i <= 5; i++) {
    const node = document.getElementById(`cp-node-${i}`);
    if (node) node.className = `cp-validator-node cp-node-${i} ${i === 1 ? 'leader' : ''}`;
  }

  // Reset Lasers
  document.querySelectorAll('.cp-laser-line').forEach(l => l.classList.remove('active'));

  function addLog(msg, type = '') {
    if (!logStream) return;
    const line = document.createElement('div');
    line.className = `log-line ${type}`;
    line.textContent = `[${new Date().toISOString().slice(11, 19)}] ${msg}`;
    logStream.appendChild(line);
    logStream.scrollTop = logStream.scrollHeight;
  }

  addLog('🚀 Leader Validator (Node #1) proposing state transaction...', 'cyan');

  setTimeout(() => {
    addLog('⚡ Broadcasted calldata payload to 4 independent validator nodes...', 'purple');
    document.querySelectorAll('.cp-laser-line').forEach(l => l.classList.add('active'));
  }, 1000);

  setTimeout(() => {
    addLog('🔍 Node #2: Comparative Equivalence Principle PASSED (99.8%)', 'cyan');
    const n2 = document.getElementById('cp-node-2');
    if (n2) n2.classList.add('agree');
  }, 2200);

  setTimeout(() => {
    addLog('🔍 Node #3: Comparative Equivalence Principle PASSED (99.5%)', 'cyan');
    const n3 = document.getElementById('cp-node-3');
    if (n3) n3.classList.add('agree');
  }, 3400);

  setTimeout(() => {
    addLog('🔍 Node #4: Comparative Equivalence Principle PASSED (100.0%)', 'cyan');
    const n4 = document.getElementById('cp-node-4');
    if (n4) n4.classList.add('agree');
  }, 4500);

  setTimeout(() => {
    addLog('🔍 Node #5: Comparative Equivalence Principle PASSED (99.7%)', 'cyan');
    const n5 = document.getElementById('cp-node-5');
    if (n5) n5.classList.add('agree');
  }, 5600);

  setTimeout(() => {
    addLog('🎉 OPTIMISTIC DEMOCRACY FINALIZED: 5/5 Consensus Reached!', 'green');
    addLog('✅ State root committed to GenVM blockchain.', 'green');
    const n1 = document.getElementById('cp-node-1');
    if (n1) n1.classList.add('agree');

    showToast('🎉 Consensus Round Successfully Finalized!');
    if (btn) {
      btn.disabled = false;
      btn.textContent = '⚡ Run Consensus Round Simulation';
    }
    isConsensusRunning = false;
  }, 6800);
};

// Toast
function showToast(msg) {
  const toast = document.getElementById('toast-msg');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
