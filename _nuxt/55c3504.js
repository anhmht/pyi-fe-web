(window.webpackJsonp=window.webpackJsonp||[]).push([[65,39,40],{583:function(t,e,o){var content=o(695);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("f9f25bca",content,!0,{sourceMap:!1})},584:function(t,e,o){var content=o(697);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("103a0022",content,!0,{sourceMap:!1})},652:function(t,e,o){var content=o(848);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("6853a8d5",content,!0,{sourceMap:!1})},694:function(t,e,o){"use strict";var r=o(583),n=o.n(r);o.d(e,"default",(function(){return n.a}))},695:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".ContactForm__root_x6Mn9{padding:var(--space-2x) var(--space-3x);border:1px solid var(--color-bg-secondary);border-top-right-radius:var(--radius-5);border-bottom-right-radius:var(--radius-5);}.ContactForm__root_x6Mn9 h1{margin:var(--space) 0}.ContactForm__root_x6Mn9 .ContactForm__submit_PHVKs{margin-top:var(--space)}.ContactForm__root_x6Mn9 .ContactForm__submitBtn_xjVO9{width:100%;background:var(--color-primary);}.ContactForm__root_x6Mn9 .ContactForm__submitBtn_xjVO9:hover{opacity:.7}@media only screen and (max-width:991px){.ContactForm__root_x6Mn9{border-top-right-radius:0;border-bottom-left-radius:var(--radius-5)}}",""]),r.locals={root:"ContactForm__root_x6Mn9",submit:"ContactForm__submit_PHVKs",submitBtn:"ContactForm__submitBtn_xjVO9"},t.exports=r},696:function(t,e,o){"use strict";var r=o(584),n=o.n(r);o.d(e,"default",(function(){return n.a}))},697:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".ContactInfo__root_vRiMF{height:100%;font-size:1.4rem;color:#fff;background:#fdc830;background:linear-gradient(180deg,#f37335,#fdc830);border-top-left-radius:var(--radius-5);border-bottom-left-radius:var(--radius-5);}.ContactInfo__root_vRiMF .ContactInfo__overlay_DcWVi{padding:var(--space-2x)}.ContactInfo__root_vRiMF .ContactInfo__desc_zU678{margin:var(--space-2x) 0}.ContactInfo__root_vRiMF .ContactInfo__group_MSkHG{display:flex;flex-wrap:wrap}.ContactInfo__root_vRiMF h2{margin-top:var(--space-2x);font-size:2rem;font-weight:700}.ContactInfo__root_vRiMF .ContactInfo__useful_cqMTr{color:#fff;margin-right:var(--space);font-weight:600;}.ContactInfo__root_vRiMF .ContactInfo__useful_cqMTr:hover{opacity:.7}.ContactInfo__root_vRiMF a{color:#fff;font-weight:600;}.ContactInfo__root_vRiMF a:hover{opacity:.7}@media only screen and (max-width:991px){.ContactInfo__root_vRiMF{border-top-right-radius:var(--radius-5);border-bottom-left-radius:0}}",""]),r.locals={root:"ContactInfo__root_vRiMF",overlay:"ContactInfo__overlay_DcWVi",desc:"ContactInfo__desc_zU678",group:"ContactInfo__group_MSkHG",useful:"ContactInfo__useful_cqMTr"},t.exports=r},805:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:o(245),width:"80"}})])}],n=o(0).default.extend({data:function(){return{form:{email:"",name:"",subject:"",message:""},isLoading:!1,rules:{email:[{required:!0,message:"Please input email address",trigger:"change"},{type:"email",message:"Please input correct email address",trigger:"change"}],name:[{required:!0,message:"Please input your name",trigger:"change"}],subject:[{required:!0,message:"Please input subject",trigger:"change"}],message:[{required:!0,message:"Please input your message",trigger:"change"}]}}}}),l=o(694),c=o(9);var component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[t._m(0),t._v(" "),o("h1",[t._v("Send us a message")]),t._v(" "),o("el-form",{ref:"form",attrs:{"label-position":"top",rules:t.rules,model:t.form}},[o("el-form-item",{attrs:{label:"Full name",prop:"name"}},[o("el-input",{attrs:{placeholder:"Your full name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"Email address",prop:"email"}},[o("el-input",{attrs:{placeholder:"Your Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"Subject",prop:"subject"}},[o("el-input",{attrs:{placeholder:"Subject"},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"Message",prop:"message"}},[o("el-input",{attrs:{placeholder:"Your message",type:"textarea",maxlength:"500","show-word-limit":""},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})],1),t._v(" "),o("el-form-item",{class:t.$style.submit},[o("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.isLoading,expression:"isLoading",modifiers:{fullscreen:!0,lock:!0}}],class:t.$style.submitBtn,attrs:{type:"primary"},on:{click:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[t._v("Send message")])],1)],1)],1)}),r,!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.default=component.exports},806:function(t,e,o){"use strict";o.r(e);var r=o(0).default.extend({}),n=o(696),l=o(9);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("div",{class:t.$style.overlay},[o("h1",[t._v("Contact Information")]),t._v(" "),o("div",{class:t.$style.desc},[t._v("\n      Feel free to get in touch with us here or send us an email at\n      "),o("a",{attrs:{href:"mailto: support@pyi.com",target:"_blank"}},[t._v(" support@pyi.com")]),t._v(" "),o("br"),t._v("\n      We will respond your message within 24 - 48 hours.\n    ")]),t._v(" "),o("div",[t._v("\n      Please read our policies below if you need any additional information:\n    ")]),t._v(" "),o("div",{class:t.$style.group},[o("nuxt-link",{class:t.$style.useful,attrs:{to:"/tracking"}},[t._v("\n        Track order\n      ")]),t._v(" "),o("nuxt-link",{class:t.$style.useful,attrs:{to:"/shipping-policy"}},[t._v("\n        Shipping policy\n      ")]),t._v(" "),o("nuxt-link",{class:t.$style.useful,attrs:{to:"/return-policy"}},[t._v("\n        Return/Refund policy\n      ")]),t._v(" "),o("nuxt-link",{class:t.$style.useful,attrs:{to:"/term"}},[t._v("\n        Terms & Conditions\n      ")]),t._v(" "),o("nuxt-link",{class:t.$style.useful,attrs:{to:"/privacy"}},[t._v(" Privacy ")]),t._v(" "),o("nuxt-link",{class:t.$style.useful,attrs:{to:"/dmca"}},[t._v(" DMCA ")])],1),t._v(" "),o("h2",[t._v("Our Office Location")]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._v("\n      232 Forest Road Walthamstow UNITED KINGDOM "),o("br"),t._v("\n      Phone Number: 111-111-111\n    ")])}],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports},847:function(t,e,o){"use strict";var r=o(652),n=o.n(r);o.d(e,"default",(function(){return n.a}))},848:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".index__root_sJ5rK{margin-top:var(--space-4x);}.index__root_sJ5rK .index__row_JXrla{display:flex}@media only screen and (max-width:991px){.index__root_sJ5rK .index__row_JXrla{display:block}}",""]),r.locals={root:"index__root_sJ5rK",row:"index__row_JXrla"},t.exports=r},994:function(t,e,o){"use strict";o.r(e);var r=o(0),n=o(805),l=o(806),c=r.default.extend({components:{ContactInfo:l.default,ContactForm:n.default},name:"ContactPage"}),_=o(847),f=o(9);var component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("div",{staticClass:"container"},[o("el-row",{class:t.$style.row},[o("el-col",{attrs:{md:12}},[o("ContactInfo")],1),t._v(" "),o("el-col",{attrs:{md:12}},[o("ContactForm")],1)],1)],1)])}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);e.default=component.exports}}]);