(window.webpackJsonp=window.webpackJsonp||[]).push([[99,66,67,68],{1012:function(e,r,t){"use strict";t.r(r);var o=[function(){var e=this.$createElement,r=this._self._c||e;return r("div",[r("img",{attrs:{src:t(176),width:"80"}})])},function(){var e=this.$createElement,r=this._self._c||e;return r("div",[r("i",{staticClass:"fa fa-facebook",attrs:{"aria-hidden":"true"}})])},function(){var e=this.$createElement,r=this._self._c||e;return r("div",[r("i",{staticClass:"fa fa-twitter",attrs:{"aria-hidden":"true"}})])},function(){var e=this.$createElement,r=this._self._c||e;return r("div",[r("i",{staticClass:"fa fa-google",attrs:{"aria-hidden":"true"}})])}],n=t(4),l=(t(35),t(1)),c=t(39),_=l.default.extend({data:function(){return{form:{email:"",password:""},rememberMe:!0,isLoading:!1,rules:{email:[{required:!0,message:"Please input email address",trigger:"change"},{type:"email",message:"Please input correct email address",trigger:"change"}],password:[{required:!0,message:"Please input your password",trigger:"change"}]}}},computed:{isMobile:function(){return"mobile"===this.$mq}},methods:{submitForm:function(){var e=this;var r=this;r.$refs.form.validate(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(o){var n,l,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o){t.next=23;break}return e.isLoading=!0,t.prev=2,n={email:e.form.email,password:e.form.password},t.next=6,r.$authService.signIn(n);case 6:l=t.sent,data=l.data,e.$notify.success({title:"Login Successful",message:"Welcome user ".concat(data.email)}),e.rememberMe&&(localStorage.setItem("accessToken",data.accessToken),localStorage.setItem("refreshToken",data.refreshToken),localStorage.setItem("user",JSON.stringify(data))),r.$api.setToken(data.accessToken,"Bearer"),e.$store.commit(c.Mutations.TYPE.SET_CURRENT_USER,data),e.$router.back(),e.isLoading=!1,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(2),console.log(t.t0),e.$notify.error({title:"Error",message:"Invalid email or password"}),e.isLoading=!1;case 21:t.next=25;break;case 23:return console.log("error submit!!"),t.abrupt("return",!1);case 25:case"end":return t.stop()}}),t,null,[[2,16]])})));return function(e){return t.apply(this,arguments)}}())}}}),m=_,d=t(884),f=t(8);var component=Object(f.a)(m,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{class:e.$style.root},[e._m(0),e._v(" "),t("h1",[e._v("Sign in to your account")]),e._v(" "),t("el-form",{ref:"form",attrs:{"label-position":"top",rules:e.rules,model:e.form}},[t("el-form-item",{attrs:{label:"Email address",prop:"email"}},[t("el-input",{attrs:{placeholder:"Your Email"},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"Password",prop:"password"}},[t("el-input",{attrs:{placeholder:"Password",type:"password"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),e._v(" "),t("div",{class:e.$style.forgotPass},[t("el-checkbox",{attrs:{label:"Remember me"},model:{value:e.rememberMe,callback:function(r){e.rememberMe=r},expression:"rememberMe"}}),e._v(" "),t("nuxt-link",{attrs:{to:"/forgot-password"}},[e._v("Forgot your password?")])],1),e._v(" "),t("el-form-item",{class:e.$style.submit},[t("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.isLoading,expression:"isLoading",modifiers:{fullscreen:!0,lock:!0}}],class:e.$style.submitBtn,attrs:{type:"primary"},on:{click:function(r){return r.preventDefault(),e.submitForm.apply(null,arguments)}}},[e._v("Sign in")])],1)],1),e._v(" "),t("el-divider",{class:e.$style.divider},[e._v("Or continue with")]),e._v(" "),t("div",{class:e.$style.social},[e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3)]),e._v(" "),e.isMobile?t("el-divider",{class:e.$style.divider},[e._v("Don't have an account?")]):e._e(),e._v(" "),e.isMobile?t("el-button",{class:e.$style.submitBtn,attrs:{type:"primary"},on:{click:function(r){return r.preventDefault(),e.$emit("change")}}},[e._v("Create an account")]):e._e()],1)}),o,!1,(function(e){this.$style=d.default.locals||d.default}),null,null);r.default=component.exports},1013:function(e,r,t){"use strict";t.r(r);var o=t(1).default.extend({props:{active:{type:Boolean,default:!1}}}),n=t(886),l=t(8);var component=Object(l.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{class:[e.$style.overlayContainer,e.active&&e.$style.active]},[t("div",{class:e.$style.overlay},[t("div",{class:e.$style.overlayLeft},[t("h1",[e._v("Hello, Friend!")]),e._v(" "),t("h4",[e._v("Do not have an account yet?")]),e._v(" "),t("el-button",{class:e.$style.btn,attrs:{id:"signIn",type:"primary"},on:{click:function(r){return e.$emit("update:active",!e.active)}}},[e._v("Sign In")])],1),e._v(" "),t("div",{class:e.$style.overlayRight},[t("h1",[e._v("Welcome Back!")]),e._v(" "),t("h4",[e._v("Please login with your personal info")]),e._v(" "),t("el-button",{class:e.$style.btn,attrs:{id:"signUp",type:"primary"},on:{click:function(r){return e.$emit("update:active",!e.active)}}},[e._v("Sign Up")])],1)])])}),[],!1,(function(e){this.$style=n.default.locals||n.default}),null,null);r.default=component.exports},1014:function(e,r,t){"use strict";t.r(r);var o=[function(){var e=this.$createElement,r=this._self._c||e;return r("div",[r("img",{attrs:{src:t(176),width:"80"}})])}],n=t(4),l=(t(35),t(19),t(1).default.extend({data:function(){return{isLoading:!1,form:{email:"",name:"",password:""},rememberMe:!1,rules:{email:[{required:!0,message:"Please input email address",trigger:"change"},{type:"email",message:"Please input correct email address",trigger:"change"}],name:[{required:!0,message:"Please input your name",trigger:"change"}],password:[{required:!0,message:"Please input your password",trigger:"change"}]}}},computed:{isMobile:function(){return"mobile"===this.$mq}},methods:{submitForm:function(){var e=this;this.$refs.form.validate(function(){var r=Object(n.a)(regeneratorRuntime.mark((function r(t){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=18;break}return e.isLoading=!0,r.prev=2,o={email:e.form.email,password:e.form.password,username:e.form.name},r.next=6,e.$userService.register(o);case 6:e.$notify.success({title:"Create account Successful",message:"Please check your email to verify your account"}),e.isLoading=!1,e.$router.push("/"),r.next=16;break;case 11:r.prev=11,r.t0=r.catch(2),console.log(r.t0),e.$notify.error({title:"Error",message:r.t0.message}),e.isLoading=!1;case 16:r.next=20;break;case 18:return console.log("error submit!!"),r.abrupt("return",!1);case 20:case"end":return r.stop()}}),r,null,[[2,11]])})));return function(e){return r.apply(this,arguments)}}())}}})),c=l,_=t(889),m=t(8);var component=Object(m.a)(c,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{class:e.$style.root},[e._m(0),e._v(" "),t("h1",[e._v("Create a new account")]),e._v(" "),t("el-form",{ref:"form",attrs:{"label-position":"top",rules:e.rules,model:e.form}},[t("el-form-item",{attrs:{label:"Email address",prop:"email"}},[t("el-input",{attrs:{placeholder:"Your Email"},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"Name",prop:"name"}},[t("el-input",{attrs:{placeholder:"Your Name"},model:{value:e.form.name,callback:function(r){e.$set(e.form,"name",r)},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"Password",prop:"password"}},[t("el-input",{attrs:{placeholder:"Password",type:"password"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),e._v(" "),t("el-form-item",{class:e.$style.submit},[t("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.isLoading,expression:"isLoading",modifiers:{fullscreen:!0,lock:!0}}],class:e.$style.submitBtn,attrs:{type:"primary"},on:{click:function(r){return r.preventDefault(),e.submitForm.apply(null,arguments)}}},[e._v("Create an account")])],1)],1),e._v(" "),t("el-divider",{staticClass:"divider"}),e._v(" "),t("div",{class:e.$style.policy},[e._v("\n    By creating an account you agree to our\n    "),t("nuxt-link",{attrs:{to:"/term"}},[e._v("Terms of Service")]),e._v(" and\n    "),t("nuxt-link",{attrs:{to:"/privacy"}},[e._v("Privacy Policy")])],1),e._v(" "),e.isMobile?t("el-divider",[e._v("Already have an account?")]):e._e(),e._v(" "),e.isMobile?t("el-button",{class:e.$style.submitBtn,attrs:{type:"primary"},on:{click:function(r){return r.preventDefault(),e.$emit("change")}}},[e._v("Sign in")]):e._e()],1)}),o,!1,(function(e){this.$style=_.default.locals||_.default}),null,null);r.default=component.exports},1082:function(e,r,t){"use strict";var o=t(837),n=t.n(o);t.d(r,"default",(function(){return n.a}))},1083:function(e,r,t){var o=t(15)((function(i){return i[1]}));o.push([e.i,".index__container_VCVrS{display:flex;margin-top:var(--space-4x);border:1px solid var(--color-bg-secondary);border-radius:var(--radius-5);position:relative;}.index__container_VCVrS .index__signIn_15YGe{left:0;z-index:2}.index__container_VCVrS .index__signUp_gj9NO{left:0;z-index:1;opacity:0}.index__container_VCVrS .index__form_STbl5{position:absolute;top:0;width:50%;height:100%;background:#fff;transition:all .5s ease-in-out;}.index__container_VCVrS .index__form_STbl5.index__mobile_\\+-lMq{width:100%}.index__container_VCVrS.index__signUpActive_ImLfK .index__signIn_15YGe{transform:translateX(100%);}.index__container_VCVrS.index__signUpActive_ImLfK .index__signIn_15YGe.index__mobile_\\+-lMq{transform:none}.index__container_VCVrS.index__signUpActive_ImLfK .index__signUp_gj9NO{transform:translateX(100%);opacity:1;z-index:5;-webkit-animation:index__show_-jhIl .5s;animation:index__show_-jhIl .5s;}.index__container_VCVrS.index__signUpActive_ImLfK .index__signUp_gj9NO.index__mobile_\\+-lMq{transform:none}@-webkit-keyframes index__show_-jhIl{0%{opacity:0;z-index:1}49%{opacity:0;z-index:1}50%{opacity:1;z-index:10}}@keyframes index__show_-jhIl{0%{opacity:0;z-index:1}49%{opacity:0;z-index:1}50%{opacity:1;z-index:10}}",""]),o.locals={container:"index__container_VCVrS",signIn:"index__signIn_15YGe",signUp:"index__signUp_gj9NO",form:"index__form_STbl5",mobile:"index__mobile_+-lMq",signUpActive:"index__signUpActive_ImLfK",show:"index__show_-jhIl"},e.exports=o},1233:function(e,r,t){"use strict";t.r(r);var o=t(1),n=t(1012),l=t(1013),c=t(1014),_=o.default.extend({components:{Overlay:l.default,LoginForm:n.default,RegisterForm:c.default},name:"SignInSignUpPage",middleware:"require-log-out",data:function(){return{signUp:!1}},computed:{isMobile:function(){return"mobile"===this.$mq}},mounted:function(){this.$route.hash&&"#sign-up"===this.$route.hash&&(this.signUp=!0)},watch:{"$route.hash":function(e){this.signUp=!(!e||"#sign-up"!==e)},signUp:function(e){e?this.$router.push({hash:"#sign-up"}):this.$router.push({hash:"#sign-in"})}}}),m=t(1082),d=t(8);var component=Object(d.a)(_,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"container"},[t("div",{class:[e.$style.container,e.signUp&&e.$style.signUpActive],style:{minHeight:e.isMobile?"750px":"630px"}},[e.isMobile?e._e():t("Overlay",{attrs:{active:e.signUp},on:{"update:active":function(r){e.signUp=r}}}),e._v(" "),t("RegisterForm",{class:[e.$style.form,e.$style.signUp,e.isMobile&&e.$style.mobile],on:{change:function(r){e.signUp=!e.signUp}}}),e._v(" "),t("LoginForm",{class:[e.$style.form,e.$style.signIn,e.isMobile&&e.$style.mobile],on:{change:function(r){e.signUp=!e.signUp}}})],1)])}),[],!1,(function(e){this.$style=m.default.locals||m.default}),null,null);r.default=component.exports},748:function(e,r,t){var content=t(885);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(16).default)("5088af20",content,!0,{sourceMap:!1})},749:function(e,r,t){var content=t(887);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(16).default)("e942d594",content,!0,{sourceMap:!1})},750:function(e,r,t){var content=t(890);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(16).default)("786fcbc0",content,!0,{sourceMap:!1})},837:function(e,r,t){var content=t(1083);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(16).default)("34e8d9d0",content,!0,{sourceMap:!1})},884:function(e,r,t){"use strict";var o=t(748),n=t.n(o);t.d(r,"default",(function(){return n.a}))},885:function(e,r,t){var o=t(15)((function(i){return i[1]}));o.push([e.i,".LoginForm__root_FnFjW{padding:var(--space-2x) var(--space-3x);}.LoginForm__root_FnFjW h1{margin:var(--space) 0}.LoginForm__root_FnFjW .LoginForm__forgotPass_1-g6L{display:flex;align-items:center;justify-content:space-between;}.LoginForm__root_FnFjW .LoginForm__forgotPass_1-g6L a{color:var(--color-primary)}.LoginForm__root_FnFjW .LoginForm__submit_3rrRi{margin-top:var(--space)}.LoginForm__root_FnFjW .LoginForm__submitBtn_nxLvL{width:100%;background:var(--color-primary);}.LoginForm__root_FnFjW .LoginForm__submitBtn_nxLvL:hover{opacity:.7}.LoginForm__root_FnFjW .el-divider--horizontal{margin:var(--space-2x5) 0}.LoginForm__root_FnFjW .el-divider__text{color:var(--color-form-text);text-align:center}.LoginForm__root_FnFjW .LoginForm__social_wHGtE{display:flex;align-items:center;justify-content:space-between;color:var(--color-form-text);}.LoginForm__root_FnFjW .LoginForm__social_wHGtE >div{flex-basis:30%;padding:var(--space-1o2) var(--space);text-align:center;border:1px solid var(--color-bg-secondary);border-radius:1rem;font-size:1.6rem;cursor:pointer;transition:var(--transition-300);}.LoginForm__root_FnFjW .LoginForm__social_wHGtE >div:hover{color:var(--color-primary);border-color:var(--color-primary)}",""]),o.locals={root:"LoginForm__root_FnFjW",forgotPass:"LoginForm__forgotPass_1-g6L",submit:"LoginForm__submit_3rrRi",submitBtn:"LoginForm__submitBtn_nxLvL",social:"LoginForm__social_wHGtE"},e.exports=o},886:function(e,r,t){"use strict";var o=t(749),n=t.n(o);t.d(r,"default",(function(){return n.a}))},887:function(e,r,t){var o=t(15),n=t(175),l=t(888),c=o((function(i){return i[1]})),_=n(l);c.push([e.i,".Overlay__overlayLeft_5rTEO{position:absolute;top:0;display:flex;align-items:center;justify-content:space-around;flex-direction:column;padding:70px 40px;width:50%;height:100%;text-align:center;transform:translateX(-20%);transition:transform .5s ease-in-out}.Overlay__overlayRight_KY9Xu{position:absolute;top:0;display:flex;align-items:center;justify-content:space-around;flex-direction:column;padding:70px 40px;width:50%;height:100%;text-align:center;transform:translateX(0);transition:transform .5s ease-in-out;right:0}.Overlay__overlayContainer_KS0cF{position:absolute;top:0;left:50%;width:50%;height:100%;overflow:hidden;transition:transform .5s ease-in-out;background:url("+_+");background-size:cover;z-index:1;}.Overlay__overlayContainer_KS0cF.Overlay__active_IOoQ9{transform:translateX(-100%)}.Overlay__overlay_f29LY{position:relative;left:-100%;height:100%;width:200%;color:#fff;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);transform:translateX(0);transition:all .5s ease-in-out;}.Overlay__overlay_f29LY:hover{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.Overlay__active_IOoQ9 .Overlay__overlay_f29LY{transform:translateX(50%)}.Overlay__active_IOoQ9 .Overlay__overlayLeft_5rTEO{transform:translateX(0)}.Overlay__active_IOoQ9 .Overlay__overlayRight_KY9Xu{transform:translateX(20%)}.Overlay__btn_xA5xX{width:200px;background:transparent;border-color:#fff;color:#fff;transition:var(--transition-300);}.Overlay__btn_xA5xX:hover{background:#fff;color:var(--color-primary);border-color:#fff}",""]),c.locals={overlayLeft:"Overlay__overlayLeft_5rTEO",overlayRight:"Overlay__overlayRight_KY9Xu",overlayContainer:"Overlay__overlayContainer_KS0cF",active:"Overlay__active_IOoQ9",overlay:"Overlay__overlay_f29LY",btn:"Overlay__btn_xA5xX"},e.exports=c},888:function(e,r,t){e.exports=t.p+"img/signin-1.6e79b20.png"},889:function(e,r,t){"use strict";var o=t(750),n=t.n(o);t.d(r,"default",(function(){return n.a}))},890:function(e,r,t){var o=t(15)((function(i){return i[1]}));o.push([e.i,".RegisterForm__root_oo7Ug{padding:var(--space-2x) var(--space-3x);}.RegisterForm__root_oo7Ug h1{margin:var(--space) 0}.RegisterForm__root_oo7Ug .RegisterForm__submit_Cx6k0{margin-top:var(--space-2x5)}.RegisterForm__root_oo7Ug .RegisterForm__submitBtn_vtjxi{width:100%;background:var(--color-primary);}.RegisterForm__root_oo7Ug .RegisterForm__submitBtn_vtjxi:hover{opacity:.7}.RegisterForm__root_oo7Ug .RegisterForm__policy_bnObd{font-size:1.3rem;text-align:center;color:var(--color-form-text);}.RegisterForm__root_oo7Ug .RegisterForm__policy_bnObd a{color:var(--color-primary);}.RegisterForm__root_oo7Ug .RegisterForm__policy_bnObd a:hover{opacity:.7}.RegisterForm__root_oo7Ug .el-divider--horizontal{margin:var(--space-2x5) 0}.RegisterForm__root_oo7Ug .el-divider__text{color:var(--color-form-text);text-align:center}.RegisterForm__root_oo7Ug .divider{margin:var(--space) 0}",""]),o.locals={root:"RegisterForm__root_oo7Ug",submit:"RegisterForm__submit_Cx6k0",submitBtn:"RegisterForm__submitBtn_vtjxi",policy:"RegisterForm__policy_bnObd"},e.exports=o}}]);