(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1031:function(t,e,o){"use strict";o.r(e);var n=o(4),l=(o(35),o(52),o(58),o(495),o(496),o(734)),r=o.n(l),c=o(1),_=o(39),d=c.default.extend({props:{collections:{type:Array,default:[]}},data:function(){return{isLoading:!1}},computed:{listCollections:function(){return this.$store.state.collections}},methods:{isSelected:function(t){return this.collections.includes(t)},handleChange:function(t){var e=r()(this.collections);if(this.isSelected(t.id)){var o=e.findIndex((function(e){return e===t.id}));e.splice(o,1)}else e.push(t.id);this.$emit("update:collections",e)}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.listCollections.length>0)){e.next=2;break}return e.abrupt("return");case 2:return t.isLoading=!0,e.next=5,t.$productService.getCollections({limit:-1});case 5:o=e.sent,n=o.collections,t.$store.commit(_.Mutations.TYPE.SET_COLLECTIONS,n),t.isLoading=!1;case 9:case"end":return e.stop()}}),e)})))()}}),f=o(936),h=o(8);var component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[t.isLoading?o("el-skeleton",{attrs:{rows:4,animated:""}}):o("div",[o("h4",[t._v("Collection")]),t._v(" "),o("div",{class:t.$style.items},t._l(t.listCollections,(function(e){return o("el-checkbox",{key:e.id,class:t.$style.item,attrs:{checked:t.isSelected(e.id)},on:{change:function(o){return t.handleChange(e)}}},[t._v(t._s(e.name))])})),1)])],1)}),[],!1,(function(t){this.$style=f.default.locals||f.default}),null,null);e.default=component.exports},767:function(t,e,o){var content=o(937);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("e5f7c05e",content,!0,{sourceMap:!1})},936:function(t,e,o){"use strict";var n=o(767),l=o.n(n);o.d(e,"default",(function(){return l.a}))},937:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,".CollectionFilter__root_lpyVX h4{font-size:1.4rem;font-weight:500}.CollectionFilter__root_lpyVX .CollectionFilter__items_iSo7M{margin-top:var(--space)}.CollectionFilter__root_lpyVX .CollectionFilter__item_zGS30{width:100%}.CollectionFilter__root_lpyVX .CollectionFilter__item_zGS30+.CollectionFilter__item_zGS30{margin-top:var(--space-1o2)}",""]),n.locals={root:"CollectionFilter__root_lpyVX",items:"CollectionFilter__items_iSo7M",item:"CollectionFilter__item_zGS30"},t.exports=n}}]);