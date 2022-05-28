!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){var i=n(1);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(i,o);i.locals&&(e.exports=i.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,":root{\n  --columns: 12;\n  --gutter: 2rem;\n}\nhtml,body{\n  margin:0;\n  padding:0;\n}\n.container{\n  padding:3rem;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; font-size: 16px;\n  line-height: 24px;\n  font-weight: normal;\n}\n.container h1 {\n  margin-top: 1.5rem;\n  margin-bottom: 3rem;\n}\n\n.container h4 {\n  margin-bottom: 2rem;\n}\n\n.container .row {\n  border-top:1px solid #c8c8c8;\n  margin: 1rem 0;\n  padding: 1rem 0;\n  display: grid;\n  grid-template-columns: repeat(var(--columns), 1fr);\n  grid-gap: var(--gutter);\n}\n\n.gmail_signature {\n  padding: 2rem;\n  border: 1px solid #999999;\n  border-radius: 0;\n  overflow: scroll;\n  white-space: initial;\n  background: transparent;\n}\n\n.options span {\n  margin-right: 1rem;\n}\n\n.field-row{\n  display: flex;\n  padding:0 0 .5rem;\n}\nlabel{\n  font-size:14px;\n  min-width:8rem;\n}\ninput{\n  font-size:14px;\n  width:100%;\n  border:1px solid #999999;\n  padding:.5rem 1rem;\n  width: 100%;\n}\n.col-12 {\n  grid-column: span 12;\n}\n@media (min-width: 768px){\n  .col-md-6 {\n    grid-column: span 6;\n  }\n}\n#code{\n  padding:3rem;\n  border:1px solid #999999;\n  background:#f1f1f1;\n}\npre{\n  white-space:pre-line;\n}",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(r=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),s=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(s).concat([o]).join("\n")}var r;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(o=0;o<e.length;o++){var r=e[o];null!=r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},function(e,t,n){var i,o,s={},r=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var i=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}}(),l=null,c=0,d=[],u=n(4);function p(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=s[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(y(i.parts[r],t))}else{var a=[];for(r=0;r<i.parts.length;r++)a.push(y(i.parts[r],t));s[i.id]={id:i.id,refs:1,parts:a}}}}function h(e,t){for(var n=[],i={},o=0;o<e.length;o++){var s=e[o],r=t.base?s[0]+t.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};i[r]?i[r].parts.push(a):n.push(i[r]={id:r,parts:[a]})}return n}function f(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=d[d.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertAt.before,n);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var i=function(){0;return n.nc}();i&&(e.attrs.nonce=i)}return g(t,e.attrs),f(e,t),t}function g(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,i,o,s;if(t.transform&&e.css){if(!(s="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=s}if(t.singleton){var r=c++;n=l||(l=v(t)),i=w.bind(null,n,r,!1),o=w.bind(null,n,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),f(e,t),t}(t),i=function(e,t,n){var i=n.css,o=n.sourceMap,s=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||s)&&(i=u(i));o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([i],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),i=function(e,t){var n=t.css,i=t.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return p(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var r=n[o];(a=s[r.id]).refs--,i.push(a)}e&&p(h(e,t),t);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete s[a.id]}}}};var b,x=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function w(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var s=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,s=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?e:(o=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:i+s.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";n.r(t);n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const i=new WeakMap,o=e=>"function"==typeof e&&i.has(e),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(e,t,n=null)=>{let i=t;for(;i!==n;){const t=i.nextSibling;e.removeChild(i),i=t}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${c}--\x3e`,u=new RegExp(`${c}|${d}`),p="$lit$";class h{constructor(e,t){this.parts=[],this.element=t;let n=-1,i=0;const o=[],s=t=>{const r=t.content,a=document.createTreeWalker(r,133,null,!1);let l=0;for(;a.nextNode();){n++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const o=t.attributes;let s=0;for(let e=0;e<o.length;e++)o[e].value.indexOf(c)>=0&&s++;for(;s-- >0;){const o=e.strings[i],s=v.exec(o)[2],r=s.toLowerCase()+p,a=t.getAttribute(r).split(u);this.parts.push({type:"attribute",index:n,name:s,strings:a}),t.removeAttribute(r),i+=a.length-1}}"TEMPLATE"===t.tagName&&s(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const s=t.parentNode,r=e.split(u),a=r.length-1;for(let e=0;e<a;e++)s.insertBefore(""===r[e]?m():document.createTextNode(r[e]),t),this.parts.push({type:"node",index:++n});""===r[a]?(s.insertBefore(m(),t),o.push(t)):t.data=r[a],i+=a}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&n!==l||(n++,e.insertBefore(m(),t)),l=n,this.parts.push({type:"node",index:n}),null===t.nextSibling?t.data="":(o.push(t),n--),i++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1})}}};s(t);for(const e of o)e.parentNode.removeChild(e)}}const f=e=>-1!==e.index,m=()=>document.createComment(""),v=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,i=0;const o=e=>{const s=document.createTreeWalker(e,133,null,!1);let r=s.nextNode();for(;n<t.length&&null!==r;){const e=t[n];if(f(e))if(i===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(r.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(r,e.name,e.strings,this.options));n++}else i++,"TEMPLATE"===r.nodeName&&o(r.content),r=s.nextNode();else this._parts.push(void 0),n++}};return o(e),s&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class y{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){const e=this.strings[n],i=v.exec(e);t+=i?e.substr(0,i.index)+i[1]+i[2]+p+i[3]+c:e+d}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const b=e=>null===e||!("object"==typeof e||"function"==typeof e);class x{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new w(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let i=0;i<t;i++){n+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||b(e)&&e===this.value||(this.value=e,o(e)||(this.committer.dirty=!0))}commit(){for(;o(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class _{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(m()),this.endNode=e.appendChild(m())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=m()),e._insert(this.endNode=m())}insertAfterPart(e){e._insert(this.startNode=m()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;o(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(b(e)?e!==this.value&&this._commitText(e):e instanceof y?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===l?(this.value=l,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof g&&this.value.template===t)this.value.update(e.values);else{const n=new g(t,e.processor,this.options),i=n._clone();n.update(e.values),this._commitNode(i),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,i=0;for(const o of e)void 0===(n=t[i])&&(n=new _(this.options),t.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(o),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){r(this.startNode.parentNode,e.nextSibling,this.endNode)}}class N{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;o(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class S extends x{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends w{}let A=!1;try{const e={get capture(){return A=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class T{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;o(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),i&&(this._options=V(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const V=e=>e&&(A?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const j=new class{handleAttributeExpressions(e,t,n,i){const o=t[0];return"."===o?new S(e,t.slice(1),n).parts:"@"===o?[new T(e,t.slice(1),i.eventContext)]:"?"===o?[new N(e,t.slice(1),n)]:new x(e,t,n).parts}handleTextExpression(e){return new _(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function k(e){let t=L.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},L.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const i=e.strings.join(c);return void 0===(n=t.keyString.get(i))&&(n=new h(e,e.getTemplateElement()),t.keyString.set(i,n)),t.stringsArray.set(e.strings,n),n}const L=new Map,M=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const C=(e,...t)=>new y(e,t,"html",j),$=e=>e.length?(e=>C`<div style="line-height: 14px;"><a href="tel:${e}" target="_blank" style="font-size: 14px; line-height: 21px; color: #63666a; text-decoration:none;">${e}</a></div>`)(e):"",U=e=>C`
<div class="gmail_signature" data-smartmail="gmail_signature">
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; font-size: 16px; line-height: 24px; font-weight: normal;">
  <div>
    <span style="font-size: 16px; line-height: 24px; color: #63666a;">${e.firstname}&nbsp;<span style="font-size: 16px; line-height: 24px; color: #63666a;">${e.lastname}</span>
  </div>
  <div style="font-size: 14px; line-height: 21px;">
    <span style="color: #63666a; font-size: 14px; line-height: 21px;">${e.role}</span>
  </div>
  <div style="line-height: 14px;"><br></div>
  <div>
  <div style="font-size: 14px; line-height: 21px;">
    <a href="mailto:${e.email}" target="_blank" style="color: #63666a; font-size: 14px; line-height: 21px; text-decoration:none;">${e.email}</a>
  </div>
  <div style="font-size: 14px; line-height: 21px;">
    ${$(e.phone)}
  </div>
  <div style="line-height: 28px;"><br></div>
  ${(()=>C`
  <div>
  <a href="https://precisionscience.com/email-signature/logo" target="_blank" style="color: #63666a;text-decoration:none;"><img src="https://precisionscience.com/app/themes/PrecisionScience/dist/img/logo-color.svg?v=tm" height="48px" nosend="1"></a>
  </div>`)()}
  <div style="line-height: 14px;"><br></div>
  ${(()=>C`
  <div style="font-size: 14px; line-height: 21px;">
    <a href="https://precisionscience.com/email-signature/url" target="_blank" style="color: #63666a;text-decoration:none;">https://precisionscience.com</a>
  </div>`)()}
</div>
</div>`,O=e=>{const t=new CustomEvent("update-data",{detail:{key:e.target.name,value:e.target.value}});document.body.dispatchEvent(t)},I={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},R=document.querySelector("#root"),P={firstname:"",lastname:"",role:"",email:"",phone:""},B=()=>C`
  <main class="container">
    <h1>Email signature builder</h1>
    <p>Complete form and then copy the preview into your preferred email client:</p>
    <ul>
      <li><b>Gmail:</b> you copy the preview on the right and paste in the signature field.</li>
      <li><b>Outlook:</b> you copy the preview on the right and paste in the signature field.</li>
      <li><b>Apple Mail:</b> similar to Gmail, but you have to uncheck <i>"Always match my default messsage font"</i>.</li>
    </ul>
    ${(e=>C`
<div class="row">
  <form class="col-12 col-md-6">
    <h4>Your signature details</h4>
    <div class="field-row">
      <label for="firstname">First name</label>
      <input type="text" name="firstname" 
        @keyup=${e=>O(e)}>
    </div>
    <div class="field-row">
      <label for="lastname">Last name</label>
      <input type="text" name="lastname" 
        @keyup=${e=>O(e)}>
    </div>
    <div class="field-row">
      <label for="role">Role</label>
      <input type="text" name="role"
        @keyup=${e=>O(e)}>
    </div>
    <div class="field-row">
      <label for="email">Email</label>
      <input type="email" name="email" @keyup=${e=>O(e)}>
    </div>
    <div class="field-row">
      <label for="phone">Phone number</label>
      <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        @keyup=${e=>O(e)}>
    </div>

  </form>
  <div id="preview" class="col-12 col-md-6">
    <h4>Preview (for copy & paste)</h4>
    ${U(e)}
  </div>
</div>
  <div id="code">
    <h4>If you email app prefers HTML (for copy & paste)</h4>
    <pre>
      <code></code>
    </pre>
  </code>
`)(P)}
  </main>
`,H=()=>{((e,t,n)=>{let i=M.get(t);void 0===i&&(r(t,t.firstChild),M.set(t,i=new _(Object.assign({templateFactory:k},n))),i.appendInto(t)),i.setValue(e),i.commit()})(B(),R);const e=document.querySelector("pre code"),t=document.querySelector("#preview div");e.innerHTML=(e=>String(e).replace(/[&<>"'`=\/]/g,e=>I[e]))(t.innerHTML)};document.body.addEventListener("update-data",e=>{const t=e.detail;P[t.key]=t.value,H()}),H(),console.log("Project started..."),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(e=>{console.log("SW registered: ",e)}).catch(e=>{console.log("SW registration failed: ",e)})}),document.querySelector(".js-warning").style.display="none"}]);
//# sourceMappingURL=main.ea6422d6335da1ed273e.js.map