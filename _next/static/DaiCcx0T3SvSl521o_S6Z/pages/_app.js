/*! For license information please see _app.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))}},0:function(e,t,n){n("cM/9"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ne}));var r=n("q1tI"),o=n.n(r),i=n("8Kt/"),a=n.n(i),c=n("bWLx"),u=n("5CWz"),l=n("viY9"),f=n("dl/7"),s=Object(l.a)({palette:{primary:{main:"#1976d2"},secondary:{main:"#19857b"},error:{main:f.a.A400},background:{default:"#fff"}}}),p=n("R/WZ"),d=n("ofer"),h=n("tRbT"),y=n("hlFM"),m=n("9lTW"),v=n.n(m);function w(e){var t=Object.entries(e).filter((function(e){var t=e[1];return void 0!==t&&null!==t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var g=n("TSYQ"),b=n.n(g),O=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),j=function(){return(j=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},E=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))},S=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},k=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},x=function(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then},C=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},P=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};var T=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,a=n.windowPosition,c=void 0===a?"windowCenter":a,u=n.windowWidth,l=void 0===u?550:u;!function(e,t,n){var r=t.height,o=t.width,i=k(t,["height","width"]),a=j({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),c=window.open(e,"",Object.keys(a).map((function(e){return e+"="+a[e]})).join(", "));if(n)var u=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(u),n(c))}catch(e){console.error(e)}}),1e3)}(e,j({height:i,width:l},"windowCenter"===c?C(l,i):P(l,i)),r)},t.handleClick=function(e){return E(t,void 0,void 0,(function(){var t,n,r,o,i,a,c,u,l,f;return S(this,(function(s){switch(s.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,i=t.onClick,a=t.url,c=t.openShareDialogOnClick,u=t.opts,l=o(a,u),r?[2]:(e.preventDefault(),n?(f=n(),x(f)?[4,f]:[3,2]):[3,2]);case 1:s.sent(),s.label=2;case 2:return c&&this.openShareDialog(l),i&&i(e,l),[2]}}))}))},t}return O(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,i=e.disabledStyle,a=e.forwardedRef,c=(e.networkLink,e.networkName),u=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),l=e.style,f=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,k(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),s=b()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),p=j(j(u?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},l),r&&i);return o.a.createElement("button",j({},f,{"aria-label":f["aria-label"]||c,className:s,onClick:this.handleClick,ref:a,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(r.Component),_=function(){return(_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var A=function(e,t,n,i){function a(r,a){var c=n(r),u=_({},r);return Object.keys(c).forEach((function(e){delete u[e]})),o.a.createElement(T,_({},i,u,{forwardedRef:a,networkName:e,networkLink:t,opts:n(r)}))}return a.displayName="ShareButton-"+e,Object(r.forwardRef)(a)};var z=A("twitter",(function(e,t){var n=t.title,r=t.via,o=t.hashtags,i=void 0===o?[]:o,a=t.related,c=void 0===a?[]:a;return v()(e,"twitter.url"),v()(Array.isArray(i),"twitter.hashtags is not an array"),v()(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+w({url:e,text:n,via:r,hashtags:i.length>0?i.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),D=function(){return(D=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},M=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function R(e){var t=function(t){var n=t.bgStyle,r=t.borderRadius,i=t.iconFillColor,a=t.round,c=t.size,u=M(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.a.createElement("svg",D({viewBox:"0 0 64 64",width:c,height:c},u),a?o.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):o.a.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:e.color,style:n}),o.a.createElement("path",{d:e.path,fill:i}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var q=R({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var B=A("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return v()(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+w({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),N=R({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var H=A("reddit",(function(e,t){var n=t.title;return v()(e,"reddit.url"),"https://www.reddit.com/submit"+w({url:e,title:n})}),(function(e){return{title:e.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"}),F=R({color:"#5f99cf",networkName:"reddit",path:"m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"});var I=A("linkedin",(function(e,t){var n=t.title,r=t.summary,o=t.source;return v()(e,"linkedin.url"),"https://linkedin.com/shareArticle"+w({url:e,mini:"true",title:n,summary:r,source:o})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600}),V=R({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});var L=A("email",(function(e,t){var n=t.subject,r=t.body,o=t.separator;return"mailto:"+w({subject:n,body:r?r+o+e:e})}),(function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(e,t){window.location.href=t}}),W=R({color:"#7f7f7f",networkName:"email",path:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"}),U=o.a.createElement,J=Object(p.a)((function(e){return{footer:{padding:e.spacing(2,2),marginTop:"auto",backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[800]}}}));function X(){var e=J();return U("footer",{className:e.footer},U(h.a,{align:"center"},U(y.a,{component:"span",marginLeft:"7px"},U(z,{url:"http://www.evdb.app"},U(q,{size:32}))),U(y.a,{component:"span",marginLeft:"7px"},U(B,{url:"http://www.evdb.app"},U(N,{size:32}))),U(y.a,{component:"span",marginLeft:"7px"},U(H,{url:"http://www.evdb.app"},U(F,{size:32}))),U(y.a,{component:"span",marginLeft:"7px"},U(I,{url:"http://www.evdb.app"},U(V,{size:32}))),U(y.a,{component:"span",marginLeft:"7px"},U(L,{url:"http://www.evdb.app"},U(W,{size:32})))),U(h.a,{align:"center"},U(d.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ","Electric Vehicle Database ",(new Date).getFullYear(),".")))}var G=n("bXiM"),$=n("lO0E"),Z=n("tXe+"),K=n.n(Z),Y=o.a.createElement,Q=Object(p.a)((function(e){return{appIcon:{marginRight:e.spacing(2)},toolbar:{flexWrap:"wrap"},toolbarTitle:{flexGrow:1}}}));function ee(){var e=Q();return Y(G.a,{position:"sticky",className:e.appBar},Y($.a,{className:e.toolbar,variant:"dense"},Y(K.a,{className:e.appIcon,alt:"Electric vehicle research database logo"}),Y(d.a,{variant:"h6",noWrap:!0,className:e.toolbarTitle},"Electric Vehicle Database")))}var te=o.a.createElement;function ne(e){var t=e.Component,n=e.pageProps;return o.a.useEffect((function(){var e=document.querySelector("#jss-server-side");e&&e.parentElement.removeChild(e)}),[]),te(o.a.Fragment,null,te(a.a,null,te("title",null,"Electric Vechicle Database - Research electric vehicles - EVDb.app"),te("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"}),te("meta",{name:"description",content:"Research electric vehicles with the most up-to-date specifications from Tesla, Audi, Rivian, Ford, Volkswagen, Polestar, Volvo, BMW, and other battery electric vehicle (BEV) automakers."}),te("meta",{name:"og:title",property:"og:title",content:"Research electric vehicles with the most up-to-date specifications from Tesla, Audi, Rivian, Ford, Volkswagen, Polestar, Volvo, BMW, and other battery electric vehicle (BEV) automakers."})),te(c.a,{theme:s},te(u.a,null),te(ee,null),te(t,n),te(X,null)))}},"5fIB":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"7tlc":function(e,t,n){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},o=/%[sdj%]/g;t.format=function(e){if(!v(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,a=String(e).replace(o,(function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return e}})),u=r[n];n<i;u=r[++n])y(u)||!b(u)?a+=" "+u:a+=" "+c(u);return a},t.deprecate=function(n,r){if("undefined"!==typeof e&&!0===e.noDeprecation)return n;if("undefined"===typeof e)return function(){return t.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var i,a={};function c(e,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&t._extend(r,n),w(r.showHidden)&&(r.showHidden=!1),w(r.depth)&&(r.depth=2),w(r.colors)&&(r.colors=!1),w(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),f(r,e,r.depth)}function u(e,t){var n=c.styles[t];return n?"\x1b["+c.colors[n][0]+"m"+e+"\x1b["+c.colors[n][1]+"m":e}function l(e,t){return e}function f(e,n,r){if(e.customInspect&&n&&E(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return v(o)||(o=f(e,o,r)),o}var i=function(e,t){if(w(t))return e.stylize("undefined","undefined");if(v(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(m(t))return e.stylize(""+t,"number");if(h(t))return e.stylize(""+t,"boolean");if(y(t))return e.stylize("null","null")}(e,n);if(i)return i;var a=Object.keys(n),c=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(n)),j(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return s(n);if(0===a.length){if(E(n)){var u=n.name?": "+n.name:"";return e.stylize("[Function"+u+"]","special")}if(g(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(O(n))return e.stylize(Date.prototype.toString.call(n),"date");if(j(n))return s(n)}var l,b="",S=!1,k=["{","}"];(d(n)&&(S=!0,k=["[","]"]),E(n))&&(b=" [Function"+(n.name?": "+n.name:"")+"]");return g(n)&&(b=" "+RegExp.prototype.toString.call(n)),O(n)&&(b=" "+Date.prototype.toUTCString.call(n)),j(n)&&(b=" "+s(n)),0!==a.length||S&&0!=n.length?r<0?g(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),l=S?function(e,t,n,r,o){for(var i=[],a=0,c=t.length;a<c;++a)P(t,String(a))?i.push(p(e,t,n,r,String(a),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(e,t,n,r,o,!0))})),i}(e,n,r,c,a):a.map((function(t){return p(e,n,r,c,t,S)})),e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(l,b,k)):k[0]+b+k[1]}function s(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,o,i){var a,c,u;if((u=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?c=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(c=e.stylize("[Setter]","special")),P(r,o)||(a="["+o+"]"),c||(e.seen.indexOf(u.value)<0?(c=y(n)?f(e,u.value,null):f(e,u.value,n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+c.split("\n").map((function(e){return"   "+e})).join("\n")):c=e.stylize("[Circular]","special")),w(a)){if(i&&o.match(/^\d+$/))return c;(a=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+c}function d(e){return Array.isArray(e)}function h(e){return"boolean"===typeof e}function y(e){return null===e}function m(e){return"number"===typeof e}function v(e){return"string"===typeof e}function w(e){return void 0===e}function g(e){return b(e)&&"[object RegExp]"===S(e)}function b(e){return"object"===typeof e&&null!==e}function O(e){return b(e)&&"[object Date]"===S(e)}function j(e){return b(e)&&("[object Error]"===S(e)||e instanceof Error)}function E(e){return"function"===typeof e}function S(e){return Object.prototype.toString.call(e)}function k(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(w(i)&&(i=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!a[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=e.pid;a[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else a[n]=function(){};return a[n]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=d,t.isBoolean=h,t.isNull=y,t.isNullOrUndefined=function(e){return null==e},t.isNumber=m,t.isString=v,t.isSymbol=function(e){return"symbol"===typeof e},t.isUndefined=w,t.isRegExp=g,t.isObject=b,t.isDate=O,t.isError=j,t.isFunction=E,t.isPrimitive=function(e){return null===e||"boolean"===typeof e||"number"===typeof e||"string"===typeof e||"symbol"===typeof e||"undefined"===typeof e},t.isBuffer=n("j/1Z");var x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function C(){var e=new Date,t=[k(e.getHours()),k(e.getMinutes()),k(e.getSeconds())].join(":");return[e.getDate(),x[e.getMonth()],t].join(" ")}function P(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",C(),t.format.apply(t,arguments))},t.inherits=n("FfBw"),t._extend=function(e,t){if(!t||!b(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var T="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function _(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');if(T&&e[T]){var t;if("function"!==typeof(t=e[T]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,T,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise((function(e,r){t=e,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(e,r){e?n(e):t(r)}));try{e.apply(this,o)}catch(a){n(a)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),T&&Object.defineProperty(t,T,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=T,t.callbackify=function(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!==typeof o)throw new TypeError("The last argument must be of type Function");var i=this,a=function(){return o.apply(i,arguments)};t.apply(this,n).then((function(t){e.nextTick(a,null,t)}),(function(t){e.nextTick(_,t,a)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n}}).call(this,n("8oxB"))},"8/g6":function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=i.default.memo(i.default.forwardRef((function(t,n){return i.default.createElement(a.default,(0,o.default)({ref:n},t),e)})));0;return n.muiName=a.default.muiName,n};var o=r(n("pVnL")),i=r(n("q1tI")),a=r(n("UJJ5"))},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),i=r(n("Xuae")),a=n("lwAK"),c=n("FYa8"),u=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var s=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,u=s.length;c<u;c++){var l=s[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var f=o.props[l],p=r[l]||new Set;p.has(f)?i=!1:(p.add(f),r[l]=p)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var d=i.default();function h(e){var t=e.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:u.isInAmpMode(e)},t)}))}))}h.rewind=d.rewind,t.default=h},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,l=[],f=!1,s=-1;function p(){f&&u&&(f=!1,u.length?l=u.concat(l):s=-1,l.length&&d())}function d(){if(!f){var e=c(p);f=!0;for(var t=l.length;t;){for(u=l,l=[];++s<t;)u&&u[s].run();s=-1,t=l.length}u=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||f||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9lTW":function(e,t,n){"use strict";(function(t){function r(e,t){if(e===t)return 0;for(var n=e.length,r=t.length,o=0,i=Math.min(n,r);o<i;++o)if(e[o]!==t[o]){n=e[o],r=t[o];break}return n<r?-1:r<n?1:0}function o(e){return t.Buffer&&"function"===typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var i=n("7tlc"),a=Object.prototype.hasOwnProperty,c=Array.prototype.slice,u="foo"===function(){}.name;function l(e){return Object.prototype.toString.call(e)}function f(e){return!o(e)&&("function"===typeof t.ArrayBuffer&&("function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var s=e.exports=v,p=/\s*function\s+([^\(\s]*)\s*/;function d(e){if(i.isFunction(e)){if(u)return e.name;var t=e.toString().match(p);return t&&t[1]}}function h(e,t){return"string"===typeof e?e.length<t?e:e.slice(0,t):e}function y(e){if(u||!i.isFunction(e))return i.inspect(e);var t=d(e);return"[Function"+(t?": "+t:"")+"]"}function m(e,t,n,r,o){throw new s.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:o})}function v(e,t){e||m(e,!0,t,"==",s.ok)}function w(e,t,n,a){if(e===t)return!0;if(o(e)&&o(t))return 0===r(e,t);if(i.isDate(e)&&i.isDate(t))return e.getTime()===t.getTime();if(i.isRegExp(e)&&i.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"===typeof e||null!==t&&"object"===typeof t){if(f(e)&&f(t)&&l(e)===l(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===r(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(o(e)!==o(t))return!1;var u=(a=a||{actual:[],expected:[]}).actual.indexOf(e);return-1!==u&&u===a.expected.indexOf(t)||(a.actual.push(e),a.expected.push(t),function(e,t,n,r){if(null===e||void 0===e||null===t||void 0===t)return!1;if(i.isPrimitive(e)||i.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var o=g(e),a=g(t);if(o&&!a||!o&&a)return!1;if(o)return e=c.call(e),t=c.call(t),w(e,t,n);var u,l,f=j(e),s=j(t);if(f.length!==s.length)return!1;for(f.sort(),s.sort(),l=f.length-1;l>=0;l--)if(f[l]!==s[l])return!1;for(l=f.length-1;l>=0;l--)if(u=f[l],!w(e[u],t[u],n,r))return!1;return!0}(e,t,n,a))}return n?e===t:e==t}function g(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function b(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(n){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function O(e,t,n,r){var o;if("function"!==typeof t)throw new TypeError('"block" argument must be a function');"string"===typeof n&&(r=n,n=null),o=function(e){var t;try{e()}catch(n){t=n}return t}(t),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),e&&!o&&m(o,n,"Missing expected exception"+r);var a="string"===typeof r,c=!e&&o&&!n;if((!e&&i.isError(o)&&a&&b(o,n)||c)&&m(o,n,"Got unwanted exception"+r),e&&o&&n&&!b(o,n)||!e&&o)throw o}s.AssertionError=function(e){var t;this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=h(y((t=this).actual),128)+" "+t.operator+" "+h(y(t.expected),128),this.generatedMessage=!0);var n=e.stackStartFunction||m;if(Error.captureStackTrace)Error.captureStackTrace(this,n);else{var r=new Error;if(r.stack){var o=r.stack,i=d(n),a=o.indexOf("\n"+i);if(a>=0){var c=o.indexOf("\n",a+1);o=o.substring(c+1)}this.stack=o}}},i.inherits(s.AssertionError,Error),s.fail=m,s.ok=v,s.equal=function(e,t,n){e!=t&&m(e,t,n,"==",s.equal)},s.notEqual=function(e,t,n){e==t&&m(e,t,n,"!=",s.notEqual)},s.deepEqual=function(e,t,n){w(e,t,!1)||m(e,t,n,"deepEqual",s.deepEqual)},s.deepStrictEqual=function(e,t,n){w(e,t,!0)||m(e,t,n,"deepStrictEqual",s.deepStrictEqual)},s.notDeepEqual=function(e,t,n){w(e,t,!1)&&m(e,t,n,"notDeepEqual",s.notDeepEqual)},s.notDeepStrictEqual=function e(t,n,r){w(t,n,!0)&&m(t,n,r,"notDeepStrictEqual",e)},s.strictEqual=function(e,t,n){e!==t&&m(e,t,n,"===",s.strictEqual)},s.notStrictEqual=function(e,t,n){e===t&&m(e,t,n,"!==",s.notStrictEqual)},s.throws=function(e,t,n){O(!0,e,t,n)},s.doesNotThrow=function(e,t,n){O(!1,e,t,n)},s.ifError=function(e){if(e)throw e};var j=Object.keys||function(e){var t=[];for(var n in e)a.call(e,n)&&t.push(n);return t}}).call(this,n("yLpj"))},FfBw:function(e,t){"function"===typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},UJJ5:function(e,t,n){"use strict";n.r(t);var r=n("HR5l");n.d(t,"default",(function(){return r.a}))},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),i=n("i2R6"),a=n("48fX"),c=n("tCBg"),u=n("T0f4"),l=n("mPvQ");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(c){a(l,c);var u=f(l);function l(e){var i;return r(this,l),i=u.call(this,e),p&&(t.add(o(i)),n(o(i))),i}return i(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(s.Component))}},"cM/9":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},"j/1Z":function(e,t){e.exports=function(e){return e&&"object"===typeof e&&"function"===typeof e.copy&&"function"===typeof e.fill&&"function"===typeof e.readUInt8}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||i()}},rlHP:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},"tXe+":function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),i=(0,r(n("8/g6")).default)(o.default.createElement("path",{d:"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"}),"BatteryChargingFull");t.default=i}},[[0,0,1,3,2]]]);