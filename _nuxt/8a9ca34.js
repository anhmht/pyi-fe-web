(window.webpackJsonp=window.webpackJsonp||[]).push([[39,30,106],{722:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"c",(function(){return n})),r.d(e,"b",(function(){return c}));var o={CONTACT_INFO:0,SHIPPING_INFO:1,DELIVERY_METHOD:2,PAYMENT:3},n=[{id:o.CONTACT_INFO,name:"Contact Info"},{id:o.SHIPPING_INFO,name:"Shipping Info"},{id:o.DELIVERY_METHOD,name:"Delivery Method"},{id:o.PAYMENT,name:"Payment"}],c={email:"anhmht@mail.com",firstName:"Anh",lastName:"Mai",address:"139/27 Bo Bao Tan Thang",apt:"",city:"Ho Chi Minh",country:"Vietnam",state:"Ho Chi Minh",zip:"700000",phone:"0989898989",deliveryMethod:{id:1,name:"Ground"}}},728:function(t,e,r){var content=r(809);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("78cdab36",content,!0,{sourceMap:!1})},733:function(t,e,r){"use strict";r(22),r(9),r(73);e.a={computed:{carts:function(){return this.$store.state.shoppingCart.filter((function(t){return t.isSelected}))},subTotal:function(){var t=this;return this.carts.reduce((function(e,r){return e+r.quantity*t.getPrice(r)}),0)},tax:function(){return.1*this.subTotal},orderTotal:function(){return this.subTotal+this.tax+this.shippingFee},shippingFee:function(){return this.carts.length?5:0}},methods:{getPrice:function(t){var e,r;if(!t.colorId||!t.sizeId)return t.product.price;var o=null===(e=t.product.colors)||void 0===e?void 0:e.find((function(e){return e.id===t.colorId})),n=null==o||null===(r=o.size)||void 0===r?void 0:r.find((function(s){return s.id===t.sizeId}));return(null==n?void 0:n.price)||t.product.price}}}},808:function(t,e,r){"use strict";var o=r(728),n=r.n(o);r.d(e,"default",(function(){return n.a}))},809:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".CheckoutSummary__root_Mb0b5{font-size:1.4rem;}.CheckoutSummary__root_Mb0b5 .CheckoutSummary__summary_prZdl{margin-top:var(--space)}.CheckoutSummary__root_Mb0b5 .CheckoutSummary__item_zDOfa{display:flex;align-items:center;justify-content:space-between;padding:var(--space) 0;}.CheckoutSummary__root_Mb0b5 .CheckoutSummary__item_zDOfa span{text-align:right;font-weight:600}.CheckoutSummary__root_Mb0b5 .CheckoutSummary__item_zDOfa+.CheckoutSummary__item_zDOfa{border-top:1px solid var(--color-bg-secondary)}.CheckoutSummary__root_Mb0b5 .CheckoutSummary__total_hI46n{font-size:1.8rem}.CheckoutSummary__root_Mb0b5 .CheckoutSummary__btn_Q339z{width:100%;background:var(--color-primary);padding:var(--space);}.CheckoutSummary__root_Mb0b5 .CheckoutSummary__btn_Q339z:hover{opacity:.7}.CheckoutSummary__root_Mb0b5 .CheckoutSummary__btn_Q339z.CheckoutSummary__disabled_4kbd1{background-color:#ffe380;border-color:#ffe380;}.CheckoutSummary__root_Mb0b5 .CheckoutSummary__btn_Q339z.CheckoutSummary__disabled_4kbd1:hover{opacity:1}@media only screen and (max-width:991px){.CheckoutSummary__root_Mb0b5 .CheckoutSummary__btn_Q339z{position:fixed;bottom:0;width:100%;height:60px;left:0;z-index:100}}",""]),o.locals={root:"CheckoutSummary__root_Mb0b5",summary:"CheckoutSummary__summary_prZdl",item:"CheckoutSummary__item_zDOfa",total:"CheckoutSummary__total_hI46n",btn:"CheckoutSummary__btn_Q339z",disabled:"CheckoutSummary__disabled_4kbd1"},t.exports=o},986:function(t,e,r){"use strict";r.r(e);r(494),r(22),r(9);var o=r(1),n=r(174),c=r(722),summary=r(733),_=o.default.extend({props:{activeStep:{type:Number,default:0},orderItems:{type:Array,default:function(){return[]}}},mixins:[summary.a],computed:{carts:function(){return this.orderItems.length>0?this.orderItems:this.$store.state.shoppingCart.filter((function(t){return t.isSelected}))},displayButton:function(){return this.activeStep===c.a.PAYMENT?"Confirm Order":"Next"}},methods:{checkout:function(){this.$nuxt.$emit(n.a.CHECK_OUT_NEXT),this.$nuxt.$emit(n.a.CHECKOUT_SLIDE_RIGHT),this.$nuxt.$emit(n.a.SCROLL_TOP)}}}),m=r(808),l=r(8);var component=Object(l.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style.root},[r("div",{class:t.$style.summary},[r("div",{class:t.$style.item},[r("label",[t._v("SubTotal")]),t._v(" "),r("span",[t._v(t._s(t.$formatCurrency(t.subTotal)))])]),t._v(" "),r("div",{class:t.$style.item},[r("label",[t._v("Tax")]),t._v(" "),r("span",[t._v(t._s(t.$formatCurrency(t.tax)))])]),t._v(" "),r("div",{class:t.$style.item},[r("label",[t._v("Shipping")]),t._v(" "),r("span",[t._v(t._s(t.$formatCurrency(t.shippingFee)))])]),t._v(" "),r("div",{class:t.$style.item},[r("h2",[t._v("Order total")]),t._v(" "),r("span",{class:t.$style.total},[t._v(t._s(t.$formatCurrency(t.orderTotal)))])])]),t._v(" "),0===t.orderItems.length?r("el-button",{class:[t.$style.btn,0===t.carts.length&&t.$style.disabled],attrs:{disabled:0===t.carts.length,type:"primary"},on:{click:t.checkout}},[t._v(t._s(t.displayButton))]):t._e()],1)}),[],!1,(function(t){this.$style=m.default.locals||m.default}),null,null);e.default=component.exports}}]);