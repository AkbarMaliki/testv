(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-persistance-index"],{e9af:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(e._s(e.$store.state.blog.data))])},s=[],n=a("bc3a"),l=a.n(n),r={watchQuery:["page"],key:function(e){return e.fullPath},transition:function(e,t){return t&&+e.query.page<+t.query.page?"slide-right":"slide-left"},data:function(){return{blog:[]}},mounted:function(){var e=this;console.log(this.$store.state.url),l.a.get("http://localhost:3000/api/version").then((function(t){console.log(t.data.data.version),console.log(e.$store.state.blog.version),console.log(e.$store.state.blog.data.length),e.$store.state.blog.data.length?(console.log("sudah ada"),t.data.data.version==e.$store.state.blog.version?console.log("versi nya sama"):(console.log("versi nya beda"),e.$store.dispatch("blog/refresh",t.data.data.version))):(console.log("belum ada"),e.$store.dispatch("blog/refresh",t.data.data.version))}))}},i=r,c=a("2877"),d=Object(c["a"])(i,o,s,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=page-testing-persistance-index.2a0d6bd2.js.map