import{_ as F}from"./index.vue.7f39d825.js";import{E as D,f as W,a as j,j as z,d as N}from"./entry.dfbfd4fd.js";import{E as O,a as M}from"./index.883ed08b.js";import"./el-form-item.4ed993c7.js";/* empty css                */import{k as g,l as y,H as r,U as m,O as b,u as _,e as x,am as $,V as f,I as k,S as E,aj as C,s as w,a as P,b as L,W as T,Y as G,J as v,Z as q,R as h,X as S,a7 as I,N as A}from"./swiper-vue.2eb6bd20.js";import{E as H,a as J}from"./el-select.b7a2650e.js";/* empty css               *//* empty css                     *//* empty css                  */import{_ as B}from"./_plugin-vue_export-helper.c27b6911.js";import{b as K,a as X}from"./el-radio-group.c427f46d.js";/* empty css                        */import{a as Y,b as Z}from"./index.76d1875c.js";import{E as Q}from"./index.17567b0d.js";import"./castArray.c741e965.js";import"./_baseClone.20563df6.js";import"./_getTag.83294aff.js";import"./index.8ad94f19.js";import"./isUndefined.aa0326a0.js";import"./index.e979a1ab.js";import"./strings.ceb81673.js";import"./isEqual.0df0ab2c.js";import"./debounce.8cbe4cfc.js";import"./_baseIteratee.5e0c38c1.js";import"./index.071e9281.js";const ee=g({__name:"input",emits:["update:modelValue"],setup(p,{emit:u}){const l=p,e=y({get(){return l.modelValue},set(o){u("update:modelValue",o)}});return(o,a)=>{const d=D;return r(),m(d,b(l,{modelValue:_(e),"onUpdate:modelValue":a[0]||(a[0]=s=>x(e)?e.value=s:null)}),null,16,["modelValue"])}}}),oe=g({__name:"textarea",props:{autosize:{type:[Boolean,Object]}},emits:["update:modelValue"],setup(p,{emit:u}){const l=p,e=y({get(){return l.modelValue},set(o){u("update:modelValue",o)}});return(o,a)=>{const d=D;return r(),m(d,b(l,{modelValue:_(e),"onUpdate:modelValue":a[0]||(a[0]=s=>x(e)?e.value=s:null),type:"textarea",autosize:o.autosize?{minRows:2}:!1}),null,16,["modelValue","autosize"])}}}),te=g({__name:"select",props:{defaultValue:{},modelValue:{},options:{default:()=>[]}},emits:["update:modelValue"],setup(p,{emit:u}){const l=p,e=y({get(){return l.modelValue},set(o){u("update:modelValue",o)}});return $(()=>{l.defaultValue&&(e.value=l.defaultValue)}),(o,a)=>{const d=H,s=J;return r(),m(s,b(o.$attrs,{modelValue:_(e),"onUpdate:modelValue":a[0]||(a[0]=t=>x(e)?e.value=t:null)}),{default:f(()=>[(r(!0),k(E,null,C(o.options,(t,n)=>(r(),m(d,{key:n,label:t,value:t},null,8,["label","value"]))),128))]),_:1},16,["modelValue"])}}});const le=B(te,[["__scopeId","data-v-bf7a521e"]]),ae=g({__name:"radio",props:{modelValue:{},options:{},defaultValue:{}},emits:["update:modelValue"],setup(p,{emit:u}){const l=p,e=y({get(){return l.modelValue},set(o){u("update:modelValue",o)}});return $(()=>{l.defaultValue&&(e.value=l.defaultValue)}),(o,a)=>{const d=K,s=X;return r(),m(s,b(o.$attrs,{modelValue:_(e),"onUpdate:modelValue":a[0]||(a[0]=t=>x(e)?e.value=t:null)}),{default:f(()=>[(r(!0),k(E,null,C(o.options,(t,n)=>(r(),m(d,{key:n,label:t,name:t},null,8,["label","name"]))),128))]),_:1},16,["modelValue"])}}});const se=B(ae,[["__scopeId","data-v-231e96fe"]]);const ne=g({__name:"checkbox",props:{modelValue:{},options:{},defaultValue:{}},emits:["update:modelValue"],setup(p,{emit:u}){const l=p,e=y({get(){return l.modelValue},set(o){u("update:modelValue",o)}});return $(()=>{l.defaultValue&&(e.value=l.defaultValue)}),(o,a)=>{const d=Y,s=Z;return r(),m(s,b(o.$attrs,{modelValue:_(e),"onUpdate:modelValue":a[0]||(a[0]=t=>x(e)?e.value=t:null)}),{default:f(()=>[(r(!0),k(E,null,C(o.options,(t,n)=>(r(),m(d,{key:n,label:t,name:t},null,8,["label","name"]))),128))]),_:1},16,["modelValue"])}}});const re=B(ne,[["__scopeId","data-v-71662013"]]),ue=Object.freeze(Object.defineProperty({__proto__:null,WidgetCheckbox:re,WidgetInput:ee,WidgetRadio:se,WidgetSelect:le,WidgetTextarea:oe},Symbol.toStringTag,{value:"Module"})),de=g({__name:"index",props:{formLists:{default:()=>[]},modelValue:{}},emits:["update:modelValue"],setup(p,{expose:u,emit:l}){const e=p,o=w(),a=y({get(){return e.modelValue},set(n){l("update:modelValue",n)}}),d=P({}),s=n=>ue[n],t=async()=>{var n;await((n=o.value)==null?void 0:n.validate())};return L(()=>e.formLists,async n=>{d.value=n==null?void 0:n.reduce((i,V)=>(a.value[V.props.field]=void 0,V.props.isRequired&&(i[V.props.field]=[{required:!0,message:"必填项不能为空",trigger:"blur"}]),i),{}),setTimeout(()=>{var i;(i=o.value)==null||i.resetFields()})}),u({validate:t}),(n,i)=>{const V=O,R=M;return r(),m(R,b({ref_key:"formRef",ref:o},e,{rules:_(d),model:_(a),labelPosition:"top",onSubmit:i[0]||(i[0]=G(()=>{},["prevent"]))}),{default:f(()=>[(r(!0),k(E,null,C(n.formLists,c=>(r(),m(V,{key:c.id,prop:c.props.field,label:c.props.title},{default:f(()=>[(r(),m(T(s(c.name)),b(c.props,{modelValue:_(a)[c.props.field],"onUpdate:modelValue":U=>_(a)[c.props.field]=U}),null,16,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["prop","label"]))),128))]),_:1},16,["rules","model"])}}}),pe={class:"flex flex-col p-[16px] flex-1"},me={class:"flex pb-[20px]"},ie={class:"line-clamp-1"},ce={class:"flex-1 min-h-0"},_e={class:""},fe={class:"flex flex-col justify-center items-center"},Ve=g({__name:"create-panel",props:{modelData:{},modelValue:{},loading:{type:Boolean}},emits:["update:modelValue","insert","create","select","update:modelKey"],setup(p,{emit:u}){const l=p,e=w(),o=W(l,"modelValue",u),a=j(),d=async()=>{var s;try{await((s=e.value)==null?void 0:s.validate())}catch{z.msgError("必填项不能为空");return}u("create")};return(s,t)=>{const n=F,i=N,V=de,R=Q;return r(),k("div",pe,[v("div",me,[v("div",{class:"text-lg font-medium flex flex-1 min-w-0 items-center mr-auto",onClick:t[0]||(t[0]=c=>u("select"))},[v("span",ie,q(s.modelData.name),1),_(a).isMobile?(r(),m(n,{key:0,name:"el-icon-CaretBottom"})):h("",!0)]),S(i,{link:"",type:"primary",onClick:t[1]||(t[1]=c=>u("insert"))},{default:f(()=>[I(" 插入示例 ")]),_:1})]),v("div",ce,[S(R,null,{default:f(()=>[v("div",_e,[S(V,{ref_key:"formDesignerRef",ref:e,modelValue:_(o),"onUpdate:modelValue":t[2]||(t[2]=c=>x(o)?o.value=c:null),"form-lists":s.modelData.form,size:"large"},null,8,["modelValue","form-lists"])])]),_:1})]),v("div",null,[v("div",fe,[A(s.$slots,"actions",{},void 0,!0),s.modelData.id?(r(),m(i,{key:0,class:"create-btn",type:"primary",loading:s.loading,onClick:d},{default:f(()=>[I(" 智能创作 ")]),_:1},8,["loading"])):h("",!0)])])])}}});const Te=B(Ve,[["__scopeId","data-v-eddebddc"]]);export{Te as default};
