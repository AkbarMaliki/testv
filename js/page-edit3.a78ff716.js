(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-edit3"],{1302:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"offset-2 col-8"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("Edit Text Berjalan")]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"sm-form "},[a("label",{attrs:{for:"speed"}},[t._v("Your speed")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.xdata.speed,expression:"xdata.speed"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"speed",name:"speed",placeholder:"speed"},domProps:{value:t.xdata.speed},on:{input:function(e){e.target.composing||t.$set(t.xdata,"speed",e.target.value)}}})]),a("button",{staticClass:"btn btn-sm btn-primary  ",attrs:{type:"button"},on:{click:t.editspeed}},[a("span",{staticClass:"typcn typcn-edit"}),t._v(" Edit Speed")]),a("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.edit(e)}}},[a("div",{staticClass:"sm-form "},[a("label",{attrs:{for:"text"}},[t._v("Your text")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.text,expression:"vdata.text"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"text",name:"text",placeholder:"text"},domProps:{value:t.vdata.text},on:{input:function(e){e.target.composing||t.$set(t.vdata,"text",e.target.value)}}})]),a("br"),a("hr",{staticClass:"style16"}),a("button",{staticClass:"btn btn-sm btn-primary  ",attrs:{type:"submit"}},[t._v("Edit")]),a("br"),a("p",{staticClass:"p-3 text-xl"},[t._v(" "+t._s(t.datanya[0].text)+" ")])])])])])])])},n=[],o=(a("bc3a"),a("8aa5")),i=a.n(o),d=i.a.firestore(),r={layout:"tv",data:function(){return{datanya:{},vdata:{},xdata:{speed:0}}},methods:{edit:function(){d.collection("tv/btn/tvtext").doc("U91xp3dp6sRf1iKyY8z8").set(this.vdata,{merge:!0}).then((function(t){alert("berhasil di edit")}))},editspeed:function(){d.collection("tv/btn/setting").doc("t0ZJNvsrdeMmo7cGrUmy").set(this.xdata,{merge:!0}).then((function(t){alert("berhasil di edit")}))}},mounted:function(){var t=this;d.collection("tv/btn/tvtext").onSnapshot((function(e){var a=e.docs.map((function(t){return t.data()}));t.datanya=a})),d.collection("tv/btn/setting").onSnapshot((function(e){var a=e.docs.map((function(t){return t.data()}));t.xdata.speed=a[0].speed}))}},c=r,l=a("2877"),p=Object(l["a"])(c,s,n,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=page-edit3.a78ff716.js.map