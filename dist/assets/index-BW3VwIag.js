(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const r={quantum:{id:"quantum",name:"Quantum Core (Hero)",tag:"Signature Mark",description:"Morphing official dual-wing GenLayer vector mark with pulsing diamond crystal core and glowing 3D orbital dynamics.",render:()=>`
      <div class="gl-spinner-quantum">
        <svg class="gl-quantum-svg" viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gl-qg-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#06B6D4" />
              <stop offset="100%" stop-color="#8B5CF6" />
            </linearGradient>
            <linearGradient id="gl-qg-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#8B5CF6" />
              <stop offset="100%" stop-color="#EC4899" />
            </linearGradient>
          </defs>
          <polygon class="gl-wing-left" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="url(#gl-qg-1)"/>
          <polygon class="gl-wing-right" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="url(#gl-qg-2)"/>
          <polygon class="gl-core-diamond" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
        </svg>
      </div>
    `,css:`/* GenLayer Quantum Core Spinner */
.gl-spinner-quantum {
  width: 120px;
  height: 110px;
  animation: gl-floating 3s ease-in-out infinite;
  filter: drop-shadow(0 0 16px rgba(139, 92, 246, 0.6));
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
  0%, 100% { transform: rotate(0deg) scale(1); fill: #06B6D4; }
  35% { transform: rotate(-18deg) scale(1.08) translate(-6px, -4px); fill: #8B5CF6; }
  70% { transform: rotate(10deg) scale(0.92) translate(3px, 2px); fill: #EC4899; }
}
@keyframes gl-wing-morph-right {
  0%, 100% { transform: rotate(0deg) scale(1); fill: #EC4899; }
  35% { transform: rotate(18deg) scale(1.08) translate(6px, -4px); fill: #8B5CF6; }
  70% { transform: rotate(-10deg) scale(0.92) translate(-3px, 2px); fill: #06B6D4; }
}
@keyframes gl-core-pulse {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 8px #FFFFFF); }
  50% { transform: scale(1.3); filter: drop-shadow(0 0 20px #38BDF8); }
}
@keyframes gl-floating {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}`,react:`export function GenLayerQuantumSpinner({ size = 120 }) {
  return (
    <div style={{ width: size, height: size * 0.94 }} className="gl-spinner-quantum">
      <svg viewBox="0 0 97.76 91.93" xmlns="http://www.w3.org/2000/svg">
        <polygon className="gl-wing-left" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#06B6D4"/>
        <polygon className="gl-wing-right" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#EC4899"/>
        <polygon className="gl-core-diamond" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
      </svg>
    </div>
  );
}`,standaloneSvg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.76 91.93" width="200" height="190">
  <defs>
    <style>
      .w-left { transform-origin: 44.26px 45px; animation: w-l 2.2s ease-in-out infinite; }
      .w-right { transform-origin: 53.5px 45px; animation: w-r 2.2s ease-in-out infinite; }
      .c-diam { transform-origin: 48.64px 55.7px; animation: c-p 1.1s ease-in-out infinite; }
      @keyframes w-l { 0%,100%{transform:rotate(0deg);fill:#06B6D4;} 35%{transform:rotate(-18deg) scale(1.08);fill:#8B5CF6;} 70%{transform:rotate(10deg);fill:#EC4899;} }
      @keyframes w-r { 0%,100%{transform:rotate(0deg);fill:#EC4899;} 35%{transform:rotate(18deg) scale(1.08);fill:#8B5CF6;} 70%{transform:rotate(-10deg);fill:#06B6D4;} }
      @keyframes c-p { 0%,100%{transform:scale(1);} 50%{transform:scale(1.35);} }
    </style>
  </defs>
  <polygon class="w-left" points="44.26 32.35 27.72 67.12 43.29 74.9 0 91.93 44.26 0 44.26 32.35" fill="#06B6D4"/>
  <polygon class="w-right" points="53.5 32.35 70.04 67.12 54.47 74.9 97.76 91.93 53.5 0 53.5 32.35" fill="#EC4899"/>
  <polygon class="c-diam" points="48.64 43.78 58.33 62.94 48.64 67.69 39.47 62.92 48.64 43.78" fill="#FFFFFF"/>
</svg>`},orbit:{id:"orbit",name:"Consensus Orbit Matrix",tag:"Multi-Validator",description:"Dual counter-rotating orbital rings carrying validator node beacons around the central GenLayer core.",render:()=>`
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
    `,css:`/* GenLayer Consensus Orbit */
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
  border: 2px dashed rgba(6, 182, 212, 0.4);
  border-top-color: #06B6D4;
  animation: spin-cw 2s linear infinite;
}
.orbit-ring-2 {
  width: 100%;
  height: 100%;
  border: 2px dashed rgba(139, 92, 246, 0.4);
  border-bottom-color: #EC4899;
  animation: spin-ccw 2.8s linear infinite;
}
.validator-node {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #06B6D4;
  box-shadow: 0 0 10px #06B6D4;
}
.vn-1 { top: -4px; left: 50%; transform: translateX(-50%); }
.vn-2 { bottom: -4px; left: 50%; transform: translateX(-50%); background: #EC4899; }
.vn-3 { top: 50%; right: -4px; transform: translateY(-50%); background: #8B5CF6; }
@keyframes spin-cw { to { transform: rotate(360deg); } }
@keyframes spin-ccw { to { transform: rotate(-360deg); } }`,react:`export function GenLayerOrbitSpinner({ size = 120 }) {
  return (
    <div className="gl-spinner-orbit" style={{ width: size, height: size }}>
      <div className="orbit-ring orbit-ring-1"><div className="validator-node vn-1"/></div>
      <div className="orbit-ring orbit-ring-2"><div className="validator-node vn-2"/><div className="validator-node vn-3"/></div>
      <img className="gl-orbit-center" src="/genlayer-mark.svg" alt="GenLayer" />
    </div>
  );
}`,standaloneSvg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="200" height="200">
  <defs>
    <style>
      .r-1 { animation: rot-1 2s linear infinite; transform-origin: center; }
      .r-2 { animation: rot-2 2.8s linear infinite; transform-origin: center; }
      @keyframes rot-1 { to { transform: rotate(360deg); } }
      @keyframes rot-2 { to { transform: rotate(-360deg); } }
    </style>
  </defs>
  <circle cx="60" cy="60" r="42" fill="none" stroke="#06B6D4" stroke-width="2" stroke-dasharray="6 6" class="r-1"/>
  <circle cx="60" cy="60" r="54" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="8 8" class="r-2"/>
  <circle cx="60" cy="18" r="4" fill="#06B6D4" class="r-1"/>
  <circle cx="60" cy="114" r="4" fill="#EC4899" class="r-2"/>
  <polygon points="56,48 50,60 56,63 40,70 56,36 56,48" fill="#06B6D4"/>
  <polygon points="64,48 70,60 64,63 80,70 64,36 64,48" fill="#EC4899"/>
  <polygon points="60,53 64,60 60,62 56,60 60,53" fill="#FFFFFF"/>
</svg>`},hex:{id:"hex",name:"GenVM Hex Laser Pulsar",tag:"VM Execution",description:"Precision cybernetic hexagon with glowing laser dash tracing and breathing GenLayer core for intelligent execution.",render:()=>`
      <div class="gl-spinner-hex">
        <svg class="hex-svg" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#06B6D4" />
              <stop offset="50%" stop-color="#8B5CF6" />
              <stop offset="100%" stop-color="#EC4899" />
            </linearGradient>
          </defs>
          <polygon class="hex-track" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" />
          <polygon class="hex-laser" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" />
        </svg>
        <img class="hex-core-mark" src="/genlayer-mark.svg" alt="GenVM Core" />
      </div>
    `,css:`/* GenVM Hex Laser Pulsar */
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
@keyframes hex-rotate { to { transform: rotate(360deg); } }`,react:`export function GenLayerHexSpinner({ size = 120 }) {
  return (
    <div className="gl-spinner-hex" style={{ width: size, height: size }}>
      <svg className="hex-svg" viewBox="0 0 100 100">
        <polygon className="hex-track" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" />
        <polygon className="hex-laser" points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" />
      </svg>
      <img className="hex-core-mark" src="/genlayer-mark.svg" alt="GenVM" />
    </div>
  );
}`,standaloneSvg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <style>
      .hex-r { animation: hr 3.5s linear infinite; transform-origin: center; }
      @keyframes hr { to { transform: rotate(360deg); } }
    </style>
  </defs>
  <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="none" stroke="#8B5CF6" stroke-width="4" stroke-dasharray="60 180" class="hex-r"/>
</svg>`},neural:{id:"neural",name:"Neural Synapse Matrix",tag:"AI Consensus",description:"High-speed dual-gradient concentric plasma rings engineered for AI model deliberation states.",render:()=>`
      <div class="gl-spinner-neural">
        <div class="neural-ring"></div>
        <div class="neural-ring-inner"></div>
        <img class="neural-center-icon" src="/genlayer-mark.svg" alt="Neural Core" />
      </div>
    `,css:`/* Neural Synapse Matrix */
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
  border: 3px solid transparent;
  border-top-color: #06B6D4;
  border-bottom-color: #8B5CF6;
  filter: drop-shadow(0 0 10px #06B6D4);
  animation: spin-cw 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}
.neural-ring-inner {
  position: absolute;
  inset: 18%;
  border-radius: 50%;
  border: 2px dashed rgba(236, 72, 153, 0.6);
  border-left-color: #FFFFFF;
  animation: spin-ccw 1.5s linear infinite;
}`,react:`export function GenLayerNeuralSpinner({ size = 120 }) {
  return (
    <div className="gl-spinner-neural" style={{ width: size, height: size }}>
      <div className="neural-ring" />
      <div className="neural-ring-inner" />
      <img className="neural-center-icon" src="/genlayer-mark.svg" alt="Neural" />
    </div>
  );
}`,standaloneSvg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
  <defs>
    <style>
      .nr-1 { animation: nr1 2s linear infinite; transform-origin: center; }
      @keyframes nr1 { to { transform: rotate(360deg); } }
    </style>
  </defs>
  <circle cx="50" cy="50" r="44" fill="none" stroke="#06B6D4" stroke-width="4" stroke-dasharray="140 180" class="nr-1"/>
</svg>`},inline:{id:"inline",name:"Minimalist Micro-Loader",tag:"Buttons & Badges",description:"Ultra-lightweight 60fps dual-gradient orbital arc with floating GenLayer core dot for fast responsive loading states.",render:()=>`
      <div class="gl-spinner-inline">
        <svg class="gl-inline-svg" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="inline-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#06B6D4" />
              <stop offset="50%" stop-color="#8B5CF6" />
              <stop offset="100%" stop-color="#EC4899" />
            </linearGradient>
          </defs>
          <circle class="gl-inline-track" cx="50" cy="50" r="42" />
          <circle class="gl-inline-spinner" cx="50" cy="50" r="42" />
        </svg>
        <div class="gl-inline-dot"></div>
      </div>
    `,css:`/* Minimalist Micro-Loader */
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
  background: radial-gradient(circle, #FFFFFF 20%, #8B5CF6 80%);
  box-shadow: 0 0 14px #8B5CF6;
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
}`,react:`export function GenLayerMicroLoader({ size = 48 }) {
  return (
    <div className="gl-spinner-inline" style={{ width: size, height: size }}>
      <svg className="gl-inline-svg" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="inline-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <circle className="gl-inline-track" cx="50" cy="50" r="42" />
        <circle className="gl-inline-spinner" cx="50" cy="50" r="42" />
      </svg>
      <div className="gl-inline-dot" />
    </div>
  );
}`,standaloneSvg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <style>
      .in-s { animation: in-rot 1s linear infinite; transform-origin: center; }
      @keyframes in-rot { to { transform: rotate(360deg); } }
    </style>
  </defs>
  <circle cx="50" cy="50" r="40" fill="none" stroke="#06B6D4" stroke-width="6" stroke-dasharray="140 260" class="in-s"/>
</svg>`}};let a="quantum",c="css",g=2.2,m=140,p=1,f=!1;window.addEventListener("DOMContentLoaded",()=>{u(),h(),w(),v(),x()});function u(){const e=document.getElementById("hero-stage");if(!e)return;const t=r[a];e.innerHTML=`
    <div class="hologram-shimmer"></div>
    ${t.render()}
    <div style="position: absolute; bottom: 1.25rem; font-size: 0.85rem; color: var(--text-muted); font-weight: 600; z-index: 10;">
      3D Interactive Mode • Active: <span style="color: var(--gl-cyan-light);">${t.name}</span>
    </div>
  `}function v(){const e=document.getElementById("hero-stage");e&&(e.addEventListener("mousemove",t=>{const i=e.getBoundingClientRect(),n=t.clientX-i.left-i.width/2,s=-((t.clientY-i.top-i.height/2)/(i.height/2))*22,d=n/(i.width/2)*22;e.style.setProperty("--tilt-x",`${s.toFixed(2)}deg`),e.style.setProperty("--tilt-y",`${d.toFixed(2)}deg`)}),e.addEventListener("mouseleave",()=>{e.style.setProperty("--tilt-x","0deg"),e.style.setProperty("--tilt-y","0deg")}),window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",t=>{if(t.beta!==null&&t.gamma!==null){const i=Math.min(Math.max(-t.beta*.4,-20),20),n=Math.min(Math.max(t.gamma*.4,-20),20);e.style.setProperty("--tilt-x",`${i.toFixed(2)}deg`),e.style.setProperty("--tilt-y",`${n.toFixed(2)}deg`)}}))}function h(){const e=document.getElementById("gallery-grid");e&&(e.innerHTML=Object.values(r).map(t=>`
    <div class="spinner-card" id="card-${t.id}">
      <div class="card-spinner-box">
        ${t.render()}
      </div>
      <div class="card-info">
        <div class="card-header-line">
          <div class="card-name">${t.name}</div>
          <span class="card-tag">${t.tag}</span>
        </div>
        <div class="card-btn-toolbar">
          <button class="btn-card-action" onclick="window.selectHeroSpinner('${t.id}')">
            <span>🔍</span> Inspect
          </button>
          <button class="btn-card-action" onclick="window.openCodeModal('${t.id}')">
            <span>📋</span> Code
          </button>
          <button class="btn-card-action" onclick="window.downloadSvgFile('${t.id}')" title="Download standalone animated SVG">
            <span>📥</span> SVG
          </button>
        </div>
      </div>
    </div>
  `).join(""))}window.selectHeroSpinner=function(e){r[e]&&(a=e,u(),l(`✨ Selected: ${r[e].name}`),window.scrollTo({top:180,behavior:"smooth"}))};window.openCodeModal=function(e=a){a=e;const t=document.getElementById("code-modal"),i=document.getElementById("modal-spinner-title");i&&(i.textContent=`${r[e].name} — Integration Code`),y(),t&&t.classList.remove("hidden")};window.closeCodeModal=function(){const e=document.getElementById("code-modal");e&&e.classList.add("hidden")};window.switchCodeTab=function(e){c=e,document.querySelectorAll(".modal-tab-btn").forEach(t=>{t.classList.toggle("active",t.dataset.tab===e)}),y()};function y(){const e=document.getElementById("modal-code-content");if(!e)return;const t=r[a];c==="css"?e.textContent=t.css:c==="react"?e.textContent=t.react:c==="html"&&(e.textContent=t.render().trim())}window.copyCurrentSnippet=function(){const e=document.getElementById("modal-code-content");e&&navigator.clipboard.writeText(e.textContent).then(()=>{l("📋 Code copied to clipboard!")})};window.downloadSvgFile=function(e=a){const t=r[e];if(!t||!t.standaloneSvg)return;const i=new Blob([t.standaloneSvg],{type:"image/svg+xml"}),n=URL.createObjectURL(i),o=document.createElement("a");o.href=n,o.download=`genlayer-spinner-${e}.svg`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(n),l(`📥 Downloaded genlayer-spinner-${e}.svg!`)};function w(){const e=document.getElementById("speed-slider"),t=document.getElementById("size-slider"),i=document.getElementById("glow-slider");e==null||e.addEventListener("input",n=>{g=parseFloat(n.target.value),document.documentElement.style.setProperty("--spin-speed",`${g}s`),document.getElementById("speed-val").textContent=`${g.toFixed(1)}s`}),t==null||t.addEventListener("input",n=>{m=parseInt(n.target.value,10),document.documentElement.style.setProperty("--spin-size",`${m}px`),document.getElementById("size-val").textContent=`${m}px`}),i==null||i.addEventListener("input",n=>{p=parseFloat(n.target.value),document.documentElement.style.setProperty("--glow-intensity",p),document.getElementById("glow-val").textContent=`${Math.round(p*100)}%`})}window.setEnvironment=function(e){document.body.className=e==="space"?"":`env-${e}`,document.querySelectorAll(".btn-env").forEach(t=>{t.classList.toggle("active",t.dataset.env===e)}),l(`🌐 Environment: ${e.toUpperCase()}`)};window.setPalette=function(e){document.querySelectorAll(".palette-btn").forEach(t=>{t.classList.toggle("active",t.dataset.palette===e)}),e==="cyberpunk"?(document.documentElement.style.setProperty("--gl-purple","#8B5CF6"),document.documentElement.style.setProperty("--gl-cyan","#06B6D4"),document.documentElement.style.setProperty("--gl-pink","#EC4899")):e==="emerald"?(document.documentElement.style.setProperty("--gl-purple","#10B981"),document.documentElement.style.setProperty("--gl-cyan","#34D399"),document.documentElement.style.setProperty("--gl-pink","#059669")):e==="electric"&&(document.documentElement.style.setProperty("--gl-purple","#3B82F6"),document.documentElement.style.setProperty("--gl-cyan","#60A5FA"),document.documentElement.style.setProperty("--gl-pink","#93C5FD")),l(`🎨 Palette: ${e.toUpperCase()}`)};function x(){const e=document.getElementById("btn-trigger-consensus");e&&e.addEventListener("click",runConsensusSimulation)}window.runConsensusSimulation=function(){if(f)return;f=!0;const e=document.getElementById("btn-trigger-consensus"),t=document.getElementById("cp-log-stream");e&&(e.disabled=!0,e.textContent="⏳ Simulating Consensus Round..."),t&&(t.innerHTML="");for(let n=1;n<=5;n++){const o=document.getElementById(`cp-node-${n}`);o&&(o.className=`cp-validator-node cp-node-${n} ${n===1?"leader":""}`)}document.querySelectorAll(".cp-laser-line").forEach(n=>n.classList.remove("active"));function i(n,o=""){if(!t)return;const s=document.createElement("div");s.className=`log-line ${o}`,s.textContent=`[${new Date().toISOString().slice(11,19)}] ${n}`,t.appendChild(s),t.scrollTop=t.scrollHeight}i("🚀 Leader Validator (Node #1) proposing state transaction...","cyan"),setTimeout(()=>{i("⚡ Broadcasted calldata payload to 4 independent validator nodes...","purple"),document.querySelectorAll(".cp-laser-line").forEach(n=>n.classList.add("active"))},1e3),setTimeout(()=>{i("🔍 Node #2: Comparative Equivalence Principle PASSED (99.8%)","cyan");const n=document.getElementById("cp-node-2");n&&n.classList.add("agree")},2200),setTimeout(()=>{i("🔍 Node #3: Comparative Equivalence Principle PASSED (99.5%)","cyan");const n=document.getElementById("cp-node-3");n&&n.classList.add("agree")},3400),setTimeout(()=>{i("🔍 Node #4: Comparative Equivalence Principle PASSED (100.0%)","cyan");const n=document.getElementById("cp-node-4");n&&n.classList.add("agree")},4500),setTimeout(()=>{i("🔍 Node #5: Comparative Equivalence Principle PASSED (99.7%)","cyan");const n=document.getElementById("cp-node-5");n&&n.classList.add("agree")},5600),setTimeout(()=>{i("🎉 OPTIMISTIC DEMOCRACY FINALIZED: 5/5 Consensus Reached!","green"),i("✅ State root committed to GenVM blockchain.","green");const n=document.getElementById("cp-node-1");n&&n.classList.add("agree"),l("🎉 Consensus Round Successfully Finalized!"),e&&(e.disabled=!1,e.textContent="⚡ Run Consensus Round Simulation"),f=!1},6800)};function l(e){const t=document.getElementById("toast-msg");t&&(t.textContent=e,t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),3e3))}
