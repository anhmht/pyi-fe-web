(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6,29,35,37,38,86,87],{566:function(t,e,o){"use strict";o.d(e,"a",(function(){return r})),o.d(e,"c",(function(){return n})),o.d(e,"b",(function(){return c}));var r={CONTACT_INFO:0,SHIPPING_INFO:1,DELIVERY_METHOD:2,PAYMENT:3},n=[{id:r.CONTACT_INFO,name:"Contact Info"},{id:r.SHIPPING_INFO,name:"Shipping Info"},{id:r.DELIVERY_METHOD,name:"Delivery Method"},{id:r.PAYMENT,name:"Payment"}],c={email:"anhmht@mail.com",firstName:"Anh",lastName:"Mai",address:"139/27 Bo Bao Tan Thang",apt:"",city:"Ho Chi Minh",country:"Vietnam",state:"Ho Chi Minh",zip:"700000",phone:"0989898989",deliveryMethod:{id:1,name:"Ground"}}},570:function(t,e,o){var content=o(634);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("695ae2d2",content,!0,{sourceMap:!1})},571:function(t,e,o){var content=o(636);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("78cdab36",content,!0,{sourceMap:!1})},572:function(t,e,o){var content=o(638);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("ed2457ae",content,!0,{sourceMap:!1})},591:function(t,e,o){var content=o(723);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("123fe3ed",content,!0,{sourceMap:!1})},618:function(t,e,o){"use strict";o.d(e,"c",(function(){return C})),o.d(e,"a",(function(){return I})),o.d(e,"e",(function(){return S})),o.d(e,"d",(function(){return w})),o.d(e,"b",(function(){return z}));o(70),o(7),o(97),o(27),o(79);var r,n=o(617),c=o.n(n),_=new Uint8Array(16);function l(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(_)}var d=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var m=function(t){return"string"==typeof t&&d.test(t)},h=[],f=0;f<256;++f)h.push((f+256).toString(16).substr(1));var v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(h[t[e+0]]+h[t[e+1]]+h[t[e+2]]+h[t[e+3]]+"-"+h[t[e+4]]+h[t[e+5]]+"-"+h[t[e+6]]+h[t[e+7]]+"-"+h[t[e+8]]+h[t[e+9]]+"-"+h[t[e+10]]+h[t[e+11]]+h[t[e+12]]+h[t[e+13]]+h[t[e+14]]+h[t[e+15]]).toLowerCase();if(!m(o))throw TypeError("Stringified UUID is invalid");return o};var y=function(t,e,o){var r=(t=t||{}).random||(t.rng||l)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){o=o||0;for(var i=0;i<16;++i)e[o+i]=r[i];return e}return v(r)};function C(t){if(0===t.length)return[];var e,i,o=c()(t),map={},r=[];for(i=0;i<o.length;i+=1)map[o[i].id]=i,o[i].children=[];for(i=0;i<o.length;i+=1)(e=o[i]).parentId?o[map[e.parentId]].children.push(e):r.push(e);return r}var k=[];function I(t,e){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(e){var r=t.find((function(t){return t.id===e}));return o||k.unshift(r),I(t,null==r?void 0:r.parentId,!1)}var n=c()(k);return k=[],n}var S=function(t){return new Promise((function(e){setTimeout(e,t)}))},$=function(data){return"string"==typeof data?data.split(","):Array.isArray(data)?data:[]},x=function(data){return"string"==typeof data?parseInt(data,10):"number"==typeof data?data:void 0},w=function(t,e){var filter={color:[],size:[],collection:[],category:e};return t.priceFrom&&(filter.priceFrom=x(t.priceFrom)||void 0),t.priceTo&&(filter.priceTo=x(t.priceTo)||void 0),t.color&&(filter.color=$(t.color)),t.size&&(filter.size=$(t.size)),t.collection&&(filter.collection=$(t.collection)),filter},z=function(){return y()}},633:function(t,e,o){"use strict";var r=o(570),n=o.n(r);o.d(e,"default",(function(){return n.a}))},634:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".CheckoutItem__root_NFgm8{display:flex;padding:var(--space-2x) 0;}.CheckoutItem__root_NFgm8 .CheckoutItem__image_EvrCw img{-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;height:100px;min-width:100px}.CheckoutItem__root_NFgm8 .CheckoutItem__content_Uyxif{font-size:1.4rem;padding-left:var(--space);display:flex;width:100%}.CheckoutItem__root_NFgm8 .CheckoutItem__info_q2rze{margin-right:var(--space);width:100%}.CheckoutItem__root_NFgm8 .CheckoutItem__colorSize_O3juz{margin-top:var(--space-1o2);color:var(--color-secondary-text)}.CheckoutItem__root_NFgm8 .CheckoutItem__price_ZVw5M{font-size:1.4rem;font-weight:600}.CheckoutItem__root_NFgm8 .CheckoutItem__quantity_CoNll{margin-top:var(--space-1o2);}.CheckoutItem__root_NFgm8 .CheckoutItem__quantity_CoNll span+span{margin-left:var(--space)}@media only screen and (max-width:768px){.CheckoutItem__root_NFgm8 .CheckoutItem__content_Uyxif{flex-wrap:wrap}.CheckoutItem__root_NFgm8 .CheckoutItem__price_ZVw5M{margin-top:var(--space-1o2)}.CheckoutItem__root_NFgm8 h3{max-width:250px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}}@media only screen and (max-width:539px){.CheckoutItem__root_NFgm8 .CheckoutItem__image_EvrCw img{height:100px;min-width:60px}.CheckoutItem__root_NFgm8 h3{max-width:150px}}",""]),r.locals={root:"CheckoutItem__root_NFgm8",image:"CheckoutItem__image_EvrCw",content:"CheckoutItem__content_Uyxif",info:"CheckoutItem__info_q2rze",colorSize:"CheckoutItem__colorSize_O3juz",price:"CheckoutItem__price_ZVw5M",quantity:"CheckoutItem__quantity_CoNll"},t.exports=r},635:function(t,e,o){"use strict";var r=o(571),n=o.n(r);o.d(e,"default",(function(){return n.a}))},636:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".CheckoutSummary__root_Mb0b5{font-size:1.4rem;}.CheckoutSummary__root_Mb0b5 .CheckoutSummary__summary_prZdl{margin-top:var(--space)}.CheckoutSummary__root_Mb0b5 .CheckoutSummary__item_zDOfa{display:flex;align-items:center;justify-content:space-between;padding:var(--space) 0;}.CheckoutSummary__root_Mb0b5 .CheckoutSummary__item_zDOfa span{text-align:right;font-weight:600}.CheckoutSummary__root_Mb0b5 .CheckoutSummary__item_zDOfa+.CheckoutSummary__item_zDOfa{border-top:1px solid var(--color-bg-secondary)}.CheckoutSummary__root_Mb0b5 .CheckoutSummary__total_hI46n{font-size:1.8rem}.CheckoutSummary__root_Mb0b5 .CheckoutSummary__btn_Q339z{width:100%;background:var(--color-primary);padding:var(--space);}.CheckoutSummary__root_Mb0b5 .CheckoutSummary__btn_Q339z:hover{opacity:.7}.CheckoutSummary__root_Mb0b5 .CheckoutSummary__btn_Q339z.CheckoutSummary__disabled_4kbd1{background-color:#ffe380;border-color:#ffe380;}.CheckoutSummary__root_Mb0b5 .CheckoutSummary__btn_Q339z.CheckoutSummary__disabled_4kbd1:hover{opacity:1}@media only screen and (max-width:991px){.CheckoutSummary__root_Mb0b5 .CheckoutSummary__btn_Q339z{position:fixed;bottom:0;width:100%;height:60px;left:0;z-index:100}}",""]),r.locals={root:"CheckoutSummary__root_Mb0b5",summary:"CheckoutSummary__summary_prZdl",item:"CheckoutSummary__item_zDOfa",total:"CheckoutSummary__total_hI46n",btn:"CheckoutSummary__btn_Q339z",disabled:"CheckoutSummary__disabled_4kbd1"},t.exports=r},637:function(t,e,o){"use strict";var r=o(572),n=o.n(r);o.d(e,"default",(function(){return n.a}))},638:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".CheckoutShippingInfo__root_A8uER{font-size:1.4rem;}.CheckoutShippingInfo__root_A8uER h4{font-size:1.6rem;font-weight:500;margin-bottm:var(--space-1o2)}.CheckoutShippingInfo__root_A8uER .CheckoutShippingInfo__delivery_Vvag\\+{margin-top:var(--space)}.CheckoutShippingInfo__root_A8uER .CheckoutShippingInfo__shipping_dA-FF{margin-bottom:var(--space)}",""]),r.locals={root:"CheckoutShippingInfo__root_A8uER",delivery:"CheckoutShippingInfo__delivery_Vvag+",shipping:"CheckoutShippingInfo__shipping_dA-FF"},t.exports=r},674:function(t,e,o){var content=o(953);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("1599bf88",content,!0,{sourceMap:!1})},687:function(t,e,o){"use strict";o.r(e);o(70),o(7),o(18);var r=o(0).default.extend({props:{cart:{type:Object,required:!0}},computed:{total:function(){return this.$formatCurrency(this.cart.quantity*this.cart.product.price)},getColor:function(){var t,e=this,o=null===(t=this.cart.product.colors)||void 0===t?void 0:t.find((function(t){return t.id===e.cart.colorId}));return null==o?void 0:o.name},getSize:function(){var t,e=this,o=null===(t=this.cart.product.sizes)||void 0===t?void 0:t.find((function(t){return t.id===e.cart.sizeId}));return null==o?void 0:o.name}}}),n=o(633),c=o(9);var component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("div",{class:t.$style.image},[o("img",{attrs:{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",alt:"Product"}})]),t._v(" "),o("div",{class:t.$style.content},[o("div",{class:t.$style.info},[o("h3",[o("nuxt-link",{attrs:{to:"/product"+t.cart.product.path}},[t._v("\n          "+t._s(t.cart.product.name)+"\n        ")])],1),t._v(" "),o("div",{class:t.$style.colorSize},[t._v(t._s(t.getColor)+" | "+t._s(t.getSize))]),t._v(" "),o("div",{class:t.$style.quantity},[o("span",[t._v("quantity: "+t._s(t.cart.quantity))]),t._v(" "),o("span",[t._v("price: "+t._s(t.$formatCurrency(t.cart.product.price)))])])]),t._v(" "),o("div",{class:t.$style.price},[t._v("\n      "+t._s(t.total)+"\n    ")])])])}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports},722:function(t,e,o){"use strict";var r=o(591),n=o.n(r);o.d(e,"default",(function(){return n.a}))},723:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".CheckoutList__root_2Z5Au .CheckoutList__item_PJqUz+.CheckoutList__item_PJqUz{border-top:1px solid var(--color-bg-secondary)}",""]),r.locals={root:"CheckoutList__root_2Z5Au",item:"CheckoutList__item_PJqUz"},t.exports=r},782:function(t,e,o){"use strict";o.r(e);o(345),o(21),o(7);var r=o(0),n=o(169),c=o(566),_=r.default.extend({props:{activeStep:{type:Number,default:0},orderItems:{type:Array,default:function(){return[]}}},computed:{carts:function(){return this.orderItems.length>0?this.orderItems:this.$store.state.shoppingCart.filter((function(t){return t.isSelected}))},subTotal:function(){return this.carts.reduce((function(t,e){return t+e.quantity*e.product.price}),0)},tax:function(){return.1*this.subTotal},orderTotal:function(){return this.subTotal+this.tax+this.shippingFee},shippingFee:function(){return this.carts.length?5:0},displayButton:function(){return this.activeStep===c.a.PAYMENT?"Confirm Order":"Next"}},methods:{checkout:function(){this.$nuxt.$emit(n.a.CHECK_OUT_NEXT),this.$nuxt.$emit(n.a.CHECKOUT_SLIDE_RIGHT),this.$nuxt.$emit(n.a.SCROLL_TOP)}}}),l=o(635),d=o(9);var component=Object(d.a)(_,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("div",{class:t.$style.summary},[o("div",{class:t.$style.item},[o("label",[t._v("SubTotal")]),t._v(" "),o("span",[t._v(t._s(t.$formatCurrency(t.subTotal)))])]),t._v(" "),o("div",{class:t.$style.item},[o("label",[t._v("Tax")]),t._v(" "),o("span",[t._v(t._s(t.$formatCurrency(t.tax)))])]),t._v(" "),o("div",{class:t.$style.item},[o("label",[t._v("Shipping")]),t._v(" "),o("span",[t._v(t._s(t.$formatCurrency(t.shippingFee)))])]),t._v(" "),o("div",{class:t.$style.item},[o("h2",[t._v("Order total")]),t._v(" "),o("span",{class:t.$style.total},[t._v(t._s(t.$formatCurrency(t.orderTotal)))])])]),t._v(" "),0===t.orderItems.length?o("el-button",{class:[t.$style.btn,0===t.carts.length&&t.$style.disabled],attrs:{disabled:0===t.carts.length,type:"primary"},on:{click:t.checkout}},[t._v(t._s(t.displayButton))]):t._e()],1)}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.default=component.exports},783:function(t,e,o){"use strict";o.r(e);o(345);var r=o(0),n=o(566),c=r.default.extend({props:{address:{type:Object,default:void 0},activeStep:{type:Number,default:n.a.PAYMENT}},computed:{isDisplayContactInfo:function(){return this.activeStep>n.a.CONTACT_INFO},isDisplayShippingInfo:function(){return this.activeStep>n.a.SHIPPING_INFO},isDisplayDeliveryMethod:function(){return this.activeStep>n.a.DELIVERY_METHOD}}}),_=o(637),l=o(9);var component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.address?o("el-row",{class:t.$style.root,attrs:{gutter:24}},[t.isDisplayShippingInfo?o("el-col",{class:t.$style.shipping,attrs:{md:8}},[o("h4",[t._v("Shipping Info")]),t._v(" "),t.address.firstName||t.address.lastName?o("div",{class:t.$style.item},[t._v("\n      "+t._s(t.address.firstName)+" "+t._s(t.address.lastName)+"\n    ")]):t._e(),t._v(" "),t.address.address||t.address.apt?o("div",{class:t.$style.item},[t._v("\n      "+t._s(t.address.address)+" "+t._s(t.address.apt)+"\n    ")]):t._e(),t._v(" "),t.address.state||t.address.country?o("div",{class:t.$style.item},[t._v("\n      "+t._s(t.$displayState(t.address.state,t.address.country))+",\n      "+t._s(t.$displayCountry(t.address.country))+"\n    ")]):t._e(),t._v(" "),t.address.city||t.address.zip?o("div",{class:t.$style.item},[t._v("\n      "+t._s(t.address.city)+", "+t._s(t.address.zip)+"\n    ")]):t._e()]):t._e(),t._v(" "),t.isDisplayContactInfo?o("el-col",{class:t.$style.contact,attrs:{md:8}},[o("h4",[t._v("Contact Info")]),t._v(" "),t.address.email?o("div",{class:t.$style.item},[o("label",[t._v("Email:")]),t._v(" "),o("span",[t._v(t._s(t.address.email))])]):t._e(),t._v(" "),t.address.phone?o("div",{class:t.$style.item},[o("label",[t._v("Phone:")]),t._v(" "),o("span",[t._v(t._s(t.address.phone))])]):t._e()]):t._e(),t._v(" "),t.isDisplayDeliveryMethod?o("el-col",{class:t.$style.delivery,attrs:{md:12}},[o("h4",[t._v("Delivery Method")]),t._v(" "),o("div",{class:t.$style.item},[t._v(t._s(t.address.deliveryMethod.name))])]):t._e()],1):t._e()}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);e.default=component.exports},813:function(t,e,o){"use strict";o.r(e);o(21),o(7);var r=o(0),n=o(687),c=r.default.extend({components:{CheckoutItem:n.default},props:{orderItems:{type:Array,default:function(){return[]}}},computed:{items:function(){return this.orderItems.length>0?this.orderItems:this.$store.state.shoppingCart.filter((function(t){return t.isSelected}))}}}),_=o(722),l=o(9);var component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},t._l(t.items,(function(e){return o("CheckoutItem",{key:e.id,class:t.$style.item,attrs:{cart:e}})})),1)}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);e.default=component.exports},952:function(t,e,o){"use strict";var r=o(674),n=o.n(r);o.d(e,"default",(function(){return n.a}))},953:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".CheckoutComplete__root_eI7s7 .CheckoutComplete__desc_ztIUX{font-size:1.4rem;margin-top:var(--space);color:var(--color-form-text)}.CheckoutComplete__root_eI7s7 .CheckoutComplete__complete_dUweo,.CheckoutComplete__root_eI7s7 .CheckoutComplete__skeleton_CoLXZ{margin-top:var(--space-2x)}.CheckoutComplete__root_eI7s7 .CheckoutComplete__tracking_C7G7w h4{font-size:1.6rem;font-weight:600}.CheckoutComplete__root_eI7s7 .CheckoutComplete__tracking_C7G7w p{color:var(--color-primary);font-size:1.4rem}.CheckoutComplete__root_eI7s7 .CheckoutComplete__list_gVcGW{margin-top:var(--space-1x5)}.CheckoutComplete__root_eI7s7 .CheckoutComplete__summary_yInQg >div{margin-top:0}.CheckoutComplete__root_eI7s7 .CheckoutComplete__order_u16TC{background:var(--color-bg-secondary-2);padding:var(--space-2x);border-radius:var(--radius-5)}",""]),r.locals={root:"CheckoutComplete__root_eI7s7",desc:"CheckoutComplete__desc_ztIUX",complete:"CheckoutComplete__complete_dUweo",skeleton:"CheckoutComplete__skeleton_CoLXZ",tracking:"CheckoutComplete__tracking_C7G7w",list:"CheckoutComplete__list_gVcGW",summary:"CheckoutComplete__summary_yInQg",order:"CheckoutComplete__order_u16TC"},t.exports=r},978:function(t,e,o){"use strict";o.r(e);var r=o(4),n=(o(36),o(21),o(7),o(97),o(0)),c=o(618),_=o(813),l=o(782),d=o(783),m=o(566),h=n.default.extend({components:{CheckoutList:_.default,CheckoutSummary:l.default,CheckoutShippingInfo:d.default},props:{orderId:{type:String,required:!0}},data:function(){return{isLoading:!1}},computed:{orderItems:function(){return this.$store.state.shoppingCart.filter((function(t){return t.isSelected}))},address:function(){return m.b}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,Object(c.e)(2e3);case 3:t.$confetti.start(),t.isLoading=!1,setTimeout((function(){t.$confetti.stop()}),5e3);case 6:case"end":return e.stop()}}),e)})))()}}),f=o(952),v=o(9);var component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("div",{staticClass:"container"},[o("h1",[t._v("Thanks for ordering")]),t._v(" "),o("p",{class:t.$style.desc},[t._v("\n      We appreciate your order, we're currently processing it. So hang tight\n      and we will send you confirmation very soon.\n    ")]),t._v(" "),t.isLoading?o("el-skeleton",{class:t.$style.skeleton,attrs:{rows:6,animated:""}}):o("div",{class:t.$style.complete},[o("div",{class:t.$style.tracking},[o("h4",[t._v("Tracking number")]),t._v(" "),o("p",[t._v("123231313123")])]),t._v(" "),o("el-row",{attrs:{gutter:24}},[o("el-col",{attrs:{lg:12}},[o("CheckoutList",{class:t.$style.list,attrs:{"order-items":t.orderItems}})],1),t._v(" "),o("el-col",{attrs:{lg:12}},[o("div",{class:t.$style.order},[o("CheckoutSummary",{class:t.$style.summary,attrs:{"order-items":t.orderItems}}),t._v(" "),o("CheckoutShippingInfo",{attrs:{address:t.address}})],1)])],1)],1)],1)])}),[],!1,(function(t){this.$style=f.default.locals||f.default}),null,null);e.default=component.exports}}]);