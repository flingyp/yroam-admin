import{B as h,z as e,aP as Q,A,M as V,bb as X,bc as Z,a as T,D as ee,E as W,I as L,R as k,S as te,bd as re,aA as oe,p as i,be as ne,bf as se,e as E,f as I,g,w as m,m as B,u as v,N as O,bg as G,bh as H,bi as Y,_ as ie}from"./index.ac5665fb.js";function J(n,c="default",l=[]){const{children:a}=n;if(a!==null&&typeof a=="object"&&!Array.isArray(a)){const p=a[c];if(typeof p=="function")return p()}return l}const q="DESCRIPTION_ITEM_FLAG";function le(n){return typeof n=="object"&&n&&!Array.isArray(n)?n.type&&n.type[q]:!1}const ae=h([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),Q("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[h("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),A("left-label-placement",[e("descriptions-table-content",[h("> *",{verticalAlign:"top"})])]),A("left-label-align",[h("th",{textAlign:"left"})]),A("center-label-align",[h("th",{textAlign:"center"})]),A("right-label-align",[h("th",{textAlign:"right"})]),A("bordered",[e("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[e("descriptions-table",[e("descriptions-table-row",[h("&:not(:last-child)",[e("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),e("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[h("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-content",[h("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),e("descriptions-header",`
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
 `,[V("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),V("label",`
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
 `))]),de=Object.assign(Object.assign({},W.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),K=T({name:"Descriptions",props:de,setup(n){const{mergedClsPrefixRef:c,inlineThemeDisabled:l}=ee(n),a=W("Descriptions","-descriptions",ae,se,n,c),p=L(()=>{const{size:r,bordered:d}=n,{common:{cubicBezierEaseInOut:b},self:{titleTextColor:o,thColor:D,thColorModal:x,thColorPopover:$,thTextColor:P,thFontWeight:M,tdTextColor:F,tdColor:t,tdColorModal:w,tdColorPopover:R,borderColor:u,borderColorModal:f,borderColorPopover:z,borderRadius:S,lineHeight:y,[k("fontSize",r)]:_,[k(d?"thPaddingBordered":"thPadding",r)]:C,[k(d?"tdPaddingBordered":"tdPadding",r)]:j}}=a.value;return{"--n-title-text-color":o,"--n-th-padding":C,"--n-td-padding":j,"--n-font-size":_,"--n-bezier":b,"--n-th-font-weight":M,"--n-line-height":y,"--n-th-text-color":P,"--n-td-text-color":F,"--n-th-color":D,"--n-th-color-modal":x,"--n-th-color-popover":$,"--n-td-color":t,"--n-td-color-modal":w,"--n-td-color-popover":R,"--n-border-radius":S,"--n-border-color":u,"--n-border-color-modal":f,"--n-border-color-popover":z}}),s=l?te("descriptions",L(()=>{let r="";const{size:d,bordered:b}=n;return b&&(r+="a"),r+=d[0],r}),p,n):void 0;return{mergedClsPrefix:c,cssVars:l?void 0:p,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender,compitableColumn:re(n,["columns","column"]),inlineThemeDisabled:l}},render(){const n=this.$slots.default,c=n?oe(n()):[];c.length;const{compitableColumn:l,labelPlacement:a,labelAlign:p,size:s,bordered:r,title:d,cssVars:b,mergedClsPrefix:o,separator:D,onRender:x}=this;x==null||x();const $=c.filter(t=>le(t)),P={span:0,row:[],secondRow:[],rows:[]},F=$.reduce((t,w,R)=>{const u=w.props||{},f=$.length-1===R,z=["label"in u?u.label:J(w,"label")],S=[J(w)],y=u.span||1,_=t.span;t.span+=y;const C=u.labelStyle||u["label-style"]||this.labelStyle,j=u.contentStyle||u["content-style"]||this.contentStyle;if(a==="left")r?t.row.push(i("th",{class:`${o}-descriptions-table-header`,colspan:1,style:C},z),i("td",{class:`${o}-descriptions-table-content`,colspan:f?(l-_)*2+1:y*2-1,style:j},S)):t.row.push(i("td",{class:`${o}-descriptions-table-content`,colspan:f?(l-_)*2:y*2},i("span",{class:`${o}-descriptions-table-content__label`,style:C},[...z,D&&i("span",{class:`${o}-descriptions-separator`},D)]),i("span",{class:`${o}-descriptions-table-content__content`,style:j},S)));else{const N=f?(l-_)*2:y*2;t.row.push(i("th",{class:`${o}-descriptions-table-header`,colspan:N,style:C},z)),t.secondRow.push(i("td",{class:`${o}-descriptions-table-content`,colspan:N,style:j},S))}return(t.span>=l||f)&&(t.span=0,t.row.length&&(t.rows.push(t.row),t.row=[]),a!=="left"&&t.secondRow.length&&(t.rows.push(t.secondRow),t.secondRow=[])),t},P).rows.map(t=>i("tr",{class:`${o}-descriptions-table-row`},t));return i("div",{style:b,class:[`${o}-descriptions`,this.themeClass,`${o}-descriptions--${a}-label-placement`,`${o}-descriptions--${p}-label-align`,`${o}-descriptions--${s}-size`,r&&`${o}-descriptions--bordered`]},d||this.$slots.header?i("div",{class:`${o}-descriptions-header`},d||ne(this,"header")):null,i("div",{class:`${o}-descriptions-table-wrapper`},i("table",{class:`${o}-descriptions-table`},i("tbody",null,F))))}}),ce={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},U=T({name:"DescriptionsItem",[q]:!0,props:ce,render(){return null}}),pe="yroam-admin",be="0.9.0",ue={serve:"vite",build:"vite build",preview:"vite preview",prepare:"husky install",commit:"git-cz",lint:"eslint ./**/*.{js,jsx,ts,tsx,vue} --fix","release:major":"standard-version --release-as major","release:minor":"standard-version --release-as minor","release:patch":"standard-version --release-as patch","release:premajor":"standard-version --release-as premajor","release:preminor":"standard-version --release-as preminor","release:prepatch":"standard-version --release-as prepatch"},he={"@flypeng/tool":"^2.0.1","@vueuse/core":"^9.4.0",axios:"^1.1.3",colord:"^2.9.3",lodash:"^4.17.21",mockjs:"^1.1.0","naive-ui":"^2.33.5",nprogress:"^0.2.0",pinia:"^2.0.23",vue:"^3.2.37","vue-router":"4"},ge={"@commitlint/cli":"^17.1.2","@commitlint/config-conventional":"^17.1.0","@types/lodash":"^4.14.186","@types/mockjs":"^1.0.7","@types/nprogress":"^0.2.0","@typescript-eslint/eslint-plugin":"^5.40.1","@typescript-eslint/parser":"^5.40.1","@vicons/antd":"^0.12.0","@vicons/ionicons5":"^0.12.0","@vicons/material":"^0.12.0","@vicons/utils":"^0.1.4","@vitejs/plugin-vue":"^3.1.0",commitizen:"^4.2.5","cz-conventional-changelog":"^3.3.0","cz-customizable":"^7.0.0",eslint:"^8.24.1","eslint-config-airbnb-base":"^15.0.0","eslint-config-prettier":"^8.5.0","eslint-plugin-import":"^2.26.0","eslint-plugin-n":"^15.0.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-promise":"^6.0.0","eslint-plugin-vue":"^9.6.0",husky:"^8.0.0","lint-staged":"^13.0.3",prettier:"^2.7.1",sass:"^1.55.0","standard-version":"^9.5.0",typescript:"^4.8.4",vite:"^3.1.0","vite-plugin-mock":"^2.9.6","vite-plugin-svg-icons":"^2.0.1","vue-tsc":"^1.0.9"},me={commitizen:{path:"node_modules/cz-customizable"}},ve={name:pe,version:be,scripts:ue,dependencies:he,devDependencies:ge,"lint-staged":{"*.{js,jsx,ts,tsx,vue}":["prettier --write","eslint --fix -c .eslintrc.js"]},config:me},fe=T({__name:"SystemAbout",setup(n){const{dependencies:c,devDependencies:l}=ve,a=[],p=[];return Object.keys(c).forEach(s=>{const r={name:"",version:""};r.name=s,r.version=c[s],a.push(r)}),Object.keys(l).forEach(s=>{const r={name:"",version:""};r.name=s,r.version=l[s],p.push(r)}),(s,r)=>(E(),I("div",null,[g(v(O),{title:"YRoam Admin",bordered:"",hoverable:""},{default:m(()=>[B(" YRoam Admin \u662F\u4E00\u6B3E\u57FA\u4E8EVue3 + TypeScript + NaiveUI\u7B49\u6280\u672F\u6808\u642D\u5EFA\u7684\u540E\u53F0\u7CFB\u7EDF ")]),_:1}),g(v(O),{title:"\u751F\u6210\u73AF\u5883\u76F8\u5173\u4F9D\u8D56",bordered:"",hoverable:""},{default:m(()=>[g(v(K),{"label-placement":"left",bordered:""},{default:m(()=>[(E(),I(G,null,H(a,(d,b)=>g(v(U),{key:b,label:d.name},{default:m(()=>[B(Y(d.version),1)]),_:2},1032,["label"])),64))]),_:1})]),_:1}),g(v(O),{title:"\u5F00\u53D1\u73AF\u5883\u76F8\u5173\u4F9D\u8D56",bordered:"",hoverable:""},{default:m(()=>[g(v(K),{"label-placement":"left",bordered:""},{default:m(()=>[(E(),I(G,null,H(p,(d,b)=>g(v(U),{key:b,label:d.name},{default:m(()=>[B(Y(d.version),1)]),_:2},1032,["label"])),64))]),_:1})]),_:1})]))}});const xe=ie(fe,[["__scopeId","data-v-04422950"]]);export{xe as default};
