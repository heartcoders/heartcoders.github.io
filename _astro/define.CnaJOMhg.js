import{t as e,i as y,r as i,B as u,b as c,A as v,d as x}from"./base-element.Cm4rcYS3.js";import{r as k}from"./state.Pgeo1wuR.js";import{o as f}from"./style-map.CM_oELyq.js";import{b as _}from"./enum-prop.BAWDxAdj.js";import{r as w,a as P,P as h,S as m,b as z,c as E}from"./playback.CdgLhyHJ.js";import{p as b}from"./class-map.D00Ya1xp.js";const T=i("4px"),$=i("22px"),A=i("3px"),S=i("3px"),H=i("12px"),R=i("14px"),C=i("2px"),D=i("32rem"),G=y`
  .bar {
    position: fixed;
    inset-inline: ${e("space-2")};
    inset-block-end: calc(${e("space-2")} + env(safe-area-inset-bottom));
    z-index: ${e("z-player")};
    max-inline-size: ${D};
    margin-inline: auto;
    overflow: hidden;
    background: ${e("surface-player")};
    border: ${e("border-width")} solid ${e("accent-glow")};
    backdrop-filter: ${e("backdrop-glass")};
    -webkit-backdrop-filter: ${e("backdrop-glass")};
    animation: hc-player-in ${e("duration-slow")} ${e("ease-out")} both;

    &[data-resumed] {
      animation: none;
    }

    &[hidden] {
      display: none;
    }
  }

  .row {
    display: grid;
    grid-template-columns: ${e("tap-target")} minmax(0, 1fr) ${e("control-height")};
    gap: ${e("space-3")};
    padding: ${e("space-2")} ${e("space-2")} ${e("space-2")} ${e("space-3")};
    align-items: center;
  }

  .eq {
    display: flex;
    gap: ${A};
    block-size: ${$};
    align-items: flex-end;
    justify-content: center;

    & > span {
      inline-size: ${T};
      block-size: ${$};
      background: ${e("accent")};
      transform-origin: bottom;
      animation: hc-player-eq var(--beat, 0.5s) ease-in-out infinite alternate;
    }

    & > span:nth-child(2) {
      animation-duration: calc(var(--beat, 0.5s) * 0.7);
    }

    & > span:nth-child(3) {
      animation-duration: calc(var(--beat, 0.5s) * 1.3);
    }
  }

  .text {
    display: grid;
    gap: ${C};
    min-inline-size: 0;
  }

  .label {
    font-family: ${e("font-mono")};
    font-size: ${e("font-size-2xs")};
    letter-spacing: ${e("tracking-widest")};
    color: ${e("accent")};
    text-transform: uppercase;
  }

  .title {
    overflow: hidden;
    font-size: ${e("font-size-md")};
    font-weight: ${e("font-weight-bold")};
    color: ${e("text")};
    white-space: nowrap;
    text-decoration: none;
    text-overflow: ellipsis;

    &:hover {
      color: ${e("accent")};
    }

    &:focus-visible {
      outline: 2px solid ${e("border-focus")};
      outline-offset: 2px;
    }
  }

  .pause {
    display: grid;
    inline-size: ${e("control-height")};
    block-size: ${e("control-height")};
    padding: 0;
    place-items: center;
    color: ${e("text-on-accent")};
    background: ${e("accent")};
    border: 0;
    border-radius: ${e("radius-circle")};
    cursor: pointer;

    &:focus-visible {
      outline: 2px solid ${e("text")};
      outline-offset: 2px;
    }
  }

  .pause__icon {
    inline-size: ${H};
    block-size: ${R};
    background: linear-gradient(90deg, currentColor 0 35%, transparent 35% 65%, currentColor 65%);
  }

  .progress {
    display: block;
    block-size: ${S};
    background: ${e("border-subtle")};
  }

  .progress__fill {
    display: block;
    inline-size: 0;
    block-size: 100%;
    background: ${e("accent")};
    animation: hc-player-progress var(--length, 300s) linear var(--elapsed, 0s) both;
  }

  @keyframes hc-player-in {
    from {
      transform: translateY(100%);
    }
  }

  @keyframes hc-player-eq {
    from {
      transform: scaleY(0.25);
    }

    to {
      transform: scaleY(1);
    }
  }

  @keyframes hc-player-progress {
    to {
      inline-size: 100%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .bar,
    .eq > span,
    .progress__fill {
      animation: none;
    }
  }
`;var g=function(n,t,a,r){var o=arguments.length,s=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,a):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,t,a,r);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(s=(o<3?l(s):o>3?l(t,a,s):l(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};class p extends u{constructor(){super(...arguments),this.playing=!1,this.track=null,this.#e=0,this.#t=!1,this.#a=t=>{const a=w(t);!a||a.isPreview||(this.track=a,this.#e=Date.now(),this.#t=!1,this.playing=!0)},this.#s=t=>{const a=P(t);!a||a.isPreview||!this.track||a.id!==null&&a.id!==this.track.id||(this.track=null,this.playing=!1)}}static{this.styles=[u.styles,G]}#e;#t;connectedCallback(){super.connectedCallback(),document.addEventListener(h,this.#a),document.addEventListener(m,this.#s),this.#i()}#i(){const t=z();t&&(this.track=t.detail,this.#e=t.startedAt,this.#t=!0,this.playing=!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(h,this.#a),document.removeEventListener(m,this.#s)}#a;#s;#n(){this.track&&E(this,{id:this.track.id,isPreview:!1})}#r(t){return t.href?c`<a
      class="title"
      href=${t.href}
      >${t.title}</a
    >`:c`<span class="title">${t.title}</span>`}render(){const t=this.track;return c`
      <aside
        class="bar"
        part=${b("bar")}
        aria-label="Wiedergabe"
        ?hidden=${!t}
        ?data-resumed=${this.#t}
      >
        ${t?this.#o(t):v}
      </aside>
    `}#o(t){const a=`${(60/t.bpm).toFixed(3)}s`;return c`
      <div class="row">
        <span
          class="eq"
          aria-hidden="true"
          style=${f({"--beat":a})}
          ><span></span><span></span><span></span
        ></span>
        <div
          class="text"
          aria-live="polite"
        >
          <span class="label">Now Playing · ${t.bpm} BPM</span>
          ${this.#r(t)}
        </div>
        <button
          class="pause"
          part=${b("pause")}
          type="button"
          aria-label=${`${t.title} anhalten`}
          @click=${this.#n}
        >
          <span
            class="pause__icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
      <span
        class="progress"
        aria-hidden="true"
        ><span
          class="progress__fill"
          style=${f({"--length":`${Math.max(1,t.minutes)*60}s`,"--elapsed":`${-Math.max(0,(Date.now()-this.#e)/1e3)}s`})}
        ></span
      ></span>
    `}}g([_()],p.prototype,"playing",void 0);g([k()],p.prototype,"track",void 0);x("now-playing",p);export{p as NowPlaying};
