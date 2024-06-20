;/*FB_PKG_DELIM*/

__d("CometSeeMoreExpandingUtils",[],(function(a,b,c,d,e,f){"use strict";function g(a,b){var c=b;while(c>=0){if(a.charAt(c)===" "||a.charAt(c)==="\n")break;c-=1}a.charAt(b)!=="\n"?c+=1:c=b+1;b=a.substring(c);a=/\s/;b=b.search(a)+c-1;return{truncatedEntityEndIndex:b,truncatedEntityOffset:c}}function h(a,b,c){var d=[];b=g(b,c);c=b.truncatedEntityEndIndex;b=b.truncatedEntityOffset;b=b;var e=!1;for(var a=a,f=Array.isArray(a),h=0,a=f?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(f){if(h>=a.length)break;i=a[h++]}else{h=a.next();if(h.done)break;i=h.value}i=i;var j=i.entity,k=i.entity_type,l=i.length;i=i.offset;i!=null&&l!=null&&j!=null&&j.__typename!=null&&(d.push({entity:j,entity_type:k,length:l,offset:i}),!e&&i+l>=c&&b>=i&&(b=i,e=!0))}e||d.push({entity:{__typename:"SeeMoreTruncation"},entity_type:"SEE_MORE_ANCHOR",length:0,offset:b});return{newEntityRanges:d,newTruncatedEntityOffset:b}}function i(a,b){var c=[],d=[];if(b!=null)for(var a=a,e=Array.isArray(a),f=0,a=e?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=a.length)break;g=a[f++]}else{f=a.next();if(f.done)break;g=f.value}g=g;var h=g.entity,i=g.entity_type,j=g.length;g=g.offset;g!=null&&j!=null&&h!=null&&h.__typename!=null&&(g<b?(c.push({entity:h,entity_type:i,length:j,offset:g}),g+j>b&&d.push({entity:h,entity_type:i,length:g+j-b,offset:0})):d.push({entity:h,entity_type:i,length:j,offset:g-b}))}return{entitiesBeforeTruncatedOffset:c,entitiesFromTruncatedOffset:d}}function j(a,b,c){a=h(a,b,c);b=a.newEntityRanges;c=a.newTruncatedEntityOffset;a=i(b,c);b=a.entitiesBeforeTruncatedOffset;a=a.entitiesFromTruncatedOffset;return{entitiesBeforeTruncatedOffset:b,entitiesFromTruncatedOffset:a,newTruncatedEntityOffset:c}}function a(a,b,c){var d=[],e=[],f=-1,g=-1,h=-1;if(!a)return{filteredEntitiesBeforeTruncatedPosition:d,filteredEntitiesFromTruncatedPosition:e,hiddenContentOffset:f,truncatedLineIndex:g,truncatedParagraphIndex:h};a=0;var i;for(var k=0;k<b.length;k++){var l=b[k];if(Array.isArray(l)&&c!=null&&c.current!=null){var m=c.current;for(var n=0;n<l.length;n++){var o=l[n].ranges,p=l[n].text,q=p.length;i=m-a;a+=q;if(h<0&&i>=0&&a>=m){h=k;g=n;i=j(o,p,m-a+q);o=i.entitiesBeforeTruncatedOffset;p=i.entitiesFromTruncatedOffset;q=i.newTruncatedEntityOffset;d=o;e=p;f=q;break}}}if(h>=0&&g>=0)break}return{filteredEntitiesBeforeTruncatedPosition:d,filteredEntitiesFromTruncatedPosition:e,hiddenContentOffset:f,truncatedLineIndex:g,truncatedParagraphIndex:h}}f.getTruncatedEntityRangesAfterExpandingSeeMore=h;f.splitEntityRangesIntoRegularAndHiddenParts=i;f.getEntityRangesWithTruncatedEntityAndSplitIntoTwoParts=j;f.filterParagraphsGetTruncatedLinesEntityRangesAndIndex=a}),66);
__d("CometSplitPointForText",["EmojiRendererData","UnicodeUtils"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function a(a,b,c,e){c===void 0&&(c=8);e===void 0&&(e=0);var f=null,g=a.split("\n"),h=(i||(i=d("UnicodeUtils"))).strlen(a);h>b&&h-b>e&&(f=b);if(g.length>c){e=g.slice(0,c).join("\n").length;f!==null?f=Math.min(e,f):f=e}if(f==null)return f;else{b=f+j(a,f);return b<h?b:null}}function j(a,b){var e=b>0&&(h||(h=c("EmojiRendererData"))).isZWJ((i||(i=d("UnicodeUtils"))).charAt(a,b-1).codePointAt(0));return k(a,e?b-1:b)}function k(a,b){var e=(i||(i=d("UnicodeUtils"))).charAt(a,b);if(e!==""){e=e.codePointAt(0);if((h||(h=c("EmojiRendererData"))).isEmojiModifier(e)||(h||(h=c("EmojiRendererData"))).isEmojiVariationSelector(e)||(h||(h=c("EmojiRendererData"))).isTextVariationSelector(e))return 1+k(a,b+1);else if((h||(h=c("EmojiRendererData"))).isZWJ(e)){e=(i||(i=d("UnicodeUtils"))).charAt(a,b+1);if((h||(h=c("EmojiRendererData"))).isEmojiModifierBase(e.codePointAt(0)))return 2+k(a,b+2)}}return 0}g.findSplitPointForText=a}),98);
__d("CometTextWithEntitiesBase.react",["UnicodeUtils","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||d("react"),k=j.Fragment;function l(a){return Array.from(a).sort(function(a,b){return a.offset-b.offset||b.length-a.length})}function m(a,b){return b!=null?b.reduce(function(a,b){return b(a)},a):a}m.displayName=m.name+" [from "+f.id+"]";function n(a,b,c,d,e,f,g,h,i){var l=a.__typename;h=Object.prototype.hasOwnProperty.call(h,l)?h[l].concat(i):i;return j.jsx(k,{children:h&&h.length>0?h.reduce(function(d,f){return f(d,a,c,e,b)},f):d},g)}n.displayName=n.name+" [from "+f.id+"]";function o(a,b,c,e,f,g,h,l,o,p,q,r){a=(i||(i=d("UnicodeUtils"))).substr(a,b,c-b);c=o.length;a.length>0&&l.push(j.jsx(k,{children:m(a,p)},"c"+b+"_"+c+"_"+r));p=o.pop();o[o.length-1].subElements.push(n(e,f,g,l,a,l,b+"_"+c+"_"+r,h,q));return p}function a(a){var b=a.ranges;b=b===void 0?[]:b;var e=a.renderers,f=a.transforms,g=f===void 0?[]:f,h=a.text;f=a.disableRangeSort;a=f===void 0?!1:f;var p=(f=e)!=null?f:{},q=0,r=(e=Object.prototype.hasOwnProperty.call(p,"*")?p["*"]:[])!=null?e:[];f=a?b:l(b);var s=[{entity:{__typename:""},entity_is_weak_reference:!1,entityType:"",length:h.length,offset:0,subElements:[]}];if(!c("gkx")("24280"))for(e=0;e<f.length;++e){a=f[e];b=a.entity;var t=a.entity_is_weak_reference,u=a.entity_type,v=a.length;a=a.offset;if(q>=h.length||a>h.length)break;var w=s[s.length-1],x=w.entity,y=w.entity_is_weak_reference,z=w.entityType,A=w.length,B=w.offset;w=w.subElements;var C=B+A;while(C<=a&&s.length>1){o(h,q,C,x,y,z,p,w,s,g,r,e);q=C;var D=s[s.length-1];x=D.entity;y=D.entity_is_weak_reference;z=D.entityType;A=D.length;B=D.offset;w=D.subElements;C=B+A}q<a&&(s[s.length-1].subElements.push(j.jsx(k,{children:m((i||(i=d("UnicodeUtils"))).substr(h,q,a-q),g)},"c"+q+"_"+s.length)),q=a);if(B<=a&&C>=a+v){s.push({entity:b,entity_is_weak_reference:(D=t)!=null?D:null,entityType:(C=u)!=null?C:null,length:v,offset:a,subElements:[]})}else{var E;D=(i||(i=d("UnicodeUtils"))).substr(h,a,v);C=m(D,g);s[s.length-1].subElements.push(n(b,(E=t)!=null?E:null,(E=u)!=null?E:null,D,D,C,q+"_"+s.length,p,r));q=a+v}}else{var F=[];f.forEach(function(a){F.push({index:a.offset,range:a,type:"start"}),F.push({index:a.offset+a.length,range:a,type:"end"})});F.sort(function(a,b){if(a.index!==b.index)return a.index-b.index;if(a.range.length===0&&b.range.length!==0)return 1;else if(a.range.length!==0&&b.range.length===0)return-1;if(a.type!==b.type)return a.range===b.range?b.type==="start"?1:-1:b.type==="end"?1:-1;else if(a.type==="start")return b.range.length-a.range.length;else return a.range.length-b.range.length});var G=0;while(G<F.length){var H=F[G];if(q>=h.length||H.index>h.length)break;if(H.type==="start"){if(H.index>q){E=(i||(i=d("UnicodeUtils"))).substr(h,q,H.index-q);s[s.length-1].subElements.push(j.jsx(k,{children:m(E,g)},"c"+q+"_"+s.length))}D=H.range;b=D.entity;var t=D.entity_is_weak_reference,u=D.entity_type,v=D.length;a=D.offset;s.push({entity:b,entity_is_weak_reference:(C=t)!=null?C:null,entityType:(e=u)!=null?e:null,length:v,offset:a,subElements:[]});G++;q=H.index}else{var I=new Set();f=F[G];E=function(){var d=F[G];G++;var e=null;I.forEach(function(a){a.entity===d.range.entity&&(e=a)});if(e!=null)I["delete"](e);else if(s.length>1){var i=s[s.length-1],a=i.entity,b=i.entity_is_weak_reference,c=i.entityType;i=i.subElements;var j=o(h,q,H.index,a,b,c,p,i,s,g,r,F.length-G);q=H.index;while(s.length>1&&j.entity!==d.range.entity){I.add(j);var k=s[s.length-1];a=k.entity;b=k.entity_is_weak_reference;c=k.entityType;i=k.subElements;j=o(h,q,q,a,b,c,p,i,s,g,r,F.length-G)}}f=F[G]};while(f&&f.index===H.index&&f.type==="end")E();q=H.index;D=Array.from(I);for(b=D.length-1;b>=0;b--){t=D[b];s.push({entity:t.entity,entity_is_weak_reference:t.entity_is_weak_reference,entityType:t.entityType,length:t.offset+t.length-q,offset:q,subElements:[]})}}}}while(s.length>1){C=s[s.length-1];var x=C.entity,y=C.entity_is_weak_reference,z=C.entityType,A=C.length,B=C.offset;w=C.subElements;u=B+A;o(h,q,u,x,y,z,p,w,s,g,r,s.length);q=u}if(q<h.length){e=s[s.length-1].subElements;e.push(j.jsx(k,{children:m((i||(i=d("UnicodeUtils"))).substr(h,q),g)},"c"+q))}return j.jsx(j.Fragment,{children:s[s.length-1].subElements})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("getTextDirectionAttribute",["cr:1080422"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c="auto";b("cr:1080422")!=null&&window!=null&&(c=b("cr:1080422").isDirectionRTL(a)?"rtl":"ltr");return c}g["default"]=a}),98);
__d("BaseCometTextWithEntities.react",["CometSeeMoreExpandingUtils","CometSplitPointForText","CometTextWithEntitiesBase.react","CometTrackingNodeProvider.react","FocusRegion.react","UnicodeUtils","focusScopeQueries","getTextDirectionAttribute","gkx","killswitch","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=i||(i=d("react"));b=i;var l=b.useCallback,m=b.useRef,n=b.useState,o=.6,p=20,q={paragraph:{marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",wordWrap:"x1vvkbs",$$css:!0},paragraphSpaced:{marginTop:"xtlvy1s",$$css:!0},preserveWhiteSpace:{whiteSpace:"x126k92a",$$css:!0}},r={auto:{textAlign:"start"},center:{textAlign:"center"},ltr:{textAlign:"left"},rtl:{textAlign:"right"}};function s(a){var b=[];for(var c=0;c<a.length;c++){var d=a[c];if(d!=null&&d.offset!=null&&d.length!=null&&d.entity!=null&&d.entity.__typename!=null){var e;b.push({entity:d.entity,entity_is_weak_reference:(e=d.entity_is_weak_reference)!=null?e:null,length:d.length,offset:d.offset})}}return b}function t(a,b,c){return a.map(function(a){return babelHelpers["extends"]({},a,{offset:a.offset-b})}).filter(function(a){return a.offset>=0&&a.offset<c})}function u(a){var b=a.ranges;a=a.text;var c=0;return a.split("\n").map(function(a){var e=t(b,c,(j||(j=d("UnicodeUtils"))).strlen(a));c+=j.strlen(a)+1;return{ranges:e,text:a}}).filter(function(a){return a.text.trim()!==""})}function v(a,b){var c=a.ranges;a=a.text;var e=0;return a.split(/(?=\n\s*\n)/).map(function(a){var f,g;f=(f=a.match(/(^\n\s*\n)?([^]*$)/))!=null?f:[];g=(g=f[1])!=null?g:"";f=(f=f[2])!=null?f:a;g=t(c,e+g.length,(j||(j=d("UnicodeUtils"))).strlen(f));e+=j.strlen(a);return b?u({ranges:g,text:f}):{ranges:g,text:f}})}function a(a){var b=a.maxLength;b=b===void 0?800:b;var e=a.maxLines;e=e===void 0?8:e;var f=a.ranges;f=f===void 0?[]:f;var g=a.text,i=a.truncationFactor_DEPRECATED;i=i===void 0?o:i;var u=a.truncationStyle;u=u===void 0?"none":u;var w=a.truncationThreshold;w=w===void 0?p:w;var x=a.withLineBreaks;x=x===void 0?!1:x;var y=a.withParagraphs;y=y===void 0?!1:y;var z=a.onToggleExpanded,A=a.seeMoreFragment,B=a.expanded,C=a.preserveWhiteSpace,D=C===void 0?!1:C,E=a.align;C=a.maintainExpansionState;var F=C===void 0?!1:C,G=babelHelpers.objectWithoutPropertiesLoose(a,["maxLength","maxLines","ranges","text","truncationFactor_DEPRECATED","truncationStyle","truncationThreshold","withLineBreaks","withParagraphs","onToggleExpanded","seeMoreFragment","expanded","preserveWhiteSpace","align","maintainExpansionState"]);a=n((C=B)!=null?C:!1);C=a[0];var H=a[1],I=B!=null?B:C;a=m(-1);B=l(function(){F||H(function(a){return!a}),z!=null&&z()},[z,F]);C=s(f);f=g;if(u!=="none"&&!I){u=d("CometSplitPointForText").findSplitPointForText(g,b*i,e,w);u!=null&&(f=(j||(j=d("UnicodeUtils"))).substring(g,0,u),C=t(C,0,j.strlen(f)),a.current=u)}var J=A!=null?k.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:44,children:A(I,a.current,B)}):null;if(!y){if(c("gkx")("24279")&&I&&a!=null&&a.current!=null){b=d("CometSeeMoreExpandingUtils").getEntityRangesWithTruncatedEntityAndSplitIntoTwoParts(C,f,a.current);i=b.entitiesBeforeTruncatedOffset;e=b.entitiesFromTruncatedOffset;w=b.newTruncatedEntityOffset;return k.jsxs(k.Fragment,{children:[k.jsx(c("CometTextWithEntitiesBase.react"),babelHelpers["extends"]({ranges:i,text:f.substring(0,w)},G)),k.jsx(d("FocusRegion.react").FocusRegion,{autoFocusQuery:d("focusScopeQueries").focusableScopeQuery,children:k.jsx(c("CometTextWithEntitiesBase.react"),babelHelpers["extends"]({ranges:e,text:f.substring(w)},G))})]})}return k.jsxs(k.Fragment,{children:[k.jsx(c("CometTextWithEntitiesBase.react"),babelHelpers["extends"]({ranges:C,text:f},G)),J]})}var K=v({ranges:C,text:f},x);c("killswitch")("COMET_MESSAGE_EMPTY_PARAGRAPH_FILTERING")||(K=K.filter(function(a){return!Array.isArray(a)||a.length>0}));g=d("CometSeeMoreExpandingUtils").filterParagraphsGetTruncatedLinesEntityRangesAndIndex(I,K,a);var L=g.filteredEntitiesBeforeTruncatedPosition,M=g.filteredEntitiesFromTruncatedPosition,N=g.hiddenContentOffset,O=g.truncatedLineIndex,P=g.truncatedParagraphIndex;return k.jsx(k.Fragment,{children:K.map(function(a,b){return k.jsx("div",{className:(h||(h=c("stylex")))(q.paragraph,b!==0&&q.paragraphSpaced,D&&q.preserveWhiteSpace),children:Array.isArray(a)?a.map(function(e,f){var g=e.ranges;e=e.text;var h=E==="center"?E:c("getTextDirectionAttribute")(e);return k.jsxs("div",{dir:h,style:r[h],children:[I&&P===b&&O===f?k.jsxs(k.Fragment,{children:[k.jsx(c("CometTextWithEntitiesBase.react"),babelHelpers["extends"]({ranges:L,text:e.substring(0,N)},G)),k.jsx(d("FocusRegion.react").FocusRegion,{autoFocusQuery:d("focusScopeQueries").focusableScopeQuery,children:k.jsx(c("CometTextWithEntitiesBase.react"),babelHelpers["extends"]({ranges:M,text:e.substring(N)},G))})]}):k.jsx(c("CometTextWithEntitiesBase.react"),babelHelpers["extends"]({ranges:g,text:e},G)),b===K.length-1&&f===a.length-1?J:null]},f)}):k.jsxs(k.Fragment,{children:[k.jsx(c("CometTextWithEntitiesBase.react"),babelHelpers["extends"]({ranges:a.ranges,text:a.text},G)),b===K.length-1?J:null]})},b)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("BaseCometTextWithExpansionEntities.react",["fbt","BaseCometTextWithEntities.react","react","react-strict-dom"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react")),k=i.useCallback;function a(a){var b=a.LinkRenderer,e=a.seeLessLinkProps,f=a.seeMoreLinkProps,g=a.truncationStyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["LinkRenderer","seeLessLinkProps","seeMoreLinkProps","truncationStyle"]);var i=k(function(a,c,i){if(a){if(g==="see-more-and-less")return j.jsxs(j.Fragment,{children:[" ",j.jsx(b,babelHelpers["extends"]({onClick:i,role:"button",testid:void 0},e,{children:h._("See less")}))]},"seeless")}else{if(g==="none")return null;if(c!=null&&c!==-1)switch(g){case"ellipsis-only":return j.jsx(j.Fragment,{children:h._("\u2026")},"seemore");case"see-more":case"see-more-and-less":case"see-more-with-attachments":return j.jsxs(j.Fragment,{children:[h._("\u2026")," ",j.jsx(b,babelHelpers["extends"]({onClick:i,role:"button",testid:void 0},f,{children:h._("See more")}))]},"seemore")}else if(g==="see-more-with-attachments")return j.jsx(d("react-strict-dom").html.div,{children:j.jsx(b,babelHelpers["extends"]({onClick:i,role:"button",testid:void 0},f,{children:h._("See more")}))},"seemore")}},[b,e,f,g]);return j.jsx(c("BaseCometTextWithEntities.react"),babelHelpers["extends"]({truncationStyle:g},a,{seeMoreFragment:i}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("BaseTooltipContainer.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={container:{backgroundColor:"xj5tmjb",borderTopStartRadius:"x1r9drvm",borderTopEndRadius:"x16aqbuh",borderBottomEndRadius:"x9rzwcf",borderBottomStartRadius:"xjkqk3g",boxShadow:"xms15q0",display:"x1lliihq",filter:"xo8ld3r",marginBottom:"xjpr12u",marginTop:"xr9ek0c",maxWidth:"x86nfjv",opacity:"xg01cxk",paddingStart:"x1ye3gou",paddingEnd:"xn6708d",paddingTop:"xz9dl7a",paddingBottom:"xsag5q8",position:"x1n2onr6",transitionDuration:"x1ebt8du",transitionProperty:"x19991ni",transitionTimingFunction:"x1dhq9h",$$css:!0},containerVisible:{opacity:"x1hc1fzr",transitionDuration:"xhb22t3",transitionTimingFunction:"xls3em1",$$css:!0}};b=j.forwardRef(a);function a(a,b){var d=a.children,e=a.id,f=a.shouldFadeIn;f=f===void 0?!1:f;var g=a.xstyle,i=a.role;i=i===void 0?"tooltip":i;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","id","shouldFadeIn","xstyle","role"]);return j.jsx("div",babelHelpers["extends"]({},a,{className:(h||(h=c("stylex")))(k.container,g,f&&k.containerVisible),"data-testid":void 0,id:e,ref:b,role:i,children:d}))}a.displayName=a.name+" [from "+f.id+"]";e=b;g["default"]=e}),98);
__d("useTooltipDelayedContent",["clearTimeout","react","setTimeout"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useLayoutEffect,j=b.useRef,k=b.useState;function a(a){var b=a.delayContentMs,d=a.isVisible,e=j(d),f=j(null);a=k(function(){return d===!0&&e.current===!1&&b>0});var g=a[0],h=a[1];i(function(){if(d===!0&&e.current===!1&&b>0){h(!0);f.current=c("setTimeout")(function(){h(!1),f.current=null},b);return function(){c("clearTimeout")(f.current),f.current=null}}else f.current!=null&&(h(!1),c("clearTimeout")(f.current),f.current=null);e.current=d},[b,d,e]);return{isPending:g}}g["default"]=a}),98);
__d("BaseTooltipImpl.react",["BaseContextualLayer.react","BaseTooltipContainer.react","CometHeroInteractionContextPassthrough.react","CometPlaceholder.react","react","useCometDisplayTimingTrackerForInteraction","useFadeEffect","useTooltipDelayedContent"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useLayoutEffect,k=b.useRef,l={contextualLayer:{pointerEvents:"x47corl",$$css:!0}};function m(a){var b=a.contextualLayerRef;j(function(){var a=b.current;a&&a.reposition({autoflip:!0})},[b]);return null}m.displayName=m.name+" [from "+f.id+"]";function a(a){var b=a.loadingState,d=a.contentKey,e=a.delayContentMs;e=e===void 0?0:e;a.headline;var f=a.id,g=a.isVisible,h=a.themeWrapper;h=h===void 0?i.Fragment:h;var j=a.tooltip;a.tooltipTheme;var n=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["loadingState","contentKey","delayContentMs","headline","id","isVisible","themeWrapper","tooltip","tooltipTheme","xstyle"]);var o=k(null),p=c("useFadeEffect")(g),q=p[0],r=p[1];p=p[2];var s=c("useCometDisplayTimingTrackerForInteraction")("ToolTip");e=c("useTooltipDelayedContent")({delayContentMs:e,isVisible:g});g=e.isPending;return j==null||!q?null:i.jsx(c("CometHeroInteractionContextPassthrough.react"),{clear:!0,children:i.jsx(c("BaseContextualLayer.react"),babelHelpers["extends"]({align:"middle"},a,{imperativeRef:o,ref:s,xstyle:l.contextualLayer,children:i.jsx(h,{children:i.jsx(c("BaseTooltipContainer.react"),{id:f,ref:p,shouldFadeIn:r,xstyle:n,children:g?i.jsx("div",{className:"x78zum5 xl56j7k",children:b}):i.jsxs(c("CometPlaceholder.react"),{fallback:b,children:[i.jsx(m,{contextualLayerRef:o}),j]},d)})})}))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTextWithEntities.react",["BaseCometTextWithExpansionEntities.react","CometLink.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsx(c("BaseCometTextWithExpansionEntities.react"),babelHelpers["extends"]({LinkRenderer:c("CometLink.react")},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTextWithEntitiesRelay_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},c={kind:"Variable",name:"scale",variableName:"scale"},d={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:{mask:!1},name:"CometTextWithEntitiesRelay_entity",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:"mobileUrl",args:[{kind:"Literal",name:"site",value:"mobile"}],kind:"ScalarField",name:"url",storageKey:'url(site:"mobile")'},{kind:"InlineFragment",selections:[a],type:"Actor",abstractKey:"__isActor"},{kind:"InlineFragment",selections:[{args:null,documentName:"CometTextWithEntitiesRelay_entity",fragmentName:"GroupsCometHashtagsStoryMessageHashtagLink_hashtag",fragmentPropName:"hashtag",kind:"ModuleImport"}],type:"GroupHashtag",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometTextWithEntitiesRelay_entity",fragmentName:"PagesCometPageLink_page",fragmentPropName:"page",kind:"ModuleImport"},{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometPageVerificationBadge_page"}],type:"Page",abstractKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometProfileLink_actor"},{kind:"InlineFragment",selections:[{args:null,documentName:"CometTextWithEntitiesRelay_entity",fragmentName:"ProfileGeminiWeakReferenceLink_user",fragmentPropName:"user",kind:"ModuleImport"},b,{alias:null,args:null,concreteType:"WorkUserInfo",kind:"LinkedField",name:"work_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active_account",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},a],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"web_link",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"fbclid",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"lynx_mode",storageKey:null}],type:"ExternalWebLink",abstractKey:null}],storageKey:null}],type:"WebLinkable",abstractKey:"__isWebLinkable"},{kind:"InlineFragment",selections:[b,{alias:null,args:null,kind:"ScalarField",name:"is_multi_company_group",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group",abstractKey:null},{kind:"InlineFragment",selections:[{alias:"imageScaledForFeed",args:[c,{kind:"Literal",name:"width",value:680}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[d,e,f],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null}],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:[g,{alias:null,args:[{kind:"Literal",name:"height",value:64},{kind:"Literal",name:"media_type",value:"image/png"},c,{kind:"Literal",name:"width",value:64}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[e],storageKey:null}],type:"XFBWorkCustomEmoji",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerRelay_video"},{args:null,kind:"FragmentSpread",name:"VideoPlayerCometFeedThumbnail_video"},f,d],type:"Video",abstractKey:null},{args:null,kind:"FragmentSpread",name:"CometTitleSentenceGroupJoinButtonRenderer_entity"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"deep_link_number",storageKey:null}],type:"PageWhatsAppNumber",abstractKey:null},{kind:"InlineFragment",selections:[g,{alias:null,args:null,kind:"ScalarField",name:"ticker_symbol",storageKey:null}],type:"KGTickerNode",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"snapshot_url",storageKey:null},{args:null,kind:"FragmentSpread",name:"truncateComposedTextWithUnidash_entity"}],type:"XFBProdQuartzVizirSnapshot",abstractKey:null}],type:"Entity",abstractKey:"__isEntity"}}();e.exports=a}),null);
__d("CometTextWithEntitiesRelay_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e=[{kind:"Literal",name:"delight_surface",value:"COMMENT"}],f=[c],g={kind:"Variable",name:"scale",variableName:"scale"},h={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},l=[c,k],m={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometTextWithEntitiesRelay_textWithEntities",selections:[{alias:null,args:null,concreteType:"DelightAtRange",kind:"LinkedField",name:"delight_ranges",plural:!0,selections:[a,b,{alias:null,args:null,concreteType:"TextDelightCampaign",kind:"LinkedField",name:"campaign",plural:!1,selections:[c,d,{alias:null,args:e,concreteType:"TextDelightStylePair",kind:"LinkedField",name:"delight_styles",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"style",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"value",storageKey:null}],storageKey:'delight_styles(delight_surface:"COMMENT")'},{alias:null,args:e,concreteType:"DelightsAnimation",kind:"LinkedField",name:"delight_asset",plural:!1,selections:f,storageKey:'delight_asset(delight_surface:"COMMENT")'},{alias:null,args:null,kind:"ScalarField",name:"text_enrichment_url",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ImageAtRange",kind:"LinkedField",name:"image_ranges",plural:!0,selections:[a,b,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity_with_image",plural:!1,selections:[{alias:null,args:[g],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[h,{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},i,j],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InlineStyleAtRange",kind:"LinkedField",name:"inline_style_ranges",plural:!0,selections:[a,b,{alias:null,args:null,kind:"ScalarField",name:"inline_style",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[a,b,{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[d,{kind:"InlineFragment",selections:l,type:"User",abstractKey:null},{kind:"InlineFragment",selections:l,type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[c,{alias:"name",args:null,kind:"ScalarField",name:"username",storageKey:null}],type:"InstagramUserV2",abstractKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[d,{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:"mobileUrl",args:[{kind:"Literal",name:"site",value:"mobile"}],kind:"ScalarField",name:"url",storageKey:'url(site:"mobile")'},{kind:"InlineFragment",selections:f,type:"Actor",abstractKey:"__isActor"},{kind:"InlineFragment",selections:[{args:null,documentName:"CometTextWithEntitiesRelay_textWithEntities",fragmentName:"GroupsCometHashtagsStoryMessageHashtagLink_hashtag",fragmentPropName:"hashtag",kind:"ModuleImport"}],type:"GroupHashtag",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometTextWithEntitiesRelay_textWithEntities",fragmentName:"PagesCometPageLink_page",fragmentPropName:"page",kind:"ModuleImport"},{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometPageVerificationBadge_page"}],type:"Page",abstractKey:null},{args:null,kind:"FragmentSpread",name:"ProfileCometProfileLink_actor"},{kind:"InlineFragment",selections:[{args:null,documentName:"CometTextWithEntitiesRelay_textWithEntities",fragmentName:"ProfileGeminiWeakReferenceLink_user",fragmentPropName:"user",kind:"ModuleImport"},m,{alias:null,args:null,concreteType:"WorkUserInfo",kind:"LinkedField",name:"work_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active_account",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},c],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"web_link",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"fbclid",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"lynx_mode",storageKey:null}],type:"ExternalWebLink",abstractKey:null}],storageKey:null}],type:"WebLinkable",abstractKey:"__isWebLinkable"},{kind:"InlineFragment",selections:[m,{alias:null,args:null,kind:"ScalarField",name:"is_multi_company_group",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group",abstractKey:null},{kind:"InlineFragment",selections:[{alias:"imageScaledForFeed",args:[g,{kind:"Literal",name:"width",value:680}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[h,i,j],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null}],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:[k,{alias:null,args:[{kind:"Literal",name:"height",value:64},{kind:"Literal",name:"media_type",value:"image/png"},g,{kind:"Literal",name:"width",value:64}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[i],storageKey:null}],type:"XFBWorkCustomEmoji",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"VideoPlayerRelay_video"},{args:null,kind:"FragmentSpread",name:"VideoPlayerCometFeedThumbnail_video"},j,h],type:"Video",abstractKey:null},{args:null,kind:"FragmentSpread",name:"CometTitleSentenceGroupJoinButtonRenderer_entity"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"deep_link_number",storageKey:null}],type:"PageWhatsAppNumber",abstractKey:null},{kind:"InlineFragment",selections:[k,{alias:null,args:null,kind:"ScalarField",name:"ticker_symbol",storageKey:null}],type:"KGTickerNode",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"snapshot_url",storageKey:null},{args:null,kind:"FragmentSpread",name:"truncateComposedTextWithUnidash_entity"}],type:"XFBProdQuartzVizirSnapshot",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"entity_is_weak_reference",storageKey:null},a,b],storageKey:null},{alias:null,args:null,concreteType:"ColorAtRange",kind:"LinkedField",name:"color_ranges",plural:!0,selections:[a,b,{alias:null,args:null,kind:"ScalarField",name:"hex_rgb_color_with_pound_key",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],type:"TextWithEntities",abstractKey:null}}();e.exports=a}),null);
__d("cometNormalizeTextEntityRanges",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){return a==null?[]:a.map(function(a){var c=a.length,d=a.offset;a=babelHelpers.objectWithoutPropertiesLoose(a,["length","offset"]);return{entity:babelHelpers["extends"]({},a,{__typename:b}),length:c,offset:d}})}f["default"]=a}),66);
__d("CometTextWithEntitiesRelay.react",["CometRelay","CometTextWithEntities.react","CometTextWithEntitiesRelay_entity.graphql","CometTextWithEntitiesRelay_textWithEntities.graphql","cometNormalizeTextEntityRanges","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||d("react");h!==void 0?h:h=b("CometTextWithEntitiesRelay_entity.graphql");function a(a){var e=a.textWithEntities;a=babelHelpers.objectWithoutPropertiesLoose(a,["textWithEntities"]);e=d("CometRelay").useFragment(i!==void 0?i:i=b("CometTextWithEntitiesRelay_textWithEntities.graphql"),e);if(e==null){c("recoverableViolation")("received null text with entities, this it to be expected by design, it's very possible mutators/updaters eliminate this field, but this shouldn't be the norm, please investigate if you're seeing \"high\" error rates","comet_ui");return null}var f=e.aggregated_ranges,g=e.color_ranges,h=e.delight_ranges,j=e.image_ranges,l=e.inline_style_ranges,m=e.ranges;e=e.text;if(e==null)return null;m=[].concat(m,c("cometNormalizeTextEntityRanges")(f,"Aggregate"),c("cometNormalizeTextEntityRanges")(l,"Inline"),c("cometNormalizeTextEntityRanges")(j,"Image"),c("cometNormalizeTextEntityRanges")(g,"Color"),c("cometNormalizeTextEntityRanges")(h,"TextDelightCampaign"));return k.jsx(c("CometTextWithEntities.react"),babelHelpers["extends"]({},a,{ranges:m,text:e}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometExternalLinkedEntityRenderer_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometExternalLinkedEntityRenderer_entity",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"Entity",abstractKey:"__isEntity"};e.exports=a}),null);
__d("CometTextLink.react",["CometLink.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");b=i.forwardRef(a);function a(a,b){var d=a.isSemanticHeading,e=a.type,f=a.color;a=babelHelpers.objectWithoutPropertiesLoose(a,["isSemanticHeading","type","color"]);a=babelHelpers["extends"]({},a,{ref:b});return i.jsx(c("TetraText.react"),{color:f,isSemanticHeading:d,type:e,children:i.jsx(c("CometLink.react"),babelHelpers["extends"]({},a,{color:f}))})}a.displayName=a.name+" [from "+f.id+"]";e=b;g["default"]=e}),98);
__d("CometExternalLinkedEntityRenderer",["CometExternalLinkedEntityRenderer_entity.graphql","CometTextContext","CometTextLink.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react")),k=i.useContext;h!==void 0?h:h=b("CometExternalLinkedEntityRenderer_entity.graphql");function l(a){var b=a.entity;a=a.node;var d=k(c("CometTextContext"));return b.url==null?a:j.jsx(c("CometTextLink.react"),{color:"blueLink",href:b.url,target:"_blank",type:(b=d==null?void 0:d.type)!=null?b:"bodyLink4",children:a})}l.displayName=l.name+" [from "+f.id+"]";a=function(a,b){return j.jsx(l,{entity:b,node:a})};g["default"]=a}),98);
__d("CometTooltipDeferredImpl.react",["BaseTooltipImpl.react","CometProgressRingIndeterminate.react","FDSTextPairing.react","react","useCometTheme"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.tooltipTheme,d=a.headline,e=a.tooltip;a=babelHelpers.objectWithoutPropertiesLoose(a,["tooltipTheme","headline","tooltip"]);b=c("useCometTheme")((b=b)!=null?b:"invert");var f=b[0];b=b[1];return i.jsx(f,{children:i.jsx(c("BaseTooltipImpl.react"),babelHelpers["extends"]({},a,{loadingState:i.jsx(c("CometProgressRingIndeterminate.react"),{color:"dark",size:20}),tooltip:e!=null?i.jsx(c("FDSTextPairing.react"),{body:e,bodyColor:"primary",headline:d,headlineColor:"primary",level:4}):null,xstyle:b}))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTooltip_DEPRECATED.react",["BaseTooltip.react","CometTooltipImpl.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.delayMs,d=a.tooltipTheme_DO_NOT_USE_OR_IT_WILL_BREAK_CONTRAST_ACCESSIBILITY;a=babelHelpers.objectWithoutPropertiesLoose(a,["delayMs","tooltipTheme_DO_NOT_USE_OR_IT_WILL_BREAK_CONTRAST_ACCESSIBILITY"]);return i.jsx(c("BaseTooltip.react"),babelHelpers["extends"]({},a,{delayTooltipMs:b,tooltipImpl:c("CometTooltipImpl.react"),tooltipTheme:d}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("Dots3HorizontalFilled24.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs("svg",babelHelpers["extends"]({viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor"},a,{children:[a.title!=null&&i.jsx("title",{children:a.title}),a.children!=null&&i.jsx("defs",{children:a.children}),i.jsx("circle",{cx:12,cy:12,r:2.5}),i.jsx("circle",{cx:19.5,cy:12,r:2.5}),i.jsx("circle",{cx:4.5,cy:12,r:2.5})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("FDSTooltipDeferredImpl.react",["BaseTooltipImpl.react","CometProgressRingIndeterminate.react","TetraText.react","react","useCometTheme"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){a.headline;var b=a.tooltip;a=babelHelpers.objectWithoutPropertiesLoose(a,["headline","tooltip"]);var d=c("useCometTheme")("invert"),e=d[0];d=d[1];return i.jsx(e,{children:i.jsx(c("BaseTooltipImpl.react"),babelHelpers["extends"]({},a,{loadingState:i.jsx(c("CometProgressRingIndeterminate.react"),{color:"dark",size:20}),tooltip:b!=null?i.jsx(c("TetraText.react"),{color:"tooltip",type:"body4",children:b}):null,xstyle:d}))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWChatStateV2Types",[],(function(a,b,c,d,e,f){"use strict";a="UpsertTab";b="UpdateState";c="UpdateTab";d="UpdateTabByThreadKey";e={UpdateState:b,UpdateTab:c,UpdateTabByThreadKey:d,UpsertTab:a};b="ChatTab";c="ComposeTab";d={ChatTab:b,ComposeTab:c};a=new Map();b={focusedTabId:void 0,mediaViewerOpenWatermark:-1,nextTabId:0,tabs:a};f.MWChatStateActionsType=e;f.MWChatStateTabType=d;f.emptyMWChatState=b}),66);
__d("MWChatStateContext",["MWChatStateV2Types","react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");c=b.createContext;var i=b.useContext,j=c(d("MWChatStateV2Types").emptyMWChatState);e=j.Provider;function a(a){var b=i(j);return a(b)}g.stateContext=j;g.ChatStateContextProvider=e;g.useChatState=a}),98);
__d("MWChatStateV2IsClosed",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.closeWatermark>Math.max(a.openWatermark,a.minimizeWatermark,a.clientForcedMinimizeWatermark)}f.isClosed=a}),66);
__d("firstKeyWithValue",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){for(var c in a){var d=c;if(Object.prototype.hasOwnProperty.call(a,d)&&a[d]===b)return d}return null}f["default"]=a}),66);
__d("isValidURL",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){b===void 0&&(b=!1);var c=/^(([\w-]+\.)+(xn--[\w-]+|\w+)|\[([\da-f]{0,4}:)*(?:[\da-f]{1,4}|(?:(?:\d{1,3}\.){3}\d{1,3}))\])(:[0-9]+)?([/\?].*)?$/,d=/^http(s)?:\/\/(([\w-]+\.)+(xn--[\w-]+|\w+)|\[([\da-f]{0,4}:)*(?:[\da-f]{1,4}|(?:(?:\d{1,3}\.){3}\d{1,3}))\])(:[0-9]+)?([/\?].*)?$/;return b?a.match(d)!==null:a.match(c)!==null||a.match(d)!==null}f["default"]=a}),66);