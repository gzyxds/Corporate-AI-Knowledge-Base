"use strict";const e=require("../../../../common/vendor.js");function t(e,t){return["[object Object]","[object File]"].includes(Object.prototype.toString.call(e))?Object.keys(e).reduce(((a,s)=>(t.includes(s)||(a[s]=e[s]),a)),{}):{}}function a(e){return e.tempFiles.map((e=>({...t(e,["path"]),url:e.path,size:e.size})))}exports.chooseFile=function({accept:s,multiple:i,capture:n,compressed:c,maxDuration:u,sizeType:m,camera:r,maxCount:o}){return new Promise(((p,l)=>{switch(s){case"image":e.index.chooseImage({count:i?Math.min(o,9):1,sourceType:n,sizeType:m,success:e=>p(function(e){return e.tempFiles.map((e=>{const a={...t(e,["path"]),type:"image",url:e.path,thumb:e.path,size:e.size,name:e.name};return a.name||(a.name=e.path.substring(e.path.lastIndexOf("/")+1)),a}))}(e)),fail:l});break;case"media":e.wx$1.chooseMedia({count:i?Math.min(o,9):1,sourceType:n,maxDuration:u,sizeType:m,camera:r,success:e=>p(function(e){return e.tempFiles.map((a=>{const s={...t(a,["fileType","thumbTempFilePath","tempFilePath"]),type:e.type,url:a.tempFilePath,thumb:"video"===e.type?a.thumbTempFilePath:a.tempFilePath,size:a.size,name:a.name};return s.name||(s.name=a.path.substring(a.path.lastIndexOf("/")+1)),s}))}(e)),fail:l});break;case"video":e.index.chooseVideo({sourceType:n,compressed:c,maxDuration:u,camera:r,success:e=>p(function(e){return[{...t(e,["tempFilePath","thumbTempFilePath","errMsg"]),type:"video",url:e.tempFilePath,thumb:e.thumbTempFilePath,size:e.size,name:e.name||e.path.substring(e.path.lastIndexOf("/")+1)}]}(e)),fail:l});break;case"file":e.wx$1.chooseMessageFile({count:i?o:1,type:s,success:e=>p(a(e)),fail:l});break;default:e.wx$1.chooseMessageFile({count:i?o:1,type:"all",success:e=>p(a(e)),fail:l})}}))};
