import{E as j,g as z,v as T,f as V}from"./entry.df16adda.js";import{E as J}from"./el-image-viewer.ad15677e.js";import{E as O}from"./el-select.b349f79d.js";import{E as $,a as ee}from"./el-checkbox.033475fe.js";import{u as te,_ as ae}from"./index.vue.1307e7a7.js";import"./el-tag.7a8069da.js";/* empty css                 */import"./el-tooltip.4ed993c7.js";import"./el-popper.89e34564.js";import"./el-scrollbar.f4d658ff.js";import{k as se,s as Y,a as E,E as oe,I as s,J as h,K as u,a2 as o,a0 as n,ae as r,u as a,ad as ne,W as ie,$ as m,Y as l,a4 as x,Z as le,a3 as b,e as re,n as me}from"./swiper-vue.397ea2eb.js";import{_ as ue}from"./renamePop.vue.6cdc95d5.js";import{f as ce,d as de,e as Ae}from"./my_database.5da0ead6.js";const pe="data:image/png;base64,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",fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAABXFJREFUWEfdmXtQVHUUx793dwUExBeIFEaCYIiYaySglDZSU8pkk6HRhMlYIsJI0TgitolubYBKg2TTMKyWj9HBpiwLBns51UQyhkSBUko4gDxUGHk/9zZnY7f94YV73b2g9ftnh3vP48P3nt+557fLwXLtgAIh6hQYuE3g4MHck+GPiSpnrHJ/TNfW151xIij9pjUhOcbpiwX+UKAEgIM1wcR8JqkmIN4rsq2h9/o+fWDqG2L2QvdZ4C/Vq8BxH1sTSIoPASfeHwUePGq7GnVtfV23rTQLXPBQJHg+T0pya2xMwOTbz/dbpfQdAyZoo9LdDdr6zuY9BSHZrVJEuKPAg0rfrO9q2ntg/i7tfwKYIA0woK6z4c367pYsMaXvuMImVfv4/psNEpS+a4ClKn1XARO0mNJjCuykdMDrM6PBgU07dLNRTdd2N2lutHZmfR6W0WZ5f0yBKXGUx5Pwc7pPtCEYle69lnEgcKdueOB89XMAd0I0mg0GDgo7+Dh6wtVusmgUHgb+ckdNeN2y09+ajMdcYVHKoQY81mBFifnte1vAkdPDEekRzoRs7GnGu9VHUdVZNyLLeKU91ns+g0enqBm7H1tKoa/5DB0DXcL+tgB7OrijKPQg6NPcPw39RuCtlftGBH7cNQSH5+2Cu/1Us12PoQ+LitahpPXi8L62AFPUcNeFODRPCw97VyZJeHEcvrlRLJiYbL8P0WOWo6f5fmt/B5IuZkJfc3LkKrEV2F5hh20+MdgxawOTiGDXlaWitruRuU72Wt84bPFey1zX155E0oVMEPiIy1ZgU/CCoGw84RYKhUVPJYiNv+vQzw+YGWJnrMJe/9fgpBxvvna+tRKhRevQY+gV34NyAQdN9DeWhr/zTIua7EXEuUR8PVgaQjVPT+Dl37QovF4kDksWcgFTrBXTwpA3Px2Oyn9PVGVtf+KF0hQ09bYgN1CDp6ctMYMN8AOILtPg2NVCabByA6s4JbLmbEHsjGeh5JRGCCqHnJpPUNleDd3sBKYUjtcXIvpXDVMyouRyKkzJqAN8MDeFUZKuU33ShjMtKgEqhaGbcsyBKeG8Cb74IUQPF5WTYH5J/XY4crkVNuV58Z7l2B+QfAu05H471sCznbyQp043qm25KtqrsPr8VpS3V4k+fUGD0VCYNt97AcnGzSe0hPqzZPrRAF7uFoY8dRrTESyBaANGlW7Hp43mKVEyr6x9mLIunvwgDgamwtdiKG/uawXNvZb9ubrrKmLKUnGm+RfpsHL3YYp3+uH9WDY1GArun0mV1Hzrsh5Txrlgs9fz5v5M92iUpCFJ0ivZ9G/JVRI0327zjoFm1iuMYh/VncLmij2g85tQf95ddQg7L+UMP/8O1V8u4IhpjyB3roaZb6mFLfxpLSo7qo1pqWMULzoMe8U4M8a13hbEl6fjRMNX0kpDDmAaakoWH4WbxbmMYOPL03Dkaj4DkuC1Bu/4JcBZ5chALz27AdTyRJetwC4qZ2T6J2G950om15G6fMRXpN0y37raTTI+iZXuSxn7Y/WFSChPA23QEZetwFq/OCR7x4B6r2n90XEFYT+vBz1uoSU0ZtKQlF193HjqGDXgBS4P4LvgHOb1S6WQWLEbH9adGjEvDfL0ZCxbHR08I869ijPN54b3tVZhUonmW4K2XDRKai/lirYqOnGk+sbipXsjGP8L7X9hY7kO9Cm4rAWmvjrH2QcqTsHEpYFdtA4HPWiTBjh7M/4G8KjsuILGnhvyAovu5tEysFbh0eIRjfv/Ah7ln71E1RQy4Ayr8VSp+QvKMf1h0QrgbhiwABElF0y+LDD9dBus3g5wmwBMtyKBfC48GsDx7+Ps+bexEwZT4L8Bn330S/1bvzIAAAAASUVORK5CYII=",ge={class:"md:flex justify-between"},ye={class:"mt-2 md:mt-0"},ke={class:"flex items-center"},we={class:"ml-2"},Ce={key:1,class:"text-error text-xs"},Ee={class:"flex justify-end mt-4"},Me=se({__name:"datalist",props:{id:{type:Number,default:0}},emits:["toImport","toItemList"],setup(H,{emit:M}){const X=M;Y();const y=E(!1),B=Y(),k=H,w=E({keyword:"",status:"",kb_id:k.id}),R=E([]),K=t=>{R.value=t.map(i=>i.uuid)},_=async t=>{await V.confirm("确定删除？"),await de({fd_id:t}),p()},Q=t=>{console.log(t),X("toItemList",t.id,t.name)},W=async t=>{y.value=!0,await me(),B.value.open(t)},G=async t=>{await V.confirm("确定重新拆分？"),await Ae({kb_id:k.id,fd_id:t}),p()},{pager:A,getLists:p,resetPage:D,resetParams:F}=te({fetchFun:ce,params:w.value});return oe(()=>{p(),setTimeout(()=>{console.log(k.id)},1e3)}),(t,i)=>{const c=j,N=z,L=J,C=O,d=$,S=ee,Z=ae,q=T;return s(),h("div",null,[u("div",ge,[u("div",null,[o(c,{type:"primary",onClick:i[0]||(i[0]=e=>t.$emit("toImport"))},{default:n(()=>[r(" 导入数据 ")]),_:1})]),u("div",ye,[o(N,{modelValue:a(w).keyword,"onUpdate:modelValue":i[1]||(i[1]=e=>a(w).keyword=e),class:"!w-[280px]",placeholder:"请输入问题/回答内容关键词进行搜索",clearable:"",onKeyup:ne(a(D),["enter"])},null,8,["modelValue","onKeyup"]),o(c,{class:"ml-2",type:"primary",onClick:a(D)},{default:n(()=>[r(" 查询 ")]),_:1},8,["onClick"]),o(c,{onClick:a(F)},{default:n(()=>[r(" 重置 ")]),_:1},8,["onClick"])])]),ie((s(),m(S,{class:"mt-4 cursor-pointer",data:a(A).lists,size:"large","row-class-name":"h-[70px]",onSelectionChange:K,onRowClick:Q},{default:n(()=>[o(d,{label:"名称",prop:"name","min-width":"250"},{default:n(({row:e,$index:v})=>{var f,g,P,U,I;return[u("div",ke,[e.is_default==1?(s(),m(L,{key:0,class:"w-[22px] h-[22px] flex-none",src:a(pe)},null,8,["src"])):l("",!0),e.is_default!=1?(s(),m(L,{key:1,class:"w-[22px] h-[22px] flex-none",src:a(fe)},null,8,["src"])):l("",!0),u("div",we,[u("div",null,x(e.name),1),e.is_qa==1?(s(),h(le,{key:0},[((f=e.qa)==null?void 0:f.status)==0?(s(),m(C,{key:0,type:"info"},{default:n(()=>[r("等待拆分")]),_:1})):l("",!0),((g=e.qa)==null?void 0:g.status)==1?(s(),m(C,{key:1,type:"warning"},{default:n(()=>[r("拆分中")]),_:1})):l("",!0),((P=e.qa)==null?void 0:P.status)==3?(s(),m(C,{key:2,type:"danger"},{default:n(()=>[r("拆分失败")]),_:1})):l("",!0)],64)):l("",!0),(U=e.qa)!=null&&U.error?(s(),h("span",Ce,x((I=e.qa)==null?void 0:I.error),1)):l("",!0)])])]}),_:1}),o(d,{label:"待训练",prop:"wait_sum","min-width":"150"}),o(d,{label:"已训练",prop:"ok_sum","min-width":"150"}),o(d,{label:"数据总量",prop:"total_sum","min-width":"150"}),o(d,{label:"创建时间",prop:"create_time","min-width":"150"}),o(d,{label:"操作","min-width":"200",fixed:"right"},{default:n(({row:e,$index:v})=>{var f;return[o(c,{type:"primary",link:"",onClick:b(g=>W(e.id),["stop"])},{default:n(()=>[r(" 重命名 ")]),_:2},1032,["onClick"]),((f=e.qa)==null?void 0:f.status)==3?(s(),m(c,{key:0,type:"primary",link:"",onClick:b(g=>G(e.id),["stop"])},{default:n(()=>[r(" 重新拆分 ")]),_:2},1032,["onClick"])):l("",!0),v!=0?(s(),m(c,{key:1,type:"danger",link:"",onClick:b(g=>_(e.id),["stop"])},{default:n(()=>[r(" 删除 ")]),_:2},1032,["onClick"])):l("",!0)]}),_:1})]),_:1},8,["data"])),[[q,a(A).loading]]),u("div",Ee,[o(Z,{modelValue:a(A),"onUpdate:modelValue":i[2]||(i[2]=e=>re(A)?A.value=e:null),onChange:a(p)},null,8,["modelValue","onChange"])]),a(y)?(s(),m(ue,{key:0,ref_key:"renamePopRef",ref:B,onSuccess:a(p),onClose:i[3]||(i[3]=e=>y.value=!1)},null,8,["onSuccess"])):l("",!0)])}}});export{Me as _};
