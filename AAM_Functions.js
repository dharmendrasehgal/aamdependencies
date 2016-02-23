var isiPad = navigator.userAgent.match(/iPad/i) != null,effect = (isiPad) ? 'swipe' : 'slide',isPhone = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),pageTitle = $(document).attr("title");
var holdSrcsml = '/_layouts/images/RA.Base/logoSml.png';
var pageTitle;
var activeSticky;
var DefaultShareDescription, /*isIE8 = ($.browser.msie  && parseInt($.browser.version, 10) === 8),
    isIE8Only = (!!$.browser.msie && (parseInt($.browser.version) < 9)),*/
    isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
GetLogValue = (function() {
    var log = Math.log;
    return function(n, base) {
        return log(n) / (base ? log(base) : 1);
    };
})();
function GetQueryStringParams(sParam) {
    //var sPageURL = decodeURIComponent(window.location.search.replace(/\+/g, " ")).substring(1);
    console.log(window.location);
    console.log(window.location.href);
    var sPageURL = decodeURIComponent(window.location.href).match("filtersStart(.*)filtersEnd");
    sPageURL = sPageURL===null?"":sPageURL[1];
    var sURLVariables = sPageURL.split('&');
    console.log(sPageURL);
    console.log(sURLVariables);
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
    return null;
}
$(document).ready(function() {
    /*if ($.browser.msie && $.browser.version < 9) {
        $('#HeroContainer').on('hover', 'tr', function() {
            $('#HeroContainer tr').removeClass('hover');
            $(this).addClass('hover');
        });
    }*/
    $('.navLnk').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().parent().find('.lnksWrpr').toggleClass('show');
    });
    $('.customSelect,.pagingWrpr').mouseleave(function() {
        $(this).removeClass('active');
        $(this).parent().parent().find('.lnksWrpr').removeClass('show');
        if ($('.pagingWrpr').length) {
            $(this).find('.navLnk').removeClass('active');
        }
    });
    //	$(document).on('click', function (e) {
    //		if ($(e.target).closest(".generateImg").length === 0) {
    //			$('.smenuWrpr').removeClass('show');
    //			$(".generateImg").removeClass('active')
    //		}
    //	});

    /*var hideGenerateImagePopup = function(e) {
        if (!$(e.target).hasClass(".generateImg") && $(e.target).parents(".hasUl").length == 0) {
            $('.smenuWrpr').removeClass('show');
            $(".generateImg").removeClass('active')
        }
    };
    $(document).on('click', hideGenerateImagePopup);

    $(document).on('mousemove', hideGenerateImagePopup);*/

    /*if (isIE8) {
        if ($('.sort-icon-combo select').length) {
            $(".sort-icon-combo select").chosen({
                no_results_text: "Oops, nothing found!"
            });
        }
        if ($('.data-categories-combo select').length) {
            $(".data-categories-combo select").chosen({
                no_results_text: "Oops, nothing found!"
            });
        }
        window.onload = function() {
            if ($('.cartFlag').length) {
                $('.cartFlag').click(function(e) {
                    e.preventDefault()
                })
            }
        }
    }*/
	setupAAAnalytics();
    $('.completeShillerData').click(function(e) {

        if (typeof(baseBallCardData) != "undefined") {
            // }).ToArray();
            var exportData = AAGlobal.ExportCSVFilteredData(baseBallCardData, AAGlobal.EXPORT_TO_CSV.CompleteShillerData);
            var disclosure = GetDisclaimerText("EQUITIES_BOX");
            var csvString = convertToCSV(exportData, [], disclosureRegEx(disclosure));
            return $(this).generateImage('CSV', csvString, 'global_shiller_pe_values');

        }
    });
});

function GetUserCountry() {
    var userCountry = '';
    //try {
        userCountry = readCookie('AAM_USER_COUNTRY_TEST');
        if (userCountry == null || userCountry == '' || userCountry == undefined || userCountry == 'undefined') {
            jQuery.ajax({
                url: "/aem-services/api/rest/v1/services/generic/country",
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                data: {},
                success: function(response, status) {
                    userCountry = response;
                    createCookie("AAM_USER_COUNTRY_TEST", userCountry);
                },
                error: function(request, status, err) {
                    userCountry = '';
                    window.status = "Error fetching country details.";
                }
            });
        }
        if (userCountry == '--')
            userCountry = '';
    /*} catch (err) {
        userCountry = '';
    }*/
    return userCountry;
}

function setupAAAnalytics() {

    $('.exportView .exportData,.exportView .exportCoreOverview,.exportView .png,.exportView .pdf,.barView,.heatMap,.scatterView, .exportView .listView,#infoBtn,#portfolioBtn,.save-portfolio-close-button,.save-portfolio-continue-button,.comparisonFilter').click(function(e) {

        var className = $(this).attr('class');
        var section = '';
        var exportDataDiv = $(this).parents('.exportView');
        if (exportDataDiv.length) {
            var analytics_data = exportDataDiv.attr('analytics-data');
            if (analytics_data) {
                section = analytics_data + '-';
            }
        }
        var label = 'AA Click';
        switch (className) {
            case "exportData":
                label = "Export Data";
                break;
            case "exportCoreOverview expectedReturns":
                label = "Export Data";
                break;
            case "exportCoreOverview portfolios":
                label = "Export Data";
                break;
            case "png":
                label = "Download PNG";
                break;
            case "pdf":
                label = "Download PDF";
                break;
            case "barView":
                label = "Barchart View";
                break;
            case "heatMap":
                label = "Heat Map View";
                break;
            case "scatterView":
                label = "Scatter View";
                break;
            case "listView":
                label = "Table View";
                break;
            case "portfolio-add-new":
                if ($(this).attr('id') == "portfolioBtn")
                    label = "My Portfolios";
                else
                    label = "Info";
                break;
            case "save-portfolio-close-button":
                label = "View In Scatter Plot";
                break;
            case "save-portfolio-continue-button":
                label = "Add Another Portfolio";
                break;
            default:
                if ($(this).hasClass('comparisonFilter')) {
                    section = "Comparison Tool-"
                    label = "Filter:" + $(this).text();
                }
                break;
        }
        CaptureAAAnalytics(section, label, location.pathname);
    });


}

function setupAAFilterAnalytics() {

    $('#FilterEquitiesCheckboxContainer span.active-decider').click(function(e) {

        var className = $(this).attr('class');
        var section = '';
        var label = 'AA Click';
        section = "Infographic-";
        if ($(this).hasClass("active-decider")) {
            label = "Filter: " + $(this).text();
        }
        CaptureAAAnalytics(section, label, location.pathname);
    });
}
function CaptureAAAnalytics(section, label, pageUrl) {
    if (typeof ga != 'undefined') {
        ga('send', 'event', 'AA Microsite Events', section + label, location.pathname);
    }
}

function imageError(a) {
    $(a).hide();
}

$(".ellipsis").each(function() {
    var el = $(this);

    if (el.css("overflow") == "hidden") {
        var text = el.html();
        var multiline = el.hasClass('multiline');
        var t = $(this.cloneNode(true))
            .hide()
            .css('position', 'absolute')
            .css('overflow', 'visible')
            .width(multiline ? el.width() : 'auto')
            .height(multiline ? 'auto' : el.height());

        el.after(t);

        function height() {
            return t.height() > el.height();
        };

        function width() {
            return t.width() > el.width();
        };

        var func = multiline ? height : width;

        while (text.length > 0 && func()) {
            text = text.substr(0, text.length - 1);
            t.html(text + "...");
        }

        el.html(t.html());
        t.remove();
    }
});

Date.prototype.formatMMDDYYYY = function() {
    return (this.getMonth() + 1) +
        "/" + this.getDate() +
        "/" + this.getFullYear();
}

function convertToCSV(objArray, ignoreFields, footer) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    if (array.length == 0)
        return '';
    if (!ignoreFields) {
        ignoreFields = [];
    }

    for (var index in array[0]) {
        var skip = false;
        for (var ignoreFieldIndex in ignoreFields) {
            if (index == ignoreFields[ignoreFieldIndex]) {
                skip = true;
                break;
            }
        }
        if (!skip) {
            if (str != '') str += ','
            str += index;
        }
    }
    str += '\r\n';
    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {

            var skip = false;
            for (var ignoreFieldIndex in ignoreFields) {
                if (index == ignoreFields[ignoreFieldIndex]) {
                    skip = true;
                    break;
                }
            }
            if (skip) {
                continue;
            }


            if (line != '') line += ','

            var value = array[i][index];
            /* if (value && value.indexOf && value.indexOf('Date') > -1) {
            try {
            var timeZoneSymbol = value.lastIndexOf('+') > -1 ? value.lastIndexOf('+') : value.lastIndexOf('-');
            var value = new Date(Number(value.substring(value.indexOf("Date(") + 5, timeZoneSymbol)));
            var parsedDate = value.formatMMDDYYYY();
            line += parsedDate;
            } catch (E) { }

            } else */
            {
                line += value == null ? '-' : value;
            }

        }

        str += line + '\r\n';
    }

    if (footer) {
        str += '\r\n';
        str += '\r\n';
        str += footer;
    }

    return str;
}

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventKeydown(e) {
    if (typeof(keys) != "undefined") {
        for (var i = keys.length; i--;) {
            if (e.keyCode === keys[i]) {
                preventDefault(e);
                return;
            }
        }
    }
}


function preventWheel(e) {
    preventDefault(e);
}

function tabsWidths(wrpr) {
    var $tabsCount = $(wrpr).find("li").length;
    var $tabsSize = (100 / $tabsCount);
    var $listWidth = $(wrpr).find("li").width($tabsSize + '%');
    $(wrpr).find("li a").width(($listWidth.width()) + 'px');
}

function colWidth(wrpr, head, row, col) {
	var $colCusWdth, $colFirstWdth;
    var wrprHgt = 0,
        rowsHgt = 0,
        computedHgt = 0;
    var $colCount = ($(wrpr).find(head).find(row).eq(0).find(col).length - 2);
    var $colSize = (100 / $colCount);
    var $wrprWidth = parseInt($('#' + $(wrpr).attr('id')).css('width'), 10);
    var deviceWdth = parseInt($(window).width(), 10);
    var scrollContentWdth = 'width:' + (parseInt(($(window).width() * 94 / 100), 10) + 'px !important');
    var $colFirst = 122;
    var $colWidth = ($wrprWidth - $colFirst) / $colCount;
    if (typeof(isPrintView) != "undefined") {
        $colFirst = 130;
        $colWidth = ($wrprWidth - $colFirst - 20) / $colCount;
    }
    $(wrpr).find(head).find(row).find(col).eq(1).width($colFirst + 'px');
    $(wrpr).find(head).find(row).find(col).not(':eq(1)').width($colWidth + 'px');
    wrprHgt += $(wrpr).find(head).find(row).height();
    if ($('.captionGroup').length) {
        wrprHgt += $('.captionGroup').height() + 36;
    }
    $(wrpr).find('tbody').find(row).each(function() {
        $(this).find('td').eq(1).width($colFirst + 'px');
        $(this).find('td').not(':eq(1)').width($colWidth + 'px');
        rowsHgt += $(this).height();
    });

    if ($(wrpr).attr('id') == "TableViewContainer") {
		rowsHgt = 0;
        if ($(window).width() == 768) {
            $('#TableViewContainer').css('max-width', deviceWdth);
            $('html>body .chartTable table').css('max-width', deviceWdth);
            $('#TableViewContainer tbody.scrollContent').css("cssText", scrollContentWdth);
            return;
        }
        //breakpoint added: $(window).width()<=979 for charttable view in small devices
        if ($(window).width() <= 979) {
            $wrprWidth = deviceWdth;
            $('#TableViewContainer').css('max-width', $wrprWidth);
            $('#TableViewContainer tbody.scrollContent').css("cssText", scrollContentWdth);
        }
        $colFirst = $wrprWidth / 4.9;
        $colSecond = $wrprWidth / 6.6;
        if ($(wrpr).find(head).find(row).eq(0).find(col).length == 8) {
            $colCount = ($(wrpr).find(head).find(row).eq(0).find(col).length - 3);
            $colSixth = 108;
            $(wrpr).find(head).find(row).find(col).eq(5).width($colSixth + 'px');
            if ($(window).width() <= 979) {
                $colCount = 2;
                $colSixth = 0;
            }
        } else if ($(window).width() <= 979) {
            $colCount = 2;
            $colSixth = 0;
        } else if ($(wrpr).find(head).find(row).eq(0).find(col).length == 3) {
			$colFirst = $wrprWidth / 2.5;
			$colSecond = ($wrprWidth - $colFirst)/ 2;
			$colSixth = 0;
		} else {
            $colCount = ($(wrpr).find(head).find(row).eq(0).find(col).length - 2);
            $colSixth = 0;
        }
        $colWidth = ($wrprWidth - $colFirst - $colSecond - $colSixth) / $colCount;
        $(wrpr).find(head).find(row).find(col).eq(0).width($colFirst + 'px');
        $(wrpr).find(head).find(row).find(col).eq(1).width($colSecond + 'px');
        if ($(window).width() <= 979) {
            $colFirst = ($wrprWidth * 38 / 100);
            $colWidth = ($wrprWidth - $colFirst - $colSixth) / $colCount;
            $colCusWdth = 'width:' + (($colWidth) + 'px !important');
            $colFirstWdth = 'width:' + ($colFirst + 'px !important');
            $(wrpr).find(head).find(row).find(col).eq(0).css("cssText", $colFirstWdth);
            $(wrpr).find(head).find(row).find(col).eq(1).css("cssText", $colCusWdth);
        }
        if ($(wrpr).find(head).find(row).eq(0).find(col).length == 8) {
            $(wrpr).find(head).find(row).find(col).not(':first-child,:eq(1),[name="RollReturn"]').width($colWidth + 'px');
        } else if ($(window).width() <= 979) {
            $(wrpr).find(head).find(row).find(col).not(':first-child,:eq(1)').css("cssText", $colCusWdth);
        } else {
            $(wrpr).find(head).find(row).find(col).not(':first-child,:eq(1)').width($colWidth + 'px');
        }
        if (parseInt($('.scrollContent')[0].style.height, 10) > 770) {
            $(wrpr).find(head).find(row).find(col).last().css('left', -17 + 'px');
        }
        $(wrpr).find('tbody').find(row).each(function() {
            if ($(this).find('td').length == 8) {
                $(this).find('td').eq(5).width($colSixth + 'px');
            }
            $(this).find('td').eq(0).width($colFirst + 'px');
            $(this).find('td').eq(1).width($colSecond + 'px');
            if ($(window).width() <= 979) {
                $(this).find('td').eq(0).css("cssText", $colFirstWdth);
                $(this).find('td').eq(1).css("cssText", $colCusWdth);
            }
            if ($(this).find('td').length == 8) {
                $(this).find('td').not(':first-child,:eq(1),[name="RollReturn"]').width($colWidth + 'px');
                if ($(window).width() <= 979) {
                    $colCount = 2;
                    $colSixth = 0;
                }
            } else if ($(window).width() <= 979) {
                $(this).find('td').not(':first-child,:eq(1)').css("cssText", $colCusWdth);
            } else {
                $(this).find('td').not(':first-child,:eq(1)').width($colWidth + 'px');
            }
            rowsHgt += $(this).height();
        });
    }
    computedHgt = (parseInt(wrprHgt, 10) + parseInt(rowsHgt, 10) + 2) + 'px';//10
    if ($(wrpr).attr('id') == "TableView") {
        $('#TableView').css('height', computedHgt);
    }
    if ($(wrpr).attr('id') == "TableViewContainer") {
        $('#TableViewContainer').css('height', computedHgt);
		$('#TableViewContainer table.isortope').css('height', computedHgt);
    }
}
/*dynamically set - Table row's alternate background color */
function floater(id) {
    myArr = [];
    var id = id.attr('id');
    $('#' + id + ' tbody tr').removeClass('oddRow');
    $('#' + id + ' tbody tr').each(function (i, n) {
        itms = $(this).css('top');
        topvalue = parseInt(itms, 10);
        myArr.push({
            Index: topvalue,
            Tr: $(this)
        });
    });
    $(".scrollContent").children();
    //var  = myArr.sort(sortNumber);
    var arrayofTRs = $(".scrollContent").children().sort(function(a,b){
        return ((Number($(a).css('top').replace("px","")) - Number(($(b).css('top')).replace("px",""))))
    });
    console.log(arrayofTRs);
    $("tr").removeClass("bottomBorder")
    for(var i=1; i < arrayofTRs.length; ++i){
        if(i%4===0){
           $(arrayofTRs[i-1]).addClass("bottomBorder");
        }
        if(i%2===0){
            $(arrayofTRs[i-1]).addClass("oddRow");
        }
    }
    $(myArr[myArr.length - 1].Tr[0]).addClass('lastRow');
}

function sortNumber(a, b) {
    return a.Index - b.Index;
}

Number.prototype.toAbsFixed = function(number) {
    var roundMultiplier = Math.pow(10, number);
    //s = this * 10 * roundMultiplier % roundMultiplier == 5 ? Math.floor(this * roundMultiplier) / roundMultiplier : Math.round(this * roundMultiplier) / roundMultiplier;
    var s = Math.round(this * roundMultiplier) / roundMultiplier;
    s = s.toFixed(number);
    if (s == 0) {
        s = (0).toFixed(number);
    }
    return Number(s);
}

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

//window.console = window.console || {};

/*if ($.browser.msie && $.browser.version < 9) {
    console.log = function(message) {
        // alert(message);
    }
}*/

function isTouchSupport() {
    msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        touchSupport = (("ontouchstart" in window) || msGesture || window.DocumentTouch && document instanceof DocumentTouch);
    return touchSupport;
}


function disclosureRegEx(disclosure) {
    var regex = /<br\s*[\/]?>/gi;
    var regex1 = /<p\s*[\/]?>/gi;
    var disclosureRegx = disclosure.replace(regex, '"\n"').replace(regex1, '"\n"').replace(/<(?:.|)*?>/gm, '');
    return '"' + disclosureRegx + '"';
}

function movePositionInArray(arrayObject, old_index, new_index) {

    if (new_index >= arrayObject.length) {
        var k = new_index - arrayObject.length;
        while ((k--) + 1) {
            arrayObject.push(undefined);
        }
    }
    arrayObject.splice(new_index, 0, arrayObject.splice(old_index, 1)[0]);
    return arrayObject; // for testing purposes
};

function GetConfigValue(key) {
    if (typeof AAGlobal.configData != "undefined" && AAGlobal.configData != null) {
        var configDataEnumerable = $.Enumerable.From(AAGlobal.configData);
        var configEntity = configDataEnumerable.FirstOrDefault(null, function(record) {
            return record.Key == key;
        });
        if (configEntity != null)
            return configEntity.Value;
    }
    return null;
}

function GetDataDate() {
    //Replace - with / as in export if - is used 12/31/2014 is converted to 12-30-2014
    var date = $.datepicker.parseDate('yy-mm-dd', GetConfigValue("DATA_DATE"));
    return $.datepicker.formatDate("mm/dd/yy", date); //"01-08-2016"; //$.datepicker.formatDate("mm/dd/yy", date);
}

function padStr(i) {
    return (i < 10) ? "0" + i : "" + i;
}

String.prototype.toProperCase = function() {
    return this.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

function GetDisclaimerText(key, asOfDate) {
    var disclaimer = AAGlobal.DISCLAIMER_CONFIG[key].Credits;
    var date;
    //    if (asOfDate) {
    //        date = asOfDate;
    //    }
    //    else
    date = GetDataDate();

    return disclaimer.replace("{DATA-DATE}", date).replace("{CURRENT-YEAR}", GetConfigValue("CURRENT_YEAR"));
};

function StringEquals(string1, string2, ignoreCase, useLocale) {
    if (ignoreCase && string1 && string2) {
        if (useLocale) {
            string1 = string1.toLocaleLowerCase();
            string2 = string2.toLocaleLowerCase();
        } else {
            string1 = string1.toLowerCase();
            string2 = string2.toLowerCase();
        }
    }

    return string1 === string2;
}

function Median(data, fieldName, roundToDecimals) {

    var sortedData = $.Enumerable.From(data).OrderBy(function(a) {
        return a[fieldName] == null ? 0 : (roundToDecimals ? a[fieldName].toAbsFixed(roundToDecimals) : a[fieldName])
    }).ToArray();
    var dataLength = sortedData.length;
    var midpoint = Math.floor((dataLength - 1) / 2);
    var median = null;

    if (dataLength % 2 == 0) {
        median = (sortedData[midpoint][fieldName] + sortedData[midpoint + 1][fieldName]) / 2;
    } else {
        median = sortedData[midpoint][fieldName];
    }
    return median;
}


function CalculateRank(totalNominalReturnData, fieldName) {
    if (totalNominalReturnData != null) {
        var currentValue = 0.0,
            previousValue = 0.0;
        var previousRank = 1;
        var totalNominalReturnEnumerable = $.Enumerable.From(totalNominalReturnData)
        totalNominalReturnEnumerable.ForEach(function(recordItem) {
            recordItem[fieldName + 'Display'] = Number(recordItem[fieldName] == null ? 0 : recordItem[fieldName].toAbsFixed(1));
        });
        var sortedList = totalNominalReturnEnumerable.OrderBy('$.' + fieldName + 'Display').ToArray();

        $.Enumerable.From(sortedList).ForEach(
            function(recordItem, recordItemIndex) {
                if (recordItemIndex == 0) {
                    recordItem[fieldName + 'Rank'] = previousRank = 1;
                    currentValue = recordItem[fieldName + 'Display'];
                } else {
                    previousValue = currentValue;
                    currentValue = recordItem[fieldName + 'Display'];
                    recordItem[fieldName + 'Rank'] = previousRank = previousValue == currentValue ? previousRank : recordItemIndex + 1;
                }
            });

        /*var medianRank = Median(totalNominalReturnData, fieldName + 'Rank');
        totalNominalReturnEnumerable.ForEach(
            function(recordItem, recordItemIndex) {
                recordItem[fieldName + 'Rank'] =
                    (recordItem[fieldName + 'Rank'] - medianRank) * 100 / medianRank;
            });*/
    }
}

function isScrolledIntoView(elem) {
    if ($(elem).length == 0) {
        return false;
    }
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + ($(elem).height() / 1.5);
    return (docViewBottom >= elemTop && docViewTop <= elemBottom);
}

function HighLighter(container) {
    $('.stickyNav li').removeClass('active').removeClass('fullWidth').find('.actContent').addClass('hide');
    if (($(container).find('.actContent').find('.title').text().trim() || $(container).find('.actContent').find('.content').text().trim()) && !$(container + '.deactive').length) {
        //$(container).parents().find('#CloseSticky').css("display", "initial");
        $(container).addClass('active fullWidth').find('.actContent').removeClass('hide');
    } else if ($(container + '.deactive').length) {
        $(container).addClass('active');
    }
}

function GetTooltipComponentHtml(objExpReturn, fieldName, fieldDisplayName) {
    return (objExpReturn[fieldName] != null ?
        '<dl class="hasValue"><dt>' + fieldDisplayName + '</dt><dd>' + (objExpReturn[fieldName].toAbsFixed(1) + '<span class="marks">%</span>') + '</dd></dl>' :
        '<dl class="hasNoValue"><dt>' + fieldDisplayName + '</dt><dd>-</dd></dl>');
}
function createCookie(name, value, days) { 
	if (days) { 
	var date = new Date(); 
	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); 
	var expires = "; expires=" + date.toGMTString(); 
	} else var expires = ""; 
	document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/"; 
} 

function readCookie(name) { 
	var nameEQ = escape(name) + "="; 
	var ca = document.cookie.split(';'); 
	for (var i = 0; i < ca.length; i++) { 
		var c = ca[i]; 
		while (c.charAt(0) == ' ') c = c.substring(1, c.length); 
		if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length, c.length)); 
	}
	return null; 
}
