(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-LD-admin-file_upload~page-LD-admin-permintaan~page-LD-admin-user~page-LD-input~page-LD-list-dat~9c7b371f"],{"03a0":function(t,e,n){var r=n("25bb"),a=n("d309");t.exports={distanceInWords:r(),format:a()}},"1bdd":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:t.idName},on:{click:t.generate}},[t._t("default",[t._v(" Download "+t._s(t.name)+" ")])],2)},a=[],i=(n("6aa2"),n("ac4d"),n("8a81"),n("28a5"),n("7618")),o=(n("4917"),n("ac6a"),n("456d"),n("7f7f"),n("a481"),n("96cf"),n("3b8d")),s=n("aeb1"),u=n.n(s),c={props:{type:{type:String,default:"xls"},data:{type:Array,required:!1,default:null},fields:{type:Object,required:!1},exportFields:{type:Object,required:!1},defaultValue:{type:String,required:!1,default:""},title:{default:null},footer:{default:null},name:{type:String,default:"data.xls"},fetch:{type:Function},meta:{type:Array,default:function(){return[]}},worksheet:{type:String,default:"Sheet1"},beforeGenerate:{type:Function},beforeFinish:{type:Function}},computed:{idName:function(){var t=(new Date).getTime();return"export_"+t},downloadFields:function(){return void 0!==this.fields?this.fields:void 0!==this.exportFields?this.exportFields:void 0}},methods:{generate:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("function"!==typeof this.beforeGenerate){t.next=3;break}return t.next=3,this.beforeGenerate();case 3:if(e=this.data,"function"!==typeof this.fetch&&e){t.next=8;break}return t.next=7,this.fetch();case 7:e=t.sent;case 8:if(e&&e.length){t.next=10;break}return t.abrupt("return");case 10:if(n=this.getProcessedJson(e,this.downloadFields),"html"!==this.type){t.next=15;break}return t.abrupt("return",this.export(this.jsonToXLS(n),this.name.replace(".xls",".html"),"text/html"));case 15:if("csv"!==this.type){t.next=17;break}return t.abrupt("return",this.export(this.jsonToCSV(n),this.name.replace(".xls",".csv"),"application/csv"));case 17:return t.abrupt("return",this.export(this.jsonToXLS(n),this.name,"application/vnd.ms-excel"));case 18:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),export:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n,r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=this.base64ToBlob(e,r),"function"!==typeof this.beforeFinish){t.next=4;break}return t.next=4,this.beforeFinish();case 4:u()(a,n,r);case 5:case"end":return t.stop()}}),t,this)})));function e(e,n,r){return t.apply(this,arguments)}return e}(),jsonToXLS:function(t){var e='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>',n="<thead>",r=Object.keys(t[0]).length,a=this;for(var i in null!=this.title&&(n+=this.parseExtraData(this.title,'<tr><th colspan="'+r+'">${data}</th></tr>')),n+="<tr>",t[0])n+="<th>"+i+"</th>";return n+="</tr>",n+="</thead>",n+="<tbody>",t.map((function(t,e){for(var r in n+="<tr>",t)n+="<td>"+a.valueReformattedForMultilines(t[r])+"</td>";n+="</tr>"})),n+="</tbody>",null!=this.footer&&(n+="<tfoot>",n+=this.parseExtraData(this.footer,'<tr><td colspan="'+r+'">${data}</td></tr>'),n+="</tfoot>"),e.replace("${table}",n).replace("${worksheet}",this.worksheet)},jsonToCSV:function(t){var e=[];for(var n in null!=this.title&&e.push(this.parseExtraData(this.title,"${data}\r\n")),t[0])e.push(n),e.push(",");return e.pop(),e.push("\r\n"),t.map((function(t){for(var n in t){var r='="'+t[n]+'"';r.match(/[,"\n]/)&&(r='"'+r.replace(/\"/g,'""')+'"'),e.push(r),e.push(",")}e.pop(),e.push("\r\n")})),null!=this.footer&&e.push(this.parseExtraData(this.footer,"${data}\r\n")),e.join("")},getProcessedJson:function(t,e){var n=this.getKeys(t,e),r=[],a=this;return t.map((function(t,e){var i={};for(var o in n){var s=n[o];i[o]=a.getValue(s,t)}r.push(i)})),r},getKeys:function(t,e){if(e)return e;var n={};for(var r in t[0])n[r]=r;return n},parseExtraData:function(t,e){var n="";if(Array.isArray(t))for(var r=0;r<t.length;r++)n+=e.replace("${data}",t[r]);else n+=e.replace("${data}",t);return n},getValue:function(t,e){var n="object"!==Object(i["a"])(t)?t:t.field,r="string"!==typeof n?[]:n.split("."),a=this.defaultValue;return a=n?r.length>1?this.getValueFromNestedItem(e,r):this.parseValue(e[n]):e,t.hasOwnProperty("callback")&&(a=this.getValueFromCallback(a,t.callback)),a},valueReformattedForMultilines:function(t){return"string"==typeof t?t.replace(/\n/gi,"<br/>"):t},getValueFromNestedItem:function(t,e){var n=t,r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n&&(n=n[u])}}catch(c){a=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return this.parseValue(n)},getValueFromCallback:function(t,e){if("function"!==typeof e)return this.defaultValue;var n=e(t);return this.parseValue(n)},parseValue:function(t){return t||0===t||"boolean"===typeof t?t:this.defaultValue},base64ToBlob:function(t,e){var n=window.btoa(window.unescape(encodeURIComponent(t))),r=atob(n),a=r.length,i=new Uint8ClampedArray(a);while(a--)i[a]=r.charCodeAt(a);return new Blob([i],{type:e})}}},l=c,f=n("2877"),h=Object(f["a"])(l,r,a,!1,null,null,null);e["a"]=h.exports},"20d6":function(t,e,n){"use strict";var r=n("5ca1"),a=n("0a49")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(i)},"25bb":function(t,e){function n(){var t={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};function e(e,n,r){var a;return r=r||{},a="string"===typeof t[e]?t[e]:1===n?t[e].one:t[e].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"dalam waktu "+a:a+" yang lalu":a}return{localize:e}}t.exports=n},"37c8":function(t,e,n){e.f=n("2b4c")},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"386d":function(t,e,n){"use strict";var r=n("cb7c"),a=n("83a1"),i=n("5f1b");n("214f")("search",1,(function(t,e,n,o){return[function(n){var r=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=o(n,t,this);if(e.done)return e.value;var s=r(t),u=String(this),c=s.lastIndex;a(c,0)||(s.lastIndex=0);var l=i(s,u);return a(s.lastIndex,c)||(s.lastIndex=c),null===l?-1:l.index}]}))},"3a72":function(t,e,n){var r=n("7726"),a=n("8378"),i=n("2d00"),o=n("37c8"),s=n("86cc").f;t.exports=function(t){var e=a.Symbol||(a.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:o.f(t)})}},5634:function(t,e,n){"use strict";var r=n("e051"),a=n.n(r);a.a},"67ab":function(t,e,n){var r=n("ca5a")("meta"),a=n("d3f4"),i=n("69a8"),o=n("86cc").f,s=0,u=Object.isExtensible||function(){return!0},c=!n("79e5")((function(){return u(Object.preventExtensions({}))})),l=function(t){o(t,r,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!u(t))return"F";if(!e)return"E";l(t)}return t[r].i},h=function(t,e){if(!i(t,r)){if(!u(t))return!0;if(!e)return!1;l(t)}return t[r].w},d=function(t){return c&&p.NEED&&u(t)&&!i(t,r)&&l(t),t},p=t.exports={KEY:r,NEED:!1,fastKey:f,getWeak:h,onFreeze:d}},"6aa2":function(t,e,n){n("ec30")("Uint8",1,(function(t){return function(e,n,r){return t(this,e,n,r)}}),!0)},"6b54":function(t,e,n){"use strict";n("3846");var r=n("cb7c"),a=n("0bfb"),i=n("9e1e"),o="toString",s=/./[o],u=function(t){n("2aba")(RegExp.prototype,o,t,!0)};n("79e5")((function(){return"/a/b"!=s.call({source:"a",flags:"b"})}))?u((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?a.call(t):void 0)})):s.name!=o&&u((function(){return s.call(this)}))},7514:function(t,e,n){"use strict";var r=n("5ca1"),a=n("0a49")(5),i="find",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(i)},"7bbc":function(t,e,n){var r=n("6821"),a=n("9093").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return a(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?s(t):a(r(t))}},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8a81":function(t,e,n){"use strict";var r=n("7726"),a=n("69a8"),i=n("9e1e"),o=n("5ca1"),s=n("2aba"),u=n("67ab").KEY,c=n("79e5"),l=n("5537"),f=n("7f20"),h=n("ca5a"),d=n("2b4c"),p=n("37c8"),m=n("3a72"),g=n("d4c0"),b=n("1169"),y=n("cb7c"),v=n("d3f4"),x=n("4bf8"),w=n("6821"),S=n("6a99"),k=n("4630"),E=n("2aeb"),O=n("7bbc"),F=n("11e9"),L=n("2621"),j=n("86cc"),A=n("0d58"),D=F.f,M=j.f,R=O.f,I=r.Symbol,$=r.JSON,C=$&&$.stringify,T="prototype",N=d("_hidden"),P=d("toPrimitive"),_={}.propertyIsEnumerable,J=l("symbol-registry"),V=l("symbols"),U=l("op-symbols"),z=Object[T],W="function"==typeof I&&!!L.f,q=r.QObject,B=!q||!q[T]||!q[T].findChild,K=i&&c((function(){return 7!=E(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=D(z,e);r&&delete z[e],M(t,e,n),r&&t!==z&&M(z,e,r)}:M,X=function(t){var e=V[t]=E(I[T]);return e._k=t,e},G=W&&"symbol"==typeof I.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof I},H=function(t,e,n){return t===z&&H(U,e,n),y(t),e=S(e,!0),y(n),a(V,e)?(n.enumerable?(a(t,N)&&t[N][e]&&(t[N][e]=!1),n=E(n,{enumerable:k(0,!1)})):(a(t,N)||M(t,N,k(1,{})),t[N][e]=!0),K(t,e,n)):M(t,e,n)},Y=function(t,e){y(t);var n,r=g(e=w(e)),a=0,i=r.length;while(i>a)H(t,n=r[a++],e[n]);return t},Q=function(t,e){return void 0===e?E(t):Y(E(t),e)},Z=function(t){var e=_.call(this,t=S(t,!0));return!(this===z&&a(V,t)&&!a(U,t))&&(!(e||!a(this,t)||!a(V,t)||a(this,N)&&this[N][t])||e)},tt=function(t,e){if(t=w(t),e=S(e,!0),t!==z||!a(V,e)||a(U,e)){var n=D(t,e);return!n||!a(V,e)||a(t,N)&&t[N][e]||(n.enumerable=!0),n}},et=function(t){var e,n=R(w(t)),r=[],i=0;while(n.length>i)a(V,e=n[i++])||e==N||e==u||r.push(e);return r},nt=function(t){var e,n=t===z,r=R(n?U:w(t)),i=[],o=0;while(r.length>o)!a(V,e=r[o++])||n&&!a(z,e)||i.push(V[e]);return i};W||(I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===z&&e.call(U,n),a(this,N)&&a(this[N],t)&&(this[N][t]=!1),K(this,t,k(1,n))};return i&&B&&K(z,t,{configurable:!0,set:e}),X(t)},s(I[T],"toString",(function(){return this._k})),F.f=tt,j.f=H,n("9093").f=O.f=et,n("52a7").f=Z,L.f=nt,i&&!n("2d00")&&s(z,"propertyIsEnumerable",Z,!0),p.f=function(t){return X(d(t))}),o(o.G+o.W+o.F*!W,{Symbol:I});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),at=0;rt.length>at;)d(rt[at++]);for(var it=A(d.store),ot=0;it.length>ot;)m(it[ot++]);o(o.S+o.F*!W,"Symbol",{for:function(t){return a(J,t+="")?J[t]:J[t]=I(t)},keyFor:function(t){if(!G(t))throw TypeError(t+" is not a symbol!");for(var e in J)if(J[e]===t)return e},useSetter:function(){B=!0},useSimple:function(){B=!1}}),o(o.S+o.F*!W,"Object",{create:Q,defineProperty:H,defineProperties:Y,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:nt});var st=c((function(){L.f(1)}));o(o.S+o.F*st,"Object",{getOwnPropertySymbols:function(t){return L.f(x(t))}}),$&&o(o.S+o.F*(!W||c((function(){var t=I();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))}))),"JSON",{stringify:function(t){var e,n,r=[t],a=1;while(arguments.length>a)r.push(arguments[a++]);if(n=e=r[1],(v(e)||void 0!==t)&&!G(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!G(e))return e}),r[1]=e,C.apply($,r)}}),I[T][P]||n("32e9")(I[T],P,I[T].valueOf),f(I,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},ac4d:function(t,e,n){n("3a72")("asyncIterator")},aeb1:function(t,e,n){var r,a,i;(function(n,o){a=[],r=o,i="function"===typeof r?r.apply(e,a):r,void 0===i||(t.exports=i)})(0,(function(){return function t(e,n,r){var a,i,o=window,s="application/octet-stream",u=r||s,c=e,l=!n&&!r&&c,f=document.createElement("a"),h=function(t){return String(t)},d=o.Blob||o.MozBlob||o.WebKitBlob||h,p=n||"download";if(d=d.call?d.bind(o):Blob,"true"===String(this)&&(c=[c,u],u=c[0],c=c[1]),l&&l.length<2048&&(p=l.split("/").pop().split("?")[0],f.href=l,-1!==f.href.indexOf(l))){var m=new XMLHttpRequest;return m.open("GET",l,!0),m.responseType="blob",m.onload=function(e){t(e.target.response,p,s)},setTimeout((function(){m.send()}),0),m}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(c)){if(!(c.length>2096103.424&&d!==h))return navigator.msSaveBlob?navigator.msSaveBlob(v(c),p):x(c);c=v(c),u=c.type||s}else if(/([\x80-\xff])/.test(c)){var g=0,b=new Uint8Array(c.length),y=b.length;for(g;g<y;++g)b[g]=c.charCodeAt(g);c=new d([b],{type:u})}function v(t){var e=t.split(/[:;,]/),n=e[1],r="base64"==e[2]?atob:decodeURIComponent,a=r(e.pop()),i=a.length,o=0,s=new Uint8Array(i);for(o;o<i;++o)s[o]=a.charCodeAt(o);return new d([s],{type:n})}function x(t,e){if("download"in f)return f.href=t,f.setAttribute("download",p),f.className="download-js-link",f.innerHTML="downloading...",f.style.display="none",document.body.appendChild(f),setTimeout((function(){f.click(),document.body.removeChild(f),!0===e&&setTimeout((function(){o.URL.revokeObjectURL(f.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,s)),window.open(t)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=t),!0;var n=document.createElement("iframe");document.body.appendChild(n),!e&&/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,s)),n.src=t,setTimeout((function(){document.body.removeChild(n)}),333)}if(a=c instanceof d?c:new d([c],{type:u}),navigator.msSaveBlob)return navigator.msSaveBlob(a,p);if(o.URL)x(o.URL.createObjectURL(a),!0);else{if("string"===typeof a||a.constructor===h)try{return x("data:"+u+";base64,"+o.btoa(a))}catch(w){return x("data:"+u+","+encodeURIComponent(a))}i=new FileReader,i.onload=function(t){x(this.result)},i.readAsDataURL(a)}return!0}}))},d17f:function(t,e,n){t.exports=n.p+"img/image.9604208c.svg"},d309:function(t,e,n){var r=n("90e5");function a(){var t=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],e=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],n=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],a=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],o=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],s=["AM","PM"],u=["am","pm"],c=["a.m.","p.m."],l={MMM:function(e){return t[e.getMonth()]},MMMM:function(t){return e[t.getMonth()]},dd:function(t){return n[t.getDay()]},ddd:function(t){return a[t.getDay()]},dddd:function(t){return o[t.getDay()]},A:function(t){return t.getHours()/12>=1?s[1]:s[0]},a:function(t){return t.getHours()/12>=1?u[1]:u[0]},aa:function(t){return t.getHours()/12>=1?c[1]:c[0]}},f=["M","D","DDD","d","Q","W"];return f.forEach((function(t){l[t+"o"]=function(e,n){return i(n[t](e))}})),{formatters:l,formattingTokensRegExp:r(l)}}function i(t){switch(t){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+t}}t.exports=a},d4c0:function(t,e,n){var r=n("0d58"),a=n("2621"),i=n("52a7");t.exports=function(t){var e=r(t),n=a.f;if(n){var o,s=n(t),u=i.f,c=0;while(s.length>c)u.call(t,o=s[c++])&&e.push(o)}return e}},e051:function(t,e,n){},eeb9:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"uploadContainer hoverable text-center flex flex-wrap flex-row"},[r("div",{staticClass:"text-center",staticStyle:{cursor:"pointer"},on:{click:t.upload}},t._l(t.imgList,(function(e,n){return r("img",{directives:[{name:"show",rawName:"v-show",value:t.imgList.length>0,expression:"imgList.length>0"}],key:n,staticClass:"imgInput myImage imgSize",staticStyle:{"z-index":"100","margin-left":"10%"},attrs:{src:e,id:"imgKu"+n},on:{click:function(e){return t.zoomIn(e)}}})})),0),r("div",{staticClass:"text-center cursor-pointer",staticStyle:{position:"static"}},[t.imgList.length<1?r("label",{staticClass:"cursor-pointer",staticStyle:{"font-size":"12px",color:"black",position:"absolute","margin-left":"5px","margin-top":"0px"},attrs:{for:"file2"}},[r("img",{attrs:{src:n("d17f")}})]):t._e(),r("input",{ref:"uploader",staticClass:"cursor-pointer",class:{"d-none":t.imgList.length>0},attrs:{id:"file2",type:"file"},on:{input:function(e){return e.preventDefault(),t.ambil(e)}}})]),r("section",{staticStyle:{"margin-left":"20px"}},[r("button",{staticClass:"btn btn-sm btn-outline-success waves-effect d-none",attrs:{type:"button"},on:{click:t.upload}},[t._v("Browse")]),r("button",{directives:[{name:"show",rawName:"v-show",value:t.imgList.length>0,expression:"imgList.length>0"}],staticClass:"btn btn-sm btn-outline-danger waves-effect",attrs:{type:"button",id:"rest"},on:{click:t.reset}},[t._v("Reset")])])])])},a=[],i=(n("ac6a"),n("20d6"),n("bc3a")),o=n.n(i),s={data:function(){return{imgList:[],count:0,imgFiles:[],imgs:[]}},watch:{imgList:function(){var t=this;setTimeout((function(){0==t.imgList.length&&t.$emit("resetInput",!0)}),300)}},methods:{zoomIn:function(t){console.log(t.target.classList.toggle("zoomIn"))},hilang:function(t,e){var n=this,r=t.target.src,a=this.imgList.findIndex((function(t){return t==r}));delete this.imgList[a];var i=0;this.$el.querySelector("#imgKu"+e).classList.add("hilang"),this.$el.querySelectorAll(".myImage").forEach((function(t){t.classList.contains("hilang")&&i++})),i>0&&this.count++,this.count==this.$el.querySelectorAll(".myImage").length&&setTimeout((function(){n.$el.querySelector("#rest").click()}),300)},reset:function(){this.$el.querySelector("#file2").style.display="initial",this.$el.querySelectorAll(".myImage").forEach((function(t){t.style.display="none"})),this.imgList=[],this.count=0},upload:function(t){var e=1;this.imgList.length>0?(this.$el.querySelectorAll(".myImage").forEach((function(n){t.target!=n?e+=1:e*=-100})),e>0&&this.$refs.uploader.click()):this.$refs.uploader.click()},ambil:function(t){var e,n,r=this,a=this;(this.$nuxt.$emit("busy",!0),t.target.files[0].size>1e7)?alert("File yang di upload tidak sesuai kriteria"):t.target.files.length>0&&function(){for(var i,s=[],u=[],c=0;c<t.target.files.length;c++){r.imgs.push(t.target.files[c]),e=t.target.files[c],n=new FileReader,n.onload=function(t){s.push(t.target.result)},n.readAsDataURL(e),i=t.target.files[c],i.size<1e6?30:i.size<2e6?25:i.size<3e6?20:i.size<4e6?15:10;var l=new FormData;l.append("file",i),o.a.post("https://infolayanans.now.sh/api/data/upload",l,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(t){console.log("output",t.data.data),r.$emit("link",t.data.data),setTimeout((function(){u.push("".concat(a.$store.state.url).concat(t.data.data))}),2e3)})).catch((function(t){console.log(t)}))}r.imgList=s,console.log(t.target),setTimeout((function(){r.$emit("upload",u),r.$nuxt.$emit("busy",!1)}),1e3)}()}}},u=s,c=(n("5634"),n("2877")),l=Object(c["a"])(u,r,a,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=page-LD-admin-file_upload~page-LD-admin-permintaan~page-LD-admin-user~page-LD-input~page-LD-list-dat~9c7b371f.1b0c4250.js.map