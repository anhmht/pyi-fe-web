(window.webpackJsonp=window.webpackJsonp||[]).push([[38,30,107],{722:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return r}));var o={CONTACT_INFO:0,SHIPPING_INFO:1,DELIVERY_METHOD:2,PAYMENT:3},d=[{id:o.CONTACT_INFO,name:"Contact Info"},{id:o.SHIPPING_INFO,name:"Shipping Info"},{id:o.DELIVERY_METHOD,name:"Delivery Method"},{id:o.PAYMENT,name:"Payment"}],r={email:"anhmht@mail.com",firstName:"Anh",lastName:"Mai",address:"139/27 Bo Bao Tan Thang",apt:"",city:"Ho Chi Minh",country:"Vietnam",state:"Ho Chi Minh",zip:"700000",phone:"0989898989",deliveryMethod:{id:1,name:"Ground"}}},729:function(e,t,n){var content=n(811);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("ed2457ae",content,!0,{sourceMap:!1})},810:function(e,t,n){"use strict";var o=n(729),d=n.n(o);n.d(t,"default",(function(){return d.a}))},811:function(e,t,n){var o=n(15)((function(i){return i[1]}));o.push([e.i,".CheckoutShippingInfo__root_A8uER{font-size:1.4rem;}.CheckoutShippingInfo__root_A8uER h4{font-size:1.6rem;font-weight:500;margin-bottm:var(--space-1o2)}.CheckoutShippingInfo__root_A8uER .CheckoutShippingInfo__delivery_Vvag\\+{margin-top:var(--space)}.CheckoutShippingInfo__root_A8uER .CheckoutShippingInfo__shipping_dA-FF{margin-bottom:var(--space)}",""]),o.locals={root:"CheckoutShippingInfo__root_A8uER",delivery:"CheckoutShippingInfo__delivery_Vvag+",shipping:"CheckoutShippingInfo__shipping_dA-FF"},e.exports=o},987:function(e,t,n){"use strict";n.r(t);n(494);var o=n(1),d=n(722),r=o.default.extend({props:{address:{type:Object,default:void 0},activeStep:{type:Number,default:d.a.PAYMENT}},computed:{isDisplayContactInfo:function(){return this.activeStep>d.a.CONTACT_INFO},isDisplayShippingInfo:function(){return this.activeStep>d.a.SHIPPING_INFO},isDisplayDeliveryMethod:function(){return this.activeStep>d.a.DELIVERY_METHOD}}}),l=n(810),_=n(8);var component=Object(_.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.address?n("el-row",{class:e.$style.root,attrs:{gutter:24}},[e.isDisplayShippingInfo?n("el-col",{class:e.$style.shipping,attrs:{md:8}},[n("h4",[e._v("Shipping Info")]),e._v(" "),e.address.firstName||e.address.lastName?n("div",{class:e.$style.item},[e._v("\n      "+e._s(e.address.firstName)+" "+e._s(e.address.lastName)+"\n    ")]):e._e(),e._v(" "),e.address.address||e.address.apt?n("div",{class:e.$style.item},[e._v("\n      "+e._s(e.address.address)+" "+e._s(e.address.apt)+"\n    ")]):e._e(),e._v(" "),e.address.state||e.address.country?n("div",{class:e.$style.item},[e._v("\n      "+e._s(e.$displayState(e.address.state,e.address.country))+",\n      "+e._s(e.$displayCountry(e.address.country))+"\n    ")]):e._e(),e._v(" "),e.address.city||e.address.zip?n("div",{class:e.$style.item},[e._v("\n      "+e._s(e.address.city)+", "+e._s(e.address.zip)+"\n    ")]):e._e()]):e._e(),e._v(" "),e.isDisplayContactInfo?n("el-col",{class:e.$style.contact,attrs:{md:8}},[n("h4",[e._v("Contact Info")]),e._v(" "),e.address.email?n("div",{class:e.$style.item},[n("label",[e._v("Email:")]),e._v(" "),n("span",[e._v(e._s(e.address.email))])]):e._e(),e._v(" "),e.address.phone?n("div",{class:e.$style.item},[n("label",[e._v("Phone:")]),e._v(" "),n("span",[e._v(e._s(e.address.phone))])]):e._e()]):e._e(),e._v(" "),e.isDisplayDeliveryMethod?n("el-col",{class:e.$style.delivery,attrs:{md:12}},[n("h4",[e._v("Delivery Method")]),e._v(" "),n("div",{class:e.$style.item},[e._v(e._s(e.address.deliveryMethod.name))])]):e._e()],1):e._e()}),[],!1,(function(e){this.$style=l.default.locals||l.default}),null,null);t.default=component.exports}}]);