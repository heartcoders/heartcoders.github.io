import{i as P,B as m,D as w,a as p,b as L,d as M}from"./base-element.Cm4rcYS3.js";import{e as D}from"./query.C-S87uso.js";import{c as C,e as N,n as B,b as E}from"./enum-prop.BAWDxAdj.js";import{r as I,a as O,b as F,P as v,S as g}from"./playback.CdgLhyHJ.js";import{s as U,t as k}from"./Base.astro_astro_type_script_index_0_lang.C-FjDqSu.js";import{p as q}from"./class-map.D00Ya1xp.js";import"./preload-helper.BlTxHScW.js";import"./state.Pgeo1wuR.js";import"./a11y.DrKT5_4z.js";import"./define.BTFn-6J-.js";const T=["home","blog","article"],l={freq:1.5,amp:.3,hue:0,drive:1},Y={lineup:{freq:2.4,amp:.5,hue:0,drive:2.2},"floor-1":{freq:2,amp:.42,hue:0,drive:1.6},"floor-2":{freq:3.6,amp:.55,hue:1,drive:1.6},"floor-3":{freq:1.1,amp:.3,hue:0,drive:1.6},"floor-4":{freq:2.6,amp:.4,hue:0,drive:1.6},"floor-5":{freq:4.6,amp:.6,hue:1,drive:1.6},"floor-6":{freq:1.5,amp:.35,hue:0,drive:1.6}};function V(s){return s?Y[s]??l:l}function z(s){const{layout:t,isNarrow:e}=s,i=x(s.scrollRatio,0,1);return t==="blog"?{x:e?.4:2.1,y:.9,scale:e?.5:.72}:t==="article"?{x:e?.9:2.6,y:1.15,scale:e?.36:.48}:e?{x:.6,y:u(-.2,.2,i),scale:u(.5,.42,i)}:{x:u(1.55,2.1,i),y:u(-.75,-.3,i),scale:u(.9,.7,i)}}const H=2.1,X=.9,W=4,G=.02,K=.05;function j(s,t,e){return Math.max(Math.abs(s),e?X:H)*Math.cos(t/W*Math.PI*2)}function Z(s){return Math.pow(.5+.5*Math.cos(s*Math.PI*2),3)}const $=.05,J=.28,Q=.25,tt=.02,et=.12,it=.05,st=3e-4,ot=.35,rt=["time","beat","x","y","scale","rotationY","elapsed"];function nt(s){if(!s||typeof s!="object")return null;const t=s;return rt.every(i=>Number.isFinite(t[i]))?t:null}class at{#e=0;#t=0;#i=0;#l=l.freq;#s=l.amp;#a=l.hue;#o=0;#r=0;#n=null;#c=0;#h=0;#f=0;#u=0;snapshot(){return{time:this.#e,beat:this.#t,x:this.#o,y:this.#r,scale:this.#n??1,rotationY:this.#f,elapsed:this.#u}}restore(t){this.#e=t.time,this.#t=t.beat,this.#o=t.x,this.#r=t.y,this.#n=t.scale,this.#f=t.rotationY,this.#u=t.elapsed}step(t){const e=x(t.delta,0,$),i=z(t),o=t.layout==="article",r=t.trackBpm>0;this.#d(e,r?t.trackBpm:t.bpm);const n=r?J:o?Q:1,R=r||t.isBeating?Z(this.#t)*n:0;this.#i=a(this.#i,R,.18,e),this.#e+=e*(o?ot:t.mood.drive),this.#l=a(this.#l,t.mood.freq,.05,e),this.#s=a(this.#s,t.mood.amp*(1+this.#i*.55),.2,e),this.#a=a(this.#a,t.mood.hue,.06,e),this.#c=a(this.#c,t.pointerX,.05,e),this.#h=a(this.#h,t.pointerY,.05,e);const S=t.isSwaying?j(i.x,t.scrollDepth??0,t.isNarrow):i.x,_=t.isSwaying?G:K;return this.#o=a(this.#o,S+t.pointerX*.25,_,e),this.#r=a(this.#r,i.y+t.pointerY*.2,.05,e),this.#n=a(this.#n??i.scale,i.scale,.05,e),this.#f+=e*.15*t.mood.drive,this.#u+=e,{time:this.#e,freq:this.#l,amp:this.#s,hue:this.#a,kick:this.#i,x:this.#o,y:this.#r,scale:this.#n*(1+this.#i*.03),pointerX:this.#c,pointerY:this.#h,rotationX:t.scrollY*.0012+t.pointerY*.2,rotationY:this.#f,dustRotationX:t.scrollY*st+this.#h*it,dustRotationY:this.#u*tt+this.#c*et}}#d(t,e){this.#t=(this.#t+t*e/60)%1}}function a(s,t,e,i){const o=i*60,r=Math.pow(1-e,o);return t+(s-t)*r}function u(s,t,e){return s+(t-s)*e}function x(s,t,e){return Math.min(e,Math.max(t,s))}const lt=`#version 300 es
in vec3 aPosition;

uniform vec2 uResolution;
uniform vec2 uDustRotation;
uniform float uPass;

out float vFade;

const float CAMERA_Z = 6.4;
const float FOV_TAN = 0.3443;
const float POINT_SIZE = 0.024;
const float NEAR = 0.3;

mat3 rotation(vec2 angles) {
  float cx = cos(angles.x), sx = sin(angles.x);
  float cy = cos(angles.y), sy = sin(angles.y);
  mat3 rx = mat3(1.0, 0.0, 0.0, 0.0, cx, sx, 0.0, -sx, cx);
  mat3 ry = mat3(cy, 0.0, -sy, 0.0, 1.0, 0.0, sy, 0.0, cy);
  return rx * ry;
}

void main() {
  vec3 p = rotation(uDustRotation) * aPosition;
  float side = p.z < 0.0 ? -1.0 : 1.0;
  float depth = CAMERA_Z - p.z;

  if (side != uPass || depth < NEAR) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    vFade = 0.0;
    return;
  }

  vec2 projected = p.xy / (depth * FOV_TAN);
  gl_Position = vec4(projected.x * uResolution.y / uResolution.x, projected.y, 0.0, 1.0);
  gl_PointSize = max(1.0, POINT_SIZE * uResolution.y * 0.5 / (FOV_TAN * depth));
  vFade = clamp(1.4 - depth / 14.0, 0.25, 1.0);
}
`,ht=`#version 300 es
precision mediump float;

uniform vec3 uAccent;

in float vFade;
out vec4 outColor;

void main() {
  float distanceToCenter = length(gl_PointCoord - 0.5);
  if (distanceToCenter > 0.5) discard;
  float alpha = 0.55 * vFade * smoothstep(0.5, 0.15, distanceToCenter);
  outColor = vec4(uAccent * alpha, alpha);
}
`,ct=`#version 300 es
void main() {
  vec2 position = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
}
`,ut=`#version 300 es
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform float uFreq;
uniform float uAmp;
uniform float uHue;
uniform float uKick;
uniform vec3 uCenter;
uniform vec2 uPointer;
uniform vec2 uRotation;
uniform float uMaxBright;
uniform vec3 uAccent;
uniform vec3 uAlert;

out vec4 outColor;

const float RADIUS = 1.5;
const float CAMERA_Z = 6.4;
const float FOV_TAN = 0.3443;
const int STEPS = 64;
const float EDGE_WIDTH = 1.5;

mat3 rotation(vec2 angles) {
  float cx = cos(angles.x), sx = sin(angles.x);
  float cy = cos(angles.y), sy = sin(angles.y);
  mat3 rx = mat3(1.0, 0.0, 0.0, 0.0, cx, sx, 0.0, -sx, cx);
  mat3 ry = mat3(cy, 0.0, -sy, 0.0, 1.0, 0.0, sy, 0.0, cy);
  return ry * rx;
}

float wave(vec3 p) {
  return sin(p.x * uFreq + uTime * 0.9) * sin(p.y * uFreq * 1.21 + uTime * 1.1) * sin(p.z * uFreq * 0.87 + uTime * 0.7)
    + 0.45 * sin(p.x * uFreq * 2.3 - uTime * 1.3 + p.y * 1.7)
    + 0.25 * sin(p.z * uFreq * 3.1 + uTime * 1.7);
}

float surface(vec3 q) {
  vec3 onSphere = normalize(q) * RADIUS;
  vec3 pointer = vec3(uPointer * 1.1, 0.0);
  return length(q) - RADIUS - wave(onSphere + pointer) * uAmp;
}

vec3 surfaceNormal(vec3 q) {
  const vec2 k = vec2(1.0, -1.0);
  const float h = 0.002;
  return normalize(
    k.xyy * surface(q + k.xyy * h) +
    k.yyx * surface(q + k.yyx * h) +
    k.yxy * surface(q + k.yxy * h) +
    k.xxx * surface(q + k.xxx * h)
  );
}

vec2 hitBounds(vec3 origin, vec3 direction, vec3 center, float radius) {
  vec3 offset = origin - center;
  float b = dot(offset, direction);
  float c = dot(offset, offset) - radius * radius;
  float h = b * b - c;
  if (h < 0.0) return vec2(-1.0);
  h = sqrt(h);
  return vec2(-b - h, -b + h);
}

vec3 chrome(vec3 normal, vec3 view, float displacement) {
  vec3 reflected = reflect(-view, normal);
  float fresnel = pow(1.0 - max(dot(normal, view), 0.0), 2.2);
  float sky = smoothstep(-0.15, 0.55, reflected.y);
  float bands = 0.5 + 0.5 * sin(reflected.y * 14.0 + reflected.x * 4.0 + displacement * 2.0);
  float horizon = exp(-pow(reflected.y * 6.0, 2.0));
  vec3 metal = mix(vec3(0.03), vec3(0.95), sky * 0.85 + bands * 0.18) + horizon * 0.6;
  vec3 accent = mix(uAccent, uAlert, uHue);
  vec3 color = metal * (0.55 + 0.45 * (1.0 - fresnel)) + accent * fresnel * 0.55;
  float specular = pow(max(dot(reflected, normalize(vec3(0.4, 0.8, 0.5))), 0.0), 60.0);
  return color + specular * 1.1;
}

void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - uResolution) / uResolution.y;
  vec3 origin = vec3(0.0, 0.0, CAMERA_Z);
  vec3 direction = normalize(vec3(uv * FOV_TAN, -1.0));

  float scale = uCenter.z;
  vec3 center = vec3(uCenter.xy, 0.0);
  float bound = (RADIUS + uAmp * 1.8 + 0.1) * scale;
  vec2 span = hitBounds(origin, direction, center, bound);

  vec3 color = vec3(0.0);
  float alpha = 0.0;

  if (span.y > 0.0) {
    mat3 turn = rotation(uRotation);
    mat3 unturn = transpose(turn);
    float pixel = 2.0 * FOV_TAN / uResolution.y;
    float t = max(span.x, 0.0);
    float bestD = 1e5;
    float bestT = t;
    bool hit = false;

    for (int i = 0; i < STEPS; i++) {
      vec3 q = unturn * ((origin + direction * t - center) / scale);
      float d = surface(q) * scale * 0.55;
      if (d < bestD) {
        bestD = d;
        bestT = t;
      }
      if (d < 0.0005 * t) {
        hit = true;
        break;
      }
      t += d;
      if (t > span.y) break;
    }

    float edge = pixel * bestT * EDGE_WIDTH;
    if (hit || bestD < edge) {
      vec3 q = unturn * ((origin + direction * bestT - center) / scale);
      vec3 normal = turn * surfaceNormal(q);
      color = chrome(normal, -direction, wave(normalize(q) * RADIUS));
      alpha = hit ? 1.0 : 1.0 - smoothstep(0.0, edge, bestD);
    }
  }

  vec3 lit = min(color * uMaxBright, vec3(uMaxBright * 1.1)) * (1.0 + uKick * 0.08);
  outColor = vec4(lit * alpha, alpha);
}
`,ft=1800,dt=3.4,mt=9,pt=-3;function vt(s,t=ft){const e=new Float32Array(t*3);for(let i=0;i<t;i+=1){const o=dt+s()*mt,r=s()*Math.PI*2,n=Math.acos(2*s()-1);e[i*3]=o*Math.sin(n)*Math.cos(r),e[i*3+1]=o*Math.sin(n)*Math.sin(r),e[i*3+2]=o*Math.cos(n)+pt}return e}class h extends Error{constructor(t){super(t),this.name="ChromeBlobError"}}const gt=["uResolution","uTime","uFreq","uAmp","uHue","uKick","uCenter","uPointer","uRotation","uMaxBright","uAccent","uAlert"],bt={alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,desynchronized:!0,powerPreference:"low-power"};function b(s,t,e){const i=s.createShader(t);if(!i)throw new h("Shader liess sich nicht anlegen");if(s.shaderSource(i,e),s.compileShader(i),s.getShaderParameter(i,s.COMPILE_STATUS))return i;const o=s.getShaderInfoLog(i)??"ohne Meldung";throw s.deleteShader(i),new h(`Shader liess sich nicht uebersetzen: ${o}`)}function y(s,t,e){const i=s.createProgram();if(!i)throw new h("Programm liess sich nicht anlegen");const o=b(s,s.VERTEX_SHADER,t),r=b(s,s.FRAGMENT_SHADER,e);if(s.attachShader(i,o),s.attachShader(i,r),s.linkProgram(i),s.deleteShader(o),s.deleteShader(r),s.getProgramParameter(i,s.LINK_STATUS))return i;const n=s.getProgramInfoLog(i)??"ohne Meldung";throw s.deleteProgram(i),new h(`Programm liess sich nicht linken: ${n}`)}const yt=-1,At=1;function Et(s,t){const e=gt.map(i=>[i,s.getUniformLocation(t,i)]);return Object.fromEntries(e)}class Tt{#e;#t;#i;#l;#s=null;#a=null;#o=null;#r=null;#n=null;#c=null;#h=null;#f=vt(Math.random);#u=!1;constructor(t){this.#e=t.canvas,this.#i=t.colors,this.#l=t.maxBrightness;const e=t.canvas.getContext("webgl2",bt);if(!e)throw new h("Dieser Browser liefert keinen WebGL2-Kontext");this.#t=e,this.#p(),this.#e.addEventListener("webglcontextlost",this.#g),this.#e.addEventListener("webglcontextrestored",this.#y)}get isLost(){return this.#u}resize(t,e,i){const o=Math.max(1,Math.round(t*i)),r=Math.max(1,Math.round(e*i));this.#e.width===o&&this.#e.height===r||(this.#e.width=o,this.#e.height=r,this.#t.viewport(0,0,o,r))}draw(t){const e=this.#t;this.#u||!this.#o||!this.#s||(e.clear(e.COLOR_BUFFER_BIT),this.#m(t,yt),this.#d(t),this.#m(t,At))}#d(t){const e=this.#t,i=this.#o;i&&(e.useProgram(this.#s),e.bindVertexArray(this.#a),e.uniform2f(i.uResolution,this.#e.width,this.#e.height),e.uniform1f(i.uTime,t.time),e.uniform1f(i.uFreq,t.freq),e.uniform1f(i.uAmp,t.amp),e.uniform1f(i.uHue,t.hue),e.uniform1f(i.uKick,t.kick),e.uniform3f(i.uCenter,t.x,t.y,t.scale),e.uniform2f(i.uPointer,t.pointerX,t.pointerY),e.uniform2f(i.uRotation,t.rotationX,t.rotationY),e.drawArrays(e.TRIANGLES,0,3))}#m(t,e){const i=this.#t,o=this.#h;!o||!this.#r||(i.useProgram(this.#r),i.bindVertexArray(this.#n),i.uniform2f(o.resolution,this.#e.width,this.#e.height),i.uniform2f(o.rotation,t.dustRotationX,t.dustRotationY),i.uniform1f(o.pass,e),i.drawArrays(i.POINTS,0,this.#f.length/3))}dispose(){this.#e.removeEventListener("webglcontextlost",this.#g),this.#e.removeEventListener("webglcontextrestored",this.#y),this.#v()}#p(){const t=this.#t;this.#s=y(t,ct,ut),this.#a=t.createVertexArray(),this.#o=Et(t,this.#s),t.disable(t.DEPTH_TEST),t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.clearColor(0,0,0,0),t.useProgram(this.#s),t.uniform1f(this.#o.uMaxBright,this.#l),t.uniform3f(this.#o.uAccent,...this.#i.accent),t.uniform3f(this.#o.uAlert,...this.#i.alert),this.#b()}#b(){const t=this.#t,e=y(t,lt,ht);this.#r=e,this.#n=t.createVertexArray(),this.#c=t.createBuffer(),t.bindVertexArray(this.#n),t.bindBuffer(t.ARRAY_BUFFER,this.#c),t.bufferData(t.ARRAY_BUFFER,this.#f,t.STATIC_DRAW);const i=t.getAttribLocation(e,"aPosition");t.enableVertexAttribArray(i),t.vertexAttribPointer(i,3,t.FLOAT,!1,0,0),t.bindVertexArray(null),this.#h={resolution:t.getUniformLocation(e,"uResolution"),rotation:t.getUniformLocation(e,"uDustRotation"),pass:t.getUniformLocation(e,"uPass"),accent:t.getUniformLocation(e,"uAccent")},t.useProgram(e),t.uniform3f(this.#h.accent,...this.#i.accent)}#v(){this.#s&&this.#t.deleteProgram(this.#s),this.#a&&this.#t.deleteVertexArray(this.#a),this.#r&&this.#t.deleteProgram(this.#r),this.#n&&this.#t.deleteVertexArray(this.#n),this.#c&&this.#t.deleteBuffer(this.#c),this.#s=null,this.#a=null,this.#o=null,this.#r=null,this.#n=null,this.#c=null,this.#h=null}#g=t=>{t.preventDefault(),this.#u=!0,this.#v()};#y=()=>{this.#u=!1,this.#p()}}class xt{#e;#t;#i=null;#l=null;#s=!1;#a=!1;constructor(t){this.#e=t,this.#t=globalThis.matchMedia?.("(prefers-reduced-motion: reduce)")??null}get running(){return this.#i!==null}start(){this.#a||(this.#a=!0,this.#t?.addEventListener("change",this.#d),document.addEventListener("visibilitychange",this.#u),this.#l=new IntersectionObserver(t=>{this.#s=t.some(e=>e.isIntersecting),this.#r()},{rootMargin:this.#e.rootMargin??"200px"}),this.#l.observe(this.#e.target))}stop(){this.#a=!1,this.#h(),this.#l?.disconnect(),this.#l=null,this.#t?.removeEventListener("change",this.#d),document.removeEventListener("visibilitychange",this.#u)}get#o(){return!this.#a||!this.#s||document.hidden?!1:!this.#t?.matches}#r(){if(this.#o){this.#c();return}this.#h(),this.#a&&this.#s&&this.#n()}#n(){this.#e.still?this.#e.still():this.#e.frame(performance.now())}#c(){this.#i===null&&(this.#i=requestAnimationFrame(this.#f))}#h(){this.#i!==null&&(cancelAnimationFrame(this.#i),this.#i=null)}#f=t=>{this.#e.frame(t),this.#i=this.#o?requestAnimationFrame(this.#f):null};#u=()=>this.#r();#d=()=>this.#r()}const Rt=[210,214,228],St=/rgb\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/;function _t(s){const t=St.exec(s);if(!t)return Rt;const[,e,i,o]=t;return[Number(e),Number(i),Number(o)]}function A(s){const[t,e,i]=_t(s);return[t/255,e/255,i/255]}const Pt=P`
  canvas {
    display: block;
    position: fixed;
    inset: 0;
    z-index: -2;
    inline-size: 100%;
    block-size: 100%;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    canvas {
      opacity: 0.8;
    }
  }
`;var f=function(s,t,e,i){var o=arguments.length,r=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var d=s.length-1;d>=0;d--)(n=s[d])&&(r=(o<3?n(r):o>3?n(t,e,r):n(t,e))||r);return o>3&&r&&Object.defineProperty(t,e,r),r};const wt=.55,Lt=.75,Mt=2,Dt=800,Ct=240;class c extends m{constructor(){super(...arguments),this.layout="home",this.bpm=128,this.beat=!1,this.sway=!1,this.#e=new at,this.#t=null,this.#i=null,this.#l=null,this.#s=null,this.#a=0,this.#o=0,this.#r=l,this.#n=0,this.#d=()=>{U(this.#e.snapshot())},this.#m=t=>{this.#a=t.clientX/globalThis.innerWidth*2-1,this.#o=-(t.clientY/globalThis.innerHeight*2-1)},this.#p=t=>{const i=(t.target instanceof Element?t.target:null)?.closest("[data-blob-mood]");this.#r=V(i?.dataset.blobMood)},this.#b=t=>{const e=I(t);e&&(this.#n=e.bpm)},this.#v=t=>{O(t)&&(this.#n=0)}}static{this.styles=[m.styles,Pt]}#e;#t;#i;#l;#s;#a;#o;#r;#n;disconnectedCallback(){super.disconnectedCallback(),this.#u(),this.#i?.stop(),this.#i=null,this.#l?.disconnect(),this.#l=null,this.#t?.dispose(),this.#t=null}willUpdate(){w&&C(T,this.layout,"layout",this.warn.bind(this))}firstUpdated(){const t=this.canvas;if(!t||(this.#t=this.#c(t),!this.#t))return;const e=nt(k());e&&this.#e.restore(e),this.#n=F()?.detail.bpm??0,this.#l=new ResizeObserver(()=>this.#h(t)),this.#l.observe(t),this.#h(t),this.#f(),this.#i=new xt({target:t,frame:i=>this.#y(i),still:()=>this.#A(),rootMargin:"0px"}),this.#i.start()}#c(t){try{return new Tt({canvas:t,maxBrightness:wt,colors:{accent:A(p.accent),alert:A(p.live)}})}catch(e){if(!(e instanceof h))throw e;return this.warn("kein WebGL2, der Blob bleibt aus:",e.message),null}}#h(t){const e=Math.min(globalThis.devicePixelRatio||1,Mt);this.#t?.resize(t.clientWidth,t.clientHeight,e*Lt),this.#i?.running||this.#A()}#f(){globalThis.addEventListener("pointermove",this.#m,{passive:!0}),document.addEventListener("pointerover",this.#p,{passive:!0}),document.addEventListener(v,this.#b),document.addEventListener(g,this.#v),globalThis.addEventListener("pagehide",this.#d)}#u(){globalThis.removeEventListener("pointermove",this.#m),document.removeEventListener("pointerover",this.#p),document.removeEventListener(v,this.#b),document.removeEventListener(g,this.#v),globalThis.removeEventListener("pagehide",this.#d)}#d;#m;#p;#b;#v;#g(t){const e=globalThis.innerWidth,i=globalThis.innerHeight||1;return this.#e.step({layout:this.layout,scrollRatio:globalThis.scrollY/i,isNarrow:e<Dt,delta:t,scrollY:globalThis.scrollY,pointerX:this.#a,pointerY:this.#o,mood:this.#r,bpm:this.bpm,trackBpm:this.#n,isBeating:this.beat,isSwaying:this.sway,scrollDepth:globalThis.scrollY/i})}#y(t){const e=this.#s===null?0:(t-this.#s)/1e3;this.#s=t,this.#t?.draw(this.#g(e))}#A(){this.#s=null;let t=this.#g(1/60);for(let e=1;e<Ct;e+=1)t=this.#g(1/60);this.#t?.draw(t)}render(){return L`
      <canvas
        part=${q("canvas")}
        aria-hidden="true"
      ></canvas>
    `}}f([N(T,"home")],c.prototype,"layout",void 0);f([B({min:60,max:200,fallback:128})],c.prototype,"bpm",void 0);f([E()],c.prototype,"beat",void 0);f([E()],c.prototype,"sway",void 0);f([D("canvas")],c.prototype,"canvas",void 0);M("chrome-blob",c);export{c as ChromeBlob};
