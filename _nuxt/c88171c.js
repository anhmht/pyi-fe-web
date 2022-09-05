(window.webpackJsonp=window.webpackJsonp||[]).push([[85,14,52],{1026:function(t,e,n){"use strict";n.r(e);var o=n(4),r=(n(35),n(1)),l=n(716),c=r.default.extend({components:{Pagination:l.default},data:function(){return{users:[],isLoading:!1,totalRecord:0,paging:{limit:2,page:1}}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$userService.getUser(t.paging);case 3:n=e.sent,o=n.users,r=n.total,t.users=o,t.totalRecord=r,t.isLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},watch:{paging:{handler:function(){this.$fetch()},deep:!0}}}),d=n(924),f=n(8);var component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.root},[n("el-table",{class:t.$style.table,attrs:{data:t.users}},[n("el-table-column",{attrs:{align:"center",width:"100",label:"User"}},[[n("el-avatar",{attrs:{icon:"el-icon-user-solid"}})]],2),t._v(" "),n("el-table-column",{attrs:{width:"200",label:"User Name","show-overflow-tooltip":"",prop:"username"}}),t._v(" "),n("el-table-column",{attrs:{width:"200",label:"User Email","show-overflow-tooltip":"",prop:"email"}}),t._v(" "),n("el-table-column",{attrs:{width:"200",label:"Role","show-overflow-tooltip":"",prop:"role"}}),t._v(" "),n("el-table-column",{attrs:{width:"150",label:"Created date","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{placement:"top-start",trigger:"hover",content:t.$displayDateTime(e.row.createdDate)}},[n("span",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n            "+t._s(t.$displayRevealTime(e.row.createdDate)))])])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"150",label:"Modified date","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{placement:"top-start",trigger:"hover",content:t.$displayDateTime(e.row.modifiedDate)}},[n("span",{attrs:{slot:"reference"},slot:"reference"},[t._v("\n            "+t._s(t.$displayRevealTime(e.row.modifiedDate)))])])]}}])}),t._v(" "),n("el-table-column",{attrs:{fixed:"right",align:"right",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.handleEdit(e.$index,e.row)}}},[t._v("Edit")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("Delete")])]}}])},[n("template",{slot:"header"},[n("el-button",{attrs:{type:"primary"}},[t._v("create")])],1)],2)],1),t._v(" "),n("el-divider",{staticClass:"divider"}),t._v(" "),n("div",{class:t.$style.pagination},[n("Pagination",{attrs:{total:t.totalRecord,page:t.paging.page},on:{"update:page":function(e){return t.$set(t.paging,"page",e)}}})],1)],1)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports},1174:function(t,e,n){"use strict";var o=n(853),r=n.n(o);n.d(e,"default",(function(){return r.a}))},1175:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,".index__root_Mcba- .index__user_Qc6vO{background:#fff;border-radius:var(--radius-5);padding:var(--space);margin-top:var(--space-2x)}",""]),o.locals={root:"index__root_Mcba-",user:"index__user_Qc6vO"},t.exports=o},1242:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(1026),l=o.default.extend({components:{UserList:r.default},name:"DashboardUser",layout:"dashboard"}),c=n(1174),d=n(8);var component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.root},[n("div",{staticClass:"container"},[n("h1",[t._v("User List")]),t._v(" "),n("div",{class:t.$style.user},[n("UserList")],1)])])}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports},711:function(t,e,n){var content=n(715);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("5c455e44",content,!0,{sourceMap:!1})},714:function(t,e,n){"use strict";var o=n(711),r=n.n(o);n.d(e,"default",(function(){return r.a}))},715:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,".Pagination__root_ZQo\\+X{font-size:1.4rem;}.Pagination__root_ZQo\\+X .Pagination__info_Jpwwv{margin-top:var(--space-1o2)}.Pagination__root_ZQo\\+X .Pagination__pagination_fNlMh{display:flex;justify-content:flex-end}@media only screen and (max-width:991px){.Pagination__root_ZQo\\+X .Pagination__info_Jpwwv{text-align:center}.Pagination__root_ZQo\\+X .Pagination__pagination_fNlMh{justify-content:center}}",""]),o.locals={root:"Pagination__root_ZQo+X",info:"Pagination__info_Jpwwv",pagination:"Pagination__pagination_fNlMh"},t.exports=o},716:function(t,e,n){"use strict";n.r(e);n(494);var o=n(1).default.extend({props:{total:{type:Number,default:0},page:{type:Number,default:1},limit:{type:Number,default:20}},data:function(){return{currentPage:this.page}},computed:{displayFrom:function(){return(this.currentPage-1)*this.limit+1},displayTo:function(){return this.currentPage*this.limit>this.total?this.total:this.currentPage*this.limit}},watch:{currentPage:{handler:function(t){this.$emit("update:page",t)}}}}),r=n(714),l=n(8);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.root},[n("el-row",[n("el-col",{attrs:{md:8}},[n("div",{class:t.$style.info},[t._v("\n        Showing "+t._s(t.displayFrom)+" to "+t._s(t.displayTo)+" of "+t._s(t.total)+" results\n      ")])]),t._v(" "),n("el-col",{attrs:{md:16}},[n("div",{class:t.$style.pagination},[n("el-pagination",{attrs:{"page-size":t.limit,layout:"prev, pager, next",total:t.total,"current-page":t.currentPage},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)])],1)],1)}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},762:function(t,e,n){var content=n(925);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("07aee148",content,!0,{sourceMap:!1})},853:function(t,e,n){var content=n(1175);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("3d83c82c",content,!0,{sourceMap:!1})},924:function(t,e,n){"use strict";var o=n(762),r=n.n(o);n.d(e,"default",(function(){return r.a}))},925:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,".UserList__root_fuvDk .UserList__table_m1lDv{width:100%}.UserList__root_fuvDk .UserList__image_MI-6N{width:100px;height:100px}",""]),o.locals={root:"UserList__root_fuvDk",table:"UserList__table_m1lDv",image:"UserList__image_MI-6N"},t.exports=o}}]);