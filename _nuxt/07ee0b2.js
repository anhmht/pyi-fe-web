(window.webpackJsonp=window.webpackJsonp||[]).push([[5,12,14,16,17,23,27,28],{1028:function(t,e,r){"use strict";r.r(e);r(259);var o=r(1).default.extend({props:{sort:{type:String,default:"newest"}},computed:{displayName:function(){switch(this.sort){case"lth":return"Price: Low to High";case"htl":return"Price: High to Low";case"newest":return"Newest";case"best-rating":return"Best rating";default:return this.sort}}},methods:{handleCommand:function(t){this.$emit("update:sort",t)}}}),n=r(928),l=r(8);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style.root},[r("el-dropdown",{on:{command:t.handleCommand}},[r("span",[t._v("\n      "+t._s(t.displayName)),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"best-rating"}},[t._v("Best rating")]),t._v(" "),r("el-dropdown-item",{attrs:{command:"newest"}},[t._v("Newest")]),t._v(" "),r("el-dropdown-item",{attrs:{command:"lth"}},[t._v("Price: Low to High")]),t._v(" "),r("el-dropdown-item",{attrs:{command:"htl"}},[t._v("Price: High to Low")])],1)],1)],1)}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports},1033:function(t,e,r){"use strict";r.r(e);var o=r(1),n=r(718),l=r(872),c=o.default.extend({components:{ProductItem:n.default,ProductLoading:l.default},props:{products:{type:Array,required:!0},isLoading:{type:Boolean,default:!1}}}),d=r(940),f=r(8);var component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style.root},[r("div",{staticClass:"mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"},[t.products.length>0?t._l(t.products,(function(e){return r("ProductItem",{key:e.id,class:t.$style.product,attrs:{data:e}})})):t._e(),t._v(" "),0===t.products.length&&t.isLoading?t._l(8,(function(i){return r("ProductLoading",{key:i,staticClass:"aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"})})):t._e()],2),t._v(" "),0!==t.products.length||t.isLoading?t._e():r("el-empty",{attrs:{description:"No data"}})],1)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports},1034:function(t,e,r){"use strict";r.r(e);r(22),r(9);var o=r(1),n=r(988),l=o.default.extend({components:{SideBar:n.default},props:{filter:{type:Object,required:!0},visible:{type:Boolean,required:!0}},methods:{close:function(){this.$emit("update:visible",!1)}},watch:{filter:{handler:function(){this.close(),this.$emit("update:filter",this.filter)},deep:!0}}}),c=r(942),d=r(8);var component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style.root},[r("el-drawer",{class:[t.$style.root],attrs:{"append-to-body":"","custom-class":"drawer","with-header":!1,visible:t.visible,"before-close":t.close},on:{"update:visible":function(e){t.visible=e}}},[r("div",{class:t.$style.header},[r("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"},on:{click:t.close}})]),t._v(" "),r("div",{class:t.$style.body},[r("SideBar",{attrs:{filter:t.filter},on:{"update:filter":function(e){t.filter=e}}})],1)])],1)}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports},1188:function(t,e,r){"use strict";var o=r(860),n=r.n(o);r.d(e,"default",(function(){return n.a}))},1189:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".Category__root_wpmWW .Category__header_rpUU9{padding:var(--space-2x) 0;padding-bottom:var(--space);border-bottom:1px solid var(--color-bg-secondary);display:flex;align-items:center;justify-content:space-between}.Category__root_wpmWW .Category__sort_gyHpK{display:flex;align-items:baseline;font-size:1.4rem;}.Category__root_wpmWW .Category__sort_gyHpK .Category__filter_C5gmT{margin-left:var(--space);cursor:pointer}.Category__root_wpmWW .Category__body_GAj7f{margin-top:var(--space)}",""]),o.locals={root:"Category__root_wpmWW",header:"Category__header_rpUU9",sort:"Category__sort_gyHpK",filter:"Category__filter_C5gmT",body:"Category__body_GAj7f"},t.exports=o},1210:function(t,e,r){"use strict";r.r(e);r(40),r(25),r(53),r(36),r(54);var o=r(11),n=r(4),l=(r(35),r(73),r(9),r(19),r(22),r(259),r(23),r(65),r(1)),c=r(823),d=r(1028),f=r(988),_=r(717),v=r(1033),m=r(716),h=r(1034),y=r(174);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var P=l.default.extend({components:{Breadcrumb:c.default,Sort:d.default,CategorySideBar:f.default,FilterProduct:v.default,Pagination:m.default,SideBarDrawer:h.default},props:{slug:{type:String,required:!0}},data:function(){return{filters:{filter:{color:[],size:[],collection:[]},limit:12,page:1,sort:"newest"},products:[],visible:!1,isLoading:!0,totalRecord:0}},computed:{category:function(){var t=this;if(0!==this.categories.length)return this.categories.find((function(e){return e.path==="/".concat(t.slug)}))},categories:function(){return this.$store.state.categories},queryFilters:function(){return Object(_.d)(this.$route.query)},categoryName:function(){var t;return null===(t=this.category)||void 0===t?void 0:t.name},breadCrumb:function(){return this.category?Object(_.a)(this.categories,this.category.id):[]},isMobile:function(){return"mobile"===this.$mq},loading:function(){return(!this.isLoading||0!==this.products.length)&&this.isLoading}},methods:{fetchData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$productService.getProducts(t.filters);case 3:r=e.sent,o=r.products,n=r.total,t.products=o,t.totalRecord=n,t.isLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},changeCategory:function(t){this.filters=x(x({},this.filters),{},{filter:x(x({},this.filters.filter),{},{category:t})})}},created:function(){this.filters.filter=this.queryFilters,this.category&&this.changeCategory(this.category.id);var t=this.$route.query,e=t.sort,r=t.page;e&&(this.filters.sort=e),r&&(this.filters.page=parseInt(r))},mounted:function(){this.$nuxt.$emit(y.a.SCROLL_TOP)},watch:{slug:function(){this.$fetch()},filters:{handler:function(){this.category&&(this.$router.replace({query:x(x({},this.filters.filter),{},{category:void 0,sort:this.filters.sort,priceTo:100===this.filters.filter.priceTo?void 0:this.filters.filter.priceTo,page:1===this.filters.page?void 0:this.filters.page})}).catch((function(t){if("NavigationDuplicated"!==t.name)throw t})),this.fetchData())},deep:!0},category:{handler:function(t){this.changeCategory(t.id)},deep:!0}}}),$=r(1188),L=r(8);var component=Object(L.a)(P,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:[t.$style.root,"container"]},[t.category?r("Breadcrumb",{attrs:{data:t.breadCrumb,current:t.category.name}}):t._e(),t._v(" "),r("div",{class:t.$style.header},[r("h1",[t._v(t._s(t.categoryName))]),t._v(" "),r("div",{class:t.$style.sort},[t._v("\n      Sort: "),r("Sort",{attrs:{sort:t.filters.sort},on:{"update:sort":function(e){return t.$set(t.filters,"sort",e)}}}),t._v(" "),t.isMobile?r("i",{staticClass:"fa fa-filter",class:t.$style.filter,attrs:{"aria-hidden":"true"},on:{click:function(e){t.visible=!0}}}):t._e()],1)]),t._v(" "),r("div",{class:t.$style.body},[r("el-row",{attrs:{gutter:32}},[r("el-col",{attrs:{md:6}},[t.isMobile?t._e():r("CategorySideBar",{attrs:{filter:t.filters.filter},on:{"update:filter":function(e){return t.$set(t.filters,"filter",e)}}})],1),t._v(" "),r("el-col",{attrs:{md:18}},[r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],class:t.$style.products},[r("FilterProduct",{attrs:{products:t.products,"is-loading":t.isLoading}}),t._v(" "),r("el-divider",{staticClass:"divider"}),t._v(" "),r("div",{class:t.$style.pagination},[r("Pagination",{attrs:{total:t.totalRecord,page:t.filters.page},on:{"update:page":function(e){return t.$set(t.filters,"page",e)}}})],1)],1)])],1)],1),t._v(" "),r("SideBarDrawer",{attrs:{visible:t.visible,filter:t.filters.filter},on:{"update:visible":function(e){t.visible=e},"update:filter":function(e){return t.$set(t.filters,"filter",e)}}})],1)}),[],!1,(function(t){this.$style=$.default.locals||$.default}),null,null);e.default=component.exports},711:function(t,e,r){var content=r(715);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("5c455e44",content,!0,{sourceMap:!1})},712:function(t,e,r){var content=r(720);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("d31b1a78",content,!0,{sourceMap:!1})},714:function(t,e,r){"use strict";var o=r(711),n=r.n(o);r.d(e,"default",(function(){return n.a}))},715:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".Pagination__root_ZQo\\+X{font-size:1.4rem;}.Pagination__root_ZQo\\+X .Pagination__info_Jpwwv{margin-top:var(--space-1o2)}.Pagination__root_ZQo\\+X .Pagination__pagination_fNlMh{display:flex;justify-content:flex-end}@media only screen and (max-width:991px){.Pagination__root_ZQo\\+X .Pagination__info_Jpwwv{text-align:center}.Pagination__root_ZQo\\+X .Pagination__pagination_fNlMh{justify-content:center}}",""]),o.locals={root:"Pagination__root_ZQo+X",info:"Pagination__info_Jpwwv",pagination:"Pagination__pagination_fNlMh"},t.exports=o},716:function(t,e,r){"use strict";r.r(e);r(494);var o=r(1).default.extend({props:{total:{type:Number,default:0},page:{type:Number,default:1},limit:{type:Number,default:20}},data:function(){return{currentPage:this.page}},computed:{displayFrom:function(){return(this.currentPage-1)*this.limit+1},displayTo:function(){return this.currentPage*this.limit>this.total?this.total:this.currentPage*this.limit}},watch:{currentPage:{handler:function(t){this.$emit("update:page",t)}}}}),n=r(714),l=r(8);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style.root},[r("el-row",[r("el-col",{attrs:{md:8}},[r("div",{class:t.$style.info},[t._v("\n        Showing "+t._s(t.displayFrom)+" to "+t._s(t.displayTo)+" of "+t._s(t.total)+" results\n      ")])]),t._v(" "),r("el-col",{attrs:{md:16}},[r("div",{class:t.$style.pagination},[r("el-pagination",{attrs:{"page-size":t.limit,layout:"prev, pager, next",total:t.total,"current-page":t.currentPage},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)])],1)],1)}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports},718:function(t,e,r){"use strict";r.r(e);var o=r(1),n="product-detail",l=r(39),c=o.default.extend({props:{data:{type:Object,required:!0}},methods:{handleClick:function(){var t={isOpen:!0,name:n,data:this.data};this.$store.commit(l.Mutations.TYPE.SET_MODAL,t)}}}),d=r(719),f=r(8);var component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style.root},[r("div",{staticClass:"group relative"},[r("div",{staticClass:"bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"},[r("img",{staticClass:"object-center object-cover",class:t.$style.image,attrs:{src:t.data.images[0].src,alt:t.data.images[0].alt}})]),t._v(" "),r("div",{staticClass:"mt-4 flex justify-between"},[r("div",[r("h3",{staticClass:"text-gray-700",class:t.$style.title},[r("nuxt-link",{attrs:{to:"/product"+t.data.path}},[r("span",{staticClass:"absolute inset-0",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(t.data.name)+"\n          ")])],1),t._v(" "),r("p",{staticClass:"mt-1 text-gray-500"},[r("el-rate",{attrs:{disabled:""},model:{value:t.data.rating,callback:function(e){t.$set(t.data,"rating",e)},expression:"data.rating"}})],1)]),t._v(" "),r("p",{staticClass:"font-medium text-gray-900"},[t._v("\n        "+t._s(t.$formatCurrency(t.data.price))+"\n      ")])])]),t._v(" "),r("div",[r("el-button",{class:t.$style.btn,on:{click:t.handleClick}},[t._v("Add To Cart")])],1)])}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports},719:function(t,e,r){"use strict";var o=r(712),n=r.n(o);r.d(e,"default",(function(){return n.a}))},720:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".ProductItem__root_kN0xt{font-size:1.5rem;}.ProductItem__root_kN0xt .ProductItem__image_VgVEa{width:100%;height:30rem}.ProductItem__root_kN0xt .ProductItem__title_4Aj6X{height:45px;overflow:hidden;margin-right:var(--space-1o2)}.ProductItem__root_kN0xt .ProductItem__btn_rEdkq{border:none;margin-top:var(--space);width:100%;color:var(--color-primary-text);transition:var(--transition-300);background-color:#e5e7eb;}.ProductItem__root_kN0xt .ProductItem__btn_rEdkq:hover{color:#fff;background:var(--color-primary)}",""]),o.locals={root:"ProductItem__root_kN0xt",image:"ProductItem__image_VgVEa",title:"ProductItem__title_4Aj6X",btn:"ProductItem__btn_rEdkq"},t.exports=o},730:function(t,e,r){var content=r(813);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("4af1e316",content,!0,{sourceMap:!1})},731:function(t,e,r){var content=r(816);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("725d2a2a",content,!0,{sourceMap:!1})},764:function(t,e,r){var content=r(929);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("49e837e9",content,!0,{sourceMap:!1})},769:function(t,e,r){var content=r(941);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("2cba833d",content,!0,{sourceMap:!1})},770:function(t,e,r){var content=r(943);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("50b84a22",content,!0,{sourceMap:!1})},812:function(t,e,r){"use strict";var o=r(730),n=r.n(o);r.d(e,"default",(function(){return n.a}))},813:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o},815:function(t,e,r){"use strict";var o=r(731),n=r.n(o);r.d(e,"default",(function(){return n.a}))},816:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".ProductLoading__root_L-n8L{font-size:1.5rem;}.ProductLoading__root_L-n8L .ProductLoading__image_08COB{width:100%;height:25rem}.ProductLoading__root_L-n8L .ProductLoading__title_E5abw{display:flex;align-items:center;justify-items:space-between;margin-top:var(--space)}.ProductLoading__root_L-n8L .ProductLoading__name_k7QWf{width:70%}.ProductLoading__root_L-n8L .ProductLoading__price_2ut8p{margin-left:var(--space);flex:1}.ProductLoading__root_L-n8L .ProductLoading__desc_ShIpm{margin-top:var(--space-1o2);width:30%}",""]),o.locals={root:"ProductLoading__root_L-n8L",image:"ProductLoading__image_08COB",title:"ProductLoading__title_E5abw",name:"ProductLoading__name_k7QWf",price:"ProductLoading__price_2ut8p",desc:"ProductLoading__desc_ShIpm"},t.exports=o},823:function(t,e,r){"use strict";r.r(e);var o=r(1).default.extend({props:{data:{type:Array,required:!0},current:{type:String,required:!0}}}),n=r(812),l=r(8);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style.root},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),t._l(t.data,(function(e,o){return r("el-breadcrumb-item",{key:o,attrs:{to:{path:"/category"+e.path}}},[t._v(t._s(e.name))])})),t._v(" "),r("el-breadcrumb-item",[t._v(t._s(t.current))])],2)],1)}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports},860:function(t,e,r){var content=r(1189);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("642faea9",content,!0,{sourceMap:!1})},872:function(t,e,r){"use strict";r.r(e);var o=r(1).default.extend({}),n=r(815),l=r(8);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-skeleton",{class:t.$style.root,attrs:{animated:""}},[r("template",{slot:"template"},[r("el-skeleton-item",{class:t.$style.image,attrs:{variant:"image"}}),t._v(" "),r("div",{class:t.$style.content},[r("div",{class:t.$style.title},[r("el-skeleton-item",{class:t.$style.name,attrs:{variant:"h3"}}),t._v(" "),r("el-skeleton-item",{class:t.$style.price,attrs:{variant:"text"}})],1),t._v(" "),r("el-skeleton-item",{class:t.$style.desc,attrs:{variant:"text"}})],1)],1)],2)}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports},928:function(t,e,r){"use strict";var o=r(764),n=r.n(o);r.d(e,"default",(function(){return n.a}))},929:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".Sort__root_-BOS3{margin-left:var(--space-1o2)}",""]),o.locals={root:"Sort__root_-BOS3"},t.exports=o},940:function(t,e,r){"use strict";var o=r(769),n=r.n(o);r.d(e,"default",(function(){return n.a}))},941:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o},942:function(t,e,r){"use strict";var o=r(770),n=r.n(o);r.d(e,"default",(function(){return n.a}))},943:function(t,e,r){var o=r(15)((function(i){return i[1]}));o.push([t.i,".SideBarDrawer__root_a1QT1 .SideBarDrawer__header_-OXUY{height:100px;display:flex;align-items:center;justify-content:flex-end;padding:var(--space);}.SideBarDrawer__root_a1QT1 .SideBarDrawer__header_-OXUY i{cursor:pointer;font-size:2.4rem;color:var(-color-primary-text);transition:var(--transition-300);}.SideBarDrawer__root_a1QT1 .SideBarDrawer__header_-OXUY i:hover{color:var(--color-secondary-text)}.SideBarDrawer__root_a1QT1 .SideBarDrawer__body_JxC2V{padding:0 var(--space-2x);overflow-y:scroll;height:calc(100vh - 100px)}",""]),o.locals={root:"SideBarDrawer__root_a1QT1",header:"SideBarDrawer__header_-OXUY",body:"SideBarDrawer__body_JxC2V"},t.exports=o}}]);