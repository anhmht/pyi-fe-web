(window.webpackJsonp=window.webpackJsonp||[]).push([[53,15,16],{559:function(t,e,o){var content=o(563);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("d31b1a78",content,!0,{sourceMap:!1})},560:function(t,e,o){var content=o(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("e524e838",content,!0,{sourceMap:!1})},561:function(t,e,o){"use strict";o.r(e);var r=o(0).default.extend({props:{data:{type:Object,required:!0}}}),n=o(562),c=o(9);var component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("div",{staticClass:"group relative"},[o("div",{staticClass:"bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"},[o("img",{staticClass:"object-center object-cover",class:t.$style.image,attrs:{src:t.data.images[0].src,alt:t.data.images[0].alt}})]),t._v(" "),o("div",{staticClass:"mt-4 flex justify-between"},[o("div",[o("h3",{staticClass:"text-gray-700",class:t.$style.title},[o("nuxt-link",{attrs:{to:"/product"+t.data.path}},[o("span",{staticClass:"absolute inset-0",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(t.data.name)+"\n          ")])],1),t._v(" "),o("p",{staticClass:"mt-1 text-gray-500"},[t._v(t._s(t.data.colors[0].name))])]),t._v(" "),o("p",{staticClass:"font-medium text-gray-900"},[t._v("\n        "+t._s(t.$formatCurrency(t.data.price))+"\n      ")])])]),t._v(" "),o("div",[o("el-button",{staticClass:"bg-gray-200",class:t.$style.btn},[t._v("Add To Cart")])],1)])}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports},562:function(t,e,o){"use strict";var r=o(559),n=o.n(r);o.d(e,"default",(function(){return n.a}))},563:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".ProductItem__root_kN0xt{font-size:1.5rem;}.ProductItem__root_kN0xt .ProductItem__image_VgVEa{width:100%;height:30rem}.ProductItem__root_kN0xt .ProductItem__title_4Aj6X{height:45px;overflow:hidden;margin-right:var(--space-1o2)}.ProductItem__root_kN0xt .ProductItem__btn_rEdkq{border:none;margin-top:var(--space);width:100%;color:var(--color-primary-text);transition:var(--transition-300);}.ProductItem__root_kN0xt .ProductItem__btn_rEdkq:hover{color:#fff;background:var(--color-primary)}",""]),r.locals={root:"ProductItem__root_kN0xt",image:"ProductItem__image_VgVEa",title:"ProductItem__title_4Aj6X",btn:"ProductItem__btn_rEdkq"},t.exports=r},574:function(t,e,o){var content=o(646);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("630557ba",content,!0,{sourceMap:!1})},575:function(t,e,o){"use strict";o.d(e,"a",(function(){return d}));var r=[{id:"1",color:"black",name:"black"},{id:"2",color:"grey",name:"grey"},{id:"3",color:"white",name:"white"}],n=[{id:"1",name:"XXS",disabled:!0},{id:"2",name:"XS",disabled:!1},{id:"3",name:"S",disabled:!1},{id:"4",name:"M",disabled:!1},{id:"5",name:"L",disabled:!1},{id:"6",name:"XL",disabled:!1},{id:"7",name:"XXL",disabled:!1}],c=[{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",alt:"Front of men's Basic Tee in black."},{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",alt:"Front of men's Basic Tee in black."},{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",alt:"Front of men's Basic Tee in black."},{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",alt:"Front of men's Basic Tee in black."}],l=[{id:"1",name:"Clothing",path:"/clothing"},{id:"2",name:"Men",path:"/men",parentId:"1"}],d=[{id:"1",name:"Never Underestimate a Women, Who Loves Guinea Pigs and Was Born in Your Birthday",path:"/basic-tee",images:c,price:35,colors:r,sizes:n,categories:l},{id:"2",name:"Basic Tee",path:"/basic-tee",images:c,price:35,colors:r,sizes:n,categories:l},{id:"3",name:"Basic Tee",path:"/basic-tee",images:c,price:35,colors:r,sizes:n,categories:l},{id:"4",name:"Basic Tee",path:"/basic-tee",images:c,price:35,colors:r,sizes:n,categories:l}]},576:function(t,e,o){"use strict";var r=o(560),n=o.n(r);o.d(e,"default",(function(){return n.a}))},577:function(t,e,o){var r=o(15),n=o(169),c=o(578),l=r((function(i){return i[1]})),d=n(c);l.push([t.i,".ProductCarousel__root_x77Ks .ProductCarousel__carousel_e\\+KNh{margin-top:var(--space-2x5);position:relative}.ProductCarousel__root_x77Ks .ProductCarousel__product_1kXY0{transition-delay:1s}.ProductCarousel__root_x77Ks .ProductCarousel__btnWrapper_ez7o-{top:0;right:0;left:0;width:100%;height:100%;margin:auto}.ProductCarousel__root_x77Ks .ProductCarousel__btn_A-8Lj,.ProductCarousel__root_x77Ks .ProductCarousel__btnWrapper_ez7o-{position:absolute}.ProductCarousel__root_x77Ks .ProductCarousel__btn_A-8Lj{z-index:1;top:50%;transform:translateY(-50%);width:40px;height:40px;background-color:#fff;background-image:url("+d+");background-position:50%;background-size:60%;background-repeat:no-repeat;opacity:.8;border-radius:50%;transition:opacity .3s;outline:none;cursor:pointer;box-shadow:1px 1px 6px rgba(0,0,0,.1607843137254902);}.ProductCarousel__root_x77Ks .ProductCarousel__btn_A-8Lj:hover{opacity:1}.ProductCarousel__root_x77Ks .ProductCarousel__prev_0C-e8{left:-20px;transform:rotate(180deg)}.ProductCarousel__root_x77Ks .ProductCarousel__next_52SUk{right:-20px}.ProductCarousel__root_x77Ks .ProductCarousel__pagination_8Y6-m{margin-top:var(--space-1x5);display:flex;justify-content:center;align-items:center;height:40px}.ProductCarousel__root_x77Ks .carousel__paginationBullet{width:8px;height:8px;margin:6px;background-color:var(--color-bg-secondary);transition:opacity .3s;opacity:1;outline-style:none;border-radius:50%;cursor:pointer;}.ProductCarousel__root_x77Ks .carousel__paginationBullet:hover{opacity:.7}.ProductCarousel__root_x77Ks .carousel__paginationBullet--active{background-color:var(--color-primary)}",""]),l.locals={root:"ProductCarousel__root_x77Ks",carousel:"ProductCarousel__carousel_e+KNh",product:"ProductCarousel__product_1kXY0",btnWrapper:"ProductCarousel__btnWrapper_ez7o-",btn:"ProductCarousel__btn_A-8Lj",prev:"ProductCarousel__prev_0C-e8",next:"ProductCarousel__next_52SUk",pagination:"ProductCarousel__pagination_8Y6-m"},t.exports=l},578:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZmZjtzdHJva2U6IzcwNzA3MDt9LmJ7Y2xpcC1wYXRoOnVybCgjYSk7fS5je2ZpbGw6IzNmNTFiNTt9PC9zdHlsZT48Y2xpcFBhdGggaWQ9ImEiPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwIDQ0NikiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGFzcz0iYiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwIC00NDYpIj48cGF0aCBjbGFzcz0iYyIgZD0iTS0yLjAxNi0xOGw2LDYtNiw2TC0zLjQyMi03LjQwNiwxLjE3Mi0xMmwtNC41OTQtNC41OTRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMiA0NzApIi8+PC9nPjwvc3ZnPg=="},580:function(t,e,o){"use strict";o.r(e);var r=o(0),n=o(995),c=o(989),l=o(990),d=o(991),_=o(561);n.a.use([c.a,l.a,d.a]);var m=r.default.extend({components:{ProductItem:_.default},props:{products:{type:Array,required:!0}},data:function(){return{swiper:void 0,isSwiperReady:!1}},computed:{isMobile:function(){return"mobile"===this.$mq}},mounted:function(){var t=this,e={slidesPerView:this.isMobile?1:4,slidesPerGroup:1,spaceBetween:20,loop:!0,loopFillGroupWithBlank:!0,speed:500,roundLengths:!0,autoHeight:!0,on:{init:function(){t.isSwiperReady=!0}},autoplay:{delay:5e3,disableOnInteraction:!1},lazy:{loadPrevNext:!0},navigation:{prevEl:".carousel__button--prev",nextEl:".carousel__button--next"},pagination:{el:".carousel__pagination",bulletClass:"carousel__paginationBullet",bulletActiveClass:"carousel__paginationBullet--active",clickable:!0}};this.$nextTick((function(){return t.swiper=new n.a(t.$refs.swiperContainer,e)}))}}),v=o(576),f=o(9);var component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("div",{class:t.$style.carousel},[o("div",{ref:"swiperContainer",staticClass:"swiper-container"},[o("div",{staticClass:"swiper-wrapper"},t._l(t.products,(function(e){return o("ProductItem",{key:e.id,class:[t.$style.product,"swiper-slide"],attrs:{data:e}})})),1)]),t._v(" "),t.isMobile?t._e():o("div",{class:t.$style.btnWrapper},[o("div",{class:[t.$style.btn,t.$style.prev,"carousel__button--prev"]}),t._v(" "),o("div",{class:[t.$style.btn,t.$style.next,"carousel__button--next"]})]),t._v(" "),o("div",{class:[t.$style.pagination,"carousel__pagination"]})])])}),[],!1,(function(t){this.$style=v.default.locals||v.default}),null,null);e.default=component.exports},645:function(t,e,o){"use strict";var r=o(574),n=o.n(r);o.d(e,"default",(function(){return n.a}))},646:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".ProductYouMayLike__root_IH0OD{padding-top:var(--space-4x)}",""]),r.locals={root:"ProductYouMayLike__root_IH0OD"},t.exports=r},693:function(t,e,o){"use strict";o.r(e);var r=o(0),n=o(575),c=o(580),l=r.default.extend({components:{ProductCarousel:c.default},data:function(){return{products:n.a}}}),d=o(645),_=o(9);var component=Object(_.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("div",{staticClass:"container"},[o("h1",[t._v("Product You May Like")]),t._v(" "),o("ProductCarousel",{attrs:{products:t.products}})],1)])}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports}}]);