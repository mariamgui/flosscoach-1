/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/owl-carousel",["exports","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.Plugin),global.PluginOwlCarousel=mod.exports}}(this,function(exports,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="owlCarousel",OwlCarousel=function(_Plugin){function OwlCarousel(){return babelHelpers.classCallCheck(this,OwlCarousel),babelHelpers.possibleConstructorReturn(this,(OwlCarousel.__proto__||Object.getPrototypeOf(OwlCarousel)).apply(this,arguments))}return babelHelpers.inherits(OwlCarousel,_Plugin),babelHelpers.createClass(OwlCarousel,[{key:"getName",value:function(){return NAME}}],[{key:"getDefaults",value:function(){return{loop:!0,nav:!0,dots:!1,dotsClass:"owl-dots owl-dots-fall",responsive:{0:{items:1},600:{items:3}}}}}]),OwlCarousel}(_Plugin3.default);_Plugin3.default.register(NAME,OwlCarousel),exports.default=OwlCarousel});
