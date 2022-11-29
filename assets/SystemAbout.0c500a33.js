import{B as g,z as e,aP as Q,A as D,M as V,bb as X,bc as Z,a as T,D as ee,E as U,I as L,R as te,bd as oe,az as re,q as i,be as ne,bf as se,V as R,c as E,e as I,f as h,w as m,m as B,g as v,N as O,bg as q,bh as G,bi as H,_ as ie}from"./index.f6be212b.js";function Y(n,d="default",l=[]){const{children:a}=n;if(a!==null&&typeof a=="object"&&!Array.isArray(a)){const p=a[d];if(typeof p=="function")return p()}return l}const W="DESCRIPTION_ITEM_FLAG";function le(n){return typeof n=="object"&&n&&!Array.isArray(n)?n.type&&n.type[W]:!1}const ae=g([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),Q("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[g("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),D("left-label-placement",[e("descriptions-table-content",[g("> *",{verticalAlign:"top"})])]),D("left-label-align",[g("th",{textAlign:"left"})]),D("center-label-align",[g("th",{textAlign:"center"})]),D("right-label-align",[g("th",{textAlign:"right"})]),D("bordered",[e("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[e("descriptions-table",[e("descriptions-table-row",[g("&:not(:last-child)",[e("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),e("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-content",[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),e("descriptions-header",`
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
 `))]),ce=Object.assign(Object.assign({},U.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),J=T({name:"Descriptions",props:ce,setup(n){const{mergedClsPrefixRef:d,inlineThemeDisabled:l}=ee(n),a=U("Descriptions","-descriptions",ae,se,n,d),p=L(()=>{const{size:o,bordered:c}=n,{common:{cubicBezierEaseInOut:b},self:{titleTextColor:r,thColor:$,thColorModal:x,thColorPopover:j,thTextColor:k,thFontWeight:M,tdTextColor:P,tdColor:t,tdColorModal:w,tdColorPopover:F,borderColor:u,borderColorModal:f,borderColorPopover:z,borderRadius:_,lineHeight:y,[R("fontSize",o)]:S,[R(c?"thPaddingBordered":"thPadding",o)]:C,[R(c?"tdPaddingBordered":"tdPadding",o)]:A}}=a.value;return{"--n-title-text-color":r,"--n-th-padding":C,"--n-td-padding":A,"--n-font-size":S,"--n-bezier":b,"--n-th-font-weight":M,"--n-line-height":y,"--n-th-text-color":k,"--n-td-text-color":P,"--n-th-color":$,"--n-th-color-modal":x,"--n-th-color-popover":j,"--n-td-color":t,"--n-td-color-modal":w,"--n-td-color-popover":F,"--n-border-radius":_,"--n-border-color":u,"--n-border-color-modal":f,"--n-border-color-popover":z}}),s=l?te("descriptions",L(()=>{let o="";const{size:c,bordered:b}=n;return b&&(o+="a"),o+=c[0],o}),p,n):void 0;return{mergedClsPrefix:d,cssVars:l?void 0:p,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender,compitableColumn:oe(n,["columns","column"]),inlineThemeDisabled:l}},render(){const n=this.$slots.default,d=n?re(n()):[];d.length;const{compitableColumn:l,labelPlacement:a,labelAlign:p,size:s,bordered:o,title:c,cssVars:b,mergedClsPrefix:r,separator:$,onRender:x}=this;x==null||x();const j=d.filter(t=>le(t)),k={span:0,row:[],secondRow:[],rows:[]},P=j.reduce((t,w,F)=>{const u=w.props||{},f=j.length-1===F,z=["label"in u?u.label:Y(w,"label")],_=[Y(w)],y=u.span||1,S=t.span;t.span+=y;const C=u.labelStyle||u["label-style"]||this.labelStyle,A=u.contentStyle||u["content-style"]||this.contentStyle;if(a==="left")o?t.row.push(i("th",{class:`${r}-descriptions-table-header`,colspan:1,style:C},z),i("td",{class:`${r}-descriptions-table-content`,colspan:f?(l-S)*2+1:y*2-1,style:A},_)):t.row.push(i("td",{class:`${r}-descriptions-table-content`,colspan:f?(l-S)*2:y*2},i("span",{class:`${r}-descriptions-table-content__label`,style:C},[...z,$&&i("span",{class:`${r}-descriptions-separator`},$)]),i("span",{class:`${r}-descriptions-table-content__content`,style:A},_)));else{const N=f?(l-S)*2:y*2;t.row.push(i("th",{class:`${r}-descriptions-table-header`,colspan:N,style:C},z)),t.secondRow.push(i("td",{class:`${r}-descriptions-table-content`,colspan:N,style:A},_))}return(t.span>=l||f)&&(t.span=0,t.row.length&&(t.rows.push(t.row),t.row=[]),a!=="left"&&t.secondRow.length&&(t.rows.push(t.secondRow),t.secondRow=[])),t},k).rows.map(t=>i("tr",{class:`${r}-descriptions-table-row`},t));return i("div",{style:b,class:[`${r}-descriptions`,this.themeClass,`${r}-descriptions--${a}-label-placement`,`${r}-descriptions--${p}-label-align`,`${r}-descriptions--${s}-size`,o&&`${r}-descriptions--bordered`]},c||this.$slots.header?i("div",{class:`${r}-descriptions-header`},c||ne(this,"header")):null,i("div",{class:`${r}-descriptions-table-wrapper`},i("table",{class:`${r}-descriptions-table`},i("tbody",null,P))))}}),de={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},K=T({name:"DescriptionsItem",[W]:!0,props:de,render(){return null}}),pe="yroam-admin",be="1.0.0-0",ue={serve:"vite",build:"vite build",preview:"vite preview",prepare:"husky install",commit:"git-cz",lint:"eslint ./**/*.{js,jsx,ts,tsx,vue} --fix",release:"esno scripts/release.ts"},ge={"@flypeng/tool":"^2.2.0","@icon-park/vue-next":"^1.4.2","@vueuse/core":"^9.4.0",axios:"^1.1.3",colord:"^2.9.3",echarts:"^5.4.0",mockjs:"^1.1.0","naive-ui":"^2.33.5",nprogress:"^0.2.0",pinia:"^2.0.23",vue:"^3.2.37","vue-router":"4"},he={"@commitlint/cli":"^17.1.2","@commitlint/config-conventional":"^17.1.0","@types/inquirer":"^9.0.3","@types/lodash":"^4.14.186","@types/mockjs":"^1.0.7","@types/nprogress":"^0.2.0","@typescript-eslint/eslint-plugin":"^5.40.1","@typescript-eslint/parser":"^5.40.1","@vitejs/plugin-vue":"^3.1.0",chalk:"^5.1.2",commitizen:"^4.2.5","cz-conventional-changelog":"^3.3.0","cz-customizable":"^7.0.0",eslint:"^8.24.1","eslint-config-airbnb-base":"^15.0.0","eslint-config-prettier":"^8.5.0","eslint-plugin-import":"^2.26.0","eslint-plugin-n":"^15.0.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-promise":"^6.0.0","eslint-plugin-vue":"^9.6.0",esno:"^0.16.3",husky:"^8.0.0",inquirer:"^9.1.4","lint-staged":"^13.0.3",prettier:"^2.7.1",sass:"^1.55.0","standard-version":"^9.5.0",typescript:"^4.8.4",vite:"^3.1.0","vite-plugin-clear-console":"^0.2.1","vite-plugin-mock":"^2.9.6","vite-plugin-svg-icons":"^2.0.1","vue-tsc":"^1.0.9"},me={commitizen:{path:"node_modules/cz-customizable"}},ve={name:pe,version:be,scripts:ue,dependencies:ge,devDependencies:he,"lint-staged":{"*.{js,jsx,ts,tsx,vue}":["prettier --write","eslint --fix -c .eslintrc.js"]},config:me},fe=T({__name:"SystemAbout",setup(n){const{dependencies:d,devDependencies:l}=ve,a=[],p=[];return Object.keys(d).forEach(s=>{const o={name:"",version:""};o.name=s,o.version=d[s],a.push(o)}),Object.keys(l).forEach(s=>{const o={name:"",version:""};o.name=s,o.version=l[s],p.push(o)}),(s,o)=>(E(),I("div",null,[h(v(O),{title:"YRoam Admin",bordered:"",hoverable:""},{default:m(()=>[B(" YRoam Admin \u662F\u4E00\u6B3E\u57FA\u4E8EVue3 + TypeScript + NaiveUI\u7B49\u6280\u672F\u6808\u642D\u5EFA\u7684\u540E\u53F0\u7CFB\u7EDF ")]),_:1}),h(v(O),{title:"\u751F\u6210\u73AF\u5883\u76F8\u5173\u4F9D\u8D56",bordered:"",hoverable:""},{default:m(()=>[h(v(J),{"label-placement":"left",bordered:""},{default:m(()=>[(E(),I(q,null,G(a,(c,b)=>h(v(K),{key:b,label:c.name},{default:m(()=>[B(H(c.version),1)]),_:2},1032,["label"])),64))]),_:1})]),_:1}),h(v(O),{title:"\u5F00\u53D1\u73AF\u5883\u76F8\u5173\u4F9D\u8D56",bordered:"",hoverable:""},{default:m(()=>[h(v(J),{"label-placement":"left",bordered:""},{default:m(()=>[(E(),I(q,null,G(p,(c,b)=>h(v(K),{key:b,label:c.name},{default:m(()=>[B(H(c.version),1)]),_:2},1032,["label"])),64))]),_:1})]),_:1})]))}});const xe=ie(fe,[["__scopeId","data-v-04422950"]]);export{xe as default};
