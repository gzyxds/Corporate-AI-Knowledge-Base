import{_ as v,x as F,y as C,L as w,F as y}from"./element-plus.9458fb52.js";import{_ as D}from"./base-config.vue_vue_type_script_setup_true_lang.72f947c2.js";import{_ as R}from"./search-config.vue_vue_type_script_setup_true_lang.3c62375a.js";import{_ as $}from"./interface-config.vue_vue_type_script_setup_true_lang.90321f99.js";import{_ as g}from"./digital-config.vue_vue_type_script_setup_true_lang.7cc79a66.js";import"./index.d9c09296.js";import{d as k,s as T,as as z,b as B,o as U,c as x,T as e,K as u,u as t,j as s,S as A}from"./@vue.7946e41b.js";const N=k({__name:"index",props:{headerTitle:{},modelValue:{}},emits:["update:modelValue","submit"],setup(r,{emit:f}){const _=r,p=f,i=T(),V=z({}),l=B({get(){return _.modelValue},set(n){p("update:modelValue",n)}});return(n,a)=>{const b=v,d=w,m=F,c=C,E=y;return U(),x(A,null,[e(d,{class:"!border-none",shadow:"never"},{default:u(()=>[e(b,{content:n.headerTitle,onBack:a[0]||(a[0]=o=>n.$router.back())},null,8,["content"])]),_:1}),e(d,{class:"!border-none mt-4",shadow:"never"},{default:u(()=>[e(E,{ref_key:"formRef",ref:i,model:n.modelValue,"label-width":"120px",rules:t(V),disabled:!0},{default:u(()=>[e(c,{"model-value":"base"},{default:u(()=>[e(m,{lazy:"",label:"\u57FA\u672C\u914D\u7F6E",name:"base"},{default:u(()=>[e(D,{modelValue:t(l),"onUpdate:modelValue":a[1]||(a[1]=o=>s(l)?l.value=o:null)},null,8,["modelValue"])]),_:1}),e(m,{lazy:"",label:"AI\u6A21\u578B/\u641C\u7D22\u914D\u7F6E",name:"search"},{default:u(()=>[e(R,{modelValue:t(l),"onUpdate:modelValue":a[2]||(a[2]=o=>s(l)?l.value=o:null)},null,8,["modelValue"])]),_:1}),e(m,{lazy:"",label:"\u754C\u9762\u914D\u7F6E",name:"interface"},{default:u(()=>[e($,{modelValue:t(l),"onUpdate:modelValue":a[3]||(a[3]=o=>s(l)?l.value=o:null)},null,8,["modelValue"])]),_:1}),e(m,{lazy:"",label:"\u5F62\u8C61\u914D\u7F6E",name:"digital"},{default:u(()=>[e(g,{modelValue:t(l),"onUpdate:modelValue":a[4]||(a[4]=o=>s(l)?l.value=o:null)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})],64)}}});export{N as _};
