import{E as w}from"./el-image-viewer.ad15677e.js";import{E as D}from"./el-card.55a0e076.js";import{E as V,a as C}from"./el-tabs.bf76dc43.js";import{E as $}from"./el-scrollbar.f4d658ff.js";import{a as B}from"./entry.df16adda.js";import{_ as I}from"./data-study.vue.0b40340d.js";import N from"./testData.32616e3a.js";import{_ as S}from"./setUp.vue.230e9b17.js";import{a as T}from"./my_database.5da0ead6.js";import{k as q,a as K,r as d,E as L,p as R,I as p,J as f,a2 as s,a0 as m,K as n,u as t,a4 as u,e as U,Z as j,ap as F,$ as v,a1 as J,Y as M}from"./swiper-vue.397ea2eb.js";import{_ as O}from"./_plugin-vue_export-helper.c27b6911.js";import"./throttle.92cc074e.js";import"./debounce.2369182b.js";import"./position.a44f3ead.js";import"./strings.294b5976.js";import"./datalist.vue.1309b974.js";import"./el-select.b349f79d.js";import"./el-popper.89e34564.js";import"./isEqual.b93d80e7.js";import"./_getTag.af7a9d71.js";import"./el-tag.7a8069da.js";import"./el-checkbox.033475fe.js";import"./index.6edb46f6.js";import"./index.vue.1307e7a7.js";/* empty css                 */import"./el-tooltip.4ed993c7.js";import"./renamePop.vue.6cdc95d5.js";import"./el-form-item.f85b8636.js";import"./_baseClone.000a3762.js";import"./index.34adc8c7.js";import"./el-dialog.64289190.js";import"./use-dialog.825901d5.js";import"./refs.2a024717.js";/* empty css                */import"./importData.86bdf11a.js";import"./index.vue.403e5f16.js";import"./hook.d7b4f5cd.js";import"./cvs.481bc13e.js";import"./el-upload.397b9616.js";import"./el-progress.598034ee.js";import"./cloneDeep.8862a013.js";import"./fileReader.15642605.js";import"./___vite-browser-external.34bf2328.js";import"./doc.02c44e21.js";import"./QASplit.faa1e9d5.js";import"./itemList.vue.5aa9d347.js";import"./index.vue.b9ae65fe.js";import"./editPop.vue.d3c9e835.js";import"./index.7225eed5.js";import"./usePolling.7824bae6.js";import"./useLockFn.a803ddfa.js";import"./index.vue.a507811b.js";import"./useQuery.59804ae0.js";import"./index.a1e489de.js";import"./client-only.6cb320c5.js";const P={class:"p-[15px] h-full flex flex-col"},Y={class:"flex"},Z={class:"ml-2 flex flex-col"},z={class:"font-medium"},A={class:"text-info text-sm"},G={class:"h-full import-data"},H=q({__name:"index",setup(Q){const x=B(),r=K(1),i=x.query.id,e=d({name:"",image:"",intro:"",qa_length:""}),y=d([{name:"数据学习",type:1,component:I},{name:"搜索测试",type:3,component:N},{name:"知识库设置",type:4,component:S}]),l=async()=>{const c=await T({id:i});Object.keys(e).map(o=>{e[o]=c[o]})};return L(()=>{l()}),R("knowDetail",e),(c,o)=>{const b=w,_=D,E=C,g=V,h=$;return p(),f("div",P,[s(_,{shadow:"never",class:"!border-none"},{default:m(()=>[n("div",Y,[s(b,{class:"w-[68px] h-[54px] flex-none",src:t(e).image},null,8,["src"]),n("div",Z,[n("div",z,u(t(e).name),1),n("div",A,u(t(e).intro||"这个知识库还没介绍呢～"),1)])])]),_:1}),s(_,{shadow:"never",class:"!border-none mt-4 flex-1 overflow-auto !h-0"},{default:m(()=>[s(h,null,{default:m(()=>[n("div",G,[s(g,{modelValue:t(r),"onUpdate:modelValue":o[2]||(o[2]=a=>U(r)?r.value=a:null),class:"demo-tabs"},{default:m(()=>[(p(!0),f(j,null,F(t(y),a=>(p(),v(E,{key:a.type,label:a.name,name:a.type},{default:m(()=>[t(r)==a.type?(p(),v(J(a.component),{key:0,id:t(i),type:t(e).type,onToImport:o[0]||(o[0]=k=>r.value=2),onSuccess:o[1]||(o[1]=k=>r.value=1),onUpDate:l},null,40,["id","type"])):M("",!0)]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])])]),_:1})]),_:1})])}}});const ot=O(H,[["__scopeId","data-v-c7b879a0"]]);export{ot as default};
