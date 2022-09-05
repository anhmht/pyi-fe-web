(window.webpackJsonp=window.webpackJsonp||[]).push([[44,14],{1019:function(t,e,o){"use strict";o.r(e);var n=o(4),l=(o(35),o(1)),r=o(716),c=l.default.extend({components:{Pagination:r.default},data:function(){return{collections:[],isLoading:!1,totalRecord:0,paging:{limit:20,page:1}}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$productService.getCollections(t.paging);case 3:o=e.sent,n=o.collections,l=o.total,t.collections=n,t.totalRecord=l,t.isLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},watch:{paging:{handler:function(){this.$fetch()},deep:!0}}}),d=o(910),f=o(8);var component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("el-table",{class:t.$style.table,attrs:{data:t.collections}},[o("el-table-column",{attrs:{width:"300",label:"Collection Id","show-overflow-tooltip":"",prop:"id"}}),t._v(" "),o("el-table-column",{attrs:{width:"200",label:"Collection Name","show-overflow-tooltip":"",prop:"name"}}),t._v(" "),o("el-table-column",{attrs:{width:"200",label:"Path","show-overflow-tooltip":"",prop:"path"}}),t._v(" "),o("el-table-column",{attrs:{width:"150",label:"Created date","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-popover",{attrs:{placement:"top-start",trigger:"hover",content:t.$displayDateTime(e.row.createdDate)}},[o("span",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n            "+t._s(t.$displayRevealTime(e.row.createdDate)))])])]}}])}),t._v(" "),o("el-table-column",{attrs:{width:"150",label:"Modified date","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-popover",{attrs:{placement:"top-start",trigger:"hover",content:t.$displayDateTime(e.row.modifiedDate)}},[o("span",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n            "+t._s(t.$displayRevealTime(e.row.modifiedDate)))])])]}}])}),t._v(" "),o("el-table-column",{attrs:{fixed:"right",align:"right",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini"},on:{click:function(o){return t.handleEdit(e.$index,e.row)}}},[t._v("Edit")]),t._v(" "),o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){return t.handleDelete(e.$index,e.row)}}},[t._v("Delete")])]}}])},[o("template",{slot:"header"},[o("el-button",{attrs:{type:"primary"}},[t._v("create")])],1)],2)],1),t._v(" "),o("el-divider",{staticClass:"divider"}),t._v(" "),o("div",{class:t.$style.pagination},[o("Pagination",{attrs:{total:t.totalRecord,page:t.paging.page},on:{"update:page":function(e){return t.$set(t.paging,"page",e)}}})],1)],1)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports},711:function(t,e,o){var content=o(715);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("5c455e44",content,!0,{sourceMap:!1})},714:function(t,e,o){"use strict";var n=o(711),l=o.n(n);o.d(e,"default",(function(){return l.a}))},715:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,".Pagination__root_ZQo\\+X{font-size:1.4rem;}.Pagination__root_ZQo\\+X .Pagination__info_Jpwwv{margin-top:var(--space-1o2)}.Pagination__root_ZQo\\+X .Pagination__pagination_fNlMh{display:flex;justify-content:flex-end}@media only screen and (max-width:991px){.Pagination__root_ZQo\\+X .Pagination__info_Jpwwv{text-align:center}.Pagination__root_ZQo\\+X .Pagination__pagination_fNlMh{justify-content:center}}",""]),n.locals={root:"Pagination__root_ZQo+X",info:"Pagination__info_Jpwwv",pagination:"Pagination__pagination_fNlMh"},t.exports=n},716:function(t,e,o){"use strict";o.r(e);o(494);var n=o(1).default.extend({props:{total:{type:Number,default:0},page:{type:Number,default:1},limit:{type:Number,default:20}},data:function(){return{currentPage:this.page}},computed:{displayFrom:function(){return(this.currentPage-1)*this.limit+1},displayTo:function(){return this.currentPage*this.limit>this.total?this.total:this.currentPage*this.limit}},watch:{currentPage:{handler:function(t){this.$emit("update:page",t)}}}}),l=o(714),r=o(8);var component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("el-row",[o("el-col",{attrs:{md:8}},[o("div",{class:t.$style.info},[t._v("\n        Showing "+t._s(t.displayFrom)+" to "+t._s(t.displayTo)+" of "+t._s(t.total)+" results\n      ")])]),t._v(" "),o("el-col",{attrs:{md:16}},[o("div",{class:t.$style.pagination},[o("el-pagination",{attrs:{"page-size":t.limit,layout:"prev, pager, next",total:t.total,"current-page":t.currentPage},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)])],1)],1)}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.default=component.exports},755:function(t,e,o){var content=o(911);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("632ee04f",content,!0,{sourceMap:!1})},910:function(t,e,o){"use strict";var n=o(755),l=o.n(n);o.d(e,"default",(function(){return l.a}))},911:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,".CollectionList__root_k2Qbe .CollectionList__table_wfMdU{width:100%}.CollectionList__root_k2Qbe .CollectionList__image_zJ6\\+P{width:100px;height:100px}",""]),n.locals={root:"CollectionList__root_k2Qbe",table:"CollectionList__table_wfMdU",image:"CollectionList__image_zJ6+P"},t.exports=n}}]);