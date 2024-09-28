import{D as t,J as e,b4 as n,ah as r,bJ as i,bK as o,bL as a,bM as s,bt as u,aN as c,av as l}from"./index-9f08b835.js";const p={};function f(t){return/^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(t)}function g(t){switch(typeof t){case"undefined":return!0;case"string":if(0==t.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g,"").length)return!0;break;case"boolean":if(!t)return!0;break;case"number":if(0===t||isNaN(t))return!0;break;case"object":if(null===t||0===t.length)return!0;for(const e in t)return!1;return!0}return!1}function d(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)}function h(t){return"[object Object]"===Object.prototype.toString.call(t)}function m(t){return"function"==typeof t}function y(t){return h(t)&&m(t.then)&&m(t.catch)}function b(t){const e=t.split("?")[0];return/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i.test(e)}function $(t){return/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i.test(t)}const v=Object.freeze(Object.defineProperty({__proto__:null,amount:function(t){return/^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(t)},array:d,carNo:function(t){const e=/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/,n=/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;return 7===t.length?n.test(t):8===t.length&&e.test(t)},chinese:function(t){return/^[\u4e00-\u9fa5]+$/gi.test(t)},code:function(t,e=6){return new RegExp(`^\\d{${e}}$`).test(t)},contains:function(t,e){return t.indexOf(e)>=0},date:function(t){return!!t&&(f(t)&&(t=+t),!/Invalid|NaN/.test(new Date(t).toString()))},dateISO:function(t){return/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)},digits:function(t){return/^\d+$/.test(t)},email:function(t){return/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(t)},empty:g,enOrNum:function(t){return/^[0-9a-zA-Z]*$/g.test(t)},func:m,idCard:function(t){return/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(t)},image:b,jsonString:function(t){if("string"==typeof t)try{const e=JSON.parse(t);return!("object"!=typeof e||!e)}catch(e){return!1}return!1},landline:function(t){return/^\d{3,4}-\d{7,8}(-\d{3,4})?$/.test(t)},letter:function(t){return/^[a-zA-Z]*$/.test(t)},mobile:function(t){return/^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(t)},number:f,object:h,promise:y,range:function(t,e){return t>=e[0]&&t<=e[1]},rangeLength:function(t,e){return t.length>=e[0]&&t.length<=e[1]},regExp:function(t){return t&&"[object RegExp]"===Object.prototype.toString.call(t)},string:function(t){return"string"==typeof t},url:function(t){return/^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(t)},video:$},Symbol.toStringTag,{value:"Module"}));function S(t,e=15){return+parseFloat(Number(t).toPrecision(e))}function w(t){const e=t.toString().split(/[eE]/),n=(e[0].split(".")[1]||"").length-+(e[1]||0);return n>0?n:0}function j(t){if(-1===t.toString().indexOf("e"))return Number(t.toString().replace(".",""));const e=w(t);return e>0?S(Number(t)*Math.pow(10,e)):Number(t)}function A(t){(t>Number.MAX_SAFE_INTEGER||t<Number.MIN_SAFE_INTEGER)&&console.warn(`${t} 超出了精度限制，结果可能不正确`)}function x(t,e){const[n,r,...i]=t;let o=e(n,r);return i.forEach((t=>{o=e(o,t)})),o}function O(...t){if(t.length>2)return x(t,O);const[e,n]=t,r=j(e),i=j(n),o=w(e)+w(n),a=r*i;return A(a),a/Math.pow(10,o)}function M(...t){if(t.length>2)return x(t,M);const[e,n]=t,r=j(e),i=j(n);return A(r),A(i),O(r/i,S(Math.pow(10,w(n)-w(e))))}function P(t=void 0){let e=this.$parent;for(;e;){if(!e.$options||e.$options.name===t)return e;e=e.$parent}return!1}function k(t,e=new WeakMap){if(null===t||"object"!=typeof t)return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime());else if(t instanceof RegExp)n=new RegExp(t);else if(t instanceof Map)n=new Map(Array.from(t,(([t,n])=>[t,k(n,e)])));else if(t instanceof Set)n=new Set(Array.from(t,(t=>k(t,e))));else if(Array.isArray(t))n=t.map((t=>k(t,e)));else if("[object Object]"===Object.prototype.toString.call(t)){n=Object.create(Object.getPrototypeOf(t)),e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=k(i,e)}else n=Object.assign({},t);return e.set(t,n),n}function D(t={},e={}){if("object"!=typeof(t=k(t))||null===t||"object"!=typeof e||null===e)return t;const n=Array.isArray(t)?t.slice():Object.assign({},t);for(const r in e){if(!e.hasOwnProperty(r))continue;const t=e[r],i=n[r];t instanceof Date?n[r]=new Date(t):t instanceof RegExp?n[r]=new RegExp(t):t instanceof Map?n[r]=new Map(t):t instanceof Set?n[r]=new Set(t):n[r]="object"==typeof t&&null!==t?D(i,t):t}return n}function N(t=null,e="yyyy-mm-dd"){let n;n=t?/^\d{10}$/.test(null==t?void 0:t.toString().trim())?new Date(1e3*t):"string"==typeof t&&/^\d+$/.test(t.trim())?new Date(Number(t)):"string"==typeof t&&t.includes("-")&&!t.includes("T")?new Date(t.replace(/-/g,"/")):new Date(t):new Date;const r={y:n.getFullYear().toString(),m:(n.getMonth()+1).toString().padStart(2,"0"),d:n.getDate().toString().padStart(2,"0"),h:n.getHours().toString().padStart(2,"0"),M:n.getMinutes().toString().padStart(2,"0"),s:n.getSeconds().toString().padStart(2,"0")};for(const i in r){const[t]=new RegExp(`${i}+`).exec(e)||[];if(t){const n="y"===i&&2===t.length?2:0;e=e.replace(t,r[i].slice(n))}}return e}function T(t,e="both"){return t=String(t),"both"==e?t.replace(/^\s+|\s+$/g,""):"left"==e?t.replace(/^\s*/,""):"right"==e?t.replace(/(\s*$)/g,""):"all"==e?t.replace(/\s+/g,""):t}function E(t={},e=!0,n="brackets"){const r=e?"?":"",i=[];-1==["indices","brackets","repeat","comma"].indexOf(n)&&(n="brackets");for(const o in t){const e=t[o];if(!(["",void 0,null].indexOf(e)>=0))if(e.constructor===Array)switch(n){case"indices":for(let n=0;n<e.length;n++)i.push(`${o}[${n}]=${e[n]}`);break;case"brackets":default:e.forEach((t=>{i.push(`${o}[]=${t}`)}));break;case"repeat":e.forEach((t=>{i.push(`${o}=${t}`)}));break;case"comma":let t="";e.forEach((e=>{t+=(t?",":"")+e})),i.push(`${o}=${t}`)}else i.push(`${o}=${e}`)}return i.length?r+i.join("&"):""}function Z(){var t;const e=r(),n=null==(t=e[e.length-1])?void 0:t.route;return`/${n||""}`}String.prototype.padStart||(String.prototype.padStart=function(t,e=" "){if("[object String]"!==Object.prototype.toString.call(e))throw new TypeError("fillString must be String");const n=this;if(n.length>=t)return String(n);const r=t-n.length;let i=Math.ceil(r/e.length);for(;i>>=1;)e+=e,1===i&&(e+=e);return e.slice(0,r)+n});const I=Object.freeze(Object.defineProperty({__proto__:null,$parent:P,addStyle:function(t,e="object"){if(g(t)||"object"==typeof t&&"object"===e||"string"===e&&"string"==typeof t)return t;if("object"===e){const e=(t=T(t)).split(";"),n={};for(let t=0;t<e.length;t++)if(e[t]){const r=e[t].split(":");n[T(r[0])]=T(r[1])}return n}let n="";for(const r in t){n+=`${r.replace(/([A-Z])/g,"-$1").toLowerCase()}:${t[r]};`}return T(n)},addUnit:function(t="auto",e=((t=>{return null==(t=null==(e=null==uni?void 0:uni.$uv)?void 0:e.config)?void 0:t.unit;var e})()?(t=>{return null==(t=null==(e=null==uni?void 0:uni.$uv)?void 0:e.config)?void 0:t.unit;var e})():"px")){return f(t=String(t))?`${t}${e}`:t},deepClone:k,deepMerge:D,error:function(t){},formValidate:function(t,e){const n=P.call(t,"uv-form-item"),r=P.call(t,"uv-form");n&&r&&r.validateField(n.prop,(()=>{}),e)},getDuration:function(t,e=!0){const n=parseInt(t);return e?/s$/.test(t)?t:t>30?`${t}ms`:`${t}s`:/ms$/.test(t)?n:/s$/.test(t)?n>30?n:1e3*n:n},getHistoryPage:function(t=0){const e=r();return e[e.length-1+t]},getProperty:function(t,e){if(t){if("string"!=typeof e||""===e)return"";if(-1!==e.indexOf(".")){const n=e.split(".");let r=t[n[0]]||{};for(let t=1;t<n.length;t++)r&&(r=r[n[t]]);return r}return t[e]}},getPx:function(e,n=!1){return f(e)?n?`${e}px`:Number(e):/(rpx|upx)$/.test(e)?n?`${t(parseInt(e))}px`:Number(t(parseInt(e))):n?`${parseInt(e)}px`:parseInt(e)},guid:function(t=32,e=!0,n=null){const r="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),i=[];if(n=n||r.length,t)for(let o=0;o<t;o++)i[o]=r[0|Math.random()*n];else{let t;i[8]=i[13]=i[18]=i[23]="-",i[14]="4";for(let e=0;e<36;e++)i[e]||(t=0|16*Math.random(),i[e]=r[19==e?3&t|8:t])}return e?(i.shift(),`u${i.join("")}`):i.join("")},os:function(){return e().platform.toLowerCase()},padZero:function(t){return`00${t}`.slice(-2)},page:Z,pages:function(){return r()},priceFormat:function(t,e=0,n=".",r=","){t=`${t}`.replace(/[^0-9+-Ee.]/g,"");const i=isFinite(+t)?+t:0,o=isFinite(+e)?Math.abs(e):0,a=void 0===r?",":r,s=void 0===n?".":n;let u="";u=(o?function(t,e){const n=Math.pow(10,e);let r=M(Math.round(Math.abs(O(t,n))),n);return t<0&&0!==r&&(r=O(r,-1)),r}(i,o)+"":`${Math.round(i)}`).split(".");const c=/(-?\d+)(\d{3})/;for(;c.test(u[0]);)u[0]=u[0].replace(c,`$1${a}$2`);return(u[1]||"").length<o&&(u[1]=u[1]||"",u[1]+=new Array(o-u[1].length+1).join("0")),u.join(s)},queryParams:E,random:function(t,e){if(t>=0&&e>0&&e>=t){const n=e-t+1;return Math.floor(Math.random()*n+t)}return 0},randomArray:function(t=[]){return t.sort((()=>Math.random()-.5))},range:function(t=0,e=0,n=0){return Math.max(t,Math.min(e,Number(n)))},setConfig:function({props:t={},config:e={},color:n={},zIndex:r={}}){const{deepMerge:i}=uni.$uv;uni.$uv.config=i(uni.$uv.config,e),uni.$uv.props=i(uni.$uv.props,t),uni.$uv.color=i(uni.$uv.color,n),uni.$uv.zIndex=i(uni.$uv.zIndex,r)},setProperty:function(t,e,n){if(!t)return;const r=function(t,e,n){if(1!==e.length)for(;e.length>1;){const i=e[0];t[i]&&"object"==typeof t[i]||(t[i]={}),e.shift(),r(t[i],e,n)}else t[e[0]]=n};if("string"!=typeof e||""===e);else if(-1!==e.indexOf(".")){const i=e.split(".");r(t,i,n)}else t[e]=n},sleep:function(t=30){return new Promise((e=>{setTimeout((()=>{e()}),t)}))},sys:function(){return e()},timeFormat:N,timeFrom:function(t=null,e="yyyy-mm-dd"){null==t&&(t=Number(new Date)),10==(t=parseInt(t)).toString().length&&(t*=1e3);let n=(new Date).getTime()-t;n=parseInt(n/1e3);let r="";switch(!0){case n<300:r="刚刚";break;case n>=300&&n<3600:r=`${parseInt(n/60)}分钟前`;break;case n>=3600&&n<86400:r=`${parseInt(n/3600)}小时前`;break;case n>=86400&&n<2592e3:r=`${parseInt(n/86400)}天前`;break;default:r=!1===e?n>=2592e3&&n<31536e3?`${parseInt(n/2592e3)}个月前`:`${parseInt(n/31536e3)}年前`:N(t,e)}return r},toast:function(t,e=2e3){n({title:String(t),icon:"none",duration:e})},trim:T,type2icon:function(t="success",e=!1){-1==["primary","info","error","warning","success"].indexOf(t)&&(t="success");let n="";switch(t){case"primary":case"info":n="info-circle";break;case"error":n="close-circle";break;case"warning":n="error-circle";break;default:n="checkmark-circle"}return e&&(n+="-fill"),n}},Symbol.toStringTag,{value:"Module"}));const R=(new class{constructor(){this.config={type:"navigateTo",url:"",delta:1,params:{},animationType:"pop-in",animationDuration:300,intercept:!1,events:{}},this.route=this.route.bind(this)}addRootPath(t){return"/"===t[0]?t:`/${t}`}mixinParam(t,e){t=t&&this.addRootPath(t);let n="";return/.*\/.*\?.*=.*/.test(t)?(n=E(e,!1),t+`&${n}`):(n=E(e),t+n)}async route(t={},e={}){let n={};if("string"==typeof t?(n.url=this.mixinParam(t,e),n.type="navigateTo"):(n=D(this.config,t),n.url=this.mixinParam(t.url,t.params)),n.url!==Z())if(e.intercept&&(n.intercept=e.intercept),n.params=e,n=D(this.config,n),"function"==typeof n.intercept){await new Promise(((t,e)=>{n.intercept(n,t)}))&&this.openPage(n)}else this.openPage(n)}openPage(t){const{url:e,type:n,delta:r,animationType:c,animationDuration:l,events:p}=t;"navigateTo"!=t.type&&"to"!=t.type||i({url:e,animationType:c,animationDuration:l,events:p}),"redirectTo"!=t.type&&"redirect"!=t.type||o({url:e}),"switchTab"!=t.type&&"tab"!=t.type||a({url:e}),"reLaunch"!=t.type&&"launch"!=t.type||s({url:e}),"navigateBack"!=t.type&&"back"!=t.type||u({delta:r})}}).route;let z,_=null;function F(t,e=500,n=!1){if(null!==_&&clearTimeout(_),n){const n=!_;_=setTimeout((()=>{_=null}),e),n&&"function"==typeof t&&t()}else _=setTimeout((()=>{"function"==typeof t&&t()}),e)}function C(t,e=500,n=!0){n?z||(z=!0,"function"==typeof t&&t(),setTimeout((()=>{z=!1}),e)):z||(z=!0,setTimeout((()=>{z=!1,"function"==typeof t&&t()}),e))}const J={props:{customStyle:{type:[Object,String],default:()=>({})},customClass:{type:String,default:""},url:{type:String,default:""},linkType:{type:String,default:"navigateTo"}},data:()=>({}),onLoad(){this.$uv.getRect=this.$uvGetRect},created(){this.$uv.getRect=this.$uvGetRect},computed:{$uv(){var t,e;return{...I,test:v,route:R,debounce:F,throttle:C,unit:null==(e=null==(t=null==uni?void 0:uni.$uv)?void 0:t.config)?void 0:e.unit}},bem:()=>function(t,e,n){const r=`uv-${t}--`,i={};return e&&e.map((t=>{i[r+this[t]]=!0})),n&&n.map((t=>{this[t]?i[r+t]=this[t]:delete i[r+t]})),Object.keys(i)}},methods:{openPage(t="url"){const e=this[t];e&&uni[this.linkType]({url:e})},$uvGetRect(t,e){return new Promise((n=>{c().in(this)[e?"selectAll":"select"](t).boundingClientRect((t=>{e&&Array.isArray(t)&&t.length&&n(t),!e&&t&&n(t)})).exec()}))},getParentData(t=""){this.parent||(this.parent={}),this.parent=this.$uv.$parent.call(this,t),this.parent.children&&-1===this.parent.children.indexOf(this)&&this.parent.children.push(this),this.parent&&this.parentData&&Object.keys(this.parentData).map((t=>{this.parentData[t]=this.parent[t]}))},preventEvent(t){t&&"function"==typeof t.stopPropagation&&t.stopPropagation()},noop(t){this.preventEvent(t)}},onReachBottom(){l("uvOnReachBottom")},beforeDestroy(){if(this.parent&&d(this.parent.children)){const t=this.parent.children;t.map(((e,n)=>{e===this&&t.splice(n,1)}))}},unmounted(){if(this.parent&&d(this.parent.children)){const t=this.parent.children;t.map(((e,n)=>{e===this&&t.splice(n,1)}))}}};export{J as a,d as b,m as f,b as i,p as m,y as p,$ as v};
