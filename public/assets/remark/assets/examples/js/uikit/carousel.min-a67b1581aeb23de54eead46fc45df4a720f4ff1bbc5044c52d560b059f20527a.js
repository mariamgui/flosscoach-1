/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(document,window,$){"use strict";var Site=window.Site;$(document).ready(function($){Site.run(),$("#exampleSingleItem").slick(),$("#exampleMultipleItems").slick({infinite:!0,slidesToShow:3,slidesToScroll:3}),$("#exampleResponsive").slick({dots:!0,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$("#exampleVariableWidth").slick({dots:!0,infinite:!0,speed:300,slidesToShow:1,centerMode:!0,variableWidth:!0}),$("#exampleAdaptiveHeight").slick({dots:!0,infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0}),$("#exampleData").slick(),$("#exampleCenter").slick({centerMode:!0,centerPadding:"60px",slidesToShow:3,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:3}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:1}}]}),$("#exampleLazy").slick({lazyLoad:"ondemand",slidesToShow:3,slidesToScroll:1}),$("#exampleAutoplay").slick({dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3}),$("#exampleFade").slick({dots:!0,infinite:!0,speed:500,fade:!0,slide:"div",cssEase:"linear"});var slideIndex=1;$("#exampleAddRemove").slick({dots:!0,slidesToShow:3,speed:500,slidesToScroll:3}),$("#exampleAddSlide").on("click",function(){slideIndex++,$("#exampleAddRemove").slick("slickAdd","<div><h3>"+slideIndex+"</h3></div>")}),$("#exampleRemoveSlide").on("click",function(){$("#exampleAddRemove").slick("slickRemove",slideIndex-1),0!==slideIndex&&slideIndex--}),$("#exampleFiltering").slick({slidesToShow:4,slidesToScroll:4});var filtered=!1;$("#exampleFilter").on("click",function(){filtered===!1?($("#exampleFiltering").slick("slickFilter",":even"),$(this).text("Unfilter Slides"),filtered=!0):($("#exampleFiltering").slick("slickUnfilter"),$(this).text("Filter Slides"),filtered=!1)})})}(document,window,jQuery);
