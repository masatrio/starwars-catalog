/*
 AngularJS v1.6.6
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(u){'use strict';function oe(a){if(E(a))t(a.objectMaxDepth)&&(Lc.objectMaxDepth=Ub(a.objectMaxDepth)?a.objectMaxDepth:NaN);else return Lc}function Ub(a){return Y(a)&&0<a}function M(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.6.6/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==
typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function xa(a){if(null==a||$a(a))return!1;if(I(a)||D(a)||B&&a instanceof B)return!0;var b="length"in Object(a)&&a.length;return Y(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function p(a,b,d){var c,e;if(a)if(A(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(I(a)||xa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in
a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==p)a.forEach(b,d,a);else if(Mc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ra.call(a,c)&&b.call(d,a[c],c,a);return a}function Nc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Vb(a){return function(b,d){a(d,b)}}function pe(){return++sb}function Wb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=
b[e];if(E(g)||A(g))for(var k=Object.keys(g),h=0,l=k.length;h<l;h++){var m=k[h],n=g[m];d&&E(n)?ea(n)?a[m]=new Date(n.valueOf()):ab(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):Xb(n)?a[m]=n.clone():(E(a[m])||(a[m]=I(n)?[]:{}),Wb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function P(a){return Wb(a,ya.call(arguments,1),!1)}function qe(a){return Wb(a,ya.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function Yb(a,b){return P(Object.create(a),b)}function C(){}
function bb(a){return a}function ka(a){return function(){return a}}function Zb(a){return A(a.toString)&&a.toString!==ha}function w(a){return"undefined"===typeof a}function t(a){return"undefined"!==typeof a}function E(a){return null!==a&&"object"===typeof a}function Mc(a){return null!==a&&"object"===typeof a&&!Oc(a)}function D(a){return"string"===typeof a}function Y(a){return"number"===typeof a}function ea(a){return"[object Date]"===ha.call(a)}function $b(a){switch(ha.call(a)){case "[object Error]":return!0;
case "[object Exception]":return!0;case "[object DOMException]":return!0;default:return a instanceof Error}}function A(a){return"function"===typeof a}function ab(a){return"[object RegExp]"===ha.call(a)}function $a(a){return a&&a.window===a}function cb(a){return a&&a.$evalAsync&&a.$watch}function Na(a){return"boolean"===typeof a}function re(a){return a&&Y(a.length)&&se.test(ha.call(a))}function Xb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function te(a){var b={};a=a.split(",");var d;for(d=
0;d<a.length;d++)b[a[d]]=!0;return b}function za(a){return N(a.nodeName||a[0]&&a[0].nodeName)}function db(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function pa(a,b,d){function c(a,b,c){c--;if(0>c)return"...";var d=b.$$hashKey,g;if(I(a)){g=0;for(var f=a.length;g<f;g++)b.push(e(a[g],c))}else if(Mc(a))for(g in a)b[g]=e(a[g],c);else if(a&&"function"===typeof a.hasOwnProperty)for(g in a)a.hasOwnProperty(g)&&(b[g]=e(a[g],c));else for(g in a)ra.call(a,g)&&(b[g]=e(a[g],c));d?b.$$hashKey=d:delete b.$$hashKey;
return b}function e(a,b){if(!E(a))return a;var d=g.indexOf(a);if(-1!==d)return k[d];if($a(a)||cb(a))throw qa("cpws");var d=!1,e=f(a);void 0===e&&(e=I(a)?[]:Object.create(Oc(a)),d=!0);g.push(a);k.push(e);return d?c(a,e,b):e}function f(a){switch(ha.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(A(a.cloneNode))return a.cloneNode(!0)}
var g=[],k=[];d=Ub(d)?d:NaN;if(b){if(re(b)||"[object ArrayBuffer]"===ha.call(b))throw qa("cpta");if(a===b)throw qa("cpi");I(b)?b.length=0:p(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);k.push(b);return c(a,b,d)}return e(a,d)}function ac(a,b){return a===b||a!==a&&b!==b}function sa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(I(a)){if(!I(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!sa(a[c],
b[c]))return!1;return!0}}else{if(ea(a))return ea(b)?ac(a.getTime(),b.getTime()):!1;if(ab(a))return ab(b)?a.toString()===b.toString():!1;if(cb(a)||cb(b)||$a(a)||$a(b)||I(b)||ea(b)||ab(b))return!1;d=S();for(c in a)if("$"!==c.charAt(0)&&!A(a[c])){if(!sa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&t(b[c])&&!A(b[c]))return!1;return!0}return!1}function eb(a,b,d){return a.concat(ya.call(b,d))}function Ra(a,b){var d=2<arguments.length?ya.call(arguments,2):[];return!A(b)||b instanceof
RegExp?b:d.length?function(){return arguments.length?b.apply(a,eb(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Pc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:$a(b)?d="$WINDOW":b&&u.document===b?d="$DOCUMENT":cb(b)&&(d="$SCOPE");return d}function fb(a,b){if(!w(a))return Y(b)||(b=b?2:null),JSON.stringify(a,Pc,b)}function Qc(a){return D(a)?JSON.parse(a):a}function Rc(a,b){a=a.replace(ue,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+
a)/6E4;return T(d)?b:d}function bc(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Rc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function Aa(a){a=B(a).clone().empty();var b=B("<div>").append(a).html();try{return a[0].nodeType===Oa?N(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+N(b)})}catch(d){return N(b)}}function Sc(a){try{return decodeURIComponent(a)}catch(b){}}function Tc(a){var b={};p((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,
"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Sc(e),t(e)&&(f=t(f)?Sc(f):!0,ra.call(b,e)?I(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function cc(a){var b=[];p(a,function(a,c){I(a)?p(a,function(a){b.push(ia(c,!0)+(!0===a?"":"="+ia(a,!0)))}):b.push(ia(c,!0)+(!0===a?"":"="+ia(a,!0)))});return b.length?b.join("&"):""}function gb(a){return ia(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ia(a,b){return encodeURIComponent(a).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ve(a,b){var d,c,e=Ha.length;for(c=0;c<e;++c)if(d=Ha[c]+b,D(d=a.getAttribute(d)))return d;return null}function we(a,b){var d,c,e={};p(Ha,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});p(Ha,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(xe?(e.strictDi=null!==ve(d,"strict-di"),
b(d,c?[c]:[],e)):u.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Uc(a,b,d){E(d)||(d={});d=P({strictDi:!1},d);var c=function(){a=B(a);if(a.injector()){var c=a[0]===u.document?"document":Aa(a);throw qa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
b.unshift("ng");c=hb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;u&&e.test(u.name)&&(d.debugInfoEnabled=!0,u.name=u.name.replace(e,""));if(u&&!f.test(u.name))return c();u.name=u.name.replace(f,"");$.resumeBootstrap=function(a){p(a,function(a){b.push(a)});return c()};A($.resumeDeferredBootstrap)&&$.resumeDeferredBootstrap()}function ye(){u.name=
"NG_ENABLE_DEBUG_INFO!"+u.name;u.location.reload()}function ze(a){a=$.element(a).injector();if(!a)throw qa("test");return a.get("$$testability")}function Vc(a,b){b=b||"_";return a.replace(Ae,function(a,c){return(c?b:"")+a.toLowerCase()})}function Be(){var a;if(!Wc){var b=tb();(la=w(b)?u.jQuery:b?u[b]:void 0)&&la.fn.on?(B=la,P(la.fn,{scope:Sa.scope,isolateScope:Sa.isolateScope,controller:Sa.controller,injector:Sa.injector,inheritedData:Sa.inheritedData}),a=la.cleanData,la.cleanData=function(b){for(var c,
e=0,f;null!=(f=b[e]);e++)(c=la._data(f,"events"))&&c.$destroy&&la(f).triggerHandler("$destroy");a(b)}):B=U;$.element=B;Wc=!0}}function ib(a,b,d){if(!a)throw qa("areq",b||"?",d||"required");return a}function ub(a,b,d){d&&I(a)&&(a=a[a.length-1]);ib(A(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ia(a,b){if("hasOwnProperty"===a)throw qa("badname",b);}function Xc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=
b[g],a&&(a=(e=a)[c]);return!d&&A(a)?Ra(e,a):a}function vb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=B(ya.call(a,0,e))),c.push(b);return c||a}function S(){return Object.create(null)}function dc(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!Zb(a)||I(a)||ea(a)?fb(a):a.toString()}return a}function Ce(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=M("$injector"),c=M("ng");a=b(a,"angular",Object);a.$$minErr=
a.$$minErr||M;return b(a,"module",function(){var a={};return function(f,g,k){var h={};if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,g){g||(g=e);return function(){g[d||"push"]([b,c,arguments]);return p}}function b(a,c,d){d||(d=e);return function(b,e){e&&A(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return p}}if(!g)throw d("nomod",f);var e=[],q=[],G=[],L=a("$injector","invoke","push",q),p={_invokeQueue:e,_configBlocks:q,
_runBlocks:G,info:function(a){if(t(a)){if(!E(a))throw c("aobj","value");h=a;return this}return h},requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",q),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider",
"component"),config:L,run:function(a){G.push(a);return this}};k&&L(k);return p})}})}function ja(a,b){if(I(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(E(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function De(a,b){var d=[];Ub(b)&&(a=$.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Pc(a,b);if(E(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Ee(a){P(a,{errorHandlingConfig:oe,bootstrap:Uc,copy:pa,extend:P,merge:qe,equals:sa,
element:B,forEach:p,injector:hb,noop:C,bind:Ra,toJson:fb,fromJson:Qc,identity:bb,isUndefined:w,isDefined:t,isString:D,isFunction:A,isObject:E,isNumber:Y,isElement:Xb,isArray:I,version:Fe,isDate:ea,lowercase:N,uppercase:wb,callbacks:{$$counter:0},getTestability:ze,reloadWithDebugInfo:ye,$$minErr:M,$$csp:Ja,$$encodeUriSegment:gb,$$encodeUriQuery:ia,$$stringify:dc});ec=Ce(u);ec("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Ge});a.provider("$compile",Yc).directive({a:He,input:Zc,
textarea:Zc,form:Ie,script:Je,select:Ke,option:Le,ngBind:Me,ngBindHtml:Ne,ngBindTemplate:Oe,ngClass:Pe,ngClassEven:Qe,ngClassOdd:Re,ngCloak:Se,ngController:Te,ngForm:Ue,ngHide:Ve,ngIf:We,ngInclude:Xe,ngInit:Ye,ngNonBindable:Ze,ngPluralize:$e,ngRepeat:af,ngShow:bf,ngStyle:cf,ngSwitch:df,ngSwitchWhen:ef,ngSwitchDefault:ff,ngOptions:gf,ngTransclude:hf,ngModel:jf,ngList:kf,ngChange:lf,pattern:$c,ngPattern:$c,required:ad,ngRequired:ad,minlength:bd,ngMinlength:bd,maxlength:cd,ngMaxlength:cd,ngValue:mf,
ngModelOptions:nf}).directive({ngInclude:of}).directive(xb).directive(dd);a.provider({$anchorScroll:pf,$animate:qf,$animateCss:rf,$$animateJs:sf,$$animateQueue:tf,$$AnimateRunner:uf,$$animateAsyncRun:vf,$browser:wf,$cacheFactory:xf,$controller:yf,$document:zf,$$isDocumentHidden:Af,$exceptionHandler:Bf,$filter:ed,$$forceReflow:Cf,$interpolate:Df,$interval:Ef,$http:Ff,$httpParamSerializer:Gf,$httpParamSerializerJQLike:Hf,$httpBackend:If,$xhrFactory:Jf,$jsonpCallbacks:Kf,$location:Lf,$log:Mf,$parse:Nf,
$rootScope:Of,$q:Pf,$$q:Qf,$sce:Rf,$sceDelegate:Sf,$sniffer:Tf,$templateCache:Uf,$templateRequest:Vf,$$testability:Wf,$timeout:Xf,$window:Yf,$$rAF:Zf,$$jqLite:$f,$$Map:ag,$$cookieReader:bg})}]).info({angularVersion:"1.6.6"})}function jb(a,b){return b.toUpperCase()}function yb(a){return a.replace(cg,jb)}function fc(a){a=a.nodeType;return 1===a||!a||9===a}function fd(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(gc.test(a)){d=e.appendChild(b.createElement("div"));c=(dg.exec(a)||["",""])[1].toLowerCase();
c=aa[c]||aa._default;d.innerHTML=c[1]+a.replace(eg,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=eb(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";p(f,function(a){e.appendChild(a)});return e}function U(a){if(a instanceof U)return a;var b;D(a)&&(a=Q(a),b=!0);if(!(this instanceof U)){if(b&&"<"!==a.charAt(0))throw hc("nosel");return new U(a)}if(b){b=u.document;var d;a=(d=fg.exec(a))?[b.createElement(d[1])]:(d=fd(a,b))?d.childNodes:
[];ic(this,a)}else A(a)?gd(a):ic(this,a)}function jc(a){return a.cloneNode(!0)}function zb(a,b){!b&&fc(a)&&B.cleanData([a]);a.querySelectorAll&&B.cleanData(a.querySelectorAll("*"))}function hd(a,b,d,c){if(t(c))throw hc("offargs");var e=(c=Ab(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];t(d)&&db(c||[],d);t(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};p(b.split(" "),function(a){g(a);Bb[a]&&g(Bb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b]}
function kc(a,b){var d=a.ng339,c=d&&kb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),hd(a)),delete kb[d],a.ng339=void 0))}function Ab(a,b){var d=a.ng339,d=d&&kb[d];b&&!d&&(a.ng339=d=++gg,d=kb[d]={events:{},data:{},handle:void 0});return d}function lc(a,b,d){if(fc(a)){var c,e=t(d),f=!e&&b&&!E(b),g=!b;a=(a=Ab(a,!f))&&a.data;if(e)a[yb(b)]=d;else{if(g)return a;if(f)return a&&a[yb(b)];for(c in b)a[yb(c)]=b[c]}}}function Cb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||
"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Db(a,b){b&&a.setAttribute&&p(b.split(" "),function(b){a.setAttribute("class",Q((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+Q(b)+" "," ")))})}function Eb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");p(b.split(" "),function(a){a=Q(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",Q(d))}}function ic(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=
b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function id(a,b){return Fb(a,"$"+(b||"ngController")+"Controller")}function Fb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=I(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(t(d=B.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function jd(a){for(zb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Gb(a,b){b||zb(a);var d=a.parentNode;d&&d.removeChild(a)}function hg(a,
b){b=b||u;if("complete"===b.document.readyState)b.setTimeout(a);else B(b).on("load",a)}function gd(a){function b(){u.document.removeEventListener("DOMContentLoaded",b);u.removeEventListener("load",b);a()}"complete"===u.document.readyState?u.setTimeout(a):(u.document.addEventListener("DOMContentLoaded",b),u.addEventListener("load",b))}function kd(a,b){var d=Hb[b.toLowerCase()];return d&&ld[za(a)]&&d}function ig(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
b[d||c.type],g=f?f.length:0;if(g){if(w(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var h=f.specialHandlerWrapper||jg;1<g&&(f=ja(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||h(a,c,f[l])}};d.elem=a;return d}function jg(a,b,d){d.call(a,b)}function kg(a,b,d){var c=
b.relatedTarget;c&&(c===a||lg.call(a,c))||d.call(a,b)}function $f(){this.$get=function(){return P(U,{hasClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Eb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)}})}}function Pa(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||pe)():d+":"+a}function md(){this._keys=[];this._values=
[];this._lastKey=NaN;this._lastIndex=-1}function nd(a){a=Function.prototype.toString.call(a).replace(mg,"");return a.match(ng)||a.match(og)}function pg(a){return(a=nd(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function hb(a,b){function d(a){return function(b,c){if(E(b))p(b,Vb(a));else return a(b,c)}}function c(a,b){Ia(a,"service");if(A(b)||I(b))b=q.instantiate(b);if(!b.$get)throw Ba("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=z.invoke(b,this);if(w(c))throw Ba("undef",
a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){ib(w(a)||I(a),"modulesToLoad","not an array");var b=[],c;p(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],g=q.get(e[0]);g[e[1]].apply(g,e[2])}}if(!m.get(a)){m.set(a,!0);try{D(a)?(c=ec(a),z.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):A(a)?b.push(q.invoke(a)):I(a)?b.push(q.invoke(a)):ub(a,"module")}catch(e){throw I(a)&&(a=a[a.length-1]),e.message&&
e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ba("modulerr",a,e.stack||e.message||e);}}});return b}function k(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===h)throw Ba("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=h,a[b]=c(b,e),a[b]}catch(g){throw a[b]===h&&delete a[b],g;}finally{l.shift()}}function e(a,c,g){var f=[];a=hb.$$annotate(a,b,g);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ba("itkn",l);f.push(c&&c.hasOwnProperty(l)?
c[l]:d(l,g))}return f}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);I(a)&&(a=a[a.length-1]);d=a;if(Ca||"function"!==typeof d)d=!1;else{var g=d.$$ngIsClass;Na(g)||(g=d.$$ngIsClass=/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)));d=g}return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=I(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,
annotate:hb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var h={},l=[],m=new Ib,n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ka(b),!1)}),constant:d(function(a,b){Ia(a,"constant");n[a]=b;G[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=z.invoke(d,c);return z.invoke(b,null,{$delegate:a})}}}},
q=n.$injector=k(n,function(a,b){$.isString(b)&&l.push(b);throw Ba("unpr",l.join(" <- "));}),G={},L=k(G,function(a,b){var c=q.get(a+"Provider",b);return z.invoke(c.$get,c,void 0,a)}),z=L;n.$injectorProvider={$get:ka(L)};z.modules=q.modules=S();var v=g(a),z=L.get("$injector");z.strictDi=b;p(v,function(a){a&&z.invoke(a)});return z}function pf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,
function(a){if("a"===za(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;A(c)?c=c():Xb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Y(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=D(a)?a:Y(a)?a.toString():d.hash();var b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=b.document;a&&c.$watch(function(){return d.hash()},
function(a,b){a===b&&""===a||hg(function(){c.$evalAsync(g)})});return g}]}function lb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;I(a)&&(a=a.join(" "));I(b)&&(b=b.join(" "));return a+" "+b}function qg(a){D(a)&&(a=a.split(" "));var b=S();p(a,function(a){a.length&&(b[a]=!0)});return b}function Ka(a){return E(a)?a:{}}function rg(a,b,d,c){function e(a){try{a.apply(null,ya.call(arguments,1))}finally{if(L--,0===L)for(;z.length;)try{z.pop()()}catch(b){d.error(b)}}}function f(){y=null;k()}function g(){v=
J();v=w(v)?null:v;sa(v,K)&&(v=K);s=K=v}function k(){var a=s;g();if(Ta!==h.url()||a!==v)Ta=h.url(),s=v,p(H,function(a){a(h.url(),v)})}var h=this,l=a.location,m=a.history,n=a.setTimeout,q=a.clearTimeout,G={};h.isMock=!1;var L=0,z=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){L++};h.notifyWhenNoOutstandingRequests=function(a){0===L?a():z.push(a)};var v,s,Ta=l.href,ma=b.find("base"),y=null,J=c.history?function(){try{return m.state}catch(a){}}:C;g();h.url=function(b,d,e){w(e)&&
(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=s===e;if(Ta===b&&(!c.history||f))return h;var k=Ta&&La(Ta)===La(b);Ta=b;s=e;!c.history||k&&f?(k||(y=b),d?l.replace(b):k?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(y=b)):(m[d?"replaceState":"pushState"](e,"",b),g());y&&(y=b);return h}return y||l.href.replace(/%27/g,"'")};h.state=function(){return v};var H=[],ta=!1,K=null;h.onUrlChange=function(b){if(!ta){if(c.history)B(a).on("popstate",
f);B(a).on("hashchange",f);ta=!0}H.push(b);return b};h.$$applicationDestroyed=function(){B(a).off("hashchange popstate",f)};h.$$checkUrlChange=k;h.baseHref=function(){var a=ma.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};h.defer=function(a,b){var c;L++;c=n(function(){delete G[c];e(a)},b||0);G[c]=!0;return c};h.defer.cancel=function(a){return G[a]?(delete G[a],q(a),e(C),!0):!1}}function wf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new rg(a,c,b,
d)}]}function xf(){this.$get=function(){function a(a,c){function e(a){a!==n&&(q?q===a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw M("$cacheFactory")("iid",a);var g=0,k=P({},c,{id:a}),h=S(),l=c&&c.capacity||Number.MAX_VALUE,m=S(),n=null,q=null;return b[a]={put:function(a,b){if(!w(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in h||g++;h[a]=b;g>l&&this.remove(q.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=
m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===n&&(n=b.p);b===q&&(q=b.n);f(b.n,b.p);delete m[a]}a in h&&(delete h[a],g--)},removeAll:function(){h=S();g=0;m=S();n=q=null},destroy:function(){m=k=h=null;delete b[a]},info:function(){return P({},k,{size:g})}}}var b={};a.info=function(){var a={};p(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Uf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}
function Yc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,e=S();p(a,function(a,g){if(a in n)e[g]=n[a];else{var f=a.match(d);if(!f)throw ba("iscp",b,g,a,c?"controller bindings definition":"isolate scope definition");e[g]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||g};f[4]&&(n[a]=e[g])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==N(b))throw ba("baddir",a);if(a!==a.trim())throw ba("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;
!I(b)&&E(b)&&p(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,k=/(([\w-]+)(?::([^;]+))?;?)/,h=te("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=S();this.directive=function ma(b,d){ib(b,"name");Ia(b,"directive");D(b)?(c(b),ib(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];p(f[b],function(g,
f){try{var h=a.invoke(g);A(h)?h={compile:ka(h)}:!h.compile&&h.link&&(h.compile=ka(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!D(l)||!/[EACM]/.test(l)))throw ba("badrestrict",l,b);k.restrict=l||"EA";h.$$moduleName=g.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):p(b,Vb(ma));return this};this.component=function y(a,b){function c(a){function e(b){return A(b)||I(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:
b}var g=b.template||b.templateUrl?b.template:"",f={controller:d,controllerAs:sg(b.controller)||b.controllerAs||"$ctrl",template:e(g),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};p(b,function(a,b){"$"===b.charAt(0)&&(f[b]=a)});return f}if(!D(a))return p(a,Vb(Ra(this,y))),this;var d=b.controller||function(){};p(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,A(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,
c)};this.aHrefSanitizationWhitelist=function(a){return t(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return t(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var q=!0;this.debugInfoEnabled=function(a){return t(a)?(q=a,this):q};var G=!1;this.preAssignBindingsEnabled=function(a){return t(a)?(G=a,this):G};var L=!1;this.strictComponentBindingsEnabled=function(a){return t(a)?(L=a,this):L};var z=10;this.onChangesTtl=
function(a){return arguments.length?(z=a,this):z};var v=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(v=a,this):v};var s=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(s=a,this):s};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,F,R,x,W,r){function O(){try{if(!--Fa)throw ga=void 0,ba("infchng",z);R.$apply(function(){for(var a=[],b=0,
c=ga.length;b<c;++b)try{ga[b]()}catch(d){a.push(d)}ga=void 0;if(a.length)throw a;})}finally{Fa++}}function mc(a,b){if(b){var c=Object.keys(b),d,e,g;d=0;for(e=c.length;d<e;d++)g=c[d],this[g]=b[g]}else this.$attr={};this.$$element=a}function Ua(a,b,c){Ba.innerHTML="<span "+b+">";b=Ba.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function na(a,b){try{a.addClass(b)}catch(c){}}function ca(a,b,c,d,e){a instanceof B||(a=B(a));var g=Va(a,b,a,c,d,e);ca.$$addScopeClass(a);
var f=null;return function(b,c,d){if(!a)throw ba("multilink");ib(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);f||(f=(d=d&&d[0])?"foreignobject"!==za(d)&&ha.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==f?B(ja(f,B("<div>").append(a).html())):c?Sa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);ca.$$addScopeInfo(d,b);c&&
c(d,b);g&&g(b,d,d,h);c||(a=g=null);return d}}function Va(a,b,c,d,e,g){function f(a,c,d,e){var g,k,l,m,q,n,H;if(s)for(H=Array(c.length),m=0;m<h.length;m+=3)g=h[m],H[g]=c[g];else H=c;m=0;for(q=h.length;m<q;)k=H[h[m++]],c=h[m++],g=h[m++],c?(c.scope?(l=a.$new(),ca.$$addScopeInfo(B(k),l)):l=a,n=c.transcludeOnThisElement?Ma(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?Ma(a,b):null,c(g,l,k,d,n)):g&&g(a,k.childNodes,void 0,e)}for(var h=[],k=I(a)||a instanceof B,l,m,q,n,s,H=0;H<a.length;H++){l=new mc;
11===Ca&&Da(a,H,k);m=M(a[H],[],l,0===H?d:void 0,e);(g=m.length?Y(m,a[H],l,b,c,null,[],[],g):null)&&g.scope&&ca.$$addScopeClass(l.$$element);l=g&&g.terminal||!(q=a[H].childNodes)||!q.length?null:Va(q,g?(g.transcludeOnThisElement||!g.templateOnThisElement)&&g.transclude:b);if(g||l)h.push(H,g,l),n=!0,s=s||g;g=null}return n?f:null}function Da(a,b,c){var d=a[b],e=d.parentNode,g;if(d.nodeType===Oa)for(;;){g=e?d.nextSibling:a[b+1];if(!g||g.nodeType!==Oa)break;d.nodeValue+=g.nodeValue;g.parentNode&&g.parentNode.removeChild(g);
c&&g===a[b+1]&&a.splice(b+1,1)}}function Ma(a,b,c){function d(e,g,f,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,g,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:h})}var e=d.$$slots=S(),g;for(g in b.$$slots)e[g]=b.$$slots[g]?Ma(a,b.$$slots[g],c):null;return d}function M(a,b,c,d,e){var g=c.$attr,f;switch(a.nodeType){case 1:f=za(a);T(b,Ea(f),"E",d,e);for(var h,l,m,q,n=a.attributes,s=0,H=n&&n.length;s<H;s++){var J=!1,G=!1;h=n[s];l=h.name;m=h.value;h=Ea(l);(q=Pa.test(h))&&
(l=l.replace(od,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(h=h.match(Qa))&&$(h[1])&&(J=l,G=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));h=Ea(l.toLowerCase());g[h]=l;if(q||!c.hasOwnProperty(h))c[h]=m,kd(a,h)&&(c[h]=!0);xa(a,b,m,h,q);T(b,h,"A",d,e,J,G)}"input"===f&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!La)break;g=a.className;E(g)&&(g=g.animVal);if(D(g)&&""!==g)for(;a=k.exec(g);)h=Ea(a[2]),T(b,h,"C",d,e)&&(c[h]=Q(a[3])),g=g.substr(a.index+
a[0].length);break;case Oa:oa(b,a.nodeValue);break;case 8:if(!Ka)break;nc(a,b,c,d,e)}b.sort(ka);return b}function nc(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Ea(f[1]);T(b,h,"M",d,e)&&(c[h]=Q(f[2]))}}catch(k){}}function pd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ba("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function U(a,b,c){return function(d,e,g,f,h){e=
pd(e[0],b,c);return a(d,e,g,f,h)}}function V(a,b,c,d,e,g){var f;return a?ca(b,c,d,e,g):function(){f||(f=ca(b,c,d,e,g),b=c=g=null);return f.apply(this,arguments)}}function Y(a,b,d,e,g,f,h,k,l){function m(a,b,c,d){if(a){c&&(a=U(a,c,d));a.require=x.require;a.directiveName=W;if(K===x||x.$$isolateScope)a=ua(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=U(b,c,d));b.require=x.require;b.directiveName=W;if(K===x||x.$$isolateScope)b=ua(b,{isolateScope:!0});k.push(b)}}function q(a,e,g,f,l){function m(a,b,c,d){var e;
cb(a)||(d=c,c=b,b=a,a=void 0);ta&&(e=L);c||(c=ta?fa.parent():fa);if(d){var g=l.$$slots[d];if(g)return g(a,b,e,c,O);if(w(g))throw ba("noslot",d,Aa(fa));}else return l(a,b,e,c,O)}var n,x,F,y,R,L,z,fa;b===g?(f=d,fa=d.$$element):(fa=B(g),f=new mc(fa,d));R=e;K?y=e.$new(!0):s&&(R=e.$parent);l&&(z=m,z.$$boundTransclude=l,z.isSlotFilled=function(a){return!!l.$$slots[a]});J&&(L=da(fa,f,z,J,y,e,K));K&&(ca.$$addScopeInfo(fa,y,!0,!(v&&(v===K||v===K.$$originalDirective))),ca.$$addScopeClass(fa,!0),y.$$isolateBindings=
K.$$isolateBindings,x=qa(e,f,y,y.$$isolateBindings,K),x.removeWatches&&y.$on("$destroy",x.removeWatches));for(n in L){x=J[n];F=L[n];var W=x.$$bindings.bindToController;if(G){F.bindingInfo=W?qa(R,f,F.instance,W,x):{};var r=F();r!==F.instance&&(F.instance=r,fa.data("$"+x.name+"Controller",r),F.bindingInfo.removeWatches&&F.bindingInfo.removeWatches(),F.bindingInfo=qa(R,f,F.instance,W,x))}else F.instance=F(),fa.data("$"+x.name+"Controller",F.instance),F.bindingInfo=qa(R,f,F.instance,W,x)}p(J,function(a,
b){var c=a.require;a.bindToController&&!I(c)&&E(c)&&P(L[b].instance,X(b,c,fa,L))});p(L,function(a){var b=a.instance;if(A(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(A(b.$onInit))try{b.$onInit()}catch(e){c(e)}A(b.$doCheck)&&(R.$watch(function(){b.$doCheck()}),b.$doCheck());A(b.$onDestroy)&&R.$on("$destroy",function(){b.$onDestroy()})});n=0;for(x=h.length;n<x;n++)F=h[n],wa(F,F.isolateScope?y:e,fa,f,F.require&&X(F.directiveName,F.require,fa,L),z);var O=e;K&&(K.template||
null===K.templateUrl)&&(O=y);a&&a(O,g.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)F=k[n],wa(F,F.isolateScope?y:e,fa,f,F.require&&X(F.directiveName,F.require,fa,L),z);p(L,function(a){a=a.instance;A(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,s=l.newScopeDirective,J=l.controllerDirectives,K=l.newIsolateScopeDirective,v=l.templateDirective,y=l.nonTlbTranscludeDirective,R=!1,L=!1,ta=l.hasElementTranscludeDirective,F=d.$$element=B(b),x,W,z,r=e,O,t=!1,Jb=!1,u,Da=0,C=a.length;Da<
C;Da++){x=a[Da];var Ua=x.$$start,D=x.$$end;Ua&&(F=pd(b,Ua,D));z=void 0;if(n>x.priority)break;if(u=x.scope)x.templateUrl||(E(u)?(aa("new/isolated scope",K||s,x,F),K=x):aa("new/isolated scope",K,x,F)),s=s||x;W=x.name;if(!t&&(x.replace&&(x.templateUrl||x.template)||x.transclude&&!x.$$tlb)){for(u=Da+1;t=a[u++];)if(t.transclude&&!t.$$tlb||t.replace&&(t.templateUrl||t.template)){Jb=!0;break}t=!0}!x.templateUrl&&x.controller&&(J=J||S(),aa("'"+W+"' controller",J[W],x,F),J[W]=x);if(u=x.transclude)if(R=!0,
x.$$tlb||(aa("transclusion",y,x,F),y=x),"element"===u)ta=!0,n=x.priority,z=F,F=d.$$element=B(ca.$$createComment(W,d[W])),b=F[0],la(g,ya.call(z,0),b),z[0].$$parentNode=z[0].parentNode,r=V(Jb,z,e,n,f&&f.name,{nonTlbTranscludeDirective:y});else{var na=S();if(E(u)){z=[];var Va=S(),Ma=S();p(u,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Va[a]=b;na[b]=null;Ma[b]=c});p(F.contents(),function(a){var b=Va[Ea(za(a))];b?(Ma[b]=!0,na[b]=na[b]||[],na[b].push(a)):z.push(a)});p(Ma,function(a,b){if(!a)throw ba("reqslot",
b);});for(var N in na)na[N]&&(na[N]=V(Jb,na[N],e))}else z=B(jc(b)).contents();F.empty();r=V(Jb,z,e,void 0,void 0,{needsNewScope:x.$$isolateScope||x.$$newScope});r.$$slots=na}if(x.template)if(L=!0,aa("template",v,x,F),v=x,u=A(x.template)?x.template(F,d):x.template,u=Ia(u),x.replace){f=x;z=gc.test(u)?qd(ja(x.templateNamespace,Q(u))):[];b=z[0];if(1!==z.length||1!==b.nodeType)throw ba("tplrt",W,"");la(g,F,b);C={$attr:{}};u=M(b,[],C);var nc=a.splice(Da+1,a.length-(Da+1));(K||s)&&Z(u,K,s);a=a.concat(u).concat(nc);
ea(d,C);C=a.length}else F.html(u);if(x.templateUrl)L=!0,aa("template",v,x,F),v=x,x.replace&&(f=x),q=ia(a.splice(Da,a.length-Da),F,d,g,R&&r,h,k,{controllerDirectives:J,newScopeDirective:s!==x&&s,newIsolateScopeDirective:K,templateDirective:v,nonTlbTranscludeDirective:y}),C=a.length;else if(x.compile)try{O=x.compile(F,d,r);var T=x.$$originalDirective||x;A(O)?m(null,Ra(T,O),Ua,D):O&&m(Ra(T,O.pre),Ra(T,O.post),Ua,D)}catch($){c($,Aa(F))}x.terminal&&(q.terminal=!0,n=Math.max(n,x.priority))}q.scope=s&&!0===
s.scope;q.transcludeOnThisElement=R;q.templateOnThisElement=L;q.transclude=r;l.hasElementTranscludeDirective=ta;return q}function X(a,b,c,d){var e;if(D(b)){var g=b.match(l);b=b.substring(g[0].length);var f=g[1]||g[3],g="?"===g[2];"^^"===f?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=f?c.inheritedData(h):c.data(h)}if(!e&&!g)throw ba("ctreq",b,a);}else if(I(b))for(e=[],f=0,g=b.length;f<g;f++)e[f]=X(a,b[f],c,d);else E(b)&&(e={},p(b,function(b,g){e[g]=X(a,b,c,d)}));return e||
null}function da(a,b,c,d,e,g,f){var h=S(),k;for(k in d){var l=d[k],m={$scope:l===f||l.$$isolateScope?e:g,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"===n&&(n=b[l.name]);m=F(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function Z(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Yb(a[d],{$$isolateScope:b,$$newScope:c})}function T(b,c,e,g,h,k,l){if(c===h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var n=0,q=h.length;n<q;n++)if(c=
h[n],(w(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=Yb(c,{$$start:k,$$end:l}));if(!c.$$bindings){var s=m=c,H=c.name,J={isolateScope:null,bindToController:null};E(s.scope)&&(!0===s.bindToController?(J.bindToController=d(s.scope,H,!0),J.isolateScope={}):J.isolateScope=d(s.scope,H,!1));E(s.bindToController)&&(J.bindToController=d(s.bindToController,H,!0));if(J.bindToController&&!s.controller)throw ba("noctrl",H);m=m.$$bindings=J;E(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);
m=c}}return m}function $(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function ea(a,b){var c=b.$attr,d=a.$attr;p(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});p(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ia(a,b,d,g,f,h,k,l){var m=[],n,q,s=b[0],J=a.shift(),x=Yb(J,{templateUrl:null,
transclude:null,replace:null,$$originalDirective:J}),G=A(J.templateUrl)?J.templateUrl(b,d):J.templateUrl,F=J.templateNamespace;b.empty();e(G).then(function(c){var e,H;c=Ia(c);if(J.replace){c=gc.test(c)?qd(ja(F,Q(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw ba("tplrt",J.name,G);c={$attr:{}};la(g,b,e);var K=M(e,[],c);E(J.scope)&&Z(K,!0);a=K.concat(a);ea(d,c)}else e=s,b.html(c);a.unshift(x);n=Y(a,e,d,f,b,J,h,k,l);p(g,function(a,c){a===e&&(g[c]=b[0])});for(q=Va(b[0].childNodes,f);m.length;){c=
m.shift();H=m.shift();var v=m.shift(),y=m.shift(),K=b[0];if(!c.$$destroyed){if(H!==s){var L=H.className;l.hasElementTranscludeDirective&&J.replace||(K=jc(e));la(v,B(H),K);na(B(K),L)}H=n.transcludeOnThisElement?Ma(c,n.transclude,y):y;n(q,c,K,g,H)}}m=null}).catch(function(a){$b(a)&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(n.transcludeOnThisElement&&(a=Ma(b,n.transclude,e)),n(q,b,c,d,a)))}}function ka(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<
b.name?-1:1:a.index-b.index}function aa(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ba("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,Aa(d));}function oa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ca.$$addBindingClass(a);return function(a,c){var e=c.parent();b||ca.$$addBindingClass(e);ca.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ja(a,b){a=N(a||"html");switch(a){case "svg":case "math":var c=
u.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function va(a,b){if("srcdoc"===b)return x.HTML;var c=za(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return x.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b||"link"===c&&"href"===b)return x.RESOURCE_URL}function xa(a,c,d,e,g){var f=va(a,e),k=h[e]||g,l=b(d,!g,f,k);if(l){if("multiple"===e&&"select"===za(a))throw ba("selmulti",
Aa(a));if(m.test(e))throw ba("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers=S());var h=g[e];h!==d&&(l=h&&b(h,!0,f,k),d=h);l&&(g[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function la(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,h;if(a)for(f=0,h=a.length;f<h;f++)if(a[f]===d){a[f++]=c;h=f+e-1;for(var k=a.length;f<
k;f++,h++)h<k?a[f]=a[h]:delete a[f];a.length-=e-1;a.context===d&&(a.context=c);break}g&&g.replaceChild(c,d);a=u.document.createDocumentFragment();for(f=0;f<e;f++)a.appendChild(b[f]);B.hasData(d)&&(B.data(c,B.data(d)),B(d).off("$destroy"));B.cleanData(a.querySelectorAll("*"));for(f=1;f<e;f++)delete b[f];b[0]=c;b.length=1}function ua(a,b){return P(function(){return a.apply(null,arguments)},a,b)}function wa(a,b,d,e,g,f){try{a(b,d,e,g,f)}catch(h){c(h,Aa(d))}}function pa(a,b){if(L)throw ba("missingattr",
a,b);}function qa(a,c,d,e,g){function f(b,c,e){A(d.$onChanges)&&!ac(c,e)&&(ga||(a.$$postDigest(O),ga=[]),m||(m={},ga.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Kb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;p(e,function(e,h){var m=e.attrName,q=e.optional,s,H,x,G;switch(e.mode){case "@":q||ra.call(c,m)||(pa(m,g.name),d[h]=c[m]=void 0);q=c.$observe(m,function(a){if(D(a)||Na(a))f(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;s=c[m];D(s)?d[h]=b(s)(a):Na(s)&&(d[h]=s);l[h]=new Kb(oc,
d[h]);k.push(q);break;case "=":if(!ra.call(c,m)){if(q)break;pa(m,g.name);c[m]=void 0}if(q&&!c[m])break;H=n(c[m]);G=H.literal?sa:ac;x=H.assign||function(){s=d[h]=H(a);throw ba("nonassign",c[m],m,g.name);};s=d[h]=H(a);q=function(b){G(b,d[h])||(G(b,s)?x(a,b=d[h]):d[h]=b);return s=b};q.$stateful=!0;q=e.collection?a.$watchCollection(c[m],q):a.$watch(n(c[m],q),null,H.literal);k.push(q);break;case "<":if(!ra.call(c,m)){if(q)break;pa(m,g.name);c[m]=void 0}if(q&&!c[m])break;H=n(c[m]);var F=H.literal,v=d[h]=
H(a);l[h]=new Kb(oc,d[h]);q=a.$watch(H,function(a,b){if(b===a){if(b===v||F&&sa(b,v))return;b=v}f(h,a,b);d[h]=a},F);k.push(q);break;case "&":q||ra.call(c,m)||pa(m,g.name);H=c.hasOwnProperty(m)?n(c[m]):C;if(H===C&&q)break;d[h]=function(b){return H(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ja=/^\w/,Ba=u.document.createElement("div"),Ka=v,La=s,Fa=z,ga;mc.prototype={$normalize:Ea,$addClass:function(a){a&&0<a.length&&W.addClass(this.$$element,
a)},$removeClass:function(a){a&&0<a.length&&W.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=rd(a,b);c&&c.length&&W.addClass(this.$$element,c);(c=rd(b,a))&&c.length&&W.removeClass(this.$$element,c)},$set:function(a,b,d,e){var g=kd(this.$$element[0],a),f=sd[a],h=a;g?(this.$$element.prop(a,b),e=g):f&&(this[f]=b,h=f);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Vc(a,"-"));g=za(this.$$element);if("a"===g&&("href"===a||"xlinkHref"===a)||"img"===g&&"src"===a)this[a]=
b=r(b,"src"===a);else if("img"===g&&"srcset"===a&&t(b)){for(var g="",f=Q(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(f)?k:/(,)/,f=f.split(k),k=Math.floor(f.length/2),l=0;l<k;l++)var m=2*l,g=g+r(Q(f[m]),!0),g=g+(" "+Q(f[m+1]));f=Q(f[2*l]).split(/\s/);g+=r(Q(f[0]),!0);2===f.length&&(g+=" "+Q(f[1]));this[a]=b=g}!1!==d&&(null===b||w(b)?this.$$element.removeAttr(e):Ja.test(e)?this.$$element.attr(e,b):Ua(this.$$element[0],e,b));(a=this.$$observers)&&p(a[h],function(a){try{a(b)}catch(d){c(d)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=S()),e=d[a]||(d[a]=[]);e.push(b);R.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||w(c[a])||b(c[a])});return function(){db(e,b)}}};var Ga=b.startSymbol(),Ha=b.endSymbol(),Ia="{{"===Ga&&"}}"===Ha?bb:function(a){return a.replace(/\{\{/g,Ga).replace(/}}/g,Ha)},Pa=/^ngAttr[A-Z]/,Qa=/^(.+)Start$/;ca.$$addBindingInfo=q?function(a,b){var c=a.data("$binding")||[];I(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:C;ca.$$addBindingClass=
q?function(a){na(a,"ng-binding")}:C;ca.$$addScopeInfo=q?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:C;ca.$$addScopeClass=q?function(a,b){na(a,b?"ng-isolate-scope":"ng-scope")}:C;ca.$$createComment=function(a,b){var c="";q&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return u.document.createComment(c)};return ca}]}function Kb(a,b){this.previousValue=a;this.currentValue=b}function Ea(a){return a.replace(od,"").replace(tg,jb)}function rd(a,b){var d="",c=a.split(/\s+/),
e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],k=0;k<e.length;k++)if(g===e[k])continue a;d+=(0<d.length?" ":"")+g}return d}function qd(a){a=B(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Oa&&""===d.nodeValue.trim())&&ug.call(a,b,1)}return a}function sg(a,b){if(b&&D(b))return b;if(D(a)){var d=td.exec(a);if(d)return d[3]}}function yf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Ia(b,"controller");E(b)?
P(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!E(a.$scope))throw M("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,k,h){var l,m,n;k=!0===k;h&&D(h)&&(n=h);if(D(f)){h=f.match(td);if(!h)throw ud("ctrlfmt",f);m=h[1];n=n||h[3];f=a.hasOwnProperty(m)?a[m]:Xc(g.$scope,m,!0)||(b?Xc(c,m,!0):void 0);if(!f)throw ud("ctrlreg",m);ub(f,m,!0)}if(k)return k=(I(f)?f[f.length-1]:f).prototype,l=Object.create(k||null),n&&e(g,n,
l,m||f.name),P(function(){var a=d.invoke(f,l,g,m);a!==l&&(E(a)||A(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},{instance:l,identifier:n});l=d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function zf(){this.$get=["$window",function(a){return B(a.document)}]}function Af(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function Bf(){this.$get=
["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function pc(a){return E(a)?ea(a)?a.toISOString():fb(a):a}function Gf(){this.$get=function(){return function(a){if(!a)return"";var b=[];Nc(a,function(a,c){null===a||w(a)||A(a)||(I(a)?p(a,function(a){b.push(ia(c)+"="+ia(pc(a)))}):b.push(ia(c)+"="+ia(pc(a))))});return b.join("&")}}}function Hf(){this.$get=function(){return function(a){function b(a,e,f){null===a||w(a)||(I(a)?p(a,function(a,c){b(a,e+"["+(E(a)?c:"")+"]")}):E(a)&&!ea(a)?
Nc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ia(e)+"="+ia(pc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function qc(a,b){if(D(a)){var d=a.replace(vg,"").trim();if(d){var c=b("Content-Type"),c=c&&0===c.indexOf(vd),e;(e=c)||(e=(e=d.match(wg))&&xg[e[0]].test(d));if(e)try{a=Qc(d)}catch(f){if(!c)return a;throw rc("baddata",a,f);}}}return a}function wd(a){var b=S(),d;D(a)?p(a.split("\n"),function(a){d=a.indexOf(":");var e=N(Q(a.substr(0,d)));a=Q(a.substr(d+1));e&&(b[e]=
b[e]?b[e]+", "+a:a)}):E(a)&&p(a,function(a,d){var f=N(d),g=Q(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function xd(a){var b;return function(d){b||(b=wd(a));return d?(d=b[N(d)],void 0===d&&(d=null),d):b}}function yd(a,b,d,c){if(A(c))return c(a,b,d);p(c,function(c){a=c(a,b,d)});return a}function Ff(){var a=this.defaults={transformResponse:[qc],transformRequest:[function(a){return E(a)&&"[object File]"!==ha.call(a)&&"[object Blob]"!==ha.call(a)&&"[object FormData]"!==ha.call(a)?fb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:ja(sc),put:ja(sc),patch:ja(sc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return t(a)?(b=!!a,this):b};var d=this.interceptors=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(c,e,f,g,k,h,l,m){function n(b){function d(a,b){for(var c=0,e=b.length;c<e;){var g=b[c++],f=b[c++];a=a.then(g,f)}b.length=0;return a}
function e(a,b){var c,d={};p(a,function(a,e){A(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function g(a){var b=P({},a);b.data=yd(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:h.reject(b)}if(!E(b))throw M("$http")("badreq",b);if(!D(m.valueOf(b.url)))throw M("$http")("badreq",b.url);var f=P({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);f.headers=
function(b){var c=a.headers,d=P({},b.headers),g,f,h,c=P({},c.common,c[N(b.method)]);a:for(g in c){f=N(g);for(h in d)if(N(h)===f)continue a;d[g]=c[g]}return e(d,ja(b))}(b);f.method=wb(f.method);f.paramSerializer=D(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;c.$$incOutstandingRequestCount();var k=[],n=[];b=h.resolve(f);p(v,function(a){(a.request||a.requestError)&&k.unshift(a.request,a.requestError);(a.response||a.responseError)&&n.push(a.response,a.responseError)});b=d(b,k);b=b.then(function(b){var c=
b.headers,d=yd(b.data,xd(c),void 0,b.transformRequest);w(d)&&p(c,function(a,b){"content-type"===N(b)&&delete c[b]});w(b.withCredentials)&&!w(a.withCredentials)&&(b.withCredentials=a.withCredentials);return q(b,d).then(g,g)});b=d(b,n);return b=b.finally(function(){c.$$completeOutstandingRequest(C)})}function q(c,d){function g(a){if(a){var c={};p(a,function(a,d){c[d]=function(c){function d(){a(c)}b?k.$applyAsync(d):k.$$phase?d():k.$apply(d)}});return c}}function l(a,c,d,e,g){function f(){q(c,a,d,e,
g)}R&&(200<=a&&300>a?R.put(O,[a,c,wd(d),e,g]):R.remove(O));b?k.$applyAsync(f):(f(),k.$$phase||k.$apply())}function q(a,b,d,e,g){b=-1<=b?b:0;(200<=b&&300>b?K.resolve:K.reject)({data:a,status:b,headers:xd(d),config:c,statusText:e,xhrStatus:g})}function H(a){q(a.data,a.status,ja(a.headers()),a.statusText,a.xhrStatus)}function v(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var K=h.defer(),F=K.promise,R,x,W=c.headers,r="jsonp"===N(c.method),O=c.url;r?O=m.getTrustedResourceUrl(O):
D(O)||(O=m.valueOf(O));O=G(O,c.paramSerializer(c.params));r&&(O=L(O,c.jsonpCallbackParam));n.pendingRequests.push(c);F.then(v,v);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(R=E(c.cache)?c.cache:E(a.cache)?a.cache:z);R&&(x=R.get(O),t(x)?x&&A(x.then)?x.then(H,H):I(x)?q(x[1],x[0],ja(x[2]),x[3],x[4]):q(x,200,{},"OK","complete"):R.put(O,F));w(x)&&((x=zd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(W[c.xsrfHeaderName||a.xsrfHeaderName]=x),e(c.method,O,d,l,W,c.timeout,
c.withCredentials,c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return F}function G(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function L(a,b){if(/[&?][^=]+=JSON_CALLBACK/.test(a))throw rc("badjsonp",a);if((new RegExp("[&?]"+b+"=")).test(a))throw rc("badjsonp",b,a);return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var z=g("$http");a.paramSerializer=D(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var v=[];p(d,function(a){v.unshift(D(a)?l.get(a):
l.invoke(a))});n.pendingRequests=[];(function(a){p(arguments,function(a){n[a]=function(b,c){return n(P({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){p(arguments,function(a){n[a]=function(b,c,d){return n(P({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Jf(){this.$get=function(){return function(){return new u.XMLHttpRequest}}}function If(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return yg(a,
c,a.defer,b,d[0])}]}function yg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);f=null;var g=-1,G="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),G=a.type,g="error"===a.type?404:200);d&&d(g,G)};f.addEventListener("load",m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,
k,h,l,m,n,q,G,L,z){function v(){ma&&ma();y&&y.abort()}function s(a,b,c,e,g,f){t(H)&&d.cancel(H);ma=y=null;a(b,c,e,g,f)}k=k||a.url();if("jsonp"===N(e))var r=c.createCallback(k),ma=f(k,r,function(a,b){var d=200===a&&c.getResponse(r);s(l,a,d,"",b,"complete");c.removeCallback(r)});else{var y=b(e,k);y.open(e,k,!0);p(m,function(a,b){t(a)&&y.setRequestHeader(b,a)});y.onload=function(){var a=y.statusText||"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"===
ua(k).protocol?404:0);s(l,c,b,y.getAllResponseHeaders(),a,"complete")};y.onerror=function(){s(l,-1,null,null,"","error")};y.onabort=function(){s(l,-1,null,null,"","abort")};y.ontimeout=function(){s(l,-1,null,null,"","timeout")};p(L,function(a,b){y.addEventListener(b,a)});p(z,function(a,b){y.upload.addEventListener(b,a)});q&&(y.withCredentials=!0);if(G)try{y.responseType=G}catch(J){if("json"!==G)throw J;}y.send(w(h)?null:h)}if(0<n)var H=d(v,n);else n&&A(n.then)&&n.then(v)}}function Df(){var a="{{",
b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(q,b)}function k(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function h(f,h,q,n){function s(a){try{var b=a;a=q?e.getTrusted(q,b):e.valueOf(b);return n&&!t(a)?a:dc(a)}catch(d){c(Fa.interr(f,d))}}if(!f.length||-1===f.indexOf(a)){var p;
h||(h=g(f),p=ka(h),p.exp=f,p.expressions=[],p.$$watchDelegate=k);return p}n=!!n;var r,y,J=0,H=[],ta=[];p=f.length;for(var K=[],F=[];J<p;)if(-1!==(r=f.indexOf(a,J))&&-1!==(y=f.indexOf(b,r+l)))J!==r&&K.push(g(f.substring(J,r))),J=f.substring(r+l,y),H.push(J),ta.push(d(J,s)),J=y+m,F.push(K.length),K.push("");else{J!==p&&K.push(g(f.substring(J)));break}q&&1<K.length&&Fa.throwNoconcat(f);if(!h||H.length){var R=function(a){for(var b=0,c=H.length;b<c;b++){if(n&&w(a[b]))return;K[F[b]]=a[b]}return K.join("")};
return P(function(a){var b=0,d=H.length,e=Array(d);try{for(;b<d;b++)e[b]=ta[b](a);return R(e)}catch(g){c(Fa.interr(f,g))}},{exp:f,expressions:H,$$watchDelegate:function(a,b){var c;return a.$watchGroup(ta,function(d,e){var g=R(d);A(b)&&b.call(this,g,d!==e?c:g,a);c=g})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),q=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function Ef(){this.$get=["$rootScope","$window","$q",
"$$q","$browser",function(a,b,d,c,e){function f(f,h,l,m){function n(){q?f.apply(null,G):f(v)}var q=4<arguments.length,G=q?ya.call(arguments,4):[],L=b.setInterval,p=b.clearInterval,v=0,s=t(m)&&!m,r=(s?c:d).defer(),ma=r.promise;l=t(l)?l:0;ma.$$intervalId=L(function(){s?e.defer(n):a.$evalAsync(n);r.notify(v++);0<l&&v>=l&&(r.resolve(v),p(ma.$$intervalId),delete g[ma.$$intervalId]);s||a.$apply()},h);g[ma.$$intervalId]=r;return ma}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].promise.$$state.pur=
!0,g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function tc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=gb(a[b]);return a.join("/")}function Ad(a,b){var d=ua(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||zg[d.protocol]||null}function Bd(a,b){if(Ag.test(a))throw mb("badpath",a);var d="/"!==a.charAt(0);d&&(a="/"+a);var c=ua(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):
c.pathname);b.$$search=Tc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function uc(a,b){return a.slice(0,b.length)===b}function va(a,b){if(uc(b,a))return b.substr(a.length)}function La(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function nb(a){return a.replace(/(#.+)|#$/,"$1")}function vc(a,b,d){this.$$html5=!0;d=d||"";Ad(a,this);this.$$parse=function(a){var d=va(b,a);if(!D(d))throw mb("ipthprfx",a,b);Bd(d,this);this.$$path||(this.$$path=
"/");this.$$compose()};this.$$compose=function(){var a=cc(this.$$search),d=this.$$hash?"#"+gb(this.$$hash):"";this.$$url=tc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1);this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;t(f=va(a,c))?(g=f,g=d&&t(f=va(d,f))?b+(va("/",f)||f):a+g):t(f=va(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function wc(a,b,d){Ad(a,this);this.$$parse=function(c){var e=va(a,
c)||va(b,c),f;w(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",w(e)&&(a=c,this.replace())):(f=va(d,e),w(f)&&(f=e));Bd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;uc(f,e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=cc(this.$$search),e=this.$$hash?"#"+gb(this.$$hash):"";this.$$url=tc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"");this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(b,d){return La(a)===
La(b)?(this.$$parse(b),!0):!1}}function Cd(a,b,d){this.$$html5=!0;wc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===La(c)?f=c:(g=va(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=cc(this.$$search),e=this.$$hash?"#"+gb(this.$$hash):"";this.$$url=tc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url;this.$$urlUpdatedByLocation=!0}}function Lb(a){return function(){return this[a]}}
function Dd(a,b){return function(d){if(w(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Lf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return t(b)?(a=b,this):a};this.html5Mode=function(a){if(Na(a))return b.enabled=a,this;if(E(a)){Na(a.enabled)&&(b.enabled=a.enabled);Na(a.requireBase)&&(b.requireBase=a.requireBase);if(Na(a.rewriteLinks)||D(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser",
"$sniffer","$rootElement","$window",function(d,c,e,f,g){function k(a,b,d){var e=l.url(),g=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(f){throw l.url(e),l.$$state=g,f;}}function h(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),q;if(b.enabled){if(!m&&b.requireBase)throw mb("nobase");q=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?vc:Cd}else q=La(n),m=wc;var G=q.substr(0,La(q).lastIndexOf("/")+1);l=new m(q,G,"#"+
a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var p=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var h=B(a.target);"a"!==za(h[0]);)if(h[0]===f[0]||!(h=h.parent())[0])return;if(!D(e)||!w(h.attr(e))){var e=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");E(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ua(e.animVal).href);p.test(e)||!e||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(e,
k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});nb(l.absUrl())!==nb(n)&&c.url(l.absUrl(),!0);var z=!0;c.onUrlChange(function(a,b){uc(a,G)?(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,g;a=nb(a);l.$$parse(a);l.$$state=b;g=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(g?(l.$$parse(c),l.$$state=e,k(c,!1,e)):(z=!1,h(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(z||l.$$urlUpdatedByLocation){l.$$urlUpdatedByLocation=
!1;var a=nb(c.url()),b=nb(l.absUrl()),g=c.state(),f=l.$$replace,m=a!==b||l.$$html5&&e.history&&g!==l.$$state;if(z||m)z=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,g).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=g):(m&&k(b,f,g===l.$$state?null:l.$$state),h(a,g)))})}l.$$replace=!1});return l}]}function Mf(){var a=!0,b=this;this.debugEnabled=function(b){return t(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){$b(a)&&(a.stack&&
f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||C;return function(){var a=[];p(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,b,a)}}var f=Ca||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,
arguments)}}()}}]}function Bg(a){return a+""}function Cg(a,b){return"undefined"!==typeof a?a:b}function Ed(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Dg(a,b){switch(a.type){case r.MemberExpression:if(a.computed)return!1;break;case r.UnaryExpression:return 1;case r.BinaryExpression:return"+"!==a.operator?1:!1;case r.CallExpression:return!1}return void 0===b?Fd:b}function V(a,b,d){var c,e,f=a.isPure=Dg(a,d);switch(a.type){case r.Program:c=!0;p(a.body,function(a){V(a.expression,
b,f);c=c&&a.expression.constant});a.constant=c;break;case r.Literal:a.constant=!0;a.toWatch=[];break;case r.UnaryExpression:V(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case r.BinaryExpression:V(a.left,b,f);V(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case r.LogicalExpression:V(a.left,b,f);V(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case r.ConditionalExpression:V(a.test,
b,f);V(a.alternate,b,f);V(a.consequent,b,f);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case r.Identifier:a.constant=!1;a.toWatch=[a];break;case r.MemberExpression:V(a.object,b,f);a.computed&&V(a.property,b,f);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=a.constant?[]:[a];break;case r.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];p(a.arguments,function(a){V(a,b,f);c=c&&a.constant;e.push.apply(e,
a.toWatch)});a.constant=c;a.toWatch=d?e:[a];break;case r.AssignmentExpression:V(a.left,b,f);V(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case r.ArrayExpression:c=!0;e=[];p(a.elements,function(a){V(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=e;break;case r.ObjectExpression:c=!0;e=[];p(a.properties,function(a){V(a.value,b,f);c=c&&a.value.constant;e.push.apply(e,a.value.toWatch);a.computed&&(V(a.key,b,!1),c=c&&a.key.constant,e.push.apply(e,
a.key.toWatch))});a.constant=c;a.toWatch=e;break;case r.ThisExpression:a.constant=!1;a.toWatch=[];break;case r.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Gd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Hd(a){return a.type===r.Identifier||a.type===r.MemberExpression}function Id(a){if(1===a.body.length&&Hd(a.body[0].expression))return{type:r.AssignmentExpression,left:a.body[0].expression,right:{type:r.NGValueParameter},operator:"="}}
function Jd(a){this.$filter=a}function Kd(a){this.$filter=a}function xc(a,b,d){this.ast=new r(a,d);this.astCompiler=d.csp?new Kd(b):new Jd(b)}function yc(a){return A(a.valueOf)?a.valueOf():Eg.call(a)}function Nf(){var a=S(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=yc(a),"object"!==typeof a||
c)?a===b||a!==a&&b!==b:!1}function g(a,b,c,d,e){var g=d.inputs,h;if(1===g.length){var k=f,g=g[0];return a.$watch(function(a){var b=g(a);f(b,k,g.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&yc(b));return h},b,c,e)}for(var l=[],m=[],n=0,p=g.length;n<p;n++)l[n]=f,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,e=g.length;c<e;c++){var k=g[c](a);if(b||(b=!f(k,l[c],g[c].isPure)))m[c]=k,l[c]=k&&yc(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function k(a,b,c,d,e){function f(a){return d(a)}function h(a,
c,d){l=a;A(b)&&b(a,c,d);t(a)&&d.$$postDigest(function(){t(l)&&k()})}var k,l;return k=d.inputs?g(a,h,c,d,e):a.$watch(f,h,c)}function h(a,b,c,d){function e(a){var b=!0;p(a,function(a){t(a)||(b=!1)});return b}var g,f;return g=a.$watch(function(a){return d(a)},function(a,c,d){f=a;A(b)&&b(a,c,d);e(a)&&d.$$postDigest(function(){e(f)&&g()})},c)}function l(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function m(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,e=c!==h&&c!==k?function(c,
e,g,f){g=d&&f?f[0]:a(c,e,g,f);return b(g,c,e)}:function(c,d,e,g){e=a(c,d,e,g);c=b(e,c,d);return t(e)?c:e},d=!a.inputs;c&&c!==g?(e.$$watchDelegate=c,e.inputs=a.inputs):b.$stateful||(e.$$watchDelegate=g,e.inputs=a.inputs?a.inputs:[a]);e.inputs&&(e.inputs=e.inputs.map(function(a){return a.isPure===Fd?function(b){return a(b)}:a}));return e}var n={csp:Ja().noUnsafeEval,literals:pa(b),isIdentifierStart:A(d)&&d,isIdentifierContinue:A(c)&&c};return function(b,c){var d,f,p;switch(typeof b){case "string":return p=
b=b.trim(),d=a[p],d||(":"===b.charAt(0)&&":"===b.charAt(1)&&(f=!0,b=b.substring(2)),d=new zc(n),d=(new xc(d,e,n)).parse(b),d.constant?d.$$watchDelegate=l:f?d.$$watchDelegate=d.literal?h:k:d.inputs&&(d.$$watchDelegate=g),a[p]=d),m(d,c);case "function":return m(b,c);default:return m(C,c)}}}]}function Pf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Ld(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return t(b)?(a=b,this):a}}function Qf(){var a=
!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Ld(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return t(b)?(a=b,this):a}}function Ld(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){h(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){q(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!t&&u.length;){var a=u.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+
("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):w(c)?"undefined":"string"!==typeof c?De(c,void 0):c);$b(a.value)?b(a.value,c):b(c)}}}function k(b){!d||b.pending||2!==b.status||b.pur||(0===t&&0===u.length&&a(g),u.push(b));!b.processScheduled&&b.pending&&(b.processScheduled=!0,++t,a(function(){var c,e,f;f=b.pending;b.processScheduled=!1;b.pending=void 0;try{for(var k=0,l=f.length;k<l;++k){b.pur=!0;e=f[k][0];c=f[k][b.status];try{A(c)?h(e,c(b.value)):1===b.status?h(e,b.value):m(e,b.value)}catch(n){m(e,
n)}}}finally{--t,d&&0===t&&a(g)}}))}function h(a,b){a.$$state.status||(b===a?n(a,s("qcycle",b)):l(a,b))}function l(a,b){function c(b){f||(f=!0,l(a,b))}function d(b){f||(f=!0,n(a,b))}function e(b){q(a,b)}var g,f=!1;try{if(E(b)||A(b))g=b.then;A(g)?(a.$$state.status=-1,g.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,k(a.$$state))}catch(h){d(h)}}function m(a,b){a.$$state.status||n(a,b)}function n(a,b){a.$$state.value=b;a.$$state.status=2;k(a.$$state)}function q(c,d){var e=c.$$state.pending;0>=
c.$$state.status&&e&&e.length&&a(function(){for(var a,c,g=0,f=e.length;g<f;g++){c=e[g][0];a=e[g][3];try{q(c,A(a)?a(d):d)}catch(h){b(h)}}})}function G(a){var b=new f;m(b,a);return b}function r(a,b,c){var d=null;try{A(c)&&(d=c())}catch(e){return G(e)}return d&&A(d.then)?d.then(function(){return b(a)},G):b(a)}function z(a,b,c,d){var e=new f;h(e,a);return e.then(b,c,d)}function v(a){if(!A(a))throw s("norslvr",a);var b=new f;a(function(a){h(b,a)},function(a){m(b,a)});return b}var s=M("$q",TypeError),t=
0,u=[];P(f.prototype,{then:function(a,b,c){if(w(a)&&w(b)&&w(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&k(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return r(b,y,a)},function(b){return r(b,G,a)},b)}});var y=z;v.prototype=f.prototype;v.defer=c;v.reject=G;v.when=z;v.resolve=y;v.all=function(a){var b=new f,c=0,d=I(a)?[]:{};p(a,function(a,
e){c++;z(a).then(function(a){d[e]=a;--c||h(b,d)},function(a){m(b,a)})});0===c&&h(b,d);return b};v.race=function(a){var b=c();p(a,function(a){z(a).then(b.resolve,b.reject)});return b.promise};return v}function Zf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);
return function(){b.cancel(c)}};f.supported=e;return f}]}function Of(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++sb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=M("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,k){function h(a){a.currentScope.$$destroyed=
!0}function l(a){9===Ca&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++sb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(s.$$phase)throw d("inprog",
s.$$phase);s.$$phase=a}function q(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function G(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function r(){}function z(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function v(){null===e&&(e=k.defer(function(){s.$apply(z)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);
d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",h);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:r,get:f,exp:e||a,eq:!!d};c=null;A(b)||(l.fn=C);k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;q(this,1);return function(){var a=db(k,l);0<=a&&(q(h,-1),
a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,f)):b(e,d,f)}var d=Array(a.length),e=Array(a.length),g=[],f=this,h=!1,k=!0;if(!a.length){var l=!0;f.$evalAsync(function(){l&&b(e,e,f)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,g){e[0]=a;d[0]=c;b(e,a===c?e:d,g)});p(a,function(a,b){var k=f.$watch(a,function(a,g){e[b]=a;d[b]=g;h||(h=!0,f.$evalAsync(c))});g.push(k)});return function(){for(;g.length;)g.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!w(e)){if(E(e))if(xa(e))for(f!==n&&(f=n,p=f.length=0,l++),a=e.length,p!==a&&(l++,f.length=p=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==q&&(f=q={},p=0,l++);a=0;for(b in e)ra.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(p++,f[b]=g,l++));if(p>a)for(b in l++,f)ra.call(e,b)||(p--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=
g(a,c),n=[],q={},s=!0,p=0;return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(E(e))if(xa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ra.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,h,l,m,q,p,G=b,y,v=[],w,B;n("$digest");k.$$checkUrlChange();this===s&&null!==e&&(k.defer.cancel(e),z());c=null;do{p=!1;y=this;for(q=0;q<t.length;q++){try{B=t[q],l=B.fn,l(B.scope,B.locals)}catch(C){f(C)}c=null}t.length=0;a:do{if(q=y.$$watchers)for(q.$$digestWatchIndex=
q.length;q.$$digestWatchIndex--;)try{if(a=q[q.$$digestWatchIndex])if(m=a.get,(g=m(y))!==(h=a.last)&&!(a.eq?sa(g,h):T(g)&&T(h)))p=!0,c=a,a.last=a.eq?pa(g,null):g,l=a.fn,l(g,h===r?g:h,y),5>G&&(w=4-G,v[w]||(v[w]=[]),v[w].push({msg:A(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:h}));else if(a===c){p=!1;break a}}catch(E){f(E)}if(!(q=y.$$watchersCount&&y.$$childHead||y!==this&&y.$$nextSibling))for(;y!==this&&!(q=y.$$nextSibling);)y=y.$parent}while(y=q);if((p||t.length)&&!G--)throw s.$$phase=
null,d("infdig",b,v);}while(p||t.length);for(s.$$phase=null;J<u.length;)try{u[J++]()}catch(D){f(D)}u.length=J=0;k.$$checkUrlChange()},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===s&&k.$$applicationDestroyed();q(this,-this.$$watchersCount);for(var b in this.$$listenerCount)G(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&
(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=C;this.$on=this.$watch=this.$watchGroup=function(){return C};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){s.$$phase||t.length||k.defer(function(){t.length&&s.$digest()});t.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){u.push(a)},
$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{s.$$phase=null}}catch(b){f(b)}finally{try{s.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);a=g(a);v()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,G(e,1,a))}},$emit:function(a,
b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=eb([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=
!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=eb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var s=new m,t=s.$$asyncQueue=[],u=s.$$postDigestQueue=[],y=s.$$applyAsyncQueue=[],J=0;return s}]}function Ge(){var a=
/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return t(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return t(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=ua(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Fg(a){if("self"===a)return a;if(D(a)){if(-1<a.indexOf("***"))throw wa("iwcard",a);a=Md(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+
a+"$")}if(ab(a))return new RegExp("^"+a.source+"$");throw wa("imatcher");}function Nd(a){var b=[];t(a)&&p(a,function(a){b.push(Fg(a))});return b}function Sf(){this.SCE_CONTEXTS=oa;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Nd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Nd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?zd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw wa("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),k={};k[oa.HTML]=e(g);k[oa.CSS]=e(g);k[oa.URL]=e(g);k[oa.JS]=e(g);k[oa.RESOURCE_URL]=e(k[oa.URL]);return{trustAs:function(a,b){var c=k.hasOwnProperty(a)?k[a]:null;if(!c)throw wa("icontext",a,b);if(null===b||w(b)||
""===b)return b;if("string"!==typeof b)throw wa("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||w(e)||""===e)return e;var g=k.hasOwnProperty(d)?k[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===oa.RESOURCE_URL){var g=ua(e.toString()),n,q,p=!1;n=0;for(q=a.length;n<q;n++)if(c(a[n],g)){p=!0;break}if(p)for(n=0,q=b.length;n<q;n++)if(c(b[n],g)){p=!1;break}if(p)return e;throw wa("insecurl",e.toString());}if(d===oa.HTML)return f(e);throw wa("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function Rf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ca)throw wa("iequirks");var c=ja(oa);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=bb);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,
f=c.getTrusted,g=c.trustAs;p(oa,function(a,b){var d=N(b);c[("parse_as_"+d).replace(Ac,jb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(Ac,jb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Ac,jb)]=function(b){return g(a,b)}});return c}]}function Tf(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=Z((/android (\d+)/.exec(N((a.navigator||
{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},k=g.body&&g.body.style,h=!1,l=!1;k&&(h=!!("transition"in k||"webkitTransition"in k),l=!!("animation"in k||"webkitAnimation"in k));return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&Ca)return!1;if(w(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ja(),transitions:h,animations:l,android:e}}]}function Vf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler",
"$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(k,h){g.totalPendingRequests++;if(!D(k)||w(d.get(k)))k=f.getTrustedResourceUrl(k);var l=c.defaults&&c.defaults.transformResponse;I(l)?l=l.filter(function(a){return a!==qc}):l===qc&&(l=null);return c.get(k,P({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){d.put(k,a.data);return a.data},function(a){h||(a=Gg("tpload",k,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=
0;return g}]}function Wf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];p(a,function(a){var c=$.element(a).data("$binding");c&&p(c,function(c){d?(new RegExp("(^|\\s)"+Md(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(d?"=":"*=")+'"'+b+'"]');
if(h.length)return h}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Xf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,h,l){A(f)||(l=h,h=f,f=C);var m=ya.call(arguments,3),n=t(l)&&!l,q=(n?c:d).defer(),p=q.promise,r;r=b.defer(function(){try{q.resolve(f.apply(null,m))}catch(b){q.reject(b),e(b)}finally{delete g[p.$$timeoutId]}n||
a.$apply()},h);p.$$timeoutId=r;g[r]=q;return p}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].promise.$$state.pur=!0,g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function ua(a){Ca&&(X.setAttribute("href",a),a=X.href);X.setAttribute("href",a);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,
port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function zd(a){a=D(a)?ua(a):a;return a.protocol===Od.protocol&&a.host===Od.host}function Yf(){this.$get=ka(u)}function Pd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,k,h,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=e.split("; "),c={},k=0;k<a.length;k++)g=a[k],h=g.indexOf("="),0<h&&(l=b(g.substring(0,h)),w(c[l])&&(c[l]=b(g.substring(h+1))));
return c}}function bg(){this.$get=Pd}function ed(a){function b(d,c){if(E(d)){var e={};p(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Qd);b("date",Rd);b("filter",Hg);b("json",Ig);b("limitTo",Jg);b("lowercase",Kg);b("number",Sd);b("orderBy",Td);b("uppercase",Lg)}function Hg(){return function(a,b,d,c){if(!xa(a)){if(null==a)return a;throw M("filter")("notarray",a);}c=
c||"$";var e;switch(Bc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=Mg(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function Mg(a,b,d,c){var e=E(a)&&d in a;!0===b?b=sa:A(b)||(b=function(a,b){if(w(a))return!1;if(null===a||null===b)return a===b;if(E(b)||E(a)&&!Zb(a))return!1;a=N(""+a);b=N(""+b);return-1!==a.indexOf(b)});return function(f){return e&&!E(f)?ga(f,a[d],b,d,!1):ga(f,a,b,d,c)}}function ga(a,b,d,c,e,f){var g=
Bc(a),k=Bc(b);if("string"===k&&"!"===b.charAt(0))return!ga(a,b.substring(1),d,c,e);if(I(a))return a.some(function(a){return ga(a,b,d,c,e)});switch(g){case "object":var h;if(e){for(h in a)if(h.charAt&&"$"!==h.charAt(0)&&ga(a[h],b,d,c,!0))return!0;return f?!1:ga(a,b,d,c,!1)}if("object"===k){for(h in b)if(f=b[h],!A(f)&&!w(f)&&(g=h===c,!ga(g?a:a[h],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function Bc(a){return null===a?"null":typeof a}function Qd(a){var b=
a.NUMBER_FORMATS;return function(a,c,e){w(c)&&(c=b.CURRENCY_SYM);w(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Ud(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Sd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ud(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Ng(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Vd))&&(a=a.replace(Vd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===Cc;e++);
if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Cc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Wd&&(d=d.splice(0,Wd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Og(a,b,d,c){var e=a.d,f=e.length-a.i;b=w(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-
1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ud(a,b,d,c,e){if(!D(a)&&!Y(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,k=Math.abs(a)+"",h="";if(f)h="\u221e";else{g=Ng(k);Og(g,e,b.minFrac,b.maxFrac);h=g.d;k=g.i;e=g.e;f=[];for(g=h.reduce(function(a,b){return a&&!b},!0);0>k;)h.unshift(0),k++;0<k?f=h.splice(k,h.length):(f=h,h=[0]);k=[];for(h.length>=b.lgSize&&k.unshift(h.splice(-b.lgSize,h.length).join(""));h.length>
b.gSize;)k.unshift(h.splice(-b.gSize,h.length).join(""));h.length&&k.unshift(h.join(""));h=k.join(d);f.length&&(h+=c+f.join(""));e&&(h+="e+"+e)}return 0>a&&!g?b.negPre+h+b.negSuf:b.posPre+h+b.posSuf}function Mb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=Cc+a;d&&(a=a.substr(a.length-b));return e+a}function da(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Mb(f,b,c,e)}}function ob(a,b,d){return function(c,e){var f=
c["get"+a](),g=wb((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Xd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Yd(a){return function(b){var d=Xd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Mb(b,a)}}function Dc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Rd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,
h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),g=Z(b[9]+b[11]));k.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-g;k=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",k=[],h,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;D(c)&&(c=Pg.test(c)?Z(c):b(c));Y(c)&&(c=new Date(c));if(!ea(c)||!isFinite(c.getTime()))return c;
for(;d;)(l=Qg.exec(d))?(k=eb(k,l,1),d=k.pop()):(k.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=Rc(f,m),c=bc(c,f,!0));p(k,function(b){h=Rg[b];g+=h?h(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ig(){return function(a,b){w(b)&&(b=2);return fb(a,b)}}function Jg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(T(b))return a;Y(a)&&(a=a.toString());if(!xa(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+
d):d;return 0<=b?Ec(a,d,d+b):0===d?Ec(a,b,a.length):Ec(a,Math.max(0,d+b),d)}}function Ec(a,b,d){return D(a)?a.slice(b,d):ya.call(a,b,d)}function Td(a){function b(b){return b.map(function(b){var c=1,d=bb;if(A(b))d=b;else if(D(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}
function c(a,b){var c=0,d=a.type,h=b.type;if(d===h){var h=a.value,l=b.value;"string"===d?(h=h.toLowerCase(),l=l.toLowerCase()):"object"===d&&(E(h)&&(h=a.index),E(l)&&(l=b.index));h!==l&&(c=h<l?-1:1)}else c=d<h?-1:1;return c}return function(a,f,g,k){if(null==a)return a;if(!xa(a))throw M("orderBy")("notarray",a);I(f)||(f=[f]);0===f.length&&(f=["+"]);var h=b(f),l=g?-1:1,m=A(k)?k:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:h.map(function(c){var e=
c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(A(e.valueOf)&&(e=e.valueOf(),d(e)))break a;Zb(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var d=0,e=h.length;d<e;d++){var g=m(a.predicateValues[d],b.predicateValues[d]);if(g)return g*h[d].descending*l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l});return a=a.map(function(a){return a.value})}}function Qa(a){A(a)&&(a={link:a});a.restrict=a.restrict||"AC";
return ka(a)}function Nb(a,b,d,c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=Ob;this.$$element=a;this.$$animate=c;Zd(this)}function Zd(a){a.$$classCache={};a.$$classCache[$d]=!(a.$$classCache[pb]=a.$$element.hasClass(pb))}function ae(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):
!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Vc(c,"-"):"";b(a,pb+c,!0===d);b(a,$d+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,k){w(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,k)):(this.$pending&&e(this.$pending,a,k),be(this.$pending)&&(this.$pending=void 0));Na(g)?g?(e(this.$error,a,k),c(this.$$success,a,k)):(c(this.$error,a,k),e(this.$$success,a,k)):(e(this.$error,a,k),e(this.$$success,a,
k));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=be(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,g,this)}}function be(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Fc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Wa(a,
b,d,c,e,f){var g=N(b[0].type);if(!e.android){var k=!1;b.on("compositionstart",function(){k=!0});b.on("compositionend",function(){k=!1;l()})}var h,l=function(a){h&&(f.defer.cancel(h),h=null);if(!k){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=Q(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){h||(h=f.defer(function(){h=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=
a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(ce[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!h){var b=this.validity,c=b.badInput,d=b.typeMismatch;h=f.defer(function(){h=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Pb(a,b){return function(d,c){var e,f;if(ea(d))return d;
if(D(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Sg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},p(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function qb(a,b,d,c){return function(e,
f,g,k,h,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return t(a)&&!ea(a)?d(a)||void 0:a}Gc(e,f,g,k);Wa(e,f,g,k,h,l);var p=k&&k.$options.getOption("timezone"),r;k.$$parserName=a;k.$parsers.push(function(a){if(k.$isEmpty(a))return null;if(b.test(a))return a=d(a,r),p&&(a=bc(a,p)),a});k.$formatters.push(function(a){if(a&&!ea(a))throw rb("datefmt",a);if(n(a))return(r=a)&&p&&(r=bc(r,p,!0)),m("date")(a,c,p);r=null;return""});if(t(g.min)||g.ngMin){var z;k.$validators.min=
function(a){return!n(a)||w(z)||d(a)>=z};g.$observe("min",function(a){z=q(a);k.$validate()})}if(t(g.max)||g.ngMax){var v;k.$validators.max=function(a){return!n(a)||w(v)||d(a)<=v};g.$observe("max",function(a){v=q(a);k.$validate()})}}}function Gc(a,b,d,c){(c.$$hasNativeValidators=E(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function de(a){a.$$parserName="number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Tg.test(b))return parseFloat(b)});
a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!Y(b))throw rb("numfmt",b);b=b.toString()}return b})}function Xa(a){t(a)&&!Y(a)&&(a=parseFloat(a));return T(a)?void 0:a}function Hc(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function ee(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Hc(a):0,k=e?Hc(b):0,h=f?Hc(d):0,g=Math.max(g,k,h),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));
f&&(d=Math.round(d))}return 0===(a-b)%d}function fe(a,b,d,c,e){if(t(c)){a=a(c);if(!a.constant)throw rb("constexpr",d,c);return a(b)}return e}function Ic(a,b){function d(a,b){if(!a||!a.length)return[];if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],f=0;f<b.length;f++)if(e===b[f])continue a;c.push(e)}return c}function c(a){var b=a;I(a)?b=a.map(c).join(" "):E(a)&&(b=Object.keys(a).filter(function(b){return a[b]}).join(" "));return b}function e(a){var b=a;if(I(a))b=a.map(e);
else if(E(a)){var c=!1,b=Object.keys(a).filter(function(b){b=a[b];!c&&w(b)&&(c=!0);return b});c&&b.push(void 0)}return b}a="ngClass"+a;var f;return["$parse",function(g){return{restrict:"AC",link:function(k,h,l){function m(a,b){var c=[];p(a,function(a){if(0<b||s[a])s[a]=(s[a]||0)+b,s[a]===+(0<b)&&c.push(a)});return c.join(" ")}function n(a){if(a===b){var c=w,c=m(c&&c.split(" "),1);l.$addClass(c)}else c=w,c=m(c&&c.split(" "),-1),l.$removeClass(c);u=a}function q(a){a=c(a);a!==w&&r(a)}function r(a){if(u===
b){var c=w&&w.split(" "),e=a&&a.split(" "),g=d(c,e),c=d(e,c),g=m(g,-1),c=m(c,1);l.$addClass(c);l.$removeClass(g)}w=a}var t=l[a].trim(),z=":"===t.charAt(0)&&":"===t.charAt(1),t=g(t,z?e:c),v=z?q:r,s=h.data("$classCounts"),u=!0,w;s||(s=S(),h.data("$classCounts",s));"ngClass"!==a&&(f||(f=g("$index",function(a){return a&1})),k.$watch(f,n));k.$watch(t,v,z)}}}]}function Qb(a,b,d,c,e,f,g,k,h){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators=
{};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=h(d.name||"",!1)(a);this.$$parentForm=Ob;this.$options=Rb;this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=
void 0;this.$$currentValidationRunId=0;Object.defineProperty(this,"$$scope",{value:a});this.$$attr=d;this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=k;this.$$exceptionHandler=b;Zd(this);Ug(this)}function Ug(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);if(b!==a.$modelValue&&(a.$modelValue===a.$modelValue||b===b)){a.$modelValue=a.$$rawModelValue=b;a.$$parserValid=void 0;for(var d=a.$formatters,c=d.length,e=b;c--;)e=d[c](e);a.$viewValue!==e&&(a.$$updateEmptyClasses(e),
a.$viewValue=a.$$lastCommittedViewValue=e,a.$render(),a.$$runValidators(a.$modelValue,a.$viewValue,C))}return b})}function Jc(a){this.$$options=a}function ge(a,b){p(b,function(b,c){t(a[c])||(a[c]=b)})}function Ga(a,b){a.prop("selected",b);a.attr("selected",b)}var Lc={objectMaxDepth:5},Vg=/^\/(.+)\/([a-z]*)$/,ra=Object.prototype.hasOwnProperty,N=function(a){return D(a)?a.toLowerCase():a},wb=function(a){return D(a)?a.toUpperCase():a},Ca,B,la,ya=[].slice,ug=[].splice,Wg=[].push,ha=Object.prototype.toString,
Oc=Object.getPrototypeOf,qa=M("ng"),$=u.angular||(u.angular={}),ec,sb=0;Ca=u.document.documentMode;var T=Number.isNaN||function(a){return a!==a};C.$inject=[];bb.$inject=[];var I=Array.isArray,se=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,Q=function(a){return D(a)?a.trim():a},Md=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ja=function(){if(!t(Ja.rules)){var a=u.document.querySelector("[ng-csp]")||u.document.querySelector("[data-ng-csp]");
if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ja.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ja;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ja.rules},tb=function(){if(t(tb.name_))return tb.name_;var a,b,d=Ha.length,c,e;for(b=0;b<d;++b)if(c=Ha[b],a=u.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return tb.name_=e},ue=/:/g,
Ha=["ng-","data-ng-","ng:","x-ng-"],xe=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof u.HTMLScriptElement||b instanceof u.SVGScriptElement))return!1;b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;
default:return!1}})}(u.document),Ae=/[A-Z]/g,Wc=!1,Oa=3,Fe={full:"1.6.6",major:1,minor:6,dot:6,codeName:"interdimensional-cable"};U.expando="ng339";var kb=U.cache={},gg=1;U._data=function(a){return this.cache[a[this.expando]]||{}};var cg=/-([a-z])/g,Xg=/^-ms-/,Bb={mouseleave:"mouseout",mouseenter:"mouseover"},hc=M("jqLite"),fg=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,gc=/<|&#?\w+;/,dg=/<([\w:-]+)/,eg=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,aa={option:[1,'<select multiple="multiple">',
"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};aa.optgroup=aa.option;aa.tbody=aa.tfoot=aa.colgroup=aa.caption=aa.thead;aa.th=aa.td;var lg=u.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Sa=U.prototype={ready:gd,toString:function(){var a=[];p(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},
eq:function(a){return 0<=a?B(this[a]):B(this[this.length+a])},length:0,push:Wg,sort:[].sort,splice:[].splice},Hb={};p("multiple selected checked disabled readOnly required open".split(" "),function(a){Hb[N(a)]=a});var ld={};p("input select option textarea button form details".split(" "),function(a){ld[a]=!0});var sd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};p({data:lc,removeData:kc,hasData:function(a){for(var b in kb[a.ng339])return!0;
return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)kc(a[b])}},function(a,b){U[b]=a});p({data:lc,inheritedData:Fb,scope:function(a){return B.data(a,"$scope")||Fb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return B.data(a,"$isolateScope")||B.data(a,"$isolateScopeNoTemplate")},controller:id,injector:function(a){return Fb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Cb,css:function(a,b,d){b=yb(b.replace(Xg,"ms-"));if(t(d))a.style[b]=d;
else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Oa&&2!==c&&8!==c&&a.getAttribute){var c=N(b),e=Hb[c];if(t(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(t(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(w(d)){var c=a.nodeType;return 1===c||c===Oa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(w(b)){if(a.multiple&&"select"===
za(a)){var d=[];p(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(w(b))return a.innerHTML;zb(a,!0);a.innerHTML=b},empty:jd},function(a,b){U.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==jd&&w(2===a.length&&a!==Cb&&a!==id?b:c)){if(E(b)){for(e=0;e<g;e++)if(a===lc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=w(e)?Math.min(g,1):g;for(f=0;f<g;f++){var k=a(this[f],b,c);e=e?e+k:k}return e}for(e=0;e<g;e++)a(this[e],
b,c);return this}});p({removeData:kc,on:function(a,b,d,c){if(t(c))throw hc("onargs");if(fc(a)){c=Ab(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=ig(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,k=function(b,c,g){var k=e[b];k||(k=e[b]=[],k.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));k.push(d)};g--;)b=c[g],Bb[b]?(k(Bb[b],kg),k(b,void 0,!0)):k(b)}},off:hd,one:function(a,b,d){a=B(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,
b){var d,c=a.parentNode;zb(a);p(new U(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];p(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new U(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;p(new U(b),function(b){a.insertBefore(b,d)})}},
wrap:function(a,b){var d=B(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Gb,detach:function(a){Gb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new U(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Eb,removeClass:Db,toggleClass:function(a,b,d){b&&p(b.split(" "),function(b){var e=d;w(e)&&(e=!Cb(a,b));(e?Eb:Db)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},
find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:jc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=Ab(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:C,type:f,target:a},b.type&&(c=P(c,
b)),b=ja(g),e=d?[c].concat(d):[c],p(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){U.prototype[b]=function(b,c,e){for(var f,g=0,k=this.length;g<k;g++)w(f)?(f=a(this[g],b,c,e),t(f)&&(f=B(f))):ic(f,a(this[g],b,c,e));return t(f)?f:this}});U.prototype.bind=U.prototype.on;U.prototype.unbind=U.prototype.off;var Yg=Object.create(null);md.prototype={_idx:function(a){if(a===this._lastKey)return this._lastIndex;this._lastKey=a;return this._lastIndex=this._keys.indexOf(a)},_transformKey:function(a){return T(a)?
Yg:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};var Ib=md,ag=[function(){this.$get=[function(){return Ib}]}],ng=/^([^(]+?)=>/,og=/^[^(]*\(\s*([^)]*)\)/m,
Zg=/,/,$g=/^\s*(_?)(\S+?)\1\s*$/,mg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ba=M("$injector");hb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw D(d)&&d||(d=a.name||pg(a)),Ba("strictdi",d);b=nd(a);p(b[1].split(Zg),function(a){a.replace($g,function(a,b,d){c.push(d)})})}a.$inject=c}}else I(a)?(b=a.length-1,ub(a[b],"fn"),c=a.slice(0,b)):ub(a,"fn",!0);return c};var he=M("$animate"),sf=function(){this.$get=C},tf=function(){var a=new Ib,b=[];this.$get=
["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=D(b)?b.split(" "):I(b)?b:[],p(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){p(b,function(b){var c=a.get(b);if(c){var d=qg(b.attr("class")),e="",f="";p(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});p(b,function(a){e&&Eb(a,e);f&&Db(a,f)});a.delete(b)}});b.length=0}return{enabled:C,on:C,off:C,pin:C,push:function(g,k,h,l){l&&l();h=h||{};h.from&&g.css(h.from);h.to&&g.css(h.to);if(h.addClass||
h.removeClass)if(k=h.addClass,l=h.removeClass,h=a.get(g)||{},k=e(h,k,!0),l=e(h,l,!1),k||l)a.set(g,h),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},qf=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw he("notcsel",c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=g;a.factory(g,d)};this.customFilter=function(a){1===arguments.length&&(c=A(a)?a:null);return c};
this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,he("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},
enter:function(c,d,h,l){d=d&&B(d);h=h&&B(h);d=d||h.parent();b(c,d,h);return a.push(c,"enter",Ka(l))},move:function(c,d,h,l){d=d&&B(d);h=h&&B(h);d=d||h.parent();b(c,d,h);return a.push(c,"move",Ka(l))},leave:function(b,c){return a.push(b,"leave",Ka(c),function(){b.remove()})},addClass:function(b,c,d){d=Ka(d);d.addClass=lb(d.addclass,c);return a.push(b,"addClass",d)},removeClass:function(b,c,d){d=Ka(d);d.removeClass=lb(d.removeClass,c);return a.push(b,"removeClass",d)},setClass:function(b,c,d,f){f=Ka(f);
f.addClass=lb(f.addClass,c);f.removeClass=lb(f.removeClass,d);return a.push(b,"setClass",f)},animate:function(b,c,d,f,m){m=Ka(m);m.from=m.from?P(m.from,c):c;m.to=m.to?P(m.to,d):d;m.tempClasses=lb(m.tempClasses,f||"ng-inline-animate");return a.push(b,"animate",m)}}}]}],vf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},uf=function(){this.$get=
["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;p(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===
this._state?a():this._doneCallbacks.push(a)},progress:C,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&
this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(p(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},rf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=
null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);k||h.complete();k=!0});return h}var g=e||{};g.$$prepared||(g=pa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var k,h=new d;return{start:f,end:f}}}]},ba=M("$compile"),oc=new function(){};Yc.$inject=["$provide","$$sanitizeUriProvider"];Kb.prototype.isFirstChange=function(){return this.previousValue===oc};var od=/^((?:x|data)[:\-_])/i,tg=/[:\-_]+(.)/g,ud=M("$controller"),
td=/^(\S+)(\s+as\s+([\w$]+))?$/,Cf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof B&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},vd="application/json",sc={"Content-Type":vd+";charset=utf-8"},wg=/^\[|^\{(?!\{)/,xg={"[":/]$/,"{":/}$/},vg=/^\)]\}',?\n/,rc=M("$http"),Fa=$.$interpolateMinErr=M("$interpolate");Fa.throwNoconcat=function(a){throw Fa("noconcat",a);};Fa.interr=function(a,b){return Fa("interr",a,b.toString())};var Kf=function(){this.$get=function(){function a(a){var b=
function(a){b.data=a;b.called=!0};b.id=a;return b}var b=$.callbacks,d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},ah=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,zg={http:80,https:443,ftp:21},mb=M("$location"),Ag=/^\s*[\\/]{2,}/,bh={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Lb("$$absUrl"),
url:function(a){if(w(a))return this.$$url;var b=ah.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Lb("$$protocol"),host:Lb("$$host"),port:Lb("$$port"),path:Dd("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(D(a)||Y(a))a=a.toString(),this.$$search=Tc(a);else if(E(a))a=pa(a,{}),p(a,function(b,
c){null==b&&delete a[c]}),this.$$search=a;else throw mb("isrcharg");break;default:w(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};p([Cd,wc,vc],function(a){a.prototype=Object.create(bh);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==vc||!this.$$html5)throw mb("nostate");this.$$state=w(b)?null:b;this.$$urlUpdatedByLocation=
!0;return this}});var Ya=M("$parse"),Eg={}.constructor.prototype.valueOf,Sb=S();p("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Sb[a]=!0});var ch={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},zc=function(a){this.options=a};zc.prototype={constructor:zc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Sb[b],e=Sb[d];Sb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=
a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?
this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=t(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ya("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=N(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;
for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=ch[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var r=function(a,b){this.lexer=
a;this.options=b};r.Program="Program";r.ExpressionStatement="ExpressionStatement";r.AssignmentExpression="AssignmentExpression";r.ConditionalExpression="ConditionalExpression";r.LogicalExpression="LogicalExpression";r.BinaryExpression="BinaryExpression";r.UnaryExpression="UnaryExpression";r.CallExpression="CallExpression";r.MemberExpression="MemberExpression";r.Identifier="Identifier";r.Literal="Literal";r.ArrayExpression="ArrayExpression";r.Property="Property";r.ObjectExpression="ObjectExpression";
r.ThisExpression="ThisExpression";r.LocalsExpression="LocalsExpression";r.NGValueParameter="NGValueParameter";r.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:r.Program,body:a}},expressionStatement:function(){return{type:r.ExpressionStatement,
expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Hd(a))throw Ya("lval");a={type:r.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:r.ConditionalExpression,
test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:r.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:r.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.relational()};
return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},
unary:function(){var a;return(a=this.expect("+","-","!"))?{type:r.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=pa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:r.Literal,value:this.options.literals[this.consume().text]}:
this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:r.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:r.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:r.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");
return a},filter:function(a){a=[a];for(var b={type:r.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:r.Identifier,name:a.text}},constant:function(){return{type:r.Literal,value:this.consume().value}},
arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:r.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:r.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?
(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:r.ObjectExpression,properties:a}},throwError:function(a,b){throw Ya("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ya("ueoe",
this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ya("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:r.ThisExpression},
$locals:{type:r.LocalsExpression}}};var Fd=2;Jd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};V(a,b.$filter);var d="",c;this.stage="assign";if(c=Id(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Gd(a.body);b.stage="inputs";p(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;
var k=b.nextId();b.recurse(a,k);b.return_(k);b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,Bg,Cg,Ed);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,
d=this;p(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+";")});b.length&&a.push("fn.inputs=["+b.map(function(a){return a.name}).join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;p(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?
"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,k,h=this,l,m,n;c=c||C;if(!f&&t(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case r.Program:p(a.body,function(b,c){h.recurse(b.expression,void 0,void 0,function(a){k=a});c!==a.body.length-1?h.current().body.push(k,";"):h.return_(k)});break;case r.Literal:m=this.escape(a.value);
this.assign(b,m);c(b||m);break;case r.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){k=a});m=a.operator+"("+this.ifDefined(k,0)+")";this.assign(b,m);c(m);break;case r.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){k=a});m="+"===a.operator?this.plus(g,k):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(k,0):"("+g+")"+a.operator+"("+k+")";this.assign(b,m);c(m);break;case r.LogicalExpression:b=b||this.nextId();
h.recurse(a.left,b);h.if_("&&"===a.operator?b:h.not(b),h.lazyRecurse(a.right,b));c(b);break;case r.ConditionalExpression:b=b||this.nextId();h.recurse(a.test,b);h.if_(b,h.lazyRecurse(a.alternate,b),h.lazyRecurse(a.consequent,b));c(b);break;case r.Identifier:b=b||this.nextId();d&&(d.context="inputs"===h.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",a.name)),function(){h.if_("inputs"===
h.stage||"s",function(){e&&1!==e&&h.if_(h.isNull(h.nonComputedMember("s",a.name)),h.lazyAssign(h.nonComputedMember("s",a.name),"{}"));h.assign(b,h.nonComputedMember("s",a.name))})},b&&h.lazyAssign(b,h.nonComputedMember("l",a.name)));c(b);break;case r.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();h.recurse(a.object,g,void 0,function(){h.if_(h.notNull(g),function(){a.computed?(k=h.nextId(),h.recurse(a.property,k),h.getStringValue(k),e&&1!==e&&h.if_(h.not(h.computedMember(g,
k)),h.lazyAssign(h.computedMember(g,k),"{}")),m=h.computedMember(g,k),h.assign(b,m),d&&(d.computed=!0,d.name=k)):(e&&1!==e&&h.if_(h.isNull(h.nonComputedMember(g,a.property.name)),h.lazyAssign(h.nonComputedMember(g,a.property.name),"{}")),m=h.nonComputedMember(g,a.property.name),h.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){h.assign(b,"undefined")});c(b)},!!e);break;case r.CallExpression:b=b||this.nextId();a.filter?(k=h.filter(a.callee.name),l=[],p(a.arguments,function(a){var b=
h.nextId();h.recurse(a,b);l.push(b)}),m=k+"("+l.join(",")+")",h.assign(b,m),c(b)):(k=h.nextId(),g={},l=[],h.recurse(a.callee,k,g,function(){h.if_(h.notNull(k),function(){p(a.arguments,function(b){h.recurse(b,a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m=g.name?h.member(g.context,g.name,g.computed)+"("+l.join(",")+")":k+"("+l.join(",")+")";h.assign(b,m)},function(){h.assign(b,"undefined")});c(b)}));break;case r.AssignmentExpression:k=this.nextId();g={};this.recurse(a.left,void 0,
g,function(){h.if_(h.notNull(g.context),function(){h.recurse(a.right,k);m=h.member(g.context,g.name,g.computed)+a.operator+k;h.assign(b,m);c(b||m)})},1);break;case r.ArrayExpression:l=[];p(a.elements,function(b){h.recurse(b,a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case r.ObjectExpression:l=[];n=!1;p(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),p(a.properties,function(a){a.computed?
(g=h.nextId(),h.recurse(a.key,g)):g=a.key.type===r.Identifier?a.key.name:""+a.key.value;k=h.nextId();h.recurse(a.value,k);h.assign(h.member(b,g,a.computed),k)})):(p(a.properties,function(b){h.recurse(b.value,a.constant?void 0:h.nextId(),void 0,function(a){l.push(h.escape(b.key.type===r.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case r.ThisExpression:this.assign(b,"s");c(b||"s");break;case r.LocalsExpression:this.assign(b,"l");c(b||"l");break;
case r.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,
b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,
b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(D(a))return"'"+a.replace(this.stringEscapeRegex,
this.stringEscapeFn)+"'";if(Y(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ya("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Kd.prototype={compile:function(a){var b=this;V(a,b.$filter);var d,c;if(d=Id(a))c=this.recurse(d);d=Gd(a.body);var e;d&&(e=[],p(d,function(a,c){var d=
b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];p(a.body,function(a){f.push(b.recurse(a.expression))});a=0===a.body.length?C:1===a.body.length?f[0]:function(a,b){var c;p(f,function(d){c=d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case r.Literal:return this.value(a.value,b);case r.UnaryExpression:return e=this.recurse(a.argument),
this["unary"+a.operator](e,b);case r.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case r.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case r.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case r.Identifier:return f.identifier(a.name,b,d);case r.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||
(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,e,b,d);case r.CallExpression:return g=[],p(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],q=0;q<g.length;++q)n.push(g[q](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var n=e(a,c,d,f),q;if(null!=n.value){q=
[];for(var p=0;p<g.length;++p)q.push(g[p](a,c,d,f));q=n.value.apply(n.context,q)}return b?{value:q}:q};case r.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var n=c(a,d,f,g);a=e(a,d,f,g);n.context[n.name]=a;return b?{value:a}:a};case r.ArrayExpression:return g=[],p(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],q=0;q<g.length;++q)f.push(g[q](a,c,d,e));return b?{value:f}:f};case r.ObjectExpression:return g=[],p(a.properties,
function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===r.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},q=0;q<g.length;++q)g[q].computed?f[g[q].key(a,c,d,e)]=g[q].value(a,c,d,e):f[g[q].key]=g[q].value(a,c,d,e);return b?{value:f}:f};case r.ThisExpression:return function(a){return b?{value:a}:a};case r.LocalsExpression:return function(a,c){return b?{value:c}:c};case r.NGValueParameter:return function(a,
c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=t(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=t(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=Ed(k,c);return d?{value:k}:k}},"binary-":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);
k=(t(k)?k:0)-(t(c)?c:0);return d?{value:k}:k}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,
e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,
g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k)?b(e,f,g,k):d(e,f,g,k);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,
name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:e}},computedMember:function(a,b,d,c){return function(e,f,g,k){var h=a(e,f,g,k),l,m;null!=h&&(l=b(e,f,g,k),l+="",c&&1!==c&&h&&!h[l]&&(h[l]={}),m=h[l]);return d?{context:h,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;
return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};xc.prototype={constructor:xc,parse:function(a){a=this.ast.ast(a);var b=this.astCompiler.compile(a);b.literal=0===a.body.length||1===a.body.length&&(a.body[0].expression.type===r.Literal||a.body[0].expression.type===r.ArrayExpression||a.body[0].expression.type===r.ObjectExpression);b.constant=a.constant;return b}};var wa=M("$sce"),oa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",
JS:"js"},Ac=/_([a-z])/g,Gg=M("$compile"),X=u.document.createElement("a"),Od=ua(u.location.href);Pd.$inject=["$document"];ed.$inject=["$provide"];var Wd=22,Vd=".",Cc="0";Qd.$inject=["$locale"];Sd.$inject=["$locale"];var Rg={yyyy:da("FullYear",4,0,!1,!0),yy:da("FullYear",2,0,!0,!0),y:da("FullYear",1,0,!1,!0),MMMM:ob("Month"),MMM:ob("Month",!0),MM:da("Month",2,1),M:da("Month",1,1),LLLL:ob("Month",!1,!0),dd:da("Date",2),d:da("Date",1),HH:da("Hours",2),H:da("Hours",1),hh:da("Hours",2,-12),h:da("Hours",
1,-12),mm:da("Minutes",2),m:da("Minutes",1),ss:da("Seconds",2),s:da("Seconds",1),sss:da("Milliseconds",3),EEEE:ob("Day"),EEE:ob("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Mb(Math[0<a?"floor":"ceil"](a/60),2)+Mb(Math.abs(a%60),2))},ww:Yd(2),w:Yd(1),G:Dc,GG:Dc,GGG:Dc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Qg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
Pg=/^-?\d+$/;Rd.$inject=["$locale"];var Kg=ka(N),Lg=ka(wb);Td.$inject=["$parse"];var He=ka({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ha.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),xb={};p(Hb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=Ea("ng-"+b),e=d;"checked"===a&&(e=function(a,
b,e){e.ngModel!==e[c]&&d(a,b,e)});xb[c]=function(){return{restrict:"A",priority:100,link:e}}}});p(sd,function(a,b){xb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Vg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});p(["src","srcset","href"],function(a){var b=Ea("ng-"+a);xb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===
ha.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ca&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Ob={$addControl:C,$$renameControl:function(a,b){a.$name=b},$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C,$setSubmitted:C};Nb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Nb.prototype={$rollbackViewValue:function(){p(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){p(this.$$controls,
function(a){a.$commitViewValue()})},$addControl:function(a){Ia(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];p(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);p(this.$error,function(b,d){this.$setValidity(d,null,a)},this);p(this.$$success,function(b,d){this.$setValidity(d,null,
a)},this);db(this.$$controls,a);a.$$parentForm=Ob},$setDirty:function(){this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Tb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Za,Tb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;p(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){p(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){this.$$animate.addClass(this.$$element,
"ng-submitted");this.$submitted=!0;this.$$parentForm.$setSubmitted()}};ae({clazz:Nb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(db(c,d),0===c.length&&delete a[b])}});var ie=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||C}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Nb,compile:function(d,f){d.addClass(Za).addClass(pb);var g=f.name?"name":
a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var q=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",q);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",q)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var p=g?c(n.$name):C;g&&(p(a,n),e.$observe(g,function(b){n.$name!==b&&(p(a,void 0),n.$$parentForm.$$renameControl(n,b),p=c(n.$name),p(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);
p(a,void 0);P(n,Ob)})}}}}}]},Ie=ie(),Ue=ie(!0),Sg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,dh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,eh=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Tg=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,je=/^(\d{4,})-(\d{2})-(\d{2})$/,
ke=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Kc=/^(\d{4,})-W(\d\d)$/,le=/^(\d{4,})-(\d\d)$/,me=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ce=S();p(["date","datetime-local","month","time","week"],function(a){ce[a]=!0});var ne={text:function(a,b,d,c,e,f){Wa(a,b,d,c,e,f);Fc(c)},date:qb("date",je,Pb(je,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":qb("datetimelocal",ke,Pb(ke,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:qb("time",me,Pb(me,["HH","mm",
"ss","sss"]),"HH:mm:ss.sss"),week:qb("week",Kc,function(a,b){if(ea(a))return a;if(D(a)){Kc.lastIndex=0;var d=Kc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,k=0,h=Xd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),k=b.getMilliseconds());return new Date(c,0,h.getDate()+e,d,f,g,k)}}return NaN},"yyyy-Www"),month:qb("month",le,Pb(le,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Gc(a,b,d,c);de(c);Wa(a,b,d,c,e,f);var g,k;if(t(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||
w(g)||a>=g},d.$observe("min",function(a){g=Xa(a);c.$validate()});if(t(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||w(k)||a<=k},d.$observe("max",function(a){k=Xa(a);c.$validate()});if(t(d.step)||d.ngStep){var h;c.$validators.step=function(a,b){return c.$isEmpty(b)||w(h)||ee(b,g||0,h)};d.$observe("step",function(a){h=Xa(a);c.$validate()})}},url:function(a,b,d,c,e,f){Wa(a,b,d,c,e,f);Fc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||dh.test(d)}},
email:function(a,b,d,c,e,f){Wa(a,b,d,c,e,f);Fc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||eh.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==Q(d.ngTrim);w(d.name)&&b.attr("name",++sb);b.on("click",function(a){var g;b[0].checked&&(g=d.value,e&&(g=Q(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=Q(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,c){b.attr(a,
d[a]);d.$observe(a,c)}function k(a){n=Xa(a);T(c.$modelValue)||(m?(a=b.val(),n>a&&(a=n,b.val(a)),c.$setViewValue(a)):c.$validate())}function h(a){q=Xa(a);T(c.$modelValue)||(m?(a=b.val(),q<a&&(b.val(q),a=q<n?n:q),c.$setViewValue(a)):c.$validate())}function l(a){p=Xa(a);T(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}Gc(a,b,d,c);de(c);Wa(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,n=m?0:void 0,q=m?100:void 0,p=m?1:void 0,r=b[0].validity;a=t(d.min);
e=t(d.max);f=t(d.step);var z=c.$render;c.$render=m&&t(r.rangeUnderflow)&&t(r.rangeOverflow)?function(){z();c.$setViewValue(b.val())}:z;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||w(n)||b>=n},g("min",k));e&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||w(q)||b<=q},g("max",h));f&&(c.$validators.step=m?function(){return!r.stepMismatch}:function(a,b){return c.$isEmpty(b)||w(p)||ee(b,n||0,p)},g("step",l))},checkbox:function(a,b,d,c,e,
f,g,k){var h=fe(k,a,"ngTrueValue",d.ngTrueValue,!0),l=fe(k,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return sa(a,h)});c.$parsers.push(function(a){return a?h:l})},hidden:C,button:C,submit:C,reset:C,file:C},Zc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,
f,g,k){k[0]&&(ne[N(g.type)]||ne.text)(e,f,g,k[0],b,a,d,c)}}}}],fh=/^(true|false|\d+)$/,mf=function(){function a(a,d,c){var e=t(c)?c:9===Ca?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return fh.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Me=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,
e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=dc(a)})}}}}],Oe=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=w(a)?"":a})}}}}],Ne=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});
d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],lf=ka({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Pe=Ic("",!0),Re=Ic("Odd",0),Qe=Ic("Even",1),Se=Qa({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Te=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],dd={},gh={blur:!0,focus:!0};
p("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=Ea("ng-"+a);dd[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b]);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};gh[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var We=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,
terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var k,h,l;d.$watch(e.ngIf,function(d){d?h||g(function(d,f){h=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);k={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=vb(k.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),k=null))})}}}],Xe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:$.noop,compile:function(c,
e){var f=e.ngInclude||e.src,g=e.onload||"",k=e.autoscroll;return function(c,e,m,n,q){var p=0,r,z,v,s=function(){z&&(z.remove(),z=null);r&&(r.$destroy(),r=null);v&&(d.leave(v).done(function(a){!1!==a&&(z=null)}),z=v,v=null)};c.$watch(f,function(f){var m=function(a){!1===a||!t(k)||k&&!c.$eval(k)||b()},y=++p;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&y===p){var b=c.$new();n.template=a;a=q(b,function(a){s();d.enter(a,null,e).done(m)});r=b;v=a;r.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||
y!==p||(s(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(s(),n.template=null)})}}}}],of=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){ha.call(d[0]).match(/SVG/)?(d.empty(),a(fd(e.template,u.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ye=Qa({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),kf=function(){return{restrict:"A",
priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?Q(e):e;c.$parsers.push(function(a){if(!w(a)){var b=[];a&&p(a.split(g),function(a){a&&b.push(f?Q(a):a)});return b}});c.$formatters.push(function(a){if(I(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},pb="ng-valid",$d="ng-invalid",Za="ng-pristine",Tb="ng-dirty",rb=M("ngModel");Qb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");
Qb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);A(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){A(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw rb("nonassign",this.$$attr.ngModel,Aa(this.$$element));},$render:C,$isEmpty:function(a){return w(a)||
""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Tb);this.$$animate.addClass(this.$$element,Za)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,
Za);this.$$animate.addClass(this.$$element,Tb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!T(this.$modelValue)){var a=
this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;p(h.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(p(h.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;p(h.$asyncValidators,function(e,
g){var h=e(a,b);if(!h||!A(h.then))throw rb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?h.$$q.all(c).then(function(){g(d)},C):g(!0)}function f(a,b){k===h.$$currentValidationRunId&&h.$setValidity(a,b)}function g(a){k===h.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var k=this.$$currentValidationRunId,h=this;(function(){var a=h.$$parserName||"parse";if(w(h.$$parserValid))f(a,null);else return h.$$parserValid||(p(h.$validators,function(a,
b){f(b,null)}),p(h.$asyncValidators,function(a,b){f(b,null)})),f(a,h.$$parserValid),h.$$parserValid;return!0})()?c()?e():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;if(this.$$parserValid=
w(a)?void 0:!0)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),w(a)){this.$$parserValid=!1;break}T(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,
this.$modelValue);p(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");Y(b[a])?b=b[a]:Y(b["default"])&&(b=b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$scope.$root.$$phase?
this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},$overrideModelOptions:function(a){this.$options=this.$options.createChild(a)}};ae({clazz:Qb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var jf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Qb,priority:1,compile:function(b){b.addClass(Za).addClass("ng-untouched").addClass(pb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=
f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){k.$setTouched()}var k=f[0];if(k.$options.getOption("updateOn"))c.on(k.$options.getOption("updateOn"),function(a){k.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){k.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Rb,hh=/(\s+|^)default(\s+|$)/;Jc.prototype=
{getOption:function(a){return this.$$options[a]},createChild:function(a){var b=!1;a=P({},a);p(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=Q(d.replace(hh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ge(a,this.$$options));ge(a,Rb.$$options);return new Jc(a)}};Rb=new Jc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,
timezone:null});var nf=function(){function a(a,d){this.$$attrs=a;this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Rb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},Ze=Qa({terminal:!0,priority:1E3}),ih=M("ngOptions"),jh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
gf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!p&&xa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(jh);if(!n)throw ih("iexp",a,Aa(b));var q=n[5]||n[7],p=n[6];a=/ as /.test(n[0])&&n[1];var r=n[9];b=d(n[2]?n[1]:q);var z=a&&d(a)||b,t=r&&d(r),s=r?function(a,b){return t(c,b)}:function(a){return Pa(a)},
w=function(a,b){return s(a,A(a,b))},u=d(n[2]||n[1]),y=d(n[3]||""),J=d(n[4]||""),H=d(n[8]),B={},A=p?function(a,b){B[p]=b;B[q]=a;return B}:function(a){B[q]=a;return B};return{trackBy:r,getTrackByValue:w,getWatchables:d(H,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var k=a===d?g:d[g],l=a[k],k=A(l,k),l=s(l,k);b.push(l);if(n[2]||n[1])l=u(c,k),b.push(l);n[4]&&(k=J(c,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},d=H(c)||[],g=f(d),k=g.length,n=0;n<k;n++){var q=d===
g?n:g[n],p=A(d[q],q),t=z(c,p),q=s(t,p),v=u(c,p),G=y(c,p),p=J(c,p),t=new e(q,t,v,G,p);a.push(t);b[q]=t}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[w(a)]},getViewValueFromOption:function(a){return r?pa(a.viewValue):a.viewValue}}}}}var e=u.document.createElement("option"),f=u.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=C},post:function(d,k,h,l){function m(a){var b=(a=s.getOptionFromViewValue(a))&&
a.element;b&&!b.selected&&(b.selected=!0);return a}function n(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var q=l[0],r=l[1],w=h.multiple;l=0;for(var z=k.children(),v=z.length;l<v;l++)if(""===z[l].value){q.hasEmptyOption=!0;q.emptyOption=z.eq(l);break}k.empty();l=!!q.emptyOption;B(e.cloneNode(!1)).val("?");var s,u=c(h.ngOptions,k,d),A=b[0].createDocumentFragment();q.generateUnknownOptionValue=function(a){return"?"};w?(q.writeValue=
function(a){if(s){var b=a&&a.map(m)||[];s.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},q.readValue=function(){var a=k.val()||[],b=[];p(a,function(a){(a=s.selectValueMap[a])&&!a.disabled&&b.push(s.getViewValueFromOption(a))});return b},u.trackBy&&d.$watchCollection(function(){if(I(r.$viewValue))return r.$viewValue.map(function(a){return u.getTrackByValue(a)})},function(){r.$render()})):(q.writeValue=function(a){if(s){var b=k[0].options[k[0].selectedIndex],
c=s.getOptionFromViewValue(a);b&&b.removeAttribute("selected");c?(k[0].value!==c.selectValue&&(q.removeUnknownOption(),k[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):q.selectUnknownOrEmptyOption(a)}},q.readValue=function(){var a=s.selectValueMap[k.val()];return a&&!a.disabled?(q.unselectEmptyOption(),q.removeUnknownOption(),s.getViewValueFromOption(a)):null},u.trackBy&&d.$watch(function(){return u.getTrackByValue(r.$viewValue)},function(){r.$render()}));
l&&(a(q.emptyOption)(d),k.prepend(q.emptyOption),8===q.emptyOption[0].nodeType?(q.hasEmptyOption=!1,q.registerOption=function(a,b){""===b.val()&&(q.hasEmptyOption=!0,q.emptyOption=b,q.emptyOption.removeClass("ng-scope"),r.$render(),b.on("$destroy",function(){var a=q.$isEmptyOptionSelected();q.hasEmptyOption=!1;q.emptyOption=void 0;a&&r.$render()}))}):q.emptyOption.removeClass("ng-scope"));d.$watchCollection(u.getWatchables,function(){var a=s&&q.readValue();if(s)for(var b=s.items.length-1;0<=b;b--){var c=
s.items[b];t(c.group)?Gb(c.element.parentNode):Gb(c.element)}s=u.getOptions();var d={};s.items.forEach(function(a){var b;if(t(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),A.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=e.cloneNode(!1);b.appendChild(c);n(a,c)}else b=e.cloneNode(!1),A.appendChild(b),n(a,b)});k[0].appendChild(A);r.$render();r.$isEmpty(a)||(b=q.readValue(),(u.trackBy||w?sa(a,b):a===b)||(r.$setViewValue(b),r.$render()))})}}}}],$e=["$locale","$interpolate","$log",
function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,k){function h(a){g.text(a||"")}var l=k.count,m=k.$attr.when&&g.attr(k.$attr.when),n=k.offset||0,q=f.$eval(m)||{},r={},t=b.startSymbol(),z=b.endSymbol(),v=t+l+"-"+n+z,s=$.noop,u;p(k,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+N(c[2]),q[c]=g.attr(k.$attr[b]))});p(q,function(a,d){r[d]=b(a.replace(c,v))});f.$watch(l,function(b){var c=parseFloat(b),e=T(c);e||c in q||(c=a.pluralCat(c-n));c===u||e&&T(u)||(s(),e=r[c],w(e)?(null!=
b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),s=C,h()):s=f.$watch(e,h),u=c)})}}}],af=["$parse","$animate","$compile",function(a,b,d){var c=M("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var k=g.ngRepeat,h=d.$$createComment("end ngRepeat",k),l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!l)throw c("iexp",k);var m=l[1],n=l[2],q=l[3],r=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var t=l[3]||l[1],z=l[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw c("badident",q);var v,s,u,w,y={$id:Pa};r?v=a(r):(u=function(a,b){return Pa(b)},w=function(a){return a});return function(a,d,f,g,l){v&&(s=function(b,c,d){z&&(y[z]=b);y[t]=c;y.$index=
d;return v(a,y)});var m=S();a.$watchCollection(n,function(f){var g,n,r=d[0],v,y=S(),B,A,G,C,E,D,I;q&&(a[q]=f);if(xa(f))E=f,n=s||u;else for(I in n=s||w,E=[],f)ra.call(f,I)&&"$"!==I.charAt(0)&&E.push(I);B=E.length;I=Array(B);for(g=0;g<B;g++)if(A=f===E?g:E[g],G=f[A],C=n(A,G,g),m[C])D=m[C],delete m[C],y[C]=D,I[g]=D;else{if(y[C])throw p(I,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",k,C,G);I[g]={id:C,scope:void 0,clone:void 0};y[C]=!0}for(v in m){D=m[v];C=vb(D.clone);b.leave(C);if(C[0].parentNode)for(g=
0,n=C.length;g<n;g++)C[g].$$NG_REMOVED=!0;D.scope.$destroy()}for(g=0;g<B;g++)if(A=f===E?g:E[g],G=f[A],D=I[g],D.scope){v=r;do v=v.nextSibling;while(v&&v.$$NG_REMOVED);D.clone[0]!==v&&b.move(vb(D.clone),null,r);r=D.clone[D.clone.length-1];e(D.scope,g,t,G,z,A,B)}else l(function(a,c){D.scope=c;var d=h.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;D.clone=a;y[D.id]=D;e(D.scope,g,t,G,z,A,B)});m=y})}}}}],bf=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,
function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ve=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],cf=Qa(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&p(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),df=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(d,c,e,f){var g=[],k=[],h=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){for(var d,e;h.length;)a.cancel(h.pop());d=0;for(e=l.length;d<e;++d){var r=vb(k[d].clone);l[d].$destroy();(h[d]=a.leave(r)).done(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&p(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");k.push({clone:d});a.enter(d,f.parent(),
f)})})})}}}],ef=Qa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});p(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),ff=Qa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),kh=M("ngTransclude"),
hf=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,k){function h(){d(a,function(a){b.append(a)})}if(!k)throw kh("orphan",Aa(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;k(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Oa||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(h(),c.$destroy())},null,f);f&&!k.isSlotFilled(f)&&
h()}}}}],Je=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],lh={$setViewValue:C,$render:C},mh=["$element","$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Ib;e.selectValueMap={};e.ngModelCtrl=lh;
e.multiple=!1;e.unknownOption=B(u.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);Ga(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Ga(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+Pa(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&
e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Ga(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&Ga(e.emptyOption,!1)};b.$on("$destroy",function(){e.renderUnknownOption=C});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Ga(B(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=Pa(b),a.val(c in e.selectValueMap?
c:b),Ga(B(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Ia(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===
e.unknownOption[0]};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){null==a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a)};var g=!1,k=!1;e.registerOption=function(a,b,f,g,k){if(f.$attr.ngValue){var p,r=NaN;f.$observe("value",function(a){var d,f=b.prop("selected");t(r)&&(e.removeOption(p),delete e.selectValueMap[r],
d=!0);r=Pa(a);p=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");t(p)&&(e.removeOption(p),d=!0);p=a;e.addOption(a,b);d&&f&&c()}):k?a.$watch(k,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});
b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Ke=function(){return{restrict:"E",require:["select","?ngModel"],controller:mh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];p(b.find("option"),function(b){b.selected&&!b.disabled&&
(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){p(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Ga(B(b),c)})};var g,k=NaN;a.$watch(function(){k!==f.$viewValue||sa(g,f.$viewValue)||(g=ja(f.$viewValue),f.$render());k=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=C},post:function(a,b,d,c){var e=
c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Le=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;t(d.ngValue)||(t(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var h=b.parent();(h=h.data("$selectController")||h.parent().data("$selectController"))&&h.registerOption(a,b,d,c,e)}}}}],ad=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=
function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},$c=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){D(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw M("ngPattern")("noregexp",f,a,Aa(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||w(e)||e.test(b)}}}}},cd=function(){return{restrict:"A",require:"?ngModel",
link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=Z(a);e=T(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},bd=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};u.angular.bootstrap?u.console&&console.log("WARNING: Tried to load angular more than once."):
(Be(),Ee($),$.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,
minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),B(function(){we(u.document,Uc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
;/**
 * @license AngularJS v1.6.5
 * (c) 2010-2017 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular) {'use strict';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *     Any commits to this file should be reviewed with security in mind.  *
 *   Changes to this file can potentially create security vulnerabilities. *
 *          An approval from 2 Core members with history of modifying      *
 *                         this file is required.                          *
 *                                                                         *
 *  Does the change somehow allow for arbitrary javascript to be executed? *
 *    Or allows for someone to change the prototype of built-in objects?   *
 *     Or gives undesired access to variables likes document or window?    *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var $sanitizeMinErr = angular.$$minErr('$sanitize');
var bind;
var extend;
var forEach;
var isDefined;
var lowercase;
var noop;
var nodeContains;
var htmlParser;
var htmlSanitizeWriter;

/**
 * @ngdoc module
 * @name ngSanitize
 * @description
 *
 * # ngSanitize
 *
 * The `ngSanitize` module provides functionality to sanitize HTML.
 *
 *
 * <div doc-module-components="ngSanitize"></div>
 *
 * See {@link ngSanitize.$sanitize `$sanitize`} for usage.
 */

/**
 * @ngdoc service
 * @name $sanitize
 * @kind function
 *
 * @description
 *   Sanitizes an html string by stripping all potentially dangerous tokens.
 *
 *   The input is sanitized by parsing the HTML into tokens. All safe tokens (from a whitelist) are
 *   then serialized back to properly escaped html string. This means that no unsafe input can make
 *   it into the returned string.
 *
 *   The whitelist for URL sanitization of attribute values is configured using the functions
 *   `aHrefSanitizationWhitelist` and `imgSrcSanitizationWhitelist` of {@link ng.$compileProvider
 *   `$compileProvider`}.
 *
 *   The input may also contain SVG markup if this is enabled via {@link $sanitizeProvider}.
 *
 * @param {string} html HTML input.
 * @returns {string} Sanitized HTML.
 *
 * @example
   <example module="sanitizeExample" deps="angular-sanitize.js" name="sanitize-service">
   <file name="index.html">
     <script>
         angular.module('sanitizeExample', ['ngSanitize'])
           .controller('ExampleController', ['$scope', '$sce', function($scope, $sce) {
             $scope.snippet =
               '<p style="color:blue">an html\n' +
               '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
               'snippet</p>';
             $scope.deliberatelyTrustDangerousSnippet = function() {
               return $sce.trustAsHtml($scope.snippet);
             };
           }]);
     </script>
     <div ng-controller="ExampleController">
        Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <td>Directive</td>
           <td>How</td>
           <td>Source</td>
           <td>Rendered</td>
         </tr>
         <tr id="bind-html-with-sanitize">
           <td>ng-bind-html</td>
           <td>Automatically uses $sanitize</td>
           <td><pre>&lt;div ng-bind-html="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
           <td><div ng-bind-html="snippet"></div></td>
         </tr>
         <tr id="bind-html-with-trust">
           <td>ng-bind-html</td>
           <td>Bypass $sanitize by explicitly trusting the dangerous value</td>
           <td>
           <pre>&lt;div ng-bind-html="deliberatelyTrustDangerousSnippet()"&gt;
&lt;/div&gt;</pre>
           </td>
           <td><div ng-bind-html="deliberatelyTrustDangerousSnippet()"></div></td>
         </tr>
         <tr id="bind-default">
           <td>ng-bind</td>
           <td>Automatically escapes</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
       </div>
   </file>
   <file name="protractor.js" type="protractor">
     it('should sanitize the html snippet by default', function() {
       expect(element(by.css('#bind-html-with-sanitize div')).getAttribute('innerHTML')).
         toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
     });

     it('should inline raw snippet if bound to a trusted value', function() {
       expect(element(by.css('#bind-html-with-trust div')).getAttribute('innerHTML')).
         toBe("<p style=\"color:blue\">an html\n" +
              "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
              "snippet</p>");
     });

     it('should escape snippet without any filter', function() {
       expect(element(by.css('#bind-default div')).getAttribute('innerHTML')).
         toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
              "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
              "snippet&lt;/p&gt;");
     });

     it('should update', function() {
       element(by.model('snippet')).clear();
       element(by.model('snippet')).sendKeys('new <b onclick="alert(1)">text</b>');
       expect(element(by.css('#bind-html-with-sanitize div')).getAttribute('innerHTML')).
         toBe('new <b>text</b>');
       expect(element(by.css('#bind-html-with-trust div')).getAttribute('innerHTML')).toBe(
         'new <b onclick="alert(1)">text</b>');
       expect(element(by.css('#bind-default div')).getAttribute('innerHTML')).toBe(
         "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
     });
   </file>
   </example>
 */


/**
 * @ngdoc provider
 * @name $sanitizeProvider
 * @this
 *
 * @description
 * Creates and configures {@link $sanitize} instance.
 */
function $SanitizeProvider() {
  var svgEnabled = false;

  this.$get = ['$$sanitizeUri', function($$sanitizeUri) {
    if (svgEnabled) {
      extend(validElements, svgElements);
    }
    return function(html) {
      var buf = [];
      htmlParser(html, htmlSanitizeWriter(buf, function(uri, isImage) {
        return !/^unsafe:/.test($$sanitizeUri(uri, isImage));
      }));
      return buf.join('');
    };
  }];


  /**
   * @ngdoc method
   * @name $sanitizeProvider#enableSvg
   * @kind function
   *
   * @description
   * Enables a subset of svg to be supported by the sanitizer.
   *
   * <div class="alert alert-warning">
   *   <p>By enabling this setting without taking other precautions, you might expose your
   *   application to click-hijacking attacks. In these attacks, sanitized svg elements could be positioned
   *   outside of the containing element and be rendered over other elements on the page (e.g. a login
   *   link). Such behavior can then result in phishing incidents.</p>
   *
   *   <p>To protect against these, explicitly setup `overflow: hidden` css rule for all potential svg
   *   tags within the sanitized content:</p>
   *
   *   <br>
   *
   *   <pre><code>
   *   .rootOfTheIncludedContent svg {
   *     overflow: hidden !important;
   *   }
   *   </code></pre>
   * </div>
   *
   * @param {boolean=} flag Enable or disable SVG support in the sanitizer.
   * @returns {boolean|ng.$sanitizeProvider} Returns the currently configured value if called
   *    without an argument or self for chaining otherwise.
   */
  this.enableSvg = function(enableSvg) {
    if (isDefined(enableSvg)) {
      svgEnabled = enableSvg;
      return this;
    } else {
      return svgEnabled;
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Private stuff
  //////////////////////////////////////////////////////////////////////////////////////////////////

  bind = angular.bind;
  extend = angular.extend;
  forEach = angular.forEach;
  isDefined = angular.isDefined;
  lowercase = angular.lowercase;
  noop = angular.noop;

  htmlParser = htmlParserImpl;
  htmlSanitizeWriter = htmlSanitizeWriterImpl;

  nodeContains = window.Node.prototype.contains || /** @this */ function(arg) {
    // eslint-disable-next-line no-bitwise
    return !!(this.compareDocumentPosition(arg) & 16);
  };

  // Regular Expressions for parsing tags and attributes
  var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    // Match everything outside of normal chars and " (quote character)
    NON_ALPHANUMERIC_REGEXP = /([^#-~ |!])/g;


  // Good source of info about elements and attributes
  // http://dev.w3.org/html5/spec/Overview.html#semantics
  // http://simon.html5.org/html-elements

  // Safe Void Elements - HTML5
  // http://dev.w3.org/html5/spec/Overview.html#void-elements
  var voidElements = toMap('area,br,col,hr,img,wbr');

  // Elements that you can, intentionally, leave open (and which close themselves)
  // http://dev.w3.org/html5/spec/Overview.html#optional-tags
  var optionalEndTagBlockElements = toMap('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
      optionalEndTagInlineElements = toMap('rp,rt'),
      optionalEndTagElements = extend({},
                                              optionalEndTagInlineElements,
                                              optionalEndTagBlockElements);

  // Safe Block Elements - HTML5
  var blockElements = extend({}, optionalEndTagBlockElements, toMap('address,article,' +
          'aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' +
          'h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul'));

  // Inline Elements - HTML5
  var inlineElements = extend({}, optionalEndTagInlineElements, toMap('a,abbr,acronym,b,' +
          'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,' +
          'samp,small,span,strike,strong,sub,sup,time,tt,u,var'));

  // SVG Elements
  // https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Elements
  // Note: the elements animate,animateColor,animateMotion,animateTransform,set are intentionally omitted.
  // They can potentially allow for arbitrary javascript to be executed. See #11290
  var svgElements = toMap('circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,' +
          'hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,' +
          'radialGradient,rect,stop,svg,switch,text,title,tspan');

  // Blocked Elements (will be stripped)
  var blockedElements = toMap('script,style');

  var validElements = extend({},
                                     voidElements,
                                     blockElements,
                                     inlineElements,
                                     optionalEndTagElements);

  //Attributes that have href and hence need to be sanitized
  var uriAttrs = toMap('background,cite,href,longdesc,src,xlink:href');

  var htmlAttrs = toMap('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,' +
      'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,' +
      'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,' +
      'scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,' +
      'valign,value,vspace,width');

  // SVG attributes (without "id" and "name" attributes)
  // https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Attributes
  var svgAttrs = toMap('accent-height,accumulate,additive,alphabetic,arabic-form,ascent,' +
      'baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,' +
      'cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,' +
      'font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,' +
      'height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,' +
      'marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,' +
      'max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,' +
      'path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,' +
      'requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,' +
      'stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,' +
      'stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,' +
      'stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,' +
      'underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,' +
      'width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,' +
      'xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan', true);

  var validAttrs = extend({},
                                  uriAttrs,
                                  svgAttrs,
                                  htmlAttrs);

  function toMap(str, lowercaseKeys) {
    var obj = {}, items = str.split(','), i;
    for (i = 0; i < items.length; i++) {
      obj[lowercaseKeys ? lowercase(items[i]) : items[i]] = true;
    }
    return obj;
  }

  /**
   * Create an inert document that contains the dirty HTML that needs sanitizing
   * Depending upon browser support we use one of three strategies for doing this.
   * Support: Safari 10.x -> XHR strategy
   * Support: Firefox -> DomParser strategy
   */
  var getInertBodyElement /* function(html: string): HTMLBodyElement */ = (function(window, document) {
    var inertDocument;
    if (document && document.implementation) {
      inertDocument = document.implementation.createHTMLDocument('inert');
    } else {
      throw $sanitizeMinErr('noinert', 'Can\'t create an inert html document');
    }
    var inertBodyElement = (inertDocument.documentElement || inertDocument.getDocumentElement()).querySelector('body');

    // Check for the Safari 10.1 bug - which allows JS to run inside the SVG G element
    inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>';
    if (!inertBodyElement.querySelector('svg')) {
      return getInertBodyElement_XHR;
    } else {
      // Check for the Firefox bug - which prevents the inner img JS from being sanitized
      inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">';
      if (inertBodyElement.querySelector('svg img')) {
        return getInertBodyElement_DOMParser;
      } else {
        return getInertBodyElement_InertDocument;
      }
    }

    function getInertBodyElement_XHR(html) {
      // We add this dummy element to ensure that the rest of the content is parsed as expected
      // e.g. leading whitespace is maintained and tags like `<meta>` do not get hoisted to the `<head>` tag.
      html = '<remove></remove>' + html;
      try {
        html = encodeURI(html);
      } catch (e) {
        return undefined;
      }
      var xhr = new window.XMLHttpRequest();
      xhr.responseType = 'document';
      xhr.open('GET', 'data:text/html;charset=utf-8,' + html, false);
      xhr.send(null);
      var body = xhr.response.body;
      body.firstChild.remove();
      return body;
    }

    function getInertBodyElement_DOMParser(html) {
      // We add this dummy element to ensure that the rest of the content is parsed as expected
      // e.g. leading whitespace is maintained and tags like `<meta>` do not get hoisted to the `<head>` tag.
      html = '<remove></remove>' + html;
      try {
        var body = new window.DOMParser().parseFromString(html, 'text/html').body;
        body.firstChild.remove();
        return body;
      } catch (e) {
        return undefined;
      }
    }

    function getInertBodyElement_InertDocument(html) {
      inertBodyElement.innerHTML = html;

      // Support: IE 9-11 only
      // strip custom-namespaced attributes on IE<=11
      if (document.documentMode) {
        stripCustomNsAttrs(inertBodyElement);
      }

      return inertBodyElement;
    }
  })(window, window.document);

  /**
   * @example
   * htmlParser(htmlString, {
   *     start: function(tag, attrs) {},
   *     end: function(tag) {},
   *     chars: function(text) {},
   *     comment: function(text) {}
   * });
   *
   * @param {string} html string
   * @param {object} handler
   */
  function htmlParserImpl(html, handler) {
    if (html === null || html === undefined) {
      html = '';
    } else if (typeof html !== 'string') {
      html = '' + html;
    }

    var inertBodyElement = getInertBodyElement(html);
    if (!inertBodyElement) return '';

    //mXSS protection
    var mXSSAttempts = 5;
    do {
      if (mXSSAttempts === 0) {
        throw $sanitizeMinErr('uinput', 'Failed to sanitize html because the input is unstable');
      }
      mXSSAttempts--;

      // trigger mXSS if it is going to happen by reading and writing the innerHTML
      html = inertBodyElement.innerHTML;
      inertBodyElement = getInertBodyElement(html);
    } while (html !== inertBodyElement.innerHTML);

    var node = inertBodyElement.firstChild;
    while (node) {
      switch (node.nodeType) {
        case 1: // ELEMENT_NODE
          handler.start(node.nodeName.toLowerCase(), attrToMap(node.attributes));
          break;
        case 3: // TEXT NODE
          handler.chars(node.textContent);
          break;
      }

      var nextNode;
      if (!(nextNode = node.firstChild)) {
        if (node.nodeType === 1) {
          handler.end(node.nodeName.toLowerCase());
        }
        nextNode = getNonDescendant('nextSibling', node);
        if (!nextNode) {
          while (nextNode == null) {
            node = getNonDescendant('parentNode', node);
            if (node === inertBodyElement) break;
            nextNode = getNonDescendant('nextSibling', node);
            if (node.nodeType === 1) {
              handler.end(node.nodeName.toLowerCase());
            }
          }
        }
      }
      node = nextNode;
    }

    while ((node = inertBodyElement.firstChild)) {
      inertBodyElement.removeChild(node);
    }
  }

  function attrToMap(attrs) {
    var map = {};
    for (var i = 0, ii = attrs.length; i < ii; i++) {
      var attr = attrs[i];
      map[attr.name] = attr.value;
    }
    return map;
  }


  /**
   * Escapes all potentially dangerous characters, so that the
   * resulting string can be safely inserted into attribute or
   * element text.
   * @param value
   * @returns {string} escaped text
   */
  function encodeEntities(value) {
    return value.
      replace(/&/g, '&amp;').
      replace(SURROGATE_PAIR_REGEXP, function(value) {
        var hi = value.charCodeAt(0);
        var low = value.charCodeAt(1);
        return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
      }).
      replace(NON_ALPHANUMERIC_REGEXP, function(value) {
        return '&#' + value.charCodeAt(0) + ';';
      }).
      replace(/</g, '&lt;').
      replace(/>/g, '&gt;');
  }

  /**
   * create an HTML/XML writer which writes to buffer
   * @param {Array} buf use buf.join('') to get out sanitized html string
   * @returns {object} in the form of {
   *     start: function(tag, attrs) {},
   *     end: function(tag) {},
   *     chars: function(text) {},
   *     comment: function(text) {}
   * }
   */
  function htmlSanitizeWriterImpl(buf, uriValidator) {
    var ignoreCurrentElement = false;
    var out = bind(buf, buf.push);
    return {
      start: function(tag, attrs) {
        tag = lowercase(tag);
        if (!ignoreCurrentElement && blockedElements[tag]) {
          ignoreCurrentElement = tag;
        }
        if (!ignoreCurrentElement && validElements[tag] === true) {
          out('<');
          out(tag);
          forEach(attrs, function(value, key) {
            var lkey = lowercase(key);
            var isImage = (tag === 'img' && lkey === 'src') || (lkey === 'background');
            if (validAttrs[lkey] === true &&
              (uriAttrs[lkey] !== true || uriValidator(value, isImage))) {
              out(' ');
              out(key);
              out('="');
              out(encodeEntities(value));
              out('"');
            }
          });
          out('>');
        }
      },
      end: function(tag) {
        tag = lowercase(tag);
        if (!ignoreCurrentElement && validElements[tag] === true && voidElements[tag] !== true) {
          out('</');
          out(tag);
          out('>');
        }
        // eslint-disable-next-line eqeqeq
        if (tag == ignoreCurrentElement) {
          ignoreCurrentElement = false;
        }
      },
      chars: function(chars) {
        if (!ignoreCurrentElement) {
          out(encodeEntities(chars));
        }
      }
    };
  }


  /**
   * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1' attribute to declare
   * ns1 namespace and prefixes the attribute with 'ns1' (e.g. 'ns1:xlink:foo'). This is undesirable since we don't want
   * to allow any of these custom attributes. This method strips them all.
   *
   * @param node Root element to process
   */
  function stripCustomNsAttrs(node) {
    while (node) {
      if (node.nodeType === window.Node.ELEMENT_NODE) {
        var attrs = node.attributes;
        for (var i = 0, l = attrs.length; i < l; i++) {
          var attrNode = attrs[i];
          var attrName = attrNode.name.toLowerCase();
          if (attrName === 'xmlns:ns1' || attrName.lastIndexOf('ns1:', 0) === 0) {
            node.removeAttributeNode(attrNode);
            i--;
            l--;
          }
        }
      }

      var nextNode = node.firstChild;
      if (nextNode) {
        stripCustomNsAttrs(nextNode);
      }

      node = getNonDescendant('nextSibling', node);
    }
  }

  function getNonDescendant(propName, node) {
    // An element is clobbered if its `propName` property points to one of its descendants
    var nextNode = node[propName];
    if (nextNode && nodeContains.call(node, nextNode)) {
      throw $sanitizeMinErr('elclob', 'Failed to sanitize html because the element is clobbered: {0}', node.outerHTML || node.outerText);
    }
    return nextNode;
  }
}

function sanitizeText(chars) {
  var buf = [];
  var writer = htmlSanitizeWriter(buf, noop);
  writer.chars(chars);
  return buf.join('');
}


// define ngSanitize module and register $sanitize service
angular.module('ngSanitize', [])
  .provider('$sanitize', $SanitizeProvider)
  .info({ angularVersion: '1.6.5' });

/**
 * @ngdoc filter
 * @name linky
 * @kind function
 *
 * @description
 * Finds links in text input and turns them into html links. Supports `http/https/ftp/mailto` and
 * plain email address links.
 *
 * Requires the {@link ngSanitize `ngSanitize`} module to be installed.
 *
 * @param {string} text Input text.
 * @param {string} target Window (`_blank|_self|_parent|_top`) or named frame to open links in.
 * @param {object|function(url)} [attributes] Add custom attributes to the link element.
 *
 *    Can be one of:
 *
 *    - `object`: A map of attributes
 *    - `function`: Takes the url as a parameter and returns a map of attributes
 *
 *    If the map of attributes contains a value for `target`, it overrides the value of
 *    the target parameter.
 *
 *
 * @returns {string} Html-linkified and {@link $sanitize sanitized} text.
 *
 * @usage
   <span ng-bind-html="linky_expression | linky"></span>
 *
 * @example
   <example module="linkyExample" deps="angular-sanitize.js" name="linky-filter">
     <file name="index.html">
       <div ng-controller="ExampleController">
       Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <th>Filter</th>
           <th>Source</th>
           <th>Rendered</th>
         </tr>
         <tr id="linky-filter">
           <td>linky filter</td>
           <td>
             <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
           </td>
           <td>
             <div ng-bind-html="snippet | linky"></div>
           </td>
         </tr>
         <tr id="linky-target">
          <td>linky target</td>
          <td>
            <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
          </td>
          <td>
            <div ng-bind-html="snippetWithSingleURL | linky:'_blank'"></div>
          </td>
         </tr>
         <tr id="linky-custom-attributes">
          <td>linky custom attributes</td>
          <td>
            <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"&gt;<br>&lt;/div&gt;</pre>
          </td>
          <td>
            <div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"></div>
          </td>
         </tr>
         <tr id="escaped-html">
           <td>no filter</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
     </file>
     <file name="script.js">
       angular.module('linkyExample', ['ngSanitize'])
         .controller('ExampleController', ['$scope', function($scope) {
           $scope.snippet =
             'Pretty text with some links:\n' +
             'http://angularjs.org/,\n' +
             'mailto:us@somewhere.org,\n' +
             'another@somewhere.org,\n' +
             'and one more: ftp://127.0.0.1/.';
           $scope.snippetWithSingleURL = 'http://angularjs.org/';
         }]);
     </file>
     <file name="protractor.js" type="protractor">
       it('should linkify the snippet with urls', function() {
         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
             toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
         expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
       });

       it('should not linkify snippet without the linky filter', function() {
         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText()).
             toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
         expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
       });

       it('should update', function() {
         element(by.model('snippet')).clear();
         element(by.model('snippet')).sendKeys('new http://link.');
         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
             toBe('new http://link.');
         expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText())
             .toBe('new http://link.');
       });

       it('should work with the target property', function() {
        expect(element(by.id('linky-target')).
            element(by.binding("snippetWithSingleURL | linky:'_blank'")).getText()).
            toBe('http://angularjs.org/');
        expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
       });

       it('should optionally add custom attributes', function() {
        expect(element(by.id('linky-custom-attributes')).
            element(by.binding("snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}")).getText()).
            toBe('http://angularjs.org/');
        expect(element(by.css('#linky-custom-attributes a')).getAttribute('rel')).toEqual('nofollow');
       });
     </file>
   </example>
 */
angular.module('ngSanitize').filter('linky', ['$sanitize', function($sanitize) {
  var LINKY_URL_REGEXP =
        /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
      MAILTO_REGEXP = /^mailto:/i;

  var linkyMinErr = angular.$$minErr('linky');
  var isDefined = angular.isDefined;
  var isFunction = angular.isFunction;
  var isObject = angular.isObject;
  var isString = angular.isString;

  return function(text, target, attributes) {
    if (text == null || text === '') return text;
    if (!isString(text)) throw linkyMinErr('notstring', 'Expected string but received: {0}', text);

    var attributesFn =
      isFunction(attributes) ? attributes :
      isObject(attributes) ? function getAttributesObject() {return attributes;} :
      function getEmptyAttributesObject() {return {};};

    var match;
    var raw = text;
    var html = [];
    var url;
    var i;
    while ((match = raw.match(LINKY_URL_REGEXP))) {
      // We can not end in these as they are sometimes found at the end of the sentence
      url = match[0];
      // if we did not match ftp/http/www/mailto then assume mailto
      if (!match[2] && !match[4]) {
        url = (match[3] ? 'http://' : 'mailto:') + url;
      }
      i = match.index;
      addText(raw.substr(0, i));
      addLink(url, match[0].replace(MAILTO_REGEXP, ''));
      raw = raw.substring(i + match[0].length);
    }
    addText(raw);
    return $sanitize(html.join(''));

    function addText(text) {
      if (!text) {
        return;
      }
      html.push(sanitizeText(text));
    }

    function addLink(url, text) {
      var key, linkAttributes = attributesFn(url);
      html.push('<a ');

      for (key in linkAttributes) {
        html.push(key + '="' + linkAttributes[key] + '" ');
      }

      if (isDefined(target) && !('target' in linkAttributes)) {
        html.push('target="',
                  target,
                  '" ');
      }
      html.push('href="',
                url.replace(/"/g, '&quot;'),
                '">');
      addText(text);
      html.push('</a>');
    }
  };
}]);


})(window, window.angular);
;/*! jQuery v3.2.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a);
}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}}),r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var _a,ab=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?_a:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),_a={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ab[b]||r.find.attr;ab[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ab[g],ab[g]=e,e=null!=c(a,b,d)?g:null,ab[g]=f),e}});var bb=/^(?:input|select|textarea|button)$/i,cb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function db(a){var b=a.match(L)||[];return b.join(" ")}function eb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,eb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=eb(c),d=1===c.nodeType&&" "+db(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=db(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,eb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=eb(c),d=1===c.nodeType&&" "+db(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=db(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,eb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=eb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+db(eb(c))+" ").indexOf(b)>-1)return!0;return!1}});var fb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(fb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:db(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var gb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!gb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,gb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var hb=/\[\]$/,ib=/\r?\n/g,jb=/^(?:submit|button|image|reset|file)$/i,kb=/^(?:input|select|textarea|keygen)/i;function lb(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||hb.test(a)?d(a,e):lb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d);
});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)lb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)lb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&kb.test(this.nodeName)&&!jb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ib,"\r\n")}}):{name:b.name,value:c.replace(ib,"\r\n")}}).get()}}),r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var mb=a.jQuery,nb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=nb),b&&a.jQuery===r&&(a.jQuery=mb),r},b||(a.jQuery=a.$=r),r});
;/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);;/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=window.getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e||-1!==['HTML','BODY','#document'].indexOf(e.nodeName))return window.document.body;var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:window.document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return window.document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||i.contains(n))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=window.document.documentElement,r=window.document.scrollingElement||n;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function f(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return+e['border'+o+'Width'].split('px')[0]+ +e['border'+i+'Width'].split('px')[0]}function m(e,t,o,i){return X(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ne()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function c(){var e=window.document.body,t=window.document.documentElement,o=ne()&&window.getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function h(e){return de({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ne())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?c():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return h(r)}function u(e,o){var i=ne(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),f=+a.borderTopWidth.split('px')[0],m=+a.borderLeftWidth.split('px')[0],c=h({top:p.top-s.top-f,left:p.left-s.left-m,width:p.width,height:p.height});if(c.marginTop=0,c.marginLeft=0,!i&&r){var u=+a.marginTop.split('px')[0],b=+a.marginLeft.split('px')[0];c.top-=f-u,c.bottom-=f-u,c.left-=m-b,c.right-=m-b,c.marginTop=u,c.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(c=l(c,o)),c}function b(e){var t=window.document.documentElement,o=u(e,t),i=X(t.clientWidth,window.innerWidth||0),n=X(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return h(s)}function y(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||y(o(e))}function w(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(e)),'BODY'===a.nodeName&&(a=window.document.documentElement)):'window'===r?a=window.document.documentElement:a=r;var l=u(a,s);if('HTML'===a.nodeName&&!y(s)){var f=c(),m=f.height,h=f.width;p.top+=l.top-l.marginTop,p.bottom=m+l.top,p.left+=l.left-l.marginLeft,p.right=h+l.left}else p=l}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function E(e){var t=e.width,o=e.height;return t*o}function v(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=w(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return de({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function x(e,t,o){var i=d(t,o);return u(o,i)}function O(e){var t=window.getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function L(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=O(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[L(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function C(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function N(t,o,i){var n=void 0===i?t:t.slice(0,C(t,'name',i));return n.forEach(function(t){t.function&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t.function||t.fn;t.enabled&&e(i)&&(o.offsets.popper=h(o.offsets.popper),o.offsets.reference=h(o.offsets.reference),o=i(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=N(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function D(e,t,o,i){var r='BODY'===e.nodeName,p=r?window:e;p.addEventListener(t,o,{passive:!0}),r||D(n(p.parentNode),t,o,i),i.push(p)}function H(e,t,o,i){o.updateBound=i,window.addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return D(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function A(){this.state.eventsEnabled||(this.state=H(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return window.removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function I(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function R(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&R(t[o])&&(i='px'),e.style[o]=t[o]+i})}function Y(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function j(e){return'end'===e?'start':'start'===e?'end':e}function K(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=le.indexOf(e),i=le.slice(o+1).concat(le.slice(0,o));return t?i.reverse():i}function q(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=h(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?X(document.documentElement.clientHeight,window.innerHeight||0):X(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function G(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return q(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){R(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function z(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=R(+i)?[+i,0]:G(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var V=Math.min,_=Math.floor,X=Math.max,Q=['native code','[object MutationObserverConstructor]'],J=function(e){return Q.some(function(t){return-1<(e||'').toString().indexOf(t)})},Z='undefined'!=typeof window,$=['Edge','Trident','Firefox'],ee=0,te=0;te<$.length;te+=1)if(Z&&0<=navigator.userAgent.indexOf($[te])){ee=1;break}var i,oe=Z&&J(window.MutationObserver),ie=oe?function(e){var t=!1,o=0,i=document.createElement('span'),n=new MutationObserver(function(){e(),t=!1});return n.observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute('x-index',o),++o)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ee))}},ne=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},re=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},pe=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),se=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},de=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ae=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],le=ae.slice(3),fe={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},me=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};re(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=ie(this.update.bind(this)),this.options=de({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o.jquery?o[0]:o,this.popper=i.jquery?i[0]:i,this.options.modifiers={},Object.keys(de({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=de({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return de({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return pe(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return P.call(this)}},{key:'enableEventListeners',value:function(){return A.call(this)}},{key:'disableEventListeners',value:function(){return I.call(this)}}]),t}();return me.Utils=('undefined'==typeof window?global:window).PopperUtils,me.placements=ae,me.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:se({},d,r[d]),end:se({},d,r[d]+r[a]-p[a])};e.offsets.popper=de({},p,l[i])}return e}},offset:{order:200,enabled:!0,fn:z,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=w(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=X(p[e],i[e])),se({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=V(p[o],i[e]-('right'===e?p.width:p.height))),se({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=de({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=_,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var n=e.placement.split('-')[0],r=e.offsets,p=r.popper,s=r.reference,d=-1!==['left','right'].indexOf(n),a=d?'height':'width',l=d?'Top':'Left',f=l.toLowerCase(),m=d?'left':'top',c=d?'bottom':'right',g=O(i)[a];s[c]-g<p[f]&&(e.offsets.popper[f]-=p[f]-(s[c]-g)),s[f]+g>p[c]&&(e.offsets.popper[f]+=s[f]+g-p[c]);var u=s[f]+s[a]/2-g/2,b=t(e.instance.popper,'margin'+l).replace('px',''),y=u-h(e.offsets.popper)[f]-b;return y=X(V(p[a]-g,y),0),e.arrowElement=i,e.offsets.arrow={},e.offsets.arrow[f]=Math.round(y),e.offsets.arrow[m]='',e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=w(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=L(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case fe.FLIP:p=[i,n];break;case fe.CLOCKWISE:p=K(i);break;case fe.COUNTERCLOCKWISE:p=K(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=L(i);var a=e.offsets.popper,l=e.offsets.reference,f=_,m='left'===i&&f(a.right)>f(l.left)||'right'===i&&f(a.left)<f(l.right)||'top'===i&&f(a.bottom)>f(l.top)||'bottom'===i&&f(a.top)<f(l.bottom),c=f(a.left)<f(o.left),h=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===i&&c||'right'===i&&h||'top'===i&&g||'bottom'===i&&u,y=-1!==['top','bottom'].indexOf(i),w=!!t.flipVariations&&(y&&'start'===r&&c||y&&'end'===r&&h||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),w&&(r=j(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=de({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=N(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[o]-(s?n[p?'width':'height']:0),e.placement=L(t),e.offsets.popper=h(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:n.position},c={left:_(n.left),top:_(n.top),bottom:_(n.bottom),right:_(n.right)},h='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=B('transform');if(d='bottom'==h?-f.height+c.bottom:c.top,s='right'==u?-f.width+c.right:c.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[h]=0,m[u]=0,m.willChange='transform';else{var y='bottom'==h?-1:1,w='right'==u?-1:1;m[h]=d*y,m[u]=s*w,m.willChange=h+', '+u}var E={"x-placement":e.placement};return e.attributes=de({},E,e.attributes),e.styles=de({},m,e.styles),e.arrowStyles=de({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return U(e.instance.popper,e.styles),Y(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&U(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=x(n,t,e),p=v(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),U(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},me});
//# sourceMappingURL=popper.min.js.map
;/*
 CanvasJS HTML5 & JavaScript Charts - v2.1.2 GA - https://canvasjs.com/ 
 Copyright 2018 fenopix

  --------------------- License Information --------------------
 CanvasJS is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
     https://canvasjs.com/license/

*/
/*eslint-disable*/
/*jshint ignore:start*/
(function(){function oa(m,q){m.prototype=ab(q.prototype);m.prototype.constructor=m;m.base=q.prototype}function ab(m){function q(){}q.prototype=m;return new q}function Ua(m,q,s){"millisecond"===s?m.setMilliseconds(m.getMilliseconds()+1*q):"second"===s?m.setSeconds(m.getSeconds()+1*q):"minute"===s?m.setMinutes(m.getMinutes()+1*q):"hour"===s?m.setHours(m.getHours()+1*q):"day"===s?m.setDate(m.getDate()+1*q):"week"===s?m.setDate(m.getDate()+7*q):"month"===s?m.setMonth(m.getMonth()+1*q):"year"===s&&m.setFullYear(m.getFullYear()+
1*q);return m}function ha(m,q){var s=!1;0>m&&(s=!0,m*=-1);m=""+m;for(q=q?q:1;m.length<q;)m="0"+m;return s?"-"+m:m}function Ga(m){if(!m)return m;m=m.replace(/^\s\s*/,"");for(var q=/\s/,s=m.length;q.test(m.charAt(--s)););return m.slice(0,s+1)}function Ca(m){m.roundRect=function(m,s,v,y,x,z,R,C){R&&(this.fillStyle=R);C&&(this.strokeStyle=C);"undefined"===typeof x&&(x=5);this.lineWidth=z;this.beginPath();this.moveTo(m+x,s);this.lineTo(m+v-x,s);this.quadraticCurveTo(m+v,s,m+v,s+x);this.lineTo(m+v,s+y-
x);this.quadraticCurveTo(m+v,s+y,m+v-x,s+y);this.lineTo(m+x,s+y);this.quadraticCurveTo(m,s+y,m,s+y-x);this.lineTo(m,s+x);this.quadraticCurveTo(m,s,m+x,s);this.closePath();R&&this.fill();C&&0<z&&this.stroke()}}function Qa(m,q){return m-q}function S(m){var q=((m&16711680)>>16).toString(16),s=((m&65280)>>8).toString(16);m=((m&255)>>0).toString(16);q=2>q.length?"0"+q:q;s=2>s.length?"0"+s:s;m=2>m.length?"0"+m:m;return"#"+q+s+m}function bb(m,q){var s=this.length>>>0,v=Number(q)||0,v=0>v?Math.ceil(v):Math.floor(v);
for(0>v&&(v+=s);v<s;v++)if(v in this&&this[v]===m)return v;return-1}function y(m){return null===m||"undefined"===typeof m}function Da(m){m.indexOf||(m.indexOf=bb);return m}function cb(m){if($.fSDec)m[ja("`eeDwdouMhrudods")](ja("e`u`@ohl`uhnoHuds`uhnoDoe"),function(){$._fTWm&&$._fTWm(m)})}function Va(m,q,s){s=s||"normal";var v=m+"_"+q+"_"+s,y=Wa[v];if(isNaN(y)){try{m="position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:"+m+"; font-size:"+
q+"px; font-weight:"+s+";";if(!qa){var x=document.body;qa=document.createElement("span");qa.innerHTML="";var z=document.createTextNode("Mpgyi");qa.appendChild(z);x.appendChild(qa)}qa.style.display="";qa.setAttribute("style",m);y=Math.round(qa.offsetHeight);qa.style.display="none"}catch(R){y=Math.ceil(1.1*q)}y=Math.max(y,q);Wa[v]=y}return y}function G(m,q){var s=[];if(s={solid:[],shortDash:[3,1],shortDot:[1,1],shortDashDot:[3,1,1,1],shortDashDotDot:[3,1,1,1,1,1],dot:[1,2],dash:[4,2],dashDot:[4,2,1,
2],longDash:[8,2],longDashDot:[8,2,1,2],longDashDotDot:[8,2,1,2,1,2]}[m||"solid"])for(var v=0;v<s.length;v++)s[v]*=q;else s=[];return s}function O(m,q,s,v){return m.addEventListener?(m.addEventListener(q,s,v||!1),s):m.attachEvent?(v=function(q){q=q||window.event;q.preventDefault=q.preventDefault||function(){q.returnValue=!1};q.stopPropagation=q.stopPropagation||function(){q.cancelBubble=!0};s.call(m,q)},m.attachEvent("on"+q,v),v):!1}function Xa(m,q,s){m*=ga;q*=ga;m=s.getImageData(m,q,2,2).data;q=
!0;for(s=0;4>s;s++)if(m[s]!==m[s+4]|m[s]!==m[s+8]|m[s]!==m[s+12]){q=!1;break}return q?m[0]<<16|m[1]<<8|m[2]:0}function ma(m,q,s){return m in q?q[m]:s[m]}function Ha(m,q,s){if(v&&Ya){var y=m.getContext("2d");Ma=y.webkitBackingStorePixelRatio||y.mozBackingStorePixelRatio||y.msBackingStorePixelRatio||y.oBackingStorePixelRatio||y.backingStorePixelRatio||1;ga=Ra/Ma;m.width=q*ga;m.height=s*ga;Ra!==Ma&&(m.style.width=q+"px",m.style.height=s+"px",y.scale(ga,ga))}else m.width=q,m.height=s}function db(m){if(!Za){var q=
!1,s=!1;"undefined"===typeof ra.Chart.creditHref?(m.creditHref=ja("iuuqr;..b`ow`rkr/bnl."),m.creditText=ja("B`ow`rKR/bnl")):(q=m.updateOption("creditText"),s=m.updateOption("creditHref"));if(m.creditHref&&m.creditText){m._creditLink||(m._creditLink=document.createElement("a"),m._creditLink.setAttribute("class","canvasjs-chart-credit"),m._creditLink.setAttribute("style","outline:none;margin:0px;position:absolute;right:2px;top:"+(m.height-14)+"px;color:dimgrey;text-decoration:none;font-size:11px;font-family: Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),
m._creditLink.setAttribute("tabIndex",-1),m._creditLink.setAttribute("target","_blank"));if(0===m.renderCount||q||s)m._creditLink.setAttribute("href",m.creditHref),m._creditLink.innerHTML=m.creditText;m._creditLink&&m.creditHref&&m.creditText?(m._creditLink.parentElement||m._canvasJSContainer.appendChild(m._creditLink),m._creditLink.style.top=m.height-14+"px"):m._creditLink.parentElement&&m._canvasJSContainer.removeChild(m._creditLink)}}}function ua(m,q){var s=document.createElement("canvas");s.setAttribute("class",
"canvasjs-chart-canvas");Ha(s,m,q);v||"undefined"===typeof G_vmlCanvasManager||G_vmlCanvasManager.initElement(s);return s}function pa(m,q,s){for(var v in s)q.style[v]=s[v]}function va(m,q,s){q.getAttribute("state")||(q.style.backgroundColor=m.toolbar.backgroundColor,q.style.color=m.toolbar.fontColor,q.style.border="none",pa(m,q,{WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"}));q.getAttribute("state")!==s&&(q.setAttribute("state",s),q.setAttribute("type","button"),
pa(m,q,{padding:"5px 12px",cursor:"pointer","float":"left",width:"40px",height:"25px",outline:"0px",verticalAlign:"baseline",lineHeight:"0"}),q.setAttribute("title",m._cultureInfo[s+"Text"]),q.innerHTML="<img style='height:95%;' src='"+eb[s].image+"' alt='"+m._cultureInfo[s+"Text"]+"' />")}function Na(){for(var m=null,q=0;q<arguments.length;q++)m=arguments[q],m.style&&(m.style.display="inline")}function wa(){for(var m=null,q=0;q<arguments.length;q++)(m=arguments[q])&&m.style&&(m.style.display="none")}
function Y(m,q,s,v,x){this._defaultsKey=m;this._themeOptionsKey=q;this._index=v;this.parent=x;this._eventListeners=[];m={};this.theme&&y(q)&&y(v)?m=y(ya[this.theme])?ya.light1:ya[this.theme]:this.parent&&(this.parent.themeOptions&&this.parent.themeOptions[q])&&(null===v?m=this.parent.themeOptions[q]:0<this.parent.themeOptions[q].length&&(v=Math.min(this.parent.themeOptions[q].length-1,v),m=this.parent.themeOptions[q][v]));this.themeOptions=m;this.options=s?s:{_isPlaceholder:!0};this.setOptions(this.options,
m)}function Ea(m,q,s,v,y){"undefined"===typeof y&&(y=0);this._padding=y;this._x1=m;this._y1=q;this._x2=s;this._y2=v;this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=this._padding}function ka(m,q){ka.base.constructor.call(this,"TextBlock",null,q,null,null);this.ctx=m;this._isDirty=!0;this._wrappedText=null;this._initialize()}function Sa(m,q){Sa.base.constructor.call(this,"Toolbar","toolbar",q,null,m);this.chart=m;this.canvas=m.canvas;this.ctx=this.chart.ctx;this.optionsName=
"toolbar"}function Ia(m,q){Ia.base.constructor.call(this,"Title","title",q,null,m);this.chart=m;this.canvas=m.canvas;this.ctx=this.chart.ctx;this.optionsName="title";if(y(this.options.margin)&&m.options.subtitles)for(var s=m.options.subtitles,v=0;v<s.length;v++)if((y(s[v].horizontalAlign)&&"center"===this.horizontalAlign||s[v].horizontalAlign===this.horizontalAlign)&&(y(s[v].verticalAlign)&&"top"===this.verticalAlign||s[v].verticalAlign===this.verticalAlign)&&!s[v].dockInsidePlotArea===!this.dockInsidePlotArea){this.margin=
0;break}"undefined"===typeof this.options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=this.width=null;this.bounds={x1:null,y1:null,x2:null,y2:null}}function Oa(m,q,s){Oa.base.constructor.call(this,"Subtitle","subtitles",q,s,m);this.chart=m;this.canvas=m.canvas;this.ctx=this.chart.ctx;this.optionsName="subtitles";this.isOptionsInArray=!0;"undefined"===typeof this.options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=this.width=null;
this.bounds={x1:null,y1:null,x2:null,y2:null}}function Ja(m){var q;m&&Ka[m]&&(q=Ka[m]);Ja.base.constructor.call(this,"CultureInfo",null,q,null,null)}var $={},v=!!document.createElement("canvas").getContext,ra={Chart:{width:500,height:400,zoomEnabled:!1,zoomType:"x",backgroundColor:"white",theme:"light1",animationEnabled:!1,animationDuration:1200,dataPointWidth:null,dataPointMinWidth:null,dataPointMaxWidth:null,colorSet:"colorSet1",culture:"en",creditHref:"",creditText:"CanvasJS",interactivityEnabled:!0,
exportEnabled:!1,exportFileName:"Chart",rangeChanging:null,rangeChanged:null,publicProperties:{title:"readWrite",subtitles:"readWrite",toolbar:"readWrite",toolTip:"readWrite",legend:"readWrite",axisX:"readWrite",axisY:"readWrite",axisX2:"readWrite",axisY2:"readWrite",data:"readWrite",options:"readWrite",bounds:"readOnly",container:"readOnly"}},Title:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:20,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",
borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:v?"transparent":null,margin:5,wrap:!0,maxWidth:null,dockInsidePlotArea:!1,publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},Subtitle:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:14,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,margin:2,wrap:!0,maxWidth:null,dockInsidePlotArea:!1,
publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},Toolbar:{backgroundColor:"white",backgroundColorOnHover:"#2196f3",borderColor:"#2196f3",borderThickness:1,fontColor:"black",fontColorOnHover:"white",publicProperties:{options:"readWrite",chart:"readOnly"}},Legend:{name:null,verticalAlign:"center",horizontalAlign:"right",fontSize:14,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",cursor:null,itemmouseover:null,itemmouseout:null,itemmousemove:null,
itemclick:null,dockInsidePlotArea:!1,reversed:!1,backgroundColor:v?"transparent":null,borderColor:v?"transparent":null,borderThickness:0,cornerRadius:0,maxWidth:null,maxHeight:null,markerMargin:null,itemMaxWidth:null,itemWidth:null,itemWrap:!0,itemTextFormatter:null,publicProperties:{options:"readWrite",bounds:"readOnly",chart:"readOnly"}},ToolTip:{enabled:!0,shared:!1,animationEnabled:!0,content:null,contentFormatter:null,reversed:!1,backgroundColor:v?"rgba(255,255,255,.9)":"rgb(255,255,255)",borderColor:null,
borderThickness:2,cornerRadius:5,fontSize:14,fontColor:"black",fontFamily:"Calibri, Arial, Georgia, serif;",fontWeight:"normal",fontStyle:"italic",publicProperties:{options:"readWrite",chart:"readOnly"}},Axis:{minimum:null,maximum:null,viewportMinimum:null,viewportMaximum:null,interval:null,intervalType:null,reversed:!1,logarithmic:!1,logarithmBase:10,title:null,titleFontColor:"black",titleFontSize:20,titleFontFamily:"arial",titleFontWeight:"normal",titleFontStyle:"normal",titleWrap:!0,titleMaxWidth:null,
titleBackgroundColor:v?"transparent":null,titleBorderColor:v?"transparent":null,titleBorderThickness:0,titleCornerRadius:0,labelAngle:0,labelFontFamily:"arial",labelFontColor:"black",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelAutoFit:!0,labelWrap:!0,labelMaxWidth:null,labelFormatter:null,labelBackgroundColor:v?"transparent":null,labelBorderColor:v?"transparent":null,labelBorderThickness:0,labelCornerRadius:0,labelPlacement:"outside",prefix:"",suffix:"",includeZero:!0,tickLength:5,
tickColor:"black",tickThickness:1,lineColor:"black",lineThickness:1,lineDashType:"solid",gridColor:"A0A0A0",gridThickness:0,gridDashType:"solid",interlacedColor:v?"transparent":null,valueFormatString:null,margin:2,publicProperties:{options:"readWrite",stripLines:"readWrite",scaleBreaks:"readWrite",crosshair:"readWrite",bounds:"readOnly",chart:"readOnly"}},StripLine:{value:null,startValue:null,endValue:null,color:"orange",opacity:null,thickness:2,lineDashType:"solid",label:"",labelPlacement:"inside",
labelAlign:"far",labelWrap:!0,labelMaxWidth:null,labelBackgroundColor:null,labelBorderColor:v?"transparent":null,labelBorderThickness:0,labelCornerRadius:0,labelFontFamily:"arial",labelFontColor:"orange",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelFormatter:null,showOnTop:!1,publicProperties:{options:"readWrite",axis:"readOnly",bounds:"readOnly",chart:"readOnly"}},ScaleBreaks:{autoCalculate:!1,collapsibleThreshold:"25%",maxNumberOfAutoBreaks:2,spacing:8,type:"straight",
color:"#FFFFFF",fillOpacity:0.9,lineThickness:2,lineColor:"#E16E6E",lineDashType:"solid",publicProperties:{options:"readWrite",customBreaks:"readWrite",axis:"readOnly",autoBreaks:"readOnly",bounds:"readOnly",chart:"readOnly"}},Break:{startValue:null,endValue:null,spacing:8,type:"straight",color:"#FFFFFF",fillOpacity:0.9,lineThickness:2,lineColor:"#E16E6E",lineDashType:"solid",publicProperties:{options:"readWrite",scaleBreaks:"readOnly",bounds:"readOnly",chart:"readOnly"}},Crosshair:{enabled:!1,snapToDataPoint:!1,
color:"grey",opacity:null,thickness:2,lineDashType:"solid",label:"",labelWrap:!0,labelMaxWidth:null,labelBackgroundColor:v?"grey":null,labelBorderColor:v?"grey":null,labelBorderThickness:0,labelCornerRadius:0,labelFontFamily:v?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:12,labelFontColor:"#fff",labelFontWeight:"normal",labelFontStyle:"normal",labelFormatter:null,valueFormatString:null,publicProperties:{options:"readWrite",axis:"readOnly",bounds:"readOnly",chart:"readOnly"}},
DataSeries:{name:null,dataPoints:null,label:"",bevelEnabled:!1,highlightEnabled:!0,cursor:"default",indexLabel:"",indexLabelPlacement:"auto",indexLabelOrientation:"horizontal",indexLabelFontColor:"black",indexLabelFontSize:12,indexLabelFontStyle:"normal",indexLabelFontFamily:"Arial",indexLabelFontWeight:"normal",indexLabelBackgroundColor:null,indexLabelLineColor:"gray",indexLabelLineThickness:1,indexLabelLineDashType:"solid",indexLabelMaxWidth:null,indexLabelWrap:!0,indexLabelFormatter:null,lineThickness:2,
lineDashType:"solid",connectNullData:!1,nullDataLineDashType:"dash",color:null,lineColor:null,risingColor:"white",fallingColor:"red",fillOpacity:null,startAngle:0,radius:null,innerRadius:null,neckHeight:null,neckWidth:null,reversed:!1,valueRepresents:null,linkedDataSeriesIndex:null,whiskerThickness:2,whiskerDashType:"solid",whiskerColor:null,whiskerLength:null,stemThickness:2,stemColor:null,stemDashType:"solid",upperBoxColor:"white",lowerBoxColor:"white",type:"column",xValueType:"number",axisXType:"primary",
axisYType:"primary",axisXIndex:0,axisYIndex:0,xValueFormatString:null,yValueFormatString:null,zValueFormatString:null,percentFormatString:null,showInLegend:null,legendMarkerType:null,legendMarkerColor:null,legendText:null,legendMarkerBorderColor:v?"transparent":null,legendMarkerBorderThickness:0,markerType:"circle",markerColor:null,markerSize:null,markerBorderColor:v?"transparent":null,markerBorderThickness:0,mouseover:null,mouseout:null,mousemove:null,click:null,toolTipContent:null,visible:!0,publicProperties:{options:"readWrite",
axisX:"readWrite",axisY:"readWrite",chart:"readOnly"}},TextBlock:{x:0,y:0,width:null,height:null,maxWidth:null,maxHeight:null,padding:0,angle:0,text:"",horizontalAlign:"center",fontSize:12,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,textBaseline:"top"},CultureInfo:{decimalSeparator:".",digitGroupSeparator:",",zoomText:"Zoom",panText:"Pan",resetText:"Reset",menuText:"More Options",saveJPGText:"Save as JPEG",
savePNGText:"Save as PNG",printText:"Print",days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")}},Ka={en:{}},x=v?"Trebuchet MS, Helvetica, sans-serif":"Arial",Fa=v?"Impact, Charcoal, sans-serif":"Arial",Aa={colorSet1:"#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),
colorSet2:"#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),colorSet3:"#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")},P,fa,U,Z,ea;fa="#333333";U="#000000";P="#666666";ea=Z="#000000";var ba=20,z=14,Ta={colorSet:"colorSet1",backgroundColor:"#FFFFFF",title:{fontFamily:Fa,fontSize:32,fontColor:fa,fontWeight:"normal",verticalAlign:"top",
margin:5},subtitles:[{fontFamily:Fa,fontSize:z,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5}],data:[{indexLabelFontFamily:x,indexLabelFontSize:z,indexLabelFontColor:fa,indexLabelFontWeight:"normal",indexLabelLineThickness:1}],axisX:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:fa,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:U,labelFontWeight:"normal",lineThickness:1,lineColor:P,tickThickness:1,tickColor:P,gridThickness:0,gridColor:P,stripLines:[{labelFontFamily:x,
labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisX2:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:fa,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,
labelFontColor:U,labelFontWeight:"normal",lineThickness:1,lineColor:P,tickThickness:1,tickColor:P,gridThickness:0,gridColor:P,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,
lineDashType:"solid"}}],axisY:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:fa,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:U,labelFontWeight:"normal",lineThickness:1,lineColor:P,tickThickness:1,tickColor:P,gridThickness:1,gridColor:P,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#EEEEEE",labelFontWeight:"normal",
labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisY2:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:fa,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:U,labelFontWeight:"normal",lineThickness:1,lineColor:P,tickThickness:1,tickColor:P,gridThickness:1,gridColor:P,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",
labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],legend:{fontFamily:x,fontSize:14,fontColor:fa,fontWeight:"bold",verticalAlign:"bottom",horizontalAlign:"center"},toolTip:{fontFamily:x,fontSize:14,fontStyle:"normal",cornerRadius:0,borderThickness:1}};
U=fa="#F5F5F5";P="#FFFFFF";Z="#40BAF1";ea="#F5F5F5";var ba=20,z=14,$a={colorSet:"colorSet2",title:{fontFamily:x,fontSize:33,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:5},subtitles:[{fontFamily:x,fontSize:z,fontColor:"#3A3A3A",fontWeight:"normal",verticalAlign:"top",margin:5}],data:[{indexLabelFontFamily:x,indexLabelFontSize:z,indexLabelFontColor:"#666666",indexLabelFontWeight:"normal",indexLabelLineThickness:1}],axisX:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:"#666666",
titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:"#666666",labelFontWeight:"normal",lineThickness:1,lineColor:"#BBBBBB",tickThickness:1,tickColor:"#BBBBBB",gridThickness:1,gridColor:"#BBBBBB",stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FFA500",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",
thickness:1,lineDashType:"dot"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisX2:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:"#666666",titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:"#666666",labelFontWeight:"normal",lineThickness:1,lineColor:"#BBBBBB",tickColor:"#BBBBBB",tickThickness:1,gridThickness:1,gridColor:"#BBBBBB",stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FFA500",labelFontWeight:"normal",
labelBackgroundColor:null,color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],axisY:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:"#666666",titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:"#666666",labelFontWeight:"normal",
lineThickness:0,lineColor:"#BBBBBB",tickColor:"#BBBBBB",tickThickness:1,gridThickness:1,gridColor:"#BBBBBB",stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FFA500",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,
lineDashType:"solid"}}],axisY2:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:"#666666",titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:"#666666",labelFontWeight:"normal",lineThickness:0,lineColor:"#BBBBBB",tickColor:"#BBBBBB",tickThickness:1,gridThickness:1,gridColor:"#BBBBBB",stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FFA500",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FFA500",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,
labelFontColor:"#EEEEEE",labelFontWeight:"normal",labelBackgroundColor:"black",color:"black",thickness:1,lineDashType:"dot"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#BBBBBB",lineThickness:1,lineDashType:"solid"}}],legend:{fontFamily:x,fontSize:14,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"bottom",horizontalAlign:"center"},toolTip:{fontFamily:x,fontSize:14,fontStyle:"normal",cornerRadius:0,borderThickness:1}};U=fa="#F5F5F5";P="#FFFFFF";Z="#40BAF1";ea="#F5F5F5";ba=20;z=14;Fa={colorSet:"colorSet12",
backgroundColor:"#2A2A2A",title:{fontFamily:Fa,fontSize:32,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5},subtitles:[{fontFamily:Fa,fontSize:z,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5}],toolbar:{backgroundColor:"#666666",backgroundColorOnHover:"#FF7372",borderColor:"#FF7372",borderThickness:1,fontColor:"#F5F5F5",fontColorOnHover:"#F5F5F5"},data:[{indexLabelFontFamily:x,indexLabelFontSize:z,indexLabelFontColor:U,indexLabelFontWeight:"normal",indexLabelLineThickness:1}],
axisX:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:U,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:U,labelFontWeight:"normal",lineThickness:1,lineColor:P,tickThickness:1,tickColor:P,gridThickness:0,gridColor:P,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ea,
color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisX2:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:U,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:U,labelFontWeight:"normal",lineThickness:1,lineColor:P,tickThickness:1,tickColor:P,gridThickness:0,gridColor:P,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,
color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisY:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:U,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:U,labelFontWeight:"normal",lineThickness:1,lineColor:P,tickThickness:1,
tickColor:P,gridThickness:1,gridColor:P,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisY2:[{titleFontFamily:x,titleFontSize:ba,
titleFontColor:U,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:U,labelFontWeight:"normal",lineThickness:1,lineColor:P,tickThickness:1,tickColor:P,gridThickness:1,gridColor:P,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},
scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],legend:{fontFamily:x,fontSize:14,fontColor:fa,fontWeight:"bold",verticalAlign:"bottom",horizontalAlign:"center"},toolTip:{fontFamily:x,fontSize:14,fontStyle:"normal",cornerRadius:0,borderThickness:1,fontColor:U,backgroundColor:"rgba(0, 0, 0, .7)"}};P="#FFFFFF";U=fa="#FAFAFA";Z="#40BAF1";ea="#F5F5F5";var ba=20,z=14,ya={light1:Ta,light2:$a,dark1:Fa,dark2:{colorSet:"colorSet2",backgroundColor:"#32373A",
title:{fontFamily:x,fontSize:32,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5},subtitles:[{fontFamily:x,fontSize:z,fontColor:fa,fontWeight:"normal",verticalAlign:"top",margin:5}],toolbar:{backgroundColor:"#666666",backgroundColorOnHover:"#FF7372",borderColor:"#FF7372",borderThickness:1,fontColor:"#F5F5F5",fontColorOnHover:"#F5F5F5"},data:[{indexLabelFontFamily:x,indexLabelFontSize:z,indexLabelFontColor:U,indexLabelFontWeight:"normal",indexLabelLineThickness:1}],axisX:[{titleFontFamily:x,
titleFontSize:ba,titleFontColor:U,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:U,labelFontWeight:"normal",lineThickness:1,lineColor:P,tickThickness:1,tickColor:P,gridThickness:0,gridColor:P,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,
lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisX2:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:U,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:U,labelFontWeight:"normal",lineThickness:1,lineColor:P,tickThickness:1,tickColor:P,gridThickness:0,gridColor:P,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,
color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisY:[{titleFontFamily:x,titleFontSize:ba,titleFontColor:U,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:U,labelFontWeight:"normal",lineThickness:0,lineColor:P,tickThickness:1,
tickColor:P,gridThickness:1,gridColor:P,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],axisY2:[{titleFontFamily:x,titleFontSize:ba,
titleFontColor:U,titleFontWeight:"normal",labelFontFamily:x,labelFontSize:z,labelFontColor:U,labelFontWeight:"normal",lineThickness:0,lineColor:P,tickThickness:1,tickColor:P,gridThickness:1,gridColor:P,stripLines:[{labelFontFamily:x,labelFontSize:z,labelFontColor:"#FF7300",labelFontWeight:"normal",labelBackgroundColor:null,color:"#FF7300",thickness:1}],crosshair:{labelFontFamily:x,labelFontSize:z,labelFontColor:"#000000",labelFontWeight:"normal",labelBackgroundColor:ea,color:Z,thickness:1,lineDashType:"dash"},
scaleBreaks:{type:"zigzag",spacing:"2%",lineColor:"#777777",lineThickness:1,lineDashType:"solid",color:"#111111"}}],legend:{fontFamily:x,fontSize:14,fontColor:fa,fontWeight:"bold",verticalAlign:"bottom",horizontalAlign:"center"},toolTip:{fontFamily:x,fontSize:14,fontStyle:"normal",cornerRadius:0,borderThickness:1,fontColor:U,backgroundColor:"rgba(0, 0, 0, .7)"}},theme1:Ta,theme2:$a,theme3:Ta},V={numberDuration:1,yearDuration:314496E5,monthDuration:2592E6,weekDuration:6048E5,dayDuration:864E5,hourDuration:36E5,
minuteDuration:6E4,secondDuration:1E3,millisecondDuration:1,dayOfWeekFromInt:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")};(function(){$.fSDec=function(m){for(var q="",s=0;s<m.length;s++)q+=String.fromCharCode(Math.ceil(m.length/57/5)^m.charCodeAt(s));return q};$.obj={trVs:"Ush`m!Wdsrhno",fntStr:"qy!B`mhcsh-!Mtbhe`!Fs`oed-!Mtbhe`!R`or!Tohbned-!@sh`m-!r`or,rdshg",txtBl:"udyuC`rdmhod",fnt:"gnou",fSy:"ghmmRuxmd",fTx:"ghmmUdyu",grClr:"fsdx",cntx:"buy",tp:"unq"};delete ra[$.fSDec("Bi`su")][$.fSDec("bsdehuIsdg")];
$.pro={sCH:ra[$.fSDec("Bi`su")][$.fSDec("bsdehuIsdg")]};$._fTWm=function(m){if("undefined"===typeof $.pro.sCH&&!Za)try{var q=m[$.fSDec($.obj.cntx)];q[$.fSDec($.obj.txtBl)]=$.fSDec($.obj.tp);q[$.fSDec($.obj.fnt)]=11+$.fSDec($.obj.fntStr);q[$.fSDec($.obj.fSy)]=$.fSDec($.obj.grClr);q[$.fSDec($.obj.fTx)]($.fSDec($.obj.trVs),2,m.height-11-2)}catch(s){}}})();var Wa={},qa=null,Ba=function(){var m=/D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,q="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
s="Sun Mon Tue Wed Thu Fri Sat".split(" "),v="January February March April May June July August September October November December".split(" "),y="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),x=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,z=/[^-+\dA-Z]/g;return function(R,C,Q){var G=Q?Q.days:q,P=Q?Q.months:v,S=Q?Q.shortDays:s,O=Q?Q.shortMonths:y;Q="";var V=!1;R=R&&R.getTime?R:R?new Date(R):new Date;
if(isNaN(R))throw SyntaxError("invalid date");"UTC:"===C.slice(0,4)&&(C=C.slice(4),V=!0);Q=V?"getUTC":"get";var $=R[Q+"Date"](),W=R[Q+"Day"](),Y=R[Q+"Month"](),U=R[Q+"FullYear"](),I=R[Q+"Hours"](),X=R[Q+"Minutes"](),a=R[Q+"Seconds"](),f=R[Q+"Milliseconds"](),b=V?0:R.getTimezoneOffset();return Q=C.replace(m,function(c){switch(c){case "D":return $;case "DD":return ha($,2);case "DDD":return S[W];case "DDDD":return G[W];case "M":return Y+1;case "MM":return ha(Y+1,2);case "MMM":return O[Y];case "MMMM":return P[Y];
case "Y":return parseInt(String(U).slice(-2));case "YY":return ha(String(U).slice(-2),2);case "YYY":return ha(String(U).slice(-3),3);case "YYYY":return ha(U,4);case "h":return I%12||12;case "hh":return ha(I%12||12,2);case "H":return I;case "HH":return ha(I,2);case "m":return X;case "mm":return ha(X,2);case "s":return a;case "ss":return ha(a,2);case "f":return String(f).slice(0,1);case "ff":return ha(String(f).slice(0,2),2);case "fff":return ha(String(f).slice(0,3),3);case "t":return 12>I?"a":"p";
case "tt":return 12>I?"am":"pm";case "T":return 12>I?"A":"P";case "TT":return 12>I?"AM":"PM";case "K":return V?"UTC":(String(R).match(x)||[""]).pop().replace(z,"");case "z":return(0<b?"-":"+")+Math.floor(Math.abs(b)/60);case "zz":return(0<b?"-":"+")+ha(Math.floor(Math.abs(b)/60),2);case "zzz":return(0<b?"-":"+")+ha(Math.floor(Math.abs(b)/60),2)+ha(Math.abs(b)%60,2);default:return c.slice(1,c.length-1)}})}}(),X=function(m,q,s){if(null===m)return"";if(!isFinite(m))return m;m=Number(m);var v=0>m?!0:
!1;v&&(m*=-1);var y=s?s.decimalSeparator:".",x=s?s.digitGroupSeparator:",",z="";q=String(q);var z=1,R=s="",C=-1,Q=[],G=[],P=0,S=0,V=0,O=!1,$=0,R=q.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);q=null;for(var W=0;R&&W<R.length;W++)if(q=R[W],"."===q&&0>C)C=W;else{if("%"===q)z*=100;else if("\u2030"===q){z*=1E3;continue}else if(","===q[0]&&"."===q[q.length-1]){z/=Math.pow(1E3,q.length-1);C=W+q.length-1;continue}else"E"!==q[0]&&"e"!==q[0]||"0"!==q[q.length-1]||(O=!0);0>C?(Q.push(q),"#"===q||
"0"===q?P++:","===q&&V++):(G.push(q),"#"!==q&&"0"!==q||S++)}O&&(q=Math.floor(m),R=-Math.floor(Math.log(m)/Math.LN10+1),$=0===m?0:0===q?-(P+R):String(q).length-P,z/=Math.pow(10,$));0>C&&(C=W);z=(m*z).toFixed(S);q=z.split(".");z=(q[0]+"").split("");m=(q[1]+"").split("");z&&"0"===z[0]&&z.shift();for(O=R=W=S=C=0;0<Q.length;)if(q=Q.pop(),"#"===q||"0"===q)if(C++,C===P){var Y=z,z=[];if("0"===q)for(q=P-S-(Y?Y.length:0);0<q;)Y.unshift("0"),q--;for(;0<Y.length;)s=Y.pop()+s,O++,0===O%R&&(W===V&&0<Y.length)&&
(s=x+s)}else 0<z.length?(s=z.pop()+s,S++,O++):"0"===q&&(s="0"+s,S++,O++),0===O%R&&(W===V&&0<z.length)&&(s=x+s);else"E"!==q[0]&&"e"!==q[0]||"0"!==q[q.length-1]||!/[eE][+-]*[0]+/.test(q)?","===q?(W++,R=O,O=0,0<z.length&&(s=x+s)):s=1<q.length&&('"'===q[0]&&'"'===q[q.length-1]||"'"===q[0]&&"'"===q[q.length-1])?q.slice(1,q.length-1)+s:q+s:(q=0>$?q.replace("+","").replace("-",""):q.replace("-",""),s+=q.replace(/[0]+/,function(m){return ha($,m.length)}));x="";for(Q=!1;0<G.length;)q=G.shift(),"#"===q||"0"===
q?0<m.length&&0!==Number(m.join(""))?(x+=m.shift(),Q=!0):"0"===q&&(x+="0",Q=!0):1<q.length&&('"'===q[0]&&'"'===q[q.length-1]||"'"===q[0]&&"'"===q[q.length-1])?x+=q.slice(1,q.length-1):"E"!==q[0]&&"e"!==q[0]||"0"!==q[q.length-1]||!/[eE][+-]*[0]+/.test(q)?x+=q:(q=0>$?q.replace("+","").replace("-",""):q.replace("-",""),x+=q.replace(/[0]+/,function(m){return ha($,m.length)}));s+=(Q?y:"")+x;return v?"-"+s:s},Pa=function(m){var q=0,s=0;m=m||window.event;m.offsetX||0===m.offsetX?(q=m.offsetX,s=m.offsetY):
m.layerX||0==m.layerX?(q=m.layerX,s=m.layerY):(q=m.pageX-m.target.offsetLeft,s=m.pageY-m.target.offsetTop);return{x:q,y:s}},Ya=!0,Ra=window.devicePixelRatio||1,Ma=1,ga=Ya?Ra/Ma:1,ja=function(m){for(var q="",s=0;s<m.length;s++)q+=String.fromCharCode(Math.ceil(m.length/57/5)^m.charCodeAt(s));return q},Za=window&&window[ja("mnb`uhno")]&&window[ja("mnb`uhno")].href&&window[ja("mnb`uhno")].href.indexOf&&(-1!==window[ja("mnb`uhno")].href.indexOf(ja("b`ow`rkr/bnl"))||-1!==window[ja("mnb`uhno")].href.indexOf(ja("gdonqhy/bnl"))||
-1!==window[ja("mnb`uhno")].href.indexOf(ja("gheemd"))),eb={reset:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg=="},
pan:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC"},
zoom:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII="},
menu:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC"}};
Y.prototype.setOptions=function(m,q){if(ra[this._defaultsKey]){var s=ra[this._defaultsKey],v;for(v in s)"publicProperties"!==v&&s.hasOwnProperty(v)&&(this[v]=m&&v in m?m[v]:q&&v in q?q[v]:s[v])}};Y.prototype.get=function(m){var q=ra[this._defaultsKey];if("options"===m)return this.options&&this.options._isPlaceholder?null:this.options;if(q.hasOwnProperty(m)||q.publicProperties&&q.publicProperties.hasOwnProperty(m))return this[m];window.console&&window.console.log('Property "'+m+"\" doesn't exist. Please check for typo.")};
Y.prototype.set=function(m,q,s){s="undefined"===typeof s?!0:s;var v=ra[this._defaultsKey];if("options"===m)this.createUserOptions(q);else if(v.hasOwnProperty(m)||v.publicProperties&&v.publicProperties.hasOwnProperty(m)&&"readWrite"===v.publicProperties[m])this.options._isPlaceholder&&this.createUserOptions(),this.options[m]=q;else{window.console&&(v.publicProperties&&v.publicProperties.hasOwnProperty(m)&&"readOnly"===v.publicProperties[m]?window.console.log('Property "'+m+'" is read-only.'):window.console.log('Property "'+
m+"\" doesn't exist. Please check for typo."));return}s&&(this.chart||this).render()};Y.prototype.addTo=function(m,q,s,v){v="undefined"===typeof v?!0:v;var y=ra[this._defaultsKey];y.hasOwnProperty(m)||y.publicProperties&&y.publicProperties.hasOwnProperty(m)&&"readWrite"===y.publicProperties[m]?(this.options._isPlaceholder&&this.createUserOptions(),"undefined"===typeof this.options[m]&&(this.options[m]=[]),m=this.options[m],s="undefined"===typeof s||null===s?m.length:s,m.splice(s,0,q),v&&(this.chart||
this).render()):window.console&&(y.publicProperties&&y.publicProperties.hasOwnProperty(m)&&"readOnly"===y.publicProperties[m]?window.console.log('Property "'+m+'" is read-only.'):window.console.log('Property "'+m+"\" doesn't exist. Please check for typo."))};Y.prototype.createUserOptions=function(m){if("undefined"!==typeof m||this.options._isPlaceholder)if(this.parent.options._isPlaceholder&&this.parent.createUserOptions(),this.isOptionsInArray){this.parent.options[this.optionsName]||(this.parent.options[this.optionsName]=
[]);var q=this.parent.options[this.optionsName],s=q.length;this.options._isPlaceholder||(Da(q),s=q.indexOf(this.options));this.options="undefined"===typeof m?{}:m;q[s]=this.options}else this.options="undefined"===typeof m?{}:m,m=this.parent.options,this.optionsName?q=this.optionsName:(q=this._defaultsKey)&&0!==q.length?(s=q.charAt(0).toLowerCase(),1<q.length&&(s=s.concat(q.slice(1))),q=s):q=void 0,m[q]=this.options};Y.prototype.remove=function(m){m="undefined"===typeof m?!0:m;if(this.isOptionsInArray){var q=
this.parent.options[this.optionsName];Da(q);var s=q.indexOf(this.options);0<=s&&q.splice(s,1)}else delete this.parent.options[this.optionsName];m&&(this.chart||this).render()};Y.prototype.updateOption=function(m){var q=ra[this._defaultsKey],s={},v=this[m],x=this._themeOptionsKey,z=this._index;this.theme&&y(x)&&y(z)?s=y(ya[this.theme])?ya.light1:ya[this.theme]:this.parent&&(this.parent.themeOptions&&this.parent.themeOptions[x])&&(null===z?s=this.parent.themeOptions[x]:0<this.parent.themeOptions[x].length&&
(s=Math.min(this.parent.themeOptions[x].length-1,z),s=this.parent.themeOptions[x][s]));this.themeOptions=s;m in q&&(v=m in this.options?this.options[m]:s&&m in s?s[m]:q[m]);if(v===this[m])return!1;this[m]=v;return!0};Y.prototype.trackChanges=function(m){if(!this.sessionVariables)throw"Session Variable Store not set";this.sessionVariables[m]=this.options[m]};Y.prototype.isBeingTracked=function(m){this.options._oldOptions||(this.options._oldOptions={});return this.options._oldOptions[m]?!0:!1};Y.prototype.hasOptionChanged=
function(m){if(!this.sessionVariables)throw"Session Variable Store not set";return this.sessionVariables[m]!==this.options[m]};Y.prototype.addEventListener=function(m,q,v){m&&q&&(this._eventListeners[m]=this._eventListeners[m]||[],this._eventListeners[m].push({context:v||this,eventHandler:q}))};Y.prototype.removeEventListener=function(m,q){if(m&&q&&this._eventListeners[m])for(var v=this._eventListeners[m],y=0;y<v.length;y++)if(v[y].eventHandler===q){v[y].splice(y,1);break}};Y.prototype.removeAllEventListeners=
function(){this._eventListeners=[]};Y.prototype.dispatchEvent=function(m,q,v){if(m&&this._eventListeners[m]){q=q||{};for(var y=this._eventListeners[m],x=0;x<y.length;x++)y[x].eventHandler.call(y[x].context,q)}"function"===typeof this[m]&&this[m].call(v||this.chart,q)};Ea.prototype.registerSpace=function(m,q){"top"===m?this._topOccupied+=q.height:"bottom"===m?this._bottomOccupied+=q.height:"left"===m?this._leftOccupied+=q.width:"right"===m&&(this._rightOccupied+=q.width)};Ea.prototype.unRegisterSpace=
function(m,q){"top"===m?this._topOccupied-=q.height:"bottom"===m?this._bottomOccupied-=q.height:"left"===m?this._leftOccupied-=q.width:"right"===m&&(this._rightOccupied-=q.width)};Ea.prototype.getFreeSpace=function(){return{x1:this._x1+this._leftOccupied,y1:this._y1+this._topOccupied,x2:this._x2-this._rightOccupied,y2:this._y2-this._bottomOccupied,width:this._x2-this._x1-this._rightOccupied-this._leftOccupied,height:this._y2-this._y1-this._bottomOccupied-this._topOccupied}};Ea.prototype.reset=function(){this._rightOccupied=
this._leftOccupied=this._bottomOccupied=this._topOccupied=this._padding};oa(ka,Y);ka.prototype._initialize=function(){y(this.padding)||"object"!==typeof this.padding?this.topPadding=this.rightPadding=this.bottomPadding=this.leftPadding=Number(this.padding)|0:(this.topPadding=y(this.padding.top)?0:Number(this.padding.top)|0,this.rightPadding=y(this.padding.right)?0:Number(this.padding.right)|0,this.bottomPadding=y(this.padding.bottom)?0:Number(this.padding.bottom)|0,this.leftPadding=y(this.padding.left)?
0:Number(this.padding.left)|0)};ka.prototype.render=function(m){if(0!==this.fontSize){m&&this.ctx.save();var q=this.ctx.font;this.ctx.textBaseline=this.textBaseline;var v=0;this._isDirty&&this.measureText(this.ctx);this.ctx.translate(this.x,this.y+v);"middle"===this.textBaseline&&(v=-this._lineHeight/2);this.ctx.font=this._getFontString();this.ctx.rotate(Math.PI/180*this.angle);var y=0,x=this.topPadding,z=null;this.ctx.roundRect||Ca(this.ctx);(0<this.borderThickness&&this.borderColor||this.backgroundColor)&&
this.ctx.roundRect(0,v,this.width,this.height,this.cornerRadius,this.borderThickness,this.backgroundColor,this.borderColor);this.ctx.fillStyle=this.fontColor;for(v=0;v<this._wrappedText.lines.length;v++)z=this._wrappedText.lines[v],"right"===this.horizontalAlign?y=(this.width-(this.leftPadding+this.rightPadding))/2-z.width/2+this.leftPadding:"left"===this.horizontalAlign?y=this.leftPadding:"center"===this.horizontalAlign&&(y=(this.width-(this.leftPadding+this.rightPadding))/2-z.width/2+this.leftPadding),
this.ctx.fillText(z.text,y,x),x+=z.height;this.ctx.font=q;m&&this.ctx.restore()}};ka.prototype.setText=function(m){this.text=m;this._isDirty=!0;this._wrappedText=null};ka.prototype.measureText=function(){this._lineHeight=Va(this.fontFamily,this.fontSize,this.fontWeight);if(null===this.maxWidth)throw"Please set maxWidth and height for TextBlock";this._wrapText(this.ctx);this._isDirty=!1;return{width:this.width,height:this.height}};ka.prototype._getLineWithWidth=function(m,q,v){m=String(m);if(!m)return{text:"",
width:0};var y=v=0,x=m.length-1,z=Infinity;for(this.ctx.font=this._getFontString();y<=x;){var z=Math.floor((y+x)/2),G=m.substr(0,z+1);v=this.ctx.measureText(G).width;if(v<q)y=z+1;else if(v>q)x=z-1;else break}v>q&&1<G.length&&(G=G.substr(0,G.length-1),v=this.ctx.measureText(G).width);q=!0;if(G.length===m.length||" "===m[G.length])q=!1;q&&(m=G.split(" "),1<m.length&&m.pop(),G=m.join(" "),v=this.ctx.measureText(G).width);return{text:G,width:v}};ka.prototype._wrapText=function(){var m=new String(Ga(String(this.text))),
v=[],s=this.ctx.font,y=0,x=0;this.ctx.font=this._getFontString();if(0===this.frontSize)x=y=0;else for(;0<m.length;){var z=this.maxHeight-(this.topPadding+this.bottomPadding),G=this._getLineWithWidth(m,this.maxWidth-(this.leftPadding+this.rightPadding),!1);G.height=this._lineHeight;v.push(G);var R=x,x=Math.max(x,G.width),y=y+G.height,m=Ga(m.slice(G.text.length,m.length));z&&y>z&&(G=v.pop(),y-=G.height,x=R)}this._wrappedText={lines:v,width:x,height:y};this.width=x+(this.leftPadding+this.rightPadding);
this.height=y+(this.topPadding+this.bottomPadding);this.ctx.font=s};ka.prototype._getFontString=function(){var m;m=""+(this.fontStyle?this.fontStyle+" ":"");m+=this.fontWeight?this.fontWeight+" ":"";m+=this.fontSize?this.fontSize+"px ":"";var q=this.fontFamily?this.fontFamily+"":"";!v&&q&&(q=q.split(",")[0],"'"!==q[0]&&'"'!==q[0]&&(q="'"+q+"'"));return m+=q};oa(Sa,Y);oa(Ia,Y);Ia.prototype.render=function(){if(this.text){var m=this.dockInsidePlotArea?this.chart.plotArea:this.chart,v=m.layoutManager.getFreeSpace(),
s=v.x1,x=v.y1,z=0,G=0,S=this.chart._menuButton&&this.chart.exportEnabled&&"top"===this.verticalAlign?22:0,R,C;"top"===this.verticalAlign||"bottom"===this.verticalAlign?(null===this.maxWidth&&(this.maxWidth=v.width-4-S*("center"===this.horizontalAlign?2:1)),G=0.5*v.height-this.margin-2,z=0):"center"===this.verticalAlign&&("left"===this.horizontalAlign||"right"===this.horizontalAlign?(null===this.maxWidth&&(this.maxWidth=v.height-4),G=0.5*v.width-this.margin-2):"center"===this.horizontalAlign&&(null===
this.maxWidth&&(this.maxWidth=v.width-4),G=0.5*v.height-4));var Q;y(this.padding)||"number"!==typeof this.padding?y(this.padding)||"object"!==typeof this.padding||(Q=this.padding.top?this.padding.top:this.padding.bottom?this.padding.bottom:0,Q+=this.padding.bottom?this.padding.bottom:this.padding.top?this.padding.top:0,Q*=1.25):Q=2.5*this.padding;this.wrap||(G=Math.min(G,Math.max(1.5*this.fontSize,this.fontSize+Q)));G=new ka(this.ctx,{fontSize:this.fontSize,fontFamily:this.fontFamily,fontColor:this.fontColor,
fontStyle:this.fontStyle,fontWeight:this.fontWeight,horizontalAlign:this.horizontalAlign,verticalAlign:this.verticalAlign,borderColor:this.borderColor,borderThickness:this.borderThickness,backgroundColor:this.backgroundColor,maxWidth:this.maxWidth,maxHeight:G,cornerRadius:this.cornerRadius,text:this.text,padding:this.padding,textBaseline:"top"});Q=G.measureText();"top"===this.verticalAlign||"bottom"===this.verticalAlign?("top"===this.verticalAlign?(x=v.y1+2,C="top"):"bottom"===this.verticalAlign&&
(x=v.y2-2-Q.height,C="bottom"),"left"===this.horizontalAlign?s=v.x1+2:"center"===this.horizontalAlign?s=v.x1+v.width/2-Q.width/2:"right"===this.horizontalAlign&&(s=v.x2-2-Q.width-S),R=this.horizontalAlign,this.width=Q.width,this.height=Q.height):"center"===this.verticalAlign&&("left"===this.horizontalAlign?(s=v.x1+2,x=v.y2-2-(this.maxWidth/2-Q.width/2),z=-90,C="left",this.width=Q.height,this.height=Q.width):"right"===this.horizontalAlign?(s=v.x2-2,x=v.y1+2+(this.maxWidth/2-Q.width/2),z=90,C="right",
this.width=Q.height,this.height=Q.width):"center"===this.horizontalAlign&&(x=m.y1+(m.height/2-Q.height/2),s=m.x1+(m.width/2-Q.width/2),C="center",this.width=Q.width,this.height=Q.height),R="center");G.x=s;G.y=x;G.angle=z;G.horizontalAlign=R;G.render(!0);m.layoutManager.registerSpace(C,{width:this.width+("left"===C||"right"===C?this.margin+2:0),height:this.height+("top"===C||"bottom"===C?this.margin+2:0)});this.bounds={x1:s,y1:x,x2:s+this.width,y2:x+this.height};this.ctx.textBaseline="top"}};oa(Oa,
Y);Oa.prototype.render=Ia.prototype.render;oa(Ja,Y);var La={addTheme:function(m,v){ya[m]=v},addColorSet:function(m,v){Aa[m]=v},addCultureInfo:function(m,v){Ka[m]=v},formatNumber:function(m,v,s){s=s||"en";if(Ka[s])return X(m,v||"#,##0.##",new Ja(s));throw"Unknown Culture Name";},formatDate:function(m,v,s){s=s||"en";if(Ka[s])return Ba(m,v||"DD MMM YYYY",new Ja(s));throw"Unknown Culture Name";}};"undefined"!==typeof module&&"undefined"!==typeof module.exports?module.exports=La:"function"===typeof define&&
define.amd?define([],function(){return La}):window.CanvasJS=La;La.Chart=function(){function m(a,f){return a.x-f.x}function q(a,f,b){if(a&&f&&b){b=b+"."+f;var c="image/"+f;a=a.toDataURL(c);var e=!1,g=document.createElement("a");g.download=b;g.href=a;if("undefined"!==typeof Blob&&new Blob){for(var h=a.replace(/^data:[a-z\/]*;base64,/,""),h=atob(h),l=new ArrayBuffer(h.length),l=new Uint8Array(l),t=0;t<h.length;t++)l[t]=h.charCodeAt(t);f=new Blob([l.buffer],{type:"image/"+f});try{window.navigator.msSaveBlob(f,
b),e=!0}catch(k){g.dataset.downloadurl=[c,g.download,g.href].join(":"),g.href=window.URL.createObjectURL(f)}}if(!e)try{event=document.createEvent("MouseEvents"),event.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),g.dispatchEvent?g.dispatchEvent(event):g.fireEvent&&g.fireEvent("onclick")}catch(r){f=window.open(),f.document.write("<img src='"+a+"'></img><div>Please right click on the image and save it to your device</div>"),f.document.close()}}}function s(a,f){f=f||{};this.theme=
y(f.theme)||y(ya[f.theme])?"light1":f.theme;s.base.constructor.call(this,"Chart",null,f,null,null);var b=this;this._containerId=a;this._objectsInitialized=!1;this.overlaidCanvasCtx=this.ctx=null;this._indexLabels=[];this._panTimerId=0;this._lastTouchEventType="";this._lastTouchData=null;this.isAnimating=!1;this.renderCount=0;this.panEnabled=this.disableToolTip=this.animatedRender=!1;this._defaultCursor="default";this.plotArea={canvas:null,ctx:null,x1:0,y1:0,x2:0,y2:0,width:0,height:0};this._dataInRenderedOrder=
[];if(this.container="string"===typeof this._containerId?document.getElementById(this._containerId):this._containerId){this.container.innerHTML="";var c=0,e=0,c=this.options.width?this.width:0<this.container.clientWidth?this.container.clientWidth:this.width,e=this.options.height?this.height:0<this.container.clientHeight?this.container.clientHeight:this.height;this.width=c;this.height=e;this.x1=this.y1=0;this.x2=this.width;this.y2=this.height;this._selectedColorSet="undefined"!==typeof Aa[this.colorSet]?
Aa[this.colorSet]:Aa.colorSet1;this._canvasJSContainer=document.createElement("div");this._canvasJSContainer.setAttribute("class","canvasjs-chart-container");this._canvasJSContainer.style.position="relative";this._canvasJSContainer.style.textAlign="left";this._canvasJSContainer.style.cursor="auto";v||(this._canvasJSContainer.style.height="0px");this.container.appendChild(this._canvasJSContainer);this.canvas=ua(c,e);this._preRenderCanvas=ua(c,e);this.canvas.style.position="absolute";this.canvas.getContext&&
(this._canvasJSContainer.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.textBaseline="top",Ca(this.ctx),this._preRenderCtx=this._preRenderCanvas.getContext("2d"),this._preRenderCtx.textBaseline="top",Ca(this._preRenderCtx),v?this.plotArea.ctx=this.ctx:(this.plotArea.canvas=ua(c,e),this.plotArea.canvas.style.position="absolute",this.plotArea.canvas.setAttribute("class","plotAreaCanvas"),this._canvasJSContainer.appendChild(this.plotArea.canvas),this.plotArea.ctx=this.plotArea.canvas.getContext("2d")),
this.overlaidCanvas=ua(c,e),this.overlaidCanvas.style.position="absolute",this.overlaidCanvas.style.webkitTapHighlightColor="transparent",this.overlaidCanvas.getContext&&(this._canvasJSContainer.appendChild(this.overlaidCanvas),this.overlaidCanvasCtx=this.overlaidCanvas.getContext("2d"),this.overlaidCanvasCtx.textBaseline="top",Ca(this.overlaidCanvasCtx)),this._eventManager=new ea(this),this.windowResizeHandler=O(window,"resize",function(){b._updateSize()&&b.render()}),this._toolBar=document.createElement("div"),
this._toolBar.setAttribute("class","canvasjs-chart-toolbar"),this._toolBar.style.cssText="position: absolute; right: 1px; top: 1px;",this._canvasJSContainer.appendChild(this._toolBar),this.bounds={x1:0,y1:0,x2:this.width,y2:this.height},O(this.overlaidCanvas,"click",function(a){b._mouseEventHandler(a)}),O(this.overlaidCanvas,"mousemove",function(a){b._mouseEventHandler(a)}),O(this.overlaidCanvas,"mouseup",function(a){b._mouseEventHandler(a)}),O(this.overlaidCanvas,"mousedown",function(a){b._mouseEventHandler(a);
wa(b._dropdownMenu)}),O(this.overlaidCanvas,"mouseout",function(a){b._mouseEventHandler(a)}),O(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerDown":"touchstart",function(a){b._touchEventHandler(a)}),O(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerMove":"touchmove",function(a){b._touchEventHandler(a)}),O(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerUp":"touchend",function(a){b._touchEventHandler(a)}),O(this.overlaidCanvas,window.navigator.msPointerEnabled?
"MSPointerCancel":"touchcancel",function(a){b._touchEventHandler(a)}),this.toolTip=new Z(this,this.options.toolTip),this.data=null,this.axisX=[],this.axisX2=[],this.axisY=[],this.axisY2=[],this.sessionVariables={axisX:[],axisX2:[],axisY:[],axisY2:[]})}else window.console&&window.console.log('CanvasJS Error: Chart Container with id "'+this._containerId+'" was not found')}function x(a,f){for(var b=[],c,e=0;e<a.length;e++)if(0==e)b.push(a[0]);else{var g,h,l;l=e-1;g=0===l?0:l-1;h=l===a.length-1?l:l+1;
c=Math.abs((a[h].x-a[g].x)/(0===a[h].x-a[l].x?0.01:a[h].x-a[l].x))*(f-1)/2+1;var t=(a[h].x-a[g].x)/c;c=(a[h].y-a[g].y)/c;b[b.length]=a[l].x>a[g].x&&0<t||a[l].x<a[g].x&&0>t?{x:a[l].x+t/3,y:a[l].y+c/3}:{x:a[l].x,y:a[l].y+c/9};l=e;g=0===l?0:l-1;h=l===a.length-1?l:l+1;c=Math.abs((a[h].x-a[g].x)/(0===a[l].x-a[g].x?0.01:a[l].x-a[g].x))*(f-1)/2+1;t=(a[h].x-a[g].x)/c;c=(a[h].y-a[g].y)/c;b[b.length]=a[l].x>a[g].x&&0<t||a[l].x<a[g].x&&0>t?{x:a[l].x-t/3,y:a[l].y-c/3}:{x:a[l].x,y:a[l].y-c/9};b[b.length]=a[e]}return b}
function z(a,f,b,c,e,g,h,l,t,k){var r=0;k?(h.color=g,l.color=g):k=1;r=t?Math.abs(e-b):Math.abs(c-f);r=0<h.trimLength?Math.abs(r*h.trimLength/100):Math.abs(r-h.length);t?(b+=r/2,e-=r/2):(f+=r/2,c-=r/2);var r=1===Math.round(h.thickness)%2?0.5:0,p=1===Math.round(l.thickness)%2?0.5:0;a.save();a.globalAlpha=k;a.strokeStyle=l.color||g;a.lineWidth=l.thickness||2;a.setLineDash&&a.setLineDash(G(l.dashType,l.thickness));a.beginPath();t&&0<l.thickness?(a.moveTo(c-h.thickness/2,Math.round((b+e)/2)-p),a.lineTo(f+
h.thickness/2,Math.round((b+e)/2)-p)):0<l.thickness&&(a.moveTo(Math.round((f+c)/2)-p,b+h.thickness/2),a.lineTo(Math.round((f+c)/2)-p,e-h.thickness/2));a.stroke();a.strokeStyle=h.color||g;a.lineWidth=h.thickness||2;a.setLineDash&&a.setLineDash(G(h.dashType,h.thickness));a.beginPath();t&&0<h.thickness?(a.moveTo(c-r,b),a.lineTo(c-r,e),a.moveTo(f+r,b),a.lineTo(f+r,e)):0<h.thickness&&(a.moveTo(f,b+r),a.lineTo(c,b+r),a.moveTo(f,e-r),a.lineTo(c,e-r));a.stroke();a.restore()}function P(a,f,b,c,e){if(null===
a||"undefined"===typeof a)return"undefined"===typeof b?f:b;a=parseFloat(a.toString())*(0<=a.toString().indexOf("%")?f/100:1);"undefined"!==typeof c&&(a=Math.min(c,a),"undefined"!==typeof e&&(a=Math.max(e,a)));return!isNaN(a)&&a<=f&&0<=a?a:"undefined"===typeof b?f:b}function U(a,f){U.base.constructor.call(this,"Legend","legend",f,null,a);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.ghostCtx=this.chart._eventManager.ghostCtx;this.items=[];this.optionsName="legend";this.height=this.width=
0;this.orientation=null;this.dataSeries=[];this.bounds={x1:null,y1:null,x2:null,y2:null};"undefined"===typeof this.options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.lineHeight=Va(this.fontFamily,this.fontSize,this.fontWeight);this.horizontalSpacing=this.fontSize}function R(a,f,b,c){R.base.constructor.call(this,"DataSeries","data",f,b,a);this.chart=a;this.canvas=a.canvas;this._ctx=a.canvas.ctx;this.index=b;this.noDataPointsInPlotArea=0;this.id=c;this.chart._eventManager.objectMap[c]=
{id:c,objectType:"dataSeries",dataSeriesIndex:b};a=f.dataPoints?f.dataPoints.length:0;this.dataPointEOs=[];for(f=0;f<a;f++)this.dataPointEOs[f]={};this.dataPointIds=[];this.plotUnit=[];this.axisY=this.axisX=null;this.optionsName="data";this.isOptionsInArray=!0;null===this.fillOpacity&&(this.type.match(/area/i)?this.fillOpacity=0.7:this.fillOpacity=1);this.axisPlacement=this.getDefaultAxisPlacement();"undefined"===typeof this.options.indexLabelFontSize&&(this.indexLabelFontSize=this.chart.getAutoFontSize(this.indexLabelFontSize))}
function C(a,f,b,c,e,g){C.base.constructor.call(this,"Axis",f,b,c,a);this.chart=a;this.canvas=a.canvas;this.ctx=a.ctx;this.intervalStartPosition=this.maxHeight=this.maxWidth=0;this.labels=[];this.dataSeries=[];this._stripLineLabels=this._ticks=this._labels=null;this.dataInfo={min:Infinity,max:-Infinity,viewPortMin:Infinity,viewPortMax:-Infinity,minDiff:Infinity};this.isOptionsInArray=!0;"axisX"===e?("left"===g||"bottom"===g?(this.optionsName="axisX",y(this.chart.sessionVariables.axisX[c])&&(this.chart.sessionVariables.axisX[c]=
{}),this.sessionVariables=this.chart.sessionVariables.axisX[c]):(this.optionsName="axisX2",y(this.chart.sessionVariables.axisX2[c])&&(this.chart.sessionVariables.axisX2[c]={}),this.sessionVariables=this.chart.sessionVariables.axisX2[c]),this.options.interval||(this.intervalType=null)):"left"===g||"bottom"===g?(this.optionsName="axisY",y(this.chart.sessionVariables.axisY[c])&&(this.chart.sessionVariables.axisY[c]={}),this.sessionVariables=this.chart.sessionVariables.axisY[c]):(this.optionsName="axisY2",
y(this.chart.sessionVariables.axisY2[c])&&(this.chart.sessionVariables.axisY2[c]={}),this.sessionVariables=this.chart.sessionVariables.axisY2[c]);"undefined"===typeof this.options.titleFontSize&&(this.titleFontSize=this.chart.getAutoFontSize(this.titleFontSize));"undefined"===typeof this.options.labelFontSize&&(this.labelFontSize=this.chart.getAutoFontSize(this.labelFontSize));this.type=e;"axisX"!==e||b&&"undefined"!==typeof b.gridThickness||(this.gridThickness=0);this._position=g;this.lineCoordinates=
{x1:null,y1:null,x2:null,y2:null,width:null};this.labelAngle=(this.labelAngle%360+360)%360;90<this.labelAngle&&270>this.labelAngle?this.labelAngle-=180:270<=this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360);this.options.scaleBreaks&&(this.scaleBreaks=new Q(this.chart,this.options.scaleBreaks,++this.chart._eventManager.lastObjectId,this));this.stripLines=[];if(this.options.stripLines&&0<this.options.stripLines.length)for(a=0;a<this.options.stripLines.length;a++)this.stripLines.push(new fa(this.chart,
this.options.stripLines[a],a,++this.chart._eventManager.lastObjectId,this));this.options.crosshair&&(this.crosshair=new ha(this.chart,this.options.crosshair,this));this._titleTextBlock=null;this.hasOptionChanged("viewportMinimum")&&null===this.viewportMinimum&&(this.options.viewportMinimum=void 0,this.sessionVariables.viewportMinimum=null);this.hasOptionChanged("viewportMinimum")||isNaN(this.sessionVariables.newViewportMinimum)||null===this.sessionVariables.newViewportMinimum?this.sessionVariables.newViewportMinimum=
null:this.viewportMinimum=this.sessionVariables.newViewportMinimum;this.hasOptionChanged("viewportMaximum")&&null===this.viewportMaximum&&(this.options.viewportMaximum=void 0,this.sessionVariables.viewportMaximum=null);this.hasOptionChanged("viewportMaximum")||isNaN(this.sessionVariables.newViewportMaximum)||null===this.sessionVariables.newViewportMaximum?this.sessionVariables.newViewportMaximum=null:this.viewportMaximum=this.sessionVariables.newViewportMaximum;null!==this.minimum&&null!==this.viewportMinimum&&
(this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum));null!==this.maximum&&null!==this.viewportMaximum&&(this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum));this.trackChanges("viewportMinimum");this.trackChanges("viewportMaximum")}function Q(a,f,b,c){Q.base.constructor.call(this,"ScaleBreaks","scaleBreaks",f,null,c);this.id=b;this.chart=a;this.ctx=this.chart.ctx;this.axis=c;this.optionsName="scaleBreaks";this.isOptionsInArray=!1;this._appliedBreaks=[];this.customBreaks=
[];this.autoBreaks=[];"string"===typeof this.spacing?(this.spacing=parseFloat(this.spacing),this.spacing=isNaN(this.spacing)?8:(10<this.spacing?10:this.spacing)+"%"):"number"!==typeof this.spacing&&(this.spacing=8);this.autoCalculate&&(this.maxNumberOfAutoBreaks=Math.min(this.maxNumberOfAutoBreaks,5));if(this.options.customBreaks&&0<this.options.customBreaks.length){for(a=0;a<this.options.customBreaks.length;a++)this.customBreaks.push(new ba(this.chart,"customBreaks",this.options.customBreaks[a],
a,++this.chart._eventManager.lastObjectId,this)),"number"===typeof this.customBreaks[a].startValue&&("number"===typeof this.customBreaks[a].endValue&&this.customBreaks[a].endValue!==this.customBreaks[a].startValue)&&this._appliedBreaks.push(this.customBreaks[a]);this._appliedBreaks.sort(function(a,c){return a.startValue-c.startValue});for(a=0;a<this._appliedBreaks.length-1;a++)this._appliedBreaks[a].endValue>=this._appliedBreaks[a+1].startValue&&(this._appliedBreaks[a].endValue=Math.max(this._appliedBreaks[a].endValue,
this._appliedBreaks[a+1].endValue),window.console&&window.console.log("CanvasJS Error: Breaks "+a+" and "+(a+1)+" are overlapping."),this._appliedBreaks.splice(a,2),a--)}}function ba(a,f,b,c,e,g){ba.base.constructor.call(this,"Break",f,b,c,g);this.id=e;this.chart=a;this.ctx=this.chart.ctx;this.scaleBreaks=g;this.optionsName=f;this.isOptionsInArray=!0;this.type=b.type?this.type:g.type;this.fillOpacity=y(b.fillOpacity)?g.fillOpacity:this.fillOpacity;this.lineThickness=y(b.lineThickness)?g.lineThickness:
this.lineThickness;this.color=b.color?this.color:g.color;this.lineColor=b.lineColor?this.lineColor:g.lineColor;this.lineDashType=b.lineDashType?this.lineDashType:g.lineDashType;!y(this.startValue)&&this.startValue.getTime&&(this.startValue=this.startValue.getTime());!y(this.endValue)&&this.endValue.getTime&&(this.endValue=this.endValue.getTime());"number"===typeof this.startValue&&("number"===typeof this.endValue&&this.endValue<this.startValue)&&(a=this.startValue,this.startValue=this.endValue,this.endValue=
a);this.spacing="undefined"===typeof b.spacing?g.spacing:b.spacing;"string"===typeof this.options.spacing?(this.spacing=parseFloat(this.spacing),this.spacing=isNaN(this.spacing)?0:(10<this.spacing?10:this.spacing)+"%"):"number"!==typeof this.options.spacing&&(this.spacing=g.spacing);this.size=g.parent.logarithmic?1:0}function fa(a,f,b,c,e){fa.base.constructor.call(this,"StripLine","stripLines",f,b,e);this.id=c;this.chart=a;this.ctx=this.chart.ctx;this.label=this.label;this.axis=e;this.optionsName=
"stripLines";this.isOptionsInArray=!0;this._thicknessType="pixel";null!==this.startValue&&null!==this.endValue&&(this.value=e.logarithmic?Math.sqrt((this.startValue.getTime?this.startValue.getTime():this.startValue)*(this.endValue.getTime?this.endValue.getTime():this.endValue)):((this.startValue.getTime?this.startValue.getTime():this.startValue)+(this.endValue.getTime?this.endValue.getTime():this.endValue))/2,this._thicknessType=null)}function ha(a,f,b){ha.base.constructor.call(this,"Crosshair","crosshair",
f,null,b);this.chart=a;this.ctx=this.chart.ctx;this.axis=b;this.optionsName="crosshair";this._thicknessType="pixel"}function Z(a,f){Z.base.constructor.call(this,"ToolTip","toolTip",f,null,a);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.currentDataPointIndex=this.currentSeriesIndex=-1;this._timerId=0;this._prevY=this._prevX=NaN;this.containerTransitionDuration=0.1;this.mozContainerTransition=this.getContainerTransition(this.containerTransitionDuration);this.optionsName="toolTip";
this._initialize()}function ea(a){this.chart=a;this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=[];this.previousDataPointEventObject=null;this.ghostCanvas=ua(this.chart.width,this.chart.height);this.ghostCtx=this.ghostCanvas.getContext("2d");this.mouseoveredObjectMaps=[]}function ja(a){this.chart=a;this.ctx=this.chart.plotArea.ctx;this.animations=[];this.animationRequestId=null}oa(s,Y);s.prototype.destroy=function(){var a=window,f=this.windowResizeHandler;a.removeEventListener?
a.removeEventListener("resize",f):a.detachEvent&&a.detachEvent("onresize",f)};s.prototype._updateOptions=function(){var a=this;this.updateOption("width");this.updateOption("height");this.updateOption("dataPointWidth");this.updateOption("dataPointMinWidth");this.updateOption("dataPointMaxWidth");this.updateOption("interactivityEnabled");this.updateOption("theme");this.updateOption("colorSet")&&(this._selectedColorSet="undefined"!==typeof Aa[this.colorSet]?Aa[this.colorSet]:Aa.colorSet1);this.updateOption("backgroundColor");
this.backgroundColor||(this.backgroundColor="rgba(0,0,0,0)");this.updateOption("culture");this._cultureInfo=new Ja(this.options.culture);this.updateOption("animationEnabled");this.animationEnabled=this.animationEnabled&&v;this.updateOption("animationDuration");this.updateOption("rangeChanging");this.updateOption("rangeChanged");this.updateOption("exportEnabled");this.updateOption("exportFileName");this.updateOption("zoomType");if(this.options.zoomEnabled){if(!this._zoomButton){var f=!1;wa(this._zoomButton=
document.createElement("button"));va(this,this._zoomButton,"pan");this._toolBar.appendChild(this._zoomButton);this._zoomButton.style.borderRight=this.toolbar.borderThickness+"px solid "+this.toolbar.borderColor;O(this._zoomButton,"touchstart",function(a){f=!0});O(this._zoomButton,"click",function(){a.zoomEnabled?(a.zoomEnabled=!1,a.panEnabled=!0,va(a,a._zoomButton,"zoom")):(a.zoomEnabled=!0,a.panEnabled=!1,va(a,a._zoomButton,"pan"));a.render()});O(this._zoomButton,"mouseover",function(){f?f=!1:(pa(a,
a._zoomButton,{backgroundColor:a.toolbar.backgroundColorOnHover,color:a.toolbar.fontColorOnHover,transition:"0.4s",WebkitTransition:"0.4s"}),0>=navigator.userAgent.search("MSIE")&&pa(a,a._zoomButton.childNodes[0],{WebkitFilter:"invert(100%)",filter:"invert(100%)"}))});O(this._zoomButton,"mouseout",function(){f||(pa(a,a._zoomButton,{backgroundColor:a.toolbar.backgroundColor,color:a.toolbar.fontColor,transition:"0.4s",WebkitTransition:"0.4s"}),0>=navigator.userAgent.search("MSIE")&&pa(a,a._zoomButton.childNodes[0],
{WebkitFilter:"invert(0%)",filter:"invert(0%)"}))})}this._resetButton||(f=!1,wa(this._resetButton=document.createElement("button")),va(this,this._resetButton,"reset"),this._resetButton.style.borderRight=(this.exportEnabled?this.toolbar.borderThickness:0)+"px solid "+this.toolbar.borderColor,this._toolBar.appendChild(this._resetButton),O(this._resetButton,"touchstart",function(a){f=!0}),O(this._resetButton,"click",function(){a.toolTip.hide();a.zoomEnabled||a.panEnabled?(a.zoomEnabled=!0,a.panEnabled=
!1,va(a,a._zoomButton,"pan"),a._defaultCursor="default",a.overlaidCanvas.style.cursor=a._defaultCursor):(a.zoomEnabled=!1,a.panEnabled=!1);if(a.sessionVariables.axisX)for(var c=0;c<a.sessionVariables.axisX.length;c++)a.sessionVariables.axisX[c].newViewportMinimum=null,a.sessionVariables.axisX[c].newViewportMaximum=null;if(a.sessionVariables.axisX2)for(c=0;c<a.sessionVariables.axisX2.length;c++)a.sessionVariables.axisX2[c].newViewportMinimum=null,a.sessionVariables.axisX2[c].newViewportMaximum=null;
if(a.sessionVariables.axisY)for(c=0;c<a.sessionVariables.axisY.length;c++)a.sessionVariables.axisY[c].newViewportMinimum=null,a.sessionVariables.axisY[c].newViewportMaximum=null;if(a.sessionVariables.axisY2)for(c=0;c<a.sessionVariables.axisY2.length;c++)a.sessionVariables.axisY2[c].newViewportMinimum=null,a.sessionVariables.axisY2[c].newViewportMaximum=null;a.resetOverlayedCanvas();wa(a._zoomButton,a._resetButton);a._dispatchRangeEvent("rangeChanging","reset");a.render();a._dispatchRangeEvent("rangeChanged",
"reset")}),O(this._resetButton,"mouseover",function(){f||(pa(a,a._resetButton,{backgroundColor:a.toolbar.backgroundColorOnHover,color:a.toolbar.hoverFfontColorOnHoverontColor,transition:"0.4s",WebkitTransition:"0.4s"}),0>=navigator.userAgent.search("MSIE")&&pa(a,a._resetButton.childNodes[0],{WebkitFilter:"invert(100%)",filter:"invert(100%)"}))}),O(this._resetButton,"mouseout",function(){f||(pa(a,a._resetButton,{backgroundColor:a.toolbar.backgroundColor,color:a.toolbar.fontColor,transition:"0.4s",
WebkitTransition:"0.4s"}),0>=navigator.userAgent.search("MSIE")&&pa(a,a._resetButton.childNodes[0],{WebkitFilter:"invert(0%)",filter:"invert(0%)"}))}),this.overlaidCanvas.style.cursor=a._defaultCursor);this.zoomEnabled||this.panEnabled||(this._zoomButton?(a._zoomButton.getAttribute("state")===a._cultureInfo.zoomText?(this.panEnabled=!0,this.zoomEnabled=!1):(this.zoomEnabled=!0,this.panEnabled=!1),Na(a._zoomButton,a._resetButton)):(this.zoomEnabled=!0,this.panEnabled=!1))}else this.panEnabled=this.zoomEnabled=
!1;this._menuButton?this.exportEnabled?Na(this._menuButton):wa(this._menuButton):this.exportEnabled&&v&&(f=!1,this._menuButton=document.createElement("button"),va(this,this._menuButton,"menu"),this._toolBar.appendChild(this._menuButton),O(this._menuButton,"touchstart",function(a){f=!0}),O(this._menuButton,"click",function(){"none"!==a._dropdownMenu.style.display||a._dropDownCloseTime&&500>=(new Date).getTime()-a._dropDownCloseTime.getTime()||(a._dropdownMenu.style.display="block",a._menuButton.blur(),
a._dropdownMenu.focus())},!0),O(this._menuButton,"mouseover",function(){f||(pa(a,a._menuButton,{backgroundColor:a.toolbar.backgroundColorOnHover,color:a.toolbar.fontColorOnHover}),0>=navigator.userAgent.search("MSIE")&&pa(a,a._menuButton.childNodes[0],{WebkitFilter:"invert(100%)",filter:"invert(100%)"}))},!0),O(this._menuButton,"mouseout",function(){f||(pa(a,a._menuButton,{backgroundColor:a.toolbar.backgroundColor,color:a.toolbar.fontColor}),0>=navigator.userAgent.search("MSIE")&&pa(a,a._menuButton.childNodes[0],
{WebkitFilter:"invert(0%)",filter:"invert(0%)"}))},!0));if(!this._dropdownMenu&&this.exportEnabled&&v){f=!1;this._dropdownMenu=document.createElement("div");this._dropdownMenu.setAttribute("tabindex",-1);var b=-1!==this.theme.indexOf("dark")?"black":"#888888";this._dropdownMenu.style.cssText="position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 0px;top: 25px;min-width: 120px;outline: 0;font-size: 14px; font-family: Arial, Helvetica, sans-serif;padding: 5px 0px 5px 0px;text-align: left;line-height: 10px;background-color:"+
this.toolbar.backgroundColor+";box-shadow: 2px 2px 10px "+b;a._dropdownMenu.style.display="none";this._toolBar.appendChild(this._dropdownMenu);O(this._dropdownMenu,"blur",function(){wa(a._dropdownMenu);a._dropDownCloseTime=new Date},!0);b=document.createElement("div");b.style.cssText="padding: 12px 8px 12px 8px";b.innerHTML=this._cultureInfo.printText;b.style.backgroundColor=this.toolbar.backgroundColor;b.style.color=this.toolbar.fontColor;this._dropdownMenu.appendChild(b);O(b,"touchstart",function(a){f=
!0});O(b,"mouseover",function(){f||(this.style.backgroundColor=a.toolbar.backgroundColorOnHover,this.style.color=a.toolbar.fontColorOnHover)},!0);O(b,"mouseout",function(){f||(this.style.backgroundColor=a.toolbar.backgroundColor,this.style.color=a.toolbar.fontColor)},!0);O(b,"click",function(){a.print();wa(a._dropdownMenu)},!0);b=document.createElement("div");b.style.cssText="padding: 12px 8px 12px 8px";b.innerHTML=this._cultureInfo.saveJPGText;b.style.backgroundColor=this.toolbar.backgroundColor;
b.style.color=this.toolbar.fontColor;this._dropdownMenu.appendChild(b);O(b,"touchstart",function(a){f=!0});O(b,"mouseover",function(){f||(this.style.backgroundColor=a.toolbar.backgroundColorOnHover,this.style.color=a.toolbar.fontColorOnHover)},!0);O(b,"mouseout",function(){f||(this.style.backgroundColor=a.toolbar.backgroundColor,this.style.color=a.toolbar.fontColor)},!0);O(b,"click",function(){q(a.canvas,"jpeg",a.exportFileName);wa(a._dropdownMenu)},!0);b=document.createElement("div");b.style.cssText=
"padding: 12px 8px 12px 8px";b.innerHTML=this._cultureInfo.savePNGText;b.style.backgroundColor=this.toolbar.backgroundColor;b.style.color=this.toolbar.fontColor;this._dropdownMenu.appendChild(b);O(b,"touchstart",function(a){f=!0});O(b,"mouseover",function(){f||(this.style.backgroundColor=a.toolbar.backgroundColorOnHover,this.style.color=a.toolbar.fontColorOnHover)},!0);O(b,"mouseout",function(){f||(this.style.backgroundColor=a.toolbar.backgroundColor,this.style.color=a.toolbar.fontColor)},!0);O(b,
"click",function(){q(a.canvas,"png",a.exportFileName);wa(a._dropdownMenu)},!0)}"none"!==this._toolBar.style.display&&this._zoomButton&&(this.panEnabled?va(a,a._zoomButton,"zoom"):va(a,a._zoomButton,"pan"),a._resetButton.getAttribute("state")!==a._cultureInfo.resetText&&va(a,a._resetButton,"reset"));this.options.toolTip&&this.toolTip.options!==this.options.toolTip&&(this.toolTip.options=this.options.toolTip);for(var c in this.toolTip.options)this.toolTip.options.hasOwnProperty(c)&&this.toolTip.updateOption(c)};
s.prototype._updateSize=function(){var a=0,f=0;this.options.width?a=this.width:this.width=a=0<this.container.clientWidth?this.container.clientWidth:this.width;this.options.height?f=this.height:this.height=f=0<this.container.clientHeight?this.container.clientHeight:this.height;return this.canvas.width!==a*ga||this.canvas.height!==f*ga?(Ha(this.canvas,a,f),Ha(this._preRenderCanvas,a,f),Ha(this.overlaidCanvas,a,f),Ha(this._eventManager.ghostCanvas,a,f),this.bounds={x1:0,y1:0,x2:this.width,y2:this.height},
!0):!1};s.prototype._initialize=function(){this.toolbar=new Sa(this,this.options.toolbar);this._animator?this._animator.cancelAllAnimations():this._animator=new ja(this);this.removeAllEventListeners();this.disableToolTip=!1;this._axes=[];this.funnelPyramidClickHandler=this.pieDoughnutClickHandler=null;this.animationRequestId&&this.cancelRequestAnimFrame.call(window,this.animationRequestId);this._updateOptions();this.animatedRender=v&&this.animationEnabled&&0===this.renderCount;this._updateSize();
this.clearCanvas();this.ctx.beginPath();this.axisX=[];this.axisX2=[];this.axisY=[];this.axisY2=[];this._indexLabels=[];this._dataInRenderedOrder=[];this._events=[];this._eventManager&&this._eventManager.reset();this.plotInfo={axisPlacement:null,plotTypes:[]};this.layoutManager=new Ea(0,0,this.width,this.height,2);this.plotArea.layoutManager&&this.plotArea.layoutManager.reset();this.data=[];var a=0,f=null;if(this.options.data){for(var b=0;b<this.options.data.length;b++)if(a++,!this.options.data[b].type||
0<=s._supportedChartTypes.indexOf(this.options.data[b].type)){var c=new R(this,this.options.data[b],a-1,++this._eventManager.lastObjectId);"error"===c.type&&(c.linkedDataSeriesIndex=y(this.options.data[b].linkedDataSeriesIndex)?b-1:this.options.data[b].linkedDataSeriesIndex,0>c.linkedDataSeriesIndex||c.linkedDataSeriesIndex>=this.options.data.length||"number"!==typeof c.linkedDataSeriesIndex||"error"===this.options.data[c.linkedDataSeriesIndex].type)&&(c.linkedDataSeriesIndex=null);null===c.name&&
(c.name="DataSeries "+a);null===c.color?1<this.options.data.length?(c._colorSet=[this._selectedColorSet[c.index%this._selectedColorSet.length]],c.color=this._selectedColorSet[c.index%this._selectedColorSet.length]):c._colorSet="line"===c.type||"stepLine"===c.type||"spline"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"stackedArea"===c.type||"stackedArea100"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type||"candlestick"===c.type||"ohlc"===c.type||"waterfall"===
c.type||"boxAndWhisker"===c.type?[this._selectedColorSet[0]]:this._selectedColorSet:c._colorSet=[c.color];null===c.markerSize&&(("line"===c.type||"stepLine"===c.type||"spline"===c.type||0<=c.type.toLowerCase().indexOf("area"))&&c.dataPoints&&c.dataPoints.length<this.width/16||"scatter"===c.type)&&(c.markerSize=8);"bubble"!==c.type&&"scatter"!==c.type||!c.dataPoints||(c.dataPoints.some?c.dataPoints.some(function(a){return a.x})&&c.dataPoints.sort(m):c.dataPoints.sort(m));this.data.push(c);var e=c.axisPlacement,
f=f||e,g;"normal"===e?"xySwapped"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with bar chart':"none"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="normal"):"xySwapped"===e?"normal"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with line, area, column or pie chart':"none"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with pie chart':null===
this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="xySwapped"):"none"===e?"normal"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with line, area, column or bar chart':"xySwapped"===this.plotInfo.axisPlacement?g='You cannot combine "'+c.type+'" with bar chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="none"):null===e&&"none"===this.plotInfo.axisPlacement&&(g='You cannot combine "'+c.type+'" with pie chart');if(g&&window.console){window.console.log(g);
return}}for(b=0;b<this.data.length;b++){if("none"==f&&"error"===this.data[b].type&&window.console){window.console.log('You cannot combine "'+c.type+'" with error chart');return}"error"===this.data[b].type&&(this.data[b].axisPlacement=this.plotInfo.axisPlacement=f||"normal",this.data[b]._linkedSeries=null===this.data[b].linkedDataSeriesIndex?null:this.data[this.data[b].linkedDataSeriesIndex])}}this._objectsInitialized=!0};s._supportedChartTypes=Da("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
s.prototype.render=function(a){a&&(this.options=a);this._initialize();var f=[];for(a=0;a<this.data.length;a++)if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement){if(!this.data[a].axisYType||"primary"===this.data[a].axisYType)if(this.options.axisY&&0<this.options.axisY.length){if(!this.axisY.length)for(var b=0;b<this.options.axisY.length;b++)"normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY[b]=new C(this,"axisY",this.options.axisY[b],b,"axisY","left")):
"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY[b]=new C(this,"axisY",this.options.axisY[b],b,"axisY","bottom"));this.data[a].axisY=this.axisY[0<=this.data[a].axisYIndex&&this.data[a].axisYIndex<this.axisY.length?this.data[a].axisYIndex:0];this.axisY[0<=this.data[a].axisYIndex&&this.data[a].axisYIndex<this.axisY.length?this.data[a].axisYIndex:0].dataSeries.push(this.data[a])}else this.axisY.length||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY[0]=new C(this,
"axisY",this.options.axisY,0,"axisY","left")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY[0]=new C(this,"axisY",this.options.axisY,0,"axisY","bottom"))),this.data[a].axisY=this.axisY[0],this.axisY[0].dataSeries.push(this.data[a]);if("secondary"===this.data[a].axisYType)if(this.options.axisY2&&0<this.options.axisY2.length){if(!this.axisY2.length)for(b=0;b<this.options.axisY2.length;b++)"normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY2[b]=new C(this,"axisY2",
this.options.axisY2[b],b,"axisY","right")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY2[b]=new C(this,"axisY2",this.options.axisY2[b],b,"axisY","top"));this.data[a].axisY=this.axisY2[0<=this.data[a].axisYIndex&&this.data[a].axisYIndex<this.axisY2.length?this.data[a].axisYIndex:0];this.axisY2[0<=this.data[a].axisYIndex&&this.data[a].axisYIndex<this.axisY2.length?this.data[a].axisYIndex:0].dataSeries.push(this.data[a])}else this.axisY2.length||("normal"===this.plotInfo.axisPlacement?
this._axes.push(this.axisY2[0]=new C(this,"axisY2",this.options.axisY2,0,"axisY","right")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY2[0]=new C(this,"axisY2",this.options.axisY2,0,"axisY","top"))),this.data[a].axisY=this.axisY2[0],this.axisY2[0].dataSeries.push(this.data[a]);if(!this.data[a].axisXType||"primary"===this.data[a].axisXType)if(this.options.axisX&&0<this.options.axisX.length){if(!this.axisX.length)for(b=0;b<this.options.axisX.length;b++)"normal"===this.plotInfo.axisPlacement?
this._axes.push(this.axisX[b]=new C(this,"axisX",this.options.axisX[b],b,"axisX","bottom")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX[b]=new C(this,"axisX",this.options.axisX[b],b,"axisX","left"));this.data[a].axisX=this.axisX[0<=this.data[a].axisXIndex&&this.data[a].axisXIndex<this.axisX.length?this.data[a].axisXIndex:0];this.axisX[0<=this.data[a].axisXIndex&&this.data[a].axisXIndex<this.axisX.length?this.data[a].axisXIndex:0].dataSeries.push(this.data[a])}else this.axisX.length||
("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX[0]=new C(this,"axisX",this.options.axisX,0,"axisX","bottom")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX[0]=new C(this,"axisX",this.options.axisX,0,"axisX","left"))),this.data[a].axisX=this.axisX[0],this.axisX[0].dataSeries.push(this.data[a]);if("secondary"===this.data[a].axisXType)if(this.options.axisX2&&0<this.options.axisX2.length){if(!this.axisX2.length)for(b=0;b<this.options.axisX2.length;b++)"normal"===
this.plotInfo.axisPlacement?this._axes.push(this.axisX2[b]=new C(this,"axisX2",this.options.axisX2[b],b,"axisX","top")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX2[b]=new C(this,"axisX2",this.options.axisX2[b],b,"axisX","right"));this.data[a].axisX=this.axisX2[0<=this.data[a].axisXIndex&&this.data[a].axisXIndex<this.axisX2.length?this.data[a].axisXIndex:0];this.axisX2[0<=this.data[a].axisXIndex&&this.data[a].axisXIndex<this.axisX2.length?this.data[a].axisXIndex:0].dataSeries.push(this.data[a])}else this.axisX2.length||
("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX2[0]=new C(this,"axisX2",this.options.axisX2,0,"axisX","top")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisX2[0]=new C(this,"axisX2",this.options.axisX2,0,"axisX","right"))),this.data[a].axisX=this.axisX2[0],this.axisX2[0].dataSeries.push(this.data[a])}if(this.axisY){for(b=1;b<this.axisY.length;b++)"undefined"===typeof this.axisY[b].options.gridThickness&&(this.axisY[b].gridThickness=0);for(b=0;b<this.axisY.length-
1;b++)"undefined"===typeof this.axisY[b].options.margin&&(this.axisY[b].margin=10)}if(this.axisY2){for(b=1;b<this.axisY2.length;b++)"undefined"===typeof this.axisY2[b].options.gridThickness&&(this.axisY2[b].gridThickness=0);for(b=0;b<this.axisY2.length-1;b++)"undefined"===typeof this.axisY2[b].options.margin&&(this.axisY2[b].margin=10)}this.axisY&&0<this.axisY.length&&(this.axisY2&&0<this.axisY2.length)&&(0<this.axisY[0].gridThickness&&"undefined"===typeof this.axisY2[0].options.gridThickness?this.axisY2[0].gridThickness=
0:0<this.axisY2[0].gridThickness&&"undefined"===typeof this.axisY[0].options.gridThickness&&(this.axisY[0].gridThickness=0));if(this.axisX)for(b=0;b<this.axisX.length;b++)"undefined"===typeof this.axisX[b].options.gridThickness&&(this.axisX[b].gridThickness=0);if(this.axisX2)for(b=0;b<this.axisX2.length;b++)"undefined"===typeof this.axisX2[b].options.gridThickness&&(this.axisX2[b].gridThickness=0);this.axisX&&0<this.axisX.length&&(this.axisX2&&0<this.axisX2.length)&&(0<this.axisX[0].gridThickness&&
"undefined"===typeof this.axisX2[0].options.gridThickness?this.axisX2[0].gridThickness=0:0<this.axisX2[0].gridThickness&&"undefined"===typeof this.axisX[0].options.gridThickness&&(this.axisX[0].gridThickness=0));b=!1;if(0<this._axes.length&&(this.zoomEnabled||this.panEnabled))for(a=0;a<this._axes.length;a++)if(null!==this._axes[a].viewportMinimum||null!==this._axes[a].viewportMaximum){b=!0;break}b?(Na(this._zoomButton,this._resetButton),this._toolBar.style.border=this.toolbar.borderThickness+"px solid "+
this.toolbar.borderColor,this._zoomButton.style.borderRight=this.toolbar.borderThickness+"px solid "+this.toolbar.borderColor,this._resetButton.style.borderRight=(this.exportEnabled?this.toolbar.borderThickness:0)+"px solid "+this.toolbar.borderColor):(wa(this._zoomButton,this._resetButton),this._toolBar.style.border=this.toolbar.borderThickness+"px solid transparent",this.options.zoomEnabled&&(this.zoomEnabled=!0,this.panEnabled=!1));cb(this);this._processData();this.options.title&&(this.title=new Ia(this,
this.options.title),this.title.dockInsidePlotArea?f.push(this.title):this.title.render());if(this.options.subtitles)for(this.subtitles=[],a=0;a<this.options.subtitles.length;a++)b=new Oa(this,this.options.subtitles[a],a),this.subtitles.push(b),b.dockInsidePlotArea?f.push(b):b.render();this.legend=new U(this,this.options.legend);for(a=0;a<this.data.length;a++)(this.data[a].showInLegend||"pie"===this.data[a].type||"doughnut"===this.data[a].type||"funnel"===this.data[a].type||"pyramid"===this.data[a].type)&&
this.legend.dataSeries.push(this.data[a]);this.legend.dockInsidePlotArea?f.push(this.legend):this.legend.render();for(a=0;a<this._axes.length;a++)if(this._axes[a].scaleBreaks&&this._axes[a].scaleBreaks._appliedBreaks.length){v?(this._breaksCanvas=ua(this.width,this.height,!0),this._breaksCanvasCtx=this._breaksCanvas.getContext("2d")):(this._breaksCanvas=this.canvas,this._breaksCanvasCtx=this.ctx);break}this._preRenderCanvas=ua(this.width,this.height);this._preRenderCtx=this._preRenderCanvas.getContext("2d");
if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)C.setLayoutAndRender(this.axisX,this.axisX2,this.axisY,this.axisY2,this.plotInfo.axisPlacement,this.layoutManager.getFreeSpace());else if("none"===this.plotInfo.axisPlacement)this.preparePlotArea();else return;for(a=0;a<f.length;a++)f[a].render();var c=[];if(this.animatedRender){var e=ua(this.width,this.height);e.getContext("2d").drawImage(this.canvas,0,0,this.width,this.height)}db(this);var f=this.ctx.miterLimit,
g;this.ctx.miterLimit=3;v&&this._breaksCanvas&&(this._preRenderCtx.drawImage(this.canvas,0,0,this.width,this.height),this._preRenderCtx.drawImage(this._breaksCanvas,0,0,this.width,this.height),this._breaksCanvasCtx.globalCompositeOperation="source-atop",this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),this._preRenderCtx.clearRect(0,0,this.width,this.height));for(a=0;a<this.plotInfo.plotTypes.length;a++)for(var h=this.plotInfo.plotTypes[a],l=0;l<h.plotUnits.length;l++){var t=
h.plotUnits[l],k=null;t.targetCanvas=null;this.animatedRender&&(t.targetCanvas=ua(this.width,this.height),t.targetCanvasCtx=t.targetCanvas.getContext("2d"),g=t.targetCanvasCtx.miterLimit,t.targetCanvasCtx.miterLimit=3);"line"===t.type?k=this.renderLine(t):"stepLine"===t.type?k=this.renderStepLine(t):"spline"===t.type?k=this.renderSpline(t):"column"===t.type?k=this.renderColumn(t):"bar"===t.type?k=this.renderBar(t):"area"===t.type?k=this.renderArea(t):"stepArea"===t.type?k=this.renderStepArea(t):"splineArea"===
t.type?k=this.renderSplineArea(t):"stackedColumn"===t.type?k=this.renderStackedColumn(t):"stackedColumn100"===t.type?k=this.renderStackedColumn100(t):"stackedBar"===t.type?k=this.renderStackedBar(t):"stackedBar100"===t.type?k=this.renderStackedBar100(t):"stackedArea"===t.type?k=this.renderStackedArea(t):"stackedArea100"===t.type?k=this.renderStackedArea100(t):"bubble"===t.type?k=k=this.renderBubble(t):"scatter"===t.type?k=this.renderScatter(t):"pie"===t.type?this.renderPie(t):"doughnut"===t.type?
this.renderPie(t):"funnel"===t.type?k=this.renderFunnel(t):"pyramid"===t.type?k=this.renderFunnel(t):"candlestick"===t.type?k=this.renderCandlestick(t):"ohlc"===t.type?k=this.renderCandlestick(t):"rangeColumn"===t.type?k=this.renderRangeColumn(t):"error"===t.type?k=this.renderError(t):"rangeBar"===t.type?k=this.renderRangeBar(t):"rangeArea"===t.type?k=this.renderRangeArea(t):"rangeSplineArea"===t.type?k=this.renderRangeSplineArea(t):"waterfall"===t.type?k=this.renderWaterfall(t):"boxAndWhisker"===
t.type&&(k=this.renderBoxAndWhisker(t));for(b=0;b<t.dataSeriesIndexes.length;b++)this._dataInRenderedOrder.push(this.data[t.dataSeriesIndexes[b]]);this.animatedRender&&(t.targetCanvasCtx.miterLimit=g,k&&c.push(k))}this.ctx.miterLimit=f;this.animatedRender&&this._breaksCanvasCtx&&c.push({source:this._breaksCanvasCtx,dest:this.plotArea.ctx,animationCallback:I.fadeInAnimation,easingFunction:I.easing.easeInQuad,animationBase:0,startTimePercent:0.7});this.animatedRender&&0<this._indexLabels.length&&(g=
ua(this.width,this.height).getContext("2d"),c.push(this.renderIndexLabels(g)));var r=this;if(0<c.length)r.disableToolTip=!0,r._animator.animate(200,r.animationDuration,function(a){r.ctx.clearRect(0,0,r.width,r.height);r.ctx.drawImage(e,0,0,Math.floor(r.width*ga),Math.floor(r.height*ga),0,0,r.width,r.height);for(var b=0;b<c.length;b++)k=c[b],1>a&&"undefined"!==typeof k.startTimePercent?a>=k.startTimePercent&&k.animationCallback(k.easingFunction(a-k.startTimePercent,0,1,1-k.startTimePercent),k):k.animationCallback(k.easingFunction(a,
0,1,1),k);r.dispatchEvent("dataAnimationIterationEnd",{chart:r})},function(){c=[];for(var a=0;a<r.plotInfo.plotTypes.length;a++)for(var b=r.plotInfo.plotTypes[a],d=0;d<b.plotUnits.length;d++)b.plotUnits[d].targetCanvas=null;e=null;r.disableToolTip=!1});else{if(r._breaksCanvas)if(v)r.plotArea.ctx.drawImage(r._breaksCanvas,0,0,this.width,this.height);else for(b=0;b<r._axes.length;b++)r._axes[b].createMask();0<r._indexLabels.length&&r.renderIndexLabels();r.dispatchEvent("dataAnimationIterationEnd",{chart:r})}this.attachPlotAreaEventHandlers();
this.zoomEnabled||(this.panEnabled||!this._zoomButton||"none"===this._zoomButton.style.display)||wa(this._zoomButton,this._resetButton);this.toolTip._updateToolTip();this.renderCount++;this._breaksCanvas&&(delete this._breaksCanvas,delete this._breaksCanvasCtx);for(b=0;b<this._axes.length;b++)this._axes[b].maskCanvas&&(delete this._axes[b].maskCanvas,delete this._axes[b].maskCtx)};s.prototype.attachPlotAreaEventHandlers=function(){this.attachEvent({context:this,chart:this,mousedown:this._plotAreaMouseDown,
mouseup:this._plotAreaMouseUp,mousemove:this._plotAreaMouseMove,cursor:this.panEnabled?"move":"default",capture:!0,bounds:this.plotArea})};s.prototype.categoriseDataSeries=function(){for(var a="",f=0;f<this.data.length;f++)if(a=this.data[f],a.dataPoints&&(0!==a.dataPoints.length&&a.visible)&&0<=s._supportedChartTypes.indexOf(a.type)){for(var b=null,c=!1,e=null,g=!1,h=0;h<this.plotInfo.plotTypes.length;h++)if(this.plotInfo.plotTypes[h].type===a.type){c=!0;b=this.plotInfo.plotTypes[h];break}c||(b={type:a.type,
totalDataSeries:0,plotUnits:[]},this.plotInfo.plotTypes.push(b));for(h=0;h<b.plotUnits.length;h++)if(b.plotUnits[h].axisYType===a.axisYType&&b.plotUnits[h].axisXType===a.axisXType&&b.plotUnits[h].axisYIndex===a.axisYIndex&&b.plotUnits[h].axisXIndex===a.axisXIndex){g=!0;e=b.plotUnits[h];break}g||(e={type:a.type,previousDataSeriesCount:0,index:b.plotUnits.length,plotType:b,axisXType:a.axisXType,axisYType:a.axisYType,axisYIndex:a.axisYIndex,axisXIndex:a.axisXIndex,axisY:"primary"===a.axisYType?this.axisY[0<=
a.axisYIndex&&a.axisYIndex<this.axisY.length?a.axisYIndex:0]:this.axisY2[0<=a.axisYIndex&&a.axisYIndex<this.axisY2.length?a.axisYIndex:0],axisX:"primary"===a.axisXType?this.axisX[0<=a.axisXIndex&&a.axisXIndex<this.axisX.length?a.axisXIndex:0]:this.axisX2[0<=a.axisXIndex&&a.axisXIndex<this.axisX2.length?a.axisXIndex:0],dataSeriesIndexes:[],yTotals:[]},b.plotUnits.push(e));b.totalDataSeries++;e.dataSeriesIndexes.push(f);a.plotUnit=e}for(f=0;f<this.plotInfo.plotTypes.length;f++)for(b=this.plotInfo.plotTypes[f],
h=a=0;h<b.plotUnits.length;h++)b.plotUnits[h].previousDataSeriesCount=a,a+=b.plotUnits[h].dataSeriesIndexes.length};s.prototype.assignIdToDataPoints=function(){for(var a=0;a<this.data.length;a++){var f=this.data[a];if(f.dataPoints)for(var b=f.dataPoints.length,c=0;c<b;c++)f.dataPointIds[c]=++this._eventManager.lastObjectId}};s.prototype._processData=function(){this.assignIdToDataPoints();this.categoriseDataSeries();for(var a=0;a<this.plotInfo.plotTypes.length;a++)for(var f=this.plotInfo.plotTypes[a],
b=0;b<f.plotUnits.length;b++){var c=f.plotUnits[b];"line"===c.type||"stepLine"===c.type||"spline"===c.type||"column"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"bar"===c.type||"bubble"===c.type||"scatter"===c.type?this._processMultiseriesPlotUnit(c):"stackedColumn"===c.type||"stackedBar"===c.type||"stackedArea"===c.type?this._processStackedPlotUnit(c):"stackedColumn100"===c.type||"stackedBar100"===c.type||"stackedArea100"===c.type?this._processStacked100PlotUnit(c):"candlestick"===
c.type||"ohlc"===c.type||"rangeColumn"===c.type||"rangeBar"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type||"error"===c.type||"boxAndWhisker"===c.type?this._processMultiYPlotUnit(c):"waterfall"===c.type&&this._processSpecificPlotUnit(c)}this.calculateAutoBreaks()};s.prototype._processMultiseriesPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var f=a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,g=!1,h=0;h<a.dataSeriesIndexes.length;h++){var l=this.data[a.dataSeriesIndexes[h]],
t=0,k=!1,r=!1,p;if("normal"===l.axisPlacement||"xySwapped"===l.axisPlacement)var n=a.axisX.sessionVariables.newViewportMinimum?a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:a.axisX.logarithmic?0:-Infinity,d=a.axisX.sessionVariables.newViewportMaximum?a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?
this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(l.dataPoints[t].x&&l.dataPoints[t].x.getTime||"dateTime"===l.xValueType)g=!0;for(t=0;t<l.dataPoints.length;t++){"undefined"===typeof l.dataPoints[t].x&&(l.dataPoints[t].x=t+(a.axisX.logarithmic?1:0));l.dataPoints[t].x.getTime?(g=!0,c=l.dataPoints[t].x.getTime()):c=l.dataPoints[t].x;e=l.dataPoints[t].y;c<b.min&&(b.min=c);c>b.max&&(b.max=c);e<f.min&&"number"===typeof e&&(f.min=e);
e>f.max&&"number"===typeof e&&(f.max=e);if(0<t){if(a.axisX.logarithmic){var w=c/l.dataPoints[t-1].x;1>w&&(w=1/w);b.minDiff>w&&1!==w&&(b.minDiff=w)}else w=c-l.dataPoints[t-1].x,0>w&&(w*=-1),b.minDiff>w&&0!==w&&(b.minDiff=w);null!==e&&null!==l.dataPoints[t-1].y&&(a.axisY.logarithmic?(w=e/l.dataPoints[t-1].y,1>w&&(w=1/w),f.minDiff>w&&1!==w&&(f.minDiff=w)):(w=e-l.dataPoints[t-1].y,0>w&&(w*=-1),f.minDiff>w&&0!==w&&(f.minDiff=w)))}if(c<n&&!k)null!==e&&(p=c);else{if(!k&&(k=!0,0<t)){t-=2;continue}if(c>d&&
!r)r=!0;else if(c>d&&r)continue;l.dataPoints[t].label&&(a.axisX.labels[c]=l.dataPoints[t].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);null===e?b.viewPortMin===c&&p<c&&(b.viewPortMin=p):(e<f.viewPortMin&&"number"===typeof e&&(f.viewPortMin=e),e>f.viewPortMax&&"number"===typeof e&&(f.viewPortMax=e))}}l.axisX.valueType=l.xValueType=g?"dateTime":"number"}};s.prototype._processStackedPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var f=
a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,g=!1,h=[],l=[],t=Infinity,k=-Infinity,r=0;r<a.dataSeriesIndexes.length;r++){var p=this.data[a.dataSeriesIndexes[r]],n=0,d=!1,w=!1,za;if("normal"===p.axisPlacement||"xySwapped"===p.axisPlacement)var D=a.axisX.sessionVariables.newViewportMinimum?a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:-Infinity,
u=a.axisX.sessionVariables.newViewportMaximum?a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(p.dataPoints[n].x&&p.dataPoints[n].x.getTime||"dateTime"===p.xValueType)g=!0;for(n=0;n<p.dataPoints.length;n++){"undefined"===typeof p.dataPoints[n].x&&(p.dataPoints[n].x=n+(a.axisX.logarithmic?1:0));p.dataPoints[n].x.getTime?(g=!0,c=p.dataPoints[n].x.getTime()):
c=p.dataPoints[n].x;e=y(p.dataPoints[n].y)?0:p.dataPoints[n].y;c<b.min&&(b.min=c);c>b.max&&(b.max=c);if(0<n){if(a.axisX.logarithmic){var m=c/p.dataPoints[n-1].x;1>m&&(m=1/m);b.minDiff>m&&1!==m&&(b.minDiff=m)}else m=c-p.dataPoints[n-1].x,0>m&&(m*=-1),b.minDiff>m&&0!==m&&(b.minDiff=m);null!==e&&null!==p.dataPoints[n-1].y&&(a.axisY.logarithmic?0<e&&(m=e/p.dataPoints[n-1].y,1>m&&(m=1/m),f.minDiff>m&&1!==m&&(f.minDiff=m)):(m=e-p.dataPoints[n-1].y,0>m&&(m*=-1),f.minDiff>m&&0!==m&&(f.minDiff=m)))}if(c<D&&
!d)null!==p.dataPoints[n].y&&(za=c);else{if(!d&&(d=!0,0<n)){n-=2;continue}if(c>u&&!w)w=!0;else if(c>u&&w)continue;p.dataPoints[n].label&&(a.axisX.labels[c]=p.dataPoints[n].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);null===p.dataPoints[n].y?b.viewPortMin===c&&za<c&&(b.viewPortMin=za):(a.yTotals[c]=(a.yTotals[c]?a.yTotals[c]:0)+e,0<=e?h[c]?h[c]+=e:(h[c]=e,t=Math.min(e,t)):l[c]?l[c]+=e:(l[c]=e,k=Math.max(e,k)))}}a.axisY.scaleBreaks&&(a.axisY.scaleBreaks.autoCalculate&&
1<=a.axisY.scaleBreaks.maxNumberOfAutoBreaks)&&(f.dataPointYPositiveSums?(f.dataPointYPositiveSums.push.apply(f.dataPointYPositiveSums,h),f.dataPointYNegativeSums.push.apply(f.dataPointYPositiveSums,l)):(f.dataPointYPositiveSums=h,f.dataPointYNegativeSums=l));p.axisX.valueType=p.xValueType=g?"dateTime":"number"}for(n in h)h.hasOwnProperty(n)&&!isNaN(n)&&(a=h[n],a<f.min&&(f.min=Math.min(a,t)),a>f.max&&(f.max=a),n<b.viewPortMin||n>b.viewPortMax||(a<f.viewPortMin&&(f.viewPortMin=Math.min(a,t)),a>f.viewPortMax&&
(f.viewPortMax=a)));for(n in l)l.hasOwnProperty(n)&&!isNaN(n)&&(a=l[n],a<f.min&&(f.min=a),a>f.max&&(f.max=Math.max(a,k)),n<b.viewPortMin||n>b.viewPortMax||(a<f.viewPortMin&&(f.viewPortMin=a),a>f.viewPortMax&&(f.viewPortMax=Math.max(a,k))))}};s.prototype._processStacked100PlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var f=a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,g=!1,h=!1,l=!1,t=[],k=0;k<a.dataSeriesIndexes.length;k++){var r=this.data[a.dataSeriesIndexes[k]],p=0,
n=!1,d=!1,w;if("normal"===r.axisPlacement||"xySwapped"===r.axisPlacement)var m=a.axisX.sessionVariables.newViewportMinimum?a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:-Infinity,D=a.axisX.sessionVariables.newViewportMaximum?a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:
this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(r.dataPoints[p].x&&r.dataPoints[p].x.getTime||"dateTime"===r.xValueType)g=!0;for(p=0;p<r.dataPoints.length;p++){"undefined"===typeof r.dataPoints[p].x&&(r.dataPoints[p].x=p+(a.axisX.logarithmic?1:0));r.dataPoints[p].x.getTime?(g=!0,c=r.dataPoints[p].x.getTime()):c=r.dataPoints[p].x;e=y(r.dataPoints[p].y)?null:r.dataPoints[p].y;c<b.min&&(b.min=c);c>b.max&&(b.max=c);if(0<p){if(a.axisX.logarithmic){var u=c/r.dataPoints[p-
1].x;1>u&&(u=1/u);b.minDiff>u&&1!==u&&(b.minDiff=u)}else u=c-r.dataPoints[p-1].x,0>u&&(u*=-1),b.minDiff>u&&0!==u&&(b.minDiff=u);y(e)||null===r.dataPoints[p-1].y||(a.axisY.logarithmic?0<e&&(u=e/r.dataPoints[p-1].y,1>u&&(u=1/u),f.minDiff>u&&1!==u&&(f.minDiff=u)):(u=e-r.dataPoints[p-1].y,0>u&&(u*=-1),f.minDiff>u&&0!==u&&(f.minDiff=u)))}if(c<m&&!n)null!==e&&(w=c);else{if(!n&&(n=!0,0<p)){p-=2;continue}if(c>D&&!d)d=!0;else if(c>D&&d)continue;r.dataPoints[p].label&&(a.axisX.labels[c]=r.dataPoints[p].label);
c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);null===e?b.viewPortMin===c&&w<c&&(b.viewPortMin=w):(a.yTotals[c]=(a.yTotals[c]?a.yTotals[c]:0)+e,0<=e?h=!0:0>e&&(l=!0),t[c]=t[c]?t[c]+Math.abs(e):Math.abs(e))}}r.axisX.valueType=r.xValueType=g?"dateTime":"number"}a.axisY.logarithmic?(f.max=y(f.viewPortMax)?99*Math.pow(a.axisY.logarithmBase,-0.05):Math.max(f.viewPortMax,99*Math.pow(a.axisY.logarithmBase,-0.05)),f.min=y(f.viewPortMin)?1:Math.min(f.viewPortMin,1)):h&&!l?(f.max=y(f.viewPortMax)?
99:Math.max(f.viewPortMax,99),f.min=y(f.viewPortMin)?1:Math.min(f.viewPortMin,1)):h&&l?(f.max=y(f.viewPortMax)?99:Math.max(f.viewPortMax,99),f.min=y(f.viewPortMin)?-99:Math.min(f.viewPortMin,-99)):!h&&l&&(f.max=y(f.viewPortMax)?-1:Math.max(f.viewPortMax,-1),f.min=y(f.viewPortMin)?-99:Math.min(f.viewPortMin,-99));f.viewPortMin=f.min;f.viewPortMax=f.max;a.dataPointYSums=t}};s.prototype._processMultiYPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var f=a.axisY.dataInfo,
b=a.axisX.dataInfo,c,e,g,h,l=!1,t=0;t<a.dataSeriesIndexes.length;t++){var k=this.data[a.dataSeriesIndexes[t]],r=0,p=!1,n=!1,d,w,m;if("normal"===k.axisPlacement||"xySwapped"===k.axisPlacement)var D=a.axisX.sessionVariables.newViewportMinimum?a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:a.axisX.logarithmic?0:-Infinity,u=a.axisX.sessionVariables.newViewportMaximum?
a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;if(k.dataPoints[r].x&&k.dataPoints[r].x.getTime||"dateTime"===k.xValueType)l=!0;for(r=0;r<k.dataPoints.length;r++){"undefined"===typeof k.dataPoints[r].x&&(k.dataPoints[r].x=r+(a.axisX.logarithmic?1:0));k.dataPoints[r].x.getTime?(l=!0,c=k.dataPoints[r].x.getTime()):c=k.dataPoints[r].x;
if((e=k.dataPoints[r].y)&&e.length){g=Math.min.apply(null,e);h=Math.max.apply(null,e);w=!0;for(var v=0;v<e.length;v++)null===e.k&&(w=!1);w&&(p||(m=d),d=c)}c<b.min&&(b.min=c);c>b.max&&(b.max=c);g<f.min&&(f.min=g);h>f.max&&(f.max=h);0<r&&(a.axisX.logarithmic?(w=c/k.dataPoints[r-1].x,1>w&&(w=1/w),b.minDiff>w&&1!==w&&(b.minDiff=w)):(w=c-k.dataPoints[r-1].x,0>w&&(w*=-1),b.minDiff>w&&0!==w&&(b.minDiff=w)),e&&(null!==e[0]&&k.dataPoints[r-1].y&&null!==k.dataPoints[r-1].y[0])&&(a.axisY.logarithmic?(w=e[0]/
k.dataPoints[r-1].y[0],1>w&&(w=1/w),f.minDiff>w&&1!==w&&(f.minDiff=w)):(w=e[0]-k.dataPoints[r-1].y[0],0>w&&(w*=-1),f.minDiff>w&&0!==w&&(f.minDiff=w))));if(!(c<D)||p){if(!p&&(p=!0,0<r)){r-=2;d=m;continue}if(c>u&&!n)n=!0;else if(c>u&&n)continue;k.dataPoints[r].label&&(a.axisX.labels[c]=k.dataPoints[r].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);if(b.viewPortMin===c&&e)for(v=0;v<e.length;v++)if(null===e[v]&&d<c){b.viewPortMin=d;break}null===e?b.viewPortMin===c&&d<c&&
(b.viewPortMin=d):(g<f.viewPortMin&&(f.viewPortMin=g),h>f.viewPortMax&&(f.viewPortMax=h))}}k.axisX.valueType=k.xValueType=l?"dateTime":"number"}};s.prototype._processSpecificPlotUnit=function(a){if("waterfall"===a.type&&a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var f=a.axisY.dataInfo,b=a.axisX.dataInfo,c,e,g=!1,h=0;h<a.dataSeriesIndexes.length;h++){var l=this.data[a.dataSeriesIndexes[h]],t=0,k=!1,r=!1,p=c=0;if("normal"===l.axisPlacement||"xySwapped"===l.axisPlacement)var n=a.axisX.sessionVariables.newViewportMinimum?
a.axisX.sessionVariables.newViewportMinimum:this.options.axisX&&this.options.axisX.viewportMinimum?this.options.axisX.viewportMinimum:this.options.axisX&&this.options.axisX.minimum?this.options.axisX.minimum:a.axisX.logarithmic?0:-Infinity,d=a.axisX.sessionVariables.newViewportMaximum?a.axisX.sessionVariables.newViewportMaximum:this.options.axisX&&this.options.axisX.viewportMaximum?this.options.axisX.viewportMaximum:this.options.axisX&&this.options.axisX.maximum?this.options.axisX.maximum:Infinity;
if(l.dataPoints[t].x&&l.dataPoints[t].x.getTime||"dateTime"===l.xValueType)g=!0;for(t=0;t<l.dataPoints.length;t++)"undefined"!==typeof l.dataPoints[t].isCumulativeSum&&!0===l.dataPoints[t].isCumulativeSum?(l.dataPointEOs[t].cumulativeSumYStartValue=0,l.dataPointEOs[t].cumulativeSum=0===t?0:l.dataPointEOs[t-1].cumulativeSum,l.dataPoints[t].y=0===t?0:l.dataPointEOs[t-1].cumulativeSum):"undefined"!==typeof l.dataPoints[t].isIntermediateSum&&!0===l.dataPoints[t].isIntermediateSum?(l.dataPointEOs[t].cumulativeSumYStartValue=
p,l.dataPointEOs[t].cumulativeSum=0===t?0:l.dataPointEOs[t-1].cumulativeSum,l.dataPoints[t].y=0===t?0:c,p=0===t?0:l.dataPointEOs[t-1].cumulativeSum,c=0):(e="number"!==typeof l.dataPoints[t].y?0:l.dataPoints[t].y,l.dataPointEOs[t].cumulativeSumYStartValue=0===t?0:l.dataPointEOs[t-1].cumulativeSum,l.dataPointEOs[t].cumulativeSum=0===t?e:l.dataPointEOs[t-1].cumulativeSum+e,c+=e);for(t=0;t<l.dataPoints.length;t++)if("undefined"===typeof l.dataPoints[t].x&&(l.dataPoints[t].x=t+(a.axisX.logarithmic?1:0)),
l.dataPoints[t].x.getTime?(g=!0,c=l.dataPoints[t].x.getTime()):c=l.dataPoints[t].x,e=l.dataPoints[t].y,c<b.min&&(b.min=c),c>b.max&&(b.max=c),l.dataPointEOs[t].cumulativeSum<f.min&&(f.min=l.dataPointEOs[t].cumulativeSum),l.dataPointEOs[t].cumulativeSum>f.max&&(f.max=l.dataPointEOs[t].cumulativeSum),0<t&&(a.axisX.logarithmic?(p=c/l.dataPoints[t-1].x,1>p&&(p=1/p),b.minDiff>p&&1!==p&&(b.minDiff=p)):(p=c-l.dataPoints[t-1].x,0>p&&(p*=-1),b.minDiff>p&&0!==p&&(b.minDiff=p)),null!==e&&null!==l.dataPoints[t-
1].y&&(a.axisY.logarithmic?(e=l.dataPointEOs[t].cumulativeSum/l.dataPointEOs[t-1].cumulativeSum,1>e&&(e=1/e),f.minDiff>e&&1!==e&&(f.minDiff=e)):(e=l.dataPointEOs[t].cumulativeSum-l.dataPointEOs[t-1].cumulativeSum,0>e&&(e*=-1),f.minDiff>e&&0!==e&&(f.minDiff=e)))),!(c<n)||k){if(!k&&(k=!0,0<t)){t-=2;continue}if(c>d&&!r)r=!0;else if(c>d&&r)continue;l.dataPoints[t].label&&(a.axisX.labels[c]=l.dataPoints[t].label);c<b.viewPortMin&&(b.viewPortMin=c);c>b.viewPortMax&&(b.viewPortMax=c);0<t&&(l.dataPointEOs[t-
1].cumulativeSum<f.viewPortMin&&(f.viewPortMin=l.dataPointEOs[t-1].cumulativeSum),l.dataPointEOs[t-1].cumulativeSum>f.viewPortMax&&(f.viewPortMax=l.dataPointEOs[t-1].cumulativeSum));l.dataPointEOs[t].cumulativeSum<f.viewPortMin&&(f.viewPortMin=l.dataPointEOs[t].cumulativeSum);l.dataPointEOs[t].cumulativeSum>f.viewPortMax&&(f.viewPortMax=l.dataPointEOs[t].cumulativeSum)}l.axisX.valueType=l.xValueType=g?"dateTime":"number"}};s.prototype.calculateAutoBreaks=function(){function a(a,c,b,e){if(e)return b=
Math.pow(Math.min(b*a/c,c/a),0.2),1>=b&&(b=Math.pow(1>a?1/a:Math.min(c/a,a),0.25)),{startValue:a*b,endValue:c/b};b=0.2*Math.min(b-c+a,c-a);0>=b&&(b=0.25*Math.min(c-a,Math.abs(a)));return{startValue:a+b,endValue:c-b}}function f(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){var c=a.axisX.scaleBreaks&&a.axisX.scaleBreaks.autoCalculate&&1<=a.axisX.scaleBreaks.maxNumberOfAutoBreaks,b=a.axisY.scaleBreaks&&a.axisY.scaleBreaks.autoCalculate&&1<=a.axisY.scaleBreaks.maxNumberOfAutoBreaks;if(c||
b)for(var f=a.axisY.dataInfo,g=a.axisX.dataInfo,k,h=g.min,n=g.max,l=f.min,t=f.max,g=g._dataRanges,f=f._dataRanges,p,r=0,m=0;m<a.dataSeriesIndexes.length;m++){var v=e.data[a.dataSeriesIndexes[m]];if(!(4>v.dataPoints.length))for(r=0;r<v.dataPoints.length;r++)if(c&&(p=(n+1-h)*Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold)||10,10)/100,k=v.dataPoints[r].x.getTime?v.dataPoints[r].x.getTime():v.dataPoints[r].x,p=Math.floor((k-h)/p),k<g[p].min&&(g[p].min=k),k>g[p].max&&(g[p].max=k)),b){var q=
(t+1-l)*Math.max(parseFloat(a.axisY.scaleBreaks.collapsibleThreshold)||10,10)/100;if((k="waterfall"===a.type?v.dataPointEOs[r].cumulativeSum:v.dataPoints[r].y)&&k.length)for(var s=0;s<k.length;s++)p=Math.floor((k[s]-l)/q),k[s]<f[p].min&&(f[p].min=k[s]),k[s]>f[p].max&&(f[p].max=k[s]);else y(k)||(p=Math.floor((k-l)/q),k<f[p].min&&(f[p].min=k),k>f[p].max&&(f[p].max=k))}}}}function b(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)&&a.axisX.scaleBreaks&&a.axisX.scaleBreaks.autoCalculate&&1<=
a.axisX.scaleBreaks.maxNumberOfAutoBreaks)for(var c=a.axisX.dataInfo,b=c.min,f=c.max,g=c._dataRanges,k,h=0,n=0;n<a.dataSeriesIndexes.length;n++){var l=e.data[a.dataSeriesIndexes[n]];if(!(4>l.dataPoints.length))for(h=0;h<l.dataPoints.length;h++)k=(f+1-b)*Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold)||10,10)/100,c=l.dataPoints[h].x.getTime?l.dataPoints[h].x.getTime():l.dataPoints[h].x,k=Math.floor((c-b)/k),c<g[k].min&&(g[k].min=c),c>g[k].max&&(g[k].max=c)}}for(var c,e=this,g=!1,h=0;h<
this._axes.length;h++)if(this._axes[h].scaleBreaks&&this._axes[h].scaleBreaks.autoCalculate&&1<=this._axes[h].scaleBreaks.maxNumberOfAutoBreaks){g=!0;this._axes[h].dataInfo._dataRanges=[];for(var l=0;l<100/Math.max(parseFloat(this._axes[h].scaleBreaks.collapsibleThreshold)||10,10);l++)this._axes[h].dataInfo._dataRanges.push({min:Infinity,max:-Infinity})}if(g){for(h=0;h<this.plotInfo.plotTypes.length;h++)for(g=this.plotInfo.plotTypes[h],l=0;l<g.plotUnits.length;l++)c=g.plotUnits[l],"line"===c.type||
"stepLine"===c.type||"spline"===c.type||"column"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"bar"===c.type||"bubble"===c.type||"scatter"===c.type||"candlestick"===c.type||"ohlc"===c.type||"rangeColumn"===c.type||"rangeBar"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type||"waterfall"===c.type||"error"===c.type||"boxAndWhisker"===c.type?f(c):0<=c.type.indexOf("stacked")&&b(c);for(h=0;h<this._axes.length;h++)if(this._axes[h].dataInfo._dataRanges){var t=this._axes[h].dataInfo.min;
c=(this._axes[h].dataInfo.max+1-t)*Math.max(parseFloat(this._axes[h].scaleBreaks.collapsibleThreshold)||10,10)/100;var k=this._axes[h].dataInfo._dataRanges,r,p,g=[];if(this._axes[h].dataInfo.dataPointYPositiveSums){var n=this._axes[h].dataInfo.dataPointYPositiveSums;r=k;for(l in n)n.hasOwnProperty(l)&&!isNaN(l)&&(p=n[l],y(p)||(index=Math.floor((p-t)/c),p<r[index].min&&(r[index].min=p),p>r[index].max&&(r[index].max=p)));delete this._axes[h].dataInfo.dataPointYPositiveSums}if(this._axes[h].dataInfo.dataPointYNegativeSums){n=
this._axes[h].dataInfo.dataPointYNegativeSums;r=k;for(l in n)n.hasOwnProperty(l)&&!isNaN(l)&&(p=-1*n[l],y(p)||(index=Math.floor((p-t)/c),p<r[index].min&&(r[index].min=p),p>r[index].max&&(r[index].max=p)));delete this._axes[h].dataInfo.dataPointYNegativeSums}for(l=0;l<k.length-1;l++)if(r=k[l].max,isFinite(r))for(;l<k.length-1;)if(t=k[l+1].min,isFinite(t)){p=t-r;p>c&&g.push({diff:p,start:r,end:t});break}else l++;if(this._axes[h].scaleBreaks.customBreaks)for(l=0;l<this._axes[h].scaleBreaks.customBreaks.length;l++)for(c=
0;c<g.length;c++)if(this._axes[h].scaleBreaks.customBreaks[l].startValue<=g[c].start&&g[c].start<=this._axes[h].scaleBreaks.customBreaks[l].endValue||this._axes[h].scaleBreaks.customBreaks[l].startValue<=g[c].start&&g[c].start<=this._axes[h].scaleBreaks.customBreaks[l].endValue||g[c].start<=this._axes[h].scaleBreaks.customBreaks[l].startValue&&this._axes[h].scaleBreaks.customBreaks[l].startValue<=g[c].end||g[c].start<=this._axes[h].scaleBreaks.customBreaks[l].endValue&&this._axes[h].scaleBreaks.customBreaks[l].endValue<=
g[c].end)g.splice(c,1),c--;g.sort(function(a,c){return c.diff-a.diff});for(l=0;l<Math.min(g.length,this._axes[h].scaleBreaks.maxNumberOfAutoBreaks);l++)c=a(g[l].start,g[l].end,this._axes[h].logarithmic?this._axes[h].dataInfo.max/this._axes[h].dataInfo.min:this._axes[h].dataInfo.max-this._axes[h].dataInfo.min,this._axes[h].logarithmic),this._axes[h].scaleBreaks.autoBreaks.push(new ba(this,"autoBreaks",c,l,++this._eventManager.lastObjectId,this._axes[h].scaleBreaks)),this._axes[h].scaleBreaks._appliedBreaks.push(this._axes[h].scaleBreaks.autoBreaks[this._axes[h].scaleBreaks.autoBreaks.length-
1]);this._axes[h].scaleBreaks._appliedBreaks.sort(function(a,c){return a.startValue-c.startValue})}}};s.prototype.getDataPointAtXY=function(a,f,b){b=b||!1;for(var c=[],e=this._dataInRenderedOrder.length-1;0<=e;e--){var g=null;(g=this._dataInRenderedOrder[e].getDataPointAtXY(a,f,b))&&c.push(g)}a=null;f=!1;for(b=0;b<c.length;b++)if("line"===c[b].dataSeries.type||"stepLine"===c[b].dataSeries.type||"area"===c[b].dataSeries.type||"stepArea"===c[b].dataSeries.type)if(e=ma("markerSize",c[b].dataPoint,c[b].dataSeries)||
8,c[b].distance<=e/2){f=!0;break}for(b=0;b<c.length;b++)f&&"line"!==c[b].dataSeries.type&&"stepLine"!==c[b].dataSeries.type&&"area"!==c[b].dataSeries.type&&"stepArea"!==c[b].dataSeries.type||(a?c[b].distance<=a.distance&&(a=c[b]):a=c[b]);return a};s.prototype.getObjectAtXY=function(a,f,b){var c=null;if(b=this.getDataPointAtXY(a,f,b||!1))c=b.dataSeries.dataPointIds[b.dataPointIndex];else if(v)c=Xa(a,f,this._eventManager.ghostCtx);else for(b=0;b<this.legend.items.length;b++){var e=this.legend.items[b];
a>=e.x1&&(a<=e.x2&&f>=e.y1&&f<=e.y2)&&(c=e.id)}return c};s.prototype.getAutoFontSize=function(a,f,b){f=Math.min(this.width,this.height);return Math.max("theme4"===this.theme?0:300<=f?12:10,Math.round(f*(a/400)))};s.prototype.resetOverlayedCanvas=function(){this.overlaidCanvasCtx.clearRect(0,0,this.width,this.height)};s.prototype.clearCanvas=function(){this.ctx.clearRect(0,0,this.width,this.height);this.backgroundColor&&(this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.width,this.height))};
s.prototype.attachEvent=function(a){this._events.push(a)};s.prototype._touchEventHandler=function(a){if(a.changedTouches&&this.interactivityEnabled){var f=[],b=a.changedTouches,c=b?b[0]:a,e=null;switch(a.type){case "touchstart":case "MSPointerDown":f=["mousemove","mousedown"];this._lastTouchData=Pa(c);this._lastTouchData.time=new Date;break;case "touchmove":case "MSPointerMove":f=["mousemove"];break;case "touchend":case "MSPointerUp":var g=this._lastTouchData&&this._lastTouchData.time?new Date-this._lastTouchData.time:
0,f="touchstart"===this._lastTouchEventType||"MSPointerDown"===this._lastTouchEventType||300>g?["mouseup","click"]:["mouseup"];break;default:return}if(!(b&&1<b.length)){e=Pa(c);e.time=new Date;try{var h=e.y-this._lastTouchData.y,g=e.time-this._lastTouchData.time;if(15<Math.abs(h)&&(this._lastTouchData.scroll||300>g)){this._lastTouchData.scroll=!0;var l=window.parent||window;l&&l.scrollBy&&l.scrollBy(0,-h)}}catch(t){}this._lastTouchEventType=a.type;if(this._lastTouchData.scroll&&this.zoomEnabled)this.isDrag&&
this.resetOverlayedCanvas(),this.isDrag=!1;else for(b=0;b<f.length;b++)e=f[b],g=document.createEvent("MouseEvent"),g.initMouseEvent(e,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),c.target.dispatchEvent(g),a.preventManipulation&&a.preventManipulation(),a.preventDefault&&a.preventDefault()}}};s.prototype._dispatchRangeEvent=function(a,f){var b={chart:this};b.type=a;b.trigger=f;var c=[];this.axisX&&0<this.axisX.length&&c.push("axisX");this.axisX2&&0<this.axisX2.length&&
c.push("axisX2");this.axisY&&0<this.axisY.length&&c.push("axisY");this.axisY2&&0<this.axisY2.length&&c.push("axisY2");for(var e=0;e<c.length;e++)if(y(b[c[e]])&&(b[c[e]]=[]),"axisY"===c[e])for(var g=0;g<this.axisY.length;g++)b[c[e]].push({viewportMinimum:this[c[e]][g].sessionVariables.newViewportMinimum,viewportMaximum:this[c[e]][g].sessionVariables.newViewportMaximum});else if("axisY2"===c[e])for(g=0;g<this.axisY2.length;g++)b[c[e]].push({viewportMinimum:this[c[e]][g].sessionVariables.newViewportMinimum,
viewportMaximum:this[c[e]][g].sessionVariables.newViewportMaximum});else if("axisX"===c[e])for(g=0;g<this.axisX.length;g++)b[c[e]].push({viewportMinimum:this[c[e]][g].sessionVariables.newViewportMinimum,viewportMaximum:this[c[e]][g].sessionVariables.newViewportMaximum});else if("axisX2"===c[e])for(g=0;g<this.axisX2.length;g++)b[c[e]].push({viewportMinimum:this[c[e]][g].sessionVariables.newViewportMinimum,viewportMaximum:this[c[e]][g].sessionVariables.newViewportMaximum});this.dispatchEvent(a,b,this)};
s.prototype._mouseEventHandler=function(a){"undefined"===typeof a.target&&a.srcElement&&(a.target=a.srcElement);var f=Pa(a),b=a.type,c,e;a.which?e=3==a.which:a.button&&(e=2==a.button);s.capturedEventParam&&(c=s.capturedEventParam,"mouseup"===b&&(s.capturedEventParam=null,c.chart.overlaidCanvas.releaseCapture?c.chart.overlaidCanvas.releaseCapture():document.documentElement.removeEventListener("mouseup",c.chart._mouseEventHandler,!1)),c.hasOwnProperty(b)&&("mouseup"!==b||c.chart.overlaidCanvas.releaseCapture?
a.target!==c.chart.overlaidCanvas&&v||c[b].call(c.context,f.x,f.y):a.target!==c.chart.overlaidCanvas&&(c.chart.isDrag=!1)));if(this.interactivityEnabled)if(this._ignoreNextEvent)this._ignoreNextEvent=!1;else if(a.preventManipulation&&a.preventManipulation(),a.preventDefault&&a.preventDefault(),!e){if(!s.capturedEventParam&&this._events){for(var g=0;g<this._events.length;g++)if(this._events[g].hasOwnProperty(b))if(c=this._events[g],e=c.bounds,f.x>=e.x1&&f.x<=e.x2&&f.y>=e.y1&&f.y<=e.y2){c[b].call(c.context,
f.x,f.y);"mousedown"===b&&!0===c.capture?(s.capturedEventParam=c,this.overlaidCanvas.setCapture?this.overlaidCanvas.setCapture():document.documentElement.addEventListener("mouseup",this._mouseEventHandler,!1)):"mouseup"===b&&(c.chart.overlaidCanvas.releaseCapture?c.chart.overlaidCanvas.releaseCapture():document.documentElement.removeEventListener("mouseup",this._mouseEventHandler,!1));break}else c=null;a.target.style.cursor=c&&c.cursor?c.cursor:this._defaultCursor}b=this.plotArea;if(f.x<b.x1||f.x>
b.x2||f.y<b.y1||f.y>b.y2)this.toolTip&&this.toolTip.enabled?this.toolTip.hide():this.resetOverlayedCanvas();this.isDrag&&this.zoomEnabled||!this._eventManager||this._eventManager.mouseEventHandler(a)}};s.prototype._plotAreaMouseDown=function(a,f){this.isDrag=!0;this.dragStartPoint={x:a,y:f}};s.prototype._plotAreaMouseUp=function(a,f){if(("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)&&this.isDrag){var b=f-this.dragStartPoint.y,c=a-this.dragStartPoint.x,e=0<=this.zoomType.indexOf("x"),
g=0<=this.zoomType.indexOf("y"),h=!1;this.resetOverlayedCanvas();if("xySwapped"===this.plotInfo.axisPlacement)var l=g,g=e,e=l;if(this.panEnabled||this.zoomEnabled){if(this.panEnabled)for(e=g=0;e<this._axes.length;e++)b=this._axes[e],b.logarithmic?b.viewportMinimum<b.minimum?(g=b.minimum/b.viewportMinimum,b.sessionVariables.newViewportMinimum=b.viewportMinimum*g,b.sessionVariables.newViewportMaximum=b.viewportMaximum*g,h=!0):b.viewportMaximum>b.maximum&&(g=b.viewportMaximum/b.maximum,b.sessionVariables.newViewportMinimum=
b.viewportMinimum/g,b.sessionVariables.newViewportMaximum=b.viewportMaximum/g,h=!0):b.viewportMinimum<b.minimum?(g=b.minimum-b.viewportMinimum,b.sessionVariables.newViewportMinimum=b.viewportMinimum+g,b.sessionVariables.newViewportMaximum=b.viewportMaximum+g,h=!0):b.viewportMaximum>b.maximum&&(g=b.viewportMaximum-b.maximum,b.sessionVariables.newViewportMinimum=b.viewportMinimum-g,b.sessionVariables.newViewportMaximum=b.viewportMaximum-g,h=!0);else if((!e||2<Math.abs(c))&&(!g||2<Math.abs(b))&&this.zoomEnabled){if(!this.dragStartPoint)return;
b=e?this.dragStartPoint.x:this.plotArea.x1;c=g?this.dragStartPoint.y:this.plotArea.y1;e=e?a:this.plotArea.x2;g=g?f:this.plotArea.y2;2<Math.abs(b-e)&&2<Math.abs(c-g)&&this._zoomPanToSelectedRegion(b,c,e,g)&&(h=!0)}h&&(this._ignoreNextEvent=!0,this._dispatchRangeEvent("rangeChanging","zoom"),this.render(),this._dispatchRangeEvent("rangeChanged","zoom"),h&&(this.zoomEnabled&&"none"===this._zoomButton.style.display)&&(Na(this._zoomButton,this._resetButton),va(this,this._zoomButton,"pan"),va(this,this._resetButton,
"reset")))}}this.isDrag=!1;if("none"!==this.plotInfo.axisPlacement){this.resetOverlayedCanvas();if(this.axisX&&0<this.axisX.length)for(h=0;h<this.axisX.length;h++)this.axisX[h].crosshair&&this.axisX[h].crosshair.enabled&&this.axisX[h].renderCrosshair(a,f);if(this.axisX2&&0<this.axisX2.length)for(h=0;h<this.axisX2.length;h++)this.axisX2[h].crosshair&&this.axisX2[h].crosshair.enabled&&this.axisX2[h].renderCrosshair(a,f);if(this.axisY&&0<this.axisY.length)for(h=0;h<this.axisY.length;h++)this.axisY[h].crosshair&&
this.axisY[h].crosshair.enabled&&this.axisY[h].renderCrosshair(a,f);if(this.axisY2&&0<this.axisY2.length)for(h=0;h<this.axisY2.length;h++)this.axisY2[h].crosshair&&this.axisY2[h].crosshair.enabled&&this.axisY2[h].renderCrosshair(a,f)}};s.prototype._plotAreaMouseMove=function(a,f){if(this.isDrag&&"none"!==this.plotInfo.axisPlacement){var b=0,c=0,e=b=null,e=0<=this.zoomType.indexOf("x"),g=0<=this.zoomType.indexOf("y"),h=this;"xySwapped"===this.plotInfo.axisPlacement&&(b=g,g=e,e=b);b=this.dragStartPoint.x-
a;c=this.dragStartPoint.y-f;2<Math.abs(b)&&8>Math.abs(b)&&(this.panEnabled||this.zoomEnabled)?this.toolTip.hide():this.panEnabled||this.zoomEnabled||this.toolTip.mouseMoveHandler(a,f);if((!e||2<Math.abs(b)||!g||2<Math.abs(c))&&(this.panEnabled||this.zoomEnabled))if(this.panEnabled)e={x1:e?this.plotArea.x1+b:this.plotArea.x1,y1:g?this.plotArea.y1+c:this.plotArea.y1,x2:e?this.plotArea.x2+b:this.plotArea.x2,y2:g?this.plotArea.y2+c:this.plotArea.y2},clearTimeout(h._panTimerId),h._panTimerId=setTimeout(function(c,
b,e,d){return function(){h._zoomPanToSelectedRegion(c,b,e,d,!0)&&(h._dispatchRangeEvent("rangeChanging","pan"),h.render(),h._dispatchRangeEvent("rangeChanged","pan"),h.dragStartPoint.x=a,h.dragStartPoint.y=f)}}(e.x1,e.y1,e.x2,e.y2),0);else if(this.zoomEnabled){this.resetOverlayedCanvas();b=this.overlaidCanvasCtx.globalAlpha;this.overlaidCanvasCtx.fillStyle="#A89896";var c=e?this.dragStartPoint.x:this.plotArea.x1,l=g?this.dragStartPoint.y:this.plotArea.y1,t=e?a-this.dragStartPoint.x:this.plotArea.x2-
this.plotArea.x1,k=g?f-this.dragStartPoint.y:this.plotArea.y2-this.plotArea.y1;this.validateRegion(c,l,e?a:this.plotArea.x2-this.plotArea.x1,g?f:this.plotArea.y2-this.plotArea.y1,"xy"!==this.zoomType).isValid&&(this.resetOverlayedCanvas(),this.overlaidCanvasCtx.fillStyle="#99B2B5");this.overlaidCanvasCtx.globalAlpha=0.7;this.overlaidCanvasCtx.fillRect(c,l,t,k);this.overlaidCanvasCtx.globalAlpha=b}}else if(this.toolTip.mouseMoveHandler(a,f),"none"!==this.plotInfo.axisPlacement){if(this.axisX&&0<this.axisX.length)for(e=
0;e<this.axisX.length;e++)this.axisX[e].crosshair&&this.axisX[e].crosshair.enabled&&this.axisX[e].renderCrosshair(a,f);if(this.axisX2&&0<this.axisX2.length)for(e=0;e<this.axisX2.length;e++)this.axisX2[e].crosshair&&this.axisX2[e].crosshair.enabled&&this.axisX2[e].renderCrosshair(a,f);if(this.axisY&&0<this.axisY.length)for(e=0;e<this.axisY.length;e++)this.axisY[e].crosshair&&this.axisY[e].crosshair.enabled&&this.axisY[e].renderCrosshair(a,f);if(this.axisY2&&0<this.axisY2.length)for(e=0;e<this.axisY2.length;e++)this.axisY2[e].crosshair&&
this.axisY2[e].crosshair.enabled&&this.axisY2[e].renderCrosshair(a,f)}};s.prototype._zoomPanToSelectedRegion=function(a,f,b,c,e){a=this.validateRegion(a,f,b,c,e);f=a.axesWithValidRange;b=a.axesRanges;if(a.isValid)for(c=0;c<f.length;c++)e=b[c],f[c].setViewPortRange(e.val1,e.val2);return a.isValid};s.prototype.validateRegion=function(a,f,b,c,e){e=e||!1;for(var g=0<=this.zoomType.indexOf("x"),h=0<=this.zoomType.indexOf("y"),l=!1,t=[],k=[],r=[],p=0;p<this._axes.length;p++)("axisX"===this._axes[p].type&&
g||"axisY"===this._axes[p].type&&h)&&k.push(this._axes[p]);for(h=0;h<k.length;h++){var p=k[h],g=!1,n=p.convertPixelToValue({x:a,y:f}),d=p.convertPixelToValue({x:b,y:c});if(n>d)var w=d,d=n,n=w;if(p.scaleBreaks)for(w=0;!g&&w<p.scaleBreaks._appliedBreaks.length;w++)g=p.scaleBreaks._appliedBreaks[w].startValue<=n&&p.scaleBreaks._appliedBreaks[w].endValue>=d;if(isFinite(p.dataInfo.minDiff))if(w=p.getApparentDifference(n,d,null,!0),!(g||!(this.panEnabled&&p.scaleBreaks&&p.scaleBreaks._appliedBreaks.length)&&
(p.logarithmic&&w<Math.pow(p.dataInfo.minDiff,3)||!p.logarithmic&&w<3*Math.abs(p.dataInfo.minDiff))||n<p.minimum||d>p.maximum))t.push(p),r.push({val1:n,val2:d}),l=!0;else if(!e){l=!1;break}}return{isValid:l,axesWithValidRange:t,axesRanges:r}};s.prototype.preparePlotArea=function(){var a=this.plotArea;!v&&(0<a.x1||0<a.y1)&&a.ctx.translate(a.x1,a.y1);if((this.axisX[0]||this.axisX2[0])&&(this.axisY[0]||this.axisY2[0])){var f=this.axisX[0]?this.axisX[0].lineCoordinates:this.axisX2[0].lineCoordinates;
if(this.axisY&&0<this.axisY.length&&this.axisY[0]){var b=this.axisY[0];a.x1=f.x1<f.x2?f.x1:b.lineCoordinates.x1;a.y1=f.y1<b.lineCoordinates.y1?f.y1:b.lineCoordinates.y1;a.x2=f.x2>b.lineCoordinates.x2?f.x2:b.lineCoordinates.x2;a.y2=f.y2>f.y1?f.y2:b.lineCoordinates.y2;a.width=a.x2-a.x1;a.height=a.y2-a.y1}this.axisY2&&0<this.axisY2.length&&this.axisY2[0]&&(b=this.axisY2[0],a.x1=f.x1<f.x2?f.x1:b.lineCoordinates.x1,a.y1=f.y1<b.lineCoordinates.y1?f.y1:b.lineCoordinates.y1,a.x2=f.x2>b.lineCoordinates.x2?
f.x2:b.lineCoordinates.x2,a.y2=f.y2>f.y1?f.y2:b.lineCoordinates.y2,a.width=a.x2-a.x1,a.height=a.y2-a.y1)}else f=this.layoutManager.getFreeSpace(),a.x1=f.x1,a.x2=f.x2,a.y1=f.y1,a.y2=f.y2,a.width=f.width,a.height=f.height;v||(a.canvas.width=a.width,a.canvas.height=a.height,a.canvas.style.left=a.x1+"px",a.canvas.style.top=a.y1+"px",(0<a.x1||0<a.y1)&&a.ctx.translate(-a.x1,-a.y1));a.layoutManager=new Ea(a.x1,a.y1,a.x2,a.y2,2)};s.prototype.renderIndexLabels=function(a){var f=a||this.plotArea.ctx,b=this.plotArea,
c=0,e=0,g=0,h=0,l=c=h=e=g=0,t=0;for(a=0;a<this._indexLabels.length;a++){var k=this._indexLabels[a],r=k.chartType.toLowerCase(),p,n,l=ma("indexLabelFontColor",k.dataPoint,k.dataSeries),t=ma("indexLabelFontSize",k.dataPoint,k.dataSeries);p=ma("indexLabelFontFamily",k.dataPoint,k.dataSeries);n=ma("indexLabelFontStyle",k.dataPoint,k.dataSeries);var h=ma("indexLabelFontWeight",k.dataPoint,k.dataSeries),d=ma("indexLabelBackgroundColor",k.dataPoint,k.dataSeries),e=ma("indexLabelMaxWidth",k.dataPoint,k.dataSeries),
g=ma("indexLabelWrap",k.dataPoint,k.dataSeries),w=ma("indexLabelLineDashType",k.dataPoint,k.dataSeries),m=ma("indexLabelLineColor",k.dataPoint,k.dataSeries),D=y(k.dataPoint.indexLabelLineThickness)?y(k.dataSeries.options.indexLabelLineThickness)?0:k.dataSeries.options.indexLabelLineThickness:k.dataPoint.indexLabelLineThickness,c=0<D?Math.min(10,("normal"===this.plotInfo.axisPlacement?this.plotArea.height:this.plotArea.width)<<0):0,u={percent:null,total:null},T=null;if(0<=k.dataSeries.type.indexOf("stacked")||
"pie"===k.dataSeries.type||"doughnut"===k.dataSeries.type)u=this.getPercentAndTotal(k.dataSeries,k.dataPoint);if(k.dataSeries.indexLabelFormatter||k.dataPoint.indexLabelFormatter)T={chart:this,dataSeries:k.dataSeries,dataPoint:k.dataPoint,index:k.indexKeyword,total:u.total,percent:u.percent};var H=k.dataPoint.indexLabelFormatter?k.dataPoint.indexLabelFormatter(T):k.dataPoint.indexLabel?this.replaceKeywordsWithValue(k.dataPoint.indexLabel,k.dataPoint,k.dataSeries,null,k.indexKeyword):k.dataSeries.indexLabelFormatter?
k.dataSeries.indexLabelFormatter(T):k.dataSeries.indexLabel?this.replaceKeywordsWithValue(k.dataSeries.indexLabel,k.dataPoint,k.dataSeries,null,k.indexKeyword):null;if(null!==H&&""!==H){var u=ma("indexLabelPlacement",k.dataPoint,k.dataSeries),T=ma("indexLabelOrientation",k.dataPoint,k.dataSeries),q=k.direction,s=k.dataSeries.axisX,A=k.dataSeries.axisY,x=!1,d=new ka(f,{x:0,y:0,maxWidth:e?e:0.5*this.width,maxHeight:g?5*t:1.5*t,angle:"horizontal"===T?0:-90,text:H,padding:0,backgroundColor:d,horizontalAlign:"left",
fontSize:t,fontFamily:p,fontWeight:h,fontColor:l,fontStyle:n,textBaseline:"top"});d.measureText();k.dataSeries.indexLabelMaxWidth=d.maxWidth;if("stackedarea100"===r){if(k.point.x<b.x1||k.point.x>b.x2||k.point.y<b.y1-1||k.point.y>b.y2+1)continue}else if("rangearea"===r||"rangesplinearea"===r){if(k.dataPoint.x<s.viewportMinimum||k.dataPoint.x>s.viewportMaximum||Math.max.apply(null,k.dataPoint.y)<A.viewportMinimum||Math.min.apply(null,k.dataPoint.y)>A.viewportMaximum)continue}else if(0<=r.indexOf("line")||
0<=r.indexOf("area")||0<=r.indexOf("bubble")||0<=r.indexOf("scatter")){if(k.dataPoint.x<s.viewportMinimum||k.dataPoint.x>s.viewportMaximum||k.dataPoint.y<A.viewportMinimum||k.dataPoint.y>A.viewportMaximum)continue}else if(0<=r.indexOf("column")||"waterfall"===r||"error"===r&&!k.axisSwapped){if(k.dataPoint.x<s.viewportMinimum||k.dataPoint.x>s.viewportMaximum||k.bounds.y1>b.y2||k.bounds.y2<b.y1)continue}else if(0<=r.indexOf("bar")||"error"===r){if(k.dataPoint.x<s.viewportMinimum||k.dataPoint.x>s.viewportMaximum||
k.bounds.x1>b.x2||k.bounds.x2<b.x1)continue}else if("candlestick"===r||"ohlc"===r){if(k.dataPoint.x<s.viewportMinimum||k.dataPoint.x>s.viewportMaximum||Math.max.apply(null,k.dataPoint.y)<A.viewportMinimum||Math.min.apply(null,k.dataPoint.y)>A.viewportMaximum)continue}else if(k.dataPoint.x<s.viewportMinimum||k.dataPoint.x>s.viewportMaximum)continue;e=h=2;"horizontal"===T?(l=d.width,t=d.height):(t=d.width,l=d.height);if("normal"===this.plotInfo.axisPlacement){if(0<=r.indexOf("line")||0<=r.indexOf("area"))u=
"auto",h=4;else if(0<=r.indexOf("stacked"))"auto"===u&&(u="inside");else if("bubble"===r||"scatter"===r)u="inside";p=k.point.x-l/2;"inside"!==u?(e=b.y1,g=b.y2,0<q?(n=k.point.y-t-h-c,n<e&&(n="auto"===u?Math.max(k.point.y,e)+h+c:e+h+c,x=n+t>k.point.y)):(n=k.point.y+h+c,n>g-t-h-c&&(n="auto"===u?Math.min(k.point.y,g)-t-h-c:g-t-h-c,x=n<k.point.y))):(e=Math.max(k.bounds.y1,b.y1),g=Math.min(k.bounds.y2,b.y2),c=0<=r.indexOf("range")||"error"===r?0<q?Math.max(k.bounds.y1,b.y1)+t/2+h:Math.min(k.bounds.y2,b.y2)-
t/2-h:(Math.max(k.bounds.y1,b.y1)+Math.min(k.bounds.y2,b.y2))/2,0<q?(n=Math.max(k.point.y,c)-t/2,n<e&&("bubble"===r||"scatter"===r)&&(n=Math.max(k.point.y-t-h,b.y1+h))):(n=Math.min(k.point.y,c)-t/2,n>g-t-h&&("bubble"===r||"scatter"===r)&&(n=Math.min(k.point.y+h,b.y2-t-h))),n=Math.min(n,g-t))}else 0<=r.indexOf("line")||0<=r.indexOf("area")||0<=r.indexOf("scatter")?(u="auto",e=4):0<=r.indexOf("stacked")?"auto"===u&&(u="inside"):"bubble"===r&&(u="inside"),n=k.point.y-t/2,"inside"!==u?(h=b.x1,g=b.x2,
0>q?(p=k.point.x-l-e-c,p<h&&(p="auto"===u?Math.max(k.point.x,h)+e+c:h+e+c,x=p+l>k.point.x)):(p=k.point.x+e+c,p>g-l-e-c&&(p="auto"===u?Math.min(k.point.x,g)-l-e-c:g-l-e-c,x=p<k.point.x))):(h=Math.max(k.bounds.x1,b.x1),Math.min(k.bounds.x2,b.x2),c=0<=r.indexOf("range")||"error"===r?0>q?Math.max(k.bounds.x1,b.x1)+l/2+e:Math.min(k.bounds.x2,b.x2)-l/2-e:(Math.max(k.bounds.x1,b.x1)+Math.min(k.bounds.x2,b.x2))/2,p=0>q?Math.max(k.point.x,c)-l/2:Math.min(k.point.x,c)-l/2,p=Math.max(p,h));"vertical"===T&&(n+=
t);d.x=p;d.y=n;d.render(!0);D&&("inside"!==u&&(0>r.indexOf("bar")&&("error"!==r||!k.axisSwapped)&&k.point.x>b.x1&&k.point.x<b.x2||!x)&&(0>r.indexOf("column")&&("error"!==r||k.axisSwapped)&&k.point.y>b.y1&&k.point.y<b.y2||!x))&&(f.lineWidth=D,f.strokeStyle=m?m:"gray",f.setLineDash&&f.setLineDash(G(w,D)),f.beginPath(),f.moveTo(k.point.x,k.point.y),0<=r.indexOf("bar")||"error"===r&&k.axisSwapped?f.lineTo(p+(0<k.direction?0:l),n+("horizontal"===T?t:-t)/2):0<=r.indexOf("column")||"error"===r&&!k.axisSwapped?
f.lineTo(p+l/2,n+((0<k.direction?t:-t)+("horizontal"===T?t:-t))/2):f.lineTo(p+l/2,n+((n<k.point.y?t:-t)+("horizontal"===T?t:-t))/2),f.stroke())}}f={source:f,dest:this.plotArea.ctx,animationCallback:I.fadeInAnimation,easingFunction:I.easing.easeInQuad,animationBase:0,startTimePercent:0.7};for(a=0;a<this._indexLabels.length;a++)k=this._indexLabels[a],d=ma("indexLabelBackgroundColor",k.dataPoint,k.dataSeries),k.dataSeries.indexLabelBackgroundColor=y(d)?v?"transparent":null:d;return f};s.prototype.renderLine=
function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx;b.save();var e=this.plotArea;b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();for(var g=[],h,l=0;l<a.dataSeriesIndexes.length;l++){var t=a.dataSeriesIndexes[l],k=this.data[t];b.lineWidth=k.lineThickness;var r=k.dataPoints,p="solid";if(b.setLineDash){var n=G(k.nullDataLineDashType,k.lineThickness),p=k.lineDashType,d=G(p,k.lineThickness);b.setLineDash(d)}var w=
k.id;this._eventManager.objectMap[w]={objectType:"dataSeries",dataSeriesIndex:t};w=S(w);c.strokeStyle=w;c.lineWidth=0<k.lineThickness?Math.max(k.lineThickness,4):0;var w=k._colorSet,m=w=k.lineColor=k.options.lineColor?k.options.lineColor:w[0];b.strokeStyle=w;var D=!0,u=0,T,H;b.beginPath();if(0<r.length){for(var q=!1,u=0;u<r.length;u++)if(T=r[u].x.getTime?r[u].x.getTime():r[u].x,!(T<a.axisX.dataInfo.viewPortMin||T>a.axisX.dataInfo.viewPortMax&&(!k.connectNullData||!q)))if("number"!==typeof r[u].y)0<
u&&!(k.connectNullData||q||D)&&(b.stroke(),v&&c.stroke()),q=!0;else{T=a.axisX.convertValueToPixel(T);H=a.axisY.convertValueToPixel(r[u].y);var s=k.dataPointIds[u];this._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataSeriesIndex:t,dataPointIndex:u,x1:T,y1:H};D||q?(!D&&k.connectNullData?(b.setLineDash&&(k.options.nullDataLineDashType||p===k.lineDashType&&k.lineDashType!==k.nullDataLineDashType)&&(b.stroke(),b.beginPath(),b.moveTo(h.x,h.y),p=k.nullDataLineDashType,b.setLineDash(n)),b.lineTo(T,
H),v&&c.lineTo(T,H)):(b.beginPath(),b.moveTo(T,H),v&&(c.beginPath(),c.moveTo(T,H))),q=D=!1):(b.lineTo(T,H),v&&c.lineTo(T,H),0==u%500&&(b.stroke(),b.beginPath(),b.moveTo(T,H),v&&(c.stroke(),c.beginPath(),c.moveTo(T,H))));h={x:T,y:H};u<r.length-1&&(m!==(r[u].lineColor||w)||p!==(r[u].lineDashType||k.lineDashType))&&(b.stroke(),b.beginPath(),b.moveTo(T,H),m=r[u].lineColor||w,b.strokeStyle=m,b.setLineDash&&(r[u].lineDashType?(p=r[u].lineDashType,b.setLineDash(G(p,k.lineThickness))):(p=k.lineDashType,b.setLineDash(d))));
if(0<r[u].markerSize||0<k.markerSize){var A=k.getMarkerProperties(u,T,H,b);g.push(A);s=S(s);v&&g.push({x:T,y:H,ctx:c,type:A.type,size:A.size,color:s,borderColor:s,borderThickness:A.borderThickness})}(r[u].indexLabel||k.indexLabel||r[u].indexLabelFormatter||k.indexLabelFormatter)&&this._indexLabels.push({chartType:"line",dataPoint:r[u],dataSeries:k,point:{x:T,y:H},direction:0>r[u].y===a.axisY.reversed?1:-1,color:w})}b.stroke();v&&c.stroke()}}ia.drawMarkers(g);v&&(f.drawImage(this._preRenderCanvas,
0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),c.beginPath());b.restore();b.beginPath();return{source:f,dest:this.plotArea.ctx,animationCallback:I.xClipAnimation,easingFunction:I.easing.linear,
animationBase:0}}};s.prototype.renderStepLine=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx;b.save();var e=this.plotArea;b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();for(var g=[],h,l=0;l<a.dataSeriesIndexes.length;l++){var t=a.dataSeriesIndexes[l],k=this.data[t];b.lineWidth=k.lineThickness;var r=k.dataPoints,p="solid";if(b.setLineDash){var n=G(k.nullDataLineDashType,k.lineThickness),
p=k.lineDashType,d=G(p,k.lineThickness);b.setLineDash(d)}var w=k.id;this._eventManager.objectMap[w]={objectType:"dataSeries",dataSeriesIndex:t};w=S(w);c.strokeStyle=w;c.lineWidth=0<k.lineThickness?Math.max(k.lineThickness,4):0;var w=k._colorSet,m=w=k.lineColor=k.options.lineColor?k.options.lineColor:w[0];b.strokeStyle=w;var D=!0,u=0,T,H;b.beginPath();if(0<r.length){for(var q=!1,u=0;u<r.length;u++)if(T=r[u].getTime?r[u].x.getTime():r[u].x,!(T<a.axisX.dataInfo.viewPortMin||T>a.axisX.dataInfo.viewPortMax&&
(!k.connectNullData||!q)))if("number"!==typeof r[u].y)0<u&&!(k.connectNullData||q||D)&&(b.stroke(),v&&c.stroke()),q=!0;else{var s=H;T=a.axisX.convertValueToPixel(T);H=a.axisY.convertValueToPixel(r[u].y);var A=k.dataPointIds[u];this._eventManager.objectMap[A]={id:A,objectType:"dataPoint",dataSeriesIndex:t,dataPointIndex:u,x1:T,y1:H};D||q?(!D&&k.connectNullData?(b.setLineDash&&(k.options.nullDataLineDashType||p===k.lineDashType&&k.lineDashType!==k.nullDataLineDashType)&&(b.stroke(),b.beginPath(),b.moveTo(h.x,
h.y),p=k.nullDataLineDashType,b.setLineDash(n)),b.lineTo(T,s),b.lineTo(T,H),v&&(c.lineTo(T,s),c.lineTo(T,H))):(b.beginPath(),b.moveTo(T,H),v&&(c.beginPath(),c.moveTo(T,H))),q=D=!1):(b.lineTo(T,s),v&&c.lineTo(T,s),b.lineTo(T,H),v&&c.lineTo(T,H),0==u%500&&(b.stroke(),b.beginPath(),b.moveTo(T,H),v&&(c.stroke(),c.beginPath(),c.moveTo(T,H))));h={x:T,y:H};u<r.length-1&&(m!==(r[u].lineColor||w)||p!==(r[u].lineDashType||k.lineDashType))&&(b.stroke(),b.beginPath(),b.moveTo(T,H),m=r[u].lineColor||w,b.strokeStyle=
m,b.setLineDash&&(r[u].lineDashType?(p=r[u].lineDashType,b.setLineDash(G(p,k.lineThickness))):(p=k.lineDashType,b.setLineDash(d))));if(0<r[u].markerSize||0<k.markerSize)s=k.getMarkerProperties(u,T,H,b),g.push(s),A=S(A),v&&g.push({x:T,y:H,ctx:c,type:s.type,size:s.size,color:A,borderColor:A,borderThickness:s.borderThickness});(r[u].indexLabel||k.indexLabel||r[u].indexLabelFormatter||k.indexLabelFormatter)&&this._indexLabels.push({chartType:"stepLine",dataPoint:r[u],dataSeries:k,point:{x:T,y:H},direction:0>
r[u].y===a.axisY.reversed?1:-1,color:w})}b.stroke();v&&c.stroke()}}ia.drawMarkers(g);v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),c.beginPath());
b.restore();b.beginPath();return{source:f,dest:this.plotArea.ctx,animationCallback:I.xClipAnimation,easingFunction:I.easing.linear,animationBase:0}}};s.prototype.renderSpline=function(a){function f(a){a=x(a,2);if(0<a.length){c.beginPath();v&&e.beginPath();c.moveTo(a[0].x,a[0].y);a[0].newStrokeStyle&&(c.strokeStyle=a[0].newStrokeStyle);a[0].newLineDashArray&&c.setLineDash(a[0].newLineDashArray);v&&e.moveTo(a[0].x,a[0].y);for(var b=0;b<a.length-3;b+=3)if(c.bezierCurveTo(a[b+1].x,a[b+1].y,a[b+2].x,a[b+
2].y,a[b+3].x,a[b+3].y),v&&e.bezierCurveTo(a[b+1].x,a[b+1].y,a[b+2].x,a[b+2].y,a[b+3].x,a[b+3].y),0<b&&0===b%3E3||a[b+3].newStrokeStyle||a[b+3].newLineDashArray)c.stroke(),c.beginPath(),c.moveTo(a[b+3].x,a[b+3].y),a[b+3].newStrokeStyle&&(c.strokeStyle=a[b+3].newStrokeStyle),a[b+3].newLineDashArray&&c.setLineDash(a[b+3].newLineDashArray),v&&(e.stroke(),e.beginPath(),e.moveTo(a[b+3].x,a[b+3].y));c.stroke();v&&e.stroke()}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=v?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=
this._eventManager.ghostCtx;c.save();var g=this.plotArea;c.beginPath();c.rect(g.x1,g.y1,g.width,g.height);c.clip();for(var h=[],l=0;l<a.dataSeriesIndexes.length;l++){var t=a.dataSeriesIndexes[l],k=this.data[t];c.lineWidth=k.lineThickness;var r=k.dataPoints,p="solid";if(c.setLineDash){var n=G(k.nullDataLineDashType,k.lineThickness),p=k.lineDashType,d=G(p,k.lineThickness);c.setLineDash(d)}var w=k.id;this._eventManager.objectMap[w]={objectType:"dataSeries",dataSeriesIndex:t};w=S(w);e.strokeStyle=w;e.lineWidth=
0<k.lineThickness?Math.max(k.lineThickness,4):0;var w=k._colorSet,m=w=k.lineColor=k.options.lineColor?k.options.lineColor:w[0];c.strokeStyle=w;var D=0,u,T,H=[];c.beginPath();if(0<r.length)for(T=!1,D=0;D<r.length;D++)if(u=r[D].getTime?r[D].x.getTime():r[D].x,!(u<a.axisX.dataInfo.viewPortMin||u>a.axisX.dataInfo.viewPortMax&&(!k.connectNullData||!T)))if("number"!==typeof r[D].y)0<D&&!T&&(k.connectNullData?c.setLineDash&&(0<H.length&&(k.options.nullDataLineDashType||!r[D-1].lineDashType))&&(H[H.length-
1].newLineDashArray=n,p=k.nullDataLineDashType):(f(H),H=[])),T=!0;else{u=a.axisX.convertValueToPixel(u);T=a.axisY.convertValueToPixel(r[D].y);var s=k.dataPointIds[D];this._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataSeriesIndex:t,dataPointIndex:D,x1:u,y1:T};H[H.length]={x:u,y:T};D<r.length-1&&(m!==(r[D].lineColor||w)||p!==(r[D].lineDashType||k.lineDashType))&&(m=r[D].lineColor||w,H[H.length-1].newStrokeStyle=m,c.setLineDash&&(r[D].lineDashType?(p=r[D].lineDashType,H[H.length-1].newLineDashArray=
G(p,k.lineThickness)):(p=k.lineDashType,H[H.length-1].newLineDashArray=d)));if(0<r[D].markerSize||0<k.markerSize){var q=k.getMarkerProperties(D,u,T,c);h.push(q);s=S(s);v&&h.push({x:u,y:T,ctx:e,type:q.type,size:q.size,color:s,borderColor:s,borderThickness:q.borderThickness})}(r[D].indexLabel||k.indexLabel||r[D].indexLabelFormatter||k.indexLabelFormatter)&&this._indexLabels.push({chartType:"spline",dataPoint:r[D],dataSeries:k,point:{x:u,y:T},direction:0>r[D].y===a.axisY.reversed?1:-1,color:w});T=!1}f(H)}ia.drawMarkers(h);
v&&(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(g.x1,g.y1,g.width,g.height),e.beginPath());c.restore();c.beginPath();return{source:b,dest:this.plotArea.ctx,animationCallback:I.xClipAnimation,
easingFunction:I.easing.linear,animationBase:0}}};var W=function(a,f,b,c,e,g,h,l,t,k,r,p,n){"undefined"===typeof n&&(n=1);h=h||0;l=l||"black";var d=15<c-f&&15<e-b?8:0.35*Math.min(c-f,e-b);a.beginPath();a.moveTo(f,b);a.save();a.fillStyle=g;a.globalAlpha=n;a.fillRect(f,b,c-f,e-b);a.globalAlpha=1;0<h&&(n=0===h%2?0:0.5,a.beginPath(),a.lineWidth=h,a.strokeStyle=l,a.moveTo(f,b),a.rect(f-n,b-n,c-f+2*n,e-b+2*n),a.stroke());a.restore();!0===t&&(a.save(),a.beginPath(),a.moveTo(f,b),a.lineTo(f+d,b+d),a.lineTo(c-
d,b+d),a.lineTo(c,b),a.closePath(),h=a.createLinearGradient((c+f)/2,b+d,(c+f)/2,b),h.addColorStop(0,g),h.addColorStop(1,"rgba(255, 255, 255, .4)"),a.fillStyle=h,a.fill(),a.restore());!0===k&&(a.save(),a.beginPath(),a.moveTo(f,e),a.lineTo(f+d,e-d),a.lineTo(c-d,e-d),a.lineTo(c,e),a.closePath(),h=a.createLinearGradient((c+f)/2,e-d,(c+f)/2,e),h.addColorStop(0,g),h.addColorStop(1,"rgba(255, 255, 255, .4)"),a.fillStyle=h,a.fill(),a.restore());!0===r&&(a.save(),a.beginPath(),a.moveTo(f,b),a.lineTo(f+d,b+
d),a.lineTo(f+d,e-d),a.lineTo(f,e),a.closePath(),h=a.createLinearGradient(f+d,(e+b)/2,f,(e+b)/2),h.addColorStop(0,g),h.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=h,a.fill(),a.restore());!0===p&&(a.save(),a.beginPath(),a.moveTo(c,b),a.lineTo(c-d,b+d),a.lineTo(c-d,e-d),a.lineTo(c,e),h=a.createLinearGradient(c-d,(e+b)/2,c,(e+b)/2),h.addColorStop(0,g),h.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=h,h.addColorStop(0,g),h.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=h,a.fill(),
a.closePath(),a.restore())};s.prototype.renderColumn=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=0,h,l,t,k=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),g=this.dataPointMinWidth=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,r=this.dataPointMaxWidth=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:
Math.min(0.15*this.width,0.9*(this.plotArea.width/a.plotType.totalDataSeries))<<0,p=a.axisX.dataInfo.minDiff;isFinite(p)||(p=0.3*Math.abs(a.axisX.range));p=this.dataPointWidth=this.dataPointWidth?this.dataPointWidth:0.9*(e.width*(a.axisX.logarithmic?Math.log(p)/Math.log(a.axisX.range):Math.abs(p)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&g>r&&(g=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,r));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&r<g)&&
(r=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,g));p<g&&(p=g);p>r&&(p=r);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(r=0;r<a.dataSeriesIndexes.length;r++){var n=a.dataSeriesIndexes[r],d=this.data[n],w=d.dataPoints;if(0<w.length)for(var m=5<p&&d.bevelEnabled?!0:!1,g=0;g<w.length;g++)if(w[g].getTime?
t=w[g].x.getTime():t=w[g].x,!(t<a.axisX.dataInfo.viewPortMin||t>a.axisX.dataInfo.viewPortMax)&&"number"===typeof w[g].y){h=a.axisX.convertValueToPixel(t);l=a.axisY.convertValueToPixel(w[g].y);h=a.axisX.reversed?h+a.plotType.totalDataSeries*p/2-(a.previousDataSeriesCount+r)*p<<0:h-a.plotType.totalDataSeries*p/2+(a.previousDataSeriesCount+r)*p<<0;var D=a.axisX.reversed?h-p<<0:h+p<<0,u;0<=w[g].y?u=k:(u=l,l=k);l>u&&(c=l,l=u,u=c);c=w[g].color?w[g].color:d._colorSet[g%d._colorSet.length];W(b,h,l,D,u,c,
0,null,m&&0<=w[g].y,0>w[g].y&&m,!1,!1,d.fillOpacity);c=d.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:g,x1:h,y1:l,x2:D,y2:u};c=S(c);v&&W(this._eventManager.ghostCtx,h,l,D,u,c,0,null,!1,!1,!1,!1);(w[g].indexLabel||d.indexLabel||w[g].indexLabelFormatter||d.indexLabelFormatter)&&this._indexLabels.push({chartType:"column",dataPoint:w[g],dataSeries:d,point:{x:h+(D-h)/2,y:0>w[g].y===a.axisY.reversed?l:u},direction:0>w[g].y===a.axisY.reversed?
1:-1,bounds:{x1:h,y1:Math.min(l,u),x2:D,y2:Math.max(l,u)},color:c})}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());
b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:I.yScaleAnimation,easingFunction:I.easing.easeOutQuart,animationBase:k<a.axisY.bounds.y1?a.axisY.bounds.y1:k>a.axisY.bounds.y2?a.axisY.bounds.y2:k}}};s.prototype.renderStackedColumn=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=[],h=[],l=[],t=[],k=0,r,p,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),k=
this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1;r=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.width<<0;var d=a.axisX.dataInfo.minDiff;isFinite(d)||(d=0.3*Math.abs(a.axisX.range));d=this.dataPointWidth?this.dataPointWidth:0.9*(e.width*(a.axisX.logarithmic?Math.log(d)/Math.log(a.axisX.range):Math.abs(d)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&k>r&&(k=Math.min(this.dataPointWidth?
this.dataPointWidth:Infinity,r));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&r<k)&&(r=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,k));d<k&&(d=k);d>r&&(d=r);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var w=0;w<a.dataSeriesIndexes.length;w++){var m=a.dataSeriesIndexes[w],D=this.data[m],
u=D.dataPoints;if(0<u.length){var T=5<d&&D.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(k=0;k<u.length;k++)if(c=u[k].x.getTime?u[k].x.getTime():u[k].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof u[k].y){r=a.axisX.convertValueToPixel(c);var s=r-a.plotType.plotUnits.length*d/2+a.index*d<<0,q=s+d<<0,y;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0<u[k].y)l[c]=u[k].y+(l[c]?l[c]:0),0<l[c]&&(p=a.axisY.convertValueToPixel(l[c]),
y="undefined"!==typeof g[c]?g[c]:n,g[c]=p);else if(a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0>=u[k].y)t[c]=u[k].y+(t[c]?t[c]:0),y=a.axisY.convertValueToPixel(t[c]),p="undefined"!==typeof h[c]?h[c]:n,h[c]=y;else if(p=a.axisY.convertValueToPixel(u[k].y),0<=u[k].y){var A="undefined"!==typeof g[c]?g[c]:0;p-=A;y=n-A;g[c]=A+(y-p)}else A=h[c]?h[c]:0,y=p+A,p=n+A,h[c]=A+(y-p);c=u[k].color?u[k].color:D._colorSet[k%D._colorSet.length];W(b,s,p,q,y,c,0,null,T&&0<=u[k].y,0>u[k].y&&T,!1,
!1,D.fillOpacity);c=D.dataPointIds[k];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:k,x1:s,y1:p,x2:q,y2:y};c=S(c);v&&W(this._eventManager.ghostCtx,s,p,q,y,c,0,null,!1,!1,!1,!1);(u[k].indexLabel||D.indexLabel||u[k].indexLabelFormatter||D.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedColumn",dataPoint:u[k],dataSeries:D,point:{x:r,y:0<=u[k].y?p:y},direction:0>u[k].y===a.axisY.reversed?1:-1,bounds:{x1:s,y1:Math.min(p,y),x2:q,y2:Math.max(p,
y)},color:c})}}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:f,dest:this.plotArea.ctx,
animationCallback:I.yScaleAnimation,easingFunction:I.easing.easeOutQuart,animationBase:n<a.axisY.bounds.y1?a.axisY.bounds.y1:n>a.axisY.bounds.y2?a.axisY.bounds.y2:n}}};s.prototype.renderStackedColumn100=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=[],h=[],l=[],t=[],k=0,r,p,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),k=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?
this.dataPointWidth:1;r=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.width<<0;var d=a.axisX.dataInfo.minDiff;isFinite(d)||(d=0.3*Math.abs(a.axisX.range));d=this.dataPointWidth?this.dataPointWidth:0.9*(e.width*(a.axisX.logarithmic?Math.log(d)/Math.log(a.axisX.range):Math.abs(d)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&k>r&&(k=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,r));!this.dataPointMaxWidth&&
(this.dataPointMinWidth&&r<k)&&(r=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,k));d<k&&(d=k);d>r&&(d=r);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var w=0;w<a.dataSeriesIndexes.length;w++){var m=a.dataSeriesIndexes[w],D=this.data[m],u=D.dataPoints;if(0<u.length)for(var s=5<d&&D.bevelEnabled?
!0:!1,k=0;k<u.length;k++)if(c=u[k].x.getTime?u[k].x.getTime():u[k].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof u[k].y){r=a.axisX.convertValueToPixel(c);p=0!==a.dataPointYSums[c]?100*(u[k].y/a.dataPointYSums[c]):0;var q=r-a.plotType.plotUnits.length*d/2+a.index*d<<0,y=q+d<<0,B;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0<u[k].y){l[c]=p+("undefined"!==typeof l[c]?l[c]:0);if(0>=l[c])continue;p=a.axisY.convertValueToPixel(l[c]);
B=g[c]?g[c]:n;g[c]=p}else if(a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0>=u[k].y)t[c]=p+("undefined"!==typeof t[c]?t[c]:0),B=a.axisY.convertValueToPixel(t[c]),p=h[c]?h[c]:n,h[c]=B;else if(p=a.axisY.convertValueToPixel(p),0<=u[k].y){var A="undefined"!==typeof g[c]?g[c]:0;p-=A;B=n-A;a.dataSeriesIndexes.length-1===w&&1>=Math.abs(e.y1-p)&&(p=e.y1);g[c]=A+(B-p)}else A="undefined"!==typeof h[c]?h[c]:0,B=p+A,p=n+A,a.dataSeriesIndexes.length-1===w&&1>=Math.abs(e.y2-B)&&(B=e.y2),h[c]=
A+(B-p);c=u[k].color?u[k].color:D._colorSet[k%D._colorSet.length];W(b,q,p,y,B,c,0,null,s&&0<=u[k].y,0>u[k].y&&s,!1,!1,D.fillOpacity);c=D.dataPointIds[k];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:k,x1:q,y1:p,x2:y,y2:B};c=S(c);v&&W(this._eventManager.ghostCtx,q,p,y,B,c,0,null,!1,!1,!1,!1);(u[k].indexLabel||D.indexLabel||u[k].indexLabelFormatter||D.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedColumn100",dataPoint:u[k],dataSeries:D,
point:{x:r,y:0<=u[k].y?p:B},direction:0>u[k].y===a.axisY.reversed?1:-1,bounds:{x1:q,y1:Math.min(p,B),x2:y,y2:Math.max(p,B)},color:c})}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),
b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:I.yScaleAnimation,easingFunction:I.easing.easeOutQuart,animationBase:n<a.axisY.bounds.y1?a.axisY.bounds.y1:n>a.axisY.bounds.y2?a.axisY.bounds.y2:n}}};s.prototype.renderBar=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=0,h,l,t,k=a.axisY.convertValueToPixel(a.axisY.logarithmic?
a.axisY.viewportMinimum:0),g=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,r=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.height,0.9*(this.plotArea.height/a.plotType.totalDataSeries))<<0,p=a.axisX.dataInfo.minDiff;isFinite(p)||(p=0.3*Math.abs(a.axisX.range));p=this.dataPointWidth?this.dataPointWidth:0.9*(e.height*(a.axisX.logarithmic?Math.log(p)/Math.log(a.axisX.range):Math.abs(p)/Math.abs(a.axisX.range))/
a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&g>r&&(g=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,r));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&r<g)&&(r=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,g));p<g&&(p=g);p>r&&(p=r);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());
for(r=0;r<a.dataSeriesIndexes.length;r++){var n=a.dataSeriesIndexes[r],d=this.data[n],w=d.dataPoints;if(0<w.length){var m=5<p&&d.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(g=0;g<w.length;g++)if(w[g].getTime?t=w[g].x.getTime():t=w[g].x,!(t<a.axisX.dataInfo.viewPortMin||t>a.axisX.dataInfo.viewPortMax)&&"number"===typeof w[g].y){l=a.axisX.convertValueToPixel(t);h=a.axisY.convertValueToPixel(w[g].y);l=a.axisX.reversed?l+a.plotType.totalDataSeries*p/2-(a.previousDataSeriesCount+r)*p<<0:l-a.plotType.totalDataSeries*
p/2+(a.previousDataSeriesCount+r)*p<<0;var D=a.axisX.reversed?l-p<<0:l+p<<0,u;0<=w[g].y?u=k:(u=h,h=k);c=w[g].color?w[g].color:d._colorSet[g%d._colorSet.length];W(b,u,l,h,D,c,0,null,m,!1,!1,!1,d.fillOpacity);c=d.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:g,x1:u,y1:l,x2:h,y2:D};c=S(c);v&&W(this._eventManager.ghostCtx,u,l,h,D,c,0,null,!1,!1,!1,!1);(w[g].indexLabel||d.indexLabel||w[g].indexLabelFormatter||d.indexLabelFormatter)&&this._indexLabels.push({chartType:"bar",
dataPoint:w[g],dataSeries:d,point:{x:0<=w[g].y?h:u,y:l+(D-l)/2},direction:0>w[g].y===a.axisY.reversed?1:-1,bounds:{x1:Math.min(u,h),y1:l,x2:Math.max(u,h),y2:D},color:c})}}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:I.xScaleAnimation,easingFunction:I.easing.easeOutQuart,animationBase:k<a.axisY.bounds.x1?a.axisY.bounds.x1:k>a.axisY.bounds.x2?a.axisY.bounds.x2:k}}};s.prototype.renderStackedBar=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=
[],h=[],l=[],t=[],k=0,r,p,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),k=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1;p=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.height<<0;var d=a.axisX.dataInfo.minDiff;isFinite(d)||(d=0.3*Math.abs(a.axisX.range));d=this.dataPointWidth?this.dataPointWidth:0.9*(e.height*(a.axisX.logarithmic?Math.log(d)/Math.log(a.axisX.range):Math.abs(d)/
Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&k>p&&(k=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,p));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&p<k)&&(p=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,k));d<k&&(d=k);d>p&&(d=p);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),
this._eventManager.ghostCtx.clip());for(var w=0;w<a.dataSeriesIndexes.length;w++){var m=a.dataSeriesIndexes[w],D=this.data[m],u=D.dataPoints;if(0<u.length){var s=5<d&&D.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(k=0;k<u.length;k++)if(c=u[k].x.getTime?u[k].x.getTime():u[k].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof u[k].y){p=a.axisX.convertValueToPixel(c);var q=p-a.plotType.plotUnits.length*d/2+a.index*d<<0,y=q+d<<0,B;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&
0<a.axisY.scaleBreaks._appliedBreaks.length&&0<u[k].y)l[c]=u[k].y+(l[c]?l[c]:0),0<l[c]&&(B=g[c]?g[c]:n,g[c]=r=a.axisY.convertValueToPixel(l[c]));else if(a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0>=u[k].y)t[c]=u[k].y+(t[c]?t[c]:0),r=h[c]?h[c]:n,h[c]=B=a.axisY.convertValueToPixel(t[c]);else if(r=a.axisY.convertValueToPixel(u[k].y),0<=u[k].y){var A=g[c]?g[c]:0;B=n+A;r+=A;g[c]=A+(r-B)}else A=h[c]?h[c]:0,B=r-A,r=n-A,h[c]=A+(r-B);c=u[k].color?u[k].color:D._colorSet[k%D._colorSet.length];
W(b,B,q,r,y,c,0,null,s,!1,!1,!1,D.fillOpacity);c=D.dataPointIds[k];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:k,x1:B,y1:q,x2:r,y2:y};c=S(c);v&&W(this._eventManager.ghostCtx,B,q,r,y,c,0,null,!1,!1,!1,!1);(u[k].indexLabel||D.indexLabel||u[k].indexLabelFormatter||D.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedBar",dataPoint:u[k],dataSeries:D,point:{x:0<=u[k].y?r:B,y:p},direction:0>u[k].y===a.axisY.reversed?1:-1,bounds:{x1:Math.min(B,
r),y1:q,x2:Math.max(B,r),y2:y},color:c})}}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();
return{source:f,dest:this.plotArea.ctx,animationCallback:I.xScaleAnimation,easingFunction:I.easing.easeOutQuart,animationBase:n<a.axisY.bounds.x1?a.axisY.bounds.x1:n>a.axisY.bounds.x2?a.axisY.bounds.x2:n}}};s.prototype.renderStackedBar100=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,g=[],h=[],l=[],t=[],k=0,r,p,n=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),k=this.dataPointMinWidth?
this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1;p=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.height<<0;var d=a.axisX.dataInfo.minDiff;isFinite(d)||(d=0.3*Math.abs(a.axisX.range));d=this.dataPointWidth?this.dataPointWidth:0.9*(e.height*(a.axisX.logarithmic?Math.log(d)/Math.log(a.axisX.range):Math.abs(d)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&k>p&&(k=Math.min(this.dataPointWidth?this.dataPointWidth:
Infinity,p));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&p<k)&&(p=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,k));d<k&&(d=k);d>p&&(d=p);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var w=0;w<a.dataSeriesIndexes.length;w++){var m=a.dataSeriesIndexes[w],D=this.data[m],u=D.dataPoints;
if(0<u.length){var q=5<d&&D.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(k=0;k<u.length;k++)if(c=u[k].x.getTime?u[k].x.getTime():u[k].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof u[k].y){p=a.axisX.convertValueToPixel(c);var s;s=0!==a.dataPointYSums[c]?100*(u[k].y/a.dataPointYSums[c]):0;var y=p-a.plotType.plotUnits.length*d/2+a.index*d<<0,B=y+d<<0;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0<u[k].y){l[c]=s+
(l[c]?l[c]:0);if(0>=l[c])continue;s=g[c]?g[c]:n;g[c]=r=a.axisY.convertValueToPixel(l[c])}else if(a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length&&0>=u[k].y)t[c]=s+(t[c]?t[c]:0),r=h[c]?h[c]:n,h[c]=s=a.axisY.convertValueToPixel(t[c]);else if(r=a.axisY.convertValueToPixel(s),0<=u[k].y){var A=g[c]?g[c]:0;s=n+A;r+=A;a.dataSeriesIndexes.length-1===w&&1>=Math.abs(e.x2-r)&&(r=e.x2);g[c]=A+(r-s)}else A=h[c]?h[c]:0,s=r-A,r=n-A,a.dataSeriesIndexes.length-1===w&&1>=Math.abs(e.x1-s)&&(s=e.x1),
h[c]=A+(r-s);c=u[k].color?u[k].color:D._colorSet[k%D._colorSet.length];W(b,s,y,r,B,c,0,null,q,!1,!1,!1,D.fillOpacity);c=D.dataPointIds[k];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:k,x1:s,y1:y,x2:r,y2:B};c=S(c);v&&W(this._eventManager.ghostCtx,s,y,r,B,c,0,null,!1,!1,!1,!1);(u[k].indexLabel||D.indexLabel||u[k].indexLabelFormatter||D.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedBar100",dataPoint:u[k],dataSeries:D,point:{x:0<=u[k].y?
r:s,y:p},direction:0>u[k].y===a.axisY.reversed?1:-1,bounds:{x1:Math.min(s,r),y1:y,x2:Math.max(s,r),y2:B},color:c})}}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,
e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:I.xScaleAnimation,easingFunction:I.easing.easeOutQuart,animationBase:n<a.axisY.bounds.x1?a.axisY.bounds.x1:n>a.axisY.bounds.x2?a.axisY.bounds.x2:n}}};s.prototype.renderArea=function(a){var f,b;function c(){A&&(0<w.lineThickness&&g.stroke(),a.axisY.logarithmic||0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?B=y:0>a.axisY.viewportMaximum?B=t.y1:0<a.axisY.viewportMinimum&&
(B=l.y2),g.lineTo(u,B),g.lineTo(A.x,B),g.closePath(),g.globalAlpha=w.fillOpacity,g.fill(),g.globalAlpha=1,v&&(h.lineTo(u,B),h.lineTo(A.x,B),h.closePath(),h.fill()),g.beginPath(),g.moveTo(u,s),h.beginPath(),h.moveTo(u,s),A={x:u,y:s})}var e=a.targetCanvasCtx||this.plotArea.ctx,g=v?this._preRenderCtx:e;if(!(0>=a.dataSeriesIndexes.length)){var h=this._eventManager.ghostCtx,l=a.axisX.lineCoordinates,t=a.axisY.lineCoordinates,k=[],r=this.plotArea,p;g.save();v&&h.save();g.beginPath();g.rect(r.x1,r.y1,r.width,
r.height);g.clip();v&&(h.beginPath(),h.rect(r.x1,r.y1,r.width,r.height),h.clip());for(var n=0;n<a.dataSeriesIndexes.length;n++){var d=a.dataSeriesIndexes[n],w=this.data[d],m=w.dataPoints,k=w.id;this._eventManager.objectMap[k]={objectType:"dataSeries",dataSeriesIndex:d};k=S(k);h.fillStyle=k;k=[];f=!0;var D=0,u,s,q,y=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),B,A=null;if(0<m.length){var x=w._colorSet[D%w._colorSet.length],z=w.lineColor=w.options.lineColor||x,K=z;g.fillStyle=
x;g.strokeStyle=z;g.lineWidth=w.lineThickness;b="solid";if(g.setLineDash){var J=G(w.nullDataLineDashType,w.lineThickness);b=w.lineDashType;var ca=G(b,w.lineThickness);g.setLineDash(ca)}for(var da=!0;D<m.length;D++)if(q=m[D].x.getTime?m[D].x.getTime():m[D].x,!(q<a.axisX.dataInfo.viewPortMin||q>a.axisX.dataInfo.viewPortMax&&(!w.connectNullData||!da)))if("number"!==typeof m[D].y)w.connectNullData||(da||f)||c(),da=!0;else{u=a.axisX.convertValueToPixel(q);s=a.axisY.convertValueToPixel(m[D].y);f||da?(!f&&
w.connectNullData?(g.setLineDash&&(w.options.nullDataLineDashType||b===w.lineDashType&&w.lineDashType!==w.nullDataLineDashType)&&(f=u,b=s,u=p.x,s=p.y,c(),g.moveTo(p.x,p.y),u=f,s=b,A=p,b=w.nullDataLineDashType,g.setLineDash(J)),g.lineTo(u,s),v&&h.lineTo(u,s)):(g.beginPath(),g.moveTo(u,s),v&&(h.beginPath(),h.moveTo(u,s)),A={x:u,y:s}),da=f=!1):(g.lineTo(u,s),v&&h.lineTo(u,s),0==D%250&&c());p={x:u,y:s};D<m.length-1&&(K!==(m[D].lineColor||z)||b!==(m[D].lineDashType||w.lineDashType))&&(c(),K=m[D].lineColor||
z,g.strokeStyle=K,g.setLineDash&&(m[D].lineDashType?(b=m[D].lineDashType,g.setLineDash(G(b,w.lineThickness))):(b=w.lineDashType,g.setLineDash(ca))));var aa=w.dataPointIds[D];this._eventManager.objectMap[aa]={id:aa,objectType:"dataPoint",dataSeriesIndex:d,dataPointIndex:D,x1:u,y1:s};0!==m[D].markerSize&&(0<m[D].markerSize||0<w.markerSize)&&(q=w.getMarkerProperties(D,u,s,g),k.push(q),aa=S(aa),v&&k.push({x:u,y:s,ctx:h,type:q.type,size:q.size,color:aa,borderColor:aa,borderThickness:q.borderThickness}));
(m[D].indexLabel||w.indexLabel||m[D].indexLabelFormatter||w.indexLabelFormatter)&&this._indexLabels.push({chartType:"area",dataPoint:m[D],dataSeries:w,point:{x:u,y:s},direction:0>m[D].y===a.axisY.reversed?1:-1,color:x})}c();ia.drawMarkers(k)}}v&&(e.drawImage(this._preRenderCanvas,0,0,this.width,this.height),g.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&g.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&g.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),
this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),g.clearRect(r.x1,r.y1,r.width,r.height),this._eventManager.ghostCtx.restore());g.restore();return{source:e,dest:this.plotArea.ctx,animationCallback:I.xClipAnimation,easingFunction:I.easing.linear,animationBase:0}}};s.prototype.renderSplineArea=function(a){function f(){var b=x(q,2);if(0<b.length){if(0<p.lineThickness){c.beginPath();c.moveTo(b[0].x,b[0].y);b[0].newStrokeStyle&&(c.strokeStyle=b[0].newStrokeStyle);
b[0].newLineDashArray&&c.setLineDash(b[0].newLineDashArray);for(var d=0;d<b.length-3;d+=3)if(c.bezierCurveTo(b[d+1].x,b[d+1].y,b[d+2].x,b[d+2].y,b[d+3].x,b[d+3].y),v&&e.bezierCurveTo(b[d+1].x,b[d+1].y,b[d+2].x,b[d+2].y,b[d+3].x,b[d+3].y),b[d+3].newStrokeStyle||b[d+3].newLineDashArray)c.stroke(),c.beginPath(),c.moveTo(b[d+3].x,b[d+3].y),b[d+3].newStrokeStyle&&(c.strokeStyle=b[d+3].newStrokeStyle),b[d+3].newLineDashArray&&c.setLineDash(b[d+3].newLineDashArray);c.stroke()}c.beginPath();c.moveTo(b[0].x,
b[0].y);v&&(e.beginPath(),e.moveTo(b[0].x,b[0].y));for(d=0;d<b.length-3;d+=3)c.bezierCurveTo(b[d+1].x,b[d+1].y,b[d+2].x,b[d+2].y,b[d+3].x,b[d+3].y),v&&e.bezierCurveTo(b[d+1].x,b[d+1].y,b[d+2].x,b[d+2].y,b[d+3].x,b[d+3].y);a.axisY.logarithmic||0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?u=D:0>a.axisY.viewportMaximum?u=h.y1:0<a.axisY.viewportMinimum&&(u=g.y2);s={x:b[0].x,y:b[0].y};c.lineTo(b[b.length-1].x,u);c.lineTo(s.x,u);c.closePath();c.globalAlpha=p.fillOpacity;c.fill();c.globalAlpha=
1;v&&(e.lineTo(b[b.length-1].x,u),e.lineTo(s.x,u),e.closePath(),e.fill())}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=v?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=this._eventManager.ghostCtx,g=a.axisX.lineCoordinates,h=a.axisY.lineCoordinates,l=[],t=this.plotArea;c.save();v&&e.save();c.beginPath();c.rect(t.x1,t.y1,t.width,t.height);c.clip();v&&(e.beginPath(),e.rect(t.x1,t.y1,t.width,t.height),e.clip());for(var k=0;k<a.dataSeriesIndexes.length;k++){var r=a.dataSeriesIndexes[k],
p=this.data[r],n=p.dataPoints,l=p.id;this._eventManager.objectMap[l]={objectType:"dataSeries",dataSeriesIndex:r};l=S(l);e.fillStyle=l;var l=[],d=0,w,m,D=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),u,s=null,q=[];if(0<n.length){var y=p._colorSet[d%p._colorSet.length],B=p.lineColor=p.options.lineColor||y,A=B;c.fillStyle=y;c.strokeStyle=B;c.lineWidth=p.lineThickness;var z="solid";if(c.setLineDash){var M=G(p.nullDataLineDashType,p.lineThickness),z=p.lineDashType,K=G(z,p.lineThickness);
c.setLineDash(K)}for(m=!1;d<n.length;d++)if(w=n[d].x.getTime?n[d].x.getTime():n[d].x,!(w<a.axisX.dataInfo.viewPortMin||w>a.axisX.dataInfo.viewPortMax&&(!p.connectNullData||!m)))if("number"!==typeof n[d].y)0<d&&!m&&(p.connectNullData?c.setLineDash&&(0<q.length&&(p.options.nullDataLineDashType||!n[d-1].lineDashType))&&(q[q.length-1].newLineDashArray=M,z=p.nullDataLineDashType):(f(),q=[])),m=!0;else{w=a.axisX.convertValueToPixel(w);m=a.axisY.convertValueToPixel(n[d].y);var J=p.dataPointIds[d];this._eventManager.objectMap[J]=
{id:J,objectType:"dataPoint",dataSeriesIndex:r,dataPointIndex:d,x1:w,y1:m};q[q.length]={x:w,y:m};d<n.length-1&&(A!==(n[d].lineColor||B)||z!==(n[d].lineDashType||p.lineDashType))&&(A=n[d].lineColor||B,q[q.length-1].newStrokeStyle=A,c.setLineDash&&(n[d].lineDashType?(z=n[d].lineDashType,q[q.length-1].newLineDashArray=G(z,p.lineThickness)):(z=p.lineDashType,q[q.length-1].newLineDashArray=K)));if(0!==n[d].markerSize&&(0<n[d].markerSize||0<p.markerSize)){var ca=p.getMarkerProperties(d,w,m,c);l.push(ca);
J=S(J);v&&l.push({x:w,y:m,ctx:e,type:ca.type,size:ca.size,color:J,borderColor:J,borderThickness:ca.borderThickness})}(n[d].indexLabel||p.indexLabel||n[d].indexLabelFormatter||p.indexLabelFormatter)&&this._indexLabels.push({chartType:"splineArea",dataPoint:n[d],dataSeries:p,point:{x:w,y:m},direction:0>n[d].y===a.axisY.reversed?1:-1,color:y});m=!1}f();ia.drawMarkers(l)}}v&&(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,
0,0,this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(t.x1,t.y1,t.width,t.height),this._eventManager.ghostCtx.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:I.xClipAnimation,easingFunction:I.easing.linear,animationBase:0}}};s.prototype.renderStepArea=function(a){var f,b;function c(){A&&(0<w.lineThickness&&
g.stroke(),a.axisY.logarithmic||0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?B=y:0>a.axisY.viewportMaximum?B=t.y1:0<a.axisY.viewportMinimum&&(B=l.y2),g.lineTo(u,B),g.lineTo(A.x,B),g.closePath(),g.globalAlpha=w.fillOpacity,g.fill(),g.globalAlpha=1,v&&(h.lineTo(u,B),h.lineTo(A.x,B),h.closePath(),h.fill()),g.beginPath(),g.moveTo(u,s),h.beginPath(),h.moveTo(u,s),A={x:u,y:s})}var e=a.targetCanvasCtx||this.plotArea.ctx,g=v?this._preRenderCtx:e;if(!(0>=a.dataSeriesIndexes.length)){var h=this._eventManager.ghostCtx,
l=a.axisX.lineCoordinates,t=a.axisY.lineCoordinates,k=[],r=this.plotArea,p;g.save();v&&h.save();g.beginPath();g.rect(r.x1,r.y1,r.width,r.height);g.clip();v&&(h.beginPath(),h.rect(r.x1,r.y1,r.width,r.height),h.clip());for(var n=0;n<a.dataSeriesIndexes.length;n++){var d=a.dataSeriesIndexes[n],w=this.data[d],m=w.dataPoints,k=w.id;this._eventManager.objectMap[k]={objectType:"dataSeries",dataSeriesIndex:d};k=S(k);h.fillStyle=k;k=[];f=!0;var D=0,u,s,q,y=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:
0),B,A=null;b=!1;if(0<m.length){var x=w._colorSet[D%w._colorSet.length],z=w.lineColor=w.options.lineColor||x,K=z;g.fillStyle=x;g.strokeStyle=z;g.lineWidth=w.lineThickness;var J="solid";if(g.setLineDash){var ca=G(w.nullDataLineDashType,w.lineThickness),J=w.lineDashType,da=G(J,w.lineThickness);g.setLineDash(da)}for(;D<m.length;D++)if(q=m[D].x.getTime?m[D].x.getTime():m[D].x,!(q<a.axisX.dataInfo.viewPortMin||q>a.axisX.dataInfo.viewPortMax&&(!w.connectNullData||!b))){var aa=s;"number"!==typeof m[D].y?
(w.connectNullData||(b||f)||c(),b=!0):(u=a.axisX.convertValueToPixel(q),s=a.axisY.convertValueToPixel(m[D].y),f||b?(!f&&w.connectNullData?(g.setLineDash&&(w.options.nullDataLineDashType||J===w.lineDashType&&w.lineDashType!==w.nullDataLineDashType)&&(f=u,b=s,u=p.x,s=p.y,c(),g.moveTo(p.x,p.y),u=f,s=b,A=p,J=w.nullDataLineDashType,g.setLineDash(ca)),g.lineTo(u,aa),g.lineTo(u,s),v&&(h.lineTo(u,aa),h.lineTo(u,s))):(g.beginPath(),g.moveTo(u,s),v&&(h.beginPath(),h.moveTo(u,s)),A={x:u,y:s}),b=f=!1):(g.lineTo(u,
aa),v&&h.lineTo(u,aa),g.lineTo(u,s),v&&h.lineTo(u,s),0==D%250&&c()),p={x:u,y:s},D<m.length-1&&(K!==(m[D].lineColor||z)||J!==(m[D].lineDashType||w.lineDashType))&&(c(),K=m[D].lineColor||z,g.strokeStyle=K,g.setLineDash&&(m[D].lineDashType?(J=m[D].lineDashType,g.setLineDash(G(J,w.lineThickness))):(J=w.lineDashType,g.setLineDash(da)))),q=w.dataPointIds[D],this._eventManager.objectMap[q]={id:q,objectType:"dataPoint",dataSeriesIndex:d,dataPointIndex:D,x1:u,y1:s},0!==m[D].markerSize&&(0<m[D].markerSize||
0<w.markerSize)&&(aa=w.getMarkerProperties(D,u,s,g),k.push(aa),q=S(q),v&&k.push({x:u,y:s,ctx:h,type:aa.type,size:aa.size,color:q,borderColor:q,borderThickness:aa.borderThickness})),(m[D].indexLabel||w.indexLabel||m[D].indexLabelFormatter||w.indexLabelFormatter)&&this._indexLabels.push({chartType:"stepArea",dataPoint:m[D],dataSeries:w,point:{x:u,y:s},direction:0>m[D].y===a.axisY.reversed?1:-1,color:x}))}c();ia.drawMarkers(k)}}v&&(e.drawImage(this._preRenderCanvas,0,0,this.width,this.height),g.globalCompositeOperation=
"source-atop",a.axisX.maskCanvas&&g.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&g.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),g.clearRect(r.x1,r.y1,r.width,r.height),this._eventManager.ghostCtx.restore());g.restore();return{source:e,dest:this.plotArea.ctx,animationCallback:I.xClipAnimation,easingFunction:I.easing.linear,animationBase:0}}};s.prototype.renderStackedArea=
function(a){function f(){if(!(1>t.length)){for(0<A.lineThickness&&c.stroke();0<t.length;){var a=t.pop();c.lineTo(a.x,a.y);v&&s.lineTo(a.x,a.y)}c.closePath();c.globalAlpha=A.fillOpacity;c.fill();c.globalAlpha=1;c.beginPath();v&&(s.closePath(),s.fill(),s.beginPath());t=[]}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=v?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=null,g=[],h=this.plotArea,l=[],t=[],k=[],r=[],p=0,n,d,w,m=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:
0),s=this._eventManager.ghostCtx,u,q,y;v&&s.beginPath();c.save();v&&s.save();c.beginPath();c.rect(h.x1,h.y1,h.width,h.height);c.clip();v&&(s.beginPath(),s.rect(h.x1,h.y1,h.width,h.height),s.clip());for(var e=[],x=0;x<a.dataSeriesIndexes.length;x++){var B=a.dataSeriesIndexes[x],A=this.data[B],z=A.dataPoints;A.dataPointIndexes=[];for(p=0;p<z.length;p++)B=z[p].x.getTime?z[p].x.getTime():z[p].x,A.dataPointIndexes[B]=p,e[B]||(k.push(B),e[B]=!0);k.sort(Qa)}for(x=0;x<a.dataSeriesIndexes.length;x++){B=a.dataSeriesIndexes[x];
A=this.data[B];z=A.dataPoints;q=!0;t=[];p=A.id;this._eventManager.objectMap[p]={objectType:"dataSeries",dataSeriesIndex:B};p=S(p);s.fillStyle=p;if(0<k.length){var e=A._colorSet[0],M=A.lineColor=A.options.lineColor||e,K=M;c.fillStyle=e;c.strokeStyle=M;c.lineWidth=A.lineThickness;y="solid";if(c.setLineDash){var J=G(A.nullDataLineDashType,A.lineThickness);y=A.lineDashType;var ca=G(y,A.lineThickness);c.setLineDash(ca)}for(var da=!0,p=0;p<k.length;p++){w=k[p];var aa=null,aa=0<=A.dataPointIndexes[w]?z[A.dataPointIndexes[w]]:
{x:w,y:null};if(!(w<a.axisX.dataInfo.viewPortMin||w>a.axisX.dataInfo.viewPortMax&&(!A.connectNullData||!da)))if("number"!==typeof aa.y)A.connectNullData||(da||q)||f(),da=!0;else{n=a.axisX.convertValueToPixel(w);var xa=l[w]?l[w]:0;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length){r[w]=aa.y+(r[w]?r[w]:0);if(0>=r[w]&&a.axisY.logarithmic)continue;d=a.axisY.convertValueToPixel(r[w])}else d=a.axisY.convertValueToPixel(aa.y),d-=xa;t.push({x:n,y:m-xa});l[w]=m-d;q||
da?(!q&&A.connectNullData?(c.setLineDash&&(A.options.nullDataLineDashType||y===A.lineDashType&&A.lineDashType!==A.nullDataLineDashType)&&(q=t.pop(),y=t[t.length-1],f(),c.moveTo(u.x,u.y),t.push(y),t.push(q),y=A.nullDataLineDashType,c.setLineDash(J)),c.lineTo(n,d),v&&s.lineTo(n,d)):(c.beginPath(),c.moveTo(n,d),v&&(s.beginPath(),s.moveTo(n,d))),da=q=!1):(c.lineTo(n,d),v&&s.lineTo(n,d),0==p%250&&(f(),c.moveTo(n,d),v&&s.moveTo(n,d),t.push({x:n,y:m-xa})));u={x:n,y:d};p<z.length-1&&(K!==(z[p].lineColor||
M)||y!==(z[p].lineDashType||A.lineDashType))&&(f(),c.beginPath(),c.moveTo(n,d),t.push({x:n,y:m-xa}),K=z[p].lineColor||M,c.strokeStyle=K,c.setLineDash&&(z[p].lineDashType?(y=z[p].lineDashType,c.setLineDash(G(y,A.lineThickness))):(y=A.lineDashType,c.setLineDash(ca))));if(0<=A.dataPointIndexes[w]){var na=A.dataPointIds[A.dataPointIndexes[w]];this._eventManager.objectMap[na]={id:na,objectType:"dataPoint",dataSeriesIndex:B,dataPointIndex:A.dataPointIndexes[w],x1:n,y1:d}}0<=A.dataPointIndexes[w]&&0!==aa.markerSize&&
(0<aa.markerSize||0<A.markerSize)&&(w=A.getMarkerProperties(A.dataPointIndexes[w],n,d,c),g.push(w),markerColor=S(na),v&&g.push({x:n,y:d,ctx:s,type:w.type,size:w.size,color:markerColor,borderColor:markerColor,borderThickness:w.borderThickness}));(aa.indexLabel||A.indexLabel||aa.indexLabelFormatter||A.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedArea",dataPoint:aa,dataSeries:A,point:{x:n,y:d},direction:0>z[p].y===a.axisY.reversed?1:-1,color:e})}}f();c.moveTo(n,d);v&&s.moveTo(n,d)}delete A.dataPointIndexes}ia.drawMarkers(g);
v&&(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(h.x1,h.y1,h.width,h.height),s.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:I.xClipAnimation,
easingFunction:I.easing.linear,animationBase:0}}};s.prototype.renderStackedArea100=function(a){function f(){for(0<A.lineThickness&&c.stroke();0<t.length;){var a=t.pop();c.lineTo(a.x,a.y);v&&y.lineTo(a.x,a.y)}c.closePath();c.globalAlpha=A.fillOpacity;c.fill();c.globalAlpha=1;c.beginPath();v&&(y.closePath(),y.fill(),y.beginPath());t=[]}var b=a.targetCanvasCtx||this.plotArea.ctx,c=v?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=null,g=this.plotArea,h=[],l=[],t=[],k=[],r=[],p=0,n,d,
w,m,s,u,q=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),y=this._eventManager.ghostCtx;c.save();v&&y.save();c.beginPath();c.rect(g.x1,g.y1,g.width,g.height);c.clip();v&&(y.beginPath(),y.rect(g.x1,g.y1,g.width,g.height),y.clip());for(var e=[],x=0;x<a.dataSeriesIndexes.length;x++){var B=a.dataSeriesIndexes[x],A=this.data[B],z=A.dataPoints;A.dataPointIndexes=[];for(p=0;p<z.length;p++)B=z[p].x.getTime?z[p].x.getTime():z[p].x,A.dataPointIndexes[B]=p,e[B]||(k.push(B),e[B]=!0);
k.sort(Qa)}for(x=0;x<a.dataSeriesIndexes.length;x++){B=a.dataSeriesIndexes[x];A=this.data[B];z=A.dataPoints;s=!0;e=A.id;this._eventManager.objectMap[e]={objectType:"dataSeries",dataSeriesIndex:B};e=S(e);y.fillStyle=e;t=[];if(0<k.length){var e=A._colorSet[p%A._colorSet.length],M=A.lineColor=A.options.lineColor||e,K=M;c.fillStyle=e;c.strokeStyle=M;c.lineWidth=A.lineThickness;u="solid";if(c.setLineDash){var J=G(A.nullDataLineDashType,A.lineThickness);u=A.lineDashType;var ca=G(u,A.lineThickness);c.setLineDash(ca)}for(var da=
!0,p=0;p<k.length;p++){w=k[p];var aa=null,aa=0<=A.dataPointIndexes[w]?z[A.dataPointIndexes[w]]:{x:w,y:null};if(!(w<a.axisX.dataInfo.viewPortMin||w>a.axisX.dataInfo.viewPortMax&&(!A.connectNullData||!da)))if("number"!==typeof aa.y)A.connectNullData||(da||s)||f(),da=!0;else{var xa;xa=0!==a.dataPointYSums[w]?100*(aa.y/a.dataPointYSums[w]):0;n=a.axisX.convertValueToPixel(w);var na=l[w]?l[w]:0;if(a.axisY.logarithmic||a.axisY.scaleBreaks&&0<a.axisY.scaleBreaks._appliedBreaks.length){r[w]=xa+(r[w]?r[w]:
0);if(0>=r[w]&&a.axisY.logarithmic)continue;d=a.axisY.convertValueToPixel(r[w])}else d=a.axisY.convertValueToPixel(xa),d-=na;t.push({x:n,y:q-na});l[w]=q-d;s||da?(!s&&A.connectNullData?(c.setLineDash&&(A.options.nullDataLineDashType||u===A.lineDashType&&A.lineDashType!==A.nullDataLineDashType)&&(s=t.pop(),u=t[t.length-1],f(),c.moveTo(m.x,m.y),t.push(u),t.push(s),u=A.nullDataLineDashType,c.setLineDash(J)),c.lineTo(n,d),v&&y.lineTo(n,d)):(c.beginPath(),c.moveTo(n,d),v&&(y.beginPath(),y.moveTo(n,d))),
da=s=!1):(c.lineTo(n,d),v&&y.lineTo(n,d),0==p%250&&(f(),c.moveTo(n,d),v&&y.moveTo(n,d),t.push({x:n,y:q-na})));m={x:n,y:d};p<z.length-1&&(K!==(z[p].lineColor||M)||u!==(z[p].lineDashType||A.lineDashType))&&(f(),c.beginPath(),c.moveTo(n,d),t.push({x:n,y:q-na}),K=z[p].lineColor||M,c.strokeStyle=K,c.setLineDash&&(z[p].lineDashType?(u=z[p].lineDashType,c.setLineDash(G(u,A.lineThickness))):(u=A.lineDashType,c.setLineDash(ca))));if(0<=A.dataPointIndexes[w]){var E=A.dataPointIds[A.dataPointIndexes[w]];this._eventManager.objectMap[E]=
{id:E,objectType:"dataPoint",dataSeriesIndex:B,dataPointIndex:A.dataPointIndexes[w],x1:n,y1:d}}0<=A.dataPointIndexes[w]&&0!==aa.markerSize&&(0<aa.markerSize||0<A.markerSize)&&(w=A.getMarkerProperties(p,n,d,c),h.push(w),markerColor=S(E),v&&h.push({x:n,y:d,ctx:y,type:w.type,size:w.size,color:markerColor,borderColor:markerColor,borderThickness:w.borderThickness}));(aa.indexLabel||A.indexLabel||aa.indexLabelFormatter||A.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedArea100",dataPoint:aa,
dataSeries:A,point:{x:n,y:d},direction:0>z[p].y===a.axisY.reversed?1:-1,color:e})}}f();c.moveTo(n,d);v&&y.moveTo(n,d)}delete A.dataPointIndexes}ia.drawMarkers(h);v&&(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
0,0,this.width,this.height),c.clearRect(g.x1,g.y1,g.width,g.height),y.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:I.xClipAnimation,easingFunction:I.easing.linear,animationBase:0}}};s.prototype.renderBubble=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=this.plotArea,e=0,g,h;b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(c.x1,c.y1,c.width,c.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),
this._eventManager.ghostCtx.rect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.clip());for(var l=-Infinity,t=Infinity,k=0;k<a.dataSeriesIndexes.length;k++)for(var r=a.dataSeriesIndexes[k],p=this.data[r],n=p.dataPoints,d=0,e=0;e<n.length;e++)g=n[e].getTime?g=n[e].x.getTime():g=n[e].x,g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax||"undefined"===typeof n[e].z||(d=n[e].z,d>l&&(l=d),d<t&&(t=d));for(var w=25*Math.PI,m=Math.max(Math.pow(0.25*Math.min(c.height,c.width)/2,2)*Math.PI,
w),k=0;k<a.dataSeriesIndexes.length;k++)if(r=a.dataSeriesIndexes[k],p=this.data[r],n=p.dataPoints,0<n.length)for(b.strokeStyle="#4572A7 ",e=0;e<n.length;e++)if(g=n[e].getTime?g=n[e].x.getTime():g=n[e].x,!(g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax)&&"number"===typeof n[e].y){g=a.axisX.convertValueToPixel(g);h=a.axisY.convertValueToPixel(n[e].y);var d=n[e].z,s=2*Math.max(Math.sqrt((l===t?m/2:w+(m-w)/(l-t)*(d-t))/Math.PI)<<0,1),d=p.getMarkerProperties(e,b);d.size=s;b.globalAlpha=
p.fillOpacity;ia.drawMarker(g,h,b,d.type,d.size,d.color,d.borderColor,d.borderThickness);b.globalAlpha=1;var u=p.dataPointIds[e];this._eventManager.objectMap[u]={id:u,objectType:"dataPoint",dataSeriesIndex:r,dataPointIndex:e,x1:g,y1:h,size:s};s=S(u);v&&ia.drawMarker(g,h,this._eventManager.ghostCtx,d.type,d.size,s,s,d.borderThickness);(n[e].indexLabel||p.indexLabel||n[e].indexLabelFormatter||p.indexLabelFormatter)&&this._indexLabels.push({chartType:"bubble",dataPoint:n[e],dataSeries:p,point:{x:g,y:h},
direction:1,bounds:{x1:g-d.size/2,y1:h-d.size/2,x2:g+d.size/2,y2:h+d.size/2},color:null})}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.restore());
b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:I.fadeInAnimation,easingFunction:I.easing.easeInQuad,animationBase:0}}};s.prototype.renderScatter=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=this.plotArea,e=0,g,h;b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(c.x1,c.y1,c.width,c.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(c.x1,c.y1,
c.width,c.height),this._eventManager.ghostCtx.clip());for(var l=0;l<a.dataSeriesIndexes.length;l++){var t=a.dataSeriesIndexes[l],k=this.data[t],r=k.dataPoints;if(0<r.length){b.strokeStyle="#4572A7 ";Math.pow(0.3*Math.min(c.height,c.width)/2,2);for(var p=0,n=0,e=0;e<r.length;e++)if(g=r[e].getTime?g=r[e].x.getTime():g=r[e].x,!(g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax)&&"number"===typeof r[e].y){g=a.axisX.convertValueToPixel(g);h=a.axisY.convertValueToPixel(r[e].y);var d=k.getMarkerProperties(e,
g,h,b);b.globalAlpha=k.fillOpacity;ia.drawMarker(d.x,d.y,d.ctx,d.type,d.size,d.color,d.borderColor,d.borderThickness);b.globalAlpha=1;Math.sqrt((p-g)*(p-g)+(n-h)*(n-h))<Math.min(d.size,5)&&r.length>Math.min(this.plotArea.width,this.plotArea.height)||(p=k.dataPointIds[e],this._eventManager.objectMap[p]={id:p,objectType:"dataPoint",dataSeriesIndex:t,dataPointIndex:e,x1:g,y1:h},p=S(p),v&&ia.drawMarker(d.x,d.y,this._eventManager.ghostCtx,d.type,d.size,p,p,d.borderThickness),(r[e].indexLabel||k.indexLabel||
r[e].indexLabelFormatter||k.indexLabelFormatter)&&this._indexLabels.push({chartType:"scatter",dataPoint:r[e],dataSeries:k,point:{x:g,y:h},direction:1,bounds:{x1:g-d.size/2,y1:h-d.size/2,x2:g+d.size/2,y2:h+d.size/2},color:null}),p=g,n=h)}}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),
this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(c.x1,c.y1,c.width,c.height),this._eventManager.ghostCtx.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:I.fadeInAnimation,easingFunction:I.easing.easeInQuad,animationBase:0}}};s.prototype.renderCandlestick=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f,c=this._eventManager.ghostCtx;if(!(0>=a.dataSeriesIndexes.length)){var e=
null,g=null,h=this.plotArea,l=0,t,k,r,p,n,d,e=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,g=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.015*this.width,w=a.axisX.dataInfo.minDiff;isFinite(w)||(w=0.3*Math.abs(a.axisX.range));w=this.dataPointWidth?this.dataPointWidth:0.7*h.width*(a.axisX.logarithmic?Math.log(w)/Math.log(a.axisX.range):Math.abs(w)/Math.abs(a.axisX.range))<<0;this.dataPointMaxWidth&&e>g&&(e=Math.min(this.dataPointWidth?
this.dataPointWidth:Infinity,g));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&g<e)&&(g=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,e));w<e&&(w=e);w>g&&(w=g);b.save();v&&c.save();b.beginPath();b.rect(h.x1,h.y1,h.width,h.height);b.clip();v&&(c.beginPath(),c.rect(h.x1,h.y1,h.width,h.height),c.clip());for(var m=0;m<a.dataSeriesIndexes.length;m++){var s=a.dataSeriesIndexes[m],u=this.data[s],q=u.dataPoints;if(0<q.length)for(var H=5<w&&u.bevelEnabled?!0:!1,l=0;l<q.length;l++)if(q[l].getTime?
d=q[l].x.getTime():d=q[l].x,!(d<a.axisX.dataInfo.viewPortMin||d>a.axisX.dataInfo.viewPortMax)&&!y(q[l].y)&&q[l].y.length&&"number"===typeof q[l].y[0]&&"number"===typeof q[l].y[1]&&"number"===typeof q[l].y[2]&&"number"===typeof q[l].y[3]){t=a.axisX.convertValueToPixel(d);k=a.axisY.convertValueToPixel(q[l].y[0]);r=a.axisY.convertValueToPixel(q[l].y[1]);p=a.axisY.convertValueToPixel(q[l].y[2]);n=a.axisY.convertValueToPixel(q[l].y[3]);var x=t-w/2<<0,B=x+w<<0,g=u.options.fallingColor?u.fallingColor:u._colorSet[0],
e=q[l].color?q[l].color:u._colorSet[0],A=Math.round(Math.max(1,0.15*w)),z=0===A%2?0:0.5,M=u.dataPointIds[l];this._eventManager.objectMap[M]={id:M,objectType:"dataPoint",dataSeriesIndex:s,dataPointIndex:l,x1:x,y1:k,x2:B,y2:r,x3:t,y3:p,x4:t,y4:n,borderThickness:A,color:e};b.strokeStyle=e;b.beginPath();b.lineWidth=A;c.lineWidth=Math.max(A,4);"candlestick"===u.type?(b.moveTo(t-z,r),b.lineTo(t-z,Math.min(k,n)),b.stroke(),b.moveTo(t-z,Math.max(k,n)),b.lineTo(t-z,p),b.stroke(),W(b,x,Math.min(k,n),B,Math.max(k,
n),q[l].y[0]<=q[l].y[3]?u.risingColor:g,A,e,H,H,!1,!1,u.fillOpacity),v&&(e=S(M),c.strokeStyle=e,c.moveTo(t-z,r),c.lineTo(t-z,Math.min(k,n)),c.stroke(),c.moveTo(t-z,Math.max(k,n)),c.lineTo(t-z,p),c.stroke(),W(c,x,Math.min(k,n),B,Math.max(k,n),e,0,null,!1,!1,!1,!1))):"ohlc"===u.type&&(b.moveTo(t-z,r),b.lineTo(t-z,p),b.stroke(),b.beginPath(),b.moveTo(t,k),b.lineTo(x,k),b.stroke(),b.beginPath(),b.moveTo(t,n),b.lineTo(B,n),b.stroke(),v&&(e=S(M),c.strokeStyle=e,c.moveTo(t-z,r),c.lineTo(t-z,p),c.stroke(),
c.beginPath(),c.moveTo(t,k),c.lineTo(x,k),c.stroke(),c.beginPath(),c.moveTo(t,n),c.lineTo(B,n),c.stroke()));(q[l].indexLabel||u.indexLabel||q[l].indexLabelFormatter||u.indexLabelFormatter)&&this._indexLabels.push({chartType:u.type,dataPoint:q[l],dataSeries:u,point:{x:x+(B-x)/2,y:a.axisY.reversed?p:r},direction:1,bounds:{x1:x,y1:Math.min(r,p),x2:B,y2:Math.max(r,p)},color:e})}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&
b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(h.x1,h.y1,h.width,h.height),c.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:I.fadeInAnimation,easingFunction:I.easing.easeInQuad,animationBase:0}}};s.prototype.renderBoxAndWhisker=function(a){var f=a.targetCanvasCtx||
this.plotArea.ctx,b=v?this._preRenderCtx:f,c=this._eventManager.ghostCtx;if(!(0>=a.dataSeriesIndexes.length)){var e=null,g=this.plotArea,h=0,l,t,k,r,p,n,d,e=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,h=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.015*this.width,w=a.axisX.dataInfo.minDiff;isFinite(w)||(w=0.3*Math.abs(a.axisX.range));w=this.dataPointWidth?this.dataPointWidth:0.7*g.width*(a.axisX.logarithmic?Math.log(w)/
Math.log(a.axisX.range):Math.abs(w)/Math.abs(a.axisX.range))<<0;this.dataPointMaxWidth&&e>h&&(e=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,h));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&h<e)&&(h=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,e));w<e&&(w=e);w>h&&(w=h);b.save();v&&c.save();b.beginPath();b.rect(g.x1,g.y1,g.width,g.height);b.clip();v&&(c.beginPath(),c.rect(g.x1,g.y1,g.width,g.height),c.clip());for(var m=!1,m=!!a.axisY.reversed,s=0;s<a.dataSeriesIndexes.length;s++){var u=
a.dataSeriesIndexes[s],q=this.data[u],H=q.dataPoints;if(0<H.length)for(var x=5<w&&q.bevelEnabled?!0:!1,h=0;h<H.length;h++)if(H[h].getTime?d=H[h].x.getTime():d=H[h].x,!(d<a.axisX.dataInfo.viewPortMin||d>a.axisX.dataInfo.viewPortMax)&&!y(H[h].y)&&H[h].y.length&&"number"===typeof H[h].y[0]&&"number"===typeof H[h].y[1]&&"number"===typeof H[h].y[2]&&"number"===typeof H[h].y[3]&&"number"===typeof H[h].y[4]&&5===H[h].y.length){l=a.axisX.convertValueToPixel(d);t=a.axisY.convertValueToPixel(H[h].y[0]);k=a.axisY.convertValueToPixel(H[h].y[1]);
r=a.axisY.convertValueToPixel(H[h].y[2]);p=a.axisY.convertValueToPixel(H[h].y[3]);n=a.axisY.convertValueToPixel(H[h].y[4]);var B=l-w/2<<0,A=l+w/2<<0,e=H[h].color?H[h].color:q._colorSet[0],z=Math.round(Math.max(1,0.15*w)),M=0===z%2?0:0.5,K=H[h].whiskerColor?H[h].whiskerColor:H[h].color?q.whiskerColor?q.whiskerColor:H[h].color:q.whiskerColor?q.whiskerColor:e,J="number"===typeof H[h].whiskerThickness?H[h].whiskerThickness:"number"===typeof q.options.whiskerThickness?q.whiskerThickness:z,ca=H[h].whiskerDashType?
H[h].whiskerDashType:q.whiskerDashType,da=y(H[h].whiskerLength)?y(q.options.whiskerLength)?w:q.whiskerLength:H[h].whiskerLength,da="number"===typeof da?0>=da?0:da>=w?w:da:"string"===typeof da?parseInt(da)*w/100>w?w:parseInt(da)*w/100:w,aa=1===Math.round(J)%2?0.5:0,xa=H[h].stemColor?H[h].stemColor:H[h].color?q.stemColor?q.stemColor:H[h].color:q.stemColor?q.stemColor:e,na="number"===typeof H[h].stemThickness?H[h].stemThickness:"number"===typeof q.options.stemThickness?q.stemThickness:z,E=1===Math.round(na)%
2?0.5:0,C=H[h].stemDashType?H[h].stemDashType:q.stemDashType,Q=H[h].lineColor?H[h].lineColor:H[h].color?q.lineColor?q.lineColor:H[h].color:q.lineColor?q.lineColor:e,P="number"===typeof H[h].lineThickness?H[h].lineThickness:"number"===typeof q.options.lineThickness?q.lineThickness:z,R=H[h].lineDashType?H[h].lineDashType:q.lineDashType,L=1===Math.round(P)%2?0.5:0,O=q.upperBoxColor,V=q.lowerBoxColor,sa=y(q.options.fillOpacity)?1:q.fillOpacity,N=q.dataPointIds[h];this._eventManager.objectMap[N]={id:N,
objectType:"dataPoint",dataSeriesIndex:u,dataPointIndex:h,x1:B,y1:t,x2:A,y2:k,x3:l,y3:r,x4:l,y4:p,y5:n,borderThickness:z,color:e,stemThickness:na,stemColor:xa,whiskerThickness:J,whiskerLength:da,whiskerColor:K,lineThickness:P,lineColor:Q};b.save();0<na&&(b.beginPath(),b.strokeStyle=xa,b.lineWidth=na,b.setLineDash&&b.setLineDash(G(C,na)),b.moveTo(l-E,k),b.lineTo(l-E,t),b.stroke(),b.moveTo(l-E,p),b.lineTo(l-E,r),b.stroke());b.restore();c.lineWidth=Math.max(z,4);b.beginPath();W(b,B,Math.min(n,k),A,Math.max(k,
n),V,0,e,m?x:!1,m?!1:x,!1,!1,sa);b.beginPath();W(b,B,Math.min(r,n),A,Math.max(n,r),O,0,e,m?!1:x,m?x:!1,!1,!1,sa);b.beginPath();b.lineWidth=z;b.strokeStyle=e;b.rect(B-M,Math.min(k,r)-M,A-B+2*M,Math.max(k,r)-Math.min(k,r)+2*M);b.stroke();b.save();0<P&&(b.beginPath(),b.globalAlpha=1,b.setLineDash&&b.setLineDash(G(R,P)),b.strokeStyle=Q,b.lineWidth=P,b.moveTo(B,n-L),b.lineTo(A,n-L),b.stroke());b.restore();b.save();0<J&&(b.beginPath(),b.setLineDash&&b.setLineDash(G(ca,J)),b.strokeStyle=K,b.lineWidth=J,
b.moveTo(l-da/2<<0,p-aa),b.lineTo(l+da/2<<0,p-aa),b.stroke(),b.moveTo(l-da/2<<0,t+aa),b.lineTo(l+da/2<<0,t+aa),b.stroke());b.restore();v&&(e=S(N),c.strokeStyle=e,c.lineWidth=na,0<na&&(c.moveTo(l-M-E,k),c.lineTo(l-M-E,Math.max(t,p)),c.stroke(),c.moveTo(l-M-E,Math.min(t,p)),c.lineTo(l-M-E,r),c.stroke()),W(c,B,Math.max(k,r),A,Math.min(k,r),e,0,null,!1,!1,!1,!1),0<J&&(c.beginPath(),c.lineWidth=J,c.moveTo(l+da/2,p-aa),c.lineTo(l-da/2,p-aa),c.stroke(),c.moveTo(l+da/2,t+aa),c.lineTo(l-da/2,t+aa),c.stroke()));
(H[h].indexLabel||q.indexLabel||H[h].indexLabelFormatter||q.indexLabelFormatter)&&this._indexLabels.push({chartType:q.type,dataPoint:H[h],dataSeries:q,point:{x:B+(A-B)/2,y:a.axisY.reversed?t:p},direction:1,bounds:{x1:B,y1:Math.min(t,p),x2:A,y2:Math.max(t,p)},color:e})}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,
0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(g.x1,g.y1,g.width,g.height),c.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:I.fadeInAnimation,easingFunction:I.easing.easeInQuad,animationBase:0}}};s.prototype.renderRangeColumn=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=null,e=this.plotArea,
g=0,h,l,t,g=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1;h=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.03*this.width;var k=a.axisX.dataInfo.minDiff;isFinite(k)||(k=0.3*Math.abs(a.axisX.range));k=this.dataPointWidth?this.dataPointWidth:0.9*(e.width*(a.axisX.logarithmic?Math.log(k)/Math.log(a.axisX.range):Math.abs(k)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&g>h&&(g=Math.min(this.dataPointWidth?
this.dataPointWidth:Infinity,h));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&h<g)&&(h=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,g));k<g&&(k=g);k>h&&(k=h);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());for(var r=0;r<a.dataSeriesIndexes.length;r++){var p=a.dataSeriesIndexes[r],n=this.data[p],
d=n.dataPoints;if(0<d.length)for(var w=5<k&&n.bevelEnabled?!0:!1,g=0;g<d.length;g++)if(d[g].getTime?t=d[g].x.getTime():t=d[g].x,!(t<a.axisX.dataInfo.viewPortMin||t>a.axisX.dataInfo.viewPortMax)&&!y(d[g].y)&&d[g].y.length&&"number"===typeof d[g].y[0]&&"number"===typeof d[g].y[1]){c=a.axisX.convertValueToPixel(t);h=a.axisY.convertValueToPixel(d[g].y[0]);l=a.axisY.convertValueToPixel(d[g].y[1]);var m=a.axisX.reversed?c+a.plotType.totalDataSeries*k/2-(a.previousDataSeriesCount+r)*k<<0:c-a.plotType.totalDataSeries*
k/2+(a.previousDataSeriesCount+r)*k<<0,q=a.axisX.reversed?m-k<<0:m+k<<0,c=d[g].color?d[g].color:n._colorSet[g%n._colorSet.length];if(h>l){var u=h;h=l;l=u}u=n.dataPointIds[g];this._eventManager.objectMap[u]={id:u,objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:g,x1:m,y1:h,x2:q,y2:l};W(b,m,h,q,l,c,0,c,w,w,!1,!1,n.fillOpacity);c=S(u);v&&W(this._eventManager.ghostCtx,m,h,q,l,c,0,null,!1,!1,!1,!1);if(d[g].indexLabel||n.indexLabel||d[g].indexLabelFormatter||n.indexLabelFormatter)this._indexLabels.push({chartType:"rangeColumn",
dataPoint:d[g],dataSeries:n,indexKeyword:0,point:{x:m+(q-m)/2,y:d[g].y[1]>=d[g].y[0]?l:h},direction:d[g].y[1]>=d[g].y[0]?-1:1,bounds:{x1:m,y1:Math.min(h,l),x2:q,y2:Math.max(h,l)},color:c}),this._indexLabels.push({chartType:"rangeColumn",dataPoint:d[g],dataSeries:n,indexKeyword:1,point:{x:m+(q-m)/2,y:d[g].y[1]>=d[g].y[0]?h:l},direction:d[g].y[1]>=d[g].y[0]?1:-1,bounds:{x1:m,y1:Math.min(h,l),x2:q,y2:Math.max(h,l)},color:c})}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation=
"source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:I.fadeInAnimation,easingFunction:I.easing.easeInQuad,animationBase:0}}};s.prototype.renderError=
function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f,c=a.axisY._position?"left"===a.axisY._position||"right"===a.axisY._position?!1:!0:!1;if(!(0>=a.dataSeriesIndexes.length)){var e=null,g=!1,h=this.plotArea,l=0,t,k,r,p,n,d,w,m=a.axisX.dataInfo.minDiff;isFinite(m)||(m=0.3*Math.abs(a.axisX.range));b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(h.x1,h.y1,h.width,h.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(h.x1,
h.y1,h.width,h.height),this._eventManager.ghostCtx.clip());for(var q=0,u=0;u<this.data.length;u++)!this.data[u].type.match(/(bar|column)/ig)||!this.data[u].visible||this.data[u].type.match(/(stacked)/ig)&&q||q++;for(var s=0;s<a.dataSeriesIndexes.length;s++){var H=a.dataSeriesIndexes[s],x=this.data[H],B=x.dataPoints,A=y(x._linkedSeries)?!1:x._linkedSeries.type.match(/(bar|column)/ig)&&x._linkedSeries.visible?!0:!1,C=0;if(A)for(e=x._linkedSeries.id,u=0;u<e;u++)!this.data[u].type.match(/(bar|column)/ig)||
!this.data[u].visible||this.data[u].type.match(/(stacked)/ig)&&C||(this.data[u].type.match(/(range)/ig)&&(g=!0),C++);e=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1;l=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:c?Math.min(0.15*this.height,0.9*(this.plotArea.height/(A?q:1)))<<0:0.3*this.width;g&&(l=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:c?Math.min(0.15*this.height,0.9*
(this.plotArea.height/(A?q:1)))<<0:0.03*this.width);u=this.options.dataPointWidth?this.dataPointWidth:0.9*((c?h.height:h.width)*(a.axisX.logarithmic?Math.log(m)/Math.log(a.axisX.range):Math.abs(m)/Math.abs(a.axisX.range))/(A?q:1))<<0;this.dataPointMaxWidth&&e>l&&(e=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,l));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&l<e)&&(l=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,e));u<e&&(u=e);u>l&&(u=l);if(0<B.length)for(var M=x._colorSet,
l=0;l<B.length;l++){var e=x.lineColor=x.options.color?x.options.color:M[0],K={color:B[l].whiskerColor?B[l].whiskerColor:B[l].color?x.whiskerColor?x.whiskerColor:B[l].color:x.whiskerColor?x.whiskerColor:e,thickness:y(B[l].whiskerThickness)?x.whiskerThickness:B[l].whiskerThickness,dashType:B[l].whiskerDashType?B[l].whiskerDashType:x.whiskerDashType,length:y(B[l].whiskerLength)?y(x.options.whiskerLength)?u:x.options.whiskerLength:B[l].whiskerLength,trimLength:y(B[l].whiskerLength)?y(x.options.whiskerLength)?
50:0:0};K.length="number"===typeof K.length?0>=K.length?0:K.length>=u?u:K.length:"string"===typeof K.length?parseInt(K.length)*u/100>u?u:parseInt(K.length)*u/100>u:u;K.thickness="number"===typeof K.thickness?0>K.thickness?0:Math.round(K.thickness):2;var J={color:B[l].stemColor?B[l].stemColor:B[l].color?x.stemColor?x.stemColor:B[l].color:x.stemColor?x.stemColor:e,thickness:B[l].stemThickness?B[l].stemThickness:x.stemThickness,dashType:B[l].stemDashType?B[l].stemDashType:x.stemDashType};J.thickness=
"number"===typeof J.thickness?0>J.thickness?0:Math.round(J.thickness):2;B[l].getTime?w=B[l].x.getTime():w=B[l].x;if(!(w<a.axisX.dataInfo.viewPortMin||w>a.axisX.dataInfo.viewPortMax)&&!y(B[l].y)&&B[l].y.length&&"number"===typeof B[l].y[0]&&"number"===typeof B[l].y[1]){var ca=a.axisX.convertValueToPixel(w);c?k=ca:t=ca;ca=a.axisY.convertValueToPixel(B[l].y[0]);c?r=ca:n=ca;ca=a.axisY.convertValueToPixel(B[l].y[1]);c?p=ca:d=ca;c?(n=a.axisX.reversed?k+(A?q:1)*u/2-(A?C-1:0)*u<<0:k-(A?q:1)*u/2+(A?C-1:0)*
u<<0,d=a.axisX.reversed?n-u<<0:n+u<<0):(r=a.axisX.reversed?t+(A?q:1)*u/2-(A?C-1:0)*u<<0:t-(A?q:1)*u/2+(A?C-1:0)*u<<0,p=a.axisX.reversed?r-u<<0:r+u<<0);!c&&n>d&&(ca=n,n=d,d=ca);c&&r>p&&(ca=r,r=p,p=ca);ca=x.dataPointIds[l];this._eventManager.objectMap[ca]={id:ca,objectType:"dataPoint",dataSeriesIndex:H,dataPointIndex:l,x1:Math.min(r,p),y1:Math.min(n,d),x2:Math.max(p,r),y2:Math.max(d,n),isXYSwapped:c,stemProperties:J,whiskerProperties:K};z(b,Math.min(r,p),Math.min(n,d),Math.max(p,r),Math.max(d,n),e,
K,J,c);v&&z(this._eventManager.ghostCtx,r,n,p,d,e,K,J,c);if(B[l].indexLabel||x.indexLabel||B[l].indexLabelFormatter||x.indexLabelFormatter)this._indexLabels.push({chartType:"error",dataPoint:B[l],dataSeries:x,indexKeyword:0,point:{x:c?B[l].y[1]>=B[l].y[0]?r:p:r+(p-r)/2,y:c?n+(d-n)/2:B[l].y[1]>=B[l].y[0]?d:n},direction:B[l].y[1]>=B[l].y[0]?-1:1,bounds:{x1:c?Math.min(r,p):r,y1:c?n:Math.min(n,d),x2:c?Math.max(r,p):p,y2:c?d:Math.max(n,d)},color:e,axisSwapped:c}),this._indexLabels.push({chartType:"error",
dataPoint:B[l],dataSeries:x,indexKeyword:1,point:{x:c?B[l].y[1]>=B[l].y[0]?p:r:r+(p-r)/2,y:c?n+(d-n)/2:B[l].y[1]>=B[l].y[0]?n:d},direction:B[l].y[1]>=B[l].y[0]?1:-1,bounds:{x1:c?Math.min(r,p):r,y1:c?n:Math.min(n,d),x2:c?Math.max(r,p):p,y2:c?d:Math.max(n,d)},color:e,axisSwapped:c})}}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,
0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(h.x1,h.y1,h.width,h.height),this._eventManager.ghostCtx.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:I.fadeInAnimation,easingFunction:I.easing.easeInQuad,animationBase:0}}};s.prototype.renderRangeBar=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=
null,e=this.plotArea,g=0,h,l,t,k,g=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1;h=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.height,0.9*(this.plotArea.height/a.plotType.totalDataSeries))<<0;var r=a.axisX.dataInfo.minDiff;isFinite(r)||(r=0.3*Math.abs(a.axisX.range));r=this.dataPointWidth?this.dataPointWidth:0.9*(e.height*(a.axisX.logarithmic?Math.log(r)/Math.log(a.axisX.range):Math.abs(r)/Math.abs(a.axisX.range))/
a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&g>h&&(g=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,h));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&h<g)&&(h=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,g));r<g&&(r=g);r>h&&(r=h);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.clip());
for(var p=0;p<a.dataSeriesIndexes.length;p++){var n=a.dataSeriesIndexes[p],d=this.data[n],w=d.dataPoints;if(0<w.length){var m=5<r&&d.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(g=0;g<w.length;g++)if(w[g].getTime?k=w[g].x.getTime():k=w[g].x,!(k<a.axisX.dataInfo.viewPortMin||k>a.axisX.dataInfo.viewPortMax)&&!y(w[g].y)&&w[g].y.length&&"number"===typeof w[g].y[0]&&"number"===typeof w[g].y[1]){h=a.axisY.convertValueToPixel(w[g].y[0]);l=a.axisY.convertValueToPixel(w[g].y[1]);t=a.axisX.convertValueToPixel(k);
t=a.axisX.reversed?t+a.plotType.totalDataSeries*r/2-(a.previousDataSeriesCount+p)*r<<0:t-a.plotType.totalDataSeries*r/2+(a.previousDataSeriesCount+p)*r<<0;var q=a.axisX.reversed?t-r<<0:t+r<<0;h>l&&(c=h,h=l,l=c);c=w[g].color?w[g].color:d._colorSet[g%d._colorSet.length];W(b,h,t,l,q,c,0,null,m,!1,!1,!1,d.fillOpacity);c=d.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:g,x1:h,y1:t,x2:l,y2:q};c=S(c);v&&W(this._eventManager.ghostCtx,h,t,l,q,
c,0,null,!1,!1,!1,!1);if(w[g].indexLabel||d.indexLabel||w[g].indexLabelFormatter||d.indexLabelFormatter)this._indexLabels.push({chartType:"rangeBar",dataPoint:w[g],dataSeries:d,indexKeyword:0,point:{x:w[g].y[1]>=w[g].y[0]?h:l,y:t+(q-t)/2},direction:w[g].y[1]>=w[g].y[0]?-1:1,bounds:{x1:Math.min(h,l),y1:t,x2:Math.max(h,l),y2:q},color:c}),this._indexLabels.push({chartType:"rangeBar",dataPoint:w[g],dataSeries:d,indexKeyword:1,point:{x:w[g].y[1]>=w[g].y[0]?l:h,y:t+(q-t)/2},direction:w[g].y[1]>=w[g].y[0]?
1:-1,bounds:{x1:Math.min(h,l),y1:t,x2:Math.max(h,l),y2:q},color:c})}}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(e.x1,e.y1,e.width,e.height),this._eventManager.ghostCtx.restore());
b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:I.fadeInAnimation,easingFunction:I.easing.easeInQuad,animationBase:0}}};s.prototype.renderRangeArea=function(a){function f(){if(s){var a=null;0<r.lineThickness&&c.stroke();for(var b=t.length-1;0<=b;b--)a=t[b],c.lineTo(a.x,a.y),e.lineTo(a.x,a.y);c.closePath();c.globalAlpha=r.fillOpacity;c.fill();c.globalAlpha=1;e.fill();if(0<r.lineThickness){c.beginPath();c.moveTo(a.x,a.y);for(b=0;b<t.length;b++)a=t[b],c.lineTo(a.x,a.y);c.stroke()}c.beginPath();
c.moveTo(w,m);e.beginPath();e.moveTo(w,m);s={x:w,y:m};t=[];t.push({x:w,y:q})}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=v?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=this._eventManager.ghostCtx,g=[],h=this.plotArea;c.save();v&&e.save();c.beginPath();c.rect(h.x1,h.y1,h.width,h.height);c.clip();v&&(e.beginPath(),e.rect(h.x1,h.y1,h.width,h.height),e.clip());for(var l=0;l<a.dataSeriesIndexes.length;l++){var t=[],k=a.dataSeriesIndexes[l],r=this.data[k],p=r.dataPoints,g=r.id;this._eventManager.objectMap[g]=
{objectType:"dataSeries",dataSeriesIndex:k};g=S(g);e.fillStyle=g;var g=[],n=!0,d=0,w,m,q,u,s=null;if(0<p.length){var y=r._colorSet[d%r._colorSet.length],x=r.lineColor=r.options.lineColor||y,B=x;c.fillStyle=y;c.strokeStyle=x;c.lineWidth=r.lineThickness;var A="solid";if(c.setLineDash){var z=G(r.nullDataLineDashType,r.lineThickness),A=r.lineDashType,C=G(A,r.lineThickness);c.setLineDash(C)}for(var K=!0;d<p.length;d++)if(u=p[d].x.getTime?p[d].x.getTime():p[d].x,!(u<a.axisX.dataInfo.viewPortMin||u>a.axisX.dataInfo.viewPortMax&&
(!r.connectNullData||!K)))if(null!==p[d].y&&p[d].y.length&&"number"===typeof p[d].y[0]&&"number"===typeof p[d].y[1]){w=a.axisX.convertValueToPixel(u);m=a.axisY.convertValueToPixel(p[d].y[0]);q=a.axisY.convertValueToPixel(p[d].y[1]);n||K?(r.connectNullData&&!n?(c.setLineDash&&(r.options.nullDataLineDashType||A===r.lineDashType&&r.lineDashType!==r.nullDataLineDashType)&&(t[t.length-1].newLineDashArray=C,A=r.nullDataLineDashType,c.setLineDash(z)),c.lineTo(w,m),v&&e.lineTo(w,m),t.push({x:w,y:q})):(c.beginPath(),
c.moveTo(w,m),s={x:w,y:m},t=[],t.push({x:w,y:q}),v&&(e.beginPath(),e.moveTo(w,m))),K=n=!1):(c.lineTo(w,m),t.push({x:w,y:q}),v&&e.lineTo(w,m),0==d%250&&f());u=r.dataPointIds[d];this._eventManager.objectMap[u]={id:u,objectType:"dataPoint",dataSeriesIndex:k,dataPointIndex:d,x1:w,y1:m,y2:q};d<p.length-1&&(B!==(p[d].lineColor||x)||A!==(p[d].lineDashType||r.lineDashType))&&(f(),B=p[d].lineColor||x,t[t.length-1].newStrokeStyle=B,c.strokeStyle=B,c.setLineDash&&(p[d].lineDashType?(A=p[d].lineDashType,t[t.length-
1].newLineDashArray=G(A,r.lineThickness),c.setLineDash(t[t.length-1].newLineDashArray)):(A=r.lineDashType,t[t.length-1].newLineDashArray=C,c.setLineDash(C))));if(0!==p[d].markerSize&&(0<p[d].markerSize||0<r.markerSize)){var J=r.getMarkerProperties(d,w,q,c);g.push(J);var ca=S(u);v&&g.push({x:w,y:q,ctx:e,type:J.type,size:J.size,color:ca,borderColor:ca,borderThickness:J.borderThickness});J=r.getMarkerProperties(d,w,m,c);g.push(J);ca=S(u);v&&g.push({x:w,y:m,ctx:e,type:J.type,size:J.size,color:ca,borderColor:ca,
borderThickness:J.borderThickness})}if(p[d].indexLabel||r.indexLabel||p[d].indexLabelFormatter||r.indexLabelFormatter)this._indexLabels.push({chartType:"rangeArea",dataPoint:p[d],dataSeries:r,indexKeyword:0,point:{x:w,y:m},direction:p[d].y[0]>p[d].y[1]===a.axisY.reversed?-1:1,color:y}),this._indexLabels.push({chartType:"rangeArea",dataPoint:p[d],dataSeries:r,indexKeyword:1,point:{x:w,y:q},direction:p[d].y[0]>p[d].y[1]===a.axisY.reversed?1:-1,color:y})}else K||n||f(),K=!0;f();ia.drawMarkers(g)}}v&&
(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.clearRect(h.x1,h.y1,h.width,h.height),this._eventManager.ghostCtx.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:I.xClipAnimation,
easingFunction:I.easing.linear,animationBase:0}}};s.prototype.renderRangeSplineArea=function(a){function f(a,b){var d=x(m,2);if(0<d.length){if(0<k.lineThickness){c.strokeStyle=b;c.setLineDash&&c.setLineDash(a);c.beginPath();c.moveTo(d[0].x,d[0].y);for(var f=0;f<d.length-3;f+=3){if(d[f].newStrokeStyle||d[f].newLineDashArray)c.stroke(),c.beginPath(),c.moveTo(d[f].x,d[f].y),d[f].newStrokeStyle&&(c.strokeStyle=d[f].newStrokeStyle),d[f].newLineDashArray&&c.setLineDash(d[f].newLineDashArray);c.bezierCurveTo(d[f+
1].x,d[f+1].y,d[f+2].x,d[f+2].y,d[f+3].x,d[f+3].y)}c.stroke()}c.beginPath();c.moveTo(d[0].x,d[0].y);v&&(e.beginPath(),e.moveTo(d[0].x,d[0].y));for(f=0;f<d.length-3;f+=3)c.bezierCurveTo(d[f+1].x,d[f+1].y,d[f+2].x,d[f+2].y,d[f+3].x,d[f+3].y),v&&e.bezierCurveTo(d[f+1].x,d[f+1].y,d[f+2].x,d[f+2].y,d[f+3].x,d[f+3].y);d=x(q,2);c.lineTo(q[q.length-1].x,q[q.length-1].y);for(f=d.length-1;2<f;f-=3)c.bezierCurveTo(d[f-1].x,d[f-1].y,d[f-2].x,d[f-2].y,d[f-3].x,d[f-3].y),v&&e.bezierCurveTo(d[f-1].x,d[f-1].y,d[f-
2].x,d[f-2].y,d[f-3].x,d[f-3].y);c.closePath();c.globalAlpha=k.fillOpacity;c.fill();v&&(e.closePath(),e.fill());c.globalAlpha=1;if(0<k.lineThickness){c.strokeStyle=b;c.setLineDash&&c.setLineDash(a);c.beginPath();c.moveTo(d[0].x,d[0].y);for(var g=f=0;f<d.length-3;f+=3,g++){if(m[g].newStrokeStyle||m[g].newLineDashArray)c.stroke(),c.beginPath(),c.moveTo(d[f].x,d[f].y),m[g].newStrokeStyle&&(c.strokeStyle=m[g].newStrokeStyle),m[g].newLineDashArray&&c.setLineDash(m[g].newLineDashArray);c.bezierCurveTo(d[f+
1].x,d[f+1].y,d[f+2].x,d[f+2].y,d[f+3].x,d[f+3].y)}c.stroke()}c.beginPath()}}var b=a.targetCanvasCtx||this.plotArea.ctx,c=v?this._preRenderCtx:b;if(!(0>=a.dataSeriesIndexes.length)){var e=this._eventManager.ghostCtx,g=[],h=this.plotArea;c.save();v&&e.save();c.beginPath();c.rect(h.x1,h.y1,h.width,h.height);c.clip();v&&(e.beginPath(),e.rect(h.x1,h.y1,h.width,h.height),e.clip());for(var l=0;l<a.dataSeriesIndexes.length;l++){var t=a.dataSeriesIndexes[l],k=this.data[t],r=k.dataPoints,g=k.id;this._eventManager.objectMap[g]=
{objectType:"dataSeries",dataSeriesIndex:t};g=S(g);e.fillStyle=g;var g=[],p=0,n,d,w,m=[],q=[];if(0<r.length){var u=k._colorSet[p%k._colorSet.length],s=k.lineColor=k.options.lineColor||u,y=s;c.fillStyle=u;c.lineWidth=k.lineThickness;var z="solid",B;if(c.setLineDash){var A=G(k.nullDataLineDashType,k.lineThickness),z=k.lineDashType;B=G(z,k.lineThickness)}for(d=!1;p<r.length;p++)if(n=r[p].x.getTime?r[p].x.getTime():r[p].x,!(n<a.axisX.dataInfo.viewPortMin||n>a.axisX.dataInfo.viewPortMax&&(!k.connectNullData||
!d)))if(null!==r[p].y&&r[p].y.length&&"number"===typeof r[p].y[0]&&"number"===typeof r[p].y[1]){n=a.axisX.convertValueToPixel(n);d=a.axisY.convertValueToPixel(r[p].y[0]);w=a.axisY.convertValueToPixel(r[p].y[1]);var C=k.dataPointIds[p];this._eventManager.objectMap[C]={id:C,objectType:"dataPoint",dataSeriesIndex:t,dataPointIndex:p,x1:n,y1:d,y2:w};m[m.length]={x:n,y:d};q[q.length]={x:n,y:w};p<r.length-1&&(y!==(r[p].lineColor||s)||z!==(r[p].lineDashType||k.lineDashType))&&(y=r[p].lineColor||s,m[m.length-
1].newStrokeStyle=y,c.setLineDash&&(r[p].lineDashType?(z=r[p].lineDashType,m[m.length-1].newLineDashArray=G(z,k.lineThickness)):(z=k.lineDashType,m[m.length-1].newLineDashArray=B)));if(0!==r[p].markerSize&&(0<r[p].markerSize||0<k.markerSize)){var M=k.getMarkerProperties(p,n,d,c);g.push(M);var K=S(C);v&&g.push({x:n,y:d,ctx:e,type:M.type,size:M.size,color:K,borderColor:K,borderThickness:M.borderThickness});M=k.getMarkerProperties(p,n,w,c);g.push(M);K=S(C);v&&g.push({x:n,y:w,ctx:e,type:M.type,size:M.size,
color:K,borderColor:K,borderThickness:M.borderThickness})}if(r[p].indexLabel||k.indexLabel||r[p].indexLabelFormatter||k.indexLabelFormatter)this._indexLabels.push({chartType:"rangeSplineArea",dataPoint:r[p],dataSeries:k,indexKeyword:0,point:{x:n,y:d},direction:r[p].y[0]<=r[p].y[1]?-1:1,color:u}),this._indexLabels.push({chartType:"rangeSplineArea",dataPoint:r[p],dataSeries:k,indexKeyword:1,point:{x:n,y:w},direction:r[p].y[0]<=r[p].y[1]?1:-1,color:u});d=!1}else 0<p&&!d&&(k.connectNullData?c.setLineDash&&
(0<m.length&&(k.options.nullDataLineDashType||!r[p-1].lineDashType))&&(m[m.length-1].newLineDashArray=A,z=k.nullDataLineDashType):(f(B,s),m=[],q=[])),d=!0;f(B,s);ia.drawMarkers(g)}}v&&(b.drawImage(this._preRenderCanvas,0,0,this.width,this.height),c.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&c.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&c.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
0,0,this.width,this.height),c.clearRect(h.x1,h.y1,h.width,h.height),this._eventManager.ghostCtx.restore());c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:I.xClipAnimation,easingFunction:I.easing.linear,animationBase:0}}};s.prototype.renderWaterfall=function(a){var f=a.targetCanvasCtx||this.plotArea.ctx,b=v?this._preRenderCtx:f;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx,e=null,g=this.plotArea,h=0,l,t,k,r,p=a.axisY.convertValueToPixel(a.axisY.logarithmic?
a.axisY.viewportMinimum:0),h=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1;t=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.width,0.9*(this.plotArea.width/a.plotType.totalDataSeries))<<0;var n=a.axisX.dataInfo.minDiff;isFinite(n)||(n=0.3*Math.abs(a.axisX.range));n=this.dataPointWidth?this.dataPointWidth:0.6*(g.width*(a.axisX.logarithmic?Math.log(n)/Math.log(a.axisX.range):Math.abs(n)/Math.abs(a.axisX.range))/
a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&h>t&&(h=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,t));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&t<h)&&(t=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,h));n<h&&(n=h);n>t&&(n=t);b.save();v&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(g.x1,g.y1,g.width,g.height);b.clip();v&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(g.x1,g.y1,g.width,g.height),this._eventManager.ghostCtx.clip());
for(var d=0;d<a.dataSeriesIndexes.length;d++){var w=a.dataSeriesIndexes[d],m=this.data[w],q=m.dataPoints,e=m._colorSet[0];m.risingColor=m.options.risingColor?m.options.risingColor:e;m.fallingColor=m.options.fallingColor?m.options.fallingColor:"#e40a0a";var u="number"===typeof m.options.lineThickness?Math.round(m.lineThickness):1,s=1===Math.round(u)%2?-0.5:0;if(0<q.length)for(var y=5<n&&m.bevelEnabled?!0:!1,x=!1,B=null,A=null,h=0;h<q.length;h++)if(q[h].getTime?r=q[h].x.getTime():r=q[h].x,"number"!==
typeof q[h].y){if(0<h&&!x&&m.connectNullData)var z=m.options.nullDataLineDashType||!q[h-1].lineDashType?m.nullDataLineDashType:q[h-1].lineDashType;x=!0}else{l=a.axisX.convertValueToPixel(r);t=0===m.dataPointEOs[h].cumulativeSum?p:a.axisY.convertValueToPixel(m.dataPointEOs[h].cumulativeSum);k=0===m.dataPointEOs[h].cumulativeSumYStartValue?p:a.axisY.convertValueToPixel(m.dataPointEOs[h].cumulativeSumYStartValue);l=a.axisX.reversed?l+a.plotType.totalDataSeries*n/2-(a.previousDataSeriesCount+d)*n<<0:
l-a.plotType.totalDataSeries*n/2+(a.previousDataSeriesCount+d)*n<<0;var C=a.axisX.reversed?l-n<<0:l+n<<0;t>k&&(e=t,t=k,k=e);a.axisY.reversed&&(e=t,t=k,k=e);e=m.dataPointIds[h];this._eventManager.objectMap[e]={id:e,objectType:"dataPoint",dataSeriesIndex:w,dataPointIndex:h,x1:l,y1:t,x2:C,y2:k};var K=q[h].color?q[h].color:-1<q[h].y?m.risingColor:m.fallingColor;W(b,l,t,C,k,K,0,K,y,y,!1,!1,m.fillOpacity);e=S(e);v&&W(this._eventManager.ghostCtx,l,t,C,k,e,0,null,!1,!1,!1,!1);var J,K=l;J="undefined"!==typeof q[h].isIntermediateSum&&
!0===q[h].isIntermediateSum||"undefined"!==typeof q[h].isCumulativeSum&&!0===q[h].isCumulativeSum?-1<q[h].y?t:k:-1<q[h].y?k:t;0<h&&B&&(!x||m.connectNullData)&&(x&&b.setLineDash&&b.setLineDash(G(z,u)),b.beginPath(),b.moveTo(B,A-s),b.lineTo(K,J-s),0<u&&b.stroke(),v&&(c.beginPath(),c.moveTo(B,A-s),c.lineTo(K,J-s),0<u&&c.stroke()));x=!1;B=C;A=-1<q[h].y?t:k;K=q[h].lineDashType?q[h].lineDashType:m.options.lineDashType?m.options.lineDashType:"shortDash";b.strokeStyle=q[h].lineColor?q[h].lineColor:m.options.lineColor?
m.options.lineColor:"#9e9e9e";b.lineWidth=u;b.setLineDash&&(K=G(K,u),b.setLineDash(K));(q[h].indexLabel||m.indexLabel||q[h].indexLabelFormatter||m.indexLabelFormatter)&&this._indexLabels.push({chartType:"waterfall",dataPoint:q[h],dataSeries:m,point:{x:l+(C-l)/2,y:0<=q[h].y?t:k},direction:0>q[h].y===a.axisY.reversed?1:-1,bounds:{x1:l,y1:Math.min(t,k),x2:C,y2:Math.max(t,k)},color:e})}}v&&(f.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.globalCompositeOperation="source-atop",a.axisX.maskCanvas&&
b.drawImage(a.axisX.maskCanvas,0,0,this.width,this.height),a.axisY.maskCanvas&&b.drawImage(a.axisY.maskCanvas,0,0,this.width,this.height),this._breaksCanvasCtx&&this._breaksCanvasCtx.drawImage(this._preRenderCanvas,0,0,this.width,this.height),b.clearRect(g.x1,g.y1,g.width,g.height),this._eventManager.ghostCtx.restore());b.restore();return{source:f,dest:this.plotArea.ctx,animationCallback:I.fadeInAnimation,easingFunction:I.easing.easeInQuad,animationBase:0}}};var qa=function(a,f,b,c,e,g,h,l,t){if(!(0>
b)){"undefined"===typeof l&&(l=1);if(!v){var k=Number((h%(2*Math.PI)).toFixed(8));Number((g%(2*Math.PI)).toFixed(8))===k&&(h-=1E-4)}a.save();a.globalAlpha=l;"pie"===e?(a.beginPath(),a.moveTo(f.x,f.y),a.arc(f.x,f.y,b,g,h,!1),a.fillStyle=c,a.strokeStyle="white",a.lineWidth=2,a.closePath(),a.fill()):"doughnut"===e&&(a.beginPath(),a.arc(f.x,f.y,b,g,h,!1),0<=t&&a.arc(f.x,f.y,t*b,h,g,!0),a.closePath(),a.fillStyle=c,a.strokeStyle="white",a.lineWidth=2,a.fill());a.globalAlpha=1;a.restore()}};s.prototype.renderPie=
function(a){function f(){if(k&&r){for(var a=0,b=0,c=0,e=0,f=0;f<r.length;f++){var g=r[f],h=k.dataPointIds[f];d[f].id=h;d[f].objectType="dataPoint";d[f].dataPointIndex=f;d[f].dataSeriesIndex=0;var l=d[f],p={percent:null,total:null},m=null,p=t.getPercentAndTotal(k,g);if(k.indexLabelFormatter||g.indexLabelFormatter)m={chart:t.options,dataSeries:k,dataPoint:g,total:p.total,percent:p.percent};p=g.indexLabelFormatter?g.indexLabelFormatter(m):g.indexLabel?t.replaceKeywordsWithValue(g.indexLabel,g,k,f):k.indexLabelFormatter?
k.indexLabelFormatter(m):k.indexLabel?t.replaceKeywordsWithValue(k.indexLabel,g,k,f):g.label?g.label:"";t._eventManager.objectMap[h]=l;l.center={x:x.x,y:x.y};l.y=g.y;l.radius=A;l.percentInnerRadius=M;l.indexLabelText=p;l.indexLabelPlacement=k.indexLabelPlacement;l.indexLabelLineColor=g.indexLabelLineColor?g.indexLabelLineColor:k.options.indexLabelLineColor?k.options.indexLabelLineColor:g.color?g.color:k._colorSet[f%k._colorSet.length];l.indexLabelLineThickness=y(g.indexLabelLineThickness)?k.indexLabelLineThickness:
g.indexLabelLineThickness;l.indexLabelLineDashType=g.indexLabelLineDashType?g.indexLabelLineDashType:k.indexLabelLineDashType;l.indexLabelFontColor=g.indexLabelFontColor?g.indexLabelFontColor:k.indexLabelFontColor;l.indexLabelFontStyle=g.indexLabelFontStyle?g.indexLabelFontStyle:k.indexLabelFontStyle;l.indexLabelFontWeight=g.indexLabelFontWeight?g.indexLabelFontWeight:k.indexLabelFontWeight;l.indexLabelFontSize=y(g.indexLabelFontSize)?k.indexLabelFontSize:g.indexLabelFontSize;l.indexLabelFontFamily=
g.indexLabelFontFamily?g.indexLabelFontFamily:k.indexLabelFontFamily;l.indexLabelBackgroundColor=g.indexLabelBackgroundColor?g.indexLabelBackgroundColor:k.options.indexLabelBackgroundColor?k.options.indexLabelBackgroundColor:k.indexLabelBackgroundColor;l.indexLabelMaxWidth=g.indexLabelMaxWidth?g.indexLabelMaxWidth:k.indexLabelMaxWidth?k.indexLabelMaxWidth:0.33*n.width;l.indexLabelWrap="undefined"!==typeof g.indexLabelWrap?g.indexLabelWrap:k.indexLabelWrap;l.startAngle=0===f?k.startAngle?k.startAngle/
180*Math.PI:0:d[f-1].endAngle;l.startAngle=(l.startAngle+2*Math.PI)%(2*Math.PI);l.endAngle=l.startAngle+2*Math.PI/z*Math.abs(g.y);g=(l.endAngle+l.startAngle)/2;g=(g+2*Math.PI)%(2*Math.PI);l.midAngle=g;if(l.midAngle>Math.PI/2-u&&l.midAngle<Math.PI/2+u){if(0===a||d[c].midAngle>l.midAngle)c=f;a++}else if(l.midAngle>3*Math.PI/2-u&&l.midAngle<3*Math.PI/2+u){if(0===b||d[e].midAngle>l.midAngle)e=f;b++}l.hemisphere=g>Math.PI/2&&g<=3*Math.PI/2?"left":"right";l.indexLabelTextBlock=new ka(t.plotArea.ctx,{fontSize:l.indexLabelFontSize,
fontFamily:l.indexLabelFontFamily,fontColor:l.indexLabelFontColor,fontStyle:l.indexLabelFontStyle,fontWeight:l.indexLabelFontWeight,horizontalAlign:"left",backgroundColor:l.indexLabelBackgroundColor,maxWidth:l.indexLabelMaxWidth,maxHeight:l.indexLabelWrap?5*l.indexLabelFontSize:1.5*l.indexLabelFontSize,text:l.indexLabelText,padding:0,textBaseline:"top"});l.indexLabelTextBlock.measureText()}h=g=0;p=!1;for(f=0;f<r.length;f++)l=d[(c+f)%r.length],1<a&&(l.midAngle>Math.PI/2-u&&l.midAngle<Math.PI/2+u)&&
(g<=a/2&&!p?(l.hemisphere="right",g++):(l.hemisphere="left",p=!0));p=!1;for(f=0;f<r.length;f++)l=d[(e+f)%r.length],1<b&&(l.midAngle>3*Math.PI/2-u&&l.midAngle<3*Math.PI/2+u)&&(h<=b/2&&!p?(l.hemisphere="left",h++):(l.hemisphere="right",p=!0))}}function b(a){var b=t.plotArea.ctx;b.clearRect(n.x1,n.y1,n.width,n.height);b.fillStyle=t.backgroundColor;b.fillRect(n.x1,n.y1,n.width,n.height);for(b=0;b<r.length;b++){var c=d[b].startAngle,e=d[b].endAngle;if(e>c){var f=0.07*A*Math.cos(d[b].midAngle),g=0.07*A*
Math.sin(d[b].midAngle),h=!1;if(r[b].exploded){if(1E-9<Math.abs(d[b].center.x-(x.x+f))||1E-9<Math.abs(d[b].center.y-(x.y+g)))d[b].center.x=x.x+f*a,d[b].center.y=x.y+g*a,h=!0}else if(0<Math.abs(d[b].center.x-x.x)||0<Math.abs(d[b].center.y-x.y))d[b].center.x=x.x+f*(1-a),d[b].center.y=x.y+g*(1-a),h=!0;h&&(f={},f.dataSeries=k,f.dataPoint=k.dataPoints[b],f.index=b,t.toolTip.highlightObjects([f]));qa(t.plotArea.ctx,d[b].center,d[b].radius,r[b].color?r[b].color:k._colorSet[b%k._colorSet.length],k.type,c,
e,k.fillOpacity,d[b].percentInnerRadius)}}a=t.plotArea.ctx;a.save();a.fillStyle="black";a.strokeStyle="grey";a.textBaseline="middle";a.lineJoin="round";for(b=b=0;b<r.length;b++)c=d[b],c.indexLabelText&&(c.indexLabelTextBlock.y-=c.indexLabelTextBlock.height/2,e=0,e="left"===c.hemisphere?"inside"!==k.indexLabelPlacement?-(c.indexLabelTextBlock.width+p):-c.indexLabelTextBlock.width/2:"inside"!==k.indexLabelPlacement?p:-c.indexLabelTextBlock.width/2,c.indexLabelTextBlock.x+=e,c.indexLabelTextBlock.render(!0),
c.indexLabelTextBlock.x-=e,c.indexLabelTextBlock.y+=c.indexLabelTextBlock.height/2,"inside"!==c.indexLabelPlacement&&0<c.indexLabelLineThickness&&(e=c.center.x+A*Math.cos(c.midAngle),f=c.center.y+A*Math.sin(c.midAngle),a.strokeStyle=c.indexLabelLineColor,a.lineWidth=c.indexLabelLineThickness,a.setLineDash&&a.setLineDash(G(c.indexLabelLineDashType,c.indexLabelLineThickness)),a.beginPath(),a.moveTo(e,f),a.lineTo(c.indexLabelTextBlock.x,c.indexLabelTextBlock.y),a.lineTo(c.indexLabelTextBlock.x+("left"===
c.hemisphere?-p:p),c.indexLabelTextBlock.y),a.stroke()),a.lineJoin="miter");a.save()}function c(a,b){var c=0,c=a.indexLabelTextBlock.y-a.indexLabelTextBlock.height/2,d=a.indexLabelTextBlock.y+a.indexLabelTextBlock.height/2,e=b.indexLabelTextBlock.y-b.indexLabelTextBlock.height/2,f=b.indexLabelTextBlock.y+b.indexLabelTextBlock.height/2;return c=b.indexLabelTextBlock.y>a.indexLabelTextBlock.y?e-d:c-f}function e(a){for(var b=null,e=1;e<r.length;e++)if(b=(a+e+d.length)%d.length,d[b].hemisphere!==d[a].hemisphere){b=
null;break}else if(d[b].indexLabelText&&b!==a&&(0>c(d[b],d[a])||("right"===d[a].hemisphere?d[b].indexLabelTextBlock.y>=d[a].indexLabelTextBlock.y:d[b].indexLabelTextBlock.y<=d[a].indexLabelTextBlock.y)))break;else b=null;return b}function g(a,b,f){f=(f||0)+1;if(1E3<f)return 0;b=b||0;var k=0,h=x.y-1*q,n=x.y+1*q;if(0<=a&&a<r.length){var l=d[a];if(0>b&&l.indexLabelTextBlock.y<h||0<b&&l.indexLabelTextBlock.y>n)return 0;var t=0,p=0,p=t=t=0;0>b?l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2>h&&
l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2+b<h&&(b=-(h-(l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2+b))):l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2<h&&l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2+b>n&&(b=l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2+b-n);b=l.indexLabelTextBlock.y+b;h=0;h="right"===l.hemisphere?x.x+Math.sqrt(Math.pow(q,2)-Math.pow(b-x.y,2)):x.x-Math.sqrt(Math.pow(q,2)-Math.pow(b-x.y,2));p=x.x+A*Math.cos(l.midAngle);t=x.y+A*Math.sin(l.midAngle);
t=Math.sqrt(Math.pow(h-p,2)+Math.pow(b-t,2));p=Math.acos(A/q);t=Math.acos((q*q+A*A-t*t)/(2*A*q));b=t<p?b-l.indexLabelTextBlock.y:0;h=null;for(n=1;n<r.length;n++)if(h=(a-n+d.length)%d.length,d[h].hemisphere!==d[a].hemisphere){h=null;break}else if(d[h].indexLabelText&&d[h].hemisphere===d[a].hemisphere&&h!==a&&(0>c(d[h],d[a])||("right"===d[a].hemisphere?d[h].indexLabelTextBlock.y<=d[a].indexLabelTextBlock.y:d[h].indexLabelTextBlock.y>=d[a].indexLabelTextBlock.y)))break;else h=null;p=h;t=e(a);n=h=0;0>
b?(n="right"===l.hemisphere?p:t,k=b,null!==n&&(p=-b,b=l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2-(d[n].indexLabelTextBlock.y+d[n].indexLabelTextBlock.height/2),b-p<m&&(h=-p,n=g(n,h,f+1),+n.toFixed(v)>+h.toFixed(v)&&(k=b>m?-(b-m):-(p-(n-h)))))):0<b&&(n="right"===l.hemisphere?t:p,k=b,null!==n&&(p=b,b=d[n].indexLabelTextBlock.y-d[n].indexLabelTextBlock.height/2-(l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2),b-p<m&&(h=p,n=g(n,h,f+1),+n.toFixed(v)<+h.toFixed(v)&&(k=b>m?b-m:p-(h-n)))));
k&&(f=l.indexLabelTextBlock.y+k,b=0,b="right"===l.hemisphere?x.x+Math.sqrt(Math.pow(q,2)-Math.pow(f-x.y,2)):x.x-Math.sqrt(Math.pow(q,2)-Math.pow(f-x.y,2)),l.midAngle>Math.PI/2-u&&l.midAngle<Math.PI/2+u?(h=(a-1+d.length)%d.length,h=d[h],a=d[(a+1+d.length)%d.length],"left"===l.hemisphere&&"right"===h.hemisphere&&b>h.indexLabelTextBlock.x?b=h.indexLabelTextBlock.x-15:"right"===l.hemisphere&&("left"===a.hemisphere&&b<a.indexLabelTextBlock.x)&&(b=a.indexLabelTextBlock.x+15)):l.midAngle>3*Math.PI/2-u&&
l.midAngle<3*Math.PI/2+u&&(h=(a-1+d.length)%d.length,h=d[h],a=d[(a+1+d.length)%d.length],"right"===l.hemisphere&&"left"===h.hemisphere&&b<h.indexLabelTextBlock.x?b=h.indexLabelTextBlock.x+15:"left"===l.hemisphere&&("right"===a.hemisphere&&b>a.indexLabelTextBlock.x)&&(b=a.indexLabelTextBlock.x-15)),l.indexLabelTextBlock.y=f,l.indexLabelTextBlock.x=b,l.indexLabelAngle=Math.atan2(l.indexLabelTextBlock.y-x.y,l.indexLabelTextBlock.x-x.x))}return k}function h(){var a=t.plotArea.ctx;a.fillStyle="grey";a.strokeStyle=
"grey";a.font="16px Arial";a.textBaseline="middle";for(var b=a=0,f=0,h=!0,b=0;10>b&&(1>b||0<f);b++){if(k.radius||!k.radius&&"undefined"!==typeof k.innerRadius&&null!==k.innerRadius&&A-f<=C)h=!1;h&&(A-=f);f=0;if("inside"!==k.indexLabelPlacement){q=A*s;for(a=0;a<r.length;a++){var l=d[a];l.indexLabelTextBlock.x=x.x+q*Math.cos(l.midAngle);l.indexLabelTextBlock.y=x.y+q*Math.sin(l.midAngle);l.indexLabelAngle=l.midAngle;l.radius=A;l.percentInnerRadius=M}for(var u,y,a=0;a<r.length;a++){var l=d[a],B=e(a);
if(null!==B){u=d[a];y=d[B];var z=0,z=c(u,y)-m;if(0>z){for(var G=y=0,ta=0;ta<r.length;ta++)ta!==a&&d[ta].hemisphere===l.hemisphere&&(d[ta].indexLabelTextBlock.y<l.indexLabelTextBlock.y?y++:G++);y=z/(y+G||1)*G;var G=-1*(z-y),I=ta=0;"right"===l.hemisphere?(ta=g(a,y),G=-1*(z-ta),I=g(B,G),+I.toFixed(v)<+G.toFixed(v)&&+ta.toFixed(v)<=+y.toFixed(v)&&g(a,-(G-I))):(ta=g(B,y),G=-1*(z-ta),I=g(a,G),+I.toFixed(v)<+G.toFixed(v)&&+ta.toFixed(v)<=+y.toFixed(v)&&g(B,-(G-I)))}}}}else for(a=0;a<r.length;a++)l=d[a],
q="pie"===k.type?0.7*A:0.8*A,B=x.x+q*Math.cos(l.midAngle),y=x.y+q*Math.sin(l.midAngle),l.indexLabelTextBlock.x=B,l.indexLabelTextBlock.y=y;for(a=0;a<r.length;a++)if(l=d[a],B=l.indexLabelTextBlock.measureText(),0!==B.height&&0!==B.width)B=B=0,"right"===l.hemisphere?(B=n.x2-(l.indexLabelTextBlock.x+l.indexLabelTextBlock.width+p),B*=-1):B=n.x1-(l.indexLabelTextBlock.x-l.indexLabelTextBlock.width-p),0<B&&(!h&&l.indexLabelText&&(y="right"===l.hemisphere?n.x2-l.indexLabelTextBlock.x:l.indexLabelTextBlock.x-
n.x1,0.3*l.indexLabelTextBlock.maxWidth>y?l.indexLabelText="":l.indexLabelTextBlock.maxWidth=0.85*y,0.3*l.indexLabelTextBlock.maxWidth<y&&(l.indexLabelTextBlock.x-="right"===l.hemisphere?2:-2)),Math.abs(l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2-x.y)<A||Math.abs(l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/2-x.y)<A)&&(B/=Math.abs(Math.cos(l.indexLabelAngle)),9<B&&(B*=0.3),B>f&&(f=B)),B=B=0,0<l.indexLabelAngle&&l.indexLabelAngle<Math.PI?(B=n.y2-(l.indexLabelTextBlock.y+l.indexLabelTextBlock.height/
2+5),B*=-1):B=n.y1-(l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2-5),0<B&&(!h&&l.indexLabelText&&(y=0<l.indexLabelAngle&&l.indexLabelAngle<Math.PI?-1:1,0===g(a,B*y)&&g(a,2*y)),Math.abs(l.indexLabelTextBlock.x-x.x)<A&&(B/=Math.abs(Math.sin(l.indexLabelAngle)),9<B&&(B*=0.3),B>f&&(f=B)));var L=function(a,b,c){for(var e=[],f=0;e.push(d[b]),b!==c;b=(b+1+r.length)%r.length);e.sort(function(a,b){return a.y-b.y});for(b=0;b<e.length;b++)if(c=e[b],f<0.7*a)f+=c.indexLabelTextBlock.height,c.indexLabelTextBlock.text=
"",c.indexLabelText="",c.indexLabelTextBlock.measureText();else break};(function(){for(var a=-1,b=-1,f=0,g=!1,h=0;h<r.length;h++)if(g=!1,u=d[h],u.indexLabelText){var k=e(h);if(null!==k){var l=d[k];z=0;z=c(u,l);var n;if(n=0>z){n=u.indexLabelTextBlock.x;var t=u.indexLabelTextBlock.y-u.indexLabelTextBlock.height/2,m=u.indexLabelTextBlock.y+u.indexLabelTextBlock.height/2,w=l.indexLabelTextBlock.y-l.indexLabelTextBlock.height/2,q=l.indexLabelTextBlock.x+l.indexLabelTextBlock.width,s=l.indexLabelTextBlock.y+
l.indexLabelTextBlock.height/2;n=u.indexLabelTextBlock.x+u.indexLabelTextBlock.width<l.indexLabelTextBlock.x-p||n>q+p||t>s+p||m<w-p?!1:!0}n?(0>a&&(a=h),k!==a&&(b=k,f+=-z),0===h%Math.max(r.length/10,3)&&(g=!0)):g=!0;g&&(0<f&&0<=a&&0<=b)&&(L(f,a,b),b=a=-1,f=0)}}0<f&&L(f,a,b)})()}}function l(){t.plotArea.layoutManager.reset();t.title&&(t.title.dockInsidePlotArea||"center"===t.title.horizontalAlign&&"center"===t.title.verticalAlign)&&t.title.render();if(t.subtitles)for(var a=0;a<t.subtitles.length;a++){var b=
t.subtitles[a];(b.dockInsidePlotArea||"center"===b.horizontalAlign&&"center"===b.verticalAlign)&&b.render()}t.legend&&(t.legend.dockInsidePlotArea||"center"===t.legend.horizontalAlign&&"center"===t.legend.verticalAlign)&&t.legend.render()}var t=this;if(!(0>=a.dataSeriesIndexes.length)){var k=this.data[a.dataSeriesIndexes[0]],r=k.dataPoints,p=10,n=this.plotArea,d=k.dataPointEOs,m=2,q,s=1.3,u=20/180*Math.PI,v=6,x={x:(n.x2+n.x1)/2,y:(n.y2+n.y1)/2},z=0;a=!1;for(var B=0;B<r.length;B++)z+=Math.abs(r[B].y),
!a&&("undefined"!==typeof r[B].indexLabel&&null!==r[B].indexLabel&&0<r[B].indexLabel.toString().length)&&(a=!0),!a&&("undefined"!==typeof r[B].label&&null!==r[B].label&&0<r[B].label.toString().length)&&(a=!0);if(0!==z){a=a||"undefined"!==typeof k.indexLabel&&null!==k.indexLabel&&0<k.indexLabel.toString().length;var A="inside"!==k.indexLabelPlacement&&a?0.75*Math.min(n.width,n.height)/2:0.92*Math.min(n.width,n.height)/2;k.radius&&(A=P(k.radius,A));var C="undefined"!==typeof k.innerRadius&&null!==k.innerRadius?
P(k.innerRadius,A):0.7*A;k.radius=A;"doughnut"===k.type&&(k.innerRadius=C);var M=Math.min(C/A,(A-1)/A);this.pieDoughnutClickHandler=function(a){t.isAnimating||!y(a.dataSeries.explodeOnClick)&&!a.dataSeries.explodeOnClick||(a=a.dataPoint,a.exploded=a.exploded?!1:!0,1<this.dataPoints.length&&t._animator.animate(0,500,function(a){b(a);l()}))};f();h();h();h();h();this.disableToolTip=!0;this._animator.animate(0,this.animatedRender?this.animationDuration:0,function(a){var b=t.plotArea.ctx;b.clearRect(n.x1,
n.y1,n.width,n.height);b.fillStyle=t.backgroundColor;b.fillRect(n.x1,n.y1,n.width,n.height);a=d[0].startAngle+2*Math.PI*a;for(b=0;b<r.length;b++){var c=0===b?d[b].startAngle:e,e=c+(d[b].endAngle-d[b].startAngle),f=!1;e>a&&(e=a,f=!0);var g=r[b].color?r[b].color:k._colorSet[b%k._colorSet.length];e>c&&qa(t.plotArea.ctx,d[b].center,d[b].radius,g,k.type,c,e,k.fillOpacity,d[b].percentInnerRadius);if(f)break}l()},function(){t.disableToolTip=!1;t._animator.animate(0,t.animatedRender?500:0,function(a){b(a);
l()})})}}};var ra=function(a,f,b,c){"undefined"===typeof b&&(b=1);0>=Math.round(f.y4-f.y1)||(a.save(),a.globalAlpha=b,a.beginPath(),a.moveTo(Math.round(f.x1),Math.round(f.y1)),a.lineTo(Math.round(f.x2),Math.round(f.y2)),a.lineTo(Math.round(f.x3),Math.round(f.y3)),a.lineTo(Math.round(f.x4),Math.round(f.y4)),"undefined"!==f.x5&&(a.lineTo(Math.round(f.x5),Math.round(f.y5)),a.lineTo(Math.round(f.x6),Math.round(f.y6))),a.closePath(),a.fillStyle=c?c:f.color,a.fill(),a.globalAplha=1,a.restore())};s.prototype.renderFunnel=
function(a){function f(){for(var a=0,b=[],c=0;c<x.length;c++){if("undefined"===typeof x[c].y)return-1;x[c].y="number"===typeof x[c].y?x[c].y:0;a+=Math.abs(x[c].y)}if(0===a)return-1;for(c=b[0]=0;c<x.length;c++)b.push(Math.abs(x[c].y)*P/a);return b}function b(){var a=Y,b=W,c=L,d=Z,e,f;e=R;f=aa-O;headArea=(f-e)*(b-a+(d-c))/2;headArea=Math.abs(headArea);c=Z-L;e=f-e;f=c*(f-aa);f=Math.abs(f);f=headArea+f;for(var d=[],g=0,h=0;h<x.length;h++){if("undefined"===typeof x[h].y)return-1;x[h].y="number"===typeof x[h].y?
x[h].y:0;g+=Math.abs(x[h].y)}if(0===g)return-1;for(var k=d[0]=0,l=0,n,b=b-a,t=!1,h=0;h<x.length;h++)a=Math.abs(x[h].y)*f/g,t?k=0==Number(c.toFixed(3))?0:a/c:(sqrt=ea*ea*b*b-4*Math.abs(ea)*a,0>sqrt?(n=c,k=(b+n)*(e-l)/2,a-=k,k=e-l,l+=e-l,k+=0==n?0:a/n,l+=a/n,t=!0):(k=(Math.abs(ea)*b-Math.sqrt(sqrt))/2,n=b-2*k/Math.abs(ea),l+=k,l>e&&(l-=k,n=c,k=(b+n)*(e-l)/2,a-=k,k=e-l,l+=e-l,k+=a/n,l+=a/n,t=!0),b=n)),d.push(k);return d}function c(){if(u&&x){for(var a,b,c,e,f,g,h,k,l,n,t,p,r,m,w=[],q=[],A={percent:null,
total:null},B=null,z=0;z<x.length;z++)m=N[z],m="undefined"!==typeof m.x5?(m.y2+m.y4)/2:(m.y2+m.y3)/2,m=d(m).x2+1,w[z]=Q-m-V;m=0.5*V;for(var z=0,za=x.length-1;z<x.length||0<=za;z++,za--){b=u.reversed?x[za]:x[z];a=b.color?b.color:u.reversed?u._colorSet[(x.length-1-z)%u._colorSet.length]:u._colorSet[z%u._colorSet.length];c=b.indexLabelPlacement||u.indexLabelPlacement||"outside";e=b.indexLabelBackgroundColor||u.indexLabelBackgroundColor||(v?"transparent":null);f=b.indexLabelFontColor||u.indexLabelFontColor||
"#979797";g=y(b.indexLabelFontSize)?u.indexLabelFontSize:b.indexLabelFontSize;h=b.indexLabelFontStyle||u.indexLabelFontStyle||"normal";k=b.indexLabelFontFamily||u.indexLabelFontFamily||"arial";l=b.indexLabelFontWeight||u.indexLabelFontWeight||"normal";a=b.indexLabelLineColor||u.options.indexLabelLineColor||a;n="number"===typeof b.indexLabelLineThickness?b.indexLabelLineThickness:"number"===typeof u.indexLabelLineThickness?u.indexLabelLineThickness:2;t=b.indexLabelLineDashType||u.indexLabelLineDashType||
"solid";p="undefined"!==typeof b.indexLabelWrap?b.indexLabelWrap:"undefined"!==typeof u.indexLabelWrap?u.indexLabelWrap:!0;r=u.dataPointIds[z];s._eventManager.objectMap[r]={id:r,objectType:"dataPoint",dataPointIndex:z,dataSeriesIndex:0,funnelSection:N[u.reversed?x.length-1-z:z]};"inside"===u.indexLabelPlacement&&(w[z]=z!==fa?u.reversed?N[z].x2-N[z].x1:N[z].x3-N[z].x4:N[z].x3-N[z].x6,20>w[z]&&(w[z]=z!==fa?u.reversed?N[z].x3-N[z].x4:N[z].x2-N[z].x1:N[z].x2-N[z].x1,w[z]/=2));r=b.indexLabelMaxWidth?b.indexLabelMaxWidth:
u.options.indexLabelMaxWidth?u.indexLabelMaxWidth:w[z];if(r>w[z]||0>r)r=w[z];q[z]="inside"===u.indexLabelPlacement?N[z].height:!1;A=s.getPercentAndTotal(u,b);if(u.indexLabelFormatter||b.indexLabelFormatter)B={chart:s.options,dataSeries:u,dataPoint:b,total:A.total,percent:A.percent};b=b.indexLabelFormatter?b.indexLabelFormatter(B):b.indexLabel?s.replaceKeywordsWithValue(b.indexLabel,b,u,z):u.indexLabelFormatter?u.indexLabelFormatter(B):u.indexLabel?s.replaceKeywordsWithValue(u.indexLabel,b,u,z):b.label?
b.label:"";0>=n&&(n=0);1E3>r&&1E3-r<m&&(r+=1E3-r);S.roundRect||Ca(S);c=new ka(S,{fontSize:g,fontFamily:k,fontColor:f,fontStyle:h,fontWeight:l,horizontalAlign:c,backgroundColor:e,maxWidth:r,maxHeight:!1===q[z]?p?4.28571429*g:1.5*g:q[z],text:b,padding:ga});c.measureText();F.push({textBlock:c,id:u.reversed?za:z,isDirty:!1,lineColor:a,lineThickness:n,lineDashType:t,height:c.height<c.maxHeight?c.height:c.maxHeight,width:c.width<c.maxWidth?c.width:c.maxWidth})}}}function e(){var a,b,c,d,e,f=[];e=!1;c=0;
for(var g=Q-W-V/2,g=u.options.indexLabelMaxWidth?u.indexLabelMaxWidth>g?g:u.indexLabelMaxWidth:g,h=F.length-1;0<=h;h--){dataPoint=x[F[h].id];c=F[h];d=c.textBlock;b=(a=n(h)<N.length?F[n(h)]:null)?a.textBlock:null;c=c.height;a&&d.y+c+ga>b.y&&(e=!0);c=dataPoint.indexLabelMaxWidth||g;if(c>g||0>c)c=g;f.push(c)}if(e)for(h=F.length-1;0<=h;h--)a=N[h],F[h].textBlock.maxWidth=f[f.length-(h+1)],F[h].textBlock.measureText(),F[h].textBlock.x=Q-g,c=F[h].textBlock.height<F[h].textBlock.maxHeight?F[h].textBlock.height:
F[h].textBlock.maxHeight,e=F[h].textBlock.width<F[h].textBlock.maxWidth?F[h].textBlock.width:F[h].textBlock.maxWidth,F[h].height=c,F[h].width=e,c="undefined"!==typeof a.x5?(a.y2+a.y4)/2:(a.y2+a.y3)/2,F[h].textBlock.y=c-F[h].height/2,u.reversed?(F[h].textBlock.y+F[h].height>U+C&&(F[h].textBlock.y=U+C-F[h].height),F[h].textBlock.y<sa-C&&(F[h].textBlock.y=sa-C)):(F[h].textBlock.y<U-C&&(F[h].textBlock.y=U-C),F[h].textBlock.y+F[h].height>sa+C&&(F[h].textBlock.y=sa+C-F[h].height))}function g(){var a,b,
c,e;if("inside"!==u.indexLabelPlacement)for(var f=0;f<N.length;f++)0==F[f].textBlock.text.length?F[f].isDirty=!0:(a=N[f],c="undefined"!==typeof a.x5?(a.y2+a.y4)/2:(a.y2+a.y3)/2,b=u.reversed?"undefined"!==typeof a.x5?c>ba?d(c).x2+1:(a.x2+a.x3)/2+1:(a.x2+a.x3)/2+1:"undefined"!==typeof a.x5?c<ba?d(c).x2+1:(a.x4+a.x3)/2+1:(a.x2+a.x3)/2+1,F[f].textBlock.x=b+V,F[f].textBlock.y=c-F[f].height/2,u.reversed?(F[f].textBlock.y+F[f].height>U+C&&(F[f].textBlock.y=U+C-F[f].height),F[f].textBlock.y<sa-C&&(F[f].textBlock.y=
sa-C)):(F[f].textBlock.y<U-C&&(F[f].textBlock.y=U-C),F[f].textBlock.y+F[f].height>sa+C&&(F[f].textBlock.y=sa+C-F[f].height)));else for(f=0;f<N.length;f++)0==F[f].textBlock.text.length?F[f].isDirty=!0:(a=N[f],b=a.height,c=F[f].height,e=F[f].width,b>=c?(b=f!=fa?(a.x4+a.x3)/2-e/2:(a.x5+a.x4)/2-e/2,c=f!=fa?(a.y1+a.y3)/2-c/2:(a.y1+a.y4)/2-c/2,F[f].textBlock.x=b,F[f].textBlock.y=c):F[f].isDirty=!0)}function h(){function a(b,c){var d;if(0>b||b>=F.length)return 0;var e,f=F[b].textBlock;if(0>c){c*=-1;e=p(b);
d=l(e,b);if(d>=c)return f.y-=c,c;if(0==b)return 0<d&&(f.y-=d),d;d+=a(e,-(c-d));0<d&&(f.y-=d);return d}e=n(b);d=l(b,e);if(d>=c)return f.y+=c,c;if(b==N.length-1)return 0<d&&(f.y+=d),d;d+=a(e,c-d);0<d&&(f.y+=d);return d}function b(){var a,d,e,f,g=0,h;f=(aa-R+2*C)/t;h=t;for(var k,l=1;l<h;l++){e=l*f;for(var r=F.length-1;0<=r;r--)!F[r].isDirty&&(F[r].textBlock.y<e&&F[r].textBlock.y+F[r].height>e)&&(k=n(r),!(k>=F.length-1)&&F[r].textBlock.y+F[r].height+ga>F[k].textBlock.y&&(F[r].textBlock.y=F[r].textBlock.y+
F[r].height-e>e-F[r].textBlock.y?e+1:e-F[r].height-1))}for(k=N.length-1;0<k;k--)if(!F[k].isDirty){e=p(k);if(0>e&&(e=0,F[e].isDirty))break;if(F[k].textBlock.y<F[e].textBlock.y+F[e].height){d=d||k;f=k;for(h=0;F[f].textBlock.y<F[e].textBlock.y+F[e].height+ga;){a=a||F[f].textBlock.y+F[f].height;h+=F[f].height;h+=ga;f=e;if(0>=f){f=0;h+=F[f].height;break}e=p(f);if(0>e){f=0;h+=F[f].height;break}}if(f!=k){g=F[f].textBlock.y;a-=g;a=h-a;g=c(a,d,f);break}}}return g}function c(a,b,d){var e=[],f=0,g=0;for(a=Math.abs(a);d<=
b;d++)e.push(N[d]);e.sort(function(a,b){return a.height-b.height});for(d=0;d<e.length;d++)if(b=e[d],f<a)g++,f+=F[b.id].height+ga,F[b.id].textBlock.text="",F[b.id].indexLabelText="",F[b.id].isDirty=!0,F[b.id].textBlock.measureText();else break;return g}for(var d,e,f,g,h,k,t=1,r=0;r<2*t;r++){for(var m=F.length-1;0<=m&&!(previousTextBlock=(previousLabel=0<=p(m)?F[p(m)]:null)?previousLabel.textBlock:null,f=F[m],g=f.textBlock,k=(h=n(m)<N.length?F[n(m)]:null)?h.textBlock:null,d=+f.height.toFixed(6),e=+g.y.toFixed(6),
!f.isDirty&&(h&&e+d+ga>+k.y.toFixed(6))&&(d=g.y+d+ga-k.y,e=a(m,-d),e<d&&(0<e&&(d-=e),e=a(n(m),d),e!=d)));m--);b()}}function l(a,b){return(b<N.length?F[b].textBlock.y:u.reversed?U+C:sa+C)-(0>a?u.reversed?sa-C:U-C:F[a].textBlock.y+F[a].height+ga)}function t(a,b,c){var d,e,f,h=[],l=C,n=[];-1!==b&&(0<=la.indexOf(b)?(e=la.indexOf(b),la.splice(e,1)):(la.push(b),la=la.sort(function(a,b){return a-b})));if(0===la.length)h=ja;else{e=C*(1!=la.length||0!=la[0]&&la[0]!=N.length-1?2:1)/k();for(var t=0;t<N.length;t++){if(1==
la.length&&0==la[0]){if(0===t){h.push(ja[t]);d=l;continue}}else 0===t&&(d=-1*l);h.push(ja[t]+d);if(0<=la.indexOf(t)||t<N.length&&0<=la.indexOf(t+1))d+=e}}f=function(){for(var a=[],b=0;b<N.length;b++)a.push(h[b]-N[b].y1);return a}();var p={startTime:(new Date).getTime(),duration:c||500,easingFunction:function(a,b,c,d){return I.easing.easeOutQuart(a,b,c,d)},changeSection:function(a){for(var b,c,d=0;d<N.length;d++)b=f[d],c=N[d],newY=b*a,"undefined"===typeof n[d]&&(n[d]=0),0>n&&(n*=-1),c.y1+=newY-n[d],
c.y2+=newY-n[d],c.y3+=newY-n[d],c.y4+=newY-n[d],c.y5&&(c.y5+=newY-n[d],c.y6+=newY-n[d]),n[d]=newY}};a._animator.animate(0,c,function(c){var d=a.plotArea.ctx||a.ctx;ia=!0;d.clearRect(z.x1,z.y1,z.x2-z.x1,z.y2-z.y1);d.fillStyle=a.backgroundColor;d.fillRect(z.x1,z.y1,z.width,z.height);p.changeSection(c,b);var e={};e.dataSeries=u;e.dataPoint=u.reversed?u.dataPoints[x.length-1-b]:u.dataPoints[b];e.index=u.reversed?x.length-1-b:b;a.toolTip.highlightObjects([e]);for(e=0;e<N.length;e++)ra(d,N[e],u.fillOpacity);
q(d);K&&("inside"!==u.indexLabelPlacement?r(d):g(),m(d));1<=c&&(ia=!1)},null,I.easing.easeOutQuart)}function k(){for(var a=0,b=0;b<N.length-1;b++)(0<=la.indexOf(b)||0<=la.indexOf(b+1))&&a++;return a}function r(a){for(var b,c,e,f,g=0;g<N.length;g++)f=1===F[g].lineThickness%2?0.5:0,c=((N[g].y2+N[g].y4)/2<<0)+f,b=d(c).x2-1,e=F[g].textBlock.x,f=(F[g].textBlock.y+F[g].height/2<<0)+f,F[g].isDirty||0==F[g].lineThickness||(a.strokeStyle=F[g].lineColor,a.lineWidth=F[g].lineThickness,a.setLineDash&&a.setLineDash(G(F[g].lineDashType,
F[g].lineThickness)),a.beginPath(),a.moveTo(b,c),a.lineTo(e,f),a.stroke())}function p(a){for(a-=1;-1<=a&&-1!=a&&F[a].isDirty;a--);return a}function n(a){for(a+=1;a<=N.length&&a!=N.length&&F[a].isDirty;a++);return a}function d(a){for(var b,c=0;c<x.length;c++)if(N[c].y1<a&&N[c].y4>a){b=N[c];break}return b?(a=b.y6?a>b.y6?b.x3+(b.x4-b.x3)/(b.y4-b.y3)*(a-b.y3):b.x2+(b.x3-b.x2)/(b.y3-b.y2)*(a-b.y2):b.x2+(b.x3-b.x2)/(b.y3-b.y2)*(a-b.y2),{x1:a,x2:a}):-1}function m(a){for(var b=0;b<N.length;b++)F[b].isDirty||
(a&&(F[b].textBlock.ctx=a),F[b].textBlock.render(!0))}function q(a){s.plotArea.layoutManager.reset();a.roundRect||Ca(a);s.title&&(s.title.dockInsidePlotArea||"center"===s.title.horizontalAlign&&"center"===s.title.verticalAlign)&&(s.title.ctx=a,s.title.render());if(s.subtitles)for(var b=0;b<s.subtitles.length;b++){var c=s.subtitles[b];if(c.dockInsidePlotArea||"center"===c.horizontalAlign&&"center"===c.verticalAlign)s.subtitles.ctx=a,c.render()}s.legend&&(s.legend.dockInsidePlotArea||"center"===s.legend.horizontalAlign&&
"center"===s.legend.verticalAlign)&&(s.legend.ctx=a,s.legend.render());$.fNg&&$.fNg(s)}var s=this;if(!(0>=a.dataSeriesIndexes.length)){for(var u=this.data[a.dataSeriesIndexes[0]],x=u.dataPoints,z=this.plotArea,C=0.025*z.width,B=0.01*z.width,A=0,P=z.height-2*C,M=Math.min(z.width-2*B,2.8*z.height),K=!1,J=0;J<x.length;J++)if(!K&&("undefined"!==typeof x[J].indexLabel&&null!==x[J].indexLabel&&0<x[J].indexLabel.toString().length)&&(K=!0),!K&&("undefined"!==typeof x[J].label&&null!==x[J].label&&0<x[J].label.toString().length)&&
(K=!0),!K&&"function"===typeof u.indexLabelFormatter||"function"===typeof x[J].indexLabelFormatter)K=!0;K=K||"undefined"!==typeof u.indexLabel&&null!==u.indexLabel&&0<u.indexLabel.toString().length;"inside"!==u.indexLabelPlacement&&K||(B=(z.width-0.75*M)/2);var J=z.x1+B,Q=z.x2-B,R=z.y1+C,aa=z.y2-C,S=a.targetCanvasCtx||this.plotArea.ctx||this.ctx;if(0!=u.length&&(u.dataPoints&&u.visible)&&0!==x.length){var O,E;a=75*M/100;var V=30*(Q-a)/100;"funnel"===u.type?(O=y(u.options.neckHeight)?0.35*P:u.neckHeight,
E=y(u.options.neckWidth)?0.25*a:u.neckWidth,"string"===typeof O&&O.match(/%$/)?(O=parseInt(O),O=O*P/100):O=parseInt(O),"string"===typeof E&&E.match(/%$/)?(E=parseInt(E),E=E*a/100):E=parseInt(E),O>P?O=P:0>=O&&(O=0),E>a?E=a-0.5:0>=E&&(E=0)):"pyramid"===u.type&&(E=O=0,u.reversed=u.reversed?!1:!0);var B=J+a/2,Y=J,W=J+a,U=u.reversed?aa:R,L=B-E/2,Z=B+E/2,ba=u.reversed?R+O:aa-O,sa=u.reversed?R:aa;a=[];var B=[],N=[],M=[],X=R,fa,ea=(ba-U)/(L-Y),ha=-ea,J="area"===(u.valueRepresents?u.valueRepresents:"height")?
b():f();if(-1!==J){if(u.reversed)for(M.push(X),E=J.length-1;0<E;E--)X+=J[E],M.push(X);else for(E=0;E<J.length;E++)X+=J[E],M.push(X);if(u.reversed)for(E=0;E<J.length;E++)M[E]<ba?(a.push(L),B.push(Z),fa=E):(a.push((M[E]-U+ea*Y)/ea),B.push((M[E]-U+ha*W)/ha));else for(E=0;E<J.length;E++)M[E]<ba?(a.push((M[E]-U+ea*Y)/ea),B.push((M[E]-U+ha*W)/ha),fa=E):(a.push(L),B.push(Z));for(E=0;E<J.length-1;E++)X=u.reversed?x[x.length-1-E].color?x[x.length-1-E].color:u._colorSet[(x.length-1-E)%u._colorSet.length]:x[E].color?
x[E].color:u._colorSet[E%u._colorSet.length],E===fa?N.push({x1:a[E],y1:M[E],x2:B[E],y2:M[E],x3:Z,y3:ba,x4:B[E+1],y4:M[E+1],x5:a[E+1],y5:M[E+1],x6:L,y6:ba,id:E,height:M[E+1]-M[E],color:X}):N.push({x1:a[E],y1:M[E],x2:B[E],y2:M[E],x3:B[E+1],y3:M[E+1],x4:a[E+1],y4:M[E+1],id:E,height:M[E+1]-M[E],color:X});var ga=2,F=[],ia=!1,la=[],ja=[],J=!1;a=a=0;Da(la);for(E=0;E<x.length;E++)x[E].exploded&&(J=!0,u.reversed?la.push(x.length-1-E):la.push(E));S.clearRect(z.x1,z.y1,z.width,z.height);S.fillStyle=s.backgroundColor;
S.fillRect(z.x1,z.y1,z.width,z.height);if(K&&u.visible&&(c(),g(),e(),"inside"!==u.indexLabelPlacement)){h();for(E=0;E<x.length;E++)F[E].isDirty||(a=F[E].textBlock.x+F[E].width,a=(Q-a)/2,0==E&&(A=a),A>a&&(A=a));for(E=0;E<N.length;E++)N[E].x1+=A,N[E].x2+=A,N[E].x3+=A,N[E].x4+=A,N[E].x5&&(N[E].x5+=A,N[E].x6+=A),F[E].textBlock.x+=A}for(E=0;E<N.length;E++)A=N[E],ra(S,A,u.fillOpacity),ja.push(A.y1);q(S);K&&u.visible&&("inside"===u.indexLabelPlacement||s.animationEnabled||r(S),s.animationEnabled||m());if(!K)for(E=
0;E<x.length;E++)A=u.dataPointIds[E],a={id:A,objectType:"dataPoint",dataPointIndex:E,dataSeriesIndex:0,funnelSection:N[u.reversed?x.length-1-E:E]},s._eventManager.objectMap[A]=a;!s.animationEnabled&&J?t(s,-1,0):s.animationEnabled&&!s.animatedRender&&t(s,-1,0);this.funnelPyramidClickHandler=function(a){var b=-1;if(!ia&&!s.isAnimating&&(y(a.dataSeries.explodeOnClick)||a.dataSeries.explodeOnClick)&&(b=u.reversed?x.length-1-a.dataPointIndex:a.dataPointIndex,0<=b)){a=b;if("funnel"===u.type||"pyramid"===
u.type)u.reversed?x[x.length-1-a].exploded=x[x.length-1-a].exploded?!1:!0:x[a].exploded=x[a].exploded?!1:!0;t(s,b,500)}};return{source:S,dest:this.plotArea.ctx,animationCallback:function(a,b){I.fadeInAnimation(a,b);1<=a&&(t(s,-1,500),q(s.plotArea.ctx||s.ctx))},easingFunction:I.easing.easeInQuad,animationBase:0}}}}};s.prototype.animationRequestId=null;s.prototype.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||
window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();s.prototype.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout;s.prototype.set=function(a,f,b){b="undefined"===typeof b?!0:b;"options"===a?(this.options=f,b&&this.render()):s.base.set.call(this,a,f,b)};s.prototype.exportChart=function(a){a="undefined"===typeof a?
{}:a;var f=a.format?a.format:"png",b=a.fileName?a.fileName:this.exportFileName;if(a.toDataURL)return this.canvas.toDataURL("image/"+f);q(this.canvas,f,b)};s.prototype.print=function(){var a=this.exportChart({toDataURL:!0}),f=document.createElement("iframe");f.setAttribute("class","canvasjs-chart-print-frame");f.setAttribute("style","position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;");f.style.height=this.height+"px";this._canvasJSContainer.appendChild(f);
var b=this,c=f.contentWindow||f.contentDocument.document||f.contentDocument;c.document.open();c.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img src="'+a+'"/><body/></html>');c.document.close();setTimeout(function(){c.focus();c.print();setTimeout(function(){b._canvasJSContainer.removeChild(f)},1E3)},500)};s.prototype.getPercentAndTotal=function(a,f){var b=null,c=null,e=null;if(0<=a.type.indexOf("stacked"))c=0,b=f.x.getTime?f.x.getTime():
f.x,b in a.plotUnit.yTotals&&(c=a.plotUnit.yTotals[b],e=isNaN(f.y)?0:100*(f.y/c));else if("pie"===a.type||"doughnut"===a.type||"funnel"===a.type||"pyramid"===a.type){for(i=c=0;i<a.dataPoints.length;i++)isNaN(a.dataPoints[i].y)||(c+=a.dataPoints[i].y);e=isNaN(f.y)?0:100*(f.y/c)}return{percent:e,total:c}};s.prototype.replaceKeywordsWithValue=function(a,f,b,c,e){var g=this;e="undefined"===typeof e?0:e;if((0<=b.type.indexOf("stacked")||"pie"===b.type||"doughnut"===b.type||"funnel"===b.type||"pyramid"===
b.type)&&(0<=a.indexOf("#percent")||0<=a.indexOf("#total"))){var h="#percent",l="#total",t=this.getPercentAndTotal(b,f),l=isNaN(t.total)?l:t.total,h=isNaN(t.percent)?h:t.percent;do{t="";if(b.percentFormatString)t=b.percentFormatString;else{var t="#,##0.",k=Math.max(Math.ceil(Math.log(1/Math.abs(h))/Math.LN10),2);if(isNaN(k)||!isFinite(k))k=2;for(var r=0;r<k;r++)t+="#";b.percentFormatString=t}a=a.replace("#percent",X(h,t,g._cultureInfo));a=a.replace("#total",X(l,b.yValueFormatString?b.yValueFormatString:
"#,##0.########",g._cultureInfo))}while(0<=a.indexOf("#percent")||0<=a.indexOf("#total"))}return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g,function(a){if('"'===a[0]&&'"'===a[a.length-1]||"'"===a[0]&&"'"===a[a.length-1])return a.slice(1,a.length-1);a=Ga(a.slice(1,a.length-1));a=a.replace("#index",e);var h=null;try{var d=a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);d&&0<d.length&&(h=Ga(d[2]),a=Ga(d[1]))}catch(k){}d=null;if("color"===a)return"waterfall"===b.type?f.color?f.color:-1<f.y?b.risingColor:b.fallingColor:
"error"===b.type?b.color?b.color:b._colorSet[h%b._colorSet.length]:f.color?f.color:b.color?b.color:b._colorSet[c%b._colorSet.length];if(f.hasOwnProperty(a))d=f;else if(b.hasOwnProperty(a))d=b;else return"";d=d[a];null!==h&&(d=d[h]);if("x"===a)if("dateTime"===b.axisX.valueType||"dateTime"===b.xValueType||f.x&&f.x.getTime){if(g.plotInfo.plotTypes[0].plotUnits[0].axisX&&!g.plotInfo.plotTypes[0].plotUnits[0].axisX.logarithmic)return Ba(d,f.xValueFormatString?f.xValueFormatString:b.xValueFormatString?
b.xValueFormatString:b.xValueFormatString=g.axisX&&g.axisX.autoValueFormatString?g.axisX.autoValueFormatString:"DD MMM YY",g._cultureInfo)}else return X(d,f.xValueFormatString?f.xValueFormatString:b.xValueFormatString?b.xValueFormatString:b.xValueFormatString="#,##0.########",g._cultureInfo);else return"y"===a?X(d,f.yValueFormatString?f.yValueFormatString:b.yValueFormatString?b.yValueFormatString:b.yValueFormatString="#,##0.########",g._cultureInfo):"z"===a?X(d,f.zValueFormatString?f.zValueFormatString:
b.zValueFormatString?b.zValueFormatString:b.zValueFormatString="#,##0.########",g._cultureInfo):d})};oa(U,Y);U.prototype.render=function(){var a=this.dockInsidePlotArea?this.chart.plotArea:this.chart,f=a.layoutManager.getFreeSpace(),b=null,c=0,e=0,g=0,h=0,l=this.markerMargin=this.chart.options.legend&&!y(this.chart.options.legend.markerMargin)?this.chart.options.legend.markerMargin:0.3*this.fontSize;this.height=0;var t=[],k=[];"top"===this.verticalAlign||"bottom"===this.verticalAlign?(this.orientation=
"horizontal",b=this.verticalAlign,g=this.maxWidth=null!==this.maxWidth?this.maxWidth:f.width,h=this.maxHeight=null!==this.maxHeight?this.maxHeight:0.5*f.height):"center"===this.verticalAlign&&(this.orientation="vertical",b=this.horizontalAlign,g=this.maxWidth=null!==this.maxWidth?this.maxWidth:0.5*f.width,h=this.maxHeight=null!==this.maxHeight?this.maxHeight:f.height);for(var r=[],p=0;p<this.dataSeries.length;p++){var n=this.dataSeries[p];if(n.dataPoints&&n.dataPoints.length)if("pie"!==n.type&&"doughnut"!==
n.type&&"funnel"!==n.type&&"pyramid"!==n.type){var d=n.legendMarkerType=n.legendMarkerType?n.legendMarkerType:"line"!==n.type&&"stepLine"!==n.type&&"spline"!==n.type&&"scatter"!==n.type&&"bubble"!==n.type||!n.markerType?"error"===n.type&&n._linkedSeries?n._linkedSeries.legendMarkerType?n._linkedSeries.legendMarkerType:R.getDefaultLegendMarker(n._linkedSeries.type):R.getDefaultLegendMarker(n.type):n.markerType,m=n.legendText?n.legendText:this.itemTextFormatter?this.itemTextFormatter({chart:this.chart,
legend:this.options,dataSeries:n,dataPoint:null}):n.name,q=n.legendMarkerColor=n.legendMarkerColor?n.legendMarkerColor:n.markerColor?n.markerColor:"error"===n.type?y(n.whiskerColor)?n._colorSet[0]:n.whiskerColor:n._colorSet[0],s=n.markerSize||"line"!==n.type&&"stepLine"!==n.type&&"spline"!==n.type?0.75*this.lineHeight:0,u=n.legendMarkerBorderColor?n.legendMarkerBorderColor:n.markerBorderColor,v=n.legendMarkerBorderThickness?n.legendMarkerBorderThickness:n.markerBorderThickness?Math.max(1,Math.round(0.2*
s)):0;"error"===n.type&&r.push(q);m=this.chart.replaceKeywordsWithValue(m,n.dataPoints[0],n,p);d={markerType:d,markerColor:q,text:m,textBlock:null,chartType:n.type,markerSize:s,lineColor:n._colorSet[0],dataSeriesIndex:n.index,dataPointIndex:null,markerBorderColor:u,markerBorderThickness:v};t.push(d)}else for(var x=0;x<n.dataPoints.length;x++){var z=n.dataPoints[x],d=z.legendMarkerType?z.legendMarkerType:n.legendMarkerType?n.legendMarkerType:R.getDefaultLegendMarker(n.type),m=z.legendText?z.legendText:
n.legendText?n.legendText:this.itemTextFormatter?this.itemTextFormatter({chart:this.chart,legend:this.options,dataSeries:n,dataPoint:z}):z.name?z.name:"DataPoint: "+(x+1),q=z.legendMarkerColor?z.legendMarkerColor:n.legendMarkerColor?n.legendMarkerColor:z.color?z.color:n.color?n.color:n._colorSet[x%n._colorSet.length],s=0.75*this.lineHeight,u=z.legendMarkerBorderColor?z.legendMarkerBorderColor:n.legendMarkerBorderColor?n.legendMarkerBorderColor:z.markerBorderColor?z.markerBorderColor:n.markerBorderColor,
v=z.legendMarkerBorderThickness?z.legendMarkerBorderThickness:n.legendMarkerBorderThickness?n.legendMarkerBorderThickness:z.markerBorderThickness||n.markerBorderThickness?Math.max(1,Math.round(0.2*s)):0,m=this.chart.replaceKeywordsWithValue(m,z,n,x),d={markerType:d,markerColor:q,text:m,textBlock:null,chartType:n.type,markerSize:s,dataSeriesIndex:p,dataPointIndex:x,markerBorderColor:u,markerBorderThickness:v};(z.showInLegend||n.showInLegend&&!1!==z.showInLegend)&&t.push(d)}}!0===this.reversed&&t.reverse();
if(0<t.length){n=null;m=x=z=v=0;z=null!==this.itemWidth?null!==this.itemMaxWidth?Math.min(this.itemWidth,this.itemMaxWidth,g):this.itemMaxWidth=Math.min(this.itemWidth,g):null!==this.itemMaxWidth?Math.min(this.itemMaxWidth,g):this.itemMaxWidth=g;s=0===s?0.75*this.lineHeight:s;z-=s+l;for(p=0;p<t.length;p++){d=t[p];q=z;if("line"===d.chartType||"spline"===d.chartType||"stepLine"===d.chartType)q-=2*0.1*this.lineHeight;if(!(0>=h||"undefined"===typeof h||0>=q||"undefined"===typeof q)){if("horizontal"===
this.orientation){d.textBlock=new ka(this.ctx,{x:0,y:0,maxWidth:q,maxHeight:this.itemWrap?h:this.lineHeight,angle:0,text:d.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"middle"});d.textBlock.measureText();null!==this.itemWidth&&(d.textBlock.width=this.itemWidth-(s+l+("line"===d.chartType||"spline"===d.chartType||"stepLine"===d.chartType?2*0.1*this.lineHeight:0)));if(!n||n.width+
Math.round(d.textBlock.width+s+l+(0===n.width?0:this.horizontalSpacing)+("line"===d.chartType||"spline"===d.chartType||"stepLine"===d.chartType?2*0.1*this.lineHeight:0))>g)n={items:[],width:0},k.push(n),this.height+=x,x=0;x=Math.max(x,d.textBlock.height)}else d.textBlock=new ka(this.ctx,{x:0,y:0,maxWidth:z,maxHeight:!0===this.itemWrap?h:1.5*this.fontSize,angle:0,text:d.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,
fontStyle:this.fontStyle,textBaseline:"middle"}),d.textBlock.measureText(),null!==this.itemWidth&&(d.textBlock.width=this.itemWidth-(s+l+("line"===d.chartType||"spline"===d.chartType||"stepLine"===d.chartType?2*0.1*this.lineHeight:0))),this.height<h-this.lineHeight?(n={items:[],width:0},k.push(n)):(n=k[v],v=(v+1)%k.length),this.height+=d.textBlock.height;d.textBlock.x=n.width;d.textBlock.y=0;n.width+=Math.round(d.textBlock.width+s+l+(0===n.width?0:this.horizontalSpacing)+("line"===d.chartType||"spline"===
d.chartType||"stepLine"===d.chartType?2*0.1*this.lineHeight:0));n.items.push(d);this.width=Math.max(n.width,this.width);m=d.textBlock.width+(s+l+("line"===d.chartType||"spline"===d.chartType||"stepLine"===d.chartType?2*0.1*this.lineHeight:0))}}this.itemWidth=m;this.height=!1===this.itemWrap?k.length*this.lineHeight:this.height+x;this.height=Math.min(h,this.height);this.width=Math.min(g,this.width)}"top"===this.verticalAlign?(e="left"===this.horizontalAlign?f.x1:"right"===this.horizontalAlign?f.x2-
this.width:f.x1+f.width/2-this.width/2,c=f.y1):"center"===this.verticalAlign?(e="left"===this.horizontalAlign?f.x1:"right"===this.horizontalAlign?f.x2-this.width:f.x1+f.width/2-this.width/2,c=f.y1+f.height/2-this.height/2):"bottom"===this.verticalAlign&&(e="left"===this.horizontalAlign?f.x1:"right"===this.horizontalAlign?f.x2-this.width:f.x1+f.width/2-this.width/2,c=f.y2-this.height);this.items=t;for(p=0;p<this.items.length;p++)d=t[p],d.id=++this.chart._eventManager.lastObjectId,this.chart._eventManager.objectMap[d.id]=
{id:d.id,objectType:"legendItem",legendItemIndex:p,dataSeriesIndex:d.dataSeriesIndex,dataPointIndex:d.dataPointIndex};(0<this.borderThickness&&this.borderColor||this.backgroundColor)&&this.ctx.roundRect(e,c,this.width,this.height,this.cornerRadius,this.borderThickness,this.backgroundColor,this.borderColor);for(p=f=0;p<k.length;p++){n=k[p];for(z=x=0;z<n.items.length;z++){d=n.items[z];q=d.textBlock.x+e+(0===z?0.2*s:this.horizontalSpacing);u=c+f;m=q;this.chart.data[d.dataSeriesIndex].visible||(this.ctx.globalAlpha=
0.5);this.ctx.save();this.ctx.beginPath();this.ctx.rect(e,c,g,Math.max(h-h%this.lineHeight,0));this.ctx.clip();if("line"===d.chartType||"stepLine"===d.chartType||"spline"===d.chartType)this.ctx.strokeStyle=d.lineColor,this.ctx.lineWidth=Math.ceil(this.lineHeight/8),this.ctx.beginPath(),this.ctx.moveTo(q-0.1*this.lineHeight,u+this.lineHeight/2),this.ctx.lineTo(q+0.85*this.lineHeight,u+this.lineHeight/2),this.ctx.stroke(),m-=0.1*this.lineHeight;if("error"===d.chartType){this.ctx.strokeStyle=r[0];v=
s/8;this.ctx.lineWidth=v;this.ctx.beginPath();var v=q-0.08*this.lineHeight+0.1*this.lineHeight,B=u+0.15*this.lineHeight,A=0.7*this.lineHeight,C=A+0.02*this.lineHeight;this.ctx.moveTo(v,B);this.ctx.lineTo(v+A,B);this.ctx.stroke();this.ctx.beginPath();this.ctx.moveTo(v+A/2,B);this.ctx.lineTo(v+A/2,B+C);this.ctx.stroke();this.ctx.beginPath();this.ctx.moveTo(v,B+C);this.ctx.lineTo(v+A,B+C);this.ctx.stroke();r.shift()}ia.drawMarker(q+s/2,u+this.lineHeight/2,this.ctx,d.markerType,"error"===d.chartType||
"line"===d.chartType||"spline"===d.chartType?d.markerSize/2:d.markerSize,d.markerColor,d.markerBorderColor,d.markerBorderThickness);d.textBlock.x=q+l+s;if("line"===d.chartType||"stepLine"===d.chartType||"spline"===d.chartType)d.textBlock.x+=0.1*this.lineHeight;d.textBlock.y=Math.round(u+this.lineHeight/2);d.textBlock.render(!0);this.ctx.restore();x=0<z?Math.max(x,d.textBlock.height):d.textBlock.height;this.chart.data[d.dataSeriesIndex].visible||(this.ctx.globalAlpha=1);v=S(d.id);this.ghostCtx.fillStyle=
v;this.ghostCtx.beginPath();this.ghostCtx.fillRect(m,d.textBlock.y-this.lineHeight/2,d.textBlock.x+d.textBlock.width-m,d.textBlock.height);d.x1=this.chart._eventManager.objectMap[d.id].x1=m;d.y1=this.chart._eventManager.objectMap[d.id].y1=d.textBlock.y-this.lineHeight/2;d.x2=this.chart._eventManager.objectMap[d.id].x2=d.textBlock.x+d.textBlock.width;d.y2=this.chart._eventManager.objectMap[d.id].y2=d.textBlock.y+d.textBlock.height-this.lineHeight/2}f+=x}0<t.length&&a.layoutManager.registerSpace(b,
{width:this.width+2+2,height:this.height+5+5});this.bounds={x1:e,y1:c,x2:e+this.width,y2:c+this.height}};oa(R,Y);R.prototype.getDefaultAxisPlacement=function(){var a=this.type;if("column"===a||"line"===a||"stepLine"===a||"spline"===a||"area"===a||"stepArea"===a||"splineArea"===a||"stackedColumn"===a||"stackedLine"===a||"bubble"===a||"scatter"===a||"stackedArea"===a||"stackedColumn100"===a||"stackedLine100"===a||"stackedArea100"===a||"candlestick"===a||"ohlc"===a||"rangeColumn"===a||"rangeArea"===
a||"rangeSplineArea"===a||"boxAndWhisker"===a||"waterfall"===a)return"normal";if("bar"===a||"stackedBar"===a||"stackedBar100"===a||"rangeBar"===a)return"xySwapped";if("pie"===a||"doughnut"===a||"funnel"===a||"pyramid"===a)return"none";"error"!==a&&window.console.log("Unknown Chart Type: "+a);return null};R.getDefaultLegendMarker=function(a){if("column"===a||"stackedColumn"===a||"stackedLine"===a||"bar"===a||"stackedBar"===a||"stackedBar100"===a||"bubble"===a||"scatter"===a||"stackedColumn100"===a||
"stackedLine100"===a||"stepArea"===a||"candlestick"===a||"ohlc"===a||"rangeColumn"===a||"rangeBar"===a||"rangeArea"===a||"rangeSplineArea"===a||"boxAndWhisker"===a||"waterfall"===a)return"square";if("line"===a||"stepLine"===a||"spline"===a||"pie"===a||"doughnut"===a)return"circle";if("area"===a||"splineArea"===a||"stackedArea"===a||"stackedArea100"===a||"funnel"===a||"pyramid"===a)return"triangle";if("error"===a)return"none";window.console.log("Unknown Chart Type: "+a);return null};R.prototype.getDataPointAtX=
function(a,f){if(!this.dataPoints||0===this.dataPoints.length)return null;var b={dataPoint:null,distance:Infinity,index:NaN},c=null,e=0,g=0,h=1,l=Infinity,t=0,k=0,r=0;"none"!==this.chart.plotInfo.axisPlacement&&(this.axisX.logarithmic?(r=Math.log(this.dataPoints[this.dataPoints.length-1].x/this.dataPoints[0].x),r=1<r?Math.min(Math.max((this.dataPoints.length-1)/r*Math.log(a/this.dataPoints[0].x)>>0,0),this.dataPoints.length):0):(r=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,r=
0<r?Math.min(Math.max((this.dataPoints.length-1)/r*(a-this.dataPoints[0].x)>>0,0),this.dataPoints.length):0));for(;;){g=0<h?r+e:r-e;if(0<=g&&g<this.dataPoints.length){var c=this.dataPoints[g],p=this.axisX.logarithmic?c.x>a?c.x/a:a/c.x:Math.abs(c.x-a);p<b.distance&&(b.dataPoint=c,b.distance=p,b.index=g);c=p;c<=l?l=c:0<h?t++:k++;if(1E3<t&&1E3<k)break}else if(0>r-e&&r+e>=this.dataPoints.length)break;-1===h?(e++,h=1):h=-1}return f||b.dataPoint.x!==a?f&&null!==b.dataPoint?b:null:b};R.prototype.getDataPointAtXY=
function(a,f,b){if(!this.dataPoints||0===this.dataPoints.length||a<this.chart.plotArea.x1||a>this.chart.plotArea.x2||f<this.chart.plotArea.y1||f>this.chart.plotArea.y2)return null;b=b||!1;var c=[],e=0,g=0,h=1,l=!1,t=Infinity,k=0,r=0,p=0;if("none"!==this.chart.plotInfo.axisPlacement)if(p=(this.chart.axisX[0]?this.chart.axisX[0]:this.chart.axisX2[0]).getXValueAt({x:a,y:f}),this.axisX.logarithmic)var n=Math.log(this.dataPoints[this.dataPoints.length-1].x/this.dataPoints[0].x),p=1<n?Math.min(Math.max((this.dataPoints.length-
1)/n*Math.log(p/this.dataPoints[0].x)>>0,0),this.dataPoints.length):0;else n=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,p=0<n?Math.min(Math.max((this.dataPoints.length-1)/n*(p-this.dataPoints[0].x)>>0,0),this.dataPoints.length):0;for(;;){g=0<h?p+e:p-e;if(0<=g&&g<this.dataPoints.length){var n=this.chart._eventManager.objectMap[this.dataPointIds[g]],d=this.dataPoints[g],m=null;if(n){switch(this.type){case "column":case "stackedColumn":case "stackedColumn100":case "bar":case "stackedBar":case "stackedBar100":case "rangeColumn":case "rangeBar":case "waterfall":case "error":a>=
n.x1&&(a<=n.x2&&f>=n.y1&&f<=n.y2)&&(c.push({dataPoint:d,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(n.x1-a),Math.abs(n.x2-a),Math.abs(n.y1-f),Math.abs(n.y2-f))}),l=!0);break;case "line":case "stepLine":case "spline":case "area":case "stepArea":case "stackedArea":case "stackedArea100":case "splineArea":case "scatter":var q=ma("markerSize",d,this)||4,s=b?20:q,m=Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y1-f,2));m<=s&&c.push({dataPoint:d,dataPointIndex:g,dataSeries:this,distance:m});n=
Math.abs(n.x1-a);n<=t?t=n:0<h?k++:r++;m<=q/2&&(l=!0);break;case "rangeArea":case "rangeSplineArea":q=ma("markerSize",d,this)||4;s=b?20:q;m=Math.min(Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y1-f,2)),Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y2-f,2)));m<=s&&c.push({dataPoint:d,dataPointIndex:g,dataSeries:this,distance:m});n=Math.abs(n.x1-a);n<=t?t=n:0<h?k++:r++;m<=q/2&&(l=!0);break;case "bubble":q=n.size;m=Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y1-f,2));m<=q/2&&(c.push({dataPoint:d,dataPointIndex:g,dataSeries:this,
distance:m}),l=!0);break;case "pie":case "doughnut":q=n.center;s="doughnut"===this.type?n.percentInnerRadius*n.radius:0;m=Math.sqrt(Math.pow(q.x-a,2)+Math.pow(q.y-f,2));m<n.radius&&m>s&&(m=Math.atan2(f-q.y,a-q.x),0>m&&(m+=2*Math.PI),m=Number(((180*(m/Math.PI)%360+360)%360).toFixed(12)),q=Number(((180*(n.startAngle/Math.PI)%360+360)%360).toFixed(12)),s=Number(((180*(n.endAngle/Math.PI)%360+360)%360).toFixed(12)),0===s&&1<n.endAngle&&(s=360),q>=s&&0!==d.y&&(s+=360,m<q&&(m+=360)),m>q&&m<s&&(c.push({dataPoint:d,
dataPointIndex:g,dataSeries:this,distance:0}),l=!0));break;case "funnel":case "pyramid":m=n.funnelSection;f>m.y1&&f<m.y4&&(m.y6?f>m.y6?(g=m.x6+(m.x5-m.x6)/(m.y5-m.y6)*(f-m.y6),m=m.x3+(m.x4-m.x3)/(m.y4-m.y3)*(f-m.y3)):(g=m.x1+(m.x6-m.x1)/(m.y6-m.y1)*(f-m.y1),m=m.x2+(m.x3-m.x2)/(m.y3-m.y2)*(f-m.y2)):(g=m.x1+(m.x4-m.x1)/(m.y4-m.y1)*(f-m.y1),m=m.x2+(m.x3-m.x2)/(m.y3-m.y2)*(f-m.y2)),a>g&&a<m&&(c.push({dataPoint:d,dataPointIndex:n.dataPointIndex,dataSeries:this,distance:0}),l=!0));break;case "boxAndWhisker":if(a>=
n.x1-n.borderThickness/2&&a<=n.x2+n.borderThickness/2&&f>=n.y4-n.borderThickness/2&&f<=n.y1+n.borderThickness/2||Math.abs(n.x2-a+n.x1-a)<n.borderThickness&&f>=n.y1&&f<=n.y4)c.push({dataPoint:d,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(n.x1-a),Math.abs(n.x2-a),Math.abs(n.y2-f),Math.abs(n.y3-f))}),l=!0;break;case "candlestick":if(a>=n.x1-n.borderThickness/2&&a<=n.x2+n.borderThickness/2&&f>=n.y2-n.borderThickness/2&&f<=n.y3+n.borderThickness/2||Math.abs(n.x2-a+n.x1-a)<n.borderThickness&&
f>=n.y1&&f<=n.y4)c.push({dataPoint:d,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(n.x1-a),Math.abs(n.x2-a),Math.abs(n.y2-f),Math.abs(n.y3-f))}),l=!0;break;case "ohlc":if(Math.abs(n.x2-a+n.x1-a)<n.borderThickness&&f>=n.y2&&f<=n.y3||a>=n.x1&&a<=(n.x2+n.x1)/2&&f>=n.y1-n.borderThickness/2&&f<=n.y1+n.borderThickness/2||a>=(n.x1+n.x2)/2&&a<=n.x2&&f>=n.y4-n.borderThickness/2&&f<=n.y4+n.borderThickness/2)c.push({dataPoint:d,dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(n.x1-a),
Math.abs(n.x2-a),Math.abs(n.y2-f),Math.abs(n.y3-f))}),l=!0}if(l||1E3<k&&1E3<r)break}}else if(0>p-e&&p+e>=this.dataPoints.length)break;-1===h?(e++,h=1):h=-1}a=null;for(f=0;f<c.length;f++)a?c[f].distance<=a.distance&&(a=c[f]):a=c[f];return a};R.prototype.getMarkerProperties=function(a,f,b,c){var e=this.dataPoints;return{x:f,y:b,ctx:c,type:e[a].markerType?e[a].markerType:this.markerType,size:e[a].markerSize?e[a].markerSize:this.markerSize,color:e[a].markerColor?e[a].markerColor:this.markerColor?this.markerColor:
e[a].color?e[a].color:this.color?this.color:this._colorSet[a%this._colorSet.length],borderColor:e[a].markerBorderColor?e[a].markerBorderColor:this.markerBorderColor?this.markerBorderColor:null,borderThickness:e[a].markerBorderThickness?e[a].markerBorderThickness:this.markerBorderThickness?this.markerBorderThickness:null}};oa(C,Y);C.prototype.createExtraLabelsForLog=function(a){a=(a||0)+1;if(!(5<a)){var f=this.logLabelValues[0]||this.intervalStartPosition;if(Math.log(this.range)/Math.log(f/this.viewportMinimum)<
this.noTicks-1){for(var b=C.getNiceNumber((f-this.viewportMinimum)/Math.min(Math.max(2,this.noTicks-this.logLabelValues.length),3),!0),c=Math.ceil(this.viewportMinimum/b)*b;c<f;c+=b)c<this.viewportMinimum||this.logLabelValues.push(c);this.logLabelValues.sort(Qa);this.createExtraLabelsForLog(a)}}};C.prototype.createLabels=function(){var a,f,b=0,c=0,e,g=0,h=0,c=0,c=this.interval,l=0,t,k=0.6*this.chart.height,m;a=!1;var p=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[],n=p.length?y(this.scaleBreaks.firstBreakIndex)?
0:this.scaleBreaks.firstBreakIndex:0;if("axisX"!==this.type||"dateTime"!==this.valueType||this.logarithmic){e=this.viewportMaximum;if(this.labels){a=Math.ceil(c);for(var c=Math.ceil(this.intervalStartPosition),d=!1,b=c;b<this.viewportMaximum;b+=a)if(this.labels[b])d=!0;else{d=!1;break}d&&(this.interval=a,this.intervalStartPosition=c)}if(this.logarithmic&&!this.equidistantInterval)for(this.logLabelValues||(this.logLabelValues=[],this.createExtraLabelsForLog()),c=0,d=n;c<this.logLabelValues.length;c++)if(b=
this.logLabelValues[c],b<this.viewportMinimum)c++;else{for(;d<p.length&&b>p[d].endValue;d++);a=d<p.length&&b>=p[d].startValue&&b<=p[d].endValue;m=b;a||(a=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.options,value:m,label:this.labels[m]?this.labels[m]:null}):"axisX"===this.type&&this.labels[m]?this.labels[m]:X(m,this.valueFormatString,this.chart._cultureInfo),a=new ka(this.ctx,{x:0,y:0,maxWidth:g,maxHeight:h,angle:this.labelAngle,text:this.prefix+a+this.suffix,backgroundColor:this.labelBackgroundColor,
borderColor:this.labelBorderColor,borderThickness:this.labelBorderThickness,cornerRadius:this.labelCornerRadius,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:m,textBlock:a,effectiveHeight:null}))}d=n;for(b=this.intervalStartPosition;b<=e;b=parseFloat(1E-12>this.interval?this.logarithmic&&this.equidistantInterval?
b*Math.pow(this.logarithmBase,this.interval):b+this.interval:(this.logarithmic&&this.equidistantInterval?b*Math.pow(this.logarithmBase,this.interval):b+this.interval).toFixed(12))){for(;d<p.length&&b>p[d].endValue;d++);a=d<p.length&&b>=p[d].startValue&&b<=p[d].endValue;m=b;a||(a=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.options,value:m,label:this.labels[m]?this.labels[m]:null}):"axisX"===this.type&&this.labels[m]?this.labels[m]:X(m,this.valueFormatString,this.chart._cultureInfo),
a=new ka(this.ctx,{x:0,y:0,maxWidth:g,maxHeight:h,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",backgroundColor:this.labelBackgroundColor,borderColor:this.labelBorderColor,borderThickness:this.labelBorderThickness,cornerRadius:this.labelCornerRadius,fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"}),this._labels.push({position:m,textBlock:a,effectiveHeight:null}))}}else for(this.intervalStartPosition=
this.getLabelStartPoint(new Date(this.viewportMinimum),this.intervalType,this.interval),e=Ua(new Date(this.viewportMaximum),this.interval,this.intervalType),d=n,b=this.intervalStartPosition;b<e;Ua(b,c,this.intervalType)){for(a=b.getTime();d<p.length&&a>p[d].endValue;d++);m=a;a=d<p.length&&a>=p[d].startValue&&a<=p[d].endValue;a||(a=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.options,value:new Date(m),label:this.labels[m]?this.labels[m]:null}):"axisX"===this.type&&this.labels[m]?
this.labels[m]:Ba(m,this.valueFormatString,this.chart._cultureInfo),a=new ka(this.ctx,{x:0,y:0,maxWidth:g,backgroundColor:this.labelBackgroundColor,borderColor:this.labelBorderColor,borderThickness:this.labelBorderThickness,cornerRadius:this.labelCornerRadius,maxHeight:h,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"}),
this._labels.push({position:m,textBlock:a,effectiveHeight:null,breaksLabelType:void 0}))}if("bottom"===this._position||"top"===this._position)l=this.logarithmic&&!this.equidistantInterval&&2<=this._labels.length?this.lineCoordinates.width*Math.log(Math.min(this._labels[this._labels.length-1].position/this._labels[this._labels.length-2].position,this._labels[1].position/this._labels[0].position))/Math.log(this.range):this.lineCoordinates.width/(this.logarithmic&&this.equidistantInterval?Math.log(this.range)/
Math.log(this.logarithmBase):Math.abs(this.range))*V[this.intervalType+"Duration"]*this.interval,g="undefined"===typeof this.options.labelMaxWidth?0.5*this.chart.width>>0:this.options.labelMaxWidth,this.chart.panEnabled||(h="undefined"===typeof this.options.labelWrap||this.labelWrap?0.8*this.chart.height>>0:1.5*this.labelFontSize);else if("left"===this._position||"right"===this._position)l=this.logarithmic&&!this.equidistantInterval&&2<=this._labels.length?this.lineCoordinates.height*Math.log(Math.min(this._labels[this._labels.length-
1].position/this._labels[this._labels.length-2].position,this._labels[1].position/this._labels[0].position))/Math.log(this.range):this.lineCoordinates.height/(this.logarithmic&&this.equidistantInterval?Math.log(this.range)/Math.log(this.logarithmBase):Math.abs(this.range))*V[this.intervalType+"Duration"]*this.interval,this.chart.panEnabled||(g="undefined"===typeof this.options.labelMaxWidth?0.3*this.chart.width>>0:this.options.labelMaxWidth),h="undefined"===typeof this.options.labelWrap||this.labelWrap?
0.3*this.chart.height>>0:1.5*this.labelFontSize;for(c=0;c<this._labels.length;c++){a=this._labels[c].textBlock;a.maxWidth=g;a.maxHeight=h;var q=a.measureText();t=q.height}e=[];n=p=0;if(this.labelAutoFit||this.options.labelAutoFit)if(y(this.labelAngle)||(this.labelAngle=(this.labelAngle%360+360)%360,90<this.labelAngle&&270>this.labelAngle?this.labelAngle-=180:270<=this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360)),"bottom"===this._position||"top"===this._position)if(g=0.9*l>>0,n=0,!this.chart.panEnabled&&
1<=this._labels.length){this.sessionVariables.labelFontSize=this.labelFontSize;this.sessionVariables.labelMaxWidth=g;this.sessionVariables.labelMaxHeight=h;this.sessionVariables.labelAngle=this.labelAngle;this.sessionVariables.labelWrap=this.labelWrap;for(b=0;b<this._labels.length;b++)if(!this._labels[b].breaksLabelType){a=this._labels[b].textBlock;for(var s,d=a.text.split(" "),c=0;c<d.length;c++)m=d[c],this.ctx.font=a.fontStyle+" "+a.fontWeight+" "+a.fontSize+"px "+a.fontFamily,m=this.ctx.measureText(m),
m.width>n&&(s=b,n=m.width)}b=0;for(b=this.intervalStartPosition<this.viewportMinimum?1:0;b<this._labels.length;b++)if(!this._labels[b].breaksLabelType){a=this._labels[b].textBlock;q=a.measureText();for(d=b+1;d<this._labels.length;d++)if(!this._labels[d].breaksLabelType){f=this._labels[d].textBlock;f=f.measureText();break}e.push(a.height);this.sessionVariables.labelMaxHeight=Math.max.apply(Math,e);Math.cos(Math.PI/180*Math.abs(this.labelAngle));Math.sin(Math.PI/180*Math.abs(this.labelAngle));c=g*Math.sin(Math.PI/
180*Math.abs(this.labelAngle))+(h-a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle));if(y(this.options.labelAngle)&&isNaN(this.options.labelAngle)&&0!==this.options.labelAngle)if(this.sessionVariables.labelMaxHeight=0===this.labelAngle?h:Math.min((c-g*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/Math.sin(Math.PI/180*Math.abs(this.labelAngle)),c),m=(k-(t+a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(-25)))/Math.sin(Math.PI/180*Math.abs(-25)),!y(this.options.labelWrap))this.labelWrap?y(this.options.labelMaxWidth)?
(this.sessionVariables.labelMaxWidth=Math.min(Math.max(g,n),m),this.sessionVariables.labelWrap=this.labelWrap,q.width+f.width>>0>2*g&&(this.sessionVariables.labelAngle=-25)):(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth,this.sessionVariables.labelAngle=this.sessionVariables.labelMaxWidth>g?-25:this.sessionVariables.labelAngle):y(this.options.labelMaxWidth)?(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxHeight=
h,this.sessionVariables.labelMaxWidth=g,q.width+f.width>>0>2*g&&(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=m)):(this.sessionVariables.labelAngle=this.sessionVariables.labelMaxWidth>g?-25:this.sessionVariables.labelAngle,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth,this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelWrap=this.labelWrap);else{if(y(this.options.labelWrap))if(!y(this.options.labelMaxWidth))this.options.labelMaxWidth<g?(this.sessionVariables.labelMaxWidth=
this.options.labelMaxWidth,this.sessionVariables.labelMaxHeight=c):(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth,this.sessionVariables.labelMaxHeight=h);else if(!y(f))if(c=q.width+f.width>>0,d=this.labelFontSize,n<g)c-2*g>p&&(p=c-2*g,c>=2*g&&c<2.2*g?(this.sessionVariables.labelMaxWidth=g,y(this.options.labelFontSize)&&12<d&&(d=Math.floor(12/13*d),a.measureText()),this.sessionVariables.labelFontSize=y(this.options.labelFontSize)?d:this.options.labelFontSize,
this.sessionVariables.labelAngle=this.labelAngle):c>=2.2*g&&c<2.8*g?(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=m,this.sessionVariables.labelFontSize=d):c>=2.8*g&&c<3.2*g?(this.sessionVariables.labelMaxWidth=Math.max(g,n),this.sessionVariables.labelWrap=!0,y(this.options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=y(this.options.labelFontSize)?d:this.options.labelFontSize,
this.sessionVariables.labelAngle=this.labelAngle):c>=3.2*g&&c<3.6*g?(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelMaxWidth=m,this.sessionVariables.labelFontSize=this.labelFontSize):c>3.6*g&&c<5*g?(y(this.options.labelFontSize)&&12<d&&(d=Math.floor(12/13*d),a.measureText()),this.sessionVariables.labelFontSize=y(this.options.labelFontSize)?d:this.options.labelFontSize,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=
m):c>5*g&&(this.sessionVariables.labelWrap=!0,this.sessionVariables.labelMaxWidth=g,this.sessionVariables.labelFontSize=d,this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelAngle=this.labelAngle));else if(s===b&&(0===s&&n+this._labels[s+1].textBlock.measureText().width-2*g>p||s===this._labels.length-1&&n+this._labels[s-1].textBlock.measureText().width-2*g>p||0<s&&s<this._labels.length-1&&n+this._labels[s+1].textBlock.measureText().width-2*g>p&&n+this._labels[s-1].textBlock.measureText().width-
2*g>p))p=0===s?n+this._labels[s+1].textBlock.measureText().width-2*g:n+this._labels[s-1].textBlock.measureText().width-2*g,this.sessionVariables.labelFontSize=y(this.options.labelFontSize)?d:this.options.labelFontSize,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=m;else if(0===p)for(this.sessionVariables.labelFontSize=y(this.options.labelFontSize)?d:this.options.labelFontSize,this.sessionVariables.labelWrap=!0,c=0;c<this._labels.length;c++)a=
this._labels[c].textBlock,a.maxWidth=this.sessionVariables.labelMaxWidth=Math.min(Math.max(g,n),m),q=a.measureText(),c<this._labels.length-1&&(d=c+1,f=this._labels[d].textBlock,f.maxWidth=this.sessionVariables.labelMaxWidth=Math.min(Math.max(g,n),m),f=f.measureText(),q.width+f.width>>0>2*g&&(this.sessionVariables.labelAngle=-25))}else(this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelMaxHeight=0===this.labelAngle?h:Math.min((c-g*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/
Math.sin(Math.PI/180*Math.abs(this.labelAngle)),c),m=0!=this.labelAngle?(k-(t+a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/Math.sin(Math.PI/180*Math.abs(this.labelAngle)):g,this.sessionVariables.labelMaxHeight=h=this.labelWrap?(k-m*Math.sin(Math.PI/180*Math.abs(this.labelAngle)))/Math.cos(Math.PI/180*Math.abs(this.labelAngle)):1.5*this.labelFontSize,y(this.options.labelWrap))?y(this.options.labelWrap)&&(this.labelWrap&&!y(this.options.labelMaxWidth)?(this.sessionVariables.labelWrap=
this.labelWrap,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:m,this.sessionVariables.labelMaxHeight=h):(this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelMaxWidth=m,this.sessionVariables.labelMaxHeight=c<0.9*l?0.9*l:c,this.sessionVariables.labelWrap=this.labelWrap)):(this.options.labelWrap?(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:m):
(y(this.options.labelMaxWidth),this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:m,this.sessionVariables.labelWrap=this.labelWrap),this.sessionVariables.labelMaxHeight=h)}for(c=0;c<this._labels.length;c++)a=this._labels[c].textBlock,a.maxWidth=this.labelMaxWidth=this.sessionVariables.labelMaxWidth,a.fontSize=this.sessionVariables.labelFontSize,a.angle=this.labelAngle=this.sessionVariables.labelAngle,a.wrap=this.labelWrap=this.sessionVariables.labelWrap,a.maxHeight=
this.sessionVariables.labelMaxHeight,a.measureText()}else for(b=0;b<this._labels.length;b++)a=this._labels[b].textBlock,a.maxWidth=this.labelMaxWidth=y(this.options.labelMaxWidth)?this.sessionVariables.labelMaxWidth:this.options.labelMaxWidth,a.fontSize=this.labelFontSize=y(this.options.labelFontSize)?this.sessionVariables.labelFontSize:this.options.labelFontSize,a.angle=this.labelAngle=y(this.options.labelAngle)?this.sessionVariables.labelAngle:this.labelAngle,a.wrap=this.labelWrap=y(this.options.labelWrap)?
this.sessionVariables.labelWrap:this.options.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText();else if("left"===this._position||"right"===this._position)if(g=y(this.options.labelMaxWidth)?0.3*this.chart.width>>0:this.options.labelMaxWidth,h="undefined"===typeof this.options.labelWrap||this.labelWrap?0.3*this.chart.height>>0:1.5*this.labelFontSize,!this.chart.panEnabled&&1<=this._labels.length){this.sessionVariables.labelFontSize=this.labelFontSize;this.sessionVariables.labelMaxWidth=
g;this.sessionVariables.labelMaxHeight=h;this.sessionVariables.labelAngle=y(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle;this.sessionVariables.labelWrap=this.labelWrap;for(b=0;b<this._labels.length;b++)if(!this._labels[b].breaksLabelType){a=this._labels[b].textBlock;q=a.measureText();for(d=b+1;d<this._labels.length;d++)if(!this._labels[d].breaksLabelType){f=this._labels[d].textBlock;f=f.measureText();break}e.push(a.height);this.sessionVariables.labelMaxHeight=Math.max.apply(Math,
e);c=g*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(h-a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle));Math.cos(Math.PI/180*Math.abs(this.labelAngle));Math.sin(Math.PI/180*Math.abs(this.labelAngle));y(this.options.labelAngle)&&isNaN(this.options.labelAngle)&&0!==this.options.labelAngle?y(this.options.labelWrap)?y(this.options.labelWrap)&&(y(this.options.labelMaxWidth)?y(f)||(l=q.height+f.height>>0,l-2*h>n&&(n=l-2*h,l>=2*h&&l<2.4*h?(y(this.options.labelFontSize)&&12<this.labelFontSize&&
(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelFontSize=y(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize):l>=2.4*h&&l<2.8*h?(this.sessionVariables.labelMaxHeight=c,this.sessionVariables.labelFontSize=this.labelFontSize,this.sessionVariables.labelWrap=!0):l>=2.8*h&&l<3.2*h?(this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelWrap=!0,y(this.options.labelFontSize)&&12<
this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=y(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize,this.sessionVariables.labelAngle=y(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle):l>=3.2*h&&l<3.6*h?(this.sessionVariables.labelMaxHeight=c,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelFontSize=this.labelFontSize):l>3.6*h&&l<10*h?(y(this.options.labelFontSize)&&
12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=y(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize,this.sessionVariables.labelMaxWidth=g,this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelAngle=y(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle):l>10*h&&l<50*h&&(y(this.options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),
a.measureText()),this.sessionVariables.labelFontSize=y(this.options.labelFontSize)?this.labelFontSize:this.options.labelFontSize,this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelMaxWidth=g,this.sessionVariables.labelAngle=y(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle))):(this.sessionVariables.labelMaxHeight=h,this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth)):(this.sessionVariables.labelMaxWidth=
this.labelWrap?this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth:this.labelMaxWidth?this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth:g,this.sessionVariables.labelMaxHeight=h):(this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelMaxWidth=0===this.labelAngle?g:Math.min((c-h*Math.sin(Math.PI/180*Math.abs(this.labelAngle)))/Math.cos(Math.PI/180*Math.abs(this.labelAngle)),h),y(this.options.labelWrap))?
y(this.options.labelWrap)&&(this.labelWrap&&!y(this.options.labelMaxWidth)?(this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth>this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth,this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxHeight=c):(this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:g,this.sessionVariables.labelMaxHeight=0===this.labelAngle?h:c,y(this.options.labelMaxWidth)&&
(this.sessionVariables.labelAngle=this.labelAngle))):this.options.labelWrap?(this.sessionVariables.labelMaxHeight=0===this.labelAngle?h:c,this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=g):(this.sessionVariables.labelMaxHeight=h,y(this.options.labelMaxWidth),this.sessionVariables.labelMaxWidth=this.options.labelMaxWidth?this.options.labelMaxWidth:this.sessionVariables.labelMaxWidth,this.sessionVariables.labelWrap=this.labelWrap)}for(c=0;c<this._labels.length;c++)a=
this._labels[c].textBlock,a.maxWidth=this.labelMaxWidth=this.sessionVariables.labelMaxWidth,a.fontSize=this.labelFontSize=this.sessionVariables.labelFontSize,a.angle=this.labelAngle=this.sessionVariables.labelAngle,a.wrap=this.labelWrap=this.sessionVariables.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText()}else for(b=0;b<this._labels.length;b++)a=this._labels[b].textBlock,a.maxWidth=this.labelMaxWidth=y(this.options.labelMaxWidth)?this.sessionVariables.labelMaxWidth:this.options.labelMaxWidth,
a.fontSize=this.labelFontSize=y(this.options.labelFontSize)?this.sessionVariables.labelFontSize:this.options.labelFontSize,a.angle=this.labelAngle=y(this.options.labelAngle)?this.sessionVariables.labelAngle:this.labelAngle,a.wrap=this.labelWrap=y(this.options.labelWrap)?this.sessionVariables.labelWrap:this.options.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText();for(b=0;b<this.stripLines.length;b++){var g=this.stripLines[b],x;if("outside"===g.labelPlacement){h=this.sessionVariables.labelMaxWidth;
if("bottom"===this._position||"top"===this._position)x=y(g.options.labelWrap)?this.sessionVariables.labelMaxHeight:g.labelWrap?0.8*this.chart.height>>0:1.5*this.labelFontSize;if("left"===this._position||"right"===this._position)x=y(g.options.labelWrap)?this.sessionVariables.labelMaxHeight:g.labelWrap?0.8*this.chart.width>>0:1.5*this.labelFontSize;y(g.labelBackgroundColor)&&(g.labelBackgroundColor="#EEEEEE")}else h="bottom"===this._position||"top"===this._position?0.9*this.chart.width>>0:0.9*this.chart.height>>
0,x=y(g.options.labelWrap)||g.labelWrap?"bottom"===this._position||"top"===this._position?0.8*this.chart.width>>0:0.8*this.chart.height>>0:1.5*this.labelFontSize,y(g.labelBackgroundColor)&&(y(g.startValue)&&0!==g.startValue?g.labelBackgroundColor=v?"transparent":null:g.labelBackgroundColor="#EEEEEE");a=new ka(this.ctx,{x:0,y:0,backgroundColor:g.labelBackgroundColor,borderColor:g.labelBorderColor,borderThickness:g.labelBorderThickness,cornerRadius:g.labelCornerRadius,maxWidth:g.options.labelMaxWidth?
g.options.labelMaxWidth:h,maxHeight:x,angle:this.labelAngle,text:g.labelFormatter?g.labelFormatter({chart:this.chart,axis:this,stripLine:g}):g.label,horizontalAlign:"left",fontSize:"outside"===g.labelPlacement?g.options.labelFontSize?g.labelFontSize:this.labelFontSize:g.labelFontSize,fontFamily:"outside"===g.labelPlacement?g.options.labelFontFamily?g.labelFontFamily:this.labelFontFamily:g.labelFontFamily,fontWeight:"outside"===g.labelPlacement?g.options.labelFontWeight?g.labelFontWeight:this.labelFontWeight:
g.labelFontWeight,fontColor:g.labelFontColor||g.color,fontStyle:"outside"===g.labelPlacement?g.options.labelFontStyle?g.labelFontStyle:this.fontWeight:g.labelFontStyle,textBaseline:"middle"});this._stripLineLabels.push({position:g.value,textBlock:a,effectiveHeight:null,stripLine:g})}};C.prototype.createLabelsAndCalculateWidth=function(){var a=0,f=0;this._labels=[];this._stripLineLabels=[];if("left"===this._position||"right"===this._position){this.createLabels();for(f=0;f<this._labels.length;f++){var b=
this._labels[f].textBlock,c=b.measureText(),e=0,e=0===this.labelAngle?c.width:c.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+(c.height-b.fontSize/2)*Math.sin(Math.PI/180*Math.abs(this.labelAngle));a<e&&(a=e);this._labels[f].effectiveWidth=e}for(f=0;f<this._stripLineLabels.length;f++)"outside"===this._stripLineLabels[f].stripLine.labelPlacement&&(this._stripLineLabels[f].stripLine.value>=this.viewportMinimum&&this._stripLineLabels[f].stripLine.value<=this.viewportMaximum)&&(b=this._stripLineLabels[f].textBlock,
c=b.measureText(),e=0===this.labelAngle?c.width:c.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+(c.height-b.fontSize/2)*Math.sin(Math.PI/180*Math.abs(this.labelAngle)),a<e&&(a=e),this._stripLineLabels[f].effectiveWidth=e)}f=this.title?this._titleTextBlock.measureText().height+2:0;return b="inside"===this.labelPlacement?b=f+5:f+a+this.tickLength+5};C.prototype.createLabelsAndCalculateHeight=function(){var a=0;this._labels=[];this._stripLineLabels=[];var f,b=0;this.createLabels();if("bottom"===
this._position||"top"===this._position){for(b=0;b<this._labels.length;b++){f=this._labels[b].textBlock;var c=f.measureText(),e=0,e=0===this.labelAngle?c.height:c.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(c.height-f.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle));a<e&&(a=e);this._labels[b].effectiveHeight=e}for(b=0;b<this._stripLineLabels.length;b++)"outside"===this._stripLineLabels[b].stripLine.labelPlacement&&(this._stripLineLabels[b].stripLine.value>=this.viewportMinimum&&
this._stripLineLabels[b].stripLine.value<=this.viewportMaximum)&&(f=this._stripLineLabels[b].textBlock,c=f.measureText(),e=0===this.labelAngle?c.height:c.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(c.height-f.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle)),a<e&&(a=e),this._stripLineLabels[b].effectiveHeight=e)}f=this.title?this._titleTextBlock.measureText().height+2:0;return b="inside"===this.labelPlacement?b=f+5:f+a+this.tickLength+5};C.setLayoutAndRender=function(a,f,b,c,
e,g){var h,l,t,k,m=a[0]?a[0].chart:f[0].chart,p=m.ctx,n=m._axes;if(a&&0<a.length)for(var d=0;d<a.length;d++)a[d]&&a[d].calculateAxisParameters();if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].calculateAxisParameters();if(b&&0<b.length)for(d=0;d<b.length;d++)b[d].calculateAxisParameters();if(c&&0<c.length)for(d=0;d<c.length;d++)c[d].calculateAxisParameters();for(d=0;d<n.length;d++)if(n[d]&&n[d].scaleBreaks&&n[d].scaleBreaks._appliedBreaks.length)for(var q=n[d].scaleBreaks._appliedBreaks,s=0;s<q.length&&
!(q[s].startValue>n[d].viewportMaximum);s++)q[s].endValue<n[d].viewportMinimum||(y(n[d].scaleBreaks.firstBreakIndex)&&(n[d].scaleBreaks.firstBreakIndex=s),q[s].startValue>=n[d].viewPortMinimum&&(n[d].scaleBreaks.lastBreakIndex=s));for(var x=s=0,u=0,z=0,C=0,G=0,B=0,A,I,M=l=0,K,J,O,q=K=J=O=!1,d=0;d<n.length;d++)n[d]&&n[d].title&&(n[d]._titleTextBlock=new ka(n[d].ctx,{text:n[d].title,horizontalAlign:"center",fontSize:n[d].titleFontSize,fontFamily:n[d].titleFontFamily,fontWeight:n[d].titleFontWeight,
fontColor:n[d].titleFontColor,fontStyle:n[d].titleFontStyle,borderColor:n[d].titleBorderColor,borderThickness:n[d].titleBorderThickness,backgroundColor:n[d].titleBackgroundColor,cornerRadius:n[d].titleCornerRadius,textBaseline:"top"}));for(d=0;d<n.length;d++)if(n[d].title)switch(n[d]._position){case "left":n[d]._titleTextBlock.maxWidth=n[d].titleMaxWidth||g.height;n[d]._titleTextBlock.maxHeight=n[d].titleWrap?0.8*g.width:1.5*n[d].titleFontSize;n[d]._titleTextBlock.angle=-90;break;case "right":n[d]._titleTextBlock.maxWidth=
n[d].titleMaxWidth||g.height;n[d]._titleTextBlock.maxHeight=n[d].titleWrap?0.8*g.width:1.5*n[d].titleFontSize;n[d]._titleTextBlock.angle=90;break;default:n[d]._titleTextBlock.maxWidth=n[d].titleMaxWidth||g.width,n[d]._titleTextBlock.maxHeight=n[d].titleWrap?0.8*g.height:1.5*n[d].titleFontSize,n[d]._titleTextBlock.angle=0}if("normal"===e){for(var z=[],C=[],G=[],B=[],P=[],Q=[],S=[],R=[];4>s;){var E=0,U=0,V=0,Y=0,W=e=0,L=0,$=0,Z=0,X=0,N=0,ba=0;if(b&&0<b.length)for(G=[],d=N=0;d<b.length;d++)G.push(Math.ceil(b[d]?
b[d].createLabelsAndCalculateWidth():0)),N+=G[d],L+=b[d]?b[d].margin:0;else G.push(Math.ceil(b[0]?b[0].createLabelsAndCalculateWidth():0));S.push(G);if(c&&0<c.length)for(B=[],d=ba=0;d<c.length;d++)B.push(Math.ceil(c[d]?c[d].createLabelsAndCalculateWidth():0)),ba+=B[d],$+=c[d]?c[d].margin:0;else B.push(Math.ceil(c[0]?c[0].createLabelsAndCalculateWidth():0));R.push(B);h=Math.round(g.x1+N+L);t=Math.round(g.x2-ba-$>m.width-10?m.width-10:g.x2-ba-$);if(a&&0<a.length)for(z=[],d=Z=0;d<a.length;d++)a[d]&&
(a[d].lineCoordinates={}),a[d].lineCoordinates.width=Math.abs(t-h),a[d].title&&(a[d]._titleTextBlock.maxWidth=0<a[d].titleMaxWidth&&a[d].titleMaxWidth<a[d].lineCoordinates.width?a[d].titleMaxWidth:a[d].lineCoordinates.width),z.push(Math.ceil(a[d]?a[d].createLabelsAndCalculateHeight():0)),Z+=z[d],e+=a[d]?a[d].margin:0;else z.push(Math.ceil(a[0]?a[0].createLabelsAndCalculateHeight():0));P.push(z);if(f&&0<f.length)for(C=[],d=X=0;d<f.length;d++)f[d]&&(f[d].lineCoordinates={}),f[d].lineCoordinates.width=
Math.abs(t-h),f[d].title&&(f[d]._titleTextBlock.maxWidth=0<f[d].titleMaxWidth&&f[d].titleMaxWidth<f[d].lineCoordinates.width?f[d].titleMaxWidth:f[d].lineCoordinates.width),C.push(Math.ceil(f[d]?f[d].createLabelsAndCalculateHeight():0)),X+=C[d],W+=f[d]?f[d].margin:0;else C.push(Math.ceil(f[0]?f[0].createLabelsAndCalculateHeight():0));Q.push(C);if(a&&0<a.length)for(d=0;d<a.length;d++)a[d]&&(a[d].lineCoordinates.x1=h,t=Math.round(g.x2-ba-$>m.width-10?m.width-10:g.x2-ba-$),a[d]._labels&&1<a[d]._labels.length&&
(l=k=0,k=a[d]._labels[1],l="dateTime"===a[d].valueType?a[d]._labels[a[d]._labels.length-2]:a[d]._labels[a[d]._labels.length-1],x=k.textBlock.width*Math.cos(Math.PI/180*Math.abs(k.textBlock.angle))+(k.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(k.textBlock.angle)),u=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(l.textBlock.angle))),a[d]&&(a[d].labelAutoFit&&!y(A)&&!y(I))&&(l=0,
0<a[d].labelAngle?I+u>t&&(l+=0<a[d].labelAngle?I+u-t-ba:0):0>a[d].labelAngle?A-x<h&&A-x<a[d].viewportMinimum&&(M=h-(L+a[d].tickLength+G+A-x+a[d].labelFontSize/2)):0===a[d].labelAngle&&(I+u>t&&(l=I+u/2-t-ba),A-x<h&&A-x<a[d].viewportMinimum&&(M=h-L-a[d].tickLength-G-A+x/2)),a[d].viewportMaximum===a[d].maximum&&a[d].viewportMinimum===a[d].minimum&&0<a[d].labelAngle&&0<l?t-=l:a[d].viewportMaximum===a[d].maximum&&a[d].viewportMinimum===a[d].minimum&&0>a[d].labelAngle&&0<M?h+=M:a[d].viewportMaximum===a[d].maximum&&
a[d].viewportMinimum===a[d].minimum&&0===a[d].labelAngle&&(0<M&&(h+=M),0<l&&(t-=l))),m.panEnabled?Z=m.sessionVariables.axisX.height:m.sessionVariables.axisX.height=Z,l=Math.round(g.y2-Z-e+E),k=Math.round(g.y2),a[d].lineCoordinates.x2=t,a[d].lineCoordinates.width=t-h,a[d].lineCoordinates.y1=l,a[d].lineCoordinates.y2=l,a[d].bounds={x1:h,y1:l,x2:t,y2:k-(Z+e-z[d]-E),width:t-h,height:k-l}),E+=z[d]+a[d].margin;if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].lineCoordinates.x1=Math.round(g.x1+N+L),f[d].lineCoordinates.x2=
Math.round(g.x2-ba-$>m.width-10?m.width-10:g.x2-ba-$),f[d].lineCoordinates.width=Math.abs(t-h),f[d]._labels&&1<f[d]._labels.length&&(k=f[d]._labels[1],l="dateTime"===f[d].valueType?f[d]._labels[f[d]._labels.length-2]:f[d]._labels[f[d]._labels.length-1],x=k.textBlock.width*Math.cos(Math.PI/180*Math.abs(k.textBlock.angle))+(k.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(k.textBlock.angle)),u=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-
l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(l.textBlock.angle))),m.panEnabled?X=m.sessionVariables.axisX2.height:m.sessionVariables.axisX2.height=X,l=Math.round(g.y1),k=Math.round(g.y2+f[d].margin),f[d].lineCoordinates.y1=l+X+W-U,f[d].lineCoordinates.y2=l,f[d].bounds={x1:h,y1:l+(X+W-C[d]-U),x2:t,y2:k,width:t-h,height:k-l},U+=C[d]+f[d].margin;if(b&&0<b.length)for(d=0;d<b.length;d++)L=10,b[d]&&(h=Math.round(a[0]?a[0].lineCoordinates.x1:f[0].lineCoordinates.x1),L=b[d]._labels&&0<b[d]._labels.length?
b[d]._labels[b[d]._labels.length-1].textBlock.height/2:10,l=Math.round(g.y1+X+W<Math.max(L,10)?Math.max(L,10):g.y1+X+W),t=Math.round(a[0]?a[0].lineCoordinates.x1:f[0].lineCoordinates.x1),L=0<a.length?0:b[d]._labels&&0<b[d]._labels.length?b[d]._labels[0].textBlock.height/2:10,k=Math.round(g.y2-Z-e-L),b[d].lineCoordinates={x1:t-V,y1:l,x2:t-V,y2:k,height:Math.abs(k-l)},b[d].bounds={x1:h-(G[d]+V),y1:l,x2:t,y2:k,width:t-h,height:k-l},b[d].title&&(b[d]._titleTextBlock.maxWidth=0<b[d].titleMaxWidth&&b[d].titleMaxWidth<
b[d].lineCoordinates.height?b[d].titleMaxWidth:b[d].lineCoordinates.height),V+=G[d]+b[d].margin);if(c&&0<c.length)for(d=0;d<c.length;d++)c[d]&&(h=Math.round(a[0]?a[0].lineCoordinates.x2:f[0].lineCoordinates.x2),t=Math.round(h),L=c[d]._labels&&0<c[d]._labels.length?c[d]._labels[c[d]._labels.length-1].textBlock.height/2:0,l=Math.round(g.y1+X+W<Math.max(L,10)?Math.max(L,10):g.y1+X+W),L=0<a.length?0:c[d]._labels&&0<c[d]._labels.length?c[d]._labels[0].textBlock.height/2:0,k=Math.round(g.y2-(Z+e+L)),c[d].lineCoordinates=
{x1:h+Y,y1:l,x2:h+Y,y2:k,height:Math.abs(k-l)},c[d].bounds={x1:h,y1:l,x2:t+(B[d]+Y),y2:k,width:t-h,height:k-l},c[d].title&&(c[d]._titleTextBlock.maxWidth=0<c[d].titleMaxWidth&&c[d].titleMaxWidth<c[d].lineCoordinates.height?c[d].titleMaxWidth:c[d].lineCoordinates.height),Y+=B[d]+c[d].margin);if(a&&0<a.length)for(d=0;d<a.length;d++)a[d]&&(a[d].calculateValueToPixelConversionParameters(),a[d].calculateBreaksSizeInValues(),a[d]._labels&&1<a[d]._labels.length&&(A=(a[d].logarithmic?Math.log(a[d]._labels[1].position/
a[d].viewportMinimum)/a[d].conversionParameters.lnLogarithmBase:a[d]._labels[1].position-a[d].viewportMinimum)*Math.abs(a[d].conversionParameters.pixelPerUnit)+a[d].lineCoordinates.x1,h=a[d]._labels[a[d]._labels.length-("dateTime"===a[d].valueType?2:1)].position,h=a[d].getApparentDifference(a[d].viewportMinimum,h),I=a[d].logarithmic?(1<h?Math.log(h)/a[d].conversionParameters.lnLogarithmBase*Math.abs(a[d].conversionParameters.pixelPerUnit):0)+a[d].lineCoordinates.x1:(0<h?h*Math.abs(a[d].conversionParameters.pixelPerUnit):
0)+a[d].lineCoordinates.x1));if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].calculateValueToPixelConversionParameters(),f[d].calculateBreaksSizeInValues(),f[d]._labels&&1<f[d]._labels.length&&(A=(f[d].logarithmic?Math.log(f[d]._labels[1].position/f[d].viewportMinimum)/f[d].conversionParameters.lnLogarithmBase:f[d]._labels[1].position-f[d].viewportMinimum)*Math.abs(f[d].conversionParameters.pixelPerUnit)+f[d].lineCoordinates.x1,h=f[d]._labels[f[d]._labels.length-("dateTime"===f[d].valueType?2:1)].position,
h=f[d].getApparentDifference(f[d].viewportMinimum,h),I=f[d].logarithmic?(1<h?Math.log(h)/f[d].conversionParameters.lnLogarithmBase*Math.abs(f[d].conversionParameters.pixelPerUnit):0)+f[d].lineCoordinates.x1:(0<h?h*Math.abs(f[d].conversionParameters.pixelPerUnit):0)+f[d].lineCoordinates.x1);for(d=0;d<n.length;d++)"axisY"===n[d].type&&(n[d].calculateValueToPixelConversionParameters(),n[d].calculateBreaksSizeInValues());if(0<s){if(a&&0<a.length)for(d=0;d<a.length;d++)q=P[s-1][d]===P[s][d]?!0:!1;else q=
!0;if(f&&0<f.length)for(d=0;d<f.length;d++)K=Q[s-1][d]===Q[s][d]?!0:!1;else K=!0;if(b&&0<b.length)for(d=0;d<b.length;d++)J=S[s-1][d]===S[s][d]?!0:!1;else J=!0;if(c&&0<c.length)for(d=0;d<c.length;d++)O=R[s-1][d]===R[s][d]?!0:!1;else O=!0}if(q&&K&&J&&O)break;s++}p.save();p.beginPath();a[0]&&p.rect(5,a[0].bounds.y1,a[0].chart.width-10,a[0].bounds.height);f[0]&&p.rect(5,f[f.length-1].bounds.y1,f[0].chart.width-10,f[0].bounds.height);p.clip();if(a&&0<a.length)for(d=0;d<a.length;d++)a[d].calculateStripLinesThicknessInValues(),
a[d].calculateBreaksInPixels(),a[d].renderLabelsTicksAndTitle();if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].calculateStripLinesThicknessInValues(),f[d].calculateBreaksInPixels(),f[d].renderLabelsTicksAndTitle();p.restore();if(b&&0<b.length)for(d=0;d<b.length;d++)b[d].calculateStripLinesThicknessInValues(),b[d].calculateBreaksInPixels(),b[d].renderLabelsTicksAndTitle();if(c&&0<c.length)for(d=0;d<c.length;d++)c[d].calculateStripLinesThicknessInValues(),c[d].calculateBreaksInPixels(),c[d].renderLabelsTicksAndTitle()}else{A=
[];M=[];x=[];I=[];u=[];P=[];Q=[];for(S=[];4>s;){X=Z=N=Y=$=L=W=e=V=R=U=E=0;if(a&&0<a.length)for(x=[],d=Z=0;d<a.length;d++)x.push(Math.ceil(a[d]?a[d].createLabelsAndCalculateWidth():0)),Z+=x[d],e+=a[d]?a[d].margin:0;else x.push(Math.ceil(a[0]?a[0].createLabelsAndCalculateWidth():0));Q.push(x);if(f&&0<f.length)for(I=[],d=X=0;d<f.length;d++)I.push(Math.ceil(f[d]?f[d].createLabelsAndCalculateWidth():0)),X+=I[d],W+=f[d]?f[d].margin:0;else I.push(Math.ceil(f[0]?f[0].createLabelsAndCalculateWidth():0));S.push(I);
if(b&&0<b.length)for(d=0;d<b.length;d++)b[d].lineCoordinates={},h=Math.round(g.x1+Z+e),t=Math.round(g.x2-X-W>m.width-10?m.width-10:g.x2-X-W),b[d].labelAutoFit&&!y(z)&&(0<!a.length&&(h=0>b[d].labelAngle?Math.max(h,z):0===b[d].labelAngle?Math.max(h,z/2):h),0<!f.length&&(t=0<b[d].labelAngle?t-C/2:0===b[d].labelAngle?t-C/2:t)),b[d].lineCoordinates.x1=h,b[d].lineCoordinates.x2=t,b[d].lineCoordinates.width=Math.abs(t-h),b[d].title&&(b[d]._titleTextBlock.maxWidth=0<b[d].titleMaxWidth&&b[d].titleMaxWidth<
b[d].lineCoordinates.width?b[d].titleMaxWidth:b[d].lineCoordinates.width);if(c&&0<c.length)for(d=0;d<c.length;d++)c[d].lineCoordinates={},h=Math.round(g.x1+Z+e),t=Math.round(g.x2-X-W>c[d].chart.width-10?c[d].chart.width-10:g.x2-X-W),c[d]&&c[d].labelAutoFit&&!y(G)&&(0<!a.length&&(h=0<c[d].labelAngle?Math.max(h,G):0===c[d].labelAngle?Math.max(h,G/2):h),0<!f.length&&(t-=B/2)),c[d].lineCoordinates.x1=h,c[d].lineCoordinates.x2=t,c[d].lineCoordinates.width=Math.abs(t-h),c[d].title&&(c[d]._titleTextBlock.maxWidth=
0<c[d].titleMaxWidth&&c[d].titleMaxWidth<c[d].lineCoordinates.width?c[d].titleMaxWidth:c[d].lineCoordinates.width);if(b&&0<b.length)for(A=[],d=Y=0;d<b.length;d++)A.push(Math.ceil(b[d]?b[d].createLabelsAndCalculateHeight():0)),Y+=A[d]+b[d].margin,L+=b[d].margin;else A.push(Math.ceil(b[0]?b[0].createLabelsAndCalculateHeight():0));u.push(A);if(c&&0<c.length)for(M=[],d=N=0;d<c.length;d++)M.push(Math.ceil(c[d]?c[d].createLabelsAndCalculateHeight():0)),N+=M[d],$+=c[d].margin;else M.push(Math.ceil(c[0]?
c[0].createLabelsAndCalculateHeight():0));P.push(M);if(b&&0<b.length)for(d=0;d<b.length;d++)0<b[d]._labels.length&&(k=b[d]._labels[0],l=b[d]._labels[b[d]._labels.length-1],z=k.textBlock.width*Math.cos(Math.PI/180*Math.abs(k.textBlock.angle))+(k.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(k.textBlock.angle)),C=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(l.textBlock.angle)));
if(c&&0<c.length)for(d=0;d<c.length;d++)c[d]&&0<c[d]._labels.length&&(k=c[d]._labels[0],l=c[d]._labels[c[d]._labels.length-1],G=k.textBlock.width*Math.cos(Math.PI/180*Math.abs(k.textBlock.angle))+(k.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(k.textBlock.angle)),B=l.textBlock.width*Math.cos(Math.PI/180*Math.abs(l.textBlock.angle))+(l.textBlock.height-l.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(l.textBlock.angle)));if(m.panEnabled)for(d=0;d<b.length;d++)A[d]=m.sessionVariables.axisY.height;
else for(d=0;d<b.length;d++)m.sessionVariables.axisY.height=A[d];if(b&&0<b.length)for(d=b.length-1;0<=d;d--)l=Math.round(g.y2),k=Math.round(g.y2>b[d].chart.height-10?b[d].chart.height-10:g.y2),b[d].lineCoordinates.y1=l-(A[d]+b[d].margin+E),b[d].lineCoordinates.y2=l-(A[d]+b[d].margin+E),b[d].bounds={x1:h,y1:l-(A[d]+E+b[d].margin),x2:t,y2:k-(E+b[d].margin),width:t-h,height:A[d]},b[d].title&&(b[d]._titleTextBlock.maxWidth=0<b[d].titleMaxWidth&&b[d].titleMaxWidth<b[d].lineCoordinates.width?b[d].titleMaxWidth:
b[d].lineCoordinates.width),E+=A[d]+b[d].margin;if(c&&0<c.length)for(d=c.length-1;0<=d;d--)c[d]&&(l=Math.round(g.y1),k=Math.round(g.y1+(M[d]+c[d].margin+U)),c[d].lineCoordinates.y1=k,c[d].lineCoordinates.y2=k,c[d].bounds={x1:h,y1:l+(c[d].margin+U),x2:t,y2:k,width:t-h,height:N},c[d].title&&(c[d]._titleTextBlock.maxWidth=0<c[d].titleMaxWidth&&c[d].titleMaxWidth<c[d].lineCoordinates.width?c[d].titleMaxWidth:c[d].lineCoordinates.width),U+=M[d]+c[d].margin);if(a&&0<a.length)for(d=0;d<a.length;d++){L=a[d]._labels&&
0<a[d]._labels.length?a[d]._labels[0].textBlock.fontSize/2:0;h=Math.round(g.x1+e);l=c&&0<c.length?Math.round(c[0]?c[0].lineCoordinates.y2:g.y1<Math.max(L,10)?Math.max(L,10):g.y1):g.y1<Math.max(L,10)?Math.max(L,10):g.y1;t=Math.round(g.x1+Z+e);k=b&&0<b.length?Math.round(b[0]?b[0].lineCoordinates.y1:g.y2-Y>m.height-Math.max(L,10)?m.height-Math.max(L,10):g.y2-Y):g.y2>m.height-Math.max(L,10)?m.height-Math.max(L,10):g.y2;if(b&&0<b.length)for(L=0;L<b.length;L++)b[L]&&b[L].labelAutoFit&&(t=0>b[L].labelAngle?
Math.max(t,z):0===b[L].labelAngle?Math.max(t,z/2):t,h=0>b[L].labelAngle||0===b[L].labelAngle?t-Z:h);if(c&&0<c.length)for(L=0;L<c.length;L++)c[L]&&c[L].labelAutoFit&&(t=c[L].lineCoordinates.x1,h=t-Z);a[d].lineCoordinates={x1:t-R,y1:l,x2:t-R,y2:k,height:Math.abs(k-l)};a[d].bounds={x1:t-(x[d]+R),y1:l,x2:t,y2:k,width:t-h,height:k-l};a[d].title&&(a[d]._titleTextBlock.maxWidth=0<a[d].titleMaxWidth&&a[d].titleMaxWidth<a[d].lineCoordinates.height?a[d].titleMaxWidth:a[d].lineCoordinates.height);a[d].calculateValueToPixelConversionParameters();
a[d].calculateBreaksSizeInValues();R+=x[d]+a[d].margin}if(f&&0<f.length)for(d=0;d<f.length;d++){L=f[d]._labels&&0<f[d]._labels.length?f[d]._labels[0].textBlock.fontSize/2:0;h=Math.round(g.x1-e);l=c&&0<c.length?Math.round(c[0]?c[0].lineCoordinates.y2:g.y1<Math.max(L,10)?Math.max(L,10):g.y1):g.y1<Math.max(L,10)?Math.max(L,10):g.y1;t=Math.round(g.x2-X-W);k=b&&0<b.length?Math.round(b[0]?b[0].lineCoordinates.y1:g.y2-Y>m.height-Math.max(L,10)?m.height-Math.max(L,10):g.y2-Y):g.y2>m.height-Math.max(L,10)?
m.height-Math.max(L,10):g.y2;if(b&&0<b.length)for(L=0;L<b.length;L++)b[L]&&b[L].labelAutoFit&&(t=0>b[L].labelAngle?Math.max(t,z):0===b[L].labelAngle?Math.max(t,z/2):t,h=0>b[L].labelAngle||0===b[L].labelAngle?t-X:h);if(c&&0<c.length)for(L=0;L<c.length;L++)c[L]&&c[L].labelAutoFit&&(t=c[L].lineCoordinates.x2,h=t-X);f[d].lineCoordinates={x1:t+V,y1:l,x2:t+V,y2:k,height:Math.abs(k-l)};f[d].bounds={x1:h,y1:l,x2:t+I[d]+V,y2:k,width:t-h,height:k-l};f[d].title&&(f[d]._titleTextBlock.maxWidth=0<f[d].titleMaxWidth&&
f[d].titleMaxWidth<f[d].lineCoordinates.height?f[d].titleMaxWidth:f[d].lineCoordinates.height);f[d].calculateValueToPixelConversionParameters();f[d].calculateBreaksSizeInValues();V+=I[d]+f[d].margin}for(d=0;d<n.length;d++)"axisY"===n[d].type&&(n[d].calculateValueToPixelConversionParameters(),n[d].calculateBreaksSizeInValues());if(0<s){if(a&&0<a.length)for(d=0;d<a.length;d++)q=Q[s-1][d]===Q[s][d]?!0:!1;else q=!0;if(f&&0<f.length)for(d=0;d<f.length;d++)K=S[s-1][d]===S[s][d]?!0:!1;else K=!0;if(b&&0<
b.length)for(d=0;d<b.length;d++)J=u[s-1][d]===u[s][d]?!0:!1;else J=!0;if(c&&0<c.length)for(d=0;d<c.length;d++)O=P[s-1][d]===P[s][d]?!0:!1;else O=!0}if(q&&K&&J&&O)break;s++}if(b&&0<b.length)for(d=0;d<b.length;d++)b[d].calculateStripLinesThicknessInValues(),b[d].calculateBreaksInPixels(),b[d].renderLabelsTicksAndTitle();if(c&&0<c.length)for(d=0;d<c.length;d++)c[d].calculateStripLinesThicknessInValues(),c[d].calculateBreaksInPixels(),c[d].renderLabelsTicksAndTitle();if(a&&0<a.length)for(d=0;d<a.length;d++)a[d].calculateStripLinesThicknessInValues(),
a[d].calculateBreaksInPixels(),a[d].renderLabelsTicksAndTitle();if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].calculateStripLinesThicknessInValues(),f[d].calculateBreaksInPixels(),f[d].renderLabelsTicksAndTitle()}m.preparePlotArea();g=m.plotArea;p.save();p.beginPath();p.rect(g.x1,g.y1,Math.abs(g.x2-g.x1),Math.abs(g.y2-g.y1));p.clip();if(a&&0<a.length)for(d=0;d<n.length;d++)n[d].renderStripLinesOfThicknessType("value");if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].renderStripLinesOfThicknessType("value");
if(b&&0<b.length)for(d=0;d<b.length;d++)b[d].renderStripLinesOfThicknessType("value");if(c&&0<c.length)for(d=0;d<c.length;d++)c[d].renderStripLinesOfThicknessType("value");if(a&&0<a.length)for(d=0;d<a.length;d++)a[d].renderInterlacedColors();if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].renderInterlacedColors();if(b&&0<b.length)for(d=0;d<b.length;d++)b[d].renderInterlacedColors();if(c&&0<c.length)for(d=0;d<c.length;d++)c[d].renderInterlacedColors();p.restore();if(a&&0<a.length)for(d=0;d<a.length;d++)a[d].renderGrid(),
v&&(a[d].createMask(),a[d].renderBreaksBackground());if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].renderGrid(),v&&(f[d].createMask(),f[d].renderBreaksBackground());if(b&&0<b.length)for(d=0;d<b.length;d++)b[d].renderGrid(),v&&(b[d].createMask(),b[d].renderBreaksBackground());if(c&&0<c.length)for(d=0;d<c.length;d++)c[d].renderGrid(),v&&(c[d].createMask(),c[d].renderBreaksBackground());if(a&&0<a.length)for(d=0;d<a.length;d++)a[d].renderAxisLine();if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].renderAxisLine();
if(b&&0<b.length)for(d=0;d<b.length;d++)b[d].renderAxisLine();if(c&&0<c.length)for(d=0;d<c.length;d++)c[d].renderAxisLine();if(a&&0<a.length)for(d=0;d<a.length;d++)a[d].renderStripLinesOfThicknessType("pixel");if(f&&0<f.length)for(d=0;d<f.length;d++)f[d].renderStripLinesOfThicknessType("pixel");if(b&&0<b.length)for(d=0;d<b.length;d++)b[d].renderStripLinesOfThicknessType("pixel");if(c&&0<c.length)for(d=0;d<c.length;d++)c[d].renderStripLinesOfThicknessType("pixel")};C.prototype.calculateStripLinesThicknessInValues=
function(){for(var a=0;a<this.stripLines.length;a++)if(null!==this.stripLines[a].startValue&&null!==this.stripLines[a].endValue){var f=Math.min(this.stripLines[a].startValue,this.stripLines[a].endValue),b=Math.max(this.stripLines[a].startValue,this.stripLines[a].endValue),f=this.getApparentDifference(f,b);this.stripLines[a].value=this.logarithmic?this.stripLines[a].value*Math.sqrt(Math.log(this.stripLines[a].endValue/this.stripLines[a].startValue)/Math.log(f)):this.stripLines[a].value+(Math.abs(this.stripLines[a].endValue-
this.stripLines[a].startValue)-f)/2;this.stripLines[a].thickness=f;this.stripLines[a]._thicknessType="value"}};C.prototype.calculateBreaksSizeInValues=function(){for(var a="left"===this._position||"right"===this._position?this.lineCoordinates.height||this.chart.height:this.lineCoordinates.width||this.chart.width,f=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[],b=this.conversionParameters.pixelPerUnit||a/(this.logarithmic?this.conversionParameters.maximum/this.conversionParameters.minimum:this.conversionParameters.maximum-
this.conversionParameters.minimum),c=this.scaleBreaks&&!y(this.scaleBreaks.options.spacing),e,g=0;g<f.length;g++)e=c||!y(f[g].options.spacing),f[g].spacing=P(f[g].spacing,a,8,e?0.1*a:8,e?0:3)<<0,f[g].size=0>f[g].spacing?0:Math.abs(f[g].spacing/b),this.logarithmic&&(f[g].size=Math.pow(this.logarithmBase,f[g].size))};C.prototype.calculateBreaksInPixels=function(){if(!(this.scaleBreaks&&0>=this.scaleBreaks._appliedBreaks.length)){var a=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[];a.length&&(this.scaleBreaks.firstBreakIndex=
this.scaleBreaks.lastBreakIndex=null);for(var f=0;f<a.length&&!(a[f].startValue>this.conversionParameters.maximum);f++)a[f].endValue<this.conversionParameters.minimum||(y(this.scaleBreaks.firstBreakIndex)&&(this.scaleBreaks.firstBreakIndex=f),a[f].startValue>=this.conversionParameters.minimum&&(a[f].startPixel=this.convertValueToPixel(a[f].startValue),this.scaleBreaks.lastBreakIndex=f),a[f].endValue<=this.conversionParameters.maximum&&(a[f].endPixel=this.convertValueToPixel(a[f].endValue)))}};C.prototype.renderLabelsTicksAndTitle=
function(){var a=this,f=!1,b=0,c=0,e=1,g=0;0!==this.labelAngle&&360!==this.labelAngle&&(e=1.2);if("undefined"===typeof this.options.interval){if("bottom"===this._position||"top"===this._position)if(this.logarithmic&&!this.equidistantInterval&&this.labelAutoFit){for(var b=[],e=0!==this.labelAngle&&360!==this.labelAngle?1:1.2,h,l=this.viewportMaximum,m=this.lineCoordinates.width/Math.log(this.range),k=this._labels.length-1;0<=k;k--){p=this._labels[k];if(p.position<this.viewportMinimum)break;p.position>
this.viewportMaximum||!(k===this._labels.length-1||h<Math.log(l/p.position)*m/e)||(b.push(p),l=p.position,h=p.textBlock.width*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+p.textBlock.height*Math.abs(Math.sin(Math.PI/180*this.labelAngle)))}this._labels=b}else{for(k=0;k<this._labels.length;k++)p=this._labels[k],p.position<this.viewportMinimum||(h=p.textBlock.width*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+p.textBlock.height*Math.abs(Math.sin(Math.PI/180*this.labelAngle)),b+=h);b>this.lineCoordinates.width*
e&&this.labelAutoFit&&(f=!0)}if("left"===this._position||"right"===this._position)if(this.logarithmic&&!this.equidistantInterval&&this.labelAutoFit){for(var b=[],r,l=this.viewportMaximum,m=this.lineCoordinates.height/Math.log(this.range),k=this._labels.length-1;0<=k;k--){p=this._labels[k];if(p.position<this.viewportMinimum)break;p.position>this.viewportMaximum||!(k===this._labels.length-1||r<Math.log(l/p.position)*m)||(b.push(p),l=p.position,r=p.textBlock.height*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+
p.textBlock.width*Math.abs(Math.sin(Math.PI/180*this.labelAngle)))}this._labels=b}else{for(k=0;k<this._labels.length;k++)p=this._labels[k],p.position<this.viewportMinimum||(r=p.textBlock.height*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+p.textBlock.width*Math.abs(Math.sin(Math.PI/180*this.labelAngle)),c+=r);c>this.lineCoordinates.height*e&&this.labelAutoFit&&(f=!0)}}this.logarithmic&&(!this.equidistantInterval&&this.labelAutoFit)&&this._labels.sort(function(a,b){return a.position-b.position});
var k=0,p,n;if("bottom"===this._position){for(k=0;k<this._labels.length;k++)p=this._labels[k],p.position<this.viewportMinimum||(p.position>this.viewportMaximum||f&&0!==g++%2&&this.labelAutoFit)||(n=this.getPixelCoordinatesOnAxis(p.position),this.tickThickness&&"inside"!=this.labelPlacement&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%2?(n.x<<0)+0.5:n.x<<0,this.ctx.beginPath(),this.ctx.moveTo(c,n.y<<0),this.ctx.lineTo(c,n.y+this.tickLength<<0),
this.ctx.stroke()),0===p.textBlock.angle?(n.x-=p.textBlock.width/2,n.y="inside"===this.labelPlacement?n.y-(this.tickLength+p.textBlock.fontSize/2):n.y+this.tickLength+p.textBlock.fontSize/2):(n.x="inside"===this.labelPlacement?0>this.labelAngle?n.x:n.x-p.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):n.x-(0>this.labelAngle?p.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0),n.y="inside"===this.labelPlacement?0>this.labelAngle?n.y-this.tickLength-5:n.y-this.tickLength-Math.abs(p.textBlock.width*
Math.sin(Math.PI/180*this.labelAngle)+5):n.y+this.tickLength+Math.abs(0>this.labelAngle?p.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)-5:5)),p.textBlock.x=n.x,p.textBlock.y=n.y);"inside"===this.labelPlacement&&this.chart.addEventListener("dataAnimationIterationEnd",function(){for(k=0;k<a._labels.length;k++)if(p=a._labels[k],!(p.position<a.viewportMinimum||p.position>a.viewportMaximum||f&&0!==g++%2&&a.labelAutoFit)&&(n=a.getPixelCoordinatesOnAxis(p.position),a.tickThickness)){a.ctx.lineWidth=
a.tickThickness;a.ctx.strokeStyle=a.tickColor;var b=1===a.ctx.lineWidth%2?(n.x<<0)+0.5:n.x<<0;a.ctx.save();a.ctx.beginPath();a.ctx.moveTo(b,n.y<<0);a.ctx.lineTo(b,n.y-a.tickLength<<0);a.ctx.stroke();a.ctx.restore()}},this);this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.y=this.bounds.y2-this._titleTextBlock.height-3,this.titleMaxWidth=this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}else if("top"===
this._position){for(k=0;k<this._labels.length;k++)p=this._labels[k],p.position<this.viewportMinimum||(p.position>this.viewportMaximum||f&&0!==g++%2&&this.labelAutoFit)||(n=this.getPixelCoordinatesOnAxis(p.position),this.tickThickness&&"inside"!=this.labelPlacement&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%2?(n.x<<0)+0.5:n.x<<0,this.ctx.beginPath(),this.ctx.moveTo(c,n.y<<0),this.ctx.lineTo(c,n.y-this.tickLength<<0),this.ctx.stroke()),0===p.textBlock.angle?
(n.x-=p.textBlock.width/2,n.y="inside"===this.labelPlacement?n.y+this.labelFontSize/2+this.tickLength+5:n.y-(this.tickLength+p.textBlock.height-p.textBlock.fontSize/2)):(n.x="inside"===this.labelPlacement?0<this.labelAngle?n.x:n.x-p.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):n.x+(p.textBlock.height-this.tickLength-this.labelFontSize)*Math.sin(Math.PI/180*this.labelAngle)-(0<this.labelAngle?p.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0),n.y="inside"===this.labelPlacement?0<this.labelAngle?
n.y+this.tickLength+5:n.y-p.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)+this.tickLength+5:n.y-(this.tickLength+((p.textBlock.height-p.textBlock.fontSize/2)*Math.cos(Math.PI/180*this.labelAngle)+(0<this.labelAngle?p.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0)))),p.textBlock.x=n.x,p.textBlock.y=n.y);"inside"===this.labelPlacement&&this.chart.addEventListener("dataAnimationIterationEnd",function(){for(k=0;k<a._labels.length;k++)if(p=a._labels[k],!(p.position<a.viewportMinimum||
p.position>a.viewportMaximum||f&&0!==g++%2&&a.labelAutoFit)&&(n=a.getPixelCoordinatesOnAxis(p.position),a.tickThickness)){a.ctx.lineWidth=a.tickThickness;a.ctx.strokeStyle=a.tickColor;var b=1===this.ctx.lineWidth%2?(n.x<<0)+0.5:n.x<<0;a.ctx.save();a.ctx.beginPath();a.ctx.moveTo(b,n.y<<0);a.ctx.lineTo(b,n.y+a.tickLength<<0);a.ctx.stroke();a.ctx.restore()}},this);this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/
2,this._titleTextBlock.y=this.bounds.y1+1,this.titleMaxWidth=this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}else if("left"===this._position){for(k=0;k<this._labels.length;k++)p=this._labels[k],p.position<this.viewportMinimum||(p.position>this.viewportMaximum||f&&0!==g++%2&&this.labelAutoFit)||(n=this.getPixelCoordinatesOnAxis(p.position),this.tickThickness&&"inside"!=this.labelPlacement&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%
2?(n.y<<0)+0.5:n.y<<0,this.ctx.beginPath(),this.ctx.moveTo(n.x<<0,c),this.ctx.lineTo(n.x-this.tickLength<<0,c),this.ctx.stroke()),0===this.labelAngle?(p.textBlock.y=n.y,p.textBlock.x="inside"===this.labelPlacement?n.x+this.tickLength+5:n.x-p.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5):(p.textBlock.y="inside"===this.labelPlacement?n.y:n.y-p.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),p.textBlock.x="inside"===this.labelPlacement?n.x+this.tickLength+5:0<this.labelAngle?
n.x-p.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:n.x-p.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+(p.textBlock.height-p.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)-this.tickLength));"inside"===this.labelPlacement&&this.chart.addEventListener("dataAnimationIterationEnd",function(){for(k=0;k<a._labels.length;k++)if(p=a._labels[k],!(p.position<a.viewportMinimum||p.position>a.viewportMaximum||f&&0!==g++%2&&a.labelAutoFit)&&(n=a.getPixelCoordinatesOnAxis(p.position),
a.tickThickness)){a.ctx.lineWidth=a.tickThickness;a.ctx.strokeStyle=a.tickColor;var b=1===a.ctx.lineWidth%2?(n.y<<0)+0.5:n.y<<0;a.ctx.save();a.ctx.beginPath();a.ctx.moveTo(n.x<<0,b);a.ctx.lineTo(n.x+a.tickLength<<0,b);a.ctx.stroke();a.ctx.restore()}},this);this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.bounds.x1+1,this._titleTextBlock.y=this.lineCoordinates.height/2+this._titleTextBlock.width/2+this.lineCoordinates.y1,this.titleMaxWidth=this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}else if("right"===
this._position){for(k=0;k<this._labels.length;k++)p=this._labels[k],p.position<this.viewportMinimum||(p.position>this.viewportMaximum||f&&0!==g++%2&&this.labelAutoFit)||(n=this.getPixelCoordinatesOnAxis(p.position),this.tickThickness&&"inside"!=this.labelPlacement&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,c=1===this.ctx.lineWidth%2?(n.y<<0)+0.5:n.y<<0,this.ctx.beginPath(),this.ctx.moveTo(n.x<<0,c),this.ctx.lineTo(n.x+this.tickLength<<0,c),this.ctx.stroke()),0===this.labelAngle?
(p.textBlock.y=n.y,p.textBlock.x="inside"===this.labelPlacement?n.x-p.textBlock.width-this.tickLength-5:n.x+this.tickLength+5):(p.textBlock.y="inside"===this.labelPlacement?n.y-p.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0>this.labelAngle?n.y:n.y-(p.textBlock.height-p.textBlock.fontSize/2-5)*Math.cos(Math.PI/180*this.labelAngle),p.textBlock.x="inside"===this.labelPlacement?n.x-p.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:0<this.labelAngle?n.x+(p.textBlock.height-
p.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)+this.tickLength:n.x+this.tickLength+5));"inside"===this.labelPlacement&&this.chart.addEventListener("dataAnimationIterationEnd",function(){for(k=0;k<a._labels.length;k++)if(p=a._labels[k],!(p.position<a.viewportMinimum||p.position>a.viewportMaximum||f&&0!==g++%2&&a.labelAutoFit)&&(n=a.getPixelCoordinatesOnAxis(p.position),a.tickThickness)){a.ctx.lineWidth=a.tickThickness;a.ctx.strokeStyle=a.tickColor;var b=1===a.ctx.lineWidth%2?(n.y<<
0)+0.5:n.y<<0;a.ctx.save();a.ctx.beginPath();a.ctx.moveTo(n.x<<0,b);a.ctx.lineTo(n.x-a.tickLength<<0,b);a.ctx.stroke();a.ctx.restore()}},this);this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.bounds.x2-1,this._titleTextBlock.y=this.lineCoordinates.height/2-this._titleTextBlock.width/2+this.lineCoordinates.y1,this.titleMaxWidth=this._titleTextBlock.maxWidth,this._titleTextBlock.render(!0))}g=0;if("inside"===this.labelPlacement)this.chart.addEventListener("dataAnimationIterationEnd",
function(){for(k=0;k<a._labels.length;k++)p=a._labels[k],p.position<a.viewportMinimum||(p.position>a.viewportMaximum||f&&0!==g++%2&&a.labelAutoFit)||(a.ctx.save(),a.ctx.beginPath(),p.textBlock.render(!0),a.ctx.restore())},p.textBlock);else for(k=0;k<this._labels.length;k++)p=this._labels[k],p.position<this.viewportMinimum||(p.position>this.viewportMaximum||f&&0!==g++%2&&this.labelAutoFit)||p.textBlock.render(!0)};C.prototype.renderInterlacedColors=function(){var a=this.chart.plotArea.ctx,f,b,c=this.chart.plotArea,
e=0;f=!0;if(("bottom"===this._position||"top"===this._position)&&this.interlacedColor)for(a.fillStyle=this.interlacedColor,e=0;e<this._labels.length;e++)f?(f=this.getPixelCoordinatesOnAxis(this._labels[e].position),b=e+1>this._labels.length-1?this.getPixelCoordinatesOnAxis(this.viewportMaximum):this.getPixelCoordinatesOnAxis(this._labels[e+1].position),a.fillRect(Math.min(b.x,f.x),c.y1,Math.abs(b.x-f.x),Math.abs(c.y1-c.y2)),f=!1):f=!0;else if(("left"===this._position||"right"===this._position)&&this.interlacedColor)for(a.fillStyle=
this.interlacedColor,e=0;e<this._labels.length;e++)f?(b=this.getPixelCoordinatesOnAxis(this._labels[e].position),f=e+1>this._labels.length-1?this.getPixelCoordinatesOnAxis(this.viewportMaximum):this.getPixelCoordinatesOnAxis(this._labels[e+1].position),a.fillRect(c.x1,Math.min(b.y,f.y),Math.abs(c.x1-c.x2),Math.abs(f.y-b.y)),f=!1):f=!0;a.beginPath()};C.prototype.renderStripLinesOfThicknessType=function(a){if(this.stripLines&&0<this.stripLines.length&&a){for(var f=this,b,c=0,e=0,g=!1,h=!1,l=[],m=[],
h=!1,c=0;c<this.stripLines.length;c++){var k=this.stripLines[c];k._thicknessType===a&&("pixel"===a&&(k.value<this.viewportMinimum||k.value>this.viewportMaximum||y(k.value)||isNaN(this.range))||l.push(k))}for(c=0;c<this._stripLineLabels.length;c++)if(k=this.stripLines[c],b=this._stripLineLabels[c],!(b.position<this.viewportMinimum||b.position>this.viewportMaximum||isNaN(this.range))){a=this.getPixelCoordinatesOnAxis(b.position);if("outside"===b.stripLine.labelPlacement)if(k&&(this.ctx.strokeStyle=
k.color,"pixel"===k._thicknessType&&(this.ctx.lineWidth=k.thickness)),"bottom"===this._position){var r=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0;this.ctx.beginPath();this.ctx.moveTo(r,a.y<<0);this.ctx.lineTo(r,a.y+this.tickLength<<0);this.ctx.stroke();0===this.labelAngle?(a.x-=b.textBlock.width/2,a.y+=this.tickLength+b.textBlock.fontSize/2):(a.x-=0>this.labelAngle?b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,a.y+=this.tickLength+Math.abs(0>this.labelAngle?b.textBlock.width*Math.sin(Math.PI/
180*this.labelAngle)-5:5))}else"top"===this._position?(r=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0,this.ctx.beginPath(),this.ctx.moveTo(r,a.y<<0),this.ctx.lineTo(r,a.y-this.tickLength<<0),this.ctx.stroke(),0===this.labelAngle?(a.x-=b.textBlock.width/2,a.y-=this.tickLength+b.textBlock.height):(a.x+=(b.textBlock.height-this.tickLength-this.labelFontSize/2)*Math.sin(Math.PI/180*this.labelAngle)-(0<this.labelAngle?b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0),a.y-=this.tickLength+(b.textBlock.height*
Math.cos(Math.PI/180*this.labelAngle)+(0<this.labelAngle?b.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0)))):"left"===this._position?(r=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,this.ctx.beginPath(),this.ctx.moveTo(a.x<<0,r),this.ctx.lineTo(a.x-this.tickLength<<0,r),this.ctx.stroke(),0===this.labelAngle?a.x=a.x-b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:(a.y-=b.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),a.x=0<this.labelAngle?a.x-b.textBlock.width*
Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:a.x-b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+(b.textBlock.height-b.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)-this.tickLength)):"right"===this._position&&(r=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,this.ctx.beginPath(),this.ctx.moveTo(a.x<<0,r),this.ctx.lineTo(a.x+this.tickLength<<0,r),this.ctx.stroke(),0===this.labelAngle?a.x=a.x+this.tickLength+5:(a.y=0>this.labelAngle?a.y:a.y-(b.textBlock.height-b.textBlock.fontSize/
2-5)*Math.cos(Math.PI/180*this.labelAngle),a.x=0<this.labelAngle?a.x+(b.textBlock.height-b.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)+this.tickLength:a.x+this.tickLength+5));else b.textBlock.angle=-90,"bottom"===this._position?(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.height-3,b.textBlock.measureText(),a.x-b.textBlock.height>this.chart.plotArea.x1?y(k.startValue)?a.x-=b.textBlock.height-b.textBlock.fontSize/
2:a.x-=b.textBlock.height/2-b.textBlock.fontSize/2+3:(b.textBlock.angle=90,y(k.startValue)?a.x+=b.textBlock.height-b.textBlock.fontSize/2:a.x+=b.textBlock.height/2-b.textBlock.fontSize/2+3),a.y=-90===b.textBlock.angle?"near"===b.stripLine.labelAlign?this.chart.plotArea.y2-3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1+b.textBlock.width)/2:this.chart.plotArea.y1+b.textBlock.width+3:"near"===b.stripLine.labelAlign?this.chart.plotArea.y2-b.textBlock.width-3:"center"===
b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1-b.textBlock.width)/2:this.chart.plotArea.y1+3):"top"===this._position?(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.height-3,b.textBlock.measureText(),a.x-b.textBlock.height>this.chart.plotArea.x1?y(k.startValue)?a.x-=b.textBlock.height-b.textBlock.fontSize/2:a.x-=b.textBlock.height/2-b.textBlock.fontSize/2+3:(b.textBlock.angle=90,y(k.startValue)?a.x+=
b.textBlock.height-b.textBlock.fontSize/2:a.x+=b.textBlock.height/2-b.textBlock.fontSize/2+3),a.y=-90===b.textBlock.angle?"near"===b.stripLine.labelAlign?this.chart.plotArea.y1+b.textBlock.width+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1+b.textBlock.width)/2:this.chart.plotArea.y2-3:"near"===b.stripLine.labelAlign?this.chart.plotArea.y1+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1-b.textBlock.width)/2:this.chart.plotArea.y2-
b.textBlock.width-3):"left"===this._position?(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.width-3,b.textBlock.angle=0,b.textBlock.measureText(),a.y-b.textBlock.height>this.chart.plotArea.y1?y(k.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize+3:a.y-b.textBlock.height<this.chart.plotArea.y2?a.y+=b.textBlock.fontSize/2+3:y(k.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/
2:a.y-=b.textBlock.height/2-b.textBlock.fontSize+3,a.x="near"===b.stripLine.labelAlign?this.chart.plotArea.x1+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.x2+this.chart.plotArea.x1)/2-b.textBlock.width/2:this.chart.plotArea.x2-b.textBlock.width-3):"right"===this._position&&(b.textBlock.maxWidth=this.options.stripLines[c].labelMaxWidth?this.options.stripLines[c].labelMaxWidth:this.chart.plotArea.width-3,b.textBlock.angle=0,b.textBlock.measureText(),a.y-+b.textBlock.height>this.chart.plotArea.y1?
y(k.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize/2-3:a.y-b.textBlock.height<this.chart.plotArea.y2?a.y+=b.textBlock.fontSize/2+3:y(k.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize/2+3,a.x="near"===b.stripLine.labelAlign?this.chart.plotArea.x2-b.textBlock.width-3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.x2+this.chart.plotArea.x1)/2-b.textBlock.width/2:this.chart.plotArea.x1+
3);b.textBlock.x=a.x;b.textBlock.y=a.y;m.push(b)}if(!h){h=!1;this.ctx.save();this.ctx.beginPath();this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.ctx.clip();for(c=0;c<l.length;c++)k=l[c],k.showOnTop?g||(g=!0,this.chart.addEventListener("dataAnimationIterationEnd",function(){this.ctx.save();this.ctx.beginPath();this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.ctx.clip();
for(e=0;e<l.length;e++)k=l[e],k.showOnTop&&k.render();this.ctx.restore()},k)):k.render();for(c=0;c<m.length;c++)b=m[c],b.stripLine.showOnTop?h||(h=!0,this.chart.addEventListener("dataAnimationIterationEnd",function(){for(e=0;e<m.length;e++)b=m[e],"inside"===b.stripLine.labelPlacement&&b.stripLine.showOnTop&&(f.ctx.save(),f.ctx.beginPath(),f.ctx.rect(f.chart.plotArea.x1,f.chart.plotArea.y1,f.chart.plotArea.width,f.chart.plotArea.height),f.ctx.clip(),b.textBlock.render(!0),f.ctx.restore())},b.textBlock)):
"inside"===b.stripLine.labelPlacement&&b.textBlock.render(!0);this.ctx.restore();h=!0}if(h)for(h=!1,c=0;c<m.length;c++)b=m[c],b.stripLine.showOnTop?h||(h=!0,this.chart.addEventListener("dataAnimationIterationEnd",function(){for(e=0;e<m.length;e++)b=m[e],"outside"===b.stripLine.labelPlacement&&b.stripLine.showOnTop&&b.textBlock.render(!0)},b.textBlock)):"outside"===b.stripLine.labelPlacement&&b.textBlock.render(!0)}};C.prototype.renderBreaksBackground=function(){this.chart._breaksCanvas&&(this.scaleBreaks&&
0<this.scaleBreaks._appliedBreaks.length&&this.maskCanvas)&&(this.chart._breaksCanvasCtx.save(),this.chart._breaksCanvasCtx.beginPath(),this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height),this.chart._breaksCanvasCtx.clip(),this.chart._breaksCanvasCtx.drawImage(this.maskCanvas,0,0,this.chart.width,this.chart.height),this.chart._breaksCanvasCtx.restore())};C.prototype.createMask=function(){if(this.scaleBreaks&&0<this.scaleBreaks._appliedBreaks.length){var a=
this.scaleBreaks._appliedBreaks;v?(this.maskCanvas=ua(this.chart.width,this.chart.height),this.maskCtx=this.maskCanvas.getContext("2d")):(this.maskCanvas=this.chart.plotArea.canvas,this.maskCtx=this.chart.plotArea.ctx);this.maskCtx.save();this.maskCtx.beginPath();this.maskCtx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.maskCtx.clip();for(var f=0;f<a.length;f++)a[f].endValue<this.viewportMinimum||(a[f].startValue>this.viewportMaximum||
isNaN(this.range))||a[f].render(this.maskCtx);this.maskCtx.restore()}};C.prototype.renderCrosshair=function(a,f){this.crosshair.render(a,f)};C.prototype.renderGrid=function(){if(this.gridThickness&&0<this.gridThickness){var a=this.chart.ctx;a.save();var f,b=this.chart.plotArea;a.lineWidth=this.gridThickness;a.strokeStyle=this.gridColor;a.setLineDash&&a.setLineDash(G(this.gridDashType,this.gridThickness));if("bottom"===this._position||"top"===this._position)for(c=0;c<this._labels.length;c++)this._labels[c].position<
this.viewportMinimum||(this._labels[c].position>this.viewportMaximum||this._labels[c].breaksLabelType)||(a.beginPath(),f=this.getPixelCoordinatesOnAxis(this._labels[c].position),f=1===a.lineWidth%2?(f.x<<0)+0.5:f.x<<0,a.moveTo(f,b.y1<<0),a.lineTo(f,b.y2<<0),a.stroke());else if("left"===this._position||"right"===this._position)for(var c=0;c<this._labels.length;c++)this._labels[c].position<this.viewportMinimum||(this._labels[c].position>this.viewportMaximum||this._labels[c].breaksLabelType)||(a.beginPath(),
f=this.getPixelCoordinatesOnAxis(this._labels[c].position),f=1===a.lineWidth%2?(f.y<<0)+0.5:f.y<<0,a.moveTo(b.x1<<0,f),a.lineTo(b.x2<<0,f),a.stroke());a.restore()}};C.prototype.renderAxisLine=function(){var a=this.chart.ctx,f=v?this.chart._preRenderCtx:a,b=Math.ceil(this.tickThickness/(this.reversed?-2:2)),c=Math.ceil(this.tickThickness/(this.reversed?2:-2)),e,g;f.save();if("bottom"===this._position||"top"===this._position){if(this.lineThickness){this.reversed?(e=this.lineCoordinates.x2,g=this.lineCoordinates.x1):
(e=this.lineCoordinates.x1,g=this.lineCoordinates.x2);f.lineWidth=this.lineThickness;f.strokeStyle=this.lineColor?this.lineColor:"black";f.setLineDash&&f.setLineDash(G(this.lineDashType,this.lineThickness));var h=1===this.lineThickness%2?(this.lineCoordinates.y1<<0)+0.5:this.lineCoordinates.y1<<0;f.beginPath();if(this.scaleBreaks&&!y(this.scaleBreaks.firstBreakIndex))if(y(this.scaleBreaks.lastBreakIndex))e=this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel+c;else for(var l=
this.scaleBreaks.firstBreakIndex;l<=this.scaleBreaks.lastBreakIndex;l++)f.moveTo(e,h),f.lineTo(this.scaleBreaks._appliedBreaks[l].startPixel+b,h),e=this.scaleBreaks._appliedBreaks[l].endPixel+c;e&&(f.moveTo(e,h),f.lineTo(g,h));f.stroke()}}else if(("left"===this._position||"right"===this._position)&&this.lineThickness){this.reversed?(e=this.lineCoordinates.y1,g=this.lineCoordinates.y2):(e=this.lineCoordinates.y2,g=this.lineCoordinates.y1);f.lineWidth=this.lineThickness;f.strokeStyle=this.lineColor;
f.setLineDash&&f.setLineDash(G(this.lineDashType,this.lineThickness));h=1===this.lineThickness%2?(this.lineCoordinates.x1<<0)+0.5:this.lineCoordinates.x1<<0;f.beginPath();if(this.scaleBreaks&&!y(this.scaleBreaks.firstBreakIndex))if(y(this.scaleBreaks.lastBreakIndex))e=this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel+b;else for(l=this.scaleBreaks.firstBreakIndex;l<=this.scaleBreaks.lastBreakIndex;l++)f.moveTo(h,e),f.lineTo(h,this.scaleBreaks._appliedBreaks[l].startPixel+c),
e=this.scaleBreaks._appliedBreaks[l].endPixel+b;e&&(f.moveTo(h,e),f.lineTo(h,g));f.stroke()}v&&(a.drawImage(this.chart._preRenderCanvas,0,0,this.chart.width,this.chart.height),this.chart._breaksCanvasCtx&&this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas,0,0,this.chart.width,this.chart.height),f.clearRect(0,0,this.chart.width,this.chart.height));f.restore()};C.prototype.getPixelCoordinatesOnAxis=function(a){var f={};if("bottom"===this._position||"top"===this._position)f.x=this.convertValueToPixel(a),
f.y=this.lineCoordinates.y1;if("left"===this._position||"right"===this._position)f.y=this.convertValueToPixel(a),f.x=this.lineCoordinates.x2;return f};C.prototype.convertPixelToValue=function(a){if("undefined"===typeof a)return null;var f=0,b=0,c,f=!0,e=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[],b="number"===typeof a?a:"left"===this._position||"right"===this._position?a.y:a.x;if(this.logarithmic){a=c=Math.pow(this.logarithmBase,(b-this.conversionParameters.reference)/this.conversionParameters.pixelPerUnit);
if(b<=this.conversionParameters.reference===("left"===this._position||"right"===this._position)!==this.reversed)for(b=0;b<e.length;b++){if(!(e[b].endValue<this.conversionParameters.minimum))if(f)if(e[b].startValue<this.conversionParameters.minimum){if(1<e[b].size&&this.conversionParameters.minimum*Math.pow(e[b].endValue/e[b].startValue,Math.log(c)/Math.log(e[b].size))<e[b].endValue){a=Math.pow(e[b].endValue/e[b].startValue,Math.log(c)/Math.log(e[b].size));break}else a*=e[b].endValue/this.conversionParameters.minimum/
Math.pow(e[b].size,Math.log(e[b].endValue/this.conversionParameters.minimum)/Math.log(e[b].endValue/e[b].startValue)),c/=Math.pow(e[b].size,Math.log(e[b].endValue/this.conversionParameters.minimum)/Math.log(e[b].endValue/e[b].startValue));f=!1}else if(c>e[b].startValue/this.conversionParameters.minimum){c/=e[b].startValue/this.conversionParameters.minimum;if(c<e[b].size){a*=Math.pow(e[b].endValue/e[b].startValue,1===e[b].size?1:Math.log(c)/Math.log(e[b].size))/c;break}else a*=e[b].endValue/e[b].startValue/
e[b].size;c/=e[b].size;f=!1}else break;else if(c>e[b].startValue/e[b-1].endValue){c/=e[b].startValue/e[b-1].endValue;if(c<e[b].size){a*=Math.pow(e[b].endValue/e[b].startValue,1===e[b].size?1:Math.log(c)/Math.log(e[b].size))/c;break}else a*=e[b].endValue/e[b].startValue/e[b].size;c/=e[b].size}else break}else for(b=e.length-1;0<=b;b--)if(!(e[b].startValue>this.conversionParameters.minimum))if(f)if(e[b].endValue>this.conversionParameters.minimum){if(1<e[b].size&&this.conversionParameters.minimum*Math.pow(e[b].endValue/
e[b].startValue,Math.log(c)/Math.log(e[b].size))>e[b].startValue){a=Math.pow(e[b].endValue/e[b].startValue,Math.log(c)/Math.log(e[b].size));break}else a*=e[b].startValue/this.conversionParameters.minimum*Math.pow(e[b].size,Math.log(e[b].startValue/this.conversionParameters.minimum)/Math.log(e[b].endValue/e[b].startValue))*c,c*=Math.pow(e[b].size,Math.log(this.conversionParameters.minimum/e[b].startValue)/Math.log(e[b].endValue/e[b].startValue));f=!1}else if(c<e[b].endValue/this.conversionParameters.minimum){c/=
e[b].endValue/this.conversionParameters.minimum;if(c>1/e[b].size){a*=Math.pow(e[b].endValue/e[b].startValue,1>=e[b].size?1:Math.log(c)/Math.log(e[b].size))*c;break}else a/=e[b].endValue/e[b].startValue/e[b].size;c*=e[b].size;f=!1}else break;else if(c<e[b].endValue/e[b+1].startValue){c/=e[b].endValue/e[b+1].startValue;if(c>1/e[b].size){a*=Math.pow(e[b].endValue/e[b].startValue,1>=e[b].size?1:Math.log(c)/Math.log(e[b].size))*c;break}else a/=e[b].endValue/e[b].startValue/e[b].size;c*=e[b].size}else break;
f=a*this.viewportMinimum}else{a=c=(b-this.conversionParameters.reference)/this.conversionParameters.pixelPerUnit;if(b<=this.conversionParameters.reference===("left"===this._position||"right"===this._position)!==this.reversed)for(b=0;b<e.length;b++){if(!(e[b].endValue<this.conversionParameters.minimum))if(f)if(e[b].startValue<this.conversionParameters.minimum){if(e[b].size&&this.conversionParameters.minimum+c*(e[b].endValue-e[b].startValue)/e[b].size<e[b].endValue){a=0>=e[b].size?0:c*(e[b].endValue-
e[b].startValue)/e[b].size;break}else a+=e[b].endValue-this.conversionParameters.minimum-e[b].size*(e[b].endValue-this.conversionParameters.minimum)/(e[b].endValue-e[b].startValue),c-=e[b].size*(e[b].endValue-this.conversionParameters.minimum)/(e[b].endValue-e[b].startValue);f=!1}else if(c>e[b].startValue-this.conversionParameters.minimum){c-=e[b].startValue-this.conversionParameters.minimum;if(c<e[b].size){a+=(e[b].endValue-e[b].startValue)*(0===e[b].size?1:c/e[b].size)-c;break}else a+=e[b].endValue-
e[b].startValue-e[b].size;c-=e[b].size;f=!1}else break;else if(c>e[b].startValue-e[b-1].endValue){c-=e[b].startValue-e[b-1].endValue;if(c<e[b].size){a+=(e[b].endValue-e[b].startValue)*(0===e[b].size?1:c/e[b].size)-c;break}else a+=e[b].endValue-e[b].startValue-e[b].size;c-=e[b].size}else break}else for(b=e.length-1;0<=b;b--)if(!(e[b].startValue>this.conversionParameters.minimum))if(f)if(e[b].endValue>this.conversionParameters.minimum)if(e[b].size&&this.conversionParameters.minimum+c*(e[b].endValue-
e[b].startValue)/e[b].size>e[b].startValue){a=0>=e[b].size?0:c*(e[b].endValue-e[b].startValue)/e[b].size;break}else a+=e[b].startValue-this.conversionParameters.minimum+e[b].size*(this.conversionParameters.minimum-e[b].startValue)/(e[b].endValue-e[b].startValue),c+=e[b].size*(this.conversionParameters.minimum-e[b].startValue)/(e[b].endValue-e[b].startValue),f=!1;else if(c<e[b].endValue-this.conversionParameters.minimum){c-=e[b].endValue-this.conversionParameters.minimum;if(c>-1*e[b].size){a+=(e[b].endValue-
e[b].startValue)*(0===e[b].size?1:c/e[b].size)+c;break}else a-=e[b].endValue-e[b].startValue-e[b].size;c+=e[b].size;f=!1}else break;else if(c<e[b].endValue-e[b+1].startValue){c-=e[b].endValue-e[b+1].startValue;if(c>-1*e[b].size){a+=(e[b].endValue-e[b].startValue)*(0===e[b].size?1:c/e[b].size)+c;break}else a-=e[b].endValue-e[b].startValue-e[b].size;c+=e[b].size}else break;f=this.conversionParameters.minimum+a}return f};C.prototype.convertValueToPixel=function(a){a=this.getApparentDifference(this.conversionParameters.minimum,
a,a);return this.logarithmic?this.conversionParameters.reference+this.conversionParameters.pixelPerUnit*Math.log(a/this.conversionParameters.minimum)/this.conversionParameters.lnLogarithmBase+0.5<<0:this.conversionParameters.reference+this.conversionParameters.pixelPerUnit*(a-this.conversionParameters.minimum)+0.5<<0};C.prototype.getApparentDifference=function(a,f,b,c){var e=this.scaleBreaks?this.scaleBreaks._appliedBreaks:[];if(this.logarithmic){b=y(b)?f/a:b;for(var g=0;g<e.length&&!(f<e[g].startValue);g++)a>
e[g].endValue||(a<=e[g].startValue&&f>=e[g].endValue?b=b/e[g].endValue*e[g].startValue*e[g].size:a>=e[g].startValue&&f>=e[g].endValue?b=b/e[g].endValue*a*Math.pow(e[g].size,Math.log(e[g].endValue/a)/Math.log(e[g].endValue/e[g].startValue)):a<=e[g].startValue&&f<=e[g].endValue?b=b/f*e[g].startValue*Math.pow(e[g].size,Math.log(f/e[g].startValue)/Math.log(e[g].endValue/e[g].startValue)):!c&&(a>e[g].startValue&&f<e[g].endValue)&&(b=a*Math.pow(e[g].size,Math.log(f/a)/Math.log(e[g].endValue/e[g].startValue))))}else for(b=
y(b)?Math.abs(f-a):b,g=0;g<e.length&&!(f<e[g].startValue);g++)a>e[g].endValue||(a<=e[g].startValue&&f>=e[g].endValue?b=b-e[g].endValue+e[g].startValue+e[g].size:a>e[g].startValue&&f>=e[g].endValue?b=b-e[g].endValue+a+e[g].size*(e[g].endValue-a)/(e[g].endValue-e[g].startValue):a<=e[g].startValue&&f<e[g].endValue?b=b-f+e[g].startValue+e[g].size*(f-e[g].startValue)/(e[g].endValue-e[g].startValue):!c&&(a>e[g].startValue&&f<e[g].endValue)&&(b=a+e[g].size*(f-a)/(e[g].endValue-e[g].startValue)));return b};
C.prototype.setViewPortRange=function(a,f){this.sessionVariables.newViewportMinimum=this.viewportMinimum=Math.min(a,f);this.sessionVariables.newViewportMaximum=this.viewportMaximum=Math.max(a,f)};C.prototype.getXValueAt=function(a){if(!a)return null;var f=null;"left"===this._position?f=this.convertPixelToValue(a.y):"bottom"===this._position&&(f=this.convertPixelToValue(a.x));return f};C.prototype.calculateValueToPixelConversionParameters=function(a){a=this.scaleBreaks?this.scaleBreaks._appliedBreaks:
[];var f={pixelPerUnit:null,minimum:null,reference:null},b=this.lineCoordinates.width,c=this.lineCoordinates.height,b="bottom"===this._position||"top"===this._position?b:c,c=Math.abs(this.range);if(this.logarithmic)for(var e=0;e<a.length&&!(this.viewportMaximum<a[e].startValue);e++)this.viewportMinimum>a[e].endValue||(this.viewportMinimum>=a[e].startValue&&this.viewportMaximum<=a[e].endValue?b=0:this.viewportMinimum<=a[e].startValue&&this.viewportMaximum>=a[e].endValue?(c=c/a[e].endValue*a[e].startValue,
b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100):b-Math.min(a[e].spacing,0.1*b)):this.viewportMinimum>a[e].startValue&&this.viewportMaximum>=a[e].endValue?(c=c/a[e].endValue*this.viewportMinimum,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100*Math.log(a[e].endValue/this.viewportMinimum)/Math.log(a[e].endValue/a[e].startValue)):b-Math.min(a[e].spacing,0.1*b)*Math.log(a[e].endValue/this.viewportMinimum)/Math.log(a[e].endValue/a[e].startValue)):this.viewportMinimum<=
a[e].startValue&&this.viewportMaximum<a[e].endValue&&(c=c/this.viewportMaximum*a[e].startValue,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100*Math.log(this.viewportMaximum/a[e].startValue)/Math.log(a[e].endValue/a[e].startValue)):b-Math.min(a[e].spacing,0.1*b)*Math.log(this.viewportMaximum/a[e].startValue)/Math.log(a[e].endValue/a[e].startValue)));else for(e=0;e<a.length&&!(this.viewportMaximum<a[e].startValue);e++)this.viewportMinimum>a[e].endValue||(this.viewportMinimum>=
a[e].startValue&&this.viewportMaximum<=a[e].endValue?b=0:this.viewportMinimum<=a[e].startValue&&this.viewportMaximum>=a[e].endValue?(c=c-a[e].endValue+a[e].startValue,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100):b-Math.min(a[e].spacing,0.1*b)):this.viewportMinimum>a[e].startValue&&this.viewportMaximum>=a[e].endValue?(c=c-a[e].endValue+this.viewportMinimum,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100*(a[e].endValue-this.viewportMinimum)/
(a[e].endValue-a[e].startValue)):b-Math.min(a[e].spacing,0.1*b)*(a[e].endValue-this.viewportMinimum)/(a[e].endValue-a[e].startValue)):this.viewportMinimum<=a[e].startValue&&this.viewportMaximum<a[e].endValue&&(c=c-this.viewportMaximum+a[e].startValue,b=0<a[e].spacing.toString().indexOf("%")?b*(1-parseFloat(a[e].spacing)/100*(this.viewportMaximum-a[e].startValue)/(a[e].endValue-a[e].startValue)):b-Math.min(a[e].spacing,0.1*b)*(this.viewportMaximum-a[e].startValue)/(a[e].endValue-a[e].startValue)));
f.minimum=this.viewportMinimum;f.maximum=this.viewportMaximum;f.range=c;if("bottom"===this._position||"top"===this._position)this.logarithmic?(f.lnLogarithmBase=Math.log(this.logarithmBase),f.pixelPerUnit=(this.reversed?-1:1)*b*f.lnLogarithmBase/Math.log(Math.abs(c))):f.pixelPerUnit=(this.reversed?-1:1)*b/Math.abs(c),f.reference=this.reversed?this.lineCoordinates.x2:this.lineCoordinates.x1;if("left"===this._position||"right"===this._position)this.logarithmic?(f.lnLogarithmBase=Math.log(this.logarithmBase),
f.pixelPerUnit=(this.reversed?1:-1)*b*f.lnLogarithmBase/Math.log(Math.abs(c))):f.pixelPerUnit=(this.reversed?1:-1)*b/Math.abs(c),f.reference=this.reversed?this.lineCoordinates.y1:this.lineCoordinates.y2;this.conversionParameters=f};C.prototype.calculateAxisParameters=function(){if(this.logarithmic)this.calculateLogarithmicAxisParameters();else{var a=this.chart.layoutManager.getFreeSpace(),f=!1,b=!1;"bottom"===this._position||"top"===this._position?(this.maxWidth=a.width,this.maxHeight=a.height):(this.maxWidth=
a.height,this.maxHeight=a.width);var a="axisX"===this.type?"xySwapped"===this.chart.plotInfo.axisPlacement?62:70:"xySwapped"===this.chart.plotInfo.axisPlacement?50:40,c=4;"axisX"===this.type&&(c=600>this.maxWidth?8:6);var a=Math.max(c,Math.floor(this.maxWidth/a)),e,g,h,c=0;!y(this.options.viewportMinimum)&&(!y(this.options.viewportMaximum)&&this.options.viewportMinimum>=this.options.viewportMaximum)&&(this.viewportMinimum=this.viewportMaximum=null);if(y(this.options.viewportMinimum)&&!y(this.sessionVariables.newViewportMinimum)&&
!isNaN(this.sessionVariables.newViewportMinimum))this.viewportMinimum=this.sessionVariables.newViewportMinimum;else if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=this.minimum;if(y(this.options.viewportMaximum)&&!y(this.sessionVariables.newViewportMaximum)&&!isNaN(this.sessionVariables.newViewportMaximum))this.viewportMaximum=this.sessionVariables.newViewportMaximum;else if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=this.maximum;
if(this.scaleBreaks)for(c=0;c<this.scaleBreaks._appliedBreaks.length;c++)if((!y(this.sessionVariables.newViewportMinimum)&&this.sessionVariables.newViewportMinimum>=this.scaleBreaks._appliedBreaks[c].startValue||!y(this.options.minimum)&&this.options.minimum>=this.scaleBreaks._appliedBreaks[c].startValue||!y(this.options.viewportMinimum)&&this.viewportMinimum>=this.scaleBreaks._appliedBreaks[c].startValue)&&(!y(this.sessionVariables.newViewportMaximum)&&this.sessionVariables.newViewportMaximum<=this.scaleBreaks._appliedBreaks[c].endValue||
!y(this.options.maximum)&&this.options.maximum<=this.scaleBreaks._appliedBreaks[c].endValue||!y(this.options.viewportMaximum)&&this.viewportMaximum<=this.scaleBreaks._appliedBreaks[c].endValue)){this.scaleBreaks._appliedBreaks.splice(c,1);break}if("axisX"===this.type){if(this.dataSeries&&0<this.dataSeries.length)for(e=0;e<this.dataSeries.length;e++)"dateTime"===this.dataSeries[e].xValueType&&(b=!0);e=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin;g=null!==this.viewportMaximum?
this.viewportMaximum:this.dataInfo.viewPortMax;0===g-e&&(c="undefined"===typeof this.options.interval?0.4:this.options.interval,g+=c,e-=c);Infinity!==this.dataInfo.minDiff?h=this.dataInfo.minDiff:1<g-e?h=0.5*Math.abs(g-e):(h=1,b&&(f=!0))}else"axisY"===this.type&&(e=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,g=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,isFinite(e)||isFinite(g)?isFinite(e)?isFinite(g)||(g=e):e=g:(g="undefined"===typeof this.options.interval?
-Infinity:this.options.interval,e="undefined"!==typeof this.options.interval||isFinite(this.dataInfo.minDiff)?0:Infinity),0===e&&0===g?(g+=9,e=0):0===g-e?(c=Math.min(Math.abs(0.01*Math.abs(g)),5),g+=c,e-=c):e>g?(c=Math.min(0.01*Math.abs(this.getApparentDifference(g,e,null,!0)),5),0<=g?e=g-c:g=isFinite(e)?e+c:0):(c=Math.min(0.01*Math.abs(this.getApparentDifference(e,g,null,!0)),0.05),0!==g&&(g+=c),0!==e&&(e-=c)),h=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<g-e?0.5*Math.abs(g-e):1,this.includeZero&&
(null===this.viewportMinimum||isNaN(this.viewportMinimum))&&0<e&&(e=0),this.includeZero&&(null===this.viewportMaximum||isNaN(this.viewportMaximum))&&0>g&&(g=0));c=this.getApparentDifference(isNaN(this.viewportMinimum)||null===this.viewportMinimum?e:this.viewportMinimum,isNaN(this.viewportMaximum)||null===this.viewportMaximum?g:this.viewportMaximum,null,!0);if("axisX"===this.type&&b){this.intervalType||(c/1<=a?(this.interval=1,this.intervalType="millisecond"):c/2<=a?(this.interval=2,this.intervalType=
"millisecond"):c/5<=a?(this.interval=5,this.intervalType="millisecond"):c/10<=a?(this.interval=10,this.intervalType="millisecond"):c/20<=a?(this.interval=20,this.intervalType="millisecond"):c/50<=a?(this.interval=50,this.intervalType="millisecond"):c/100<=a?(this.interval=100,this.intervalType="millisecond"):c/200<=a?(this.interval=200,this.intervalType="millisecond"):c/250<=a?(this.interval=250,this.intervalType="millisecond"):c/300<=a?(this.interval=300,this.intervalType="millisecond"):c/400<=a?
(this.interval=400,this.intervalType="millisecond"):c/500<=a?(this.interval=500,this.intervalType="millisecond"):c/(1*V.secondDuration)<=a?(this.interval=1,this.intervalType="second"):c/(2*V.secondDuration)<=a?(this.interval=2,this.intervalType="second"):c/(5*V.secondDuration)<=a?(this.interval=5,this.intervalType="second"):c/(10*V.secondDuration)<=a?(this.interval=10,this.intervalType="second"):c/(15*V.secondDuration)<=a?(this.interval=15,this.intervalType="second"):c/(20*V.secondDuration)<=a?(this.interval=
20,this.intervalType="second"):c/(30*V.secondDuration)<=a?(this.interval=30,this.intervalType="second"):c/(1*V.minuteDuration)<=a?(this.interval=1,this.intervalType="minute"):c/(2*V.minuteDuration)<=a?(this.interval=2,this.intervalType="minute"):c/(5*V.minuteDuration)<=a?(this.interval=5,this.intervalType="minute"):c/(10*V.minuteDuration)<=a?(this.interval=10,this.intervalType="minute"):c/(15*V.minuteDuration)<=a?(this.interval=15,this.intervalType="minute"):c/(20*V.minuteDuration)<=a?(this.interval=
20,this.intervalType="minute"):c/(30*V.minuteDuration)<=a?(this.interval=30,this.intervalType="minute"):c/(1*V.hourDuration)<=a?(this.interval=1,this.intervalType="hour"):c/(2*V.hourDuration)<=a?(this.interval=2,this.intervalType="hour"):c/(3*V.hourDuration)<=a?(this.interval=3,this.intervalType="hour"):c/(6*V.hourDuration)<=a?(this.interval=6,this.intervalType="hour"):c/(1*V.dayDuration)<=a?(this.interval=1,this.intervalType="day"):c/(2*V.dayDuration)<=a?(this.interval=2,this.intervalType="day"):
c/(4*V.dayDuration)<=a?(this.interval=4,this.intervalType="day"):c/(1*V.weekDuration)<=a?(this.interval=1,this.intervalType="week"):c/(2*V.weekDuration)<=a?(this.interval=2,this.intervalType="week"):c/(3*V.weekDuration)<=a?(this.interval=3,this.intervalType="week"):c/(1*V.monthDuration)<=a?(this.interval=1,this.intervalType="month"):c/(2*V.monthDuration)<=a?(this.interval=2,this.intervalType="month"):c/(3*V.monthDuration)<=a?(this.interval=3,this.intervalType="month"):c/(6*V.monthDuration)<=a?(this.interval=
6,this.intervalType="month"):(this.interval=c/(1*V.yearDuration)<=a?1:c/(2*V.yearDuration)<=a?2:c/(4*V.yearDuration)<=a?4:Math.floor(C.getNiceNumber(c/(a-1),!0)/V.yearDuration),this.intervalType="year"));if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=e-h/2;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=g+h/2;f?this.autoValueFormatString="MMM DD YYYY HH:mm":"year"===this.intervalType?this.autoValueFormatString="YYYY":"month"===this.intervalType?
this.autoValueFormatString="MMM YYYY":"week"===this.intervalType?this.autoValueFormatString="MMM DD YYYY":"day"===this.intervalType?this.autoValueFormatString="MMM DD YYYY":"hour"===this.intervalType?this.autoValueFormatString="hh:mm TT":"minute"===this.intervalType?this.autoValueFormatString="hh:mm TT":"second"===this.intervalType?this.autoValueFormatString="hh:mm:ss TT":"millisecond"===this.intervalType&&(this.autoValueFormatString="fff'ms'");this.valueFormatString||(this.valueFormatString=this.autoValueFormatString)}else{this.intervalType=
"number";c=C.getNiceNumber(c,!1);this.interval=this.options&&0<this.options.interval?this.options.interval:C.getNiceNumber(c/(a-1),!0);if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum="axisX"===this.type?e-h/2:Math.floor(e/this.interval)*this.interval;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum="axisX"===this.type?g+h/2:Math.ceil(g/this.interval)*this.interval;0===this.viewportMaximum&&0===this.viewportMinimum&&(0===this.options.viewportMinimum?
this.viewportMaximum+=10:0===this.options.viewportMaximum&&(this.viewportMinimum-=10),this.options&&"undefined"===typeof this.options.interval&&(this.interval=C.getNiceNumber((this.viewportMaximum-this.viewportMinimum)/(a-1),!0)))}if(null===this.minimum||null===this.maximum)if("axisX"===this.type?(e=null!==this.minimum?this.minimum:this.dataInfo.min,g=null!==this.maximum?this.maximum:this.dataInfo.max,0===g-e&&(c="undefined"===typeof this.options.interval?0.4:this.options.interval,g+=c,e-=c),h=Infinity!==
this.dataInfo.minDiff?this.dataInfo.minDiff:1<g-e?0.5*Math.abs(g-e):1):"axisY"===this.type&&(e=null!==this.minimum?this.minimum:this.dataInfo.min,g=null!==this.maximum?this.maximum:this.dataInfo.max,isFinite(e)||isFinite(g)?0===e&&0===g?(g+=9,e=0):0===g-e?(c=Math.min(Math.abs(0.01*Math.abs(g)),5),g+=c,e-=c):e>g?(c=Math.min(0.01*Math.abs(this.getApparentDifference(g,e,null,!0)),5),0<=g?e=g-c:g=isFinite(e)?e+c:0):(c=Math.min(0.01*Math.abs(this.getApparentDifference(e,g,null,!0)),0.05),0!==g&&(g+=c),
0!==e&&(e-=c)):(g="undefined"===typeof this.options.interval?-Infinity:this.options.interval,e="undefined"!==typeof this.options.interval||isFinite(this.dataInfo.minDiff)?0:Infinity),h=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<g-e?0.5*Math.abs(g-e):1,this.includeZero&&(null===this.minimum||isNaN(this.minimum))&&0<e&&(e=0),this.includeZero&&(null===this.maximum||isNaN(this.maximum))&&0>g&&(g=0)),Math.abs(this.getApparentDifference(e,g,null,!0)),"axisX"===this.type&&b){this.valueType=
"dateTime";if(null===this.minimum||isNaN(this.minimum))this.minimum=e-h/2;if(null===this.maximum||isNaN(this.maximum))this.maximum=g+h/2}else this.intervalType=this.valueType="number",null===this.minimum&&(this.minimum="axisX"===this.type?e-h/2:Math.floor(e/this.interval)*this.interval,this.minimum=Math.min(this.minimum,null===this.sessionVariables.viewportMinimum||isNaN(this.sessionVariables.viewportMinimum)?Infinity:this.sessionVariables.viewportMinimum)),null===this.maximum&&(this.maximum="axisX"===
this.type?g+h/2:Math.ceil(g/this.interval)*this.interval,this.maximum=Math.max(this.maximum,null===this.sessionVariables.viewportMaximum||isNaN(this.sessionVariables.viewportMaximum)?-Infinity:this.sessionVariables.viewportMaximum)),0===this.maximum&&0===this.minimum&&(0===this.options.minimum?this.maximum+=10:0===this.options.maximum&&(this.minimum-=10));y(this.sessionVariables.newViewportMinimum)&&(this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum));y(this.sessionVariables.newViewportMaximum)&&
(this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum));this.range=this.viewportMaximum-this.viewportMinimum;this.intervalStartPosition="axisX"===this.type&&b?this.getLabelStartPoint(new Date(this.viewportMinimum),this.intervalType,this.interval):Math.floor((this.viewportMinimum+0.2*this.interval)/this.interval)*this.interval;this.valueFormatString||(this.valueFormatString=C.generateValueFormatString(this.range,2))}};C.prototype.calculateLogarithmicAxisParameters=function(){var a=this.chart.layoutManager.getFreeSpace(),
f=Math.log(this.logarithmBase),b;"bottom"===this._position||"top"===this._position?(this.maxWidth=a.width,this.maxHeight=a.height):(this.maxWidth=a.height,this.maxHeight=a.width);var a="axisX"===this.type?500>this.maxWidth?7:Math.max(7,Math.floor(this.maxWidth/100)):Math.max(Math.floor(this.maxWidth/50),3),c,e,g,h;h=1;if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=this.minimum;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=this.maximum;
if(this.scaleBreaks)for(h=0;h<this.scaleBreaks._appliedBreaks.length;h++)if((!y(this.sessionVariables.newViewportMinimum)&&this.sessionVariables.newViewportMinimum>=this.scaleBreaks._appliedBreaks[h].startValue||!y(this.options.minimum)&&this.options.minimum>=this.scaleBreaks._appliedBreaks[h].startValue||!y(this.options.viewportMinimum)&&this.viewportMinimum>=this.scaleBreaks._appliedBreaks[h].startValue)&&(!y(this.sessionVariables.newViewportMaximum)&&this.sessionVariables.newViewportMaximum<=this.scaleBreaks._appliedBreaks[h].endValue||
!y(this.options.maximum)&&this.options.maximum<=this.scaleBreaks._appliedBreaks[h].endValue||!y(this.options.viewportMaximum)&&this.viewportMaximum<=this.scaleBreaks._appliedBreaks[h].endValue)){this.scaleBreaks._appliedBreaks.splice(h,1);break}"axisX"===this.type?(c=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,e=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,1===e/c&&(h=Math.pow(this.logarithmBase,"undefined"===typeof this.options.interval?
0.4:this.options.interval),e*=h,c/=h),g=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/c>this.logarithmBase?e/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase):"axisY"===this.type&&(c=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,e=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,0>=c&&!isFinite(e)?(e="undefined"===typeof this.options.interval?0:this.options.interval,c=1):0>=c?c=e:isFinite(e)||(e=c),1===c&&1===e?(e*=this.logarithmBase-
1/this.logarithmBase,c=1):1===e/c?(h=Math.min(e*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,5)),e*=h,c/=h):c>e?(h=Math.min(c/e*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,5)),1<=e?c=e/h:e=c*h):(h=Math.min(e/c*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,0.04)),1!==e&&(e*=h),1!==c&&(c/=h)),g=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/c>this.logarithmBase?e/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase,this.includeZero&&(null===
this.viewportMinimum||isNaN(this.viewportMinimum))&&1<c&&(c=1),this.includeZero&&(null===this.viewportMaximum||isNaN(this.viewportMaximum))&&1>e&&(e=1));h=(isNaN(this.viewportMaximum)||null===this.viewportMaximum?e:this.viewportMaximum)/(isNaN(this.viewportMinimum)||null===this.viewportMinimum?c:this.viewportMinimum);linearRange=(isNaN(this.viewportMaximum)||null===this.viewportMaximum?e:this.viewportMaximum)-(isNaN(this.viewportMinimum)||null===this.viewportMinimum?c:this.viewportMinimum);this.intervalType=
"number";h=Math.pow(this.logarithmBase,C.getNiceNumber(Math.abs(Math.log(h)/f),!1));this.options&&0<this.options.interval?this.interval=this.options.interval:(this.interval=C.getNiceExponent(Math.log(h)/f/(a-1),!0),b=C.getNiceNumber(linearRange/(a-1),!0));if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum="axisX"===this.type?c/Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.floor(Math.log(c)/f/this.interval));if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=
"axisX"===this.type?e*Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.ceil(Math.log(e)/f/this.interval));1===this.viewportMaximum&&1===this.viewportMinimum&&(1===this.options.viewportMinimum?this.viewportMaximum*=this.logarithmBase-1/this.logarithmBase:1===this.options.viewportMaximum&&(this.viewportMinimum/=this.logarithmBase-1/this.logarithmBase),this.options&&"undefined"===typeof this.options.interval&&(this.interval=C.getNiceExponent(Math.ceil(Math.log(h)/f)/(a-1)),b=C.getNiceNumber((this.viewportMaximum-
this.viewportMinimum)/(a-1),!0)));if(null===this.minimum||null===this.maximum)"axisX"===this.type?(c=null!==this.minimum?this.minimum:this.dataInfo.min,e=null!==this.maximum?this.maximum:this.dataInfo.max,1===e/c&&(h=Math.pow(this.logarithmBase,"undefined"===typeof this.options.interval?0.4:this.options.interval),e*=h,c/=h),g=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/c>this.logarithmBase?e/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase):"axisY"===this.type&&(c=null!==this.minimum?
this.minimum:this.dataInfo.min,e=null!==this.maximum?this.maximum:this.dataInfo.max,isFinite(c)||isFinite(e)?1===c&&1===e?(e*=this.logarithmBase,c/=this.logarithmBase):1===e/c?(h=Math.pow(this.logarithmBase,this.interval),e*=h,c/=h):c>e?(h=Math.min(0.01*(c/e),5),1<=e?c=e/h:e=c*h):(h=Math.min(e/c*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,0.04)),1!==e&&(e*=h),1!==c&&(c/=h)):(e="undefined"===typeof this.options.interval?0:this.options.interval,c=1),g=Infinity!==this.dataInfo.minDiff?
this.dataInfo.minDiff:e/c>this.logarithmBase?e/c*Math.pow(this.logarithmBase,0.5):this.logarithmBase,this.includeZero&&(null===this.minimum||isNaN(this.minimum))&&1<c&&(c=1),this.includeZero&&(null===this.maximum||isNaN(this.maximum))&&1>e&&(e=1)),this.intervalType="number",null===this.minimum&&(this.minimum="axisX"===this.type?c/Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.floor(Math.log(c)/f/this.interval)),this.minimum=Math.min(this.minimum,null===this.sessionVariables.viewportMinimum||
isNaN(this.sessionVariables.viewportMinimum)?"undefined"===typeof this.sessionVariables.newViewportMinimum?Infinity:this.sessionVariables.newViewportMinimum:this.sessionVariables.viewportMinimum)),null===this.maximum&&(this.maximum="axisX"===this.type?e*Math.sqrt(g):Math.pow(this.logarithmBase,this.interval*Math.ceil(Math.log(e)/f/this.interval)),this.maximum=Math.max(this.maximum,null===this.sessionVariables.viewportMaximum||isNaN(this.sessionVariables.viewportMaximum)?"undefined"===typeof this.sessionVariables.newViewportMaximum?
0:this.sessionVariables.newViewportMaximum:this.sessionVariables.viewportMaximum)),1===this.maximum&&1===this.minimum&&(1===this.options.minimum?this.maximum*=this.logarithmBase-1/this.logarithmBase:1===this.options.maximum&&(this.minimum/=this.logarithmBase-1/this.logarithmBase));this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum);this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum);this.viewportMinimum>this.viewportMaximum&&(!this.options.viewportMinimum&&!this.options.minimum||
this.options.viewportMaximum||this.options.maximum?this.options.viewportMinimum||this.options.minimum||!this.options.viewportMaximum&&!this.options.maximum||(this.viewportMinimum=this.minimum=(this.options.viewportMaximum||this.options.maximum)/Math.pow(this.logarithmBase,2*Math.ceil(this.interval))):this.viewportMaximum=this.maximum=this.options.viewportMinimum||this.options.minimum);c=Math.pow(this.logarithmBase,Math.floor(Math.log(this.viewportMinimum)/(f*this.interval)+0.2)*this.interval);this.range=
this.viewportMaximum/this.viewportMinimum;this.noTicks=a;if(!this.options.interval&&this.range<Math.pow(this.logarithmBase,8>this.viewportMaximum||3>a?2:3)){for(f=Math.floor(this.viewportMinimum/b+0.5)*b;f<this.viewportMinimum;)f+=b;this.equidistantInterval=!1;this.intervalStartPosition=f;this.interval=b}else this.options.interval||(b=Math.ceil(this.interval),this.range>this.interval&&(this.interval=b,c=Math.pow(this.logarithmBase,Math.floor(Math.log(this.viewportMinimum)/(f*this.interval)+0.2)*this.interval))),
this.equidistantInterval=!0,this.intervalStartPosition=c;if(!this.valueFormatString&&(this.valueFormatString="#,##0.##",1>this.viewportMinimum)){f=Math.floor(Math.abs(Math.log(this.viewportMinimum)/Math.LN10))+2;if(isNaN(f)||!isFinite(f))f=2;if(2<f)for(h=0;h<f-2;h++)this.valueFormatString+="#"}};C.generateValueFormatString=function(a,f){var b="#,##0.",c=f;1>a&&(c+=Math.floor(Math.abs(Math.log(a)/Math.LN10)),isNaN(c)||!isFinite(c))&&(c=f);for(var e=0;e<c;e++)b+="#";return b};C.getNiceExponent=function(a,
f){var b=Math.floor(Math.log(a)/Math.LN10),c=a/Math.pow(10,b),c=0>b?1>=c?1:5>=c?5:10:Math.max(Math.floor(c),1);return-20>b?Number(c*Math.pow(10,b)):Number((c*Math.pow(10,b)).toFixed(20))};C.getNiceNumber=function(a,f){var b=Math.floor(Math.log(a)/Math.LN10),c=a/Math.pow(10,b),c=f?1.5>c?1:3>c?2:7>c?5:10:1>=c?1:2>=c?2:5>=c?5:10;return-20>b?Number(c*Math.pow(10,b)):Number((c*Math.pow(10,b)).toFixed(20))};C.prototype.getLabelStartPoint=function(){var a=V[this.intervalType+"Duration"]*this.interval,a=
new Date(Math.floor(this.viewportMinimum/a)*a);if("millisecond"!==this.intervalType)if("second"===this.intervalType)0<a.getMilliseconds()&&(a.setSeconds(a.getSeconds()+1),a.setMilliseconds(0));else if("minute"===this.intervalType){if(0<a.getSeconds()||0<a.getMilliseconds())a.setMinutes(a.getMinutes()+1),a.setSeconds(0),a.setMilliseconds(0)}else if("hour"===this.intervalType){if(0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setHours(a.getHours()+1),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("day"===
this.intervalType){if(0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("week"===this.intervalType){if(0<a.getDay()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+(7-a.getDay())),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("month"===this.intervalType){if(1<a.getDate()||0<a.getHours()||0<a.getMinutes()||
0<a.getSeconds()||0<a.getMilliseconds())a.setMonth(a.getMonth()+1),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else"year"===this.intervalType&&(0<a.getMonth()||1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())&&(a.setFullYear(a.getFullYear()+1),a.setMonth(0),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0));return a};oa(Q,Y);oa(ba,Y);ba.prototype.createUserOptions=function(a){if("undefined"!==
typeof a||this.options._isPlaceholder){var f=0;this.parent.options._isPlaceholder&&this.parent.createUserOptions();this.options._isPlaceholder||(Da(this.parent[this.optionsName]),f=this.parent.options[this.optionsName].indexOf(this.options));this.options="undefined"===typeof a?{}:a;this.parent.options[this.optionsName][f]=this.options}};ba.prototype.render=function(a){if(0!==this.spacing||0!==this.options.lineThickness&&("undefined"!==typeof this.options.lineThickness||0!==this.parent.lineThickness)){var f=
this.ctx,b=this.ctx.globalAlpha;this.ctx=a||this.ctx;this.ctx.save();this.ctx.beginPath();this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.ctx.clip();var c=this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue),e=this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);this.ctx.strokeStyle=this.lineColor;this.ctx.fillStyle=this.color;this.ctx.beginPath();this.ctx.globalAlpha=1;S(this.id);var g,h,l,m,k,r;a=Math.max(this.spacing,
3);var p=Math.max(0,this.lineThickness);this.ctx.lineWidth=p;this.ctx.setLineDash&&this.ctx.setLineDash(G(this.lineDashType,p));if("bottom"===this.scaleBreaks.parent._position||"top"===this.scaleBreaks.parent._position)if(c=1===p%2?(c.x<<0)+0.5:c.x<<0,h=1===p%2?(e.x<<0)+0.5:e.x<<0,"top"===this.scaleBreaks.parent._position?(e=this.chart.plotArea.y1,l=this.chart.plotArea.y2+p/2+0.5<<0):(e=this.chart.plotArea.y2,l=this.chart.plotArea.y1-p/2+0.5<<0,a*=-1),this.bounds={x1:c-p/2,y1:e,x2:h+p/2,y2:l},this.ctx.moveTo(c,
e),"straight"===this.type||"top"===this.scaleBreaks.parent._position&&0>=a||"bottom"===this.scaleBreaks.parent._position&&0<=a)this.ctx.lineTo(c,l),this.ctx.lineTo(h,l),this.ctx.lineTo(h,e);else if("wavy"===this.type){m=c;k=e;g=0.5;r=(l-k)/a/3;for(var n=0;n<r;n++)this.ctx.bezierCurveTo(m+g*a,k+a,m+g*a,k+2*a,m,k+3*a),k+=3*a,g*=-1;this.ctx.bezierCurveTo(m+g*a,k+a,m+g*a,k+2*a,m,k+3*a);m=h;g*=-1;this.ctx.lineTo(m,k);for(n=0;n<r;n++)this.ctx.bezierCurveTo(m+g*a,k-a,m+g*a,k-2*a,m,k-3*a),k-=3*a,g*=-1}else{if("zigzag"===
this.type){g=-1;k=e+a;m=c+a;r=(l-k)/a/2;for(n=0;n<r;n++)this.ctx.lineTo(m,k),m+=2*g*a,k+=2*a,g*=-1;this.ctx.lineTo(m,k);m+=h-c;for(n=0;n<r+1;n++)this.ctx.lineTo(m,k),m+=2*g*a,k-=2*a,g*=-1;this.ctx.lineTo(m+g*a,k+a)}}else if("left"===this.scaleBreaks.parent._position||"right"===this.scaleBreaks.parent._position)if(e=1===p%2?(e.y<<0)+0.5:e.y<<0,l=1===p%2?(c.y<<0)+0.5:c.y<<0,"left"===this.scaleBreaks.parent._position?(c=this.chart.plotArea.x1,h=this.chart.plotArea.x2+p/2+0.5<<0):(c=this.chart.plotArea.x2,
h=this.chart.plotArea.x1-p/2+0.5<<0,a*=-1),this.bounds={x1:c,y1:e-p/2,x2:h,y2:l+p/2},this.ctx.moveTo(c,e),"straight"===this.type||"left"===this.scaleBreaks.parent._position&&0>=a||"right"===this.scaleBreaks.parent._position&&0<=a)this.ctx.lineTo(h,e),this.ctx.lineTo(h,l),this.ctx.lineTo(c,l);else if("wavy"===this.type){m=c;k=e;g=0.5;r=(h-m)/a/3;for(n=0;n<r;n++)this.ctx.bezierCurveTo(m+a,k+g*a,m+2*a,k+g*a,m+3*a,k),m+=3*a,g*=-1;this.ctx.bezierCurveTo(m+a,k+g*a,m+2*a,k+g*a,m+3*a,k);k=l;g*=-1;this.ctx.lineTo(m,
k);for(n=0;n<r;n++)this.ctx.bezierCurveTo(m-a,k+g*a,m-2*a,k+g*a,m-3*a,k),m-=3*a,g*=-1}else if("zigzag"===this.type){g=1;k=e-a;m=c+a;r=(h-m)/a/2;for(n=0;n<r;n++)this.ctx.lineTo(m,k),k+=2*g*a,m+=2*a,g*=-1;this.ctx.lineTo(m,k);k+=l-e;for(n=0;n<r+1;n++)this.ctx.lineTo(m,k),k+=2*g*a,m-=2*a,g*=-1;this.ctx.lineTo(m+a,k+g*a)}0<p&&this.ctx.stroke();this.ctx.closePath();this.ctx.globalAlpha=this.fillOpacity;this.ctx.globalCompositeOperation="destination-over";this.ctx.fill();this.ctx.restore();this.ctx.globalAlpha=
b;this.ctx=f}};oa(fa,Y);fa.prototype.createUserOptions=function(a){if("undefined"!==typeof a||this.options._isPlaceholder){var f=0;this.parent.options._isPlaceholder&&this.parent.createUserOptions();this.options._isPlaceholder||(Da(this.parent.stripLines),f=this.parent.options.stripLines.indexOf(this.options));this.options="undefined"===typeof a?{}:a;this.parent.options.stripLines[f]=this.options}};fa.prototype.render=function(){this.ctx.save();var a=this.parent.getPixelCoordinatesOnAxis(this.value),
f=Math.abs("pixel"===this._thicknessType?this.thickness:this.parent.conversionParameters.pixelPerUnit*this.thickness);if(0<f){var b=null===this.opacity?1:this.opacity;this.ctx.strokeStyle=this.color;this.ctx.beginPath();var c=this.ctx.globalAlpha;this.ctx.globalAlpha=b;S(this.id);var e,g,h,l;this.ctx.lineWidth=f;this.ctx.setLineDash&&this.ctx.setLineDash(G(this.lineDashType,f));if("bottom"===this.parent._position||"top"===this.parent._position)e=g=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0,h=this.chart.plotArea.y1,
l=this.chart.plotArea.y2,this.bounds={x1:e-f/2,y1:h,x2:g+f/2,y2:l};else if("left"===this.parent._position||"right"===this.parent._position)h=l=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,e=this.chart.plotArea.x1,g=this.chart.plotArea.x2,this.bounds={x1:e,y1:h-f/2,x2:g,y2:l+f/2};this.ctx.moveTo(e,h);this.ctx.lineTo(g,l);this.ctx.stroke();this.ctx.globalAlpha=c}this.ctx.restore()};oa(ha,Y);ha.prototype.render=function(a,f){var b,c,e,g,h=null,l=h=null,m="";if(!this.valueFormatString)if("dateTime"===
this.parent.valueType)this.valueFormatString=this.parent.valueFormatString;else{var k=0,k="xySwapped"===this.chart.plotInfo.axisPlacement?50<this.parent.range?0:500<this.chart.width&&25>this.parent.range?2:Math.floor(Math.abs(Math.log(this.parent.range)/Math.LN10))+(5>this.parent.range?2:10>this.parent.range?1:0):50<this.parent.range?0:Math.floor(Math.abs(Math.log(this.parent.range)/Math.LN10))+(5>this.parent.range?2:10>this.parent.range?1:0);this.valueFormatString=C.generateValueFormatString(this.parent.range,
k)}var l=null===this.opacity?1:this.opacity,k=Math.abs("pixel"===this._thicknessType?this.thickness:this.parent.conversionParameters.pixelPerUnit*this.thickness),r=this.chart.overlaidCanvasCtx,p=r.globalAlpha;r.globalAlpha=l;r.beginPath();r.strokeStyle=this.color;r.lineWidth=k;r.save();this.labelFontSize=y(this.options.labelFontSize)?this.parent.labelFontSize:this.labelFontSize;if("left"===this.parent._position||"right"===this.parent._position)this.labelMaxWidth=y(this.options.labelMaxWidth)?this.parent.bounds.x2-
this.parent.bounds.x1:this.labelMaxWidth,this.labelMaxHeight=y(this.options.labelWrap)||this.labelWrap?3*this.chart.height:2*this.labelFontSize;else if("top"===this.parent._position||"bottom"===this.parent._position)this.labelMaxWidth=y(this.options.labelMaxWidth)?3*this.chart.width:this.labelMaxWidth,this.labelMaxHeight=y(this.options.labelWrap)||this.labelWrap?this.parent.bounds.height:2*this.labelFontSize;0<k&&r.setLineDash&&r.setLineDash(G(this.lineDashType,k));l=new ka(r,{x:0,y:0,padding:{top:2,
right:3,bottom:2,left:4},backgroundColor:this.labelBackgroundColor,borderColor:this.labelBorderColor,borderThickness:this.labelBorderThickness,cornerRadius:this.labelCornerRadius,maxWidth:this.labelMaxWidth,maxHeight:this.labelMaxHeight,angle:this.labelAngle,text:m,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"});if(this.snapToDataPoint){var n=0,h=[];
if("xySwapped"===this.chart.plotInfo.axisPlacement){var d=null;if("bottom"===this.parent._position||"top"===this.parent._position)n=this.parent.dataSeries[0].axisX.convertPixelToValue({y:f});else if("left"===this.parent._position||"right"===this.parent._position)n=this.parent.convertPixelToValue({y:f});for(var q=0;q<this.parent.dataSeries.length;q++)(d=this.parent.dataSeries[q].getDataPointAtX(n,!0))&&0<=d.index&&(d.dataSeries=this.parent.dataSeries[q],null!==d.dataPoint.y&&h.push(d));d=null;if(0===
h.length)return;h.sort(function(a,b){return a.distance-b.distance});d=Math.abs(a-this.parent.convertValueToPixel(h[0].dataPoint.y));q=0;if("rangeBar"===h[0].dataSeries.type||"error"===h[0].dataSeries.type)for(var d=Math.abs(a-this.parent.convertValueToPixel(h[q].dataPoint.y[0])),s=0,n=0;n<h.length;n++)if(h[n].dataPoint.y&&h[n].dataPoint.y.length)for(m=0;m<h[n].dataPoint.y.length;m++)s=Math.abs(a-this.parent.convertValueToPixel(h[n].dataPoint.y[m])),s<d&&(d=s,q=n);else s=Math.abs(a-this.parent.convertValueToPixel(h[n].dataPoint.y)),
s<d&&(d=s,q=n);else if("stackedBar"===h[0].dataSeries.type)for(var d=Math.abs(a-this.parent.convertValueToPixel(h[0].dataPoint.y)),v=s=0,n=q=0;n<h.length;n++)if(h[n].dataPoint.y&&h[n].dataPoint.y.length)for(m=0;m<h[n].dataPoint.y.length;m++)s=Math.abs(a-this.parent.convertValueToPixel(h[n].dataPoint.y[m])),s<d&&(d=s,q=n);else v+=h[n].dataPoint.y,s=Math.abs(a-this.parent.convertValueToPixel(v)),s<d&&(d=s,q=n);else if("stackedBar100"===h[0].dataSeries.type)for(var d=Math.abs(a-this.parent.convertValueToPixel(h[0].dataPoint.y)),
u=v=s=0,n=0;n<h.length;n++)if(h[n].dataPoint.y&&h[n].dataPoint.y.length)for(m=0;m<h[n].dataPoint.y.length;m++)s=Math.abs(a-this.parent.convertValueToPixel(h[n].dataPoint.y[m])),s<d&&(d=s,q=n);else v+=h[n].dataPoint.y,u=h[n].dataPoint.x.getTime?h[n].dataPoint.x.getTime():h[n].dataPoint.x,u=100*(v/h[n].dataSeries.plotUnit.dataPointYSums[u]),s=Math.abs(a-this.parent.convertValueToPixel(u)),s<d&&(d=s,q=n);else for(d=Math.abs(a-this.parent.convertValueToPixel(h[0].dataPoint.y)),n=q=s=0;n<h.length;n++)if(h[n].dataPoint.y&&
h[n].dataPoint.y.length)for(m=0;m<h[n].dataPoint.y.length;m++)s=Math.abs(a-this.parent.convertValueToPixel(h[n].dataPoint.y[m])),s<d&&(d=s,q=n);else s=Math.abs(a-this.parent.convertValueToPixel(h[n].dataPoint.y)),s<d&&(d=s,q=n);m=h[q];if("bottom"===this.parent._position||"top"===this.parent._position){b=0;if("rangeBar"===this.parent.dataSeries[q].type||"error"===this.parent.dataSeries[q].type){d=Math.abs(a-this.parent.convertValueToPixel(m.dataPoint.y[0]));for(n=s=0;n<m.dataPoint.y.length;n++)s=Math.abs(a-
this.parent.convertValueToPixel(m.dataPoint.y[n])),s<d&&(d=s,b=n);h=1===r.lineWidth%2?(this.parent.convertValueToPixel(m.dataPoint.y[b])<<0)+0.5:this.parent.convertValueToPixel(m.dataPoint.y[b])<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataPoint.y[b]}):y(this.options.label)?X(m.dataPoint.y[b],this.valueFormatString,this.chart._cultureInfo):this.label}else if("stackedBar"===this.parent.dataSeries[q].type){d=Math.abs(a-
this.parent.convertValueToPixel(h[0].dataPoint.y));v=s=0;for(n=q;0<=n;n--)v+=h[n].dataPoint.y,s=Math.abs(a-this.parent.convertValueToPixel(v)),s<d&&(d=s,b=n);h=1===r.lineWidth%2?(this.parent.convertValueToPixel(v)<<0)+0.5:this.parent.convertValueToPixel(v)<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataPoint.y}):y(this.options.label)?X(m.dataPoint.y,this.valueFormatString,this.chart._cultureInfo):this.label}else if("stackedBar100"===
this.parent.dataSeries[q].type){d=Math.abs(a-this.parent.convertValueToPixel(h[0].dataPoint.y));u=v=s=0;for(n=q;0<=n;n--)v+=h[n].dataPoint.y,u=h[n].dataPoint.x.getTime?h[n].dataPoint.x.getTime():h[n].dataPoint.x,u=100*(v/h[n].dataSeries.plotUnit.dataPointYSums[u]),s=Math.abs(a-this.parent.convertValueToPixel(u)),s<d&&(d=s,b=n);h=1===r.lineWidth%2?(this.parent.convertValueToPixel(u)<<0)+0.5:this.parent.convertValueToPixel(u)<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,
crosshair:this.options,value:u}):y(this.options.label)?X(u,this.valueFormatString,this.chart._cultureInfo):this.label}else h=1===r.lineWidth%2?(this.parent.convertValueToPixel(m.dataPoint.y)<<0)+0.5:this.parent.convertValueToPixel(m.dataPoint.y)<<0,l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataPoint.y}):y(this.options.label)?X(m.dataPoint.y,this.valueFormatString,this.chart._cultureInfo):this.label;b=c=h;e=this.chart.plotArea.y1;
g=this.chart.plotArea.y2;this.bounds={x1:b-k/2,y1:e,x2:c+k/2,y2:g};l.x=b-l.measureText().width/2;l.x+l.width>this.chart.bounds.x2?l.x=this.chart.bounds.x2-l.width:l.x<this.chart.bounds.x1&&(l.x=this.chart.bounds.x1);l.y=this.parent.lineCoordinates.y2+l.fontSize/2+2}else if("left"===this.parent._position||"right"===this.parent._position){e=g=h=1===r.lineWidth%2?(this.parent.convertValueToPixel(m.dataPoint.x)<<0)+0.5:this.parent.convertValueToPixel(m.dataPoint.x)<<0;b=this.chart.plotArea.x1;c=this.chart.plotArea.x2;
this.bounds={x1:b,y1:e-k/2,x2:c,y2:g+k/2};u=!1;if(this.parent.labels)for(h=Math.ceil(this.parent.interval),n=0;n<this.parent.viewportMaximum;n+=h)if(this.parent.labels[n])u=!0;else{u=!1;break}if(u){if("axisX"===this.parent.type)for(n=this.parent.convertPixelToValue({y:f}),d=null,q=0;q<this.parent.dataSeries.length;q++)(d=this.parent.dataSeries[q].getDataPointAtX(n,!0))&&0<=d.index&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataPoint.x}):
y(this.options.label)?d.dataPoint.label:this.label)}else"dateTime"===this.parent.valueType?l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataPoint.x}):y(this.options.label)?Ba(m.dataPoint.x,this.valueFormatString,this.chart._cultureInfo):this.label:"number"===this.parent.valueType&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataPoint.x}):y(this.options.label)?
X(m.dataPoint.x,this.valueFormatString,this.chart._cultureInfo):this.label);l.y=g+l.fontSize/2-l.measureText().height/2+2;l.y-l.fontSize/2<this.chart.bounds.y1?l.y=this.chart.bounds.y1+l.fontSize/2+2:l.y+l.measureText().height-l.fontSize/2>this.chart.bounds.y2&&(l.y=this.chart.bounds.y2-l.measureText().height+l.fontSize/2);"left"===this.parent._position?l.x=this.parent.lineCoordinates.x2-l.measureText().width:"right"===this.parent._position&&(l.x=this.parent.lineCoordinates.x2)}}else if("bottom"===
this.parent._position||"top"===this.parent._position){n=this.parent.convertPixelToValue({x:a});for(q=0;q<this.parent.dataSeries.length;q++)(d=this.parent.dataSeries[q].getDataPointAtX(n,!0))&&0<=d.index&&(d.dataSeries=this.parent.dataSeries[q],null!==d.dataPoint.y&&h.push(d));if(0===h.length)return;h.sort(function(a,b){return a.distance-b.distance});m=h[0];b=c=h=1===r.lineWidth%2?(this.parent.convertValueToPixel(m.dataPoint.x)<<0)+0.5:this.parent.convertValueToPixel(m.dataPoint.x)<<0;e=this.chart.plotArea.y1;
g=this.chart.plotArea.y2;this.bounds={x1:b-k/2,y1:e,x2:c+k/2,y2:g};u=!1;if(this.parent.labels)for(h=Math.ceil(this.parent.interval),n=0;n<this.parent.viewportMaximum;n+=h)if(this.parent.labels[n])u=!0;else{u=!1;break}if(u){if("axisX"===this.parent.type)for(n=this.parent.convertPixelToValue({x:a}),d=null,q=0;q<this.parent.dataSeries.length;q++)(d=this.parent.dataSeries[q].getDataPointAtX(n,!0))&&0<=d.index&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,
crosshair:this.options,value:m.dataPoint.x}):y(this.options.label)?d.dataPoint.label:this.label)}else"dateTime"===this.parent.valueType?l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataPoint.x}):y(this.options.label)?Ba(m.dataPoint.x,this.valueFormatString,this.chart._cultureInfo):this.label:"number"===this.parent.valueType&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,
value:m.dataPoint.x}):y(this.options.label)?X(m.dataPoint.x,this.valueFormatString,this.chart._cultureInfo):this.label);l.x=b-l.measureText().width/2;l.x+l.width>this.chart.bounds.x2&&(l.x=this.chart.bounds.x2-l.width);l.x<this.chart.bounds.x1&&(l.x=this.chart.bounds.x1);"bottom"===this.parent._position?l.y=this.parent.lineCoordinates.y2+l.fontSize/2+2:"top"===this.parent._position&&(l.y=this.parent.lineCoordinates.y1-l.height+l.fontSize/2+2)}else if("left"===this.parent._position||"right"===this.parent._position){!y(this.parent.dataSeries)&&
0<this.parent.dataSeries.length&&(n=this.parent.dataSeries[0].axisX.convertPixelToValue({x:a}));for(q=0;q<this.parent.dataSeries.length;q++)(d=this.parent.dataSeries[q].getDataPointAtX(n,!0))&&0<=d.index&&(d.dataSeries=this.parent.dataSeries[q],null!==d.dataPoint.y&&h.push(d));if(0===h.length)return;h.sort(function(a,b){return a.distance-b.distance});q=0;if("rangeColumn"===h[0].dataSeries.type||"rangeArea"===h[0].dataSeries.type||"error"===h[0].dataSeries.type||"rangeSplineArea"===h[0].dataSeries.type||
"candlestick"===h[0].dataSeries.type||"ohlc"===h[0].dataSeries.type||"boxAndWhisker"===h[0].dataSeries.type)for(d=Math.abs(f-this.parent.convertValueToPixel(h[0].dataPoint.y[0])),n=s=0;n<h.length;n++)if(h[n].dataPoint.y&&h[n].dataPoint.y.length)for(m=0;m<h[n].dataPoint.y.length;m++)s=Math.abs(f-this.parent.convertValueToPixel(h[n].dataPoint.y[m])),s<d&&(d=s,q=n);else s=Math.abs(f-this.parent.convertValueToPixel(h[n].dataPoint.y)),s<d&&(d=s,q=n);else if("stackedColumn"===h[0].dataSeries.type||"stackedArea"===
h[0].dataSeries.type)for(d=Math.abs(f-this.parent.convertValueToPixel(h[0].dataPoint.y)),n=v=s=0;n<h.length;n++)if(h[n].dataPoint.y&&h[n].dataPoint.y.length)for(m=0;m<h[n].dataPoint.y.length;m++)s=Math.abs(f-this.parent.convertValueToPixel(h[n].dataPoint.y[m])),s<d&&(d=s,q=n);else v+=h[n].dataPoint.y,s=Math.abs(f-this.parent.convertValueToPixel(v)),s<d&&(d=s,q=n);else if("stackedColumn100"===h[0].dataSeries.type||"stackedArea100"===h[0].dataSeries.type)for(d=Math.abs(f-this.parent.convertValueToPixel(h[0].dataPoint.y)),
n=u=v=s=0;n<h.length;n++)if(h[n].dataPoint.y&&h[n].dataPoint.y.length)for(m=0;m<h[n].dataPoint.y.length;m++)s=Math.abs(f-this.parent.convertValueToPixel(h[n].dataPoint.y[m])),s<d&&(d=s,q=n);else v+=h[n].dataPoint.y,u=h[n].dataPoint.x.getTime?h[n].dataPoint.x.getTime():h[n].dataPoint.x,u=100*(v/h[n].dataSeries.plotUnit.dataPointYSums[u]),s=Math.abs(f-this.parent.convertValueToPixel(u)),s<d&&(d=s,q=n);else for(d=Math.abs(f-this.parent.convertValueToPixel(h[0].dataPoint.y)),n=s=0;n<h.length;n++)if(h[n].dataPoint.y&&
h[n].dataPoint.y.length)for(m=0;m<h[n].dataPoint.y.length;m++)s=Math.abs(f-this.parent.convertValueToPixel(h[n].dataPoint.y[m])),s<d&&(d=s,q=n);else s=Math.abs(f-this.parent.convertValueToPixel(h[n].dataPoint.y)),s<d&&(d=s,q=n);m=h[q];b=0;if("rangeColumn"===this.parent.dataSeries[q].type||"rangeArea"===this.parent.dataSeries[q].type||"error"===this.parent.dataSeries[q].type||"rangeSplineArea"===this.parent.dataSeries[q].type||"candlestick"===this.parent.dataSeries[q].type||"ohlc"===this.parent.dataSeries[q].type||
"boxAndWhisker"===this.parent.dataSeries[q].type){d=Math.abs(f-this.parent.convertValueToPixel(m.dataPoint.y[0]));for(n=s=0;n<m.dataPoint.y.length;n++)s=Math.abs(f-this.parent.convertValueToPixel(m.dataPoint.y[n])),s<d&&(d=s,b=n);h=1===r.lineWidth%2?(this.parent.convertValueToPixel(m.dataPoint.y[b])<<0)+0.5:this.parent.convertValueToPixel(m.dataPoint.y[b])<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataPoint.y[b]}):y(this.options.label)?
X(m.dataPoint.y[b],this.valueFormatString,this.chart._cultureInfo):this.label}else if("stackedColumn"===this.parent.dataSeries[q].type||"stackedArea"===this.parent.dataSeries[q].type){d=Math.abs(f-this.parent.convertValueToPixel(h[0].dataPoint.y));v=s=0;for(n=q;0<=n;n--)v+=h[n].dataPoint.y,s=Math.abs(f-this.parent.convertValueToPixel(v)),s<d&&(d=s,b=n);h=1===r.lineWidth%2?(this.parent.convertValueToPixel(v)<<0)+0.5:this.parent.convertValueToPixel(v)<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,
axis:this.parent.options,crosshair:this.options,value:m.dataPoint.y}):y(this.options.label)?X(m.dataPoint.y,this.valueFormatString,this.chart._cultureInfo):this.label}else if("stackedColumn100"===this.parent.dataSeries[q].type||"stackedArea100"===this.parent.dataSeries[q].type){d=Math.abs(f-this.parent.convertValueToPixel(h[0].dataPoint.y));v=s=0;for(n=q;0<=n;n--)v+=h[n].dataPoint.y,u=h[n].dataPoint.x.getTime?h[n].dataPoint.x.getTime():h[n].dataPoint.x,u=100*(v/h[n].dataSeries.plotUnit.dataPointYSums[u]),
s=Math.abs(f-this.parent.convertValueToPixel(u)),s<d&&(d=s,b=n);h=1===r.lineWidth%2?(this.parent.convertValueToPixel(u)<<0)+0.5:this.parent.convertValueToPixel(u)<<0;l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:u}):y(this.options.label)?X(u,this.valueFormatString,this.chart._cultureInfo):this.label}else"waterfall"===this.parent.dataSeries[q].type?(h=1===r.lineWidth%2?(this.parent.convertValueToPixel(m.dataSeries.dataPointEOs[m.index].cumulativeSum)<<
0)+0.5:this.parent.convertValueToPixel(m.dataSeries.dataPointEOs[m.index].cumulativeSum)<<0,l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataSeries.dataPointEOs[m.index].cumulativeSum}):y(this.options.label)?X(m.dataSeries.dataPointEOs[m.index].cumulativeSum,this.valueFormatString,this.chart._cultureInfo):this.label):(h=1===r.lineWidth%2?(this.parent.convertValueToPixel(m.dataPoint.y)<<0)+0.5:this.parent.convertValueToPixel(m.dataPoint.y)<<
0,l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:m.dataPoint.y}):y(this.options.label)?X(m.dataPoint.y,this.valueFormatString,this.chart._cultureInfo):this.label);e=g=h;b=this.chart.plotArea.x1;c=this.chart.plotArea.x2;this.bounds={x1:b,y1:e-k/2,x2:c,y2:g+k/2};l.y=g+l.fontSize/2-l.measureText().height/2+2;l.y-l.fontSize/2<this.chart.bounds.y1?l.y=this.chart.bounds.y1+l.fontSize/2+2:l.y+l.measureText().height-l.fontSize/2>this.chart.bounds.y2&&
(l.y=this.chart.bounds.y2-l.measureText().height+l.fontSize/2);"left"===this.parent._position?l.x=this.parent.lineCoordinates.x2-l.measureText().width:"right"===this.parent._position&&(l.x=this.parent.lineCoordinates.x2)}h=null;("bottom"===this.parent._position||"top"===this.parent._position)&&(b>=this.parent.convertValueToPixel(this.parent.viewportMinimum)&&c<=this.parent.convertValueToPixel(this.parent.viewportMaximum))&&(0<k&&(r.moveTo(b,e),r.lineTo(c,g),r.stroke()),r.restore(),!y(l.text)&&("number"===
typeof l.text.valueOf()||0<l.text.length)&&l.render(!0));("left"===this.parent._position||"right"===this.parent._position)&&(g>=this.parent.convertValueToPixel(this.parent.viewportMaximum)&&e<=this.parent.convertValueToPixel(this.parent.viewportMinimum))&&(0<k&&(r.moveTo(b,e),r.lineTo(c,g),r.stroke()),r.restore(),!y(l.text)&&("number"===typeof l.text.valueOf()||0<l.text.length)&&l.render(!0))}else{if("bottom"===this.parent._position||"top"===this.parent._position)b=c=h=1===r.lineWidth%2?(a<<0)+0.5:
a<<0,e=this.chart.plotArea.y1,g=this.chart.plotArea.y2,this.bounds={x1:b-k/2,y1:e,x2:c+k/2,y2:g};else if("left"===this.parent._position||"right"===this.parent._position)e=g=h=1===r.lineWidth%2?(f<<0)+0.5:f<<0,b=this.chart.plotArea.x1,c=this.chart.plotArea.x2,this.bounds={x1:b,y1:e-k/2,x2:c,y2:g+k/2};if("xySwapped"===this.chart.plotInfo.axisPlacement)if("left"===this.parent._position||"right"===this.parent._position){u=!1;if(this.parent.labels)for(h=Math.ceil(this.parent.interval),n=0;n<this.parent.viewportMaximum;n+=
h)if(this.parent.labels[n])u=!0;else{u=!1;break}if(u){if("axisX"===this.parent.type)for(n=this.parent.convertPixelToValue({y:f}),d=null,q=0;q<this.parent.dataSeries.length;q++)(d=this.parent.dataSeries[q].getDataPointAtX(n,!0))&&0<=d.index&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(a)}):y(this.options.label)?d.dataPoint.label:this.label)}else"dateTime"===this.parent.valueType?l.text=this.labelFormatter?
this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(f)}):y(this.options.label)?Ba(this.parent.convertPixelToValue(f),this.valueFormatString,this.chart._cultureInfo):this.label:"number"===this.parent.valueType&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(f)}):y(this.options.label)?X(this.parent.convertPixelToValue(f),this.valueFormatString,
this.chart._cultureInfo):this.label);l.y=f+l.fontSize/2-l.measureText().height/2+2;l.y-l.fontSize/2<this.chart.bounds.y1?l.y=this.chart.bounds.y1+l.fontSize/2+2:l.y+l.measureText().height-l.fontSize/2>this.chart.bounds.y2&&(l.y=this.chart.bounds.y2-l.measureText().height+l.fontSize/2);"left"===this.parent._position?l.x=this.parent.lineCoordinates.x1-l.measureText().width:"right"===this.parent._position&&(l.x=this.parent.lineCoordinates.x2)}else{if("bottom"===this.parent._position||"top"===this.parent._position)l.text=
this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(a)}):y(this.options.label)?X(this.parent.convertPixelToValue(a),this.valueFormatString,this.chart._cultureInfo):this.label,l.x=b-l.measureText().width/2,l.x+l.width>this.chart.bounds.x2&&(l.x=this.chart.bounds.x2-l.width),l.x<this.chart.bounds.x1&&(l.x=this.chart.bounds.x1),"bottom"===this.parent._position&&(l.y=this.parent.lineCoordinates.y2+l.fontSize/2+
2),"top"===this.parent._position&&(l.y=this.parent.lineCoordinates.y1-l.height+l.fontSize/2+2)}else if("bottom"===this.parent._position||"top"===this.parent._position){u=!1;m="";if(this.parent.labels)for(h=Math.ceil(this.parent.interval),n=0;n<this.parent.viewportMaximum;n+=h)if(this.parent.labels[n])u=!0;else{u=!1;break}if(u){if("axisX"===this.parent.type)for(n=this.parent.convertPixelToValue({x:a}),d=null,q=0;q<this.parent.dataSeries.length;q++)(d=this.parent.dataSeries[q].getDataPointAtX(n,!0))&&
0<=d.index&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(a)}):y(this.options.label)?d.dataPoint.label:this.label)}else"dateTime"===this.parent.valueType?l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(a)}):y(this.options.label)?Ba(this.parent.convertPixelToValue(a),this.valueFormatString,this.chart._cultureInfo):
this.label:"number"===this.parent.valueType&&(l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:0<this.parent.dataSeries.length?this.parent.convertPixelToValue(a):""}):y(this.options.label)?X(this.parent.convertPixelToValue(a),this.valueFormatString,this.chart._cultureInfo):this.label);l.x=b-l.measureText().width/2;l.x+l.width>this.chart.bounds.x2&&(l.x=this.chart.bounds.x2-l.width);l.x<this.chart.bounds.x1&&(l.x=this.chart.bounds.x1);
"bottom"===this.parent._position?l.y=this.parent.lineCoordinates.y2+l.fontSize/2+2:"top"===this.parent._position&&(l.y=this.parent.lineCoordinates.y1-l.height+l.fontSize/2+2)}else if("left"===this.parent._position||"right"===this.parent._position)l.text=this.labelFormatter?this.labelFormatter({chart:this.chart,axis:this.parent.options,crosshair:this.options,value:this.parent.convertPixelToValue(f)}):y(this.options.label)?X(this.parent.convertPixelToValue(f),this.valueFormatString,this.chart._cultureInfo):
this.label,l.y=f+l.fontSize/2-l.measureText().height/2+2,l.y-l.fontSize/2<this.chart.bounds.y1?l.y=this.chart.bounds.y1+l.fontSize/2+2:l.y+l.measureText().height-l.fontSize/2>this.chart.bounds.y2&&(l.y=this.chart.bounds.y2-l.measureText().height+l.fontSize/2),"left"===this.parent._position?l.x=this.parent.lineCoordinates.x2-l.measureText().width:"right"===this.parent._position&&(l.x=this.parent.lineCoordinates.x2);0<k&&(r.moveTo(b,e),r.lineTo(c,g),r.stroke());r.restore();!y(l.text)&&("number"===typeof l.text.valueOf()||
0<l.text.length)&&l.render(!0)}r.globalAlpha=p};oa(Z,Y);Z.prototype._initialize=function(){if(this.enabled){this.container=document.createElement("div");this.container.setAttribute("class","canvasjs-chart-tooltip");this.container.style.position="absolute";this.container.style.height="auto";this.container.style.boxShadow="1px 1px 2px 2px rgba(0,0,0,0.1)";this.container.style.zIndex="1000";this.container.style.pointerEvents="none";this.container.style.display="none";var a;a='<div style=" width: auto;height: auto;min-width: 50px;';
a+="line-height: auto;";a+="margin: 0px 0px 0px 0px;";a+="padding: 5px;";a+="font-family: Calibri, Arial, Georgia, serif;";a+="font-weight: normal;";a+="font-style: "+(v?"italic;":"normal;");a+="font-size: 14px;";a+="color: #000000;";a+="text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";a+="text-align: left;";a+="border: 2px solid gray;";a+=v?"background: rgba(255,255,255,.9);":"background: rgb(255,255,255);";a+="text-indent: 0px;";a+="white-space: nowrap;";a+="border-radius: 5px;";a+="-moz-user-select:none;";
a+="-khtml-user-select: none;";a+="-webkit-user-select: none;";a+="-ms-user-select: none;";a+="user-select: none;";v||(a+="filter: alpha(opacity = 90);",a+="filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");a+='} "> Sample Tooltip</div>';this.container.innerHTML=a;this.contentDiv=this.container.firstChild;this.container.style.borderRadius=this.contentDiv.style.borderRadius;this.chart._canvasJSContainer.appendChild(this.container)}};Z.prototype.mouseMoveHandler=
function(a,f){this._lastUpdated&&4>(new Date).getTime()-this._lastUpdated||(this._lastUpdated=(new Date).getTime(),this.chart.resetOverlayedCanvas(),this._updateToolTip(a,f))};Z.prototype._updateToolTip=function(a,f,b){b="undefined"===typeof b?!0:b;this.container||this._initialize();this.enabled||this.hide();if(!this.chart.disableToolTip){if("undefined"===typeof a||"undefined"===typeof f){if(isNaN(this._prevX)||isNaN(this._prevY))return;a=this._prevX;f=this._prevY}else this._prevX=a,this._prevY=f;
var c=null,e=null,g=[],h=0;if(this.shared&&this.enabled&&"none"!==this.chart.plotInfo.axisPlacement){if("xySwapped"===this.chart.plotInfo.axisPlacement){var l=[];if(this.chart.axisX)for(var m=0;m<this.chart.axisX.length;m++){for(var h=this.chart.axisX[m].convertPixelToValue({y:f}),k=null,c=0;c<this.chart.axisX[m].dataSeries.length;c++)(k=this.chart.axisX[m].dataSeries[c].getDataPointAtX(h,b))&&0<=k.index&&(k.dataSeries=this.chart.axisX[m].dataSeries[c],null!==k.dataPoint.y&&l.push(k));k=null}if(this.chart.axisX2)for(m=
0;m<this.chart.axisX2.length;m++){h=this.chart.axisX2[m].convertPixelToValue({y:f});k=null;for(c=0;c<this.chart.axisX2[m].dataSeries.length;c++)(k=this.chart.axisX2[m].dataSeries[c].getDataPointAtX(h,b))&&0<=k.index&&(k.dataSeries=this.chart.axisX2[m].dataSeries[c],null!==k.dataPoint.y&&l.push(k));k=null}}else{l=[];if(this.chart.axisX)for(m=0;m<this.chart.axisX.length;m++)for(h=this.chart.axisX[m].convertPixelToValue({x:a}),k=null,c=0;c<this.chart.axisX[m].dataSeries.length;c++)(k=this.chart.axisX[m].dataSeries[c].getDataPointAtX(h,
b))&&0<=k.index&&(k.dataSeries=this.chart.axisX[m].dataSeries[c],null!==k.dataPoint.y&&l.push(k));if(this.chart.axisX2)for(m=0;m<this.chart.axisX2.length;m++)for(h=this.chart.axisX2[m].convertPixelToValue({x:a}),k=null,c=0;c<this.chart.axisX2[m].dataSeries.length;c++)(k=this.chart.axisX2[m].dataSeries[c].getDataPointAtX(h,b))&&0<=k.index&&(k.dataSeries=this.chart.axisX2[m].dataSeries[c],null!==k.dataPoint.y&&l.push(k))}if(0===l.length)return;l.sort(function(a,b){return a.distance-b.distance});b=l[0];
for(c=0;c<l.length;c++)l[c].dataPoint.x.valueOf()===b.dataPoint.x.valueOf()&&g.push(l[c]);l=null}else{if(k=this.chart.getDataPointAtXY(a,f,b))this.currentDataPointIndex=k.dataPointIndex,this.currentSeriesIndex=k.dataSeries.index;else if(v)if(k=Xa(a,f,this.chart._eventManager.ghostCtx),0<k&&"undefined"!==typeof this.chart._eventManager.objectMap[k]){k=this.chart._eventManager.objectMap[k];if("legendItem"===k.objectType)return;this.currentSeriesIndex=k.dataSeriesIndex;this.currentDataPointIndex=0<=
k.dataPointIndex?k.dataPointIndex:-1}else this.currentDataPointIndex=-1;else this.currentDataPointIndex=-1;if(0<=this.currentSeriesIndex){e=this.chart.data[this.currentSeriesIndex];k={};if(0<=this.currentDataPointIndex)c=e.dataPoints[this.currentDataPointIndex],k.dataSeries=e,k.dataPoint=c,k.index=this.currentDataPointIndex,k.distance=Math.abs(c.x-h),"waterfall"===e.type&&(k.cumulativeSumYStartValue=e.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue,k.cumulativeSum=e.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
else{if(!this.enabled||"line"!==e.type&&"stepLine"!==e.type&&"spline"!==e.type&&"area"!==e.type&&"stepArea"!==e.type&&"splineArea"!==e.type&&"stackedArea"!==e.type&&"stackedArea100"!==e.type&&"rangeArea"!==e.type&&"rangeSplineArea"!==e.type&&"candlestick"!==e.type&&"ohlc"!==e.type&&"boxAndWhisker"!==e.type)return;h=e.axisX.convertPixelToValue({x:a});k=e.getDataPointAtX(h,b);k.dataSeries=e;this.currentDataPointIndex=k.index;c=k.dataPoint}if(!y(k.dataPoint.y))if(k.dataSeries.axisY)if(0<k.dataPoint.y.length){for(c=
b=0;c<k.dataPoint.y.length;c++)k.dataPoint.y[c]<k.dataSeries.axisY.viewportMinimum?b--:k.dataPoint.y[c]>k.dataSeries.axisY.viewportMaximum&&b++;b<k.dataPoint.y.length&&b>-k.dataPoint.y.length&&g.push(k)}else"column"===e.type||"bar"===e.type?0>k.dataPoint.y?0>k.dataSeries.axisY.viewportMinimum&&k.dataSeries.axisY.viewportMaximum>=k.dataPoint.y&&g.push(k):k.dataSeries.axisY.viewportMinimum<=k.dataPoint.y&&0<=k.dataSeries.axisY.viewportMaximum&&g.push(k):"bubble"===e.type?(b=this.chart._eventManager.objectMap[e.dataPointIds[k.index]].size/
2,k.dataPoint.y>=k.dataSeries.axisY.viewportMinimum-b&&k.dataPoint.y<=k.dataSeries.axisY.viewportMaximum+b&&g.push(k)):"waterfall"===e.type?(b=0,k.cumulativeSumYStartValue<k.dataSeries.axisY.viewportMinimum?b--:k.cumulativeSumYStartValue>k.dataSeries.axisY.viewportMaximum&&b++,k.cumulativeSum<k.dataSeries.axisY.viewportMinimum?b--:k.cumulativeSum>k.dataSeries.axisY.viewportMaximum&&b++,2>b&&-2<b&&g.push(k)):(0<=k.dataSeries.type.indexOf("100")||"stackedColumn"===e.type||"stackedBar"===e.type||k.dataPoint.y>=
k.dataSeries.axisY.viewportMinimum&&k.dataPoint.y<=k.dataSeries.axisY.viewportMaximum)&&g.push(k);else g.push(k)}}if(0<g.length&&(this.highlightObjects(g),this.enabled))if(b="",b=this.getToolTipInnerHTML({entries:g}),null!==b){this.contentDiv.innerHTML=b;b=!1;"none"===this.container.style.display&&(b=!0,this.container.style.display="block");try{this.contentDiv.style.background=this.backgroundColor?this.backgroundColor:v?"rgba(255,255,255,.9)":"rgb(255,255,255)",this.borderColor="waterfall"===g[0].dataSeries.type?
this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.options.borderColor?this.options.borderColor:g[0].dataPoint.color?g[0].dataPoint.color:-1<g[0].dataPoint.y?g[0].dataSeries.risingColor:g[0].dataSeries.fallingColor:"error"===g[0].dataSeries.type?this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.options.borderColor?this.options.borderColor:g[0].dataSeries.color?g[0].dataSeries.color:
g[0].dataSeries._colorSet[e.index%g[0].dataSeries._colorSet.length]:this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.options.borderColor?this.options.borderColor:g[0].dataPoint.color?g[0].dataPoint.color:g[0].dataSeries.color?g[0].dataSeries.color:g[0].dataSeries._colorSet[g[0].index%g[0].dataSeries._colorSet.length],this.contentDiv.style.borderWidth=this.borderThickness||0===this.borderThickness?this.borderThickness+"px":"2px",this.contentDiv.style.borderRadius=
this.cornerRadius||0===this.cornerRadius?this.cornerRadius+"px":"5px",this.container.style.borderRadius=this.contentDiv.style.borderRadius,this.contentDiv.style.fontSize=this.fontSize||0===this.fontSize?this.fontSize+"px":"14px",this.contentDiv.style.color=this.fontColor?this.fontColor:"#000000",this.contentDiv.style.fontFamily=this.fontFamily?this.fontFamily:"Calibri, Arial, Georgia, serif;",this.contentDiv.style.fontWeight=this.fontWeight?this.fontWeight:"normal",this.contentDiv.style.fontStyle=
this.fontStyle?this.fontStyle:v?"italic":"normal"}catch(q){}"pie"===g[0].dataSeries.type||"doughnut"===g[0].dataSeries.type||"funnel"===g[0].dataSeries.type||"pyramid"===g[0].dataSeries.type||"bar"===g[0].dataSeries.type||"rangeBar"===g[0].dataSeries.type||"stackedBar"===g[0].dataSeries.type||"stackedBar100"===g[0].dataSeries.type?a=a-10-this.container.clientWidth:(a=g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x)-this.container.clientWidth<<0,a-=10);0>a&&(a+=this.container.clientWidth+
20);a+this.container.clientWidth>Math.max(this.chart.container.clientWidth,this.chart.width)&&(a=Math.max(0,Math.max(this.chart.container.clientWidth,this.chart.width)-this.container.clientWidth));f=1!==g.length||this.shared||"line"!==g[0].dataSeries.type&&"stepLine"!==g[0].dataSeries.type&&"spline"!==g[0].dataSeries.type&&"area"!==g[0].dataSeries.type&&"stepArea"!==g[0].dataSeries.type&&"splineArea"!==g[0].dataSeries.type?"bar"===g[0].dataSeries.type||"rangeBar"===g[0].dataSeries.type||"stackedBar"===
g[0].dataSeries.type||"stackedBar100"===g[0].dataSeries.type?g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x):f:g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y);f=-f+10;0<f+this.container.clientHeight+5&&(f-=f+this.container.clientHeight+5-0);this.fixMozTransitionDelay(a,f);!this.animationEnabled||b?this.disableAnimation():(this.enableAnimation(),this.container.style.MozTransition=this.mozContainerTransition);this.container.style.left=a+"px";this.container.style.bottom=f+"px"}else this.hide(!1)}};
Z.prototype.highlightObjects=function(a){var f=this.chart.overlaidCanvasCtx;this.chart.resetOverlayedCanvas();f.clearRect(0,0,this.chart.width,this.chart.height);f.save();var b=this.chart.plotArea,c=0;f.beginPath();f.rect(b.x1,b.y1,b.x2-b.x1,b.y2-b.y1);f.clip();for(b=0;b<a.length;b++){var e=a[b];if((e=this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]])&&e.objectType&&"dataPoint"===e.objectType){var c=this.chart.data[e.dataSeriesIndex],g=c.dataPoints[e.dataPointIndex],h=e.dataPointIndex;
!1===g.highlightEnabled||!0!==c.highlightEnabled&&!0!==g.highlightEnabled||("line"===c.type||"stepLine"===c.type||"spline"===c.type||"scatter"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"stackedArea"===c.type||"stackedArea100"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type?(g=c.getMarkerProperties(h,e.x1,e.y1,this.chart.overlaidCanvasCtx),g.size=Math.max(1.5*g.size<<0,10),g.borderColor=g.borderColor||"#FFFFFF",g.borderThickness=g.borderThickness||Math.ceil(0.1*
g.size),ia.drawMarkers([g]),"undefined"!==typeof e.y2&&(g=c.getMarkerProperties(h,e.x1,e.y2,this.chart.overlaidCanvasCtx),g.size=Math.max(1.5*g.size<<0,10),g.borderColor=g.borderColor||"#FFFFFF",g.borderThickness=g.borderThickness||Math.ceil(0.1*g.size),ia.drawMarkers([g]))):"bubble"===c.type?(g=c.getMarkerProperties(h,e.x1,e.y1,this.chart.overlaidCanvasCtx),g.size=e.size,g.color="white",g.borderColor="white",f.globalAlpha=0.3,ia.drawMarkers([g]),f.globalAlpha=1):"column"===c.type||"stackedColumn"===
c.type||"stackedColumn100"===c.type||"bar"===c.type||"rangeBar"===c.type||"stackedBar"===c.type||"stackedBar100"===c.type||"rangeColumn"===c.type||"waterfall"===c.type?W(f,e.x1,e.y1,e.x2,e.y2,"white",0,null,!1,!1,!1,!1,0.3):"pie"===c.type||"doughnut"===c.type?qa(f,e.center,e.radius,"white",c.type,e.startAngle,e.endAngle,0.3,e.percentInnerRadius):"funnel"===c.type||"pyramid"===c.type?ra(f,e.funnelSection,0.3,"white"):"candlestick"===c.type?(f.globalAlpha=1,f.strokeStyle=e.color,f.lineWidth=2*e.borderThickness,
c=0===f.lineWidth%2?0:0.5,f.beginPath(),f.moveTo(e.x3-c,Math.min(e.y2,e.y3)),f.lineTo(e.x3-c,Math.min(e.y1,e.y4)),f.stroke(),f.beginPath(),f.moveTo(e.x3-c,Math.max(e.y1,e.y4)),f.lineTo(e.x3-c,Math.max(e.y2,e.y3)),f.stroke(),W(f,e.x1,Math.min(e.y1,e.y4),e.x2,Math.max(e.y1,e.y4),"transparent",2*e.borderThickness,e.color,!1,!1,!1,!1),f.globalAlpha=1):"ohlc"===c.type?(f.globalAlpha=1,f.strokeStyle=e.color,f.lineWidth=2*e.borderThickness,c=0===f.lineWidth%2?0:0.5,f.beginPath(),f.moveTo(e.x3-c,e.y2),f.lineTo(e.x3-
c,e.y3),f.stroke(),f.beginPath(),f.moveTo(e.x3,e.y1),f.lineTo(e.x1,e.y1),f.stroke(),f.beginPath(),f.moveTo(e.x3,e.y4),f.lineTo(e.x2,e.y4),f.stroke(),f.globalAlpha=1):"boxAndWhisker"===c.type?(f.save(),f.globalAlpha=1,f.strokeStyle=e.stemColor,f.lineWidth=2*e.stemThickness,0<e.stemThickness&&(f.beginPath(),f.moveTo(e.x3,e.y2+e.borderThickness/2),f.lineTo(e.x3,e.y1+e.whiskerThickness/2),f.stroke(),f.beginPath(),f.moveTo(e.x3,e.y4-e.whiskerThickness/2),f.lineTo(e.x3,e.y3-e.borderThickness/2),f.stroke()),
f.beginPath(),W(f,e.x1-e.borderThickness/2,Math.max(e.y2+e.borderThickness/2,e.y3+e.borderThickness/2),e.x2+e.borderThickness/2,Math.min(e.y2-e.borderThickness/2,e.y3-e.borderThickness/2),"transparent",e.borderThickness,e.color,!1,!1,!1,!1),f.globalAlpha=1,f.strokeStyle=e.whiskerColor,f.lineWidth=2*e.whiskerThickness,0<e.whiskerThickness&&(f.beginPath(),f.moveTo(Math.floor(e.x3-e.whiskerLength/2),e.y4),f.lineTo(Math.ceil(e.x3+e.whiskerLength/2),e.y4),f.stroke(),f.beginPath(),f.moveTo(Math.floor(e.x3-
e.whiskerLength/2),e.y1),f.lineTo(Math.ceil(e.x3+e.whiskerLength/2),e.y1),f.stroke()),f.globalAlpha=1,f.strokeStyle=e.lineColor,f.lineWidth=2*e.lineThickness,0<e.lineThickness&&(f.beginPath(),f.moveTo(e.x1,e.y5),f.lineTo(e.x2,e.y5),f.stroke()),f.restore(),f.globalAlpha=1):"error"===c.type&&z(f,e.x1,e.y1,e.x2,e.y2,"white",e.whiskerProperties,e.stemProperties,e.isXYSwapped,0.3))}}f.restore();f.globalAlpha=1;f.beginPath()};Z.prototype.getToolTipInnerHTML=function(a){a=a.entries;for(var f=null,b=null,
c=null,e=0,g="",h=!0,l=0;l<a.length;l++)if(a[l].dataSeries.toolTipContent||a[l].dataPoint.toolTipContent){h=!1;break}if(h&&(this.content&&"function"===typeof this.content||this.contentFormatter))a={chart:this.chart,toolTip:this.options,entries:a},f=this.contentFormatter?this.contentFormatter(a):this.content(a);else if(this.shared&&"none"!==this.chart.plotInfo.axisPlacement){for(var m=null,k="",l=0;l<a.length;l++)b=a[l].dataSeries,c=a[l].dataPoint,e=a[l].index,g="",0===l&&(h&&!this.content)&&(this.chart.axisX&&
0<this.chart.axisX.length?k+="undefined"!==typeof this.chart.axisX[0].labels[c.x]?this.chart.axisX[0].labels[c.x]:"{x}":this.chart.axisX2&&0<this.chart.axisX2.length&&(k+="undefined"!==typeof this.chart.axisX2[0].labels[c.x]?this.chart.axisX2[0].labels[c.x]:"{x}"),k+="</br>",k=this.chart.replaceKeywordsWithValue(k,c,b,e)),null===c.toolTipContent||"undefined"===typeof c.toolTipContent&&null===b.options.toolTipContent||("line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"stepArea"===
b.type||"splineArea"===b.type||"column"===b.type||"bar"===b.type||"scatter"===b.type||"stackedColumn"===b.type||"stackedColumn100"===b.type||"stackedBar"===b.type||"stackedBar100"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type||"waterfall"===b.type?(this.chart.axisX&&1<this.chart.axisX.length&&(g+=m!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?
this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y}",m=b.axisXIndex):"bubble"===b.type?(this.chart.axisX&&1<this.chart.axisX.length&&(g+=m!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}"):
"rangeColumn"===b.type||"rangeBar"===b.type||"rangeArea"===b.type||"rangeSplineArea"===b.type||"error"===b.type?(this.chart.axisX&&1<this.chart.axisX.length&&(g+=m!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}"):"candlestick"===
b.type||"ohlc"===b.type?(this.chart.axisX&&1<this.chart.axisX.length&&(g+=m!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}"):"boxAndWhisker"===
b.type&&(this.chart.axisX&&1<this.chart.axisX.length&&(g+=m!=b.axisXIndex?b.axisX.title?b.axisX.title+"<br/>":"X:{axisXIndex}<br/>":""),g+=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>{name}:</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}"),
null===f&&(f=""),!0===this.reversed?(f=this.chart.replaceKeywordsWithValue(g,c,b,e)+f,l<a.length-1&&(f="</br>"+f)):(f+=this.chart.replaceKeywordsWithValue(g,c,b,e),l<a.length-1&&(f+="</br>")));null!==f&&(f=k+f)}else{b=a[0].dataSeries;c=a[0].dataPoint;e=a[0].index;if(null===c.toolTipContent||"undefined"===typeof c.toolTipContent&&null===b.options.toolTipContent)return null;"line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"stepArea"===b.type||"splineArea"===b.type||"column"===
b.type||"bar"===b.type||"scatter"===b.type||"stackedColumn"===b.type||"stackedColumn100"===b.type||"stackedBar"===b.type||"stackedBar100"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type||"waterfall"===b.type?g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}":"bubble"===b.type?g=c.toolTipContent?
c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}":"pie"===b.type||"doughnut"===b.type||"funnel"===b.type||"pyramid"===b.type?g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":
"'color:{color};'")+"\"'>"+(c.name?"{name}:</span>&nbsp;&nbsp;":c.label?"{label}:</span>&nbsp;&nbsp;":"</span>")+"{y}":"rangeColumn"===b.type||"rangeBar"===b.type||"rangeArea"===b.type||"rangeSplineArea"===b.type||"error"===b.type?g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+" :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}":
"candlestick"===b.type||"ohlc"===b.type?g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+"</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}":"boxAndWhisker"===b.type&&(g=c.toolTipContent?c.toolTipContent:b.toolTipContent?b.toolTipContent:
this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.options.fontColor?"":"'color:{color};'")+"\"'>"+(c.label?"{label}":"{x}")+"</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
null===f&&(f="");f+=this.chart.replaceKeywordsWithValue(g,c,b,e)}return f};Z.prototype.enableAnimation=function(){if(!this.container.style.WebkitTransition){var a=this.getContainerTransition(this.containerTransitionDuration);this.container.style.WebkitTransition=a;this.container.style.MsTransition=a;this.container.style.transition=a;this.container.style.MozTransition=this.mozContainerTransition}};Z.prototype.disableAnimation=function(){this.container.style.WebkitTransition&&(this.container.style.WebkitTransition=
"",this.container.style.MozTransition="",this.container.style.MsTransition="",this.container.style.transition="")};Z.prototype.hide=function(a){this.container&&(this.container.style.display="none",this.currentSeriesIndex=-1,this._prevY=this._prevX=NaN,("undefined"===typeof a||a)&&this.chart.resetOverlayedCanvas())};Z.prototype.show=function(a,f,b){this._updateToolTip(a,f,"undefined"===typeof b?!1:b)};Z.prototype.fixMozTransitionDelay=function(a,f){if(20<this.chart._eventManager.lastObjectId)this.mozContainerTransition=
this.getContainerTransition(0);else{var b=parseFloat(this.container.style.left),b=isNaN(b)?0:b,c=parseFloat(this.container.style.bottom),c=isNaN(c)?0:c;10<Math.sqrt(Math.pow(b-a,2)+Math.pow(c-f,2))?this.mozContainerTransition=this.getContainerTransition(0.1):this.mozContainerTransition=this.getContainerTransition(0)}};Z.prototype.getContainerTransition=function(a){return"left "+a+"s ease-out 0s, bottom "+a+"s ease-out 0s"};ea.prototype.reset=function(){this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=
[];this.previousDataPointEventObject=null;this.eventObjects=[];v&&(this.ghostCtx.clearRect(0,0,this.chart.width,this.chart.height),this.ghostCtx.beginPath())};ea.prototype.getNewObjectTrackingId=function(){return++this.lastObjectId};ea.prototype.mouseEventHandler=function(a){if("mousemove"===a.type||"click"===a.type){var f=[],b=Pa(a),c=null;if((c=this.chart.getObjectAtXY(b.x,b.y,!1))&&"undefined"!==typeof this.objectMap[c])if(c=this.objectMap[c],"dataPoint"===c.objectType){var e=this.chart.data[c.dataSeriesIndex],
g=e.dataPoints[c.dataPointIndex],h=c.dataPointIndex;c.eventParameter={x:b.x,y:b.y,dataPoint:g,dataSeries:e.options,dataPointIndex:h,dataSeriesIndex:e.index,chart:this.chart};c.eventContext={context:g,userContext:g,mouseover:"mouseover",mousemove:"mousemove",mouseout:"mouseout",click:"click"};f.push(c);c=this.objectMap[e.id];c.eventParameter={x:b.x,y:b.y,dataPoint:g,dataSeries:e.options,dataPointIndex:h,dataSeriesIndex:e.index,chart:this.chart};c.eventContext={context:e,userContext:e.options,mouseover:"mouseover",
mousemove:"mousemove",mouseout:"mouseout",click:"click"};f.push(this.objectMap[e.id])}else"legendItem"===c.objectType&&(e=this.chart.data[c.dataSeriesIndex],g=null!==c.dataPointIndex?e.dataPoints[c.dataPointIndex]:null,c.eventParameter={x:b.x,y:b.y,dataSeries:e.options,dataPoint:g,dataPointIndex:c.dataPointIndex,dataSeriesIndex:c.dataSeriesIndex,chart:this.chart},c.eventContext={context:this.chart.legend,userContext:this.chart.legend.options,mouseover:"itemmouseover",mousemove:"itemmousemove",mouseout:"itemmouseout",
click:"itemclick"},f.push(c));e=[];for(b=0;b<this.mouseoveredObjectMaps.length;b++){g=!0;for(c=0;c<f.length;c++)if(f[c].id===this.mouseoveredObjectMaps[b].id){g=!1;break}g?this.fireEvent(this.mouseoveredObjectMaps[b],"mouseout",a):e.push(this.mouseoveredObjectMaps[b])}this.mouseoveredObjectMaps=e;for(b=0;b<f.length;b++){e=!1;for(c=0;c<this.mouseoveredObjectMaps.length;c++)if(f[b].id===this.mouseoveredObjectMaps[c].id){e=!0;break}e||(this.fireEvent(f[b],"mouseover",a),this.mouseoveredObjectMaps.push(f[b]));
"click"===a.type?this.fireEvent(f[b],"click",a):"mousemove"===a.type&&this.fireEvent(f[b],"mousemove",a)}}};ea.prototype.fireEvent=function(a,f,b){if(a&&f){var c=a.eventParameter,e=a.eventContext,g=a.eventContext.userContext;g&&(e&&g[e[f]])&&g[e[f]].call(g,c);"mouseout"!==f?g.cursor&&g.cursor!==b.target.style.cursor&&(b.target.style.cursor=g.cursor):(b.target.style.cursor=this.chart._defaultCursor,delete a.eventParameter,delete a.eventContext);"click"===f&&("dataPoint"===a.objectType&&this.chart.pieDoughnutClickHandler)&&
this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex],c);"click"===f&&("dataPoint"===a.objectType&&this.chart.funnelPyramidClickHandler)&&this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex],c)}};ja.prototype.animate=function(a,f,b,c,e){var g=this;this.chart.isAnimating=!0;e=e||I.easing.linear;b&&this.animations.push({startTime:(new Date).getTime()+(a?a:0),duration:f,animationCallback:b,onComplete:c});for(a=[];0<this.animations.length;)if(f=this.animations.shift(),
b=(new Date).getTime(),c=0,f.startTime<=b&&(c=e(Math.min(b-f.startTime,f.duration),0,1,f.duration),c=Math.min(c,1),isNaN(c)||!isFinite(c))&&(c=1),1>c&&a.push(f),f.animationCallback(c),1<=c&&f.onComplete)f.onComplete();this.animations=a;0<this.animations.length?this.animationRequestId=this.chart.requestAnimFrame.call(window,function(){g.animate.call(g)}):this.chart.isAnimating=!1};ja.prototype.cancelAllAnimations=function(){this.animations=[];this.animationRequestId&&this.chart.cancelRequestAnimFrame.call(window,
this.animationRequestId);this.animationRequestId=null;this.chart.isAnimating=!1};var I={yScaleAnimation:function(a,f){if(0!==a){var b=f.dest,c=f.source.canvas,e=f.animationBase;b.drawImage(c,0,0,c.width,c.height,0,e-e*a,b.canvas.width/ga,a*b.canvas.height/ga)}},xScaleAnimation:function(a,f){if(0!==a){var b=f.dest,c=f.source.canvas,e=f.animationBase;b.drawImage(c,0,0,c.width,c.height,e-e*a,0,a*b.canvas.width/ga,b.canvas.height/ga)}},xClipAnimation:function(a,f){if(0!==a){var b=f.dest,c=f.source.canvas;
b.save();0<a&&b.drawImage(c,0,0,c.width*a,c.height,0,0,c.width*a/ga,c.height/ga);b.restore()}},fadeInAnimation:function(a,f){if(0!==a){var b=f.dest,c=f.source.canvas;b.save();b.globalAlpha=a;b.drawImage(c,0,0,c.width,c.height,0,0,b.canvas.width/ga,b.canvas.height/ga);b.restore()}},easing:{linear:function(a,f,b,c){return b*a/c+f},easeOutQuad:function(a,f,b,c){return-b*(a/=c)*(a-2)+f},easeOutQuart:function(a,f,b,c){return-b*((a=a/c-1)*a*a*a-1)+f},easeInQuad:function(a,f,b,c){return b*(a/=c)*a+f},easeInQuart:function(a,
f,b,c){return b*(a/=c)*a*a*a+f}}},ia={drawMarker:function(a,f,b,c,e,g,h,l){if(b){var m=1;b.fillStyle=g?g:"#000000";b.strokeStyle=h?h:"#000000";b.lineWidth=l?l:0;"circle"===c?(b.moveTo(a,f),b.beginPath(),b.arc(a,f,e/2,0,2*Math.PI,!1),g&&b.fill(),l&&(h?b.stroke():(m=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=m))):"square"===c?(b.beginPath(),b.rect(a-e/2,f-e/2,e,e),g&&b.fill(),l&&(h?b.stroke():(m=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=
m))):"triangle"===c?(b.beginPath(),b.moveTo(a-e/2,f+e/2),b.lineTo(a+e/2,f+e/2),b.lineTo(a,f-e/2),b.closePath(),g&&b.fill(),l&&(h?b.stroke():(m=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=m)),b.beginPath()):"cross"===c&&(b.strokeStyle=g,b.lineWidth=e/4,b.beginPath(),b.moveTo(a-e/2,f-e/2),b.lineTo(a+e/2,f+e/2),b.stroke(),b.moveTo(a+e/2,f-e/2),b.lineTo(a-e/2,f+e/2),b.stroke())}},drawMarkers:function(a){for(var f=0;f<a.length;f++){var b=a[f];ia.drawMarker(b.x,b.y,b.ctx,
b.type,b.size,b.color,b.borderColor,b.borderThickness)}}};return s}();La.Chart.version="v2.1.2 GA"})();

/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext||function(){function V(){return this.context_||(this.context_=new C(this))}function W(a,b,c){var g=M.call(arguments,2);return function(){return a.apply(b,g.concat(M.call(arguments)))}}function N(a){return String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function O(a){a.namespaces.g_vml_||a.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");a.namespaces.g_o_||a.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");
a.styleSheets.ex_canvas_||(a=a.createStyleSheet(),a.owningElement.id="ex_canvas_",a.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")}function X(a){var b=a.srcElement;switch(a.propertyName){case "width":b.getContext().clearRect();b.style.width=b.attributes.width.nodeValue+"px";b.firstChild.style.width=b.clientWidth+"px";break;case "height":b.getContext().clearRect(),b.style.height=b.attributes.height.nodeValue+"px",b.firstChild.style.height=b.clientHeight+
"px"}}function Y(a){a=a.srcElement;a.firstChild&&(a.firstChild.style.width=a.clientWidth+"px",a.firstChild.style.height=a.clientHeight+"px")}function D(){return[[1,0,0],[0,1,0],[0,0,1]]}function t(a,b){for(var c=D(),g=0;3>g;g++)for(var e=0;3>e;e++){for(var f=0,d=0;3>d;d++)f+=a[g][d]*b[d][e];c[g][e]=f}return c}function P(a,b){b.fillStyle=a.fillStyle;b.lineCap=a.lineCap;b.lineJoin=a.lineJoin;b.lineWidth=a.lineWidth;b.miterLimit=a.miterLimit;b.shadowBlur=a.shadowBlur;b.shadowColor=a.shadowColor;b.shadowOffsetX=
a.shadowOffsetX;b.shadowOffsetY=a.shadowOffsetY;b.strokeStyle=a.strokeStyle;b.globalAlpha=a.globalAlpha;b.font=a.font;b.textAlign=a.textAlign;b.textBaseline=a.textBaseline;b.arcScaleX_=a.arcScaleX_;b.arcScaleY_=a.arcScaleY_;b.lineScale_=a.lineScale_}function Q(a){var b=a.indexOf("(",3),c=a.indexOf(")",b+1),b=a.substring(b+1,c).split(",");if(4!=b.length||"a"!=a.charAt(3))b[3]=1;return b}function E(a,b,c){return Math.min(c,Math.max(b,a))}function F(a,b,c){0>c&&c++;1<c&&c--;return 1>6*c?a+6*(b-a)*c:
1>2*c?b:2>3*c?a+6*(b-a)*(2/3-c):a}function G(a){if(a in H)return H[a];var b,c=1;a=String(a);if("#"==a.charAt(0))b=a;else if(/^rgb/.test(a)){c=Q(a);b="#";for(var g,e=0;3>e;e++)g=-1!=c[e].indexOf("%")?Math.floor(255*(parseFloat(c[e])/100)):+c[e],b+=v[E(g,0,255)];c=+c[3]}else if(/^hsl/.test(a)){e=c=Q(a);b=parseFloat(e[0])/360%360;0>b&&b++;g=E(parseFloat(e[1])/100,0,1);e=E(parseFloat(e[2])/100,0,1);if(0==g)g=e=b=e;else{var f=0.5>e?e*(1+g):e+g-e*g,d=2*e-f;g=F(d,f,b+1/3);e=F(d,f,b);b=F(d,f,b-1/3)}b="#"+
v[Math.floor(255*g)]+v[Math.floor(255*e)]+v[Math.floor(255*b)];c=c[3]}else b=Z[a]||a;return H[a]={color:b,alpha:c}}function C(a){this.m_=D();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=1*q;this.globalAlpha=1;this.font="10px sans-serif";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=a;var b="width:"+a.clientWidth+"px;height:"+a.clientHeight+"px;overflow:hidden;position:absolute",
c=a.ownerDocument.createElement("div");c.style.cssText=b;a.appendChild(c);b=c.cloneNode(!1);b.style.backgroundColor="red";b.style.filter="alpha(opacity=0)";a.appendChild(b);this.element_=c;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}function R(a,b,c,g){a.currentPath_.push({type:"bezierCurveTo",cp1x:b.x,cp1y:b.y,cp2x:c.x,cp2y:c.y,x:g.x,y:g.y});a.currentX_=g.x;a.currentY_=g.y}function S(a,b){var c=G(a.strokeStyle),g=c.color,c=c.alpha*a.globalAlpha,e=a.lineScale_*a.lineWidth;1>e&&(c*=e);b.push("<g_vml_:stroke",
' opacity="',c,'"',' joinstyle="',a.lineJoin,'"',' miterlimit="',a.miterLimit,'"',' endcap="',$[a.lineCap]||"square",'"',' weight="',e,'px"',' color="',g,'" />')}function T(a,b,c,g){var e=a.fillStyle,f=a.arcScaleX_,d=a.arcScaleY_,k=g.x-c.x,n=g.y-c.y;if(e instanceof w){var h=0,l=g=0,u=0,m=1;if("gradient"==e.type_){h=e.x1_/f;c=e.y1_/d;var p=s(a,e.x0_/f,e.y0_/d),h=s(a,h,c),h=180*Math.atan2(h.x-p.x,h.y-p.y)/Math.PI;0>h&&(h+=360);1E-6>h&&(h=0)}else p=s(a,e.x0_,e.y0_),g=(p.x-c.x)/k,l=(p.y-c.y)/n,k/=f*q,
n/=d*q,m=x.max(k,n),u=2*e.r0_/m,m=2*e.r1_/m-u;f=e.colors_;f.sort(function(a,b){return a.offset-b.offset});d=f.length;p=f[0].color;c=f[d-1].color;k=f[0].alpha*a.globalAlpha;a=f[d-1].alpha*a.globalAlpha;for(var n=[],r=0;r<d;r++){var t=f[r];n.push(t.offset*m+u+" "+t.color)}b.push('<g_vml_:fill type="',e.type_,'"',' method="none" focus="100%"',' color="',p,'"',' color2="',c,'"',' colors="',n.join(","),'"',' opacity="',a,'"',' g_o_:opacity2="',k,'"',' angle="',h,'"',' focusposition="',g,",",l,'" />')}else e instanceof
I?k&&n&&b.push("<g_vml_:fill",' position="',-c.x/k*f*f,",",-c.y/n*d*d,'"',' type="tile"',' src="',e.src_,'" />'):(e=G(a.fillStyle),b.push('<g_vml_:fill color="',e.color,'" opacity="',e.alpha*a.globalAlpha,'" />'))}function s(a,b,c){a=a.m_;return{x:q*(b*a[0][0]+c*a[1][0]+a[2][0])-r,y:q*(b*a[0][1]+c*a[1][1]+a[2][1])-r}}function z(a,b,c){isFinite(b[0][0])&&(isFinite(b[0][1])&&isFinite(b[1][0])&&isFinite(b[1][1])&&isFinite(b[2][0])&&isFinite(b[2][1]))&&(a.m_=b,c&&(a.lineScale_=aa(ba(b[0][0]*b[1][1]-b[0][1]*
b[1][0]))))}function w(a){this.type_=a;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}function I(a,b){if(!a||1!=a.nodeType||"IMG"!=a.tagName)throw new A("TYPE_MISMATCH_ERR");if("complete"!=a.readyState)throw new A("INVALID_STATE_ERR");switch(b){case "repeat":case null:case "":this.repetition_="repeat";break;case "repeat-x":case "repeat-y":case "no-repeat":this.repetition_=b;break;default:throw new A("SYNTAX_ERR");}this.src_=a.src;this.width_=a.width;this.height_=a.height}
function A(a){this.code=this[a];this.message=a+": DOM Exception "+this.code}var x=Math,k=x.round,J=x.sin,K=x.cos,ba=x.abs,aa=x.sqrt,q=10,r=q/2;navigator.userAgent.match(/MSIE ([\d.]+)?/);var M=Array.prototype.slice;O(document);var U={init:function(a){a=a||document;a.createElement("canvas");a.attachEvent("onreadystatechange",W(this.init_,this,a))},init_:function(a){a=a.getElementsByTagName("canvas");for(var b=0;b<a.length;b++)this.initElement(a[b])},initElement:function(a){if(!a.getContext){a.getContext=
V;O(a.ownerDocument);a.innerHTML="";a.attachEvent("onpropertychange",X);a.attachEvent("onresize",Y);var b=a.attributes;b.width&&b.width.specified?a.style.width=b.width.nodeValue+"px":a.width=a.clientWidth;b.height&&b.height.specified?a.style.height=b.height.nodeValue+"px":a.height=a.clientHeight}return a}};U.init();for(var v=[],d=0;16>d;d++)for(var B=0;16>B;B++)v[16*d+B]=d.toString(16)+B.toString(16);var Z={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",
bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",
darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",
ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",
mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",
peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},
H={},L={},$={butt:"flat",round:"round"},d=C.prototype;d.clearRect=function(){this.textMeasureEl_&&(this.textMeasureEl_.removeNode(!0),this.textMeasureEl_=null);this.element_.innerHTML=""};d.beginPath=function(){this.currentPath_=[]};d.moveTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.lineTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.bezierCurveTo=
function(a,b,c,g,e,f){e=s(this,e,f);a=s(this,a,b);c=s(this,c,g);R(this,a,c,e)};d.quadraticCurveTo=function(a,b,c,g){a=s(this,a,b);c=s(this,c,g);g={x:this.currentX_+2/3*(a.x-this.currentX_),y:this.currentY_+2/3*(a.y-this.currentY_)};R(this,g,{x:g.x+(c.x-this.currentX_)/3,y:g.y+(c.y-this.currentY_)/3},c)};d.arc=function(a,b,c,g,e,f){c*=q;var d=f?"at":"wa",k=a+K(g)*c-r,n=b+J(g)*c-r;g=a+K(e)*c-r;e=b+J(e)*c-r;k!=g||f||(k+=0.125);a=s(this,a,b);k=s(this,k,n);g=s(this,g,e);this.currentPath_.push({type:d,
x:a.x,y:a.y,radius:c,xStart:k.x,yStart:k.y,xEnd:g.x,yEnd:g.y})};d.rect=function(a,b,c,g){this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath()};d.strokeRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath();this.stroke();this.currentPath_=e};d.fillRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+
c,b+g);this.lineTo(a,b+g);this.closePath();this.fill();this.currentPath_=e};d.createLinearGradient=function(a,b,c,g){var e=new w("gradient");e.x0_=a;e.y0_=b;e.x1_=c;e.y1_=g;return e};d.createRadialGradient=function(a,b,c,g,e,f){var d=new w("gradientradial");d.x0_=a;d.y0_=b;d.r0_=c;d.x1_=g;d.y1_=e;d.r1_=f;return d};d.drawImage=function(a,b){var c,g,e,d,r,y,n,h;e=a.runtimeStyle.width;d=a.runtimeStyle.height;a.runtimeStyle.width="auto";a.runtimeStyle.height="auto";var l=a.width,u=a.height;a.runtimeStyle.width=
e;a.runtimeStyle.height=d;if(3==arguments.length)c=arguments[1],g=arguments[2],r=y=0,n=e=l,h=d=u;else if(5==arguments.length)c=arguments[1],g=arguments[2],e=arguments[3],d=arguments[4],r=y=0,n=l,h=u;else if(9==arguments.length)r=arguments[1],y=arguments[2],n=arguments[3],h=arguments[4],c=arguments[5],g=arguments[6],e=arguments[7],d=arguments[8];else throw Error("Invalid number of arguments");var m=s(this,c,g),p=[];p.push(" <g_vml_:group",' coordsize="',10*q,",",10*q,'"',' coordorigin="0,0"',' style="width:',
10,"px;height:",10,"px;position:absolute;");if(1!=this.m_[0][0]||this.m_[0][1]||1!=this.m_[1][1]||this.m_[1][0]){var t=[];t.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",k(m.x/q),",","Dy=",k(m.y/q),"");var v=s(this,c+e,g),w=s(this,c,g+d);c=s(this,c+e,g+d);m.x=x.max(m.x,v.x,w.x,c.x);m.y=x.max(m.y,v.y,w.y,c.y);p.push("padding:0 ",k(m.x/q),"px ",k(m.y/q),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",t.join(""),", sizingmethod='clip');")}else p.push("top:",
k(m.y/q),"px;left:",k(m.x/q),"px;");p.push(' ">','<g_vml_:image src="',a.src,'"',' style="width:',q*e,"px;"," height:",q*d,'px"',' cropleft="',r/l,'"',' croptop="',y/u,'"',' cropright="',(l-r-n)/l,'"',' cropbottom="',(u-y-h)/u,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",p.join(""))};d.stroke=function(a){var b=[];b.push("<g_vml_:shape",' filled="',!!a,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0,0"',' coordsize="',10*q,",",10*q,'"',
' stroked="',!a,'"',' path="');for(var c={x:null,y:null},d={x:null,y:null},e=0;e<this.currentPath_.length;e++){var f=this.currentPath_[e];switch(f.type){case "moveTo":b.push(" m ",k(f.x),",",k(f.y));break;case "lineTo":b.push(" l ",k(f.x),",",k(f.y));break;case "close":b.push(" x ");f=null;break;case "bezierCurveTo":b.push(" c ",k(f.cp1x),",",k(f.cp1y),",",k(f.cp2x),",",k(f.cp2y),",",k(f.x),",",k(f.y));break;case "at":case "wa":b.push(" ",f.type," ",k(f.x-this.arcScaleX_*f.radius),",",k(f.y-this.arcScaleY_*
f.radius)," ",k(f.x+this.arcScaleX_*f.radius),",",k(f.y+this.arcScaleY_*f.radius)," ",k(f.xStart),",",k(f.yStart)," ",k(f.xEnd),",",k(f.yEnd))}if(f){if(null==c.x||f.x<c.x)c.x=f.x;if(null==d.x||f.x>d.x)d.x=f.x;if(null==c.y||f.y<c.y)c.y=f.y;if(null==d.y||f.y>d.y)d.y=f.y}}b.push(' ">');a?T(this,b,c,d):S(this,b);b.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",b.join(""))};d.fill=function(){this.stroke(!0)};d.closePath=function(){this.currentPath_.push({type:"close"})};d.save=function(){var a=
{};P(this,a);this.aStack_.push(a);this.mStack_.push(this.m_);this.m_=t(D(),this.m_)};d.restore=function(){this.aStack_.length&&(P(this.aStack_.pop(),this),this.m_=this.mStack_.pop())};d.translate=function(a,b){z(this,t([[1,0,0],[0,1,0],[a,b,1]],this.m_),!1)};d.rotate=function(a){var b=K(a);a=J(a);z(this,t([[b,a,0],[-a,b,0],[0,0,1]],this.m_),!1)};d.scale=function(a,b){this.arcScaleX_*=a;this.arcScaleY_*=b;z(this,t([[a,0,0],[0,b,0],[0,0,1]],this.m_),!0)};d.transform=function(a,b,c,d,e,f){z(this,t([[a,
b,0],[c,d,0],[e,f,1]],this.m_),!0)};d.setTransform=function(a,b,c,d,e,f){z(this,[[a,b,0],[c,d,0],[e,f,1]],!0)};d.drawText_=function(a,b,c,d,e){var f=this.m_;d=0;var r=1E3,t=0,n=[],h;h=this.font;if(L[h])h=L[h];else{var l=document.createElement("div").style;try{l.font=h}catch(u){}h=L[h]={style:l.fontStyle||"normal",variant:l.fontVariant||"normal",weight:l.fontWeight||"normal",size:l.fontSize||10,family:l.fontFamily||"sans-serif"}}var l=h,m=this.element_;h={};for(var p in l)h[p]=l[p];p=parseFloat(m.currentStyle.fontSize);
m=parseFloat(l.size);"number"==typeof l.size?h.size=l.size:-1!=l.size.indexOf("px")?h.size=m:-1!=l.size.indexOf("em")?h.size=p*m:-1!=l.size.indexOf("%")?h.size=p/100*m:-1!=l.size.indexOf("pt")?h.size=m/0.75:h.size=p;h.size*=0.981;p=h.style+" "+h.variant+" "+h.weight+" "+h.size+"px "+h.family;m=this.element_.currentStyle;l=this.textAlign.toLowerCase();switch(l){case "left":case "center":case "right":break;case "end":l="ltr"==m.direction?"right":"left";break;case "start":l="rtl"==m.direction?"right":
"left";break;default:l="left"}switch(this.textBaseline){case "hanging":case "top":t=h.size/1.75;break;case "middle":break;default:case null:case "alphabetic":case "ideographic":case "bottom":t=-h.size/2.25}switch(l){case "right":d=1E3;r=0.05;break;case "center":d=r=500}b=s(this,b+0,c+t);n.push('<g_vml_:line from="',-d,' 0" to="',r,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!e,'" stroked="',!!e,'" style="position:absolute;width:1px;height:1px;">');e?S(this,n):T(this,n,{x:-d,y:0},
{x:r,y:h.size});e=f[0][0].toFixed(3)+","+f[1][0].toFixed(3)+","+f[0][1].toFixed(3)+","+f[1][1].toFixed(3)+",0,0";b=k(b.x/q)+","+k(b.y/q);n.push('<g_vml_:skew on="t" matrix="',e,'" ',' offset="',b,'" origin="',d,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',N(a),'" style="v-text-align:',l,";font:",N(p),'" /></g_vml_:line>');this.element_.insertAdjacentHTML("beforeEnd",n.join(""))};d.fillText=function(a,b,c,d){this.drawText_(a,b,c,d,!1)};d.strokeText=function(a,
b,c,d){this.drawText_(a,b,c,d,!0)};d.measureText=function(a){this.textMeasureEl_||(this.element_.insertAdjacentHTML("beforeEnd",'<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'),this.textMeasureEl_=this.element_.lastChild);var b=this.element_.ownerDocument;this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(b.createTextNode(a));return{width:this.textMeasureEl_.offsetWidth}};d.clip=function(){};
d.arcTo=function(){};d.createPattern=function(a,b){return new I(a,b)};w.prototype.addColorStop=function(a,b){b=G(b);this.colors_.push({offset:a,color:b.color,alpha:b.alpha})};d=A.prototype=Error();d.INDEX_SIZE_ERR=1;d.DOMSTRING_SIZE_ERR=2;d.HIERARCHY_REQUEST_ERR=3;d.WRONG_DOCUMENT_ERR=4;d.INVALID_CHARACTER_ERR=5;d.NO_DATA_ALLOWED_ERR=6;d.NO_MODIFICATION_ALLOWED_ERR=7;d.NOT_FOUND_ERR=8;d.NOT_SUPPORTED_ERR=9;d.INUSE_ATTRIBUTE_ERR=10;d.INVALID_STATE_ERR=11;d.SYNTAX_ERR=12;d.INVALID_MODIFICATION_ERR=
13;d.NAMESPACE_ERR=14;d.INVALID_ACCESS_ERR=15;d.VALIDATION_ERR=16;d.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=U;CanvasRenderingContext2D=C;CanvasGradient=w;CanvasPattern=I;DOMException=A}();
/*jshint ignore:end*/;!function(a,b){"use strict";function c(c,g){var h=this;h.$el=a(c),h.el=c,h.id=e++,h.$el.bind("destroyed",a.proxy(h.teardown,h)),h.$clonedHeader=null,h.$originalHeader=null,h.cachedHeaderHeight=null,h.isSticky=!1,h.hasBeenSticky=!1,h.leftOffset=null,h.topOffset=null,h.init=function(){h.setOptions(g),h.$el.each(function(){var b=a(this);b.css("padding",0),h.$originalHeader=a("thead:first",this),h.$clonedHeader=h.$originalHeader.clone(),b.trigger("clonedHeader."+d,[h.$clonedHeader]),h.$clonedHeader.addClass("tableFloatingHeader"),h.$clonedHeader.css({display:"none",opacity:0}),h.$originalHeader.addClass("tableFloatingHeaderOriginal"),h.$originalHeader.after(h.$clonedHeader),h.$printStyle=a('<style type="text/css" media="print">.tableFloatingHeader{display:none !important;}.tableFloatingHeaderOriginal{position:static !important;}</style>'),h.$head.append(h.$printStyle)}),h.updateWidth(),h.toggleHeaders(),h.bind()},h.destroy=function(){h.$el.unbind("destroyed",h.teardown),h.teardown()},h.teardown=function(){h.isSticky&&h.$originalHeader.css("position","static"),a.removeData(h.el,"plugin_"+d),h.unbind(),h.$clonedHeader.remove(),h.$originalHeader.removeClass("tableFloatingHeaderOriginal"),h.$originalHeader.css("visibility","visible"),h.$printStyle.remove(),h.el=null,h.$el=null},h.bind=function(){h.$scrollableArea.on("scroll."+d,h.toggleHeaders),h.isWindowScrolling||(h.$window.on("scroll."+d+h.id,h.setPositionValues),h.$window.on("resize."+d+h.id,h.toggleHeaders)),h.$scrollableArea.on("resize."+d,h.toggleHeaders),h.$scrollableArea.on("resize."+d,h.updateWidth)},h.unbind=function(){h.$scrollableArea.off("."+d,h.toggleHeaders),h.isWindowScrolling||(h.$window.off("."+d+h.id,h.setPositionValues),h.$window.off("."+d+h.id,h.toggleHeaders)),h.$scrollableArea.off("."+d,h.updateWidth)},h.debounce=function(a,b){var c=null;return function(){var d=this,e=arguments;clearTimeout(c),c=setTimeout(function(){a.apply(d,e)},b)}},h.toggleHeaders=h.debounce(function(){h.$el&&h.$el.each(function(){var b,c=a(this),e=h.isWindowScrolling?isNaN(h.options.fixedOffset)?h.options.fixedOffset.outerHeight():h.options.fixedOffset:h.$scrollableArea.offset().top+(isNaN(h.options.fixedOffset)?0:h.options.fixedOffset),f=c.offset(),g=h.$scrollableArea.scrollTop()+e,i=h.$scrollableArea.scrollLeft(),j=h.options.cacheHeaderHeight?h.cachedHeaderHeight:h.$clonedHeader.height(),k=h.isWindowScrolling?g>f.top:e>f.top,l=(h.isWindowScrolling?g:0)<f.top+c.height()-j-(h.isWindowScrolling?0:e);k&&l?(b=f.left-i+h.options.leftOffset,h.$originalHeader.css({position:"fixed","margin-top":h.options.marginTop,left:b,"z-index":3}),h.leftOffset=b,h.topOffset=e,h.$clonedHeader.css("display",""),h.isSticky||(h.isSticky=!0,h.updateWidth(),c.trigger("enabledStickiness."+d)),h.setPositionValues()):h.isSticky&&(h.$originalHeader.css("position","static"),h.$clonedHeader.css("display","none"),h.isSticky=!1,h.resetWidth(a("td,th",h.$clonedHeader),a("td,th",h.$originalHeader)),c.trigger("disabledStickiness."+d))})},0),h.setPositionValues=h.debounce(function(){var a=h.$window.scrollTop(),b=h.$window.scrollLeft();!h.isSticky||0>a||a+h.$window.height()>h.$document.height()||0>b||b+h.$window.width()>h.$document.width()||h.$originalHeader.css({top:h.topOffset-(h.isWindowScrolling?0:a),left:h.leftOffset-(h.isWindowScrolling?0:b)})},0),h.updateWidth=h.debounce(function(){if(h.isSticky){h.$originalHeaderCells||(h.$originalHeaderCells=a("th,td",h.$originalHeader)),h.$clonedHeaderCells||(h.$clonedHeaderCells=a("th,td",h.$clonedHeader));var b=h.getWidth(h.$clonedHeaderCells);h.setWidth(b,h.$clonedHeaderCells,h.$originalHeaderCells),h.$originalHeader.css("width",h.$clonedHeader.width()),h.options.cacheHeaderHeight&&(h.cachedHeaderHeight=h.$clonedHeader.height())}},0),h.getWidth=function(c){var d=[];return c.each(function(c){var e,f=a(this);if("border-box"===f.css("box-sizing")){var g=f[0].getBoundingClientRect();e=g.width?g.width:g.right-g.left}else{var i=a("th",h.$originalHeader);if("collapse"===i.css("border-collapse"))if(b.getComputedStyle)e=parseFloat(b.getComputedStyle(this,null).width);else{var j=parseFloat(f.css("padding-left")),k=parseFloat(f.css("padding-right")),l=parseFloat(f.css("border-width"));e=f.outerWidth()-j-k-l}else e=f.width()}d[c]=e}),d},h.setWidth=function(a,b,c){b.each(function(b){var d=a[b];c.eq(b).css({"min-width":d,"max-width":d})})},h.resetWidth=function(b,c){b.each(function(b){var d=a(this);c.eq(b).css({"min-width":d.css("min-width"),"max-width":d.css("max-width")})})},h.setOptions=function(b){h.options=a.extend({},f,b),h.$window=a(h.options.objWindow),h.$head=a(h.options.objHead),h.$document=a(h.options.objDocument),h.$scrollableArea=a(h.options.scrollableArea),h.isWindowScrolling=h.$scrollableArea[0]===h.$window[0]},h.updateOptions=function(a){h.setOptions(a),h.unbind(),h.bind(),h.updateWidth(),h.toggleHeaders()},h.init()}var d="stickyTableHeaders",e=0,f={fixedOffset:0,leftOffset:0,marginTop:0,objDocument:document,objHead:"head",objWindow:b,scrollableArea:b,cacheHeaderHeight:!1};a.fn[d]=function(b){return this.each(function(){var e=a.data(this,"plugin_"+d);e?"string"==typeof b?e[b].apply(e):e.updateOptions(b):"destroy"!==b&&a.data(this,"plugin_"+d,new c(this,b))})}}(jQuery,window);;/*
 AngularJS v1.6.8
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,c){'use strict';function l(b,a,g){var d=g.baseHref(),k=b[0];return function(b,e,f){var g,h;f=f||{};h=f.expires;g=c.isDefined(f.path)?f.path:d;c.isUndefined(e)&&(h="Thu, 01 Jan 1970 00:00:00 GMT",e="");c.isString(h)&&(h=new Date(h));e=encodeURIComponent(b)+"="+encodeURIComponent(e);e=e+(g?";path="+g:"")+(f.domain?";domain="+f.domain:"");e+=h?";expires="+h.toUTCString():"";e+=f.secure?";secure":"";f=e.length+1;4096<f&&a.warn("Cookie '"+b+"' possibly not set or overflowed because it was too large ("+
f+" > 4096 bytes)!");k.cookie=e}}c.module("ngCookies",["ng"]).info({angularVersion:"1.6.8"}).provider("$cookies",[function(){var b=this.defaults={};this.$get=["$$cookieReader","$$cookieWriter",function(a,g){return{get:function(d){return a()[d]},getObject:function(d){return(d=this.get(d))?c.fromJson(d):d},getAll:function(){return a()},put:function(d,a,m){g(d,a,m?c.extend({},b,m):b)},putObject:function(d,b,a){this.put(d,c.toJson(b),a)},remove:function(a,k){g(a,void 0,k?c.extend({},b,k):b)}}}]}]);c.module("ngCookies").factory("$cookieStore",
["$cookies",function(b){return{get:function(a){return b.getObject(a)},put:function(a,c){b.putObject(a,c)},remove:function(a){b.remove(a)}}}]);l.$inject=["$document","$log","$browser"];c.module("ngCookies").provider("$$cookieWriter",function(){this.$get=l})})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map
;!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.swal=e():t.swal=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button[not:disabled]:hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel[not:disabled]:hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger[not:disabled]:hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach(function(t,n,o){e.appendChild(document.createTextNode(t)),n<o.length-1&&e.appendChild(document.createElement("br"))});var n=r.injectElIntoModal(o.textMarkup);n.appendChild(e),i(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;if(b.classList.add(v),d){(Array.isArray(d)?d:d.split(" ")).filter(function(t){return t.length>0}).forEach(function(t){b.classList.add(t)})}n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});;/*!
 * Select2 4.0.5
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function (root, jQuery) {
      if (jQuery === undefined) {
        // require('jQuery') returns a factory that requires window to
        // build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop
        // if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        }
        else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
} (function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name) {
            name = name.split('/');
            lastIndex = name.length - 1;

            // If wanting node ID compatibility, strip .js from end
            // of IDs. Have to do this here, and not in nameToUrl
            // because node allows either .js or non .js to map
            // to same file.
            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
            }

            // Starts with a '.' so need the baseName
            if (name[0].charAt(0) === '.' && baseParts) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that 'directory' and not name of the baseName's
                //module. For instance, baseName of 'one/two/three', maps to
                //'one/two/three.js', but we want the directory, 'one/two' for
                //this normalization.
                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                name = normalizedBaseParts.concat(name);
            }

            //start trimDots
            for (i = 0; i < name.length; i++) {
                part = name[i];
                if (part === '.') {
                    name.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        name.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
            //end trimDots

            name = name.join('/');
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    //Creates a parts array for a relName where first part is plugin ID,
    //second part is resource ID. Assumes relName has already been normalized.
    function makeRelParts(relName) {
        return relName ? splitPrefix(relName) : [];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relParts) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0],
            relResourceName = relParts[1];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relResourceName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relResourceName));
            } else {
                name = normalize(name, relResourceName);
            }
        } else {
            name = normalize(name, relResourceName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i, relParts,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;
        relParts = makeRelParts(relName);

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relParts);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, makeRelParts(callback)).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
        var superMethod = superMethods[m];

        DecoratedClass.prototype[superMethod] =
          SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the `_type` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Append an array of jQuery nodes to a given element.
  Utils.appendMany = function ($element, $nodes) {
    // jQuery 1.7.x does not support $.fn.append() with an array
    // Fall back to a jQuery object collection using $.fn.add()
    if ($.fn.jquery.substr(0, 3) === '1.7') {
      var $jqNodes = $();

      $.map($nodes, function (node) {
        $jqNodes = $jqNodes.add(node);
      });

      $nodes = $jqNodes;
    }

    $element.append($nodes);
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="tree"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="treeitem" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option[aria-selected]');

    var $selected = $options.filter('[aria-selected=true]');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = $.map(selected, function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option[aria-selected]');

      $options.each(function () {
        var $option = $(this);

        var item = $.data(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && $.inArray(id, selectedIds) > -1)) {
          $option.attr('aria-selected', 'true');
        } else {
          $option.attr('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.className = 'select2-results__option';

    var attrs = {
      'role': 'treeitem',
      'aria-selected': 'false'
    };

    if (data.disabled) {
      delete attrs['aria-selected'];
      attrs['aria-disabled'] = 'true';
    }

    if (data.id == null) {
      delete attrs['aria-selected'];
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;
      delete attrs['aria-selected'];
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      var $label = $(label);
      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    $.data(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = $highlighted.data('data');

      if ($highlighted.attr('aria-selected') == 'true') {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      // If we are already at te top, don't move further
      if (currentIndex === 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element.addClass('select2-results__option--highlighted');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
      function (evt) {
      var $this = $(this);

      var data = $this.data('data');

      if ($this.attr('aria-selected') === 'true') {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
      function (evt) {
      var data = $(this).data('data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('[aria-selected]');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (this.$element.data('old-tabindex') != null) {
      this._tabindex = this.$element.data('old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-container';
    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.focus();

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {
    var self = this;

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        var $this = $(this);

        if (this == $select[0]) {
          return;
        }

        var $element = $this.data('element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered').attr('id', id);
    this.$selection.attr('aria-labelledby', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.focus();
      }
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });
  };

  SingleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);
    $rendered.prop('title', selection.title || selection.text);
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.options.get('disabled')) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = $selection.data('data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<span class="select2-selection__choice__remove" role="presentation">' +
          '&times;' +
        '</span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      $selection.append(formatted);
      $selection.prop('title', selection.title || selection.text);

      $selection.data('data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    Utils.appendMany($rendered, $selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[
  '../utils'
], function (Utils) {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder.addClass('select2-selection__placeholder')
                .removeClass('select2-selection__choice');

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys'
], function ($, KEYS) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.options.get('disabled')) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = $clear.data('data');

    for (var d = 0; d < data.length; d++) {
      var unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        return;
      }
    }

    this.$element.val(this.placeholder.id).trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var $remove = $(
      '<span class="select2-selection__clear">' +
        '&times;' +
      '</span>'
    );
    $remove.data('data', data);

    this.$selection.find('.select2-selection__rendered').prepend($remove);
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var $search = $(
      '<li class="select2-search select2-search--inline">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
      '</li>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    var $rendered = decorated.call(this);

    this._transferTabIndex();

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      self.$search.attr('aria-activedescendant', params.id);
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$searchContainer
          .prev('.select2-selection__choice');

        if ($previousChoice.length > 0) {
          var item = $previousChoice.data('data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.$selection.find('.select2-selection__rendered')
                   .append(this.$searchContainer);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.focus();
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '';

    if (this.$search.attr('placeholder') !== '') {
      width = this.$selection.find('.select2-selection__rendered').innerWidth();
    } else {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting'
    ];

    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if ($.inArray(name, relayEvents) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if ($.inArray(name, preventableEvents) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var data = [];
    var self = this;

    this.$element.find(':selected').each(function () {
      var $option = $(this);

      var option = self.item($option);

      data.push(option);
    });

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if ($(data.element).is('option')) {
      data.element.selected = true;

      this.$element.trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if ($.inArray(id, val) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if ($(data.element).is('option')) {
      data.element.selected = false;

      this.$element.trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && $.inArray(id, val) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      $.removeData(this, 'data');
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      var $option = $(this);

      if (!$option.is('option') && !$option.is('optgroup')) {
        return;
      }

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    Utils.appendMany(this.$element, $options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id !== undefined) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var $option = $(option);

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    $.data(option, 'data', normalizedData);

    return $option;
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = $.data($option[0], 'data');

    if (data != null) {
      return data;
    }

    if ($option.is('option')) {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if ($option.is('optgroup')) {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    $.data($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (!$.isPlainObject(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    var data = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);

    this.addOptions(this.convertToOptions(data));
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if ($.inArray(item.id, existingIds) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        Utils.appendMany($option, $children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if ($.isFunction(this._request.abort)) {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !$.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ($request.status && $request.status === '0') {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if ($.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var optionText = (option.text || '').toUpperCase();
        var paramsTerm = (params.term || '').toUpperCase();

        var checkText = optionText === paramsTerm;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', true);

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    var term = $.trim(params.term);

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var tag = this._lastTag;

    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.focus();
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if ($.inArray(termChar, separators) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }
        decorated.call(self, params, callback);
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implmented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="textbox" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);

      self.$search.focus();

      window.setTimeout(function () {
        self.$search.focus();
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);

      self.$search.val('');
    });

    container.on('focus', function () {
      if (!container.isOpen()) {
        self.$search.focus();
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer.removeClass('select2-search--hide');
        } else {
          self.$searchContainer.addClass('select2-search--hide');
        }
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', function () {
      var isLoadMoreVisible = $.contains(
        document.documentElement,
        self.$loadingMore[0]
      );

      if (self.loading || !isLoadMoreVisible) {
        return;
      }

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var loadingMoreOffset = self.$loadingMore.offset().top +
        self.$loadingMore.outerHeight(false);

      if (currentOffset + 50 >= loadingMoreOffset) {
        self.loadMore();
      }
    });
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="treeitem" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = options.get('dropdownParent') || $(document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var setupResultsEvents = false;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      if (!setupResultsEvents) {
        setupResultsEvents = true;

        container.on('results:all', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });

        container.on('results:append', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });
      }
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown.removeClass('select2');
    $dropdown.addClass('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      $(this).data('select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = $(this).data('select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calciulating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positoned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = $offsetParent.offset();

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[

], function () {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = $highlightedResults.data('data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && originalEvent.ctrlKey) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',
  'require',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',

  './i18n/en'
], function ($, require,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }

      if (options.query != null) {
        var Query = require(options.amdBase + 'compat/query');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Query
        );
      }

      if (options.initSelection != null) {
        var InitSelection = require(options.amdBase + 'compat/initSelection');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          InitSelection
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (
        options.dropdownCssClass != null ||
        options.dropdownCss != null ||
        options.adaptDropdownCssClass != null
      ) {
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (
        options.containerCssClass != null ||
        options.containerCss != null ||
        options.adaptContainerCssClass != null
      ) {
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          ContainerCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    if (typeof options.language === 'string') {
      // Check if the language is specified with a region
      if (options.language.indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = options.language.split('-');
        var baseLanguage = languageParts[0];

        options.language = [options.language, baseLanguage];
      } else {
        options.language = [options.language];
      }
    }

    if ($.isArray(options.language)) {
      var languages = new Translation();
      options.language.push('en');

      var languageNames = options.language;

      for (var l = 0; l < languageNames.length; l++) {
        var name = languageNames[l];
        var language = {};

        try {
          // Try to load it with the original name
          language = Translation.loadPath(name);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            name = this.defaults.amdLanguageBase + name;
            language = Translation.loadPath(name);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files.
            if (options.debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + name + '" could not be ' +
                'automatically loaded. A fallback will be used instead.'
              );
            }

            continue;
          }
        }

        languages.extend(language);
      }

      options.translations = languages;
    } else {
      var baseTranslation = Translation.loadPath(
        this.defaults.amdLanguageBase + 'en'
      );
      var customTranslation = new Translation(options.language);

      customTranslation.extend(baseTranslation);

      options.translations = customTranslation;
    }

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if ($.trim(params.term) === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: EnglishTranslation,
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'require',
  'jquery',
  './defaults',
  './utils'
], function (require, $, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    this.options = Defaults.apply(this.options);

    if ($element && $element.is('input')) {
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');

      this.options.dataAdapter = Utils.Decorate(
        this.options.dataAdapter,
        InputCompat
      );
    }
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.language == null) {
      if ($e.prop('lang')) {
        this.options.language = $e.prop('lang').toLowerCase();
      } else if ($e.closest('[lang]').prop('lang')) {
        this.options.language = $e.closest('[lang]').prop('lang');
      }
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if ($e.data('select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      $e.data('data', $e.data('select2Tags'));
      $e.data('tags', true);
    }

    if ($e.data('ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', $e.data('ajaxUrl'));
      $e.data('ajax--url', $e.data('ajaxUrl'));
    }

    var dataset = {};

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, $e.data());
    } else {
      dataset = $e.data();
    }

    var data = $.extend(true, {}, dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if ($.inArray(key, excludedData) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if ($element.data('select2') != null) {
      $element.data('select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    $element.data('old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element.addClass('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\.|\[|\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    if (this.$element[0].attachEvent) {
      this.$element[0].attachEvent('onpropertychange', this._syncA);
    }

    var observer = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    ;

    if (observer != null) {
      this._observer = new observer(function (mutations) {
        $.each(mutations, self._syncA);
        $.each(mutations, self._syncS);
      });
      this._observer.observe(this.$element[0], {
        attributes: true,
        childList: true,
        subtree: false
      });
    } else if (this.$element[0].addEventListener) {
      this.$element[0].addEventListener(
        'DOMAttrModified',
        self._syncA,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeInserted',
        self._syncS,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeRemoved',
        self._syncS,
        false
      );
    }
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if ($.inArray(name, nonRelayEvents) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container.addClass('select2-container--open');
    });

    this.on('close', function () {
      self.$container.removeClass('select2-container--open');
    });

    this.on('enable', function () {
      self.$container.removeClass('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container.addClass('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container.removeClass('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || key === KEYS.TAB ||
            (key === KEYS.UP && evt.altKey)) {
          self.close();

          evt.preventDefault();
        } else if (key === KEYS.ENTER) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.options.get('disabled')) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._syncSubtree = function (evt, mutations) {
    var changed = false;
    var self = this;

    // Ignore any mutation events raised for elements that aren't options or
    // optgroups. This handles the case when the select element is destroyed
    if (
      evt && evt.target && (
        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
      )
    ) {
      return;
    }

    if (!mutations) {
      // If mutation events aren't supported, then we can only assume that the
      // change affected the selections
      changed = true;
    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          changed = true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      changed = true;
    }

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.options.get('disabled')) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function () {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', {});
  };

  Select2.prototype.isOpen = function () {
    return this.$container.hasClass('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container.hasClass('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container.addClass('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if ($.isArray(newVal)) {
      newVal = $.map(newVal, function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('change');
  };

  Select2.prototype.destroy = function () {
    this.$container.remove();

    if (this.$element[0].detachEvent) {
      this.$element[0].detachEvent('onpropertychange', this._syncA);
    }

    if (this._observer != null) {
      this._observer.disconnect();
      this._observer = null;
    } else if (this.$element[0].removeEventListener) {
      this.$element[0]
        .removeEventListener('DOMAttrModified', this._syncA, false);
      this.$element[0]
        .removeEventListener('DOMNodeInserted', this._syncS, false);
      this.$element[0]
        .removeEventListener('DOMNodeRemoved', this._syncS, false);
    }

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex', this.$element.data('old-tabindex'));

    this.$element.removeClass('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container.addClass('select2-container--' + this.options.get('theme'));

    $container.data('element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('select2/compat/utils',[
  'jquery'
], function ($) {
  function syncCssClasses ($dest, $src, adapter) {
    var classes, replacements = [], adapted;

    classes = $.trim($dest.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Save all Select2 classes
        if (this.indexOf('select2-') === 0) {
          replacements.push(this);
        }
      });
    }

    classes = $.trim($src.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Only adapt non-Select2 classes
        if (this.indexOf('select2-') !== 0) {
          adapted = adapter(this);

          if (adapted != null) {
            replacements.push(adapted);
          }
        }
      });
    }

    $dest.attr('class', replacements.join(' '));
  }

  return {
    syncCssClasses: syncCssClasses
  };
});

S2.define('select2/compat/containerCss',[
  'jquery',
  './utils'
], function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _containerAdapter (clazz) {
    return null;
  }

  function ContainerCSS () { }

  ContainerCSS.prototype.render = function (decorated) {
    var $container = decorated.call(this);

    var containerCssClass = this.options.get('containerCssClass') || '';

    if ($.isFunction(containerCssClass)) {
      containerCssClass = containerCssClass(this.$element);
    }

    var containerCssAdapter = this.options.get('adaptContainerCssClass');
    containerCssAdapter = containerCssAdapter || _containerAdapter;

    if (containerCssClass.indexOf(':all:') !== -1) {
      containerCssClass = containerCssClass.replace(':all:', '');

      var _cssAdapter = containerCssAdapter;

      containerCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
        }

        return clazz;
      };
    }

    var containerCss = this.options.get('containerCss') || {};

    if ($.isFunction(containerCss)) {
      containerCss = containerCss(this.$element);
    }

    CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter);

    $container.css(containerCss);
    $container.addClass(containerCssClass);

    return $container;
  };

  return ContainerCSS;
});

S2.define('select2/compat/dropdownCss',[
  'jquery',
  './utils'
], function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _dropdownAdapter (clazz) {
    return null;
  }

  function DropdownCSS () { }

  DropdownCSS.prototype.render = function (decorated) {
    var $dropdown = decorated.call(this);

    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

    if ($.isFunction(dropdownCssClass)) {
      dropdownCssClass = dropdownCssClass(this.$element);
    }

    var dropdownCssAdapter = this.options.get('adaptDropdownCssClass');
    dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter;

    if (dropdownCssClass.indexOf(':all:') !== -1) {
      dropdownCssClass = dropdownCssClass.replace(':all:', '');

      var _cssAdapter = dropdownCssAdapter;

      dropdownCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
        }

        return clazz;
      };
    }

    var dropdownCss = this.options.get('dropdownCss') || {};

    if ($.isFunction(dropdownCss)) {
      dropdownCss = dropdownCss(this.$element);
    }

    CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter);

    $dropdown.css(dropdownCss);
    $dropdown.addClass(dropdownCssClass);

    return $dropdown;
  };

  return DropdownCSS;
});

S2.define('select2/compat/initSelection',[
  'jquery'
], function ($) {
  function InitSelection (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `initSelection` option has been deprecated in favor' +
        ' of a custom data adapter that overrides the `current` method. ' +
        'This method is now called multiple times instead of a single ' +
        'time when the instance is initialized. Support will be removed ' +
        'for the `initSelection` option in future versions of Select2'
      );
    }

    this.initSelection = options.get('initSelection');
    this._isInitialized = false;

    decorated.call(this, $element, options);
  }

  InitSelection.prototype.current = function (decorated, callback) {
    var self = this;

    if (this._isInitialized) {
      decorated.call(this, callback);

      return;
    }

    this.initSelection.call(null, this.$element, function (data) {
      self._isInitialized = true;

      if (!$.isArray(data)) {
        data = [data];
      }

      callback(data);
    });
  };

  return InitSelection;
});

S2.define('select2/compat/inputData',[
  'jquery'
], function ($) {
  function InputData (decorated, $element, options) {
    this._currentData = [];
    this._valueSeparator = options.get('valueSeparator') || ',';

    if ($element.prop('type') === 'hidden') {
      if (options.get('debug') && console && console.warn) {
        console.warn(
          'Select2: Using a hidden input with Select2 is no longer ' +
          'supported and may stop working in the future. It is recommended ' +
          'to use a `<select>` element instead.'
        );
      }
    }

    decorated.call(this, $element, options);
  }

  InputData.prototype.current = function (_, callback) {
    function getSelected (data, selectedIds) {
      var selected = [];

      if (data.selected || $.inArray(data.id, selectedIds) !== -1) {
        data.selected = true;
        selected.push(data);
      } else {
        data.selected = false;
      }

      if (data.children) {
        selected.push.apply(selected, getSelected(data.children, selectedIds));
      }

      return selected;
    }

    var selected = [];

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d];

      selected.push.apply(
        selected,
        getSelected(
          data,
          this.$element.val().split(
            this._valueSeparator
          )
        )
      );
    }

    callback(selected);
  };

  InputData.prototype.select = function (_, data) {
    if (!this.options.get('multiple')) {
      this.current(function (allData) {
        $.map(allData, function (data) {
          data.selected = false;
        });
      });

      this.$element.val(data.id);
      this.$element.trigger('change');
    } else {
      var value = this.$element.val();
      value += this._valueSeparator + data.id;

      this.$element.val(value);
      this.$element.trigger('change');
    }
  };

  InputData.prototype.unselect = function (_, data) {
    var self = this;

    data.selected = false;

    this.current(function (allData) {
      var values = [];

      for (var d = 0; d < allData.length; d++) {
        var item = allData[d];

        if (data.id == item.id) {
          continue;
        }

        values.push(item.id);
      }

      self.$element.val(values.join(self._valueSeparator));
      self.$element.trigger('change');
    });
  };

  InputData.prototype.query = function (_, params, callback) {
    var results = [];

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d];

      var matches = this.matches(params, data);

      if (matches !== null) {
        results.push(matches);
      }
    }

    callback({
      results: results
    });
  };

  InputData.prototype.addOptions = function (_, $options) {
    var options = $.map($options, function ($option) {
      return $.data($option[0], 'data');
    });

    this._currentData.push.apply(this._currentData, options);
  };

  return InputData;
});

S2.define('select2/compat/matcher',[
  'jquery'
], function ($) {
  function oldMatcher (matcher) {
    function wrappedMatcher (params, data) {
      var match = $.extend(true, {}, data);

      if (params.term == null || $.trim(params.term) === '') {
        return match;
      }

      if (data.children) {
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          // Check if the child object matches
          // The old matcher returned a boolean true or false
          var doesMatch = matcher(params.term, child.text, child);

          // If the child didn't match, pop it off
          if (!doesMatch) {
            match.children.splice(c, 1);
          }
        }

        if (match.children.length > 0) {
          return match;
        }
      }

      if (matcher(params.term, data.text, data)) {
        return match;
      }

      return null;
    }

    return wrappedMatcher;
  }

  return oldMatcher;
});

S2.define('select2/compat/query',[

], function () {
  function Query (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `query` option has been deprecated in favor of a ' +
        'custom data adapter that overrides the `query` method. Support ' +
        'will be removed for the `query` option in future versions of ' +
        'Select2.'
      );
    }

    decorated.call(this, $element, options);
  }

  Query.prototype.query = function (_, params, callback) {
    params.callback = callback;

    var query = this.options.get('query');

    query.call(null, params);
  };

  return Query;
});

S2.define('select2/dropdown/attachContainer',[

], function () {
  function AttachContainer (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  AttachContainer.prototype.position =
    function (decorated, $dropdown, $container) {
    var $dropdownContainer = $container.find('.dropdown-wrapper');
    $dropdownContainer.append($dropdown);

    $dropdown.addClass('select2-dropdown--below');
    $container.addClass('select2-container--below');
  };

  return AttachContainer;
});

S2.define('select2/dropdown/stopPropagation',[

], function () {
  function StopPropagation () { }

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
    'blur',
    'change',
    'click',
    'dblclick',
    'focus',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'keypress',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseover',
    'mouseup',
    'search',
    'touchend',
    'touchstart'
    ];

    this.$dropdown.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});

S2.define('select2/selection/stopPropagation',[

], function () {
  function StopPropagation () { }

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
      'blur',
      'change',
      'click',
      'dblclick',
      'focus',
      'focusin',
      'focusout',
      'input',
      'keydown',
      'keyup',
      'keypress',
      'mousedown',
      'mouseenter',
      'mouseleave',
      'mousemove',
      'mouseover',
      'mouseup',
      'search',
      'touchend',
      'touchstart'
    ];

    this.$selection.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof S2.define === 'function' && S2.define.amd ) {
        // AMD. Register as an anonymous module.
        S2.define('jquery-mousewheel',['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults'
], function ($, _, Select2, Defaults) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = $(this).data('select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));
