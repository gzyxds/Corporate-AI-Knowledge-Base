import{g as Oe,e as he,f as se,i as ye,n as le,j as be,r as y,w as E,u as Pe,k as Se,b as x,l as Ee,s as $e}from"./@vue.7946e41b.js";var Q;const D=typeof window<"u",Fe=e=>typeof e<"u",ie=e=>typeof e=="function",Ie=e=>typeof e=="string",V=()=>{};D&&((Q=window==null?void 0:window.navigator)==null?void 0:Q.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function N(e){return typeof e=="function"?e():Pe(e)}function ue(e,t){function r(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(o)})}return r}const ce=e=>e();function fe(e,t=!0,r=!0,n=!1){let a=0,o,l=!0,s=V,i;const c=()=>{o&&(clearTimeout(o),o=void 0,s(),s=V)};return d=>{const u=N(e),m=Date.now()-a,v=()=>i=d();return c(),u<=0?(a=Date.now(),v()):(m>u&&(r||!l)?(a=Date.now(),v()):t&&(i=new Promise((w,b)=>{s=n?b:w,o=setTimeout(()=>{a=Date.now(),l=!0,w(v()),c()},Math.max(0,u-m))})),!r&&!o&&(o=setTimeout(()=>l=!0,u)),l=!1,i)}}function je(e=ce){const t=y(!0);function r(){t.value=!1}function n(){t.value=!0}const a=(...o)=>{t.value&&e(...o)};return{isActive:Se(t),pause:r,resume:n,eventFilter:a}}function xe(e){return e}function T(e){return Oe()?(he(e),!0):!1}function Ft(e,t=200,r=!1,n=!0,a=!1){return ue(fe(t,r,n,a),e)}function Ne(e){return typeof e=="function"?x(e):y(e)}function L(e,t=!0){se()?ye(e):t?e():le(e)}function It(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=be(e),o=y(e);function l(s){if(arguments.length)return o.value=s,o.value;{const i=N(r);return o.value=o.value===i?N(n):i,o.value}}return a?l:[o,l]}var B=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,Re=(e,t)=>{var r={};for(var n in e)Ce.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&B)for(var n of B(e))t.indexOf(n)<0&&De.call(e,n)&&(r[n]=e[n]);return r};function de(e,t,r={}){const n=r,{eventFilter:a=ce}=n,o=Re(n,["eventFilter"]);return E(e,ue(a,t),o)}var Ae=Object.defineProperty,Te=Object.defineProperties,Me=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,J=(e,t,r)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ve=(e,t)=>{for(var r in t||(t={}))pe.call(t,r)&&J(e,r,t[r]);if(R)for(var r of R(t))ve.call(t,r)&&J(e,r,t[r]);return e},ke=(e,t)=>Te(e,Me(t)),ze=(e,t)=>{var r={};for(var n in e)pe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&R)for(var n of R(e))t.indexOf(n)<0&&ve.call(e,n)&&(r[n]=e[n]);return r};function Le(e,t,r={}){const n=r,{eventFilter:a}=n,o=ze(n,["eventFilter"]),{eventFilter:l,pause:s,resume:i,isActive:c}=je(a);return{stop:de(e,t,ke(Ve({},o),{eventFilter:l})),pause:s,resume:i,isActive:c}}var We=Object.defineProperty,Qe=Object.defineProperties,Be=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,H=(e,t,r)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Je=(e,t)=>{for(var r in t||(t={}))me.call(t,r)&&H(e,r,t[r]);if(A)for(var r of A(t))we.call(t,r)&&H(e,r,t[r]);return e},He=(e,t)=>Qe(e,Be(t)),qe=(e,t)=>{var r={};for(var n in e)me.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&A)for(var n of A(e))t.indexOf(n)<0&&we.call(e,n)&&(r[n]=e[n]);return r};function jt(e,t,r={}){const n=r,{throttle:a=0,trailing:o=!0,leading:l=!0}=n,s=qe(n,["throttle","trailing","leading"]);return de(e,t,He(Je({},s),{eventFilter:fe(a,o,l)}))}function j(e){var t;const r=N(e);return(t=r==null?void 0:r.$el)!=null?t:r}const S=D?window:void 0,Ue=D?window.document:void 0;D&&window.navigator;D&&window.location;function C(...e){let t,r,n,a;if(Ie(e[0])||Array.isArray(e[0])?([r,n,a]=e,t=S):[t,r,n,a]=e,!t)return V;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const o=[],l=()=>{o.forEach(f=>f()),o.length=0},s=(f,d,u,m)=>(f.addEventListener(d,u,m),()=>f.removeEventListener(d,u,m)),i=E(()=>[j(t),N(a)],([f,d])=>{l(),f&&o.push(...r.flatMap(u=>n.map(m=>s(f,u,m,d))))},{immediate:!0,flush:"post"}),c=()=>{i(),l()};return T(c),c}function W(e,t=!1){const r=y(),n=()=>r.value=Boolean(e());return n(),L(n,t),r}function Ge(e,t={}){const{window:r=S}=t,n=W(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=y(!1),l=()=>{!a||("removeEventListener"in a?a.removeEventListener("change",s):a.removeListener(s))},s=()=>{!n.value||(l(),a=r.matchMedia(Ne(e).value),o.value=a.matches,"addEventListener"in a?a.addEventListener("change",s):a.addListener(s))};return Ee(s),T(()=>l()),o}function Ke(e){return JSON.parse(JSON.stringify(e))}const k=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z="__vueuse_ssr_handlers__";k[z]=k[z]||{};const Xe=k[z];function _e(e,t){return Xe[e]||t}function Ye(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Ze=Object.defineProperty,q=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable,U=(e,t,r)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,G=(e,t)=>{for(var r in t||(t={}))et.call(t,r)&&U(e,r,t[r]);if(q)for(var r of q(t))tt.call(t,r)&&U(e,r,t[r]);return e};const rt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},K="vueuse-storage";function nt(e,t,r,n={}){var a;const{flush:o="pre",deep:l=!0,listenToStorageChanges:s=!0,writeDefaults:i=!0,mergeDefaults:c=!1,shallow:f,window:d=S,eventFilter:u,onError:m=p=>{console.error(p)}}=n,v=(f?$e:y)(t);if(!r)try{r=_e("getDefaultStorage",()=>{var p;return(p=S)==null?void 0:p.localStorage})()}catch(p){m(p)}if(!r)return v;const w=N(t),b=Ye(w),_=(a=n.serializer)!=null?a:rt[b],{pause:g,resume:O}=Le(v,()=>$(v.value),{flush:o,deep:l,eventFilter:u});return d&&s&&(C(d,"storage",P),C(d,K,M)),P(),v;function $(p){try{if(p==null)r.removeItem(e);else{const h=_.write(p),F=r.getItem(e);F!==h&&(r.setItem(e,h),d&&d.dispatchEvent(new CustomEvent(K,{detail:{key:e,oldValue:F,newValue:h,storageArea:r}})))}}catch(h){m(h)}}function I(p){const h=p?p.newValue:r.getItem(e);if(h==null)return i&&w!==null&&r.setItem(e,_.write(w)),w;if(!p&&c){const F=_.read(h);return ie(c)?c(F,w):b==="object"&&!Array.isArray(F)?G(G({},w),F):F}else return typeof h!="string"?h:_.read(h)}function M(p){P(p.detail)}function P(p){if(!(p&&p.storageArea!==r)){if(p&&p.key==null){v.value=w;return}if(!(p&&p.key!==e)){g();try{v.value=I(p)}catch(h){m(h)}finally{p?le(O):O()}}}}}function ge(e){return Ge("(prefers-color-scheme: dark)",e)}var at=Object.defineProperty,X=Object.getOwnPropertySymbols,ot=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable,Y=(e,t,r)=>t in e?at(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,lt=(e,t)=>{for(var r in t||(t={}))ot.call(t,r)&&Y(e,r,t[r]);if(X)for(var r of X(t))st.call(t,r)&&Y(e,r,t[r]);return e};function it(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=S,storage:o,storageKey:l="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:i,emitAuto:c}=e,f=lt({auto:"",light:"light",dark:"dark"},e.modes||{}),d=ge({window:a}),u=x(()=>d.value?"dark":"light"),m=i||(l==null?y(n):nt(l,n,o,{window:a,listenToStorageChanges:s})),v=x({get(){return m.value==="auto"&&!c?u.value:m.value},set(g){m.value=g}}),w=_e("updateHTMLAttrs",(g,O,$)=>{const I=a==null?void 0:a.document.querySelector(g);if(!!I)if(O==="class"){const M=$.split(/\s/g);Object.values(f).flatMap(P=>(P||"").split(/\s/g)).filter(Boolean).forEach(P=>{M.includes(P)?I.classList.add(P):I.classList.remove(P)})}else I.setAttribute(O,$)});function b(g){var O;const $=g==="auto"?u.value:g;w(t,r,(O=f[$])!=null?O:$)}function _(g){e.onChanged?e.onChanged(g,b):b(g)}return E(v,_,{flush:"post",immediate:!0}),c&&E(u,()=>_(v.value),{flush:"post"}),L(()=>_(v.value)),v}var ut=Object.defineProperty,ct=Object.defineProperties,ft=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,dt=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable,ee=(e,t,r)=>t in e?ut(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,vt=(e,t)=>{for(var r in t||(t={}))dt.call(t,r)&&ee(e,r,t[r]);if(Z)for(var r of Z(t))pt.call(t,r)&&ee(e,r,t[r]);return e},mt=(e,t)=>ct(e,ft(t));function xt(e={}){const{valueDark:t="dark",valueLight:r="",window:n=S}=e,a=it(mt(vt({},e),{onChanged:(s,i)=>{var c;e.onChanged?(c=e.onChanged)==null||c.call(e,s==="dark"):i(s)},modes:{dark:t,light:r}})),o=ge({window:n});return x({get(){return a.value==="dark"},set(s){s===o.value?a.value="auto":a.value=s?"dark":"light"}})}var te=Object.getOwnPropertySymbols,wt=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable,gt=(e,t)=>{var r={};for(var n in e)wt.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&te)for(var n of te(e))t.indexOf(n)<0&&_t.call(e,n)&&(r[n]=e[n]);return r};function Ot(e,t,r={}){const n=r,{window:a=S}=n,o=gt(n,["window"]);let l;const s=W(()=>a&&"ResizeObserver"in a),i=()=>{l&&(l.disconnect(),l=void 0)},c=E(()=>j(e),d=>{i(),s.value&&a&&d&&(l=new ResizeObserver(t),l.observe(d,o))},{immediate:!0,flush:"post"}),f=()=>{i(),c()};return T(f),{isSupported:s,stop:f}}function Nt(e,t={width:0,height:0},r={}){const{window:n=S,box:a="content-box"}=r,o=x(()=>{var i,c;return(c=(i=j(e))==null?void 0:i.namespaceURI)==null?void 0:c.includes("svg")}),l=y(t.width),s=y(t.height);return Ot(e,([i])=>{const c=a==="border-box"?i.borderBoxSize:a==="content-box"?i.contentBoxSize:i.devicePixelContentBoxSize;if(n&&o.value){const f=j(e);if(f){const d=n.getComputedStyle(f);l.value=parseFloat(d.width),s.value=parseFloat(d.height)}}else if(c){const f=Array.isArray(c)?c:[c];l.value=f.reduce((d,{inlineSize:u})=>d+u,0),s.value=f.reduce((d,{blockSize:u})=>d+u,0)}else l.value=i.contentRect.width,s.value=i.contentRect.height},r),E(()=>j(e),i=>{l.value=i?t.width:0,s.value=i?t.height:0}),{width:l,height:s}}const re=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Ct(e,t={}){const{document:r=Ue,autoExit:n=!1}=t,a=e||(r==null?void 0:r.querySelector("html")),o=y(!1);let l=re[0];const s=W(()=>{if(r){for(const w of re)if(w[1]in r)return l=w,!0}else return!1;return!1}),[i,c,f,,d]=l;async function u(){!s.value||(r!=null&&r[f]&&await r[c](),o.value=!1)}async function m(){if(!s.value)return;await u();const w=j(a);w&&(await w[i](),o.value=!0)}async function v(){o.value?await u():await m()}return r&&C(r,d,()=>{o.value=!!(r!=null&&r[f])},!1),n&&T(u),{isSupported:s,isFullscreen:o,enter:m,exit:u,toggle:v}}var ne;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ne||(ne={}));var ht=Object.defineProperty,ae=Object.getOwnPropertySymbols,yt=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable,oe=(e,t,r)=>t in e?ht(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Pt=(e,t)=>{for(var r in t||(t={}))yt.call(t,r)&&oe(e,r,t[r]);if(ae)for(var r of ae(t))bt.call(t,r)&&oe(e,r,t[r]);return e};const St={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Pt({linear:xe},St);function Et(e,t,r,n={}){var a,o,l;const{clone:s=!1,passive:i=!1,eventName:c,deep:f=!1,defaultValue:d}=n,u=se(),m=r||(u==null?void 0:u.emit)||((a=u==null?void 0:u.$emit)==null?void 0:a.bind(u))||((l=(o=u==null?void 0:u.proxy)==null?void 0:o.$emit)==null?void 0:l.bind(u==null?void 0:u.proxy));let v=c;t||(t="modelValue"),v=c||v||`update:${t.toString()}`;const w=_=>s?ie(s)?s(_):Ke(_):_,b=()=>Fe(e[t])?w(e[t]):d;if(i){const _=b(),g=y(_);return E(()=>e[t],O=>g.value=w(O)),E(g,O=>{(O!==e[t]||f)&&m(v,O)},{deep:f}),g}else return x({get(){return b()},set(_){m(v,_)}})}function Dt(e,t,r={}){const n={};for(const a in e)n[a]=Et(e,a,t,r);return n}function Rt(e={}){const{window:t=S,initialWidth:r=1/0,initialHeight:n=1/0,listenOrientation:a=!0,includeScrollbar:o=!0}=e,l=y(r),s=y(n),i=()=>{t&&(o?(l.value=t.innerWidth,s.value=t.innerHeight):(l.value=t.document.documentElement.clientWidth,s.value=t.document.documentElement.clientHeight))};return i(),L(i),C("resize",i,{passive:!0}),a&&C("orientationchange",i,{passive:!0}),{width:l,height:s}}export{C as a,Ct as b,xt as c,It as d,Rt as e,Ft as f,Et as g,Dt as h,Nt as u,jt as w};
