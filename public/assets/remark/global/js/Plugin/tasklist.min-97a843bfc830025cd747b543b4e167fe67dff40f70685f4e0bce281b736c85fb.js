/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/tasklist",["exports","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.Plugin),global.PluginTasklist=mod.exports}}(this,function(exports,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="tasklist",TaskList=function(_Plugin){function TaskList(){return babelHelpers.classCallCheck(this,TaskList),babelHelpers.possibleConstructorReturn(this,(TaskList.__proto__||Object.getPrototypeOf(TaskList)).apply(this,arguments))}return babelHelpers.inherits(TaskList,_Plugin),babelHelpers.createClass(TaskList,[{key:"getName",value:function(){return NAME}},{key:"render",value:function(){this.$el.data("tasklistApi",this),this.$checkbox=this.$el.find('[type="checkbox"]'),this.$el.trigger("change.site.task")}},{key:"toggle",value:function(){this.$checkbox.is(":checked")?this.$el.addClass("task-done"):this.$el.removeClass("task-done")}}],[{key:"api",value:function(){return"change|toggle"}}]),TaskList}(_Plugin3.default);_Plugin3.default.register(NAME,TaskList),exports.default=TaskList});
