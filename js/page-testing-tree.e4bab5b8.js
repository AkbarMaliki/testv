(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-tree"],{"3fb7":function(A,e,t){!function(e,t){A.exports=t()}(0,(function(){return function(A){function e(i){if(t[i])return t[i].exports;var n=t[i]={exports:{},id:i,loaded:!1};return A[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var t={};return e.m=A,e.c=t,e.p="",e(0)}([function(A,e,t){"use strict";e.VueTreeList=t(1),e.TreeNode=t(13).TreeNode,e.Tree=t(13).Tree},function(A,e,t){t(2);var i=t(11)(t(12),t(15),null,null);A.exports=i.exports},function(A,e,t){var i=t(3);"string"==typeof i&&(i=[[A.id,i,""]]),i.locals&&(A.exports=i.locals),t(9)("a44a901e",i,!0)},function(A,e,t){e=A.exports=t(4)(),e.push([A.id,"@font-face{font-family:icomoon;src:url("+t(5)+");src:url("+t(5)+'#iefix) format("embedded-opentype"),url('+t(6)+') format("truetype"),url('+t(7)+') format("woff"),url('+t(8)+'#icomoon) format("svg");font-weight:400;font-style:normal}.vtl-icon{font-family:icomoon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.vtl-icon.vtl-menu-icon{margin-right:4px}.vtl-icon.vtl-menu-icon:hover{color:inherit}.vtl-icon:hover{color:blue}.vtl-icon-file:before{content:"\\E906"}.vtl-icon-folder:before{content:"\\E907"}.vtl-icon-caret-down:before{content:"\\E901"}.vtl-icon-caret-right:before{content:"\\E900"}.vtl-icon-edit:before{content:"\\E902"}.vtl-icon-folder-plus-e:before{content:"\\E903"}.vtl-icon-plus:before{content:"\\E904"}.vtl-icon-trash:before{content:"\\E905"}.vtl-border{height:5px}.vtl-border.vtl-up{margin-top:-5px}.vtl-border.vtl-bottom,.vtl-border.vtl-up{background-color:transparent}.vtl-border.vtl-active{border-bottom:3px dashed blue}.vtl-tree-node{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:5px 0 5px 1rem}.vtl-tree-node .vtl-input{border:none;max-width:150px;border-bottom:1px solid blue}.vtl-tree-node:hover{background-color:#f0f0f0}.vtl-tree-node.vtl-active{outline:2px dashed pink}.vtl-tree-node .vtl-caret{margin-left:-1rem}.vtl-tree-node .vtl-operation{margin-left:2rem;letter-spacing:1px}.vtl-item{cursor:pointer}.vtl-tree-margin{margin-left:2em}',""])},function(A,e){A.exports=function(){var A=[];return A.toString=function(){for(var A=[],e=0;e<this.length;e++){var t=this[e];t[2]?A.push("@media "+t[2]+"{"+t[1]+"}"):A.push(t[1])}return A.join("")},A.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(i[o]=!0)}for(n=0;n<e.length;n++){var M=e[n];"number"==typeof M[0]&&i[M[0]]||(t&&!M[2]?M[2]=t:t&&(M[2]="("+M[2]+") and ("+t+")"),A.push(M))}},A}},function(A,e){A.exports="data:application/vnd.ms-fontobject;base64,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"},function(A,e){A.exports="data:application/x-font-ttf;base64,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"},function(A,e){A.exports="data:application/font-woff;base64,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"},function(A,e){A.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+R2VuZXJhdGVkIGJ5IEljb01vb248L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9Imljb21vb24iIGhvcml6LWFkdi14PSIxMDI0Ij4KPGZvbnQtZmFjZSB1bml0cy1wZXItZW09IjEwMjQiIGFzY2VudD0iOTYwIiBkZXNjZW50PSItNjQiIC8+CjxtaXNzaW5nLWdseXBoIGhvcml6LWFkdi14PSIxMDI0IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4MjA7IiBob3Jpei1hZHYteD0iNTEyIiBkPSIiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTAwOyIgZ2x5cGgtbmFtZT0iY2FyZXQtZG93biIgZD0iTTYzNS4zMTEgNDQ4cTAtMTQuODQ4LTEwLjg0OC0yNS43MjhsLTI1Ni0yNTZxLTEwLjg0OC0xMC44NDgtMjUuNzI4LTEwLjg0OHQtMjUuNzI4IDEwLjg0OC0xMC44NDggMjUuNzI4djUxMnEwIDE0Ljg0OCAxMC44NDggMjUuNzI4dDI1LjcyOCAxMC44NDggMjUuNzI4LTEwLjg0OGwyNTYtMjU2cTEwLjg0OC0xMC44NDggMTAuODQ4LTI1LjcyOHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTAxOyIgZ2x5cGgtbmFtZT0iY2FyZXQtcmlnaHQiIGQ9Ik01MTIgMzAxLjcxNHEtMTQuODQ4IDAtMjUuNzQ2IDEwLjgyNWwtMjU2IDI1NnEtMTAuODI1IDEwLjgyNS0xMC44MjUgMjUuNzQ2dDEwLjgyNSAyNS43NDYgMjUuNzQ2IDEwLjgyNWg1MTJxMTQuODQ4IDAgMjUuNzQ2LTEwLjgyNXQxMC44MjUtMjUuNzQ2LTEwLjgyNS0yNS43NDZsLTI1Ni0yNTZxLTEwLjgyNS0xMC44MjUtMjUuNzQ2LTEwLjgyNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTAyOyIgZ2x5cGgtbmFtZT0iZWRpdCIgZD0iTTgxNi4wMDEgNTk0LjI1NmMtMTEuMTUxIDAtMjAuMjAzLTkuMDUzLTIwLjIwMy0yMC4yMDF2LTM2My42NjVjMC0yMi4zMS0xOC4wODktNDAuNDAyLTQwLjQwMS00MC40MDJoLTUwNS4wODNjLTIyLjMxOCAwLTQwLjQwNSAxOC4wOTMtNDAuNDA1IDQwLjQwMnY1MDUuMDg2YzAgMjIuMzE3IDE4LjA5NCA0MC40MDEgNDAuNDA1IDQwLjQwMWgzNDMuNDZjMTEuMTY4IDAgMjAuMiA5LjAzOCAyMC4yIDIwLjIwNCAwIDExLjE2MS05LjAzNiAyMC4yMDEtMjAuMiAyMC4yMDFoLTM2My42NzVjLTMzLjQ4MyAwLTYwLjYxMi0yNy4xMzYtNjAuNjEyLTYwLjYxdi01NDUuNDk0YzAtMzMuNDgxIDI3LjEzLTYwLjYxMiA2MC42MTItNjAuNjEyaDU0NS40OTRjMzMuNDgyIDAgNjAuNjEzIDI3LjEzMyA2MC42MTMgNjAuNjEydjM4My44NzdjLTAuMDA0IDExLjE0OC05LjA0MCAyMC4yMDEtMjAuMjA1IDIwLjIwMXpNNDE3LjE1OCAzOTcuMTk0YzcuODkzLTcuODY4IDIwLjY3NC03Ljg2OCAyOC41NzIgMGwzNjMuMDY4IDM2NS4wNDljNy44ODkgNy44OTQgNy44ODkgMjAuNjg5IDAgMjguNTcyLTcuODkgNy44OTMtMjAuNjc4IDcuODkzLTI4LjU2MyAwbC0zNjMuMDc3LTM2NS4wMzVjLTcuODk3LTcuODkxLTcuODk3LTIwLjY5MiAwLTI4LjU4NnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTAzOyIgZ2x5cGgtbmFtZT0iZm9sZGVyLXBsdXMtZSIgZD0iTTk0Ni40NzEgODg0LjE2OWgtNTQ4LjQyNmwtNDIuODU2IDUxLjkxOGMtMTcuNDk4IDIxLjM5NC0zOS41MjUgMjUuMS00Ni42NzYgMjMuNjI5aC0yMzAuOTIyYy00Mi43ODggMC03Ny41OTEtMzQuODAzLTc3LjU5MS03Ny41MjV2LTY4OC4yODRsNi4zMjctMzkuNzg0aDE5Ljg1N2MxMC40NjctNy42MDMgMjMuMTIxLTExLjc1MSAzNi40NjktMTEuNzUxaDUwOS4zN3Y2NS4zOTJoLTQ5NC40MzNsLTEyLjE5NC0xLjAyMHY2NzUuNDQ4YzAgNi43MDQgNS40ODYgMTIuMTMzIDEyLjE5NCAxMi4xMzNsMjI3LjAyNSAwLjI1NiA0My41NTEtNTIuMTA4YzYuOTYtMTEuNDMgMjIuNzk5LTIzLjY5MyA0Ni40MjQtMjMuNjkzaDU1MS44OGM2LjcwOSAwIDEyLjEzMy01LjQ5IDEyLjEzMy0xMi4xOTh2LTIwMi4xOWg2NS4zOTd2MjAyLjE4OWMwIDQyLjc4Ny0zNC44MDMgNzcuNTg5LTc3LjUyOSA3Ny41ODl6TTk4OC40NTEgMzkxLjIxNWgtMTQyLjE5N3YxNDIuMTk3YzAgMTkuNjUtMTUuOSAzNS41NDktMzUuNTQ5IDM1LjU0OXMtMzUuNTQ5LTE1LjktMzUuNTQ5LTM1LjU0OXYtMTQyLjE5N2gtMTQyLjE5N2MtMTkuNjUgMC0zNS41NDktMTUuOS0zNS41NDktMzUuNTQ5czE1LjktMzUuNTQ5IDM1LjU0OS0zNS41NDloMTQyLjE5N3YtMTQyLjE5N2MwLTE5LjY1IDE1LjktMzUuNTQ5IDM1LjU0OS0zNS41NDlzMzUuNTQ5IDE1LjkgMzUuNTQ5IDM1LjU0OXYxNDIuMTk3aDE0Mi4xOTdjMTkuNjUgMCAzNS41NDkgMTUuOSAzNS41NDkgMzUuNTQ5cy0xNS45IDM1LjU0OS0zNS41NDkgMzUuNTQ5eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDQ7IiBnbHlwaC1uYW1lPSJwbHVzIiBkPSJNODYzLjMyOCA0NzguNjZsLTMxNy4zNDQtMC4xdjMxOC42MjJjMCAxNy42NjUtMTQuMzM2IDMyLjAwMS0zMiAzMi4wMDFzLTMyLTE0LjMzNi0zMi0zMnYtMzE4LjQwMWwtMzIyLjQ2NSAwLjE3N2MtMTcuNjMyIDAtMzEuOTM1LTE0LjI0LTMyLTMxLjkwNC0wLjA5Ny0xNy42NjUgMTQuMjA4LTMyLjAzMiAzMS44NzEtMzIuMDk2bDMyMi41OTMtMC4xNzd2LTMxOS4xNjdjMC0xNy42OTYgMTQuMzM2LTMyLjAwMSAzMS45OTktMzIuMDAxczMyIDE0LjMwMyAzMiAzMnYzMTguOTQ2bDMxNy4yMTYgMC4xYzE3LjYzMiAwIDMxLjkzNSAxNC4yNCAzMiAzMS45MDVzLTE0LjIzOCAzMi4wMzEtMzEuODcgMzIuMDk1eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDU7IiBnbHlwaC1uYW1lPSJ0cmFzaCIgZD0iTTYwNy45MDQgMTkxLjk1MmMtMTcuNzEyIDAtMzIgMTQuMjg4LTMyIDMydjM1Mi4xMTJjMCAxNy43MTIgMTQuMjg4IDMyIDMyIDMyczMxLjk4NC0xNC4yODggMzEuOTg0LTMydi0zNTEuOTM2YzAtMC4wMzMgMC0wLjA3MyAwLTAuMTEyIDAtMTcuNjgtMTQuMzEtMzIuMDE5LTMxLjk4LTMyLjA2NGgtMC4wMDR6TTQxNS45MzYgMTkxLjk1MmMtMTcuNzEyIDAtMzIgMTQuMjg4LTMyIDMydjM1Mi4xMTJjMCAxNy43MTIgMTQuMjcyIDMyIDMyIDMyczMyLTE0LjI4OCAzMi0zMnYtMzUxLjkzNmMwLTAuMDI0IDAtMC4wNTIgMC0wLjA4MCAwLTE3LjY5Mi0xNC4zMTUtMzIuMDQxLTMxLjk5NS0zMi4wOTZoLTAuMDA1ek05MjguMDE2IDczNi4wMzJoLTE1OS45Njh2NjMuOTg0YzAgNTIuOTkyLTQyLjY3MiA5NS45ODQtOTUuMjk2IDk1Ljk4NGgtMzIwLjgxNmMtNTIuOTk5LTAuMDI3LTk1Ljk1Ny00Mi45ODQtOTUuOTg0LTk1Ljk4MXYtNjMuOTg3aC0xNTkuOTY4Yy0xNy43MTIgMC0zMi0xNC4yODgtMzItMzJzMTQuMjcyLTMyIDMyLTMyaDgzMi4wMzJjMC4wMTQgMCAwLjAzMSAwIDAuMDQ4IDAgMTcuNjM4IDAgMzEuOTM2IDE0LjI5OCAzMS45MzYgMzEuOTM2IDAgMC4wMjMgMCAwLjA0NSAwIDAuMDY4di0wLjAwNGMwIDE3LjcyOC0xNC4yNzIgMzItMzEuOTg0IDMyek0zMTkuOTUyIDgwMC4wMTZjMCAxNy41NTIgMTQuNDQ4IDMyIDMyIDMyaDMyMC44MTZjMTcuNTM2IDAgMzEuMzEyLTE0LjExMiAzMS4zMTItMzJ2LTYzLjk4NGgtMzg0LjEyOHY2My45ODR6TTczNi4wNDggMGgtNDQ3LjkyYy01My4wMDEgMC4wMDktOTUuOTY2IDQyLjk2OC05NS45ODQgOTUuOTY2djQ4MC40MzRjMCAxNy43MTIgMTQuMjcyIDMyIDMyIDMyczMyLTE0LjI4OCAzMi0zMnYtNDgwLjQzMmMwLTE3LjcxMiAxNC40NDgtMzIgMzItMzJoNDQ4LjA5NmMxNy43MTIgMCAzMiAxNC4yODggMzIgMzJ2NDc5LjIzMmMwIDE3LjcxMiAxNC4yODggMzIgMzIgMzJzMzEuOTg0LTE0LjI4OCAzMS45ODQtMzJ2LTQ3OS4yMzJjLTAuMTkyLTUyLjgxNi00My4yLTk1Ljk2OC05Ni4xNzYtOTUuOTY4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDY7IiBnbHlwaC1uYW1lPSJmaWxlIiBkPSJNNjIwLjc5MiA4MzIuMjE4aC00MzAuMDc2di03NjcuNzUzaDY0MC41MjF2NTU2LjkzM2wtMjEwLjQ0NSAyMTAuODE5ek02MzkuNTM4IDcyMi43NjVsODIuNDQxLTgyLjU4OGgtODIuNDQxdjgyLjU4OHpNMjU0Ljc3NSAxMjguNTI0djYzOS42MzVoMzIwLjcwNHYtMTkyLjA0MWgxOTEuNjk5di00NDcuNTk1aC01MTIuNDAzeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDc7IiBnbHlwaC1uYW1lPSJmb2xkZXIiIGQ9Ik05MDMuODEzIDY4Ny4yMDZoLTQwNy45MThsLTE0MS4zNDIgMTE4LjA5NWMtNy45NDYgMTAuNTEtMjAuNDc2IDE2Ljc3NC0zMy41MjEgMTYuNzc0aC0yMDcuNTA0Yy0yMy4yNzEgMC00Mi4yMjMtMTkuMTU4LTQyLjIyMy00Mi43MTR2LTY2Ni41OTljMC0yMy4yOTkgMTguOTUtNDIuMjUxIDQyLjIyMy00Mi4yNTFoNzkwLjI4NmMyMy4yOTYgMCA0Mi4yNDYgMTguOTUgNDIuMjQ2IDQyLjI1MXY1MzIuMjIzYzAuMDAxIDIzLjI3NC0xOC45NDkgNDIuMjIzLTQyLjI0NSA0Mi4yMjN6TTEyNC4zMiA2ODcuMjA2djgxLjg1MmgxOTEuODY5bDk3LjQzNS04MS44NTJoLTI4OS4zMDV6TTEyNC4zMiA2MzQuMTg3aDc2OC43MnYtNTEwLjY1N2gtNzY4LjcydjUxMC42NTd6IiAvPgo8L2ZvbnQ+PC9kZWZzPjwvc3ZnPg=="},function(A,e,t){function i(A){for(var e=0;e<A.length;e++){var t=A[e],i=g[t.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](t.parts[n]);for(;n<t.parts.length;n++)i.parts.push(o(t.parts[n]));i.parts.length>t.parts.length&&(i.parts.length=t.parts.length)}else{var M=[];for(n=0;n<t.parts.length;n++)M.push(o(t.parts[n]));g[t.id]={id:t.id,refs:1,parts:M}}}}function n(){var A=document.createElement("style");return A.type="text/css",l.appendChild(A),A}function o(A){var e,t,i=document.querySelector('style[data-vue-ssr-id~="'+A.id+'"]');if(i){if(E)return c;i.parentNode.removeChild(i)}if(u){var o=N++;i=s||(s=n()),e=M.bind(null,i,o,!1),t=M.bind(null,i,o,!0)}else i=n(),e=r.bind(null,i),t=function(){i.parentNode.removeChild(i)};return e(A),function(i){if(i){if(i.css===A.css&&i.media===A.media&&i.sourceMap===A.sourceMap)return;e(A=i)}else t()}}function M(A,e,t,i){var n=t?"":i.css;if(A.styleSheet)A.styleSheet.cssText=I(e,n);else{var o=document.createTextNode(n),M=A.childNodes;M[e]&&A.removeChild(M[e]),M.length?A.insertBefore(o,M[e]):A.appendChild(o)}}function r(A,e){var t=e.css,i=e.media,n=e.sourceMap;if(i&&A.setAttribute("media",i),n&&(t+="\n/*# sourceURL="+n.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),A.styleSheet)A.styleSheet.cssText=t;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(t))}}var a="undefined"!=typeof document,d=t(10),g={},l=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,N=0,E=!1,c=function(){},u="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());A.exports=function(A,e,t){E=t;var n=d(A,e);return i(n),function(e){for(var t=[],o=0;o<n.length;o++){var M=n[o],r=g[M.id];r.refs--,t.push(r)}e?(n=d(A,e),i(n)):n=[];for(o=0;o<t.length;o++){r=t[o];if(0===r.refs){for(var a=0;a<r.parts.length;a++)r.parts[a]();delete g[r.id]}}}};var I=function(){var A=[];return function(e,t){return A[e]=t,A.filter(Boolean).join("\n")}}()},function(A,e){A.exports=function(A,e){for(var t=[],i={},n=0;n<e.length;n++){var o=e[n],M=o[0],r=o[1],a=o[2],d=o[3],g={id:A+":"+n,css:r,media:a,sourceMap:d};i[M]?i[M].parts.push(g):t.push(i[M]={id:M,parts:[g]})}return t}},function(A,e){A.exports=function(A,e,t,i){var n,o=A=A||{},M=typeof A.default;"object"!==M&&"function"!==M||(n=A,o=A.default);var r="function"==typeof o?o.options:o;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),t&&(r._scopeId=t),i){var a=Object.create(r.computed||null);Object.keys(i).forEach((function(A){var e=i[A];a[A]=function(){return e}})),r.computed=a}return{esModule:n,exports:o,options:r}}},function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(13),n=t(14),o=null;e.default={data:function(){return{isHover:!1,editable:!1,isDragEnterUp:!1,isDragEnterBottom:!1,isDragEnterNode:!1,expanded:this.defaultExpanded}},props:{model:{type:Object},defaultLeafNodeName:{type:String,default:"New leaf node"},defaultTreeNodeName:{type:String,default:"New tree node"},defaultExpanded:{type:Boolean,default:!0}},computed:{itemIconClass:function(){return this.model.isLeaf?"vtl-icon-file":"vtl-icon-folder"},caretClass:function(){return this.expanded?"vtl-icon-caret-down":"vtl-icon-caret-right"},isFolder:function(){return this.model.children&&this.model.children.length},treeNodeClass:function(){var A=this.model,e=A.dragDisabled,t=A.disabled,i=this.isDragEnterNode;return{"vtl-tree-node":!0,"vtl-active":i,"vtl-drag-disabled":e,"vtl-disabled":t}}},mounted:function(){var A=this;(0,n.addHandler)(window,"keyup",(function(e){13===e.keyCode&&A.editable&&(A.editable=!1)}))},beforeDestroy:function(){(0,n.removeHandler)(window,"keyup")},methods:{updateName:function(A){var e=this.model.name;this.model.changeName(A.target.value);var t=this.getRootNode();t.$emit("change-name",{id:this.model.id,oldName:e,newName:A.target.value})},delNode:function(){var A=this.getRootNode();A.$emit("delete-node",this.model)},setEditable:function(){var A=this;this.editable=!0,this.$nextTick((function(){var e=A.$refs.nodeInput;e.focus(),e.setSelectionRange(0,e.value.length)}))},setUnEditable:function(){this.editable=!1},toggle:function(){this.isFolder&&(this.expanded=!this.expanded)},mouseOver:function(A){this.model.disabled||(this.isHover=!0)},mouseOut:function(A){this.isHover=!1},click:function(){var A=this.getRootNode();A.$emit("click",this.model)},addChild:function(A){var e=A?this.defaultLeafNodeName:this.defaultTreeNodeName;this.expanded=!0;var t=new i.TreeNode({name:e,isLeaf:A});this.model.addChildren(t,!0);var n=this.getRootNode();n.$emit("add-node",t)},dragStart:function(A){return!this.model.dragDisabled&&!this.model.disabled&&(o=this,A.dataTransfer.setData("data","data"),A.dataTransfer.effectAllowed="move",!0)},dragEnd:function(A){o=null},dragOver:function(A){return A.preventDefault(),!0},dragEnter:function(A){o&&(this.model.isLeaf||(this.isDragEnterNode=!0))},dragLeave:function(A){this.isDragEnterNode=!1},drop:function(A){if(o){var e=o.model.parent;o.model.moveInto(this.model),this.isDragEnterNode=!1;var t=this.getRootNode();t.$emit("drop",{target:this.model,node:o.model,src:e})}},dragEnterUp:function(){o&&(this.isDragEnterUp=!0)},dragOverUp:function(A){return A.preventDefault(),!0},dragLeaveUp:function(){o&&(this.isDragEnterUp=!1)},dropBefore:function(){if(o){var A=o.model.parent;o.model.insertBefore(this.model),this.isDragEnterUp=!1;var e=this.getRootNode();e.$emit("drop-before",{target:this.model,node:o.model,src:A})}},dragEnterBottom:function(){o&&(this.isDragEnterBottom=!0)},dragOverBottom:function(A){return A.preventDefault(),!0},dragLeaveBottom:function(){o&&(this.isDragEnterBottom=!1)},dropAfter:function(){if(o){var A=o.model.parent;o.model.insertAfter(this.model),this.isDragEnterBottom=!1;var e=this.getRootNode();e.$emit("drop-after",{target:this.model,node:o.model,src:A})}},getRootNode:function(){for(var A=this.$parent;"root"!==A._props.model.name;)A=A.$parent;return A}},beforeCreate:function(){this.$options.components.item=t(1)}}},function(A,e){"use strict";function t(A){return this.root=new i({name:"root",isLeaf:!1,id:0}),this.initNode(this.root,A),this.root}var i=function(A){var e=A.id,t=A.isLeaf;for(var i in this.id="undefined"==typeof e?(new Date).valueOf():e,this.parent=null,this.children=null,this.isLeaf=!!t,A)"id"!==i&&"children"!==i&&"isLeaf"!==i&&(this[i]=A[i])};i.prototype.changeName=function(A){this.name=A},i.prototype.addChildren=function(A){if(this.children||(this.children=[]),Array.isArray(A)){for(var e=0,t=A.length;e<t;e++){var i=A[e];i.parent=this,i.pid=this.id}this.children.concat(A)}else{var n=A;n.parent=this,n.pid=this.id,this.children.push(n)}},i.prototype.remove=function(){var A=this.parent,e=A.findChildIndex(this);A.children.splice(e,1)},i.prototype._removeChild=function(A){for(var e=0,t=this.children.length;e<t;e++)if(this.children[e]===A){this.children.splice(e,1);break}},i.prototype.isTargetChild=function(A){for(var e=A.parent;e;){if(e===this)return!0;e=e.parent}return!1},i.prototype.moveInto=function(A){"root"!==this.name&&this!==A&&(this.isTargetChild(A)||A.isLeaf||(this.parent._removeChild(this),this.parent=A,this.pid=A.id,A.children||(A.children=[]),A.children.unshift(this)))},i.prototype.findChildIndex=function(A){for(var e,t=0,i=this.children.length;t<i;t++)if(this.children[t]===A){e=t;break}return e},i.prototype._beforeInsert=function(A){return"root"!==this.name&&this!==A&&!this.isTargetChild(A)&&(this.parent._removeChild(this),this.parent=A.parent,this.pid=A.parent.id,!0)},i.prototype.insertBefore=function(A){if(this._beforeInsert(A)){var e=A.parent.findChildIndex(A);A.parent.children.splice(e,0,this)}},i.prototype.insertAfter=function(A){if(this._beforeInsert(A)){var e=A.parent.findChildIndex(A);A.parent.children.splice(e+1,0,this)}},t.prototype.initNode=function(A,e){for(var t=0,n=e.length;t<n;t++){var o=e[t],M=new i(o);o.children&&o.children.length>0&&this.initNode(M,o.children),A.addChildren(M)}},e.Tree=t,e.TreeNode=i},function(A,e){"use strict";var t;e.addHandler=function(A,e,i){t=i,A.addEventListener?A.addEventListener(e,i,!1):A.attachEvent?A.attachEvent("on"+e,i):A["on"+e]=i},e.removeHandler=function(A,e){A.removeEventListener?A.removeEventListener(e,t,!1):A.detachEvent?A.detachEvent("on"+e,t):A["on"+e]=null}},function(A,e){A.exports={render:function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"vtl"},["root"!==A.model.name?t("div",[t("div",{staticClass:"vtl-border vtl-up",class:{"vtl-active":A.isDragEnterUp},on:{drop:A.dropBefore,dragenter:A.dragEnterUp,dragover:A.dragOverUp,dragleave:A.dragLeaveUp}}),A._v(" "),t("div",{class:A.treeNodeClass,attrs:{id:A.model.id,draggable:!A.model.dragDisabled},on:{dragstart:A.dragStart,dragover:A.dragOver,dragenter:A.dragEnter,dragleave:A.dragLeave,drop:A.drop,dragend:A.dragEnd,mouseover:A.mouseOver,mouseout:A.mouseOut,click:function(e){return e.stopPropagation(),A.click(e)}}},[A.model.children&&A.model.children.length>0?t("span",{staticClass:"vtl-caret vtl-is-small"},[t("i",{staticClass:"vtl-icon",class:A.caretClass,on:{click:function(e){return e.preventDefault(),e.stopPropagation(),A.toggle(e)}}})]):A._e(),A._v(" "),A.model.isLeaf?t("span",[A._t("leafNodeIcon",[t("i",{staticClass:"vtl-icon vtl-menu-icon vtl-icon-file"})])],2):t("span",[A._t("treeNodeIcon",[t("i",{staticClass:"vtl-icon vtl-menu-icon vtl-icon-folder"})])],2),A._v(" "),A.editable?t("input",{ref:"nodeInput",staticClass:"vtl-input",attrs:{type:"text"},domProps:{value:A.model.name},on:{input:A.updateName,blur:A.setUnEditable}}):t("div",{staticClass:"vtl-node-content"},[A._v("\n        "+A._s(A.model.name)+"\n      ")]),A._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:A.isHover,expression:"isHover"}],staticClass:"vtl-operation"},[A.model.isLeaf||A.model.addTreeNodeDisabled?A._e():t("span",{attrs:{title:"add tree node"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),A.addChild(!1)}}},[A._t("addTreeNode",[t("i",{staticClass:"vtl-icon vtl-icon-folder-plus-e"})])],2),A._v(" "),A.model.isLeaf||A.model.addLeafNodeDisabled?A._e():t("span",{attrs:{title:"add leaf node"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),A.addChild(!0)}}},[A._t("addLeafNode",[t("i",{staticClass:"vtl-icon vtl-icon-plus"})])],2),A._v(" "),A.model.editNodeDisabled?A._e():t("span",{attrs:{title:"edit"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),A.setEditable(e)}}},[A._t("editNode",[t("i",{staticClass:"vtl-icon vtl-icon-edit"})])],2),A._v(" "),A.model.delNodeDisabled?A._e():t("span",{attrs:{title:"delete"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),A.delNode(e)}}},[A._t("delNode",[t("i",{staticClass:"vtl-icon vtl-icon-trash"})])],2)])]),A._v(" "),A.model.children&&A.model.children.length>0&&A.expanded?t("div",{staticClass:"vtl-border vtl-bottom",class:{"vtl-active":A.isDragEnterBottom},on:{drop:A.dropAfter,dragenter:A.dragEnterBottom,dragover:A.dragOverBottom,dragleave:A.dragLeaveBottom}}):A._e()]):A._e(),A._v(" "),A.isFolder?t("div",{directives:[{name:"show",rawName:"v-show",value:"root"===A.model.name||A.expanded,expression:"model.name === 'root' || expanded"}],class:{"vtl-tree-margin":"root"!==A.model.name}},A._l(A.model.children,(function(e){return t("item",{key:e.id,attrs:{"default-tree-node-name":A.defaultTreeNodeName,"default-leaf-node-name":A.defaultLeafNodeName,"default-expanded":A.defaultExpanded,model:e}},[A._t("addTreeNode",null,{slot:"addTreeNode"}),A._v(" "),A._t("addLeafNode",null,{slot:"addLeafNode"}),A._v(" "),A._t("editNode",null,{slot:"editNode"}),A._v(" "),A._t("delNode",null,{slot:"delNode"})],2)})),1):A._e()])},staticRenderFns:[]}}])}))},e46e:function(A,e,t){"use strict";t.r(e);var i=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",[t("button",{on:{click:A.addNode}},[A._v("Add Node")]),t("vue-tree-list",{attrs:{model:A.data,"default-tree-node-name":"new node","default-leaf-node-name":"new leaf"},on:{click:A.onClick}}),t("button",{on:{click:A.getNewTree}},[A._v("Get new tree")]),t("pre",[A._v("  "+A._s(A.newTree)+"\n")])],1)},n=[],o=t("3fb7"),M={components:{VueTreeList:o["VueTreeList"]},data:function(){return{newTree:{},data:new o["Tree"]([{name:"Node 1",id:1,pid:0,dragDisabled:!0,children:[{name:"Node 1-2",id:2,isLeaf:!0,pid:1}]},{name:"Node 2",id:3,pid:0,dragDisabled:!0},{name:"Node 3",id:4,pid:0}])}},methods:{addNode:function(){var A=new o["TreeNode"]({name:"new node",isLeaf:!1});this.data.children||(this.data.children=[]),this.data.addChildren(A)},getNewTree:function(){var A=this;function e(A){var t={};for(var i in A)"children"!==i&&"parent"!==i&&(t[i]=A[i]);if(A.children&&A.children.length>0){t.children=[];for(var n=0,o=A.children.length;n<o;n++)t.children.push(e(A.children[n]))}return t}A.newTree=e(A.data)},onClick:function(A){console.log(A)}}},r=M,a=t("2877"),d=Object(a["a"])(r,i,n,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=page-testing-tree.e4bab5b8.js.map