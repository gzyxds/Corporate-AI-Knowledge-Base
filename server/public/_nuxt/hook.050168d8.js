var x=(i=>(i[i.DOC=1]="DOC",i[i.CVS=3]="CVS",i[i.QASplit=2]="QASplit",i[i.WEB_PAGE=4]="WEB_PAGE",i))(x||{});const C=(i,e)=>new Promise((s,d)=>{e.findIndex(({name:S,lastModified:a,size:n})=>S===i.name&&n===i.size&&a==i.lastModified)==-1?s(""):d("请勿选择相同文件！")});export{x as ImportTypeEnum,C as isSameFile};
