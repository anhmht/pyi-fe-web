(window.webpackJsonp=window.webpackJsonp||[]).push([[48,15],{559:function(t,e,r){var content=r(564);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("d31b1a78",content,!0,{sourceMap:!1})},561:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"c",(function(){return c})),r.d(e,"b",(function(){return l}));var o=[{id:"1",color:"black",name:"black"},{id:"2",color:"grey",name:"grey"},{id:"3",color:"white",name:"white"}],c=[{id:"1",name:"XXS",disabled:!0},{id:"2",name:"XS",disabled:!1},{id:"3",name:"S",disabled:!1},{id:"4",name:"M",disabled:!1},{id:"5",name:"L",disabled:!1},{id:"6",name:"XL",disabled:!1},{id:"7",name:"XXL",disabled:!1}],n=[{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",alt:"Front of men's Basic Tee in black."},{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",alt:"Front of men's Basic Tee in black."},{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",alt:"Front of men's Basic Tee in black."},{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",alt:"Front of men's Basic Tee in black."}],d=[{id:"1",name:"Clothing",path:"/clothing"},{id:"2",name:"Men",path:"/men",parentId:"1"}],l=[{id:"1",name:"Never Underestimate a Women, Who Loves Guinea Pigs and Was Born in Your Birthday",path:"/basic-tee",images:n,price:35,colors:o,sizes:c,categories:d},{id:"2",name:"Basic Tee",path:"/basic-tee",images:n,price:35,colors:o,sizes:c,categories:d},{id:"3",name:"Basic Tee",path:"/basic-tee",images:n,price:35,colors:o,sizes:c,categories:d},{id:"4",name:"Basic Tee",path:"/basic-tee",images:n,price:35,colors:o,sizes:c,categories:d}]},562:function(t,e,r){"use strict";r.r(e);var o=r(0).default.extend({props:{data:{type:Object,required:!0}}}),c=r(563),n=r(9);var component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style.root},[r("div",{staticClass:"group relative"},[r("div",{staticClass:"bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"},[r("img",{staticClass:"object-center object-cover",class:t.$style.image,attrs:{src:t.data.images[0].src,alt:t.data.images[0].alt}})]),t._v(" "),r("div",{staticClass:"mt-4 flex justify-between"},[r("div",[r("h3",{staticClass:"text-gray-700",class:t.$style.title},[r("nuxt-link",{attrs:{to:"/product"+t.data.path}},[r("span",{staticClass:"absolute inset-0",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(t.data.name)+"\n          ")])],1),t._v(" "),r("p",{staticClass:"mt-1 text-gray-500"},[t._v(t._s(t.data.colors[0].name))])]),t._v(" "),r("p",{staticClass:"font-medium text-gray-900"},[t._v("\n        "+t._s(t.$formatCurrency(t.data.price))+"\n      ")])])]),t._v(" "),r("div",[r("el-button",{staticClass:"bg-gray-200",class:t.$style.btn},[t._v("Add To Cart")])],1)])}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports},563:function(t,e,r){"use strict";var o=r(559),c=r.n(o);r.d(e,"default",(function(){return c.a}))},564:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".ProductItem__root_kN0xt{font-size:1.5rem;}.ProductItem__root_kN0xt .ProductItem__image_VgVEa{width:100%;height:30rem}.ProductItem__root_kN0xt .ProductItem__title_4Aj6X{height:45px;overflow:hidden;margin-right:var(--space-1o2)}.ProductItem__root_kN0xt .ProductItem__btn_rEdkq{border:none;margin-top:var(--space);width:100%;color:var(--color-primary-text);transition:var(--transition-300);}.ProductItem__root_kN0xt .ProductItem__btn_rEdkq:hover{color:#fff;background:var(--color-primary)}",""]),o.locals={root:"ProductItem__root_kN0xt",image:"ProductItem__image_VgVEa",title:"ProductItem__title_4Aj6X",btn:"ProductItem__btn_rEdkq"},t.exports=o},610:function(t,e,r){var content=r(771);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("78f64b5e",content,!0,{sourceMap:!1})},770:function(t,e,r){"use strict";var o=r(610),c=r.n(o);r.d(e,"default",(function(){return c.a}))},771:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".FeatureProduct__root_mDrj1{padding:var(--space-4x) 0;}.FeatureProduct__root_mDrj1 .FeatureProduct__feature_A21n5{margin-top:var(--space-2x5)}.FeatureProduct__root_mDrj1 .FeatureProduct__product_ZISBS{transition-delay:1s}",""]),o.locals={root:"FeatureProduct__root_mDrj1",feature:"FeatureProduct__feature_A21n5",product:"FeatureProduct__product_ZISBS"},t.exports=o},834:function(t,e,r){"use strict";r.r(e);var o=r(0),c=r(562),n=r(561),d=o.default.extend({components:{ProductItem:c.default},data:function(){return{products:n.b}}}),l=r(770),m=r(9);var component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style.root},[r("div",{staticClass:"container"},[r("h1",[t._v("Feature Products")]),t._v(" "),r("div",{staticClass:"mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",class:t.$style.feature},t._l(t.products,(function(e){return r("ProductItem",{key:e.id,class:t.$style.product,attrs:{data:e}})})),1)])])}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.default=component.exports}}]);