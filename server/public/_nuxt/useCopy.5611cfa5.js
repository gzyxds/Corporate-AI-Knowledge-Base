import{ao as r,ap as c}from"./entry.dfbfd4fd.js";function p(){return{copy:async(o,a="复制成功")=>{const{copy:s}=r({source:o});try{if(navigator.clipboard)setTimeout(async()=>{await s(o)},0);else{const e=document.createElement("textarea");e.value=o,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}c.success({message:a})}catch(e){console.log(e),c.error({message:"复制失败"})}}}}export{p as u};
