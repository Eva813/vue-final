(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-248885a0"],{4893:function(e,t,r){},"54e2":function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23"),o=Object(n["withScopeId"])("data-v-d25e20fc");Object(n["pushScopeId"])("data-v-d25e20fc");var a={class:"signin-form container justify-content-center"},c={key:0,class:"row"},s={class:"col-sm-12"},i={class:"form"},l={class:"tab-header"},d={class:"tab-content"},u={key:0,class:"tab-body active"},p={class:"form-element"},f=Object(n["createVNode"])("span",{class:"invalid-feedback"},null,-1),m={class:"form-element"},b={class:"form-element password-form"},v={key:0,class:"password-span"},h={key:1,class:"password-span"},j={key:2,class:"password-span"},g=Object(n["createVNode"])("div",{class:"form-element"},[Object(n["createVNode"])("select",{class:"form-option",name:"sex",id:"sex"},[Object(n["createVNode"])("option",{value:"",class:"ng-binding"},"性別 "),Object(n["createVNode"])("option",{value:"男"},"男"),Object(n["createTextVNode"])(" 　 "),Object(n["createVNode"])("option",{value:"女"},"女"),Object(n["createVNode"])("option",{value:"nun"},"不透露")])],-1),O={class:"form-element"},w={class:"form-element"},V={key:0,class:"tab-body"},N={class:"form-element"},y={class:"form-element"},k={class:"form-element"},S=Object(n["createVNode"])("label",{for:"remember_me"},"記住我",-1),x=Object(n["createVNode"])("div",{class:"form-element"},[Object(n["createVNode"])("button",null,"開始購物吧！"),Object(n["createVNode"])("a",{href:""},"忘記密碼？")],-1),C={key:0,class:"success"},B=Object(n["createVNode"])("h5",{class:"success-title"},"完成註冊啦!!!!!",-1);Object(n["popScopeId"])();var M=o((function(e,t,r,M,U,E){var L=Object(n["resolveComponent"])("Navbar"),T=Object(n["resolveComponent"])("Field"),_=Object(n["resolveComponent"])("ErrorMessage"),P=Object(n["resolveComponent"])("password-meter"),A=Object(n["resolveComponent"])("Form"),I=Object(n["resolveComponent"])("Footer");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])(L),Object(n["createVNode"])("section",null,[Object(n["createVNode"])("div",a,[U.hideLogin?(Object(n["openBlock"])(),Object(n["createBlock"])("div",c,[Object(n["createVNode"])("div",s,[Object(n["createVNode"])("div",i,[Object(n["createVNode"])("div",l,[Object(n["createVNode"])("div",{onClick:t[1]||(t[1]=function(e){return U.activetab=1}),class:[1===U.activetab?"active":""]}," 註冊會員 ",2),Object(n["createVNode"])("div",{onClick:t[2]||(t[2]=function(e){return U.activetab=2}),class:[2===U.activetab?"active":""]}," 會員登入 ",2)]),Object(n["createVNode"])("div",d,[Object(n["createVNode"])(A,{onSubmit:E.onSubmit},{default:o((function(e){var r=e.errors;return[1===U.activetab?(Object(n["openBlock"])(),Object(n["createBlock"])("div",u,[Object(n["createVNode"])("div",p,[Object(n["createVNode"])(T,{type:"text",name:"用戶名",modelValue:U.user.name,"onUpdate:modelValue":t[3]||(t[3]=function(e){return U.user.name=e}),placeholder:"用戶名"},null,8,["modelValue"]),f]),Object(n["createVNode"])("div",m,[Object(n["createVNode"])(T,{class:["form-control",{"is-invalid":r["email"],"is-valid":!r["email"]&&""!=U.user.email}],type:"text",name:"email",placeholder:"Email",rules:"email|required",modelValue:U.user.email,"onUpdate:modelValue":t[4]||(t[4]=function(e){return U.user.email=e})},null,8,["modelValue","class"]),Object(n["createVNode"])(_,{name:"email",class:"invalid-feedback"})]),Object(n["createVNode"])("div",b,[Object(n["createVNode"])(T,{class:["form-control",{"is-invalid":r["密碼"],"is-valid":!r["密碼"]&&""!=U.user.password}],type:"password",name:"密碼",rules:"required|min:9",placeholder:"密碼",modelValue:U.user.password,"onUpdate:modelValue":t[5]||(t[5]=function(e){return U.user.password=e}),ref:"password"},null,8,["modelValue","class"]),Object(n["createVNode"])(_,{name:"密碼",class:"invalid-feedback"}),1===U.score?(Object(n["openBlock"])(),Object(n["createBlock"])("span",v,"week")):Object(n["createCommentVNode"])("",!0),2===U.score?(Object(n["openBlock"])(),Object(n["createBlock"])("span",h,"secure")):Object(n["createCommentVNode"])("",!0),3===U.score?(Object(n["openBlock"])(),Object(n["createBlock"])("span",j,"strong")):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(P,{password:U.user.password,onScore:E.onScore},null,8,["password","onScore"]),Object(n["createVNode"])(T,{class:"form-control",type:"password",name:"確認密碼",rules:"confirmed:@密碼",placeholder:"再次輸入密碼",modelValue:U.user.passwordAgain,"onUpdate:modelValue":t[6]||(t[6]=function(e){return U.user.passwordAgain=e}),"data-vv-as":"password"},null,8,["modelValue"]),Object(n["createVNode"])(_,{name:"確認密碼",class:"invalid-feedback"})]),g,Object(n["createVNode"])("div",O,[Object(n["createVNode"])(T,{type:"text",onfocus:"(this.type='date')",onblur:"if(this.value==''){this.type='text'}",name:"生日日期",placeholder:"生日日期",modelValue:U.user.date,"onUpdate:modelValue":t[7]||(t[7]=function(e){return U.user.date=e})},null,8,["modelValue"])]),Object(n["createVNode"])("div",w,[Object(n["createVNode"])("button",{onClick:t[8]||(t[8]=function(){return E.toggle&&E.toggle.apply(E,arguments)})},"立即加入！")])])):Object(n["createCommentVNode"])("",!0)]})),_:1},8,["onSubmit"]),Object(n["createVNode"])(A,{onSubmit:E.onSubmit},{default:o((function(e){var r=e.errors;return[2===U.activetab?(Object(n["openBlock"])(),Object(n["createBlock"])("div",V,[Object(n["createVNode"])("div",N,[Object(n["createVNode"])(T,{class:["form-control",{"is-invalid":r["email"],"is-valid":!r["email"]&&""!=U.user.email}],type:"text",name:"email",placeholder:"Email",rules:"email|required",modelValue:U.user.email,"onUpdate:modelValue":t[9]||(t[9]=function(e){return U.user.email=e})},null,8,["modelValue","class"]),Object(n["createVNode"])(_,{name:"email",class:"invalid-feedback"})]),Object(n["createVNode"])("div",y,[Object(n["createVNode"])(T,{type:"password",name:"password",placeholder:"密碼"})]),Object(n["createVNode"])("div",k,[Object(n["createVNode"])(T,{type:"checkbox",name:"記住我",id:"remember_me"}),S]),x])):Object(n["createCommentVNode"])("",!0)]})),_:1},8,["onSubmit"])])])])])):Object(n["createCommentVNode"])("",!0)]),U.isShowSuccess?(Object(n["openBlock"])(),Object(n["createBlock"])("div",C,[B])):Object(n["createCommentVNode"])("",!0)]),Object(n["createVNode"])("footer",null,[Object(n["createVNode"])(I)])],64)})),U=r("d178"),E=r("fd2d"),L=r("6aef"),T=r.n(L),_={name:"SignIn",components:{Navbar:U["a"],Footer:E["a"],passwordMeter:T.a},data:function(){return{activetab:1,user:{name:"",email:"",password:null,passwordAgain:null,date:""},score:null,isShowSuccess:!1,hideLogin:!0}},methods:{onSubmit:function(e){alert(JSON.stringify(values,null,2))},onScore:function(e){console.log(e.score),console.log(e.strength),this.score=e.score},toggle:function(){this.isShowSuccess=!this.isShowSuccess,this.hideLogin=!this.hideLogin}}};r("6812");_.render=M,_.__scopeId="data-v-d25e20fc";t["default"]=_},6812:function(e,t,r){"use strict";r("4893")},"6aef":function(e,t,r){(function(t,n){e.exports=n(r("7a23"))})("undefined"!==typeof self&&self,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="fb15")}({"24fb":function(e,t,r){"use strict";function n(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"===typeof btoa){var a=o(n),c=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[r].concat(c).concat([a]).join("\n")}return[r].join("\n")}function o(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=n(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"===typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var s=0;s<e.length;s++){var i=[].concat(e[s]);n&&o[i[0]]||(r&&(i[2]?i[2]="".concat(r," and ").concat(i[2]):i[2]=r),t.push(i))}},t}},"499e":function(e,t,r){"use strict";function n(e,t){for(var r=[],n={},o=0;o<t.length;o++){var a=t[o],c=a[0],s=a[1],i=a[2],l=a[3],d={id:e+":"+o,css:s,media:i,sourceMap:l};n[c]?n[c].parts.push(d):r.push(n[c]={id:c,parts:[d]})}return r}r.r(t),r.d(t,"default",(function(){return m}));var o="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},c=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,i=0,l=!1,d=function(){},u=null,p="data-vue-ssr-id",f="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,r,o){l=r,u=o||{};var c=n(e,t);return b(c),function(t){for(var r=[],o=0;o<c.length;o++){var s=c[o],i=a[s.id];i.refs--,r.push(i)}t?(c=n(e,t),b(c)):c=[];for(o=0;o<r.length;o++){i=r[o];if(0===i.refs){for(var l=0;l<i.parts.length;l++)i.parts[l]();delete a[i.id]}}}}function b(e){for(var t=0;t<e.length;t++){var r=e[t],n=a[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(h(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var c=[];for(o=0;o<r.parts.length;o++)c.push(h(r.parts[o]));a[r.id]={id:r.id,refs:1,parts:c}}}}function v(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function h(e){var t,r,n=document.querySelector("style["+p+'~="'+e.id+'"]');if(n){if(l)return d;n.parentNode.removeChild(n)}if(f){var o=i++;n=s||(s=v()),t=g.bind(null,n,o,!1),r=g.bind(null,n,o,!0)}else n=v(),t=O.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}var j=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}();function g(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=j(t,o);else{var a=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(a,c[t]):e.appendChild(a)}}function O(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),u.ssrId&&e.setAttribute(p,t.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},"7ba9":function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,".po-password-strength-bar{border-radius:2px;-webkit-transition:all .2s linear;transition:all .2s linear;height:5px;margin-top:8px}.po-password-strength-bar.risky{background-color:#f95e68;width:10%}.po-password-strength-bar.guessable{background-color:#fb964d;width:32.5%}.po-password-strength-bar.weak{background-color:#fdd244;width:55%}.po-password-strength-bar.safe{background-color:#b0dc53;width:77.5%}.po-password-strength-bar.secure{background-color:#35cc62;width:100%}",""]),e.exports=t},8875:function(e,t,r){var n,o,a;(function(r,c){o=[],n=c,a="function"===typeof n?n.apply(t,o):n,void 0===a||(e.exports=a)})("undefined"!==typeof self&&self,(function(){function e(){var t=Object.getOwnPropertyDescriptor(document,"currentScript");if(!t&&"currentScript"in document&&document.currentScript)return document.currentScript;if(t&&t.get!==e&&document.currentScript)return document.currentScript;try{throw new Error}catch(f){var r,n,o,a=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,c=/@([^@]*):(\d+):(\d+)\s*$/gi,s=a.exec(f.stack)||c.exec(f.stack),i=s&&s[1]||!1,l=s&&s[2]||!1,d=document.location.href.replace(document.location.hash,""),u=document.getElementsByTagName("script");i===d&&(r=document.documentElement.outerHTML,n=new RegExp("(?:[^\\n]+?\\n){0,"+(l-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),o=r.replace(n,"$1").trim());for(var p=0;p<u.length;p++){if("interactive"===u[p].readyState)return u[p];if(u[p].src===i)return u[p];if(i===d&&u[p].innerHTML&&u[p].innerHTML.trim()===o)return u[p]}return null}}return e}))},"8bbf":function(t,r){t.exports=e},"8df3":function(e,t,r){var n=r("7ba9");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r("499e").default;o("2549309a",n,!0,{sourceMap:!1,shadowMode:!1})},"92aa":function(e,t,r){"use strict";r("8df3")},fb15:function(e,t,r){"use strict";if(r.r(t),"undefined"!==typeof window){var n=window.document.currentScript,o=r("8875");n=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var a=n&&n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);a&&(r.p=a[1])}var c=r("8bbf");function s(e,t,r,n,o,a){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:["po-password-strength-bar",e.passwordClass]},null,2)}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){var t=0,r=0,n=0,o=0,a=0,c=/[^A-Za-z0-9]/g,s=/(.*[a-z].*)/g,i=/(.*[A-Z].*)/g,l=/(.*[0-9].*)/g,d=/(\w)(\1+\1+\1+\1+)/g,u=c.test(e),p=s.test(e),f=i.test(e),m=l.test(e),b=d.test(e);return e.length>4&&((p||f)&&m&&(a=1),f&&p&&(o=1),(p||f||m)&&u&&(n=1),e.length>8&&(r=1),e.length>12&&!b&&(r=2),e.length>25&&!b&&(r=3),t=r+n+o+a,t>4&&(t=4)),t},d=l,u=function(e){switch(e){case 0:return"risky";case 1:return"guessable";case 2:return"weak";case 3:return"safe";case 4:return"secure";default:return""}},p=u,f=function(e){var t=d(e);return p(t)},m=f,b=Object(c["defineComponent"])({name:"PasswordMeter",props:{password:String},emits:["score"],computed:{passwordClass:function(){var e;if(!this.password)return null;var t=m(this.password),r=d(this.password);return this.$emit("score",{score:r,strength:t}),e={},i(e,t,!0),i(e,"scored",!0),e}}});r("92aa");b.render=s;var v=b,h=v;t["default"]=h}})}))}}]);
//# sourceMappingURL=chunk-248885a0.fbf5c671.js.map