(window.webpackJsonp=window.webpackJsonp||[]).push([[79,42,43],{1017:function(e,t,r){"use strict";r.r(t);var o=r(11),n=r(4),c=(r(35),r(73),r(9),r(19),r(177),r(48),r(23),r(123),r(40),r(25),r(22),r(53),r(36),r(54),r(1)),l=r(717);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y=c.default.extend({props:{categories:{type:Array,required:!0},categoryId:{type:String,default:void 0},visible:{type:Boolean,default:!1}},data:function(){return{form:{name:"",parentId:void 0,path:""},isLoading:!1,rules:{name:[{required:!0,message:"Please input category name",trigger:"change"}],path:[{required:!0,message:"Required path",trigger:"change"}]}}},computed:{category:function(){var e=this;return this.categories.find((function(t){return t.id===e.categoryId}))},displayPath:function(){return this.form.name?(this.form.path="/".concat(Object(l.f)(this.form.name).match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-")),"https://napricot.com/category".concat(this.form.path)):"https://napricot.com/category/"},displayButton:function(){return this.categoryId?"Update":"Create"},displayTitle:function(){return this.categoryId?"Update ".concat(this.form.name):"Create Category"}},methods:{handleSubmit:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.categoryId?e.updateCategory():e.handleCreate())}))},selectCategory:function(){var e=this,t=this.categories.find((function(t){return t.id===e.categoryId}));t&&(this.form={id:t.id,name:t.name,parentId:t.parentId,path:t.path})},handleCreate:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,r=f({},e.form),t.next=5,e.$categoryService.createCategory(r);case 5:e.$notify.success({title:"Create Successfully",message:"Create category ".concat(e.form.name)}),e.$emit("submit"),e.$emit("update:visible",!1),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),e.isLoading=!1,e.$notify.error({title:"Error",message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()},updateCategory:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,r=f({},e.form),t.next=5,e.$categoryService.updateCategory(r,e.category);case 5:e.$notify.success({title:"Update Successfully",message:"Update category ".concat(e.form.name)}),e.$emit("submit"),e.$emit("update:visible",!1),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),e.isLoading=!1,e.$notify.error({title:"Error",message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()}},created:function(){this.selectCategory()},watch:{categoryId:function(){this.selectCategory()}}}),_=r(906),m=r(8);var component=Object(m.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$style.root},[r("h2",[e._v(e._s(e.displayTitle))]),e._v(" "),r("el-form",{ref:"form",class:e.$style.form,attrs:{"label-position":"top",rules:e.rules,model:e.form}},[r("el-form-item",{attrs:{label:"Category Name",prop:"name"}},[r("el-input",{attrs:{placeholder:"Category name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Category Parent",prop:"parentId"}},[r("el-select",{class:e.$style.select,attrs:{placeholder:"Category name"},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}},[r("el-option",{attrs:{label:"Root",value:void 0}}),e._v(" "),e._l(e.categories,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],2)],1),e._v(" "),r("el-form-item",{attrs:{label:"Category Path",prop:"path"}},[r("el-input",{attrs:{disabled:"",placeholder:"Category path"},model:{value:e.displayPath,callback:function(t){e.displayPath=t},expression:"displayPath"}})],1),e._v(" "),r("div",{class:e.$style.footer},[r("el-button",{on:{click:function(t){return e.$emit("update:visible")}}},[e._v("Cancel")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[e._v(e._s(e.displayButton))])],1)],1)],1)}),[],!1,(function(e){this.$style=_.default.locals||_.default}),null,null);t.default=component.exports},1018:function(e,t,r){"use strict";r.r(t);var o=r(1),n=r(717),c=o.default.extend({props:{categories:{type:Array,required:!0}},data:function(){return{defaultProps:{children:"children",label:"name"}}},computed:{treeListCategory:function(){return Object(n.c)(this.categories)}},methods:{selectCategory:function(e){this.$emit("select",e.id)}}}),l=r(908),d=r(8);var component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$style.root},[r("h2",[e._v("Category List")]),e._v(" "),e.categories.length>0?r("el-tree",{class:e.$style.list,attrs:{"highlight-current":"","default-expand-all":"",data:e.treeListCategory,props:e.defaultProps},on:{"node-click":e.selectCategory}}):r("el-skeleton",{attrs:{rows:4,animated:""}})],1)}),[],!1,(function(e){this.$style=l.default.locals||l.default}),null,null);t.default=component.exports},1162:function(e,t,r){"use strict";var o=r(847),n=r.n(o);r.d(t,"default",(function(){return n.a}))},1163:function(e,t,r){var o=r(15)((function(i){return i[1]}));o.push([e.i,".index__root_fK0Ag .index__category_Xy3SS{background:#fff;border-radius:var(--radius-5);padding:var(--space);margin-top:var(--space-2x)}.index__root_fK0Ag .index__content_ahumk{width:100%;font-size:1.3rem;}.index__root_fK0Ag .index__content_ahumk .index__edit_yLCSF{margin-top:var(--space)}.index__root_fK0Ag .index__content_ahumk .index__create_DJdi0{text-align:center}.index__root_fK0Ag .index__col_4TYks,.index__root_fK0Ag .index__row_RoZOU{display:flex}.index__root_fK0Ag .index__col_4TYks{align-items:center;justify-content:center;border-left:1px solid #e8e8e8}",""]),o.locals={root:"index__root_fK0Ag",category:"index__category_Xy3SS",content:"index__content_ahumk",edit:"index__edit_yLCSF",create:"index__create_DJdi0",col:"index__col_4TYks",row:"index__row_RoZOU"},e.exports=o},1237:function(e,t,r){"use strict";r.r(t);var o=r(4),n=(r(35),r(1)),c=r(1017),l=r(1018),d=n.default.extend({components:{CategoryList:l.default,CategoryForm:c.default},name:"DashboardCategory",layout:"dashboard",data:function(){return{categories:[],visible:!1,categoryId:void 0}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$categoryService.getCategories(!0);case 2:e.categories=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{handleEdit:function(e){this.visible=!0,this.categoryId=e},handleCreate:function(){this.visible=!0,this.categoryId=void 0}}}),f=r(1162),y=r(8);var component=Object(y.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$style.root},[r("div",{staticClass:"container"},[r("h1",[e._v("Category")]),e._v(" "),r("div",{class:e.$style.category},[r("el-row",{class:e.$style.row,attrs:{gutter:24}},[r("el-col",{attrs:{md:8}},[r("CategoryList",{attrs:{categories:e.categories},on:{select:e.handleEdit}})],1),e._v(" "),r("el-col",{class:e.$style.col,attrs:{md:16}},[r("div",{class:e.$style.content},[e.visible?r("CategoryForm",{attrs:{visible:e.visible,categories:e.categories,"category-id":e.categoryId},on:{"update:visible":function(t){e.visible=t},submit:function(t){return e.$fetch()}}}):r("div",{class:e.$style.create},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleCreate}},[e._v("Create")]),e._v(" "),r("div",{class:e.$style.edit},[e._v("Or select category to edit")])],1)],1)])],1)],1)])])}),[],!1,(function(e){this.$style=f.default.locals||f.default}),null,null);t.default=component.exports},717:function(e,t,r){"use strict";r.d(t,"c",(function(){return C})),r.d(t,"a",(function(){return w})),r.d(t,"e",(function(){return $})),r.d(t,"d",(function(){return I})),r.d(t,"b",(function(){return j})),r.d(t,"f",(function(){return F}));r(73),r(9),r(99),r(23),r(80),r(65);var o,n=r(734),c=r.n(n),l=new Uint8Array(16);function d(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(l)}var f=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var y=function(e){return"string"==typeof e&&f.test(e)},_=[],m=0;m<256;++m)_.push((m+256).toString(16).substr(1));var v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(_[e[t+0]]+_[e[t+1]]+_[e[t+2]]+_[e[t+3]]+"-"+_[e[t+4]]+_[e[t+5]]+"-"+_[e[t+6]]+_[e[t+7]]+"-"+_[e[t+8]]+_[e[t+9]]+"-"+_[e[t+10]]+_[e[t+11]]+_[e[t+12]]+_[e[t+13]]+_[e[t+14]]+_[e[t+15]]).toLowerCase();if(!y(r))throw TypeError("Stringified UUID is invalid");return r};var h=function(e,t,r){var o=(e=e||{}).random||(e.rng||d)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){r=r||0;for(var i=0;i<16;++i)t[r+i]=o[i];return t}return v(o)};r(66);function C(e){if(0===e.length)return[];var t,i,r=c()(e),map={},o=[];for(i=0;i<r.length;i+=1)map[r[i].id]=i,r[i].children=[];for(i=0;i<r.length;i+=1)(t=r[i]).parentId?r[map[t.parentId]].children.push(t):o.push(t);return o}var x=[];function w(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(t){var o=e.find((function(e){return e.id===t}));return r||x.unshift(o),w(e,null==o?void 0:o.parentId,!1)}var n=c()(x);return x=[],n}var $=function(e){return new Promise((function(t){setTimeout(t,e)}))},O=function(data){return"string"==typeof data?data.split(","):Array.isArray(data)?data:[]},k=function(data){return"string"==typeof data?parseInt(data,10):"number"==typeof data?data:void 0},I=function(e){var filter={color:[],size:[],collection:[]};return e.priceFrom&&(filter.priceFrom=k(e.priceFrom)||void 0),e.priceTo&&(filter.priceTo=k(e.priceTo)||void 0),e.color&&(filter.color=O(e.color)),e.size&&(filter.size=O(e.size)),e.collection&&(filter.collection=O(e.collection)),filter},j=function(){return h()},F=function(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e")).replace(/ì|í|ị|ỉ|ĩ/g,"i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y")).replace(/đ/g,"d")).replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g,"")).replace(/\u02C6|\u0306|\u031B/g,"")}},753:function(e,t,r){var content=r(907);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("3acd8dbb",content,!0,{sourceMap:!1})},754:function(e,t,r){var content=r(909);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("7e58ac6f",content,!0,{sourceMap:!1})},847:function(e,t,r){var content=r(1163);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("358f029f",content,!0,{sourceMap:!1})},906:function(e,t,r){"use strict";var o=r(753),n=r.n(o);r.d(t,"default",(function(){return n.a}))},907:function(e,t,r){var o=r(15)((function(i){return i[1]}));o.push([e.i,".CategoryForm__root_EN8y5{padding:0 var(--space);}.CategoryForm__root_EN8y5 h2{font-size:2rem;font-weight:600}.CategoryForm__root_EN8y5 .CategoryForm__form_KaRqY{margin-top:var(--space-1x5)}.CategoryForm__root_EN8y5 .CategoryForm__footer_\\+ZF\\+S{margin-top:var(--space-2x);display:flex;justify-content:flex-end}.CategoryForm__root_EN8y5 .CategoryForm__select_I4ytc{width:100%}",""]),o.locals={root:"CategoryForm__root_EN8y5",form:"CategoryForm__form_KaRqY",footer:"CategoryForm__footer_+ZF+S",select:"CategoryForm__select_I4ytc"},e.exports=o},908:function(e,t,r){"use strict";var o=r(754),n=r.n(o);r.d(t,"default",(function(){return n.a}))},909:function(e,t,r){var o=r(15)((function(i){return i[1]}));o.push([e.i,".CategoryList__root_\\+rCZY h2{font-size:2rem;font-weight:600}.CategoryList__root_\\+rCZY .CategoryList__list_yD6YE{margin-top:var(--space-2x)}",""]),o.locals={root:"CategoryList__root_+rCZY",list:"CategoryList__list_yD6YE"},e.exports=o}}]);