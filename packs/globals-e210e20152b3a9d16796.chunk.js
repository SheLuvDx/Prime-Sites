(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{1317:function(e,t){!function(){var t,n={days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{D:"%m/%d/%y",F:"%Y-%m-%d",R:"%H:%M",T:"%H:%M:%S",X:"%T",c:"%a %b %d %X %Y",r:"%I:%M:%S %p",v:"%e-%b-%Y",x:"%D"}},i=new function e(t,i,r){var s,a=t||n,o=i||0,l=r||!1,c=0;var u=function(e,t){var n;if(t)n=t.getTime(),l&&(t=new Date(t.getTime()+p(t)+o));else{var i=Date.now();i>c?(c=i,s=new Date(c),n=c,l&&(s=new Date(c+p(s)+o))):n=c,t=s}return function e(t,n,i,r){for(var s="",a=null,c=!1,u=t.length,d=!1,p=0;p<u;p++){var g=t.charCodeAt(p);if(!0!==c)37!==g?s+=t[p]:c=!0;else{if(45===g){a="";continue}if(95===g){a=" ";continue}if(48===g){a="0";continue}if(58===g){d&&"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn("[WARNING] detected use of unsupported %:: or %::: modifiers to strftime"),d=!0;continue}switch(g){case 65:s+=i.days[n.getDay()];break;case 66:s+=i.months[n.getMonth()];break;case 67:s+=m(Math.floor(n.getFullYear()/100),a);break;case 68:s+=e(i.formats.D,n,i,r);break;case 70:s+=e(i.formats.F,n,i,r);break;case 72:s+=m(n.getHours(),a);break;case 73:s+=m(h(n.getHours()),a);break;case 76:s+=f(Math.floor(r%1e3));break;case 77:s+=m(n.getMinutes(),a);break;case 80:s+=n.getHours()<12?i.am:i.pm;break;case 82:s+=e(i.formats.R,n,i,r);break;case 83:s+=m(n.getSeconds(),a);break;case 84:s+=e(i.formats.T,n,i,r);break;case 85:s+=m(b(n,"sunday"),a);break;case 87:s+=m(b(n,"monday"),a);break;case 88:s+=e(i.formats.X,n,i,r);break;case 89:s+=n.getFullYear();break;case 90:if(l&&0===o)s+="GMT";else{var T=n.toString().match(/\(([\w\s]+)\)/);s+=T&&T[1]||""}break;case 97:s+=i.shortDays[n.getDay()];break;case 98:s+=i.shortMonths[n.getMonth()];break;case 99:s+=e(i.formats.c,n,i,r);break;case 100:s+=m(n.getDate(),a);break;case 101:s+=m(n.getDate(),null==a?" ":a);break;case 104:s+=i.shortMonths[n.getMonth()];break;case 106:var w=new Date(n.getFullYear(),0,1),k=Math.ceil((n.getTime()-w.getTime())/864e5);s+=f(k);break;case 107:s+=m(n.getHours(),null==a?" ":a);break;case 108:s+=m(h(n.getHours()),null==a?" ":a);break;case 109:s+=m(n.getMonth()+1,a);break;case 110:s+="\n";break;case 111:s+=String(n.getDate())+v(n.getDate());break;case 112:s+=n.getHours()<12?i.AM:i.PM;break;case 114:s+=e(i.formats.r,n,i,r);break;case 115:s+=Math.floor(r/1e3);break;case 116:s+="\t";break;case 117:k=n.getDay();s+=0===k?7:k;break;case 118:s+=e(i.formats.v,n,i,r);break;case 119:s+=n.getDay();break;case 120:s+=e(i.formats.x,n,i,r);break;case 121:s+=(""+n.getFullYear()).slice(2);break;case 122:if(l&&0===o)s+=d?"+00:00":"+0000";else{var y,I=(y=0!==o?o/6e4:-n.getTimezoneOffset())<0?"-":"+",O=d?":":"",E=Math.floor(Math.abs(y/60)),C=Math.abs(y%60);s+=I+m(E)+O+m(C)}break;default:s+=t[p]}a=null,c=!1}}return s}(e,t,a,n)};return u.localize=function(t){return new e(t||a,o,l)},u.timezone=function(t){var n=o,i=l,r=typeof t;"number"!==r&&"string"!==r||(i=!0,"string"===r?n=("-"===t[0]?-1:1)*(60*parseInt(t.slice(1,3),10)+parseInt(t.slice(3,5),10))*60*1e3:"number"===r&&(n=60*t*1e3));return new e(a,n,i)},u.utc=function(){return new e(a,o,!0)},u}(n,0,!1),r=void 0!==e;r?(t=e.exports=c).strftime=u:(t=function(){return this||(0,eval)("this")}()).strftime=c;var s=r?"require('strftime')":"strftime",a={};function o(e,t){a[e]||("undefined"!=typeof console&&"function"==typeof console.warn&&console.warn("[WARNING] "+e+" is deprecated and will be removed in version 1.0. Instead, use `"+t+"`."),a[e]=!0)}function l(e){e.localize=i.localize.bind(i),e.timezone=i.timezone.bind(i),e.utc=i.utc.bind(i)}function c(e,t,n){return t&&t.days&&(n=t,t=void 0),n&&o("`"+s+"(format, [date], [locale])`","var s = "+s+".localize(locale); s(format, [date])"),(n?i.localize(n):i)(e,t)}function u(e,t,n){return n?o("`"+s+".strftime(format, [date], [locale])`","var s = "+s+".localize(locale); s(format, [date])"):o("`"+s+".strftime(format, [date])`",s+"(format, [date])"),(n?i.localize(n):i)(e,t)}t.strftimeTZ=function(e,t,n,r){"number"!=typeof n&&"string"!=typeof n||null!=r||(r=n,n=void 0);n?o("`"+s+".strftimeTZ(format, date, locale, tz)`","var s = "+s+".localize(locale).timezone(tz); s(format, [date])` or `var s = "+s+".localize(locale); s.timezone(tz)(format, [date])"):o("`"+s+".strftimeTZ(format, date, tz)`","var s = "+s+".timezone(tz); s(format, [date])` or `"+s+".timezone(tz)(format, [date])");return(n?i.localize(n):i).timezone(r)(e,t)},t.strftimeUTC=function(e,t,n){n?o("`"+s+".strftimeUTC(format, date, locale)`","var s = "+s+".localize(locale).utc(); s(format, [date])"):o("`"+s+".strftimeUTC(format, [date])`","var s = "+s+".utc(); s(format, [date])");return(n?d.localize(n):d)(e,t)},t.localizedStrftime=function(e){return o("`"+s+".localizedStrftime(locale)`",s+".localize(locale)"),i.localize(e)},l(c),l(u);var d=i.utc();function m(e,t){return""===t||e>9?e:(null==t&&(t="0"),t+e)}function f(e){return e>99?e:e>9?"0"+e:"00"+e}function h(e){return 0===e?12:e>12?e-12:e}function b(e,t){t=t||"sunday";var n=e.getDay();"monday"===t&&(0===n?n=6:n--);var i=Date.UTC(e.getFullYear(),0,1),r=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),s=(Math.floor((r-i)/864e5)+7-n)/7;return Math.floor(s)}function v(e){var t=e%10,n=e%100;if(n>=11&&n<=13||0===t||t>=4)return"th";switch(t){case 1:return"st";case 2:return"nd";case 3:return"rd"}}function p(e){return 6e4*(e.getTimezoneOffset()||0)}"function"!=typeof Date.now&&(Date.now=function(){return+new Date})}()},1320:function(e,t,n){"use strict";(function(e){
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(){return(n=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var i=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},s="object"==typeof r&&r&&r.Object===Object&&r,a="object"==typeof self&&self&&self.Object===Object&&self,o=s||a||Function("return this")(),l=function(){return o.Date.now()},c=o.Symbol,u=Object.prototype,d=u.hasOwnProperty,m=u.toString,f=c?c.toStringTag:void 0;var h=function(e){var t=d.call(e,f),n=e[f];try{e[f]=void 0;var i=!0}catch(e){}var r=m.call(e);return i&&(t?e[f]=n:delete e[f]),r},b=Object.prototype.toString;var v=function(e){return b.call(e)},p=c?c.toStringTag:void 0;var g=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":p&&p in Object(e)?h(e):v(e)};var T=function(e){return null!=e&&"object"==typeof e};var w=function(e){return"symbol"==typeof e||T(e)&&"[object Symbol]"==g(e)},k=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,I=/^0b[01]+$/i,O=/^0o[0-7]+$/i,E=parseInt;var C=function(e){if("number"==typeof e)return e;if(w(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(k,"");var n=I.test(e);return n||O.test(e)?E(e.slice(2),n?2:8):y.test(e)?NaN:+e},M=Math.max,S=Math.min;var P=function(e,t,n){var r,s,a,o,c,u,d=0,m=!1,f=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=s;return r=s=void 0,d=t,o=e.apply(i,n)}function v(e){return d=e,c=setTimeout(g,t),m?b(e):o}function p(e){var n=e-u;return void 0===u||n>=t||n<0||f&&e-d>=a}function g(){var e=l();if(p(e))return T(e);c=setTimeout(g,function(e){var n=t-(e-u);return f?S(n,a-(e-d)):n}(e))}function T(e){return c=void 0,h&&r?b(e):(r=s=void 0,o)}function w(){var e=l(),n=p(e);if(r=arguments,s=this,u=e,n){if(void 0===c)return v(u);if(f)return c=setTimeout(g,t),b(u)}return void 0===c&&(c=setTimeout(g,t)),o}return t=C(t)||0,i(n)&&(m=!!n.leading,a=(f="maxWait"in n)?M(C(n.maxWait)||0,t):a,h="trailing"in n?!!n.trailing:h),w.cancel=function(){void 0!==c&&clearTimeout(c),d=0,r=u=s=c=void 0},w.flush=function(){return void 0===c?o:T(l())},w};var D=function(e,t,n){var r=!0,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(n)&&(r="leading"in n?!!n.leading:r,s="trailing"in n?!!n.trailing:s),P(e,t,{leading:r,maxWait:t,trailing:s})},j=["scroll","resize"],_=["wheel","keydown","keyup","mousedown","mousemove","touchstart","touchmove","click","contextmenu"],N=function(){function e(e){var t=e.timeIntervalEllapsedCallbacks,i=void 0===t?[]:t,r=e.absoluteTimeEllapsedCallbacks,s=void 0===r?[]:r,a=e.checkCallbacksIntervalMs,o=void 0===a?100:a,l=e.browserTabInactiveCallbacks,c=void 0===l?[]:l,u=e.idleCallbacks,d=void 0===u?[]:u,m=e.stopTimerOnTabchange,f=void 0===m||m,h=e.activeCallbacks,b=void 0===h?[]:h,v=e.browserTabActiveCallbacks,p=void 0===v?[]:v,g=e.idleTimeoutMs,T=void 0===g?3e3:g,w=this;this.onBrowserTabInactive=function(){w.isRunning()&&w.stopTimerOnTabchange&&w.stopTimer(),w.browserTabInactiveCallbacks.forEach((function(e){return e(w.getTimeInMilliseconds())}))},this.onBrowserTabActive=function(){w.isRunning()||w.startTimer(),w.browserTabActiveCallbacks.forEach((function(e){return e(w.getTimeInMilliseconds())}))},this.onBrowserActiveChange=function(){"visible"===document.visibilityState?w.onBrowserTabActive():w.onBrowserTabInactive()},this.onTimePassed=function(){w.absoluteTimeEllapsedCallbacks.forEach((function(e,t){var n=e.callback,i=e.pending,r=e.timeInMilliseconds;i&&r<=w.getTimeInMilliseconds()&&(n(w.getTimeInMilliseconds()),w.absoluteTimeEllapsedCallbacks[t].pending=!1)})),w.timeIntervalEllapsedCallbacks.forEach((function(e,t){var n=e.callback,i=e.timeInMilliseconds,r=e.multiplier;i<=w.getTimeInMilliseconds()&&(n(w.getTimeInMilliseconds()),w.timeIntervalEllapsedCallbacks[t].timeInMilliseconds=r(i))})),w.currentIdleTimeMs>=w.idleTimeoutMs&&w.isRunning()?(w.idle=!0,w.stopTimer(),w.idleCallbacks.forEach((function(e){return e(w.getTimeInMilliseconds())}))):w.currentIdleTimeMs+=w.checkCallbacksIntervalMs},this.resetIdleTime=function(){w.idle&&w.startTimer(),w.activeCallbacks.forEach((function(e){return e(w.getTimeInMilliseconds())})),w.idle=!1,w.currentIdleTimeMs=0},this.registerEventListeners=function(){var e={passive:!0},t=n({},e,{capture:!0});document.addEventListener("visibilitychange",w.onBrowserActiveChange);var i=D(w.resetIdleTime,2e3,{leading:!0,trailing:!1});j.forEach((function(e){window.addEventListener(e,i,t)})),_.forEach((function(t){return document.addEventListener(t,i,e)}))},this.unregisterEventListeners=function(){document.removeEventListener("visibilitychange",w.onBrowserActiveChange),j.forEach((function(e){return window.removeEventListener(e,w.resetIdleTime)})),_.forEach((function(e){return document.removeEventListener(e,w.resetIdleTime)}))},this.checkCallbacksOnInterval=function(){w.checkCallbackIntervalId=window.setInterval((function(){w.onTimePassed()}),w.checkCallbacksIntervalMs)},this.startTimer=function(){w.checkCallbackIntervalId||w.checkCallbacksOnInterval();var e=w.times[w.times.length-1];e&&null===e.stop||(w.times.push({start:performance.now(),stop:null}),w.running=!0)},this.stopTimer=function(){w.times.length&&(w.times[w.times.length-1].stop=performance.now(),w.running=!1)},this.addTimeIntervalEllapsedCallback=function(e){w.timeIntervalEllapsedCallbacks.push(e)},this.addAbsoluteTimeEllapsedCallback=function(e){w.absoluteTimeEllapsedCallbacks.push(e)},this.addBrowserTabInactiveCallback=function(e){w.browserTabInactiveCallbacks.push(e)},this.addBrowserTabActiveCallback=function(e){w.browserTabActiveCallbacks.push(e)},this.addIdleCallback=function(e){w.idleCallbacks.push(e)},this.addActiveCallback=function(e){w.activeCallbacks.push(e)},this.getTimeInMilliseconds=function(){return w.times.reduce((function(e,t){return t.stop?e+=t.stop-t.start:e+=performance.now()-t.start,e}),0)},this.isRunning=function(){return w.running},this.isIdle=function(){return w.idle},this.reset=function(){w.times=[]},this.destroy=function(){w.unregisterEventListeners(),w.checkCallbackIntervalId&&window.clearInterval(w.checkCallbackIntervalId)},this.running=!1,this.times=[],this.idle=!1,this.currentIdleTimeMs=0,this.marks={},this.measures={},this.stopTimerOnTabchange=f,this.browserTabActiveCallbacks=p,this.browserTabInactiveCallbacks=c,this.checkCallbacksIntervalMs=o,this.idleTimeoutMs=T,this.timeIntervalEllapsedCallbacks=i,this.absoluteTimeEllapsedCallbacks=s,this.idleCallbacks=d,this.activeCallbacks=b,this.registerEventListeners()}return e.prototype.mark=function(e){this.marks[e]||(this.marks[e]=[]),this.marks[e].push({time:this.getTimeInMilliseconds()})},e.prototype.getMarks=function(e){if(!(this.marks[e].length<1))return this.marks[e]},e.prototype.measure=function(e,t,n){var i=this.marks[t],r=i[i.length-1],s=this.marks[n],a=s[s.length-1];this.measures[e]||(this.measures[e]=[]),this.measures[e].push({name:e,startTime:r.time,duration:a.time-r.time})},e.prototype.getMeasures=function(e){if(this.measures[e]||!(this.measures[e].length<1))return this.measures[e]},e}();t.a=N}).call(this,n(202))},1880:function(e,t,n){n(1881),e.exports=n(330)},1881:function(e,t,n){"use strict";n.r(t);n(137),n(419),n(327);var i=n(505),r=n.n(i),s=n(1317),a=n.n(s),o=n(95),l=n.n(o),c=n(902),u=n.n(c),d=n(669);void 0!==window.awc_resolve&&null!==window.awc_resolve||(window.awc=new Promise((function(e,t){window.awc_resolve=e}))),window.awc_resolve(d),Object.assign(window,{Bloodhound:r.a,Strftime:a.a,_:l.a,typeahead:u.a})},393:function(e,t,n){var i;(()=>{((n,r)=>{if(e.exports)return e.exports=r();void 0===(i=(()=>n.TimeMe=r()).apply(t,[]))||(e.exports=i)})(this,()=>{let e={startStopTimes:{},idleTimeoutMs:3e4,currentIdleTimeMs:0,checkIdleStateRateMs:250,isUserCurrentlyOnPage:!0,isUserCurrentlyIdle:!1,currentPageName:"default-page-name",timeElapsedCallbacks:[],userLeftCallbacks:[],userReturnCallbacks:[],trackTimeOnElement:t=>{let n=document.getElementById(t);n&&(n.addEventListener("mouseover",()=>{e.startTimer(t)}),n.addEventListener("mousemove",()=>{e.startTimer(t)}),n.addEventListener("mouseleave",()=>{e.stopTimer(t)}),n.addEventListener("keypress",()=>{e.startTimer(t)}),n.addEventListener("focus",()=>{e.startTimer(t)}))},getTimeOnElementInSeconds:t=>{let n=e.getTimeOnPageInSeconds(t);return n||0},startTimer:(t,n)=>{if(t||(t=e.currentPageName),void 0===e.startStopTimes[t])e.startStopTimes[t]=[];else{let n=e.startStopTimes[t],i=n[n.length-1];if(void 0!==i&&void 0===i.stopTime)return}e.startStopTimes[t].push({startTime:n||new Date,stopTime:void 0})},stopAllTimers:()=>{let t=Object.keys(e.startStopTimes);for(let n=0;n<t.length;n++)e.stopTimer(t[n])},stopTimer:(t,n)=>{t||(t=e.currentPageName);let i=e.startStopTimes[t];void 0!==i&&0!==i.length&&void 0===i[i.length-1].stopTime&&(i[i.length-1].stopTime=n||new Date)},getTimeOnCurrentPageInSeconds:()=>e.getTimeOnPageInSeconds(e.currentPageName),getTimeOnPageInSeconds:t=>{let n=e.getTimeOnPageInMilliseconds(t);return void 0===n?void 0:n/1e3},getTimeOnCurrentPageInMilliseconds:()=>e.getTimeOnPageInMilliseconds(e.currentPageName),getTimeOnPageInMilliseconds:t=>{let n=0,i=e.startStopTimes[t];if(void 0===i)return;let r=0;for(let e=0;e<i.length;e++){let t=i[e].startTime,n=i[e].stopTime;void 0===n&&(n=new Date),r+=n-t}return n=Number(r),n},getTimeOnAllPagesInSeconds:()=>{let t=[],n=Object.keys(e.startStopTimes);for(let i=0;i<n.length;i++){let r=n[i],s=e.getTimeOnPageInSeconds(r);t.push({pageName:r,timeOnPage:s})}return t},setIdleDurationInSeconds:t=>{let n=parseFloat(t);if(!1!==isNaN(n))throw{name:"InvalidDurationException",message:"An invalid duration time ("+t+") was provided."};e.idleTimeoutMs=1e3*t},setCurrentPageName:t=>{e.currentPageName=t},resetRecordedPageTime:t=>{delete e.startStopTimes[t]},resetAllRecordedPageTimes:()=>{let t=Object.keys(e.startStopTimes);for(let n=0;n<t.length;n++)e.resetRecordedPageTime(t[n])},userActivityDetected:()=>{e.isUserCurrentlyIdle&&e.triggerUserHasReturned(),e.resetIdleCountdown()},resetIdleCountdown:()=>{e.isUserCurrentlyIdle=!1,e.currentIdleTimeMs=0},callWhenUserLeaves:(t,n)=>{e.userLeftCallbacks.push({callback:t,numberOfTimesToInvoke:n})},callWhenUserReturns:(t,n)=>{e.userReturnCallbacks.push({callback:t,numberOfTimesToInvoke:n})},triggerUserHasReturned:()=>{if(!e.isUserCurrentlyOnPage){e.isUserCurrentlyOnPage=!0,e.resetIdleCountdown();for(let t=0;t<e.userReturnCallbacks.length;t++){let n=e.userReturnCallbacks[t],i=n.numberOfTimesToInvoke;(isNaN(i)||void 0===i||i>0)&&(n.numberOfTimesToInvoke-=1,n.callback())}}e.startTimer()},triggerUserHasLeftPageOrGoneIdle:()=>{if(e.isUserCurrentlyOnPage){e.isUserCurrentlyOnPage=!1;for(let t=0;t<e.userLeftCallbacks.length;t++){let n=e.userLeftCallbacks[t],i=n.numberOfTimesToInvoke;(isNaN(i)||void 0===i||i>0)&&(n.numberOfTimesToInvoke-=1,n.callback())}}e.stopAllTimers()},callAfterTimeElapsedInSeconds:(t,n)=>{e.timeElapsedCallbacks.push({timeInSeconds:t,callback:n,pending:!0})},checkIdleState:()=>{for(let t=0;t<e.timeElapsedCallbacks.length;t++)e.timeElapsedCallbacks[t].pending&&e.getTimeOnCurrentPageInSeconds()>e.timeElapsedCallbacks[t].timeInSeconds&&(e.timeElapsedCallbacks[t].callback(),e.timeElapsedCallbacks[t].pending=!1);!1===e.isUserCurrentlyIdle&&e.currentIdleTimeMs>e.idleTimeoutMs?(e.isUserCurrentlyIdle=!0,e.triggerUserHasLeftPageOrGoneIdle()):e.currentIdleTimeMs+=e.checkIdleStateRateMs},visibilityChangeEventName:void 0,hiddenPropName:void 0,listenForVisibilityEvents:(t,n)=>{t&&e.listenForUserLeavesOrReturnsEvents(),n&&e.listForIdleEvents()},listenForUserLeavesOrReturnsEvents:()=>{void 0!==document.hidden?(e.hiddenPropName="hidden",e.visibilityChangeEventName="visibilitychange"):void 0!==document.mozHidden?(e.hiddenPropName="mozHidden",e.visibilityChangeEventName="mozvisibilitychange"):void 0!==document.msHidden?(e.hiddenPropName="msHidden",e.visibilityChangeEventName="msvisibilitychange"):void 0!==document.webkitHidden&&(e.hiddenPropName="webkitHidden",e.visibilityChangeEventName="webkitvisibilitychange"),document.addEventListener(e.visibilityChangeEventName,()=>{document[e.hiddenPropName]?e.triggerUserHasLeftPageOrGoneIdle():e.triggerUserHasReturned()},!1),window.addEventListener("blur",()=>{e.triggerUserHasLeftPageOrGoneIdle()}),window.addEventListener("focus",()=>{e.triggerUserHasReturned()})},listForIdleEvents:()=>{document.addEventListener("mousemove",()=>{e.userActivityDetected()}),document.addEventListener("keyup",()=>{e.userActivityDetected()}),document.addEventListener("touchstart",()=>{e.userActivityDetected()}),window.addEventListener("scroll",()=>{e.userActivityDetected()}),setInterval(()=>{!0!==e.isUserCurrentlyIdle&&e.checkIdleState()},e.checkIdleStateRateMs)},websocket:void 0,websocketHost:void 0,setUpWebsocket:t=>{if(window.WebSocket&&t){let n=t.websocketHost;try{e.websocket=new WebSocket(n),window.onbeforeunload=()=>{e.sendCurrentTime(t.appId)},e.websocket.onopen=()=>{e.sendInitWsRequest(t.appId)},e.websocket.onerror=e=>{console&&console.log("Error occurred in websocket connection: "+e)},e.websocket.onmessage=e=>{console&&console.log(e.data)}}catch(e){console&&console.error("Failed to connect to websocket host.  Error:"+e)}}},websocketSend:t=>{e.websocket.send(JSON.stringify(t))},sendCurrentTime:t=>{let n={type:"INSERT_TIME",appId:t,timeOnPageMs:e.getTimeOnCurrentPageInMilliseconds(),pageName:e.currentPageName};e.websocketSend(n)},sendInitWsRequest:t=>{let n={type:"INIT",appId:t};e.websocketSend(n)},initialize:t=>{let n=e.idleTimeoutMs||30,i=e.currentPageName||"default-page-name",r=void 0,s=void 0,a=!0,o=!0;t&&(n=t.idleTimeoutInSeconds||n,i=t.currentPageName||i,r=t.websocketOptions,s=t.initialStartTime,!1===t.trackWhenUserLeavesPage&&(a=!1),!1===t.trackWhenUserGoesIdle&&(o=!1)),e.setIdleDurationInSeconds(n),e.setCurrentPageName(i),e.setUpWebsocket(r),e.listenForVisibilityEvents(a,o),e.startTimer(void 0,s)}};return e})}).call(this)},61:function(e,t){e.exports=jQuery},669:function(e,t,n){"use strict";n.r(t);var i=n(894),r=n(39),s=n(2),a=n.n(s),o=n(393),l=n.n(o),c=n(184);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const m={initialPollInterval:5,pollBackoffRate:2,idleTimeout:30};class f{constructor(e,t,n,i){if(a()(this,"timeMeInitialized",!1),a()(this,"start",()=>{if(this.timeMeInitialized)throw new Error("DwellTimeHelper should only be initialised once per page load.");this.timeMeInitialized=!0,this._initDwellTimeCounterAndPolling(),"undefined"!=typeof window&&window.addEventListener("beforeunload",()=>{this.stop()})}),a()(this,"stop",()=>{l.a.isUserCurrentlyOnPage&&this._sendDwellEvent(this._eventData,this._searchSessionId,!0),l.a.stopAllTimers(),l.a.resetAllRecordedPageTimes(),l.a.timeElapsedCallbacks=[],this.timeMeInitialized=!1}),a()(this,"newPage",(e,t)=>{Object(c.e)(e),this.stop(),this._eventData=e,this._searchSessionId=t,this._initDwellTimeCounterAndPolling()}),a()(this,"_initDwellTimeCounterAndPolling",()=>{l.a.initialize({idleTimeoutInSeconds:this._timing.idleTimeout}),this._pollDwellTime(this._timing.initialPollInterval,this._searchSessionId,this._eventData)}),a()(this,"_pollDwellTime",(e,t,n)=>{l.a.callAfterTimeElapsedInSeconds(e,()=>{this._sendDwellEvent(n,t,!1),this._pollDwellTime(e*this._timing.pollBackoffRate,t,n)})}),a()(this,"_sendDwellEvent",(e,t,n)=>{const i={dwellTime:l.a.getTimeOnCurrentPageInMilliseconds(),searchReferrer:t,finalDwellEvent:n};this._trackCallback({action:"dwelled",actionSubject:e.actionSubject,actionSubjectId:e.actionSubjectId,source:e.source,containerType:e.containerType,containerId:e.containerId,containers:e.containers,objectType:e.objectType,objectId:e.objectId,attributes:d(d({},i),e.attributes),tags:e.tags})}),!e)throw new Error("trackCallback is required for DwellTimeHelper");Object(c.e)(t),this._trackCallback=e,this._eventData=t,this._searchSessionId=n,this._timing=d(d({},m),i)}}var h=n(1320);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const p={initialPollInterval:5e3,idleTimeout:3e4,multiplierCallback:e=>e+e};class g{constructor(e,t,n,i){if(a()(this,"start",()=>{this.browserInteractionTime.startTimer(),this.browserInteractionTime.addTimeIntervalEllapsedCallback({callback:e=>this._sendDwellEvent(this._eventData,this._searchSessionId,e,!1),timeInMilliseconds:this._timing.initialPollInterval,multiplier:this._timing.multiplierCallback}),"undefined"!=typeof window&&window.addEventListener("beforeunload",this._onBeforeUnload)}),a()(this,"stop",()=>{this.browserInteractionTime.isRunning()&&this._sendDwellEvent(this._eventData,this._searchSessionId,this.browserInteractionTime.getTimeInMilliseconds(),!0),this.browserInteractionTime.stopTimer()}),a()(this,"newPage",(e,t)=>{Object(c.e)(e),this.stop(),this.browserInteractionTime.reset(),this.setEventData(e),this.setSearchSessionId(t),this.start()}),a()(this,"setEventData",e=>{this._eventData=e}),a()(this,"getEventData",()=>this._eventData),a()(this,"setSearchSessionId",e=>{this._searchSessionId=e}),a()(this,"getSearchSessionId",()=>this._searchSessionId),a()(this,"destroy",()=>{this.browserInteractionTime.destroy(),"undefined"!=typeof window&&window.removeEventListener("beforeunload",this._onBeforeUnload)}),a()(this,"_onBeforeUnload",()=>{this.stop(),this.destroy()}),a()(this,"_sendDwellEvent",(e,t,n,i)=>{const r={dwellTime:n,searchReferrer:t,finalDwellEvent:i};this._trackCallback({action:"dwelled",actionSubject:e.actionSubject,actionSubjectId:e.actionSubjectId,source:e.source,containerType:e.containerType,containerId:e.containerId,objectType:e.objectType,objectId:e.objectId,attributes:v(v({},r),e.attributes),tags:e.tags})}),!e)throw new Error("trackCallback is required for DwellTimeHelper");Object(c.e)(t),this._trackCallback=e,this._eventData=t,this._searchSessionId=n,this._timing=v(v({},p),i),this.browserInteractionTime=new h.a({idleTimeoutMs:this._timing.idleTimeout,checkCallbacksIntervalMs:500})}}var T=n(1319),w=n(933),k=n(265);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){const i=I({action:e},n);return i.attributes=I(I({},t),i.attributes),i}class E{constructor(e,t){this._onEvent=e,this._baseEvent=t,this._searchStartedTime=null,this._lastQueryResultsTime=null,this._queryLength=null,this._baseEvent=I({},t)}search(e){if(!e&&""!==e)throw new Error("Missing query param");this._searchStartedTime=Date.now(),this._queryLength=(e||"").length}searched(e){if(!e)throw new Error("Missing results param");if(null===this._queryLength)throw new Error("search() must be called before searched().");const t=Date.now()-this._searchStartedTime;this._lastQueryResultsTime=Date.now(),this._lastResults=e;const n=O("searched",{responseTimeMs:t,queryLength:this._queryLength,results:e},this._baseEvent);this._onEvent(n)}selected(e){if(!e&&0!==e)throw new Error("Missing selectionIndex param");if(!this._lastQueryResultsTime)throw new Error("searched() must be called before selected().");const t=Date.now(),n=t-this._lastQueryResultsTime,i=t-this._searchStartedTime,r=this._lastResults[e],s=O("selected",{queryLength:this._queryLength,selectionIndex:e,selectionTimeMs:n,searchTimeMs:i,selectedResultValue:r},this._baseEvent);this._onEvent(s)}}n.d(t,"default",(function(){return i.b})),n.d(t,"apdexType",(function(){return r.b})),n.d(t,"envType",(function(){return r.e})),n.d(t,"eventType",(function(){return r.f})),n.d(t,"originType",(function(){return r.k})),n.d(t,"platformType",(function(){return r.m})),n.d(t,"tenantType",(function(){return r.n})),n.d(t,"userType",(function(){return r.o})),n.d(t,"originTracingType",(function(){return r.j})),n.d(t,"TypeAheadHelper",(function(){return E})),n.d(t,"DwellTimeHelper",(function(){return f})),n.d(t,"DwellTimeHelperWithBrowserInteraction",(function(){return g})),n.d(t,"CompressionRule",(function(){return T.a})),n.d(t,"ResilienceMechanism",(function(){return k.b})),n.d(t,"StopLowPriorityEventDelayReason",(function(){return w.a})),n.d(t,"STARGATE_PROXY_PATH",(function(){return i.a})),n.d(t,"perimeterType",(function(){return r.l})),n.d(t,"aliasType",(function(){return r.a})),n.d(t,"groupType",(function(){return r.g}))}},[[1880,1,0]]]);
//# sourceMappingURL=globals-e210e20152b3a9d16796.chunk.js.map