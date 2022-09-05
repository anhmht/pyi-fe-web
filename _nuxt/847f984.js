(window.webpackJsonp=window.webpackJsonp||[]).push([[83,48,50],{1023:function(t,e,o){"use strict";o.r(e);var r=o(1).default.extend({}),n=o(918),l=o(8);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$style.root})}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports},1024:function(t,e,o){"use strict";o.r(e);var r=o(4),n=(o(19),o(177),o(48),o(35),o(1)),l=o(870),c=o(716),d=n.default.extend({components:{ProductSelectionModal:l.default,Pagination:c.default},data:function(){return{products:[],isLoading:!1,totalRecord:0,filters:{filter:{color:[],size:[],collection:[]},limit:20,page:1,sort:"newest"},visible:!1}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$productService.getProducts(t.filters);case 3:o=e.sent,r=o.products,n=o.total,t.products=r,t.totalRecord=n,t.isLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},methods:{getCategoryName:function(t){return t[t.length-1].name},getCollections:function(t){return t.map((function(t){return t.name})).join(", ")||"-"},handleCommand:function(t){this.$emit("command",t)}},watch:{filters:{handler:function(){this.$fetch()},deep:!0}}}),f=o(920),v=o(8);var component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("el-table",{class:t.$style.table,attrs:{data:t.products}},[o("el-table-column",{attrs:{align:"center",label:"Image",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-image",{class:t.$style.image,attrs:{src:e.row.images[0].src,fit:"cover"}})]}}])}),t._v(" "),o("el-table-column",{attrs:{width:"300",label:"Name","show-overflow-tooltip":"",prop:"name"}}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"Type",prop:"type"}}),t._v(" "),o("el-table-column",{attrs:{width:"150","show-overflow-tooltip":"",label:"Category"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.getCategoryName(e.row.categories))+"\n      ")]}}])}),t._v(" "),o("el-table-column",{attrs:{width:"150","show-overflow-tooltip":"",label:"Collection"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.getCollections(e.row.collection))+"\n      ")]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"Price","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[o("strong",[t._v(t._s(t.$formatCurrency(e.row.price)))])]}}])}),t._v(" "),o("el-table-column",{attrs:{width:"150",label:"Created date","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-popover",{attrs:{placement:"top-start",trigger:"hover",content:t.$displayDateTime(e.row.createdDate)}},[o("span",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n            "+t._s(t.$displayRevealTime(e.row.createdDate)))])])]}}])}),t._v(" "),o("el-table-column",{attrs:{width:"150",label:"Modified date","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-popover",{attrs:{placement:"top-start",trigger:"hover",content:t.$displayDateTime(e.row.modifiedDate)}},[o("span",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n            "+t._s(t.$displayRevealTime(e.row.modifiedDate)))])])]}}])}),t._v(" "),o("el-table-column",{attrs:{fixed:"right",align:"right",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini"},on:{click:function(o){return t.handleEdit(e.$index,e.row)}}},[t._v("Edit")]),t._v(" "),o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){return t.handleDelete(e.$index,e.row)}}},[t._v("Delete")])]}}])},[o("template",{slot:"header"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.visible=!0}}},[t._v(" Create ")])],1)],2)],1),t._v(" "),o("el-divider",{staticClass:"divider"}),t._v(" "),o("div",{class:t.$style.pagination},[o("Pagination",{attrs:{total:t.totalRecord,page:t.filters.page},on:{"update:page":function(e){return t.$set(t.filters,"page",e)}}})],1),t._v(" "),o("ProductSelectionModal",{attrs:{visible:t.visible},on:{"update:visible":function(e){t.visible=e},select:function(e){return t.$emit("create",e)}}})],1)}),[],!1,(function(t){this.$style=f.default.locals||f.default}),null,null);e.default=component.exports},1170:function(t,e,o){"use strict";var r=o(851),n=o.n(r);o.d(e,"default",(function(){return n.a}))},1171:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".index__root_8Et3A .index__product_vzJch{background:#fff;border-radius:var(--radius-5);padding:var(--space);margin-top:var(--space-2x)}.index__root_8Et3A .index__form_wt9sO .index__customcat_gDpeQ{margin-top:var(--space-2x);background:#fff;border-radius:var(--radius-5);padding:var(--space)}",""]),r.locals={root:"index__root_8Et3A",product:"index__product_vzJch",form:"index__form_wt9sO",customcat:"index__customcat_gDpeQ"},t.exports=r},1240:function(t,e,o){"use strict";o.r(e);var r=o(1),n=o(1208),l=o(1023),c=o(1024),d=r.default.extend({components:{ProductList:c.default,ProductCustomcat:n.default,ProductForm:l.default},name:"DashboardProduct",layout:"dashboard",data:function(){return{create:void 0,productId:void 0}}}),f=o(1170),v=o(8);var component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("div",{staticClass:"container"},[t.create?o("div",{class:t.$style.form},[o("h1",[t._v("Product Form")]),t._v(" "),(t.create="customcat-product")?o("ProductCustomcat",{class:t.$style.customcat,on:{cancel:function(e){t.create=void 0}}}):o("ProductForm",{attrs:{"product-id":t.productId}})],1):o("div",{class:t.$style.list},[o("h1",[t._v("Product List")]),t._v(" "),o("div",{class:t.$style.product},[o("ProductList",{on:{create:function(e){return t.create=e}}})],1)])])])}),[],!1,(function(t){this.$style=f.default.locals||f.default}),null,null);e.default=component.exports},726:function(t,e,o){var content=o(805);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("07b06722",content,!0,{sourceMap:!1})},759:function(t,e,o){var content=o(919);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("057c2868",content,!0,{sourceMap:!1})},760:function(t,e,o){var content=o(921);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("20f7759c",content,!0,{sourceMap:!1})},804:function(t,e,o){"use strict";var r=o(726),n=o.n(r);o.d(e,"default",(function(){return n.a}))},805:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,"",""]),r.locals={},t.exports=r},851:function(t,e,o){var content=o(1171);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("7fe1f884",content,!0,{sourceMap:!1})},870:function(t,e,o){"use strict";o.r(e);var r=o(1).default.extend({props:{visible:{type:Boolean,default:!1}},data:function(){return{product:"customcat-product"}},methods:{handleSelect:function(){this.$emit("select",this.product),this.$emit("update:visible",!1)}}}),n=o(804),l=o(8);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("el-dialog",{attrs:{title:"Product select",visible:t.visible,width:"30%","before-close":function(){return t.$emit("update:visible",!1)}},on:{"update:visible":function(e){t.visible=e}}},[o("el-radio-group",{model:{value:t.product,callback:function(e){t.product=e},expression:"product"}},[o("el-radio",{attrs:{label:"customcat-product"}},[t._v("Customcat Product")]),t._v(" "),o("el-radio",{attrs:{label:"manual-product"}},[t._v("Manual Product")])],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){return t.$emit("update:visible",!1)}}},[t._v("Cancel")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.handleSelect}},[t._v("Select")])],1)],1)],1)}),[],!1,(function(t){this.$style=n.default.locals||n.default}),null,null);e.default=component.exports},918:function(t,e,o){"use strict";var r=o(759),n=o.n(r);o.d(e,"default",(function(){return n.a}))},919:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,"",""]),r.locals={},t.exports=r},920:function(t,e,o){"use strict";var r=o(760),n=o.n(r);o.d(e,"default",(function(){return n.a}))},921:function(t,e,o){var r=o(15)((function(i){return i[1]}));r.push([t.i,".ProductList__root_zeNds .ProductList__table_zHdko{width:100%}.ProductList__root_zeNds .ProductList__image_hF3V2{width:100px;height:100px}",""]),r.locals={root:"ProductList__root_zeNds",table:"ProductList__table_zHdko",image:"ProductList__image_hF3V2"},t.exports=r}}]);