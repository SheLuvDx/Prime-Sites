(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2176],{28635:function(e,t,n){"use strict";n.d(t,{Ad:function(){return Ad}});var r=n(21482),s=n(50997),l=n(6665),i=n(70592),c=n.n(i),d=n(3487),f=n.n(d),w={src:"https://ui-statics-cf.streamable.com/player/_next/static/media/streamable-logo-icon.5ac5aaf3.svg",height:30,width:30,blurWidth:0,blurHeight:0};n(34430);var m={src:"https://ui-statics-cf.streamable.com/player/_next/static/media/splash.45e817a5.svg",height:23,width:19,blurWidth:0,blurHeight:0},x={src:"https://ui-statics-cf.streamable.com/player/_next/static/media/streamable-logo-text.5afb04de.svg",height:30,width:124,blurWidth:0,blurHeight:0};let Ad=e=>{let{isOwner:t,mediaType:n}=e,i=(0,l.$G)();if(t)return(0,r.jsxs)("div",{className:"w-10/12 max-w-[45.5rem] h-12 min-[600px]:h-[5.5rem] text-label-primary text-sm text-center font-sans flex items-center justify-center gap-2 border border-gray-300 border-opacity-38",children:[(0,r.jsx)("span",{className:"hidden md:block",children:i("collection"===n?"collection.ads-will-appear":"player.ads-will-appear")}),(0,r.jsx)(f(),{className:"text-blue-700",href:"".concat(s.k.WEB_APP,"/pricing"),children:i("collection.upgrade-now-remove-ads")})]});let d="collection"===n?"page-collection-ad":"page-video-ad",p="".concat(s.k.WEB_APP,"?src_internal=").concat(d);return(0,r.jsxs)(f(),{href:p,className:"gradient w-10/12 max-w-[45.5rem] flex justify-between items-center px-8 py-7 max-[710px]:justify-center max-[600px]:p-2 max-[600px]:w-[300px] max-[600px]:justify-normal",children:[(0,r.jsxs)("div",{className:"flex gap-3 max-[600px]:gap-1",children:[(0,r.jsxs)("div",{className:"flex gap-1",children:[(0,r.jsx)(c(),{className:"scale-75",alt:"Logo Icon",src:w}),(0,r.jsx)(c(),{className:"max-[710px]:hidden",alt:"Logo Text",src:x})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("span",{className:"fade-in text-white text-2xl whitespace-nowrap font-medium tracking-wider leading-8 max-[600px]:text-md",children:i("common.hosting-made-easy")}),(0,r.jsx)(c(),{className:"splash absolute -top-2 -right-5 max-[600px]:-top-1",alt:"Splash",src:m})]})]}),(0,r.jsx)("button",{className:"fade-in bg-blue-600 hover:bg-[#5367ff] text-white font-sans py-1.5 px-4 rounded max-[870px]:hidden h-9 -mt-1 relative top-0.5",children:i("common.get-started")})]})}},97439:function(e,t,n){"use strict";n.d(t,{$:function(){return Footer}});var r=n(21482),s=n(56696),l=n(6665),i=n(3487),c=n.n(i),d=n(50997);let f=[{translationKey:"links.privacy",href:s.zO.PRIVACY},{translationKey:"links.terms",href:s.zO.TERMS},{translationKey:"links.guidelines",href:s.zO.COMMUNITY_GUIDELINES},{translationKey:"links.support",href:s.zO.SUPPORT},{translationKey:"links.report",href:e=>"".concat(s.zO.CHECKSTEP_REPORT,"?content_id=").concat(e)}],w=[{translationKey:"links.free-hosting"},{translationKey:"links.upload-video",slug:"tools/upload-video"},{translationKey:"links.clip",slug:"tools/clipper"},{translationKey:"links.trim",slug:"tools/trim-video"},{translationKey:"links.rotate",slug:"tools/rotate-video"},{translationKey:"links.mute",slug:"tools/mute-video"},{translationKey:"links.crop",slug:"tools/crop-video"},{translationKey:"links.compress",slug:"tools/compress-video"},{translationKey:"links.embed",slug:"tools/embed-video"}],generateMarketingLinks=e=>w.map(t=>({translationKey:t.translationKey,href:"".concat(d.k.WEB_APP,"/").concat(t.slug||"","?").concat(e)})),generateAllLinks=(e,t)=>[...generateMarketingLinks(t),{translationKey:"links.livestream",href:"".concat(s.zO.STREAMYARD,"?src_internal=").concat(e)},{translationKey:"links.podcast",href:"".concat(s.zO.STREAMYARD,"/podcasting?src_internal=").concat(e)},...f],HopinLogo=e=>{let{className:t=""}=e;return(0,r.jsxs)("svg",{width:"36",height:"20",viewBox:"0 0 36 20",xmlns:"http://www.w3.org/2000/svg",className:t,children:[(0,r.jsx)("path",{d:"M0 15.0873V4.5H1.91728V8.9087H1.90362C2.47882 7.64841 3.35538 7.22376 4.28568 7.22376C5.68279 7.22376 6.95636 8.18259 6.95636 10.265V15.0873H5.04V11.1143C5.04 10.1006 4.77982 9.05942 3.6019 9.05942C2.69801 9.05942 1.91728 9.68966 1.91728 11.1419V15.0873H0Z"}),(0,r.jsx)("path",{d:"M7.84766 11.2786C7.84766 8.90857 9.46376 7.22363 11.7921 7.22363C14.1204 7.22363 15.7354 8.90839 15.7354 11.2786C15.7354 13.6625 14.1193 15.3201 11.7912 15.3201C9.46303 15.3201 7.84766 13.6623 7.84766 11.2786ZM13.7369 11.2786C13.7369 9.96346 12.9429 9.0593 11.7921 9.0593C10.6413 9.0593 9.83271 9.97694 9.83271 11.2786C9.83271 12.5664 10.6408 13.4842 11.7912 13.4842C12.9416 13.4842 13.736 12.5662 13.736 11.2786H13.7369Z"}),(0,r.jsx)("path",{d:"M16.6826 17.4999V7.4427H18.5726V9.04563C19.2438 7.63462 20.0792 7.22363 21.0654 7.22363C23.1471 7.22363 24.3935 9.03196 24.3935 11.2376C24.3935 13.7994 22.7362 15.3197 20.9284 15.3197C19.8465 15.3197 19.0248 14.7854 18.6003 13.6758V17.4993L16.6826 17.4999ZM22.4069 11.2786C22.4069 9.97713 21.5989 9.0593 20.4897 9.0593C19.3804 9.0593 18.5589 9.97713 18.5589 11.2788C18.5589 12.5805 19.3806 13.4844 20.49 13.4844C21.6131 13.4842 22.4073 12.5533 22.4073 11.2788L22.4069 11.2786Z"}),(0,r.jsx)("path",{d:"M28.478 15.0872V7.4427H30.368V8.90857C30.9432 7.64828 31.8334 7.22363 32.7646 7.22363C34.1754 7.22363 35.4353 8.18247 35.4353 10.2649V15.0872H33.5178V11.1142C33.5178 10.1005 33.2577 9.0593 32.0799 9.0593C31.1751 9.0593 30.3953 9.68953 30.3953 11.1417V15.0872H28.478Z"}),(0,r.jsx)("path",{d:"M25.3662 15.0869V7.44238H27.2835V15.0869H25.3662Z"}),(0,r.jsx)("path",{d:"M25.1255 5.67255C25.1255 5.02606 25.651 4.5 26.3248 4.5C26.985 4.5 27.5107 5.0255 27.5107 5.67255C27.5107 6.31959 26.985 6.84584 26.3248 6.84584C25.651 6.84584 25.1255 6.31959 25.1255 5.67255Z"})]})},Footer=e=>{let{isWhiteLabel:t,shortcode:n,srcInternal:i,marketingSlug:d}=e,w=(0,l.$G)(),m=t?f:generateAllLinks(i,d),x=m.map(e=>({title:w(e.translationKey),href:e.href}));return(0,r.jsxs)("footer",{className:"flex justify-center flex-wrap gap-3 px-4 pt-4 pb-20",children:[x.map((e,t)=>(0,r.jsx)(c(),{className:"text-sans text-sm leading-5 whitespace-nowrap opacity-64 hover:opacity-90 dark:text-gray-300 text-label-primary",href:"string"==typeof e.href?e.href:e.href(n),prefetch:!1,children:e.title},t)),!t&&(0,r.jsx)(c(),{className:"text-sans text-sm leading-5 whitespace-nowrap opacity-64 hover:opacity-90 dark:text-gray-300 text-label-primary",href:"".concat(s.zO.HOPIN,"?src_internal=").concat(i),prefetch:!1,children:(0,r.jsxs)("span",{className:"flex gap-1",children:["A ",(0,r.jsx)(HopinLogo,{className:"dark:fill-gray-300 fill-label-primary"})," ","company"]})})]})}},16537:function(e,t,n){"use strict";n.d(t,{_:function(){return VideoInfo}});var r=n(21482),s=n(66512),l=n(42634),i=n(22877),c=n(82353);let VideoInfo=e=>{let{title:t,plays:n,date_added:d,hide_view_count:f}=e,w=(0,i.b)(),m=(0,l.Y)(),x=t||d&&(0,c.Z)(new Date(1e3*d),{addSuffix:!0});return(0,r.jsxs)("div",{className:"flex flex-col flex-no-wrap w-full max-w-[64rem] justify-between text-left",children:[x&&(0,r.jsx)("h1",{className:"text-xl text-label-primary font-semibold m-0 break-all",children:w&&!m?'Watching "'.concat(x,'" on Streamable'):x}),!f&&(0,r.jsx)(s.x,{plays:null!=n?n:0})]})}},66118:function(e,t,n){"use strict";n.d(t,{L:function(){return VideoPlayerContainer}});var r=n(21482),s=n(45442),l=n(87547),i=n(42634),c=n(22877),d=n(37993),f=n.n(d),w=n(18946);let VideoPlayerContainer=e=>{var t,n,d,m;let{children:x,className:p,...h}=e,g=(0,i.Y)(),b=(0,c.b)(),v=h.video,y=v.shortcode,C=v.height||w.R$,j=v.width||w.$7;return(0,s.useEffect)(()=>{var e;if((null===(e=h.config)||void 0===e?void 0:e.forceWidescreenAspectRatio)||b)return;let t=(0,w.bj)(v);return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[v,h.config]),(0,r.jsxs)("div",{className:f()(p,{invisible:g,"flex flex-col":(null===(t=h.config)||void 0===t?void 0:t.forceWidescreenAspectRatio)||b,"w-full":b}),children:[(0,r.jsx)("div",{id:"player-".concat(y,"-wrapper"),className:f()(w.Gw,"overflow-hidden rounded-xl",{"aspect-video":null===(n=h.config)||void 0===n?void 0:n.forceWidescreenAspectRatio,"h-[calc(100vh-20rem)]":!(null===(d=h.config)||void 0===d?void 0:d.forceWidescreenAspectRatio)||b}),style:(0,w.Bf)(b,!!(null===(m=h.config)||void 0===m?void 0:m.forceWidescreenAspectRatio),{width:j,height:C}),children:(0,r.jsx)(l.Y,{...h})}),x]})}},66512:function(e,t,n){"use strict";n.d(t,{x:function(){return ViewCount}});var r=n(21482),s=n(6665);let ViewCount=e=>{let{plays:t}=e,n=(0,s.$G)(),l=1===t?n("common.view-amount-one"):n("common.view-amount$",{amount:null!=t?t:0});return(0,r.jsx)("p",{className:"text-sm text-label-secondary",children:l})}},22877:function(e,t,n){"use strict";n.d(t,{b:function(){return useIsGooglebot}});let useIsGooglebot=()=>{var e;return!!(null===(e=window.navigator.userAgent)||void 0===e?void 0:e.toLowerCase().includes("google"))}},34430:function(){},64521:function(e,t,n){"use strict";n.d(t,{a:function(){return a}});var r=n(51891),s=n(71864),l=n(26460),i=n(21482),a=e=>{var t=(0,s.c)(e,[]);return(0,r.a)("DropdownMenu"),(0,i.jsx)(l.fC,(0,s.a)({},t))}},40482:function(e,t,n){"use strict";n.d(t,{a:function(){return r}});var r={CLOSE_ARIA_LABEL:"Close",CANCEL_ARIA_LABEL:"Cancel",CONFIRM_ARIA_LABEL:"Confirm"}},47021:function(e,t,n){"use strict";n.d(t,{a:function(){return A}});var r=n(40482),s=n(71864),u=e=>(0,s.d)(void 0,null,function*(){var t,n;if(yield Promise.resolve(),(null==(t=document.activeElement)?void 0:t.getAttribute("aria-label"))!==r.a.CLOSE_ARIA_LABEL)return;let s=e.querySelectorAll("[tabindex]");if(0===s.length&&(s=e.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)')),0===s.length)return;let l=Array.from(s).find(e=>![r.a.CLOSE_ARIA_LABEL,r.a.CANCEL_ARIA_LABEL,r.a.CONFIRM_ARIA_LABEL].includes(e.getAttribute("aria-label")));l?l.focus():null==(n=document.activeElement)||n.blur()}),l=n(70753),i=n(51891),c=n(45442),d=n(73013),f=n(37993),w=n(21482),A=e=>{var{isShowing:t,portalContainer:n,withBackdrop:r=!0,lowerSlot:m=null,onClose:x,children:p,inline:h=!0,fullScreen:g}=e,b=(0,s.c)(e,["isShowing","portalContainer","withBackdrop","lowerSlot","onClose","children","inline","fullScreen"]);let v=(0,c.useRef)(null),[y,C]=(0,c.useState)(n||null);return(0,i.a)("Modal"),(0,w.jsxs)(w.Fragment,{children:[h&&(0,w.jsx)("span",{className:"tw-absolute",ref:C}),(0,w.jsx)(d.fC,{open:t,children:(0,w.jsxs)(d.h_,{container:h?y:n,children:[(0,w.jsx)("span",{className:"dark:tw-bg-gray-900/.1"}),(0,w.jsxs)("div",{className:"tw-fixed tw-z-30 tw-inset-0 tw-flex tw-flex-col tw-gap-2 tw-justify-center tw-items-center",children:[r&&(0,w.jsx)(d.aV,{className:f("tw-bg-black/38 tw-fixed tw-inset-0",{"tw-bg-surface-primary":g}),"aria-hidden":"true","data-testid":"sb-modal-backdrop"}),(0,w.jsxs)(d.VY,{className:f("tw-flex tw-flex-col tw-z-10",{"tw-absolute tw-h-full tw-w-full":g,"tw-max-w-lg tw-w-11/12 tw-h-fit tw-max-h-full":!g}),onEscapeKeyDown:()=>null==x?void 0:x("escape"),onInteractOutside:()=>null==x?void 0:x("backdrop"),onOpenAutoFocus:()=>{v.current&&u(v.current)},children:[(0,w.jsx)(l.a,(0,s.b)((0,s.a)({},b),{fullScreen:g,onClose:x,ref:v,children:p})),m]})]})]})})]})}},69589:function(e,t,n){"use strict";n.d(t,{a:function(){return o}});var r=n(37993),s=n(52157);function o(...e){return(0,s.m6)(r(e))}},77021:function(e,t,n){"use strict";n.d(t,{a:function(){return d}});var r=n(69589),s=n(71864),l=n(45442),i=n(26460),c=n(21482),d=(0,l.forwardRef)((e,t)=>{var{className:n,inset:l}=e,d=(0,s.c)(e,["className","inset"]);return(0,c.jsx)(i.ck,(0,s.a)({ref:t,className:(0,r.a)("tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none tw-transition-colors hover:tw-cursor-pointer","focus:tw-bg-surface-tertiary","data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",l&&"tw-pl-8",n)},d))});d.displayName=i.ck.displayName},96673:function(e,t,n){"use strict";n.d(t,{a:function(){return o}});var r=n(21482),o=({className:e=""})=>(0,r.jsx)("svg",{width:"12",height:"11",viewBox:"0 0 12 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:e,children:(0,r.jsx)("path",{d:"M10.6875 8.8125C11.0938 9.1875 11.0938 9.84375 10.6875 10.2188C10.5 10.4062 10.25 10.5 10 10.5C9.71875 10.5 9.46875 10.4062 9.28125 10.2188L6 6.9375L2.6875 10.2188C2.5 10.4062 2.25 10.5 2 10.5C1.71875 10.5 1.46875 10.4062 1.28125 10.2188C0.875 9.84375 0.875 9.1875 1.28125 8.8125L4.5625 5.5L1.28125 2.21875C0.875 1.84375 0.875 1.1875 1.28125 0.8125C1.65625 0.40625 2.3125 0.40625 2.6875 0.8125L6 4.09375L9.28125 0.8125C9.65625 0.40625 10.3125 0.40625 10.6875 0.8125C11.0938 1.1875 11.0938 1.84375 10.6875 2.21875L7.40625 5.53125L10.6875 8.8125Z",fill:"currentColor"})})},26359:function(e,t,n){"use strict";n.d(t,{a:function(){return d}});var r=n(69589),s=n(71864),l=n(45442),i=n(26460),c=n(21482),d=(0,l.forwardRef)((e,t)=>{var{className:n,sideOffset:l=4}=e,d=(0,s.c)(e,["className","sideOffset"]);return(0,c.jsx)(i.VY,(0,s.a)({ref:t,sideOffset:l,className:(0,r.a)("tw-bg-surface-secondary tw-text-label-primary tw-z-50 min-w-[8rem] tw-overflow-hidden tw-rounded-sm tw-border tw-border-outline-secondary tw-shadow-md","data-[state=open]:tw-animate-in data-[state=open]:tw-fade-in-0 data-[state=open]:tw-zoom-in-95","data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=closed]:tw-zoom-out-95","data-[side=bottom]:tw-slide-in-from-top-2","data-[side=left]:tw-slide-in-from-right-2","data-[side=right]:tw-slide-in-from-left-2","data-[side=top]:tw-slide-in-from-bottom-2",n)},d))});d.displayName=i.VY.displayName},70753:function(e,t,n){"use strict";n.d(t,{a:function(){return w}});var r=n(40482),s=n(96673),l=n(18251),i=n(45442),c=n(73013),d=n(37993),f=n(21482),w=(0,i.forwardRef)(function({children:e,className:t,onClose:n,onConfirm:i,title:w,cancelLabel:m,confirmLabel:x,disableConfirm:p=!1,hideCancel:h=!1,hideConfirm:g=!1,hideClose:b=!1,confirmAutofocus:v=!1,variant:y="primary",withSeparators:C=!1,fullScreen:j=!1},N){return(0,f.jsxs)("div",{className:d("tw-text-gray-700 tw-rounded tw-shadow-lg dark:tw-text-gray-300","tw-text-label-primary",t,{"tw-h-full tw-w-full tw-flex tw-flex-col tw-bg-surface-primary":j,"tw-bg-surface-secondary":!j}),ref:N,children:[(w||!b)&&(0,f.jsxs)("header",{className:d("tw-flex tw-flex-row tw-items-center tw-justify-end tw-px-5 tw-py-4",{"tw-border-b tw-border-gray-100 dark:tw-border-gray-600":C}),children:[w&&(0,f.jsx)(c.Dx,{className:"tw-grow tw-font-semibold",children:w}),!b&&(0,f.jsx)(c.x8,{asChild:!0,children:(0,f.jsx)(l.a,{"aria-label":r.a.CLOSE_ARIA_LABEL,onClick:()=>null==n?void 0:n("close-button"),variant:"ghost",iconButton:!0,children:(0,f.jsx)(s.a,{})})})]}),(0,f.jsx)("div",{className:"tw-overflow-y-auto tw-overscroll-y-contain tw-px-5 tw-py-4",children:e}),(!g||!h)&&(0,f.jsxs)("footer",{className:d("tw-flex tw-flex-row tw-justify-end tw-gap-3 tw-px-5 tw-py-4",{"tw-border-t tw-border-gray-100 dark:tw-border-gray-600":C,"tw-mt-auto":j}),children:[!h&&(0,f.jsx)(c.x8,{asChild:!0,children:(0,f.jsx)(l.a,{onClick:()=>null==n?void 0:n("footer-button"),variant:"ghost","aria-label":r.a.CANCEL_ARIA_LABEL,children:m})}),!g&&(0,f.jsx)(l.a,{disabled:p,"aria-label":r.a.CONFIRM_ARIA_LABEL,onClick:i,color:y,autoFocus:v,children:x})]})]})})}}]);