$(function(){const t=$("[role='tab']"),e=$("[id^='updates-dropdown-']").not('[id$="btn"]');SP.currentPage.updatesDropdown={getParent:function(){return HRB.utils.djshook("updates-dropdown-container")},getDropdown:function(){return HRB.utils.djshook("updates-dropdown").filter(".updates-dropdown")},isOpen:!1,toggleDropdown:function(){0==this.isOpen?(this.show(),HRB.utils.djshook("show-updates-dropdown").attr("aria-expanded","true")):(this.hide(),HRB.utils.djshook("show-updates-dropdown").attr("aria-expanded","false"))},show:function(){this.getDropdown().show(),this.isOpen=!0,setTimeout(function(){SP.currentPage.updatesDropdown.onBodyClose()},300)},hide:function(){this.getDropdown().hide(),this.isOpen=!1,this.offBodyClose(),$(window).trigger("updatesDropdownHide"),HRB.utils.djshook("show-updates-dropdown").attr("aria-expanded","false").focus()},onBodyClose:function(){$("body").on("click.closeDropdown",function(t){SP.currentPage.updatesDropdown.getDropdown().is(t.target)||SP.currentPage.updatesDropdown.getDropdown().has(t.target).length||SP.currentPage.updatesDropdown.hide()}),$("body").on("keyup",function(t){"Escape"==t.key&&SP.currentPage.updatesDropdown.hide()})},offBodyClose:function(){$("body").off("click.closeDropdown"),$("body").off("keyup")},switchTab:function(o,n){n.focus(),n.removeAttribute("tabindex"),n.setAttribute("class","active"),n.setAttribute("aria-selected","true"),o.removeAttribute("aria-selected"),o.setAttribute("tabindex","-1"),o.removeAttribute("class");const d=Array.prototype.indexOf.call(t,n),s=Array.prototype.indexOf.call(t,o),r=$(e[s]),a=$(e[d]);r.hide(),a.show()}},Array.prototype.forEach.call(t,e=>{e.addEventListener("keydown",e=>{const o=Array.prototype.indexOf.call(t,e.currentTarget),n="ArrowLeft"===e.key||"Left"===e.key?o-1:"ArrowRight"===e.key||"Right"===e.key?o+1:null;null!==n&&(e.preventDefault(),t[n]&&SP.currentPage.updatesDropdown.switchTab(e.currentTarget,t[n]))})}),HRB.utils.djshook("show-updates-dropdown").on("click",function(){SP.currentPage.updatesDropdown.toggleDropdown()}),HRB.utils.djshook("show-updates-dropdown").on("keydown",t=>{" "!==t.key&&"Spacebar"!==t.key||(t.preventDefault(),SP.currentPage.updatesDropdown.toggleDropdown())})}),$(function(){const t=$(".updates-dropdown-nav").find("a, button"),e=$(".updates-dropdown-sections-container > div");t.on("click",function(){if($this=$(this),"updates-dropdown-close"!=$this.attr("data-js-hook"))return $elToShow=$($this.attr("href")),t.removeClass("active"),$this.addClass("active"),t.filter("[role='tab']").removeAttr("aria-selected").attr("tabindex","-1"),$this.attr("aria-selected","true").removeAttr("tabindex"),e.hide(),$elToShow.show(),!1;SP.currentPage.updatesDropdown.hide()})}),$(function(){var t=HRB.utils.djshook("images-container"),e=function(){t.css("height",315*parseInt(t.css("width"))/850)};t.length&&(e(),$(window).on("resize",e))}),$(function(){var t=$(".starter .masthead .updates-dropdown-container"),e=$(".masthead"),o=function(){t.css("top",(e.height()-t.height())/2)};t.length&&(o(),$(window).on("resize",o))}),$(function(){var t=HRB.utils.djshook("updates-dropdown-container"),e=$("#replace-with-subscribe");e.length&&(e.replaceWith(t),t.css("display","inline-block"))}),$(function(){var t=$("[data-js-hook='incident-subscription-modal']");$("[id^='btn-subscribe-modal']").each((e,o)=>{var n="#"+t.get(e).id,d=$(n);o.addEventListener("keydown",t=>{" "!==t.key&&"Spacebar"!==t.key||(d.modal("toggle"),t.preventDefault())})}),t.on("shown.bs.modal",function(){var t=$(this).find("[data-js-hook='email']"),e=$(this).find("[data-js-hook='phone-country']"),o=$(this).find("[data-js-hook='incident-modal-subscribe-btn']");1===t.length?t.focus():1===e.length?e.focus():o.focus()}),t.one("shown.bs.modal",function(){var t=$(this),e=t.find("[data-js-hook='incident-modal-close']"),o=t.find("[data-js-hook='incident-modal-subscribe-btn']"),n=t.find("[data-js-hook='captcha-terms-of-service-link']"),d=1===n.length?n:o;[e,d].forEach(t=>{t.on("keydown",t=>{KEYCODE_TAB=9,("Tab"===t.key||t.keyCode===KEYCODE_TAB)&&(t.shiftKey?e.is(":focus")&&(d.focus(),t.preventDefault()):d.is(":focus")&&(e.focus(),t.preventDefault()))})})})});