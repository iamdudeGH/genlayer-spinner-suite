// ==========================================================================
// 5 OFFICIAL MONOCHROMATIC (BLACK & WHITE) GENLAYER VECTOR MOTIONS
// 100% Pure Stark Black, White & Silver. Zero Chromatic Pigment.
// ==========================================================================

export const SPINNERS = {
  prism: {
    id: 'prism',
    name: 'Monolith Dual-Wing',
    tag: '01 / MONOLITH',
    description: 'Official dual-wing GenLayer vector mark in pure stark white, morphing through geometric expansion and high-contrast luminescence.',
    render: () => `
      <div class="gl-spinner-prism">
        <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%; overflow:visible;">
          <polygon class="gl-prism-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
          <polygon class="gl-prism-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
          <polygon class="gl-prism-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
    css: `/* 01: Monolith Dual-Wing */
.gl-spinner-prism {
  width: 130px;
  height: 120px;
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.45));
}
.gl-prism-wing-l {
  transform-origin: 44.26px 45px;
  animation: mono-morph-l 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
.gl-prism-wing-r {
  transform-origin: 53.5px 45px;
  animation: mono-morph-r 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
.gl-prism-core {
  transform-origin: 48.64px 55.7px;
  animation: mono-core-strobe 1.1s ease-in-out infinite;
}
@keyframes mono-morph-l {
  0%, 100% { transform: rotate(0deg) scale(1); fill: #FFFFFF; }
  35% { transform: rotate(-22deg) scale(1.12) translate(-8px, -5px); fill: #D4D4D8; }
  70% { transform: rotate(12deg) scale(0.92) translate(4px, 3px); fill: #A1A1AA; }
}
@keyframes mono-morph-r {
  0%, 100% { transform: rotate(0deg) scale(1); fill: #A1A1AA; }
  35% { transform: rotate(22deg) scale(1.12) translate(8px, -5px); fill: #D4D4D8; }
  70% { transform: rotate(-12deg) scale(0.92) translate(-4px, 3px); fill: #FFFFFF; }
}
@keyframes mono-core-strobe {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 8px #FFFFFF); }
  50% { transform: scale(1.4); filter: drop-shadow(0 0 28px #FFFFFF); }
}`,
    react: `import React from 'react';

export function GenLayerMonolithSpinner({ size = 120 }) {
  return (
    <div style={{ width: size, height: size * 0.94 }} className="gl-spinner-prism">
      <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
        <polygon className="gl-prism-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
        <polygon className="gl-prism-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
        <polygon className="gl-prism-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      </svg>
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-prism" :style="{ width: size + 'px', height: (size * 0.94) + 'px' }">
    <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
      <polygon class="gl-prism-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
      <polygon class="gl-prism-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
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
      @keyframes wl { 0%,100%{transform:rotate(0deg);fill:#FFFFFF;} 35%{transform:rotate(-22deg) scale(1.12);fill:#D4D4D8;} 70%{transform:rotate(12deg) scale(0.92);fill:#A1A1AA;} }
      @keyframes wr { 0%,100%{transform:rotate(0deg);fill:#A1A1AA;} 35%{transform:rotate(22deg) scale(1.12);fill:#D4D4D8;} 70%{transform:rotate(-12deg) scale(0.92);fill:#FFFFFF;} }
      @keyframes cs { 0%,100%{transform:scale(1);} 50%{transform:scale(1.4);} }
    </style>
  </defs>
  <polygon class="w-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
  <polygon class="w-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
  <polygon class="c-s" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
</svg>`
  },

  chrono: {
    id: 'chrono',
    name: 'Monochrome Gyroscope',
    tag: '02 / 3D GIMBAL',
    description: 'Multi-axis 3D spatial gyroscope rings gimbal-rotating continuously in pure white perspective around the levitating GenLayer diamond.',
    render: () => `
      <div class="gl-spinner-chrono">
        <div class="chrono-gimbal-1"></div>
        <div class="chrono-gimbal-2"></div>
        <svg class="chrono-core-mark" viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
          <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
          <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
          <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
    css: `/* 02: Monochrome Gyroscope */
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
  border-top-color: #FFFFFF;
  border-bottom-color: #FFFFFF;
  animation: gimbal-spin-x 2s linear infinite;
}
.chrono-gimbal-2 {
  position: absolute;
  inset: 16%;
  border-radius: 50%;
  border: 1.5px dashed rgba(255, 255, 255, 0.4);
  animation: gimbal-spin-y 2.8s linear infinite;
}
.chrono-core-mark {
  width: 44%;
  height: 44%;
  filter: drop-shadow(0 0 16px rgba(255, 255, 255, 0.6));
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
      <svg className="chrono-core-mark" viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
        <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
        <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
        <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      </svg>
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-chrono" :style="{ width: size + 'px', height: size + 'px' }">
    <div class="chrono-gimbal-1"></div>
    <div class="chrono-gimbal-2"></div>
    <svg class="chrono-core-mark" viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
      <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
      <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
      <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
    </svg>
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
  <circle cx="60" cy="60" r="50" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="20 40" class="r1"/>
  <circle cx="60" cy="60" r="38" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-dasharray="10 20"/>
  <polygon points="56,48 50,60 56,63 40,70 56,36 56,48" fill="#FFFFFF"/>
  <polygon points="64,48 70,60 64,63 80,70 64,36 64,48" fill="#A1A1AA"/>
  <polygon points="60,53 64,60 60,62 56,60 60,53" fill="#FFFFFF"/>
</svg>`
  },

  synapse: {
    id: 'synapse',
    name: 'Monochrome Lattice',
    tag: '03 / NEURAL NODES',
    description: 'Monochromatic coordinate lattice with floating white validator node satellites exchanging consensus pulses.',
    render: () => `
      <div class="gl-spinner-synapse">
        <div class="synapse-ring-outer"></div>
        <div class="synapse-node-satellite"></div>
        <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg" style="width:38%; height:38%; filter:drop-shadow(0 0 14px #FFFFFF);">
          <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
          <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
          <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
    css: `/* 03: Monochrome Lattice */
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
  border: 2px solid rgba(255, 255, 255, 0.1);
}
.synapse-node-satellite {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #FFFFFF;
  box-shadow: 0 0 14px #FFFFFF;
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
      <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg" style={{ width: '38%', height: '38%' }}>
        <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
        <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
        <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      </svg>
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-synapse" :style="{ width: size + 'px', height: size + 'px' }">
    <div class="synapse-ring-outer"></div>
    <div class="synapse-node-satellite"></div>
    <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg" style="width:38%; height:38%;">
      <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
      <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
      <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
    </svg>
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
  <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
  <circle cx="50" cy="6" r="5" fill="#FFFFFF" class="orb"/>
</svg>`
  },

  matrix: {
    id: 'matrix',
    name: 'Monochrome Matrix Hex',
    tag: '04 / VM CONTOUR',
    description: 'High-speed white laser contour beam cycling through the GenVM bytecode pipeline.',
    render: () => `
      <div class="gl-spinner-matrix">
        <svg class="matrix-hex-svg" viewBox="0 0 100 100">
          <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="3" />
          <polygon class="matrix-laser-contour" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" />
        </svg>
        <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg" style="position:absolute; width:36%; height:36%; filter:drop-shadow(0 0 14px #FFFFFF);">
          <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
          <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
          <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
    css: `/* 04: Monochrome Matrix Hex */
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
  stroke: #FFFFFF;
  stroke-width: 4;
  stroke-dasharray: 60 200;
  stroke-linecap: round;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
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
      <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg" style={{ position:'absolute', width:'36%', height:'36%' }}>
        <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
        <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
        <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      </svg>
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
  <polygon class="hex-t" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="none" stroke="#FFFFFF" stroke-width="4"/>
</svg>`
  },

  micro: {
    id: 'micro',
    name: 'Monochrome Micro-Loader',
    tag: '05 / BUTTON SPEED',
    description: 'Ultra-lightweight 60fps pure white arc loader engineered for transactional buttons and micro badges.',
    render: () => `
      <div class="gl-spinner-micro">
        <div class="micro-arc-track"></div>
      </div>
    `,
    css: `/* 05: Monochrome Micro-Loader */
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
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: #FFFFFF;
  border-right-color: rgba(255, 255, 255, 0.4);
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
  <circle cx="50" cy="50" r="42" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-dasharray="140 260" class="mc-rot"/>
</svg>`
  }
};
