(function ($) {

    $.fn.extend({
        //pass the options variable to the function
        loadSimpleTableView: function (data, options) {
            var me = this;
            var defaults = new AAGlobal[options.defaults](me);
            var options = $.extend(true, defaults, options);
            var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);

            /*if (options.Sorter) {
            data = $(data).sort(options.Sorter);
            }*/
            var asOfDate = $.datepicker.formatDate('mm/dd/yy', $.datepicker.parseDate('yy-mm-dd', data[0].AsOnDate.split('T')[0]));
            if (options.CustomSortOrder)
                options.CustomSortOrder(data);
            var data = { items: $(data).toArray() };

            $(me).html(Mustache.to_html(options.GetTemplate(asOfDate), data));
            // $(me).css({ 'position': 'relative', 'overflow': 'auto', 'height': options.Height + 'px', 'max-width': options.Width + 'px' });


            options.InitializeAndSortColumn();
            var table = $(me).find('#sortableTable').dataTable({
                columnDefs: [{ type: 'natural', targets: 1 }],
                paging: false,
                searching: false,
                "bInfo": false,
                "bAutoWidth": false,
                "orderFixed": [[0, "asc"]],
                "order": [[(options.DefaultOrderFieldIndex ? options.DefaultOrderFieldIndex : 1), "asc"]]
            }).rowGrouping({ iGroupingColumnIndex: (options.GroupFieldIndex ? options.GroupFieldIndex : 0) });
            //            new $.fn.dataTable.FixedHeader(table, {
            //                "offsetTop": 40
            //            });

            //Add Disclosure
            options.AddDisclosure(this, options.configType, asOfDate);
        }

    });

    jQuery.extend( jQuery.fn.dataTableExt.oSort, {
        "natural-asc": function ( a, b ) {
            return naturalSorter(a,b);
        },
 
        "natural-desc": function ( a, b ) {
            return naturalSorter(a,b) * -1;
        }
    });
})(jQuery);