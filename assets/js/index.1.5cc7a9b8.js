(()=>{var e={664:()=>{document.querySelector(".capture-form__submit-button").addEventListener("click",(function(){document.querySelector(".capture-form__phone-input").value=""}))},866:()=>{document.querySelector(".promo__submit-button").addEventListener("click",(function(){document.querySelector(".promo__phone-input").value=""}))}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,o){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===e(i)?i:String(i)),r)}var i}function n(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(e){if("string"==typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return s=e.done,e},e:function(e){l=!0,a=e},f:function(){try{s||null==o.return||o.return()}finally{if(l)throw a}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}o(866),o(664),new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=Object.assign({linkAttributeName:"data-modal",beforeOpen:function(){},afterClose:function(){}},t),this.isOpened=!1,this.openedWindow=!1,this._modalBlock=!1,this.starter=!1,this._nextWindows=!1,this._scrollPosition=0,this._reopenTrigger=!1,this._focusElements=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'];var o=document.querySelector(".modal__overlay");o?this._overlay=o:(this._overlay=document.createElement("div"),this._overlay.classList.add("modal__overlay"),document.body.appendChild(this._overlay)),this.eventsFeeler()}var o,n;return o=e,(n=[{key:"eventsFeeler",value:function(){var e=this;document.addEventListener("click",(function(t){var o=t.target.closest("[".concat(e.config.linkAttributeName,"]"));if(o){t.preventDefault(),e.starter=o;var n=e.starter.getAttribute(e.config.linkAttributeName);return e._nextWindows=document.querySelector(n),void e.open()}t.target.closest("[data-close]")&&e.close()})),window.addEventListener("keydown",(function(t){if(27===t.which&&e.isOpened)return t.preventDefault(),void e.close();9===t.which&&e.isOpened&&e.focusCatcher(t)})),document.addEventListener("mousedown",(function(t){t.target.classList.contains("modal__window-wrap")&&(e._overlayChecker=!0)})),document.addEventListener("mouseup",(function(t){if(e._overlayChecker&&t.target.classList.contains("modal__window-wrap"))return t.preventDefault(),e._overlayChecker=!e._overlayChecker,void e.close();e._overlayChecker=!1}))}},{key:"open",value:function(){if(this._nextWindows){if(this.isOpened)return this._reopenTrigger=!0,void this.close();this.openedWindow=this._nextWindows,this._modalBlock=this.openedWindow.querySelector(".modal__window"),this.config.beforeOpen(this),this._bodyScrollControl(),this._overlay.classList.add("modal__overlay_active"),this.openedWindow.classList.add("modal_active"),this.openedWindow.setAttribute("aria-hidden","false"),this.focusControl(),this.isOpened=!0}else console.log("Warning: modal selector is not found")}},{key:"close",value:function(){this.isOpened&&(this.openedWindow.classList.remove("modal_active"),this._overlay.classList.remove("modal__overlay_active"),this.openedWindow.setAttribute("aria-hidden","true"),this.focusControl(),this._bodyScrollControl(),this.isOpened=!1,this.config.afterClose(this),this._reopenTrigger&&(this._reopenTrigger=!1,this.open()))}},{key:"_bodyScrollControl",value:function(){var e=document.documentElement;if(!0===this.isOpened)return e.classList.remove("modal__opened"),e.style.marginRight="",window.scrollTo(0,this._scrollPosition),void(e.style.top="");this._scrollPosition=window.pageYOffset,e.style.top="".concat(-this._scrollPosition,"px"),e.classList.add("modal__opened");var t=window.innerWidth-e.clientWidth;t&&(e.style.marginRight="".concat(t,"px"))}},{key:"focusControl",value:function(){var e=this.openedWindow.querySelectorAll(this._focusElements);this.isOpened&&this.starter?this.starter.focus():e.length&&e[0].focus()}},{key:"focusCatcher",value:function(e){var t=this.openedWindow.querySelectorAll(this._focusElements),o=Array.prototype.slice.call(t);if(this.openedWindow.contains(document.activeElement)){var n=o.indexOf(document.activeElement);e.shiftKey&&0===n&&(o[o.length-1].focus(),e.preventDefault()),e.shiftKey||n!==o.length-1||(o[0].focus(),e.preventDefault())}else o[0].focus(),e.preventDefault()}}])&&t(o.prototype,n),Object.defineProperty(o,"prototype",{writable:!1}),e}())({linkAttributeName:"data-modal",beforeOpen:function(){document.documentElement.style.scrollBehavior="auto"},afterClose:function(){document.documentElement.style.scrollBehavior="smooth"}});var i,a=document.querySelectorAll(".modal__input"),s=n(document.querySelectorAll(".modal__submit-button"));try{for(s.s();!(i=s.n()).done;)i.value.addEventListener("click",(function(){var e,t=n(a);try{for(t.s();!(e=t.n()).done;)e.value.value=""}catch(e){t.e(e)}finally{t.f()}}))}catch(e){s.e(e)}finally{s.f()}})()})();