import{i as ne,v as Be,x as Ee,y as De,z as I,A as z,B as G,C as je,a as Me,D as Ie,E as ue,r as Q,F as he,p as A,G as Ve,H as xe,I as P,J as me,K as Le,L as He,M as oe,O as fe,P as qe,Q as Ue,o as Ye,R as W,S as Ke,T as Je,U as Ze,V as Re}from"./index.ac5665fb.js";function Ge(r,e,t){var n;const i=ne(r,null);if(i===null)return;const s=(n=Be())===null||n===void 0?void 0:n.proxy;Ee(t,a),a(t.value),De(()=>{a(void 0,t.value)});function a(l,d){const m=i[e];d!==void 0&&o(m,d),l!==void 0&&f(m,l)}function o(l,d){l[d]||(l[d]=[]),l[d].splice(l[d].findIndex(m=>m===s),1)}function f(l,d){l[d]||(l[d]=[]),~l[d].findIndex(m=>m===s)||l[d].push(s)}}const Qe=I("form",[z("inline",`
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `,[I("form-item",{width:"auto",marginRight:"18px"},[G("&:last-child",{marginRight:0})])])]),re=je("n-form"),ze=je("n-form-item-insts");var Xe=globalThis&&globalThis.__awaiter||function(r,e,t,n){function i(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function o(d){try{l(n.next(d))}catch(m){a(m)}}function f(d){try{l(n.throw(d))}catch(m){a(m)}}function l(d){d.done?s(d.value):i(d.value).then(o,f)}l((n=n.apply(r,e||[])).next())})};const et=Object.assign(Object.assign({},ue.props),{inline:Boolean,labelWidth:[Number,String],labelAlign:String,labelPlacement:{type:String,default:"top"},model:{type:Object,default:()=>{}},rules:Object,disabled:Boolean,size:String,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:!0},onSubmit:{type:Function,default:r=>r.preventDefault()},showLabel:{type:Boolean,default:void 0},validateMessages:Object}),Ct=Me({name:"Form",props:et,setup(r){const{mergedClsPrefixRef:e}=Ie(r);ue("Form","-form",Qe,Ve,r,e);const t={},n=Q(void 0),i=f=>{const l=n.value;(l===void 0||f>=l)&&(n.value=f)};function s(f,l=()=>!0){return Xe(this,void 0,void 0,function*(){return yield new Promise((d,m)=>{const v=[];for(const c of xe(t)){const w=t[c];for(const g of w)g.path&&v.push(g.internalValidate(null,l))}Promise.all(v).then(c=>{if(c.some(w=>!w.valid)){const w=c.filter(g=>g.errors).map(g=>g.errors);f&&f(w),m(w)}else f&&f(),d()})})})}function a(){for(const f of xe(t)){const l=t[f];for(const d of l)d.restoreValidation()}}return he(re,{props:r,maxChildLabelWidthRef:n,deriveMaxChildLabelWidth:i}),he(ze,{formItems:t}),Object.assign({validate:s,restoreValidation:a},{mergedClsPrefix:e})},render(){const{mergedClsPrefix:r}=this;return A("form",{class:[`${r}-form`,this.inline&&`${r}-form--inline`],onSubmit:this.onSubmit},this.$slots)}});function H(){return H=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},H.apply(this,arguments)}function tt(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,te(r,e)}function pe(r){return pe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},pe(r)}function te(r,e){return te=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},te(r,e)}function nt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function le(r,e,t){return nt()?le=Reflect.construct.bind():le=function(i,s,a){var o=[null];o.push.apply(o,s);var f=Function.bind.apply(i,o),l=new f;return a&&te(l,a.prototype),l},le.apply(null,arguments)}function rt(r){return Function.toString.call(r).indexOf("[native code]")!==-1}function ve(r){var e=typeof Map=="function"?new Map:void 0;return ve=function(n){if(n===null||!rt(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,i)}function i(){return le(n,arguments,pe(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),te(i,n)},ve(r)}var it=/%[sdj%]/g,at=function(){};typeof process<"u"&&process.env;function be(r){if(!r||!r.length)return null;var e={};return r.forEach(function(t){var n=t.field;e[n]=e[n]||[],e[n].push(t)}),e}function E(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var i=0,s=t.length;if(typeof r=="function")return r.apply(null,t);if(typeof r=="string"){var a=r.replace(it,function(o){if(o==="%%")return"%";if(i>=s)return o;switch(o){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch{return"[Circular]"}break;default:return o}});return a}return r}function st(r){return r==="string"||r==="url"||r==="hex"||r==="email"||r==="date"||r==="pattern"}function O(r,e){return!!(r==null||e==="array"&&Array.isArray(r)&&!r.length||st(e)&&typeof r=="string"&&!r)}function ot(r,e,t){var n=[],i=0,s=r.length;function a(o){n.push.apply(n,o||[]),i++,i===s&&t(n)}r.forEach(function(o){e(o,a)})}function ke(r,e,t){var n=0,i=r.length;function s(a){if(a&&a.length){t(a);return}var o=n;n=n+1,o<i?e(r[o],s):t([])}s([])}function ft(r){var e=[];return Object.keys(r).forEach(function(t){e.push.apply(e,r[t]||[])}),e}var Fe=function(r){tt(e,r);function e(t,n){var i;return i=r.call(this,"Async Validation Error")||this,i.errors=t,i.fields=n,i}return e}(ve(Error));function dt(r,e,t,n,i){if(e.first){var s=new Promise(function(v,c){var w=function(u){return n(u),u.length?c(new Fe(u,be(u))):v(i)},g=ft(r);ke(g,t,w)});return s.catch(function(v){return v}),s}var a=e.firstFields===!0?Object.keys(r):e.firstFields||[],o=Object.keys(r),f=o.length,l=0,d=[],m=new Promise(function(v,c){var w=function(y){if(d.push.apply(d,y),l++,l===f)return n(d),d.length?c(new Fe(d,be(d))):v(i)};o.length||(n(d),v(i)),o.forEach(function(g){var y=r[g];a.indexOf(g)!==-1?ke(y,t,w):ot(y,t,w)})});return m.catch(function(v){return v}),m}function lt(r){return!!(r&&r.message!==void 0)}function ut(r,e){for(var t=r,n=0;n<e.length;n++){if(t==null)return t;t=t[e[n]]}return t}function Oe(r,e){return function(t){var n;return r.fullFields?n=ut(e,r.fullFields):n=e[t.field||r.fullField],lt(t)?(t.field=t.field||r.fullField,t.fieldValue=n,t):{message:typeof t=="function"?t():t,fieldValue:n,field:t.field||r.fullField}}}function Pe(r,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];typeof n=="object"&&typeof r[t]=="object"?r[t]=H({},r[t],n):r[t]=n}}return r}var Ne=function(e,t,n,i,s,a){e.required&&(!n.hasOwnProperty(e.field)||O(t,a||e.type))&&i.push(E(s.messages.required,e.fullField))},ct=function(e,t,n,i,s){(/^\s+$/.test(t)||t==="")&&i.push(E(s.messages.whitespace,e.fullField))},de,mt=function(){if(de)return de;var r="[a-fA-F\\d:]",e=function(x){return x&&x.includeBoundaries?"(?:(?<=\\s|^)(?="+r+")|(?<="+r+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+n+":){7}(?:"+n+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+n+":){6}(?:"+t+"|:"+n+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+n+":){5}(?::"+t+"|(?::"+n+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+n+"){0,5}:"+t+"|(?::"+n+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp("(?:^"+t+"$)|(?:^"+i+"$)"),a=new RegExp("^"+t+"$"),o=new RegExp("^"+i+"$"),f=function(x){return x&&x.exact?s:new RegExp("(?:"+e(x)+t+e(x)+")|(?:"+e(x)+i+e(x)+")","g")};f.v4=function(h){return h&&h.exact?a:new RegExp(""+e(h)+t+e(h),"g")},f.v6=function(h){return h&&h.exact?o:new RegExp(""+e(h)+i+e(h),"g")};var l="(?:(?:[a-z]+:)?//)",d="(?:\\S+(?::\\S*)?@)?",m=f.v4().source,v=f.v6().source,c="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",w="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",g="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",y="(?::\\d{2,5})?",u='(?:[/?#][^\\s"]*)?',M="(?:"+l+"|www\\.)"+d+"(?:localhost|"+m+"|"+v+"|"+c+w+g+")"+y+u;return de=new RegExp("(?:^"+M+"$)","i"),de},Se={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},X={integer:function(e){return X.number(e)&&parseInt(e,10)===e},float:function(e){return X.number(e)&&!X.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!X.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(Se.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(mt())},hex:function(e){return typeof e=="string"&&!!e.match(Se.hex)}},gt=function(e,t,n,i,s){if(e.required&&t===void 0){Ne(e,t,n,i,s);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],o=e.type;a.indexOf(o)>-1?X[o](t)||i.push(E(s.messages.types[o],e.fullField,e.type)):o&&typeof t!==e.type&&i.push(E(s.messages.types[o],e.fullField,e.type))},ht=function(e,t,n,i,s){var a=typeof e.len=="number",o=typeof e.min=="number",f=typeof e.max=="number",l=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,d=t,m=null,v=typeof t=="number",c=typeof t=="string",w=Array.isArray(t);if(v?m="number":c?m="string":w&&(m="array"),!m)return!1;w&&(d=t.length),c&&(d=t.replace(l,"_").length),a?d!==e.len&&i.push(E(s.messages[m].len,e.fullField,e.len)):o&&!f&&d<e.min?i.push(E(s.messages[m].min,e.fullField,e.min)):f&&!o&&d>e.max?i.push(E(s.messages[m].max,e.fullField,e.max)):o&&f&&(d<e.min||d>e.max)&&i.push(E(s.messages[m].range,e.fullField,e.min,e.max))},Z="enum",pt=function(e,t,n,i,s){e[Z]=Array.isArray(e[Z])?e[Z]:[],e[Z].indexOf(t)===-1&&i.push(E(s.messages[Z],e.fullField,e[Z].join(", ")))},vt=function(e,t,n,i,s){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push(E(s.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(t)||i.push(E(s.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},p={required:Ne,whitespace:ct,type:gt,range:ht,enum:pt,pattern:vt},bt=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(O(t,"string")&&!e.required)return n();p.required(e,t,i,a,s,"string"),O(t,"string")||(p.type(e,t,i,a,s),p.range(e,t,i,a,s),p.pattern(e,t,i,a,s),e.whitespace===!0&&p.whitespace(e,t,i,a,s))}n(a)},yt=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(O(t)&&!e.required)return n();p.required(e,t,i,a,s),t!==void 0&&p.type(e,t,i,a,s)}n(a)},wt=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(t===""&&(t=void 0),O(t)&&!e.required)return n();p.required(e,t,i,a,s),t!==void 0&&(p.type(e,t,i,a,s),p.range(e,t,i,a,s))}n(a)},xt=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(O(t)&&!e.required)return n();p.required(e,t,i,a,s),t!==void 0&&p.type(e,t,i,a,s)}n(a)},qt=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(O(t)&&!e.required)return n();p.required(e,t,i,a,s),O(t)||p.type(e,t,i,a,s)}n(a)},Rt=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(O(t)&&!e.required)return n();p.required(e,t,i,a,s),t!==void 0&&(p.type(e,t,i,a,s),p.range(e,t,i,a,s))}n(a)},kt=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(O(t)&&!e.required)return n();p.required(e,t,i,a,s),t!==void 0&&(p.type(e,t,i,a,s),p.range(e,t,i,a,s))}n(a)},Ft=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(t==null&&!e.required)return n();p.required(e,t,i,a,s,"array"),t!=null&&(p.type(e,t,i,a,s),p.range(e,t,i,a,s))}n(a)},Ot=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(O(t)&&!e.required)return n();p.required(e,t,i,a,s),t!==void 0&&p.type(e,t,i,a,s)}n(a)},Pt="enum",St=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(O(t)&&!e.required)return n();p.required(e,t,i,a,s),t!==void 0&&p[Pt](e,t,i,a,s)}n(a)},_t=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(O(t,"string")&&!e.required)return n();p.required(e,t,i,a,s),O(t,"string")||p.pattern(e,t,i,a,s)}n(a)},At=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(O(t,"date")&&!e.required)return n();if(p.required(e,t,i,a,s),!O(t,"date")){var f;t instanceof Date?f=t:f=new Date(t),p.type(e,f,i,a,s),f&&p.range(e,f.getTime(),i,a,s)}}n(a)},$t=function(e,t,n,i,s){var a=[],o=Array.isArray(t)?"array":typeof t;p.required(e,t,i,a,s,o),n(a)},ge=function(e,t,n,i,s){var a=e.type,o=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(O(t,a)&&!e.required)return n();p.required(e,t,i,o,s,a),O(t,a)||p.type(e,t,i,o,s)}n(o)},Et=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(O(t)&&!e.required)return n();p.required(e,t,i,a,s)}n(a)},ee={string:bt,method:yt,number:wt,boolean:xt,regexp:qt,integer:Rt,float:kt,array:Ft,object:Ot,enum:St,pattern:_t,date:At,url:ge,hex:ge,email:ge,required:$t,any:Et};function ye(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var we=ye(),ie=function(){function r(t){this.rules=null,this._messages=we,this.define(t)}var e=r.prototype;return e.define=function(n){var i=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(s){var a=n[s];i.rules[s]=Array.isArray(a)?a:[a]})},e.messages=function(n){return n&&(this._messages=Pe(ye(),n)),this._messages},e.validate=function(n,i,s){var a=this;i===void 0&&(i={}),s===void 0&&(s=function(){});var o=n,f=i,l=s;if(typeof f=="function"&&(l=f,f={}),!this.rules||Object.keys(this.rules).length===0)return l&&l(null,o),Promise.resolve(o);function d(g){var y=[],u={};function M(x){if(Array.isArray(x)){var S;y=(S=y).concat.apply(S,x)}else y.push(x)}for(var h=0;h<g.length;h++)M(g[h]);y.length?(u=be(y),l(y,u)):l(null,o)}if(f.messages){var m=this.messages();m===we&&(m=ye()),Pe(m,f.messages),f.messages=m}else f.messages=this.messages();var v={},c=f.keys||Object.keys(this.rules);c.forEach(function(g){var y=a.rules[g],u=o[g];y.forEach(function(M){var h=M;typeof h.transform=="function"&&(o===n&&(o=H({},o)),u=o[g]=h.transform(u)),typeof h=="function"?h={validator:h}:h=H({},h),h.validator=a.getValidationMethod(h),h.validator&&(h.field=g,h.fullField=h.fullField||g,h.type=a.getType(h),v[g]=v[g]||[],v[g].push({rule:h,value:u,source:o,field:g}))})});var w={};return dt(v,f,function(g,y){var u=g.rule,M=(u.type==="object"||u.type==="array")&&(typeof u.fields=="object"||typeof u.defaultField=="object");M=M&&(u.required||!u.required&&g.value),u.field=g.field;function h(R,N){return H({},N,{fullField:u.fullField+"."+R,fullFields:u.fullFields?[].concat(u.fullFields,[R]):[R]})}function x(R){R===void 0&&(R=[]);var N=Array.isArray(R)?R:[R];!f.suppressWarning&&N.length&&r.warning("async-validator:",N),N.length&&u.message!==void 0&&(N=[].concat(u.message));var j=N.map(Oe(u,o));if(f.first&&j.length)return w[u.field]=1,y(j);if(!M)y(j);else{if(u.required&&!g.value)return u.message!==void 0?j=[].concat(u.message).map(Oe(u,o)):f.error&&(j=[f.error(u,E(f.messages.required,u.field))]),y(j);var C={};u.defaultField&&Object.keys(g.value).map(function(k){C[k]=u.defaultField}),C=H({},C,g.rule.fields);var T={};Object.keys(C).forEach(function(k){var q=C[k],_=Array.isArray(q)?q:[q];T[k]=_.map(h.bind(null,k))});var b=new r(T);b.messages(f.messages),g.rule.options&&(g.rule.options.messages=f.messages,g.rule.options.error=f.error),b.validate(g.value,g.rule.options||f,function(k){var q=[];j&&j.length&&q.push.apply(q,j),k&&k.length&&q.push.apply(q,k),y(q.length?q:null)})}}var S;if(u.asyncValidator)S=u.asyncValidator(u,g.value,x,g.source,f);else if(u.validator){try{S=u.validator(u,g.value,x,g.source,f)}catch(R){console.error==null||console.error(R),f.suppressValidatorError||setTimeout(function(){throw R},0),x(R.message)}S===!0?x():S===!1?x(typeof u.message=="function"?u.message(u.fullField||u.field):u.message||(u.fullField||u.field)+" fails"):S instanceof Array?x(S):S instanceof Error&&x(S.message)}S&&S.then&&S.then(function(){return x()},function(R){return x(R)})},function(g){d(g)},o)},e.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!ee.hasOwnProperty(n.type))throw new Error(E("Unknown rule type %s",n.type));return n.type||"string"},e.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var i=Object.keys(n),s=i.indexOf("message");return s!==-1&&i.splice(s,1),i.length===1&&i[0]==="required"?ee.required:ee[this.getType(n)]||void 0},r}();ie.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");ee[e]=t};ie.warning=at;ie.messages=we;ie.validators=ee;function jt(r){const e=ne(re,null);return{mergedSize:P(()=>r.size!==void 0?r.size:(e==null?void 0:e.props.size)!==void 0?e.props.size:"medium")}}function Mt(r){const e=ne(re,null),t=P(()=>{const{labelPlacement:c}=r;return c!==void 0?c:e!=null&&e.props.labelPlacement?e.props.labelPlacement:"top"}),n=P(()=>t.value==="left"&&(r.labelWidth==="auto"||(e==null?void 0:e.props.labelWidth)==="auto")),i=P(()=>{if(t.value==="top")return;const{labelWidth:c}=r;if(c!==void 0&&c!=="auto")return me(c);if(n.value){const w=e==null?void 0:e.maxChildLabelWidthRef.value;return w!==void 0?me(w):void 0}if((e==null?void 0:e.props.labelWidth)!==void 0)return me(e.props.labelWidth)}),s=P(()=>{const{labelAlign:c}=r;if(c)return c;if(e!=null&&e.props.labelAlign)return e.props.labelAlign}),a=P(()=>{var c;return[(c=r.labelProps)===null||c===void 0?void 0:c.style,r.labelStyle,{width:i.value}]}),o=P(()=>{const{showRequireMark:c}=r;return c!==void 0?c:e==null?void 0:e.props.showRequireMark}),f=P(()=>{const{requireMarkPlacement:c}=r;return c!==void 0?c:(e==null?void 0:e.props.requireMarkPlacement)||"right"}),l=Q(!1),d=P(()=>{const{validationStatus:c}=r;if(c!==void 0)return c;if(l.value)return"error"}),m=P(()=>{const{showFeedback:c}=r;return c!==void 0?c:(e==null?void 0:e.props.showFeedback)!==void 0?e.props.showFeedback:!0}),v=P(()=>{const{showLabel:c}=r;return c!==void 0?c:(e==null?void 0:e.props.showLabel)!==void 0?e.props.showLabel:!0});return{validationErrored:l,mergedLabelStyle:a,mergedLabelPlacement:t,mergedLabelAlign:s,mergedShowRequireMark:o,mergedRequireMarkPlacement:f,mergedValidationStatus:d,mergedShowFeedback:m,mergedShowLabel:v,isAutoLabelWidth:n}}function It(r){const e=ne(re,null),t=P(()=>{const{rulePath:a}=r;if(a!==void 0)return a;const{path:o}=r;if(o!==void 0)return o}),n=P(()=>{const a=[],{rule:o}=r;if(o!==void 0&&(Array.isArray(o)?a.push(...o):a.push(o)),e){const{rules:f}=e.props,{value:l}=t;if(f!==void 0&&l!==void 0){const d=Le(f,l);d!==void 0&&(Array.isArray(d)?a.push(...d):a.push(d))}}return a}),i=P(()=>n.value.some(a=>a.required)),s=P(()=>i.value||r.required);return{mergedRules:n,mergedRequired:s}}const{cubicBezierEaseInOut:_e}=He;function Vt({name:r="fade-down",fromOffset:e="-4px",enterDuration:t=".3s",leaveDuration:n=".3s",enterCubicBezier:i=_e,leaveCubicBezier:s=_e}={}){return[G(`&.${r}-transition-enter-from, &.${r}-transition-leave-to`,{opacity:0,transform:`translateY(${e})`}),G(`&.${r}-transition-enter-to, &.${r}-transition-leave-from`,{opacity:1,transform:"translateY(0)"}),G(`&.${r}-transition-leave-active`,{transition:`opacity ${n} ${s}, transform ${n} ${s}`}),G(`&.${r}-transition-enter-active`,{transition:`opacity ${t} ${i}, transform ${t} ${i}`})]}const Lt=I("form-item",`
 display: grid;
 line-height: var(--n-line-height);
`,[I("form-item-label",`
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 min-height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 `,[oe("asterisk",`
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `),oe("asterisk-placeholder",`
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]),I("form-item-blank",`
 grid-area: blank;
 min-height: var(--n-blank-height);
 `),z("auto-label-width",[I("form-item-label","white-space: nowrap;")]),z("left-labelled",`
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: start;
 `,[I("form-item-label",`
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `,[z("left-mark",`
 grid-template-areas:
 "mark text"
 ". text";
 `),z("right-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),z("right-hanging-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),oe("text",`
 grid-area: text; 
 `),oe("asterisk",`
 grid-area: mark; 
 align-self: end;
 `)])]),z("top-labelled",`
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `,[z("no-label",`
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `),I("form-item-label",`
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]),I("form-item-blank",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `),I("form-item-feedback-wrapper",`
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `,[G("&:not(:empty)",`
 padding: var(--n-feedback-padding);
 `),I("form-item-feedback",{transition:"color .3s var(--n-bezier)",color:"var(--n-feedback-text-color)"},[z("warning",{color:"var(--n-feedback-text-color-warning)"}),z("error",{color:"var(--n-feedback-text-color-error)"}),Vt({fromOffset:"-3px",enterDuration:".3s",leaveDuration:".2s"})])])]);var Ae=globalThis&&globalThis.__awaiter||function(r,e,t,n){function i(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function o(d){try{l(n.next(d))}catch(m){a(m)}}function f(d){try{l(n.throw(d))}catch(m){a(m)}}function l(d){d.done?s(d.value):i(d.value).then(o,f)}l((n=n.apply(r,e||[])).next())})};const zt=Object.assign(Object.assign({},ue.props),{label:String,labelWidth:[Number,String],labelStyle:[String,Object],labelAlign:String,labelPlacement:String,path:String,first:Boolean,rulePath:String,required:Boolean,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:void 0},rule:[Object,Array],size:String,ignorePathChange:Boolean,validationStatus:String,feedback:String,showLabel:{type:Boolean,default:void 0},labelProps:Object});function $e(r,e){return(...t)=>{try{const n=r(...t);return!e&&(typeof n=="boolean"||n instanceof Error||Array.isArray(n))||(n==null?void 0:n.then)?n:(n===void 0||Re("form-item/validate",`You return a ${typeof n} typed value in the validator method, which is not recommended. Please use `+(e?"`Promise`":"`boolean`, `Error` or `Promise`")+" typed value instead."),!0)}catch(n){Re("form-item/validate","An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."),console.error(n);return}}}const Wt=Me({name:"FormItem",props:zt,setup(r){Ge(ze,"formItems",fe(r,"path"));const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=Ie(r),n=ne(re,null),i=jt(r),s=Mt(r),{validationErrored:a}=s,{mergedRequired:o,mergedRules:f}=It(r),{mergedSize:l}=i,{mergedLabelPlacement:d,mergedLabelAlign:m}=s,v=Q([]),c=Q(qe()),w=n?fe(n.props,"disabled"):Q(!1),g=ue("Form","-form-item",Lt,Ve,r,e);Ee(fe(r,"path"),()=>{r.ignorePathChange||y()});function y(){v.value=[],a.value=!1,r.feedback&&(c.value=qe())}function u(){R("blur")}function M(){R("change")}function h(){R("focus")}function x(){R("input")}function S(b,k){return Ae(this,void 0,void 0,function*(){let q,_,B,U;return typeof b=="string"?(q=b,_=k):b!==null&&typeof b=="object"&&(q=b.trigger,_=b.callback,B=b.shouldRuleBeApplied,U=b.options),yield new Promise((Y,K)=>{R(q,B,U).then(({valid:J,errors:D})=>{J?(_&&_(),Y()):(_&&_(D),K(D))})})})}const R=(b=null,k=()=>!0,q={suppressWarning:!0})=>Ae(this,void 0,void 0,function*(){const{path:_}=r;q?q.first||(q.first=r.first):q={};const{value:B}=f,U=n?Le(n.props.model,_||""):void 0,Y={},K={},J=(b?B.filter(V=>Array.isArray(V.trigger)?V.trigger.includes(b):V.trigger===b):B).filter(k).map((V,L)=>{const F=Object.assign({},V);if(F.validator&&(F.validator=$e(F.validator,!1)),F.asyncValidator&&(F.asyncValidator=$e(F.asyncValidator,!0)),F.renderMessage){const $=`__renderMessage__${L}`;K[$]=F.message,F.message=$,Y[$]=F.renderMessage}return F});if(!J.length)return{valid:!0};const D=_!=null?_:"__n_no_path__",ae=new ie({[D]:J}),{validateMessages:se}=(n==null?void 0:n.props)||{};return se&&ae.messages(se),yield new Promise(V=>{ae.validate({[D]:U},q,L=>{L!=null&&L.length?(v.value=L.map(F=>{const $=(F==null?void 0:F.message)||"";return{key:$,render:()=>$.startsWith("__renderMessage__")?Y[$]():$}}),L.forEach(F=>{var $;!(($=F.message)===null||$===void 0)&&$.startsWith("__renderMessage__")&&(F.message=K[F.message])}),a.value=!0,V({valid:!1,errors:L})):(y(),V({valid:!0}))})})});he(Ue,{path:fe(r,"path"),disabled:w,mergedSize:i.mergedSize,mergedValidationStatus:s.mergedValidationStatus,restoreValidation:y,handleContentBlur:u,handleContentChange:M,handleContentFocus:h,handleContentInput:x});const N={validate:S,restoreValidation:y,internalValidate:R},j=Q(null);Ye(()=>{if(!s.isAutoLabelWidth.value)return;const b=j.value;if(b!==null){const k=b.style.whiteSpace;b.style.whiteSpace="nowrap",b.style.width="",n==null||n.deriveMaxChildLabelWidth(Number(getComputedStyle(b).width.slice(0,-2))),b.style.whiteSpace=k}});const C=P(()=>{var b;const{value:k}=l,{value:q}=d,_=q==="top"?"vertical":"horizontal",{common:{cubicBezierEaseInOut:B},self:{labelTextColor:U,asteriskColor:Y,lineHeight:K,feedbackTextColor:J,feedbackTextColorWarning:D,feedbackTextColorError:ae,feedbackPadding:se,[W("labelHeight",k)]:V,[W("blankHeight",k)]:L,[W("feedbackFontSize",k)]:F,[W("feedbackHeight",k)]:$,[W("labelPadding",_)]:Te,[W("labelTextAlign",_)]:Ce,[W(W("labelFontSize",q),k)]:We}}=g.value;let ce=(b=m.value)!==null&&b!==void 0?b:Ce;return q==="top"&&(ce=ce==="right"?"flex-end":"flex-start"),{"--n-bezier":B,"--n-line-height":K,"--n-blank-height":L,"--n-label-font-size":We,"--n-label-text-align":ce,"--n-label-height":V,"--n-label-padding":Te,"--n-asterisk-color":Y,"--n-label-text-color":U,"--n-feedback-padding":se,"--n-feedback-font-size":F,"--n-feedback-height":$,"--n-feedback-text-color":J,"--n-feedback-text-color-warning":D,"--n-feedback-text-color-error":ae}}),T=Ke("form-item",P(()=>{var b;return`${l.value[0]}${d.value[0]}${((b=m.value)===null||b===void 0?void 0:b[0])||""}`}),C,r);return Object.assign(Object.assign(Object.assign(Object.assign({labelElementRef:j,mergedClsPrefix:e,mergedRequired:o,feedbackId:c,renderExplains:v},s),i),N),{cssVars:t?void 0:C,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender})},render(){const{$slots:r,mergedClsPrefix:e,mergedShowLabel:t,mergedShowRequireMark:n,mergedRequireMarkPlacement:i,onRender:s}=this,a=n!==void 0?n:this.mergedRequired;s==null||s();const o=()=>{const f=this.$slots.label?this.$slots.label():this.label;if(!f)return null;const l=A("span",{class:`${e}-form-item-label__text`},f),d=a?A("span",{class:`${e}-form-item-label__asterisk`},i!=="left"?"\xA0*":"*\xA0"):i==="right-hanging"&&A("span",{class:`${e}-form-item-label__asterisk-placeholder`},"\xA0*"),{labelProps:m}=this;return A("label",Object.assign({},m,{class:[m==null?void 0:m.class,`${e}-form-item-label`,`${e}-form-item-label--${i}-mark`],style:this.mergedLabelStyle,ref:"labelElementRef"}),i==="left"?[d,l]:[l,d])};return A("div",{class:[`${e}-form-item`,this.themeClass,`${e}-form-item--${this.mergedSize}-size`,`${e}-form-item--${this.mergedLabelPlacement}-labelled`,this.isAutoLabelWidth&&`${e}-form-item--auto-label-width`,!t&&`${e}-form-item--no-label`],style:this.cssVars},t&&o(),A("div",{class:[`${e}-form-item-blank`,this.mergedValidationStatus&&`${e}-form-item-blank--${this.mergedValidationStatus}`]},r),this.mergedShowFeedback?A("div",{key:this.feedbackId,class:`${e}-form-item-feedback-wrapper`},A(Je,{name:"fade-down-transition",mode:"out-in"},{default:()=>{const{mergedValidationStatus:f}=this;return Ze(r.feedback,l=>{var d;const{feedback:m}=this,v=l||m?A("div",{key:"__feedback__",class:`${e}-form-item-feedback__line`},l||m):this.renderExplains.length?(d=this.renderExplains)===null||d===void 0?void 0:d.map(({key:c,render:w})=>A("div",{key:c,class:`${e}-form-item-feedback__line`},w())):null;return v?f==="warning"?A("div",{key:"controlled-warning",class:`${e}-form-item-feedback ${e}-form-item-feedback--warning`},v):f==="error"?A("div",{key:"controlled-error",class:`${e}-form-item-feedback ${e}-form-item-feedback--error`},v):f==="success"?A("div",{key:"controlled-success",class:`${e}-form-item-feedback ${e}-form-item-feedback--success`},v):A("div",{key:"controlled-default",class:`${e}-form-item-feedback`},v):null})}})):null)}});export{Ct as N,Wt as a};
