import{t as u,_ as l}from"./@vue.7946e41b.js";function m(s){const{page:i=1,size:c=15,fetchFun:g,params:e={},firstLoading:r=!1}=s,o=Object.assign({},u(e)),a=l({page:i,size:c,loading:r,count:0,lists:[],extend:{}}),n=()=>(a.loading=!0,g({page_no:a.page,page_size:a.size,...e}).then(t=>(a.count=t==null?void 0:t.count,a.lists=t==null?void 0:t.lists,a.extend=t==null?void 0:t.extend,Promise.resolve(t))).catch(t=>Promise.reject(t)).finally(()=>{a.loading=!1}));return{pager:a,getLists:n,resetParams:()=>{Object.keys(o).forEach(t=>{e[t]=o[t]}),n()},resetPage:()=>{a.page=1,n()}}}export{m as u};
