// ==========================================================================
// 5 BESPOKE KINETIC VECTOR MOTIONS & EXPORT DEFINITIONS
// ==========================================================================

export const SPINNERS = {
  prism: {
    id: 'prism',
    name: 'Prism Singularity',
    tag: '01 / REFRACTION',
    description: 'Dual-wing official GenLayer mark undergoing mathematical geometric expansion and chromatic laser diffraction.',
    render: () => `
      <div class="gl-spinner-prism">
        <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%; overflow:visible;">
          <defs>
            <linearGradient id="prism-g1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#00F0FF" />
              <stop offset="100%" stop-color="#D4FF00" />
            </linearGradient>
            <linearGradient id="prism-g2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#D4FF00" />
              <stop offset="100%" stop-color="#FF9E00" />
            </linearGradient>
          </defs>
          <polygon class="gl-prism-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="url(#prism-g1)"/>
          <polygon class="gl-prism-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="url(#prism-g2)"/>
          <polygon class="gl-prism-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
    css: `/* 01: Prism Singularity */
.gl-spinner-prism {
  width: 130px;
  height: 120px;
  filter: drop-shadow(0 0 20px rgba(0, 240, 255, 0.5));
}
.gl-prism-wing-l {
  transform-origin: 44.26px 45px;
  animation: prism-morph-l 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
.gl-prism-wing-r {
  transform-origin: 53.5px 45px;
  animation: prism-morph-r 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
.gl-prism-core {
  transform-origin: 48.64px 55.7px;
  animation: prism-core-strobe 1.1s ease-in-out infinite;
}
@keyframes prism-morph-l {
  0%, 100% { transform: rotate(0deg) scale(1); fill: #00F0FF; }
  35% { transform: rotate(-22deg) scale(1.12) translate(-8px, -5px); fill: #D4FF00; }
  70% { transform: rotate(12deg) scale(0.92) translate(4px, 3px); fill: #FF9E00; }
}
@keyframes prism-morph-r {
  0%, 100% { transform: rotate(0deg) scale(1); fill: #FF9E00; }
  35% { transform: rotate(22deg) scale(1.12) translate(8px, -5px); fill: #D4FF00; }
  70% { transform: rotate(-12deg) scale(0.92) translate(-4px, 3px); fill: #00F0FF; }
}
@keyframes prism-core-strobe {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 8px #FFFFFF); }
  50% { transform: scale(1.4); filter: drop-shadow(0 0 24px #00F0FF); }
}`,
    react: `import React from 'react';

export function GenLayerPrismSpinner({ size = 120 }) {
  return (
    <div style={{ width: size, height: size * 0.94 }} className="gl-spinner-prism">
      <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
        <polygon className="gl-prism-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#00F0FF"/>
        <polygon className="gl-prism-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#FF9E00"/>
        <polygon className="gl-prism-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      </svg>
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-prism" :style="{ width: size + 'px', height: (size * 0.94) + 'px' }">
    <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
      <polygon class="gl-prism-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#00F0FF"/>
      <polygon class="gl-prism-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#FF9E00"/>
      <polygon class="gl-prism-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
    </svg>
  </div>
</template>

<script setup>
defineProps({ size: { type: Number, default: 120 } });
</script>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.76 91.93" width="200" height="190">
  <defs>
    <style>
      .w-l { transform-origin: 44.26px 45px; animation: wl 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite; }
      .w-r { transform-origin: 53.5px 45px; animation: wr 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite; }
      .c-s { transform-origin: 48.64px 55.7px; animation: cs 1.1s ease-in-out infinite; }
      @keyframes wl { 0%,100%{transform:rotate(0deg);fill:#00F0FF;} 35%{transform:rotate(-22deg) scale(1.12);fill:#D4FF00;} 70%{transform:rotate(12deg) scale(0.92);fill:#FF9E00;} }
      @keyframes wr { 0%,100%{transform:rotate(0deg);fill:#FF9E00;} 35%{transform:rotate(22deg) scale(1.12);fill:#D4FF00;} 70%{transform:rotate(-12deg) scale(0.92);fill:#00F0FF;} }
      @keyframes cs { 0%,100%{transform:scale(1);} 50%{transform:scale(1.4);} }
    </style>
  </defs>
  <polygon class="w-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#00F0FF"/>
  <polygon class="w-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#FF9E00"/>
  <polygon class="c-s" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
</svg>`
  },

  chrono: {
    id: 'chrono',
    name: 'Chrono Gyroscope',
    tag: '02 / 3D GIMBAL',
    description: 'Multi-axis 3D spatial gyroscope rings gimbal-rotating continuously around the levitating GenLayer diamond.',
    render: () => `
      <div class="gl-spinner-chrono">
        <div class="chrono-gimbal-1"></div>
        <div class="chrono-gimbal-2"></div>
        <img class="chrono-core-mark" src="/genlayer-mark.svg" alt="Core" />
      </div>
    `,
    css: `/* 02: Chrono Gyroscope */
.gl-spinner-chrono {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 600px;
}
.chrono-gimbal-1 {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: #00F0FF;
  border-bottom-color: #00F0FF;
  animation: gimbal-spin-x 2s linear infinite;
}
.chrono-gimbal-2 {
  position: absolute;
  inset: 16%;
  border-radius: 50%;
  border: 1.5px dashed rgba(212, 255, 0, 0.6);
  animation: gimbal-spin-y 2.8s linear infinite;
}
.chrono-core-mark {
  width: 44%;
  height: 44%;
  animation: core-levitate 2s ease-in-out infinite;
}
@keyframes gimbal-spin-x { 0%{transform:rotateX(0deg) rotateZ(0deg);} 100%{transform:rotateX(360deg) rotateZ(360deg);} }
@keyframes gimbal-spin-y { 0%{transform:rotateY(0deg) rotateZ(360deg);} 100%{transform:rotateY(360deg) rotateZ(0deg);} }
@keyframes core-levitate { 0%,100%{transform:translateY(0px) scale(0.95);} 50%{transform:translateY(-6px) scale(1.05);} }`,
    react: `export function GenLayerChronoSpinner({ size = 120 }) {
  return (
    <div className="gl-spinner-chrono" style={{ width: size, height: size }}>
      <div className="chrono-gimbal-1" />
      <div className="chrono-gimbal-2" />
      <img className="chrono-core-mark" src="/genlayer-mark.svg" alt="GenLayer" />
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-chrono" :style="{ width: size + 'px', height: size + 'px' }">
    <div class="chrono-gimbal-1"></div>
    <div class="chrono-gimbal-2"></div>
    <img class="chrono-core-mark" src="/genlayer-mark.svg" alt="GenLayer" />
  </div>
</template>

<script setup>
defineProps({ size: { type: Number, default: 120 } });
</script>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="200" height="200">
  <defs>
    <style>
      .r1 { animation: spin1 2s linear infinite; transform-origin: center; }
      @keyframes spin1 { to { transform: rotate(360deg); } }
    </style>
  </defs>
  <circle cx="60" cy="60" r="50" fill="none" stroke="#00F0FF" stroke-width="2" stroke-dasharray="20 40" class="r1"/>
  <circle cx="60" cy="60" r="38" fill="none" stroke="#D4FF00" stroke-width="1.5" stroke-dasharray="10 20"/>
  <polygon points="56,48 50,60 56,63 40,70 56,36 56,48" fill="#00F0FF"/>
  <polygon points="64,48 70,60 64,63 80,70 64,36 64,48" fill="#FF9E00"/>
  <polygon points="60,53 64,60 60,62 56,60 60,53" fill="#FFFFFF"/>
</svg>`
  },

  synapse: {
    id: 'synapse',
    name: 'Synaptic Lattice',
    tag: '03 / NEURAL NODES',
    description: 'Quantum neural coordinate lattice with floating validator node satellites exchanging consensus pulses.',
    render: () => `
      <div class="gl-spinner-synapse">
        <div class="synapse-ring-outer"></div>
        <div class="synapse-node-satellite"></div>
        <img src="/genlayer-mark.svg" style="width:38%; height:38%; filter:drop-shadow(0 0 10px #00F0FF);" alt="Core" />
      </div>
    `,
    css: `/* 03: Synaptic Lattice */
.gl-spinner-synapse {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.synapse-ring-outer {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.08);
}
.synapse-node-satellite {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #00F0FF;
  box-shadow: 0 0 12px #00F0FF;
  animation: orbit-satellite 2s linear infinite;
}
@keyframes orbit-satellite {
  from { transform: rotate(0deg) translateX(55px) rotate(0deg); }
  to { transform: rotate(360deg) translateX(55px) rotate(-360deg); }
}`,
    react: `export function GenLayerSynapseSpinner({ size = 120 }) {
  return (
    <div className="gl-spinner-synapse" style={{ width: size, height: size }}>
      <div className="synapse-ring-outer" />
      <div className="synapse-node-satellite" />
      <img src="/genlayer-mark.svg" style={{ width: '38%', height: '38%' }} alt="Synapse" />
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-synapse" :style="{ width: size + 'px', height: size + 'px' }">
    <div class="synapse-ring-outer"></div>
    <div class="synapse-node-satellite"></div>
    <img src="/genlayer-mark.svg" style="width:38%; height:38%;" alt="Synapse" />
  </div>
</template>

<script setup>
defineProps({ size: { type: Number, default: 120 } });
</script>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <style>
      .orb { animation: rot-orb 2s linear infinite; transform-origin: center; }
      @keyframes rot-orb { to { transform: rotate(360deg); } }
    </style>
  </defs>
  <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
  <circle cx="50" cy="6" r="5" fill="#00F0FF" class="orb"/>
</svg>`
  },

  matrix: {
    id: 'matrix',
    name: 'Matrix Laser Beam',
    tag: '04 / VM CONTOUR',
    description: 'High-speed cybernetic hexagonal beam tracing through the GenVM bytecode execution pipeline.',
    render: () => `
      <div class="gl-spinner-matrix">
        <svg class="matrix-hex-svg" viewBox="0 0 100 100">
          <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="3" />
          <polygon class="matrix-laser-contour" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" />
        </svg>
        <img src="/genlayer-mark.svg" style="position:absolute; width:36%; height:36%; filter:drop-shadow(0 0 12px #D4FF00);" alt="GenVM" />
      </div>
    `,
    css: `/* 04: Matrix Laser Beam */
.gl-spinner-matrix {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.matrix-hex-svg {
  width: 100%;
  height: 100%;
  animation: matrix-hex-rot 4s linear infinite;
}
.matrix-laser-contour {
  fill: none;
  stroke: #D4FF00;
  stroke-width: 4;
  stroke-dasharray: 60 200;
  stroke-linecap: round;
  animation: matrix-laser-trace 2s ease-in-out infinite;
}
@keyframes matrix-laser-trace { 0%{stroke-dashoffset: 0;} 100%{stroke-dashoffset: -260;} }
@keyframes matrix-hex-rot { to { transform: rotate(360deg); } }`,
    react: `export function GenLayerMatrixSpinner({ size = 120 }) {
  return (
    <div className="gl-spinner-matrix" style={{ width: size, height: size }}>
      <svg className="matrix-hex-svg" viewBox="0 0 100 100">
        <polygon className="matrix-laser-contour" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" />
      </svg>
      <img src="/genlayer-mark.svg" style={{ position:'absolute', width:'36%', height:'36%' }} alt="GenVM" />
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-matrix" :style="{ width: size + 'px', height: size + 'px' }">
    <svg class="matrix-hex-svg" viewBox="0 0 100 100">
      <polygon class="matrix-laser-contour" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" />
    </svg>
  </div>
</template>

<script setup>
defineProps({ size: { type: Number, default: 120 } });
</script>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <style>
      .hex-t { animation: ht 2s ease-in-out infinite; stroke-dasharray: 60 200; stroke-linecap: round; }
      @keyframes ht { 0%{stroke-dashoffset:0;} 100%{stroke-dashoffset:-260;} }
    </style>
  </defs>
  <polygon class="hex-t" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="none" stroke="#D4FF00" stroke-width="4"/>
</svg>`
  },

  micro: {
    id: 'micro',
    name: 'Atom Microlight',
    tag: '05 / BUTTON SPEED',
    description: 'Ultra-lightweight 60fps dual-gradient arc loader engineered for transactional buttons and micro badges.',
    render: () => `
      <div class="gl-spinner-micro">
        <div class="micro-arc-track"></div>
      </div>
    `,
    css: `/* 05: Atom Microlight */
.gl-spinner-micro {
  width: 48px;
  height: 48px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.micro-arc-track {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.08);
  border-top-color: #00F0FF;
  border-right-color: #D4FF00;
  animation: micro-spin 1.2s linear infinite;
}
@keyframes micro-spin { to { transform: rotate(360deg); } }`,
    react: `export function GenLayerMicroSpinner({ size = 32 }) {
  return (
    <div className="gl-spinner-micro" style={{ width: size, height: size }}>
      <div className="micro-arc-track" />
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-micro" :style="{ width: size + 'px', height: size + 'px' }">
    <div class="micro-arc-track"></div>
  </div>
</template>

<script setup>
defineProps({ size: { type: Number, default: 32 } });
</script>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <style>
      .mc-rot { animation: mcr 1s linear infinite; transform-origin: center; }
      @keyframes mcr { to { transform: rotate(360deg); } }
    </style>
  </defs>
  <circle cx="50" cy="50" r="42" fill="none" stroke="#00F0FF" stroke-width="6" stroke-dasharray="140 260" class="mc-rot"/>
</svg>`
  }
};
