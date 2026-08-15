// ==========================================================================
// GENLAYER SPINNER DEFINITIONS & MULTI-FRAMEWORK EXPORT TEMPLATES
// ==========================================================================

export const SPINNERS = {
  quantum: {
    id: 'quantum',
    name: 'Quantum Core (Signature)',
    tag: 'Flagship Mark',
    description: 'Official dual-wing GenLayer vector mark with pulsing diamond crystal core in 3D floating perspective.',
    render: () => `
      <div class="gl-spinner-quantum">
        <svg class="gl-quantum-svg" viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gl-qg-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#00F0FF" />
              <stop offset="100%" stop-color="#818CF8" />
            </linearGradient>
            <linearGradient id="gl-qg-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#818CF8" />
              <stop offset="100%" stop-color="#FFB800" />
            </linearGradient>
          </defs>
          <polygon class="gl-wing-left" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="url(#gl-qg-1)"/>
          <polygon class="gl-wing-right" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="url(#gl-qg-2)"/>
          <polygon class="gl-core-diamond" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
    css: `/* GenLayer Quantum Core Spinner */
.gl-spinner-quantum {
  width: 120px;
  height: 110px;
  animation: gl-floating 3s ease-in-out infinite;
  filter: drop-shadow(0 0 16px rgba(0, 240, 255, 0.6));
}
.gl-wing-left {
  transform-origin: 44.26px 45px;
  animation: gl-wing-morph-left 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
.gl-wing-right {
  transform-origin: 53.5px 45px;
  animation: gl-wing-morph-right 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
.gl-core-diamond {
  transform-origin: 48.64px 55.7px;
  animation: gl-core-pulse 1.1s ease-in-out infinite;
}
@keyframes gl-wing-morph-left {
  0%, 100% { transform: rotate(0deg) scale(1); fill: #00F0FF; }
  35% { transform: rotate(-18deg) scale(1.08) translate(-6px, -4px); fill: #818CF8; }
  70% { transform: rotate(10deg) scale(0.92) translate(3px, 2px); fill: #FFB800; }
}
@keyframes gl-wing-morph-right {
  0%, 100% { transform: rotate(0deg) scale(1); fill: #FFB800; }
  35% { transform: rotate(18deg) scale(1.08) translate(6px, -4px); fill: #818CF8; }
  70% { transform: rotate(-10deg) scale(0.92) translate(-3px, 2px); fill: #00F0FF; }
}
@keyframes gl-core-pulse {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 8px #FFFFFF); }
  50% { transform: scale(1.35); filter: drop-shadow(0 0 20px #00F0FF); }
}
@keyframes gl-floating {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}`,
    react: `import React from 'react';

export function GenLayerQuantumSpinner({ size = 120 }) {
  return (
    <div style={{ width: size, height: size * 0.94 }} className="gl-spinner-quantum">
      <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
        <polygon className="gl-wing-left" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#00F0FF"/>
        <polygon className="gl-wing-right" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#FFB800"/>
        <polygon className="gl-core-diamond" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      </svg>
    </div>
  );
}`,
    vue: `<template>
  <div :style="{ width: size + 'px', height: (size * 0.94) + 'px' }" class="gl-spinner-quantum">
    <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
      <polygon class="gl-wing-left" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#00F0FF"/>
      <polygon class="gl-wing-right" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#FFB800"/>
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
      .w-left { transform-origin: 44.26px 45px; animation: w-l 2.2s ease-in-out infinite; }
      .w-right { transform-origin: 53.5px 45px; animation: w-r 2.2s ease-in-out infinite; }
      .c-diam { transform-origin: 48.64px 55.7px; animation: c-p 1.1s ease-in-out infinite; }
      @keyframes w-l { 0%,100%{transform:rotate(0deg);fill:#00F0FF;} 35%{transform:rotate(-18deg) scale(1.08);fill:#818CF8;} 70%{transform:rotate(10deg);fill:#FFB800;} }
      @keyframes w-r { 0%,100%{transform:rotate(0deg);fill:#FFB800;} 35%{transform:rotate(18deg) scale(1.08);fill:#818CF8;} 70%{transform:rotate(-10deg);fill:#00F0FF;} }
      @keyframes c-p { 0%,100%{transform:scale(1);} 50%{transform:scale(1.35);} }
    </style>
  </defs>
  <polygon class="w-left" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#00F0FF"/>
  <polygon class="w-right" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#FFB800"/>
  <polygon class="c-diam" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
</svg>`
  },

  orbit: {
    id: 'orbit',
    name: 'Consensus Orbit Matrix',
    tag: 'Validator Nodes',
    description: 'Dual counter-rotating orbital rings carrying validator node beacons around the central GenLayer core.',
    render: () => `
      <div class="gl-spinner-orbit">
        <div class="orbit-ring orbit-ring-1">
          <div class="validator-node vn-1"></div>
        </div>
        <div class="orbit-ring orbit-ring-2">
          <div class="validator-node vn-2"></div>
          <div class="validator-node vn-3"></div>
        </div>
        <img class="gl-orbit-center" src="/genlayer-mark.svg" alt="GenLayer Core" />
      </div>
    `,
    css: `/* GenLayer Consensus Orbit */
.gl-spinner-orbit {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.orbit-ring {
  position: absolute;
  border-radius: 50%;
}
.orbit-ring-1 {
  width: 75%;
  height: 75%;
  border: 1.5px dashed rgba(0, 240, 255, 0.4);
  border-top-color: #00F0FF;
  animation: spin-cw 2s linear infinite;
}
.orbit-ring-2 {
  width: 100%;
  height: 100%;
  border: 1.5px dashed rgba(255, 184, 0, 0.4);
  border-bottom-color: #FFB800;
  animation: spin-ccw 2.8s linear infinite;
}
.validator-node {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00F0FF;
  box-shadow: 0 0 10px #00F0FF;
}
.vn-1 { top: -4px; left: 50%; transform: translateX(-50%); }
.vn-2 { bottom: -4px; left: 50%; transform: translateX(-50%); background: #FFB800; }
.vn-3 { top: 50%; right: -4px; transform: translateY(-50%); background: #818CF8; }
@keyframes spin-cw { to { transform: rotate(360deg); } }
@keyframes spin-ccw { to { transform: rotate(-360deg); } }`,
    react: `export function GenLayerOrbitSpinner({ size = 120 }) {
  return (
    <div className="gl-spinner-orbit" style={{ width: size, height: size }}>
      <div className="orbit-ring orbit-ring-1"><div className="validator-node vn-1"/></div>
      <div className="orbit-ring orbit-ring-2"><div className="validator-node vn-2"/><div className="validator-node vn-3"/></div>
      <img className="gl-orbit-center" src="/genlayer-mark.svg" alt="GenLayer" />
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-orbit" :style="{ width: size + 'px', height: size + 'px' }">
    <div class="orbit-ring orbit-ring-1"><div class="validator-node vn-1"></div></div>
    <div class="orbit-ring orbit-ring-2"><div class="validator-node vn-2"></div><div class="validator-node vn-3"></div></div>
    <img class="gl-orbit-center" src="/genlayer-mark.svg" alt="GenLayer" />
  </div>
</template>

<script setup>
defineProps({ size: { type: Number, default: 120 } });
</script>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="200" height="200">
  <defs>
    <style>
      .r-1 { animation: rot-1 2s linear infinite; transform-origin: center; }
      .r-2 { animation: rot-2 2.8s linear infinite; transform-origin: center; }
      @keyframes rot-1 { to { transform: rotate(360deg); } }
      @keyframes rot-2 { to { transform: rotate(-360deg); } }
    </style>
  </defs>
  <circle cx="60" cy="60" r="42" fill="none" stroke="#00F0FF" stroke-width="2" stroke-dasharray="6 6" class="r-1"/>
  <circle cx="60" cy="60" r="54" fill="none" stroke="#FFB800" stroke-width="2" stroke-dasharray="8 8" class="r-2"/>
  <circle cx="60" cy="18" r="4" fill="#00F0FF" class="r-1"/>
  <circle cx="60" cy="114" r="4" fill="#FFB800" class="r-2"/>
  <polygon points="56,48 50,60 56,63 40,70 56,36 56,48" fill="#00F0FF"/>
  <polygon points="64,48 70,60 64,63 80,70 64,36 64,48" fill="#FFB800"/>
  <polygon points="60,53 64,60 60,62 56,60 60,53" fill="#FFFFFF"/>
</svg>`
  },

  hex: {
    id: 'hex',
    name: 'GenVM Hex Laser Pulsar',
    tag: 'VM Execution',
    description: 'Precision cybernetic hexagon with glowing laser dash tracing and breathing GenLayer core for intelligent execution.',
    render: () => `
      <div class="gl-spinner-hex">
        <svg class="hex-svg" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#00F0FF" />
              <stop offset="50%" stop-color="#818CF8" />
              <stop offset="100%" stop-color="#FFB800" />
            </linearGradient>
          </defs>
          <polygon class="hex-track" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" />
          <polygon class="hex-laser" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" />
        </svg>
        <img class="hex-core-mark" src="/genlayer-mark.svg" alt="GenVM Core" />
      </div>
    `,
    css: `/* GenVM Hex Laser Pulsar */
.gl-spinner-hex {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hex-svg {
  width: 100%;
  height: 100%;
  animation: hex-rotate 3.5s linear infinite;
}
.hex-track {
  fill: none;
  stroke: rgba(255, 255, 255, 0.08);
  stroke-width: 3;
}
.hex-laser {
  fill: none;
  stroke: url(#hex-gradient);
  stroke-width: 4;
  stroke-dasharray: 60 180;
  stroke-linecap: round;
  animation: hex-dash 2s ease-in-out infinite;
}
@keyframes hex-dash {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -240; }
}
@keyframes hex-rotate { to { transform: rotate(360deg); } }`,
    react: `export function GenLayerHexSpinner({ size = 120 }) {
  return (
    <div className="gl-spinner-hex" style={{ width: size, height: size }}>
      <svg className="hex-svg" viewBox="0 0 100 100">
        <polygon className="hex-track" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" />
        <polygon className="hex-laser" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" />
      </svg>
      <img className="hex-core-mark" src="/genlayer-mark.svg" alt="GenVM" />
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-hex" :style="{ width: size + 'px', height: size + 'px' }">
    <svg class="hex-svg" viewBox="0 0 100 100">
      <polygon class="hex-track" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" />
      <polygon class="hex-laser" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" />
    </svg>
    <img class="hex-core-mark" src="/genlayer-mark.svg" alt="GenVM" />
  </div>
</template>

<script setup>
defineProps({ size: { type: Number, default: 120 } });
</script>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <style>
      .hex-r { animation: hr 3.5s linear infinite; transform-origin: center; }
      @keyframes hr { to { transform: rotate(360deg); } }
    </style>
  </defs>
  <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="none" stroke="#00F0FF" stroke-width="4" stroke-dasharray="60 180" class="hex-r"/>
</svg>`
  },

  neural: {
    id: 'neural',
    name: 'Neural Synapse Matrix',
    tag: 'AI Consensus',
    description: 'High-speed dual-gradient concentric plasma rings engineered for AI model deliberation states.',
    render: () => `
      <div class="gl-spinner-neural">
        <div class="neural-ring"></div>
        <div class="neural-ring-inner"></div>
        <img class="neural-center-icon" src="/genlayer-mark.svg" alt="Neural Core" />
      </div>
    `,
    css: `/* Neural Synapse Matrix */
.gl-spinner-neural {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.neural-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2.5px solid transparent;
  border-top-color: #00F0FF;
  border-bottom-color: #FFB800;
  filter: drop-shadow(0 0 10px #00F0FF);
  animation: spin-cw 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}
.neural-ring-inner {
  position: absolute;
  inset: 18%;
  border-radius: 50%;
  border: 2px dashed rgba(255, 255, 255, 0.4);
  border-left-color: #00F0FF;
  animation: spin-ccw 1.5s linear infinite;
}`,
    react: `export function GenLayerNeuralSpinner({ size = 120 }) {
  return (
    <div className="gl-spinner-neural" style={{ width: size, height: size }}>
      <div className="neural-ring" />
      <div className="neural-ring-inner" />
      <img className="neural-center-icon" src="/genlayer-mark.svg" alt="Neural" />
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-neural" :style="{ width: size + 'px', height: size + 'px' }">
    <div class="neural-ring"></div>
    <div class="neural-ring-inner"></div>
    <img class="neural-center-icon" src="/genlayer-mark.svg" alt="Neural" />
  </div>
</template>

<script setup>
defineProps({ size: { type: Number, default: 120 } });
</script>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <style>
      .nr-1 { animation: nr1 2s linear infinite; transform-origin: center; }
      @keyframes nr1 { to { transform: rotate(360deg); } }
    </style>
  </defs>
  <circle cx="50" cy="50" r="44" fill="none" stroke="#00F0FF" stroke-width="4" stroke-dasharray="140 180" class="nr-1"/>
</svg>`
  },

  inline: {
    id: 'inline',
    name: 'Minimalist Micro-Loader',
    tag: 'Buttons & Badges',
    description: 'Ultra-lightweight 60fps dual-gradient orbital arc with floating GenLayer core dot for fast responsive loading states.',
    render: () => `
      <div class="gl-spinner-inline">
        <svg class="gl-inline-svg" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="inline-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#00F0FF" />
              <stop offset="50%" stop-color="#818CF8" />
              <stop offset="100%" stop-color="#FFB800" />
            </linearGradient>
          </defs>
          <circle class="gl-inline-track" cx="50" cy="50" r="42" />
          <circle class="gl-inline-spinner" cx="50" cy="50" r="42" />
        </svg>
        <div class="gl-inline-dot"></div>
      </div>
    `,
    css: `/* Minimalist Micro-Loader */
.gl-spinner-inline {
  width: var(--spin-size, 80px);
  height: var(--spin-size, 80px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gl-inline-svg {
  width: 100%;
  height: 100%;
  animation: gl-spin-cw var(--spin-speed, 1.2s) linear infinite;
  transform-origin: center;
}
.gl-inline-track {
  fill: none;
  stroke: rgba(255, 255, 255, 0.08);
  stroke-width: 6;
}
.gl-inline-spinner {
  fill: none;
  stroke: url(#inline-grad);
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 180 270;
  stroke-dashoffset: 0;
  animation: gl-inline-dash var(--spin-speed, 1.2s) ease-in-out infinite;
}
.gl-inline-dot {
  position: absolute;
  width: 22%;
  height: 22%;
  border-radius: 50%;
  background: radial-gradient(circle, #FFFFFF 20%, #00F0FF 80%);
  box-shadow: 0 0 14px #00F0FF;
  animation: gl-floating 2s ease-in-out infinite;
}
@keyframes gl-inline-dash {
  0% { stroke-dashoffset: 0; }
  50% { stroke-dashoffset: -130; }
  100% { stroke-dashoffset: -260; }
}
@keyframes gl-spin-cw {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
    react: `export function GenLayerMicroLoader({ size = 48 }) {
  return (
    <div className="gl-spinner-inline" style={{ width: size, height: size }}>
      <svg className="gl-inline-svg" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="inline-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="50%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#FFB800" />
          </linearGradient>
        </defs>
        <circle className="gl-inline-track" cx="50" cy="50" r="42" />
        <circle className="gl-inline-spinner" cx="50" cy="50" r="42" />
      </svg>
      <div className="gl-inline-dot" />
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-inline" :style="{ width: size + 'px', height: size + 'px' }">
    <svg class="gl-inline-svg" viewBox="0 0 100 100">
      <circle class="gl-inline-track" cx="50" cy="50" r="42" />
      <circle class="gl-inline-spinner" cx="50" cy="50" r="42" />
    </svg>
    <div class="gl-inline-dot"></div>
  </div>
</template>

<script setup>
defineProps({ size: { type: Number, default: 48 } });
</script>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <style>
      .in-s { animation: in-rot 1s linear infinite; transform-origin: center; }
      @keyframes in-rot { to { transform: rotate(360deg); } }
    </style>
  </defs>
  <circle cx="50" cy="50" r="40" fill="none" stroke="#00F0FF" stroke-width="6" stroke-dasharray="140 260" class="in-s"/>
</svg>`
  }
};
