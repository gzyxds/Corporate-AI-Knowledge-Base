"use strict";const e=require("./modules/pinia.js"),s=require("./modules/uview.js"),o=require("./modules/vconsole.js"),i=require("../common/vendor.js"),t=Object.assign({"./modules/pinia.ts":e.__vite_glob_0_0,"./modules/uview.ts":s.__vite_glob_0_1,"./modules/vconsole.ts":o.__vite_glob_0_2}),u={install:e=>{for(const s of Object.values(t)){const o=s.default;i.isFunction(o)&&o(e)}}};exports.plugins=u;
