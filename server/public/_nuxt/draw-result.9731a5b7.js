import{E as as}from"./el-segmented.5d590d1a.js";import{E as ns}from"./index.e979a1ab.js";import{E as ls}from"./index.8ad94f19.js";import{_ as cs}from"./index.vue.79ff26cb.js";import{_ as rs}from"./index.vue.7f39d825.js";import{E as is}from"./el-image-viewer.d5621b18.js";import{E as As}from"./el-result.4bbc7c45.js";import{_ as ds}from"./index.vue.e0bcb29b.js";import{a as ps,ah as gs,j as us,v as vs}from"./entry.dfbfd4fd.js";/* empty css               */import"./el-tooltip.4ed993c7.js";/* empty css                  */import{t as _s,p as k,s as ks,e as L,g as fs,d as hs,f as xs,h as Cs,r as bs}from"./useDrawEffect.259be699.js";import{useImageSplit as ms}from"./useImageSplit.26244bd4.js";import{a as ws}from"./download.f61d7233.js";import{DrawResultTypeEnum as Is}from"./DrawEnum.ea2da3f6.js";import Es from"./draw-share.29dd6513.js";import Bs from"./image-editor.2d22a570.js";import{D as Qs}from"./empty-image.07b83606.js";import{d as Ds}from"./error.77075b9a.js";import{E as Ss}from"./index.17567b0d.js";import{k as Rs,a as f,s as T,b as ys,H as a,I as c,J as o,X as d,u as r,e as M,V as p,S as u,aj as j,U as _,R as i,a7 as P,Z as h,$ as V,ag as Us,ah as Ks,n as Ns}from"./swiper-vue.2eb6bd20.js";import{_ as Js}from"./_plugin-vue_export-helper.c27b6911.js";import"./isUndefined.aa0326a0.js";import"./index.f647f618.js";import"./___vite-browser-external.5512611b.js";import"./index.9c8f8f3a.js";import"./throttle.d40f833a.js";import"./debounce.8cbe4cfc.js";import"./position.4bcf7430.js";import"./el-pagination.7a6b3d1c.js";import"./el-select.b7a2650e.js";import"./strings.ceb81673.js";import"./isEqual.0df0ab2c.js";import"./_getTag.83294aff.js";import"./_baseIteratee.5e0c38c1.js";import"./index.071e9281.js";import"./castArray.c741e965.js";/* empty css                     */import"./usePaging.b2b97b82.js";import"./usePolling.de4d6c35.js";import"./task_reward.d02f9b86.js";import"./index.e94bc8a7.js";import"./index.6c069afb.js";import"./use-dialog.7d399731.js";import"./refs.cabac943.js";/* empty css                  */import"./useLockFn.619a13da.js";import"./useImageEditor.3a7ec5d6.js";import"./DrawingTool.cac1dd22.js";const Ys="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAASeSURBVHic7Zs9b+NGEIbfWRKHcyrlHyhdkGvkpEsaqkt3DiAd1FkGKMClXJzNzlJHJ4VVCrEA6zrBOuDkLp3VBLjqrCrt8Sco1QE+UZOCtCHxQxcuP5XoAQzIQ2k4O+TO7uzOEkJo6IZmEw7BXAFQBlAK+24WEMFihsXg28Xiq+Fk2JknotcraBwbZXuBa4C1JG6QFgTqPiye9+I6Ys0BNf20TaDLeKZlBxEsoVB11DctaR2PH7at8SvMFZX2ZZ1AAFBvva6Axf2G780ASqTPycElbIhDcd4E1dEvAp88gbpCxTDOK5YkNd3QCHwOQFuVM6Ns2zgHcBRVJ7lK7/xXlvvjq99mssamySvd6LDjiDUUlb6J+rCEAL/0CgnULWrjAeBmYHYA+Oyz7fU3498gQDjwCh8Wz3tSlmWIAjrxCRmHUfUI5vXAQgQrqUlGmowG5hTAmp1EXI6qR8ATWZnJimFXxtBaN2BGOaoGkZgteUCwPJLIcUtNxpKccgdmr6RS188ehXMizMGYLEG3b50u4yO2Ax5zBxuswWdPrpTc+NYmcLuun01ByxPv6BarC9T007a94I9FT5xcNLC4r+mn7VWhtAO2NXcg0OWqE6S6gJM7bGx8zrmDMySGjQoEumwcG5NR37TkYkBI7gCioaKgW5Tc4aDZKT1TP50z0PZec9Y8UKWVqOlC0/HArIYpDc8d6Gh8ZQ5jW50C9ZbRBPO1V66AqpFjQHDugF5RGw8A4ytzCKKhV24TDqMHwcDcYa8rZ1p2KAr8NjJXIjtga3MHJy55Z4plmWFwm3MH74MqbXcukACJ5QJJUW+9rhDEO2bMQcujtBdmivcGsLh0JzAVsPANXUlTPAesL3hW0r5ZER2QKTsH5G1A3uwckLcBebNzQN4G5M3OAXkbkDep5wJu7cE1JGd1/hWrJwKXuaOS/hsQo/FfQCOId3GVpO4Aonyry75E6g5gLH8BME1B9czVHYvUY4DbR0NXmb14+/x4cOEr5UuS//0oIMi3xcyp5+BFQgQsapYauqHlYEsuCBDeeIU2eOs2PWURihIYoSuvdKOTsS25IEZ90wraNmLweV0/u6tl3x1mIZ9TQQWcbaOlDS1gO1kjsFbXz+YALAKmqReB0PIILK6JUFpyQClc0rd7/OCUuvA9Itf2bN5NLhJ13bjzVrM8zQNGfdNSVNr3D4v/bdYmQqO+aT183tsnUOF3e5PCNxOcDDvzm4HZ+bzY+5rBJwCmK29FYeuHZQnNBdwt757798SG/Hwr2eUCEr/x7LFzofP9VQKKqecyDrA8/1cax4ZXceE4aHZK3nkOkYwDiHyB0D2uUmieqZ/8NjImkR2gsD95AnOz3jKaUpZlQL1lNINqBZegW6nVlqAZFeCUyz0s9rpFKZpqHBvOYSrmZsDl6XhwUZVygDtt/hh23TnmmnfxFJewaTXaPRQmvd62rcXSAMDgk7eDX3sAoMgq+evDn++/+/6nvwn0c3Kmpc9q44EYDgAcJ7z44cdbgL4Fop/XyRaaKipVb36/+GNNmpT6mm5oAvwShAO3mjTvCdIcgAWimcJ4Mwo5MvMPuv+737QxZD0AAAAASUVORK5CYII=",Zs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPASURBVHic7ZvBUuJKFIb/04BV7niEPAI8wcgTDFYJxRJqQhVLWajZGXeRWeDsrIIpuTsKrJJ5AnkDeYPJI7DTUpIzC+K9XBJESMixnHwr7ba6//yEc/p0twRhSvWTHEHdMWMKcmvDzvdJnPOrOCcLhFWbGRqAHFjdxD29vAHAwcLPubgn/wgGiJIYIC1AmsQAaQHSJAZIC5AmMUBagDSJAdICpEkMkBYgTWKAtABpEgOkBUiTGCAtQJrEAGkB0iQGSAuQJjFAWoA06UrD0JwZ3wHQiDB+ftmvjXrmVFrYLihWzWwm89QGcxXAOJWmmnJmfIP5kVSWGcW99OO5rMzdsZd+OvYeHgAOnBnfKfz/bA4Miv18Li4Y+LLUlEtiQNgBSvWT12PtHLzvVf/askMreweVhqE5Ds4JfABgolLU3HTu8G/Afw8PzL9XD0e6cRB63DVUGobmOnwP5iozNGYUvWC+EaENIEJ2qSlL4Psj/fQ47NirKH87LTozfvAuViyy/PtaQhvgMv8IaidQu6wbZtjxlznST4+Z6A7wGQ8GX2w6XmgDbrutKxDVAPjWDgw+L9XPbopV0yd2G8q6YRKoHdRHoIvbbutq0zEjyQLDjtUDuQUi2L5ORjWTfryvNAwtzBxl/azN4KA1ypSYDwddy9xm3MjS4LDzfaJSFGwCkHMd3sqESsPQSvrZAwO+mEIEG+QWBj9boy0kA4i4FuhfW7ZKUQGA76obM7RNM8S/kT7g8hQRbJWiQthrdZEvhPrXlv0y2y+A0AvofneGKNVPcq7D9wGRHpjn/EIU642drARHPXM67FzWCBQYlddliPK30yJYBT48AVfD7mU+qsXWTpfCg65lMrgZ1PeaIZbby7phrkpzBLoYdC8Dx9uWndcCt93WFTEfIiBNglH1NwVGejC4uW2kf4tYiqHBz9ZoZZpcz5RBhW1y/HuIrRpckyYDIYKdSlP+tmuNd6Ur1nK4f23Zzy/7eQLe82mOo4r0bxG6HN4Ub7uteaQbvxT4KwhFZmQxD3oTItiK6Ud/h5/6IrEb8Ir3Wo8BRBrVN+Wv3xFKDJAWIE1igLQAaRIDpAVI85cZwL4KU8FXpXEuqk3Mj4T3TNpS81QBtLyllM1kHtufyYT5qfBjG/49hgmV6kYVzIH/sbll+frhWLGtBgY3CQDK9bPfq/7os0IE+/llP68AgOEeSguKG4Z7OOqZUwXMNytAbv6zvPJv4Z0l5F+302mxs1g1s3vpp2MGf4F3a0RC5A6YAjQB4Z9hx+otdvwBWkxh8jN8G8MAAAAASUVORK5CYII=",Gs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAA6RJREFUaEPtWV1u2kAYLCAQb6UnKDlBkxOUG5ScoEYCxBvhBDEnCHlDgBTnBEluQE4QcoLQG4RXENAZtI7Msru2g81CVUsIy+ufmf3m+9vNfDmCw3GcUqFQaK/X62omkzknJJyPcT6ez+e3nue962BmbONvNptVgL0D2JIKC8beMVYbDAaPqnGrBAgeoB4iTuKlioQ1ApRNPp9/0828TIqWWCwWZ7KcrBHA7LsAeS0B7UDzXrFYLK1WK0c1Div0gs9YI9BoNOikPwNgOjI4mSSs8DwcDitHQQDg1kEgmPlvsjxarVYZlngL3geSW5NuzQInTUDE/RfMbPnkJATtM1Ex7m8SVvCAxq9yudwTr0E6v/FHRw8eO35yUAkBfBvAt6JIxBzA22bwk7KVMCokcwcQTFyfPewksnq9XsGsP2gS1r2oeWiVrxpmM1x3rJQSiDQ3+PiVAtgWKGEh3kcL/RD3v+L/EbLpHbyYY/xeLpecdZWjPsNRnX6/P/2sloLPJe7EcFQHH7jRSKYLKciRZS8eiREwOSp0/gc/ZzQajfdCq3g4EQKM7XRUvL8sfwPAn1BFOiYd70PKSEDM6jVAMJL4ndIE53SuTacER2VFqZLFjIkJxZe3D8CwZ7UEQrTMlo9t3lTlqLj+SskA/CQMwL7jSgIED2BMPLEPAL8FcFXojP2uKA/sEIjbKQU+MkP9Uk3DUU1EdghoOqVuNpvdaJkgGSaDL2WUgaOep+WosQhAPi+SrlWdEiXyQQIEJpDNRRSTJ32PygJbnRJm/kzOmlE6paSB6t73TxJg6PMLKhLfSf+KZlu55HEIK0R1YhdSuhdOrOqUNnnBtIKWFhllGMU65RQf1NXnRiwg4iEidQ4VkRJPZILdFOG2doicoC0lxLolY7+xU8I4ayR5hc23Ug81UzdNa0Qp5kI7JVGNkmzQ+X0SU8jqMq26KJFy2keqyeL+sItmppu0MydKgOBEE+8hIn2XwTJj41otSWskToCgRUHogkRbM+Nb1pB3aESpzr7D7g5NiDXGaO5raP4rIKnrof2+o6NrjFKxQHDWhTUoqV8KSTH5KbeWFJazs7AVcHCW4aawHJYg7e/QmKwB9FzscrlDQyaoBhxKS2Jld3HXB6NpWf/v0CSdY4zvQ9LjqsZHmXJyW0yKTb4ofcdRbfK5sIBcBIb1HcfhxH62jtl32Nuh0TlDzAU0u4kshIRxh8a0YJZ6KREltCl2aLgw7Bdzxh2av7NNTU+S4JOoAAAAAElFTkSuQmCC",Ls="data:image/png;base64,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",Ts="data:image/png;base64,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",Ms="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAN4SURBVHic7Zs/T9tQFMXPdQyqOuUb1DNTylpVCls3EqlGbE2lRGIrGVC8kUwNLDAiEdSwRaQS9BMkSK3UCdKhXeuPkC4FVY5vhwYEtvPXz7mh+Dc+552cdxJf28/vERRjFqwcgVcBpJhhqNAkgg2gw6BPzcNqXYXmrbYqofUNy3B73FI16EEQwdYStNI4qNpK9FSImIWtFFhrAUiq0BuDbkKn5ypC0MIKZHLlJEE7xewGDwBJt8ctFUJ6aAH9d46ZjOCj1A6rD3ASgAFPwMwwzIKVC1sTQgdAoNWA5k5Cp6yq83RgfWG8AVAPox36FACQ8jYwqKhq8ADQOKjaGtNb/xH2ffekqAjAd+7rOmwFuh7RQM3QdUdFAA+aOABpA9KEvgoE4fa4tVYoqdZUqncD9e/iPiCgmv/ntEFuUSdop4xo79/nlDRBO330NUBjuFkAbWkjAnQYbtb3NGjmS95q0wWoMyNTIeEUPDdHzdrO0CfeMa4C1GnWqiuhfM0IM2+1AE5P0ieuAdIGpIkDkDYgTRyAtAFp4gCkDUgTyePw+oZlOI6bAQDHeVo/q5e7kjrDUP4PuJnBJdAegfYWF64u1zcsQ0pnFMoDcB3k7k5fM+P2V5wEx3EzXh3XQU6JyTsoD4AJz/xfok08exvUJ0g7LI++CMYBSBuQJg5A2oA0cQDSBqSJA5A2IE0cgLQBaeIApA1IEwcgbUCaOABpA9LEAUgbkEZ5AMSsfOo6SiKYFKVv/kZ38hUmwX3Op7A0FOUBNA+rdQYXAXQBdAlUOTnaPZtU5+Ro94zBxf52mS6BKqq3ywARvRn6WNvdB7A/LzrDiItgQNuDKmL3Ye/LlJFjCQrA9oimM7nyLPcDTUXfo3G3jWiaAMi/JnBRv94M4W0m9D3e/6EYI4uvL4AE49jbxuBts7A1t4upzcJWisHb3nYX9GlU38BVlGuF0s+gDZAEqvxxnuxH8Z5+GjK5cnJRv94MGjyAdrO2M3KBZ+BlkJHIAr1LfztvL+hX78x8yQZoDkK4Sg/aRcCgyjgKA9fRruWt8oBk5x4GF/v3ECNJDDrw/eJze2n5xS8CvVJnLXoIVGnWdqrjfn5gAADw4+LL16Xll+f07/JihPQWKUSwQYmVZu19Y6J+437wdd5Ka+BVEDLMSGK2e4WD6AKwQdRJMI4btWp7GpG/LfYqa6tBN3MAAAAASUVORK5CYII=",A=x=>(Us("data-v-2fa59074"),x=x(),Ks(),x),js={class:"bg-body flex-1 rounded-[12px] p-4 flex flex-col gap-4 relative"},Ps={class:"sticky top-0"},Vs=A(()=>o("div",{class:"border-b border-b-[#eff0f2] dark:border-[#333333] pb-4"}," 绘图任务 ",-1)),Ws={class:"mt-4",style:{"--el-border-radius-base":"12px"}},Hs={key:0},zs={class:"grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 5xl:grid-cols-5 gap-4"},Os={class:"flex justify-between relative"},Xs={key:0,class:"flex items-center justify-center",style:{position:"absolute",right:"0",top:"-5px"}},qs=["onClick"],Fs=A(()=>o("div",{class:"cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content"},[o("img",{src:Ys,class:"w-[16px] h-[16px] object-contain"})],-1)),$s=[Fs],so=["onClick"],oo=A(()=>o("div",{class:"cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content"},[o("img",{src:Zs,class:"w-[16px] h-[16px] object-contain"})],-1)),to=[oo],eo=["onClick"],ao=A(()=>o("div",{class:"cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content"},[o("img",{src:Gs,class:"w-[16px] h-[16px] object-contain"})],-1)),no=[ao],lo=["onClick"],co=A(()=>o("div",{class:"cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content"},[o("img",{src:Ls,class:"w-[16px] h-[16px] object-contain"})],-1)),ro=[co],io=["onClick"],Ao=A(()=>o("div",{class:"cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content"},[o("img",{src:Ts,class:"w-[16px] h-[16px] object-contain"})],-1)),po=[Ao],go=["onClick"],uo=A(()=>o("div",{class:"cursor-pointer dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-md p-[6px] box-content"},[o("img",{src:Ms,class:"w-[16px] h-[16px] object-contain"})],-1)),vo=[uo],_o={class:"relative rounded-[12px] overflow-hidden flex-1"},ko={class:"bg-[var(--el-bg-color-page)]"},fo={key:0,class:"grid grid-cols-2 align-center justify-center"},ho=["onClick"],xo={key:0,class:"w-full pb-[100%]"},Co={class:"w-full h-full pb-9 px-4 flex flex-col justify-center items-center absolute left-0 top-0"},bo=["src"],mo=A(()=>o("div",null,"绘图失败",-1)),wo={class:"text-xs text-[#798696] dark:text-white line-clamp-3 w-full break-all"},Io={key:1,class:"draw_loading w-full pb-[100%]","element-loading-svg":"none","element-loading-text":"正在生成中..."},Eo={class:"w-full box-border"},Bo={class:"line-clamp-1"},Qo={key:0,class:""},Do={class:"flex flex-none"},So=A(()=>o("span",{class:"text-xs flex-none"},"放大图片",-1)),Ro={class:"flex flex-wrap gap-y-[10px]"},yo=["onClick"],Uo=["onClick"],Ko=["onClick"],No=["onClick"],Jo={class:"flex flex-none mt-[15px]"},Yo=A(()=>o("span",{class:"text-xs flex-none"},"变体图片",-1)),Zo={class:"flex flex-wrap gap-y-[10px]"},Go=["onClick"],Lo=["onClick"],To=["onClick"],Mo=["onClick"],jo=A(()=>o("span",{class:"text-xs flex-none"},"调整",-1)),Po=["onClick"],Vo=["onClick"],Wo={class:"flex flex-none mt-[15px]"},Ho=A(()=>o("span",{class:"text-xs flex-none"},"变化",-1)),zo={class:"flex flex-wrap gap-y-[10px]"},Oo=["onClick"],Xo=["onClick"],qo=["onClick"],Fo=["onClick"],$o=["onClick"],st=["onClick"],ot={key:0,class:"flex flex-none mt-[15px]"},tt=A(()=>o("span",{class:"text-xs flex-none"},"拉伸",-1)),et={class:"flex flex-wrap gap-y-[10px]"},at=["onClick"],nt=["onClick"],lt=["onClick"],ct=["onClick"],rt={class:"flex justify-between items-center"},it={class:"text-[#8794A3]"},At={key:1,class:"h-full flex items-center justify-center"},dt=A(()=>o("div",{class:"text-xl"},"当前任务是空的哦",-1)),pt=A(()=>o("div",{class:"text-info"}," 在左侧输入描述，创建你的作品吧! ",-1)),gt={class:"w-full flex justify-end"},ut=Rs({__name:"draw-result",emits:["pageChange","taskStatusChange"],setup(x,{emit:vt}){const W=ps(),C=f(),I={0:{label:"生成中",type:"warning"},1:{label:"生成中",type:"warning"},2:{label:"生成失败",type:"danger"},3:{label:"生成成功",type:"success"}},b=f(-1),H=[{label:"全部",value:-1},{label:"完成",value:3},{label:"进行中",value:1},{label:"失败",value:2}],m=f(!1),E=T(null),B=f([]),w=f(!1),z=T(null);ys(()=>ks.value,()=>{var t;(t=C.value)==null||t.scrollTo(0,0)});const Q=async(t,l)=>{const g={image:t.image,prompts:t.prompt,records_id:t.id};l&&(g.is_base64=1,g.base64=l),(B.value.includes(t.id)||t.is_share)&&await us.confirm("该图片已分享过，是否确认重复分享？"),m.value=!0,await Ns(),E.value.open(g)},{images:D,splitImage:O}=ms(),X=async t=>{try{t.loading=!0,await O(t.image),console.log(D.value),t.image=D.value}finally{t.loading=!1}},q=async()=>{var t;L.value=!0,await fs(),(t=C.value)==null||t.scrollTo(0,0),L.value=!1},F=t=>{const l={draw_model:t.engine,image_mask:t.image_base,negative_prompt:t.negative_prompt,prompt:t.prompt,size:t.scale,draw_loras:t.loras,version:t.version};t.image_base&&(l.draw_type="img2img"),bs(l)},n=async(t,l)=>{const g={action:l,draw_model:t.engine,image_mask:t.image_mask,negative_prompt:t.negative_prompt,prompt:t.prompt,size:t.scale,origin_task_id:t.task_id,complex_params:JSON.parse(t==null?void 0:t.complex_params)};g.image_mask===void 0&&t.image_base&&(g.draw_type="img2img",g.image_mask=t.image_base),await hs({...xs.value,...g})};return(t,l)=>{const g=as,S=ns,v=ls,R=cs,$=rs,ss=is,os=As,ts=ds,y=vs;return a(),c(u,null,[o("div",js,[o("div",Ps,[Vs,o("div",Ws,[d(g,{class:"task_type !bg-[transparent]",modelValue:r(b),"onUpdate:modelValue":l[0]||(l[0]=s=>M(b)?b.value=s:null),options:H,x:"",onChange:r(_s)},null,8,["modelValue","onChange"])])]),d(r(Ss),{class:"draw_result flex-1",ref_key:"resultScrollBar",ref:C},{default:p(()=>[r(k).lists.length>0?(a(),c("div",Hs,[o("div",zs,[(a(!0),c(u,null,j(r(k).lists,(s,_t)=>{var U,K,N,J,Y,Z,G;return a(),c("div",{key:s.id,class:"rounded-[12px] p-4 flex flex-col gap-2 border border-[#eff0f2] dark:border-[#333333] min-w-[272px] flex-none"},[o("div",Os,[d(S,{type:I[s.status].type,effect:"light"},{default:p(()=>[P(h(I[s.status].label),1)]),_:2},1032,["type"]),s.status!==1||s.status===0?(a(),c("div",Xs,[s.status===3?(a(),_(v,{key:0,effect:"dark",content:"复制提示词",placement:"bottom"},{default:p(()=>[o("div",{onClick:e=>r(gs)(s.prompt)},$s,8,qs)]),_:2},1024)):i("",!0),s.status===3?(a(),c(u,{key:1},[d(v,{effect:"dark",content:"下载图片",placement:"bottom"},{default:p(()=>[o("div",{onClick:e=>r(ws)(s.image)},to,8,so)]),_:2},1024),r(W).getSquareConfig.draw_award.is_open?(a(),_(v,{key:0,effect:"dark",content:"分享至广场",placement:"bottom"},{default:p(()=>[o("div",{onClick:e=>Q(s)},no,8,eo)]),_:2},1024)):i("",!0),s.engine==="mj"&&(s!=null&&s.able_cut)?(a(),_(v,{key:1,effect:"dark",content:"一键切图",placement:"bottom"},{default:p(()=>[o("div",{onClick:e=>X(s)},ro,8,lo)]),_:2},1024)):i("",!0)],64)):i("",!0),d(v,{effect:"dark",content:"重新生成",placement:"bottom"},{default:p(()=>[o("div",{onClick:e=>F(s)},po,8,io)]),_:2},1024),d(v,{effect:"dark",content:"删除",placement:"bottom"},{default:p(()=>[o("div",{onClick:e=>r(Cs)(s.id)},vo,8,go)]),_:2},1024)])):i("",!0)]),o("div",_o,[V((a(),c("div",ko,[Array.isArray(s.image)?(a(),c("div",fo,[(a(!0),c(u,null,j(s.image,(e,es)=>(a(),c("div",{class:"m-2 image__item relative",style:{"flex-basis":"calc(50% - 10px)"},key:es},[d(R,{src:e,ratio:[1,1],fit:"cover"},null,8,["src"]),o("div",{class:"image__item__icon cursor-default",onClick:kt=>Q(s,e)},[d($,{name:"el-icon-Share",color:"#ffffff",size:"16"})],8,ho)]))),128))])):s.status===3?(a(),_(R,{key:1,thumbnail:s.thumbnail,src:s.image,ratio:[1,1]},null,8,["thumbnail","src"])):i("",!0)])),[[y,s.loading]]),s.status===2?(a(),c("div",xo,[o("div",Co,[o("img",{class:"w-1/2 mb-4",src:r(Ds),alt:"绘图失败"},null,8,bo),mo,o("div",wo," 错误信息："+h(s.fail_reason),1)])])):i("",!0),s.status===0||s.status===1?V((a(),c("div",Io,null,512)),[[y,!0]]):i("",!0)]),o("div",Eo,[o("div",Bo,h(s.prompt),1)]),s.status===3&&s.engine==="mj"?(a(),c("div",Qo,[!((U=s==null?void 0:s.able_actions)!=null&&U.includes("low_variation"))&&((K=s==null?void 0:s.able_actions)!=null&&K.length)?(a(),c(u,{key:0},[o("div",Do,[So,o("div",Ro,[o("div",{class:"opt-btn",onClick:e=>n(s,"upscale1")}," 左上 ",8,yo),o("div",{class:"opt-btn",onClick:e=>n(s,"upscale2")}," 右上 ",8,Uo),o("div",{class:"opt-btn",onClick:e=>n(s,"upscale3")}," 左下 ",8,Ko),o("div",{class:"opt-btn",onClick:e=>n(s,"upscale4")}," 右下 ",8,No)])]),o("div",Jo,[Yo,o("div",Zo,[o("div",{class:"opt-btn",onClick:e=>n(s,"variation1")}," 左上 ",8,Go),o("div",{class:"opt-btn",onClick:e=>n(s,"variation2")}," 右上 ",8,Lo),o("div",{class:"opt-btn",onClick:e=>n(s,"variation3")}," 左下 ",8,To),o("div",{class:"opt-btn",onClick:e=>n(s,"variation4")}," 右下 ",8,Mo)])])],64)):(N=s==null?void 0:s.able_actions)!=null&&N.length?(a(),c(u,{key:1},[o("div",null,[jo,o("div",{class:"opt-btn",onClick:e=>n(s,"high_variation")}," 微调(强) ",8,Po),o("div",{class:"opt-btn",onClick:e=>n(s,"low_variation")}," 微调(弱) ",8,Vo)]),o("div",Wo,[Ho,o("div",zo,[(J=s==null?void 0:s.able_actions)!=null&&J.includes("outpaint_1.5x")?(a(),c(u,{key:0},[o("div",{class:"opt-btn",onClick:e=>n(s,"outpaint_1.5x")}," 变焦1.5x ",8,Oo),o("div",{class:"opt-btn",onClick:e=>n(s,"outpaint_2x")}," 变焦2x ",8,Xo)],64)):i("",!0),(Y=s==null?void 0:s.able_actions)!=null&&Y.includes("upscale_2x")?(a(),c(u,{key:1},[o("div",{class:"opt-btn",onClick:e=>n(s,"upscale_2x")}," 高清2x ",8,qo),o("div",{class:"opt-btn",onClick:e=>n(s,"upscale_4x")}," 高清4x ",8,Fo)],64)):i("",!0),(Z=s==null?void 0:s.able_actions)!=null&&Z.includes("upscale_subtle")?(a(),c(u,{key:2},[o("div",{class:"opt-btn",onClick:e=>n(s,"upscale_subtle")}," 弱变化 ",8,$o),o("div",{class:"opt-btn",onClick:e=>n(s,"upscale_creative")}," 强变化 ",8,st)],64)):i("",!0)])]),(G=s==null?void 0:s.able_actions)!=null&&G.includes("pan_down")?(a(),c("div",ot,[tt,o("div",et,[o("div",{class:"opt-btn",onClick:e=>n(s,"pan_left")}," ⬅️ ",8,at),o("div",{class:"opt-btn",onClick:e=>n(s,"pan_right")}," ➡️ ",8,nt),o("div",{class:"opt-btn",onClick:e=>n(s,"pan_up")}," ⬆️ ",8,lt),o("div",{class:"opt-btn",onClick:e=>n(s,"pan_down")}," ⬇️ ",8,ct)])])):i("",!0)],64)):i("",!0)])):i("",!0),o("div",rt,[o("span",it,h(s.create_time),1),d(S,null,{default:p(()=>[P(h(r(Is)[s.type]),1)]),_:2},1024)])])}),128))])])):(a(),c("div",At,[d(os,null,{icon:p(()=>[d(ss,{class:"w-[150px] dark:opacity-60",src:r(Qs)},null,8,["src"])]),title:p(()=>[dt]),"sub-title":p(()=>[pt]),_:1})]))]),_:1},512),o("div",gt,[d(ts,{modelValue:r(k),"onUpdate:modelValue":l[1]||(l[1]=s=>M(k)?k.value=s:null),background:"",onChange:q},null,8,["modelValue"])])]),r(m)?(a(),_(Es,{key:0,ref_key:"shareRef",ref:E,onClose:l[2]||(l[2]=s=>m.value=!1),onSuccess:l[3]||(l[3]=s=>r(B).push(s))},null,512)):i("",!0),r(w)?(a(),_(Bs,{key:1,ref_key:"imageEditorRef",ref:z,"draw-func":n,onSuccess:l[4]||(l[4]=s=>w.value=!1),onClose:l[5]||(l[5]=s=>w.value=!1)},null,512)):i("",!0)],64)}}});const ue=Js(ut,[["__scopeId","data-v-2fa59074"]]);export{ue as default};
