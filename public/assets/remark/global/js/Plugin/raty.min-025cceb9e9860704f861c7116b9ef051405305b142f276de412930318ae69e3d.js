/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/raty",["exports","jquery","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("jquery"),require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.jQuery,global.Plugin),global.PluginRaty=mod.exports}}(this,function(exports,_jquery,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _jquery2=babelHelpers.interopRequireDefault(_jquery),_Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="rating",Rating=function(_Plugin){function Rating(){return babelHelpers.classCallCheck(this,Rating),babelHelpers.possibleConstructorReturn(this,(Rating.__proto__||Object.getPrototypeOf(Rating)).apply(this,arguments))}return babelHelpers.inherits(Rating,_Plugin),babelHelpers.createClass(Rating,[{key:"getName",value:function(){return NAME}},{key:"render",value:function(){if(_jquery2.default.fn.raty){var $el=this.$el;this.options.hints&&(this.options.hints=this.options.hints.split(",")),$el.raty(this.options)}}}],[{key:"getDefaults",value:function(){return{targetKeep:!0,icon:"font",starType:"i",starOff:"icon md-star",starOn:"icon md-star orange-600",cancelOff:"icon md-minus-circle",cancelOn:"icon md-minus-circle orange-600",starHalf:"icon md-star-half orange-500"}}}]),Rating}(_Plugin3.default);_Plugin3.default.register(NAME,Rating),exports.default=Rating});
