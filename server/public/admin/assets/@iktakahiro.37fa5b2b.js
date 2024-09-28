import{k}from"./katex.dbdd07a7.js";var $=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function x(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function _(r){var n=r.default;if(typeof n=="function"){var e=function(){return n.apply(this,arguments)};e.prototype=n.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach(function(i){var c=Object.getOwnPropertyDescriptor(r,i);Object.defineProperty(e,i,c.get?c:{enumerable:!0,get:function(){return r[i]}})}),e}var s=k.exports;function h(r,n){var e,i,c=r.posMax,l=!0,o=!0;return e=n>0?r.src.charCodeAt(n-1):-1,i=n+1<=c?r.src.charCodeAt(n+1):-1,(e===32||e===9||i>=48&&i<=57)&&(o=!1),(i===32||i===9)&&(l=!1),{can_open:l,can_close:o}}function m(r,n){var e,i,c,l,o;if(r.src[r.pos]!=="$")return!1;if(l=h(r,r.pos),!l.can_open)return n||(r.pending+="$"),r.pos+=1,!0;for(e=r.pos+1,i=e;(i=r.src.indexOf("$",i))!==-1;){for(o=i-1;r.src[o]==="\\";)o-=1;if((i-o)%2==1)break;i+=1}return i===-1?(n||(r.pending+="$"),r.pos=e,!0):i-e===0?(n||(r.pending+="$$"),r.pos=e+1,!0):(l=h(r,i),l.can_close?(n||(c=r.push("math_inline","math",0),c.markup="$",c.content=r.src.slice(e,i)),r.pos=i+1,!0):(n||(r.pending+="$"),r.pos=e,!0))}function g(r,n,e,i){var c,l,o,f,u=!1,p,t=r.bMarks[n]+r.tShift[n],a=r.eMarks[n];if(t+2>a||r.src.slice(t,t+2)!=="$$")return!1;if(t+=2,c=r.src.slice(t,a),i)return!0;for(c.trim().slice(-2)==="$$"&&(c=c.trim().slice(0,-2),u=!0),o=n;!u&&(o++,!(o>=e||(t=r.bMarks[o]+r.tShift[o],a=r.eMarks[o],t<a&&r.tShift[o]<r.blkIndent)));)r.src.slice(t,a).trim().slice(-2)==="$$"&&(f=r.src.slice(0,a).lastIndexOf("$$"),l=r.src.slice(t,f),u=!0);return r.line=o+1,p=r.push("math_block","math",0),p.block=!0,p.content=(c&&c.trim()?c+`
`:"")+r.getLines(n+1,o,r.tShift[n],!0)+(l&&l.trim()?l:""),p.map=[n,r.line],p.markup="$$",!0}function d(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}var y=function(n,e){e=e||{};var i=function(f){e.displayMode=!1;try{return s.renderToString(f,e)}catch(u){return e.throwOnError&&console.log(u),`<span class='katex-error' title='${d(u.toString())}'>${d(f)}</span>`}},c=function(f,u){return i(f[u].content)},l=function(f){e.displayMode=!0;try{return"<p class='katex-block'>"+s.renderToString(f,e)+"</p>"}catch(u){return e.throwOnError&&console.log(u),`<p class='katex-block katex-error' title='${d(u.toString())}'>${d(f)}</p>`}},o=function(f,u){return l(f[u].content)+`
`};n.inline.ruler.after("escape","math_inline",m),n.block.ruler.after("blockquote","math_block",g,{alt:["paragraph","reference","blockquote","list"]}),n.renderer.rules.math_inline=c,n.renderer.rules.math_block=o};export{_ as a,$ as c,x as g,y as m};
