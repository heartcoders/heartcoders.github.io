import{t as e,i as x,r as s,B as f,D as v,A as u,b as $,n as b,d as k}from"./base-element.Cm4rcYS3.js";import{r as y}from"./state.Pgeo1wuR.js";import{p as o}from"./class-map.D00Ya1xp.js";import{v as g}from"./a11y.DrKT5_4z.js";import"./define.BTFn-6J-.js";import"./enum-prop.BAWDxAdj.js";const m=s("10px"),w=s("16px"),z=s("32px"),S=s("38px"),_=s("2px 5px"),C=x`
  .block {
    display: block;
    margin-block: var(--hc-code-margin, ${e("space-8")});
    margin-inline: 0;
    overflow: hidden;
    container-type: inline-size;
    background: ${e("gradient-code")};
    border: ${e("border-width")} solid ${e("code-border")};
    border-radius: ${e("radius-lg")};
    box-shadow: ${e("shadow-code")};
  }

  .header {
    display: flex;
    gap: ${e("space-3")};
    block-size: ${e("control-height")};
    padding-inline: ${e("space-3")} ${e("space-2")};
    align-items: center;
    justify-content: space-between;
    background: ${e("code-bar")};
    border-block-end: ${e("border-width")} solid ${e("code-divider")};
  }

  .tabs {
    display: flex;
    gap: ${e("space-3")};
    min-inline-size: 0;
    block-size: 100%;
    align-items: center;
  }

  .dots {
    flex: none;
    inline-size: ${m};
    block-size: ${m};
    margin-inline-end: ${e("space-8")};
    background: ${e("accent")};
    border-radius: ${e("radius-circle")};
    box-shadow:
      ${w} 0 0 ${e("border-strong")},
      ${z} 0 0 ${e("border-subtle")};
  }

  .tab {
    display: flex;
    gap: ${e("space-2")};
    min-inline-size: 0;
    block-size: 100%;
    margin-block-end: -1px;
    padding-inline: ${e("space-3")};
    align-items: center;
    background: ${e("code-tab")};
    border-inline: ${e("border-width")} solid ${e("code-divider")};
    box-shadow: inset 0 2px 0 ${e("accent")};
  }

  .language {
    flex: none;
    padding: ${_};
    font-family: ${e("font-mono")};
    font-size: ${e("font-size-2xs")};
    font-weight: ${e("font-weight-semibold")};
    letter-spacing: ${e("tracking-wide")};
    color: ${e("text-inverse")};
    text-transform: uppercase;
    background: ${e("syntax-property")};
    border-radius: ${e("radius-xs")};
  }

  .filename {
    overflow: hidden;
    font-family: ${e("font-mono")};
    font-size: ${e("font-size-xs")};
    color: ${e("text")};
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .copy {
    display: inline-flex;
    flex: none;
    gap: ${e("space-2")};
    position: relative;
    min-block-size: ${S};
    padding-inline: ${e("space-3")};
    align-items: center;
    font-family: ${e("font-mono")};
    font-size: ${e("font-size-xs")};
    letter-spacing: ${e("tracking-wide")};
    color: ${e("text")};
    background: transparent;
    border: ${e("border-width")} solid ${e("border-strong")};
    border-radius: ${e("radius-md")};
    cursor: pointer;
    transition:
      color ${e("duration-fast")} ${e("ease-out")},
      background-color ${e("duration-fast")} ${e("ease-out")},
      border-color ${e("duration-fast")} ${e("ease-out")};

    &::after {
      content: '';
      position: absolute;
      inset: 50% auto auto 50%;
      min-inline-size: ${e("tap-target")};
      min-block-size: ${e("tap-target")};
      translate: -50% -50%;
    }

    &:focus-visible {
      outline: 2px solid ${e("border-focus")};
      outline-offset: 2px;
    }

    &[data-state='done'] {
      color: ${e("accent")};
      border-color: ${e("accent")};
    }

    &[data-state='failed'] {
      color: ${e("text-critical")};
      border-color: ${e("border-critical")};
    }

    &:hover,
    &[data-state]:hover {
      color: ${e("text-on-accent")};
      background: ${e("accent")};
      border-color: ${e("accent")};
    }
  }

  @container (inline-size < 22rem) {
    .copy__label {
      ${g}
    }

    .dots {
      margin-inline-end: ${e("space-6")};
    }
  }

  .body {
    display: block;
  }

  ::slotted(pre) {
    margin: 0;
    padding-block: ${e("space-4")};
    overflow-x: auto;
    font-family: ${e("font-mono")};
    font-size: ${e("font-size-sm")};
    line-height: ${e("line-height-code")};
    color: ${e("text")};
    tab-size: 2;
  }

  .statusbar {
    display: flex;
    gap: ${e("space-3")};
    padding: ${e("space-2")} ${e("space-3")};
    justify-content: space-between;
    font-family: ${e("font-mono")};
    font-size: ${e("font-size-2xs")};
    letter-spacing: ${e("tracking-wide")};
    color: ${e("text-subtle")};
    border-block-start: ${e("border-width")} solid ${e("code-divider")};
  }

  .statusbar__lines::before {
    content: '●';
    margin-inline-end: ${e("space-2")};
    color: ${e("accent")};
  }

  .status {
    ${g}
  }

  @media (prefers-reduced-motion: reduce) {
    .copy {
      transition: none;
    }
  }
`;var r=function(c,t,n,l){var d=arguments.length,i=d<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,n):l,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(c,t,n,l);else for(var h=c.length-1;h>=0;h--)(p=c[h])&&(i=(d<3?p(i):d>3?p(t,n,i):p(t,n))||i);return d>3&&i&&Object.defineProperty(t,n,i),i};const D=1600;class a extends f{constructor(){super(...arguments),this.noHeader=!1,this.copyState="idle",this.lineCount=0,this.#e=null}static{this.styles=[f.styles,C]}#e;disconnectedCallback(){super.disconnectedCallback(),this.#e!==null&&clearTimeout(this.#e),this.#e=null}firstUpdated(){this.#i(),v&&(this.querySelector("pre")||this.warn("Kein <pre> im Slot. <hc-code> kopiert den Text des ersten <pre> im Light DOM — ohne eines gibt es nichts zu kopieren."))}get#t(){return this.querySelector("pre")?.textContent??""}#i(){const t=this.#t.replace(/\n$/,"");this.lineCount=t?t.split(`
`).length:0}async#n(){const t=this.#t;if(t){try{await navigator.clipboard.writeText(t),this.copyState="done",this.dispatchEvent(new CustomEvent("hc-copy",{detail:{length:t.length},bubbles:!0,composed:!0}))}catch{this.copyState="failed"}this.#e!==null&&clearTimeout(this.#e),this.#e=setTimeout(()=>{this.copyState="idle",this.#e=null},D)}}get#o(){return this.copyState==="done"?"Kopiert":this.copyState==="failed"?"Fehlgeschlagen":"Copy"}#a(){return this.noHeader?u:$`
      <div
        class="header"
        part=${o("header")}
      >
        <div class="tabs">
          <span
            class="dots"
            aria-hidden="true"
          ></span>
          <span class="tab">
            ${this.#s()}
            <span
              class="filename"
              part=${o("filename")}
              >${this.filename??u}</span
            >
          </span>
        </div>
        <button
          class="copy"
          part=${o("copy")}
          type="button"
          data-state=${this.copyState}
          aria-label=${this.filename?`${this.filename} in die Zwischenablage kopieren`:"Code in die Zwischenablage kopieren"}
          @click=${this.#n}
        >
          <hc-icon
            class="copy__icon"
            type=${this.copyState==="done"?"check":"copy"}
            size="small"
          ></hc-icon>
          <span class="copy__label">${this.#o}</span>
        </button>
      </div>
    `}#s(){return this.language?$`<span
      class="language"
      part=${o("language")}
      >${this.language}</span
    >`:u}#r(){if(this.noHeader||this.lineCount===0)return u;const t=`${this.lineCount} ${this.lineCount===1?"Zeile":"Zeilen"}`,n=this.language?` · ${this.language.toUpperCase()}`:"";return $`
      <div
        class="statusbar"
        part=${o("statusbar")}
      >
        <span class="statusbar__lines">${t}${n}</span>
        <span>UTF-8 · LF</span>
      </div>
    `}render(){return $`
      <figure class="block">
        ${this.#a()}
        <div
          class="body"
          part=${o("body")}
        >
          <slot @slotchange=${this.#i}></slot>
        </div>
        ${this.#r()}
        <!--
          Die Statusmeldung liegt getrennt vom Button. Der sichtbare Text im
          Button aendert sich zwar auch, aber ein Screenreader liest den
          geaenderten Namen des gerade betaetigten Elements nicht zuverlaessig
          vor -- eine eigene Live-Region tut das.
        -->
        <span
          class="status"
          role="status"
          aria-live="polite"
        >
          ${this.copyState==="done"?"Code in die Zwischenablage kopiert":this.copyState==="failed"?"Kopieren fehlgeschlagen. Der Code laesst sich von Hand markieren.":""}
        </span>
      </figure>
    `}}r([b({reflect:!0})],a.prototype,"filename",void 0);r([b({reflect:!0})],a.prototype,"language",void 0);r([b({type:Boolean,reflect:!0,attribute:"no-header"})],a.prototype,"noHeader",void 0);r([y()],a.prototype,"copyState",void 0);r([y()],a.prototype,"lineCount",void 0);k("code",a);export{a as Code};
