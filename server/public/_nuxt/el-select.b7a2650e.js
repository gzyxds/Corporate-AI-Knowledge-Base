import{i as me,l as i,g as Ve,q as lt,b as j,k as se,u as Ce,r as ge,A as nt,o as Xt,n as H,$ as le,a0 as Ee,H as g,I as V,N as k,J as M,Z as z,T as u,Y as B,a as w,E as Te,R as $,_ as ve,w as Jt,p as st,a5 as K,as as Yt,X as A,V as R,S as Ze,aj as xe,U as F,a6 as te,at as Zt,W as Ie}from"./swiper-vue.2eb6bd20.js";import{ac as Q,bI as G,P as he,F as ne,aQ as ot,$ as U,bJ as xt,aK as X,D as _t,bK as el,bL as tl,bM as ll,bN as nl,aA as L,bO as sl,ay as ol,aL as al,V as il,bP as rl,A as ul,bQ as we,aO as W,R as dl,bR as cl,bS as at,X as pl,x as fl,bT as vl,y as fe,az as _e,aN as ml,bw as bl,bU as gl,aa as hl,E as yl,H as Sl,an as Ol,T as Cl,bp as it}from"./entry.dfbfd4fd.js";import{u as Il,b as wl,E as Vl}from"./index.8ad94f19.js";import{E as El}from"./index.17567b0d.js";import{t as Tl,E as $l}from"./index.e979a1ab.js";import{e as Ml}from"./strings.ceb81673.js";import{i as be}from"./isEqual.0df0ab2c.js";import{t as Rl,d as kl}from"./debounce.8cbe4cfc.js";import{b as Dl}from"./_baseIteratee.5e0c38c1.js";import{C as Bl}from"./index.071e9281.js";import{c as Ll}from"./castArray.c741e965.js";var et=1/0,Nl=17976931348623157e292;function Fl(e){if(!e)return e===0?e:0;if(e=Rl(e),e===et||e===-et){var n=e<0?-1:1;return n*Nl}return e===e?e:0}function Wl(e){var n=Fl(e),o=n%1;return n===n?o?n-o:n:0}function zl(e,n,o,p){for(var r=e.length,f=o+(p?1:-1);p?f--:++f<r;)if(n(e[f],f,e))return f;return-1}var Pl=Math.max,Kl=Math.min;function Al(e,n,o){var p=e==null?0:e.length;if(!p)return-1;var r=p-1;return o!==void 0&&(r=Wl(o),r=o<0?Pl(p+r,0):Kl(r,p-1)),zl(e,Dl(n),r,!0)}const rt=Symbol("ElSelectGroup"),ye=Symbol("ElSelect");function Hl(e,n){const o=me(ye),p=me(rt,{disabled:!1}),r=i(()=>o.props.multiple?b(o.props.modelValue,e.value):b([o.props.modelValue],e.value)),f=i(()=>{if(o.props.multiple){const d=o.props.modelValue||[];return!r.value&&d.length>=o.props.multipleLimit&&o.props.multipleLimit>0}else return!1}),l=i(()=>e.label||(Q(e.value)?"":e.value)),h=i(()=>e.value||e.label||""),v=i(()=>e.disabled||n.groupDisabled||f.value),y=Ve(),b=(d=[],m)=>{if(Q(e.value)){const a=o.props.valueKey;return d&&d.some(E=>lt(G(E,a))===G(m,a))}else return d&&d.includes(m)},O=()=>{!e.disabled&&!p.disabled&&(o.states.hoveringIndex=o.optionsArray.indexOf(y.proxy))},C=d=>{const m=new RegExp(Ml(d),"i");n.visible=m.test(l.value)||e.created};return j(()=>l.value,()=>{!e.created&&!o.props.remote&&o.setSelected()}),j(()=>e.value,(d,m)=>{const{remote:a,valueKey:E}=o.props;if(be(d,m)||(o.onOptionDestroy(m,y.proxy),o.onOptionCreate(y.proxy)),!e.created&&!a){if(E&&Q(d)&&Q(m)&&d[E]===m[E])return;o.setSelected()}}),j(()=>p.disabled,()=>{n.groupDisabled=p.disabled},{immediate:!0}),{select:o,currentLabel:l,currentValue:h,itemSelected:r,isDisabled:v,hoverItem:O,updateOption:C}}const Ul=se({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const n=ne("select"),o=ot(),p=i(()=>[n.be("dropdown","item"),n.is("disabled",Ce(h)),n.is("selected",Ce(l)),n.is("hovering",Ce(C))]),r=ge({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:f,itemSelected:l,isDisabled:h,select:v,hoverItem:y,updateOption:b}=Hl(e,r),{visible:O,hover:C}=nt(r),d=Ve().proxy;v.onOptionCreate(d),Xt(()=>{const a=d.value,{selected:E}=v.states,oe=(v.props.multiple?E:[E]).some(ae=>ae.value===d.value);H(()=>{v.states.cachedOptions.get(a)===d&&!oe&&v.states.cachedOptions.delete(a)}),v.onOptionDestroy(a,d)});function m(){e.disabled!==!0&&r.groupDisabled!==!0&&v.handleOptionSelect(d)}return{ns:n,id:o,containerKls:p,currentLabel:f,itemSelected:l,isDisabled:h,select:v,hoverItem:y,updateOption:b,visible:O,hover:C,selectOptionClick:m,states:r}}}),Gl=["id","aria-disabled","aria-selected"];function jl(e,n,o,p,r,f){return le((g(),V("li",{id:e.id,class:u(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMouseenter:n[0]||(n[0]=(...l)=>e.hoverItem&&e.hoverItem(...l)),onClick:n[1]||(n[1]=B((...l)=>e.selectOptionClick&&e.selectOptionClick(...l),["stop"]))},[k(e.$slots,"default",{},()=>[M("span",null,z(e.currentLabel),1)])],42,Gl)),[[Ee,e.visible]])}var $e=he(Ul,[["render",jl],["__file","option.vue"]]);const ql=se({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=me(ye),n=ne("select"),o=i(()=>e.props.popperClass),p=i(()=>e.props.multiple),r=i(()=>e.props.fitInputWidth),f=w("");function l(){var h;f.value=`${(h=e.selectRef)==null?void 0:h.offsetWidth}px`}return Te(()=>{l(),U(e.selectRef,l)}),{ns:n,minWidth:f,popperClass:o,isMultiple:p,isFitInputWidth:r}}});function Ql(e,n,o,p,r,f){return g(),V("div",{class:u([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:ve({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(g(),V("div",{key:0,class:u(e.ns.be("dropdown","header"))},[k(e.$slots,"header")],2)):$("v-if",!0),k(e.$slots,"default"),e.$slots.footer?(g(),V("div",{key:1,class:u(e.ns.be("dropdown","footer"))},[k(e.$slots,"footer")],2)):$("v-if",!0)],6)}var Xl=he(ql,[["render",Ql],["__file","select-dropdown.vue"]]);function Jl(e){const n=w(!1);return{handleCompositionStart:()=>{n.value=!0},handleCompositionUpdate:f=>{const l=f.target.value,h=l[l.length-1]||"";n.value=!xt(h)},handleCompositionEnd:f=>{n.value&&(n.value=!1,X(e)&&e(f))}}}const Yl=11,Zl=(e,n)=>{const{t:o}=_t(),p=ot(),r=ne("select"),f=ne("input"),l=ge({inputValue:"",options:new Map,cachedOptions:new Map,disabledOptions:new Map,optionValues:[],selected:e.multiple?[]:{},selectionWidth:0,calculatorWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1}),h=w(null),v=w(null),y=w(null),b=w(null),O=w(null),C=w(null),d=w(null),m=w(null),a=w(null),E=w(null),J=w(null),oe=w(null),{wrapperRef:ae,isFocused:Me,handleFocus:dt,handleBlur:Re}=el(O,{afterFocus(){e.automaticDropdown&&!I.value&&(I.value=!0,l.menuVisibleOnFocus=!0)},beforeBlur(t){var s,c;return((s=y.value)==null?void 0:s.isFocusInsideContent(t))||((c=b.value)==null?void 0:c.isFocusInsideContent(t))},afterBlur(){I.value=!1,l.menuVisibleOnFocus=!1}}),I=w(!1),Y=w(),{form:ke,formItem:Z}=tl(),{inputId:ct}=ll(e,{formItemContext:Z}),{valueOnClear:pt,isEmptyValue:ft}=nl(e),ie=i(()=>e.disabled||(ke==null?void 0:ke.disabled)),Se=i(()=>e.multiple?L(e.modelValue)&&e.modelValue.length>0:!ft(e.modelValue)),vt=i(()=>e.clearable&&!ie.value&&l.inputHovering&&Se.value),De=i(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),mt=i(()=>r.is("reverse",De.value&&I.value)),Be=i(()=>(Z==null?void 0:Z.validateState)||""),bt=i(()=>sl[Be.value]),gt=i(()=>e.remote?300:0),Le=i(()=>e.loading?e.loadingText||o("el.select.loading"):e.remote&&!l.inputValue&&l.options.size===0?!1:e.filterable&&l.inputValue&&l.options.size>0&&x.value===0?e.noMatchText||o("el.select.noMatch"):l.options.size===0?e.noDataText||o("el.select.noData"):null),x=i(()=>T.value.filter(t=>t.visible).length),T=i(()=>{const t=Array.from(l.options.values()),s=[];return l.optionValues.forEach(c=>{const S=t.findIndex(N=>N.value===c);S>-1&&s.push(t[S])}),s.length>=t.length?s:t}),ht=i(()=>Array.from(l.cachedOptions.values())),yt=i(()=>{const t=T.value.filter(s=>!s.created).some(s=>s.currentLabel===l.inputValue);return e.filterable&&e.allowCreate&&l.inputValue!==""&&!t}),Ne=()=>{e.filterable&&X(e.filterMethod)||e.filterable&&e.remote&&X(e.remoteMethod)||T.value.forEach(t=>{var s;(s=t.updateOption)==null||s.call(t,l.inputValue)})},Fe=ol(),St=i(()=>["small"].includes(Fe.value)?"small":"default"),Ot=i({get(){return I.value&&Le.value!==!1},set(t){I.value=t}}),Ct=i(()=>L(e.modelValue)?e.modelValue.length===0&&!l.inputValue:e.filterable?!l.inputValue:!0),It=i(()=>{var t;const s=(t=e.placeholder)!=null?t:o("el.select.placeholder");return e.multiple||!Se.value?s:l.selectedLabel});j(()=>e.modelValue,(t,s)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(l.inputValue="",re("")),ue(),!be(t,s)&&e.validateEvent&&(Z==null||Z.validate("change").catch(c=>al()))},{flush:"post",deep:!0}),j(()=>I.value,t=>{t?re(l.inputValue):(l.inputValue="",l.previousQuery=null,l.isBeforeHide=!0),n("visible-change",t)}),j(()=>l.options.entries(),()=>{var t;if(!il)return;const s=((t=h.value)==null?void 0:t.querySelectorAll("input"))||[];(!e.filterable&&!e.defaultFirstOption&&!rl(e.modelValue)||!Array.from(s).includes(document.activeElement))&&ue(),e.defaultFirstOption&&(e.filterable||e.remote)&&x.value&&We()},{flush:"post"}),j(()=>l.hoveringIndex,t=>{ul(t)&&t>-1?Y.value=T.value[t]||{}:Y.value={},T.value.forEach(s=>{s.hover=Y.value===s})}),Jt(()=>{l.isBeforeHide||Ne()});const re=t=>{l.previousQuery!==t&&(l.previousQuery=t,e.filterable&&X(e.filterMethod)?e.filterMethod(t):e.filterable&&e.remote&&X(e.remoteMethod)&&e.remoteMethod(t),e.defaultFirstOption&&(e.filterable||e.remote)&&x.value?H(We):H(wt))},We=()=>{const t=T.value.filter(S=>S.visible&&!S.disabled&&!S.states.groupDisabled),s=t.find(S=>S.created),c=t[0];l.hoveringIndex=qe(T.value,s||c)},ue=()=>{if(e.multiple)l.selectedLabel="";else{const s=ze(e.modelValue);l.selectedLabel=s.currentLabel,l.selected=s;return}const t=[];L(e.modelValue)&&e.modelValue.forEach(s=>{t.push(ze(s))}),l.selected=t},ze=t=>{let s;const c=we(t).toLowerCase()==="object",S=we(t).toLowerCase()==="null",N=we(t).toLowerCase()==="undefined";for(let P=l.cachedOptions.size-1;P>=0;P--){const D=ht.value[P];if(c?G(D.value,e.valueKey)===G(t,e.valueKey):D.value===t){s={value:t,currentLabel:D.currentLabel,get isDisabled(){return D.isDisabled}};break}}if(s)return s;const q=c?t.label:!S&&!N?t:"";return{value:t,currentLabel:q}},wt=()=>{e.multiple?l.hoveringIndex=T.value.findIndex(t=>l.selected.some(s=>ee(s)===ee(t))):l.hoveringIndex=T.value.findIndex(t=>ee(t)===ee(l.selected))},Vt=()=>{l.selectionWidth=v.value.getBoundingClientRect().width},Pe=()=>{l.calculatorWidth=C.value.getBoundingClientRect().width},Et=()=>{l.collapseItemWidth=J.value.getBoundingClientRect().width},Oe=()=>{var t,s;(s=(t=y.value)==null?void 0:t.updatePopper)==null||s.call(t)},Ke=()=>{var t,s;(s=(t=b.value)==null?void 0:t.updatePopper)==null||s.call(t)},Ae=()=>{l.inputValue.length>0&&!I.value&&(I.value=!0),re(l.inputValue)},He=t=>{if(l.inputValue=t.target.value,e.remote)Ue();else return Ae()},Ue=kl(()=>{Ae()},gt.value),_=t=>{be(e.modelValue,t)||n(at,t)},Tt=t=>Al(t,s=>!l.disabledOptions.has(s)),$t=t=>{if(e.multiple&&t.code!==dl.delete&&t.target.value.length<=0){const s=e.modelValue.slice(),c=Tt(s);if(c<0)return;s.splice(c,1),n(W,s),_(s)}},Mt=(t,s)=>{const c=l.selected.indexOf(s);if(c>-1&&!ie.value){const S=e.modelValue.slice();S.splice(c,1),n(W,S),_(S),n("remove-tag",s.value)}t.stopPropagation(),ce()},Ge=t=>{t.stopPropagation();const s=e.multiple?[]:pt.value;if(e.multiple)for(const c of l.selected)c.isDisabled&&s.push(c.value);n(W,s),_(s),l.hoveringIndex=-1,I.value=!1,n("clear"),ce()},je=t=>{if(e.multiple){const s=(e.modelValue||[]).slice(),c=qe(s,t.value);c>-1?s.splice(c,1):(e.multipleLimit<=0||s.length<e.multipleLimit)&&s.push(t.value),n(W,s),_(s),t.created&&re(""),e.filterable&&!e.reserveKeyword&&(l.inputValue="")}else n(W,t.value),_(t.value),I.value=!1;ce(),!I.value&&H(()=>{de(t)})},qe=(t=[],s)=>{if(!Q(s))return t.indexOf(s);const c=e.valueKey;let S=-1;return t.some((N,q)=>lt(G(N,c))===G(s,c)?(S=q,!0):!1),S},de=t=>{var s,c,S,N,q;const pe=L(t)?t[0]:t;let P=null;if(pe!=null&&pe.value){const D=T.value.filter(Ye=>Ye.value===pe.value);D.length>0&&(P=D[0].$el)}if(y.value&&P){const D=(N=(S=(c=(s=y.value)==null?void 0:s.popperRef)==null?void 0:c.contentRef)==null?void 0:S.querySelector)==null?void 0:N.call(S,`.${r.be("dropdown","wrap")}`);D&&cl(D,P)}(q=oe.value)==null||q.handleScroll()},Rt=t=>{l.options.set(t.value,t),l.cachedOptions.set(t.value,t),t.disabled&&l.disabledOptions.set(t.value,t)},kt=(t,s)=>{l.options.get(t)===s&&l.options.delete(t)},{handleCompositionStart:Dt,handleCompositionUpdate:Bt,handleCompositionEnd:Lt}=Jl(t=>He(t)),Nt=i(()=>{var t,s;return(s=(t=y.value)==null?void 0:t.popperRef)==null?void 0:s.contentRef}),Ft=()=>{l.isBeforeHide=!1,H(()=>de(l.selected))},ce=()=>{var t;(t=O.value)==null||t.focus()},Wt=()=>{Qe()},zt=t=>{Ge(t)},Qe=t=>{if(I.value=!1,Me.value){const s=new FocusEvent("focus",t);H(()=>Re(s))}},Pt=()=>{l.inputValue.length>0?l.inputValue="":I.value=!1},Xe=()=>{ie.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:I.value=!I.value)},Kt=()=>{I.value?T.value[l.hoveringIndex]&&je(T.value[l.hoveringIndex]):Xe()},ee=t=>Q(t.value)?G(t.value,e.valueKey):t.value,At=i(()=>T.value.filter(t=>t.visible).every(t=>t.disabled)),Ht=i(()=>e.multiple?e.collapseTags?l.selected.slice(0,e.maxCollapseTags):l.selected:[]),Ut=i(()=>e.multiple?e.collapseTags?l.selected.slice(e.maxCollapseTags):[]:[]),Je=t=>{if(!I.value){I.value=!0;return}if(!(l.options.size===0||x.value===0)&&!At.value){t==="next"?(l.hoveringIndex++,l.hoveringIndex===l.options.size&&(l.hoveringIndex=0)):t==="prev"&&(l.hoveringIndex--,l.hoveringIndex<0&&(l.hoveringIndex=l.options.size-1));const s=T.value[l.hoveringIndex];(s.disabled===!0||s.states.groupDisabled===!0||!s.visible)&&Je(t),H(()=>de(Y.value))}},Gt=()=>{if(!v.value)return 0;const t=window.getComputedStyle(v.value);return Number.parseFloat(t.gap||"6px")},jt=i(()=>{const t=Gt();return{maxWidth:`${J.value&&e.maxCollapseTags===1?l.selectionWidth-l.collapseItemWidth-t:l.selectionWidth}px`}}),qt=i(()=>({maxWidth:`${l.selectionWidth}px`})),Qt=i(()=>({width:`${Math.max(l.calculatorWidth,Yl)}px`}));return e.multiple&&!L(e.modelValue)&&n(W,[]),!e.multiple&&L(e.modelValue)&&n(W,""),U(v,Vt),U(C,Pe),U(a,Oe),U(ae,Oe),U(E,Ke),U(J,Et),Te(()=>{ue()}),{inputId:ct,contentId:p,nsSelect:r,nsInput:f,states:l,isFocused:Me,expanded:I,optionsArray:T,hoverOption:Y,selectSize:Fe,filteredOptionsCount:x,resetCalculatorWidth:Pe,updateTooltip:Oe,updateTagTooltip:Ke,debouncedOnInputChange:Ue,onInput:He,deletePrevTag:$t,deleteTag:Mt,deleteSelected:Ge,handleOptionSelect:je,scrollToOption:de,hasModelValue:Se,shouldShowPlaceholder:Ct,currentPlaceholder:It,showClose:vt,iconComponent:De,iconReverse:mt,validateState:Be,validateIcon:bt,showNewOption:yt,updateOptions:Ne,collapseTagSize:St,setSelected:ue,selectDisabled:ie,emptyText:Le,handleCompositionStart:Dt,handleCompositionUpdate:Bt,handleCompositionEnd:Lt,onOptionCreate:Rt,onOptionDestroy:kt,handleMenuEnter:Ft,handleFocus:dt,focus:ce,blur:Wt,handleBlur:Re,handleClearClick:zt,handleClickOutside:Qe,handleEsc:Pt,toggleMenu:Xe,selectOption:Kt,getValueKey:ee,navigateOptions:Je,dropdownMenuVisible:Ot,showTagList:Ht,collapseTagList:Ut,tagStyle:jt,collapseTagStyle:qt,inputStyle:Qt,popperRef:Nt,inputRef:O,tooltipRef:y,tagTooltipRef:b,calculatorRef:C,prefixRef:d,suffixRef:m,selectRef:h,wrapperRef:ae,selectionRef:v,scrollbarRef:oe,menuRef:a,tagMenuRef:E,collapseItemRef:J}};var xl=se({name:"ElOptions",setup(e,{slots:n}){const o=me(ye);let p=[];return()=>{var r,f;const l=(r=n.default)==null?void 0:r.call(n),h=[];function v(y){L(y)&&y.forEach(b=>{var O,C,d,m;const a=(O=(b==null?void 0:b.type)||{})==null?void 0:O.name;a==="ElOptionGroup"?v(!pl(b.children)&&!L(b.children)&&X((C=b.children)==null?void 0:C.default)?(d=b.children)==null?void 0:d.default():b.children):a==="ElOption"?h.push((m=b.props)==null?void 0:m.value):L(b.children)&&v(b.children)})}return l.length&&v((f=l[0])==null?void 0:f.children),be(h,p)||(p=h,o&&(o.states.optionValues=h)),l}}});const _l=fl({name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:vl,effect:{type:fe(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:fe(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:Il.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:_e,default:ml},fitInputWidth:Boolean,suffixIcon:{type:_e,default:bl},tagType:{...Tl.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,placement:{type:fe(String),values:wl,default:"bottom-start"},fallbackPlacements:{type:fe(Array),default:["bottom-start","top-start","right","left"]},...gl,...hl(["ariaLabel"])}),tt="ElSelect",en=se({name:tt,componentName:tt,components:{ElInput:yl,ElSelectMenu:Xl,ElOption:$e,ElOptions:xl,ElTag:$l,ElScrollbar:El,ElTooltip:Vl,ElIcon:Sl},directives:{ClickOutside:Bl},props:_l,emits:[W,at,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:n}){const o=Zl(e,n);return st(ye,ge({props:e,states:o.states,optionsArray:o.optionsArray,handleOptionSelect:o.handleOptionSelect,onOptionCreate:o.onOptionCreate,onOptionDestroy:o.onOptionDestroy,selectRef:o.selectRef,setSelected:o.setSelected})),{...o}}}),tn=["id","disabled","autocomplete","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label"],ln=["textContent"];function nn(e,n,o,p,r,f){const l=K("el-tag"),h=K("el-tooltip"),v=K("el-icon"),y=K("el-option"),b=K("el-options"),O=K("el-scrollbar"),C=K("el-select-menu"),d=Yt("click-outside");return le((g(),V("div",{ref:"selectRef",class:u([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),onMouseenter:n[16]||(n[16]=m=>e.states.inputHovering=!0),onMouseleave:n[17]||(n[17]=m=>e.states.inputHovering=!1),onClick:n[18]||(n[18]=B((...m)=>e.toggleMenu&&e.toggleMenu(...m),["prevent","stop"]))},[A(h,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onBeforeShow:e.handleMenuEnter,onHide:n[15]||(n[15]=m=>e.states.isBeforeHide=!1)},{default:R(()=>{var m;return[M("div",{ref:"wrapperRef",class:u([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)])},[e.$slots.prefix?(g(),V("div",{key:0,ref:"prefixRef",class:u(e.nsSelect.e("prefix"))},[k(e.$slots,"prefix")],2)):$("v-if",!0),M("div",{ref:"selectionRef",class:u([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?k(e.$slots,"tag",{key:0},()=>[(g(!0),V(Ze,null,xe(e.showTagList,a=>(g(),V("div",{key:e.getValueKey(a),class:u(e.nsSelect.e("selected-item"))},[A(l,{closable:!e.selectDisabled&&!a.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:ve(e.tagStyle),onClose:E=>e.deleteTag(E,a)},{default:R(()=>[M("span",{class:u(e.nsSelect.e("tags-text"))},z(a.currentLabel),3)]),_:2},1032,["closable","size","type","style","onClose"])],2))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(g(),F(h,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:R(()=>[M("div",{ref:"collapseItemRef",class:u(e.nsSelect.e("selected-item"))},[A(l,{closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",style:ve(e.collapseTagStyle)},{default:R(()=>[M("span",{class:u(e.nsSelect.e("tags-text"))}," + "+z(e.states.selected.length-e.maxCollapseTags),3)]),_:1},8,["size","type","style"])],2)]),content:R(()=>[M("div",{ref:"tagMenuRef",class:u(e.nsSelect.e("selection"))},[(g(!0),V(Ze,null,xe(e.collapseTagList,a=>(g(),V("div",{key:e.getValueKey(a),class:u(e.nsSelect.e("selected-item"))},[A(l,{class:"in-tooltip",closable:!e.selectDisabled&&!a.isDisabled,size:e.collapseTagSize,type:e.tagType,"disable-transitions":"",onClose:E=>e.deleteTag(E,a)},{default:R(()=>[M("span",{class:u(e.nsSelect.e("tags-text"))},z(a.currentLabel),3)]),_:2},1032,["closable","size","type","onClose"])],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):$("v-if",!0)]):$("v-if",!0),e.selectDisabled?$("v-if",!0):(g(),V("div",{key:1,class:u([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[le(M("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":n[0]||(n[0]=a=>e.states.inputValue=a),type:"text",class:u([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:ve(e.inputStyle),role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":((m=e.hoverOption)==null?void 0:m.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onFocus:n[1]||(n[1]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onBlur:n[2]||(n[2]=(...a)=>e.handleBlur&&e.handleBlur(...a)),onKeydown:[n[3]||(n[3]=te(B(a=>e.navigateOptions("next"),["stop","prevent"]),["down"])),n[4]||(n[4]=te(B(a=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),n[5]||(n[5]=te(B((...a)=>e.handleEsc&&e.handleEsc(...a),["stop","prevent"]),["esc"])),n[6]||(n[6]=te(B((...a)=>e.selectOption&&e.selectOption(...a),["stop","prevent"]),["enter"])),n[7]||(n[7]=te(B((...a)=>e.deletePrevTag&&e.deletePrevTag(...a),["stop"]),["delete"]))],onCompositionstart:n[8]||(n[8]=(...a)=>e.handleCompositionStart&&e.handleCompositionStart(...a)),onCompositionupdate:n[9]||(n[9]=(...a)=>e.handleCompositionUpdate&&e.handleCompositionUpdate(...a)),onCompositionend:n[10]||(n[10]=(...a)=>e.handleCompositionEnd&&e.handleCompositionEnd(...a)),onInput:n[11]||(n[11]=(...a)=>e.onInput&&e.onInput(...a)),onClick:n[12]||(n[12]=B((...a)=>e.toggleMenu&&e.toggleMenu(...a),["stop"]))},null,46,tn),[[Zt,e.states.inputValue]]),e.filterable?(g(),V("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:u(e.nsSelect.e("input-calculator")),textContent:z(e.states.inputValue)},null,10,ln)):$("v-if",!0)],2)),e.shouldShowPlaceholder?(g(),V("div",{key:2,class:u([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[M("span",null,z(e.currentPlaceholder),1)],2)):$("v-if",!0)],2),M("div",{ref:"suffixRef",class:u(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(g(),F(v,{key:0,class:u([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:R(()=>[(g(),F(Ie(e.iconComponent)))]),_:1},8,["class"])):$("v-if",!0),e.showClose&&e.clearIcon?(g(),F(v,{key:1,class:u([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:R(()=>[(g(),F(Ie(e.clearIcon)))]),_:1},8,["class","onClick"])):$("v-if",!0),e.validateState&&e.validateIcon?(g(),F(v,{key:2,class:u([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:R(()=>[(g(),F(Ie(e.validateIcon)))]),_:1},8,["class"])):$("v-if",!0)],2)],2)]}),content:R(()=>[A(C,{ref:"menuRef"},{default:R(()=>[e.$slots.header?(g(),V("div",{key:0,class:u(e.nsSelect.be("dropdown","header")),onClick:n[13]||(n[13]=B(()=>{},["stop"]))},[k(e.$slots,"header")],2)):$("v-if",!0),le(A(O,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:u([e.nsSelect.is("empty",e.filteredOptionsCount===0)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:R(()=>[e.showNewOption?(g(),F(y,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):$("v-if",!0),A(b,null,{default:R(()=>[k(e.$slots,"default")]),_:3})]),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[Ee,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(g(),V("div",{key:1,class:u(e.nsSelect.be("dropdown","loading"))},[k(e.$slots,"loading")],2)):e.loading||e.filteredOptionsCount===0?(g(),V("div",{key:2,class:u(e.nsSelect.be("dropdown","empty"))},[k(e.$slots,"empty",{},()=>[M("span",null,z(e.emptyText),1)])],2)):$("v-if",!0),e.$slots.footer?(g(),V("div",{key:3,class:u(e.nsSelect.be("dropdown","footer")),onClick:n[14]||(n[14]=B(()=>{},["stop"]))},[k(e.$slots,"footer")],2)):$("v-if",!0)]),_:3},512)]),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","onBeforeShow"])],34)),[[d,e.handleClickOutside,e.popperRef]])}var sn=he(en,[["render",nn],["__file","select.vue"]]);const on=se({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const n=ne("select"),o=w(null),p=Ve(),r=w([]);st(rt,ge({...nt(e)}));const f=i(()=>r.value.some(y=>y.visible===!0)),l=y=>{var b,O;return((b=y.type)==null?void 0:b.name)==="ElOption"&&!!((O=y.component)!=null&&O.proxy)},h=y=>{const b=Ll(y),O=[];return b.forEach(C=>{var d,m;l(C)?O.push(C.component.proxy):(d=C.children)!=null&&d.length?O.push(...h(C.children)):(m=C.component)!=null&&m.subTree&&O.push(...h(C.component.subTree))}),O},v=()=>{r.value=h(p.subTree)};return Te(()=>{v()}),Ol(o,v,{attributes:!0,subtree:!0,childList:!0}),{groupRef:o,visible:f,ns:n}}});function an(e,n,o,p,r,f){return le((g(),V("ul",{ref:"groupRef",class:u(e.ns.be("group","wrap"))},[M("li",{class:u(e.ns.be("group","title"))},z(e.label),3),M("li",null,[M("ul",{class:u(e.ns.b("group"))},[k(e.$slots,"default")],2)])],2)),[[Ee,e.visible]])}var ut=he(on,[["render",an],["__file","option-group.vue"]]);const yn=Cl(sn,{Option:$e,OptionGroup:ut}),Sn=it($e);it(ut);export{Sn as E,yn as a};
