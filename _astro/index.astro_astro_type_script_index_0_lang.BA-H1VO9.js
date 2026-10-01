import{t as p,i as f,B as u,b as v,n as b,d as g}from"./base-element.Cm4rcYS3.js";import{r as w}from"./state.Pgeo1wuR.js";import{p as y}from"./class-map.D00Ya1xp.js";import{b as m}from"./enum-prop.BAWDxAdj.js";import"./index.astro_astro_type_script_index_0_lang.D2jLuTuW.js";import"./_slug_.astro_astro_type_script_index_0_lang.BImirJF0.js";import"./define.CnaJOMhg.js";import"./style-map.CM_oELyq.js";import"./playback.CdgLhyHJ.js";const k=f`
  /*
   * Die weichen Kanten links und rechts. Eine Maske statt zweier
   * Verlaufs-Overlays: Overlays muessten die Hintergrundfarbe der Seite kennen
   * und waeren beim naechsten Theme-Wechsel als helle Balken sichtbar.
   */
  .viewport {
    display: block;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
    mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  }

  .track {
    display: flex;
    inline-size: max-content;
    animation: hc-marquee var(--marquee-duration, 44s) linear infinite;
  }

  :host([reverse]) .track {
    animation-direction: reverse;
  }

  :host([flush]) .viewport {
    -webkit-mask-image: none;
    mask-image: none;
  }

  /*
   * Der Abstand haengt an jedem Element, nicht als gap an der Spur.
   *
   * Mit gap fehlt hinter dem letzten Element eines Satzes der Zwischenraum,
   * und ein Satz ist damit um genau einen Abstand schmaler als der naechste.
   * Die Verschiebung um -100%/sets traefe dann jedes Mal ein Stueck daneben,
   * und der Versatz summierte sich sichtbar auf.
   */
  ::slotted(*) {
    flex: none;
    margin-inline-end: var(--marquee-gap, ${p("space-3")});
  }

  /*
   * Verschoben wird um genau einen Satz. Wie viele Saetze die Spur hat,
   * bestimmt die Komponente aus der Fensterbreite — zwei feste Saetze reissen
   * auf jedem Bildschirm auf, der breiter ist als ein Satz.
   */
  @keyframes hc-marquee {
    to {
      transform: translateX(calc(-100% / var(--marquee-sets, 2)));
    }
  }

  .viewport:hover .track,
  .viewport:focus-within .track {
    animation-play-state: paused;
  }

  /*
   * Ohne Bewegung wird das Band scrollbar statt still zu stehen: Ein
   * angehaltenes Band mit width:max-content verbirgt sonst alles jenseits
   * der Viewportbreite dauerhaft.
   */
  @media (prefers-reduced-motion: reduce) {
    .viewport {
      overflow-x: auto;
      scrollbar-width: none;
    }

    .viewport::-webkit-scrollbar {
      display: none;
    }

    .track {
      animation: none;
    }

    ::slotted([slot='clone']) {
      display: none;
    }
  }
`;var c=function(a,e,n,s){var r=arguments.length,t=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(a,e,n,s);else for(var d=a.length-1;d>=0;d--)(o=a[d])&&(t=(r<3?o(t):r>3?o(e,n,t):o(e,n))||t);return r>3&&t&&Object.defineProperty(e,n,t),t};const l="clone",h=2,S=12;class i extends u{constructor(){super(...arguments),this.duration=44,this.reverse=!1,this.flush=!1,this.sets=h,this.#e=null,this.#t=null}static{this.styles=[u.styles,k]}#e;#t;connectedCallback(){super.connectedCallback(),this.#e=new MutationObserver(()=>this.#n()),this.#t=new ResizeObserver(()=>this.#i()),this.#s()}disconnectedCallback(){super.disconnectedCallback(),this.#e?.disconnect(),this.#t?.disconnect(),this.#e=null,this.#t=null}firstUpdated(){const e=this.shadowRoot?.querySelector(".viewport");e&&this.#t?.observe(e),this.#n()}updated(e){e.has("sets")&&this.#n()}#s(){this.#e?.observe(this,{childList:!0,subtree:!0,characterData:!0})}get#r(){return[...this.children].filter(e=>e.slot!==l)}get#a(){return[...this.children].filter(e=>e.slot===l)}#i(){const e=this.#r,n=this.shadowRoot?.querySelector(".viewport");if(e.length===0||!n)return;const s=this.#o(e),r=n.getBoundingClientRect().width;if(s<=0||r<=0)return;const t=Math.min(S,Math.max(h,Math.ceil(r/s)+1));t!==this.sets&&(this.sets=t)}#o(e){const n=e[0],s=e.at(-1);if(!n||!s)return 0;const r=Number.parseFloat(getComputedStyle(n).marginInlineEnd)||0;return s.getBoundingClientRect().right-n.getBoundingClientRect().left+r}#n(){this.#e?.disconnect();try{for(const s of this.#a)s.remove();const e=this.#r;if(e.length===0)return;const n=document.createDocumentFragment();for(let s=1;s<this.sets;s++)for(const r of e){const t=r.cloneNode(!0);t.slot=l,t.setAttribute("aria-hidden","true"),t.setAttribute("inert",""),n.appendChild(t)}this.appendChild(n)}finally{this.#s(),requestAnimationFrame(()=>this.#i())}}render(){return v`
      <div
        class="viewport"
        style="--marquee-duration: ${this.duration}s; --marquee-sets: ${this.sets}"
      >
        <div
          class="track"
          part=${y("track")}
        >
          <slot></slot>
          <slot name=${l}></slot>
        </div>
      </div>
    `}}c([b({type:Number,reflect:!0})],i.prototype,"duration",void 0);c([m()],i.prototype,"reverse",void 0);c([m()],i.prototype,"flush",void 0);c([w()],i.prototype,"sets",void 0);g("marquee",i);
