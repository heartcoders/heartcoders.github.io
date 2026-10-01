const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/define.BWj90Z7d.js","_astro/base-element.Cm4rcYS3.js","_astro/state.Pgeo1wuR.js","_astro/class-map.D00Ya1xp.js","_astro/a11y.DrKT5_4z.js","_astro/define.BTFn-6J-.js","_astro/enum-prop.BAWDxAdj.js","_astro/define.nJBRnC-B.js","_astro/style-map.CM_oELyq.js"])))=>i.map(i=>d[i]);
import{_ as f}from"./preload-helper.BlTxHScW.js";import{t as e,i as k,r as $,B as b,b as p,n as u,d as z,e as I,D as v,A as m}from"./base-element.Cm4rcYS3.js";import{p as h,a as S}from"./class-map.D00Ya1xp.js";import{r as g}from"./state.Pgeo1wuR.js";import{e as O}from"./query.C-S87uso.js";const A=$("4px"),L=k`
  .rail {
    position: sticky;
    inset-block-start: 0;
    z-index: ${e("z-progress")};
    block-size: ${A};
    background: ${e("border-subtle")};
  }

  .bar {
    inline-size: var(--progress, 0%);
    block-size: 100%;
    background: ${e("accent")};
    box-shadow: ${e("shadow-glow")};
  }
`;var R=function(r,t,s,i){var n=arguments.length,o=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,s):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,s,i);else for(var d=r.length-1;d>=0;d--)(a=r[d])&&(o=(n<3?a(o):n>3?a(t,s,o):a(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o};class w extends b{static{this.styles=[b.styles,L]}#e=null;#i=0;connectedCallback(){super.connectedCallback(),globalThis.addEventListener("scroll",this.#t,{passive:!0}),globalThis.addEventListener("resize",this.#t,{passive:!0}),this.#t()}disconnectedCallback(){super.disconnectedCallback(),globalThis.removeEventListener("scroll",this.#t),globalThis.removeEventListener("resize",this.#t),this.#e!==null&&cancelAnimationFrame(this.#e),this.#e=null}#t=()=>{this.#e===null&&(this.#e=requestAnimationFrame(()=>{this.#e=null,this.#s()}))};#s(){const t=this.#n();t!==this.#i&&(this.#i=t,this.style.setProperty("--progress",`${(t*100).toFixed(2)}%`))}get progress(){return this.#i}#n(){const t=globalThis.innerHeight,s=this.for?document.querySelector(this.for):null;if(s){const n=s.getBoundingClientRect(),o=n.height-t;return o<=0?1:y(-n.top/o)}const i=document.documentElement.scrollHeight-t;return i<=0?1:y(globalThis.scrollY/i)}render(){return p`
      <div
        class="rail"
        aria-hidden="true"
      >
        <div
          class="bar"
          part=${h("bar")}
        ></div>
      </div>
    `}}R([u({attribute:"for"})],w.prototype,"for",void 0);const y=r=>Math.min(1,Math.max(0,r));z("read-progress",w);const T=$("3px"),_=$("14px"),P=$("2px"),q=k`
  :host > * {
    font-family: ${e("font-body")};
  }

  .box {
    display: none;
    border: ${e("border-width-rule")} solid ${e("rule")};
  }

  .header {
    display: flex;
    margin: 0;
    padding: ${e("space-3")} ${e("space-4")};
    justify-content: space-between;
    font-family: ${e("font-mono")};
    font-size: ${e("font-size-2xs")};
    letter-spacing: ${e("tracking-label")};
    color: ${e("text")};
    text-transform: uppercase;
    border-block-end: ${e("border-width-rule")} solid ${e("rule")};
  }

  .header__count {
    color: ${e("accent")};
  }

  .list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .entry {
    display: grid;
    grid-template-columns: ${e("space-8")} 1fr ${e("space-4")};
    gap: ${e("space-2")};
    min-block-size: ${e("tap-target")};
    padding: ${e("space-3")} ${e("space-4")};
    align-items: center;
    font-size: ${e("font-size-md")};
    line-height: ${e("line-height-snug")};
    color: ${e("text-secondary")};
    text-decoration: none;
    border-block-end: ${e("border-width")} solid ${e("border")};
    transition:
      background-color ${e("duration-fast")} ${e("ease-out")},
      color ${e("duration-fast")} ${e("ease-out")};

    &:hover {
      color: ${e("text")};
    }

    &.active {
      font-weight: ${e("font-weight-bold")};
      color: ${e("text-on-accent")};
      background: ${e("accent")};
    }

    &:focus-visible {
      outline: 2px solid ${e("border-focus")};
      outline-offset: -4px;
    }
  }

  li:last-child .entry {
    border-block-end: 0;
  }

  .entry__number {
    font-family: ${e("font-mono")};
    font-size: ${e("font-size-xs")};
  }

  .level-3 .entry__label {
    padding-inline-start: ${e("space-3")};
    font-size: ${e("font-size-sm")};
  }

  .eq {
    display: flex;
    gap: ${P};
    block-size: ${_};
    align-items: flex-end;

    & > span {
      inline-size: ${T};
      block-size: ${_};
      background: currentColor;
      transform-origin: bottom;
      animation: hc-eq 0.45s ease-in-out infinite alternate;
    }

    & > span:nth-child(2) {
      animation-duration: 0.6s;
      animation-delay: 0.15s;
    }

    & > span:nth-child(3) {
      animation-duration: 0.5s;
      animation-delay: 0.3s;
    }
  }

  @keyframes hc-eq {
    from {
      transform: scaleY(0.25);
    }

    to {
      transform: scaleY(1);
    }
  }

  .pill {
    all: unset;
    box-sizing: border-box;
    display: flex;
    gap: ${e("space-3")};
    position: fixed;
    inset-block-end: calc(
      var(--player-offset, 0px) + ${e("space-4")} + env(safe-area-inset-bottom)
    );
    inset-inline-start: 50%;
    z-index: ${e("z-float")};
    max-inline-size: calc(100% - ${e("space-8")});
    min-block-size: ${e("control-height")};
    padding-inline: ${e("space-5")};
    align-items: center;
    font-family: ${e("font-body")};
    font-size: ${e("font-size-sm")};
    font-stretch: ${e("font-stretch-semi")};
    font-weight: ${e("font-weight-extrabold")};
    color: ${e("text-on-accent")};
    white-space: nowrap;
    background: ${e("accent")};
    border-radius: ${e("radius-pill")};
    box-shadow: ${e("shadow-float")};
    translate: -50% 0;
    cursor: pointer;
    transition: inset-block-end ${e("duration-slow")} ${e("ease-out")};

    &:focus-visible {
      outline: 2px solid ${e("text")};
      outline-offset: 3px;
    }
  }

  .pill__label {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .sheet {
    inline-size: 100%;
    max-inline-size: 100%;
    max-block-size: 80dvh;
    margin: auto 0 0;
    padding: 0;
    color: ${e("text")};
    background: ${e("bg-raised")};
    border: 0;
    border-block-start: ${e("border-width-rule")} solid ${e("accent")};

    &[open] {
      animation: hc-sheet ${e("duration-slow")} ${e("ease-out")} both;
    }

    &::backdrop {
      background: ${e("surface-scrim")};
    }

    & .header {
      padding-inline: 0;
      border-block-end-color: ${e("border")};
    }

    & .entry {
      padding-inline: 0;
    }

    & .entry.active {
      padding-inline: ${e("space-3")};
    }
  }

  .sheet__body {
    padding: ${e("space-3")} ${e("space-4")} calc(${e("space-5")} + env(safe-area-inset-bottom));
  }

  .sheet__handle {
    display: block;
    inline-size: ${e("space-10")};
    block-size: ${e("space-1")};
    margin: 0 auto ${e("space-3")};
    background: ${e("border-strong")};
    border-radius: ${e("radius-pill")};
  }

  @keyframes hc-sheet {
    from {
      transform: translateY(100%);
    }
  }

  @media (min-width: ${I("bp-lg")}) {
    .box {
      display: block;
    }

    .pill,
    .sheet {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .eq > span {
      animation: none;
    }

    .sheet[open] {
      animation: none;
    }

    .entry,
    .pill {
      transition: none;
    }
  }
`;var c=function(r,t,s,i){var n=arguments.length,o=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,s):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,s,i);else for(var d=r.length-1;d>=0;d--)(a=r[d])&&(o=(n<3?a(o):n>3?a(t,s,o):a(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o};const C="A";class l extends b{constructor(){super(...arguments),this.for="article",this.levels="h2",this.label="Side A",this.pillLabel="Inhalt",this.entries=[],this.activeId=null,this.isSheetOpen=!1,this.#e=null}static{this.styles=[b.styles,q]}#e;disconnectedCallback(){super.disconnectedCallback(),this.#e?.disconnect(),this.#e=null}firstUpdated(){this.#i(),this.#s()}#i(){const t=document.querySelector(this.for);if(!t){v&&this.warn(`for="${this.for}" trifft kein Element.`);return}const s=[...t.querySelectorAll(this.levels)],i=[];for(const n of s){if(!n.id){v&&this.warn(`Ueberschrift ohne id uebersprungen: "${n.textContent?.trim()}"`);continue}i.push({id:n.id,label:this.#t(n),level:Number(n.tagName.slice(1))||2})}this.entries=i}#t(t){const s=t.cloneNode(!0);for(const i of s.querySelectorAll("[data-heading-number]"))i.remove();return s.textContent?.trim()||t.id}#s(){if(this.entries.length===0)return;this.#e?.disconnect();const t=new Set;this.#e=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting?t.add(i.target.id):t.delete(i.target.id);this.activeId=this.entries.find(i=>t.has(i.id))?.id??this.activeId},{rootMargin:"0px 0px -60% 0px",threshold:0});for(const s of this.entries){const i=document.getElementById(s.id);i&&this.#e.observe(i)}}get#n(){return this.entries.find(t=>t.id===this.activeId)?.label??this.pillLabel}#a(){this.sheet?.showModal(),this.isSheetOpen=!0}#l(){this.isSheetOpen=!1}#c(t){t.target===this.sheet&&this.sheet?.close()}#d(){this.sheet?.close()}#o(){return p`<span
      class="eq"
      aria-hidden="true"
      ><span></span><span></span><span></span
    ></span>`}#r(t){return p`
      <ol
        class="list"
        part=${h("list")}
      >
        ${this.entries.map((s,i)=>this.#p(s,i,t))}
      </ol>
    `}#p(t,s,i){const n=t.id===this.activeId;return p`
      <li>
        <a
          class=${S({entry:!0,[`level-${t.level}`]:!0,active:n})}
          part=${h("entry")}
          href="#${t.id}"
          aria-current=${n?"location":m}
          @click=${i?this.#d:m}
        >
          <span class="entry__number">${C}${s+1}</span>
          <span class="entry__label">${t.label}</span>
          ${n?this.#o():m}
        </a>
      </li>
    `}#h(){const t=String(this.entries.length).padStart(2,"0");return p`
      <p class="header">
        <span id="toc-label">${this.label}</span>
        <span class="header__count">${t} Tracks</span>
      </p>
    `}render(){return this.entries.length===0?p``:p`
      <nav
        class="box"
        aria-labelledby="toc-label"
      >
        ${this.#h()} ${this.#r(!1)}
      </nav>
      <button
        class="pill"
        part=${h("pill")}
        type="button"
        aria-haspopup="dialog"
        aria-expanded=${this.isSheetOpen?"true":"false"}
        @click=${this.#a}
      >
        ${this.#o()}
        <span class="pill__label">${this.#n}</span>
      </button>
      <dialog
        class="sheet"
        part=${h("sheet")}
        aria-label="Inhaltsverzeichnis"
        @close=${this.#l}
        @click=${this.#c}
      >
        <div class="sheet__body">
          <span
            class="sheet__handle"
            aria-hidden="true"
          ></span>
          <p class="header">
            <span>${this.label}</span>
            <span class="header__count"
              >${String(this.entries.length).padStart(2,"0")} Tracks</span
            >
          </p>
          ${this.#r(!0)}
        </div>
      </dialog>
    `}}c([u({attribute:"for"})],l.prototype,"for",void 0);c([u({attribute:"levels"})],l.prototype,"levels",void 0);c([u()],l.prototype,"label",void 0);c([u({attribute:"pill-label"})],l.prototype,"pillLabel",void 0);c([g()],l.prototype,"entries",void 0);c([g()],l.prototype,"activeId",void 0);c([g()],l.prototype,"isSheetOpen",void 0);c([O("dialog")],l.prototype,"sheet",void 0);z("toc",l);document.querySelector("hc-code")&&(f(()=>import("./define.BWj90Z7d.js"),__vite__mapDeps([0,1,2,3,4,5,6])),f(()=>import("./define.BTFn-6J-.js").then(r=>r.d),__vite__mapDeps([5,1,3,6])));const E=[...document.querySelectorAll("hc-tile-lab")],[x]=E;if(x?.closest(".article-hero"))f(()=>import("./define.nJBRnC-B.js"),__vite__mapDeps([7,1,8,3,6,4]));else if(x){const r=new IntersectionObserver((t,s)=>{t.some(i=>i.isIntersecting)&&(s.disconnect(),f(()=>import("./define.nJBRnC-B.js"),__vite__mapDeps([7,1,8,3,6,4])))},{rootMargin:"200px"});for(const t of E)r.observe(t)}
