!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var r,i,a,f,u,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function O(e){return c=e,u=setTimeout(h,t),s?p(e):f}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=b();if(j(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function w(e){return u=void 0,v&&r?p(e):(r=i=void 0,f)}function T(){var e=b(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return O(l);if(d)return u=setTimeout(h,t),p(l)}return void 0===u&&(u=setTimeout(h,t)),f}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},T.flush=function(){return void 0===u?f:w(b())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var O,j=document.querySelector(".feedback-form");j.addEventListener("input",e(t)((function(e){var t=JSON.parse(localStorage.getItem("feedback-form-state"))||{};t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}),2e3)),j.addEventListener("submit",(function(e){e.preventDefault(),j.reset(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state")})),null!==(O=JSON.parse(localStorage.getItem("feedback-form-state")))&&(j.email.value=O.email||"",j.message.value=O.message||"")}();
//# sourceMappingURL=03-feedback.1cf91f60.js.map