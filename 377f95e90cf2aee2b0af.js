/*! For license information please see 377f95e90cf2aee2b0af.js.LICENSE.txt */
(self.webpackChunkannouncekit=self.webpackChunkannouncekit||[]).push([[3467],{22122:(e,t,n)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:()=>r})},79367:function(e,t){var n,r;n=function(e,t){"use strict";var n,r,o="function"==typeof Map?new Map:(n=[],r=[],{has:function(e){return n.indexOf(e)>-1},get:function(e){return r[n.indexOf(e)]},set:function(e,t){-1===n.indexOf(e)&&(n.push(e),r.push(t))},delete:function(e){var t=n.indexOf(e);t>-1&&(n.splice(t,1),r.splice(t,1))}}),i=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){i=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function a(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!o.has(e)){var t=null,n=null,r=null,a=function(){e.clientWidth!==n&&f()},s=function(t){window.removeEventListener("resize",a,!1),e.removeEventListener("input",f,!1),e.removeEventListener("keyup",f,!1),e.removeEventListener("autosize:destroy",s,!1),e.removeEventListener("autosize:update",f,!1),Object.keys(t).forEach((function(n){e.style[n]=t[n]})),o.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",s,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",f,!1),window.addEventListener("resize",a,!1),e.addEventListener("input",f,!1),e.addEventListener("autosize:update",f,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",o.set(e,{destroy:s,update:f}),"vertical"===(u=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===u.resize&&(e.style.resize="horizontal"),t="content-box"===u.boxSizing?-(parseFloat(u.paddingTop)+parseFloat(u.paddingBottom)):parseFloat(u.borderTopWidth)+parseFloat(u.borderBottomWidth),isNaN(t)&&(t=0),f()}var u;function l(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function c(){if(0!==e.scrollHeight){var r=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),o=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+t+"px",n=e.clientWidth,r.forEach((function(e){e.node.scrollTop=e.scrollTop})),o&&(document.documentElement.scrollTop=o)}}function f(){c();var t=Math.round(parseFloat(e.style.height)),n=window.getComputedStyle(e,null),o="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):e.offsetHeight;if(o<t?"hidden"===n.overflowY&&(l("scroll"),c(),o="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==n.overflowY&&(l("hidden"),c(),o="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),r!==o){r=o;var a=i("autosize:resized");try{e.dispatchEvent(a)}catch(e){}}}}function s(e){var t=o.get(e);t&&t.destroy()}function u(e){var t=o.get(e);t&&t.update()}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((l=function(e){return e}).destroy=function(e){return e},l.update=function(e){return e}):((l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return a(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],s),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],u),e}),t.default=l,e.exports=t.default},void 0===(r=n.apply(t,[e,t]))||(e.exports=r)},31934:e=>{e.exports=function(e,t,n){return((n=window.getComputedStyle)?n(e):e.currentStyle)[t.replace(/-(\w)/gi,(function(e,t){return t.toUpperCase()}))]}},58303:(e,t,n)=>{var r=n(31934);e.exports=function(e){var t=r(e,"line-height"),n=parseFloat(t,10);if(t===n+""){var o=e.style.lineHeight;e.style.lineHeight=t+"em",t=r(e,"line-height"),n=parseFloat(t,10),o?e.style.lineHeight=o:delete e.style.lineHeight}if(-1!==t.indexOf("pt")?(n*=4,n/=3):-1!==t.indexOf("mm")?(n*=96,n/=25.4):-1!==t.indexOf("cm")?(n*=96,n/=2.54):-1!==t.indexOf("in")?n*=96:-1!==t.indexOf("pc")&&(n*=16),n=Math.round(n),"normal"===t){var i=e.nodeName,a=document.createElement(i);a.innerHTML="&nbsp;","TEXTAREA"===i.toUpperCase()&&a.setAttribute("rows","1");var s=r(e,"font-size");a.style.fontSize=s,a.style.padding="0px",a.style.border="0px";var u=document.body;u.appendChild(a),n=a.offsetHeight,u.removeChild(a)}return n}},27418:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var l in i=Object(arguments[u]))n.call(i,l)&&(s[l]=i[l]);if(t){a=t(i);for(var c=0;c<a.length;c++)r.call(i,a[c])&&(s[a[c]]=i[a[c]])}}return s}},92703:(e,t,n)=>{"use strict";var r=n(50414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},50414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4857:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};t.__esModule=!0;var s=n(67294),u=n(45697),l=n(79367),c=n(58303),f="autosize:resized",p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={lineHeight:null},t.textarea=t.props.innerRef||s.createRef(),t.onResize=function(e){t.props.onResize&&t.props.onResize(e)},t.updateLineHeight=function(){t.textarea.current&&t.setState({lineHeight:c(t.textarea.current)})},t.onChange=function(e){var n=t.props.onChange;t.currentValue=e.currentTarget.value,n&&n(e)},t}return o(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props,n=t.maxRows,r=t.async;"number"==typeof n&&this.updateLineHeight(),"number"==typeof n||r?setTimeout((function(){return e.textarea.current&&l(e.textarea.current)})):this.textarea.current&&l(this.textarea.current),this.textarea.current&&this.textarea.current.addEventListener(f,this.onResize)},t.prototype.componentWillUnmount=function(){this.textarea.current&&(this.textarea.current.removeEventListener(f,this.onResize),l.destroy(this.textarea.current))},t.prototype.render=function(){var e=this.props,t=(e.onResize,e.maxRows),n=(e.onChange,e.style),r=(e.innerRef,e.children),o=a(e,["onResize","maxRows","onChange","style","innerRef","children"]),u=this.state.lineHeight,l=t&&u?u*t:null;return s.createElement("textarea",i({},o,{onChange:this.onChange,style:l?i({},n,{maxHeight:l}):n,ref:this.textarea}),r)},t.prototype.componentDidUpdate=function(){this.textarea.current&&l.update(this.textarea.current)},t.defaultProps={rows:1,async:!1},t.propTypes={rows:u.number,maxRows:u.number,onResize:u.func,innerRef:u.object,async:u.bool},t}(s.Component);t.TextareaAutosize=s.forwardRef((function(e,t){return s.createElement(p,i({},e,{innerRef:t}))}))},54042:(e,t,n)=>{"use strict";var r=n(4857);t.Z=r.TextareaAutosize},60053:(e,t)=>{"use strict";var n,r,o,i,a;if("undefined"==typeof window||"function"!=typeof MessageChannel){var s=null,u=null,l=function(){if(null!==s)try{var e=t.unstable_now();s(!0,e),s=null}catch(e){throw setTimeout(l,0),e}},c=Date.now();t.unstable_now=function(){return Date.now()-c},n=function(e){null!==s?setTimeout(n,0,e):(s=e,setTimeout(l,0))},r=function(e,t){u=setTimeout(e,t)},o=function(){clearTimeout(u)},i=function(){return!1},a=t.unstable_forceFrameRate=function(){}}else{var f=window.performance,p=window.Date,d=window.setTimeout,h=window.clearTimeout;if("undefined"!=typeof console){var y=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof y&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof f&&"function"==typeof f.now)t.unstable_now=function(){return f.now()};else{var v=p.now();t.unstable_now=function(){return p.now()-v}}var b=!1,m=null,w=-1,g=5,x=0;i=function(){return t.unstable_now()>=x},a=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):g=0<e?Math.floor(1e3/e):5};var _=new MessageChannel,O=_.port2;_.port1.onmessage=function(){if(null!==m){var e=t.unstable_now();x=e+g;try{m(!0,e)?O.postMessage(null):(b=!1,m=null)}catch(e){throw O.postMessage(null),e}}else b=!1},n=function(e){m=e,b||(b=!0,O.postMessage(null))},r=function(e,n){w=d((function(){e(t.unstable_now())}),n)},o=function(){h(w),w=-1}}function T(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,o=e[r];if(!(void 0!==o&&0<z(o,t)))break e;e[r]=t,e[n]=o,n=r}}function E(e){return void 0===(e=e[0])?null:e}function k(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length;r<o;){var i=2*(r+1)-1,a=e[i],s=i+1,u=e[s];if(void 0!==a&&0>z(a,n))void 0!==u&&0>z(u,a)?(e[r]=u,e[s]=n,r=s):(e[r]=a,e[i]=n,r=i);else{if(!(void 0!==u&&0>z(u,n)))break e;e[r]=u,e[s]=n,r=s}}}return t}return null}function z(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var j=[],C=[],R=1,P=null,S=3,L=!1,F=!1,H=!1;function M(e){for(var t=E(C);null!==t;){if(null===t.callback)k(C);else{if(!(t.startTime<=e))break;k(C),t.sortIndex=t.expirationTime,T(j,t)}t=E(C)}}function A(e){if(H=!1,M(e),!F)if(null!==E(j))F=!0,n(N);else{var t=E(C);null!==t&&r(A,t.startTime-e)}}function N(e,n){F=!1,H&&(H=!1,o()),L=!0;var a=S;try{for(M(n),P=E(j);null!==P&&(!(P.expirationTime>n)||e&&!i());){var s=P.callback;if(null!==s){P.callback=null,S=P.priorityLevel;var u=s(P.expirationTime<=n);n=t.unstable_now(),"function"==typeof u?P.callback=u:P===E(j)&&k(j),M(n)}else k(j);P=E(j)}if(null!==P)var l=!0;else{var c=E(C);null!==c&&r(A,c.startTime-n),l=!1}return l}finally{P=null,S=a,L=!1}}function I(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var W=a;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){F||L||(F=!0,n(N))},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_getFirstCallbackNode=function(){return E(j)},t.unstable_next=function(e){switch(S){case 1:case 2:case 3:var t=3;break;default:t=S}var n=S;S=t;try{return e()}finally{S=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=W,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=S;S=e;try{return t()}finally{S=n}},t.unstable_scheduleCallback=function(e,i,a){var s=t.unstable_now();if("object"==typeof a&&null!==a){var u=a.delay;u="number"==typeof u&&0<u?s+u:s,a="number"==typeof a.timeout?a.timeout:I(e)}else a=I(e),u=s;return e={id:R++,callback:i,priorityLevel:e,startTime:u,expirationTime:a=u+a,sortIndex:-1},u>s?(e.sortIndex=u,T(C,e),null===E(j)&&e===E(C)&&(H?o():H=!0,r(A,u-s))):(e.sortIndex=a,T(j,e),F||L||(F=!0,n(N))),e},t.unstable_shouldYield=function(){var e=t.unstable_now();M(e);var n=E(j);return n!==P&&null!==P&&null!==n&&null!==n.callback&&n.startTime<=e&&n.expirationTime<P.expirationTime||i()},t.unstable_wrapCallback=function(e){var t=S;return function(){var n=S;S=t;try{return e.apply(this,arguments)}finally{S=n}}}},63840:(e,t,n)=>{"use strict";e.exports=n(60053)}}]);