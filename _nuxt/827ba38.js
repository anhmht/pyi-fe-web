(window.webpackJsonp=window.webpackJsonp||[]).push([[74,20,21,22],{1007:function(t,r,e){"use strict";e.r(r);var o=e(1),n=e(868),c=o.default.extend({components:{CartItem:n.default},computed:{carts:function(){return this.$store.state.shoppingCart}}}),_=e(874),l=e(8);var component=Object(l.a)(c,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{class:t.$style.root},t._l(t.carts,(function(t){return e("CartItem",{key:t.id,attrs:{cart:t}})})),1)}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);r.default=component.exports},1008:function(t,r,e){"use strict";e.r(r);var o=e(1),summary=e(733),n=o.default.extend({mixins:[summary.a],methods:{checkout:function(){this.$router.push("/checkout")}}}),c=e(876),_=e(8);var component=Object(_.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{class:t.$style.root},[e("h2",[t._v("Order Summary")]),t._v(" "),e("div",{class:t.$style.summary},[e("div",{class:t.$style.item},[e("label",[t._v("SubTotal")]),t._v(" "),e("span",[t._v(t._s(t.$formatCurrency(t.subTotal)))])]),t._v(" "),e("div",{class:t.$style.item},[e("label",[t._v("Tax estimate")]),t._v(" "),e("span",[t._v(t._s(t.$formatCurrency(t.tax)))])]),t._v(" "),e("div",{class:t.$style.item},[e("label",[t._v("Shipping estimate")]),t._v(" "),e("span",[t._v(t._s(t.$formatCurrency(t.shippingFee)))])]),t._v(" "),e("div",{class:t.$style.item},[e("h2",[t._v("Order total")]),t._v(" "),e("span",{class:t.$style.total},[t._v(t._s(t.$formatCurrency(t.orderTotal)))])])]),t._v(" "),e("el-button",{class:[t.$style.btn,0===t.carts.length&&t.$style.disabled],attrs:{disabled:0===t.carts.length,type:"primary"},on:{click:t.checkout}},[t._v("Checkout")])],1)}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);r.default=component.exports},1057:function(t,r,e){"use strict";var o=e(825),n=e.n(o);e.d(r,"default",(function(){return n.a}))},1058:function(t,r,e){var o=e(15)((function(i){return i[1]}));o.push([t.i,".index__root_dAB1g{margin-top:var(--space-4x);}.index__root_dAB1g .index__empty_Rd3DH{margin-top:var(--space-2x)}.index__root_dAB1g h2{font-size:2rem;font-weight:500}.index__root_dAB1g .index__link_9tTas{color:var(--color-primary);}.index__root_dAB1g .index__link_9tTas:hover{opacity:.7}",""]),o.locals={root:"index__root_dAB1g",empty:"index__empty_Rd3DH",link:"index__link_9tTas"},t.exports=o},1223:function(t,r,e){"use strict";e.r(r);var o=e(1),n=e(1007),c=e(1008),_=o.default.extend({components:{CartListProduct:n.default,CartOrderSummary:c.default},name:"CartPage",computed:{carts:function(){return this.$store.state.shoppingCart}}}),l=e(1057),d=e(8);var component=Object(d.a)(_,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{class:t.$style.root},[e("div",{staticClass:"container"},[e("h1",[t._v("Shopping cart")]),t._v(" "),e("el-row",{attrs:{gutter:32}},[e("el-col",{attrs:{lg:15}},[t.carts.length?e("CartListProduct"):e("div",{class:t.$style.empty},[e("h2",[t._v("There is nothing in your cart")]),t._v(" "),e("nuxt-link",{class:t.$style.link,attrs:{to:"/"}},[t._v("Continue shopping "),e("i",{staticClass:"fa fa-arrow-right"})])],1)],1),t._v(" "),e("el-col",{attrs:{lg:9}},[e("CartOrderSummary")],1)],1)],1)])}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);r.default=component.exports},724:function(t,r,e){var content=e(796);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("603c2631",content,!0,{sourceMap:!1})},733:function(t,r,e){"use strict";e(22),e(9),e(73);r.a={computed:{carts:function(){return this.$store.state.shoppingCart.filter((function(t){return t.isSelected}))},subTotal:function(){var t=this;return this.carts.reduce((function(r,e){return r+e.quantity*t.getPrice(e)}),0)},tax:function(){return.1*this.subTotal},orderTotal:function(){return this.subTotal+this.tax+this.shippingFee},shippingFee:function(){return this.carts.length?5:0}},methods:{getPrice:function(t){var r,e;if(!t.colorId||!t.sizeId)return t.product.price;var o=null===(r=t.product.colors)||void 0===r?void 0:r.find((function(r){return r.id===t.colorId})),n=null==o||null===(e=o.size)||void 0===e?void 0:e.find((function(s){return s.id===t.sizeId}));return(null==n?void 0:n.price)||t.product.price}}}},736:function(t,r,e){"use strict";e(73),e(9),e(19);r.a={data:function(){return{cartItem:void 0}},computed:{total:function(){return this.cartItem.quantity*this.price},getColor:function(){var t,r=this,e=null===(t=this.cartItem.product.colors)||void 0===t?void 0:t.find((function(t){return t.id===r.cartItem.colorId}));return null==e?void 0:e.name},getSize:function(){var t,r,e=this,o=null===(t=this.cartItem.product.colors)||void 0===t?void 0:t.find((function(t){return t.id===e.cartItem.colorId})),n=null==o||null===(r=o.size)||void 0===r?void 0:r.find((function(t){return t.id===e.cartItem.sizeId}));return null==n?void 0:n.name},price:function(){var t,r,e=this;if(!this.cartItem.colorId||!this.cartItem.sizeId)return this.cartItem.product.price;var o=null===(t=this.cartItem.product.colors)||void 0===t?void 0:t.find((function(t){return t.id===e.cartItem.colorId})),n=null==o||null===(r=o.size)||void 0===r?void 0:r.find((function(t){return t.id===e.cartItem.sizeId}));return(null==n?void 0:n.price)||this.cartItem.product.price}}}},743:function(t,r,e){var content=e(875);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("3437245f",content,!0,{sourceMap:!1})},744:function(t,r,e){var content=e(877);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("0e07bfbb",content,!0,{sourceMap:!1})},795:function(t,r,e){"use strict";var o=e(724),n=e.n(o);e.d(r,"default",(function(){return n.a}))},796:function(t,r,e){var o=e(15)((function(i){return i[1]}));o.push([t.i,".CartItem__root_H9z0H{display:flex;padding:var(--space-2x) 0;border-top:1px solid var(--color-bg-secondary);}.CartItem__root_H9z0H.CartItem__disabled_Pp20-{opacity:.5}.CartItem__root_H9z0H .CartItem__checkbox_beM1U{padding:var(--space)}.CartItem__root_H9z0H .CartItem__image_e8B4\\+ img{-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;height:180px;min-width:150px}.CartItem__root_H9z0H .CartItem__content_dvnoh{font-size:1.4rem;padding:0 var(--space);display:flex;width:100%}.CartItem__root_H9z0H .CartItem__info_IqXrV{margin-right:var(--space);width:100%}.CartItem__root_H9z0H .CartItem__colorSize_Z1aFD{color:var(--color-secondary-text)}.CartItem__root_H9z0H .CartItem__colorSize_Z1aFD,.CartItem__root_H9z0H .CartItem__price_Z9DZC{margin-top:var(--space-1o2)}.CartItem__root_H9z0H .CartItem__price_Z9DZC{font-size:1.4rem;font-weight:600}.CartItem__root_H9z0H .CartItem__quantity_8xH5g .el-input-number--mini{width:90px}.CartItem__root_H9z0H .CartItem__action_f3C6z{font-size:1.8rem;padding-left:var(--space);color:var(--color-secondary-text);}.CartItem__root_H9z0H .CartItem__action_f3C6z i{cursor:pointer;}.CartItem__root_H9z0H .CartItem__action_f3C6z i:hover{color:var(--color-primary-text)}@media only screen and (max-width:768px){.CartItem__root_H9z0H .CartItem__content_dvnoh{flex-wrap:wrap}.CartItem__root_H9z0H .CartItem__quantity_8xH5g{margin-top:var(--space-1o2)}.CartItem__root_H9z0H h3{max-width:250px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}}@media only screen and (max-width:539px){.CartItem__root_H9z0H .CartItem__image_e8B4\\+ img{height:100px;min-width:60px}.CartItem__root_H9z0H h3{max-width:150px}}",""]),o.locals={root:"CartItem__root_H9z0H",disabled:"CartItem__disabled_Pp20-",checkbox:"CartItem__checkbox_beM1U",image:"CartItem__image_e8B4+",content:"CartItem__content_dvnoh",info:"CartItem__info_IqXrV",colorSize:"CartItem__colorSize_Z1aFD",price:"CartItem__price_Z9DZC",quantity:"CartItem__quantity_8xH5g",action:"CartItem__action_f3C6z"},t.exports=o},825:function(t,r,e){var content=e(1058);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("74532ae1",content,!0,{sourceMap:!1})},868:function(t,r,e){"use strict";e.r(r);var o=e(66),n=e(1),c=e(39),_=e(736),l=n.default.extend({props:{cart:{type:Object,required:!0}},mixins:[_.a],data:function(){return{selected:Boolean(this.cart.isSelected),quantityItem:Object(o.cloneDeep)(this.cart.quantity),cartItem:Object(o.cloneDeep)(this.cart)}},methods:{handleChange:function(t){this.cartItem.isSelected=t,this.$store.commit(c.Mutations.TYPE.UPDATE_CART,this.cartItem)},changeQuantity:function(t){this.cartItem.quantity=t,this.$store.commit(c.Mutations.TYPE.UPDATE_CART,this.cartItem)},handleRemove:function(){this.$store.commit(c.Mutations.TYPE.REMOVE_FROM_CART,this.cartItem)}}}),d=e(795),m=e(8);var component=Object(m.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{class:[t.$style.root,!t.selected&&t.$style.disabled]},[e("div",{class:t.$style.checkbox},[e("el-checkbox",{on:{change:t.handleChange},model:{value:t.selected,callback:function(r){t.selected=r},expression:"selected"}})],1),t._v(" "),e("div",{class:t.$style.image},[e("img",{attrs:{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",alt:"Product"}})]),t._v(" "),e("div",{class:t.$style.content},[e("div",{class:t.$style.info},[e("h3",[e("nuxt-link",{attrs:{to:"/product"+t.cart.product.path}},[t._v("\n          "+t._s(t.cart.product.name)+"\n        ")])],1),t._v(" "),e("div",{class:t.$style.colorSize},[t._v(t._s(t.getColor)+" | "+t._s(t.getSize))]),t._v(" "),e("div",{class:t.$style.price},[t._v("\n        "+t._s(t.$formatCurrency(t.price))+" (Total: "+t._s(t.$formatCurrency(t.total))+")\n      ")])]),t._v(" "),e("div",{class:t.$style.quantity},[e("el-input-number",{attrs:{size:"mini",min:1,max:10},on:{change:t.changeQuantity},model:{value:t.quantityItem,callback:function(r){t.quantityItem=r},expression:"quantityItem"}})],1)]),t._v(" "),e("div",{class:t.$style.action},[e("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"},on:{click:t.handleRemove}})])])}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);r.default=component.exports},874:function(t,r,e){"use strict";var o=e(743),n=e.n(o);e.d(r,"default",(function(){return n.a}))},875:function(t,r,e){var o=e(15)((function(i){return i[1]}));o.push([t.i,".CartListProduct__root_XIWFr{margin-top:var(--space-2x)}",""]),o.locals={root:"CartListProduct__root_XIWFr"},t.exports=o},876:function(t,r,e){"use strict";var o=e(744),n=e.n(o);e.d(r,"default",(function(){return n.a}))},877:function(t,r,e){var o=e(15)((function(i){return i[1]}));o.push([t.i,".CartOrderSummary__root_lswe1{margin-top:var(--space-2x);background:var(--color-bg-secondary-2);padding:var(--space-2x);font-size:1.4rem;border-radius:var(--radius-5);}.CartOrderSummary__root_lswe1 h2{font-size:2rem;font-weight:500}.CartOrderSummary__root_lswe1 .CartOrderSummary__summary_vAcRK{margin-top:var(--space)}.CartOrderSummary__root_lswe1 .CartOrderSummary__item_gr97I{display:flex;align-items:center;justify-content:space-between;padding:var(--space) 0;}.CartOrderSummary__root_lswe1 .CartOrderSummary__item_gr97I span{text-align:right;font-weight:600}.CartOrderSummary__root_lswe1 .CartOrderSummary__item_gr97I+.CartOrderSummary__item_gr97I{border-top:1px solid var(--color-bg-secondary)}.CartOrderSummary__root_lswe1 .CartOrderSummary__total_6Uwpa{font-size:1.8rem}.CartOrderSummary__root_lswe1 .CartOrderSummary__btn_U9btT{width:100%;background:var(--color-primary);padding:var(--space);}.CartOrderSummary__root_lswe1 .CartOrderSummary__btn_U9btT:hover{opacity:.7}.CartOrderSummary__root_lswe1 .CartOrderSummary__btn_U9btT.CartOrderSummary__disabled_V1W9P{background-color:#ffe380;border-color:#ffe380;}.CartOrderSummary__root_lswe1 .CartOrderSummary__btn_U9btT.CartOrderSummary__disabled_V1W9P:hover{opacity:1}@media only screen and (max-width:991px){.CartOrderSummary__root_lswe1 .CartOrderSummary__btn_U9btT{position:fixed;bottom:0;width:100%;height:60px;left:0;z-index:100}}",""]),o.locals={root:"CartOrderSummary__root_lswe1",summary:"CartOrderSummary__summary_vAcRK",item:"CartOrderSummary__item_gr97I",total:"CartOrderSummary__total_6Uwpa",btn:"CartOrderSummary__btn_U9btT",disabled:"CartOrderSummary__disabled_V1W9P"},t.exports=o}}]);