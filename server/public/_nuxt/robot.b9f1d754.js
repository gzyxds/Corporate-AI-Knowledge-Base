function r(t){return $request.get({url:"/kb.robot/lists",params:t})}function u(t){return $request.get({url:"/kb.robot/detail",params:t})}function o(t){return $request.post({url:"/kb.robot/add",params:t})}function s(t){return $request.post({url:"/kb.robot/edit",params:t})}function a(t){return $request.post({url:"/kb.robot/del",params:t})}function n(t){return $request.post({url:"/kb.robot/cancelShare",params:t})}function c(t){return $request.get({url:"/kb.chat/dataRecord",params:t})}function l(t){return $request.get({url:"/kb.chat/dataCount",params:t})}function b(t){return $request.post({url:"/kb.chat/dataDelete",params:t})}function i(t){return $request.get({url:"/kb.share/lists",params:t})}function d(t){return $request.post({url:"/kb.share/add",params:t})}function q(t){return $request.post({url:"/kb.share/setBg",params:t})}function f(t){return $request.post({url:"/kb.share/update",params:t})}function R(t){return $request.get({url:"/kb.share/detail",params:t})}function h(t){return $request.post({url:"/kb.share/del",params:t})}function p(t){return $request.post({url:"/kb.share/edit",params:t})}function k(t){return $request.get({url:"/kb.chat/cateLists",params:t})}function $(t){return $request.post({url:"/kb.chat/cateAdd",params:t})}function g(t){return $request.post({url:"/kb.chat/cateEdit",params:t})}function C(t){return $request.post({url:"/kb.chat/cateDel",params:t})}function D(t){return $request.post({url:"/kb.chat/cateClear",params:t})}function v(t,e){return $request.sse({url:"/v1/chat/completions",method:"POST",params:t,headers:e})}function S(t,e){return $request.post({url:"/kb.chat/chatClean",params:t,headers:e})}function B(t,e){return $request.get({url:"/kb.chat/chatRecord",params:t,headers:e})}function L(t){return $request.post({url:"/kb.chat/chatCorrect",params:t})}function m(t,e){return $request.post({url:"/kb.chat/feedback",params:t,headers:e})}function y(t){return $request.get({url:"/kb.square/category",params:t})}function F(t){return $request.get({url:"/kb.square/lists",params:t})}function x(t){return $request.get({url:"/kb.square/record",params:t})}function A(t){return $request.post({url:"/kb.square/add",params:t})}function E(t,e){return $request.post({url:"/voice/generate",params:t,headers:e})}function T(t){return $request.uploadFile({url:"/voice/transfer"},t)}export{f as A,q as B,R as C,F as D,A as E,x as F,B as a,S as b,m as c,E as d,r as e,a as f,u as g,n as h,k as i,$ as j,g as k,D as l,C as m,l as n,c as o,o as p,b as q,v as r,L as s,y as t,s as u,T as v,i as w,h as x,d as y,p as z};
