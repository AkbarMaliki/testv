(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-datefns"],{"03a0":function(t,n,e){var a=e("25bb"),r=e("d309");t.exports={distanceInWords:a(),format:r()}},"25bb":function(t,n){function e(){var t={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};function n(n,e,a){var r;return a=a||{},r="string"===typeof t[n]?t[n]:1===e?t[n].one:t[n].other.replace("{{count}}",e),a.addSuffix?a.comparison>0?"dalam waktu "+r:r+" yang lalu":r}return{localize:n}}t.exports=e},"6e53":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v(" "+t._s(t.tanggal)+" "),e("br"),t._v(" distance : "+t._s(t.distance)+" "),e("br"),t._v(" format : "+t._s(t.format)+" "),e("br"),t._v(" format distanceToNow : "+t._s(t.distanceToNow)+" "),e("hr",{staticClass:"style13"}),e("a",{attrs:{target:"_blank",href:"https://date-fns.org/v1.30.1/docs/addMonths"}},[t._v("https://date-fns.org/v1.30.1/docs/addMonths")])])},r=[],o=e("03a0"),u={computed:{distance:function(){return this.$datefns.distanceInWords(new Date("2018-12-25T03:21:12.941Z"),new Date,{locale:o,includeSeconds:!0})},format:function(){return this.$datefns.format(new Date(2014,6,2),"[di tanggal] dddd MMMM YYYY",{locale:o})},distanceToNow:function(){return this.$datefns.distanceInWordsToNow(new Date(2015,0,1,0,0,15),{locale:o,includeSeconds:!0})}}},i=u,s=e("2877"),c=Object(s["a"])(i,a,r,!1,null,null,null);n["default"]=c.exports},d309:function(t,n,e){var a=e("90e5");function r(){var t=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],n=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],e=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],r=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],u=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],i=["AM","PM"],s=["am","pm"],c=["a.m.","p.m."],d={MMM:function(n){return t[n.getMonth()]},MMMM:function(t){return n[t.getMonth()]},dd:function(t){return e[t.getDay()]},ddd:function(t){return r[t.getDay()]},dddd:function(t){return u[t.getDay()]},A:function(t){return t.getHours()/12>=1?i[1]:i[0]},a:function(t){return t.getHours()/12>=1?s[1]:s[0]},aa:function(t){return t.getHours()/12>=1?c[1]:c[0]}},h=["M","D","DDD","d","Q","W"];return h.forEach((function(t){d[t+"o"]=function(n,e){return o(e[t](n))}})),{formatters:d,formattingTokensRegExp:a(d)}}function o(t){switch(t){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+t}}t.exports=r}}]);
//# sourceMappingURL=page-testing-datefns.76659c91.js.map