import{t as e,i as m,B as h,D as $,b as u,n as b,d as v}from"./base-element.Cm4rcYS3.js";import{r as g}from"./state.Pgeo1wuR.js";import{p}from"./class-map.D00Ya1xp.js";import{v as y}from"./a11y.DrKT5_4z.js";import"./_slug_.astro_astro_type_script_index_0_lang.BImirJF0.js";import"./define.CnaJOMhg.js";import"./style-map.CM_oELyq.js";import"./enum-prop.BAWDxAdj.js";import"./playback.CdgLhyHJ.js";const w=m`
  .wrapper {
    display: grid;
    gap: ${e("space-6")};
    container-type: inline-size;
  }

  .bar {
    display: flex;
    flex-wrap: wrap;
    gap: ${e("space-6")};
    align-items: flex-end;
    justify-content: space-between;
  }

  .intro {
    flex: 1 1 20rem;
    max-inline-size: ${e("measure-narrow")};
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: ${e("space-2")};
  }

  .chip {
    display: inline-flex;
    flex: none;
    min-block-size: ${e("tap-target")};
    padding-inline: ${e("space-4")};
    align-items: center;
    font-family: ${e("font-body")};
    font-size: ${e("font-size-sm")};
    font-stretch: ${e("font-stretch-wide")};
    font-weight: ${e("font-weight-extrabold")};
    letter-spacing: ${e("tracking-wider")};
    color: ${e("text")};
    text-transform: uppercase;
    background: transparent;
    border: ${e("border-width-rule")} solid ${e("border-control")};
    border-radius: ${e("radius-pill")};
    cursor: pointer;
    transition:
      color ${e("duration-fast")} ${e("ease-out")},
      background-color ${e("duration-fast")} ${e("ease-out")},
      border-color ${e("duration-fast")} ${e("ease-out")};

    &:hover {
      border-color: ${e("accent")};
    }

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

  @container (inline-size < 40rem) {
    .chips {
      flex-wrap: nowrap;
      margin-inline: calc(-1 * ${e("space-gutter")});
      padding-inline: ${e("space-gutter")};
      overflow-x: auto;
      scrollbar-width: none;
    }

    .chips::-webkit-scrollbar {
      display: none;
    }
  }

  .status {
    ${y}
    margin: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    .chip {
      transition: none;
    }
  }
`;var c=function(n,t,r,s){var i=arguments.length,a=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,r):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,t,r,s);else for(var d=n.length-1;d>=0;d--)(l=n[d])&&(a=(i<3?l(a):i>3?l(t,r,a):l(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};const f="Alle";class o extends h{constructor(){super(...arguments),this.allLabel=f,this.category=f,this.categories=[],this.visibleCount=0,this.#r=()=>{this.#i(),this.#e()}}static{this.styles=[h.styles,w]}firstUpdated(){this.#i(),this.#e()}updated(t){t.has("category")&&this.#e()}get#t(){return[...this.querySelectorAll("[data-category]")]}#i(){const t=this.#t;if(t.length===0){$&&this.warn("Keine Elemente mit data-category im Slot. Es gibt nichts zu filtern.");return}const r=new Set;for(const s of t){const i=s.dataset.category;i&&r.add(i)}this.categories=[this.allLabel,...[...r].sort((s,i)=>s.localeCompare(i,"de"))]}#e(){const t=this.#t;let r=0;for(const s of t){const i=this.category===this.allLabel||s.dataset.category===this.category;s.hidden=!i,i&&(r+=1)}this.visibleCount=r}#s(t){t!==this.category&&(this.category=t,this.dispatchEvent(new CustomEvent("hc-filter-change",{detail:{category:t},bubbles:!0,composed:!0})))}render(){return u`
      <div class="wrapper">
        <div class="bar">
          <div class="intro"><slot name="intro"></slot></div>
          <div
            class="chips"
            part=${p("chips")}
            role="group"
            aria-label="Nach Kategorie filtern"
          >
            ${this.categories.map(t=>u`
                <button
                  class="chip"
                  part=${p("chip")}
                  type="button"
                  aria-pressed=${t===this.category}
                  @click=${()=>this.#s(t)}
                >
                  ${t}
                </button>
              `)}
          </div>
        </div>

        <!--
          Die Ergebniszahl wird angesagt. Ohne sie aendert sich fuer einen
          Screenreader-Nutzer nach dem Klick scheinbar nichts: Die Karten
          verschwinden lautlos aus dem Baum.
        -->
        <p
          class="status"
          part=${p("status")}
          role="status"
          aria-live="polite"
        >
          ${this.visibleCount===1?"1 Artikel":`${this.visibleCount} Artikel`}${this.category===this.allLabel?"":` in ${this.category}`}
        </p>

        <slot @slotchange=${this.#r}></slot>
      </div>
    `}#r}c([b({attribute:"all-label"})],o.prototype,"allLabel",void 0);c([b({reflect:!0})],o.prototype,"category",void 0);c([g()],o.prototype,"categories",void 0);c([g()],o.prototype,"visibleCount",void 0);v("blog-filter",o);
