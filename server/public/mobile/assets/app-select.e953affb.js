import{o as e,c as a,w as t,K as l,m as o,j as s,r as i,a as u,b as d,p as r,f as n,t as c,g as m,k as h,F as p,l as f,I as y}from"./index-9f08b835.js";import{_ as x}from"./u-tag.d6be710f.js";import{_ as b}from"./u-icon.f0423eb2.js";import{_ as V}from"./u-search.333cf11c.js";import{_ as k,a as _}from"./u-radio-group.31ee5ed9.js";import{_ as v}from"./u-checkbox.468f126b.js";import{E as g}from"./emitter.1571a5d9.js";import{_ as w}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as S}from"./u-button.cd082997.js";import{_ as $}from"./u-popup.6c89de8e.js";const j=w({name:"u-checkbox-group",emits:["update:modelValue","input","change"],mixins:[g],options:{styleIsolation:"shared"},props:{value:{type:[String,Number,Array,Boolean],default:""},modelValue:{type:[String,Number,Array,Boolean],default:""},max:{type:[Number,String],default:999},disabled:{type:Boolean,default:!1},name:{type:[Boolean,String],default:""},labelDisabled:{type:Boolean,default:!1},shape:{type:String,default:"square"},activeColor:{type:String,default:"#2979ff"},size:{type:[String,Number],default:34},width:{type:String,default:"auto"},wrap:{type:Boolean,default:!1},iconSize:{type:[String,Number],default:20}},data:()=>({values:[],uFromData:{inputAlign:"left"}}),created(){this.children=[]},mounted(){let e=this.$u.$parent.call(this,"u-form");e&&Object.keys(this.uFromData).map((a=>{this.uFromData[a]=e[a]}))},methods:{emitEvent(e){let a=this.values||[];if(e.value){-1===a.indexOf(e.name)&&a.push(e.name)}else{let t=a.indexOf(e.name);t>-1&&a.splice(t,1)}this.$emit("change",a),this.$emit("input",a),this.$emit("update:modelValue",a),setTimeout((()=>{this.dispatch("u-form-item","onFieldChange",a)}),60)},_emitEvent(e){let a=this.values||[];if(e.value){-1===a.indexOf(e.name)&&a.push(e.name)}else{let t=a.indexOf(e.name);t>-1&&a.splice(t,1)}}}},[["render",function(i,u,d,r,n,c){const m=s;return e(),a(m,{class:o(["u-checkbox-group u-clearfix","right"==n.uFromData.inputAlign?"flex-end":""])},{default:t((()=>[l(i.$slots,"default",{},void 0,!0)])),_:3},8,["class"])}],["__scopeId","data-v-fc902c70"]]);const A=w({options:{styleIsolation:"shared",multipleSlots:!0},props:{dataLists:{default:()=>[],type:Array},name:{default:"name"},value:{default:"value"},modelValue:{type:[String,Number,Array]},type:{default:"radio",type:String},popupTitle:{default:"列表选择",type:String},placeholder:{default:"请输入搜索内容"},filter:{default:!0,type:Boolean},disabled:{default:!1,type:Boolean},closeable:{default:!0,type:Boolean}},computed:{filterOptions(){return this.filter?this.dataLists.filter((e=>e[this.name].includes(this.keyword))):this.dataLists},shouldShowPlaceholder(){return Array.isArray(this.modelValue)?0==this.modelValue.length:void 0===this.modelValue||null===this.modelValue||""===this.modelValue},checkboxData(){if("checkbox"!==this.type||!Array.isArray(this.modelValue))return[];const e=[];return this.modelValue.forEach((a=>{const t=this.dataLists.find((e=>e[this.value]==a));t?e.push(t):e.push({[this.name]:a,[this.value]:a})})),e},radioData(){if("radio"!==this.type||Array.isArray(this.modelValue))return{};return this.dataLists.find((e=>e[this.value]===this.modelValue))||{[this.name]:this.modelValue,[this.value]:this.modelValue}}},data:()=>({show:!1,keyword:"",scrollTop:0,checkboxValue:[],radioValue:""}),watch:{modelValue:{handler(e,a){"radio"==this.type?this.radioValue=e:"checkbox"==this.type&&(this.checkboxValue=(e||[]).slice())},immediate:!0},show(e){e&&(this.keyword="","radio"==this.type?this.radioValue=this.modelValue:"checkbox"==this.type&&(this.checkboxValue=(this.modelValue||[]).slice()))}},methods:{removeSelect(e){const a=this.checkboxValue.findIndex((a=>a==e[this.value]));a>-1&&(this.checkboxValue.splice(a,1),this.$emit("change",this.checkboxValue.slice()),this.$emit("update:modelValue",this.checkboxValue.slice()))},cancel(){this.show=!1},submit(){"radio"==this.type?this.$emit("update:modelValue",this.radioValue):"checkbox"==this.type&&this.$emit("update:modelValue",this.checkboxValue.slice()),this.$emit("change"),this.cancel()}}},[["render",function(g,w,A,C,D,B){const O=s,F=i(u("u-tag"),x),I=i(u("u-icon"),b),N=i(u("u-search"),V),T=i(u("u-radio"),k),L=i(u("u-radio-group"),_),z=i(u("u-checkbox"),v),E=i(u("u-checkbox-group"),j),U=y,P=i(u("u-button"),S),q=i(u("u-popup"),$);return e(),a(O,{class:"app-select"},{default:t((()=>[d(O,{class:o(["input flex",{"bg-[#f8f8f8] pointer-events-none":A.disabled}]),onClick:w[1]||(w[1]=r((e=>D.show=!0),["stop"]))},{default:t((()=>[d(O,{class:"flex-1 flex items-center"},{default:t((()=>[B.shouldShowPlaceholder?(e(),a(O,{key:0,class:"input-placeholder"},{default:t((()=>[n(c(A.placeholder),1)])),_:1})):m("v-if",!0),"checkbox"==A.type?(e(),a(O,{key:1,class:"flex flex-wrap flex-1"},{default:t((()=>[(e(!0),h(p,null,f(B.checkboxData,((l,o)=>(e(),a(O,{class:"mr-[10rpx]",key:l[A.value]},{default:t((()=>[d(F,{text:l[A.name],size:"mini",mode:"light",closeable:"",onClose:e=>B.removeSelect(l)},null,8,["text","onClose"])])),_:2},1024)))),128))])),_:1})):m("v-if",!0),"radio"==A.type&&B.radioData[A.name]?(e(),a(O,{key:2,class:"flex flex-1"},{default:t((()=>[d(O,{class:"flex-1 min-w-0"},{default:t((()=>[l(g.$slots,"label",{item:B.radioData},(()=>[d(O,{class:"line-clamp-1"},{default:t((()=>[n(c(B.radioData[A.name]),1)])),_:1})]),!0)])),_:3}),B.radioData[A.name]&&A.closeable?(e(),a(O,{key:0,class:"text-muted flex mx-[20rpx]",onClick:w[0]||(w[0]=r((e=>{g.$emit("update:modelValue",""),g.$emit("change","")}),["stop"]))},{default:t((()=>[d(I,{name:"close-circle\n"})])),_:1})):m("v-if",!0)])),_:3})):m("v-if",!0)])),_:3}),d(O,{class:"text-muted flex"},{default:t((()=>[d(I,{name:"arrow-down"})])),_:1})])),_:3},8,["class"]),d(q,{modelValue:D.show,mode:"bottom",onClose:B.cancel,"safe-area-inset-bottom":""},{default:t((()=>[d(O,{class:"title"},{default:t((()=>[n(c(A.popupTitle),1)])),_:1}),d(O,{style:{padding:"20rpx"}},{default:t((()=>[A.filter?(e(),a(N,{key:0,placeholder:"输入关键词搜索","show-action":!1,modelValue:D.keyword,"onUpdate:modelValue":w[2]||(w[2]=e=>D.keyword=e)},null,8,["modelValue"])):m("v-if",!0),d(U,{"scroll-top":D.scrollTop,"scroll-y":"true",class:"scroll-Y mt-[20rpx]",onScrolltolower:w[5]||(w[5]=e=>g.$emit("lower"))},{default:t((()=>[m("单选"),"radio"==A.type?(e(),a(L,{key:0,wrap:"",width:"100%",modelValue:D.radioValue,"onUpdate:modelValue":w[3]||(w[3]=e=>D.radioValue=e)},{default:t((()=>[(e(!0),h(p,null,f(B.filterOptions,((o,s)=>(e(),a(T,{key:s,name:o[A.value]},{default:t((()=>[l(g.$slots,"label",{item:o},(()=>[n(c(o[A.name]),1)]),!0)])),_:2},1032,["name"])))),128))])),_:3},8,["modelValue"])):m("v-if",!0),m("多选"),"checkbox"==A.type?(e(),a(E,{key:1,wrap:"",width:"100%",modelValue:D.checkboxValue,"onUpdate:modelValue":w[4]||(w[4]=e=>D.checkboxValue=e)},{default:t((()=>[(e(!0),h(p,null,f(B.filterOptions,((o,s)=>(e(),a(z,{key:s,name:o[A.value],modelValue:!!D.checkboxValue.some((e=>e==o[A.value]))},{default:t((()=>[l(g.$slots,"label",{item:o},(()=>[n(c(o[A.name]),1)]),!0)])),_:2},1032,["name","modelValue"])))),128))])),_:3},8,["modelValue"])):m("v-if",!0)])),_:3},8,["scroll-top"]),d(O,{class:"bottons flex"},{default:t((()=>[d(O,{class:"flex-1 mr-[20rpx]"},{default:t((()=>[d(P,{onClick:B.cancel},{default:t((()=>[n("取消")])),_:1},8,["onClick"])])),_:1}),d(O,{class:"flex-1"},{default:t((()=>[d(P,{onClick:B.submit,type:"primary",throttleTime:"1000"},{default:t((()=>[n(" 确认 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:3})])),_:3},8,["modelValue","onClose"])])),_:3})}],["__scopeId","data-v-a9fb107a"]]);export{A as _};
