import{x as c,y as p,F as u,P as f,T as v}from"./entry.dfbfd4fd.js";import{k as a,l as m,H as s,I as o,T as i,u as r,N as y,R as S,_}from"./swiper-vue.2eb6bd20.js";const P=c({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:p(String),default:"solid"}}),b=a({name:"ElDivider"}),h=a({...b,props:P,setup(n){const l=n,e=u("divider"),d=m(()=>e.cssVar({"border-style":l.borderStyle}));return(t,k)=>(s(),o("div",{class:i([r(e).b(),r(e).m(t.direction)]),style:_(r(d)),role:"separator"},[t.$slots.default&&t.direction!=="vertical"?(s(),o("div",{key:0,class:i([r(e).e("text"),r(e).is(t.contentPosition)])},[y(t.$slots,"default")],2)):S("v-if",!0)],6))}});var g=f(h,[["__file","divider.vue"]]);const C=v(g);export{C as E};
