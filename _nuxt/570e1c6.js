(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{530:function(t,n,e){var content=e(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(13).default)("5c455e44",content,!0,{sourceMap:!1})},606:function(t,n,e){"use strict";var o=e(530),r=e.n(o);e.d(n,"default",(function(){return r.a}))},607:function(t,n,e){var o=e(12)((function(i){return i[1]}));o.push([t.i,".Pagination__root_ZQo\\+X{font-size:1.4rem;}.Pagination__root_ZQo\\+X .Pagination__info_Jpwwv{margin-top:var(--space-1o2)}.Pagination__root_ZQo\\+X .Pagination__pagination_fNlMh{display:flex;justify-content:flex-end}@media only screen and (max-width:991px){.Pagination__root_ZQo\\+X .Pagination__info_Jpwwv{text-align:center}.Pagination__root_ZQo\\+X .Pagination__pagination_fNlMh{justify-content:center}}",""]),o.locals={root:"Pagination__root_ZQo+X",info:"Pagination__info_Jpwwv",pagination:"Pagination__pagination_fNlMh"},t.exports=o},651:function(t,n,e){"use strict";e.r(n);e(328);var o=e(0).default.extend({props:{total:{type:Number,default:0},page:{type:Number,default:1}},data:function(){return{currentPage:this.page,limit:16}},computed:{displayFrom:function(){return(this.currentPage-1)*this.limit+1},displayTo:function(){return this.currentPage*this.limit>this.total?this.total:this.currentPage*this.limit}},watch:{currentPage:{handler:function(t){this.$emit("update:page",t)}}}}),r=e(606),l=e(6);var component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.$style.root},[e("el-row",[e("el-col",{attrs:{md:8}},[e("div",{class:t.$style.info},[t._v("\n        Showing "+t._s(t.displayFrom)+" to "+t._s(t.displayTo)+" of "+t._s(t.total)+" results\n      ")])]),t._v(" "),e("el-col",{attrs:{md:16}},[e("div",{class:t.$style.pagination},[e("el-pagination",{attrs:{"page-size":t.limit,layout:"prev, pager, next",total:t.total,"current-page":t.currentPage},on:{"update:currentPage":function(n){t.currentPage=n},"update:current-page":function(n){t.currentPage=n}}})],1)])],1)],1)}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);n.default=component.exports}}]);