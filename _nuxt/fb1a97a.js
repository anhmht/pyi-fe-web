(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{593:function(e,r,t){var content=t(750);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(12).default)("39c5227a",content,!0,{sourceMap:!1})},749:function(e,r,t){"use strict";var o=t(593),n=t.n(o);t.d(r,"default",(function(){return n.a}))},750:function(e,r,t){var o=t(11)((function(i){return i[1]}));o.push([e.i,".index__root_nmfHi{text-align:center;margin-top:var(--space-4x);}.index__root_nmfHi .index__forgot_4Cs5Q{border:1px solid var(--color-bg-secondary);border-radius:var(--radius-5);padding:var(--space-1x5);width:40%;margin:auto}.index__root_nmfHi .index__logo_ev9gm{display:flex;align-items:center;justify-content:center}.index__root_nmfHi .index__error_QtQeL{color:var(--color-primary);font-size:1.6rem;font-weight:600;margin-top:var(--space-3x)}.index__root_nmfHi p{font-size:1.4rem;margin:var(--space) auto}.index__root_nmfHi .index__link_MUHWf{color:var(--color-primary);}.index__root_nmfHi .index__link_MUHWf:hover{opacity:.7}.index__root_nmfHi .index__btn_lsoUL{width:100%;background:var(--color-primary);}.index__root_nmfHi .index__btn_lsoUL:hover{opacity:.7}@media only screen and (max-width:1024px){.index__root_nmfHi .index__forgot_4Cs5Q{width:100%}}",""]),o.locals={root:"index__root_nmfHi",forgot:"index__forgot_4Cs5Q",logo:"index__logo_ev9gm",error:"index__error_QtQeL",link:"index__link_MUHWf",btn:"index__btn_lsoUL"},e.exports=o},895:function(e,r,t){"use strict";t.r(r);var o=t(7),n=(t(44),t(0).default.extend({name:"ForgotPassword",data:function(){return{form:{email:""},isLoading:!1}},methods:{submitForm:function(){var e=this;this.$refs.form.validate(function(){var r=Object(o.a)(regeneratorRuntime.mark((function r(t){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=15;break}return r.prev=1,e.isLoading=!0,r.next=5,e.$userService.forgotPass(e.form.email);case 5:e.$notify.success({title:"Send Email Success",message:"Please check your email inbox"}),e.isLoading=!1,r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),e.$notify.error({title:"Error",message:r.t0.message}),e.isLoading=!1;case 13:r.next=17;break;case 15:return console.log("error submit!!"),r.abrupt("return",!1);case 17:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}())}}})),l=n,c=t(749),d=t(6);var component=Object(d.a)(l,(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{class:[e.$style.root,"container"]},[o("div",{class:e.$style.forgot},[o("div",{class:e.$style.logo},[o("img",{attrs:{src:t(224),width:"80"}})]),e._v(" "),o("h1",[e._v("Forgot Your Password")]),e._v(" "),o("p",[e._v("\n      To reset your password, enter the registered email address and we will\n      send you password reset instructions on your email!\n    ")]),e._v(" "),o("el-form",{ref:"form",class:e.$style.form,attrs:{model:e.form}},[o("el-form-item",{class:e.$style.input,attrs:{"inline-message":"",prop:"email",rules:[{required:!0,message:"Please input email address",trigger:"blur"},{type:"email",message:"Please input correct email address",trigger:["blur","change"]}]}},[o("el-input",{attrs:{placeholder:"Your Email"},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}})],1),e._v(" "),o("el-form-item",[o("el-button",{class:e.$style.btn,attrs:{loading:e.isLoading,type:"primary"},on:{click:function(r){return r.preventDefault(),e.submitForm.apply(null,arguments)}}},[e._v("Send Reset Link")])],1)],1),e._v(" "),o("nuxt-link",{class:e.$style.link,attrs:{to:"/"}},[e._v("Go back home "),o("i",{staticClass:"fa fa-arrow-right"})])],1)])}),[],!1,(function(e){this.$style=c.default.locals||c.default}),null,null);r.default=component.exports}}]);