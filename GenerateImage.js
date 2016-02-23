
if (!JSON)
    JSON = {};
// implement JSON.stringify serialization

JSON.stringify = JSON.stringify || function (obj) {

    var t = typeof (obj);
    if (t != "object" || obj === null) {

        // simple data type
        if (t == "string") obj = '"' + obj + '"';
        return String(obj);

    }
    else {

        // recurse array or object
        var n, v, json = [], arr = (obj && obj.constructor == Array);

        for (n in obj) {
            v = obj[n]; t = typeof (v);

            if (t == "string") v = '"' + v + '"';
            else if (t == "object" && v !== null) v = JSON.stringify(v);

            json.push((arr ? "" : '"' + n + '":') + String(v));
        }

        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
};
(function ($) {

    $.fn.extend({
        generateImage: function (format, csvString, exportFileName,postData) {
            var action, output_format, data, callback, fileName;
									
			var cookieDomain = window.location.hostname.substr(window.location.hostname.indexOf('.'), window.location.hostname.length);
			var damPath = '/content/ra/config/region/en_US/asset_allocation_image/';
			//if(typeof exportConfigHost == 'undefined' || exportConfigHost == null) {
				
				var firstPart = window.location.hostname.substr(0, window.location.hostname.indexOf('.'));
				var secondPart = '' + cookieDomain;
				if(firstPart == 'dev-ex') {
					secondPart += ':90';
				}				
				else if(firstPart.indexOf('www') > -1) {
					firstPart = 'export';					
				}else{
					firstPart += '-export';
				}
				var exportConfigHost = "10.209.52.240:90";//firstPart + secondPart;
			//}
			
            if (format == 'CSV') {
                
				action = window.location.protocol + "//" + exportConfigHost + "/Exporting/ExportToCSV";

                output_format = exportFileName;
                data = escape(csvString);
            }
            else {

                $('.smenuWrpr').removeClass('show');
                $('.generateImg').removeClass('active');
               
                var highChartOptionsAction = window.location.protocol + "//" + exportConfigHost + "/Exporting/ExportHighChart";
                var baseballCardAction = window.location.protocol + "//" + exportConfigHost + "/Exporting/ExportFullWebPage";

                var highChart = $(this).highcharts();

                if (highChart != undefined) {
                    action = highChartOptionsAction;

                    output_format = format;
					var fields = null;
					if(highChart.userOptions.hiddenFieldOptions)
						fields = JSON.parse(unescape(highChart.userOptions.hiddenFieldOptions));
					else
						fields = highChart.userOptions.exportOptions;
					fields.ExportConfig = true;
                    data = escape(JSON.stringify(fields));
					// data = highChart.userOptions.hiddenFieldOptions;
                    callback = highChart.userOptions.customCallback;
                } else {
                    console.log(csvString);
                    action = baseballCardAction;
                    output_format = format;
                    var portNo = location.port && location.port != '' ? (':' + location.port) : '';
                    //data = 'http://10.209.86.23:9000/highcharts.html?filtersStart' + csvString + "filtersEnd";
                    data = window.location.origin + damPath + window.chartType.toLowerCase() + ".html" + "?filtersStart" + csvString + "filtersEnd";
                }
                if (exportFileName != null && exportFileName != undefined) {
                    fileName = exportFileName + "_" + $(this).attr('name');
                }
                else {
                    fileName = $(this).attr('name');
                }
            }
			var strData;
			if($(this).attr('data-is-post'))
			{
				strData = { 'output_format': output_format, 'url': data,'postData':JSON.stringify(postData) , 'customCallback': callback, 'file_name': fileName, 'cookieDomain': cookieDomain };
				action = action + "2";
			}
			else{
             strData = { 'output_format': output_format, 'data': data, 'customCallback': callback, 'file_name': fileName, 'cookieDomain': cookieDomain };
			}
            //$('body').showWaitingPopup('generateImagePopup');
            $.fileDownload(action, {
                httpMethod: "POST",
				cookieDomain: cookieDomain,
                data: strData,
                successCallback: function (responseHtml, url) {
                    $('body').hideWaitingPopup('generateImagePopup');
					
							// if(highChart && highChart.customTooltipPoint)
								// ScatterPlotPointClick(highChart,highChart.customTooltipPoint);
                },
                failCallback: function (responseHtml, url) {
                    $('body').hideWaitingPopup('generateImagePopup');
                }
            });
            return false;

        }
    });
    /*END : HELPER FUNCTIONS ...*/
})(jQuery);