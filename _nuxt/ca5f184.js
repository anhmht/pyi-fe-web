(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1005:function(e,t,o){"use strict";o.r(t);var r=o(1),n=o(174),l=r.default.extend({props:{value:{type:Object,required:!0}},data:function(){return{form:this.value,rules:{email:[{required:!0,message:"Please input email address",trigger:"change"},{type:"email",message:"Please input correct email address",trigger:"change"}]}}},activated:function(){var e=this;this.$nuxt.$on(n.a.CHECK_OUT_NEXT,(function(){e.submitForm()}))},deactivated:function(){this.$nuxt.$off(n.a.CHECK_OUT_NEXT)},methods:{submitForm:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.$emit("input",e.form),e.$emit("next"))}))}}}),f=o(941),m=o(8);var component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:e.$style.root},[o("h2",[e._v("Contact information")]),e._v(" "),o("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-position":"top"}},[o("el-form-item",{attrs:{label:"Email address",prop:"email"}},[o("el-input",{attrs:{placeholder:"Your email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Phone number (optional)",prop:"phone"}},[o("el-input",{attrs:{placeholder:"Your phone number"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1)],1)}),[],!1,(function(e){this.$style=f.default.locals||f.default}),null,null);t.default=component.exports},771:function(e,t,o){var content=o(942);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(16).default)("1b284bd7",content,!0,{sourceMap:!1})},941:function(e,t,o){"use strict";var r=o(771),n=o.n(r);o.d(t,"default",(function(){return n.a}))},942:function(e,t,o){var r=o(15)((function(i){return i[1]}));r.push([e.i,".ContactInfo__root_E9UDY h2{font-size:1.8rem;font-weight:500;margin-bottom:var(--space)}.ContactInfo__root_E9UDY .el-form-item__label{margin-bottom:var(--space-1o2)}",""]),r.locals={root:"ContactInfo__root_E9UDY"},e.exports=r}}]);