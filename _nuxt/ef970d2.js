(window.webpackJsonp=window.webpackJsonp||[]).push([[67,29],{1017:function(t,e,n){"use strict";var r=n(811),o=n.n(r);n.d(e,"default",(function(){return o.a}))},1018:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,".index__root_Obelx{margin-top:var(--space-4x);}.index__root_Obelx h2{font-size:1.8rem;font-weight:500;margin-bottom:var(--space)}.index__root_Obelx .index__summary_7pdfz{background:var(--color-bg-secondary-2);padding:var(--space-2x);border-radius:var(--radius-5);position:relative}.index__root_Obelx .index__steps_xWoy-{margin-top:var(--space-2x)}.index__root_Obelx .index__list_m\\+mWW{margin-top:var(--space-1x5)}",""]),r.locals={root:"index__root_Obelx",summary:"index__summary_7pdfz",steps:"index__steps_xWoy-",list:"index__list_m+mWW"},t.exports=r},1168:function(t,e,n){"use strict";n.r(e);n(9),n(30),n(31);var r=n(1),o=n(716),c=n(168),d=n(167),l=Object(c.a)((function t(data){Object(d.a)(this,t),this.email=data.email,this.firstName=data.firstName,this.lastName=data.lastName,this.address=data.address,this.apt=data.apt,this.city=data.city,this.country=data.country,this.state=data.state,this.zip=data.zip,this.phone=data.phone,this.deliveryMethod=data.deliveryMethod})),h=r.default.extend({components:{CheckoutForm:function(){return n.e(8).then(n.bind(null,1196))},CheckoutOderSummary:function(){return n.e(93).then(n.bind(null,1159))},CheckoutSummary:function(){return n.e(94).then(n.bind(null,951))},CheckoutList:function(){return n.e(7).then(n.bind(null,984))},CheckoutStep:function(){return n.e(3).then(n.bind(null,1170))},CheckoutShippingInfo:function(){return n.e(95).then(n.bind(null,952))}},name:"CheckoutPage",middleware:["require-cart"],data:function(){return{activeStep:0,steps:o.c,form:void 0}},computed:{isMobile:function(){return"mobile"===this.$mq},address:function(){if(this.form)return new l(this.form)}}}),m=n(1017),_=n(8);var component=Object(_.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.root},[n("div",{staticClass:"container"},[n("h1",[t._v("Checkout Order")]),t._v(" "),n("div",{class:t.$style.steps},[t.isMobile?n("CheckoutStep",{attrs:{"active-step":t.activeStep,steps:t.steps}}):t._e()],1),t._v(" "),n("el-row",{attrs:{gutter:24}},[n("el-col",{attrs:{lg:12}},[n("CheckoutForm",{attrs:{"active-step":t.activeStep,data:t.form},on:{"update:activeStep":function(e){t.activeStep=e},"update:active-step":function(e){t.activeStep=e},"update:data":function(e){t.form=e}}})],1),t._v(" "),n("el-col",{attrs:{lg:12}},[n("div",{class:t.$style.summary},[n("h2",[t._v("Order Summary")]),t._v(" "),n("CheckoutShippingInfo",{attrs:{address:t.address,"active-step":t.activeStep}}),t._v(" "),n("CheckoutList",{class:t.$style.list}),t._v(" "),n("CheckoutSummary",{attrs:{"active-step":t.activeStep}})],1)])],1)],1),t._v(" "),t.isMobile?t._e():n("CheckoutOderSummary",{attrs:{"active-step":t.activeStep}})],1)}),[],!1,(function(t){this.$style=m.default.locals||m.default}),null,null);e.default=component.exports},716:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return c}));var r={CONTACT_INFO:0,SHIPPING_INFO:1,DELIVERY_METHOD:2,PAYMENT:3},o=[{id:r.CONTACT_INFO,name:"Contact Info"},{id:r.SHIPPING_INFO,name:"Shipping Info"},{id:r.DELIVERY_METHOD,name:"Delivery Method"},{id:r.PAYMENT,name:"Payment"}],c={email:"anhmht@mail.com",firstName:"Anh",lastName:"Mai",address:"139/27 Bo Bao Tan Thang",apt:"",city:"Ho Chi Minh",country:"Vietnam",state:"Ho Chi Minh",zip:"700000",phone:"0989898989",deliveryMethod:{id:1,name:"Ground"}}},811:function(t,e,n){var content=n(1018);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("315f4287",content,!0,{sourceMap:!1})}}]);