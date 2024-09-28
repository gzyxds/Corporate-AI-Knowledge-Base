import{E as F}from"./entry.df16adda.js";import{a as j}from"./el-form-item.f85b8636.js";import{E as C}from"./el-scrollbar.f4d658ff.js";import{a as U,E as A}from"./el-tabs.bf76dc43.js";import{E as I}from"./el-empty.941f3aa6.js";/* empty css                */import{u as O,T}from"./canvas.17c19c8a.js";import{l as u}from"./lodash.9425e068.js";import{_ as w}from"./text-setting.vue.171b8dec.js";import B from"./effect-list.2a9df405.js";import{e as D}from"./empty_con.c05b5110.js";import{k as N,r as k,l as K,b as S,I as x,J as E,K as p,a2 as n,a0 as l,ae as P,u as e,an as X,ao as H}from"./swiper-vue.397ea2eb.js";import{_ as J}from"./_plugin-vue_export-helper.c27b6911.js";import"./_baseClone.000a3762.js";import"./_getTag.af7a9d71.js";import"./strings.294b5976.js";import"./useAudioPlay.49014f22.js";import"./unique-id.302803f8.js";import"./file.a6a074d0.js";import"./___vite-browser-external.34bf2328.js";import"./fontfaceobserver.standalone.f1692209.js";import"./el-select.b349f79d.js";import"./el-popper.89e34564.js";import"./isEqual.b93d80e7.js";import"./debounce.2369182b.js";import"./el-tag.7a8069da.js";import"./el-input-number.584990b0.js";import"./position.a44f3ead.js";import"./el-radio-group.1cf97d3f.js";import"./index.4a450666.js";import"./index.vue.403e5f16.js";import"./el-image-viewer.ad15677e.js";import"./throttle.92cc074e.js";/* empty css                        */import"./useQuery.59804ae0.js";const z=d=>(X("data-v-957818d4"),d=d(),H(),d),L={class:"avatar-select h-full flex flex-col"},W={class:"px-main pt-main"},$={key:0,class:"mt-[5px] flex-1 min-h-0"},q=z(()=>p("span",{class:"el-tab__label-text"},"文字设置",-1)),G={class:"h-full"},M={class:"p-main"},Q=z(()=>p("span",{class:"el-tab__label-text"},"文字特效",-1)),R={class:"h-full"},Y={class:"p-main"},Z={key:1,class:"p-main"},tt=N({__name:"text",setup(d){const i=O(),b=k({currentTab:"setting"}),v={fontSize:64,fontFamily:"Alibaba PuHuiTi",fill:"#ffffff",stroke:"",effect:{name:"",server_key:"",type:"",url:""}},o=k(u.cloneDeep(v)),y=K(()=>{var s;return((s=i.activeObject)==null?void 0:s.customType)===T.TEXT}),h=()=>{b.currentTab="setting";const s=u.cloneDeep(v);i.addText("这里是文字",T.TEXT,s)};S(()=>i.activeObject,s=>{var t;if(y.value)for(const r in o)o[r]=(t=s==null?void 0:s.data)==null?void 0:t[r];else Object.assign(o,u.cloneDeep(v))},{immediate:!0});const V=["fontSize","fontFamily","fill","stroke"];return S(()=>o,s=>{var r,_,c;if(!y.value)return;for(const m in o)if(V.includes(m)){let f=s[m];m==="fontSize"&&(f=i.calcFontSize(f)),(r=i.activeObject)==null||r.set(m,f)}const t=u.cloneDeep(o);(_=i.activeObject)==null||_.set("data",t),(c=i.canvas)==null||c.renderAll()},{deep:!0}),(s,t)=>{const r=F,_=j,c=C,m=U,f=A,g=I;return x(),E("div",L,[p("div",W,[n(r,{type:"primary",class:"w-full",size:"large",onClick:h},{default:l(()=>[P(" 添加文字 ")]),_:1})]),e(y)?(x(),E("div",$,[n(f,{modelValue:e(b).currentTab,"onUpdate:modelValue":t[5]||(t[5]=a=>e(b).currentTab=a),stretch:""},{default:l(()=>[n(m,{name:"setting"},{label:l(()=>[q]),default:l(()=>[p("div",G,[n(c,null,{default:l(()=>[p("div",M,[n(_,null,{default:l(()=>[n(w,{font:e(o).fontFamily,"onUpdate:font":t[0]||(t[0]=a=>e(o).fontFamily=a),"font-size":e(o).fontSize,"onUpdate:fontSize":t[1]||(t[1]=a=>e(o).fontSize=a),"font-color":e(o).fill,"onUpdate:fontColor":t[2]||(t[2]=a=>e(o).fill=a),"stroke-color":e(o).stroke,"onUpdate:strokeColor":t[3]||(t[3]=a=>e(o).stroke=a)},null,8,["font","font-size","font-color","stroke-color"])]),_:1})])]),_:1})])]),_:1}),n(m,{name:"special"},{label:l(()=>[Q]),default:l(()=>[p("div",R,[n(c,null,{default:l(()=>[p("div",Y,[n(B,{modelValue:e(o).effect,"onUpdate:modelValue":t[4]||(t[4]=a=>e(o).effect=a)},null,8,["modelValue"])])]),_:1})])]),_:1})]),_:1},8,["modelValue"])])):(x(),E("div",Z,[n(g,{image:e(D),description:"请添加文字，或在右侧选中文字～"},null,8,["image"])]))])}}});const Bt=J(tt,[["__scopeId","data-v-957818d4"]]);export{Bt as default};
