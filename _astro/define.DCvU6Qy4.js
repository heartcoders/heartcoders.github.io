import{t as s,i as g,B as f,b,d as v}from"./base-element.Cm4rcYS3.js";import{r as $}from"./state.Pgeo1wuR.js";import{e as x}from"./query.C-S87uso.js";const d=[.22,.12,.07,.045],w=[.62,.42,.32,.24],E=.08,y=d.length,k=.01;function p(l,t,e,i){return t+(l-t)*Math.pow(1-e,i*60)}class P{#t=[];#e=0;get presence(){return this.#e}place(t){this.#t.length>0||(this.#t=Array.from({length:y},()=>({...t})))}step(t){const{target:e,isInside:i,height:r,time:n,delta:o}=t;return this.#e=p(this.#e,i?1:0,E,o),this.place(e),this.#t.map((a,h)=>{a.x=p(a.x,e.x,d[h]??.1,o),a.y=p(a.y,e.y,d[h]??.1,o);const m=1+.12*Math.sin(n*(2.2+h*.7)+h*1.9);return{x:a.x,y:a.y,radius:r*(w[h]??.2)*m*this.#e}})}}const C=g`
  :host > .wrap {
    font: inherit;
    line-height: inherit;
    color: inherit;
  }

  .wrap {
    display: inline-block;
    position: relative;
    cursor: crosshair;
  }

  .outline {
    color: transparent;
    -webkit-text-stroke: ${s("border-width")} ${s("border-control")};
    transition: -webkit-text-stroke-color ${s("duration-base")} ${s("ease-out")};
  }

  .fill {
    position: absolute;
    inset: 0;
    color: transparent;
    background-image:
      radial-gradient(
        circle var(--r1, 0px) at var(--x1, 50%) var(--y1, 50%),
        ${s("accent")} 98%,
        transparent 100%
      ),
      radial-gradient(
        circle var(--r2, 0px) at var(--x2, 50%) var(--y2, 50%),
        ${s("accent")} 98%,
        transparent 100%
      ),
      radial-gradient(
        circle var(--r3, 0px) at var(--x3, 50%) var(--y3, 50%),
        ${s("accent")} 98%,
        transparent 100%
      ),
      radial-gradient(
        circle var(--r4, 0px) at var(--x4, 50%) var(--y4, 50%),
        ${s("accent")} 98%,
        transparent 100%
      );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-stroke: ${s("border-width")}
      color-mix(in srgb, ${s("accent")} calc(var(--outline, 0) * 100%), transparent);
    filter: ${s("filter-liquid-glow")};
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .wrap:hover .outline {
      -webkit-text-stroke-color: ${s("accent")};
    }
  }
`;var u=function(l,t,e,i){var r=arguments.length,n=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(l,t,e,i);else for(var a=l.length-1;a>=0;a--)(o=l[a])&&(n=(r<3?o(n):r>3?o(t,e,n):o(t,e))||n);return r>3&&n&&Object.defineProperty(t,e,n),n};class c extends f{constructor(){super(...arguments),this.text="",this.#t=new P,this.#e=globalThis.matchMedia?.("(prefers-reduced-motion: reduce)")??null,this.#n={x:0,y:0},this.#r=!1,this.#i=null,this.#s=null,this.#a=0,this.#o=0,this.#l=0,this.#h=t=>{const e=this.#s===null?.016666666666666666:(t-this.#s)/1e3;this.#s=t;const i=this.#t.step({target:this.#n,isInside:this.#r,height:this.#a,time:t/1e3,delta:Math.min(e,.05)});this.#x(i);const r=!this.#r&&this.#t.presence<k;this.#i=r?null:requestAnimationFrame(this.#h),r&&this.#y()}}static{this.styles=[f.styles,C]}#t;#e;#n;#r;#i;#s;#a;#o;#l;disconnectedCallback(){super.disconnectedCallback(),this.#i!==null&&cancelAnimationFrame(this.#i),this.#i=null}#p(t){const e=t.target;this.text=e.assignedNodes({flatten:!0}).map(i=>i.textContent??"").join("").trim()}#d(t){if(t.pointerType!=="mouse"||this.#e?.matches)return;const e=this.wrap?.getBoundingClientRect();e&&(this.#o=e.left,this.#l=e.top,this.#a=e.height,this.#r=!0,this.#c(t),this.#t.place(this.#n),this.#f())}#c(t){this.#n={x:t.clientX-this.#o,y:t.clientY-this.#l}}#u(){this.#r=!1}#f(){this.#i===null&&(this.#s=null,this.#i=requestAnimationFrame(this.#h))}#h;#x(t){const e=this.fill;e&&(t.forEach((i,r)=>{e.style.setProperty(`--x${r+1}`,`${i.x.toFixed(1)}px`),e.style.setProperty(`--y${r+1}`,`${i.y.toFixed(1)}px`),e.style.setProperty(`--r${r+1}`,`${i.radius.toFixed(1)}px`)}),e.style.setProperty("--outline",(this.#t.presence*.9).toFixed(3)))}#y(){const t=this.fill;if(t){for(let e=1;e<=y;e+=1)t.style.setProperty(`--r${e}`,"0px");t.style.setProperty("--outline","0")}}render(){return b`
      <span
        class="wrap"
        @pointerenter=${this.#d}
        @pointermove=${this.#c}
        @pointerleave=${this.#u}
      >
        <span class="outline"><slot @slotchange=${this.#p}></slot></span>
        <span
          class="fill"
          aria-hidden="true"
          >${this.text}</span
        >
      </span>
    `}}u([$()],c.prototype,"text",void 0);u([x(".fill")],c.prototype,"fill",void 0);u([x(".wrap")],c.prototype,"wrap",void 0);v("liquid-text",c);export{c as LiquidText};
