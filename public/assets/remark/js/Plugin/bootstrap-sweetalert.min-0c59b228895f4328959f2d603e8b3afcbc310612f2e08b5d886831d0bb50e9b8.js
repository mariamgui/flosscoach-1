/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/bootstrap-sweetalert",["exports","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.Plugin),global.PluginBootstrapSweetalert=mod.exports}}(this,function(exports,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="sweetalert",Sweetalert=function(_Plugin){function Sweetalert(){return babelHelpers.classCallCheck(this,Sweetalert),babelHelpers.possibleConstructorReturn(this,(Sweetalert.__proto__||Object.getPrototypeOf(Sweetalert)).apply(this,arguments))}return babelHelpers.inherits(Sweetalert,_Plugin),babelHelpers.createClass(Sweetalert,[{key:"getName",value:function(){return NAME}},{key:"render",value:function(){this.$el.data("sweetalertWrapApi",this)}},{key:"show",value:function(){"undefined"!=typeof swal&&swal(this.options)}}],[{key:"api",value:function(){return"click|show"}}]),Sweetalert}(_Plugin3.default);_Plugin3.default.register(NAME,Sweetalert),exports.default=Sweetalert});
