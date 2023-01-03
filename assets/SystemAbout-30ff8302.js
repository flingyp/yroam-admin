import{E as u,C as e,aT as Q,D as $,R as L,bf as X,bg as Z,a as M,H as ee,I as K,bh as te,M as F,V as I,W as oe,bi as re,aG as ne,x as i,bj as se,e as O,f as T,g as h,w as m,p as B,l as v,q as E,F as q,j as G,k as H,_ as ie}from"./index-dc421378.js";function W(n,d="default",l=[]){const{children:a}=n;if(a!==null&&typeof a=="object"&&!Array.isArray(a)){const p=a[d];if(typeof p=="function")return p()}return l}const U="DESCRIPTION_ITEM_FLAG";function le(n){return typeof n=="object"&&n&&!Array.isArray(n)?n.type&&n.type[U]:!1}const ae=u([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),Q("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[u("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),$("left-label-placement",[e("descriptions-table-content",[u("> *",{verticalAlign:"top"})])]),$("left-label-align",[u("th",{textAlign:"left"})]),$("center-label-align",[u("th",{textAlign:"center"})]),$("right-label-align",[u("th",{textAlign:"right"})]),$("bordered",[e("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[e("descriptions-table",[e("descriptions-table-row",[u("&:not(:last-child)",[e("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),e("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[u("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-content",[u("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),e("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),e("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[e("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[e("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[e("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),e("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[L("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),L("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),X(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Z(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),ce=Object.assign(Object.assign({},K.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),Y=M({name:"Descriptions",props:ce,setup(n){const{mergedClsPrefixRef:d,inlineThemeDisabled:l}=ee(n),a=K("Descriptions","-descriptions",ae,te,n,d),p=F(()=>{const{size:o,bordered:c}=n,{common:{cubicBezierEaseInOut:b},self:{titleTextColor:r,thColor:k,thColorModal:x,thColorPopover:A,thTextColor:P,thFontWeight:V,tdTextColor:R,tdColor:t,tdColorModal:w,tdColorPopover:D,borderColor:g,borderColorModal:f,borderColorPopover:z,borderRadius:_,lineHeight:y,[I("fontSize",o)]:S,[I(c?"thPaddingBordered":"thPadding",o)]:C,[I(c?"tdPaddingBordered":"tdPadding",o)]:j}}=a.value;return{"--n-title-text-color":r,"--n-th-padding":C,"--n-td-padding":j,"--n-font-size":S,"--n-bezier":b,"--n-th-font-weight":V,"--n-line-height":y,"--n-th-text-color":P,"--n-td-text-color":R,"--n-th-color":k,"--n-th-color-modal":x,"--n-th-color-popover":A,"--n-td-color":t,"--n-td-color-modal":w,"--n-td-color-popover":D,"--n-border-radius":_,"--n-border-color":g,"--n-border-color-modal":f,"--n-border-color-popover":z}}),s=l?oe("descriptions",F(()=>{let o="";const{size:c,bordered:b}=n;return b&&(o+="a"),o+=c[0],o}),p,n):void 0;return{mergedClsPrefix:d,cssVars:l?void 0:p,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender,compitableColumn:re(n,["columns","column"]),inlineThemeDisabled:l}},render(){const n=this.$slots.default,d=n?ne(n()):[];d.length;const{compitableColumn:l,labelPlacement:a,labelAlign:p,size:s,bordered:o,title:c,cssVars:b,mergedClsPrefix:r,separator:k,onRender:x}=this;x==null||x();const A=d.filter(t=>le(t)),P={span:0,row:[],secondRow:[],rows:[]},R=A.reduce((t,w,D)=>{const g=w.props||{},f=A.length-1===D,z=["label"in g?g.label:W(w,"label")],_=[W(w)],y=g.span||1,S=t.span;t.span+=y;const C=g.labelStyle||g["label-style"]||this.labelStyle,j=g.contentStyle||g["content-style"]||this.contentStyle;if(a==="left")o?t.row.push(i("th",{class:`${r}-descriptions-table-header`,colspan:1,style:C},z),i("td",{class:`${r}-descriptions-table-content`,colspan:f?(l-S)*2+1:y*2-1,style:j},_)):t.row.push(i("td",{class:`${r}-descriptions-table-content`,colspan:f?(l-S)*2:y*2},i("span",{class:`${r}-descriptions-table-content__label`,style:C},[...z,k&&i("span",{class:`${r}-descriptions-separator`},k)]),i("span",{class:`${r}-descriptions-table-content__content`,style:j},_)));else{const N=f?(l-S)*2:y*2;t.row.push(i("th",{class:`${r}-descriptions-table-header`,colspan:N,style:C},z)),t.secondRow.push(i("td",{class:`${r}-descriptions-table-content`,colspan:N,style:j},_))}return(t.span>=l||f)&&(t.span=0,t.row.length&&(t.rows.push(t.row),t.row=[]),a!=="left"&&t.secondRow.length&&(t.rows.push(t.secondRow),t.secondRow=[])),t},P).rows.map(t=>i("tr",{class:`${r}-descriptions-table-row`},t));return i("div",{style:b,class:[`${r}-descriptions`,this.themeClass,`${r}-descriptions--${a}-label-placement`,`${r}-descriptions--${p}-label-align`,`${r}-descriptions--${s}-size`,o&&`${r}-descriptions--bordered`]},c||this.$slots.header?i("div",{class:`${r}-descriptions-header`},c||se(this,"header")):null,i("div",{class:`${r}-descriptions-table-wrapper`},i("table",{class:`${r}-descriptions-table`},i("tbody",null,R))))}}),de={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},J=M({name:"DescriptionsItem",[U]:!0,props:de,render(){return null}}),pe="yroam-admin",be="1.0.1",ge={serve:"vite",build:"vite build",preview:"vite preview",prepare:"husky install",commit:"git-cz",lint:"eslint ./**/*.{js,jsx,ts,tsx,vue} --fix",release:"esno scripts/release.ts"},ue={"@flypeng/tool":"^4.2.0","@icon-park/vue-next":"^1.4.2","@vueuse/core":"^9.8.2",axios:"^1.2.1",colord:"^2.9.3",echarts:"^5.4.1",mockjs:"^1.1.0","naive-ui":"^2.34.2",nprogress:"^0.2.0",pinia:"^2.0.28",vue:"^3.2.45","vue-router":"^4.1.6"},he={"@commitlint/cli":"^17.3.0","@commitlint/config-conventional":"^17.3.0","@types/inquirer":"^9.0.3","@types/lodash":"^4.14.191","@types/mockjs":"^1.0.7","@types/nprogress":"^0.2.0","@typescript-eslint/eslint-plugin":"^5.47.0","@typescript-eslint/parser":"^5.47.0","@vitejs/plugin-vue":"^4.0.0","@vue-macros/volar":"^0.5.6",chalk:"^5.2.0",commitizen:"^4.2.6","cz-conventional-changelog":"^3.3.0","cz-customizable":"^7.0.0",eslint:"^8.30.0","eslint-config-airbnb-base":"^15.0.0","eslint-config-prettier":"^8.5.0","eslint-plugin-import":"^2.26.0","eslint-plugin-n":"^15.6.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-promise":"^6.1.1","eslint-plugin-vue":"^9.8.0",esno:"^0.16.3",husky:"^8.0.2",inquirer:"^9.1.4","lint-staged":"^13.1.0",prettier:"^2.8.1",sass:"^1.57.1","standard-version":"^9.5.0",typescript:"^4.9.4","unplugin-vue-define-options":"^1.1.1",vite:"^4.0.3","vite-plugin-clear-console":"^0.2.2","vite-plugin-mock":"^2.9.6","vite-plugin-svg-icons":"^2.0.1","vue-tsc":"^1.0.16"},me={commitizen:{path:"node_modules/cz-customizable"}},ve={name:pe,version:be,scripts:ge,dependencies:ue,devDependencies:he,"lint-staged":{"*.{js,jsx,ts,tsx,vue}":["prettier --write","eslint --fix -c .eslintrc.js"]},config:me},fe=M({__name:"SystemAbout",setup(n){const{dependencies:d,devDependencies:l}=ve,a=[],p=[];return Object.keys(d).forEach(s=>{const o={name:"",version:""};o.name=s,o.version=d[s],a.push(o)}),Object.keys(l).forEach(s=>{const o={name:"",version:""};o.name=s,o.version=l[s],p.push(o)}),(s,o)=>(O(),T("div",null,[h(v(E),{title:"YRoam Admin",bordered:"",hoverable:""},{default:m(()=>[B(" YRoam Admin 是一款基于Vue3 + TypeScript + NaiveUI等技术栈搭建的后台系统 ")]),_:1}),h(v(E),{title:"生成环境相关依赖",bordered:"",hoverable:""},{default:m(()=>[h(v(Y),{"label-placement":"left",bordered:""},{default:m(()=>[(O(),T(q,null,G(a,(c,b)=>h(v(J),{key:b,label:c.name},{default:m(()=>[B(H(c.version),1)]),_:2},1032,["label"])),64))]),_:1})]),_:1}),h(v(E),{title:"开发环境相关依赖",bordered:"",hoverable:""},{default:m(()=>[h(v(Y),{"label-placement":"left",bordered:""},{default:m(()=>[(O(),T(q,null,G(p,(c,b)=>h(v(J),{key:b,label:c.name},{default:m(()=>[B(H(c.version),1)]),_:2},1032,["label"])),64))]),_:1})]),_:1})]))}});const xe=ie(fe,[["__scopeId","data-v-04422950"]]);export{xe as default};
