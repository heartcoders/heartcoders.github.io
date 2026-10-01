const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/define.CpctJF_F.js","_astro/base-element.Cm4rcYS3.js","_astro/query.C-S87uso.js","_astro/enum-prop.BAWDxAdj.js","_astro/playback.CdgLhyHJ.js","_astro/class-map.D00Ya1xp.js","_astro/preload-helper.BlTxHScW.js","_astro/state.Pgeo1wuR.js","_astro/a11y.DrKT5_4z.js","_astro/define.BTFn-6J-.js","_astro/define.CnaJOMhg.js","_astro/style-map.CM_oELyq.js"])))=>i.map(i=>d[i]);
import{_ as I}from"./preload-helper.BlTxHScW.js";import{t,e as S,i as $,r as b,B as h,a as G,D as v,b as u,n as w,d as k,c as T,A as p}from"./base-element.Cm4rcYS3.js";import{r as A}from"./state.Pgeo1wuR.js";import{p as f,a as X}from"./class-map.D00Ya1xp.js";import{b as x,c as m,e as z}from"./enum-prop.BAWDxAdj.js";import{e as C}from"./query.C-S87uso.js";import{s as O}from"./a11y.DrKT5_4z.js";import{T as M,S as B}from"./define.BTFn-6J-.js";import{d as N,w as V,e as W,b as K}from"./playback.CdgLhyHJ.js";const Z=40,D=12;function Q(a){const{scrollY:e,anchorY:i,current:o,isNarrow:r,isMenuOpen:n}=a;return n?{state:o,anchorY:e}:e<=Z?{state:"docked",anchorY:e}:o==="docked"?{state:"floating",anchorY:e}:o==="compact"?i-e>D?{state:"floating",anchorY:e}:{state:"compact",anchorY:Math.max(i,e)}:r&&e-i>D?{state:"compact",anchorY:e}:{state:"floating",anchorY:Math.min(i,e)}}const J=b("18px"),P=b("2px"),R=b("3.5px"),tt=b("0.73rem"),et=b("1.375rem"),E=$`calc(100% - ${t("space-gutter")} - ${t("control-height")} / 2)
  calc(${t("space-2")} + ${t("control-height")} / 2)`,it=$`
  .bar {
    display: block;
    position: sticky;
    inset-block-start: 0;
    z-index: ${t("z-sticky")};
    max-inline-size: 100vw;
    border-radius: 0;
    transition:
      inset-block-start ${t("duration-slow")} ${t("ease-out")},
      margin ${t("duration-slow")} ${t("ease-out")},
      max-inline-size ${t("duration-page")} ${t("ease-in-out")},
      border-radius ${t("duration-slow")} ${t("ease-out")};

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background: ${t("surface-header")};
      border: ${t("border-width")} solid transparent;
      border-block-end-color: ${t("border")};
      border-radius: inherit;
      box-shadow: 0 0 0 transparent;
      backdrop-filter: ${t("backdrop-header")};
      -webkit-backdrop-filter: ${t("backdrop-header")};
      transition:
        background-color ${t("duration-slow")} ${t("ease-out")},
        border-color ${t("duration-slow")} ${t("ease-out")},
        box-shadow ${t("duration-slow")} ${t("ease-out")};
    }

    &[data-open] {
      z-index: ${t("z-overlay")};
    }
  }

  .progress {
    display: flex;
    position: absolute;
    inset: 0;
    align-items: flex-end;
    overflow: clip;
    border-radius: inherit;
    pointer-events: none;
    transition: opacity ${t("duration-base")} ${t("ease-out")};
  }

  .row {
    display: flex;
    gap: ${t("space-4")};
    position: relative;
    max-inline-size: ${t("width-page")};
    min-block-size: ${t("space-14")};
    margin-inline: auto;
    padding: ${t("space-2")} ${t("space-gutter")};
    align-items: center;
    justify-content: space-between;
    transition: padding ${t("duration-slow")} ${t("ease-out")};
  }

  .brand {
    flex: none;
    max-inline-size: 100vw;
    overflow: clip;
    transition: max-inline-size ${t("duration-page")} ${t("ease-in-out")};
  }

  .status {
    display: flex;
    flex: none;
    margin-inline-start: auto;
    align-items: center;
    transition:
      opacity ${t("duration-base")} ${t("ease-out")},
      visibility ${t("duration-base")} allow-discrete;
  }

  .toggle {
    display: grid;
    flex: none;
    position: relative;
    z-index: 1;
    inline-size: ${t("control-height")};
    block-size: ${t("control-height")};
    padding: 0;
    place-items: center;
    color: ${t("text")};
    background: transparent;
    border: ${t("border-width-rule")} solid ${t("border-control")};
    border-radius: ${t("radius-circle")};
    cursor: pointer;
    transition:
      background-color ${t("duration-fast")} ${t("ease-out")},
      border-color ${t("duration-fast")} ${t("ease-out")},
      opacity ${t("duration-base")} ${t("ease-out")},
      visibility ${t("duration-base")} allow-discrete;

    &:focus-visible {
      outline: 2px solid ${t("border-focus")};
      outline-offset: 2px;
    }

    &[aria-expanded='true'] {
      color: ${t("text-on-accent")};
      background: ${t("accent")};
      border-color: ${t("accent")};
    }
  }

  .toggle__bars {
    display: block;
    position: relative;
    inline-size: ${J};
    block-size: ${t("space-3")};

    &::before,
    &::after {
      content: '';
      position: absolute;
      inset-inline: 0;
      inset-block-start: calc(50% - ${P} / 2);
      block-size: ${P};
      background: currentColor;
      border-radius: ${t("radius-pill")};
      transition: transform ${t("duration-slow")} ${t("ease-drop")};
    }

    &::before {
      transform: translateY(calc(-1 * ${R}));
    }

    &::after {
      transform: translateY(${R});
    }
  }

  .toggle[aria-expanded='true'] .toggle__bars {
    &::before {
      transform: translateY(0) rotate(45deg);
    }

    &::after {
      transform: translateY(0) rotate(-45deg);
    }
  }

  .bar[data-open] .status {
    visibility: hidden;
  }

  .panel {
    display: none;
    flex-direction: column;
    position: fixed;
    inset: 0;
    z-index: 0;
    padding: calc(${t("space-16")} + ${t("space-2")}) ${t("space-4")}
      calc(${t("space-6")} + env(safe-area-inset-bottom));
    overflow-y: auto;
    background: ${t("surface-overlay")};
    backdrop-filter: ${t("backdrop-overlay")};
    -webkit-backdrop-filter: ${t("backdrop-overlay")};
    clip-path: circle(0 at ${E});
    transition:
      clip-path ${t("duration-page")} ${t("ease-in-out")},
      display ${t("duration-page")} allow-discrete;

    &[data-open] {
      display: flex;
      clip-path: circle(150% at ${E});
    }
  }

  @starting-style {
    .panel[data-open] {
      clip-path: circle(0 at ${E});
    }
  }

  .actions {
    display: grid;
    gap: ${t("space-4")};
    margin-block-start: auto;
    padding-block-start: ${t("space-8")};
  }

  @media (width < ${S("bp-lg")}) {
    :host([floating]) .bar {
      inset-block-start: ${t("space-2")};
      margin-inline: ${t("space-2")};
      border-radius: ${t("radius-island")};

      &::before {
        background: ${t("surface-island")};
        border-color: ${t("border")};
        box-shadow: ${t("shadow-island")};
      }

      & .row {
        padding: ${t("space-1")} ${t("space-1")} ${t("space-1")} ${t("space-5")};
        overflow: clip;
        border-radius: inherit;
      }

      & .status {
        transition-delay: ${t("duration-fast")};
      }

      & .toggle {
        transition-delay: 0s, 0s, ${t("duration-fast")}, ${t("duration-fast")};
      }
    }

    :host([compact]) .bar {
      max-inline-size: ${t("space-14")};
      cursor: pointer;
      transition:
        inset-block-start ${t("duration-slow")} ${t("ease-out")},
        margin ${t("duration-slow")} ${t("ease-out")},
        max-inline-size ${t("duration-slow")} ${t("ease-in-out")},
        border-radius ${t("duration-slow")} ${t("ease-out")};

      & .row {
        min-block-size: ${t("space-14")};
        padding: 0 0 0 ${et};
      }

      & .brand {
        max-inline-size: ${tt};
        transition-duration: ${t("duration-slow")};
      }

      & .status,
      & .toggle,
      & .progress {
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
        transition-delay: 0s;
      }
    }

    :host([floating]) .bar[data-open]::before {
      background: transparent;
      border-color: transparent;
      box-shadow: none;
    }
  }

  @media (min-width: ${S("bp-lg")}) {
    .toggle,
    .actions {
      display: none;
    }

    .status {
      margin-inline-start: 0;
    }

    .panel,
    .panel[data-open] {
      display: flex;
      flex: 1;
      flex-direction: row;
      position: static;
      padding: 0;
      justify-content: center;
      overflow: visible;
      background: none;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
      clip-path: none;
      transition: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .bar,
    .bar::before,
    .row,
    .toggle,
    .toggle__bars::before,
    .toggle__bars::after {
      transition: none;
    }

    .panel {
      transition: none;
    }
  }
`;var _=function(a,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,e,i,o);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const ot=180,nt=`(width < ${G["bp-lg"]})`;class g extends h{constructor(){super(...arguments),this.navLabel="Hauptnavigation",this.floating=!1,this.compact=!1,this.open=!1,this.#t=null,this.#e=null,this.#i=null,this.#o=[],this.#s="docked",this.#n=!1,this.#a=0,this.#c=globalThis.matchMedia?.(nt)??null,this.#r=()=>{this.#i===null&&(this.#i=requestAnimationFrame(()=>{this.#i=null;const e=Q({scrollY:globalThis.scrollY,anchorY:this.#a,current:this.#s,isNarrow:this.#c?.matches??!1,isMenuOpen:this.open});this.#a=e.anchorY,this.#f(e.state)}))},this.#h=e=>{if(e.key!=="Escape")return;const i=this.#e;if(i){this.#l(),i.querySelector(":scope > a")?.focus();return}this.open&&(this.open=!1,this.shadowRoot?.querySelector(".toggle")?.focus())},this.#p=e=>{e.composedPath().includes(this)||(this.#l(),this.open=!1)}}static{this.styles=[h.styles,it]}#t;#e;#i;#o;#s;#n;#a;#c;connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.#h),document.addEventListener("pointerdown",this.#p),globalThis.addEventListener("scroll",this.#r,{passive:!0})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.#h),document.removeEventListener("pointerdown",this.#p),globalThis.removeEventListener("scroll",this.#r),this.#t!==null&&clearTimeout(this.#t),this.#i!==null&&cancelAnimationFrame(this.#i),this.#t=null,this.#i=null,this.#$(!1)}updated(e){e.has("open")&&this.#$(this.open)}#r;#f(e){this.#s=e;const i=e!=="docked",o=e==="compact";i!==this.floating&&(this.floating=i),o!==this.compact&&(this.compact=o)}#g(){this.#n=this.compact}#m(e){!this.#n&&!this.compact||(this.#n=!1,e.preventDefault(),e.stopPropagation(),this.#b())}#v(e){this.compact&&e.target?.matches?.(":focus-visible")&&this.#b()}#b(){this.#a=globalThis.scrollY,this.#f("floating")}#$(e){for(const o of this.#o)o.removeAttribute("inert");if(this.#o=[],document.documentElement.toggleAttribute("data-nav-open",e),!e)return;let i=this;for(;i&&i!==document.body;){for(const o of i.parentElement?.children??[])o===i||o.hasAttribute("inert")||o.localName==="script"||o.localName==="style"||(o.setAttribute("inert",""),this.#o.push(o));i=i.parentElement}}firstUpdated(){this.#w()}get#y(){return[...this.querySelectorAll('[slot="links"] > li')]}#w(){const e=this.#y;if(e.length===0){v&&this.warn('Kein <ul slot="links"> gefunden. Die Navigation bleibt leer.');return}for(const[i,o]of e.entries()){const r=o.querySelector(":scope > a"),n=o.querySelector(":scope > ul");if(!r||!n)continue;const s=n.id||`hc-nav-menu-${i}`;n.id=s,r.setAttribute("aria-expanded","false"),r.setAttribute("aria-controls",s),o.dataset.hasMenu="",o.addEventListener("pointerenter",()=>this.#d(o)),o.addEventListener("pointerleave",()=>this.#x()),o.addEventListener("focusin",l=>this.#k(l,o,n)),r.addEventListener("keydown",l=>this.#z(l,o))}}#k(e,i,o){o.contains(e.target)&&this.#d(i)}#d(e){this.#t!==null&&(clearTimeout(this.#t),this.#t=null),this.#e!==e&&(this.#u(this.#e,!1),this.#e=e,this.#u(e,!0))}#x(){this.#t!==null&&clearTimeout(this.#t),this.#t=setTimeout(()=>{this.#t=null,this.#l()},ot)}#l(){this.#u(this.#e,!1),this.#e=null}#u(e,i){e&&(e.querySelector(":scope > a")?.setAttribute("aria-expanded",String(i)),e.toggleAttribute("data-open",i))}#z(e,i){if(e.key==="ArrowDown"){e.preventDefault(),this.#d(i),i.querySelector(":scope > ul a")?.focus();return}e.key==="Escape"&&(this.#l(),i.querySelector(":scope > a")?.focus())}#h;#p;#_(){this.open=!this.open,this.open||this.#l()}#T(e){if(!this.open)return;e.composedPath().find(o=>o.localName==="a")&&(this.open=!1)}render(){return u`
      <header
        class="bar"
        part=${f("bar")}
        ?data-open=${this.open}
        @pointerdown=${this.#g}
        @click=${this.#m}
        @focusin=${this.#v}
      >
        <div class="row">
          <div class="brand"><slot name="brand"></slot></div>

          <div
            class="panel"
            id="hc-nav-panel"
            ?data-open=${this.open}
            @click=${this.#T}
          >
            <nav aria-label=${this.navLabel}>
              <slot name="links"></slot>
            </nav>
            <div class="actions"><slot name="actions"></slot></div>
          </div>

          <div class="status"><slot name="status"></slot></div>

          <button
            class="toggle"
            part=${f("toggle")}
            type="button"
            aria-expanded=${this.open}
            aria-controls="hc-nav-panel"
            aria-label=${this.open?"Menue schliessen":"Menue oeffnen"}
            @click=${this.#_}
          >
            <span
              class="toggle__bars"
              aria-hidden="true"
            ></span>
          </button>
        </div>
        <div class="progress"><slot name="progress"></slot></div>
      </header>
    `}}_([w({attribute:"nav-label"})],g.prototype,"navLabel",void 0);_([x()],g.prototype,"floating",void 0);_([x()],g.prototype,"compact",void 0);_([A()],g.prototype,"open",void 0);k("nav",g);const Y=b("8px"),at=b("66px"),rt=$`
  .live {
    display: inline-flex;
    gap: ${t("space-2")};
    align-items: center;
    font-family: ${t("font-mono")};
    font-size: ${t("font-size-2xs")};
    letter-spacing: ${t("tracking-wider")};
    color: ${t("text")};
    text-transform: uppercase;
    white-space: nowrap;
  }

  .dot {
    inline-size: ${Y};
    block-size: ${Y};
    background: ${t("live")};
    border-radius: ${t("radius-circle")};
    box-shadow: ${t("shadow-live")};
    animation: hc-live-blink ${t("duration-blink")} ease-in-out infinite;
  }

  .time {
    display: none;
    min-inline-size: ${at};
    color: ${t("accent")};
  }

  @keyframes hc-live-blink {
    50% {
      opacity: 0.2;
    }
  }

  @media (min-width: ${S("bp-md")}) {
    .live {
      font-size: ${t("font-size-xs")};
    }

    .time {
      display: inline;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .dot {
      animation: none;
    }
  }
`;var st=function(a,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,e,i,o);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const lt=new Intl.DateTimeFormat("de-DE",{hour:"2-digit",minute:"2-digit",second:"2-digit"});class j extends h{constructor(){super(...arguments),this.time="",this.#t=null,this.#e=()=>{this.time=lt.format(new Date),this.#i(),!document.hidden&&(this.#t=setTimeout(this.#e,1e3-Date.now()%1e3))},this.#o=()=>{document.hidden?this.#i():this.#e()}}static{this.styles=[h.styles,rt]}#t;connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.#o),this.#e()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.#o),this.#i()}#e;#i(){this.#t!==null&&clearTimeout(this.#t),this.#t=null}#o;render(){return u`
      <span class="live">
        <span
          class="dot"
          aria-hidden="true"
        ></span>
        <span class="label">Live</span>
        <span
          class="time"
          aria-hidden="true"
          >${this.time}</span
        >
      </span>
    `}}st([A()],j.prototype,"time",void 0);k("live-clock",j);const ct=$`
  .glow {
    display: none;
  }

  @media (pointer: fine) and (prefers-reduced-motion: no-preference) {
    .glow {
      display: block;
      position: fixed;
      inset-block-start: 0;
      inset-inline-start: 0;
      z-index: -1;
      inline-size: ${t("glow-size")};
      block-size: ${t("glow-size")};
      background: ${t("gradient-cursor-glow")};
      opacity: 0;
      mix-blend-mode: screen;
      translate: calc(var(--mx, 50vw) - 50%) calc(var(--my, 30vh) - 50%);
      pointer-events: none;
      transition:
        translate ${t("duration-base")} ease-out,
        opacity ${t("duration-slow")} ${t("ease-out")};

      &[data-active] {
        opacity: 1;
      }
    }
  }
`;var dt=function(a,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,e,i,o);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};class q extends h{static{this.styles=[h.styles,ct]}#t=null;#e=0;#i=0;connectedCallback(){super.connectedCallback(),globalThis.addEventListener("pointermove",this.#o,{passive:!0})}disconnectedCallback(){super.disconnectedCallback(),globalThis.removeEventListener("pointermove",this.#o),this.#t!==null&&cancelAnimationFrame(this.#t),this.#t=null}#o=e=>{e.pointerType==="mouse"&&(this.#e=e.clientX,this.#i=e.clientY,this.#t===null&&(this.#t=requestAnimationFrame(()=>{this.#t=null,this.glow?.style.setProperty("--mx",`${this.#e}px`),this.glow?.style.setProperty("--my",`${this.#i}px`),this.glow?.toggleAttribute("data-active",!0)})))};render(){return u`<span
      class="glow"
      aria-hidden="true"
    ></span>`}}dt([C(".glow")],q.prototype,"glow",void 0);k("cursor-glow",q);const ut=$`
  .control,
  ::slotted(a) {
    all: unset;
    box-sizing: border-box;
    display: inline-flex;
    gap: ${t("space-2")};
    position: relative;
    min-block-size: ${t("control-height")};
    padding-inline: ${t("space-5")};
    align-items: center;
    justify-content: center;
    font-family: ${t("font-body")};
    font-size: ${t("font-size-md")};
    font-stretch: ${t("font-stretch-wide")};
    font-weight: ${t("font-weight-extrabold")};
    line-height: ${t("line-height-tight")};
    letter-spacing: ${t("tracking-wide")};
    text-align: center;
    text-transform: uppercase;
    border: ${t("border-width-rule")} solid transparent;
    border-radius: ${T("button-radius",t("radius-none"))};
    cursor: pointer;
    user-select: none;
    transition:
      background-color ${t("duration-base")} ${t("ease-out")},
      border-color ${t("duration-base")} ${t("ease-out")},
      color ${t("duration-base")} ${t("ease-out")},
      transform ${t("duration-base")} ${t("ease-out")};
  }

  .control:focus-visible,
  ::slotted(a:focus-visible) {
    outline: 2px solid ${t("border-focus")};
    outline-offset: 2px;
  }

  .control[disabled],
  .control[aria-busy='true'] {
    cursor: default;
  }

  .size-small,
  :host([size='small']) ::slotted(a) {
    min-block-size: ${t("tap-target")};
    padding-inline: ${t("space-4")};
    font-size: ${t("font-size-sm")};
  }

  .size-large,
  :host([size='large']) ::slotted(a) {
    min-block-size: ${t("control-height-lg")};
    padding-inline: ${t("space-6")};
  }

  .variant-auto,
  .variant-secondary,
  :host(:not([variant])) ::slotted(a),
  :host([variant='secondary']) ::slotted(a) {
    color: ${T("button-text",t("text"))};
    background-color: transparent;
    border-color: ${t("rule")};
  }

  .variant-auto:hover,
  .variant-secondary:hover,
  :host(:not([variant])) ::slotted(a:hover),
  :host([variant='secondary']) ::slotted(a:hover) {
    color: ${t("text-inverse")};
    background-color: ${t("bg-inverse")};
    transform: skewX(${t("skew-hover")});
  }

  .variant-primary,
  :host([variant='primary']) ::slotted(a) {
    color: ${t("text-on-accent")};
    background-color: ${t("accent")};
  }

  .variant-primary:hover,
  :host([variant='primary']) ::slotted(a:hover) {
    transform: skewX(${t("skew-hover")});
  }

  .variant-tertiary,
  :host([variant='tertiary']) ::slotted(a) {
    min-block-size: ${t("tap-target")};
    padding-inline: 0;
    font-family: ${t("font-mono")};
    font-size: ${t("font-size-sm")};
    font-stretch: ${t("font-stretch-normal")};
    font-weight: ${t("font-weight-regular")};
    letter-spacing: ${t("tracking-wider")};
    color: ${t("accent")};
    background-color: transparent;
  }

  .variant-tertiary:hover,
  :host([variant='tertiary']) ::slotted(a:hover) {
    text-decoration: underline;
  }

  .variant-pill,
  :host([variant='pill']) ::slotted(a) {
    min-block-size: ${t("tap-target")};
    padding-inline: ${t("space-4")};
    font-size: ${t("font-size-sm")};
    letter-spacing: ${t("tracking-wider")};
    color: ${t("text")};
    background-color: transparent;
    border-color: ${t("border-control")};
    border-radius: ${t("radius-pill")};
  }

  .variant-pill:hover,
  :host([variant='pill']) ::slotted(a:hover),
  :host([variant='pill']) ::slotted(a[aria-current]) {
    border-color: ${t("accent")};
  }

  :host([variant='pill']) ::slotted(a[aria-current]) {
    color: ${t("text-on-accent")};
    background-color: ${t("accent")};
  }

  .variant-round,
  :host([variant='round']) ::slotted(a) {
    inline-size: ${t("control-height")};
    min-block-size: ${t("control-height")};
    padding-inline: 0;
    color: ${t("text")};
    background-color: ${t("surface-glass")};
    border-color: ${t("border-control")};
    border-radius: ${t("radius-circle")};
  }

  .variant-round:hover,
  :host([variant='round']) ::slotted(a:hover) {
    border-color: ${t("accent")};
  }

  .tone-critical.variant-auto,
  .tone-critical.variant-secondary,
  :host([tone='critical']:not([variant])) ::slotted(a),
  :host([tone='critical'][variant='secondary']) ::slotted(a) {
    color: ${t("text-critical")};
    border-color: ${t("border-critical")};
  }

  .tone-critical.variant-primary,
  :host([tone='critical'][variant='primary']) ::slotted(a) {
    color: ${t("text-on-accent")};
    background-color: ${t("live")};
  }

  .tone-critical.variant-tertiary,
  :host([tone='critical'][variant='tertiary']) ::slotted(a) {
    color: ${t("text-critical")};
  }

  :host > slot {
    color: inherit;
  }

  :host(:not([variant])),
  :host([variant='secondary']),
  :host([variant='pill']),
  :host([variant='round']) {
    color: ${T("button-text",t("text"))};
  }

  :host(:not([variant]):hover),
  :host([variant='secondary']:hover) {
    color: ${t("text-inverse")};
  }

  :host([variant='primary']) {
    color: ${t("text-on-accent")};
  }

  :host([variant='tertiary']) {
    color: ${t("accent")};
  }

  :host([tone='critical']:not([variant])),
  :host([tone='critical'][variant='secondary']),
  :host([tone='critical'][variant='tertiary']) {
    color: ${t("text-critical")};
  }

  .control[disabled] {
    color: ${t("text-disabled")};
    background-color: transparent;
    border-color: ${t("border-strong")};
  }

  .content {
    display: inline-flex;
    gap: ${t("space-2")};
    align-items: center;
  }

  .content[data-loading] {
    visibility: hidden;
  }

  .spinner {
    position: absolute;
    inline-size: ${t("space-4")};
    block-size: ${t("space-4")};
    border: 2px solid currentColor;
    border-block-start-color: transparent;
    border-radius: ${t("radius-circle")};
    animation: hc-button-spin 600ms linear infinite;
  }

  @keyframes hc-button-spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .spinner {
      animation-duration: 2s;
    }

    .control,
    ::slotted(a) {
      transition: none;
    }

    .control:hover,
    ::slotted(a:hover) {
      transform: none;
    }
  }
`;var d=function(a,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,e,i,o);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const F=["auto","primary","secondary","tertiary","pill","round"],H=["button","submit","reset"];class c extends h{constructor(){super(...arguments),this.variant="auto",this.tone="auto",this.size="base",this.type="button",this.disabled=!1,this.loading=!1,this.slottedLink=!1,this.#t=!1}static{this.styles=[h.styles,ut]}static{this.shadowRootOptions={...h.shadowRootOptions,delegatesFocus:!0}}#t;get#e(){return this.disabled||this.loading}get#i(){return this.querySelector(":scope > a")}get#o(){return this.control??this.#i}get#s(){if(!this.href)return!1;try{return new URL(this.href,globalThis.location?.href).origin!==globalThis.location?.origin}catch{return!1}}click(){this.#e||this.#o?.click()}focus(e){const i=this.#o;i?i.focus(e):super.focus(e)}blur(){const e=this.#o;e?e.blur():super.blur()}connectedCallback(){super.connectedCallback(),this.slottedLink=this.#i!==null}willUpdate(){v&&(m(F,this.variant,"variant",this.warn.bind(this)),m(M,this.tone,"tone",this.warn.bind(this)),m(B,this.size,"size",this.warn.bind(this)),m(H,this.type,"type",this.warn.bind(this)))}updated(){this.#t=O(this.labelSlot),this.#a(),this.#c()}#n(e){this.slottedLink=this.#i!==null,this.#t=O(e.target),this.#a()}#a(){v&&this.icon&&!this.#t&&!this.accessibilityLabel&&this.warn('Icon-only-Button ohne zugaenglichen Namen. Setze accessibility-label="…" oder gib dem Button sichtbaren Text.')}#c(){if(!v||!this.slottedLink)return;const e=["href","icon","loading","disabled"].filter(i=>!!this[i]);e.length!==0&&this.warn(`<hc-button> umschliesst ein <a>; ${e.join(", ")} bleibt dabei ohne Wirkung. Setze das Ziel am <a>, oder entferne das <a> und nutze href am Host.`)}#r(e){if(this.#e){e.preventDefault(),e.stopImmediatePropagation();return}if(this.href||this.type==="button")return;const i=this.closest("form");i&&(e.preventDefault(),this.type==="submit"?i.requestSubmit():i.reset())}render(){if(this.slottedLink)return u`<slot @slotchange=${this.#n}></slot>`;const e=X({control:!0,[`variant-${this.variant}`]:!0,[`tone-${this.tone}`]:!0,[`size-${this.size}`]:!0}),i=u`
      <span
        class="content"
        part=${f("content")}
        ?data-loading=${this.loading}
      >
        ${this.icon?u`<hc-icon
                part=${f("icon")}
                type=${this.icon}
                size=${this.size}
              ></hc-icon>`:p}
        <span
          class="label"
          part=${f("label")}
        >
          <slot @slotchange=${this.#n}></slot>
        </span>
      </span>
      ${this.loading?u`<span
              class="spinner"
              part=${f("spinner")}
              aria-hidden="true"
            ></span>`:p}
    `;if(this.href&&!this.#e){const o=this.#s;return u`
        <a
          class=${e}
          part=${f("control")}
          href=${this.href}
          target=${o?"_blank":p}
          rel=${o?"noreferrer noopener":p}
          aria-label=${this.accessibilityLabel??p}
          @click=${this.#r}
        >
          ${i}
        </a>
      `}return u`
      <button
        class=${e}
        part=${f("control")}
        type="button"
        ?disabled=${this.disabled}
        aria-disabled=${this.loading?"true":p}
        aria-busy=${this.loading?"true":p}
        aria-label=${this.accessibilityLabel??p}
        @click=${this.#r}
      >
        ${i}
      </button>
    `}}d([z(F,"auto")],c.prototype,"variant",void 0);d([z(M,"auto")],c.prototype,"tone",void 0);d([z(B,"base")],c.prototype,"size",void 0);d([z(H,"button")],c.prototype,"type",void 0);d([x()],c.prototype,"disabled",void 0);d([x()],c.prototype,"loading",void 0);d([w({reflect:!0})],c.prototype,"href",void 0);d([w({reflect:!0})],c.prototype,"icon",void 0);d([w({attribute:"accessibility-label",reflect:!0})],c.prototype,"accessibilityLabel",void 0);d([C(".control")],c.prototype,"control",void 0);d([C("slot")],c.prototype,"labelSlot",void 0);d([A()],c.prototype,"slottedLink",void 0);k("button",c);const y="blob",U=1e4;function kt(a){V(y,{savedAt:Date.now(),state:a})}function xt(){const a=N(y);return W(y),!a||typeof a.savedAt!="number"||Date.now()-a.savedAt>U?null:a.state??null}function ht(){const a=N(y);return typeof a?.savedAt=="number"&&Date.now()-a.savedAt<=U}const L=()=>{I(()=>import("./define.CpctJF_F.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))};ht()?L():"requestIdleCallback"in window?requestIdleCallback(L,{timeout:2500}):setTimeout(L,1200);K()&&I(()=>import("./define.CnaJOMhg.js"),__vite__mapDeps([10,1,7,11,5,3,4]));export{kt as s,xt as t};
