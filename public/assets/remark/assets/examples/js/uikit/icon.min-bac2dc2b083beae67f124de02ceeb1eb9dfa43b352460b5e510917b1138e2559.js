/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(document,window,$){"use strict";$(document).ready(function($){Site.run(),$("#icon_change").asRange({tip:!1,scale:!1,onChange:function(value){$("#icon_size").text(value+"px"),$(".panel .icon").css("font-size",value)}}),$(".input-search input[type=text]").on("keyup",function(){var val=$(this).val();""!==val?($("[data-name]").addClass("is-hide"),$("[data-name*="+val+"]").removeClass("is-hide")):$("[data-name]").removeClass("is-hide"),$(".icon-group").each(function(){var $group=$(this);0===$group.find("[data-name]:not(.is-hide)").length?$group.hide():$group.show()})})})}(document,window,jQuery);
