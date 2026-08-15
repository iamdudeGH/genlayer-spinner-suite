// ==========================================================================
// 5 BESPOKE MONOCHROMATIC (BLACK & WHITE) GENLAYER MOTION ENGINES
// Engineered strictly from official GenLayer Brand Geometry
// ==========================================================================

export const SPINNERS = {
  quantum: {
    id: 'quantum',
    name: 'Quantum Monolith',
    tag: '01 / FLAGSHIP CORE',
    description: 'The official GenLayer dual-wing vector mark morphing through mathematical expansion, specular white trail reflections, and a hyper-pulsing diamond core.',
    render: () => `
      <div class="gl-spinner-quantum">
        <svg class="gl-quantum-svg" viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mono-grad-l" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FFFFFF" />
              <stop offset="100%" stop-color="#71717A" />
            </linearGradient>
            <linearGradient id="mono-grad-r" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#A1A1AA" />
              <stop offset="100%" stop-color="#FFFFFF" />
            </linearGradient>
          </defs>
          <polygon class="gl-wing-left" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="url(#mono-grad-l)"/>
          <polygon class="gl-wing-right" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="url(#mono-grad-r)"/>
          <polygon class="gl-core-diamond" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
    css: `/* 01: Quantum Monolith */
.gl-spinner-quantum {
  position: relative;
  width: 130px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 24px rgba(255, 255, 255, 0.5));
  animation: gl-levitate 3s ease-in-out infinite;
}
.gl-quantum-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}
.gl-wing-left {
  transform-origin: 44.26px 45px;
  animation: gl-mono-wing-l 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
.gl-wing-right {
  transform-origin: 53.5px 45px;
  animation: gl-mono-wing-r 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
.gl-core-diamond {
  transform-origin: 48.64px 55.7px;
  animation: gl-mono-diamond 1.1s ease-in-out infinite;
}
@keyframes gl-mono-wing-l {
  0%, 100% { transform: rotate(0deg) scale(1); opacity: 1; }
  35% { transform: rotate(-24deg) scale(1.14) translate(-9px, -6px); opacity: 0.8; }
  70% { transform: rotate(14deg) scale(0.92) translate(4px, 3px); opacity: 0.95; }
}
@keyframes gl-mono-wing-r {
  0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.95; }
  35% { transform: rotate(24deg) scale(1.14) translate(9px, -6px); opacity: 0.8; }
  70% { transform: rotate(-14deg) scale(0.92) translate(-4px, 3px); opacity: 1; }
}
@keyframes gl-mono-diamond {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 8px #FFFFFF); }
  50% { transform: scale(1.45); filter: drop-shadow(0 0 32px #FFFFFF); }
}
@keyframes gl-levitate {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}`,
    react: `import React from 'react';

export function GenLayerQuantumSpinner({ size = 120 }) {
  return (
    <div style={{ width: size, height: size * 0.94 }} className="gl-spinner-quantum">
      <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
        <polygon className="gl-wing-left" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
        <polygon className="gl-wing-right" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
        <polygon className="gl-core-diamond" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      </svg>
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-quantum" :style="{ width: size + 'px', height: (size * 0.94) + 'px' }">
    <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
      <polygon class="gl-wing-left" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
      <polygon class="gl-wing-right" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
      <polygon class="gl-core-diamond" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
    </svg>
  </div>
</template>

<script setup>
defineProps({ size: { type: Number, default: 120 } });
</script>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.76 91.93" width="200" height="190">
  <defs>
    <style>
      .wl { transform-origin: 44.26px 45px; animation: wl-a 2.2s cubic-bezier(0.65,0,0.35,1) infinite; }
      .wr { transform-origin: 53.5px 45px; animation: wr-a 2.2s cubic-bezier(0.65,0,0.35,1) infinite; }
      .cd { transform-origin: 48.64px 55.7px; animation: cd-a 1.1s ease-in-out infinite; }
      @keyframes wl-a { 0%,100%{transform:rotate(0deg);fill:#FFFFFF;} 35%{transform:rotate(-24deg) scale(1.14);fill:#D4D4D8;} 70%{transform:rotate(14deg) scale(0.92);fill:#A1A1AA;} }
      @keyframes wr-a { 0%,100%{transform:rotate(0deg);fill:#A1A1AA;} 35%{transform:rotate(24deg) scale(1.14);fill:#D4D4D8;} 70%{transform:rotate(-14deg) scale(0.92);fill:#FFFFFF;} }
      @keyframes cd-a { 0%,100%{transform:scale(1);} 50%{transform:scale(1.45);} }
    </style>
  </defs>
  <polygon class="wl" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
  <polygon class="wr" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
  <polygon class="cd" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
</svg>`
  },

  orbit: {
    id: 'orbit',
    name: 'Consensus 3D Orbit',
    tag: '02 / VALIDATOR GIMBAL',
    description: 'Dual counter-rotating circular orbital tracks carrying glowing white validator nodes in spatial 3D perspective around the GenLayer core.',
    render: () => `
      <div class="gl-spinner-orbit">
        <div class="orbit-track-outer">
          <div class="validator-node-dot vn-top"></div>
          <div class="validator-node-dot vn-bottom"></div>
        </div>
        <div class="orbit-track-inner">
          <div class="validator-node-dot vn-left"></div>
        </div>
        <svg class="gl-orbit-center-mark" viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
          <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
          <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#FFFFFF"/>
          <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
    css: `/* 02: Consensus 3D Orbit */
.gl-spinner-orbit {
  position: relative;
  width: 130px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.orbit-track-outer {
  position: absolute;
  width: 95%;
  height: 95%;
  border-radius: 50%;
  border: 1.5px dashed rgba(255, 255, 255, 0.25);
  border-top-color: #FFFFFF;
  animation: spin-cw 3s linear infinite;
}
.orbit-track-inner {
  position: absolute;
  width: 72%;
  height: 72%;
  border-radius: 50%;
  border: 1.5px dashed rgba(255, 255, 255, 0.15);
  border-bottom-color: #FFFFFF;
  animation: spin-ccw 2.2s linear infinite;
}
.validator-node-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #FFFFFF;
  box-shadow: 0 0 12px #FFFFFF;
}
.vn-top { top: -4px; left: 50%; transform: translateX(-50%); }
.vn-bottom { bottom: -4px; left: 50%; transform: translateX(-50%); }
.vn-left { top: 50%; left: -4px; transform: translateY(-50%); }
.gl-orbit-center-mark {
  width: 38%;
  height: 38%;
  filter: drop-shadow(0 0 16px rgba(255, 255, 255, 0.65));
  animation: pulse-mark 2s ease-in-out infinite;
}
@keyframes spin-cw { to { transform: rotate(360deg); } }
@keyframes spin-ccw { to { transform: rotate(-360deg); } }
@keyframes pulse-mark {
  0%, 100% { transform: scale(0.92); opacity: 0.85; }
  50% { transform: scale(1.08); opacity: 1; filter: drop-shadow(0 0 24px #FFFFFF); }
}`,
    react: `export function GenLayerOrbitSpinner({ size = 120 }) {
  return (
    <div className="gl-spinner-orbit" style={{ width: size, height: size }}>
      <div className="orbit-track-outer"><div className="validator-node-dot vn-top"/><div className="validator-node-dot vn-bottom"/></div>
      <div className="orbit-track-inner"><div className="validator-node-dot vn-left"/></div>
      <svg className="gl-orbit-center-mark" viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
        <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
        <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#FFFFFF"/>
        <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      </svg>
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-orbit" :style="{ width: size + 'px', height: size + 'px' }">
    <div class="orbit-track-outer"><div class="validator-node-dot vn-top"></div></div>
    <div class="orbit-track-inner"><div class="validator-node-dot vn-left"></div></div>
  </div>
</template>

<script setup>
defineProps({ size: { type: Number, default: 120 } });
</script>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="200" height="200">
  <defs>
    <style>
      .r1 { animation: s1 3s linear infinite; transform-origin: center; }
      @keyframes s1 { to { transform: rotate(360deg); } }
    </style>
  </defs>
  <circle cx="60" cy="60" r="50" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="20 40" class="r1"/>
  <circle cx="60" cy="10" r="4" fill="#FFFFFF" class="r1"/>
</svg>`
  },

  synapse: {
    id: 'synapse',
    name: 'Synaptic Monolith',
    tag: '03 / AI EQUIVALENCE',
    description: 'Concentric precision rings with harmonic rotating node beacons built for AI model consensus and Equivalence Principle checks.',
    render: () => `
      <div class="gl-spinner-synapse">
        <div class="synapse-ring-outer"></div>
        <div class="synapse-node-satellite"></div>
        <svg class="gl-synapse-mark" viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
          <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
          <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
          <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
    css: `/* 03: Synaptic Monolith */
.gl-spinner-synapse {
  position: relative;
  width: 130px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.synapse-ring-outer {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.08);
  border-top-color: #FFFFFF;
  border-bottom-color: rgba(255, 255, 255, 0.3);
  animation: spin-cw 2.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
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
.gl-synapse-mark {
  width: 40%;
  height: 40%;
  filter: drop-shadow(0 0 16px rgba(255, 255, 255, 0.6));
}
@keyframes orbit-satellite {
  from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
  to { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
}`,
    react: `export function GenLayerSynapseSpinner({ size = 120 }) {
  return (
    <div className="gl-spinner-synapse" style={{ width: size, height: size }}>
      <div className="synapse-ring-outer" />
      <div className="synapse-node-satellite" />
      <svg className="gl-synapse-mark" viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
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
  </div>
</template>

<script setup>
defineProps({ size: { type: Number, default: 120 } });
</script>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <style>
      .orb { animation: r-orb 2s linear infinite; transform-origin: center; }
      @keyframes r-orb { to { transform: rotate(360deg); } }
    </style>
  </defs>
  <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
  <circle cx="50" cy="6" r="5" fill="#FFFFFF" class="orb"/>
</svg>`
  },

  matrix: {
    id: 'matrix',
    name: 'GenVM Hex Pulsar',
    tag: '04 / VM EXECUTION',
    description: 'Precision cybernetic hexagon with a glowing white laser dash beam tracing through GenVM bytecode execution.',
    render: () => `
      <div class="gl-spinner-matrix">
        <svg class="matrix-hex-svg" viewBox="0 0 100 100">
          <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="3" />
          <polygon class="matrix-laser-contour" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" />
        </svg>
        <svg class="matrix-core-mark" viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
          <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
          <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#FFFFFF"/>
          <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
    css: `/* 04: GenVM Hex Pulsar */
.gl-spinner-matrix {
  position: relative;
  width: 130px;
  height: 130px;
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
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.85));
  animation: matrix-laser-trace 2s ease-in-out infinite;
}
.matrix-core-mark {
  position: absolute;
  width: 36%;
  height: 36%;
  filter: drop-shadow(0 0 16px rgba(255, 255, 255, 0.7));
  animation: pulse-mark 2s infinite ease-in-out;
}
@keyframes matrix-laser-trace { 0%{stroke-dashoffset: 0;} 100%{stroke-dashoffset: -260;} }
@keyframes matrix-hex-rot { to { transform: rotate(360deg); } }`,
    react: `export function GenLayerMatrixSpinner({ size = 120 }) {
  return (
    <div className="gl-spinner-matrix" style={{ width: size, height: size }}>
      <svg className="matrix-hex-svg" viewBox="0 0 100 100">
        <polygon className="matrix-laser-contour" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" />
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
    name: 'Minimalist Micro-Loader',
    tag: '05 / BUTTON SPEED',
    description: 'Ultra-lightweight 60fps dual-gradient pure white arc with a floating center diamond dot for transaction buttons.',
    render: () => `
      <div class="gl-spinner-micro">
        <svg class="gl-micro-svg" viewBox="0 0 100 100">
          <circle class="gl-micro-track" cx="50" cy="50" r="42" />
          <circle class="gl-micro-spinner" cx="50" cy="50" r="42" />
        </svg>
        <div class="gl-micro-dot"></div>
      </div>
    `,
    css: `/* 05: Minimalist Micro-Loader */
.gl-spinner-micro {
  width: 54px;
  height: 54px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gl-micro-svg {
  width: 100%;
  height: 100%;
  animation: gl-spin-cw 1.2s linear infinite;
}
.gl-micro-track {
  fill: none;
  stroke: rgba(255, 255, 255, 0.08);
  stroke-width: 6;
}
.gl-micro-spinner {
  fill: none;
  stroke: #FFFFFF;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 160 270;
  animation: gl-micro-dash 1.2s ease-in-out infinite;
}
.gl-micro-dot {
  position: absolute;
  width: 20%;
  height: 20%;
  border-radius: 50%;
  background: #FFFFFF;
  box-shadow: 0 0 12px #FFFFFF;
  animation: gl-levitate 1.5s ease-in-out infinite;
}
@keyframes gl-micro-dash {
  0% { stroke-dashoffset: 0; }
  50% { stroke-dashoffset: -130; }
  100% { stroke-dashoffset: -260; }
}`,
    react: `export function GenLayerMicroLoader({ size = 36 }) {
  return (
    <div className="gl-spinner-micro" style={{ width: size, height: size }}>
      <svg className="gl-micro-svg" viewBox="0 0 100 100">
        <circle className="gl-micro-track" cx="50" cy="50" r="42" />
        <circle className="gl-micro-spinner" cx="50" cy="50" r="42" />
      </svg>
      <div className="gl-micro-dot" />
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-micro" :style="{ width: size + 'px', height: size + 'px' }">
    <svg class="gl-micro-svg" viewBox="0 0 100 100">
      <circle class="gl-micro-track" cx="50" cy="50" r="42" />
      <circle class="gl-micro-spinner" cx="50" cy="50" r="42" />
    </svg>
    <div class="gl-micro-dot"></div>
  </div>
</template>

<script setup>
defineProps({ size: { type: Number, default: 36 } });
</script>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <circle cx="50" cy="50" r="42" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-dasharray="140 260"/>
</svg>`
  }
};
