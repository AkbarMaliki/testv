(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-datatable-print"],{"0a49":function(t,e,i){var n=i("9b43"),a=i("626a"),s=i("4bf8"),o=i("9def"),r=i("cd1c");t.exports=function(t,e){var i=1==t,l=2==t,c=3==t,u=4==t,f=6==t,d=5==t||f,g=e||r;return function(e,r,p){for(var m,h,v=s(e),y=a(v),b=n(r,p,3),x=o(y.length),w=0,$=i?g(e,x):l?g(e,0):void 0;x>w;w++)if((d||w in y)&&(m=y[w],h=b(m,w,v),t))if(i)$[w]=h;else if(h)switch(t){case 3:return!0;case 5:return m;case 6:return w;case 2:$.push(m)}else if(u)return!1;return f?-1:c||u?u:$}}},1169:function(t,e,i){var n=i("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"20d6":function(t,e,i){"use strict";var n=i("5ca1"),a=i("0a49")(6),s="findIndex",o=!0;s in[]&&Array(1)[s]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")(s)},5634:function(t,e,i){"use strict";var n=i("e051"),a=i.n(n);a.a},b9a0:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v(" "+t._s(t.vdata.upload)+" "),i("upload",{on:{upload:t.go,link:t.linknya}})],1)},a=[],s=i("eeb9"),o=(i("bc3a"),{components:{upload:s["a"]},data:function(){return{vdata:{}}},methods:{linknya:function(t){console.log("link",t),this.vdata.upload=t,this.$forceUpdate()},go:function(t){console.log("uploaded")}}}),r=o,l=i("2877"),c=Object(l["a"])(r,n,a,!1,null,null,null);e["default"]=c.exports},cd1c:function(t,e,i){var n=i("e853");t.exports=function(t,e){return new(n(t))(e)}},d17f:function(t,e,i){t.exports=i.p+"img/image.9604208c.svg"},e051:function(t,e,i){},e853:function(t,e,i){var n=i("d3f4"),a=i("1169"),s=i("2b4c")("species");t.exports=function(t){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)||(e=void 0),n(e)&&(e=e[s],null===e&&(e=void 0))),void 0===e?Array:e}},eeb9:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"uploadContainer hoverable text-center flex flex-wrap flex-row"},[n("div",{staticClass:"text-center",staticStyle:{cursor:"pointer"},on:{click:t.upload}},t._l(t.imgList,(function(e,i){return n("img",{directives:[{name:"show",rawName:"v-show",value:t.imgList.length>0,expression:"imgList.length>0"}],key:i,staticClass:"imgInput myImage imgSize",staticStyle:{"z-index":"100","margin-left":"10%"},attrs:{src:e,id:"imgKu"+i},on:{click:function(e){return t.zoomIn(e)}}})})),0),n("div",{staticClass:"text-center cursor-pointer",staticStyle:{position:"static"}},[t.imgList.length<1?n("label",{staticClass:"cursor-pointer",staticStyle:{"font-size":"12px",color:"black",position:"absolute","margin-left":"5px","margin-top":"0px"},attrs:{for:"file2"}},[n("img",{attrs:{src:i("d17f")}})]):t._e(),n("input",{ref:"uploader",staticClass:"cursor-pointer",class:{"d-none":t.imgList.length>0},attrs:{id:"file2",type:"file"},on:{input:function(e){return e.preventDefault(),t.ambil(e)}}})]),n("section",{staticStyle:{"margin-left":"20px"}},[n("button",{staticClass:"btn btn-sm btn-outline-success waves-effect d-none",attrs:{type:"button"},on:{click:t.upload}},[t._v("Browse")]),n("button",{directives:[{name:"show",rawName:"v-show",value:t.imgList.length>0,expression:"imgList.length>0"}],staticClass:"btn btn-sm btn-outline-danger waves-effect",attrs:{type:"button",id:"rest"},on:{click:t.reset}},[t._v("Reset")])])])])},a=[],s=(i("ac6a"),i("20d6"),i("bc3a")),o=i.n(s),r={data:function(){return{imgList:[],count:0,imgFiles:[],imgs:[]}},watch:{imgList:function(){var t=this;setTimeout((function(){0==t.imgList.length&&t.$emit("resetInput",!0)}),300)}},methods:{zoomIn:function(t){console.log(t.target.classList.toggle("zoomIn"))},hilang:function(t,e){var i=this,n=t.target.src,a=this.imgList.findIndex((function(t){return t==n}));delete this.imgList[a];var s=0;this.$el.querySelector("#imgKu"+e).classList.add("hilang"),this.$el.querySelectorAll(".myImage").forEach((function(t){t.classList.contains("hilang")&&s++})),s>0&&this.count++,this.count==this.$el.querySelectorAll(".myImage").length&&setTimeout((function(){i.$el.querySelector("#rest").click()}),300)},reset:function(){this.$el.querySelector("#file2").style.display="initial",this.$el.querySelectorAll(".myImage").forEach((function(t){t.style.display="none"})),this.imgList=[],this.count=0},upload:function(t){var e=1;this.imgList.length>0?(this.$el.querySelectorAll(".myImage").forEach((function(i){t.target!=i?e+=1:e*=-100})),e>0&&this.$refs.uploader.click()):this.$refs.uploader.click()},ambil:function(t){var e,i,n=this,a=this;(this.$nuxt.$emit("busy",!0),t.target.files[0].size>1e7)?alert("File yang di upload tidak sesuai kriteria"):t.target.files.length>0&&function(){for(var s,r=[],l=[],c=0;c<t.target.files.length;c++){n.imgs.push(t.target.files[c]),e=t.target.files[c],i=new FileReader,i.onload=function(t){r.push(t.target.result)},i.readAsDataURL(e),s=t.target.files[c],s.size<1e6?30:s.size<2e6?25:s.size<3e6?20:s.size<4e6?15:10;var u=new FormData;u.append("file",s),o.a.post("https://infolayanans.now.sh/api/data/upload",u,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(t){console.log("output",t.data.data),n.$emit("link",t.data.data),setTimeout((function(){l.push("".concat(a.$store.state.url).concat(t.data.data))}),2e3)})).catch((function(t){console.log(t)}))}n.imgList=r,console.log(t.target),setTimeout((function(){n.$emit("upload",l),n.$nuxt.$emit("busy",!1)}),1e3)}()}}},l=r,c=(i("5634"),i("2877")),u=Object(c["a"])(l,n,a,!1,null,null,null);e["a"]=u.exports}}]);
//# sourceMappingURL=page-testing-datatable-print.7ddde863.js.map