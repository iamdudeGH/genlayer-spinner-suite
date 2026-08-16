// ==========================================================================
// 5 BESPOKE GENLAYER KINETIC MOTION ARCHITECTURES
// 100% Pure Monochromatic Stark Black, White & Silver
// Every specimen features a unique, mesmerizing mechanical & visual principle.
// ==========================================================================

export const SPINNERS = {
  monolith: {
    id: 'monolith',
    name: 'Monolith Dual-Wing',
    tag: '01 / ORGANIC EXPANSION',
    description: 'The beloved flagship: Official GenLayer wings morphing through organic bezier expansion, subtle tilt, and breathing luminescence.',
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
  filter: drop-shadow(0 0 24px rgba(255, 255, 255, 0.45));
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
  <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
  <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
  <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
</svg>`
  },

  laserScanner: {
    id: 'laserScanner',
    name: 'Kinetic Vertex Laser Scanner',
    tag: '02 / PRECISION VERTEX SCAN',
    description: 'A high-precision horizontal laser beam sweeps vertically through the mark, sequentially activating phosphor luminescence across each polygon.',
    render: () => `
      <div class="gl-spinner-scanner">
        <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg" class="gl-svg-fluid">
          <!-- Base Translucent Polygons -->
          <polygon class="scan-base-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="rgba(255,255,255,0.2)"/>
          <polygon class="scan-base-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="rgba(255,255,255,0.2)"/>
          <polygon class="scan-base-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
          
          <!-- Phosphor Highlight Polygons -->
          <polygon class="scan-glow-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
          <polygon class="scan-glow-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#E4E4E7"/>
          
          <!-- Laser Beam Line -->
          <line x1="-10" y1="0" x2="110" y2="0" stroke="#FFFFFF" stroke-width="2" class="scanner-beam-line"/>
        </svg>
      </div>
    `,
    css: `/* 02: Kinetic Vertex Laser Scanner */
.gl-spinner-scanner {
  width: var(--anim-size, 140px);
  height: calc(var(--anim-size, 140px) * 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.4));
}
.scanner-beam-line {
  filter: drop-shadow(0 0 8px #FFFFFF);
  animation: scan-sweep var(--anim-speed, 2.0s) ease-in-out infinite;
}
.scan-glow-wing-l {
  animation: phosphor-pulse-l var(--anim-speed, 2.0s) ease-in-out infinite;
}
.scan-glow-wing-r {
  animation: phosphor-pulse-r var(--anim-speed, 2.0s) ease-in-out infinite;
}
.scan-base-core {
  animation: scanner-core-strobe 1.2s ease-in-out infinite;
  transform-origin: 48.64px 55.7px;
}
@keyframes scan-sweep {
  0%, 100% { transform: translateY(0px); opacity: 0.2; }
  50% { transform: translateY(92px); opacity: 1; stroke-width: 3; }
}
@keyframes phosphor-pulse-l {
  0%, 100% { opacity: 0.3; }
  35%, 65% { opacity: 1; filter: drop-shadow(0 0 12px #FFFFFF); }
}
@keyframes phosphor-pulse-r {
  0%, 100% { opacity: 0.3; }
  45%, 75% { opacity: 1; filter: drop-shadow(0 0 12px #FFFFFF); }
}
@keyframes scanner-core-strobe {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 6px #FFFFFF); }
  50% { transform: scale(1.35); filter: drop-shadow(0 0 20px #FFFFFF); }
}`,
    react: `export function GenLayerScannerSpinner({ size = 120 }) {
  return (
    <div style={{ width: size, height: size * 0.94 }} className="gl-spinner-scanner">
      <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
        <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="rgba(255,255,255,0.2)"/>
        <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="rgba(255,255,255,0.2)"/>
        <polygon className="scan-glow-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
        <polygon className="scan-glow-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#E4E4E7"/>
        <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        <line x1="-10" y1="0" x2="110" y2="0" stroke="#FFFFFF" strokeWidth="2" className="scanner-beam-line"/>
      </svg>
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-scanner" :style="{ width: size + 'px', height: (size * 0.94) + 'px' }">
    <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
      <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="rgba(255,255,255,0.2)"/>
      <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="rgba(255,255,255,0.2)"/>
      <polygon class="scan-glow-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
      <polygon class="scan-glow-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#E4E4E7"/>
      <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      <line x1="-10" y1="0" x2="110" y2="0" stroke="#FFFFFF" stroke-width="2" class="scanner-beam-line"/>
    </svg>
  </div>
</template>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.76 91.93" width="200" height="190">
  <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
  <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
  <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
</svg>`
  },

  vortexSpiral: {
    id: 'vortexSpiral',
    name: 'Vortex Galaxy Spiral',
    tag: '03 / CENTRIPETAL VORTEX',
    description: 'A smooth centripetal vortex: The wings spiral inwards towards the singularity diamond before billowing smoothly outward in continuous cosmic motion.',
    render: () => `
      <div class="gl-spinner-vortex">
        <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg" class="gl-svg-fluid">
          <polygon class="gl-vortex-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
          <polygon class="gl-vortex-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#D4D4D8"/>
          <polygon class="gl-vortex-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
    css: `/* 03: Vortex Galaxy Spiral */
.gl-spinner-vortex {
  width: var(--anim-size, 140px);
  height: calc(var(--anim-size, 140px) * 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 24px rgba(255, 255, 255, 0.5));
}
.gl-vortex-wing-l {
  transform-origin: 48.64px 46px;
  animation: vortex-rot-l var(--anim-speed, 2.2s) cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
.gl-vortex-wing-r {
  transform-origin: 48.64px 46px;
  animation: vortex-rot-r var(--anim-speed, 2.2s) cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
.gl-vortex-core {
  transform-origin: 48.64px 55.7px;
  animation: vortex-core-spin calc(var(--anim-speed, 2.2s) * 0.5) ease-in-out infinite;
}
@keyframes vortex-rot-l {
  0% { transform: rotate(0deg) scale(1); fill: #FFFFFF; }
  50% { transform: rotate(180deg) scale(0.7) translate(6px, -6px); fill: #71717A; opacity: 0.6; }
  100% { transform: rotate(360deg) scale(1); fill: #FFFFFF; }
}
@keyframes vortex-rot-r {
  0% { transform: rotate(0deg) scale(1); fill: #D4D4D8; }
  50% { transform: rotate(180deg) scale(0.7) translate(-6px, 6px); fill: #A1A1AA; opacity: 0.6; }
  100% { transform: rotate(360deg) scale(1); fill: #D4D4D8; }
}
@keyframes vortex-core-spin {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.5) rotate(180deg); filter: drop-shadow(0 0 28px #FFFFFF); }
}`,
    react: `export function GenLayerVortexSpinner({ size = 120 }) {
  return (
    <div style={{ width: size, height: size * 0.94 }} className="gl-spinner-vortex">
      <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
        <polygon className="gl-vortex-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
        <polygon className="gl-vortex-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#D4D4D8"/>
        <polygon className="gl-vortex-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      </svg>
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-vortex" :style="{ width: size + 'px', height: (size * 0.94) + 'px' }">
    <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
      <polygon class="gl-vortex-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
      <polygon class="gl-vortex-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#D4D4D8"/>
      <polygon class="gl-vortex-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
    </svg>
  </div>
</template>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.76 91.93" width="200" height="190">
  <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
  <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#D4D4D8"/>
  <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
</svg>`
  },

  eclipseCorona: {
    id: 'eclipseCorona',
    name: 'Eclipse Corona Orbit',
    tag: '04 / SPHERICAL 3D ORBIT',
    description: 'The Left and Right wings orbit gracefully on a continuous tilted 3D spherical plane around the diamond core, creating rhythmic solar eclipse coronas.',
    render: () => `
      <div class="gl-spinner-eclipse">
        <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg" class="gl-svg-fluid">
          <polygon class="gl-ecl-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
          <polygon class="gl-ecl-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#E4E4E7"/>
          <polygon class="gl-ecl-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </svg>
      </div>
    `,
    css: `/* 04: Eclipse Corona Orbit */
.gl-spinner-eclipse {
  width: var(--anim-size, 140px);
  height: calc(var(--anim-size, 140px) * 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 24px rgba(255, 255, 255, 0.45));
}
.gl-ecl-wing-l {
  transform-origin: 48.64px 46px;
  animation: ecl-orbit-l var(--anim-speed, 2.6s) ease-in-out infinite;
}
.gl-ecl-wing-r {
  transform-origin: 48.64px 46px;
  animation: ecl-orbit-r var(--anim-speed, 2.6s) ease-in-out infinite;
}
.gl-ecl-core {
  transform-origin: 48.64px 55.7px;
  animation: ecl-core-corona calc(var(--anim-speed, 2.6s) * 0.5) ease-in-out infinite;
}
@keyframes ecl-orbit-l {
  0% { transform: scale(1) translate(0, 0); opacity: 1; fill: #FFFFFF; }
  50% { transform: scale(0.75) translate(18px, -10px) rotate(-25deg); opacity: 0.35; fill: #71717A; }
  100% { transform: scale(1) translate(0, 0); opacity: 1; fill: #FFFFFF; }
}
@keyframes ecl-orbit-r {
  0% { transform: scale(1) translate(0, 0); opacity: 1; fill: #E4E4E7; }
  50% { transform: scale(0.75) translate(-18px, 10px) rotate(25deg); opacity: 0.35; fill: #71717A; }
  100% { transform: scale(1) translate(0, 0); opacity: 1; fill: #E4E4E7; }
}
@keyframes ecl-core-corona {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 8px #FFFFFF); }
  50% { transform: scale(1.45); filter: drop-shadow(0 0 30px #FFFFFF); }
}`,
    react: `export function GenLayerEclipseCoronaSpinner({ size = 120 }) {
  return (
    <div style={{ width: size, height: size * 0.94 }} className="gl-spinner-eclipse">
      <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
        <polygon className="gl-ecl-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
        <polygon className="gl-ecl-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#E4E4E7"/>
        <polygon className="gl-ecl-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      </svg>
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-eclipse" :style="{ width: size + 'px', height: (size * 0.94) + 'px' }">
    <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
      <polygon class="gl-ecl-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
      <polygon class="gl-ecl-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#E4E4E7"/>
      <polygon class="gl-ecl-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
    </svg>
  </div>
</template>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.76 91.93" width="200" height="190">
  <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
  <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#E4E4E7"/>
  <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
</svg>`
  },

  gyroPrecession: {
    id: 'gyroPrecession',
    name: '3D Gyro Precession Roll',
    tag: '05 / 3D GYRO PRECESSION',
    description: 'A hypnotic zero-gravity 3D gyroscope roll: The GenLayer mark precesses smoothly along 3D spatial axes with specular chrome shading and floating diamond counter-tilt.',
    render: () => `
      <div class="gl-spinner-gyro">
        <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg" class="gl-svg-fluid">
          <!-- 3D Gyro Perspective Wrapper -->
          <g class="gyro-spatial-rig">
            <polygon class="gyro-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
            <polygon class="gyro-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
            <polygon class="gyro-diamond-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
          </g>
        </svg>
      </div>
    `,
    css: `/* 05: 3D Gyro Precession Roll */
.gl-spinner-gyro {
  width: var(--anim-size, 140px);
  height: calc(var(--anim-size, 140px) * 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 800px;
  filter: drop-shadow(0 0 24px rgba(255, 255, 255, 0.45));
}
.gyro-spatial-rig {
  transform-origin: 48.64px 46px;
  animation: gyro-precession-loop var(--anim-speed, 2.8s) cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
}
.gyro-wing-l {
  transform-origin: 44.26px 45px;
  animation: gyro-shimmer-l var(--anim-speed, 2.8s) ease-in-out infinite;
}
.gyro-wing-r {
  transform-origin: 53.5px 45px;
  animation: gyro-shimmer-r var(--anim-speed, 2.8s) ease-in-out infinite;
}
.gyro-diamond-core {
  transform-origin: 48.64px 55.7px;
  animation: gyro-core-float calc(var(--anim-speed, 2.8s) * 0.5) ease-in-out infinite;
}
@keyframes gyro-precession-loop {
  0% { transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg) scale(1); }
  25% { transform: rotateY(38deg) rotateX(-22deg) rotateZ(8deg) scale(1.06); }
  50% { transform: rotateY(0deg) rotateX(28deg) rotateZ(0deg) scale(0.94); }
  75% { transform: rotateY(-38deg) rotateX(-22deg) rotateZ(-8deg) scale(1.06); }
  100% { transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg) scale(1); }
}
@keyframes gyro-shimmer-l {
  0%, 100% { fill: #FFFFFF; opacity: 1; }
  35% { fill: #E4E4E7; opacity: 0.95; }
  65% { fill: #71717A; opacity: 0.7; }
}
@keyframes gyro-shimmer-r {
  0%, 100% { fill: #A1A1AA; opacity: 0.85; }
  35% { fill: #71717A; opacity: 0.65; }
  65% { fill: #FFFFFF; opacity: 1; }
}
@keyframes gyro-core-float {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 8px #FFFFFF); }
  50% { transform: scale(1.38); filter: drop-shadow(0 0 26px #FFFFFF); }
}`,
    react: `export function GenLayerGyroSpinner({ size = 120 }) {
  return (
    <div style={{ width: size, height: size * 0.94 }} className="gl-spinner-gyro">
      <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
        <g className="gyro-spatial-rig">
          <polygon className="gyro-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
          <polygon className="gyro-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
          <polygon className="gyro-diamond-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </g>
      </svg>
    </div>
  );
}`,
    vue: `<template>
  <div class="gl-spinner-gyro" :style="{ width: size + 'px', height: (size * 0.94) + 'px' }">
    <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
      <g class="gyro-spatial-rig">
        <polygon class="gyro-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
        <polygon class="gyro-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
        <polygon class="gyro-diamond-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      </g>
    </svg>
  </div>
</template>`,
    standaloneSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.76 91.93" width="200" height="190">
  <polygon points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
  <polygon points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
  <polygon points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
</svg>`
  }
};
