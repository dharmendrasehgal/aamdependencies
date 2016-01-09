// JavaScript Document

var ServerName;
var isiPad,isPhone = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var inDesignMode;
var pageTitle = $(document).attr("title");

var player = null;
var holdSrcsml = '/_layouts/images/RA.Base/logoSml.png';
var emailPopupURL='/pages/emailpopup.aspx';
var emailPopupTitle = 'Subscription Management';
var blogReadMoreLocation;
$(document).ready(function () {
//$(window).on("resize", function () {if($(window).width() > 767){location.reload();}});

var prevWidth = $(window).width(), prevHeight = $(window).height();
//refresh page on browser resize
if(isiPad || isPhone){
    $(window).bind('resize', function(e)
    {
        var currWidth = $(window).width(), currHeight = $(window).height();
        if(currWidth - prevWidth > 150){
            if(currHeight - prevHeight < 150){
                this.location.reload();
            }
        }else{
            if(currHeight - prevHeight > 150){
                this.location.reload();
            }
        }
    });
}
if ($('.dmfrm').length) { dFrmopup(); }

$(".blog1-show-more a").live("click", function () {
        var $link = $(this);
        var $content = $link.parent().prev("div.blog-text-content");
        var linktext = $link.text();
		if(linktext =="read less")
		{
			blogReadMoreLocation = document.documentElement.scrollTop || document.body.scrollTop;
		}
		else
			$("html, body").animate({ scrollTop: blogReadMoreLocation });
        $content.toggleClass("blog-short-text, blog-full-text");
        $link.text(getshowlinktext1(linktext));
        return false;
    });

/*Loads subscription modal dialog if the query string contains subscription=1*/

var subscriptionqs = GetQueryStringParams('subscription');
if (subscriptionqs == 1) {
           ShowSubscriptionPopup();
        }		


	if($('.wrprPrt').length)
		{
			$('.wrprPrt').each(function(){
			var link = $(this).find("a.caption");
			var imgAnchor=$(this).find('.wrprImg a');
			if(link && imgAnchor){
				//alert("true");
				$(this).find('.wrprImg a').attr('href',link.attr('href'));}
			});	
		}		
		
if ($("#MediaTabsDivInner").length) {
  $("#MediaTabsDivInner ul li a").click(function(e){
  $("#MediaTabsDivInner ul li").removeClass('ui-state-active'); 
    e.preventDefault();
    $(this).parent().addClass('ui-state-active');
    
  });
  $("#tabsDiv").addClass('tab-insights');
       $("#tabsDiv").tabs();
        $("#MediaTabsDivInner ul li a").first().addClass("active");
    } 

LoadVideoDuration();

/*if($(".ellipsis").length)
{
    ShowEllipsis();
}*/

if ($('.iframePopup').length) { framePopup() }
  if($('.socialHeader').length){autoHeight();}  


    breadcrumbCorrection();
    searchBreadcrumbCorrection();
    isiPad = navigator.userAgent.match(/iPad/i) != null;
    var effect = (isiPad) ? 'swipe' : 'slide';

    var addthis_toolbox = $('.addthis_32x32_style');

    var isIE8 = (!!$.browser.msie && (parseInt($.browser.version) <= 9));

    
	if(isIE8){
		if($("#FindOurPartners").length>0)
		{
	        var totalrecords = $("ul.dfwp-list li").length;
            var itemsPerRow = Math.ceil(totalrecords/3);
            var ulhtml = "<li><ul>";
            for(i=0;i<totalrecords;i++)
            {
	            if(i%itemsPerRow==0 && i>0)
	            {
		            ulhtml +="</ul></li><li><ul>";
	            }
	            ulhtml +=$("ul.dfwp-list li")[i].outerHTML;
            }
            ulhtml +="</ul></li>";
            $("ul.dfwp-list").html('');
			$($("ul.dfwp-list")[0]).html(ulhtml);
		 }
	}
    if (!isiPad) {
        addthisResolutionCheck(addthis_toolbox);
    }

    if ($('.box img,.magnfr img').length) {
        $('.box img,.magnfr img').hover(function () {
            $(this).after('<img id="user_go" src="/_layouts/images/RA.ExternalWeb/megaprofile/magnfr.png" align="right" style="position:absolute;margin-left:-41px;margin-top:1px;" />');
        }, function () {
            $("#user_go").remove();
        });
    }

    //if(document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode)
    //inDesignMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;

    ServerName = window.location.protocol + "//" + window.location.host;
    addClasshasUl();
    thirdLevelMegaMenuClick();
    peopleRolloverOpen();
    peopleRolloverClose();
    userProfileHeightToggle();
    accreditationCorrection();

    if ($(".megaMenuClose").length) {
        megaMenuClose();
    }

   if ($(".teamPageSubNav").length) {
    var refVal = window.location.href;
   // alert(refVal.indexOf('mlink='));
    if(refVal.indexOf('mlink=') > 0 && refVal.indexOf('mlink=') != -1)
    {
        var strVal = refVal.split('mlink=');
        var mlinkVal = strVal[1].replace('%20', ' ').toUpperCase();
       // alert(mlinkVal);
       // $(".teamPageSubNav ul li a").find(mlinkVal).addClass("active");innerHTML
        $(".teamPageSubNav ul li a").each(function(){
            if($(this).text() == mlinkVal)
            {
                $(this).click();
            }
        });
    }
        /*$(".teamPageSubNav ul li a").attr("href","#tab1"); 
        $(".innerPageMainContentArea").addClass('tab-insights'); 
                         $(".innerPageMainContentArea").tabs(); 
        $(".teamPageSubNav ul li a").first().addClass("active");*/
    }
    linkCorrection();
    bioPopupOpen();
    bioPopupClose();
    megaProfilePopupOpen();
	/*Tableau Chart Wrapper*/
	if($('#chartWrpr').length){
        $('#tableauFrm').remove();
		window.moveTo(0, 0);
		window.resizeTo(screen.availWidth, screen.availHeight);
		var iFrameheight = ($(document).height()+400);
		var srcPath=window.location.href.slice(window.location.href.indexOf('targetUrl') + 10);
		$('#chartWrpr').append('<iframe id="tableauFrm" frameborder="0" src="'+srcPath+'" style="min-height:'+iFrameheight+'px;"></iframe>');
		setUpTracking();
		}
    if($('#tableauWrpr').length){
        var infographicsID = GetQueryStringParams("InfographicsID");
        if(infographicsID != null && infographicsID != '')
        {   
            $(".s4-notdlg").hide();
            $("#mainContainer").hide();
            $(".ribbonbackground").hide();
            $(".fullWidthContent").hide();
            $('#viewTableauFrame', window.parent.document).show();
            //GetTableauData(infographicsID,ShowTableauSuccess);
        }
    }

    //shareButtonClick();

    //Setup popup for External Links
    setupExternalLinksDisclaimer();
	
    setupPublicationLinks();
    //Setup Chart Popup
    if ($('.chartPopup').length) {
        chartPopupSetup();
    }
    if ($('.footerDisclaimer').length) {
        footerDisclaimerPopupSetup();
    }
    if ($('.footerLinks').length) {
        footerScrollToTopSetup();
    }
    if (isiPad || $(window).width() == 736 )  {
		 $('.mainNavigation ul li.mainNavItem').click(function (e) {
            //e.preventDefault();
            $('.mainNavigation .mainNavItem.active').removeClass('active');
            $('.megaMenu:visible').hide();
            $(this).addClass('active');
            $(this).find('.megaMenu').show();
        });
		
    }else if(!isPhone) {
		/* $(".mainNavigation ul li.mainNavItem").hoverIntent({
            interval: 150,
            timeout: 400,
            over: megaMenuShow,
            out: megaMenuHide
        });*/
       
    }



    $('.editordiv ul li').click(function (e) {
        e.preventDefault();
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.editordiv').find('div').addClass('hide');
        var ctr = $(this).find('a').attr('data-target');
        $(this).parents('.editordiv').find('.' + ctr).removeClass('hide');
    });

    /*
    $('ul.secondLevel li a').click( function(e){
    e.preventDefault();
    //$('ul.secondLevel li .quote', 'ul.secondLevel li .thirdLevel').hide();
    $(this).parent('li.hasUl').find('>.quote, >.thirdLevel').show();
    });
    }*/
	if($('ul.secondLevel li a.careers').length){
			$('ul.secondLevel li a.careers').hover( function(e){
				e.preventDefault();
				$(this).parents('li.hasUl').find('.mainQuote>img').attr('src','/_layouts/images/RA.Base/megamenu/OurFirm-Careers_TEXT.png');
			},function(e){
				e.preventDefault();
				$(this).parents('li.hasUl').find('.mainQuote>img').attr('src','/_layouts/images/RA.Base/megamenu/ourfirm-TEXT.png');
			});
		}
    $(window).resize(function () {
        var overlaypopup = $("div.bioEventOverlayPopup, .genericOverlayPopup");
        if (!!overlaypopup) reDim(overlaypopup);

        if (addthis_toolbox.length) {
            if (!isiPad) { addthisResolutionCheck(addthis_toolbox); }
            if (isIE8) {
                addthis_toolbox.css({ 'top': $(window).height() / 2 });
            }
        }
    });

  
    /*Dynamic Performance Page Update*/
    if ($('#publishingDate').length) {
        if (inDesignMode == "1") {
            $('#publishingDate').show();
        } else {
            $('#publishingDate').hide();
        }
    }
	 
	/*Dynamic Demographics & Markets Page Update*/
	if ($('.col-lg-3').length) {
		if (inDesignMode == "1") {
			$('#s4-bodyContainer').css('min-width','1000px');
			$('#innerContainer').css('width','1000px');
			$('.ribbonbackground').css('width','1000px');
		}
	}

  
    if ($('#insightsLanding, .details ul').length) hoverSetup(); //subsite navigation
    if ($('#aboutussection').length) aboutUsSetup();
    if ($('#awardssection').length) awardsSetup();
    if ($('#mediasection').length) mediaSetup();

    if ($('.navTreeCtrl  a').not(':has(img)').length) tabSetupNew();

    var funPage = location.pathname;
    if(funPage.toLowerCase().indexOf("fundamentals") >= 0)
    {
         $('.navTreeCtrl  table td').not(':has(img)').each(function () 
         {
             if($(this).hasClass("activeFirstlevel"))
             {         
                $(this).addClass("hashClk");           
             }
         });
    }
    if (inDesignMode != "1") {
        SetupDefaultDescription();
        if ($('.socialMedia').length) {
            setupSearchSocialMedia();
        }
        if ($('.FundamentalsSocialMedia').length) {
            setupFundamentalsSocialMedia();
        }
        if ($('.MultiMediaSocialMedia').length) {
            setupMultiMediaSocialMedia();
        }
         if ($('.TableauSocialMedia').length) {
            setupTableauSocialMedia();
        }
        if ($('.addthis_32x32_style').length) {
				addthis.addEventListener('addthis.ready', showSubscriptionPDFIcon);

        }
    }
    else {
        if ($('.articleWrapperChild').length) { $('.articleWrapperChild').width('660px'); }
    }
	if($('.articleWrapperChild').length){addthisInit();}
    onYouTubeIframeAPIReadySyncRA();

    if ($('input[id*=InputKeywords]').length) {
        searchStringCorrection();
    }

    if ($('#videoContainer').length) {
        if (inDesignMode != "1") {
            setupWorkingMedia();
        }
    }
      if ($('.playvIcn').length) {
            vidInlinePlay('.playvIcn');
    }
	$('.searchMinify').click(function (e) {
			e.stopPropagation();
			$('.searchMinify').addClass('backgroundNone');
            $('.searchMinify').append($('.headerSearch'));
            $('.minimize #header .headerRightPanel .headerSearch').show(300);
			$(this).find('input').attr("placeholder", "Search this site...");
			$(this).find('input').focus();
			return;
        });
		if($('.minimize #header .headerRightPanel .headerSearch').length){
			$('.minimize #header .headerRightPanel .headerSearch').find('input[type=text]').focus(function(){
				$(this).select();
			}).mouseup(
				function(e) {
					e.preventDefault();
				}
			 );
			 
			 $('#header .headerSearch').find('input[type=text]').keydown(function(e){
				var code = (e.keyCode ? e.keyCode : e.which);
				 if (code == 13) {
				 $(this).select();
							window.setTimeout(function() { 
								SEED8D04B_Submit();
							},1000);
						   // ajax request
						}
			 });
			 $('#header .headerSearch').find('a[title=Search]').click(function(e) {
				var customEvent = jQuery.Event("keydown");
				customEvent.which = 13; // # Some key code value
				
				 $('#header .headerSearch').find('input[type=text]').trigger(customEvent);
								
			});			 
			 
			$(document).click(function(){
				$('.minimize #header .headerRightPanel .headerSearch').delay(1000).hide(300)
				setTimeout(function () {$('.searchMinify').removeClass('backgroundNone');},1300);
			});
		}
    if ($('#videoForGreetingContainer').length) videoForGreetingContainer();

    if ($('#videoSocialMedia').length) videoSocialMedia();
    
    setUpTracking();

    if ($('#mediasection').length) {
        MediaAndAwardEffect();
        //MediaPDF();
    }
    BioPDF();
    setupOnClassMegaMenu();
    if (isIE8 && $('table.indexes').length) {
        indexesTableFix();
    }

   if($('.subscribeLinkAction').length){
		var cont=$('.subscribeLinkAction');
		cont.live('click',function(e) {
            e.preventDefault();
            ShowSubscriptionPopup();
		});
	}

    $(document).keydown(function(e){
        if ($('#divSubscriptionOverlayPopup').is(':visible')) {
            var code = e.keyCode ? e.keyCode : e.which;
            if (code == 27) {
                closeDialog();
            }
            var submitButton = $('.btnSubmitSubscription');
            if (submitButton.length && code == 13) {
                submitButton.click();
            }
        }
    });

    if ($(".showMore.Pagination").length) { ShowMoreFundamentals(); }
    if ($(".showMoreBlogs.Pagination").length) { ShowMoreBlogs(); }
   
    if ($('.tab-insights').length && !$('#tabsDiv').length) {
	SetUpMegaProfileTab(); 
	 }
	 if($('#MediaTabsDivInner').length)
	 {
		var Mediatab = $('.ui-tabs-nav');			
		$(Mediatab).lavalamp({
			easing: 'linear',			
			activeObj: '.ui-state-active'
		});
		
	 }
	 
	  if($('.teamPageSubNav').length)
	 {
		var ourteamtab = $('.teamPageSubNav ul');			
		$(ourteamtab).lavalamp({
			easing: 'linear',			
			activeObj: '.ui-state-active'
		});
		
	 }

    if(pageTitle ==="Home")
    {
        var url = removeSpecialCharfromURL(location.pathname);
        var indexPerPage = "/Work with us/Indexes/Pages/Home.aspx";
        var rafiLanding = "/Our Ideas/Solutions/RAFI/Pages/Home.aspx";
        if(url.toLowerCase() ===indexPerPage.toLowerCase())
        {
           $(document).attr("title", "Index Performance");
        }
        else  if(url.toLowerCase() ===rafiLanding.toLowerCase())
        {
            $(document).attr("title", "Rafi Investment Solutions");        
        }
    }

    var demograhics = $('.shareView').parents().hasClass('d-grpics-container');  
    if(demograhics){
        if ($('.shareView').length) {
            setupAASocialMedia();
            AddthisButtonToggles('.shareView', '.sharelnk', '.addthisDiv');
        }    
    }

    if ($('.addthisDivs').length) { $('.addthisDivs').hide(); }
    if ($('.Share').length) { AddthisButtonToggles('.Share', '.insightsshare', '.addthisDiv'); }
    if ($('.tableauShare').length) { AddthisButtonToggles('.Share', '.tableauShare', '.addthisDiv'); }
    if ($('.imgShare').length) { AddthisButtonToggles('.imgShareOuter', '.imgShare', '.addthisDiv'); }
    if ($('.shareonSocial').length) { AddthisButtonToggles('.shareBlock', '.shareonSocial', '.addthisDivs'); }
	//Fix z-index youtube video embedding
	var $youTube = new Array();
	$youTube[0] = "www.youtube.com";
	$youTube[1] = "youtu.be";
	$youTube[2] = "http://y2u.be/";
	if($('iframe').length){
		$('iframe').each(function(){        
			var url = $(this).attr("src");
			if(url!=null){
				var regExp = /^(http|https):\/\/[^/]+/;
				var hostnme = url.match(regExp);
//				console.log(hostnme);
				//if(hostnme=="http://www.youtube.com"){
				if ($.inArray(hostnme, $youTube) == -1){
					if(url.indexOf("?") > -1) {
					   $(this).attr("src",url+"&wmode=transparent");
					}
					else{
						$(this).attr("src",url+"?wmode=transparent");
					}
				}
			}
		});
	}
});

function SetUpMegaProfileTab() {
    var tabInsights = $(".tab-insights").tabs();
	var scrollTopPosition = 0;
   $(window).bind('hashchange', function (e) {
        var idx = $('.tab-insights > ul a[href=' + location.hash + ']').parent().index();
        idx = idx < 0 ? 0 : idx +1;
        $('.tab-insights').tabs('select', idx);
		$(window).scrollTop(scrollTopPosition);
        ga('send', 'event', 'Tabs', location.pathname, tabInsights.find('.ui-state-active').text());

    });
 
    tabInsights.bind('tabsselect', function (event, ui) {
		scrollTopPosition = $(window).scrollTop();
        location.hash = ui.panel.id;
		
    });
    
	var tabInsightsList = $('.tab-insights ul.ui-tabs-nav');			
		$(tabInsightsList).lavalamp({
			easing: 'linear',			
			activeObj: '.ui-state-active'
		});
		
        //if mega profile has only one tab
		if($('.tab-insights ul.ui-tabs-nav li a').length ==1)
        {
          $('.tab-insights ul.ui-tabs-nav li a').css('cursor', 'none');
        }
	
}

function AddthisButtonToggles(parent, shareIcon, addthisDivs) {
    if (isiPad || isPhone) {
		
        $(parent).live('click',function (e) {
            e.preventDefault();			
            $(this).find(shareIcon).hide();
			setEmailVars($(this).find(addthisDivs));
            $(this).find(addthisDivs).show();			
			var self = $(this);
			setTimeout(function() {
				$(self).find(addthisDivs).hide();
				$(self).find(shareIcon).show();
			}, 3000)
			return false;
        });
		
    } else {
        /*$(parent).hoverIntent({
            interval: 150,
            timeout: 400,
            over: function () {
                $(this).find(shareIcon).hide();
                setEmailVars($(this).find(addthisDivs));
                $(this).find(addthisDivs).show(200);
            },
            out: function () {
                $(this).find(addthisDivs).hide();
                $(this).find(shareIcon).show(200);
            }
        });*/
    }
    
}

function ShowMoreFundamentals() {
    $(".showMore").live("click", function (e) {
        e.preventDefault();
        var authorId = $(".pageAuthorId").text();
        if (authorId.length) {
            var href = "/Our Firm/Our Team/Pages/InsightsListing.aspx"
                + $(this).find("a").attr("href") + "&AuthorId=" + authorId;

            var paginationElement = $(this);
            paginationElement.addClass("loading");
            $(this).find("a").remove();
            $.ajax({
                async: true,
                url: href,
                complete: function (xData) {
                    var newHtml = $(xData.responseText).find(".FundamentalsSocialMedia").parent();
                    paginationElement.remove();
                    $(".FundamentalsSocialMedia").parents(".dfwp-list").append(newHtml);
                    setupFundamentalsSocialMedia();
                    addthisInit();
                    setupPublicationLinks();
                }
            });
        } else {
            $(this).remove();
        }
    });
}

function ShowMoreBlogs() {

    $(".showMoreBlogs").live("click", function (e) {
        e.preventDefault();
        var href;
        var authorName = $(".pageAuthorName").text();
        if ($(this).find("a").attr("href").split('?')[1]) {
            href = "/Our%20Firm/Our Team/Pages/BlogsIntermediate.aspx?"
                + $(this).find("a").attr("href").split('?')[1] + "&authorName=" + authorName;
            var paginationElement = $(this);
            $(this).find(".blogspan").remove();
            paginationElement.addClass("loading");
            $(".blogspan").text("_");
            $.ajax({
                async: true,
                url: href,
                complete: function (xData) {
                    var newBlogs = $(xData.responseText).find(".profileBlog");
                    var newShowMore = $(xData.responseText).find(".showMoreBlogs");
                    $(".profileBlog").last().after(newBlogs);
                    $(".profileBlog").last().after(newShowMore);
                    paginationElement.remove();
                }
            });
        }
    });
}

function setupOnClassMegaMenu() {

    var relativeUrl = window.L_Menu_BaseUrl;
    relativeUrl = decodeURI(relativeUrl).toLowerCase();

    if (relativeUrl.length > 1) {
        var webName = relativeUrl.substring(relativeUrl.lastIndexOf('/') + 1);
        $('.secondLevel a').each(function () {
            var href = decodeURI($(this).attr('href')).toLowerCase();
            if (href.indexOf(webName) > -1) {
                $(this).parents('li.mainNavItem').addClass("on");
                return false;
            }
        });
    }
}

function onYouTubeIframeAPIReady() {
}
function showSubscriptionPDFIcon() {
    $('.subscribeFundamental').css('display', 'block');
    $('.pdfFundamental').css('display', 'block');
}

function accreditationCorrection() {

    if ($(".spanAccreditation").length) {

        var text = $(".spanAccreditation").first().text();
        text = $.trim(text);
        if (text.length) {
            text = ", " + text;
            text = text.replace(/;/g, ",");
            $(".spanAccreditation").text(text);
        }
    }
}

function linkCorrection() {

    if ($('.userNameBlock h3')[0]) {
        var name = $('.userNameBlock h3')[0].childNodes[0].data;
        var altText = $.trim(name);
        if ($('.bioFullSizePhoto img')) {
            $('.bioFullSizePhoto img').attr('Title', altText);
            $('.bioFullSizePhoto img').attr('alt', altText);
        }
    }

}


function RelatedViewAll() {

    var textRelated = $('input[id$=hdnTopic]').val();
var url;
    if (textRelated.length) {

        var split = textRelated.split(';');
        var ravalue = "(racontenttypetaxtext%3a%22Articles%22)+AND+";

        if (split.length <= 1) {
            ravalue = ravalue + "(ratopictaxtext%3a%22" + split[0] + "%22)";

        }
        else {
            ravalue = ravalue + "(";

            for (var i = 0; i < split.length - 1; i++) {
                ravalue = ravalue + "ratopictaxtext%3a%22" + split[i] + "%22+OR+";
            }
            ravalue = ravalue.substring(0, ravalue.length - 4);
            ravalue = ravalue + ")";

        }
        url = '/Our Ideas/Insights/Pages/Publications.aspx?r=' + ravalue;
        $('.relatedArticle .articleBlock.viewAll a').attr('href', url);


    }
    else {
        url = '/Search/Pages/Results.aspx?r=racontenttypetaxtext%3a%22Articles%22';
        $('.relatedArticle .articleBlock.viewAll a').attr('href', url);
    }

}

function megaMenuShow(e)   														//Function to show Mega Menu on hover of First Level Link
{

    $('.megaMenu:visible').find('.mainQuote.hide').removeClass('hide');
    $(this).find("div.megaMenu").fadeIn(300);
    $(this).addClass("active");
}
function megaMenuHide(e)															//Function to hide Mega Menu on hover of First Level Link
{

    $(this).find("div.megaMenu").fadeOut(300);
    $(this).removeClass("active");
}



function addClasshasUl() {													   // Function to add class to all the LI's who are having nested UL.
    //  $("li").has("ul").addClass("hasUl");
}

function megaMenuClose() {														// Function to close megamenu on click of the close button
    $(".megaMenuClose").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.mainNavigation .mainNavItem.active').removeClass('active');
        $('div.megaMenu:visible').hide();
    });
}

function peopleRolloverOpen() {
    var dragged, x1, x2;

    $("img.peopleImage, .peopleRolloverArea").mousedown(function (e) {
        dragged = false;
        x1 = e.pageX;
    }).mouseup(function (e) {
        x2 = e.pageX;
        dragged = x2 - x1;
    });

    // Function to open People carousel Rollover Popup
    $("img.peopleImage").mouseenter(function () {
        if (!dragged) {
            var elem = $(this);
            var elemOffset = elem.offset().left;
            var pelem = $(this).parent("li.touchcarousel-item");
            if (pelem.siblings().find(".peopleRolloverArea:visible")) {
                $(".peopleRolloverArea:visible").parent("li.touchcarousel-item").removeClass("posRelative");
                $(".peopleRolloverArea:visible").siblings("img.imageBorder").removeClass("imageBorder");
                $(".peopleRolloverArea:visible").hide()
                    .removeClass("showRolloverRight")
                    .removeClass("showRolloverleft");
            }

            elem.closest("ul").find("li.touchcarousel-item").show();
            elem.closest("ul").find("img.peopleImage").addClass("default");
            var pageSize = peopleCarouselInstance.settings.itemsPerMove;
            var pageIndex = peopleCarouselInstance._kp2;
            var totalItems = peopleCarouselInstance.numItems;
            var totalPages = peopleCarouselInstance._jq2;
            var lastPageItems = totalItems % pageSize;
            var itemIndex = pelem.index();
            
            var pageStartIndex = pageIndex*pageSize;
            if(pageIndex == totalPages - 1 && lastPageItems != 0)
            {
                pageStartIndex = totalItems - pageSize;
            }

           if (itemIndex - pageStartIndex < pageSize-2) {
                elem.siblings("div.peopleRolloverArea").addClass("showRolloverRight")
                    .show();
            } else {
                elem.siblings("div.peopleRolloverArea").addClass("showRolloverRight")
                    .show();
                if (itemIndex - pageStartIndex == pageSize-1) {   
                    elem.closest("ul").find("li.touchcarousel-item::nth-child("+(pageStartIndex+2)+")").hide();
                }
                elem.closest("ul").find("li.touchcarousel-item::nth-child("+(pageStartIndex+1)+")").hide();
            }

            pelem.addClass("posRelative");
            elem.addClass("imageBorder").removeClass("default");
        } else {
            $('a#peopleRolloverClose').trigger('click');
        }
    }).click(function(e){
        $(this).next("div.peopleRolloverArea").trigger('click');
    });

    $("#homePeopleComponent ul.touchcarousel-container").mouseleave(function (e) {
        $('a#peopleRolloverClose').trigger('click');
    });

    $('.peopleRolloverArea').click(function (e) {
        var target = (e.target.nodeName);
        if (!dragged) {
            var link = $(this).find('.peopleProfile a').attr('href');
            if (target !== 'A') {
                location.href = link;
            }
        }
    });
}

// Function to close People carousel Rollover Popup
function peopleRolloverClose() {
    $("a#peopleRolloverClose").click(function (e) {
        e.preventDefault();
        $(this).parents("li.touchcarousel-item").removeClass("posRelative");
        $(this).parents("li.touchcarousel-item").find("img.peopleImage").addClass("default");
        $(this).parents("div.peopleRolloverArea").hide()
            .removeClass("showRolloverRight")
            .removeClass("showRolloverleft");
        $(this).parent().siblings("img.imageBorder").removeClass("imageBorder");
        $(this).closest("ul").find("li.touchcarousel-item").show();
    });
}


// Function to Toggle user desctiption area Height
function userProfileHeightToggle() {
    if ($('.userProfileTextCollapse').length) {
        if ($('.userProfileTextCollapse').find('.expand').length < 1) {
            $("a.userText").css("display", "none");
        }
    }

    $("a.userText").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass("userReadMore")) {
            $(this).addClass("userReadClose")
					   .removeClass("userReadMore")
					   .text('less');
            $(".expand").show();
        }

        else if ($(this).hasClass("userReadClose")) {
            $(this).removeClass("userReadClose")
					   .addClass("userReadMore")
					   .text('more');
            $(".expand").hide();

        }
    });
}

function reDim(o) {
    var left = parseInt(($(window).width() - o.width()) / 2);
    
    if (o.parents('.chart').length) {
        if (o.width() <= 900) {
            left = parseInt(($(window).width() - 900) / 2);
        }
        var height = 626;
        if (o.height() > 626) {
            height = o.height();
        }
        var top = parseInt(($(window).height() - height) / 2);
        top = top < 1 ? 0 : top;
        o.css({ top: (top) + 'px', left: (left) + 'px' });
    } else if(o.parents('.dmfrmpopup').length) {
		var left = parseInt(($(window).width() - 1048) / 2);
		var top = parseInt(($(window).height() - 650) / 2);
		top = top < 1 ? 0 : top;
        left = left < 1 ? 0 : left;
		o.css({ top: top + 'px', left: left + 'px'});
	} else {
        o.css({ top: '100px', left: left + 'px' });
    }

}

function getDateFromAspString(aspString) {
    var epochMilliseconds = aspString.replace(
	  /^\/Date\(([0-9]+)([+-][0-9]{4})?\)\/$/,
	  '$1');
    if (epochMilliseconds != aspString) {
        return new Date(parseInt(epochMilliseconds));
    }
}

function bioPopupOpen() {
    $('a.moreinfo, a.eventTitle').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $("#internalurl").text(target);
        var overlaypopup = $("div.bioEventOverlayPopup");
        var eventInfoObj = $("div.bioEventOverlayPopup").find('.eventInfo');
        $("#message").text('');
        var eventInfoSource = $(this).parent();
        if (this.className == 'eventTitle') {
            eventInfoSource = $(this).parent().parent();
        }
        var title = eventInfoSource.find("#eventTitle").text();
        overlaypopup.find('#eventTitle').text(title);
        var date = eventInfoSource.find("#eventDate").text();
        if (date.split('|')[0]) { eventInfoObj.find('#eventDate').text(date.split('|')[0]); }
        if (date.split('|')[1]) {
            eventInfoObj.find('#eventTime').parent().show();
            eventInfoObj.find('#eventTime').text(date.split('|')[1]);
        }
        else { eventInfoObj.find('#eventTime').parent().hide(); }

        eventInfoObj.find('#location').text(eventInfoSource.find("#eventLocation").text());
        eventInfoObj.find('#location').text(eventInfoSource.find("#eventLocation").text());
        if (eventInfoSource.find("#eventImage")) {
            eventInfoObj.find('#eventImage').html(eventInfoSource.find("#eventImage").text());
            eventInfoObj.find('#eventImage').find('img').css("width", "150px");
        }
        overlaypopup.find('.eventOverviewText').html(eventInfoSource.find("#eventOverview").html());
        eventInfoObj.find('#presenters').html(eventInfoSource.find("#eventPresenter").html());
        $('.genericOverlayBackground').show();
        reDim(overlaypopup);
        ga('send', 'event', 'Event Detail', title, location.pathname);

    });
}

function megaProfilePopupOpen() {
    $('a#eventTitle').click(function (e) {
        e.preventDefault();
        var overlaypopup = $("div.microOverlayPopup");
        var eventInfoObj = overlaypopup.find('.microInfo');
        var eventInfoSource = $(this).parents('article');

        var title = eventInfoSource.find("#eventTitle").text();
        overlaypopup.find('#eventTitle').text(title);

        var date = eventInfoSource.find("#eventDate").text();
        if (date.split('|')[0]) { eventInfoObj.find('.date').text(date.split('|')[0]); }
        if (date.split('|')[1]) {
            eventInfoObj.find('.time').parent().show();
            eventInfoObj.find('.time').text(date.split('|')[1]);
        }
        else { eventInfoObj.find('.time').parent().hide(); }

        eventInfoObj.find('.location').text(eventInfoSource.find("#eventLocation").text());
        //        if (eventInfoSource.find("#eventImage")) {
        //            eventInfoObj.find('#eventImage').html(eventInfoSource.find("#eventImage").text());
        //            eventInfoObj.find('#eventImage').find('img').css("width", "150px");
        //        }
        overlaypopup.find('.microOverviewText').html(eventInfoSource.find("#eventOverview").html());
        eventInfoObj.find('.participants').html(eventInfoSource.find("#eventPresenter").html());
        overlaypopup.parent().show();
        reDim(overlaypopup);
        ga('send', 'event', 'Event Detail', title, location.pathname);
    });
}

function bioPopupClose() {
    $(".bioPopupClose, .microPopupClose").click(function (e) {
        e.preventDefault();
		if($('#talkingPoints').css('display')=='block'){$('#talkingPoints').fadeOut(300);return;}
        if ($(this).parents('.bioEventOverlayPopup,.microOverlayPopup').length) {
            $(this).parents('.genericOverlayBackground').fadeOut(300, function () { $(this).hide(); });
        }
        else {
            $('.genericOverlayBackground:last').fadeOut(300, function () {
                var t = $(this);
                setTimeout(function () { t.remove(); }, 400);
            });
        }
    });
}

//Get Query string values
function GetQueryStringParams(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.replace(/\+/g, " ")).substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

function setupExternalLinksDisclaimer() {
    $("a[href^='http']:not([href*='" + location.hostname.replace("www.", "") + "'])").each(function () {
        var exceptionDomain = new Array();
        exceptionDomain[0] = "arc.rallc.com";
        exceptionDomain[1] = "www.facebook.com";
        exceptionDomain[2] = "www.magnetmail.net";
        exceptionDomain[3] = "www.rallc.com";
        exceptionDomain[4] = "www.researchaffiliates.com";
        exceptionDomain[5] = "www.linkedin.com";
        exceptionDomain[6] = "twitter.com";
        exceptionDomain[7] = "www.youtube.com";
        exceptionDomain[8] = "youtu.be";
        exceptionDomain[9] = "public.tableausoftware.com";
        var hostname = $(this).prop('hostname');

        if ($.inArray(hostname, exceptionDomain) == -1)
            $(this).addClass('external');
        else
            $(this).removeClass('external');
    });
}


$('a.external,area.external').live('click', function (e) {
    e.preventDefault();

    var url = $(this).attr('href');

    $('body').append($('<div class="genericOverlayBackground external"><div class="genericOverlayPopup"><a class="bioPopupClose" href="#"></a><h3>Disclaimer</h3><div class="genericContent"></div><div></div>'));
    var overlay = $('.genericOverlayBackground:last');

    overlay.fadeIn(300);

    setTimeout(function () {
        overlay.find('.genericContent').empty().append($('.disclaimer').html());
        overlay.find('.agreement').click(function (e) {
            e.preventDefault();
            //var newWindow = window.open(url, 'newwin');
            //$('.genericOverlayBackground').remove();
            //newWindow.focus();
            $('.bioPopupClose').trigger('click');
            window.open(url, "_blank");
            ga('send', 'event', 'Outbounds Link', location.pathname, url);
        });
        reDim(overlay.find('.genericOverlayPopup'));
        bioPopupClose();
    }, 1);

});


function footerDisclaimerPopupSetup() {
    $('.footerDisclaimer').click(function (e) {
        e.preventDefault();

        $('body').append($('<div class="genericOverlayBackground external"><div class="genericOverlayPopup"><a class="bioPopupClose" href="#"></a><h3>Disclaimer</h3><div class="genericContent"></div><div></div>'));
        var overlay = $('.genericOverlayBackground:last');

        overlay.fadeIn(300);

        setTimeout(function () {
            overlay.find('.genericContent').empty().append($('.footer-disclaimer').parent('div').html());
            reDim(overlay.find('.genericOverlayPopup'));
            bioPopupClose();
            $('.footer-disclaimer:last').jScrollPane();
        }, 1);

    });
}

function disclaimerPopUpSetup() {
    $('.disclaimerPopUp').click(function (e) {
        e.preventDefault();

        $('body').append($('<div class="genericOverlayBackground external"><div class="genericOverlayPopup"><a class="bioPopupClose" href="#"></a><h3>Footnotes</h3><div class="genericContent"></div><div></div>'));
        var overlay = $('.genericOverlayBackground:last');

        overlay.fadeIn(300);

        setTimeout(function () {
            overlay.find('.genericContent').empty().append($('.disclaimerDescription').parent('div').html());
            reDim(overlay.find('.genericOverlayPopup'));
            bioPopupClose();
            $('.disclaimerDescription:last').jScrollPane();
        }, 1);

    });

}

function footerScrollToTopSetup() {
    $('.footerLinks a').click(function (e) {
        window.scrollTo(0, 0);
    });
}
$('.divpopup').live('mouseover', function (event) {
    if (event.type == 'mouseover') {
        var url = $(this).attr('href');
        $(this).attr('title', url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf(".")));
    }
});

$('.divpopup').live('click', function (e) {
    e.preventDefault();
    var url = $(this).attr('href');
    var title = $(this).attr('title');
    $('body').append($('<div class="genericOverlayBackground chart"><div class="cusPopup"><a class="closeIcn" href="#"></a><div class="contentArea"></div><div></div>'));
    var overlay = $('.genericOverlayBackground:last');
    reDim(overlay.find('.genericOverlayPopup'));
    overlay.fadeIn(300);
    var ismiddle = $(this).attr('ismiddle');
    if (ismiddle == 'yes') {
        setTimeout(function () { overlay.find('.genericContent:last').empty().append($('<img style="height:550px;margin:0 auto;display:block;" src="' + url + '"' + ' />')); }, 100);
    }
    else {
        setTimeout(function () { overlay.find('.genericContent:last').empty().append($('<img style="width:850px;" src="' + url + '"' + ' />')); }, 100);
    }
    bioPopupClose();
});
$('.countryName').live('click', function (e) {
    e.preventDefault();
    var url = $(this).find('a').attr('href');
    $('body').append($('<div class="genericOverlayBackground chart"><div class="genericOverlayPopup"><a class="bioPopupClose" href="#"></a><div class="genericContent"></div><div></div>'));
    var overlay = $('.genericOverlayBackground:last');
    reDim(overlay.find('.genericOverlayPopup'));
    overlay.fadeIn(300);
    setTimeout(function () { overlay.find('.genericContent:last').empty().append($('<img style="height:550px;margin:0 auto;display:block;" src="' + url + '"' + ' />')); }, 100);
    bioPopupClose();
});

function chartPopupSetup() {

    $(".viewEnlarge").click(function (e) {

        $(this).parent().find(".chartPopup").click();
    });

    $('.chartPopup').click(function (e) {
        e.preventDefault();
        var url = $(this).attr('href');
        var title = $(this).attr('title');
        var isIframe = $(this).hasClass('iframe');

        if (typeof title === 'undefined') {
            title = "";
        }

        $('body').append($('<div class="genericOverlayBackground chart"><div class="genericOverlayPopup"><a class="bioPopupClose" href="#"></a><div class="genericContent"></div><div></div>'));
        var overlay = $('.genericOverlayBackground:last');
        //var titleTag = overlay.find('h3')
        //titleTag.empty().append(title);
        reDim(overlay.find('.genericOverlayPopup'));
        overlay.fadeIn(300);
        if (isIframe) {
            setTimeout(function () { overlay.find('.genericContent').empty().append($('.comparisonGrid').html()); }, 100);
            ga('send', 'event', 'Comparision Grid', location.pathname, 'Overview');

        } else {
            setTimeout(function () {
                overlay.find('.genericContent').empty();
                var tmp = new Image();
                tmp.onload = function () {
                    overlay.find('.genericContent').append(tmp);
					var tmpWidth = $(tmp).width();
					var tmpHeight = $(tmp).height();
                    var img = overlay.find('.genericContent img');
                    var l = 0 - tmpWidth / 2;
                    var t = 0 - tmpHeight / 2;
                    img.css({ 'left': '50%', 'top': '50%', 'margin-left': l, 'margin-top': t, 'position': 'absolute', 'alt': title, 'title': title });
                    var imgContainer = overlay.find('.genericOverlayPopup');
                    if (tmpWidth > imgContainer.width()) {
                        //imgContainer.left = imgContainer.left + (tmp.width - imgContainer.width) / 2;
                        imgContainer.width(tmpWidth);
                        reDim(imgContainer);
                    }
                    if (tmpHeight > imgContainer.height()) {
                        //imgContainer.top = imgContainer.top + (tmp.height - imgContainer.height) / 2;
                        imgContainer.height(tmpHeight);
                        reDim(imgContainer);
                    }
                };
                tmp.src = url;
                if (title != '' || typeof title != "undefined")
                    tmp.title = title;
            }, 1);

            ga('send', 'event', 'Closer Look', url.split('/').pop(), location.pathname);
        }
        bioPopupClose();
    });
}

function createScrollPane() {
    setTimeout(function () { $('.leftBlock').jScrollPane(); }, 1);
}



function breadcrumbCorrection() {
    //This is for span for English] once we have language site
    //    var rootNode = $("span[id$=ctl00_PlaceHolderGlobalNavigation_siteMapPath] > span:eq(0)");
    //    var rootNodeArrow = $("span[id$=ctl00_PlaceHolderGlobalNavigation_siteMapPath] > span:eq(1)");
    //    rootNode.hide();
    //    if (rootNodeArrow) rootNodeArrow.hide();

    // Custom Settings
    var rootNode = $("span[id$=ctl00_PlaceHolderGlobalNavigation_siteMapPath] > span:eq(0)");
    var rootNodeArrow = $("span[id$=ctl00_PlaceHolderGlobalNavigation_siteMapPath] > span:eq(1)");
    rootNode.hide();
    if (rootNodeArrow) rootNodeArrow.hide();

    //this is for the first node
    var nextNode = $("span[id$=ctl00_PlaceHolderGlobalNavigation_siteMapPath] > span:eq(2)");
    nextNode.find('a').attr("href", "#");
    //nextNode.find('a').css('font-weight', 'normal');
    nextNode.find('a').css('text-decoration', 'none');
    nextNode.find('a').css('cursor', 'text');

    //this is for the second node being Publications - it should not be clickable
    var nextNode2 = nextNode.next().next();
    var secNode = nextNode2;

    if (secNode[0] != undefined) {

        if (secNode[0].innerHTML != undefined) {
            var pubsection = $("#PublishingBreadcrumbSection");
            if (secNode[0].innerHTML.indexOf("Insights") != -1 && pageTitle.indexOf("Publications") !== -1) {
                //var aContentType = "<a href='/Our Ideas/Insights/Pages/Home.aspx'>Insights</a>";
                //$("span[id$=ctl00_PlaceHolderGlobalNavigation_siteMapPath] > span").last().html(aContentType);
                $("#ctl00_PlaceHolderGlobalNavigation_siteMapPath").append("<span> > </span><span>Publications</span>");
            }
            else if (secNode[0].innerHTML.indexOf("Insights") != -1 && pubsection.html()) {
                var node = secNode.find('a');
                node.attr("href", "#");
                //nextNode.find('a').css('font-weight', 'normal');
                node.css('text-decoration', 'none');
                node.css('cursor', 'text');
                var aContentType = "<a href='/Our Ideas/Insights/Pages/Publications.aspx?query=All'>Publications</a>";
                $("span[id$=ctl00_PlaceHolderGlobalNavigation_siteMapPath] > span").last().html(aContentType);
                $("#ctl00_PlaceHolderGlobalNavigation_siteMapPath").append("<span> > </span><span>" + pageTitle + "</span>");
            }

            if (secNode[0].innerHTML.indexOf("Indices") != -1) {
                $("#ctl00_PlaceHolderGlobalNavigation_siteMapPath").append("<span> > </span><span>Index Performance</span>");
            }
            if (secNode[0].innerHTML.indexOf("Solutions") != -1) {
                var node = secNode.find('a');
                node.attr("href", "#");
                //nextNode.find('a').css('font-weight', 'normal');
                node.css('text-decoration', 'none');
                node.css('cursor', 'text');
            }
        }
    }
    var biosection = $("#BioBreadcrumbSection");
    if (biosection.html()) {
        $("#ctl00_PlaceHolderGlobalNavigation_siteMapPath").append("<span> > </span>" + biosection.html());
        $("#ctl00_PlaceHolderGlobalNavigation_siteMapPath").last().css('font-weight', 'bold');
    }
    $("span[id$=ctl00_PlaceHolderGlobalNavigation_siteMapPath] > span").css('font-weight', 'bold');
    $('#breadcrum').css('display', 'block');
}

function getQueryStringFromID(keyword) {

    // get querystring as an array split on "&"
    var querystring = location.search.replace('?', '').split('&');
    // declare object
    var queryObj = {};
    // loop through each name-value pair and populate object
    for (var i = 0; i < querystring.length; i++) {
        // get name and value
        var name = querystring[i].split('=')[0];
        var value = querystring[i].split('=')[1];
        // populate object
        queryObj[name] = value;
    }

    // ***now you can use queryObj["<name>"] to get the value of a url
    // ***variable
    return queryObj[keyword];
}


function searchBreadcrumbCorrection() {
    //This is for span for English] once we have language site
    //    var rootNode = $("span[id$=ctl00_PlaceHolderGlobalNavigation_siteMapPath] > span:eq(0)");
    //    var rootNodeArrow = $("span[id$=ctl00_PlaceHolderGlobalNavigation_siteMapPath] > span:eq(1)");
    //    rootNode.hide();
    //    if (rootNodeArrow) rootNodeArrow.hide();

    var rootNode = $("span[id$=ctl00_SiteMapPath2] > span:eq(0)");
    var rootNodeArrow = $("span[id$=ctl00_SiteMapPath2] > span:eq(1)");
    rootNode.hide();
    if (rootNodeArrow) rootNodeArrow.hide();

    //this is for the first node
    var nextNode = $("span[id$=ctl00_SiteMapPath2] > span:eq(2)");
    nextNode.find('a').attr("href", "#");
    //nextNode.find('a').css('font-weight', 'normal');
    nextNode.find('a').css('text-decoration', 'none');
    nextNode.find('a').css('cursor', 'text');

    //this is for the second node being Publications - it should not be clickable
    var nextNode2 = nextNode.next().next();
    var secNode = nextNode2.find('a');

    if (secNode[0] != undefined) {
        if (secNode[0].innerHTML != undefined) {
            if (secNode[0].innerHTML.indexOf("Publications") != -1) {
                secNode.attr("href", "#");
                //nextNode.find('a').css('font-weight', 'normal');
                secNode.css('text-decoration', 'none');
                secNode.css('cursor', 'text');

                //Change the last node of breadcrumb to keyword of querystring
                var last = $('#ctl00_SiteMapPath2 > span:last');
                last[0].innerHTML = "Publications";
                // if (getQueryStringFromID("query")) {
                // last[0].innerHTML = getQueryStringFromID("query");
                // }
            }
        }
    }
}


function hoverSetup() {
    $('#insightsLanding li').hover(
		function () {
		    $('#insightsLanding').autoHover('stopTimer');
		},
		function () {
		    $('#insightsLanding').autoHover('startTimer', { 'cycle': 5000, 'cls': 'hover' });
		}
	);
    $('#ValueChain .graphic map area').hover(
		function () {
		    $('.details ul').autoHover('stopTimer');
		    $('#' + $(this).attr('data-target')).addClass('hover');
		},
		function () {
		    $('.details ul li.hover').removeClass('hover');
		    $('.details ul').autoHover('startTimer', { 'cycle': 10000, 'cls': 'hover' });
		}
	);
}



function MediaAndAwardEffect() {
    $('#mediasection dd .content').hide();
    $('#mediasection dd h3 a').click(function (e) {
        e.preventDefault();
        var heading = $(this).text();
        var content = $(this).parents('dd').find('.content').html();
        var hiddenValues = $("<div />").append($(this).parents('dd').find('.hiddenID').clone()).html();
        var dates = $(this).parents('dd').next('dt').html();
        var foot = $('body').find('.newsfooterContainer').html();
        $('body').append($('<div class="genericOverlayBackground news"><div class="genericOverlayPopup"><a class="bioPopupClose" href="#"></a><div class="topHead"><p>For Immediate Release</p><p>Research Affiliates, LLC</p><p class="date">'
         + dates + '</p><a class="downloadPDF" onclick="javascript:MediaPDF(this)"><img src="/_layouts/images/RA.ExternalWeb/print/VIEW-PDF-Document-INACTIVE.png"></a>'
         + hiddenValues + '</div><div class="genericContent news"></div></div></div>'));
        var overlay = $('.genericOverlayBackground:last');
        reDim(overlay.find('.genericOverlayPopup'));
        overlay.fadeIn(300);
        $('body').addClass('printer');
        setTimeout(function () {
            overlay.find('.genericContent').empty().append('<h3></h3><br/>' + content + foot);
            overlay.find('h3').empty().append(heading);

            reDim(overlay.find('.genericOverlayPopup'));
            ga('send', 'event', 'Press Release', heading, location.pathname);
            bioPopupClose();
            $('.genericContent.news').jScrollPane();
            overlay.append('');
        }, 1000);
    });
}

function MediaPDF(e) {
    //e.preventDefault();
    var ids = $(e).next();
    var id = ids.find(".MediaLinksID").text();
    var listId = ids.find(".MediaLinksListID").text();
    var webId = ids.find(".MediaLinksWebID").text();
    var title = $(e).parents(".news").find('h3').text().replace(/ /g, '_');
    var url = "/_layouts/RA.ExternalWeb.Branding/GeneratePDF.aspx/" + title + ".pdf?PDFType=NewsPdf&PDFtemplate=SimpleNewsPdfTemplate&ID="
        + id + "&ListID=" + listId + "&WebID=" + webId;
    window.open(url, "_blank");
}

function BioPDF() {
//Download button click

 var pageURl =  removeSpecialCharfromURL(window.location.href); 
    if(pageURl.indexOf('our team') > -1)
    {
    
        $('.download').on('click', function (e) {
            e.preventDefault();
            var Name = $(document).attr("title");
            var url = window.location.href;
            if (url.indexOf('?') > -1) {
                url = url.substring(0, url.indexOf('?'));         
            }     
              if (url.indexOf('#') > -1) {           
                 url = url.substring(0, url.indexOf('#'));
              }          
            var redirectedurl = url + "/" + Name + ".pdf?print=1";   
			//ga('send', 'event', 'PDF Downloads', 'Download', location.pathname);
            window.open(redirectedurl, "_blank");
        });
    }

    //Download link from userCardWebpart
      $('.downloadBioPDF').on('click', function (e) {
        e.preventDefault();
        var Name = $(document).attr("title");
        var url = window.location.href;
        if (url.indexOf('?') > -1) {
            url = url.substring(0, url.indexOf('?'));
        }
         if (url.indexOf('#') > -1) {           
             url = url.substring(0, url.indexOf('#'));
          }  
        var redirectedurl = url + "/" + Name + ".pdf?print=1";      
        window.open(redirectedurl, "_blank");
    });
}

function mediaSetup() {
 
    $('.linksContainer .userReadMore2').click(function () {
        if ($(this).hasClass("userReadMore2")) {
            $(this).addClass("userReadClose2")
					   .removeClass("userReadMore2")
					   .text('show less');
            $(this).parent().prev().toggle();
            //$('.biggerList').show();
        }
        else if ($(this).hasClass("userReadClose2")) {
            $(this).removeClass("userReadClose2")
					   .addClass("userReadMore2")
					   .text('show more');
            $(this).parent().prev().toggle();
           //  $('.biggerList').hide();
        }

    });
}

function aboutUsSetup() {

    function swapText(t, w) {
        var txt = $(t).text();
        $(t).text(txt === 'More ' + w ? 'Less ' + w : 'More ' + w);
        //window.scrollTo(0, 0);
    }

     $('.linksContainer span.aboutusMore').click(function () {
        if ($(this).hasClass("userReadMore")) {
            $(this).addClass("userReadClose")
					   .removeClass("userReadMore")
					   .text('less');
            $(this).prev().toggle();
        }
        else if ($(this).hasClass("userReadClose")) {
            $(this).removeClass("userReadClose")
					   .addClass("userReadMore")
					   .text('more');
            $(this).prev().toggle();
        }
    });
  }

function awardsSetup()
{
    $('.awardLinks h4').slice(0, 2).addClass('open');
    $('.awardLinks h4').click(function () {
        $(this).toggleClass('open');
        $(this).next().toggle();
    });
}

function thirdLevelMegaMenuClick() {
    $('ul.thirdLevel li a:first-child').on('click touchend', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        //alert(e.type + "ThirdLevel" + $(this).attr('title'));
        $('.mainNavigation .mainNavItem.active').removeClass('active');
        $('div.megaMenu:visible').hide();
        var el = $(this);
        var link = el.attr('href');
        window.location = link;
        return false;
    });
}

function searchStringCorrection() {
    var i = $('input[id*=InputKeywords]');
    var v = i.val();
    var newv = v.replace('RATopicTaxText:', '').replace(/\"+?/g, ''); document.title = document.title.replace('RATopicTaxText:', '').replace(/\"+?/g, '');
    i.val(newv);
}


var videoTitle;
var videoUrl;
var isTracked = false;
var youTubePlayer;

function onYouTubeIframeAPIReadySyncRA() {
    $('.genericVideo').click(function (e) {
        e.preventDefault();
        var url = $(this).attr('href');
        var title = $(this).attr('title');
        videoTitle = title;
        var videoLink = $(this).attr('href');
        var mp4Link = (videoLink.split(',;')[0]).split('videoLink,')[1];
        videoUrl = mp4Link;        

        if (typeof (YT) == 'undefined' || typeof (YT.Player) == 'undefined') {

            // 2. This code loads the IFrame Player API code asynchronously.
            var tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = function () {
                LoadVideoInPopup(videoUrl, title);
            };
        }
        else {
            LoadVideoInPopup(videoUrl, title);
        }
    });
}

function LoadVideo(divId, title, url, width, height, autoPlay) {
    if (typeof (YT) == 'undefined' || typeof (YT.Player) == 'undefined') {
        // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = function () {
            LoadVideo(divId, title, url, width, height, autoPlay);
        };
    }
    else {
        //var url = $(this).attr('href');
        //var title = $(this).attr('title');
        videoTitle = title;
        var videoLink = url;
        var mp4Link = videoLink; //(videoLink.split(',;')[0]).split('videoLink,')[1];
        videoUrl = mp4Link;
        var id = getVideoId(mp4Link);
        if (id != null && id != '') {
            PushToVideoTrackerArr(id, title, videoUrl);    
            if (youTubePlayer == null) {
                youTubePlayer = new YT.Player(divId, {
                    width: width,
                    height: height,
                    videoId: id,
                    playerVars: { 'autoplay': autoPlay, 'rel': 0, 'wmode': 'transparent' },
                    events: {
                        'onStateChange': onPlayerStateChange
                    }
                });
            }
            else {
                youTubePlayer.stopVideo();
                youTubePlayer.loadVideoById(id);
            }
        }
    }
}

function PlayVideo() {
    if (youTubePlayer != null) {
        youTubePlayer.playVideo();
        youTubePlayer = null;
    }
}

function DestroyVideo() {
    if (youTubePlayer != null) {
        youTubePlayer.destroy();
        youTubePlayer = null;
    }
}

 window.onPlayerStateChange = function(event) {
    if(event.data == YT.PlayerState.PLAYING)
	{
        var videoUrl = event.target.getVideoUrl();
        var indexes = $.map(videoTrackerArr, function(obj, index) {
            if(obj.id == getVideoId(videoUrl)) {
                return index;
            }
        });

        if(indexes.length > 0)
        {
            var videoObj = videoTrackerArr[indexes[0]];
		    videoTrackerArr.splice(indexes[0],1);
            ga('send', 'event', 'JW Video Play', videoObj.title, videoObj.url);
        }
    }
}

function PushToVideoTrackerArr(videoId, videoTitle, videoUrl){
    var indexes = $.map(videoTrackerArr, function(obj, index) {
        if(obj.id == videoId) {
            return index;
        }
    });
    if(indexes.length == 0)
    {
        var videoObj = {};
        videoObj.id = videoId;
        videoObj.title = videoTitle;
        videoObj.url = videoUrl;
        videoTrackerArr.push(videoObj);
    }
}

function setupWorkingMedia() {
    $("#videoContainer img").click(function (e) {
        e.preventDefault();
        $('form[name=aspnetForm]').submit(function (e) {
            e.preventDefault();
        });
        $(this).remove();
        var urlLink = '/Media%20Library/Ra%20Dna%20Web.mp4';
        var url = ServerName + urlLink;
        videoTitle = "Working for Us";
        videoUrl = urlLink;
        videoId = 'HyXNeBSMzbw';
        PushToVideoTrackerArr(videoId, videoTitle, videoUrl);        

        if (typeof (YT) == 'undefined' || typeof (YT.Player) == 'undefined') {

            // 2. This code loads the IFrame Player API code asynchronously.
            var tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = function () {
                var player = new YT.Player('videoFile', {
                    width: '580',
                    height: '326',
                    videoId: videoId,
                    playerVars: { 'autoplay': 1, 'rel': 0 },
                    events: {
                        'onStateChange': onPlayerStateChange
                    }
                });
            };
        }
        else {
            var player = new YT.Player('videoFile', {
                width: '580',
                height: '326',
                videoId: videoId,
                playerVars: { 'autoplay': 1, 'rel': 0 },
                events: {
                    'onStateChange': onPlayerStateChange
                }
            });
        }
        
    });
}
var videoTrackerArr = [];
function vidInlinePlay(p) {
    $(p).click(function (e) {
        e.preventDefault();	
        var urlLink = $(this).attr('href');
        $(this).parent().find('img').remove();
        $(this).parent().append('<div id="videoFile_'+ getVideoId(urlLink) +'">&#160;</div>');
        $(this).remove();
        videoUrl = urlLink;
		videoTitle = $(this).attr('title');
        var videoId = getVideoId(videoUrl);
        PushToVideoTrackerArr(videoId, videoTitle, videoUrl);        

        if (typeof (YT) == 'undefined' || typeof (YT.Player) == 'undefined') {

            // 2. This code loads the IFrame Player API code asynchronously.
            var tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = function () {
                var player = new YT.Player('videoFile_' + videoId, {
                    width: '580',
                    height: '326',
                    videoId: videoId,
                    playerVars: { 'autoplay': 1, 'rel': 0 },
                    events: {
                        'onStateChange': onPlayerStateChange
                    }
                });
            };
        }
        else {
            var player = new YT.Player('videoFile_' + videoId, {
                width: '580',
                height: '326',
                videoId: videoId,
                playerVars: { 'autoplay': 1, 'rel': 0 },
                events: {
                    'onStateChange': onPlayerStateChange
                }
            });
        }        
		
//		player.addEventListener('onStateChange', function(event) {
//            onPlayerStateChange(event);
//        });
    });
}

function videoForGreetingContainer() {
		LoadVideo('videoForGreetingFile', 'Greetings', 'http://youtu.be/0M3hSaJo828','768', '432', 1);
   }

function videoSocialMedia() {
    $('form[name=aspnetForm]').submit(function (e) {
        e.preventDefault();
    });
    var urlLink = $(".hiddenUrlClass").text();
    jwplayer("socialmediaDisplayFile").setup({
        file: urlLink,
        image: '_layouts/images/RA.ExternalWeb/GreetingSplash.png',
        width: 768,
        height: 432,
        ga: {},
        autostart: 'true',
        controls: 'false',
        skin: '/_layouts/images/RA.ExternalWeb/JWPlayerSkins/Five/five.xml',
        sharing: { link: urlLink },
        events: {
            onPlay: function (event) {
                if (this.getPosition() == 0)
                    ga('send', 'event', 'JW Video Play', 'Greetings', urlLink);
            },
            onComplete: function (event) {
                ga('send', 'event', 'JW Video Complete', 'Greetings', urlLink);
            },
            onFullscreen: function (event) {
                if (event.fullscreen == true)
                    ga('send', 'event', 'JW Video Full Screen', 'Greetings', urlLink);
            }
        }
    });
}

function SetupDefaultDescription() {
    DefaultShareDescription = "Research Affiliates, LLC is a global leader in innovative indexing and" +
                                " asset allocation strategies. We seek to be the preeminent source of innovative investment " +
                                "strategies that add value for the global investment community; we succeed by helping others succeed.";

}

function setupAASocialMedia() {
    $('.shareView').each(function (index) {

        var url = $(this).find(".sharelnk").attr("href"); //window.location.href + $(this).find(".sharelnk").attr("href")
        if (url == "#") {
            url = window.location.href;
        }
        var title = $(this).find(".sharelnk").attr("data-title");        
        if (!title) title = pageTitle;
        var description = ($(this).find(".sharelnk").attr("data-desc") ? $(this).find(".sharelnk").attr("data-desc") : $("meta[name='description']").attr('content'));
        var sharecontent = "<div class='addthisDiv' style='display:none;height:32px;width:115px'><div class='addthis_toolbox  "
            + "addthis_default_style addthis_32x32_style' style='float:left;margin-top:5px;' addthis:url='" + url + "' addthis:title='" + title
            + "' addthis:description='" + description + "' ><a class='addthis_button_linkedin'></a>"
            + "<a class='addthis_button_twitter' ></a><a class='addthis_button_email'></a></div></div>";

        $(this).append(sharecontent);
        addthisInit();
    });
}

function setupFundamentalsSocialMedia() {
    $('.FundamentalsSocialMedia').not(':has(.addthis_default_style)').each(function (index) {
        var title = $(this).find('h3').text();
        title = title.replace(/["']/g, '&#39;');

        var link = $(this).find('h3').find('a').first();
        var urlLink = link.attr('href');
        if (urlLink.indexOf('http') == -1)
        { urlLink = ServerName + urlLink; }
        urlLink = unescape(urlLink);
        urlLink = urlLink.replace(/ /g, '%20');
        urlLink = urlLink.replace('https', 'http');

        var description = $(this).find('.insightBlockContent').html().split('<br>')[0].split('<BR>')[0];
        if (description.length == 0) {
            description = DefaultShareDescription;
        }
        description = description.replace(/["']/g, '&#39;').replace(/[\n]/g, '');
        var sharecontent;
        if (link.hasClass('external')) {
            var intermediateShareLink = ServerName + "/Pages/IntermediateShare.aspx?externalPDFID=" + $(this).find('.DocIDHolder').text();
            sharecontent = "<div class='addthisDiv' style='display:none;height:28px;width:inherit;'><div class='addthis_toolbox_External "
            + "addthis_default_style ' style='float:left;margin-top:5px;' addthis:title='" + title + "' addthis:description='" + description
            + "' addthis:url='" + intermediateShareLink + "' ><a class='addthis_button_linkedin' ></a>"
            + "<a class='addthis_button_twitter' ></a><a class='addthis_button_email' ></a></div></div>";
        }
        else {
            sharecontent = "<div class='addthisDiv' style='display:none;height:28px;width:inherit;'><div class='addthis_toolbox "
            + "addthis_default_style' style='float:left;margin-top:5px;' addthis:url='" + urlLink + "' addthis:title='" + title
            + "' addthis:description='" + description + "' ><a class='addthis_button_linkedin'></a>"
            + "<a class='addthis_button_twitter' ></a><a class='addthis_button_email'></a></div></div>";
        }
        $(this).find('.Share').append(sharecontent);
    });
    reconfigureAddthis();
}

function setupMultiMediaSocialMedia() {
    $('.MultiMediaSocialMedia').not(':has(.addthis_default_style)').each(function (index) {
        var title = $(this).find('h2').text();
        title = title.replace(/["']/g, '&#39;');

        var link = $(this).find('.imgShare').find('a').first();
        var urlLink = document.URL; // link.attr('href');
        if (urlLink.indexOf('http') == -1)
        { urlLink = ServerName + urlLink; }
        urlLink = unescape(urlLink);
        urlLink = urlLink.replace(/ /g, '%20');
        urlLink = urlLink.replace('https', 'http');

        var description = $(this).find('.imgContent').html().split('<br>')[0].split('<BR>')[0];
        if (description.length == 0) {
            description = DefaultShareDescription;
        }
        description = description.replace(/["']/g, '&#39;').replace(/[\n]/g, '');

        var sharecontent;
        if (link.hasClass('external')) {
            var intermediateShareLink = ServerName + "/Pages/IntermediateShare.aspx?externalPDFID=" + $(this).find('.DocIDHolder').text();
            sharecontent = "<div class='addthisDiv' style='display:none;height:28px;width:inherit;'><div class='addthis_toolbox_External "
            + "addthis_default_style ' style='float:left;margin-top:5px;' addthis:title='" + title + "' addthis:description='" + description
            + "' addthis:url='" + intermediateShareLink + "' ><a class='addthis_button_linkedin' ></a>"
            + "<a class='addthis_button_twitter' ></a><a class='addthis_button_email' ></a></div></div>";
        }
        else {
            sharecontent = "<div class='addthisDiv' style='display:none;height:28px;width:inherit;'><div class='addthis_toolbox "
            + "addthis_default_style' style='float:left;margin-top:5px;' addthis:url='" + urlLink + "' addthis:title='" + title
            + "' addthis:description='" + description + "' ><a class='addthis_button_linkedin'></a>"
            + "<a class='addthis_button_twitter' ></a><a class='addthis_button_email'></a></div></div>";
        }
        $(this).find('.imgShareOuter').first().append(sharecontent);
    });
    reconfigureAddthis();
}

function setupTableauSocialMedia() {
    $('.TableauSocialMedia').not(':has(.addthis_default_style)').each(function (index) {
        var title = $(this).find('h2 a').text();
        title = title.replace(/["']/g, '&#39;');

        var description = $(this).find('.sumarry span').html().split('<br>')[0].split('<BR>')[0];
        if (description.length == 0) {
            description = DefaultShareDescription;
        }
        description = description.replace(/["']/g, '&#39;').replace(/[\n]/g, '');

        var sharecontent;
        var intermediateShareLink = ServerName + "/Pages/IntermediateShare.aspx?TableauID=" + $(this).find('.tableauID').text();
            sharecontent = "<div class='addthisDiv' style='display:none;height:28px;width:inherit;'><div class='addthis_toolbox_External "
            + "addthis_default_style ' style='float:left;margin-top:5px;' addthis:title='" + title + "' addthis:description='" + description
            + "' addthis:url='" + intermediateShareLink + "' ><a class='addthis_button_linkedin' ></a>"
            + "<a class='addthis_button_twitter' ></a><a class='addthis_button_email' ></a></div></div>";
        $(this).find('.Share').first().append(sharecontent);
    });
    reconfigureAddthis();
}

function setupSearchSocialMedia() {

    $('.socialMedia').not(':has(.addthis_default_style)').each(function () {
        var title = $(this).find('h3').text();
        title = title.replace(/["']/g, '&#39;');

        var link = $(this).find('h3').find('a').first();
        var urlLink = link.attr('href');
        if (urlLink.indexOf('http') == -1)
        { urlLink = ServerName + urlLink; }
        urlLink = unescape(urlLink);
        urlLink = urlLink.replace(/ /g, '%20');
        urlLink = urlLink.replace('https', 'http');

        var description = $(this).find('.searchResultContent').text();
        if (description.length == 0) {
            description = DefaultShareDescription;
        }
        description = description.replace(/["']/g, '&#39;').replace(/[\n]/g, '');

        var addthisButton;
        if ($(this).hasClass('premium')) {
            addthisButton = "<a class='addthis_button_email'></a>";
        }
        else {
            addthisButton = "<a class='addthis_button_linkedin'></a><a class='addthis_button_twitter' ></a><a class='addthis_button_email'></a>";
        }

        var sharecontent;
        var docId = $(this).find('.DocIDHolder').text();
        var intermediateShareLink;
        if (link.hasClass('external')) {
            intermediateShareLink = ServerName + "/Pages/IntermediateShare.aspx?externalPDFID=" + docId;
            sharecontent = "<div class='addthisDiv' style='display:none;height:28px;width:inherit;'><div class='addthis_toolbox_External addthis_default_style ' style='float:left;margin-top:5px;'  addthis:title='" +
						title + "' addthis:description='" + description + "' addthis:url='" + intermediateShareLink +
						"' >" + addthisButton + "</div></div>";
        }
        else if (urlLink.toLowerCase().indexOf('.aspx') == -1
            && urlLink.toLowerCase().replace(/%20/g, ' ').indexOf('/production content library/') == -1) {
            intermediateShareLink = ServerName + "/Pages/IntermediateShare.aspx?internalDocId=" + docId + "&Title=" + title;
            sharecontent = "<div class='addthisDiv' style='display:none;height:28px;width:inherit;'><div class='addthis_toolbox_External addthis_default_style ' style='float:left;margin-top:5px;'  addthis:title='" +
						title + "' addthis:description='" + description + "' addthis:url='" + intermediateShareLink +
						"' >" + addthisButton + "</div></div>";
        }
        else {
            sharecontent = "<div class='addthisDiv' style='display:none;height:28px;width:inherit;'><div class='addthis_toolbox addthis_default_style ' style='float:left;margin-top:5px;' addthis:url='" +
				 urlLink + "' addthis:title='" + title + "' addthis:description='" +
				 description + "' >" + addthisButton + "</div></div>";
        }

        $(this).find('.Share').append(sharecontent);
    });
    reconfigureAddthis();
}

function reconfigureAddthis() {

    var addthis_share_External = {
        url_transforms: {
            shorten: {
                twitter: 'bitly',
                email: 'bitly',
                facebook: 'bitly'
            }
        },
        shorteners: {
            bitly: {
            }
        },
        passthrough: {
            twitter: {			 
				via: "RA_Insights"
            }
        },
        email_template: "ra_template",
        email_vars: {
            CorrectUrl: "Global Url",
            Detail: "Global Detail"
        }
    };
    try {
		addthis.init();
        addthis.toolbox(".addthis_toolbox_External", {}, addthis_share_External);
    }
    catch (e) { }
}


function setUpTracking() {
//    $('a[href$=".pdf"]').click(function () {
//        ga('send', 'event', 'PDF Downloads', 'Download', $(this).attr('href'));
//    });
    if ($('.slide').length) {
        $('.slide a').click(function () {
            ga('send', 'event', 'Hero Slider', this.href,
                                 $(this).parent('.slide').find('img').attr('alt'));
        });
    }
    if ($('.ideasCarousel').length) {
        $('.ideasCarousel li.touchcarousel-item a').click(function () {
            ga('send', 'event', 'Idea Slider', this.href,
                                 $(this).parent('.touchcarousel-item').find('img').attr('src'));
        });
    }
	if(typeof (addthis) != 'undefined')
	{
		addthis.addEventListener('addthis.menu.share', addthis_listener);

	}
}


function addthis_listener(event) {

    var shareUrl = event.data.url;

    if (event.data.url.indexOf("IntermediateShare") > -1) {
        var parentSection = $(event.data.element).parents('.insightsBlock');
        if (parentSection.length)
            shareUrl = parentSection.find('h3 a').attr('href').replace('https', 'http');
        ga('send', 'event', 'addthis', event.data.service, shareUrl);
    }
    else
        ga('send', 'event', 'addthis', event.data.service, event.data.url);

    ga('send', 'event', 'Social Share Count with Title', event.data.service, event.data.element.share.title);
    if (event.data.service == 'email') {
        var detail = event.data.element.share.description.replace(/[\n\r\t]/g, "");
        var email_var = $.parseJSON('{"CorrectUrl":"' + shareUrl + '","Detail": "' + detail + '" }');
        addthis.update('share', 'email_vars', email_var);
    }
}

function addthisResolutionCheck(t) {
    if ($(window).width() - 960 <= 55) {
        t.css('margin-left', 0);
    } else {
        t.css('margin-left', -47);
    }
}

function addthisInit() {
    try {
		addthis.init();
		addthis.toolbox(".addthis_toolbox", {}, {});
	}
	catch(E) {
		addthis = {};
	}

}

function indexesTableFix() {
    $('table.indexes').find('tbody tr:odd').addClass('odd');
}

function perfTableSetup() {
    //config to set the columns into categories
    var index_tables = {
        'common': '0-7',
        'performance': '8-20',
        'characteristics': '21-26',
        'analytics': '27-32'
    };
    var sortTable = $('#sortableTable');

    //apply table sorter with filter widget
    sortTable.tablesorter(
		{
		    widgets: ["filter"],
		    widgetOptions: {
		        filter_childRows: false,
		        filter_columnFilters: true,
		        filter_cssFilter: 'tablesorter-filter',
		        filter_functions: null,
		        filter_hideFilters: true,
		        filter_ignoreCase: true,
		        filter_reset: 'button.reset',
		        filter_searchDelay: 300,
		        filter_startsWith: false,
		        filter_useParsedData: false
		    },
		    headers: (function () {
		        var o = o || {};
		        // columns 10 t0 32 to not sortable
		        for (var i = 10; i <= 32; i++) {
		            o[i] = { sorter: false };
		        }
		        return o;
		    })()
		}
	).bind("sortBegin", function (e, t) {

	    var sortArray = t.config.sortList.pop();
	    var sortDirection = sortArray[0, 1];

	    t.config.sortList.push([sortArray[0, 0] + 1, sortDirection]);
	    t.config.sortList.push([20, 0]);
	    t.config.sortList.push([4, 1]);

	    t.config.sortList.push([sortArray[0, 0], sortDirection]);

	}); //hide the columns not required to be visible. These will be toggled based on tab change
    function hideColumns() {
        sortTable.find('.hide').removeClass('hide');
        for (var i = 0, len = arguments.length; i < len; i++) {
            var _x = index_tables[arguments[i]].split('-')[0];
            var _y = index_tables[arguments[i]].split('-')[1];
            _x = parseInt(_x);
            _y = parseInt(_y);
            for (var j = _x; j <= _y; j++) {
                sortTable.find('tr').each(function () {
                    $(this).find('th,td').eq(j).addClass('hide');
                    //$(this).find('td').eq(j).hide();
                });
            }
        }
    }

    //initial call to hide columns and show only performance data
    hideColumns('characteristics', 'analytics');

    //tab change functionality
    $('.indexContainer ul#selector').find('li').click(function () {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        var cls = $(this).attr('id');
        switch (cls) {
            case 'performance':
                hideColumns('characteristics', 'analytics');
                break;
            case 'characteristics':
                hideColumns('performance', 'analytics');
                break;
            case 'analytics':
                hideColumns('performance', 'characteristics');
                break;
            default:
                hideColumns('characteristics', 'analytics');
                break;
        }
    });

    //filtering lists
    $('.filterContainer ul li.list ul li').click(function (e) {
        e.preventDefault();
        var txt = $(this).text();
        var filters = $('table').find('input.tablesorter-filter');
        filters.eq(0).val(txt).trigger('search', false);
    });

    //filtering show all
    $('.filterContainer ul li.button').click(function (e) {
        e.preventDefault();
        var filters = $('table').find('input.tablesorter-filter');
        filters.eq(0).val('').trigger('search', false);
    });

}   

function ShowSubscriptionPopup() {
    //1469 + 1780 added ipad
    if(($(window).width() < 768) || isiPad){
       var url = "/pages/emailPopup.aspx";    
        $(location).attr('href',url);
    }else{
       var options = {
                 url: emailPopupURL,
                 title: emailPopupTitle,
                 width: 621,
    			 autoSize: true,
                 allowMaximize: false
             };
             try
             {
    			SP.UI.ModalDialog.showModalDialog(options);
    		 }
    		 catch(error)
    		 {		 
    			 SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);		 
    		 }
    			 
             $('.ms-dlgTitle').hide();
             /*IE8 fix*/
             $('.ms-dlgContent').prev('iframe').attr('style','display:none');	
    }
}

function treeNodeRedirect(url)
{
    window.location.href = url;
}

function removeSpecialCharfromURL(url)
{
    return url.toLowerCase().replace(/%20/g, ' ');    
}

function tabSetupNew() {
 
    $(window).bind('hashchange', function (e) {
        e.preventDefault();
        if (isiPad) { $('.mainNavItem.active .megaMenuClose').click(); }

        if (!!location.hash && location.hash != '#') {
            setupTabChangeNew();
            }        
            window.scrollTo(0, 0);
           
    });


    $('.navTreeCtrl a').not(':has(img)').click(function (e) {
  
     var linkURL = removeSpecialCharfromURL($(this).attr('href').substring(0, $(this).attr('href').lastIndexOf('#')));
    // linkURL = linkURL.toLowerCase().replace(/%20/g, ' ');
  	 var pageURl = removeSpecialCharfromURL(location.pathname);
	// pageURl = pageURl.toLowerCase().replace(/%20/g, ' ');
        e.preventDefault();

        if($(this).attr('href').indexOf("#") == -1)
        {
            linkURL = removeSpecialCharfromURL($(this).attr('href'));
            if( linkURL != pageURl)
            {
                treeNodeRedirect($(this).attr('href'));
            }
        }
        else
        {
            if( linkURL != pageURl)
            {
                treeNodeRedirect($(this).attr('href'));
            }
            else
            {
                var idx = $(this).attr('href').split('#')[1];
                location.hash = '#' + idx;
            }
        }
    });

    //page load default view
    setupTabChangeNew();

    //below code for Direct management.aspx related work
    var pageURl =  removeSpecialCharfromURL(location.pathname);          
    var directManagement="/Work with us/How to Invest/Pages/DirectManagement.aspx";   
    if(pageURl == directManagement.toLowerCase())
    {
          $('.navTreeCtrl a').each(function () {
                var href = $(this).attr('href');
                var amgt ="Research Affiliates Asset Management";
                if( $(this).text().toLowerCase() != amgt.toLowerCase())
                {
                 href = href.replace('DirectManagement', 'BusinessModel');
                 $(this).attr('href', href);
                }
          });
       
    }

}

function setupTabChangeNew() {
   var isNoHash=false;
        if (!!location.hash) {
            idx = location.hash.split('#')[1];
            
        } else {
            idx = $('.navTreeCtrl  a').not(':has(img)').first().attr('href').split('#')[1];
          
           $('.navTreeCtrl  a').not(':has(img)').each(function () {
         
                var linkURL = removeSpecialCharfromURL($(this).attr('href'));       
                var pageURl =  removeSpecialCharfromURL(location.pathname);
			    if(pageURl.indexOf("our team") > -1 && linkURL.indexOf("ourteam.aspx") > -1 &&
			    linkURL.indexOf("ourteam.aspx?")== -1 && pageURl.indexOf("ourteam.aspx")== -1)
			    {
				    $(this).parent().addClass("activeFirstlevel");
			    }
			
                 if(linkURL == pageURl) {
                    isNoHash= true;    
                    $(this).parents('.navTreeCtrl').find('.active').removeClass('active');         
                    $(this).addClass('active');
                    //if($(this).attr('href') && $(this).attr('href').indexOf("#") < 0) {
				    //    $(this).attr('href','');
                    //}
				    //$(this).css('cursor','default');
				    try {
				        if($($(this).parents("table")[0]).next()[0].tagName =="DIV") {
					        $(this).parent().addClass("activeFirstlevel");
				        }
			        }
			        catch (e) {
			        }
			
                    $($(this).parents("div")[0]).prev().addClass("activeFirstlevel");
				    if(pageURl.indexOf("/solutions/rafi") > -1 )
			        {
				        try {
					    $($(this).parents("div")[1]).prev().addClass("activeFirstlevel");
					    }catch (e) {}
			        }
                    return false;
                }
           });

        }

         if(!isNoHash)
        {

        var isHashPresent = false;
        $('.navTreeCtrl  a').not(':has(img)').each(function () {

        if($(this).attr('href').indexOf("#") != -1)
        {
            if ($(this).attr('href').split('#')[1].toLowerCase() == idx.toLowerCase()) {
                idx = $(this).attr('href').split('#')[1];
                isHashPresent = true;
                return false;
            }
        }
        });
		
		if(!location.hash || isHashPresent)
        {
        if (isHashPresent == false) {
            idx = $('.navTreeCtrl  a').not(':has(img)').first().attr('href').split('#')[1];
        }
        $('.navTreeCtrl a[href$=#' + idx + ']').each(function () {

          // $('.navTreeCtrl').find('.active').removeClass('active');
            $(this).parents('.navTreeCtrl').find('.active').removeClass('active');
           // $(this).find('.active').removeClass('active');
            $(this).addClass('active');
              
			try {
				if($($(this).parents("table")[0]).next()[0].tagName =="DIV")
				{
					$(this).parent().addClass("activeFirstlevel");
				}
			}
			catch (e) {
			}
			
            $($(this).parents("div")[0]).prev().addClass("activeFirstlevel");

            $('#innerContainer.multiTab > section').hide();

            $('#innerContainer > #' + idx + 'section').each(function () {
                $(this).show();
                if ($(this).find('.fullWidthContent').length) {
                    $('#innerContainer').addClass('left');
                }
                else {
                    $('#innerContainer').removeClass('left');
                }
            });

      
       

          var hashTitle = idx;
            if (hashTitle.length && hashTitle != "aboutus") {
            if(hashTitle != "workingAtRa")
            {
                $(document).attr("title", hashTitle);
                ga('send', 'event', 'Tabs', location.pathname, hashTitle);
             }
             else
             {
                 $(document).attr("title", "careers");
                ga('send', 'event', 'Tabs', location.pathname, 'careers');
             }
            } else if (hashTitle === "aboutus") {
                $(document).attr("title", pageTitle);
                ga('send', 'event', 'Tabs', location.pathname, pageTitle);
            }


            var pageURl =  removeSpecialCharfromURL(location.pathname);  
          
            var howtoInvest="/Work with us/How to Invest/Pages/BusinessModel.aspx";   
             
            if(pageURl === howtoInvest.toLowerCase())
            { 
                   if ((idx === 'BusinessModel')) {
                    $('.socialHeader h1').text("How to Invest");
                } else if ((idx === 'AssetManagementAffiliates')) {
                    $('.socialHeader h1').text("Affiliates");
                } else if ((idx === 'IndexCalculatorAffiliates')) {
                    $('.socialHeader h1').text("Index Calculators");
                } else if ((idx === 'InstitutionalInvestors')) {
                   $('.socialHeader h1').text("Institutions");
                } 
            }
            else
            {
            if ((idx === 'aboutus')) {
                $('.socialHeader h1').text("About us");
            } else if ((idx === 'contactus')) {
                $('.socialHeader h1').text("Contact Us");
            } else if ((idx === 'media')) {
                $('.socialHeader h1').text("Media");
            } else if ((idx === 'workingAtRa')) {
               $('.socialHeader h1').text("Careers");
            } else if ((idx === 'awards')) {
               $('.socialHeader h1').text("Awards");
            }
            }

          
        });
		}
        }
    }
     function autoHeight(){
	var yHgt
	if ($('.socialHeader').find('img').length){
		yHgt = $('.socialHeader').find('img').height();
		$('#mainContainer+#innerContainer').css('margin-top','104px');
	}
	else if($('.socialHeader').find('h1').length){
		yHgt= $('.socialHeader').find('h1').outerHeight()
	}
	$('.freezeBnr').css('height',yHgt);
}
function framePopup() {
    $('.iframePopup').click(function (e) {
        e.preventDefault();
        var url = $(this).attr('href');
        var title = $(this).attr('title');
        LoadVideoInPopup(url, title);
	});
}

function LoadVideoInPopup(url, title){
    var id = getVideoId(url);
    if(id != null && id != '')
    {
        $('body').append($('<div class="genericOverlayBackground"><div class="genericOverlayPopup video"><a class="bioPopupClose" href="#"></a><h3></h3><div class="genericContent"><div id="genericVideoFrame"></div></div><div></div>'));
        var overlay = $('.genericOverlayBackground:last');
        var titleTag = overlay.find('h3');
        titleTag.empty().append(title);
        reDim(overlay.find('.genericOverlayPopup'));
        overlay.fadeIn(300);
        PushToVideoTrackerArr(id, title, url);        

        if (typeof (YT) == 'undefined' || typeof (YT.Player) == 'undefined') {

            // 2. This code loads the IFrame Player API code asynchronously.
            var tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = function () {
                var player = new YT.Player('genericVideoFrame', {
                    width: '540',
                    videoId: id,
                    playerVars: { 'autoplay': 1, 'rel': 0 },
                    events: {
                        'onStateChange': onPlayerStateChange
                    }
                });
            };
        }
        else {
            var player = new YT.Player('genericVideoFrame', {
                width: '540',
                videoId: id,
                playerVars: { 'autoplay': 1, 'rel': 0 },
                events: {
                    'onStateChange': onPlayerStateChange
                }
            });
        }       
		
//		player.addEventListener('onStateChange', function(event) {
//            onPlayerStateChange(event);
//		});
		
        bioPopupClose();
    }
}

function LoadVideoDuration()
{
    if($('.videoCaption').length)
    {
        $('.videoCaption').each(function()
        {
            var ctrl = $(this);
//            try
//            {
            var id = getVideoId(getVideoUrl(ctrl));
//            }
//            catch(e){}
            if(id != null && id != '')
            {
                var youTubeURL = 'http://gdata.youtube.com/feeds/api/videos/' + id + '?v=2&alt=json';
                var json = (function () {
                    $.ajax({
                        'async': false,
                        'global': false,
                        'url': youTubeURL,
                        'dataType': "jsonp", // necessary for IE9
                        crossDomain: true,
                        'success': function (data) {
                            var responseId = data.entry.id.$t;
                            $('.videoCaption').each(function()
                            {
                                var ctrl = $(this);
                                var id = getVideoId(getVideoUrl(ctrl));
                                if(id != '' && responseId.endsWith(id))
                                {  
                                    var duration = data.entry.media$group.yt$duration.seconds;
                                    ctrl.append(' (' +toHHMMSS(duration) +')');
                                }
                            });
                        }
                    });
                })();
                
            }
        });
    }
}

function getVideoUrl(ctrl)
{
    var videoUrl = ctrl.attr('videoUrl');
    if(videoUrl == null || videoUrl == '')
    {
        videoUrl = ctrl.attr('href');
    }
    return videoUrl;
}

function getVideoId(url)
{
     //var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
     //if(id != null && id.length == 2)
     //   return id[1];

     var id = url.match(/^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);
     if(id != null && id.length == 3)
        return id[2];
    return '';
}
function toHHMMSS(dur) {
    var sec_num = parseInt(dur, 10); // don't forget the second param
   // var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num) / 60);
    var seconds = sec_num  - (minutes * 60);

  
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = +minutes+':'+seconds;
    return time;
}

function ShowEllipsis()
{
    $(".ellipsis").each(function()
    {
        var el = $(this);

        if(el.css("overflow") == "hidden")
        {
            var text = el.html();
            var multiline = el.hasClass('multiline');
            var t = $(this.cloneNode(true))
                    .hide()
                    .css('position', 'absolute')
                    .css('overflow', 'visible')
                    .width(multiline ? el.width() : 'auto')
                    .height(multiline ? 'auto' : el.height())
                    ;

            el.after(t);

            function height() { return t.height() > el.height(); };
            function width() { return t.width() > el.width(); };

            var func = multiline ? height : width;

            while (text.length > 0 && func())
            {
                text = text.substr(0, text.length - 1);
                t.html(text + "...");
            }

            el.html(t.html());
            t.remove();
        }
    });
}
Date.prototype.formatMMDDYYYY = function(){
    return this.getMonth() + 
    "/" +  this.getDate() +
    "/" +  this.getFullYear();
}

     function convertToCSV(objArray, ignoreFields) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
		if(array.length == 0)
			return '';
		if(!ignoreFields)
		{
			ignoreFields = [];
		}
		
		for (var index in array[0]) {
			var skip = false;
			for (var ignoreFieldIndex in ignoreFields) {
				if(index == ignoreFields[ignoreFieldIndex]){
					skip = true;					
					break;
				}
			}
			if(!skip){
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
				if(index == ignoreFields[ignoreFieldIndex]){
					skip = true;					
					break;
				}
			}
			if(skip){
				break;
			}
				
				
				if (line != '') line += ','
				
				var value = array[i][index];
					if(value && value.indexOf && value.indexOf('Date') > -1){
						try{
						var parsedDate = new Date(parseInt(value.substr(6))).formatMMDDYYYY();
						line+=parsedDate;
						}
						catch(E){
						}
						
					}else{
						line += value;
					}

            }

            str += line + '\r\n';
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
			for (var i = keys.length; i--;) {
				if (e.keyCode === keys[i]) {
					preventDefault(e);
					return;
				}
			}
		}

		function preventWheel(e) {
		  preventDefault(e);
		}
		
	function tabsWidths(wrpr){
		var $tabsCount = $(wrpr).find("li").length;
		var $tabsSize = (100/$tabsCount);
		var $listWidth = $(wrpr).find("li").width($tabsSize+'%');
		$(wrpr).find("li a").width(($listWidth.width())+'px');
	}
    
    function setEmailVars(obj)
    {
	    var addthisbox = obj.find('.addthis_toolbox');

	    if(addthisbox.length)
	    {
		    var email_var = $.parseJSON('{"CorrectUrl":"' + addthisbox.attr('addthis:url') + '","Detail": "' + addthisbox.attr('addthis:description') + '" }');
            addthis.update('share', 'email_vars', email_var);
	    }
        else
        {
            addthisbox = obj.find('.addthis_toolbox_External');
            var email_var = $.parseJSON('{"CorrectUrl":"' + addthisbox.attr('addthis:url') + '","Detail": "' + addthisbox.attr('addthis:description') + '" }');
            addthis.update('share', 'email_vars', email_var);
        }
    }

    function setupPublicationLinks()
	{
		if ($(".insightsTags").length) {

        $(".insightsTags li a").each(function( index ) {
            var x = this.pathname.toLowerCase();
            if (x.indexOf("/search/pages/results.aspx") > -1) {
                x = x.replace('/search/pages/results.aspx', '/our ideas/insights/pages/publications.aspx');
                x = x + this.search;

                $(this).attr('href', x);
            }
            else if(x == "search/pages/results.aspx")
            {
                x = x.replace('search/pages/results.aspx', '/our ideas/insights/pages/publications.aspx');
                x = x + this.search;

                $(this).attr('href', x);
            }
		
		});
		}
	}
	jQuery.cachedScript = function( url, options ) {
	// Allow user to set any option except for dataType, cache, and url
	options = $.extend( options || {},
	{ dataType: "script", cache: true, async: true, url: url }
	);
	// Use $.ajax() since it is more flexible than $.getScript
	// Return the jqXHR object so we can chain callbacks
	return jQuery.ajax( options );
	};

    function dFrmopup() {
        var tableauID = GetQueryStringParams("TableauID");
        if(tableauID != null && tableauID != '')
        {
            var overlayUrl = $('.tableauID').filter(function(){ return $(this).text().trim() == tableauID;}).parents('.relates').find('.tableauOverlay').text().trim();
            if(overlayUrl == null || overlayUrl == '')
            {
                GetTableauData(tableauID,ShowDefaultViewTableauPopupSuccess);
            }
            else
            {
                ShowViewTableauPopup('/Pages/ViewTableau.aspx?InfographicsID='+tableauID, overlayUrl);
            }
        }
        $('.dmfrm').click(function (e) {
            e.preventDefault();
            var url = $(this).attr('href');
            var overlayurl=$(this).parents('.relates').find('.tableauOverlay').text();
            ShowViewTableauPopup(url, overlayurl);
            //ga('send', 'event', 'Tableau', location.pathname, url);
	    });
        $(window).resize(function() {
            rePopup();
        });
	}

    function ShowViewTableauPopup(url, overlayurl)
    {
        $('body').append($('<div class="genericOverlayBackground iframe dmfrmpopup"><div class="genericOverlayPopup"><a class="bioPopupClose" href="#"></a><div class="genericContent"></div><div></div>'));
        var overlay = $('.genericOverlayBackground:last');
		overlay.fadeIn(300);
		setTimeout(function () {
            overlay.find('.genericContent').empty(); 
            if(overlayurl != null && overlayurl != '')
            {
				$('.genericContent').append('<div id="talkingPoints" style="position:absolute;top:0px;left:0px;width: 100%;height: 100%;"><img src="'+overlayurl+'" style="width:100%;height:100%;" alt="" border="0" /></div>').on('click',function(e){
					$('#talkingPoints').fadeOut(300);
				});
            }
            var tmp = $('<iframe id="viewTableauFrame" src="'+url+'" scrolling="no" style="overflow:hidden;border:none; display:none;"/>')
			overlay.find('.genericContent').append(tmp);
			
            rePopup();
		}, 1);
		bioPopupClose();
    }
    function rePopup()
    {
        var width = 1048;
        var height = 650;
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        windowWidth = windowWidth >= width? width: (windowWidth);
        windowHeight = windowHeight >= height? height: (windowHeight);
        var iframe = $('iframe#viewTableauFrame');
			iframe.width(windowWidth);
            iframe.height(windowHeight);
            if (/iPhone|iPod|iPad/.test(navigator.userAgent)) {
                iframe.contents().find('#tableauFrameDiv')
                    .css('width', (windowWidth) + 'px')
                    .css('height', (windowHeight) + 'px')
                    .css("overflow", "auto")
                    .css("-webkit-overflow-scrolling", "touch");;
                //iframe.contents().find('.tableauFrame').css('width', '100%').css('height', '100%');
                iframe.contents().find('.tableauFrame').css('width', (windowWidth) + 'px').css('height', (windowHeight) + 'px');
            }
            else {
                iframe.contents().find('.tableauFrame').css('width', (windowWidth) + 'px').css('height', (windowHeight) + 'px');
            }
        $('.bioPopupClose').css({left: 'auto', right: 'auto'});
        if(windowWidth < width) {
            $('.bioPopupClose').css('left', (windowWidth - 40) + 'px');
        }else{
            $('.bioPopupClose').css('right', (25) + 'px');
        }
        var overlay = $('.genericOverlayBackground:last');
        reDim(overlay.find('.genericOverlayPopup'));
    }
    function GetTableauData(tableauID,SuccessFunc)
    {
        SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function(){
        var ctx = new SP.ClientContext.get_current();
        var currentList = ctx.get_site().get_rootWeb().get_lists().getByTitle("Infographics");
        //context.load(currentList);
        this.tableauItem = currentList.getItemById(tableauID);
        ctx.load(this.tableauItem);
        ctx.executeQueryAsync(Function.createDelegate(this, SuccessFunc), function (sender, args) { console.log(args.get_message()); });
        });
    }

    function ShowTableauSuccess(sender,args)
    {
        var tableauUrlValue = this.tableauItem.get_item("RACustomPublicationUrl"); 
        if(tableauUrlValue != null)
        {
            var tableauUrl = tableauUrlValue.get_url();
            if(tableauUrl != null && tableauUrl != "")
            {
                $('#tableauWrpr').append('<iframe id="tableauFrame" width="1048px" height="650px" src="'+ tableauUrl +'" style="border:none"/>');
            }
        }
    }

    function ShowDefaultViewTableauPopupSuccess(sender,args)
    {
        var overlayUrlValue = this.tableauItem.get_item("RACustomPublicationUrlLarge"); 
        if(overlayUrlValue != null)
        {
            var overlayUrl = overlayUrlValue.get_url();
            if(overlayUrl != null && overlayUrl != "")
            {
                ShowViewTableauPopup('/Pages/ViewTableau.aspx?InfographicsID='+this.tableauItem.get_item("ID"), overlayUrl);
            }
        }
    }