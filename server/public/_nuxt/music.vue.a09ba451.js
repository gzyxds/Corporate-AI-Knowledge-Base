import{_ as R,a as b}from"./display.vue.4d052b4e.js";import{E as z}from"./index.17567b0d.js";import{u as B,_ as E}from"./player.a8689b22.js";import{_ as M}from"./index.vue.7f39d825.js";import{v as k}from"./entry.dfbfd4fd.js";/* empty css                     */import{b as I}from"./music.f06b2c3d.js";import{E as C}from"./index.a258b1c6.js";import{k as $,s as L,r as P,E as T,b as V,H as n,I as l,J as o,$ as p,u as _,X as r,V as D,R as j}from"./swiper-vue.2eb6bd20.js";const F={class:"h-full bg-body rounded-[15px] p-[16px] flex flex-col"},H={class:"flex-1 min-h-0 flex flex-col"},J={class:"flex-1 min-h-0"},U={key:0,class:"h-full flex flex-col"},X={class:"flex-1 min-h-0 flex"},q={class:"flex-1 min-w-0 h-full"},A={"infinite-scroll-distance":"50"},G={class:"mt-[16px]"},K={key:1,class:"h-full flex flex-col items-center justify-center"},O={class:"text-tx-secondary"},Q=o("div",{class:"my-[10px]"},"当前还没有音乐哦",-1),W=o("div",{class:"text-tx-secondary text-sm flex item-center"}," 快去创建你的作品吧！ ",-1),re=$({__name:"music",setup(Y){const i=L(),{getMusic:u,currentId:d,pause:Z}=B(),e=P({pageNo:1,count:0,pageSize:15,loading:!1,lists:[]}),f=async()=>{try{const t=await I({status:2,page_no:e.pageNo,page_size:e.pageSize});e.count=t.count,e.pageNo===1&&(e.lists=[]),e.lists.push(...t.lists)}catch{}finally{e.loading=!1}};u();const m=()=>{e.count>=e.pageNo*e.pageSize&&(e.pageNo++,f())},g=async()=>{e.pageSize=e.pageNo*e.pageSize,e.pageNo=1,await f()},h=async()=>{e.loading=!0,e.pageSize=15,e.pageNo=1,await f()},x=()=>{const t=e.lists.find(s=>s.status===2);t&&(d.value=t.id)};return T(async()=>{await h(),x()}),V(d,t=>{if(i.value){const s=document.getElementById(`music-item-${t}`);if(!s)return;const c=s==null?void 0:s.getBoundingClientRect(),a=i.value.wrapRef.getBoundingClientRect();c.top<a.top&&i.value.setScrollTop(s==null?void 0:s.offsetTop),c.bottom>a.bottom&&i.value.setScrollTop((s==null?void 0:s.offsetTop)-a.height+c.height)}}),(t,s)=>{const c=R,a=z,v=b,y=E,S=M,N=C,w=k;return n(),l("div",F,[o("div",H,[p((n(),l("div",J,[_(e).lists.length?(n(),l("div",U,[o("div",X,[o("div",q,[r(a,{ref_key:"scrollBarRef",ref:i},{default:D(()=>[p((n(),l("div",A,[r(c,{"music-list":_(e).lists,onUpdate:g},null,8,["music-list"])])),[[N,m]])]),_:1},512)]),r(v)]),o("div",G,[r(y,{ref:"musicPlayerRef",class:"bg-page"},null,512)])])):_(e).loading?j("",!0):(n(),l("div",K,[o("div",O,[r(S,{size:45,name:"local-icon-music1"})]),Q,W]))])),[[w,_(e).loading]])])])}}});export{re as _};
