(function ($) {

    $.fn.extend({

        //pass the options variable to the function
        loadYieldCurveChart: function (data, options) {
            var me = this;
            var defaults = new AAGlobal['YieldCurveCountriesChartConfig'](me, data, options);
            var options = $.extend(defaults, options);

            $(me).width(options.Width).height(options.Height);

            var seriesData = options.GetSeriesData();
            var xAxisCategories = options.GetCategories();

            var chartOptions = options.GetConfiguration(createSplineSeriesData(seriesData, options), xAxisCategories);
            var exportOptions = $.extend(true, {}, chartOptions);
            exportOptions.credits.enabled = true;

            chartOptions.hiddenFieldOptions = JSON.stringify(exportOptions);
            chartOptions.customCallback = options.Callback.toString();



            $(me).highcharts(chartOptions, function (chart) { // on complete

                options.Callback(chart);
                $(options.DefaultTooltipSelector).css('padding-left', chart.plotLeft);
            });
            //Add disclosure Text 
            options.AddDisclosure(this);
        }
        //end of Plugin function
    });

    /*START : HELPER FUNCTIONS ...*/



    var createSplineSeriesData = function (seriesData, options) {
        var splineSeriesCollection = [];
        $.each(seriesData, function (seriesIndex, series) {
            var category = options.Categories[seriesIndex];
            splineSeriesCollection.push(options.GetSplineSeriesData(category, series));
        });
        return splineSeriesCollection;
    }


    /*END : HELPER FUNCTIONS ...*/
})(jQuery);