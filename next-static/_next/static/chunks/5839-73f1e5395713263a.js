(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5839],{48251:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,a){var r=o(73275).normalizeLocalePath,l=o(86331).detectDomainLocale,u=t||r(e,n).detectedLocale,c=l(a,void 0,u);if(c){var f="http".concat(c.http?"":"s","://"),i=u===c.defaultLocale?"":"/".concat(u);return"".concat(f).concat(c.domain).concat("").concat(i).concat(e)}return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},71928:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(30553).Z;o(12359).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(57022).Z,r=o(5997).Z,l=a(o(50959)),u=o(47957),c=o(41256),f=o(50698),i=o(90502),s=o(37683),d=o(48251),p=o(75183),v={};function y(e,t,o,n){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,o,n)).catch(function(e){});var a=n&&void 0!==n.locale?n.locale:e&&e.locale;v[t+"%"+o+(a?"%"+a:"")]=!0}}var h=l.default.forwardRef(function(e,t){var o,a,h=e.href,b=e.as,_=e.children,m=e.prefetch,C=e.passHref,g=e.replace,L=e.shallow,M=e.scroll,x=e.locale,j=e.onClick,O=e.onMouseEnter,P=e.onTouchStart,R=e.legacyBehavior,E=void 0===R?!0!==Boolean(!1):R,k=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=_,E&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));var w=!1!==m,T=l.default.useContext(f.RouterContext),I=l.default.useContext(i.AppRouterContext);I&&(T=I);var S=l.default.useMemo(function(){var e=n(u.resolveHref(T,h,!0),2),t=e[0],o=e[1];return{href:t,as:b?u.resolveHref(T,b):o||t}},[T,h,b]),U=S.href,z=S.as,B=l.default.useRef(U),D=l.default.useRef(z);E&&(a=l.default.Children.only(o));var N=E?a&&"object"==typeof a&&a.ref:t,Z=n(s.useIntersection({rootMargin:"200px"}),3),A=Z[0],H=Z[1],K=Z[2],G=l.default.useCallback(function(e){(D.current!==z||B.current!==U)&&(K(),D.current=z,B.current=U),A(e),N&&("function"==typeof N?N(e):"object"==typeof N&&(N.current=e))},[z,N,U,K,A]);l.default.useEffect(function(){var e=H&&w&&u.isLocalURL(U),t=void 0!==x?x:T&&T.locale,o=v[U+"%"+z+(t?"%"+t:"")];e&&!o&&y(T,U,z,{locale:t})},[z,U,H,x,w,T]);var q={ref:G,onClick:function(e){E||"function"!=typeof j||j(e),E&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||function(e,t,o,n,a,r,c,f,i,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&u.isLocalURL(o)){e.preventDefault();var d,p,v=function(){"beforePopState"in t?t[a?"replace":"push"](o,n,{shallow:r,locale:f,scroll:c}):t[a?"replace":"push"](o,{forceOptimisticNavigation:!s})};i?l.default.startTransition(v):v()}}(e,T,U,z,g,L,M,x,Boolean(I),w)},onMouseEnter:function(e){E||"function"!=typeof O||O(e),E&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),!(!w&&I)&&u.isLocalURL(U)&&y(T,U,z,{priority:!0})},onTouchStart:function(e){E||"function"!=typeof P||P(e),E&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),!(!w&&I)&&u.isLocalURL(U)&&y(T,U,z,{priority:!0})}};if(!E||C||"a"===a.type&&!("href"in a.props)){var F=void 0!==x?x:T&&T.locale,J=T&&T.isLocaleDomain&&d.getDomainLocale(z,F,T.locales,T.domainLocales);q.href=J||p.addBasePath(c.addLocale(z,F,T&&T.defaultLocale))}return E?l.default.cloneElement(a,q):l.default.createElement("a",Object.assign({},k,q),o)});t.default=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},73275:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeLocalePath=void 0;var n=function(e,t){return o(41784).normalizeLocalePath(e,t)};t.normalizeLocalePath=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},37683:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(30553).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,f=e.disabled||!l,i=n(a.useState(!1),2),s=i[0],d=i[1],p=n(a.useState(null),2),v=p[0],y=p[1];return a.useEffect(function(){if(l){if(!f&&!s&&v&&v.tagName){var e,n,a,i,p,y,h;return n=function(e){return e&&d(e)},p=(i=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===o.root&&e.margin===o.margin});if(n&&(t=u.get(n)))return t;var a=new Map;return t={id:o,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=a.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e),elements:a},c.push(o),u.set(o,t),t}(a={root:null==t?void 0:t.current,rootMargin:o})).id,y=i.observer,(h=i.elements).set(v,n),y.observe(v),function(){if(h.delete(v),y.unobserve(v),0===h.size){y.disconnect(),u.delete(p);var e=c.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});e>-1&&c.splice(e,1)}}}}else if(!s){var b=r.requestIdleCallback(function(){return d(!0)});return function(){return r.cancelIdleCallback(b)}}},[v,f,o,t,s]),[y,s,a.useCallback(function(){d(!1)},[])]};var a=o(50959),r=o(57514),l="function"==typeof IntersectionObserver,u=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},90502:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(57022).Z)(o(50959)),a=n.default.createContext(null);t.AppRouterContext=a;var r=n.default.createContext(null);t.LayoutRouterContext=r;var l=n.default.createContext(null);t.GlobalLayoutRouterContext=l;var u=n.default.createContext(null);t.TemplateContext=u},65839:function(e,t,o){e.exports=o(71928)}}]);
//# sourceMappingURL=5839-73f1e5395713263a.js.map