(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af48f40c"],{"7b3d":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},a=[],i=n("7618"),s=n("bc3a"),c=n.n(s),d={data:function(){return{test:1,bearer:"",busy:!1}},methods:{mails:function(e,t,n){var o=this,a=new FormData;a.append("data","select * from tbuser where id='".concat(e,"'")),c.a.post("https://infolayanans.space/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){if(-1!=e.data[0].email.indexOf("@")){console.log(e.data[0].email);var a=new FormData;a.append("tujuan",e.data[0].email),a.append("subjek",t),a.append("text",n),c.a.post("https://infolayanans.space/send_mail.php",a).then((function(e){console.log(e),o.$forceUpdate()}))}else console.log("kosong")}))},notifikasi:function(e,t,n){var o=new FormData;o.append("data","insert into notifikasi (id_user,link,text,dibaca,app,button,tanggal)\n         VALUES ('".concat(e,"','").concat(t,"','").concat(n,"','false','driver','1','").concat(new Date,"')")),o.append("database"," infolay3_test"),c.a.post("https://infolayanans.space/api/mysql/auto.php",o,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(o){var a={id:uniqid(),target_id:e,app:"driver",text:n,link:t,dibaca:"false"};socket.emit("send-message",a)})).catch((function(o){var a={id:uniqid(),target_id:e,app:"driver",text:n,link:t,dibaca:"false"};socket.emit("send-message",a)}))},version:function(){null==localStorage.getItem("version")&&localStorage.setItem("version",1)},newStuff:function(){if(localStorage.getItem("newstuff")!=this.$store.state.version){var e=indexedDB.deleteDatabase(this.$store.state.indexdb);e.onsuccess=function(){console.log("Deleted database successfully")},e.onerror=function(){console.log("Couldn't delete database")},e.onblocked=function(){console.log("Couldn't delete database due to the operation being blocked")},localStorage.clear(),localStorage.setItem("newstuff",this.$store.state.version),alert("new version")}},mediaQueries:function(){this.$store.commit("mediaQueries",window.innerWidth<=576?"sm":window.innerWidth<=768?"md":window.innerWidth<=992?"lg":"xl")},init:function(){this.version(),this.loginOAuth()}},mounted:function(){var e=this,t=this;window.addEventListener("scroll",(function(e){this.scrollY}));var n=document.createElement("script");n.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"),document.head.appendChild(n),setTimeout((function(){(new WOW).init()}),500),"object"===("undefined"===typeof cordova?"undefined":Object(i["a"])(cordova))&&document.addEventListener("deviceready",(function(){cordova.plugins.backgroundMode.enable(),cordova.plugins.backgroundMode.on("EVENT",(function(){})),window.powerManagement.dim((function(){console.log("Wakelock acquired")}),(function(){console.log("Failed to acquire wakelock")})),cordova.plugins.backgroundMode.setDefaults({title:"HELLO",text:"World",hidden:!0,silent:!0}),cordova.plugins.notification.local.setDefaults({led:{color:"#FF00FF",on:500,off:500},vibrate:[100,50,200]})})),this.mediaQueries(),this.$nextTick((function(){window.addEventListener("resize",(function(){t.mediaQueries()}))})),setTimeout((function(){e.$store.commit("nossr",!0)}),100),this.$nuxt.$on("busy",(function(t){e.busy=t}))}},l=d,r=(n("f70f"),n("2877")),u=Object(r["a"])(l,o,a,!1,null,null,null);t["default"]=u.exports},f70f:function(e,t,n){"use strict";var o=n("fb80"),a=n.n(o);a.a},fb80:function(e,t,n){}}]);
//# sourceMappingURL=chunk-af48f40c.529d7d78.js.map