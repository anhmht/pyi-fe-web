(window.webpackJsonp=window.webpackJsonp||[]).push([[61,19,20,21],{568:function(t,r,e){var content=e(625);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("603c2631",content,!0,{sourceMap:!1})},581:function(t,r,e){var content=e(691);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("3437245f",content,!0,{sourceMap:!1})},582:function(t,r,e){var content=e(693);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("0e07bfbb",content,!0,{sourceMap:!1})},624:function(t,r,e){"use strict";var o=e(568),n=e.n(o);e.d(r,"default",(function(){return n.a}))},625:function(t,r,e){var o=e(15)((function(i){return i[1]}));o.push([t.i,".CartItem__root_H9z0H{display:flex;padding:var(--space-2x) 0;border-top:1px solid var(--color-bg-secondary);}.CartItem__root_H9z0H.CartItem__disabled_Pp20-{opacity:.5}.CartItem__root_H9z0H .CartItem__checkbox_beM1U{padding:var(--space)}.CartItem__root_H9z0H .CartItem__image_e8B4\\+ img{-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;height:180px;min-width:150px}.CartItem__root_H9z0H .CartItem__content_dvnoh{font-size:1.4rem;padding:0 var(--space);display:flex;width:100%}.CartItem__root_H9z0H .CartItem__info_IqXrV{margin-right:var(--space);width:100%}.CartItem__root_H9z0H .CartItem__colorSize_Z1aFD{color:var(--color-secondary-text)}.CartItem__root_H9z0H .CartItem__colorSize_Z1aFD,.CartItem__root_H9z0H .CartItem__price_Z9DZC{margin-top:var(--space-1o2)}.CartItem__root_H9z0H .CartItem__price_Z9DZC{font-size:1.4rem;font-weight:600}.CartItem__root_H9z0H .CartItem__quantity_8xH5g .el-input-number--mini{width:90px}.CartItem__root_H9z0H .CartItem__action_f3C6z{font-size:1.8rem;padding-left:var(--space);color:var(--color-secondary-text);}.CartItem__root_H9z0H .CartItem__action_f3C6z i{cursor:pointer;}.CartItem__root_H9z0H .CartItem__action_f3C6z i:hover{color:var(--color-primary-text)}@media only screen and (max-width:768px){.CartItem__root_H9z0H .CartItem__content_dvnoh{flex-wrap:wrap}.CartItem__root_H9z0H .CartItem__quantity_8xH5g{margin-top:var(--space-1o2)}.CartItem__root_H9z0H h3{max-width:250px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}}@media only screen and (max-width:539px){.CartItem__root_H9z0H .CartItem__image_e8B4\\+ img{height:100px;min-width:60px}.CartItem__root_H9z0H h3{max-width:150px}}",""]),o.locals={root:"CartItem__root_H9z0H",disabled:"CartItem__disabled_Pp20-",checkbox:"CartItem__checkbox_beM1U",image:"CartItem__image_e8B4+",content:"CartItem__content_dvnoh",info:"CartItem__info_IqXrV",colorSize:"CartItem__colorSize_Z1aFD",price:"CartItem__price_Z9DZC",quantity:"CartItem__quantity_8xH5g",action:"CartItem__action_f3C6z"},t.exports=o},650:function(t,r,e){var content=e(844);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("74532ae1",content,!0,{sourceMap:!1})},685:function(t,r,e){"use strict";e.r(r);e(70),e(7),e(18);var o=e(121),n=e(0),_=e(55),c=n.default.extend({props:{cart:{type:Object,required:!0}},data:function(){return{selected:Boolean(this.cart.isSelected),quantityItem:Object(o.cloneDeep)(this.cart.quantity),cartItem:Object(o.cloneDeep)(this.cart)}},computed:{total:function(){return this.$formatCurrency(this.cart.quantity*this.cart.product.price)},getColor:function(){var t,r=this,e=null===(t=this.cartItem.product.colors)||void 0===t?void 0:t.find((function(t){return t.id===r.cartItem.colorId}));return null==e?void 0:e.name},getSize:function(){var t,r=this,e=null===(t=this.cartItem.product.sizes)||void 0===t?void 0:t.find((function(t){return t.id===r.cartItem.sizeId}));return null==e?void 0:e.name}},methods:{handleChange:function(t){this.cartItem.isSelected=t,this.$store.commit(_.Mutations.TYPE.UPDATE_CART,this.cartItem)},changeQuantity:function(t){this.cartItem.quantity=t,this.$store.commit(_.Mutations.TYPE.UPDATE_CART,this.cartItem)},handleRemove:function(){this.$store.commit(_.Mutations.TYPE.REMOVE_FROM_CART,this.cartItem)}}}),l=e(624),d=e(9);var component=Object(d.a)(c,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{class:[t.$style.root,!t.selected&&t.$style.disabled]},[e("div",{class:t.$style.checkbox},[e("el-checkbox",{on:{change:t.handleChange},model:{value:t.selected,callback:function(r){t.selected=r},expression:"selected"}})],1),t._v(" "),e("div",{class:t.$style.image},[e("img",{attrs:{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",alt:"Product"}})]),t._v(" "),e("div",{class:t.$style.content},[e("div",{class:t.$style.info},[e("h3",[e("nuxt-link",{attrs:{to:"/product"+t.cart.product.path}},[t._v("\n          "+t._s(t.cart.product.name)+"\n        ")])],1),t._v(" "),e("div",{class:t.$style.colorSize},[t._v(t._s(t.getColor)+" | "+t._s(t.getSize))]),t._v(" "),e("div",{class:t.$style.price},[t._v("\n        "+t._s(t.$formatCurrency(t.cart.product.price))+" (Total: "+t._s(t.total)+")\n      ")])]),t._v(" "),e("div",{class:t.$style.quantity},[e("el-input-number",{attrs:{size:"mini",min:1,max:10},on:{change:t.changeQuantity},model:{value:t.quantityItem,callback:function(r){t.quantityItem=r},expression:"quantityItem"}})],1)]),t._v(" "),e("div",{class:t.$style.action},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"},on:{click:t.handleRemove}})])])}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);r.default=component.exports},690:function(t,r,e){"use strict";var o=e(581),n=e.n(o);e.d(r,"default",(function(){return n.a}))},691:function(t,r,e){var o=e(15)((function(i){return i[1]}));o.push([t.i,".CartListProduct__root_XIWFr{margin-top:var(--space-2x)}",""]),o.locals={root:"CartListProduct__root_XIWFr"},t.exports=o},692:function(t,r,e){"use strict";var o=e(582),n=e.n(o);e.d(r,"default",(function(){return n.a}))},693:function(t,r,e){var o=e(15)((function(i){return i[1]}));o.push([t.i,".CartOrderSummary__root_lswe1{margin-top:var(--space-2x);background:var(--color-bg-secondary-2);padding:var(--space-2x);font-size:1.4rem;border-radius:var(--radius-5);}.CartOrderSummary__root_lswe1 h2{font-size:2rem;font-weight:500}.CartOrderSummary__root_lswe1 .CartOrderSummary__summary_vAcRK{margin-top:var(--space)}.CartOrderSummary__root_lswe1 .CartOrderSummary__item_gr97I{display:flex;align-items:center;justify-content:space-between;padding:var(--space) 0;}.CartOrderSummary__root_lswe1 .CartOrderSummary__item_gr97I span{text-align:right;font-weight:600}.CartOrderSummary__root_lswe1 .CartOrderSummary__item_gr97I+.CartOrderSummary__item_gr97I{border-top:1px solid var(--color-bg-secondary)}.CartOrderSummary__root_lswe1 .CartOrderSummary__total_6Uwpa{font-size:1.8rem}.CartOrderSummary__root_lswe1 .CartOrderSummary__btn_U9btT{width:100%;background:var(--color-primary);padding:var(--space);}.CartOrderSummary__root_lswe1 .CartOrderSummary__btn_U9btT:hover{opacity:.7}.CartOrderSummary__root_lswe1 .CartOrderSummary__btn_U9btT.CartOrderSummary__disabled_V1W9P{background-color:#ffe380;border-color:#ffe380;}.CartOrderSummary__root_lswe1 .CartOrderSummary__btn_U9btT.CartOrderSummary__disabled_V1W9P:hover{opacity:1}@media only screen and (max-width:991px){.CartOrderSummary__root_lswe1 .CartOrderSummary__btn_U9btT{position:fixed;bottom:0;width:100%;height:60px;left:0;z-index:100}}",""]),o.locals={root:"CartOrderSummary__root_lswe1",summary:"CartOrderSummary__summary_vAcRK",item:"CartOrderSummary__item_gr97I",total:"CartOrderSummary__total_6Uwpa",btn:"CartOrderSummary__btn_U9btT",disabled:"CartOrderSummary__disabled_V1W9P"},t.exports=o},803:function(t,r,e){"use strict";e.r(r);var o=e(0),n=e(685),_=o.default.extend({components:{CartItem:n.default},computed:{carts:function(){return this.$store.state.shoppingCart}}}),c=e(690),l=e(9);var component=Object(l.a)(_,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{class:t.$style.root},t._l(t.carts,(function(t){return e("CartItem",{key:t.id,attrs:{cart:t}})})),1)}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);r.default=component.exports},804:function(t,r,e){"use strict";e.r(r);e(21),e(7);var o=e(0).default.extend({computed:{carts:function(){return this.$store.state.shoppingCart.filter((function(t){return t.isSelected}))},subTotal:function(){return this.carts.reduce((function(t,r){return t+r.quantity*r.product.price}),0)},tax:function(){return.1*this.subTotal},orderTotal:function(){return this.subTotal+this.tax+this.shippingFee},shippingFee:function(){return this.carts.length?5:0}},methods:{checkout:function(){this.$router.push("/checkout")}}}),n=e(692),_=e(9);var component=Object(_.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{class:t.$style.root},[e("h2",[t._v("Order Summary")]),t._v(" "),e("div",{class:t.$style.summary},[e("div",{class:t.$style.item},[e("label",[t._v("SubTotal")]),t._v(" "),e("span",[t._v(t._s(t.$formatCurrency(t.subTotal)))])]),t._v(" "),e("div",{class:t.$style.item},[e("label",[t._v("Tax estimate")]),t._v(" "),e("span",[t._v(t._s(t.$formatCurrency(t.tax)))])]),t._v(" "),e("div",{class:t.$style.item},[e("label",[t._v("Shipping estimate")]),t._v(" "),e("span",[t._v(t._s(t.$formatCurrency(t.shippingFee)))])]),t._v(" "),e("div",{class:t.$style.item},[e("h2",[t._v("Order total")]),t._v(" "),e("span",{class:t.$style.total},[t._v(t._s(t.$formatCurrency(t.orderTotal)))])])]),t._v(" "),e("el-button",{class:[t.$style.btn,0===t.carts.length&&t.$style.disabled],attrs:{disabled:0===t.carts.length,type:"primary"},on:{click:t.checkout}},[t._v("Checkout")])],1)}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);r.default=component.exports},843:function(t,r,e){"use strict";var o=e(650),n=e.n(o);e.d(r,"default",(function(){return n.a}))},844:function(t,r,e){var o=e(15)((function(i){return i[1]}));o.push([t.i,".index__root_dAB1g{margin-top:var(--space-4x);}.index__root_dAB1g .index__empty_Rd3DH{margin-top:var(--space-2x)}.index__root_dAB1g h2{font-size:2rem;font-weight:500}.index__root_dAB1g .index__link_9tTas{color:var(--color-primary);}.index__root_dAB1g .index__link_9tTas:hover{opacity:.7}",""]),o.locals={root:"index__root_dAB1g",empty:"index__empty_Rd3DH",link:"index__link_9tTas"},t.exports=o},993:function(t,r,e){"use strict";e.r(r);var o=e(0),n=e(803),_=e(804),c=o.default.extend({components:{CartListProduct:n.default,CartOrderSummary:_.default},name:"CartPage",computed:{carts:function(){return this.$store.state.shoppingCart}}}),l=e(843),d=e(9);var component=Object(d.a)(c,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{class:t.$style.root},[e("div",{staticClass:"container"},[e("h1",[t._v("Shopping cart")]),t._v(" "),e("el-row",{attrs:{gutter:32}},[e("el-col",{attrs:{lg:15}},[t.carts.length?e("CartListProduct"):e("div",{class:t.$style.empty},[e("h2",[t._v("There is nothing in your cart")]),t._v(" "),e("nuxt-link",{class:t.$style.link,attrs:{to:"/"}},[t._v("Continue shopping "),e("i",{staticClass:"fa fa-arrow-right"})])],1)],1),t._v(" "),e("el-col",{attrs:{lg:9}},[e("CartOrderSummary")],1)],1)],1)])}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);r.default=component.exports}}]);