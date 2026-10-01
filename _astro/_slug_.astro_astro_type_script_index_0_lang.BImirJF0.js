import{t as e,i as x,r,B as f,b as m,A as E,n as z,d as L}from"./base-element.Cm4rcYS3.js";import{r as w}from"./state.Pgeo1wuR.js";import{a as p,p as g}from"./class-map.D00Ya1xp.js";import{o as A}from"./style-map.CM_oELyq.js";import{n as u,b as C}from"./enum-prop.BAWDxAdj.js";import{f as b,c as y,r as M,a as N,P as $,S as v,b as T,g as O}from"./playback.CdgLhyHJ.js";import"./define.CnaJOMhg.js";const S=36,R=12;function W(n,t){const i=60/Math.max(1,t);return Array.from({length:S},(l,a)=>({height:18+Math.round(82*Math.abs(Math.sin(a*.62+n*1.7)*Math.cos(a*.21+n*.9))),duration:Number((i*(.5+a*7%5*.12)).toFixed(3)),offset:Number((-(a%6)*.07).toFixed(2)),litAt:Number((a*.22).toFixed(2))}))}function B(n){return`${String(Math.max(0,Math.round(n))).padStart(2,"0")}:00`}const I=r("11px"),U=r("13px"),V=r("2px"),k=r("2px"),_=r("3.125rem"),D=r("8rem"),H=r("15rem"),j=r("14rem"),P=r("5.25rem"),q=r("44rem"),G=x`
  .frame {
    container-type: inline-size;
  }

  .track {
    display: grid;
    grid-template-columns: ${e("control-height")} minmax(0, 1fr) auto;
    grid-template-areas:
      'play meta length'
      'play body body'
      'play wave wave';
    gap: ${e("space-2")} ${e("space-3")};
    position: relative;
    padding: ${e("space-4")} ${e("space-3")};
    align-items: start;
    border-block-end: ${e("border-width")} solid ${e("border")};
    transition: background-color ${e("duration-fast")} ${e("ease-out")};

    &:hover,
    &.active {
      background: ${e("surface-hover")};
    }
  }

  :host([compact]) .track {
    grid-template-columns: ${e("control-height")} minmax(0, 1fr);
    grid-template-areas:
      'play body'
      'play wave'
      'play length';
    align-items: center;
  }

  :host([compact]) .meta {
    display: none;
  }

  .play {
    display: grid;
    grid-area: play;
    position: relative;
    z-index: 1;
    inline-size: ${e("control-height")};
    block-size: ${e("control-height")};
    padding: 0;
    place-items: center;
    color: ${e("text")};
    background: ${e("surface-glass")};
    border: ${e("border-width-rule")} solid ${e("border-control")};
    border-radius: ${e("radius-circle")};
    cursor: pointer;

    &[aria-pressed='true'] {
      color: ${e("text-on-accent")};
      background: ${e("accent")};
      border-color: ${e("accent")};
    }

    &:focus-visible {
      outline: 2px solid ${e("border-focus")};
      outline-offset: 2px;
    }
  }

  .play__number {
    display: none;
    font-family: ${e("font-body")};
    font-size: ${e("font-size-track")};
    font-stretch: ${e("font-stretch-wide")};
    font-weight: ${e("font-weight-black")};
    color: ${e("accent")};
  }

  .play__icon {
    display: block;
    inline-size: ${I};
    block-size: ${U};
    margin-inline-start: ${k};
    background: currentColor;
    clip-path: polygon(0 0, 100% 50%, 0 100%);

    &.pause {
      margin-inline-start: 0;
      background: linear-gradient(90deg, currentColor 0 35%, transparent 35% 65%, currentColor 65%);
      clip-path: none;
    }
  }

  .meta {
    display: flex;
    grid-area: meta;
    gap: ${e("space-2")};
    min-inline-size: 0;
    align-items: center;
    font-family: ${e("font-mono")};
    font-size: ${e("font-size-2xs")};
    letter-spacing: ${e("tracking-wider")};
    color: ${e("text-muted")};
    text-transform: uppercase;
  }

  .meta__number::after {
    content: '·';
    margin-inline-start: ${e("space-2")};
  }

  .body {
    grid-area: body;
    min-inline-size: 0;
  }

  .wave {
    display: flex;
    grid-area: wave;
    gap: ${k};
    block-size: ${e("space-6")};
    align-items: center;
  }

  .bar {
    flex: 1;
    min-inline-size: ${V};
    block-size: var(--bar-height, 50%);
    background: ${e("border-strong")};
    transform-origin: center;

    &.played {
      background: ${e("accent")};
    }
  }

  .active .bar {
    background: ${e("border-strong")};
    animation:
      hc-track-eq var(--bar-duration, 0.4s) ease-in-out var(--bar-offset, 0s) infinite alternate,
      hc-track-lit 0.01s linear var(--bar-lit, 0s) forwards;
  }

  .length {
    grid-area: length;
    font-family: ${e("font-mono")};
    font-size: ${e("font-size-xs")};
    color: ${e("text-muted")};
    text-align: end;
    white-space: nowrap;

    &.active {
      color: ${e("accent")};
    }

    &.active::before {
      content: '▶ ' / '';
    }
  }

  @keyframes hc-track-eq {
    from {
      transform: scaleY(0.25);
    }

    to {
      transform: scaleY(1);
    }
  }

  @keyframes hc-track-lit {
    to {
      background: ${e("accent")};
    }
  }

  @container (inline-size >= ${q}) {
    .track {
      grid-template-columns:
        ${_} minmax(0, 1fr) ${D} minmax(0, ${H})
        ${P};
      grid-template-areas: 'play body meta wave length';
      gap: ${e("space-5")};
      padding: ${e("space-6")} ${e("space-3")};
      align-items: center;
    }

    :host([compact]) .track {
      grid-template-columns:
        ${_} minmax(0, 1fr) minmax(0, ${j})
        ${P};
      grid-template-areas: 'play body wave length';
      padding-block: ${e("space-5")};
    }

    .play {
      justify-self: start;
      inline-size: auto;
      background: transparent;
      border-color: transparent;

      &[aria-pressed='true'] {
        color: ${e("accent")};
        background: transparent;
        border-color: transparent;
      }
    }

    .play__number {
      display: block;
    }

    .play__icon {
      display: none;
    }

    .track:hover .play__number,
    .play:focus-visible .play__number,
    .play[aria-pressed='true'] .play__number {
      display: none;
    }

    .track:hover .play__icon,
    .play:focus-visible .play__icon,
    .play[aria-pressed='true'] .play__icon {
      display: block;
      color: ${e("accent")};
    }

    .meta {
      font-size: ${e("font-size-xs")};
      color: ${e("text-secondary")};
    }

    .meta__number {
      display: none;
    }

    .wave {
      block-size: ${e("space-10")};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .track {
      transition: none;
    }

    .active .bar {
      background: ${e("accent")};
      animation: none;
    }
  }
`;var c=function(n,t,i,l){var a=arguments.length,s=a<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,i):l,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,t,i,l);else for(var h=n.length-1;h>=0;h--)(d=n[h])&&(s=(a<3?d(s):a>3?d(t,i,s):d(t,i))||s);return a>3&&s&&Object.defineProperty(t,i,s),s};class o extends f{constructor(){super(...arguments),this.number="",this.bpm=120,this.minutes=5,this.compact=!1,this.seed=1,this.isPlaying=!1,this.isPreviewing=!1,this.#i=t=>{t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.target?.closest?.("a[href]")&&(this.isPlaying||this.#d())},this.#a=t=>{t.pointerType!=="mouse"||this.isPlaying||(this.isPreviewing=!0,b(this,this.#c(!0)))},this.#r=t=>{t.pointerType!=="mouse"||!this.isPreviewing||(this.isPreviewing=!1,this.isPlaying||y(this,{id:this.#e,isPreview:!0}))},this.#n=t=>{const i=M(t);!i||i.isPreview||(this.isPlaying=i.id===this.#e)},this.#s=t=>{const i=N(t);!i||i.isPreview||(i.id===null||i.id===this.#e)&&(this.isPlaying=!1)}}static{this.styles=[f.styles,G]}connectedCallback(){super.connectedCallback(),document.addEventListener($,this.#n),document.addEventListener(v,this.#s),this.addEventListener("pointerenter",this.#a),this.addEventListener("pointerleave",this.#r),this.addEventListener("click",this.#i),this.isPlaying=T()?.detail.id===this.#e}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener($,this.#n),document.removeEventListener(v,this.#s),this.removeEventListener("pointerenter",this.#a),this.removeEventListener("pointerleave",this.#r),this.removeEventListener("click",this.#i)}get#t(){return this.querySelector("a[href]")}get#l(){return(this.querySelector("h1, h2, h3, h4, h5, h6")??this.#t)?.textContent?.trim()??""}get#e(){return this.#t?.getAttribute("href")??`track-${this.seed}`}#c(t){return{id:this.#e,title:this.#l,href:this.#t?.getAttribute("href")??null,bpm:this.bpm,minutes:this.minutes,isPreview:t}}#p(){if(this.isPlaying){this.isPlaying=!1,y(this,{id:this.#e,isPreview:!1});return}this.#d(),this.#h()}#d(){this.isPlaying=!0,b(this,this.#c(!1))}#h(){const t=this.#t?.href;t&&O(this,"hc-open",{href:t})&&globalThis.location.assign(t)}#i;#a;#r;#n;#s;get#o(){return this.isPlaying||this.isPreviewing}#m(t,i){return m`<span
      class=${p({bar:!0,played:i<R})}
      style=${A({"--bar-height":`${t.height}%`,"--bar-duration":`${t.duration}s`,"--bar-offset":`${t.offset}s`,"--bar-lit":`${t.litAt}s`})}
    ></span>`}#u(){const t=this.#o?`${this.bpm} BPM`:B(this.minutes);return m`<span class=${p({length:!0,active:this.#o})}>${t}</span>`}render(){const t=this.#l;return m`
      <div class="frame">
        <div class=${p({track:!0,active:this.#o})}>
          <button
            class="play"
            part=${g("play")}
            type="button"
            aria-pressed=${this.isPlaying?"true":"false"}
            aria-label=${this.isPlaying?`${t||"Track"} anhalten`:`${t||"Track"} abspielen und Artikel oeffnen`}
            @click=${this.#p}
          >
            <span
              class="play__number"
              aria-hidden="true"
              >${this.number||E}</span
            >
            <span
              class=${p({play__icon:!0,pause:this.isPlaying})}
              aria-hidden="true"
            ></span>
          </button>
          <div class="meta">
            <span
              class="meta__number"
              aria-hidden="true"
              >${this.number}</span
            >
            <span class="genre"><slot name="genre"></slot></span>
          </div>
          <div class="body"><slot></slot></div>
          <span
            class="wave"
            part=${g("wave")}
            aria-hidden="true"
            >${W(this.seed,this.bpm).map((i,l)=>this.#m(i,l))}</span
          >
          ${this.#u()}
        </div>
      </div>
    `}}c([z({reflect:!0})],o.prototype,"number",void 0);c([u({min:60,max:200,fallback:120})],o.prototype,"bpm",void 0);c([u({min:0,max:99,fallback:5})],o.prototype,"minutes",void 0);c([C()],o.prototype,"compact",void 0);c([u({min:0,max:999,fallback:1})],o.prototype,"seed",void 0);c([w()],o.prototype,"isPlaying",void 0);c([w()],o.prototype,"isPreviewing",void 0);L("track",o);
