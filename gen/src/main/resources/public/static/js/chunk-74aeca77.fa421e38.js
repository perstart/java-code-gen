(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74aeca77"],{"84f25":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:t.onTableAdd}},[t._v("新增模板组")]),t._v(" "),o("el-table",{attrs:{data:t.tableData,border:"","highlight-current-row":""}},[o("el-table-column",{attrs:{prop:"groupName",label:"模板组名称"}}),t._v(" "),o("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(o){return t.onSelectTemplate(e.row)}}},[t._v("查看模板")]),t._v(" "),o("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(o){return t.onTableUpdate(e.row)}}},[t._v("修改")]),t._v(" "),o("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(o){return t.onTableDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),o("el-dialog",{attrs:{title:t.groupTitle,visible:t.groupDlgShow},on:{"update:visible":function(e){t.groupDlgShow=e}}},[o("el-form",{ref:"dialogForm",attrs:{model:t.formData,rules:t.formRules,size:"mini","label-width":"120px"},nativeOn:{submit:function(t){t.preventDefault()}}},[o("el-form-item",{attrs:{prop:"name",label:"模板组名称"}},[o("el-input",{attrs:{"show-word-limit":"",maxlength:"100"},model:{value:t.formData.groupName,callback:function(e){t.$set(t.formData,"groupName",e)},expression:"formData.groupName"}})],1),t._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary","native-type":"submit"},on:{click:t.onSave}},[t._v("保 存")])],1)],1)],1)],1)},i=[],n={data:function(){return{tableData:[],groupTitle:"",groupDlgShow:!1,formData:{id:0,groupName:""},formRules:{groupName:[{required:!0,message:"不能为空",trigger:"blur"}]}}},created:function(){this.loadTable()},methods:{loadTable:function(){this.post("/group/list",{},(function(t){this.tableData=t.data}))},onTableAdd:function(t){this.groupTitle="增加模板组",this.formData={id:0,groupName:""},this.groupDlgShow=!0},onTableUpdate:function(t){this.groupTitle="修改模板组",this.post("/group/get/".concat(t.id),{},(function(t){this.formData=t.data})),this.groupDlgShow=!0},onTableDelete:function(t){this.confirm("确认要删除【".concat(t.groupName,"】吗？"),(function(e){this.post("/group/del",t,(function(){e(),this.tip("删除成功"),this.loadTable()}))}))},onAdd:function(){this.goRoute("edit/0")},onSelectTemplate:function(t){this.goRoute("/template/list?groupId=".concat(t.id))},onSave:function(){var t=this;this.$refs.dialogForm.validate((function(e){if(e){console.log(t.formData.id);var o=t.formData.id?"update":"add";console.log(o);var a="/group/".concat(o);t.post(a,t.formData,(function(e){"add"===o&&(t.formData.id=e.data.id),t.tip("保存成功"),t.loadTable(),t.groupDlgShow=!1}))}}))}}},l=n,r=o("2877"),u=Object(r["a"])(l,a,i,!1,null,null,null);e["default"]=u.exports}}]);