import{x as V,y as A,z as M,aO as S,bS as T,A as j,X as z,aA as W,F as k,P as H,bD as X,K as G,H as J,T as L,bp as U}from"./entry.dfbfd4fd.js";import{c as $}from"./castArray.c741e965.js";import{a as K,b as Y,p as Z,l as r,k as _,H as D,I as B,N,T as m,u as e,i as q,J as y,a7 as Q,Z as R,X as E,V as g,a6 as ee,Y as se,$ as ae,a0 as te}from"./swiper-vue.2eb6bd20.js";import{_ as le}from"./index.93ec1a3c.js";const x=s=>j(s)||z(s)||W(s),oe=V({accordion:Boolean,modelValue:{type:A([Array,String,Number]),default:()=>M([])}}),ne={[S]:x,[T]:x},F=Symbol("collapseContextKey"),ie=(s,n)=>{const t=K($(s.modelValue)),i=l=>{t.value=l;const o=s.accordion?t.value[0]:t.value;n(S,o),n(T,o)},a=l=>{if(s.accordion)i([t.value[0]===l?"":l]);else{const o=[...t.value],c=o.indexOf(l);c>-1?o.splice(c,1):o.push(l),i(o)}};return Y(()=>s.modelValue,()=>t.value=$(s.modelValue),{deep:!0}),Z(F,{activeNames:t,handleItemClick:a}),{activeNames:t,setActiveNames:i}},ce=()=>{const s=k("collapse");return{rootKls:r(()=>s.b())}},re=_({name:"ElCollapse"}),de=_({...re,props:oe,emits:ne,setup(s,{expose:n,emit:t}){const i=s,{activeNames:a,setActiveNames:l}=ie(i,t),{rootKls:o}=ce();return n({activeNames:a,setActiveNames:l}),(c,u)=>(D(),B("div",{class:m(e(o))},[N(c.$slots,"default")],2))}});var ue=H(de,[["__file","collapse.vue"]]);const pe=V({title:{type:String,default:""},name:{type:A([String,Number]),default:void 0},disabled:Boolean}),me=s=>{const n=q(F),{namespace:t}=k("collapse"),i=K(!1),a=K(!1),l=X(),o=r(()=>l.current++),c=r(()=>{var C;return(C=s.name)!=null?C:`${t.value}-id-${l.prefix}-${e(o)}`}),u=r(()=>n==null?void 0:n.activeNames.value.includes(e(c)));return{focusing:i,id:o,isActive:u,handleFocus:()=>{setTimeout(()=>{a.value?a.value=!1:i.value=!0},50)},handleHeaderClick:()=>{s.disabled||(n==null||n.handleItemClick(e(c)),i.value=!1,a.value=!0)},handleEnterClick:()=>{n==null||n.handleItemClick(e(c))}}},ve=(s,{focusing:n,isActive:t,id:i})=>{const a=k("collapse"),l=r(()=>[a.b("item"),a.is("active",e(t)),a.is("disabled",s.disabled)]),o=r(()=>[a.be("item","header"),a.is("active",e(t)),{focusing:e(n)&&!s.disabled}]),c=r(()=>[a.be("item","arrow"),a.is("active",e(t))]),u=r(()=>a.be("item","wrap")),v=r(()=>a.be("item","content")),f=r(()=>a.b(`content-${e(i)}`)),b=r(()=>a.b(`head-${e(i)}`));return{arrowKls:c,headKls:o,rootKls:l,itemWrapperKls:u,itemContentKls:v,scopedContentId:f,scopedHeadId:b}},fe=["id","aria-expanded","aria-controls","aria-describedby","tabindex"],be=["id","aria-hidden","aria-labelledby"],Ce=_({name:"ElCollapseItem"}),he=_({...Ce,props:pe,setup(s,{expose:n}){const t=s,{focusing:i,id:a,isActive:l,handleFocus:o,handleHeaderClick:c,handleEnterClick:u}=me(t),{arrowKls:v,headKls:f,rootKls:b,itemWrapperKls:C,itemContentKls:O,scopedContentId:I,scopedHeadId:w}=ve(t,{focusing:i,isActive:l,id:a});return n({isActive:l}),(h,d)=>(D(),B("div",{class:m(e(b))},[y("button",{id:e(w),class:m(e(f)),"aria-expanded":e(l),"aria-controls":e(I),"aria-describedby":e(I),tabindex:h.disabled?-1:0,type:"button",onClick:d[0]||(d[0]=(...p)=>e(c)&&e(c)(...p)),onKeydown:d[1]||(d[1]=ee(se((...p)=>e(u)&&e(u)(...p),["stop","prevent"]),["space","enter"])),onFocus:d[2]||(d[2]=(...p)=>e(o)&&e(o)(...p)),onBlur:d[3]||(d[3]=p=>i.value=!1)},[N(h.$slots,"title",{},()=>[Q(R(h.title),1)]),E(e(J),{class:m(e(v))},{default:g(()=>[E(e(G))]),_:1},8,["class"])],42,fe),E(e(le),null,{default:g(()=>[ae(y("div",{id:e(I),role:"region",class:m(e(C)),"aria-hidden":!e(l),"aria-labelledby":e(w)},[y("div",{class:m(e(O))},[N(h.$slots,"default")],2)],10,be),[[te,e(l)]])]),_:3})],2))}});var P=H(he,[["__file","collapse-item.vue"]]);const Ke=L(ue,{CollapseItem:P}),Ne=U(P);export{Ne as E,Ke as a};
