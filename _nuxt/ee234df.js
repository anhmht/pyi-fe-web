(window.webpackJsonp=window.webpackJsonp||[]).push([[4,7,8,12,37],{515:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return d})),r.d(t,"a",(function(){return _}));var o=[{id:"1",color:"black",name:"black"},{id:"2",color:"grey",name:"grey"},{id:"3",color:"white",name:"white"}],c=[{id:"1",name:"XXS",disabled:!0},{id:"2",name:"XS",disabled:!1},{id:"3",name:"S",disabled:!1},{id:"4",name:"M",disabled:!1},{id:"5",name:"L",disabled:!1},{id:"6",name:"XL",disabled:!1},{id:"7",name:"XXL",disabled:!1}],n=[{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",alt:"Front of men's Basic Tee in black."},{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",alt:"Front of men's Basic Tee in black."},{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",alt:"Front of men's Basic Tee in black."},{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",alt:"Front of men's Basic Tee in black."}],l=[{id:"1",name:"Clothing",path:"clothing"},{id:"2",name:"Men",path:"men",parentId:"1"}],d=[{id:"1",name:"Never Underestimate a Women, Who Loves Guinea Pigs and Was Born in Your Birthday",path:"/basic-tee",images:n,price:35,colors:o,sizes:c,categories:l},{id:"2",name:"Basic Tee",path:"/basic-tee",images:n,price:35,colors:o,sizes:c,categories:l},{id:"3",name:"Basic Tee",path:"/basic-tee",images:n,price:35,colors:o,sizes:c,categories:l},{id:"4",name:"Basic Tee",path:"/basic-tee",images:n,price:35,colors:o,sizes:c,categories:l}],_=[{id:"1",name:"Never Underestimate a Women, Who Loves Guinea Pigs and Was Born in Your Birthday",path:"/basic-tee",images:n,price:35,colors:o,sizes:c,categories:l},{id:"2",name:"Basic Tee",path:"/basic-tee",images:n,price:35,colors:o,sizes:c,categories:l},{id:"3",name:"Basic Tee",path:"/basic-tee",images:n,price:35,colors:o,sizes:c,categories:l},{id:"4",name:"Basic Tee",path:"/basic-tee",images:n,price:35,colors:o,sizes:c,categories:l},{id:"5",name:"Basic Tee",path:"/basic-tee",images:n,price:35,colors:o,sizes:c,categories:l},{id:"6",name:"Basic Tee",path:"/basic-tee",images:n,price:35,colors:o,sizes:c,categories:l},{id:"7",name:"Basic Tee",path:"/basic-tee",images:n,price:35,colors:o,sizes:c,categories:l}]},517:function(e,t,r){var content=r(564);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("4af1e316",content,!0,{sourceMap:!1})},551:function(e,t,r){var content=r(678);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("17fd44b8",content,!0,{sourceMap:!1})},552:function(e,t,r){var content=r(680);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("ed3ada24",content,!0,{sourceMap:!1})},553:function(e,t,r){var content=r(682);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("2b6c4370",content,!0,{sourceMap:!1})},563:function(e,t,r){"use strict";var o=r(517),c=r.n(o);r.d(t,"default",(function(){return c.a}))},564:function(e,t,r){var o=r(12)((function(i){return i[1]}));o.push([e.i,"",""]),o.locals={},e.exports=o},568:function(e,t,r){"use strict";r.d(t,"c",(function(){return y})),r.d(t,"a",(function(){return z})),r.d(t,"d",(function(){return w})),r.d(t,"b",(function(){return I}));r(324),r(10),r(82),r(32),r(228);var o,c=r(566),n=r.n(c),l=new Uint8Array(16);function d(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(l)}var _=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var f=function(e){return"string"==typeof e&&_.test(e)},v=[],m=0;m<256;++m)v.push((m+256).toString(16).substr(1));var h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(v[e[t+0]]+v[e[t+1]]+v[e[t+2]]+v[e[t+3]]+"-"+v[e[t+4]]+v[e[t+5]]+"-"+v[e[t+6]]+v[e[t+7]]+"-"+v[e[t+8]]+v[e[t+9]]+"-"+v[e[t+10]]+v[e[t+11]]+v[e[t+12]]+v[e[t+13]]+v[e[t+14]]+v[e[t+15]]).toLowerCase();if(!f(r))throw TypeError("Stringified UUID is invalid");return r};var P=function(e,t,r){var o=(e=e||{}).random||(e.rng||d)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){r=r||0;for(var i=0;i<16;++i)t[r+i]=o[i];return t}return h(o)};function y(e){var t,i,r=n()(e),map={},o=[];for(i=0;i<r.length;i+=1)map[r[i].id]=i,r[i].children=[];for(i=0;i<r.length;i+=1)(t=r[i]).parentId?r[map[t.parentId]].children.push(t):o.push(t);return o}var k=[];function z(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(t){var o=e.find((function(e){return e.id===t}));return r||k.unshift(o),z(e,null==o?void 0:o.parentId,!1)}var c=n()(k);return k=[],c}var x=function(data){return"string"==typeof data?data.split(","):Array.isArray(data)?data:[]},D=function(data){return"string"==typeof data?parseInt(data,10):"number"==typeof data?data:void 0},w=function(e,t){var filter={color:[],size:[],collection:[],category:t};return e.priceFrom&&(filter.priceFrom=D(e.priceFrom)||void 0),e.priceTo&&(filter.priceTo=D(e.priceTo)||void 0),e.color&&(filter.color=x(e.color)),e.size&&(filter.size=x(e.size)),e.collection&&(filter.collection=x(e.collection)),filter},I=function(){return P()}},569:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({props:{data:{type:Array,required:!0},current:{type:String,required:!0}}}),c=r(563),n=r(6);var component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$style.root},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:"/"}},[e._v("Home")]),e._v(" "),e._l(e.data,(function(t,o){return r("el-breadcrumb-item",{key:o,attrs:{to:{path:"/category/"+t.path}}},[e._v(e._s(t.name))])})),e._v(" "),r("el-breadcrumb-item",[e._v(e._s(e.current))])],2)],1)}),[],!1,(function(e){this.$style=c.default.locals||c.default}),null,null);t.default=component.exports},623:function(e,t,r){var content=r(898);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("3eff67e2",content,!0,{sourceMap:!1})},677:function(e,t,r){"use strict";var o=r(551),c=r.n(o);r.d(t,"default",(function(){return c.a}))},678:function(e,t,r){var o=r(12)((function(i){return i[1]}));o.push([e.i,".ColorPicker__colors_k70q7{margin:var(--space-1o2) calc(var(--space-1o2)*-1);display:flex;}.ColorPicker__colors_k70q7 .ColorPicker__color_SWsk5{border-radius:50%;border:1px solid var(--color-bg-secondary);width:30px;height:30px}.ColorPicker__colors_k70q7 .ColorPicker__picker_55PEn{padding:2px;border-radius:50%;border:3px solid #fff;cursor:pointer;}.ColorPicker__colors_k70q7 .ColorPicker__picker_55PEn.ColorPicker__active_q0T8t{border:3px solid var(--color-primary)}.ColorPicker__colors_k70q7 .ColorPicker__picker_55PEn:hover{opacity:.7}",""]),o.locals={colors:"ColorPicker__colors_k70q7",color:"ColorPicker__color_SWsk5",picker:"ColorPicker__picker_55PEn",active:"ColorPicker__active_q0T8t"},e.exports=o},679:function(e,t,r){"use strict";var o=r(552),c=r.n(o);r.d(t,"default",(function(){return c.a}))},680:function(e,t,r){var o=r(12)((function(i){return i[1]}));o.push([e.i,".SizePicker__sizes_fe8Cw{margin:var(--space) calc(var(--space-1o2)*-1);display:flex;flex-wrap:wrap;}.SizePicker__sizes_fe8Cw .SizePicker__size_jqwj\\+{border-radius:var(--radius-5);margin-bottom:var(--space);margin-right:var(--space);border:1px solid var(--color-bg-secondary);width:60px;padding:var(--space) 0;cursor:pointer;font-size:1.2rem;font-weight:600;display:flex;justify-content:center;align-items:center;}.SizePicker__sizes_fe8Cw .SizePicker__size_jqwj\\+.SizePicker__active_1BLse{border-color:var(--color-primary);background:var(--color-primary);color:#fff}.SizePicker__sizes_fe8Cw .SizePicker__size_jqwj\\+:last-child{margin-right:0}.SizePicker__sizes_fe8Cw .SizePicker__size_jqwj\\+.SizePicker__disabled_huS3U{cursor:not-allowed}.SizePicker__sizes_fe8Cw .SizePicker__size_jqwj\\+:hover{opacity:.7}",""]),o.locals={sizes:"SizePicker__sizes_fe8Cw",size:"SizePicker__size_jqwj+",active:"SizePicker__active_1BLse",disabled:"SizePicker__disabled_huS3U"},e.exports=o},681:function(e,t,r){"use strict";var o=r(553),c=r.n(o);r.d(t,"default",(function(){return c.a}))},682:function(e,t,r){var o=r(12)((function(i){return i[1]}));o.push([e.i,".ProductImages__root_\\+rQn8 .ProductImages__mainImage_wNnaE{height:600px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:100%;border-radius:var(--radius-5)}.ProductImages__root_\\+rQn8 .ProductImages__images_-gjAI{display:flex;margin-top:32px;justify-content:space-evenly;flex-wrap:wrap;}.ProductImages__root_\\+rQn8 .ProductImages__images_-gjAI img{width:150px;height:150px;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;border-radius:var(--radius-5)}.ProductImages__root_\\+rQn8 .ProductImages__images_-gjAI .ProductImages__image_ejTtk{padding:2px;border:3px solid #fff;border-radius:var(--radius-5);cursor:pointer;margin-bottom:var(--space);}.ProductImages__root_\\+rQn8 .ProductImages__images_-gjAI .ProductImages__image_ejTtk.ProductImages__active_U-PXl{border:3px solid var(--color-primary)}.ProductImages__root_\\+rQn8 .ProductImages__images_-gjAI .ProductImages__image_ejTtk:hover{opacity:.7}",""]),o.locals={root:"ProductImages__root_+rQn8",mainImage:"ProductImages__mainImage_wNnaE",images:"ProductImages__images_-gjAI",image:"ProductImages__image_ejTtk",active:"ProductImages__active_U-PXl"},e.exports=o},741:function(e,t,r){"use strict";r.r(t);r(325),r(23);var o=r(0).default.extend({props:{value:{type:String,default:void 0},colors:{type:Array,required:!0}},data:function(){return{active:0}},mounted:function(){var e=this;this.value?this.active=this.colors.findIndex((function(t){return t.name===e.value})):this.$emit("input",this.colors[0].id)},methods:{selected:function(e,t){this.active=t,this.$emit("input",e.id)}}}),c=r(677),n=r(6);var component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$style.colors},e._l(e.colors,(function(t,o){return r("div",{key:o,class:[e.$style.picker,o===e.active&&e.$style.active],on:{click:function(r){return e.selected(t,o)}}},[r("div",{class:e.$style.color,style:{backgroundColor:t.color}})])})),0)}),[],!1,(function(e){this.$style=c.default.locals||c.default}),null,null);t.default=component.exports},742:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({props:{value:{type:String,default:void 0},sizes:{type:Array,required:!0}},data:function(){return{active:void 0}},methods:{selected:function(e,t){e.disabled||(this.active=t,this.$emit("input",e.id))}}}),c=r(679),n=r(6);var component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$style.sizes},e._l(e.sizes,(function(t,o){return r("div",{key:o,class:[e.$style.size,o===e.active&&e.$style.active,t.disabled&&e.$style.disabled],on:{click:function(r){return e.selected(t,o)}}},[e._v("\n    "+e._s(t.name)+"\n  ")])})),0)}),[],!1,(function(e){this.$style=c.default.locals||c.default}),null,null);t.default=component.exports},743:function(e,t,r){"use strict";r.r(t);var o=r(0).default.extend({props:{images:{type:Array,required:!0}},data:function(){return{active:0,selected:this.images[0]}},methods:{handleSelected:function(e,t){this.active=t,this.selected=e,this.$refs.carousel.setActiveItem(t)},setActive:function(e){this.active=e}}}),c=r(681),n=r(6);var component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$style.root},[r("el-carousel",{ref:"carousel",attrs:{height:"600px",interval:5e3,"indicator-position":"none"},on:{change:e.setActive}},e._l(e.images,(function(t,o){return r("el-carousel-item",{key:o},[r("img",{class:e.$style.mainImage,attrs:{src:t.src,alt:t.alt}})])})),1),e._v(" "),r("div",{class:e.$style.images},e._l(e.images,(function(t,o){return r("div",{key:o,class:[e.$style.image,e.active===o&&e.$style.active],on:{click:function(r){return e.handleSelected(t,o)}}},[r("img",{attrs:{src:t.src,alt:t.alt}})])})),0)],1)}),[],!1,(function(e){this.$style=c.default.locals||c.default}),null,null);t.default=component.exports},897:function(e,t,r){"use strict";var o=r(623),c=r.n(o);r.d(t,"default",(function(){return c.a}))},898:function(e,t,r){var o=r(12)((function(i){return i[1]}));o.push([e.i,".ProductDetail__root_qDePf{margin-top:var(--space-4x);}.ProductDetail__root_qDePf .ProductDetail__detail_1DYVg{margin-top:var(--space-3x)}.ProductDetail__root_qDePf .ProductDetail__price_tISbn{margin:var(--space-1o2) 0;font-size:2.7rem}.ProductDetail__root_qDePf .ProductDetail__rate_R5goZ{display:flex;align-items:center;}.ProductDetail__root_qDePf .ProductDetail__rate_R5goZ .ProductDetail__review_aIbhi{margin-left:var(--space);cursor:pointer;font-size:1.6rem;color:var(--color-primary);}.ProductDetail__root_qDePf .ProductDetail__rate_R5goZ .ProductDetail__review_aIbhi:hover{opacity:.7}.ProductDetail__root_qDePf .ProductDetail__colorPicker_WKsqh,.ProductDetail__root_qDePf .ProductDetail__sizePicker_pn3mz{font-size:1.6rem;margin-top:var(--space-2x)}.ProductDetail__root_qDePf .ProductDetail__sizePicker_pn3mz .ProductDetail__title_iOWqw{display:flex;align-items:center;justify-content:space-between}.ProductDetail__root_qDePf .ProductDetail__sizePicker_pn3mz .ProductDetail__chart_r2u\\+1{cursor:pointer;color:var(--color-primary);}.ProductDetail__root_qDePf .ProductDetail__sizePicker_pn3mz .ProductDetail__chart_r2u\\+1:hover{opacity:.7}.ProductDetail__root_qDePf .ProductDetail__btn_x7ruk{width:100%;background:var(--color-primary);}.ProductDetail__root_qDePf .ProductDetail__btn_x7ruk:hover{opacity:.7}.ProductDetail__root_qDePf .ProductDetail__desc_qlDyY{font-size:1.6rem;margin-top:var(--space-2x)}.ProductDetail__root_qDePf p{margin:var(--space) 0;font-size:1.3rem;color:var(--color-form-text)}@media only screen and (max-width:991px){.ProductDetail__root_qDePf .ProductDetail__btn_x7ruk{position:fixed;bottom:0;width:100%;height:60px;left:0;z-index:100}}",""]),o.locals={root:"ProductDetail__root_qDePf",detail:"ProductDetail__detail_1DYVg",price:"ProductDetail__price_tISbn",rate:"ProductDetail__rate_R5goZ",review:"ProductDetail__review_aIbhi",colorPicker:"ProductDetail__colorPicker_WKsqh",sizePicker:"ProductDetail__sizePicker_pn3mz",title:"ProductDetail__title_iOWqw",chart:"ProductDetail__chart_r2u+1",btn:"ProductDetail__btn_x7ruk",desc:"ProductDetail__desc_qlDyY"},e.exports=o},903:function(e,t,r){"use strict";r.r(t);var o=r(0),c=r(569),n=r(741),l=r(742),d=r(743),_=r(515),f=r(53),v=r(568),m=o.default.extend({components:{ColorPicker:n.default,SizePicker:l.default,ProductImages:d.default,Breadcrumb:c.default},data:function(){return{rate:4,product:_.c[0],colorId:void 0,sizeId:void 0}},methods:{addToCart:function(){if(this.colorId&&this.sizeId){var e={id:Object(v.b)(),product:this.product,colorId:this.colorId,sizeId:this.sizeId,quantity:1,isSelected:!0};this.$store.commit(f.Mutations.TYPE.ADD_TO_CART,e),this.$notify.success({title:"Add to cart Success",message:"Please check your cart to checkout"}),this.$router.push("/cart")}else this.$notify.error({title:"Error",message:"Please select color and size"})}}}),h=r(897),P=r(6);var component=Object(P.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$style.root},[r("div",{staticClass:"container"},[r("Breadcrumb",{attrs:{data:e.product.categories,current:e.product.name}}),e._v(" "),r("div",{class:e.$style.detail},[r("el-row",{attrs:{gutter:32}},[r("el-col",{attrs:{md:14}},[r("ProductImages",{attrs:{images:e.product.images}})],1),e._v(" "),r("el-col",{attrs:{md:10}},[r("h1",[e._v(e._s(e.product.name))]),e._v(" "),r("div",{class:e.$style.price},[e._v("\n            "+e._s(e.$formatCurrency(e.product.price))+"\n          ")]),e._v(" "),r("div",{class:e.$style.rate},[r("el-rate",{model:{value:e.rate,callback:function(t){e.rate=t},expression:"rate"}}),e._v(" "),r("div",{class:e.$style.review},[e._v("117 reviews")])],1),e._v(" "),r("div",{class:e.$style.colorPicker},[r("div",[e._v("Color")]),e._v(" "),r("ColorPicker",{attrs:{colors:e.product.colors},model:{value:e.colorId,callback:function(t){e.colorId=t},expression:"colorId"}})],1),e._v(" "),r("div",{class:e.$style.sizePicker},[r("div",{class:e.$style.title},[r("div",[e._v("Size")]),e._v(" "),r("div",{class:e.$style.chart},[e._v("See Sizing chart")])]),e._v(" "),r("SizePicker",{attrs:{sizes:e.product.sizes},model:{value:e.sizeId,callback:function(t){e.sizeId=t},expression:"sizeId"}})],1),e._v(" "),r("el-button",{class:e.$style.btn,attrs:{type:"primary"},on:{click:e.addToCart}},[e._v("Add to cart")]),e._v(" "),r("div",{class:e.$style.desc},[r("div",[e._v("Description")]),e._v(" "),r("div",[r("p",[e._v('\n                The Basic Tee 6-Pack allows you to fully express your vibrant\n                personality with three grayscale options. Feeling adventurous?\n                Put on a heather gray tee. Want to be a trendsetter? Try our\n                exclusive colorway: "Black". Need to add an extra pop of color\n                to your outfit? Our white tee has you covered.\n              ')])])]),e._v(" "),r("div",{class:e.$style.desc},[r("div",[e._v("Product detail")]),e._v(" "),r("div",[r("p",[e._v('\n                The Basic Tee 6-Pack allows you to fully express your vibrant\n                personality with three grayscale options. Feeling adventurous?\n                Put on a heather gray tee. Want to be a trendsetter? Try our\n                exclusive colorway: "Black". Need to add an extra pop of color\n                to your outfit? Our white tee has you covered.\n              ')])])]),e._v(" "),r("div",{class:e.$style.desc},[r("div",[e._v("Shipping detail")]),e._v(" "),r("div",[r("p",[e._v('\n                The Basic Tee 6-Pack allows you to fully express your vibrant\n                personality with three grayscale options. Feeling adventurous?\n                Put on a heather gray tee. Want to be a trendsetter? Try our\n                exclusive colorway: "Black". Need to add an extra pop of color\n                to your outfit? Our white tee has you covered.\n              ')])])])],1)],1)],1)],1)])}),[],!1,(function(e){this.$style=h.default.locals||h.default}),null,null);t.default=component.exports}}]);