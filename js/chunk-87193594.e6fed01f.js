(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87193594"],{"1af6":function(t,e,n){var r=n("63b6");r(r.S,"Array",{isArray:n("9003")})},"20fd":function(t,e,n){"use strict";var r=n("d9f6"),o=n("aebd");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},"386d":function(t,e,n){"use strict";var r=n("cb7c"),o=n("83a1"),i=n("5f1b");n("214f")("search",1,(function(t,e,n,s){return[function(n){var r=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=s(n,t,this);if(e.done)return e.value;var a=r(t),u=String(this),c=a.lastIndex;o(c,0)||(a.lastIndex=0);var l=i(a,u);return o(a.lastIndex,c)||(a.lastIndex=c),null===l?-1:l.index}]}))},"549b":function(t,e,n){"use strict";var r=n("d864"),o=n("63b6"),i=n("241e"),s=n("b0dc"),a=n("3702"),u=n("b447"),c=n("20fd"),l=n("7cd6");o(o.S+o.F*!n("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,h,d=i(t),f="function"==typeof this?this:Array,p=arguments.length,w=p>1?arguments[1]:void 0,v=void 0!==w,y=0,g=l(d);if(v&&(w=r(w,p>2?arguments[2]:void 0,2)),void 0==g||f==Array&&a(g))for(e=u(d.length),n=new f(e);e>y;y++)c(n,y,v?w(d[y],y):d[y]);else for(h=g.call(d),n=new f;!(o=h.next()).done;y++)c(n,y,v?s(h,w,[o.value,y],!0):o.value);return n.length=y,n}})},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},"774e":function(t,e,n){t.exports=n("d2d5")},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8ba8":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"autocomplete",staticStyle:{"z-index":"10"}},[n("label",[n("span",{staticStyle:{position:"absolute","z-index":"-1",color:"white"}},[t._v("test")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control py-0 customeKotak",attrs:{type:"text",placeholder:"search"},domProps:{value:t.search},on:{click:t.addData,input:[function(e){e.target.composing||(t.search=e.target.value)},t.onChange],keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enter(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onArrowDown(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onArrowUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)}]}})])]),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"autocomplete-results text-center",staticStyle:{"z-index":"2000"}},[t.isLoading?n("li",{staticClass:"loading"},[t._v("Loading results...")]):t._l(t.results,(function(e,r){return n("li",{key:r,staticClass:"autocomplete-result",class:{"is-active":r===t.arrowCounter},staticStyle:{padding:"10px","border-bottom":"1px solid gray"},on:{click:function(n){return t.setResult(e)}}},[t._v(" "+t._s(e.title)+" | "),n("span",{staticClass:"font-bold"},[t._v(t._s(e.keywords))])])}))],2)])},o=[],i=(n("28a5"),n("386d"),n("a745")),s=n.n(i);function a(t){if(s()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var u=n("774e"),c=n.n(u),l=n("c8bb"),h=n.n(l);function d(t){if(h()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return c()(t)}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){return a(t)||d(t)||f()}var w=n("bc3a"),v=n.n(w),y={name:"Autocomplete",props:{isAsync:{type:Boolean,required:!1,default:!1}},data:function(){return{dataNya:[],isOpen:!1,results:[],search:"",isLoading:!1,arrowCounter:0,newItem:[],items:[]}},watch:{items:function(t,e){t.length!==e.length&&(this.results=t,this.isLoading=!1)}},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)},methods:{addData:function(){var t=this;this.isOpen=!0,//! diklik tempat datanya lalu data diisi
this.items.length<1&&document.addEventListener("click",this.handleClickOutside),v.a.get("/api/data/blog/search").then((function(e){var n=e.data.data,r=e.data.data;n=n.filter((function(t){return 1==t.public})),r=r.filter((function(e){return e.createdBy==t.$store.state.user._id}));var o=_.difference(r,n),i=[].concat(p(n),p(o));console.log(n),console.log(r),t.items=i}))},enter:function(t){var e=this;setTimeout((function(){e.$router.push("/blog/"+e.search),e.search=""}),0)},onEnter:function(){if(void 0==this.results[this.arrowCounter]);else{this.search=this.results[this.arrowCounter].title.split(" ").join("-")+"?xx=".concat(this.results[this.arrowCounter]._id);var t=this.results[this.arrowCounter].kategori+"/"+this.search;console.log(this.results[this.arrowCounter]),this.search=t}this.isOpen=!1,console.log(this.arrowCounter),-1==this.arrowCounter?(this.arrowCounter=-1,this.$emit("input",this.results[0])):(this.arrowCounter=-1,this.$emit("input",this.search))},onChange:function(){this.isAsync?this.isLoading=!0:(this.filterResults(),this.isOpen=!0)},filterResults:function(){var t=this;this.results=this.items.filter((function(e){if(e.title.toLowerCase().indexOf(t.search.toLowerCase())>-1||e.keywords.toLowerCase().indexOf(t.search.toLowerCase())>-1)return!0}))},setResult:function(t){this.search=t.title.split(" ").join("-")+"?xx=".concat(t._id);var e=t.kategori+"/"+this.search;this.$router.push("/blog/"+e),this.search="",this.isOpen=!1},onArrowDown:function(t){this.arrowCounter<this.results.length&&(this.arrowCounter=this.arrowCounter+1),console.log(this.arrowCounter)},onArrowUp:function(){this.arrowCounter>0&&(this.arrowCounter=this.arrowCounter-1),console.log(this.arrowCounter)},handleClickOutside:function(t){this.$el.contains(t.target)||(this.isOpen=!1,this.arrowCounter=-1)}}},g=y,C=n("2877"),x=Object(C["a"])(g,r,o,!1,null,null,null);e["default"]=x.exports},"95d5":function(t,e,n){var r=n("40c3"),o=n("5168")("iterator"),i=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(r(e))}},a745:function(t,e,n){t.exports=n("f410")},c8bb:function(t,e,n){t.exports=n("54a1")},d2d5:function(t,e,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-87193594.e6fed01f.js.map