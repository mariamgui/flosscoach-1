/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/jquery-placeholder",["exports","jquery","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("jquery"),require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.jQuery,global.Plugin),global.PluginJqueryPlaceholder=mod.exports}}(this,function(exports,_jquery,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _jquery2=babelHelpers.interopRequireDefault(_jquery),_Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="placeholder",Placeholder=function(_Plugin){function Placeholder(){return babelHelpers.classCallCheck(this,Placeholder),babelHelpers.possibleConstructorReturn(this,(Placeholder.__proto__||Object.getPrototypeOf(Placeholder)).apply(this,arguments))}return babelHelpers.inherits(Placeholder,_Plugin),babelHelpers.createClass(Placeholder,[{key:"getName",value:function(){return NAME}},{key:"render",value:function(){if(_jquery2.default.fn.placeholder){var $el=this.$el;$el.placeholder()}}}],[{key:"getDefaults",value:function(){return{}}}]),Placeholder}(_Plugin3.default);_Plugin3.default.register(NAME,Placeholder),exports.default=Placeholder});
