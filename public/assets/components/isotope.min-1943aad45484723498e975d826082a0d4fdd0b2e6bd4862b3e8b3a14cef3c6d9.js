/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

$.components.register("isotope",{mode:"init",defaults:{},init:function(context){if("undefined"!=typeof $.fn.isotope){var defaults=$.components.getDefaults("isotope"),callback=function(){$('[data-plugin="isotope"]',context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data());$this.isotope(options)})};context!==document?callback():$(window).on("load",function(){callback()})}}});