/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/bootstrap-touchspin",["exports","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.Plugin),global.PluginBootstrapTouchspin=mod.exports}}(this,function(exports,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="TouchSpin",TouchSpin=function(_Plugin){function TouchSpin(){return babelHelpers.classCallCheck(this,TouchSpin),babelHelpers.possibleConstructorReturn(this,(TouchSpin.__proto__||Object.getPrototypeOf(TouchSpin)).apply(this,arguments))}return babelHelpers.inherits(TouchSpin,_Plugin),babelHelpers.createClass(TouchSpin,[{key:"getName",value:function(){return NAME}}],[{key:"getDefaults",value:function(){return{verticalupclass:"md-plus",verticaldownclass:"md-minus",buttondown_class:"btn btn-default",buttonup_class:"btn btn-default"}}}]),TouchSpin}(_Plugin3.default);_Plugin3.default.register(NAME,TouchSpin),exports.default=TouchSpin});
