(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-LD-changepassword"],{"00d8":function(t,r){(function(){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a={rotl:function(t,r){return t<<r|t>>>32-r},rotr:function(t,r){return t<<32-r|t>>>r},endian:function(t){if(t.constructor==Number)return 16711935&a.rotl(t,8)|4278255360&a.rotl(t,24);for(var r=0;r<t.length;r++)t[r]=a.endian(t[r]);return t},randomBytes:function(t){for(var r=[];t>0;t--)r.push(Math.floor(256*Math.random()));return r},bytesToWords:function(t){for(var r=[],a=0,o=0;a<t.length;a++,o+=8)r[o>>>5]|=t[a]<<24-o%32;return r},wordsToBytes:function(t){for(var r=[],a=0;a<32*t.length;a+=8)r.push(t[a>>>5]>>>24-a%32&255);return r},bytesToHex:function(t){for(var r=[],a=0;a<t.length;a++)r.push((t[a]>>>4).toString(16)),r.push((15&t[a]).toString(16));return r.join("")},hexToBytes:function(t){for(var r=[],a=0;a<t.length;a+=2)r.push(parseInt(t.substr(a,2),16));return r},bytesToBase64:function(t){for(var a=[],o=0;o<t.length;o+=3)for(var n=t[o]<<16|t[o+1]<<8|t[o+2],e=0;e<4;e++)8*o+6*e<=8*t.length?a.push(r.charAt(n>>>6*(3-e)&63)):a.push("=");return a.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var a=[],o=0,n=0;o<t.length;n=++o%4)0!=n&&a.push((r.indexOf(t.charAt(o-1))&Math.pow(2,-2*n+8)-1)<<2*n|r.indexOf(t.charAt(o))>>>6-2*n);return a}};t.exports=a})()},"044b":function(t,r){function a(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function o(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&a(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(a(t)||o(t)||!!t._isBuffer)}},"6821f":function(t,r,a){(function(){var r=a("00d8"),o=a("9a63").utf8,n=a("044b"),e=a("9a63").bin,s=function(t,a){t.constructor==String?t=a&&"binary"===a.encoding?e.stringToBytes(t):o.stringToBytes(t):n(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var i=r.bytesToWords(t),u=8*t.length,c=1732584193,l=-271733879,d=-1732584194,p=271733878,f=0;f<i.length;f++)i[f]=16711935&(i[f]<<8|i[f]>>>24)|4278255360&(i[f]<<24|i[f]>>>8);i[u>>>5]|=128<<u%32,i[14+(u+64>>>9<<4)]=u;var v=s._ff,h=s._gg,m=s._hh,g=s._ii;for(f=0;f<i.length;f+=16){var w=c,b=l,y=d,_=p;c=v(c,l,d,p,i[f+0],7,-680876936),p=v(p,c,l,d,i[f+1],12,-389564586),d=v(d,p,c,l,i[f+2],17,606105819),l=v(l,d,p,c,i[f+3],22,-1044525330),c=v(c,l,d,p,i[f+4],7,-176418897),p=v(p,c,l,d,i[f+5],12,1200080426),d=v(d,p,c,l,i[f+6],17,-1473231341),l=v(l,d,p,c,i[f+7],22,-45705983),c=v(c,l,d,p,i[f+8],7,1770035416),p=v(p,c,l,d,i[f+9],12,-1958414417),d=v(d,p,c,l,i[f+10],17,-42063),l=v(l,d,p,c,i[f+11],22,-1990404162),c=v(c,l,d,p,i[f+12],7,1804603682),p=v(p,c,l,d,i[f+13],12,-40341101),d=v(d,p,c,l,i[f+14],17,-1502002290),l=v(l,d,p,c,i[f+15],22,1236535329),c=h(c,l,d,p,i[f+1],5,-165796510),p=h(p,c,l,d,i[f+6],9,-1069501632),d=h(d,p,c,l,i[f+11],14,643717713),l=h(l,d,p,c,i[f+0],20,-373897302),c=h(c,l,d,p,i[f+5],5,-701558691),p=h(p,c,l,d,i[f+10],9,38016083),d=h(d,p,c,l,i[f+15],14,-660478335),l=h(l,d,p,c,i[f+4],20,-405537848),c=h(c,l,d,p,i[f+9],5,568446438),p=h(p,c,l,d,i[f+14],9,-1019803690),d=h(d,p,c,l,i[f+3],14,-187363961),l=h(l,d,p,c,i[f+8],20,1163531501),c=h(c,l,d,p,i[f+13],5,-1444681467),p=h(p,c,l,d,i[f+2],9,-51403784),d=h(d,p,c,l,i[f+7],14,1735328473),l=h(l,d,p,c,i[f+12],20,-1926607734),c=m(c,l,d,p,i[f+5],4,-378558),p=m(p,c,l,d,i[f+8],11,-2022574463),d=m(d,p,c,l,i[f+11],16,1839030562),l=m(l,d,p,c,i[f+14],23,-35309556),c=m(c,l,d,p,i[f+1],4,-1530992060),p=m(p,c,l,d,i[f+4],11,1272893353),d=m(d,p,c,l,i[f+7],16,-155497632),l=m(l,d,p,c,i[f+10],23,-1094730640),c=m(c,l,d,p,i[f+13],4,681279174),p=m(p,c,l,d,i[f+0],11,-358537222),d=m(d,p,c,l,i[f+3],16,-722521979),l=m(l,d,p,c,i[f+6],23,76029189),c=m(c,l,d,p,i[f+9],4,-640364487),p=m(p,c,l,d,i[f+12],11,-421815835),d=m(d,p,c,l,i[f+15],16,530742520),l=m(l,d,p,c,i[f+2],23,-995338651),c=g(c,l,d,p,i[f+0],6,-198630844),p=g(p,c,l,d,i[f+7],10,1126891415),d=g(d,p,c,l,i[f+14],15,-1416354905),l=g(l,d,p,c,i[f+5],21,-57434055),c=g(c,l,d,p,i[f+12],6,1700485571),p=g(p,c,l,d,i[f+3],10,-1894986606),d=g(d,p,c,l,i[f+10],15,-1051523),l=g(l,d,p,c,i[f+1],21,-2054922799),c=g(c,l,d,p,i[f+8],6,1873313359),p=g(p,c,l,d,i[f+15],10,-30611744),d=g(d,p,c,l,i[f+6],15,-1560198380),l=g(l,d,p,c,i[f+13],21,1309151649),c=g(c,l,d,p,i[f+4],6,-145523070),p=g(p,c,l,d,i[f+11],10,-1120210379),d=g(d,p,c,l,i[f+2],15,718787259),l=g(l,d,p,c,i[f+9],21,-343485551),c=c+w>>>0,l=l+b>>>0,d=d+y>>>0,p=p+_>>>0}return r.endian([c,l,d,p])};s._ff=function(t,r,a,o,n,e,s){var i=t+(r&a|~r&o)+(n>>>0)+s;return(i<<e|i>>>32-e)+r},s._gg=function(t,r,a,o,n,e,s){var i=t+(r&o|a&~o)+(n>>>0)+s;return(i<<e|i>>>32-e)+r},s._hh=function(t,r,a,o,n,e,s){var i=t+(r^a^o)+(n>>>0)+s;return(i<<e|i>>>32-e)+r},s._ii=function(t,r,a,o,n,e,s){var i=t+(a^(r|~o))+(n>>>0)+s;return(i<<e|i>>>32-e)+r},s._blocksize=16,s._digestsize=16,t.exports=function(t,a){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var o=r.wordsToBytes(s(t,a));return a&&a.asBytes?o:a&&a.asString?e.bytesToString(o):r.bytesToHex(o)}})()},"9a63":function(t,r){var a={utf8:{stringToBytes:function(t){return a.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(a.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var r=[],a=0;a<t.length;a++)r.push(255&t.charCodeAt(a));return r},bytesToString:function(t){for(var r=[],a=0;a<t.length;a++)r.push(String.fromCharCode(t[a]));return r.join("")}}};t.exports=a},e2cb:function(t,r,a){"use strict";a.r(r);var o=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",[a("p",{staticClass:"text-center"},[t._v("CHANGE PASSWORD")]),a("hr",{staticClass:"style13"}),a("div",{staticClass:"row"},[a("div",{staticClass:"offset-2 col-6"},[a("form",{attrs:{action:""},on:{submit:function(r){return r.preventDefault(),t.ganti(r)}}},[a("div",{staticClass:"sm-form "},[a("label",{attrs:{for:"username"}},[t._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.username,expression:"vdata.username"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"username",name:"username",placeholder:"username"},domProps:{value:t.vdata.username},on:{input:function(r){r.target.composing||t.$set(t.vdata,"username",r.target.value)}}})]),a("div",{staticClass:"sm-form "},[a("label",{attrs:{for:"password"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.password,expression:"vdata.password"}],staticClass:"form-control form-control-sm",attrs:{type:"password",id:"password",name:"password",placeholder:"password"},domProps:{value:t.vdata.password},on:{input:function(r){r.target.composing||t.$set(t.vdata,"password",r.target.value)}}})]),a("div",{staticClass:"sm-form "},[a("label",{attrs:{for:"password"}},[t._v("cek password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.password2,expression:"vdata.password2"}],staticClass:"form-control form-control-sm",attrs:{type:"password",id:"password",name:"password",placeholder:"password"},domProps:{value:t.vdata.password2},on:{input:function(r){r.target.composing||t.$set(t.vdata,"password2",r.target.value)}}})]),a("p",{directives:[{name:"show",rawName:"v-show",value:this.vdata.password!=this.vdata.password2,expression:"this.vdata.password!=this.vdata.password2"}],staticClass:"text-red"},[t._v("PASSWORD TIDAK SAMA!")]),a("hr",{staticClass:"style16"}),a("button",{staticClass:"btn btn-sm btn-dark  ",attrs:{type:"submit"}},[t._v("Ganti Password")])])])])])},n=[],e=a("bc3a"),s=a.n(e),i=a("6821f"),u=a.n(i),c={layout:"loan",data:function(){return{vdata:{}}},methods:{ganti:function(){var t=this,r=new FormData;r.append("data","update user set username='".concat(this.vdata.username,"',password='").concat(u()(this.vdata.password),"' where id='").concat(this.$store.state.users.id,"'")),r.append("database","loandocument"),s.a.post("http://localhost:8080/api/mysql/auto.php",r,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(r){console.log(r),alert("ganti Password berhasil silahkan login ulang!"),t.$store.dispatch("logout")}))}},mounted:function(){var t=new FormData;t.append("data","select * from user"),t.append("database","loandocument"),s.a.post("http://localhost:8080/api/mysql/auto.php",t,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(t){console.log(t)}))}},l=c,d=a("2877"),p=Object(d["a"])(l,o,n,!1,null,null,null);r["default"]=p.exports}}]);
//# sourceMappingURL=page-LD-changepassword.a94a7421.js.map