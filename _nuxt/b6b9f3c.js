(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{726:function(t,e,o){var content=o(805);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("07b06722",content,!0,{sourceMap:!1})},804:function(t,e,o){"use strict";var l=o(726),c=o.n(l);o.d(e,"default",(function(){return c.a}))},805:function(t,e,o){var l=o(15)((function(i){return i[1]}));l.push([t.i,"",""]),l.locals={},t.exports=l},870:function(t,e,o){"use strict";o.r(e);var l=o(1).default.extend({props:{visible:{type:Boolean,default:!1}},data:function(){return{product:"customcat-product"}},methods:{handleSelect:function(){this.$emit("select",this.product),this.$emit("update:visible",!1)}}}),c=o(804),n=o(8);var component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.root},[o("el-dialog",{attrs:{title:"Product select",visible:t.visible,width:"30%","before-close":function(){return t.$emit("update:visible",!1)}},on:{"update:visible":function(e){t.visible=e}}},[o("el-radio-group",{model:{value:t.product,callback:function(e){t.product=e},expression:"product"}},[o("el-radio",{attrs:{label:"customcat-product"}},[t._v("Customcat Product")]),t._v(" "),o("el-radio",{attrs:{label:"manual-product"}},[t._v("Manual Product")])],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){return t.$emit("update:visible",!1)}}},[t._v("Cancel")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.handleSelect}},[t._v("Select")])],1)],1)],1)}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports}}]);