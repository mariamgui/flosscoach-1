/**
* jQuery asProgress v0.2.3
* https://github.com/amazingSurge/jquery-asProgress
*
* Copyright (c) amazingSurge
* Released under the LGPL-3.0 license
*/

!function(t,e){if("function"==typeof define&&define.amd)define(["jquery"],e);else if("undefined"!=typeof exports)e(require("jquery"));else{var i={exports:{}};e(t.jQuery),t.jqueryAsProgressEs=i.exports}}(this,function(t){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t){return"string"==typeof t&&t.includes("%")}function a(){return"undefined"!=typeof window.performance&&window.performance.now?window.performance.now():Date.now()}var s=e(t),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u={namespace:"progress",bootstrap:!1,min:0,max:100,goal:100,speed:20,easing:"ease",labelCallback:function(t){var e=this.getPercentage(t);return e+"%"}},l=function(t,e,i,n){var a=function(t,e){return 1-3*e+3*t},s=function(t,e){return 3*e-6*t},r=function(t){return 3*t},o=function(t,e,i){return((a(e,i)*t+s(e,i))*t+r(e))*t},u=function(t,e,i){return 3*a(e,i)*t*t+2*s(e,i)*t+r(e)},l=function(e){for(var n=e,a=0;a<4;++a){var s=u(n,t,i);if(0===s)return n;var r=o(n,t,i)-e;n-=r/s}return n};return t===e&&i===n?{css:"linear",fn:function(t){return t}}:{css:"cubic-bezier("+t+","+e+","+i+","+n+")",fn:function(t){return o(l(t),e,n)}}},f={ease:l(.25,.1,.25,1),linear:l(0,0,1,1),"ease-in":l(.42,0,1,1),"ease-out":l(0,0,.58,1),"ease-in-out":l(.42,0,.58,1)};Date.now||(Date.now=function(){return(new Date).getTime()});for(var h=["webkit","moz"],c=0;c<h.length&&!window.requestAnimationFrame;++c){var d=h[c];window.requestAnimationFrame=window[d+"RequestAnimationFrame"],window.cancelAnimationFrame=window[d+"CancelAnimationFrame"]||window[d+"CancelRequestAnimationFrame"]}!/iP(ad|hone|od).*OS (6|7)/.test(window.navigator.userAgent)&&window.requestAnimationFrame&&window.cancelAnimationFrame||!function(){var t=0;window.requestAnimationFrame=function(e){var i=Date.now(),n=Math.max(t+16,i);return setTimeout(function(){e(t=n)},n-i)},window.cancelAnimationFrame=clearTimeout}();var m="asProgress",g=function(){function t(e,n){i(this,t),this.element=e,this.$element=(0,s.default)(e),this.options=s.default.extend({},u,n,this.$element.data()),this.options.bootstrap?(this.namespace="progress",this.$target=this.$element.find(".progress-bar"),this.classes={label:this.namespace+"-label",bar:this.namespace+"-bar",disabled:"is-disabled"}):(this.namespace=this.options.namespace,this.classes={label:this.namespace+"__label",bar:this.namespace+"__bar",disabled:"is-disabled"},this.$target=this.$element,this.$element.addClass(this.namespace)),this.easing=f[this.options.easing]||f.ease,this.min=this.$target.attr("aria-valuemin"),this.max=this.$target.attr("aria-valuemax"),this.min=this.min?parseInt(this.min,10):this.options.min,this.max=this.max?parseInt(this.max,10):this.options.max,this.first=this.$target.attr("aria-valuenow"),this.first=this.first?parseInt(this.first,10):this.min,this.now=this.first,this.goal=this.options.goal,this._frameId=null,this._states={},this.initialized=!1,this._trigger("init"),this.init()}return o(t,[{key:"init",value:function(){this.$bar=this.$element.find("."+this.classes.bar),this.$label=this.$element.find("."+this.classes.label),this.reset(),this.initialized=!0,this._trigger("ready")}},{key:"_trigger",value:function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var a=[this].concat(i);this.$element.trigger(m+"::"+t,a),t=t.replace(/\b\w+\b/g,function(t){return t.substring(0,1).toUpperCase()+t.substring(1)});var s="on"+t;"function"==typeof this.options[s]&&this.options[s].apply(this,i)}},{key:"is",value:function(t){return this._states[t]&&this._states[t]>0}},{key:"getPercentage",value:function(t){return Math.round(100*(t-this.min)/(this.max-this.min))}},{key:"go",value:function(t){var e=this;this.is("disabled")||!function(){var i=e;e._clear(),n(t)&&(t=parseInt(t.replace("%",""),10),t=Math.round(e.min+t/100*(e.max-e.min))),"undefined"==typeof t&&(t=e.goal),t>e.max?t=e.max:t<e.min&&(t=e.min);var s=i.now,r=a(),o=function e(n){var a=(n-r)/i.options.speed,o=Math.round(i.easing.fn(a/100)*(i.max-i.min));t>s?(o=s+o,o>t&&(o=t)):(o=s-o,o<t&&(o=t)),i._update(o),o===t?(window.cancelAnimationFrame(i._frameId),i._frameId=null,i.now===i.goal&&i._trigger("finish")):i._frameId=window.requestAnimationFrame(e)};i._frameId=window.requestAnimationFrame(o)}()}},{key:"_update",value:function(t){this.now=t;var e=this.getPercentage(this.now);this.$bar.css("width",e+"%"),this.$target.attr("aria-valuenow",this.now),this.$label.length>0&&"function"==typeof this.options.labelCallback&&this.$label.html(this.options.labelCallback.call(this,[this.now])),this._trigger("update",t)}},{key:"_clear",value:function(){this._frameId&&(window.cancelAnimationFrame(this._frameId),this._frameId=null)}},{key:"get",value:function(){return this.now}},{key:"start",value:function(){this.is("disabled")||(this._clear(),this._trigger("start"),this.go(this.goal))}},{key:"reset",value:function(){this.is("disabled")||(this._clear(),this._update(this.first),this._trigger("reset"))}},{key:"stop",value:function(){this._clear(),this._trigger("stop")}},{key:"finish",value:function(){this.is("disabled")||(this._clear(),this._update(this.goal),this._trigger("finish"))}},{key:"destroy",value:function(){this.$element.data(m,null),this._trigger("destroy")}},{key:"enable",value:function(){this._states.disabled=0,this.$element.removeClass(this.classes.disabled)}},{key:"disable",value:function(){this._states.disabled=1,this.$element.addClass(this.classes.disabled)}}],[{key:"registerEasing",value:function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];f[t]=l.apply(void 0,i)}},{key:"getEasing",value:function(t){return f[t]}},{key:"setDefaults",value:function(t){s.default.extend(u,s.default.isPlainObject(t)&&t)}}]),t}(),p={version:"0.2.3"},v="asProgress",w=s.default.fn.asProgress,b=function(t){for(var e=this,i=arguments.length,n=Array(i>1?i-1:0),a=1;a<i;a++)n[a-1]=arguments[a];if("string"==typeof t){var o=function(){var i=t;if(/^_/.test(i))return{v:!1};if(!/^(get)/.test(i))return{v:e.each(function(){var t=s.default.data(this,v);t&&"function"==typeof t[i]&&t[i].apply(t,n)})};var a=e.first().data(v);return a&&"function"==typeof a[i]?{v:a[i].apply(a,n)}:void 0}();if("object"===("undefined"==typeof o?"undefined":r(o)))return o.v}return this.each(function(){(0,s.default)(this).data(v)||(0,s.default)(this).data(v,new g(this,t))})};s.default.fn.asProgress=b,s.default.asProgress=s.default.extend({setDefaults:g.setDefaults,registerEasing:g.registerEasing,getEasing:g.getEasing,noConflict:function(){return s.default.fn.asProgress=w,b}},p)});
