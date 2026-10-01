(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const F="hc",ke={theme:"t"},Oe="v1",K=(()=>{try{return"production"!=="production"}catch{return!0}})();function Me(i,e){const t=`${F}-${i}`,r=customElements.get(t);if(r!==void 0){K&&r!==e&&console.warn(`[${F}] <${t}> ist bereits mit einer anderen Klasse registriert. Laeuft die Library zweimal auf der Seite? Builds mit unterschiedlichem PREFIX koennen koexistieren, zwei mit demselben nicht.`);return}customElements.define(t,e)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,Z=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),te=new WeakMap;let we=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Z&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=te.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&te.set(t,e))}return e}toString(){return this.cssText}};const B=i=>new we(typeof i=="string"?i:i+"",void 0,J),x=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,s,n)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[n+1],i[0]);return new we(t,i,J)},Te=(i,e)=>{if(Z)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),s=H.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,i.appendChild(r)}},re=Z?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return B(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ue,defineProperty:Ne,getOwnPropertyDescriptor:He,getOwnPropertyNames:Re,getOwnPropertySymbols:Le,getPrototypeOf:je}=Object,D=globalThis,se=D.trustedTypes,Ie=se?se.emptyScript:"",Be=D.reactiveElementPolyfillSupport,C=(i,e)=>i,j={toAttribute(i,e){switch(e){case Boolean:i=i?Ie:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},G=(i,e)=>!Ue(i,e),ie={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:G};Symbol.metadata??=Symbol("metadata"),D.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ie){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&Ne(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){const{get:s,set:n}=He(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:s,set(o){const l=s?.call(this);n?.call(this,o),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ie}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=je(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const t=this.properties,r=[...Re(t),...Le(t)];for(const s of r)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(re(s))}else e!==void 0&&t.push(re(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Te(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(s!==void 0&&r.reflect===!0){const n=(r.converter?.toAttribute!==void 0?r.converter:j).toAttribute(t,r.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){const r=this.constructor,s=r._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const n=r.getPropertyOptions(s),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:j;this._$Em=s;const l=o.fromAttribute(t,n.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(e,t,r,s=!1,n){if(e!==void 0){const o=this.constructor;if(s===!1&&(n=this[e]),r??=o.getPropertyOptions(e),!((r.hasChanged??G)(n,t)||r.useDefault&&r.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:s,wrapped:n},o){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,n]of r){const{wrapped:o}=n,l=this[s];o!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,n,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[C("elementProperties")]=new Map,v[C("finalized")]=new Map,Be?.({ReactiveElement:v}),(D.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=globalThis,ne=i=>i,I=X.trustedTypes,oe=I?I.createPolicy("lit-html",{createHTML:i=>i}):void 0,ve="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,Ae="?"+$,De=`<${Ae}>`,_=document,k=()=>_.createComment(""),O=i=>i===null||typeof i!="object"&&typeof i!="function",Q=Array.isArray,qe=i=>Q(i)||typeof i?.[Symbol.iterator]=="function",W=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ae=/-->/g,le=/>/g,b=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ce=/'/g,he=/"/g,xe=/^(?:script|style|textarea|title)$/i,We=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),z=We(1),w=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),de=new WeakMap,y=_.createTreeWalker(_,129);function Ee(i,e){if(!Q(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return oe!==void 0?oe.createHTML(e):e}const Fe=(i,e)=>{const t=i.length-1,r=[];let s,n=e===2?"<svg>":e===3?"<math>":"",o=S;for(let l=0;l<t;l++){const a=i[l];let p,u,h=-1,m=0;for(;m<a.length&&(o.lastIndex=m,u=o.exec(a),u!==null);)m=o.lastIndex,o===S?u[1]==="!--"?o=ae:u[1]!==void 0?o=le:u[2]!==void 0?(xe.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=b):u[3]!==void 0&&(o=b):o===b?u[0]===">"?(o=s??S,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,p=u[1],o=u[3]===void 0?b:u[3]==='"'?he:ce):o===he||o===ce?o=b:o===ae||o===le?o=S:(o=b,s=void 0);const f=o===b&&i[l+1].startsWith("/>")?" ":"";n+=o===S?a+De:h>=0?(r.push(p),a.slice(0,h)+ve+a.slice(h)+$+f):a+$+(h===-2?l:f)}return[Ee(i,n+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class M{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[p,u]=Fe(e,t);if(this.el=M.createElement(p,r),y.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=y.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(ve)){const m=u[o++],f=s.getAttribute(h).split($),N=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:N[2],strings:f,ctor:N[1]==="."?Ke:N[1]==="?"?Ze:N[1]==="@"?Je:q}),s.removeAttribute(h)}else h.startsWith($)&&(a.push({type:6,index:n}),s.removeAttribute(h));if(xe.test(s.tagName)){const h=s.textContent.split($),m=h.length-1;if(m>0){s.textContent=I?I.emptyScript:"";for(let f=0;f<m;f++)s.append(h[f],k()),y.nextNode(),a.push({type:2,index:++n});s.append(h[m],k())}}}else if(s.nodeType===8)if(s.data===Ae)a.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf($,h+1))!==-1;)a.push({type:7,index:n}),h+=$.length-1}n++}}static createElement(e,t){const r=_.createElement("template");return r.innerHTML=e,r}}function A(i,e,t=i,r){if(e===w)return e;let s=r!==void 0?t._$Co?.[r]:t._$Cl;const n=O(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(i),s._$AT(i,t,r)),r!==void 0?(t._$Co??=[])[r]=s:t._$Cl=s),s!==void 0&&(e=A(i,s._$AS(i,e.values),s,r)),e}class Ve{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,s=(e?.creationScope??_).importNode(t,!0);y.currentNode=s;let n=y.nextNode(),o=0,l=0,a=r[0];for(;a!==void 0;){if(o===a.index){let p;a.type===2?p=new T(n,n.nextSibling,this,e):a.type===1?p=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(p=new Ge(n,this,e)),this._$AV.push(p),a=r[++l]}o!==a?.index&&(n=y.nextNode(),o++)}return y.currentNode=_,s}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class T{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),O(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==w&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):qe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(_.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=M.createElement(Ee(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(t);else{const n=new Ve(s,this),o=n.u(this.options);n.p(t),this.T(o),this._$AH=n}}_$AC(e){let t=de.get(e.strings);return t===void 0&&de.set(e.strings,t=new M(e)),t}k(e){Q(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const n of e)s===t.length?t.push(r=new T(this.O(k()),this.O(k()),this,this.options)):r=t[s],r._$AI(n),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const r=ne(e).nextSibling;ne(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}_$AI(e,t=this,r,s){const n=this.strings;let o=!1;if(n===void 0)e=A(this,e,t,0),o=!O(e)||e!==this._$AH&&e!==w,o&&(this._$AH=e);else{const l=e;let a,p;for(e=n[0],a=0;a<n.length-1;a++)p=A(this,l[r+a],t,a),p===w&&(p=this._$AH[a]),o||=!O(p)||p!==this._$AH[a],p===d?e=d:e!==d&&(e+=(p??"")+n[a+1]),this._$AH[a]=p}o&&!s&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ke extends q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class Ze extends q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class Je extends q{constructor(e,t,r,s,n){super(e,t,r,s,n),this.type=5}_$AI(e,t=this){if((e=A(this,e,t,0)??d)===w)return;const r=this._$AH,s=e===d&&r!==d||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==d&&(r===d||s);s&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ge{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}}const Xe=X.litHtmlPolyfillSupport;Xe?.(M,T),(X.litHtmlVersions??=[]).push("3.3.3");const Qe=(i,e,t)=>{const r=t?.renderBefore??e;let s=r._$litPart$;if(s===void 0){const n=t?.renderBefore??null;r._$litPart$=s=new T(e.insertBefore(k(),n),n,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis;let P=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}};P._$litElement$=!0,P.finalized=!0,Y.litElementHydrateSupport?.({LitElement:P});const Ye=Y.litElementPolyfillSupport;Ye?.({LitElement:P});(Y.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:G},tt=(i=et,e,t)=>{const{kind:r,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),r==="setter"&&((i=Object.create(i)).wrapped=!0),n.set(t.name,i),r==="accessor"){const{name:o}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,i,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,i,l),l}}}if(r==="setter"){const{name:o}=t;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,i,!0,l)}}throw Error("Unsupported decorator location: "+r)};function ee(i){return(e,t)=>typeof t=="object"?tt(i,e,t):((r,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,r),o?Object.getOwnPropertyDescriptor(s,n):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt={ATTRIBUTE:1},st=i=>(...e)=>({_$litDirective$:i,values:e});let it=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se="important",nt=" !"+Se,pe=st(class extends it{constructor(i){if(super(i),i.type!==rt.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((e,t)=>{const r=i[t];return r==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(i,[e]){const{style:t}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?t.removeProperty(r):t[r]=null);for(const r in e){const s=e[r];if(s!=null){this.ft.add(r);const n=typeof s=="string"&&s.endsWith(nt);r.includes("-")||n?t.setProperty(r,n?s.slice(0,-11):s,n?Se:""):t[r]=s}}return w}}),ot=x`
  /* Author-Styles schlagen das UA-Stylesheet, [hidden] muss explizit sein. */
  :host([hidden]) {
    display: none !important;
  }
`,at=x`
      /* Host hat keine eigene Box: das gerenderte Element nimmt direkt am Layout
         des Parents teil (darum funktioniert gap in einem Stack). Preis: kein
         background, border, transform, position oder width am Host. */
      :host {
        display: contents;
      }
      ${ot}
    `,g={bg:"rgb(10 10 10)","bg-raised":"rgb(17 17 17)","bg-inverse":"rgb(242 242 238)","surface-solid":"rgb(26 26 26)","surface-callout":"rgb(22 22 22)","surface-hover":"rgb(212 255 58 / 0.08)","surface-glass":"rgb(10 10 10 / 0.72)","surface-header":"rgb(10 10 10 / 0.82)","surface-island":"rgb(18 18 18 / 0.72)","surface-overlay":"rgb(10 10 10 / 0.92)","surface-player":"rgb(20 20 20 / 0.9)","surface-scrim":"rgb(0 0 0 / 0.55)","backdrop-glass":"blur(22px) saturate(1.35)","backdrop-header":"blur(12px)","backdrop-overlay":"blur(24px)",text:"rgb(242 242 238)","text-body":"rgb(242 242 238 / 0.86)","text-secondary":"rgb(242 242 238 / 0.78)","text-muted":"rgb(242 242 238 / 0.62)","text-subtle":"rgb(242 242 238 / 0.55)","text-disabled":"rgb(242 242 238 / 0.38)","text-inverse":"rgb(10 10 10)","text-on-accent":"rgb(10 10 10)",accent:"rgb(212 255 58)","accent-soft":"rgb(212 255 58 / 0.08)","accent-glow":"rgb(212 255 58 / 0.6)",live:"rgb(255 59 59)","text-critical":"rgb(255 59 59)",rule:"rgb(242 242 238)",border:"rgb(242 242 238 / 0.16)","border-subtle":"rgb(242 242 238 / 0.1)","border-strong":"rgb(242 242 238 / 0.3)","border-control":"rgb(242 242 238 / 0.4)","border-focus":"rgb(212 255 58)","border-critical":"rgb(255 59 59)","border-width":"1px","border-width-rule":"1.5px","border-width-accent":"6px","radius-none":"0","radius-xs":"0.1875rem","radius-md":"0.5rem","radius-lg":"0.875rem","radius-island":"2rem","radius-pill":"99px","radius-circle":"50%","shadow-tape":"0 10px 30px rgb(0 0 0 / 0.5)","shadow-float":"0 10px 24px rgb(0 0 0 / 0.5)","shadow-island":"0 14px 30px rgb(0 0 0 / 0.55), inset 0 1px 0 rgb(255 255 255 / 0.06)","shadow-code":"0 30px 60px -30px rgb(0 0 0 / 0.85), inset 0 1px 0 rgb(255 255 255 / 0.05)","shadow-figure":"0 0 80px rgb(212 255 58 / 0.12)","shadow-glow":"0 0 16px rgb(212 255 58)","shadow-live":"0 0 10px rgb(255 59 59)","shadow-text-deep":"0 10px 40px rgb(0 0 0 / 0.8)","filter-chrome":"drop-shadow(0 0 1.5px rgb(10 10 10)) drop-shadow(0 0 1px rgb(212 255 58)) drop-shadow(0 18px 40px rgb(0 0 0 / 0.9))","filter-liquid-glow":"drop-shadow(0 0 18px rgb(212 255 58 / 0.35))","gradient-chrome":"linear-gradient(100deg, rgb(92 92 92) 0%, rgb(247 247 247) 14%, rgb(141 141 141) 27%, rgb(255 255 255) 40%, rgb(79 79 79) 54%, rgb(233 233 233) 70%, rgb(122 122 122) 86%, rgb(242 242 242) 100%)","gradient-vignette":"radial-gradient(120% 90% at 50% 45%, transparent 45%, rgb(10 10 10 / 0.82) 100%)","gradient-cursor-glow":"radial-gradient(circle, rgb(212 255 58 / 0.13) 0%, rgb(212 255 58 / 0.04) 35%, transparent 65%)","gradient-rays":"repeating-conic-gradient(rgb(212 255 58 / 0.07) 0 3deg, transparent 3deg 12deg)","gradient-code":"linear-gradient(180deg, rgb(20 20 20), rgb(11 11 11))","pattern-dots":"radial-gradient(rgb(242 242 238 / 0.09) 1px, transparent 1.3px)","pattern-dots-size":"18px","mask-center":"radial-gradient(circle, black 20%, transparent 70%)","glow-size":"47.5rem","spot-radius":"25rem","spot-accent":"rgb(212 255 58 / 0.08)","spot-number":"rgb(255 122 184 / 0.08)","spot-property":"rgb(127 227 255 / 0.08)","spot-value":"rgb(255 184 107 / 0.08)","code-bar":"rgb(255 255 255 / 0.025)","code-tab":"rgb(11 11 11)","code-border":"rgb(242 242 238 / 0.12)","code-divider":"rgb(242 242 238 / 0.08)","code-highlight":"rgb(212 255 58 / 0.07)","syntax-selector":"rgb(212 255 58)","syntax-property":"rgb(127 227 255)","syntax-value":"rgb(255 184 107)","syntax-function":"rgb(198 166 255)","syntax-number":"rgb(255 122 184)","syntax-punctuation":"rgb(242 242 238 / 0.55)","syntax-comment":"rgb(138 138 148)","tile-neon-base":"rgb(10 10 10)","tile-neon-accent":"rgb(212 255 58)","tile-chrom-base":"rgb(28 28 28)","tile-chrom-accent":"rgb(217 217 217)","tile-granate-base":"rgb(127 43 58)","tile-granate-accent":"rgb(239 230 210)","tile-ozean-base":"rgb(36 80 107)","tile-ozean-accent":"rgb(232 238 242)","font-display":"'UnifrakturCook', 'UnifrakturCook Fallback', Georgia, serif","font-body":"'Archivo', 'Archivo Fallback', system-ui, sans-serif","font-mono":"'JetBrains Mono', ui-monospace, 'SFMono-Regular', monospace","font-stretch-normal":"100%","font-stretch-semi":"112%","font-stretch-wide":"125%","font-weight-regular":"400","font-weight-medium":"500","font-weight-semibold":"600","font-weight-bold":"700","font-weight-extrabold":"800","font-weight-black":"900","font-size-2xs":"0.6875rem","font-size-xs":"0.75rem","font-size-sm":"0.8125rem","font-size-md":"0.9375rem","font-size-base":"1.0625rem","font-size-logo":"1.75rem","font-size-body":"clamp(0.9375rem, 0.9rem + 0.25vw, 1.125rem)","font-size-prose":"clamp(1.0625rem, 1.045rem + 0.2vw, 1.25rem)","font-size-lead":"clamp(1.125rem, 0.9rem + 1vw, 1.6875rem)","font-size-kicker":"clamp(0.6875rem, 0.55rem + 0.6vw, 1.0625rem)","font-size-tape":"clamp(1.0625rem, 0.85rem + 0.9vw, 1.625rem)","font-size-track":"clamp(1.1875rem, 1rem + 0.95vw, 1.875rem)","font-size-h2":"clamp(1.625rem, 1.2rem + 1.9vw, 2.625rem)","font-size-h3":"clamp(2.375rem, 2.1rem + 1vw, 3rem)","font-size-gig":"clamp(1.1875rem, 1rem + 0.7vw, 1.625rem)","font-size-statement":"clamp(1.625rem, 1.1rem + 2.14vw, 3.125rem)","font-size-claim":"clamp(1.75rem, 2.35rem + 1.9vw, 4.75rem)","font-size-title-sm":"clamp(1.875rem, 0.9rem + 4vw, 4.875rem)","font-size-title":"clamp(2.875rem, 1.85rem + 4.75vw, 6.875rem)","font-size-floor":"clamp(1.875rem, 0.75rem + 4.55vw, 5.25rem)","font-size-stat":"clamp(2.5rem, 0.75rem + 7.1vw, 7.5rem)","font-size-set-time":"clamp(4rem, 3.2rem + 3.4vw, 6.5rem)","font-size-pullquote":"clamp(2rem, 1.2rem + 3vw, 3.875rem)","font-size-dropcap":"clamp(5.25rem, 4.2rem + 4.3vw, 8.125rem)","font-size-contact":"clamp(2.125rem, 0.7rem + 6.6vw, 7.75rem)","font-size-display":"clamp(3.375rem, 2rem + 7vw, 10rem)","font-size-wordmark":"clamp(3.75rem, 13vw, 10rem)","font-size-page-title":"clamp(4.375rem, 2rem + 11.7vw, 14.375rem)","font-size-mega":"clamp(4.375rem, 5rem + 5.25vw, 11.25rem)","font-size-hero":"clamp(4rem, min(23vw - 0.5rem, 3.9rem + 15vw), 20.625rem)","line-height-crush":"0.8","line-height-poster":"0.9","line-height-tight":"1","line-height-snug":"1.15","line-height-base":"1.5","line-height-relaxed":"1.6","line-height-prose":"1.7","line-height-code":"1.8","tracking-tight":"-0.02em","tracking-normal":"0","tracking-wide":"0.06em","tracking-wider":"0.1em","tracking-widest":"0.14em","tracking-label":"0.2em","tracking-spaced":"0.3em","space-0":"0","space-px":"1px","space-1":"0.25rem","space-2":"0.5rem","space-3":"0.75rem","space-4":"1rem","space-5":"1.25rem","space-6":"1.5rem","space-7":"1.75rem","space-8":"2rem","space-10":"2.5rem","space-12":"3rem","space-14":"3.5rem","space-16":"4rem","space-20":"5rem","space-24":"6rem","space-gutter":"clamp(1rem, 3.5vw, 2.5rem)","space-section":"clamp(2.5rem, 1.5rem + 4.5vw, 6rem)","space-panel":"clamp(1.25rem, 3.5vw, 3rem)","space-stack":"clamp(1.75rem, 4vw, 5rem)","header-offset":"5.5rem","tap-target":"2.75rem","control-height":"3rem","control-height-lg":"3.375rem","width-page":"87.5rem","width-prose":"53.75rem","width-sidebar":"17rem",measure:"60ch","measure-narrow":"44ch","measure-tight":"36ch","measure-title":"15ch","duration-instant":"150ms","duration-fast":"200ms","duration-base":"250ms","duration-slow":"350ms","duration-drop":"1000ms","duration-page":"550ms","duration-stagger":"550ms","stagger-step":"70ms","duration-blink":"1.2s","duration-chrome":"9s","duration-marquee":"30s","duration-marquee-slow":"44s","duration-spin":"90s","ease-out":"cubic-bezier(0.2, 0.8, 0.2, 1)","ease-drop":"cubic-bezier(0.2, 0.9, 0.2, 1)","ease-in-out":"cubic-bezier(0.4, 0, 0.2, 1)","tilt-tape":"-3.5deg","tilt-tape-counter":"2.5deg","tilt-stamp":"-8deg","tilt-pullquote":"-1.2deg","skew-hover":"-8deg","z-raised":"1","z-sticky":"60","z-float":"70","z-player":"75","z-overlay":"80","z-sheet":"86","z-progress":"95","bp-sm":"640px","bp-md":"768px","bp-lg":"1024px","bp-xl":"1280px"},ue=`-${Oe}`;function c(i){const e=`--${ke.theme}-${i}`,t=g[i];return B(ue?`var(${e}${ue}, var(${e}, ${t}))`:`var(${e}, ${t})`)}const lt=x`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :where(a[href], button, [role='button'], summary, label[for], select) {
    cursor: pointer;
  }

  :where(button, select):disabled,
  :where([aria-disabled='true']) {
    cursor: not-allowed;
  }
`,ct=x`
  :host > * {
    font-family: ${c("font-body")};
    font-size: ${c("font-size-base")};
    line-height: ${c("line-height-base")};
    color: ${c("text")};
    -webkit-font-smoothing: antialiased;
  }
`;class me extends P{static{this.styles=[at,lt,ct]}warn(...e){K&&console.warn(`[${F}] <${this.localName}>:`,...e)}}function ze(i,e,t={}){const r=new Set(i);return ee({reflect:!0,converter:{fromAttribute:s=>s!==null&&r.has(s)?s:e,toAttribute:s=>s===e?null:s},...t})}function Ce({min:i=-1/0,max:e=1/0,fallback:t=0}={},r={}){return ee({reflect:!0,converter:{fromAttribute:s=>{const n=Number(s);return s===null||Number.isNaN(n)?t:Math.min(e,Math.max(i,n))},toAttribute:s=>s===t?null:String(s)},...r})}function ge(i,e,t,r){typeof e=="string"&&i.includes(e)||r(`${t}="${String(e)}" ist ungueltig. Erlaubt: ${i.join(" | ")}.`)}const fe=(...i)=>d,Pe={Fan:(i,e)=>["0% 0%","100% 0%","0% 100%","100% 100%"].map(t=>`radial-gradient(circle at ${t},${e} 70%,${i} 70%)`),Lens:(i,e)=>["100% 100%","0% 100%","100% 0%","0% 0%"].map(t=>`radial-gradient(circle at ${t},${e} 74%,${i} 74%)`),Wedge:(i,e)=>["100% 100%","0% 100%","100% 0%","0% 0%"].map(t=>`radial-gradient(circle at ${t},${e} 48%,${i} 48%)`),Star:(i,e)=>["135deg","225deg","45deg","315deg"].map(t=>`linear-gradient(${t},${e} 50%,${i} 50%)`),Bloom:(i,e)=>[0,1,2,3].map(()=>`radial-gradient(circle at 50% 50%,${e} 34%,${i} 34%,${i} 62%,${e} 62%,${e} 70%,${i} 70%)`),Weave:(i,e)=>["0deg","90deg","90deg","0deg"].map(t=>`repeating-linear-gradient(${t},${e} 0 22%,${i} 22% 50%)`)},R=Object.keys(Pe),V={Neon:[g["tile-neon-base"],g["tile-neon-accent"]],Chrom:[g["tile-chrom-base"],g["tile-chrom-accent"]],Granate:[g["tile-granate-base"],g["tile-granate-accent"]],Ozean:[g["tile-ozean-base"],g["tile-ozean-accent"]]},L=Object.keys(V);function $e(i,e,t){return[`background-color:${e}`,`background-image:${Pe[i](e,t).join(",")}`,"background-size:50% 50%","background-repeat:no-repeat","background-position:0% 0%,100% 0%,0% 100%,100% 100%"].join(";")}const be=x`
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  clip-path: inset(50%);
  overflow: hidden;
  white-space: nowrap;
`,ye=B("1.875rem"),_e=B("1.625rem"),ht=x`
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
    border: ${c("border-width-rule")} solid ${c("rule")};
    box-shadow: ${c("shadow-figure")};
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
    gap: ${c("space-3")} ${c("space-5")};
    padding-block: ${c("space-3")};
    align-items: center;
    justify-content: space-between;
    border-block-end: ${c("border-width")} solid ${c("border")};
  }

  .caption__label {
    font-family: ${c("font-mono")};
    font-size: ${c("font-size-xs")};
    letter-spacing: ${c("tracking-wider")};
    color: ${c("accent")};
    text-transform: uppercase;

    &::before {
      content: '▶ ' / '';
    }
  }

  .controls {
    display: flex;
    flex-wrap: wrap;
    gap: ${c("space-2")};
    align-items: center;
  }

  .group {
    display: flex;
    flex-wrap: wrap;
    gap: ${c("space-2")};
    margin: 0;
    padding: 0;
    align-items: center;
    border: none;
  }

  .group--motif {
    padding-inline-end: ${c("space-3")};
    border-inline-end: ${c("border-width")} solid ${c("border-strong")};
  }

  .group__label {
    ${be}
  }

  .swatch {
    position: relative;
    inline-size: ${ye};
    block-size: ${ye};
    padding: 0;
    border: 0;
    outline: ${c("border-width")} solid ${c("border-strong")};
    outline-offset: 2px;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      inset: 50% auto auto 50%;
      min-inline-size: ${c("tap-target")};
      min-block-size: ${c("tap-target")};
      translate: -50% -50%;
    }

    &[aria-pressed='true'] {
      outline: 2px solid ${c("accent")};
    }

    &:focus-visible {
      outline: 2px solid ${c("text")};
      outline-offset: 3px;
    }
  }

  .swatch--palette {
    inline-size: ${_e};
    block-size: ${_e};
    border-radius: ${c("radius-circle")};
  }

  .visually-hidden {
    ${be}
  }
`;var U=function(i,e,t,r){var s=arguments.length,n=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(n=(s<3?o(n):s>3?o(e,t,n):o(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};class E extends me{constructor(){super(...arguments),this.motif="Fan",this.palette="Neon",this.columns=8,this.rows=5,this.noControls=!1}static{this.styles=[me.styles,ht]}willUpdate(){K&&(ge(R,this.motif,"motif",this.warn.bind(this)),ge(L,this.palette,"palette",this.warn.bind(this)))}get#e(){return R.includes(this.motif)?this.motif:"Fan"}get#t(){return L.includes(this.palette)?this.palette:"Neon"}get#r(){return V[this.#t]}get#o(){return this.columns*this.rows}get#s(){return Math.max(2,Math.ceil(this.columns/2))}get#i(){return Math.max(2,Math.ceil(this.rows*.75))}#a(e){const t=e%this.columns,r=Math.floor(e/this.columns);return t>=this.#s||r>=this.#i}#n(e){Object.assign(this,e),this.dispatchEvent(new CustomEvent("hc-tile-change",{detail:{motif:this.motif,palette:this.palette},bubbles:!0,composed:!0}))}#l(){const[e,t]=this.#r;return z`
      <div
        class="controls"
        part=${fe("controls")}
      >
        <fieldset class="group group--motif">
          <legend class="group__label">Motiv</legend>
          ${R.map(r=>z`
              <button
                class="swatch swatch--motif"
                type="button"
                style=${$e(r,e,t)}
                aria-pressed=${r===this.#e}
                @click=${()=>this.#n({motif:r})}
              >
                <span class="visually-hidden">${r}</span>
              </button>
            `)}
        </fieldset>

        <fieldset class="group">
          <legend class="group__label">Palette</legend>
          ${L.map(r=>{const[s,n]=V[r];return z`
              <button
                class="swatch swatch--palette"
                type="button"
                style=${pe({background:`linear-gradient(135deg, ${s} 50%, ${n} 50%)`})}
                aria-pressed=${r===this.#t}
                @click=${()=>this.#n({palette:r})}
              >
                <span class="visually-hidden">${r}</span>
              </button>
            `})}
        </fieldset>
      </div>
    `}render(){const[e,t]=this.#r,r=$e(this.#e,e,t),s=Array.from({length:this.#o},(n,o)=>o);return z`
      <figure class="lab">
        <div
          class="preview"
          part=${fe("preview")}
          style=${pe({"--columns":String(this.columns),"--rows":String(this.rows),"--columns-narrow":String(this.#s),"--rows-narrow":String(this.#i)})}
        >
          ${s.map(n=>z`<span
                class=${this.#a(n)?"tile tile--wide-only":"tile"}
                style=${r}
                data-index=${n}
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
    `}}U([ze(R,"Fan")],E.prototype,"motif",void 0);U([ze(L,"Neon")],E.prototype,"palette",void 0);U([Ce({min:2,max:16,fallback:8})],E.prototype,"columns",void 0);U([Ce({min:2,max:8,fallback:5})],E.prototype,"rows",void 0);U([ee({type:Boolean,reflect:!0,attribute:"no-controls"})],E.prototype,"noControls",void 0);Me("tile-lab",E);
