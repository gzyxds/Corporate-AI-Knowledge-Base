"use strict";const t=require("../../../../common/vendor.js"),e={emits:["update:modelValue","input","change"],props:{value:{type:[String,Number],default:0},modelValue:{type:[String,Number],default:0},show:{type:Boolean,default:!0},bgColor:{type:String,default:"#ffffff"},height:{type:Number,default:100},iconSize:{type:[String,Number],default:40},midButtonSize:{type:[String,Number],default:90},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},midButton:{type:Boolean,default:!1},list:{type:Array,default:()=>[]},beforeSwitch:{type:Function,default:null},borderTop:{type:Boolean,default:!0},hideTabBar:{type:Boolean,default:!0}},data:()=>({midButtonLeft:"50%",pageUrl:""}),created(){this.hideTabBar&&t.index.hideTabBar();let e=getCurrentPages();this.pageUrl=e[e.length-1].route},computed:{valueCom(){return this.modelValue},elIconPath(){return t=>{let e=this.list[t].pagePath;return e?e==this.pageUrl||e=="/"+this.pageUrl?this.list[t].selectedIconPath:this.list[t].iconPath:t==this.valueCom?this.list[t].selectedIconPath:this.list[t].iconPath}},elColor(){return t=>{let e=this.list[t].pagePath;return e?e==this.pageUrl||e=="/"+this.pageUrl?this.activeColor:this.inactiveColor:t==this.valueCom?this.activeColor:this.inactiveColor}},getPlaceHeight(){return`${t.index.upx2px(this.height+(this.midButton?48:0))}px`}},mounted(){this.midButton&&this.getMidButtonLeft()},methods:{async clickHandler(t){if(this.beforeSwitch&&"function"==typeof this.beforeSwitch){let e=this.beforeSwitch.bind(this.$u.$parent.call(this))(t);e&&"function"==typeof e.then?await e.then((e=>{this.switchTab(t)})).catch((t=>{})):!0===e&&this.switchTab(t)}else this.switchTab(t)},switchTab(t){let e=this.list[t].pagePath;if(e){if(e==this.pageUrl||e=="/"+this.pageUrl)return;this.$emit("change",t)}else this.$emit("change",t),this.$emit("input",t),this.$emit("update:modelValue",t)},getOffsetRight:(t,e)=>e?-20:t>9?-40:-30,getMidButtonLeft(){let t=this.$u.sys().windowWidth;this.midButtonLeft=t/2+"px"}}};if(!Array){(t.resolveComponent("u-icon")+t.resolveComponent("u-badge"))()}Math||((()=>"../u-icon/u-icon.js")+(()=>"../u-badge/u-badge.js"))();const i=t._export_sfc(e,[["render",function(e,i,o,n,a,l){return t.e({a:o.show},o.show?t.e({b:t.f(o.list,((e,i,n)=>t.e({a:"777f45f1-0-"+n,b:t.p({size:o.midButton&&e.midButton?o.midButtonSize:o.iconSize,name:l.elIconPath(i),"img-mode":"scaleToFill",color:l.elColor(i),"custom-prefix":e.customIcon?"custom-icon":"uicon"}),c:e.count},e.count?{d:"777f45f1-1-"+n,e:t.p({count:e.count,"is-dot":e.isDot,offset:[-2,l.getOffsetRight(e.count,e.isDot)]})}:{},{f:t.n(o.midButton&&e.midButton?"u-tabbar__content__circle__button":"u-tabbar__content__item__button"),g:t.t(e.text),h:l.elColor(i),i:i,j:o.midButton&&e.midButton?1:"",k:t.o((t=>l.clickHandler(i)),i)}))),c:o.bgColor,d:o.midButton},o.midButton?{e:o.borderTop?1:"",f:o.bgColor,g:a.midButtonLeft}:{},{h:e.$u.addUnit(o.height),i:o.bgColor,j:o.borderTop?1:"",k:l.getPlaceHeight,l:t.o((()=>{}))}):{})}],["__scopeId","data-v-777f45f1"]]);wx.createComponent(i);
