(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{538:function(e,t,r){var content=r(640);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("61b39cb9",content,!0,{sourceMap:!1})},639:function(e,t,r){"use strict";var o=r(538),l=r.n(o);r.d(t,"default",(function(){return l.a}))},640:function(e,t,r){var o=r(12)((function(i){return i[1]}));o.push([e.i,".CheckoutForm__root_SXs50 h2{font-size:1.8rem;font-weight:500;margin-bottom:var(--space)}.CheckoutForm__root_SXs50 .CheckoutForm__contact_5ULDp,.CheckoutForm__root_SXs50 .CheckoutForm__shipping_DToAp{padding:var(--space) 0}.CheckoutForm__root_SXs50 .CheckoutForm__contact_5ULDp+.CheckoutForm__shipping_DToAp{border-top:1px solid var(--color-bg-secondary)}",""]),o.locals={root:"CheckoutForm__root_SXs50",contact:"CheckoutForm__contact_5ULDp",shipping:"CheckoutForm__shipping_DToAp"},e.exports=o},732:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({data:function(){return{form:{email:"",firstName:"",lastName:"",address:"",apt:"",country:"",city:"",state:"",zip:"",phone:""},rules:{email:[{required:!0,message:"Please input email address",trigger:"change"},{type:"email",message:"Please input correct email address",trigger:"change"}],firstName:[{required:!0,message:"Please input your first name",trigger:"change"}],lastName:[{required:!0,message:"Please input your last name",trigger:"change"}],address:[{required:!0,message:"Please input your address",trigger:"change"}],country:[{required:!0,message:"Please input your country",trigger:"change"}],city:[{required:!0,message:"Please input your city",trigger:"change"}],state:[{required:!0,message:"Please input your state",trigger:"change"}],zip:[{required:!0,message:"Please input your zip",trigger:"change"}]},isLoading:!1}}}),l=r(639),n=r(6);var component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$style.root},[r("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form}},[r("div",{class:e.$style.contact},[r("h2",[e._v("Contact information")]),e._v(" "),r("el-form-item",{attrs:{label:"Email address",prop:"email"}},[r("el-input",{attrs:{placeholder:"Your email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),e._v(" "),r("div",{class:e.$style.shipping},[r("h2",[e._v("Shipping information")]),e._v(" "),r("el-row",{attrs:{gutter:16}},[r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"First name",prop:"firstName"}},[r("el-input",{attrs:{placeholder:"First name"},model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}})],1)],1),e._v(" "),r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"Last name",prop:"lastName"}},[r("el-input",{attrs:{placeholder:"Last name"},model:{value:e.form.lastName,callback:function(t){e.$set(e.form,"lastName",t)},expression:"form.lastName"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"Address",prop:"address"}},[r("el-input",{attrs:{placeholder:"Address"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Apartment, suite, etc",prop:"apt"}},[r("el-input",{attrs:{placeholder:"Apartment, suite, etc"},model:{value:e.form.apt,callback:function(t){e.$set(e.form,"apt",t)},expression:"form.apt"}})],1),e._v(" "),r("el-row",{attrs:{gutter:16}},[r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"Country",prop:"country"}},[r("el-input",{attrs:{placeholder:"Country"},model:{value:e.form.country,callback:function(t){e.$set(e.form,"country",t)},expression:"form.country"}})],1)],1),e._v(" "),r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"City",prop:"city"}},[r("el-input",{attrs:{placeholder:"City"},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:16}},[r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"State",prop:"state"}},[r("el-input",{attrs:{placeholder:"State"},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}})],1)],1),e._v(" "),r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"Zip code",prop:"zip"}},[r("el-input",{attrs:{placeholder:"Zip code"},model:{value:e.form.zip,callback:function(t){e.$set(e.form,"zip",t)},expression:"form.zip"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"Phone number (optional)",prop:"phone"}},[r("el-input",{attrs:{placeholder:"Your phone number"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1)])],1)}),[],!1,(function(e){this.$style=l.default.locals||l.default}),null,null);t.default=component.exports}}]);