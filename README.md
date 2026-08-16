<div align="center">
  <img src="public/genlayer-mark.svg" alt="GenLayer Monolith Vector Mark" width="90" style="filter: drop-shadow(0 0 25px rgba(255,255,255,0.7)); margin-bottom: 16px;">

  # 🪐 GenLayer Kinetic Motion Suite

  **Official Mission Submission — 5 Bespoke Pure Vector Kinetic Engines for the GenLayer Ecosystem**

  [![Live App](https://img.shields.io/badge/Live%20Demo-Vercel%20Production-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://genlayer-spinner-suite.vercel.app/)
  [![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iamdudeGH/genlayer-spinner-suite)
  [![Framework](https://img.shields.io/badge/Engine-Pure%20CSS%20%2B%20SVG-FFFFFF?style=for-the-badge&logoColor=black)](https://genlayer.com)
  [![Performance](https://img.shields.io/badge/Performance-60.0%20FPS-10B981?style=for-the-badge)](https://genlayer.com)

  <br>
  
  <p align="center">
    <b>🌐 Live Production Deployment:</b> <a href="https://genlayer-spinner-suite.vercel.app/">https://genlayer-spinner-suite.vercel.app/</a>
  </p>
</div>

---

## 📌 Executive Summary

The **GenLayer Kinetic Motion Suite** is an iconic, ultra-high-performance 60fps loading motion system engineered specifically for the GenLayer decentralized ecosystem.

Unlike generic circular spinners with static logos, **every single motion in this suite is crafted by directly transforming the official GenLayer brand vector geometry**:
- **Left Wing Polygon (`gl-wing-l`)**: `44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35`
- **Right Wing Polygon (`gl-wing-r`)**: `53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35`
- **Core Diamond Polygon (`gl-core`)**: `48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78`

The system is strictly monochromatic (**Stark Obsidian Black `#000000` & Radiant Specular White `#FFFFFF`**), delivering a weightless, luxury-grade aesthetic with zero heavy runtime dependencies.

---

## 🕊️ The 5 Bespoke Kinetic Motion Engines

| # | Specimen Name | Tag & Category | Mechanical & Visual Principle |
| :-: | :--- | :--- | :--- |
| **01** | **Monolith Dual-Wing** ⭐ | `01 / ORGANIC EXPANSION` | Organic bezier expansion of the left and right wings with breathing scale, subtle spatial tilt, and a levitating diamond core. |
| **02** | **Kinetic Vertex Laser Scanner** ⭐ | `02 / PRECISION VERTEX SCAN` | A high-precision horizontal laser beam sweeps vertically through the mark, sequentially activating phosphor luminescence across each polygon. |
| **03** | **Vortex Galaxy Spiral** ⭐ | `03 / CENTRIPETAL VORTEX` | Silky-smooth centripetal inward spiral towards the diamond singularity, billowing gracefully outward in a continuous cosmic whirlpool. |
| **04** | **Eclipse Corona Orbit** ⭐ | `04 / SPHERICAL 3D ORBIT` | Continuous tilted 3D spherical orbit around the core diamond with rhythmic solar eclipse coronas and specular polygon shading. |
| **05** | **3D Gyro Precession Roll** ⭐ | `05 / 3D GYRO PRECESSION` | Hypnotic zero-gravity 3D spatial gyroscope roll with smooth angular momentum, specular chrome transitions, and diamond counter-tilt. |

---

## 🎮 Interactive Studio Features

The live application provides a professional evaluation workbench for developers and designers:

- **🔮 3D Spatial Gyro Viewport**: Real-time cursor and mobile `deviceorientation` gyro tracking (`rotateX` / `rotateY`) for true spatial depth.
- **⏱️ Live Timeline & Playback Controls**: Real-time speed adjustment (`0.5s` to `4.0s`), size scaling (`60px` to `220px`), scrubbing slider, and play/pause.
- **📐 Vector Wireframe Overlay**: Real-time vertex inspection mode (Press `[W]`).
- **📦 1-Click Multi-Framework Code Generator**: Instantly view and copy production-ready code in:
  - **React JSX Component**
  - **Vue 3 Template**
  - **Pure Vanilla CSS & HTML**
  - **Standalone Animated SVG File**
- **⌨️ Pro Keyboard Shortcuts**:
  - `[1]` – `[5]`: Switch between specimens
  - `[SPACE]`: Toggle playback
  - `[W]`: Toggle vector wireframe

---

## 💻 Zero-Dependency Integration Examples

### 1. React JSX Component

```jsx
import React from 'react';
import './genlayer-spinner.css';

export function GenLayerMonolithSpinner({ size = 120 }) {
  return (
    <div style={{ width: size, height: size * 0.94 }} className="gl-spinner-monolith">
      <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
        <polygon className="gl-mono-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
        <polygon className="gl-mono-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
        <polygon className="gl-mono-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      </svg>
    </div>
  );
}
```

### 2. Vue 3 Component

```vue
<template>
  <div class="gl-spinner-monolith" :style="{ width: size + 'px', height: (size * 0.94) + 'px' }">
    <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
      <polygon class="gl-mono-wing-l" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#FFFFFF"/>
      <polygon class="gl-mono-wing-r" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#A1A1AA"/>
      <polygon class="gl-mono-core" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
    </svg>
  </div>
</template>

<script setup>
defineProps({
  size: { type: Number, default: 120 }
});
</script>
```

### 3. Pure CSS Engine (Excerpt)

```css
.gl-spinner-monolith {
  width: 140px;
  height: 131px;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 24px rgba(255, 255, 255, 0.45));
  animation: gl-floating 3.5s ease-in-out infinite;
}
.gl-mono-wing-l {
  transform-origin: 44.26px 45px;
  animation: mono-morph-l 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
.gl-mono-wing-r {
  transform-origin: 53.5px 45px;
  animation: mono-morph-r 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
.gl-mono-core {
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
}
```

---

## 🏗 Repository Structure

```
genlayer-spinner-suite/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated CI/CD GitHub Pages deployment
├── public/
│   ├── favicon.svg             # Pure monochromatic GenLayer favicon
│   └── genlayer-mark.svg       # Official monochromatic brand vector asset
├── src/
│   ├── main.js                 # 3D spatial gyro tracking, timeline scrubber, keyboard shortcuts
│   ├── spinners.js             # The 5 bespoke kinetic motion engines & multi-framework code
│   └── style.css               # Monochromatic design system, keyframes & glassmorphism
├── index.html                  # Semantic, accessible HTML5 crucible studio
├── vite.config.js              # Production build configuration with relative base paths
├── package.json
└── README.md
```

---

## 🚀 Quick Start & Local Development

```bash
# 1. Clone the repository
git clone https://github.com/iamdudeGH/genlayer-spinner-suite.git

# 2. Navigate to project directory
cd genlayer-spinner-suite

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev

# 5. Build production bundle
npm run build
```

---

## 📜 License

MIT License © 2026 Crafted with precision for the **GenLayer** ecosystem.
