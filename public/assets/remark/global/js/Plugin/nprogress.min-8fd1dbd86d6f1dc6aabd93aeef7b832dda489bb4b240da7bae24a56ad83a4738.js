/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/nprogress",["exports","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.Plugin),global.PluginNprogress=mod.exports}}(this,function(exports,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="nprogress",Nprogress=function(_Plugin){function Nprogress(){return babelHelpers.classCallCheck(this,Nprogress),babelHelpers.possibleConstructorReturn(this,(Nprogress.__proto__||Object.getPrototypeOf(Nprogress)).apply(this,arguments))}return babelHelpers.inherits(Nprogress,_Plugin),babelHelpers.createClass(Nprogress,[{key:"getName",value:function(){return NAME}},{key:"render",value:function(){"undefined"!=typeof NProgress&&NProgress.configure(this.options)}}],[{key:"getDefaults",value:function(){return{minimum:.15,trickleRate:.07,trickleSpeed:360,showSpinner:!1,template:'<div class="bar" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'}}}]),Nprogress}(_Plugin3.default);_Plugin3.default.register(NAME,Nprogress),exports.default=Nprogress});
