!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=5)}([function(e,t,n){"use strict";function o(){}function r(e,t){var n,r,i,a,u=Y;for(a=arguments.length;a-- >2;)P.push(arguments[a]);for(t&&null!=t.children&&(P.length||P.push(t.children),delete t.children);P.length;)if((r=P.pop())&&void 0!==r.pop)for(a=r.length;a--;)P.push(r[a]);else"boolean"==typeof r&&(r=null),(i="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r=String(r):"string"!=typeof r&&(i=!1)),i&&n?u[u.length-1]+=r:u===Y?u=[r]:u.push(r),n=i;var c=new o;return c.nodeName=e,c.children=u,c.attributes=null==t?void 0:t,c.key=null==t?void 0:t.key,void 0!==E.vnode&&E.vnode(c),c}function i(e,t){for(var n in t)e[n]=t[n];return e}function a(e,t){return r(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function u(e){!e._dirty&&(e._dirty=!0)&&1==B.push(e)&&(E.debounceRendering||I)(c)}function c(){var e,t=B;for(B=[];e=t.pop();)e._dirty&&N(e)}function l(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&f(e,t.nodeName):n||e._componentConstructor===t.nodeName}function f(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function s(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function p(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===M.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,y,a):e.removeEventListener(t,y,a),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)m(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var u=r&&t!==(t=t.replace(/^xlink\:?/,""));null==o||!1===o?u?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(u?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function m(e,t,n){try{e[t]=n}catch(e){}}function y(e){return this._listeners[e.type](E.event&&E.event(e)||e)}function h(){for(var e;e=W.pop();)E.afterMount&&E.afterMount(e),e.componentDidMount&&e.componentDidMount()}function b(e,t,n,o,r,i){T++||(z=null!=r&&void 0!==r.ownerSVGElement,R=null!=e&&!("__preactattr_"in e));var a=A(e,t,n,o,i);return r&&a.parentNode!==r&&r.appendChild(a),--T||(R=!1,i||h()),a}function A(e,t,n,o,r){var i=e,a=z;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),x(e,!0))),i.__preactattr_=!0,i;var u=t.nodeName;if("function"==typeof u)return _(e,t,n,o);if(z="svg"===u||"foreignObject"!==u&&z,u=String(u),(!e||!f(e,u))&&(i=p(u,z),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),x(e,!0)}var c=i.firstChild,l=i.__preactattr_,s=t.children;if(null==l){l=i.__preactattr_={};for(var d=i.attributes,v=d.length;v--;)l[d[v].name]=d[v].value}return!R&&s&&1===s.length&&"string"==typeof s[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=s[0]&&(c.nodeValue=s[0]):(s&&s.length||null!=c)&&g(i,s,n,o,R||null!=l.dangerouslySetInnerHTML),C(i,t.attributes,l),z=a,i}function g(e,t,n,o,r){var i,a,u,c,f,s=e.childNodes,p=[],v={},m=0,y=0,h=s.length,b=0,g=t?t.length:0;if(0!==h)for(var w=0;w<h;w++){var C=s[w],O=C.__preactattr_,k=g&&O?C._component?C._component.__key:O.key:null;null!=k?(m++,v[k]=C):(O||(void 0!==C.splitText?!r||C.nodeValue.trim():r))&&(p[b++]=C)}if(0!==g)for(var w=0;w<g;w++){c=t[w],f=null;var k=c.key;if(null!=k)m&&void 0!==v[k]&&(f=v[k],v[k]=void 0,m--);else if(!f&&y<b)for(i=y;i<b;i++)if(void 0!==p[i]&&l(a=p[i],c,r)){f=a,p[i]=void 0,i===b-1&&b--,i===y&&y++;break}f=A(f,c,n,o),u=s[w],f&&f!==e&&f!==u&&(null==u?e.appendChild(f):f===u.nextSibling?d(u):e.insertBefore(f,u))}if(m)for(var w in v)void 0!==v[w]&&x(v[w],!1);for(;y<=b;)void 0!==(f=p[b--])&&x(f,!1)}function x(e,t){var n=e._component;n?j(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||d(e),w(e))}function w(e){for(e=e.lastChild;e;){var t=e.previousSibling;x(e,!0),e=t}}function C(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||v(e,o,n[o],n[o]=void 0,z);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||v(e,o,n[o],n[o]=t[o],z)}function O(e){var t=e.constructor.name;(H[t]||(H[t]=[])).push(e)}function k(e,t,n){var o,r=H[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),q.call(o,t,n)):(o=new q(t,n),o.constructor=e,o.render=K),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function K(e,t,n){return this.constructor(e,n)}function L(e,t,n,o,r){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===E.syncComponentUpdates&&e.base?u(e):N(e,1,r)),e.__ref&&e.__ref(e))}function N(e,t,n,o){if(!e._disable){var r,a,u,c=e.props,l=e.state,f=e.context,p=e.prevProps||c,d=e.prevState||l,v=e.prevContext||f,m=e.base,y=e.nextBase,A=m||y,g=e._component,w=!1;if(m&&(e.props=p,e.state=d,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(c,l,f)?w=!0:e.componentWillUpdate&&e.componentWillUpdate(c,l,f),e.props=c,e.state=l,e.context=f),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!w){r=e.render(c,l,f),e.getChildContext&&(f=i(i({},f),e.getChildContext()));var C,O,K=r&&r.nodeName;if("function"==typeof K){var _=s(r);a=g,a&&a.constructor===K&&_.key==a.__key?L(a,_,1,f,!1):(C=a,e._component=a=k(K,_,f),a.nextBase=a.nextBase||y,a._parentComponent=e,L(a,_,0,f,!1),N(a,1,n,!0)),O=a.base}else u=A,C=g,C&&(u=e._component=null),(A||1===t)&&(u&&(u._component=null),O=b(u,r,f,n||!m,A&&A.parentNode,!0));if(A&&O!==A&&a!==g){var q=A.parentNode;q&&O!==q&&(q.replaceChild(O,A),C||(A._component=null,x(A,!1)))}if(C&&j(C),e.base=O,O&&!o){for(var S=e,P=e;P=P._parentComponent;)(S=P).base=O;O._component=S,O._componentConstructor=S.constructor}}if(!m||n?W.unshift(e):w||(e.componentDidUpdate&&e.componentDidUpdate(p,d,v),E.afterUpdate&&E.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);T||o||h()}}function _(e,t,n,o){for(var r=e&&e._component,i=r,a=e,u=r&&e._componentConstructor===t.nodeName,c=u,l=s(t);r&&!c&&(r=r._parentComponent);)c=r.constructor===t.nodeName;return r&&c&&(!o||r._component)?(L(r,l,3,n,o),e=r.base):(i&&!u&&(j(i),e=a=null),r=k(t.nodeName,l,n),e&&!r.nextBase&&(r.nextBase=e,a=null),L(r,l,1,n,o),e=r.base,a&&e!==a&&(a._component=null,x(a,!1))),e}function j(e){E.beforeUnmount&&E.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?j(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,d(t),O(e),w(t)),e.__ref&&e.__ref(null)}function q(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function S(e,t,n){return b(n,e,{},!1,t,!1)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"h",function(){return r}),n.d(t,"createElement",function(){return r}),n.d(t,"cloneElement",function(){return a}),n.d(t,"Component",function(){return q}),n.d(t,"render",function(){return S}),n.d(t,"rerender",function(){return c}),n.d(t,"options",function(){return E});var E={},P=[],Y=[],I="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,M=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,B=[],W=[],T=0,z=!1,R=!1,H={};i(q.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),u(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),N(this,2)},render:function(){}});var Z={h:r,createElement:r,cloneElement:a,Component:q,render:S,rerender:c,options:E};t.default=Z},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t,n){function o(e,t,n){function o(t){var n=b,o=A;return b=A=void 0,O=t,x=e.apply(o,n)}function f(e){return O=e,w=setTimeout(d,t),k?o(e):x}function s(e){var n=e-C,o=e-O,r=t-n;return K?l(r,g-o):r}function p(e){var n=e-C,o=e-O;return void 0===C||n>=t||n<0||K&&o>=g}function d(){var e=i();if(p(e))return v(e);w=setTimeout(d,s(e))}function v(e){return w=void 0,L&&b?o(e):(b=A=void 0,x)}function m(){void 0!==w&&clearTimeout(w),O=0,b=C=A=w=void 0}function y(){return void 0===w?x:v(i())}function h(){var e=i(),n=p(e);if(b=arguments,A=this,C=e,n){if(void 0===w)return f(C);if(K)return w=setTimeout(d,t),o(C)}return void 0===w&&(w=setTimeout(d,t)),x}var b,A,g,x,w,C,O=0,k=!1,K=!1,L=!0;if("function"!=typeof e)throw new TypeError(u);return t=a(t)||0,r(n)&&(k=!!n.leading,K="maxWait"in n,g=K?c(a(n.maxWait)||0,t):g,L="trailing"in n?!!n.trailing:L),h.cancel=m,h.flush=y,h}var r=n(1),i=n(11),a=n(14),u="Expected a function",c=Math.max,l=Math.min;e.exports=o},function(e,t,n){var o=n(12),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();e.exports=i},function(e,t,n){var o=n(3),r=o.Symbol;e.exports=r},function(e,t,n){e.exports=n(6)},function(e,t,n){"use strict";function o(){var e=n(8).default,t=document.getElementById("root")||document.body,o=[],a=function(e){o.forEach(function(t){return t(e)})};document.addEventListener("keydown",a),document.addEventListener("keyup",a);var u={acceptKeys:function(e){return o.push(e)}};if((0,r.render)((0,r.h)(e,u),t.parentNode,t||void 0)&&i.classList.remove("no-js"),window.devicePixelRatio&&devicePixelRatio>=2){var c=document.createElement("div");c.style.border=".5px solid transparent",document.body.appendChild(c),1!==c.offsetHeight&&i.classList.add("hairline"),document.body.removeChild(c)}}var r=n(0);n(7);var i=document.querySelector("html");window.onerror=function(e,t,n){i.classList.add("has-page-error")},document.addEventListener("DOMContentLoaded",o)},function(e,t){},function(e,t,n){"use strict";function o(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),f=n(9),s=function(e){return e&&e.__esModule?e:{default:e}}(f),p=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"render",value:function(e){var t=o(e,[]);return(0,l.h)(s.default,u({id:"app"},t))}}]),t}(l.Component);t.default=p},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),f=n(10),s=(o(f),n(2)),p=(o(s),n(20)),d=o(p),v=n(21),m=n(22),y=o(m),h=["00006","00008","00128","00129","00135","00137","00141"].map(function(e){return n(25)("./"+e+".mp3")}).filter(Boolean),b=function(e){function t(e){var n=e.acceptKeys,o=void 0===n?function(e){}:n;i(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,arguments));r.state={soundId:0},o((0,d.default)(r.onKeyEvent.bind(r),200)),r.playSound=(0,d.default)(r.playSound.bind(r),500),r.startTime=1e3*window.performance.now();var u=(0,v.asLong)(),c=Math.floor(u/1e7);return console.log("⏲ "+c+" ("+u+") at 0 ms.","Started"),r}return u(t,e),c(t,[{key:"componentDidMount",value:function(){this.log("Trial #…, Type Boring"),this.log("Animation starts")}},{key:"log",value:function(){var e=(Math.floor((0,v.asLong)()/1e7),Math.floor(1e3*window.performance.now()-this.startTime));console.log("⏲ "+e+" ms.",[].concat(Array.prototype.slice.call(arguments)))}},{key:"playSound",value:function(){this.audioElement.play(),this.log("Alarm #…")}},{key:"playSoundDidComplete",value:function(){var e=this,t=this.state.soundId;t=(t+1)%h.length||0,this.setState({soundId:t},function(t){return e.audioElement.load()})}},{key:"onKeyDown",value:function(e){switch(e.which||e.keyCode){case 65:return this.playSound();case 27:return}}},{key:"onKeyEvent",value:function(e){if(this.audioElement){var t=e.which||e.keyCode;this.setState({ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,spaceKey:32===t,aKey:65===t}),"keydown"===e.type&&this.onKeyDown(e)}}},{key:"render",value:function(e,t){var n=this,o=t.ctrlKey,i=t.shiftKey,a=t.spaceKey,u=t.aKey,c=t.soundId,f=void 0===c?0:c,s=r(e,[]);return(0,l.h)("div",s,(0,l.h)("ul",{"data-role":"debug-shortcuts",class:"list"},i&&(0,l.h)("li",null,"SHIFT"),o&&(0,l.h)("li",null,"CTRL"),u&&(0,l.h)("li",null,"A"),a&&(0,l.h)("li",null,"SPACE")),h[f]&&(0,l.h)("audio",{ref:function(e){return n.audioElement=e},onended:this.playSoundDidComplete.bind(this),src:h[f],preload:"auto"}),(0,l.h)(y.default,{isRunning:!0}))}}]),t}(l.Component);t.default=b},function(e,t){},function(e,t,n){var o=n(3),r=function(){return o.Date.now()};e.exports=r},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,n(13))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){function o(e){if("number"==typeof e)return e;if(i(e))return a;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=l.test(e);return n||f.test(e)?s(e.slice(2),n?2:8):c.test(e)?a:+e}var r=n(1),i=n(15),a=NaN,u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,s=parseInt;e.exports=o},function(e,t,n){function o(e){return"symbol"==typeof e||i(e)&&r(e)==a}var r=n(16),i=n(19),a="[object Symbol]";e.exports=o},function(e,t,n){function o(e){return null==e?void 0===e?c:u:l&&l in Object(e)?i(e):a(e)}var r=n(4),i=n(17),a=n(18),u="[object Null]",c="[object Undefined]",l=r?r.toStringTag:void 0;e.exports=o},function(e,t,n){function o(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var o=!0}catch(e){}var r=u.call(e);return o&&(t?e[c]=n:delete e[c]),r}var r=n(4),i=Object.prototype,a=i.hasOwnProperty,u=i.toString,c=r?r.toStringTag:void 0;e.exports=o},function(e,t){function n(e){return r.call(e)}var o=Object.prototype,r=o.toString;e.exports=n},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t,n){function o(e,t,n){var o=!0,u=!0;if("function"!=typeof e)throw new TypeError(a);return i(n)&&(o="leading"in n?!!n.leading:o,u="trailing"in n?!!n.trailing:u),r(e,t,{leading:o,maxWait:t,trailing:u})}var r=n(2),i=n(1),a="Expected a function";e.exports=o},function(e,t,n){"use strict";function o(e){var t=e||new Date;return 1e13*t.getFullYear()+1e11*(t.getMonth()+1)+1e9*t.getDate()+1e7*t.getHours()+1e5*t.getMinutes()+1e3*t.getSeconds()+1*t.getMilliseconds()}Object.defineProperty(t,"__esModule",{value:!0}),t.asLong=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),f=n(23),s=(o(f),n(24)),p=o(s),d=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"imageDidLoad",value:function(){}},{key:"render",value:function(e){var t=this,n=r(e,[]);return(0,l.h)("div",n,(0,l.h)("img",{src:p.default,class:"db mx-auto page-center",onload:this.imageDidLoad}),(0,l.h)("canvas",{ref:function(e){t.canvasEL=e}}))}}]),t}(l.Component);t.default=d},function(e,t){},function(e,t){e.exports="data:image/gif;base64,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"},function(e,t,n){function o(e){return n(r(e))}function r(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./00006.mp3":26,"./00008.mp3":27,"./00128.mp3":28,"./00129.mp3":29,"./00131.mp3":30,"./00135.mp3":31,"./00137.mp3":32,"./00141.mp3":33};o.keys=function(){return Object.keys(i)},o.resolve=r,e.exports=o,o.id=25},function(e,t,n){e.exports=n.p+"605fa9c342bb5f59e28c6b27a84550b1.mp3"},function(e,t,n){e.exports=n.p+"fa945db42f50de86a9511618167ec646.mp3"},function(e,t,n){e.exports=n.p+"c4d5624e6291ed72cb6b0574a3518f60.mp3"},function(e,t,n){e.exports=n.p+"bb777a0421d2017e65f888250c669d3e.mp3"},function(e,t,n){e.exports=n.p+"7d1fe53db330b10b03894fe1b79535ec.mp3"},function(e,t,n){e.exports=n.p+"653a70c934ea6e330ddef8a3ab921d21.mp3"},function(e,t,n){e.exports=n.p+"d99d96644051ae2f0453e395d190c213.mp3"},function(e,t,n){e.exports=n.p+"6ea813d72704f6d4a15b925e20f2ae8c.mp3"}]);