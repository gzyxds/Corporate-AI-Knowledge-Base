import{W as x,M as F,N as y}from"./element-plus.9458fb52.js";import{u as b}from"./vue-router.c4b4a189.js";import{P as k}from"./index.9f63869e.js";import{e as B}from"./consumer.77e8ff60.js";import{d as h,s as E,r as R,o as p,J as s,K as u,T as e,u as T,Q as n,R as _,n as A}from"./@vue.7946e41b.js";const q=h({__name:"vip-record",setup(v,{expose:i}){const r=E(),d=b(),l=R([]),f=async()=>{var o;await A(),(o=r.value)==null||o.open(),await m()},m=async()=>{try{l.value=await B({user_id:d.query.id})}catch{}};return i({open:f}),(o,w)=>{const t=F,c=x,g=y;return p(),s(k,{ref_key:"popRef",ref:r,title:"\u4F1A\u5458\u5F00\u901A\u8BB0\u5F55",width:"800px"},{default:u(()=>[e(g,{data:T(l),height:"500px"},{default:u(()=>[e(t,{label:"\u4F1A\u5458\u7B49\u7EA7",prop:"package_name"}),e(t,{label:"\u4F1A\u5458\u65F6\u957F",prop:"original_package_long_time"}),e(t,{label:"\u5230\u671F\u65F6\u95F4",prop:"package_long_time"}),e(t,{label:"\u8D2D\u4E70\u6765\u6E90",prop:"channel_text"}),e(t,{label:"\u9000\u6B3E\u72B6\u6001",prop:"refund_status_desc"},{default:u(({row:a})=>[a.refund_status?(p(),s(c,{key:0,type:"danger"},{default:u(()=>[n(_(a.refund_status_text),1)]),_:2},1024)):(p(),s(c,{key:1,type:"warning"},{default:u(()=>[n(_(a.refund_status_text),1)]),_:2},1024))]),_:1}),e(t,{label:"\u8BB0\u5F55\u65F6\u95F4",prop:"pay_time_text",sortable:""},{default:u(({row:a})=>[n(_(a.pay_time_text||a.create_time),1)]),_:1})]),_:1},8,["data"])]),_:1},512)}}});export{q as _};
