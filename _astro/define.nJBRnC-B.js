import{a,t,i as M,r as k,B as $,D as O,b as p,n as S,d as j}from"./base-element.Cm4rcYS3.js";import{o as f}from"./style-map.CM_oELyq.js";import{c as b,e as z,n as C}from"./enum-prop.BAWDxAdj.js";import{p as w}from"./class-map.D00Ya1xp.js";import{v}from"./a11y.DrKT5_4z.js";const E={Fan:(o,e)=>["0% 0%","100% 0%","0% 100%","100% 100%"].map(i=>`radial-gradient(circle at ${i},${e} 70%,${o} 70%)`),Lens:(o,e)=>["100% 100%","0% 100%","100% 0%","0% 0%"].map(i=>`radial-gradient(circle at ${i},${e} 74%,${o} 74%)`),Wedge:(o,e)=>["100% 100%","0% 100%","100% 0%","0% 0%"].map(i=>`radial-gradient(circle at ${i},${e} 48%,${o} 48%)`),Star:(o,e)=>["135deg","225deg","45deg","315deg"].map(i=>`linear-gradient(${i},${e} 50%,${o} 50%)`),Bloom:(o,e)=>[0,1,2,3].map(()=>`radial-gradient(circle at 50% 50%,${e} 34%,${o} 34%,${o} 62%,${e} 62%,${e} 70%,${o} 70%)`),Weave:(o,e)=>["0deg","90deg","90deg","0deg"].map(i=>`repeating-linear-gradient(${i},${e} 0 22%,${o} 22% 50%)`)},u=Object.keys(E),m={Neon:[a["tile-neon-base"],a["tile-neon-accent"]],Chrom:[a["tile-chrom-base"],a["tile-chrom-accent"]],Granate:[a["tile-granate-base"],a["tile-granate-accent"]],Ozean:[a["tile-ozean-base"],a["tile-ozean-accent"]]},g=Object.keys(m);function y(o,e,i){return[`background-color:${e}`,`background-image:${E[o](e,i).join(",")}`,"background-size:50% 50%","background-repeat:no-repeat","background-position:0% 0%,100% 0%,0% 100%,100% 100%"].join(";")}const x=k("1.875rem"),_=k("1.625rem"),T=M`
  .lab {
    display: grid;
    margin: 0;
    container-type: inline-size;
  }

  .preview {
    display: grid;
    grid-template-columns: repeat(var(--columns, 8), 1fr);
    aspect-ratio: calc(var(--columns, 8) / var(--rows, 5));
    overflow: hidden;
    border: ${t("border-width-rule")} solid ${t("rule")};
    box-shadow: ${t("shadow-figure")};
  }

  .tile {
    outline: 1px solid transparent;
    outline-offset: -1px;
  }

  @container (inline-size < 40rem) {
    .preview {
      grid-template-columns: repeat(var(--columns-narrow, 4), 1fr);
      aspect-ratio: calc(var(--columns-narrow, 4) / var(--rows-narrow, 4));
      border-inline: 0;
    }

    .tile--wide-only {
      display: none;
    }
  }

  .caption {
    display: flex;
    flex-wrap: wrap;
    gap: ${t("space-3")} ${t("space-5")};
    padding-block: ${t("space-3")};
    align-items: center;
    justify-content: space-between;
    border-block-end: ${t("border-width")} solid ${t("border")};
  }

  .caption__label {
    font-family: ${t("font-mono")};
    font-size: ${t("font-size-xs")};
    letter-spacing: ${t("tracking-wider")};
    color: ${t("accent")};
    text-transform: uppercase;

    &::before {
      content: '▶ ' / '';
    }
  }

  .controls {
    display: flex;
    flex-wrap: wrap;
    gap: ${t("space-2")};
    align-items: center;
  }

  .group {
    display: flex;
    flex-wrap: wrap;
    gap: ${t("space-2")};
    margin: 0;
    padding: 0;
    align-items: center;
    border: none;
  }

  .group--motif {
    padding-inline-end: ${t("space-3")};
    border-inline-end: ${t("border-width")} solid ${t("border-strong")};
  }

  .group__label {
    ${v}
  }

  .swatch {
    position: relative;
    inline-size: ${x};
    block-size: ${x};
    padding: 0;
    border: 0;
    outline: ${t("border-width")} solid ${t("border-strong")};
    outline-offset: 2px;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      inset: 50% auto auto 50%;
      min-inline-size: ${t("tap-target")};
      min-block-size: ${t("tap-target")};
      translate: -50% -50%;
    }

    &[aria-pressed='true'] {
      outline: 2px solid ${t("accent")};
    }

    &:focus-visible {
      outline: 2px solid ${t("text")};
      outline-offset: 3px;
    }
  }

  .swatch--palette {
    inline-size: ${_};
    block-size: ${_};
    border-radius: ${t("radius-circle")};
  }

  .visually-hidden {
    ${v}
  }
`;var d=function(o,e,i,s){var n=arguments.length,r=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,i,s);else for(var h=o.length-1;h>=0;h--)(l=o[h])&&(r=(n<3?l(r):n>3?l(e,i,r):l(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};class c extends ${constructor(){super(...arguments),this.motif="Fan",this.palette="Neon",this.columns=8,this.rows=5,this.noControls=!1}static{this.styles=[$.styles,T]}willUpdate(){O&&(b(u,this.motif,"motif",this.warn.bind(this)),b(g,this.palette,"palette",this.warn.bind(this)))}get#e(){return u.includes(this.motif)?this.motif:"Fan"}get#t(){return g.includes(this.palette)?this.palette:"Neon"}get#i(){return m[this.#t]}get#n(){return this.columns*this.rows}get#o(){return Math.max(2,Math.ceil(this.columns/2))}get#s(){return Math.max(2,Math.ceil(this.rows*.75))}#a(e){const i=e%this.columns,s=Math.floor(e/this.columns);return i>=this.#o||s>=this.#s}#r(e){Object.assign(this,e),this.dispatchEvent(new CustomEvent("hc-tile-change",{detail:{motif:this.motif,palette:this.palette},bubbles:!0,composed:!0}))}#l(){const[e,i]=this.#i;return p`
      <div
        class="controls"
        part=${w("controls")}
      >
        <fieldset class="group group--motif">
          <legend class="group__label">Motiv</legend>
          ${u.map(s=>p`
              <button
                class="swatch swatch--motif"
                type="button"
                style=${y(s,e,i)}
                aria-pressed=${s===this.#e}
                @click=${()=>this.#r({motif:s})}
              >
                <span class="visually-hidden">${s}</span>
              </button>
            `)}
        </fieldset>

        <fieldset class="group">
          <legend class="group__label">Palette</legend>
          ${g.map(s=>{const[n,r]=m[s];return p`
              <button
                class="swatch swatch--palette"
                type="button"
                style=${f({background:`linear-gradient(135deg, ${n} 50%, ${r} 50%)`})}
                aria-pressed=${s===this.#t}
                @click=${()=>this.#r({palette:s})}
              >
                <span class="visually-hidden">${s}</span>
              </button>
            `})}
        </fieldset>
      </div>
    `}render(){const[e,i]=this.#i,s=y(this.#e,e,i),n=Array.from({length:this.#n},(r,l)=>l);return p`
      <figure class="lab">
        <div
          class="preview"
          part=${w("preview")}
          style=${f({"--columns":String(this.columns),"--rows":String(this.rows),"--columns-narrow":String(this.#o),"--rows-narrow":String(this.#s)})}
        >
          ${n.map(r=>p`<span
                class=${this.#a(r)?"tile tile--wide-only":"tile"}
                style=${s}
                data-index=${r}
              ></span>`)}
        </div>

        <figcaption class="caption">
          <span
            class="caption__label"
            role="status"
            aria-live="polite"
          >
            Live-Mix · ${this.#e.toLowerCase()} / ${this.#t.toLowerCase()} /
            ${this.columns} × ${this.rows}
          </span>
          ${this.noControls?"":this.#l()}
        </figcaption>
      </figure>
    `}}d([z(u,"Fan")],c.prototype,"motif",void 0);d([z(g,"Neon")],c.prototype,"palette",void 0);d([C({min:2,max:16,fallback:8})],c.prototype,"columns",void 0);d([C({min:2,max:8,fallback:5})],c.prototype,"rows",void 0);d([S({type:Boolean,reflect:!0,attribute:"no-controls"})],c.prototype,"noControls",void 0);j("tile-lab",c);export{c as TileLab};
