/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/card",["exports","jquery","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("jquery"),require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.jQuery,global.Plugin),global.PluginCard=mod.exports}}(this,function(exports,_jquery,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _jquery2=babelHelpers.interopRequireDefault(_jquery),_Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="card",Card=function(_Plugin){function Card(){return babelHelpers.classCallCheck(this,Card),babelHelpers.possibleConstructorReturn(this,(Card.__proto__||Object.getPrototypeOf(Card)).apply(this,arguments))}return babelHelpers.inherits(Card,_Plugin),babelHelpers.createClass(Card,[{key:"getName",value:function(){}},{key:"render",value:function(){if(_jquery2.default.fn.card){var $el=this.$el,options=this.options;options.target&&(options.container=(0,_jquery2.default)(options.target)),$el.card(options)}}}],[{key:"getDefaults",value:function(){return{}}}]),Card}(_Plugin3.default);_Plugin3.default.register(NAME,Card),exports.default=Card});
