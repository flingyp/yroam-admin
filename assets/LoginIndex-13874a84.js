import{i as I,a6 as L,t as N,a as x,a1 as S,b as k,r as p,c as _,e as b,f as C,h as s,g as e,w as i,l as t,N as f,m as R,p as A,a7 as B,a8 as F,a9 as K,a3 as U,aa as z,ab as T,ac as V,_ as j}from"./index-dc421378.js";import{a as u,N as q}from"./FormItem-e003c599.js";function E(){const o=I(L,null);return o===null&&N("use-notification","No outer `n-notification-provider` found."),o}const Y=o=>(z("data-v-5a8d0a17"),o=o(),T(),o),H={class:"login-page-container"},D={class:"login-form-container"},G={class:"form-container-left"},J={class:"form-container-right"},M=Y(()=>s("h1",null,[s("img",{src:V,alt:"YRoam Logo"}),s("span",null,"YRoam Admin 后台管理系统")],-1)),O={class:"theme-switch-container"},P=x({__name:"LoginIndex",setup(o){const h=S(),a=k({username:"admin",password:"123456"}),g={username:[{required:!0,message:"请输入用户名",trigger:["input","blur"]}],password:[{required:!0,message:"请输入密码",trigger:["blur"]}]},v=p("large"),d=p(null),m=E(),w=()=>{var c;(c=d.value)==null||c.validate(async n=>{if(n)return;const r=await B(a.username,a.password);r?(F(K,r==null?void 0:r.token),m.success({content:"提示：",meta:"登录成功！ 即将进行系统，请稍等",duration:2e3,onAfterLeave:()=>{h.push({name:U})}})):m.error({content:"提示：",meta:"用户名或密码错误",duration:3e3})})};return(c,n)=>{const r=_("SvgIcon"),y=_("ThemeSwitch");return b(),C("div",H,[s("main",D,[s("div",G,[e(r,{name:"LoginCover"})]),s("div",J,[M,e(t(q),{class:"form-container",ref_key:"formRef",ref:d,"label-width":80,model:a,rules:g,size:v.value},{default:i(()=>[e(t(u),{path:"username"},{default:i(()=>[e(t(f),{value:a.username,"onUpdate:value":n[0]||(n[0]=l=>a.username=l),placeholder:"请输入个人账号："},null,8,["value"])]),_:1}),e(t(u),{path:"password"},{default:i(()=>[e(t(f),{value:a.password,"onUpdate:value":n[1]||(n[1]=l=>a.password=l),placeholder:"请输入密码：",type:"password","show-password-on":"click"},null,8,["value"])]),_:1}),e(t(u),null,{default:i(()=>[e(t(R),{type:"primary",onClick:w,style:{width:"100%"}},{default:i(()=>[A("登录")]),_:1})]),_:1})]),_:1},8,["model","size"])])]),s("div",O,[e(y)])])}}});const X=j(P,[["__scopeId","data-v-5a8d0a17"]]);export{X as default};