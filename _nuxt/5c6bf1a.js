(window.webpackJsonp=window.webpackJsonp||[]).push([[37,30,105],{1212:function(t,e,r){"use strict";r.r(e);r(9),r(30),r(31),r(494);var n=r(1),o=r(174),c=r(722),summary=r(733),d=n.default.extend({components:{CheckoutStep:function(){return r.e(3).then(r.bind(null,1221))}},props:{activeStep:{type:Number,required:!0}},data:function(){return{steps:c.c}},mixins:[summary.a],computed:{displayButton:function(){return this.activeStep===c.a.PAYMENT?"Confirm Order":"Next"}},methods:{prevStep:function(){this.$nuxt.$emit(o.a.CHECK_OUT_PREV),this.$nuxt.$emit(o.a.CHECKOUT_SLIDE_LEFT),this.$nuxt.$emit(o.a.SCROLL_TOP)},nextStep:function(){this.$nuxt.$emit(o.a.CHECK_OUT_NEXT),this.$nuxt.$emit(o.a.CHECKOUT_SLIDE_RIGHT),this.$nuxt.$emit(o.a.SCROLL_TOP)}}}),m=r(984),_=r(8);var component=Object(_.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style.root},[r("div",{staticClass:"container"},[r("div",{class:t.$style.wrapper},[r("div",{class:t.$style.action},[t.activeStep?r("el-button",{attrs:{type:"text"},on:{click:t.prevStep}},[t._v("Prev")]):t._e()],1),t._v(" "),r("div",{class:t.$style.steps},[r("CheckoutStep",{attrs:{"active-step":t.activeStep,steps:t.steps}})],1),t._v(" "),r("div",{class:t.$style.summary},[r("h3",[t._v("Total: "+t._s(t.$formatCurrency(t.orderTotal)))])]),t._v(" "),r("div",{class:t.$style.action},[r("el-button",{class:t.$style.btn,attrs:{type:"primary"},on:{click:t.nextStep}},[t._v(t._s(t.displayButton))])],1)])])])}),[],!1,(function(t){this.$style=m.default.locals||m.default}),null,null);e.default=component.exports},722:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"b",(function(){return c}));var n={CONTACT_INFO:0,SHIPPING_INFO:1,DELIVERY_METHOD:2,PAYMENT:3},o=[{id:n.CONTACT_INFO,name:"Contact Info"},{id:n.SHIPPING_INFO,name:"Shipping Info"},{id:n.DELIVERY_METHOD,name:"Delivery Method"},{id:n.PAYMENT,name:"Payment"}],c={email:"anhmht@mail.com",firstName:"Anh",lastName:"Mai",address:"139/27 Bo Bao Tan Thang",apt:"",city:"Ho Chi Minh",country:"Vietnam",state:"Ho Chi Minh",zip:"700000",phone:"0989898989",deliveryMethod:{id:1,name:"Ground"}}},733:function(t,e,r){"use strict";r(22),r(9),r(73);e.a={computed:{carts:function(){return this.$store.state.shoppingCart.filter((function(t){return t.isSelected}))},subTotal:function(){var t=this;return this.carts.reduce((function(e,r){return e+r.quantity*t.getPrice(r)}),0)},tax:function(){return.1*this.subTotal},orderTotal:function(){return this.subTotal+this.tax+this.shippingFee},shippingFee:function(){return this.carts.length?5:0}},methods:{getPrice:function(t){var e,r;if(!t.colorId||!t.sizeId)return t.product.price;var n=null===(e=t.product.colors)||void 0===e?void 0:e.find((function(e){return e.id===t.colorId})),o=null==n||null===(r=n.size)||void 0===r?void 0:r.find((function(s){return s.id===t.sizeId}));return(null==o?void 0:o.price)||t.product.price}}}},788:function(t,e,r){var content=r(985);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("a573e1b6",content,!0,{sourceMap:!1})},984:function(t,e,r){"use strict";var n=r(788),o=r.n(n);r.d(e,"default",(function(){return o.a}))},985:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,".CheckoutOderSummary__root_aHDyL{position:fixed;bottom:0;width:100%;background:#fff;z-index:1;padding:var(--space-1x5) 0;border-top:1px solid var(--color-bg-secondary);box-shadow:0 0 16px rgba(0,0,0,.15);}.CheckoutOderSummary__root_aHDyL .CheckoutOderSummary__wrapper_ZEpoO{display:flex;align-items:center}.CheckoutOderSummary__root_aHDyL .CheckoutOderSummary__summary_ixa7I{margin:0 var(--space-1x5);}.CheckoutOderSummary__root_aHDyL .CheckoutOderSummary__summary_ixa7I h3{font-size:2.8rem;font-weight:700}.CheckoutOderSummary__root_aHDyL .CheckoutOderSummary__steps_YhNCY{flex:1}.CheckoutOderSummary__root_aHDyL .CheckoutOderSummary__btn_rQl5m{background:var(--color-primary);padding:var(--space);}.CheckoutOderSummary__root_aHDyL .CheckoutOderSummary__btn_rQl5m:hover{opacity:.7}",""]),n.locals={root:"CheckoutOderSummary__root_aHDyL",wrapper:"CheckoutOderSummary__wrapper_ZEpoO",summary:"CheckoutOderSummary__summary_ixa7I",steps:"CheckoutOderSummary__steps_YhNCY",btn:"CheckoutOderSummary__btn_rQl5m"},t.exports=n}}]);