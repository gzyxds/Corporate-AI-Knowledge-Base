import{aK as I,a9 as L,Y as N}from"./entry.dfbfd4fd.js";import{g as w}from"./position.4bcf7430.js";import{t as E}from"./throttle.d40f833a.js";import{n as g}from"./swiper-vue.2eb6bd20.js";const i="ElInfiniteScroll",A=50,O=200,_=0,C={delay:{type:Number,default:O},distance:{type:Number,default:_},disabled:{type:Boolean,default:!1},immediate:{type:Boolean,default:!0}},v=(t,n)=>Object.entries(C).reduce((o,[e,s])=>{var u,r;const{type:d,default:c}=s,a=t.getAttribute(`infinite-scroll-${e}`);let l=(r=(u=n[a])!=null?u:a)!=null?r:c;return l=l==="false"?!1:l,l=d(l),o[e]=Number.isNaN(l)?c:l,o},{}),h=t=>{const{observer:n}=t[i];n&&(n.disconnect(),delete t[i].observer)},D=(t,n)=>{const{container:o,containerEl:e,instance:s,observer:u,lastScrollTop:r}=t[i],{disabled:d,distance:c}=v(t,s),{clientHeight:a,scrollHeight:l,scrollTop:f}=e,S=f-r;if(t[i].lastScrollTop=f,u||d||S<0)return;let b=!1;if(o===t)b=l-(a+f)<=c;else{const{clientTop:T,scrollHeight:y}=t,H=w(t,e);b=f+a>=H+T+y-c}b&&n.call(s)};function m(t,n){const{containerEl:o,instance:e}=t[i],{disabled:s}=v(t,e);s||o.clientHeight===0||(o.scrollHeight<=o.clientHeight?n.call(e):h(t))}const F={async mounted(t,n){const{instance:o,value:e}=n;I(e)||L(i,"'v-infinite-scroll' binding value must be a function"),await g();const{delay:s,immediate:u}=v(t,o),r=N(t,!0),d=r===window?document.documentElement:r,c=E(D.bind(null,t,e),s);if(r){if(t[i]={instance:o,container:r,containerEl:d,delay:s,cb:e,onScroll:c,lastScrollTop:d.scrollTop},u){const a=new MutationObserver(E(m.bind(null,t,e),A));t[i].observer=a,a.observe(t,{childList:!0,subtree:!0}),m(t,e)}r.addEventListener("scroll",c)}},unmounted(t){if(!t[i])return;const{container:n,onScroll:o}=t[i];n==null||n.removeEventListener("scroll",o),h(t)},async updated(t){if(!t[i])await g();else{const{containerEl:n,cb:o,observer:e}=t[i];n.clientHeight&&e&&m(t,o)}}},p=F;p.install=t=>{t.directive("InfiniteScroll",p)};const K=p;export{K as E};
