"use strict";var e=Object.defineProperty;const t=new Map,s=class{static createInstance(){return this.instance||(this.instance=new s)}add(e,s){this.remove(e),t.has(e)&&t.delete(e),t.set(e,s)}remove(e){if(t.has(e)){const s=t.get(e);s&&s.abort(),t.delete(e)}}};let a=s;var n,r;((t,s,a)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a})(a,"symbol"!=typeof(n="instance")?n+"":n,r);const c=a.createInstance();exports.requestCancel=c;
