/*
* bootstrap-table - v1.11.1 - 2017-02-22
* https://github.com/wenzhixin/bootstrap-table
* Copyright (c) 2017 zhixin wen
* Licensed MIT License
*/

!function(a){"use strict";a.extend(a.fn.bootstrapTable.defaults,{showFilter:!1});var b=a.fn.bootstrapTable.Constructor,c=b.prototype.init,d=b.prototype.initSearch;b.prototype.init=function(){c.apply(this,Array.prototype.slice.apply(arguments));var b=this;this.$el.on("load-success.bs.table",function(){b.options.showFilter&&a(b.options.toolbar).bootstrapTableFilter({connectTo:b.$el})})},b.prototype.initSearch=function(){d.apply(this,Array.prototype.slice.apply(arguments)),"server"!==this.options.sidePagination&&"function"==typeof this.searchCallback&&(this.data=a.grep(this.options.data,this.searchCallback))},b.prototype.getData=function(){return this.searchText||this.searchCallback?this.data:this.options.data},b.prototype.getColumns=function(){return this.columns},b.prototype.registerSearchCallback=function(a){this.searchCallback=a},b.prototype.updateSearch=function(){this.options.pageNumber=1,this.initSearch(),this.updatePagination()},b.prototype.getServerUrl=function(){return"server"===this.options.sidePagination?this.options.url:!1},a.fn.bootstrapTable.methods.push("getColumns","registerSearchCallback","updateSearch","getServerUrl")}(jQuery);
