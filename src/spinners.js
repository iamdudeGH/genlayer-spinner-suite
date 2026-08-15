// ==========================================================================
// 5 BESPOKE GENLAYER DUAL-WING KINETIC MOTIONS (OFFICIAL GEOMETRY ONLY)
// 100% Pure Monochromatic Stark Black, White & Silver
// ==========================================================================

export const SPINNERS = {
  monolith: {
    id: 'monolith',
    name: 'Monolith Dual-Wing',
    tag: '01 / EXPANSION',
    description: 'Official dual-wing GenLayer vector mark undergoing hypnotic geometric expansion, levitation, and high-contrast luminescence.',
    render: () => `
      <div class="gl-spinner-monolith">
        <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg" class="gl-svg-fluid">
          <polygon class="gl-mono-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
          <polygon class="gl-mono-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
          <polygon class="gl-mono-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
    css: `/* 01: Monolith Dual-Wing */
.gl-spinner-monolith {
  width: var(--anim-size, 140px);
  height: calc(var(--anim-size, 140px) * 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 22px rgba(255, 255, 255, 0.45));
  animation: gl-floating 3.5s ease-in-out infinite;
}
.gl-mono-wing-l {
  transform-origin: 44.26px 45px;
  animation: mono-morph-l var(--anim-speed, 2.2s) cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
.gl-mono-wing-r {
  transform-origin: 53.5px 45px;
  animation: mono-morph-r var(--anim-speed, 2.2s) cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
.gl-mono-core {
  transform-origin: 48.64px 55.7px;
  animation: mono-core-strobe calc(var(--anim-speed, 2.2s) * 0.5) ease-in-out infinite;
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
    react: `export function GenLayerMonolithSpinner({ size = 120 }) {
  return (
    <div style={{ width: size, height: size * 0.94 }} className="gl-spinner-monolith">
      <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
        <polygon className="gl-mono-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
        <polygon className="gl-mono-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
        <polygon className="gl-mono-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      </svg>
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-monolith" :style="{ width: size + 'px', height: (size * 0.94) + 'px' }">
    <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
      <polygon class="gl-mono-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
      <polygon class="gl-mono-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
      <polygon class="gl-mono-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
    </svg>
  </div>
</template>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.76 91.93" width="200" height="190">
  <defs>
    <style>
      .wl { transform-origin: 44.26px 45px; animation: wl 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite; }
      .wr { transform-origin: 53.5px 45px; animation: wr 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite; }
      .cr { transform-origin: 48.64px 55.7px; animation: cr 1.1s ease-in-out infinite; }
      @keyframes wl { 0%,100%{transform:rotate(0deg);fill:#FFFFFF;} 35%{transform:rotate(-22deg) scale(1.12);fill:#D4D4D8;} 70%{transform:rotate(12deg) scale(0.92);fill:#A1A1AA;} }
      @keyframes wr { 0%,100%{transform:rotate(0deg);fill:#A1A1AA;} 35%{transform:rotate(22deg) scale(1.12);fill:#D4D4D8;} 70%{transform:rotate(-12deg) scale(0.92);fill:#FFFFFF;} }
      @keyframes cr { 0%,100%{transform:scale(1);} 50%{transform:scale(1.4);} }
    </style>
  </defs>
  <polygon class="wl" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
  <polygon class="wr" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
  <polygon class="cr" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
</svg>`
  },

  origami: {
    id: 'origami',
    name: 'Kinetic 3D Origami',
    tag: '02 / FOLD & SNAP',
    description: 'The dual wings fold gracefully across the vertical axis in 3D space, crossing each other like wings in flight before snapping outward.',
    render: () => `
      <div class="gl-spinner-origami">
        <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg" class="gl-svg-fluid">
          <polygon class="gl-origami-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
          <polygon class="gl-origami-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#E4E4E7"/>
          <polygon class="gl-origami-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
    css: `/* 02: Kinetic 3D Origami */
.gl-spinner-origami {
  width: var(--anim-size, 140px);
  height: calc(var(--anim-size, 140px) * 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 700px;
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.4));
}
.gl-origami-wing-l {
  transform-origin: 44.26px 45px;
  animation: origami-fold-l var(--anim-speed, 2.0s) cubic-bezier(0.77, 0, 0.175, 1) infinite;
}
.gl-origami-wing-r {
  transform-origin: 53.5px 45px;
  animation: origami-fold-r var(--anim-speed, 2.0s) cubic-bezier(0.77, 0, 0.175, 1) infinite;
}
.gl-origami-core {
  transform-origin: 48.64px 55.7px;
  animation: origami-pulse calc(var(--anim-speed, 2.0s) * 0.5) ease-in-out infinite;
}
@keyframes origami-fold-l {
  0%, 100% { transform: rotateY(0deg) scale(1); opacity: 1; fill: #FFFFFF; }
  50% { transform: rotateY(65deg) scale(0.9) translate(6px, 0); opacity: 0.65; fill: #71717A; }
}
@keyframes origami-fold-r {
  0%, 100% { transform: rotateY(0deg) scale(1); opacity: 1; fill: #E4E4E7; }
  50% { transform: rotateY(-65deg) scale(0.9) translate(-6px, 0); opacity: 0.65; fill: #A1A1AA; }
}
@keyframes origami-pulse {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 6px #FFFFFF); }
  50% { transform: scale(1.5) translateY(-3px); filter: drop-shadow(0 0 22px #FFFFFF); }
}`,
    react: `export function GenLayerOrigamiSpinner({ size = 120 }) {
  return (
    <div style={{ width: size, height: size * 0.94 }} className="gl-spinner-origami">
      <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
        <polygon className="gl-origami-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
        <polygon className="gl-origami-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#E4E4E7"/>
        <polygon class="gl-origami-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      </svg>
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-origami" :style="{ width: size + 'px', height: (size * 0.94) + 'px' }">
    <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
      <polygon class="gl-origami-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
      <polygon class="gl-origami-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#E4E4E7"/>
      <polygon class="gl-origami-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
    </svg>
  </div>
</template>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.76 91.93" width="200" height="190">
  <defs>
    <style>
      .fol-l { transform-origin: 44.26px 45px; animation: fl 2s ease-in-out infinite; }
      .fol-r { transform-origin: 53.5px 45px; animation: fr 2s ease-in-out infinite; }
      @keyframes fl { 0%,100%{transform:rotateY(0deg);} 50%{transform:rotateY(65deg) translate(6px,0);} }
      @keyframes fr { 0%,100%{transform:rotateY(0deg);} 50%{transform:rotateY(-65deg) translate(-6px,0);} }
    </style>
  </defs>
  <polygon class="fol-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
  <polygon class="fol-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
  <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
</svg>`
  },

  quantumBeat: {
    id: 'quantumBeat',
    name: 'Quantum Beat Pulse',
    tag: '03 / STACCATO PULSE',
    description: 'High-frequency counter-rhythmic shearing of the wings creating an energetic, heartbeat-like vector pulsation.',
    render: () => `
      <div class="gl-spinner-beat">
        <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg" class="gl-svg-fluid">
          <polygon class="gl-beat-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
          <polygon class="gl-beat-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#D4D4D8"/>
          <polygon class="gl-beat-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
    css: `/* 03: Quantum Beat Pulse */
.gl-spinner-beat {
  width: var(--anim-size, 140px);
  height: calc(var(--anim-size, 140px) * 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 24px rgba(255, 255, 255, 0.5));
}
.gl-beat-wing-l {
  transform-origin: 44.26px 45px;
  animation: beat-snap-l var(--anim-speed, 1.6s) cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
}
.gl-beat-wing-r {
  transform-origin: 53.5px 45px;
  animation: beat-snap-r var(--anim-speed, 1.6s) cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
}
.gl-beat-core {
  transform-origin: 48.64px 55.7px;
  animation: beat-flash calc(var(--anim-speed, 1.6s) * 0.5) ease-in-out infinite;
}
@keyframes beat-snap-l {
  0%, 100% { transform: scale(1) translateY(0); fill: #FFFFFF; }
  25% { transform: scale(1.18) translateY(-6px) rotate(-8deg); fill: #FFFFFF; }
  60% { transform: scale(0.92) translateY(2px) rotate(4deg); fill: #A1A1AA; }
}
@keyframes beat-snap-r {
  0%, 100% { transform: scale(1) translateY(0); fill: #D4D4D8; }
  35% { transform: scale(1.18) translateY(-6px) rotate(8deg); fill: #FFFFFF; }
  70% { transform: scale(0.92) translateY(2px) rotate(-4deg); fill: #71717A; }
}
@keyframes beat-flash {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.45); opacity: 1; filter: drop-shadow(0 0 30px #FFFFFF); }
}`,
    react: `export function GenLayerQuantumBeatSpinner({ size = 120 }) {
  return (
    <div style={{ width: size, height: size * 0.94 }} className="gl-spinner-beat">
      <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
        <polygon className="gl-beat-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
        <polygon className="gl-beat-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#D4D4D8"/>
        <polygon className="gl-beat-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      </svg>
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-beat" :style="{ width: size + 'px', height: (size * 0.94) + 'px' }">
    <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
      <polygon class="gl-beat-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
      <polygon class="gl-beat-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#D4D4D8"/>
      <polygon class="gl-beat-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
    </svg>
  </div>
</template>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.76 91.93" width="200" height="190">
  <defs>
    <style>
      .bl { transform-origin: 44.26px 45px; animation: b-l 1.6s ease-in-out infinite; }
      .br { transform-origin: 53.5px 45px; animation: b-r 1.6s ease-in-out infinite; }
      @keyframes b-l { 0%,100%{transform:scale(1);} 25%{transform:scale(1.18) translateY(-6px);} }
      @keyframes b-r { 0%,100%{transform:scale(1);} 35%{transform:scale(1.18) translateY(-6px);} }
    </style>
  </defs>
  <polygon class="bl" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
  <polygon class="br" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#D4D4D8"/>
  <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
</svg>`
  },

  eclipsePhase: {
    id: 'eclipsePhase',
    name: 'Eclipse Orbit Phase',
    tag: '04 / ORBITAL GLIDE',
    description: 'The dual wings glide in a continuous orbital figure-eight trajectory around the central diamond with smooth opacity fades.',
    render: () => `
      <div class="gl-spinner-eclipse">
        <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg" class="gl-svg-fluid">
          <polygon class="gl-eclipse-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
          <polygon class="gl-eclipse-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#FFFFFF"/>
          <polygon class="gl-eclipse-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
    css: `/* 04: Eclipse Orbit Phase */
.gl-spinner-eclipse {
  width: var(--anim-size, 140px);
  height: calc(var(--anim-size, 140px) * 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.45));
}
.gl-eclipse-wing-l {
  transform-origin: 48.64px 46px;
  animation: eclipse-orbit-l var(--anim-speed, 2.4s) ease-in-out infinite;
}
.gl-eclipse-wing-r {
  transform-origin: 48.64px 46px;
  animation: eclipse-orbit-r var(--anim-speed, 2.4s) ease-in-out infinite;
}
.gl-eclipse-core {
  transform-origin: 48.64px 55.7px;
  animation: eclipse-core-spin calc(var(--anim-speed, 2.4s) * 0.5) linear infinite;
}
@keyframes eclipse-orbit-l {
  0%, 100% { transform: scale(1) translate(0, 0); opacity: 1; }
  50% { transform: scale(0.85) translate(12px, -8px) rotate(-15deg); opacity: 0.35; fill: #A1A1AA; }
}
@keyframes eclipse-orbit-r {
  0%, 100% { transform: scale(1) translate(0, 0); opacity: 1; }
  50% { transform: scale(0.85) translate(-12px, 8px) rotate(15deg); opacity: 0.35; fill: #A1A1AA; }
}
@keyframes eclipse-core-spin {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); filter: drop-shadow(0 0 20px #FFFFFF); }
}`,
    react: `export function GenLayerEclipseSpinner({ size = 120 }) {
  return (
    <div style={{ width: size, height: size * 0.94 }} className="gl-spinner-eclipse">
      <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
        <polygon className="gl-eclipse-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
        <polygon className="gl-eclipse-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#FFFFFF"/>
        <polygon className="gl-eclipse-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      </svg>
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-eclipse" :style="{ width: size + 'px', height: (size * 0.94) + 'px' }">
    <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
      <polygon class="gl-eclipse-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
      <polygon class="gl-eclipse-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#FFFFFF"/>
      <polygon class="gl-eclipse-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
    </svg>
  </div>
</template>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.76 91.93" width="200" height="190">
  <defs>
    <style>
      .el { transform-origin: 48.64px 46px; animation: el-l 2.4s ease-in-out infinite; }
      .er { transform-origin: 48.64px 46px; animation: el-r 2.4s ease-in-out infinite; }
      @keyframes el-l { 0%,100%{transform:scale(1);} 50%{transform:scale(0.85) translate(12px,-8px);opacity:0.35;} }
      @keyframes el-r { 0%,100%{transform:scale(1);} 50%{transform:scale(0.85) translate(-12px,8px);opacity:0.35;} }
    </style>
  </defs>
  <polygon class="el" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
  <polygon class="er" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#FFFFFF"/>
  <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
</svg>`
  },

  hyperWarp: {
    id: 'hyperWarp',
    name: 'Hyperspace Elastic Warp',
    tag: '05 / CONVERGE & BOUNCE',
    description: 'Dynamic vertex explosion where the wings separate outward and snap elastically back into monolithic singularity.',
    render: () => `
      <div class="gl-spinner-warp">
        <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg" class="gl-svg-fluid">
          <polygon class="gl-warp-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
          <polygon class="gl-warp-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#FFFFFF"/>
          <polygon class="gl-warp-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
    css: `/* 05: Hyperspace Elastic Warp */
.gl-spinner-warp {
  width: var(--anim-size, 140px);
  height: calc(var(--anim-size, 140px) * 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 24px rgba(255, 255, 255, 0.5));
}
.gl-warp-wing-l {
  transform-origin: 44.26px 45px;
  animation: warp-snap-l var(--anim-speed, 2.0s) cubic-bezier(0.68, -0.6, 0.32, 1.6) infinite;
}
.gl-warp-wing-r {
  transform-origin: 53.5px 45px;
  animation: warp-snap-r var(--anim-speed, 2.0s) cubic-bezier(0.68, -0.6, 0.32, 1.6) infinite;
}
.gl-warp-core {
  transform-origin: 48.64px 55.7px;
  animation: warp-core-beat calc(var(--anim-speed, 2.0s) * 0.5) ease-in-out infinite;
}
@keyframes warp-snap-l {
  0%, 100% { transform: scale(1) translate(0, 0); fill: #FFFFFF; }
  45% { transform: scale(0.65) translate(-16px, 10px) rotate(-30deg); fill: #71717A; opacity: 0.5; }
}
@keyframes warp-snap-r {
  0%, 100% { transform: scale(1) translate(0, 0); fill: #FFFFFF; }
  45% { transform: scale(0.65) translate(16px, 10px) rotate(30deg); fill: #71717A; opacity: 0.5; }
}
@keyframes warp-core-beat {
  0%, 100% { transform: scale(1); }
  45% { transform: scale(1.6); filter: drop-shadow(0 0 32px #FFFFFF); }
}`,
    react: `export function GenLayerHyperWarpSpinner({ size = 120 }) {
  return (
    <div style={{ width: size, height: size * 0.94 }} className="gl-spinner-warp">
      <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
        <polygon className="gl-warp-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
        <polygon className="gl-warp-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#FFFFFF"/>
        <polygon className="gl-warp-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      </svg>
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-warp" :style="{ width: size + 'px', height: (size * 0.94) + 'px' }">
    <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
      <polygon class="gl-warp-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
      <polygon class="gl-warp-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#FFFFFF"/>
      <polygon class="gl-warp-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
    </svg>
  </div>
</template>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.76 91.93" width="200" height="190">
  <defs>
    <style>
      .wl { transform-origin: 44.26px 45px; animation: w-snap-l 2s cubic-bezier(0.68,-0.6,0.32,1.6) infinite; }
      .wr { transform-origin: 53.5px 45px; animation: w-snap-r 2s cubic-bezier(0.68,-0.6,0.32,1.6) infinite; }
      @keyframes w-snap-l { 0%,100%{transform:scale(1);} 45%{transform:scale(0.65) translate(-16px,10px) rotate(-30deg);opacity:0.5;} }
      @keyframes w-snap-r { 0%,100%{transform:scale(1);} 45%{transform:scale(0.65) translate(16px,10px) rotate(30deg);opacity:0.5;} }
    </style>
  </defs>
  <polygon class="wl" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
  <polygon class="wr" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#FFFFFF"/>
  <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
</svg>`
  }
};
