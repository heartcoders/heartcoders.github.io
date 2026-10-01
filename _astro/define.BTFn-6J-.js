import{c as n,t as c,i as $,B as f,D as g,A as h,b as m,n as v,d as M}from"./base-element.Cm4rcYS3.js";import{a as w,p as A}from"./class-map.D00Ya1xp.js";import{c as b,e as y}from"./enum-prop.BAWDxAdj.js";const Z=["auto","neutral","success","warning","critical"],z=["small","base","large"],V=$`
  .icon {
    display: block;
    flex: none;
    fill: currentColor;
    /* Default ist currentColor, nicht der Text-Token: ein Icon in einem
       Primary-Button muss die Farbe des Buttons erben. 'tone' setzt bewusst
       eine eigene Farbe, 'tone="auto"' bleibt vererbend. */
    color: ${n("icon-color","currentColor")};
  }

  .size-small {
    inline-size: 1rem;
    block-size: 1rem;
  }
  .size-base {
    inline-size: 1.25rem;
    block-size: 1.25rem;
  }
  .size-large {
    inline-size: 1.5rem;
    block-size: 1.5rem;
  }

  .tone-neutral {
    color: ${n("icon-color",c("text"))};
  }
  .tone-success {
    color: ${n("icon-color",c("accent"))};
  }
  .tone-warning {
    color: ${n("icon-color",c("text-secondary"))};
  }
  .tone-critical {
    color: ${n("icon-color",c("text-critical"))};
  }
`,p={plus:"M10 4a.75.75 0 0 1 .75.75v4.5h4.5a.75.75 0 0 1 0 1.5h-4.5v4.5a.75.75 0 0 1-1.5 0v-4.5h-4.5a.75.75 0 0 1 0-1.5h4.5v-4.5A.75.75 0 0 1 10 4Z",check:"M16.03 6.22a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06L9 12.19l5.97-5.97a.75.75 0 0 1 1.06 0Z","alert-circle":"M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm0 2.5a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 10 6Zm0 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z","chevron-down":"M5.22 7.72a.75.75 0 0 1 1.06 0L10 11.44l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.78a.75.75 0 0 1 0-1.06Z",x:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z",search:"M9 3.5a5.5 5.5 0 1 0 3.39 9.83l2.88 2.88a.75.75 0 1 0 1.06-1.06l-2.88-2.88A5.5 5.5 0 0 0 9 3.5ZM5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z",copy:"M7.5 2.5A2 2 0 0 0 5.5 4.5v.5h-1a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V15h1a2 2 0 0 0 2-2V4.5a2 2 0 0 0-2-2h-7Zm5.5 12.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8Zm1.5-2V7a2 2 0 0 0-2-2H7V4.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V13a.5.5 0 0 1-.5.5h-1Z","arrow-right":"M10.72 4.47a.75.75 0 0 1 1.06 0l4.75 4.75a.75.75 0 0 1 0 1.06l-4.75 4.75a.75.75 0 1 1-1.06-1.06l3.47-3.47H4a.75.75 0 0 1 0-1.5h10.19l-3.47-3.47a.75.75 0 0 1 0-1.06Z","arrow-left":"M9.28 4.47a.75.75 0 0 1 0 1.06L5.81 9h10.19a.75.75 0 0 1 0 1.5H5.81l3.47 3.47a.75.75 0 1 1-1.06 1.06L3.47 10.28a.75.75 0 0 1 0-1.06l4.75-4.75a.75.75 0 0 1 1.06 0Z",external:"M11.75 3a.75.75 0 0 0 0 1.5h2.69l-5.22 5.22a.75.75 0 1 0 1.06 1.06l5.22-5.22v2.69a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-.75-.75h-4.5ZM4.5 5.5a1.5 1.5 0 0 0-1.5 1.5v8.5a1.5 1.5 0 0 0 1.5 1.5H13a1.5 1.5 0 0 0 1.5-1.5v-3a.75.75 0 0 0-1.5 0v3H4.5V7h3a.75.75 0 0 0 0-1.5h-3Z",github:"M10 .5A9.5 9.5 0 0 0 .5 10a9.5 9.5 0 0 0 6.49 9.02c.48.09.66-.21.66-.46v-1.65c-2.64.58-3.2-1.13-3.2-1.13-.44-1.11-1.07-1.4-1.07-1.4-.87-.6.07-.59.07-.59.96.07 1.46 1 1.46 1 .86 1.46 2.24 1.04 2.78.79.08-.62.33-1.04.6-1.28-2.11-.24-4.33-1.06-4.33-4.7 0-1.04.37-1.9.98-2.56-.1-.24-.43-1.21.09-2.52 0 0 .8-.26 2.63.98a9.1 9.1 0 0 1 4.79 0c1.82-1.24 2.62-.98 2.62-.98.52 1.31.19 2.28.1 2.52.6.66.98 1.52.98 2.56 0 3.65-2.23 4.45-4.35 4.69.34.3.64.88.64 1.77v2.62c0 .25.18.55.66.46A9.5 9.5 0 0 0 19.5 10 9.5 9.5 0 0 0 10 .5Z",rss:"M4.5 3.5a.75.75 0 0 0 0 1.5A10.5 10.5 0 0 1 15 15.5a.75.75 0 0 0 1.5 0A12 12 0 0 0 4.5 3.5Zm0 4a.75.75 0 0 0 0 1.5A6.5 6.5 0 0 1 11 15.5a.75.75 0 0 0 1.5 0A8 8 0 0 0 4.5 7.5Zm1.25 5.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z"},x=Object.keys(p);var u=function(i,e,t,r){var l=arguments.length,a=l<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,r);else for(var d=i.length-1;d>=0;d--)(s=i[d])&&(a=(l<3?s(a):l>3?s(e,t,a):s(e,t))||a);return l>3&&a&&Object.defineProperty(e,t,a),a};class o extends f{constructor(){super(...arguments),this.size="base",this.tone="auto"}static{this.styles=[f.styles,V]}willUpdate(){g&&(b(z,this.size,"size",this.warn.bind(this)),b(Z,this.tone,"tone",this.warn.bind(this)),this.type!==void 0&&!(this.type in p)&&this.warn(`type="${this.type}" ist unbekannt. Verfuegbar: ${x.join(", ")}.`))}render(){const e=this.type===void 0?void 0:p[this.type];if(e===void 0)return h;const t=typeof this.alt=="string"&&this.alt.length>0;return m`
      <svg
        class=${w({icon:!0,[`size-${this.size}`]:!0,[`tone-${this.tone}`]:!0})}
        part=${A("svg")}
        viewBox="0 0 20 20"
        focusable="false"
        role=${t?"img":h}
        aria-hidden=${t?h:"true"}
      >
        ${t?m`<title>${this.alt}</title>`:h}
        <path
          d=${e}
          fill-rule="evenodd"
          clip-rule="evenodd"
        />
      </svg>
    `}}u([v({reflect:!0})],o.prototype,"type",void 0);u([y(z,"base")],o.prototype,"size",void 0);u([y(Z,"auto")],o.prototype,"tone",void 0);u([v({reflect:!0})],o.prototype,"alt",void 0);M("icon",o);const S=Object.freeze(Object.defineProperty({__proto__:null,Icon:o},Symbol.toStringTag,{value:"Module"}));export{z as S,Z as T,S as d};
