/*
* bootstrap-table - v1.11.1 - 2017-02-22
* https://github.com/wenzhixin/bootstrap-table
* Copyright (c) 2017 zhixin wen
* Licensed MIT License
*/

!function(a){"use strict";var b=!1,c=function(b){var c=b.$sortModal.selector,d=c.substr(1);if(!a(d).hasClass("modal")){var e='  <div class="modal fade" id="'+d+'" tabindex="-1" role="dialog" aria-labelledby="'+d+'Label" aria-hidden="true">';e+='         <div class="modal-dialog">',e+='             <div class="modal-content">',e+='                 <div class="modal-header">',e+='                     <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>',e+='                     <h4 class="modal-title" id="'+d+'Label">'+b.options.formatMultipleSort()+"</h4>",e+="                 </div>",e+='                 <div class="modal-body">',e+='                     <div class="bootstrap-table">',e+='                         <div class="fixed-table-toolbar">',e+='                             <div class="bars">',e+='                                 <div id="toolbar">',e+='                                     <button id="add" type="button" class="btn btn-default"><i class="'+b.options.iconsPrefix+" "+b.options.icons.plus+'"></i> '+b.options.formatAddLevel()+"</button>",e+='                                     <button id="delete" type="button" class="btn btn-default" disabled><i class="'+b.options.iconsPrefix+" "+b.options.icons.minus+'"></i> '+b.options.formatDeleteLevel()+"</button>",e+="                                 </div>",e+="                             </div>",e+="                         </div>",e+='                         <div class="fixed-table-container">',e+='                             <table id="multi-sort" class="table">',e+="                                 <thead>",e+="                                     <tr>",e+="                                         <th></th>",e+='                                         <th><div class="th-inner">'+b.options.formatColumn()+"</div></th>",e+='                                         <th><div class="th-inner">'+b.options.formatOrder()+"</div></th>",e+="                                     </tr>",e+="                                 </thead>",e+="                                 <tbody></tbody>",e+="                             </table>",e+="                         </div>",e+="                     </div>",e+="                 </div>",e+='                 <div class="modal-footer">',e+='                     <button type="button" class="btn btn-default" data-dismiss="modal">'+b.options.formatCancel()+"</button>",e+='                     <button type="button" class="btn btn-primary">'+b.options.formatSort()+"</button>",e+="                 </div>",e+="             </div>",e+="         </div>",e+="     </div>",a("body").append(a(e)),b.$sortModal=a(c);var f=b.$sortModal.find("tbody > tr");if(b.$sortModal.off("click","#add").on("click","#add",function(){var a=b.$sortModal.find(".multi-sort-name:first option").length,c=b.$sortModal.find("tbody tr").length;a>c&&(c++,b.addLevel(),b.setButtonStates())}),b.$sortModal.off("click","#delete").on("click","#delete",function(){var a=b.$sortModal.find(".multi-sort-name:first option").length,c=b.$sortModal.find("tbody tr").length;c>1&&a>=c&&(c--,b.$sortModal.find("tbody tr:last").remove(),b.setButtonStates())}),b.$sortModal.off("click",".btn-primary").on("click",".btn-primary",function(){var c=b.$sortModal.find("tbody > tr"),d=b.$sortModal.find("div.alert"),e=[],f=[];b.options.sortPriority=a.map(c,function(b){var c=a(b),d=c.find(".multi-sort-name").val(),f=c.find(".multi-sort-order").val();return e.push(d),{sortName:d,sortOrder:f}});for(var g=e.sort(),h=0;h<e.length-1;h++)g[h+1]==g[h]&&f.push(g[h]);if(f.length>0)0===d.length&&(d='<div class="alert alert-danger" role="alert"><strong>'+b.options.formatDuplicateAlertTitle()+"</strong> "+b.options.formatDuplicateAlertDescription()+"</div>",a(d).insertBefore(b.$sortModal.find(".bars")));else{if(1===d.length&&a(d).remove(),b.$sortModal.modal("hide"),b.options.sortName="","server"===b.options.sidePagination)return b.options.queryParams=function(a){return a.multiSort=b.options.sortPriority,a},void b.initServer(b.options.silentSort);b.onMultipleSort()}}),(null===b.options.sortPriority||0===b.options.sortPriority.length)&&b.options.sortName&&(b.options.sortPriority=[{sortName:b.options.sortName,sortOrder:b.options.sortOrder}]),null!==b.options.sortPriority&&b.options.sortPriority.length>0){if(f.length<b.options.sortPriority.length&&"object"==typeof b.options.sortPriority)for(var g=0;g<b.options.sortPriority.length;g++)b.addLevel(g,b.options.sortPriority[g])}else b.addLevel(0);b.setButtonStates()}};a.extend(a.fn.bootstrapTable.defaults,{showMultiSort:!1,sortPriority:null,onMultipleSort:function(){return!1}}),a.extend(a.fn.bootstrapTable.defaults.icons,{sort:"glyphicon-sort",plus:"glyphicon-plus",minus:"glyphicon-minus"}),a.extend(a.fn.bootstrapTable.Constructor.EVENTS,{"multiple-sort.bs.table":"onMultipleSort"}),a.extend(a.fn.bootstrapTable.locales,{formatMultipleSort:function(){return"Multiple Sort"},formatAddLevel:function(){return"Add Level"},formatDeleteLevel:function(){return"Delete Level"},formatColumn:function(){return"Column"},formatOrder:function(){return"Order"},formatSortBy:function(){return"Sort by"},formatThenBy:function(){return"Then by"},formatSort:function(){return"Sort"},formatCancel:function(){return"Cancel"},formatDuplicateAlertTitle:function(){return"Duplicate(s) detected!"},formatDuplicateAlertDescription:function(){return"Please remove or change any duplicate column."},formatSortOrders:function(){return{asc:"Ascending",desc:"Descending"}}}),a.extend(a.fn.bootstrapTable.defaults,a.fn.bootstrapTable.locales);var d=a.fn.bootstrapTable.Constructor,e=d.prototype.initToolbar;d.prototype.initToolbar=function(){this.showToolbar=!0;var d=this,f="#sortModal_"+this.$el.attr("id");if(this.$sortModal=a(f),e.apply(this,Array.prototype.slice.apply(arguments)),this.options.showMultiSort){var g=this.$toolbar.find(">.btn-group").first(),h=this.$toolbar.find("div.multi-sort");h.length||(h='  <button class="multi-sort btn btn-default'+(void 0===this.options.iconSize?"":" btn-"+this.options.iconSize)+'" type="button" data-toggle="modal" data-target="'+f+'" title="'+this.options.formatMultipleSort()+'">',h+='     <i class="'+this.options.iconsPrefix+" "+this.options.icons.sort+'"></i>',h+="</button>",g.append(h),c(d)),this.$el.on("sort.bs.table",function(){b=!0}),this.$el.on("multiple-sort.bs.table",function(){b=!1}),this.$el.on("load-success.bs.table",function(){b||null===d.options.sortPriority||"object"!=typeof d.options.sortPriority||"server"===d.options.sidePagination||d.onMultipleSort()}),this.$el.on("column-switch.bs.table",function(a,b){for(var e=0;e<d.options.sortPriority.length;e++)d.options.sortPriority[e].sortName===b&&d.options.sortPriority.splice(e,1);d.assignSortableArrows(),d.$sortModal.remove(),c(d)}),this.$el.on("reset-view.bs.table",function(){b||null===d.options.sortPriority||"object"!=typeof d.options.sortPriority||d.assignSortableArrows()})}},d.prototype.onMultipleSort=function(){var b=this,c=function(a,b){return a>b?1:b>a?-1:0},d=function(d,e){for(var f=[],g=[],h=0;h<b.options.sortPriority.length;h++){var i="desc"===b.options.sortPriority[h].sortOrder?-1:1,j=d[b.options.sortPriority[h].sortName],k=e[b.options.sortPriority[h].sortName];(void 0===j||null===j)&&(j=""),(void 0===k||null===k)&&(k=""),a.isNumeric(j)&&a.isNumeric(k)&&(j=parseFloat(j),k=parseFloat(k)),"string"!=typeof j&&(j=j.toString()),f.push(i*c(j,k)),g.push(i*c(k,j))}return c(f,g)};this.data.sort(function(a,b){return d(a,b)}),this.initBody(),this.assignSortableArrows(),this.trigger("multiple-sort")},d.prototype.addLevel=function(b,c){var d=0===b?this.options.formatSortBy():this.options.formatThenBy();this.$sortModal.find("tbody").append(a("<tr>").append(a("<td>").text(d)).append(a("<td>").append(a('<select class="form-control multi-sort-name">'))).append(a("<td>").append(a('<select class="form-control multi-sort-order">'))));var e=this.$sortModal.find(".multi-sort-name").last(),f=this.$sortModal.find(".multi-sort-order").last();a.each(this.columns,function(a,b){return b.sortable===!1||b.visible===!1?!0:void e.append('<option value="'+b.field+'">'+b.title+"</option>")}),a.each(this.options.formatSortOrders(),function(a,b){f.append('<option value="'+a+'">'+b+"</option>")}),void 0!==c&&(e.find('option[value="'+c.sortName+'"]').attr("selected",!0),f.find('option[value="'+c.sortOrder+'"]').attr("selected",!0))},d.prototype.assignSortableArrows=function(){for(var b=this,c=b.$header.find("th"),d=0;d<c.length;d++)for(var e=0;e<b.options.sortPriority.length;e++)a(c[d]).data("field")===b.options.sortPriority[e].sortName&&a(c[d]).find(".sortable").removeClass("desc asc").addClass(b.options.sortPriority[e].sortOrder)},d.prototype.setButtonStates=function(){var a=this.$sortModal.find(".multi-sort-name:first option").length,b=this.$sortModal.find("tbody tr").length;b==a&&this.$sortModal.find("#add").attr("disabled","disabled"),b>1&&this.$sortModal.find("#delete").removeAttr("disabled"),a>b&&this.$sortModal.find("#add").removeAttr("disabled"),1==b&&this.$sortModal.find("#delete").attr("disabled","disabled")}}(jQuery);
