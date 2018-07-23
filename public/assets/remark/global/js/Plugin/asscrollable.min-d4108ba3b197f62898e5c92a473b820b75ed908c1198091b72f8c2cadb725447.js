/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/asscrollable",["exports","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.Plugin),global.PluginAsscrollable=mod.exports}}(this,function(exports,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="scrollable",Scrollable=function(_Plugin){function Scrollable(){return babelHelpers.classCallCheck(this,Scrollable),babelHelpers.possibleConstructorReturn(this,(Scrollable.__proto__||Object.getPrototypeOf(Scrollable)).apply(this,arguments))}return babelHelpers.inherits(Scrollable,_Plugin),babelHelpers.createClass(Scrollable,[{key:"getName",value:function(){return NAME}},{key:"render",value:function(){var $el=this.$el;$el.asScrollable(this.options)}}],[{key:"getDefaults",value:function(){return{namespace:"scrollable",contentSelector:"> [data-role='content']",containerSelector:"> [data-role='container']"}}}]),Scrollable}(_Plugin3.default);_Plugin3.default.register(NAME,Scrollable),exports.default=Scrollable});
