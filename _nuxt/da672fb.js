(window.webpackJsonp=window.webpackJsonp||[]).push([[80,14,15,43,44,45,46,47,48,49,50,51],{1e3:function(t,e,o){"use strict";o.r(e);var r=o(1).default.extend({}),n=o(930),l=o(8);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style.root},[r("div",{staticClass:"container"},[r("el-row",{attrs:{gutter:24}},[r("el-col",{class:t.$style.image,attrs:{md:12}},[r("img",{attrs:{src:o(929),alt:"contact"}})]),t._v(" "),r("el-col",{class:t.$style.content,attrs:{md:12}},[r("div",{directives:[{name:"scroll-animate",rawName:"v-scroll-animate"}]},[r("h1",[t._v("Get in touch")]),t._v(" "),r("p",[t._v("\n            Donec rutrum congue leo eget malesuada. Proin eget tortor risus.\n            Pellentesque in ipsum id orci porta dapibus. Praesent sapien\n            massa, convallis a pellentesque nec, egestas non nisi. Mauris\n            blandit aliquet elit, eget tincidunt nibh pulvinar a.\n          ")]),t._v(" "),r("el-button",{class:t.$style.submitBtn,attrs:{type:"primary"}},[t._v("Contact us")])],1)])],1)],1)])}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports},1001:function(t,e,o){"use strict";o.r(e);o(99),o(9),o(81);var r=o(1).default.extend({data:function(){return{day:0,hour:0,minute:0,second:0}},mounted:function(){var t=this,e=new Date;e.setDate(e.getDate()+3);var o=e.getTime();setInterval((function(){var e=(new Date).getTime(),r=(o-e)/1e3;t.day=parseInt((r/86400).toString()),r%=86400,t.hour=parseInt((r/3600).toString()),r%=3600,t.minute=parseInt((r/60).toString()),t.second=parseInt((r%60).toString())}),1e3)}}),n=o(933),l=o(8);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style.root},[r("div",{staticClass:"container"},[r("el-row",{class:t.$style.row},[r("el-col",{attrs:{lg:12}},[r("div",{class:t.$style.image},[r("img",{attrs:{src:o(932),alt:"deal of the week"}})])]),t._v(" "),r("el-col",{class:t.$style.col,attrs:{lg:12}},[r("div",{directives:[{name:"scroll-animate",rawName:"v-scroll-animate"}],class:t.$style.content},[r("div",{class:t.$style.title},[r("h2",[t._v("Deal Of The Week")])]),t._v(" "),r("ul",{class:t.$style.timer},[r("li",[r("div",{class:t.$style.num},[t._v(t._s(t.day))]),t._v(" "),r("div",{class:t.$style.unit},[t._v("Day")])]),t._v(" "),r("li",[r("div",{class:t.$style.num},[t._v(t._s(t.hour))]),t._v(" "),r("div",{class:t.$style.unit},[t._v("Hours")])]),t._v(" "),r("li",[r("div",{class:t.$style.num},[t._v(t._s(t.minute))]),t._v(" "),r("div",{class:t.$style.unit},[t._v("Mins")])]),t._v(" "),r("li",[r("div",{class:t.$style.num},[t._v(t._s(t.second))]),t._v(" "),r("div",{class:t.$style.unit},[t._v("Sec")])])]),t._v(" "),r("div",{class:t.$style.btn},[r("el-button",{class:t.$style.submitBtn,attrs:{type:"primary"}},[t._v("Shop now")])],1)])])],1)],1)])}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports},1002:function(t,e,o){"use strict";o.r(e);var r=o(1),n=o(712),l=o(727),c=r.default.extend({components:{ProductItem:n.default},data:function(){return{products:l.a}}}),_=o(935),d=o(8);var component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("div",{staticClass:"container"},[o("h1",[t._v("Feature Products")]),t._v(" "),o("div",{staticClass:"mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",class:t.$style.feature},t._l(t.products,(function(e){return o("ProductItem",{key:e.id,class:t.$style.product,attrs:{data:e}})})),1)])])}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);e.default=component.exports},1003:function(t,e,o){"use strict";o.r(e);var r=o(1).default.extend({data:function(){return{data:[{title:"Fast shopping cart",icon:"fa fa-shopping-cart",content:"Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla\n            porttitor accumsan tincidunt."},{title:"Customer support 24/7",icon:"fa fa-phone",content:"Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla\n            porttitor accumsan tincidunt."},{title:"Gift code",icon:"fa fa-gift",content:"Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla\n            porttitor accumsan tincidunt."}]}}}),n=o(937),l=o(8);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style.root},[r("div",{staticClass:"container"},[r("el-row",{attrs:{gutter:24}},[r("el-col",{class:t.$style.body,attrs:{md:12}},[r("div",{directives:[{name:"scroll-animate",rawName:"v-scroll-animate"}],class:t.$style.content},[r("h1",[t._v("We built our business on great customer service")]),t._v(" "),r("p",[t._v("\n            Donec rutrum congue leo eget malesuada. Proin eget tortor risus.\n            Pellentesque in ipsum id orci porta dapibus. Praesent sapien\n            massa, convallis a pellentesque nec, egestas non nisi. Mauris\n            blandit aliquet elit, eget tincidunt nibh pulvinar a.\n          ")])])]),t._v(" "),r("el-col",{attrs:{md:12}},[r("div",{class:t.$style.image},[r("img",{directives:[{name:"scroll-animate",rawName:"v-scroll-animate"}],attrs:{src:o(779),alt:"Our service"}})])])],1),t._v(" "),r("el-row",{class:t.$style.incentive,attrs:{gutter:24}},t._l(t.data,(function(e,o){return r("el-col",{directives:[{name:"scroll-animate",rawName:"v-scroll-animate"}],key:o,style:{"--index":o},attrs:{md:8}},[r("i",{class:e.icon,attrs:{"aria-hidden":"true"}}),t._v(" "),r("h2",[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:"text-gray-500"},[t._v("\n          "+t._s(e.content)+"\n        ")])])})),1)],1)])}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports},1004:function(t,e,o){"use strict";o.r(e);var r=o(1).default.extend({}),n=o(939),l=o(8);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("div",{staticClass:"container"},[o("div",{class:t.$style.promo},[o("div",{staticClass:"pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48"},[o("div",{staticClass:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static"},[o("div",{directives:[{name:"scroll-animate",rawName:"v-scroll-animate"}],staticClass:"sm:max-w-lg"},[o("h1",{staticClass:"text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl"},[t._v("\n              Summer styles are finally here\n            ")]),t._v(" "),o("p",{staticClass:"mt-4 text-xl text-gray-500"},[t._v("\n              This year, our new summer collection will shelter you from the\n              harsh elements of a world that doesn't care if you live or die.\n            ")])]),t._v(" "),o("div",[o("div",{staticClass:"mt-10"},[t._m(0),t._v(" "),o("el-button",{directives:[{name:"scroll-animate",rawName:"v-scroll-animate"}],class:t.$style.submitBtn,attrs:{type:"primary"}},[t._v("Shop collection")])],1)])])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full",attrs:{"aria-hidden":"true"}},[o("div",{staticClass:"absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"},[o("div",{staticClass:"flex items-center space-x-6 lg:space-x-8"},[o("div",{staticClass:"flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8"},[o("div",{staticClass:"w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100"},[o("img",{staticClass:"w-full h-full object-center object-cover",attrs:{src:"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg",alt:""}})]),t._v(" "),o("div",{staticClass:"w-44 h-64 rounded-lg overflow-hidden"},[o("img",{staticClass:"w-full h-full object-center object-cover",attrs:{src:"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg",alt:""}})])]),t._v(" "),o("div",{staticClass:"flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8"},[o("div",{staticClass:"w-44 h-64 rounded-lg overflow-hidden"},[o("img",{staticClass:"w-full h-full object-center object-cover",attrs:{src:"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",alt:""}})]),t._v(" "),o("div",{staticClass:"w-44 h-64 rounded-lg overflow-hidden"},[o("img",{staticClass:"w-full h-full object-center object-cover",attrs:{src:"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg",alt:""}})]),t._v(" "),o("div",{staticClass:"w-44 h-64 rounded-lg overflow-hidden"},[o("img",{staticClass:"w-full h-full object-center object-cover",attrs:{src:"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg",alt:""}})])]),t._v(" "),o("div",{staticClass:"flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8"},[o("div",{staticClass:"w-44 h-64 rounded-lg overflow-hidden"},[o("img",{staticClass:"w-full h-full object-center object-cover",attrs:{src:"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg",alt:""}})]),t._v(" "),o("div",{staticClass:"w-44 h-64 rounded-lg overflow-hidden"},[o("img",{staticClass:"w-full h-full object-center object-cover",attrs:{src:"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg",alt:""}})])])])])])}],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports},1194:function(t,e,o){"use strict";o.r(e);var r=o(1),n=o(997),l=o(998),c=o(970),_=o(999),d=o(1e3),m=o(1001),v=o(1002),f=o(1003),y=o(1004),h=r.default.extend({components:{Banner:n.default,Category:_.default,FeatureProduct:v.default,Deal:m.default,BestSeller:l.default,Promo:y.default,Incentive:f.default,Contact:d.default,Blog:c.default},name:"IndexPage"}),x=o(8),component=Object(x.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Banner"),t._v(" "),o("Category"),t._v(" "),o("FeatureProduct"),t._v(" "),o("Deal"),t._v(" "),o("BestSeller"),t._v(" "),o("Incentive"),t._v(" "),o("Promo"),t._v(" "),o("Contact"),t._v(" "),o("Blog")],1)}),[],!1,null,null,null);e.default=component.exports},710:function(t,e,o){var content=o(714);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("d31b1a78",content,!0,{sourceMap:!1})},711:function(t,e,o){var content=o(731);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("e524e838",content,!0,{sourceMap:!1})},712:function(t,e,o){"use strict";o.r(e);var r=o(1),n="product-detail",l=o(39),c=r.default.extend({props:{data:{type:Object,required:!0}},methods:{handleClick:function(){var t={isOpen:!0,name:n,data:this.data};this.$store.commit(l.Mutations.TYPE.SET_MODAL,t)}}}),_=o(713),d=o(8);var component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("div",{staticClass:"group relative"},[o("div",{staticClass:"bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"},[o("img",{staticClass:"object-center object-cover",class:t.$style.image,attrs:{src:t.data.images[0].src,alt:t.data.images[0].alt}})]),t._v(" "),o("div",{staticClass:"mt-4 flex justify-between"},[o("div",[o("h3",{staticClass:"text-gray-700",class:t.$style.title},[o("nuxt-link",{attrs:{to:"/product"+t.data.path}},[o("span",{staticClass:"absolute inset-0",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(t.data.name)+"\n          ")])],1),t._v(" "),o("p",{staticClass:"mt-1 text-gray-500"},[o("el-rate",{attrs:{disabled:""},model:{value:t.data.rating,callback:function(e){t.$set(t.data,"rating",e)},expression:"data.rating"}})],1)]),t._v(" "),o("p",{staticClass:"font-medium text-gray-900"},[t._v("\n        "+t._s(t.$formatCurrency(t.data.price))+"\n      ")])])]),t._v(" "),o("div",[o("el-button",{class:t.$style.btn,on:{click:t.handleClick}},[t._v("Add To Cart")])],1)])}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);e.default=component.exports},713:function(t,e,o){"use strict";var r=o(710),n=o.n(r);o.d(e,"default",(function(){return n.a}))},714:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".ProductItem__root_kN0xt{font-size:1.5rem;}.ProductItem__root_kN0xt .ProductItem__image_VgVEa{width:100%;height:30rem}.ProductItem__root_kN0xt .ProductItem__title_4Aj6X{height:45px;overflow:hidden;margin-right:var(--space-1o2)}.ProductItem__root_kN0xt .ProductItem__btn_rEdkq{border:none;margin-top:var(--space);width:100%;color:var(--color-primary-text);transition:var(--transition-300);background-color:#e5e7eb;}.ProductItem__root_kN0xt .ProductItem__btn_rEdkq:hover{color:#fff;background:var(--color-primary)}",""]),r.locals={root:"ProductItem__root_kN0xt",image:"ProductItem__image_VgVEa",title:"ProductItem__title_4Aj6X",btn:"ProductItem__btn_rEdkq"},t.exports=r},727:function(t,e,o){"use strict";o.d(e,"a",(function(){return _}));var r=[{id:"1",color:"black",name:"black"},{id:"2",color:"grey",name:"grey"},{id:"3",color:"white",name:"white"}],n=[{id:"1",name:"XXS",disabled:!0},{id:"2",name:"XS",disabled:!1},{id:"3",name:"S",disabled:!1},{id:"4",name:"M",disabled:!1},{id:"5",name:"L",disabled:!1},{id:"6",name:"XL",disabled:!1},{id:"7",name:"XXL",disabled:!1}],l=[{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",alt:"Front of men's Basic Tee in black."},{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",alt:"Front of men's Basic Tee in black."},{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",alt:"Front of men's Basic Tee in black."},{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",alt:"Front of men's Basic Tee in black."}],c=[{id:"1",name:"Clothing",path:"/clothing"},{id:"2",name:"Men",path:"/men",parentId:"1"}],_=[{id:"1",name:"Never Underestimate a Women, Who Loves Guinea Pigs and Was Born in Your Birthday",path:"/women-summer-t-shirt",images:l,price:35,colors:r,sizes:n,categories:c},{id:"2",name:"Basic Tee",path:"/women-summer-t-shirt",images:l,price:35,colors:r,sizes:n,categories:c},{id:"3",name:"Basic Tee",path:"/women-summer-t-shirt",images:l,price:35,colors:r,sizes:n,categories:c},{id:"4",name:"Basic Tee",path:"/women-summer-t-shirt",images:l,price:35,colors:r,sizes:n,categories:c}]},730:function(t,e,o){"use strict";var r=o(711),n=o.n(r);o.d(e,"default",(function(){return n.a}))},731:function(t,e,o){var r=o(15),n=o(175),l=o(732),c=r((function(i){return i[1]})),_=n(l);c.push([t.i,".ProductCarousel__root_x77Ks .ProductCarousel__carousel_e\\+KNh{margin-top:var(--space-2x5);position:relative}.ProductCarousel__root_x77Ks .ProductCarousel__product_1kXY0{transition-delay:1s}.ProductCarousel__root_x77Ks .ProductCarousel__btnWrapper_ez7o-{top:0;right:0;left:0;width:100%;height:100%;margin:auto}.ProductCarousel__root_x77Ks .ProductCarousel__btn_A-8Lj,.ProductCarousel__root_x77Ks .ProductCarousel__btnWrapper_ez7o-{position:absolute}.ProductCarousel__root_x77Ks .ProductCarousel__btn_A-8Lj{z-index:1;top:50%;transform:translateY(-50%);width:40px;height:40px;background-color:#fff;background-image:url("+_+");background-position:50%;background-size:60%;background-repeat:no-repeat;opacity:.8;border-radius:50%;transition:opacity .3s;outline:none;cursor:pointer;box-shadow:1px 1px 6px rgba(0,0,0,.1607843137254902);}.ProductCarousel__root_x77Ks .ProductCarousel__btn_A-8Lj:hover{opacity:1}.ProductCarousel__root_x77Ks .ProductCarousel__prev_0C-e8{left:-20px;transform:rotate(180deg)}.ProductCarousel__root_x77Ks .ProductCarousel__next_52SUk{right:-20px}.ProductCarousel__root_x77Ks .ProductCarousel__pagination_8Y6-m{margin-top:var(--space-1x5);display:flex;justify-content:center;align-items:center;height:40px}.ProductCarousel__root_x77Ks .carousel__paginationBullet{width:8px;height:8px;margin:6px;background-color:var(--color-bg-secondary);transition:opacity .3s;opacity:1;outline-style:none;border-radius:50%;cursor:pointer;}.ProductCarousel__root_x77Ks .carousel__paginationBullet:hover{opacity:.7}.ProductCarousel__root_x77Ks .carousel__paginationBullet--active{background-color:var(--color-primary)}",""]),c.locals={root:"ProductCarousel__root_x77Ks",carousel:"ProductCarousel__carousel_e+KNh",product:"ProductCarousel__product_1kXY0",btnWrapper:"ProductCarousel__btnWrapper_ez7o-",btn:"ProductCarousel__btn_A-8Lj",prev:"ProductCarousel__prev_0C-e8",next:"ProductCarousel__next_52SUk",pagination:"ProductCarousel__pagination_8Y6-m"},t.exports=c},732:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZmZjtzdHJva2U6IzcwNzA3MDt9LmJ7Y2xpcC1wYXRoOnVybCgjYSk7fS5je2ZpbGw6IzNmNTFiNTt9PC9zdHlsZT48Y2xpcFBhdGggaWQ9ImEiPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwIDQ0NikiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGFzcz0iYiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwIC00NDYpIj48cGF0aCBjbGFzcz0iYyIgZD0iTS0yLjAxNi0xOGw2LDYtNiw2TC0zLjQyMi03LjQwNiwxLjE3Mi0xMmwtNC41OTQtNC41OTRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMiA0NzApIi8+PC9nPjwvc3ZnPg=="},735:function(t,e,o){"use strict";o.r(e);var r=o(1),n=o(1167),l=o(1162),c=o(1163),_=o(1164),d=o(712);n.a.use([l.a,c.a,_.a]);var m=r.default.extend({components:{ProductItem:d.default},props:{products:{type:Array,required:!0}},data:function(){return{swiper:void 0,isSwiperReady:!1}},computed:{isMobile:function(){return"mobile"===this.$mq}},mounted:function(){var t=this,e={slidesPerView:this.isMobile?1:4,slidesPerGroup:1,spaceBetween:20,loop:!0,loopFillGroupWithBlank:!0,speed:500,roundLengths:!0,autoHeight:!0,on:{init:function(){t.isSwiperReady=!0}},autoplay:{delay:5e3,disableOnInteraction:!1},lazy:{loadPrevNext:!0},navigation:{prevEl:".carousel__button--prev",nextEl:".carousel__button--next"},pagination:{el:".carousel__pagination",bulletClass:"carousel__paginationBullet",bulletActiveClass:"carousel__paginationBullet--active",clickable:!0}};this.$nextTick((function(){return t.swiper=new n.a(t.$refs.swiperContainer,e)}))}}),v=o(730),f=o(8);var component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("div",{class:t.$style.carousel},[o("div",{ref:"swiperContainer",staticClass:"swiper-container"},[o("div",{staticClass:"swiper-wrapper"},t._l(t.products,(function(e){return o("ProductItem",{key:e.id,class:[t.$style.product,"swiper-slide"],attrs:{data:e}})})),1)]),t._v(" "),t.isMobile?t._e():o("div",{class:t.$style.btnWrapper},[o("div",{class:[t.$style.btn,t.$style.prev,"carousel__button--prev"]}),t._v(" "),o("div",{class:[t.$style.btn,t.$style.next,"carousel__button--next"]})]),t._v(" "),o("div",{class:[t.$style.pagination,"carousel__pagination"]})])])}),[],!1,(function(t){this.$style=v.default.locals||v.default}),null,null);e.default=component.exports},762:function(t,e,o){var content=o(918);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("38160d84",content,!0,{sourceMap:!1})},763:function(t,e,o){var content=o(921);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("74ebf39c",content,!0,{sourceMap:!1})},764:function(t,e,o){var content=o(923);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("9f3139a0",content,!0,{sourceMap:!1})},765:function(t,e,o){var content=o(925);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("16959d68",content,!0,{sourceMap:!1})},766:function(t,e,o){var content=o(931);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("79e60d7e",content,!0,{sourceMap:!1})},767:function(t,e,o){var content=o(934);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("38ca6f44",content,!0,{sourceMap:!1})},768:function(t,e,o){var content=o(936);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("78f64b5e",content,!0,{sourceMap:!1})},769:function(t,e,o){var content=o(938);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("a2d64444",content,!0,{sourceMap:!1})},770:function(t,e,o){var content=o(940);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("10efad44",content,!0,{sourceMap:!1})},779:function(t,e,o){t.exports=o.p+"img/incentive.a0a9954.png"},917:function(t,e,o){"use strict";var r=o(762),n=o.n(r);o.d(e,"default",(function(){return n.a}))},918:function(t,e,o){var r=o(15),n=o(175),l=o(919),c=r((function(i){return i[1]})),_=n(l);c.push([t.i,".Banner__root_IRDl3{background-image:url("+_+");width:100%;height:700px;background-repeat:no-repeat;background-size:cover;background-position:50%}@media only screen and (max-width:1199px){.Banner__root_IRDl3{min-height:475px;height:58.34306vw}}",""]),c.locals={root:"Banner__root_IRDl3"},t.exports=c},919:function(t,e,o){t.exports=o.p+"img/banner.bea454f.png"},920:function(t,e,o){"use strict";var r=o(763),n=o.n(r);o.d(e,"default",(function(){return n.a}))},921:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".BestSeller__root_HddO7{padding-top:var(--space-4x)}",""]),r.locals={root:"BestSeller__root_HddO7"},t.exports=r},922:function(t,e,o){"use strict";var r=o(764),n=o.n(r);o.d(e,"default",(function(){return n.a}))},923:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".Blog__root_1gHpB{margin-top:var(--space-4x);}.Blog__root_1gHpB .Blog__blogs_yNu8f{margin-top:var(--space-2x5)}.Blog__root_1gHpB p{font-size:1.4rem}.Blog__root_1gHpB .Blog__blog_nMqE6 img{border-radius:var(--radius-5)}.Blog__root_1gHpB .Blog__blog_nMqE6 .Blog__category_wXnKV{margin:var(--space-1o2) 0;color:var(--color-primary);font-size:1.2rem;font-weight:500}.Blog__root_1gHpB .Blog__blog_nMqE6 h2{font-size:1.8rem;font-weight:600}.Blog__root_1gHpB .Blog__blog_nMqE6 p{margin-top:var(--space-1o2)}.Blog__root_1gHpB .Blog__link_H-Kvt{color:var(--color-primary);}.Blog__root_1gHpB .Blog__link_H-Kvt:hover{opacity:.7}.Blog__root_1gHpB .before-enter{opacity:0;transform:translateY(-100px);transition:all 1s ease-out}.Blog__root_1gHpB .enter{opacity:1;transform:translateY(0);transition-delay:calc(100ms*var(--index))}",""]),r.locals={root:"Blog__root_1gHpB",blogs:"Blog__blogs_yNu8f",blog:"Blog__blog_nMqE6",category:"Blog__category_wXnKV",link:"Blog__link_H-Kvt"},t.exports=r},924:function(t,e,o){"use strict";var r=o(765),n=o.n(r);o.d(e,"default",(function(){return n.a}))},925:function(t,e,o){var r=o(15),n=o(175),l=o(926),c=o(927),_=o(928),d=r((function(i){return i[1]})),m=n(l),v=n(c),f=n(_);d.push([t.i,".Category__root_RMPqC{margin-top:var(--space-4x);}.Category__root_RMPqC .Category__image_wNjgM{width:100%;background-repeat:no-repeat;background-size:cover;background-position:50%;border-radius:var(--radius-5)}.Category__root_RMPqC .Category__accessories_MSqVF{background-image:url("+m+");height:500px}.Category__root_RMPqC .Category__men_s7Ujx{background-image:url("+v+")}.Category__root_RMPqC .Category__men_s7Ujx,.Category__root_RMPqC .Category__women_A\\+llK{height:230px}.Category__root_RMPqC .Category__women_A\\+llK{background-image:url("+f+");margin-top:var(--space-2x5)}.Category__root_RMPqC .Category__modal_tfGl3{background:#000;opacity:.3;position:relative;height:100%;transition:var(--transition-300);cursor:pointer;border-radius:var(--radius-5);}.Category__root_RMPqC .Category__modal_tfGl3:hover{background:transparent;opacity:1;}.Category__root_RMPqC .Category__modal_tfGl3:hover h4{color:var(--color-primary-text)}.Category__root_RMPqC .Category__category_0aezz{position:absolute;bottom:0;left:0;padding:var(--space);}.Category__root_RMPqC .Category__category_0aezz h4{color:#fff}@media only screen and (max-width:991px){.Category__root_RMPqC .Category__accessories_MSqVF,.Category__root_RMPqC .Category__men_s7Ujx,.Category__root_RMPqC .Category__women_A\\+llK{height:300px}.Category__root_RMPqC .Category__men_s7Ujx{margin-top:var(--space-2x5)}}.Category__root_RMPqC .before-enter{opacity:0;transform:translateY(100px);transition:all .5s ease-out}.Category__root_RMPqC .enter{opacity:1;transform:translateY(0)}",""]),d.locals={root:"Category__root_RMPqC",image:"Category__image_wNjgM",accessories:"Category__accessories_MSqVF",men:"Category__men_s7Ujx",women:"Category__women_A+llK",modal:"Category__modal_tfGl3",category:"Category__category_0aezz"},t.exports=d},926:function(t,e,o){t.exports=o.p+"img/category_2.4d842bd.jpg"},927:function(t,e,o){t.exports=o.p+"img/category_3.f4890a3.jpg"},928:function(t,e,o){t.exports=o.p+"img/category_1.384a748.jpg"},929:function(t,e,o){t.exports=o.p+"img/contact.8b7bb66.png"},930:function(t,e,o){"use strict";var r=o(766),n=o.n(r);o.d(e,"default",(function(){return n.a}))},931:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".Contact__root_IZ-eF{margin-top:var(--space-4x);padding:var(--space-3x);background:var(--color-bg-secondary);}.Contact__root_IZ-eF .Contact__content_MpmPi{display:flex;align-items:center;}.Contact__root_IZ-eF .Contact__content_MpmPi p{font-size:1.6rem;margin:var(--space) 0}.Contact__root_IZ-eF .Contact__image_ecuEl img{border-radius:var(--radius-5)}.Contact__root_IZ-eF .Contact__image_ecuEl{margin-bottom:var(--space);}.Contact__root_IZ-eF .Contact__submitBtn_MrHkL{background:var(--color-primary);}.Contact__root_IZ-eF .Contact__submitBtn_MrHkL:hover{opacity:.7}.Contact__root_IZ-eF .before-enter{opacity:0;transform:translateX(-100px);transition:all 1s ease-out}.Contact__root_IZ-eF .enter{opacity:1;transform:translateX(0)}",""]),r.locals={root:"Contact__root_IZ-eF",content:"Contact__content_MpmPi",image:"Contact__image_ecuEl",submitBtn:"Contact__submitBtn_MrHkL"},t.exports=r},932:function(t,e,o){t.exports=o.p+"img/deal_ofthe_week.003082c.png"},933:function(t,e,o){"use strict";var r=o(767),n=o.n(r);o.d(e,"default",(function(){return n.a}))},934:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,'.Deal__root_9Dk4U{width:100%;margin-top:var(--space-4x);background:var(--color-bg-secondary);}.Deal__root_9Dk4U .Deal__image_x7uFV img{margin:auto}.Deal__root_9Dk4U .Deal__row_Bo2dn{position:relative;align-items:center}.Deal__root_9Dk4U .Deal__col_5wJsC,.Deal__root_9Dk4U .Deal__row_Bo2dn{display:flex}.Deal__root_9Dk4U .Deal__col_5wJsC{justify-content:center}.Deal__root_9Dk4U .Deal__content_EhOFl,.Deal__root_9Dk4U .Deal__title_A-skQ{position:relative}.Deal__root_9Dk4U .Deal__title_A-skQ{text-align:center;}.Deal__root_9Dk4U .Deal__title_A-skQ h2{font-size:4rem;font-weight:600}.Deal__root_9Dk4U .Deal__title_A-skQ:after{display:block;position:absolute;top:calc(100% + 13px);left:50%;transform:translateX(-50%);width:60px;height:5px;background:var(--color-primary);content:""}.Deal__root_9Dk4U .Deal__timer_6CFFf{margin-top:var(--space-4x)}.Deal__root_9Dk4U li{width:90px;height:90px;border-radius:50%;background:#fff;display:inline-flex;flex-direction:column;align-items:center;justify-content:center}.Deal__root_9Dk4U li+li{margin-left:var(--space-1o2)}.Deal__root_9Dk4U .Deal__num_ddPgr{font-size:3.6rem;color:var(--color-primary)}.Deal__root_9Dk4U .Deal__num_ddPgr,.Deal__root_9Dk4U .Deal__unit_MLlgJ{font-weight:500}.Deal__root_9Dk4U .Deal__unit_MLlgJ{font-size:1.6rem;color:var(--color-primary-text)}.Deal__root_9Dk4U .Deal__btn_Np5re{margin-top:var(--space-3x);text-align:center}.Deal__root_9Dk4U .Deal__submitBtn_9ZqBw{background:var(--color-primary);}.Deal__root_9Dk4U .Deal__submitBtn_9ZqBw:hover{opacity:.7}@media only screen and (max-width:1024px){.Deal__root_9Dk4U .Deal__col_5wJsC{position:absolute;top:50%;transform:translateY(-50%);left:0;width:100%}.Deal__root_9Dk4U li{width:70px;height:70px}.Deal__root_9Dk4U .Deal__num_ddPgr{font-size:2.8rem}.Deal__root_9Dk4U .Deal__unit_MLlgJ{font-size:1.4rem}}.Deal__root_9Dk4U .before-enter{opacity:0;transform:translateY(100px);transition:all .5s ease-out}.Deal__root_9Dk4U .enter{opacity:1;transform:translateY(0)}',""]),r.locals={root:"Deal__root_9Dk4U",image:"Deal__image_x7uFV",row:"Deal__row_Bo2dn",col:"Deal__col_5wJsC",content:"Deal__content_EhOFl",title:"Deal__title_A-skQ",timer:"Deal__timer_6CFFf",num:"Deal__num_ddPgr",unit:"Deal__unit_MLlgJ",btn:"Deal__btn_Np5re",submitBtn:"Deal__submitBtn_9ZqBw"},t.exports=r},935:function(t,e,o){"use strict";var r=o(768),n=o.n(r);o.d(e,"default",(function(){return n.a}))},936:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".FeatureProduct__root_mDrj1{padding:var(--space-4x) 0;}.FeatureProduct__root_mDrj1 .FeatureProduct__feature_A21n5{margin-top:var(--space-2x5)}.FeatureProduct__root_mDrj1 .FeatureProduct__product_ZISBS{transition-delay:1s}",""]),r.locals={root:"FeatureProduct__root_mDrj1",feature:"FeatureProduct__feature_A21n5",product:"FeatureProduct__product_ZISBS"},t.exports=r},937:function(t,e,o){"use strict";var r=o(769),n=o.n(r);o.d(e,"default",(function(){return n.a}))},938:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".Incentive__root_wRnYg{margin-top:var(--space-4x);padding:var(--space-3x);background:var(--color-bg-secondary);}.Incentive__root_wRnYg .Incentive__body_bA\\+on{display:flex;align-items:center}.Incentive__root_wRnYg .Incentive__content_Jt10o p{font-size:1.6rem;margin:var(--space) 0}.Incentive__root_wRnYg .Incentive__image_b9LOV img{border-radius:var(--radius-5)}.Incentive__root_wRnYg .Incentive__incentive_mOrki{margin-top:var(--space-2x);}.Incentive__root_wRnYg .Incentive__incentive_mOrki i{font-size:6rem}.Incentive__root_wRnYg .Incentive__incentive_mOrki h2{font-size:1.6rem;font-weight:500;margin:var(--space-1o2) 0}.Incentive__root_wRnYg .Incentive__incentive_mOrki p{font-size:1.5rem}.Incentive__root_wRnYg .before-enter{opacity:0;transform:translateY(100px);transition:all 1s ease-out}.Incentive__root_wRnYg .enter{opacity:1;transform:translateY(0);transition-delay:calc(100ms*var(--index))}",""]),r.locals={root:"Incentive__root_wRnYg",body:"Incentive__body_bA+on",content:"Incentive__content_Jt10o",image:"Incentive__image_b9LOV",incentive:"Incentive__incentive_mOrki"},t.exports=r},939:function(t,e,o){"use strict";var r=o(770),n=o.n(r);o.d(e,"default",(function(){return n.a}))},940:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".Promo__root_Tm3RD{margin-top:var(--space-4x);}.Promo__root_Tm3RD .Promo__promo_sk7e-{position:relative;overflow:hidden}.Promo__root_Tm3RD .Promo__submitBtn_\\+OwMY{background:var(--color-primary);}.Promo__root_Tm3RD .Promo__submitBtn_\\+OwMY:hover{opacity:.7}.Promo__root_Tm3RD p{font-size:1.4rem}.Promo__root_Tm3RD .max-w-7xl{max-width:100rem}.Promo__root_Tm3RD .w-44{width:18rem}.Promo__root_Tm3RD .h-64{height:20rem}@media only screen and (min-width:767px){.Promo__root_Tm3RD .lg\\:pb-48{padding-bottom:16rem}.Promo__root_Tm3RD .lg\\:pt-40{padding-top:16rem}}.Promo__root_Tm3RD .before-enter{opacity:0;transform:translateX(100px);transition:all 1s ease-out}.Promo__root_Tm3RD .enter{opacity:1;transform:translateX(0)}",""]),r.locals={root:"Promo__root_Tm3RD",promo:"Promo__promo_sk7e-",submitBtn:"Promo__submitBtn_+OwMY"},t.exports=r},970:function(t,e,o){"use strict";o.r(e);var r=o(1),n=[{id:"1",title:"Lorem ipsum dolor sit amet",category:"Article",desc:"Curabitur aliquet quam id dui posuere blandit. Cras ultricies\n          ligula sed magna dictum porta. Vestibulum ante ipsum primis in\n          faucibus orci luctus et ultrices posuere cubilia Curae; Donec\n          velit neque, auctor sit amet aliquam vel, ullamcorper sit amet\n          ligula.",slug:"abc-def",image:"~/assets/images/incentive.png"},{id:"2",title:"Lorem ipsum dolor sit amet",category:"Article",desc:"Curabitur aliquet quam id dui posuere blandit. Cras ultricies\n          ligula sed magna dictum porta. Vestibulum ante ipsum primis in\n          faucibus orci luctus et ultrices posuere cubilia Curae; Donec\n          velit neque, auctor sit amet aliquam vel, ullamcorper sit amet\n          ligula.",slug:"abc-def",image:"~/assets/images/incentive.png"},{id:"3",title:"Lorem ipsum dolor sit amet",category:"Article",desc:"Curabitur aliquet quam id dui posuere blandit. Cras ultricies\n          ligula sed magna dictum porta. Vestibulum ante ipsum primis in\n          faucibus orci luctus et ultrices posuere cubilia Curae; Donec\n          velit neque, auctor sit amet aliquam vel, ullamcorper sit amet\n          ligula.",slug:"abc-def",image:"~/assets/images/incentive.png"}],l=r.default.extend({data:function(){return{data:n}}}),c=o(922),_=o(8);var component=Object(_.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style.root},[r("div",{staticClass:"container"},[r("h1",{directives:[{name:"scroll-animate",rawName:"v-scroll-animate"}]},[t._v("Recent Publications")]),t._v(" "),r("p",{directives:[{name:"scroll-animate",rawName:"v-scroll-animate"}],staticClass:"text-gray-500"},[t._v("\n      Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.\n      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere\n      cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,\n      ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt.\n    ")]),t._v(" "),r("div",{class:t.$style.blogs},[r("el-row",{attrs:{gutter:24}},t._l(t.data,(function(e,n){return r("el-col",{directives:[{name:"scroll-animate",rawName:"v-scroll-animate"}],key:e.id,style:{"--index":n},attrs:{md:8}},[r("div",{class:t.$style.blog},[r("img",{attrs:{src:o(779)}}),t._v(" "),r("div",{class:t.$style.category},[t._v(t._s(e.category))]),t._v(" "),r("h2",[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:"text-gray-500"},[t._v("\n              "+t._s(e.desc)+"\n            ")]),t._v(" "),r("nuxt-link",{class:t.$style.link,attrs:{to:"/blog/"+e.slug}},[t._v("\n              Read more\n            ")])],1)])})),1)],1)])])}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports},997:function(t,e,o){"use strict";o.r(e);var r=o(1).default.extend({}),n=o(917),l=o(8);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$style.root})}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports},998:function(t,e,o){"use strict";o.r(e);var r=o(1),n=o(727),l=o(735),c=r.default.extend({components:{ProductCarousel:l.default},data:function(){return{products:n.a}}}),_=o(920),d=o(8);var component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("div",{staticClass:"container"},[o("h1",[t._v("Best Seller")]),t._v(" "),o("ProductCarousel",{attrs:{products:t.products}})],1)])}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);e.default=component.exports},999:function(t,e,o){"use strict";o.r(e);var r=o(1).default.extend({}),n=o(924),l=o(8);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("div",{staticClass:"container"},[o("el-row",{attrs:{gutter:40}},[o("el-col",{attrs:{md:12,lg:12,xl:12}},[o("div",{directives:[{name:"scroll-animate",rawName:"v-scroll-animate"}],class:[t.$style.image,t.$style.accessories]},[o("div",{class:t.$style.modal},[o("div",{class:t.$style.category},[o("h4",[t._v("Accessories")])])])])]),t._v(" "),o("el-col",{attrs:{md:12,lg:12,xl:12}},[o("div",{directives:[{name:"scroll-animate",rawName:"v-scroll-animate"}],class:[t.$style.image,t.$style.men]},[o("div",{class:t.$style.modal},[o("div",{class:t.$style.category},[o("h4",[t._v("Men")])])])]),t._v(" "),o("div",{directives:[{name:"scroll-animate",rawName:"v-scroll-animate"}],class:[t.$style.image,t.$style.women]},[o("div",{class:t.$style.modal},[o("div",{class:t.$style.category},[o("h4",[t._v("Women")])])])])])],1)],1)])}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports}}]);