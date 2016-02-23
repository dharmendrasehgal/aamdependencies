//#region Function definitions and Global Initializer
    // Initializing the AAGlobal variable
    window.AAGlobal = window.AAGlobal || {};

    // Hack: IN IE, Because of Chart animation, column bars was not rendering first time issue is fixed by disabling while FirstTimeLoad is set as true.
    AAGlobal.FirstTimeLoad = true;
	AAGlobal.minVal;
	AAGlobal.maxVal;
    // XY co ordinates for Scatter chart origin line for Regression series
    AAGlobal.ScatterRegressionOrigin = [0, 0];

    //Chart configuration file and its web part connection.
    AAGlobal.CONFIG = {
        "EQUITIES": {
            "Scatter": "EquitiesScatterChartConfig",
            "Column": "EquitiesColumnChartConfig",
            "Table": "EquitiesTableChartConfig",
            "Disclaimer": "EQUITIES_HERO",
            "DataTable": "EquitiesDataTableConfig"
        },
        "FIXED_INCOME": {
            "Scatter": "FixedIncomeScatterChartConfig",
            "Column": "FixedIncomeColumnChartConfig",
            "Table": "FixedIncomeTableChartConfig",
            "Disclaimer": "FIXED_INCOME_HERO",
            "DataTable": "FixedIncomeDataTableConfig"
        },
        "CORE_OVERVIEW": {
            "Scatter": "CoreOverviewScatterChartConfig",
            "Column": "CoreOverviewColumnChartConfig",
            "Table": "CoreOverviewTableChartConfig",
            "DataTable": "CoreOverviewDataTableConfig",
            "Disclaimer": "CORE_OVERVIEW_HERO"
        },
        "COMMODITIES": {
		    "Scatter": "CommoditiesScatterChartConfig",
            "Column": "CommoditiesColumnChartConfig",
            "Table": "CommoditiesTableChartConfig",
            "DataTable": "CommoditiesDataTableConfig",
            "Disclaimer": "COMMODITIES_HERO"
        },
        "CURRENCIES": {
		    "Scatter": "CurrenciesScatterChartConfig",
            "Column": "CurrenciesColumnChartConfig",
            "Table": "CurrenciesTableChartConfig",
            "DataTable": "CurrenciesDataTableConfig",
            "Disclaimer": "CURRENCIES_HERO"
        },
		"PORTFOLIO":  {
            "Scatter": "PortfoliosScatterChartConfig",
            "Column": "PortfoliosColumnChartConfig",
            "Table": "CoreOverviewTableChartConfig",
            "PortfoliosTable": "CoreOverviewPortfoliosTableChartConfig",
            "DataTable": "PortfoliosDataTableConfig",
            "Disclaimer": "PORTFOLIO_HERO"
        },
        "RISK": {
            "Disclaimer": "RISK_HERO"
        }
    };

    // Hero container configuration
    AAGlobal.HERO_CONFIG = {
        "CORE_OVERVIEW": {
            "ChartType": ["Scatter", "Column", "Table"],
            "DefaultColumnType": "DRILLDOWN",
            "DisplayExportButtons": ["GENEREATE-IMAGE", "EXPORTDATA", "SHARE-TOOL"],
            "CategoryField": "HubPortfolioName",
            "CSVFileName": "core_asset_class_expected_returns"
        },
        "EQUITIES": {
            "ChartType": ["Scatter", "Column", "Table"],
            "DefaultColumnType": "DRILLDOWN",
            "DisplayExportButtons": ["GENEREATE-IMAGE", "EXPORTDATA", "SHARE-TOOL"],
            "CategoryField": "MarketCategory",
            "CSVFileName": "equity_market_expected_returns"
        },
        "FIXED_INCOME": {
            "ChartType": ["Scatter", "Column", "Table"],
            "DefaultColumnType": "SIMPLE",
            "DisplayExportButtons": ["GENEREATE-IMAGE", "EXPORTDATA", "SHARE-TOOL"],
            "CategoryField": "MarketCategory",
            "CSVFileName": "fixed_income_expected_returns"
        },
        "CURRENCIES": {
            "ChartType": ["Scatter", "Column", "Table"],
            "DefaultColumnType": "SIMPLE",
            "DisplayExportButtons": ["GENEREATE-IMAGE", "EXPORTDATA", "SHARE-TOOL"],
            "CategoryField": "MarketCategory",
            "CSVFileName": "global_real_tbill_returns"
        },
        "COMMODITIES": {
            "ChartType": ["Scatter", "Column", "Table"],
            "DefaultColumnType": "SIMPLE",
            "DisplayExportButtons": ["EXPORTDATA", "GENEREATE-IMAGE", "SHARE-TOOL"],
            "CategoryField": "GroupName",
            "CSVFileName": "commodities_expected_returns"
        },
		"PORTFOLIO": {
            "ChartType": ["Scatter", "Column", "Table"],
            "DefaultColumnType": "DRILLDOWN",
            "DisplayExportButtons": ["GENEREATE-IMAGE", "EXPORTDATA", "SHARE-TOOL"],
            "CategoryField": "GroupName",
            "CSVFileName": "portfolios_expected_returns",
            "PortfoliosCSVFileName": "portfolios_weights"
        }
    };

    // Disclaimer for all the web part containers in AAM
    //var asofDate = '12/31/2014';
    var asofYear = new Date().getFullYear();
    AAGlobal.DISCLAIMER_CONFIG = {
        "CORE_OVERVIEW_HERO": {
            "Credits": 'As of {DATA-DATE}. Source: These expected returns are calculated by Research Affiliates LLC using data provided by MSCI Inc., Bloomberg, and Barclays.<br/>Volatility is measured as standard deviation. These forecasts are forward-looking statements based upon the reasonable beliefs of RA and are not a guarantee of future performance. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/Pages/Legal.aspx</a>. In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC. All rights reserved. '
        },
        "PORTFOLIO_HERO": {
            "Credits": 'As of {DATA-DATE}. Source: These expected returns are calculated by Research Affiliates LLC using data provided by MSCI Inc., Bloomberg, and Barclays.<br/>Volatility is measured as standard deviation. These forecasts are forward-looking statements based upon the reasonable beliefs of RA and are not a guarantee of future performance. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/Pages/Legal.aspx</a>. In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC. All rights reserved. '
        },
        "CORE_OVERVIEW_TABLE": {
            "Credits": '<p>As of {DATA-DATE}. Source: These expected returns are calculated by Research Affiliates LLC using data provided by MSCI Inc., Bloomberg, and Barclays.<br/>Volatility is measured as standard deviation. These forecasts are forward-looking statements based upon the reasonable beliefs of RA and are not a guarantee of future performance. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/Pages/Legal.aspx</a>. In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC. All rights reserved. </p>'
        },
        "PORTFOLIO_TABLE": {
            "Credits": '<p>As of {DATA-DATE}. Source: These expected returns are calculated by Research Affiliates LLC using data provided by MSCI Inc., Bloomberg, and Barclays.<br/>Volatility is measured as standard deviation. These forecasts are forward-looking statements based upon the reasonable beliefs of RA and are not a guarantee of future performance. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/Pages/Legal.aspx</a>. In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC. All rights reserved. </p>'
        },
        "EQUITIES_HERO": {
            "Credits": 'As of {DATA-DATE}. Source: These expected returns are calculated by Research Affiliates LLC using data provided by MSCI Inc. and Bloomberg.<br/>Volatility is measured as standard deviation. These forecasts are forward-looking statements based upon the reasonable beliefs of RA and are not a guarantee of future performance. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/Pages/Legal.aspx</a>.In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC. All rights reserved. '
        },
        "EQUITIES_BOX": {
            "Credits": '<p>As of {DATA-DATE}. These expected returns are calculated by Research Affiliates LLC using data provided by MSCI Inc. and Bloomberg.<br/>Data series have different start dates as indicated in each card above. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/Pages/Legal.aspx</a>.  In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC. All rights reserved. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument.</p>'
        },
        "EQUITIES_TABLE": {
            "Credits": '<p>As of {DATA-DATE}. Source: These expected returns are calculated by Research Affiliates LLC using data provided by MSCI Inc., Bloomberg, and Barclays.<br/>Volatility is measured as standard deviation. These forecasts are forward-looking statements based upon the reasonable beliefs of RA and are not a guarantee of future performance. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/Pages/Legal.aspx</a>. In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC. All rights reserved. </p>'
        },
        "FIXED_INCOME_HERO": {
            "Credits": 'As of {DATA-DATE}. Source: These expected returns are calculated by Research Affiliates LLC using data provided by MSCI Inc., Bloomberg, and Barclays.<br/>Volatility is measured as standard deviation. These forecasts are forward-looking statements based upon the reasonable beliefs of RA and are not a guarantee of future performance. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/Pages/Legal.aspx</a>.  In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC. All rights reserved. '
        },
        "FIXED_INCOME_TABLE": {
            "Credits": '<p>As of {DATA-DATE}. Source: These expected returns are calculated by Research Affiliates LLC using data provided by MSCI Inc., Bloomberg, and Barclays.<br/>Volatility is measured as standard deviation. These forecasts are forward-looking statements based upon the reasonable beliefs of RA and are not a guarantee of future performance. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/Pages/Legal.aspx</a>. In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC. All rights reserved. </p>'
        },
        "FIXED_INCOME_COMPARISON": {
            "Credits": '<p>As of {DATA-DATE}. Source: These expected returns are calculated by Research Affiliates LLC using data provided by Bloomberg.<br/>Real yield curves are estimated based on average historical 3 year inflation by country. Yield tenors not empirically available are interpolated from adjacent tenors. Historical curves are based on 10 year averages. Forecasted curves are based on future 10 year averages. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/pages/legal.aspx</a>.  In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC. All rights reserved. </p>'
        },
        "CURRENCIES_HERO": {
            "Credits": 'As of {DATA-DATE}. Source: These expected returns are calculated by Research Affiliates LLC using data provided by MSCI Inc., Bloomberg, and Barclays.<br/>Volatility is measured as standard deviation. These forecasts are forward-looking statements based upon the reasonable beliefs of RA and are not a guarantee of future performance. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/Pages/Legal.aspx</a>.  In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC. All rights reserved. '
        },
        "CURRENCIES_TABLE": {
            "Credits": '<p>As of {DATA-DATE}. Source: These expected returns are calculated by Research Affiliates LLC using data provided by MSCI Inc., Bloomberg, and Barclays.<br/>Volatility is measured as standard deviation. These forecasts are forward-looking statements based upon the reasonable beliefs of RA and are not a guarantee of future performance. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/Pages/Legal.aspx</a>. In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC. All rights reserved. </p>'
        },
        "CURRENCIES_COMPARISON": {
            "Credits": '<p>As of {DATA-DATE}. Source: These expected returns are calculated by Research Affiliates LLC using data provided by Bloomberg.<br/>All exchange rates are vs USD. Exchange rate data is real, adjusted for inflation in both countries. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/Pages/Legal.aspx</a>.  In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC.All rights reserved. '
        },
        "COMMODITIES_HERO": {
            "Credits": 'As of {DATA-DATE}. Source: These expected returns are calculated by Research Affiliates LLC using data provided by Bloomberg.<br/>Volatility is measured as standard deviation. These forecasts are forward-looking statements based upon the reasonable beliefs of RA and are not a guarantee of future performance. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/Pages/Legal.aspx</a>.  In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC. All rights reserved. '
        },
        "COMMODITIES_COMPARISON": {
            "Credits": '<p>As of {DATA-DATE}. Source: These expected returns are calculated by Research Affiliates LLC using data provided by Bloomberg.<br/>All returns are rolling over a 10 year period. Individual commodity returns are collateralized by 3 month T bills. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/Pages/Legal.aspx</a>.  In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC. All rights reserved. </p>'
        },
        "COMMODITIES_TABLE": {
            "Credits": '<p>As of {DATA-DATE}. Source: These expected returns are calculated by Research Affiliates LLC using data provided by MSCI Inc., Bloomberg, and Barclays.<br/>Volatility is measured as standard deviation. These forecasts are forward-looking statements based upon the reasonable beliefs of RA and are not a guarantee of future performance. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/Pages/Legal.aspx</a>. In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC. All rights reserved. </p>'
        },
        "RISK_HERO": {
            "Credits": 'As of {DATA-DATE}. Source: These expected returns are calculated by Research Affiliates LLC using data provided by MSCI Inc., Bloomberg, and Barclays.<br/>Correlations and volatilities calculated using previous 10 year data, exponentially weighted. Volatility is measured as standard deviation. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/Pages/Legal.aspx</a>.  In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC. All rights reserved. '
        },
        "RISK_VOL": {
            "Credits": '<p>As of {DATA-DATE}. Source: These expected returns are calculated by Research Affiliates LLC using data provided by MSCI Inc., Bloomberg, and Barclays.<br/>Volatility is measured as 10 year rolling standard deviation. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/Pages/Legal.aspx</a>.  In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC. All rights reserved. </p>'
        },
        "PORTFOLIO_COMPARISON": {
            "Credits": '<p>As of {DATA-DATE}. Source: These expected returns are calculated by Research Affiliates LLC using data provided by MSCI Inc., Bloomberg, and Barclays.<br/>Volatility is measured as 10 year rolling standard deviation. This content is not investment or tax advice or an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument. Any use of the above content is subject to and conditioned upon the user\'s agreement with all important disclosures, disclaimers and provisions found at <a style="text-decoration:underline !important;color:#2E2E8A;font-size:9px !important;" href="http://www.researchaffiliates.com/Pages/Legal.aspx">www.researchaffiliates.com/Pages/Legal.aspx</a>.  In the event the above content is provided or modified by a third-party, Research Affiliates LLC fully disclaims any responsibility or liability for such content. ©{CURRENT-YEAR} Research Affiliates, LLC. All rights reserved. </p>'
        },
        "PORTFOLIO_MODEL": {
            "Credits": 'IMPORTANT: The projections or other information generated using this portfolio building tool (“Tool”), regarding the likelihood of various investment outcomes are hypothetical in nature, do not reflect actual investment results, and are not guarantees of future results. Results may vary with each use and over time.  Calculators and tools on this website are provided for educational purposes only, are not individualized, and are not intended to serve as investment or tax-planning advice or the basis of anyone’s decisions.  This content is not an offer, sale or any solicitation of any offer to buy any security, derivative or any other financial instrument.  Investors must make their own determination whether an investment in any particular security, derivative, commodity or other investment vehicle or asset class is consistent with investment objectives, risk tolerances, financial situations and other relevant factors. Research Affiliates does not endorse or adopt any particular investment strategy, asset class, product or approach to screening or evaluating investments and it does not provide any warranties regarding results obtained from use of the Tool.  The use of this Tool is only permitted by those who understand the risks of its use and who fully release Research Affiliates from any liabilities which may result from the use of this material or Tool.  Such use is evidence of the user’s  release of Research Affiliates. Any use of the Tool or related content is subject to and conditioned upon the user’s agreement with all important disclosures, disclaimers, and provisions found at <a href="/Pages/Legal.aspx" target="_blank">www.researchaffiliates.com/Pages/Legal.aspx</a>.  If this content is provided or modified by a third-party, Research Affiliates fully disclaims any responsibility or liability for such content.'
        }

    };

    // Export to CSV Column and its values for Comparison chart and Data table web part containers in AAM
    AAGlobal.EXPORT_TO_CSV = {
        "CommoditiesRollingReturnComparision": {
            "Date": function(record) {
                return ((record.DataDate) ? $.datepicker.formatDate('mm/yy', $.datepicker.parseDate('yy-mm-dd', record.DataDate.split('T')[0])) : "-")
            },
            "Commodity": function(record) {
                return record.DisplayName
            },
            "10-YR Rolling Return %": function(record) {
                return record.DataValue
            }

        },
          "PortfolioComparison": {
            
            "Name": function(record) {
                return record.ShortDisplayName

            },
            "Description": function(record) {
                return record.Description
            },

            "As on Date": function(record) {
                return ((record.AsOnDate) ? $.datepicker.formatDate('mm/yy', $.datepicker.parseDate('yy-mm-dd', record.AsOnDate.split('T')[0])) : "-")
            },
             
             "Volatility %": function(record) {
                return ((record.Volatility) ? record.Volatility : "-")
            },
			
  "Expected Return %": function(record) {
                return ((record.ExpectedReturn) ? record.ExpectedReturn : "-")
            },

  "Yield %": function(record) {
                return ((record.Yield) ? record.Yield : "-")
            },

  "Growth %": function(record) {
                return ((record.Growth) ? record.Growth : "-")
            },

  "Collateral Return %": function(record) {
                return ((record.CollateralReturn) ? record.CollateralReturn : "-")
            },
  "Credit Loss %": function(record) {
                return ((record.CreditLoss) ? record.CreditLoss : "-")
            },
"RollReturn %": function(record) {
                return ((record.RollReturn) ? record.RollReturn : "-")
            },		
"Rebalance Return %": function(record) {
                return ((record.RebalanceReturn) ? record.RebalanceReturn : "-")
            },		
"Valuation Change %": function(record) {
                return ((record.ValuationChange) ? record.ValuationChange : "-")
            },	
"FxReturn %": function(record) {
                return ((record.FxReturn) ? record.FxReturn : "-")
            },

"ConfidenceInterval -95%": function(record) {
                return ((record.ConfidenceIntervalNegative2) ? record.ConfidenceIntervalNegative2 : "-")
            },
"ConfidenceInterval -67%": function(record) {
                return ((record.ConfidenceIntervalNegative1) ? record.ConfidenceIntervalNegative1 : "-")
            },
"ConfidenceInterval 67%": function(record) {
                return ((record.ConfidenceIntervalPositive1) ? record.ConfidenceIntervalPositive1 : "-")
            },
"ConfidenceInterval 95%": function(record) {
                return ((record.ConfidenceIntervalPositive2) ? record.ConfidenceIntervalPositive2 : "-")
            }

        },
        "CommoditiesRealPriceComparision": {
            "Date": function(record) {
                return ((record.DataDate) ? $.datepicker.formatDate('mm/yy', $.datepicker.parseDate('yy-mm-dd', record.DataDate.split('T')[0])) : "-")
            },
            "Commodity": function(record) {
                return record.DisplayName
            },
            "Historical Real Price": function(record) {
                return record.DataValue
            }

        },
        "CommoditiesDataTable": {
               "As of Date": function(record) {
                return ((record.AsOnDate) ?  $.datepicker.formatDate('mm/dd/yy', $.datepicker.parseDate('yy-mm-dd', record.AsOnDate.split('T')[0])) : "-")
            },
            "Group Name": function(record) {
                return ((record.GroupName) ? record.GroupName : "-")
            },
            "Commodity Name": function(record) {
                return ((record.DisplayName) ? record.DisplayName : "-")
            },
            /*"Yield %": function(record) {
                return ((record.Yield) ? record.Yield : "-")
            },*/
             "YTD %": function(record) {
                return ((record.AnnualizedNominalReturnYTD) ? record.AnnualizedNominalReturnYTD : "-")
            },
            "1-Year %": function(record) {
                return ((record.AnnualizedNominalReturn1Y) ? record.AnnualizedNominalReturn1Y : "-")
            },
            "3-Year(annualized) %": function(record) {
                return ((record.AnnualizedNominalReturn3Y) ? record.AnnualizedNominalReturn3Y : "-")
            },
            "5-Year(annualized) %": function(record) {
                return ((record.AnnualizedNominalReturn5Y) ? record.AnnualizedNominalReturn5Y : "-")
            },
            "10-Year(annualized) %": function(record) {
                return ((record.AnnualizedNominalReturn10Y) ? record.AnnualizedNominalReturn10Y : "-")
            },
            "10-Year Expected Return(annualized) %": function(record) {
                return ((record.ExpectedReturn) ? record.ExpectedReturn : "-")
            },
            "Growth of 10K": function(record) {
                return ((record.Growth10K) ? record.Growth10K : "-")
            }
        },
        "EquitiesBBCard": {
            "As of Date": function(record) {
                return ((record.AsOnDate) ? $.datepicker.formatDate('mm/yy', $.datepicker.parseDate('yy-mm-dd', record.AsOnDate.split('T')[0])) : "-")
            },
            "Market": function(record) {
                return record.MarketName
            },
            "Expected Return %": function(record) {
                return ((record.ExpectedReturn) ? record.ExpectedReturn : "-")
            },
            "Volatility %": function(record) {
                return ((record.Volatility) ? record.Volatility : "-")
            },
            "Current Shiller PE": function(record) {
                return record.ShillerPE
            },
            "Max Shiller PE": function(record) {
                return record.MaxValue
            },
            "Median Shiller PE": function(record) {
                return record.MedianValue
            },
            "Min Shiller PE": function(record) {
                return record.MinValue
            },
            "25th Percentile Shiller PE": function(record) {
                return record.Percentile25Th
            },
            "75th Percentile Shiller PE": function(record) {
                return record.Percentile75Th
            },
            "EPS Inception Date": function(record) {
                return record.InceptionDate
            }
        },
        "CompleteShillerData": {
            "As of Date": function(record) {
                return ((record.AsOnDate) ? $.datepicker.formatDate('mm/yy', $.datepicker.parseDate('yy-mm-dd', record.AsOnDate.split('T')[0])) : "-")
            },
            "Market": function(record) {
                return record.MarketName
            },
            "Current Shiller PE": function(record) {
                return record.ShillerPE
            },
            "Max Shiller PE": function(record) {
                return record.MaxValue
            },
            "Median Shiller PE": function(record) {
                return record.MedianValue
            },
            "Min Shiller PE": function(record) {
                return record.MinValue
            },
            "25th Percentile Shiller PE": function(record) {
                return record.Percentile25Th
            },
            "75th Percentile Shiller PE": function(record) {
                return record.Percentile75Th
            },
            "EPS Inception Date": function(record) {
                return record.InceptionDate
            }
        },
        "FixedIncomeCompareCountries": {
            "Date": function(record) {
                return ((record.DataDate) ? $.datepicker.formatDate('mm/yy', $.datepicker.parseDate('yy-mm-dd', record.DataDate.split('T')[0])) : "-")
            },
            "Market Name": function(record) {
                return record.CountryName
            },
            "Yield": function(record) {
                return record.DataValue
            },
            "Tenor": function(record) {
                return record.Tenor
            },
            "Time Horizon": function(record) {
                return record.YieldCurveDataType
            },
            "Yield Curve Type": function(record) {
                return record.YieldCurveType
            }
        },
        "FixedIncomeDataTable": {
            "As of Date": function(record) {
                return ((record.AsOnDate) ?  $.datepicker.formatDate('mm/dd/yy', $.datepicker.parseDate('yy-mm-dd', record.AsOnDate.split('T')[0])) : "-")
            },
            "Market Category": function(record) {
                return ((record.MarketCategory) ? record.MarketCategory : "-")
            },
            "Index Name": function(record) {
                return ((record.DisplayName) ? record.DisplayName : "-")
            },
            /*"Yield %": function(record) {
                return ((record.Yield) ? record.Yield : "-")
            },*/
             "YTD %": function(record) {
                return ((record.AnnualizedNominalReturnYTD) ? record.AnnualizedNominalReturnYTD : "-")
            },
            "1-Year %": function(record) {
                return ((record.AnnualizedNominalReturn1Y) ? record.AnnualizedNominalReturn1Y : "-")
            },
            "3-Year(annualized) %": function(record) {
                return ((record.AnnualizedNominalReturn3Y) ? record.AnnualizedNominalReturn3Y : "-")
            },
            "5-Year(annualized) %": function(record) {
                return ((record.AnnualizedNominalReturn5Y) ? record.AnnualizedNominalReturn5Y : "-")
            },
            "10-Year(annualized) %": function(record) {
                return ((record.AnnualizedNominalReturn10Y) ? record.AnnualizedNominalReturn10Y : "-")
            },
            "10-Year Expected Return(annualized) %": function(record) {
                return ((record.ExpectedReturn) ? record.ExpectedReturn : "-")
            },
            "Growth of 10K": function(record) {
                return ((record.Growth10K) ? record.Growth10K : "-")
            }
        },
        "CurrenciesComparisionCountries": {
            "Date": function(record) {
                return ((record.DataDate) ? $.datepicker.formatDate('mm/yy', $.datepicker.parseDate('yy-mm-dd', record.DataDate.split('T')[0])) : "-")
            },
            "Market": function(record) {
                return record.DiplayName
            },
            "Currency Code": function(record) {
                return record.CurrencyCode
            },
            "10-YR Rolling Return %": function(record) {
                return record.DataValue
            }

        },
        "CurrenciesDataTable": {
               "As of Date": function(record) {
                return ((record.AsOnDate) ?  $.datepicker.formatDate('mm/dd/yy', $.datepicker.parseDate('yy-mm-dd', record.AsOnDate.split('T')[0])) : "-")
            },
            "Market Category": function(record) {
                return ((record.MarketCategory) ? record.MarketCategory : "-")
            },
            "Country Name": function(record) {
                return ((record.ShortDisplayName) ? record.ShortDisplayName : "-")
            },
            /*"Yield %": function(record) {
                return ((record.Yield) ? record.Yield : "-")
            },*/
             "YTD %": function(record) {
                return ((record.AnnualizedNominalReturnYTD) ? record.AnnualizedNominalReturnYTD : "-")
            },
            "1-Year %": function(record) {
                return ((record.AnnualizedNominalReturn1Y) ? record.AnnualizedNominalReturn1Y : "-")
            },
            "3-Year(annualized) %": function(record) {
                return ((record.AnnualizedNominalReturn3Y) ? record.AnnualizedNominalReturn3Y : "-")
            },
            "5-Year(annualized) %": function(record) {
                return ((record.AnnualizedNominalReturn5Y) ? record.AnnualizedNominalReturn5Y : "-")
            },
            "10-Year(annualized) %": function(record) {
                return ((record.AnnualizedNominalReturn10Y) ? record.AnnualizedNominalReturn10Y : "-")
            },
            "10-Year Expected Return(annualized) %": function(record) {
                return ((record.ExpectedReturn) ? record.ExpectedReturn : "-")
            },
            "Growth of 10K": function(record) {
                return ((record.Growth10K) ? record.Growth10K : "-")
            }
        },
        "RiskVolatilityComparison": {
            "As of Date": function(record) {
                return ((record.DataDate) ? $.datepicker.formatDate('mm/yy', $.datepicker.parseDate('yy-mm-dd', record.DataDate.split('T')[0])) : "-")
            },
            "Market": function(record) {
                return (record.DisplayName.toLowerCase() == "bloomberg commodity" ? "Commodities" : record.DisplayName);
            },
            "Volatility %": function(record) {
                return record.DataValue
            }

        }, 
		"EquitiesDataTable": {
            "As of Date": function(record) {
                return ((record.AsOnDate) ?  $.datepicker.formatDate('mm/dd/yy', $.datepicker.parseDate('yy-mm-dd', record.AsOnDate.split('T')[0])) : "-")
            },
            "Market Category": function(record) {
                return ((record.MarketCategory) ? record.MarketCategory : "-")
            },
            "Index Name": function(record) {
                return ((record.DisplayName) ? record.DisplayName : "-")
            },
            /*"Yield %": function(record) {
                return ((record.Yield) ? record.Yield : "-")
            },*/
             "YTD %": function(record) {
                return ((record.AnnualizedNominalReturnYTD) ? record.AnnualizedNominalReturnYTD : "-")
            },
            "1-Year %": function(record) {
                return ((record.AnnualizedNominalReturn1Y) ? record.AnnualizedNominalReturn1Y : "-")
            },
            "3-Year(annualized) %": function(record) {
                return ((record.AnnualizedNominalReturn3Y) ? record.AnnualizedNominalReturn3Y : "-")
            },
            "5-Year(annualized) %": function(record) {
                return ((record.AnnualizedNominalReturn5Y) ? record.AnnualizedNominalReturn5Y : "-")
            },
            "10-Year(annualized) %": function(record) {
                return ((record.AnnualizedNominalReturn10Y) ? record.AnnualizedNominalReturn10Y : "-")
            },
            "10-Year Expected Return(annualized) %": function(record) {
                return ((record.ExpectedReturn) ? record.ExpectedReturn : "-")
            },
            "Growth of 10K": function(record) {
                return ((record.Growth10K) ? record.Growth10K : "-")
            }
        },
        "PortfolioDataTable": {
            "As of Date": function(record) {
                return ((record.AsOnDate) ?  $.datepicker.formatDate('mm/dd/yy', $.datepicker.parseDate('yy-mm-dd', record.AsOnDate.split('T')[0])) : "-")
            },
            "Portfolio Type": function(record) {
                return ((record.GroupName) ? record.GroupName : "-")
            },
            "Portfolio Name": function(record) {
                return ((record.DisplayName) ? record.DisplayName : "-")
            },
            /*"Yield %": function(record) {
                return ((record.Yield) ? record.Yield : "-")
            },*/
             "YTD %": function(record) {
                return ((record.AnnualizedNominalReturnYTD) ? record.AnnualizedNominalReturnYTD : "-")
            }, 
            
            "1-Year %": function(record) {
                return ((record.AnnualizedNominalReturn1Y) ? record.AnnualizedNominalReturn1Y : "-")
            },
            "3-Year(annualized) %": function(record) {
                return ((record.AnnualizedNominalReturn3Y) ? record.AnnualizedNominalReturn3Y : "-")
            },
            "5-Year(annualized) %": function(record) {
                return ((record.AnnualizedNominalReturn5Y) ? record.AnnualizedNominalReturn5Y : "-")
            },
            "10-Year(annualized) %": function(record) {
                return ((record.AnnualizedNominalReturn10Y) ? record.AnnualizedNominalReturn10Y : "-")
            },
            "10-Year Expected Return(annualized) %": function(record) {
                return ((record.ExpectedReturn) ? record.ExpectedReturn : "-")
            },
            "Growth of 10K": function(record) {
                return ((record.Growth10K) ? record.Growth10K : "-")
            }
        }
        , "CoreOverviewDataTable": {
            "As of Date": function(record) {
                return ((record.AsOnDate) ?  $.datepicker.formatDate('mm/dd/yy', $.datepicker.parseDate('yy-mm-dd', record.AsOnDate.split('T')[0])) : "-")
            },
            "Market Category": function(record) {
                return ((record.MarketCategory) ? record.MarketCategory : "-")
            },
            "Index Name": function(record) {
                return ((record.DisplayName) ? record.DisplayName : "-")
            },
            /*"Yield %": function(record) {
                return ((record.Yield) ? record.Yield : "-")
            },*/
             "YTD %": function(record) {
                return ((record.AnnualizedNominalReturnYTD) ? record.AnnualizedNominalReturnYTD : "-")
            },
            "1-Year %": function(record) {
                return ((record.AnnualizedNominalReturn1Y) ? record.AnnualizedNominalReturn1Y : "-")
            },
            "3-Year(annualized) %": function(record) {
                return ((record.AnnualizedNominalReturn3Y) ? record.AnnualizedNominalReturn3Y : "-")
            },
            "5-Year(annualized) %": function(record) {
                return ((record.AnnualizedNominalReturn5Y) ? record.AnnualizedNominalReturn5Y : "-")
            },
            "10-Year(annualized) %": function(record) {
                return ((record.AnnualizedNominalReturn10Y) ? record.AnnualizedNominalReturn10Y : "-")
            },
            "10-Year Expected Return(annualized) %": function(record) {
                return ((record.ExpectedReturn) ? record.ExpectedReturn : "-")
            },
            "Growth of 10K": function(record) {
                return ((record.Growth10K) ? record.Growth10K : "-")
            }
        }
    };

    //Risk Volatility Default selection
    AAGlobal.DefaultSelectionForCompare = {
        "RiskVolatilityComparison": {
            "0": "SPXT Index",
            "1": "LT01TRUU Index",
            "2": "JPPUELM Index"
        }
    };
    // Positive vertical column Gradient
    AAGlobal.VerticalGradient = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1
    };
    // Negative vertical column Gradient
    AAGlobal.NegativeVerticalGradient = {
        x1: 0,
        y1: 1,
        x2: 0,
        y2: 0
    };

    AAGlobal.ComparisonToolTipYieldCurveFormatter = function(categories, points) {
        if (!points) {
            return false;
        }

        var tenor = points[0].key;
        var dataCategory = ""

        if ($("input:checked").length != 1) {
            dataCategory = '&nbsp;' + points[0].point["YieldCurveDataType"] + '&nbsp;';
        } else {
            dataCategory = '&nbsp;' + points[0].point["CountryName"] + '&nbsp;';
        }

        var html = '<div class="charts-tooltip comparision-tooltip custom"><div class="comparision-tooltip-item first"><b class="tenor-text">Tenor:&nbsp;' + tenor + '</b><b>' + dataCategory + '</b></div>';

        $.Enumerable.From(categories).ForEach(function(record) {
            record.DisplayName = $('input[name="' + record.Name + '"]').attr('value');
        });
        var displayNameValues = $.Enumerable.From(categories).OrderBy('$.DisplayName').ToArray();
        for (var i = 0; i < displayNameValues.length; i++) {
            var recordName = ""
            var categoryName = displayNameValues[i].Name;
            var pointObject = $.Enumerable.From(points).FirstOrDefault({}, function(record) {
                var comparer = "CountryName";
                recordName = "YieldCurveDataType";
                if ($("#yieldCurveCountry input:checked").length == 1) {
                    comparer = "YieldCurveDataType";
                    recordName = "CountryName";
                }
                return record.point[comparer] == categoryName;
            });

            html += '<div class="comparision-tooltip-item">';
            html += '<div class="comparision-color" style="background-color:' + displayNameValues[i].Color + '"></div>';
                  if (recordName == "CountryName")
                html += categoryName + '&nbsp;:<div class="comparision-tooltip-item-value">' + (pointObject.point ? (pointObject.point["DataValue"].toAbsFixed(1) + '%') : '-') + '</div></div>';
            else
                html += categoryName + ':<div class="comparision-tooltip-item-value">' + (pointObject.point ? (pointObject.point["DataValue"].toAbsFixed(1) + '%') : '-') + '</div></div>';
        }

        html += '</div>';

        $('.temp-tooltip-container').remove();
        $('body').append('<div class="temp-tooltip-container"></div>');
        $('.temp-tooltip-container').html(html);
        var chartsTooltip = $('.temp-tooltip-container .charts-tooltip');
        var width = $(chartsTooltip).width();
        var childrenWidth = 0;
        $.each($(chartsTooltip).children(), function() {
            childrenWidth += this.offsetWidth;
        });
        if (childrenWidth > width) {
            $(chartsTooltip).addClass('no-padding-left-right');
            $('.temp-tooltip-container .charts-tooltip .comparision-tooltip-item').addClass('no-padding-left-right');
        }
        $('.temp-tooltip-container').hide();
        return $('.temp-tooltip-container').html();
    }

    // Tooltip Formatter for Comparison Charts (Risk Volatility, Currencies and commodities comparison)
    AAGlobal.ComparisionTooltipFormatter = function(categories, xValue, yField, compareField, points, suffixUnit,base) {

        var d = new Date();
        var month = new Array(12);
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sep";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";

        formattedDate = 'Forecast';

        if (xValue.getUTCMonth) {
            formattedDate = month[xValue.getUTCMonth()] + " " + xValue.getUTCFullYear();;
        }

        var html = '<div class="charts-tooltip comparision-tooltip custom"><div class="comparision-tooltip-item first"><b>' + formattedDate + ':</b></div>';
        if (!points) {
            return false;
        }

        $.Enumerable.From(categories).ForEach(function(record) {
            record.DisplayName = $('input[name="' + record.Name + '"]').attr('value');
        });
        var displayNameValues = $.Enumerable.From(categories).OrderBy('$.DisplayName').ToArray();
        for (var i = 0; i < displayNameValues.length; i++) {

            var countryName = displayNameValues[i].DisplayName;
            var pointObject = $.Enumerable.From(points).FirstOrDefault({}, function(record) {
                return $('input[name="' + record.point[compareField] + '"]').attr('value') == countryName;
            });
            html += '<div class="comparision-tooltip-item">';

            html += '<div class="comparision-color" style="background-color:' + displayNameValues[i].Color + '"></div>';
			var pointValue;
			if(base)
				pointValue = (pointObject.point) ? Math.pow(base,pointObject.point[yField]):null;
			else
				pointValue = (pointObject.point) ? pointObject.point[yField]:null;
            if (suffixUnit == null){
				
                html += countryName + ':<div class="comparision-tooltip-item-value">' + (pointObject.point ? (pointValue.toAbsFixed(1) + '%') : '-') + '</div></div>';
            }
			else {
                html += countryName + ':<div class="comparision-tooltip-item-value">' + (pointObject.point ? (pointValue.toAbsFixed(1) + suffixUnit) : '-') + '</div></div>';
			}
		}
        html += '</div>';
        $('.temp-tooltip-container').remove();
        $('body').append('<div class="temp-tooltip-container"></div>');
        $('.temp-tooltip-container').html(html);
        var chartsTooltip = $('.temp-tooltip-container .charts-tooltip');
        var width = $(chartsTooltip).width();
        var childrenWidth = 0;
        $.each($(chartsTooltip).children(), function() {
            childrenWidth += this.offsetWidth;
        });
        if (childrenWidth > width) {
            $(chartsTooltip).addClass('no-padding-left-right');
            $('.temp-tooltip-container .charts-tooltip .comparision-tooltip-item').addClass('no-padding-left-right');
        }
        $('.temp-tooltip-container').hide();
        return $('.temp-tooltip-container').html();
    };

    // To check whether the label is rendered on another label or not
    AAGlobal.isLabelOnLabel = function(a, b) {
        var al = a.x - (a.width);
        var ar = a.x;
        var bl = b.x - (b.width);
        var br = b.x;

        var at = a.y;
        var ab = a.y + a.height;
        var bt = b.y;
        var bb = b.y + b.height;
        var aText = $(a.element).text();
        var bText = $(b.element).text();


        if ((bl > ar || br < al) || (bt > ab || bb < at)) {

            return false;
        } //overlap not possible
        if (((bl >= al || bl <= ar) && (br >= al || br <= ar)) && ((bt >= at || bt <= ab) && (bb >= at || bb <= ab))) {
            return true;
        }


        return false;
    };

    // To stagger the data labels in scatter chart i.e. colliding with one another
    AAGlobal.StaggerDataLabels = function(series) {
        var sc = series.length;
        if (sc < 2)
            return;

        for (var sm = 0; sm < sc; sm++) {
            var s1 = series[sm].points,
                l1 = s1.length;
            for (var i = 0; i < l1; i++) {
                if (!s1[i].dataLabel || isNaN(s1[i].dataLabel.x))
                    continue;
                var overlapWidth = (s1[i].dataLabel.x + s1[i].dataLabel.width) - (series[sm].chart.plotWidth);
                if(overlapWidth > 0 )
                {
                    s1[i].dataLabel.translate(s1[i].dataLabel.translateX - overlapWidth, s1[i].dataLabel.translateY);   
                }
            }
        }

        for (var si = 2; si < sc; si++) {
            var s1 = series[si].points,
                l1 = s1.length;
            for (var i = 0; i < l1; i++) {
                if (!s1[i].dataLabel)
                    continue;

                /* if (s1[i].dataLabel.x < 0) {
                    s1[i].dataLabel.translate(s1[i].dataLabel.translateX + s1[i].dataLabel.width + 20, s1[i].dataLabel.translateY);
                } */

                for (var j = i + 1; j < l1; j++) {
                    if (!s1[j].dataLabel || i == j) {
                        continue;
                    }
                    var diff = s1[i].dataLabel.y - s1[j].dataLabel.y;
                    var isLabelOnLabel = AAGlobal.isLabelOnLabel(s1[i].dataLabel, s1[j].dataLabel);

                    if (isLabelOnLabel) {
                        if (diff > 0) {
                            s1[i].dataLabel.translate(s1[i].dataLabel.translateX, s1[i].dataLabel.translateY + (5));
                            //s1[i].dataLabel.y -= 5;
                        } else {
                            s1[i].dataLabel.translate(s1[i].dataLabel.translateX, s1[i].dataLabel.translateY - (5));
                            //s1[j].dataLabel.y -= 5;
                        }
                    }
                }
            }

            for (var sj = si + 1; sj < sc; sj++) {
                if (si == sj) {
                    continue;
                }
                var s2 = series[sj].points,
                    l2 = s2.length,
                    diff;

                for (var i = 0; i < l1; i++) {
                    if (!s1[i].dataLabel)
                        continue;
                    for (var j = 0; j < l2; j++) {
                        if (!s2[j].dataLabel) {
                            continue;
                        }
                        diff = s1[i].dataLabel.y - s2[j].dataLabel.y;
                        var height = Math.abs(diff) <= 2 ? 10 : 5;

                        var isLabelOnLabel = AAGlobal.isLabelOnLabel(s1[i].dataLabel, s2[j].dataLabel);

                        if (isLabelOnLabel) {
                            if (diff > 0) {
                                s1[i].dataLabel.translate(s1[i].dataLabel.translateX, s1[i].dataLabel.translateY + (height));
                                //s1[i].dataLabel.y -= 5;
                            } else {
                                s1[i].dataLabel.translate(s1[i].dataLabel.translateX, s1[i].dataLabel.translateY - (height));
                                //s2[j].dataLabel.y -=5;
                            }
                        }
                    }
                }


            }


        }
    };

    // To sum the two fields and return two decimal point value
    AAGlobal.SumFields = function(data, field1, field2) {
        var
        yield = Number(data[field1]);
        var collateralReturn = Number(data[field2]);

        if (!data[field1] && !data[field2]) {
            return '-';
        }

        var sum = (
            yield + collateralReturn);

        if (sum % 1 == 0)
            return sum

       return (sum).toAbsFixed(2);
    }

    // Create CSV data for hero container
    AAGlobal.SetExportCSVForHeroContainerPortfolios = function(data, configType) {
        var self = this;
        var exportData = [];
        var fields = new AAGlobal[AAGlobal.CONFIG[configType].PortfoliosTable]().Fields;
        $.each(data, function(index, val) {
            var dataObject = {};
            $.each(fields, function(fieldIndex, fieldValue) {
                dataObject[fieldIndex] = fieldValue(val);
            });
            exportData.push(dataObject);
        });

        AAGlobal.ExportCsvPortfoliosData = exportData;
    }

    AAGlobal.SetExportCSVForHeroContainer = function(data, configType) {
        var self = this;
        var exportData = [];
        var fields = new AAGlobal[AAGlobal.CONFIG[configType].Table]().Fields;
        $.each(data, function(index, val) {
            var dataObject = {};
            $.each(fields, function(fieldIndex, fieldValue) {
                dataObject[fieldIndex] = fieldValue(val);
            });
            exportData.push(dataObject);
        });

        AAGlobal.ExportCsvData = exportData;
    }

    // Create CSV data for Comparison container
    AAGlobal.SetExportCSVForCompareContainer = function(data, options) {
        var self = this;
        var exportData = [];
        var fields = options.Fields;
        $.each(data, function(index, val) {
            var dataObject = {};
            $.each(fields, function(fieldIndex, fieldValue) {
                dataObject[fieldIndex] = fieldValue(val);
            });
            exportData.push(dataObject);
        });

        AAGlobal.ExportCsvDataCompareContainer = exportData;
    }

    // Create CSV data for heatmap container
    AAGlobal.SetExportCSVForHeatMapContainer = function(data, configType, correlationType) {
        var self = this;
        var exportData = [];
        var config = new AAGlobal.RisksHeatMapChartConfig();
        var fields = config.Fields;
        var filteredData = $.Enumerable.From(data).Where('$.DataType=="' + correlationType + '"').ToArray();

        $.each(filteredData, function(index, val) {
            var dataObject = {};
            $.each(fields, function(fieldIndex, fieldValue) {
                dataObject[fieldIndex] = fieldValue(val);
            });
            exportData.push(dataObject);
            if (dataObject[config.ExportConfig.OrderField] != dataObject[config.ExportConfig.PivotField]) {
                var dataObject1 = jQuery.extend(true, {}, dataObject);
                dataObject1[config.ExportConfig.OrderField] = dataObject[config.ExportConfig.PivotField];
                dataObject1[config.ExportConfig.PivotField] = dataObject[config.ExportConfig.OrderField];
                exportData.push(dataObject1);
            }
        });

        var catrgories = $.Enumerable.From(filteredData).OrderBy('$.DisplayOrder').Select('$.PIShortDisplayName').Distinct().ToArray();
        var pivotExportData = [];

        for (var i = 0, il = catrgories.length; i < il; i++) {
            var secIndexes = $.Enumerable.From(exportData).Where('$["' + config.ExportConfig.OrderField + '"]=="' + catrgories[i] + '"').ToArray();
            var pivotObject = {};
            $.each(fields, function(fieldIndex, fieldValue) {
                if (fieldIndex != config.ExportConfig.PivotField && fieldIndex != config.ExportConfig.ValueField) {
                    pivotObject[fieldIndex] = secIndexes[0][fieldIndex];
                }
            });
            var secIndexesEnumerable = $.Enumerable.From(secIndexes);
            for (var j = 0, jl = catrgories.length; j < jl; j++) {
                var secIndex = secIndexesEnumerable.Where('$["' + config.ExportConfig.PivotField + '"]=="' + catrgories[j] + '"').FirstOrDefault();
                if(secIndex)
                    pivotObject[catrgories[j]] = secIndex[config.ExportConfig.ValueField];
            }
            pivotExportData.push(pivotObject);
        }
        AAGlobal.ExportHeatMapCsvData = pivotExportData;

    };

    // Return CSV data for All container
    AAGlobal.ExportCSVFilteredData = function(data, options) {
        var self = this;
        var exportData = [];
        var fields = options;
        $.each(data, function(index, val) {
            var dataObject = {};
            $.each(fields, function(fieldIndex, fieldValue) {
                dataObject[fieldIndex] = fieldValue(val);
            });
            exportData.push(dataObject);
        });

        //AAGlobal.ExportCSVData = exportData;
        return exportData;
    }

    //#endregion

    
    AAGlobal.CalculateCovariance = function(heroChartData, correlationData) {
        var heroChartDataEnumerable = $.Enumerable.From(heroChartData);
        $.each(correlationData, function(i,correlationObj){
            var index1Vol = heroChartDataEnumerable.FirstOrDefault(null, function (record) { return record.ReferenceCode ==  correlationObj.PIIndexCode });
            var index2Vol = heroChartDataEnumerable.FirstOrDefault(null, function (record) { return record.ReferenceCode ==  correlationObj.SIIndexCode });
            if(index1Vol && index2Vol)
				correlationObj.Covariance = correlationObj.Correlation * index1Vol.Volatility * index2Vol.Volatility/100;
			else
					{
					console.log(correlationObj.PIIndexCode + '- ' +correlationObj.SIIndexCode);
					}
        });
   }

   AAGlobal.CalculateArithmeticExpectedReturn = function(heroChartData) {
        var heroChartDataEnumerable = $.Enumerable.From(heroChartData);
        $.each(heroChartData, function(i,record){
            record.ArithmeticExpectedReturn = (record.ExpectedReturn/100.0 + (Math.pow(record.Volatility/100.0, 2)/2.0));
        });
   }
   
   AAGlobal.CalculateCustomPortfoliosData = function(customPortfolios){
        var customPortfoliosEnumerable = $.Enumerable.From(customPortfolios);
        var portfolios = customPortfoliosEnumerable.Distinct('$.BasketCode').ToArray();
        var customPortfoliosData = [];
        $.each(portfolios, function(index, customPortfolio) {
            var customPortfolio = customPortfoliosEnumerable.Where(function (record) { return record.BasketCode == customPortfolio.BasketCode}).ToArray();
            var heroChartDataObjNew = AAGlobal.CalculateCustomPortfolioData(customPortfolio);
            customPortfoliosData.push(heroChartDataObjNew);
        });
        AAGlobal.HeroChartData = AAGlobal.HeroChartData.concat(customPortfoliosData);
        AAGlobal.WeightsData = AAGlobal.WeightsData.concat(customPortfolios);
   }

   AAGlobal.CalculateCustomPortfolioData = function(customPortfolio) {
        var heroChartDataEnumerable = $.Enumerable.From(AAGlobal.AssetClassData);
        var correlationDataEnumerable = $.Enumerable.From(AAGlobal.CorrelationData);
        var heroChartDataObjNew =
        {
            AsOnDate: customPortfolio[0].ValidToDate,
			AreConstraintsDisabled: customPortfolio[0].AreConstraintsDisabled,
            ReferenceId: customPortfolio[0].BasketId,
            ReferenceType: "CUSTOM_BASKET",
			GroupName: "CUSTOM PORTFOLIO",
            ReferenceCode: customPortfolio[0].BasketCode,
            IsCoreDataPoint: true,
            IsHubPoint: true,
            DisplayName: customPortfolio[0].BasketDisplayName,
            ShortDisplayName: customPortfolio[0].BasketShortDisplayName,
            Description: customPortfolio[0].BasketDescription,
			IsCustomPortfolio: customPortfolio[0].IsCustomPortfolio,
            Variance : null,
            ArithmeticReturn : null,
            Yield : null,
            Growth : null,
            CollateralReturn : null,
            RollReturn : null,
            CreditLoss : null,
            RebalanceReturn : null,
            FxReturn : null,
            Volatility: null,
            ExpectedReturn: null,
            ValuationChange: null,
            StandardError: null,
            ConfidenceIntervalNegative2: null,
            ConfidenceIntervalNegative1: null,
            ConfidenceIntervalPositive1: null,
            ConfidenceIntervalPositive2: null
        }
        $.each(customPortfolio, function(i,customPortfolioWeight){
            customPortfolioWeight.CovarianceWeight = 0;
            $.each(customPortfolio, function(i,secCustomPortfolioWeight){
                var secIndex = correlationDataEnumerable.FirstOrDefault(null, function (record) { return record.PIIndexCode ==  customPortfolioWeight.IndexCode && record.SIIndexCode ==  secCustomPortfolioWeight.IndexCode});
               if(secIndex)
					customPortfolioWeight.CovarianceWeight += secIndex.Covariance * secCustomPortfolioWeight.Weight / 100;
            });
            heroChartDataObjNew.Variance += customPortfolioWeight.CovarianceWeight * customPortfolioWeight.Weight / 100;
                
            var index = heroChartDataEnumerable.FirstOrDefault(null, function (record) { return record.ReferenceCode ==  customPortfolioWeight.IndexCode});
            if(index)
			{
			heroChartDataObjNew.ArithmeticReturn += index.ArithmeticExpectedReturn * customPortfolioWeight.Weight / 100;
            heroChartDataObjNew.Yield += index.Yield * customPortfolioWeight.Weight / 100;
            heroChartDataObjNew.Growth += index.Growth * customPortfolioWeight.Weight / 100;
            heroChartDataObjNew.CollateralReturn += index.CollateralReturn * customPortfolioWeight.Weight / 100;
            heroChartDataObjNew.RollReturn += index.RollReturn * customPortfolioWeight.Weight / 100;
            heroChartDataObjNew.CreditLoss += index.CreditLoss * customPortfolioWeight.Weight / 100;
            heroChartDataObjNew.RebalanceReturn += index.RebalanceReturn * customPortfolioWeight.Weight / 100;
            heroChartDataObjNew.FxReturn += index.FxReturn * customPortfolioWeight.Weight / 100;
	
            customPortfolioWeight.IndexDisplayName = index.DisplayName;
            customPortfolioWeight.IndexShortDisplayName = index.ShortDisplayName;
			}
                
        });
        heroChartDataObjNew.Volatility = Math.sqrt(heroChartDataObjNew.Variance*100);
        heroChartDataObjNew.ExpectedReturn = (heroChartDataObjNew.ArithmeticReturn - (Math.pow(heroChartDataObjNew.Volatility/100.0,2)/2.0))*100.0;
        
        heroChartDataObjNew.ValuationChange = heroChartDataObjNew.ExpectedReturn - 
            (heroChartDataObjNew.Yield + heroChartDataObjNew.Growth + heroChartDataObjNew.CollateralReturn + 
            heroChartDataObjNew.RollReturn + heroChartDataObjNew.CreditLoss + heroChartDataObjNew.RebalanceReturn + 
            heroChartDataObjNew.FxReturn);
        
        heroChartDataObjNew.StandardError =  heroChartDataObjNew.Volatility/(2.0 * Math.sqrt(10.0));
        heroChartDataObjNew.ConfidenceIntervalNegative2 =  heroChartDataObjNew.ExpectedReturn + -2 * heroChartDataObjNew.StandardError;
        heroChartDataObjNew.ConfidenceIntervalNegative1 =  heroChartDataObjNew.ExpectedReturn + -1 * heroChartDataObjNew.StandardError;
        heroChartDataObjNew.ConfidenceIntervalPositive1 =  heroChartDataObjNew.ExpectedReturn + 1 * heroChartDataObjNew.StandardError;
        heroChartDataObjNew.ConfidenceIntervalPositive2 =  heroChartDataObjNew.ExpectedReturn + 2 * heroChartDataObjNew.StandardError;

        return heroChartDataObjNew;
   }
    //#region Hero Charts Configuration                               
                                                                      
    //#region AAM Base Configuration


    //** STARTS: Asset Allocation Global Base Defaults for Infographic Charts **/
    AAGlobal.BaseChartConfig = function() {
        this.Title = '';
        this.Width = parseInt($('.container').width())-66;/*$('#HeroContainer').width()*/
        this.Height = '948';
        this.BenchmarkColumn = 'IsBenchmarkPoint';
        this.MarkerRadius = 7;
        this.BenchmarkMarkerRadius = 7;
        this.FilterHeight = 60;
        this.InActiveOpacity = 0.1;

        // Disclaimer for Core over view Hero chart
        this.Credits = {
            enabled: true,
            //text: AAGlobal.DISCLAIMER_CONFIG["CORE_OVERVIEW_HERO"].Credits,
            useHtml: true,
            position: {
                align: 'left',
                verticalAlign: 'bottom',
                x: 20,
                y: -59
            },
            style: {
                width: parseInt(this.Width) - 20,
                cursor: 'default',
                fontFamily: '"Whitney A", "Whitney B"',
                fontStyle: 'italic',
                fontWeight: '400',
                color: '#898b8e',
                fontSize: (isiPad || window.innerWidth < 1341)?'8px':'10px',
                lineHeight: (isiPad || window.innerWidth < 1341)?'10px':'14px',
				textTransform: 'none'
            },
            href: ''
        };
        this.SpacingRight = 0;
        this.Exporting = {
            sourceWidth: 850,
            sourceHeight: 666,
            scale: 1
        };
    };
    //** End: Asset Allocation Global Base Defaults for Infographic Charts **/

    //** STARTS: Asset Allocation Global Base Prototype for Infographic Charts **/
    AAGlobal.BaseChartConfig.prototype = $.extend({}, AAGlobal.BaseChartConfig.prototype, {
        LegendItemClick: function(event) {
            return false;
        },
        GetPlotOptions: function() {},
        Callback: function() {},
        GetZoomType: function() {

        },
        toString: function() {
            return this.Title;
        },
		//HeroToolTipPosition
        // Tooltip Positioner for all the Hero charts
        TooltipPositioner: function(labelWidth, labelHeight, point) {
            var selectedPoint = this.chart.customTooltipPoint?this.chart.series[this.chart.customTooltipPoint.SeriesIndex].points[this.chart.customTooltipPoint.PointIndex]:null;
		
            if(selectedPoint && selectedPoint.series.name == "Efficient Frontier")
            {
                return { x: 100, y: 445 };
            }
            else
            {
                var x = $('#HeroContainer').width() - 191;
			    var y = 225;
                if(isiPad  && window.innerWidth < 979)
			    {
                    x = $('#HeroContainer').width() - 191;
				    y = y - 70;
                }
			    /*else if(isIE8Only)
			    {
				    y = 163;
			    }*/
                return {  x: x, y: y};
            }
        },

        getVerticalGradientColor: function(color, secondaryColor) {
            return {
                linearGradient: AAGlobal.VerticalGradient,
                stops: [
                    [0, secondaryColor ? secondaryColor : 'rgb(255,255,255)'],
                    [1, color]

                ]
            };
        },

        // Generate Image configuration for all Hero Charts
        ManipulateExportConfig: function(config) {

        if(config.showDescription && config.showDescription.toLowerCase() =="true")
        {
           // this.FilterHeight = this.FilterHeight -10;
            config.chart.spacingTop -= (this.FilterHeight );
            config.title.y += (this.FilterHeight +5);
			config.subtitle.y += (this.FilterHeight);
            config.subtitle.width = config.subtitle.width - 40;
        }
        else
        {
            var subTitleHeight = 30;
            config.chart.spacingTop -= (this.FilterHeight + subTitleHeight);
            config.title.y += (this.FilterHeight + subTitleHeight);
            config.subtitle = null;
        }

            config.chart.width = 860;
            config.chart.height = this.Height - 134;
            config.exporting.sourceWidth = null;
            config.exporting.sourceHeight = null;
            config.exporting.scale = 1;
            config.credits.enabled = true;
            config.credits.position.x = 10;
            config.credits.position.y -= 5;
            config.credits.style.width = config.chart.width - 10;
				
            config.credits.LogoUrl = '/content/dam/ra/images/highcharts/AA/ra_blue_logo.png';

            if (config.chart.type == 'scatter') {
                $.each(config.series, function(exportSeriesIndex, exportSeries) {
                    if (exportSeries.enableMouseTracking && exportSeries.dataLabels) {
                        exportSeries.dataLabels.enabled = true;
                    }
                });
                config.chart.marginTop = 150;
            } else {
                if (config.plotOptions.series && config.plotOptions.series.dataLabels) {
                    config.plotOptions.series.dataLabels.customEnabled = true;
                }
            }
			//config.tooltip = {};
		
        }
        

    });
    //** ENDS: Asset Allocation Global Base Prototype for Infographic Charts **/

    //#endregion

    //#region AAM Hero Configuration
    //** STARTS: Asset Allocation defaults Hero Charts  **/
    AAGlobal.HeroChartConfig = function() {
            this.Legend = {
                enabled: false
            };
            this.YField = 'ExpectedReturn';
            this.ShortDisplayName = 'ShortDisplayName';
            this.CategoryField = 'MarketCategory';
            this.Categories = [{
                Name: 'Developed Markets',
                Css: 'developedMkts',
                Label: 'Developed Markets',
                HoverColor: 'rgba(0,82,147, 0.5)',
                ActiveColor: 'rgba(0,82,147, 0.75)',
                InActiveColor: 'rgba(0,82,147, ' + this.InActiveOpacity + ')',
                ForeColor: 'rgb(0,82,147)',
                Symbol: 'circle',
                Rank: 2
            }, {
                Name: 'Emerging Markets',
                Css: 'emergingMkts',
                Label: 'Emerging Markets',
                HoverColor: 'rgba(0,101,66, 0.5)',
                ActiveColor: 'rgba(0,101,66, 0.75)',
                InActiveColor: 'rgba(0,101,66, ' + this.InActiveOpacity + ')',
                ForeColor: 'rgb(0,101,66)',
                Symbol: 'circle',
                Rank: 3
            }, {
                Name: 'US',
                Css: 'usMkts',
                Label: 'US',
                HoverColor: 'rgba(175,0,0, 0.5)',
                ActiveColor: 'rgba(175,0,0, 0.75)',
                InActiveColor: 'rgba(175,0,0, ' + this.InActiveOpacity + ')',
                ForeColor: 'rgb(175,0,0)',
                Symbol: 'circle',
                Rank: 1
            }, {
                Name: 'US Cash',
                Css: 'cashMkts',
                Label: 'US Cash',
                HoverColor: 'rgba(42,42,42, 0.5)',
                ActiveColor: 'rgba(42,42,42, 0.75)',
                InActiveColor: 'rgba(42,42,42, ' + this.InActiveOpacity + ')',
                ForeColor: 'rgb(42,42,42)',
                Symbol: 'circle',
                Rank: 4
            }];
            this.XAxis = {
                title: {
                    text: 'Volatility',
                    enabled: true,
                    style: {
                        fontFamily: '"Whitney A", "Whitney B"',
						fontStyle: 'italic',
						fontWeight: '400',
						color: '#898b8e',
						fontSize: '14px',
						lineHeight: '33px',
						letterSpacing: '0.5px'
                    }
                },
                min: 0,
                minRange: 2,
                lineWidth: 0,
                lineColor: '#bfbfbf',
                gridLineWidth: 0,
                tickWidth: 0,
                labels: {
                    format: '{value}%',
                    style: {
                        fontFamily: '"Whitney A", "Whitney B"',
						fontStyle: 'italic',
						fontWeight: '400',
						color: '#898b8e',
						fontSize: '14px',
                        lineHeight: '33px',
						letterSpacing: '.5px'
                    }
                }

            };
            this.YAxis = {
                title: {
                    text: 'Real Expected Returns (Unhedged USD)',
                    style: {
                        fontFamily: '"Whitney A", "Whitney B"',
                        fontStyle: 'italic',
						fontWeight: '400',
                        color: '#898b8e',
						fontSize: '14px',
                        lineHeight: '33px',
                        letterSpacing: '0.5px'                        
                    },
                    enabled: true
                },
                gridLineWidth: 0,
                lineWidth: 1,
                endOnTick: true,
                maxPadding: 0,
                startOnTick: true,
                minPadding: 0,
                lineColor: '#bfbfbf',
                minRange: 2,
                plotLines: [{
                    color: '#bfbfbf',
                    width: 1,
                    value: 0,
                    zIndex: 5
                }],
                labels: {
                    format: '{value}%',
                    style: {
                        fontFamily: '"Whitney A", "Whitney B"',
						fontStyle: 'italic',
						fontWeight: '400',
						color: '#898b8e',
						fontSize: '14px',
                        lineHeight: '33px',
						letterSpacing: '.5px'
                    }
                }
            };
        }
        //** ENDS: Asset Allocation defaults Hero Charts  **/

    //** STARTS: Asset Allocation Hero Charts Prototype  **/
    AAGlobal.HeroChartConfig.prototype = $.extend(true, {}, new AAGlobal.BaseChartConfig(), AAGlobal.HeroChartConfig.prototype, {

        ManipulateActiveColor: function(data) {

            var current = this;
            $.each(this.Categories, function(index, category) {
                var isPort = category.Name == 'model-portfolio';

                category.isActive = true;

                if (category.isAllEnabled) {
                    if (category.ActiveColor)
                        category.Color = category.ActiveColor;
                    if (category.SecondaryActiveColor)
                        category.SecondaryColor = category.SecondaryActiveColor;

                } else {

                    if (category.InActiveColor) {
                        category.Color = category.InActiveColor;
                        category.isActive = false;
                    }
                    if (category.SecondaryInActiveColor)
                        category.SecondaryColor = category.SecondaryInActiveColor;
                }


                if (category.isBenchmarkActive) {
                    if (category.ActiveColor)
                        category.BenchmarkColor = category.ActiveColor;
                    if (category.SecondaryActiveColor)
                        category.SecondaryBenchmarkColor = category.SecondaryActiveColor;
                } else {
                    if (category.InActiveColor)
                        category.BenchmarkColor = category.InActiveColor;
                    if (category.SecondaryInActiveColor)
                        category.SecondaryBenchmarkColor = category.SecondaryInActiveColor;
                }


            });
        },

        GetZoomType: function() {

            var zoom = null;

            if (isTouchSupport()) {
                zoom = 'xy';
            }
            return zoom;
        },

        GetTooltip: function() {
            return {
                useHTML: true,
                shared: false,
                borderRadius: 0,
                borderWidth: 0,
                shadow: false,
                enabled: false,
                positioner:  this.TooltipPositioner,
                backgroundColor: 'none',
                formatter: function() {
                    var html = '';
                    if(this.point.series.name == "Efficient Frontier")
                    {
                        html = '<div class="charts-tooltip efficient-frontier-tooltip"><span class="tooltip-text">The dotted line represents the efficient frontier, the highest return In-sample per unit of volatility. The blue dots are the result of simulations and represent the expected best out-of-sample portfolios.<br/><br/>Portfolios above the blue dots should only outperform on an in-sample basis or do not include asset class weight constraints.</span></div>';
                    }
                    else
                    {
                    
                        var marks = '<span class="marks">%</span>';
				        var symbolClass = this.point.AreConstraintsDisabled?"triangle":"dot";
                        var indexNameHtml = ((this.point.IsCustomPortfolio)?
						    '<h2 class="index"><div class="' + this.point.CssClass + ' ' + symbolClass + '"></div><a class="content" href="javascript:;" onclick="javascript:OpenPortBuilder(\'' + this.point['DisplayName'] + '\')">' + this.point['DisplayName'] + '</a></h2>' :
						    '<h2 class="index"><div class="' + this.point.CssClass  + ' ' + symbolClass + '"></div><span class="content">' + this.point['DisplayName'] + '</span></h2>');
                        
                        html = ((this.point.IsHubPortfolioModel || this.point.IsCustomPortfolio)?
							    '<div class="card"><div class="card-content"><div class="front"> <div class="chart-callout tooltip-hig2 "><a class="CalloutToggleViews" callout-type="asset-allocation" href="javascript:;">VIEW ASSET ALLOCATION ></a><a class="tooltipClose" href="javascript:;"></a>':
							    '<div class="chart-callout tooltip-hig2 "><a class="tooltipClose" href="javascript:;"></a>');

                        html += indexNameHtml;
                        html +='<h3>10-Yr Expected Real Return</h3>';
                        html += GetTooltipComponentHtml(this.point, "Yield", "Yield"); 
					    html += GetTooltipComponentHtml(this.point, "Growth", "Growth"); 
					    html += GetTooltipComponentHtml(this.point, "RollReturn", "Roll Return"); 
					    html += GetTooltipComponentHtml(this.point, "CreditLoss", "Credit Loss"); 
					    html += GetTooltipComponentHtml(this.point, "CollateralReturn", "Collateral"); 
					    html += GetTooltipComponentHtml(this.point, "RebalanceReturn", "Rebalance"); 
					    html += GetTooltipComponentHtml(this.point, "ValuationChange", "Valuation"); 
					    html += GetTooltipComponentHtml(this.point, "FxReturn", "FX");
					    html += '<dl class="bold topSaperator"><dt></dt><dd>' + (this.point.y != null ? (this.point.y.toAbsFixed(1) + marks) : '-') + '</dd></dl>';
					    html += '<h3 style="border:none;">CONFIDENCE INTERVAL</h3>';
					    html += '<div class="callout-confidence"><div class="callout-confidence-box first"><span class="head">95%</span><br><span class="val">'+
					    (this.point.ConfidenceIntervalNegative2 != null ? (this.point.ConfidenceIntervalNegative2.toAbsFixed(1) + '<span class="marks">%</span>') : '-')  +'</span></div>';
					    html +='<div class="callout-confidence-box sec"><span class="head">67%</span><br><span class="val">'+ (this.point.ConfidenceIntervalNegative1 != null ? (this.point.ConfidenceIntervalNegative1.toAbsFixed(1) + '<span class="marks">%</span>') : '-') +'</span></div>';
					    html+='<div class="callout-confidence-box middle"><span class="head">MEAN</span><br><span class="val">'+ (this.point.y != null ? (this.point.y.toAbsFixed(1) + '<span class="marks">%</span>') : '-') +'</span></div>';
					    html+='<div class="callout-confidence-box sec"><span class="head">67%</span><br><span class="val">'+ (this.point.ConfidenceIntervalPositive1 != null ? (this.point.ConfidenceIntervalPositive1.toAbsFixed(1) + '<span class="marks">%</span>') : '-') +'</span></div>';
					    html +='<div class="callout-confidence-box last"><span class="head">95%</span><br><span class="val">'+
					    (this.point.ConfidenceIntervalPositive2 != null ? (this.point.ConfidenceIntervalPositive2.toAbsFixed(1) + '<span class="marks">%</span>') : '-') +'</span></div></div><div style="clear:both;"></div>'
					    html += '<dl class="hasNoValue finalrow"><dt>Volatility</dt><dd>' + (this.point.Volatility != null ? (this.point.Volatility.toAbsFixed(1) + marks) : ' ') + '</dd></dl>';
                        html += '</div>';
					    if(this.point.IsHubPortfolioModel || this.point.IsCustomPortfolio)
					    {
						    html += '</div><div class="back"><div class="chart-callout tooltip-hig2 "><a class="CalloutToggleViews" callout-type="returns" href="javascript:;">VIEW RETURNS ></a><a class="tooltipClose" href="javascript:;"></a>';
						    html += indexNameHtml;
                            html +='<h3 style="margin-bottom:5px;">ASSET ALLOCATION</h3>';
                            var refcode =  this.point.ReferenceCode;
						    var weights = $.Enumerable.From(AAGlobal.WeightsData).Where(function(rec) {
						    return rec.BasketCode == refcode;}).ToArray();
						    var data = []
						    $.each(AAGlobal.AssetClassData, function(i,obj){
							    var weight = null;
							    $.each(weights, function(index,w)
							    {
								    if(w.IndexCode == obj.ReferenceCode){ weight = w.Weight;}
							    })
							    data.push({Name: obj.ShortDisplayName,HubPortfolioId:obj.HubPortfolioId, Group :obj.HubPortfolioName, Weight:weight})
						    } );
						    var groupedData = $.Enumerable.From(data).OrderBy("$.HubPortfolioId").GroupBy("$.Group").ToArray();
							    $.each(groupedData, function (index, groupedItem) {
						    var key = groupedItem.Key();
						    var sortedSource = $.Enumerable.From(groupedItem.source).OrderByDescending("$.Weight").ThenBy("$.Name").ToArray();
						    html +='<dl class="hasValue"><dt class="hubName" >'+key+'</dt></dl>';
						    $.each(sortedSource, function(index, item) {
							    if(item.Weight){
								    html += '<dl class="hasValue"><dt class="asset-name" >'+item.Name+'</dt><dd>' + item.Weight.toFixed(1)+ '<span class="marks">%</span></dd></dl>';
							    }
							    else{
								    html += '<dl class="hasNoValue"><dt class="asset-name" >'+item.Name+'</dt><dd>' + '-'+ '</dd></dl>';
							    }
								
						    });
							    html +='<h3></h3>';
							
							
						    });
			
						    html += '<dl class="hasValue totalValue"><dt class="asset-name" >TOTAL</dt><dd>' + '100'+ '<span class="marks">%</span></dd></dl>';
						    //html +='<h3></h3>';
						    html +='</div></div></div></div>';
                        }
                    }
                    return html;
                }
            };
        }
    });
    //** ENDS: Asset Allocation Hero Charts Prototype  **/

    //***** EQUITIES ***********************************/
    AAGlobal.HeroEquitiesChartConfig = function() {
        this.Width =  $('#HeroContainer').width();
        this.Height = '948';
        this.YField = 'ExpectedReturn';

        this.Title = {
            text: '<Placeholder>',
            width: parseInt(this.Width) - 50,
            style: {
                color: '#152c4d',
                fontSize: (isiPad || window.innerWidth < 1341)?'1.4em':'34px',
                fontFamily: '"Chronicle Display A", "Chronicle Display B"',
                fontWeight: '600',
                lineHeight: (isiPad || window.innerWidth < 1341)?'1.4em':'44px',
                letterSpacing: '.2px'
            },
            align: 'left',
            x: 0,
            y: -138,
            floating: true
        };
        this.SubTitle = {
            text: '<Placeholder>',
            align: 'left',
            width: parseInt(this.Width) - 70,
            style: {
                color: '#2b2a2a',
                fontSize: (isiPad || window.innerWidth < 1341)?'.9em':'14px',
                fontFamily: '"Whitney A", "Whitney B"',
                fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: (isiPad || window.innerWidth < 1341)?'12px':'22px',
                textTransform: 'none'
            },
            x: 0,
            floating: true,
            y: -110
        };
        //this.Credits.text = AAGlobal.DISCLAIMER_CONFIG["EQUITIES_HERO"].Credits;
    }
    AAGlobal.HeroEquitiesChartConfig.prototype = $.extend(true, {}, new AAGlobal.HeroChartConfig(), AAGlobal.HeroEquitiesChartConfig.prototype, {

    });

    //#endregion

    //#region Scatter Chart Base Configuration

    AAGlobal.ScatterChartConfig = function() {
		this.SpacingTop = 175;
	}

    AAGlobal.ScatterChartConfig.prototype = $.extend(true, {}, AAGlobal.ScatterChartConfig.prototype, {
		DataLabelFormatter: function()
		{
			
		},
        GetPlotOptions: function(areaThreshold) {
            return {
                series: {
                    dataLabels: {
                        y: 0,
                        x: -1 * this.MarkerRadius,
                        align: 'right',
                        verticalAlign: 'middle',
                        overflow: 'none',
                        crop: false,
                        formatter: this.DataLabelFormatter
                    },
					cursor: 'pointer',
					stickyTracking: false,
					point: {
                    events: {
					
                        mouseOver: function(e) {
                            var chart = this.series.chart;
							var isDataLabelEnabled = chart.series[0].options.dataLabels.enabled;
							var selectedPoint = chart.customTooltipPoint;
							
							if(((typeof selectedPoint =="undefined" || selectedPoint == null)  && e.target["GroupName"]=="EFFICIENT PORTFOLIO")	 ||(selectedPoint 
							&& e.target.ShortDisplayName != selectedPoint.ShortDisplayName && this.series.name != "Efficient Frontier"))
							{
							if (!chart.lbl) {
							
								    chart.lbl = chart.renderer.label('', e.currentTarget.plotX, e.currentTarget.plotY, null, null, null, true, null,'activelabel')
                                    .attr({
                                        id: 'myPath'
                                    })
                                    .css({
                                        color: '#2b2a2a',
										fontSize: '14px',
										fontWeight: '600',
										fontStyle: 'italics',
										letterSpacing: '.5px',
										zIndex:20
                                    })
                                    .add();
								}	
							
                            chart.lbl
                                .show()
                                .attr({
								
                                    text: this.ShortDisplayName,
                                    x: e.currentTarget.plotX + chart.plotLeft - this.ShortDisplayName.width() -18 ,
                                    y: e.currentTarget.plotY + chart.plotTop - 10
                                }).css(
								{
									top :e.currentTarget.plotY + chart.plotTop -chart.chartHeight,
									position:'relative'
			
								});

								chart.lbl.translate(e.currentTarget.plotX + chart.plotLeft - this.ShortDisplayName.width() - 18,e.currentTarget.plotY + chart.plotTop -chart.chartHeight - 15 );
								/*if(isIE8Only)
								{ 
									$(chart.lbl.element).css('top', chart.chartHeight+parseInt($(chart.lbl.element).css('top'))-15+'px').css('margin-top','0px');
								}*/
    
                               }
							else
							{
								if (chart.lbl) {
								chart.lbl.hide();
								}
							}
					}


                    }
                },
                    events: {
                        legendItemClick: this.LegendItemClick,
                        click: function(evt) {
							var chartObj = this.chart;
							var customTooltipPoint =  { SeriesIndex: evt.point.series.index, 
							PointIndex: evt.point.index ,ShortDisplayName :evt.point.ShortDisplayName
							};
							ScatterPlotPointClick(chartObj,customTooltipPoint,evt);
						
                        },
						mouseOut: function() {
							if (this.chart.lbl) {
								this.chart.lbl.hide();
							}
						}
                    }
                },
                scatter: {
                    marker: {
                        radius: this.MarkerRadius,
                        lineWidth: 2
                    }
                },
               
            };
        },

        CreateHighChartData: function(data, isPortfolio) {

            var equitiesScatterChart = this;
            var interLineJoiningData = [];

            $.each(data, function(pointIndex, point) {
                var modifiedPoint = $.extend(true, {}, point);
                modifiedPoint.x = point[equitiesScatterChart.XField];
                modifiedPoint.y = point[equitiesScatterChart.YField];
				var disPos, xPos, yPos, xPosBM, yPosBM;
				if(modifiedPoint.DisplayPosition == 'Left'){
					xPos = -10;
					yPos = -1;
					xPosBM = -20;
					yPosBM = 0;
					disPos = 'right';
				} else if(modifiedPoint.DisplayPosition == 'Right'){
					xPos = 10;
					yPos = -1;
					xPosBM = 20;
					yPosBM = 0;
					disPos = 'left';
				} else if(modifiedPoint.DisplayPosition == 'Top'){
					xPos = 2;
					yPos = -20;
					xPosBM = -1;
					yPosBM = -30;
					disPos = 'center';
				} else {
					xPos = 2;
					yPos = 20;
					xPosBM = -1;
					yPosBM = 30;
					disPos = 'center';
				}
                if (modifiedPoint[equitiesScatterChart.BenchmarkColumn] == true) {
                    modifiedPoint.dataLabels = {
                        // x: -1 * equitiesScatterChart.BenchmarkMarkerRadius,
						x: xPosBM,
						y: yPosBM,
                        style: {
                            fontSize: '14px',
							fontWeight:'normal'
                        },						
						align: disPos
                    };
                    modifiedPoint.marker = {
                        radius: equitiesScatterChart.BenchmarkMarkerRadius,
                        states: {
                            hover: {
                                radiusPlus: 4,
                                lineWidthPlus: 0,
                                radius: equitiesScatterChart.BenchmarkMarkerRadius
                            }
                        }
                    };
                } else {
					modifiedPoint.dataLabels = {
						x: xPos,
						y: yPos,
						align: disPos
					};
					if(point.AreConstraintsDisabled)
					modifiedPoint.marker = {symbol:"triangle",radius: 9,lineWidth:2}
				}

                if (isPortfolio) {
                    modifiedPoint[equitiesScatterChart.CategoryField] = 'model-portfolio';
                }

                 var cte= $.Enumerable.From(equitiesScatterChart.Categories).FirstOrDefault({}, function(record) {
                    return record.Name == modifiedPoint[equitiesScatterChart.CategoryField];
                });

                modifiedPoint.CssClass = cte.Css;
                modifiedPoint.ActiveColor = cte.ActiveColor;
                interLineJoiningData.push(modifiedPoint);
            });
            return interLineJoiningData;

        },
		
        GetPlotPoints: function(data) {

            var equitiesScatterChart = this;
            var interLineJoiningData = [];

            $.each(data, function(pointIndex, point) {
                var modifiedPoint = [point[equitiesScatterChart.XField],point[equitiesScatterChart.YField]];
				interLineJoiningData.push(modifiedPoint);
            });
            return interLineJoiningData;

        },
        
		Callback: function(chart) {
    /*var isIE8OnlyLocal = (typeof isIE8Only != 'undefined')?isIE8Only:false;*/
	if(chart.userOptions.ExportConfig && chart.userOptions.CustomTooltipPoint)
            {
				//try{
				
				//chart.customTooltip = new Highcharts.Tooltip(chart, chart.options.tooltip);  
                chart.spacing[1] = 225;
                chart.setSize(chart.chartWidth, chart.chartHeight, doAnimation = true);
                var tooltipPoint = chart.series[chart.userOptions.CustomTooltipPoint.SeriesIndex].data[chart.userOptions.CustomTooltipPoint.PointIndex];
                var tooltip = GetTooltip(tooltipPoint);
				var tooltipPosition = TooltipPositioner(tooltipPoint);
				chart.renderer.label(
						tooltip,
						tooltipPosition.x,
						tooltipPosition.y,
						null, null, null, true, true,'activelabel'
					).add();
				ScatterPlotPointClick(chart, chart.userOptions.CustomTooltipPoint);
				chart.customTooltipPoint = chart.userOptions.CustomTooltipPoint;
				//chart.customTooltip.refresh(tooltipPoint);      
            }
			if (chart.customTooltipPoint && chart.series[chart.customTooltipPoint.SeriesIndex].name != "Efficient Frontier") {
		
         //{ SeriesIndex: evt.point.series.index, PointIndex: evt.point.index };
        var point =  chart.series[chart.customTooltipPoint.SeriesIndex].points[chart.customTooltipPoint.PointIndex];
		var x =  point.plotX + chart.plotLeft;
		var y =  point.plotY + chart.plotTop;
		//if(isIE8Only)$(chart.container).css('margin-top', (chart.plotHeight+chart.plotTop-point.plotY-38)+'px');
		var yAxisRange = chart.initialYMax - chart.initialYMin;
		var averageYZoomIndex = yAxisRange/8;
		var xAxis = chart.xAxis[0];
		var yAxis = chart.yAxis[0];
		var confidencePositive1Y = yAxis.toPixels(point.ConfidenceIntervalPositive1);
		var confidencePositive2Y = yAxis.toPixels(point.ConfidenceIntervalPositive2);
		var confidenceNegative1Y = yAxis.toPixels(point.ConfidenceIntervalNegative1);
		var confidenceNegative2Y = yAxis.toPixels(point.ConfidenceIntervalNegative2);
		var plotYValue = yAxis.toPixels(point.y);
		
		
		if(confidencePositive1Y - (chart.plotTop +100) <0)
		{
			var newYMin = yAxis.min;
			var newYMax = yAxis.max;
			yAxis.setExtremes(newYMin, newYMax + averageYZoomIndex, true, true);
		}
		else if ( confidenceNegative2Y + 150> chart.chartHeight)
		{
			var newYMin = yAxis.min;
			var newYMax = yAxis.max;
			yAxis.setExtremes(newYMin - averageYZoomIndex, newYMax, true, true);
		}
    if (!chart.lbln) {
        chart.lbln = chart.renderer.label('', point.plotX, point.plotY, null, null, null, true, null,'activelabel')
            .attr({
                id: 'myPathm'
            })
            .css({
                color: '#2b2a2a',
                fontSize: '14px',
                fontWeight: '600',
				fontStyle: 'italics',
				letterSpacing: '.5px',
				zIndex:20
            })
            .add();
		 chart.lblc1 = chart.renderer.label('', point.plotX, point.plotY, null, null, null, true, null,'activelabel')
            .attr({
                id: 'lblconf1'
            })
            .css({
                color: '#000000',
                fontSize: '10px',
				zIndex:20

            })
            .add();	
			 chart.lblc2 = chart.renderer.label('', point.plotX, point.plotY, null, null, null, true, null,'activelabel')
            .attr({
                id: 'lblconf2'
            })
            .css({
                color: '#000000',
                fontSize: '10px',
				 zIndex:20

            })
            .add();	
			 chart.lblc3 = chart.renderer.label('', point.plotX, point.plotY, null, null, null, true, null,'activelabel')
            .attr({
                id: 'lblconf3'
            })
            .css({
                color: '#000000',
                fontSize: '10px',
				 zIndex:20

            })
            .add();	
			 chart.lblc4 = chart.renderer.label('', point.plotX, point.plotY, null, null, null, true, null,'activelabel')
            .attr({
                id: 'lblconf4'
            })
            .css({
                color: '#000000',
                fontSize: '10px',
				 zIndex:20

            })
            .add();	
		
    }
	
	$("#confid1").remove();
	$("#confid2").remove();
	$("#confid3").remove();
	$("#confid4").remove();
	$("#confid5").remove();
	$("#confid6").remove();
	
	 chart.pathconfid1 = chart.renderer.path(['M', x-10,confidencePositive1Y, 'L',x,confidencePositive1Y])
        .attr({
            'stroke-width': .5,
            stroke: 'black',
			 id: 'confid1',
			 zIndex:44
        })
        .add();
		chart.pathconfid2 = chart.renderer.path(['M', x-10,confidencePositive2Y, 'L',x,confidencePositive2Y])
        .attr({
            'stroke-width': .5,
            stroke: 'black',
			 id: 'confid2',
			 zIndex:44
        })
        .add();
		chart.pathconfid3 = chart.renderer.path(['M', x-10,confidenceNegative2Y, 'L',x,confidenceNegative2Y])
        .attr({
            'stroke-width': .5,
            stroke: 'black',
			 id: 'confid3',
			 zIndex:44
        })
        .add();
		chart.pathconfid4 = chart.renderer.path(['M', x-10,confidenceNegative1Y, 'L',x,confidenceNegative1Y])
        .attr({
            'stroke-width': .5,
            stroke: 'black',
			 id: 'confid4',
			 zIndex:44
        })
        .add();
		chart.pathconfid5 = chart.renderer.path(['M',x,confidencePositive2Y,'L',x,y-10]).attr({
            'stroke-width': .5,
            stroke: 'black',
			 id: 'confid5',
			 zIndex:44
        })
        .add()
		chart.pathconfid6 = chart.renderer.path(['M',x,y+10,'L',x,confidenceNegative2Y]).attr({
            'stroke-width': .5,
            stroke: 'black',
			 id: 'confid6',
			 zIndex:44
        })
        .add()
		
 chart.lblc1
        .show()
        .attr({

            text: (point.ConfidenceIntervalPositive1)? point.ConfidenceIntervalPositive1.toFixed(1) + "%":'-',
            x:  x-10 -27,
            y:  confidencePositive1Y -10
        }).css(
		{
			top :  confidencePositive1Y -10 -chart.chartHeight,
			position:'relative'
			
		});
	
	chart.lblc1.translate(x-10 -27,confidencePositive1Y -chart.chartHeight - 15);
	/*if(isIE8OnlyLocal)
    { 
        $(chart.lblc1.element).css('top', chart.chartHeight+parseInt($(chart.lblc1.element).css('top'))+'px').css('margin-top','0px');
    }*/
	
	
	 chart.lblc2
        .show()
        .attr({

            text: (point.ConfidenceIntervalPositive2)? point.ConfidenceIntervalPositive2.toFixed(1) + "%":"-",
            x:  x-10 -27,
            y:  confidencePositive2Y -10
        }).css(
		{
			top :  confidencePositive2Y -10 -chart.chartHeight,
			position:'relative'
			
		});
	chart.lblc2.translate(x-10 -27,confidencePositive2Y -chart.chartHeight - 15) ;
	/*if(isIE8OnlyLocal)
    { 
        $(chart.lblc2.element).css('top', chart.chartHeight+parseInt($(chart.lblc2.element).css('top'))+'px').css('margin-top','0px');
    }*/
	
 chart.lblc3
        .show()
        .attr({

            text: (point.ConfidenceIntervalNegative1)? point.ConfidenceIntervalNegative1.toFixed(1) + "%":"-",
            x:  x-10 -27,
            y:  confidenceNegative1Y -10
        }).css(
		{
			top :  confidenceNegative1Y -10 -chart.chartHeight,
			position:'relative'
			
		});
	chart.lblc3.translate(x-10 -27,confidenceNegative1Y -chart.chartHeight - 15);
	/*if(isIE8OnlyLocal)
    { 
        $(chart.lblc3.element).css('top', chart.chartHeight+parseInt($(chart.lblc3.element).css('top'))+'px').css('margin-top','0px');
    }*/
 chart.lblc4
        .show()
        .attr({

            text:(point.ConfidenceIntervalNegative2)? point.ConfidenceIntervalNegative2.toFixed(1) + "%":"-",
            x:  x-10 -27,
            y:  confidenceNegative2Y -10
        }).css(
		{
			top :  confidenceNegative2Y -10 -chart.chartHeight,
			position:'relative'
			
		});
	chart.lblc4.translate(x-10 -27,confidenceNegative2Y -chart.chartHeight - 15 );
	/*if(isIE8OnlyLocal)
    { 
        $(chart.lblc4.element).css('top', chart.chartHeight+parseInt($(chart.lblc4.element).css('top'))+'px').css('margin-top','0px');
    }*/
	if(point.ShortDisplayName)
	{
		chart.lbln
			.show()
			.attr({

				text: point.ShortDisplayName,
				x: point.plotX + chart.plotLeft - point.ShortDisplayName.width() - 18,
				y: plotYValue
			}).css(
			{
				top :point.plotY + chart.plotTop -chart.chartHeight,
				position:'relative'
				
			});
		
			chart.lbln.translate(point.plotX + chart.plotLeft - point.ShortDisplayName.width() - 18,point.plotY + chart.plotTop -chart.chartHeight - 15 );
			/*if(isIE8OnlyLocal)
			{ 
				$(chart.lbln.element).css('top', chart.chartHeight+parseInt($(chart.lbln.element).css('top'))-15+'px').css('margin-top','0px');
			}*/
	}
	else
	{
		/*if(isIE8OnlyLocal)$(chart.container).css('margin-top', '0px');*/
		if (chart.lbln) {
			chart.lbln.hide();
			chart.pathconfid1.hide(); 
			chart.pathconfid2.hide(); 
			chart.pathconfid3.hide(); 
			chart.pathconfid4.hide(); 
			chart.pathconfid5.hide(); 
			chart.pathconfid6.hide(); 
			chart.lblc1.hide();
			chart.lblc2.hide();
			chart.lblc3.hide();
			chart.lblc4.hide();
		}
	}
	
	PopulateExportChartConfig(chart,chart.customTooltipPoint);
} else {
	/*if(isIE8OnlyLocal)$(chart.container).css('margin-top', '0px');*/
    if (chart.lbln) {
        chart.lbln.hide();
		chart.pathconfid1.hide(); 
		chart.pathconfid2.hide(); 
		chart.pathconfid3.hide(); 
		chart.pathconfid4.hide(); 
		chart.pathconfid5.hide(); 
		chart.pathconfid6.hide(); 
		chart.lblc1.hide();
		chart.lblc2.hide();
		chart.lblc3.hide();
		chart.lblc4.hide();
    }
}
								
            if (chart.userOptions.credits.LogoUrl) {

                // drawing logo
                chart.renderer.image(
                    chart.userOptions.credits.LogoUrl,
                    24,
                    650,
                    144,
                    48
                ).add();

                if (AAGlobal.StaggerDataLabels) {
                    AAGlobal.StaggerDataLabels(chart.series);
                }

            }
			var customPortfoliosSeries = $.Enumerable.From(chart.series).FirstOrDefault(null,function(record) {return record.name == 'CUSTOM';});
			if(customPortfoliosSeries && !chart.customTooltipPoint)
			{
				var constraintsDisabled = $.Enumerable.From(customPortfoliosSeries.data).Any('$.AreConstraintsDisabled');
				if (constraintsDisabled) {
					if(chart.constrainstLegend){
						chart.constrainstLegend.show();
					}
					else{
						// drawing logo
						chart.constrainstLegend = chart.renderer.label(
							'<div class="customPortfoliosSymbol"><ul class="legendCustomPortfolios"><li><div class="triangle usMkts"></div><span> = Unconstrained</span></li><li><div class="dot usMkts"></div><span> = Constrained</span></li><br/></ul></div>',
							((chart.userOptions.ExportConfig && chart.userOptions.CustomTooltipPoint)?chart.chartWidth - 500:chart.chartWidth - 300),
							-175,
							null, null, null, true, true,'activelabel'
						).add();
					}
				}
				else
				{
					if(chart.constrainstLegend)
						chart.constrainstLegend.hide()
				}
			}
			else
			{
				if(chart.constrainstLegend)
				chart.constrainstLegend.hide()
			}
        },

        GetConfiguration: function(seriesData) {
            var equitiesScatterChart = this;
            equitiesScatterChart.Credits.text = GetDisclaimerText(AAGlobal.CONFIG[configType]['Disclaimer']);
            return {
                chart: {
                    type: 'scatter',
                    spacingRight: 25,
                    spacingTop: this.SpacingTop,
                    spacingLeft: 15,
                    spacingBottom: 70,
					marginTop: 210,
					marginBottom: 210,
                    style: {
                        fontFamily: '"Whitney A", "Whitney B"',
                        textTransform: 'uppercase'
                    },
                   
                    events: {
                    load: function(){
                            this.customTooltip = new Highcharts.Tooltip(this, this.options.tooltip);  
                              
                        },
                        redraw: function() {
                            window.setTimeout(function() {
                                $('.shape-ratio-text').remove();
                                var highChart = $(equitiesScatterChart.DOM).highcharts();
                                equitiesScatterChart.Callback(highChart);
                                var xAxisRange = highChart.initialXMax - highChart.initialXMin;

                                var yAxisRange = highChart.initialYMax - highChart.initialYMin;

                                var xAxis = highChart.xAxis[0];
                                var yAxis = highChart.yAxis[0];

                                var currentXAxisRange = xAxis.max - xAxis.min;
                                var currentYAxisRange = yAxis.max - yAxis.min;

                                if (currentXAxisRange < xAxisRange || currentYAxisRange < yAxisRange || isTouchSupport()) {
                                    return;
                                }
                                AAGlobal.StaggerDataLabels(highChart.series);
                            }, 500);
                        },
						click: function() {
							var chartDiv = $('div[id*=PlotContainer]:visible');
							var chart = chartDiv.highcharts();
							if(chart.hideEnabled)
							{
								$('.charts-tooltip.efficient-frontier-tooltip').remove();
							}
						}
                    }
                },
                title: equitiesScatterChart.Title,
                subtitle: equitiesScatterChart.SubTitle,
                xAxis: equitiesScatterChart.XAxis,
                yAxis: equitiesScatterChart.YAxis,
                legend: equitiesScatterChart.Legend,
                credits: equitiesScatterChart.Credits,
                exporting: equitiesScatterChart.Exporting,
                tooltip: equitiesScatterChart.GetTooltip(),
                plotOptions: equitiesScatterChart.GetPlotOptions(),
                series: seriesData
            };
        },

        GetRegressionSeriesOptions: function(seriesIndex, series) {
            return {
                type: this.RegressionSlope.Type,
                data: series,
                name: this.RegressionSlope.SlopeValues[seriesIndex].Value,
                color: this.RegressionSlope.SlopeValues[seriesIndex].Color,
                marker: {
                    enabled: false
                },
                showInLegend: false,
                states: {
                    hover: {
                        lineWidth: 0
                    }
                },
                enableMouseTracking: false
            };
        },

        GetEfficientFrontierOptions: function(seriesIndex, series) {
            return {
                type: this.EfficientFrontierConfig.Type,
                data: series,
                name: this.EfficientFrontierConfig.Text,
                color: this.EfficientFrontierConfig.Color,
                marker: {
                    enabled: false,
                    states: {
                        hover: {
							radiusPlus: -4,
							lineWidthPlus: 2
                        }
                    }
                },
				dashStyle: 'shortdot',
                showInLegend: false,
                states: {
                    hover: {
                        halo: {
                            opacity: 0
                        },
                        lineWidth: 2,
						lineWidthPlus: 1,
                        color: this.EfficientFrontierConfig.HoverColor
                    }
                },
                enableMouseTracking: true
            };
        },

        GetScatterSeriesOptions: function(category, series, isBenchmark) {

            return {
                lineWidth: this.LineWidth,
                color: (isBenchmark && category.BenchmarkColor) ? category.BenchmarkColor : category.Color,
                marker: {
                    symbol: category.Symbol,
                    lineColor: (isBenchmark && category.BenchmarkColor) ? category.BenchmarkColor : category.Color,
                },
                states: {
                    hover: {
                        halo: {
                            opacity: 0
                        }
                    }
                },
                name: category.Label,
                enableMouseTracking: (isBenchmark) ? (category.isBenchmarkActive) : category.isActive,
                zIndex: category.isActive ? (isBenchmark ? 0 : 1) : 0,
                dataLabels: {
                    enabled: !this.HideDataLabels && ((isBenchmark) ? (category.isBenchmarkActive) : category.isActive),
                    color: '#898b8e',
                    style: {
						fontFamily: '"Whitney A", "Whitney B"',
						fontStyle: 'normal',
						fontWeight: '400',
						color: '#898b8e',
						fontSize: '14px',
						lineHeight: '22px',
						letterSpacing: '.75px',
						textTransform: 'uppercase'
                    }
                },
                data: series
            };
        }
    });

    //#endregion

    //#region Column and Drilldown Column Chart Base Configuration
    AAGlobal.ColumnChartConfig = function() {}

    AAGlobal.ColumnChartConfig.prototype = $.extend(true, {}, AAGlobal.ColumnChartConfig.prototype, {

        GetPlotOptions: function() {
            //1638
            var barWidth;
            if($(window).width() <= 768){
                barWidth = 18;
            }else{
                barWidth = 25;
            }

            var plotOptions = {
                series: {
                    grouping: false,
                    dataGrouping: false,
                    events: {
                        legendItemClick: this.LegendItemClick,
						click: function(evt) {
                        var chartObj = this.chart;
                            chartObj.spacing[1] = 225;
                            $.Enumerable.From(chartObj.series).ForEach(function(seriesObj)
                            {
                                if(!seriesObj.options.originalPointWidth)
                                seriesObj.options.originalPointWidth = seriesObj.options.pointWidth;
                                seriesObj.options.pointWidth = seriesObj.data.length > 22?18:seriesObj.options.pointWidth;
                            });
                            chartObj.setSize(chartObj.containerWidth, chartObj.chartHeight, doAnimation = true);
                            chartObj.customTooltip.refresh(evt.point, evt);
                            CaptureAAAnalytics("Infographic-", "Callout", location.pathname);
                            RegisterTooltipClose();
							var customTooltipPoint =  { SeriesIndex: evt.point.series.index, 
							PointIndex: evt.point.index ,ShortDisplayName :evt.point.ShortDisplayName
							};
                            chartObj.customTooltipPoint = customTooltipPoint;
                            PopulateExportChartConfig(chartObj, customTooltipPoint);
						}
                    },
                    //1638 pointWidth: 25,
                    pointWidth: barWidth,
                    groupPadding: 0,
                    pointPadding: 0,
                    pointPlacement: 'between',
                    shadow: false,
                    dataLabels: {
                        enabled: false,
                        customEnabled: !this.HideDataLabels,
                    }
                }
            };

            /*if (AAGlobal.FirstTimeLoad && $.browser.msie) {
                plotOptions.series.animation = false;
            }*/
            return plotOptions;
        },

        GetSeriesData: function(data) {
            var equitiesColumnChart = this;
            var seriesData = [];


            $.each(this.Categories, function(categoryIndex, categoryObject) {

                seriesData.push({
                    name: categoryObject.Name,
                    color: equitiesColumnChart.getVerticalGradientColor(categoryObject.Color, categoryObject.SecondaryColor),
                    CssClass: categoryObject.Css,
                    data: [],
                    enableMouseTracking: categoryObject.isActive
                });

            });
            var seriesDataEnumerable = $.Enumerable.From(seriesData);

            var categoryData = $.Enumerable.From(data).Where(function(record) {
                return record[equitiesColumnChart.CategoryField] != 'US Cash';
            });
            categoryData.ForEach(function(item, index) {
                var modifiedItem = $.extend(true, {}, item);
                modifiedItem.y = modifiedItem[equitiesColumnChart.YField];
                modifiedItem.XFieldValue = modifiedItem[equitiesColumnChart.XField];;
                
                var category = seriesDataEnumerable.FirstOrDefault(null, function(record) {
                    return record.name == modifiedItem[equitiesColumnChart.CategoryField];
                });
                if (category != null) {
                    if (modifiedItem.y < 0) {
                        modifiedItem.color = $.extend(true, {}, category.color, {
                            linearGradient: AAGlobal.NegativeVerticalGradient
                        });
                    }
                    modifiedItem.CssClass = category.CssClass;
					category.data.push(modifiedItem);
                    category.added = true;
                }
                seriesDataEnumerable.Where(function(record) {
                    return record.name != item[equitiesColumnChart.CategoryField];
                }).ForEach(function(seriesDataObject, seriesDataIndex) {
                    seriesDataObject.data.push(null);
                });
            });
            return seriesDataEnumerable.Where('$.added==true').ToArray();
        },

        GetCategories: function(data) {

            return $.Enumerable.From(data).Where('$.' + this.BenchmarkColumn + ' != true').Select('$.' + this.XField).ToArray();
        },

        Callback: function(chart) {
            if(chart.userOptions.ExportConfig && chart.userOptions.CustomTooltipPoint)
            {
				chart.spacing[1] = 225;
				$.Enumerable.From(chart.series).ForEach(function(seriesObj)
				{
					if(!seriesObj.options.originalPointWidth)
					seriesObj.options.originalPointWidth = seriesObj.options.pointWidth;
					seriesObj.options.pointWidth = seriesObj.data.length > 20?18:seriesObj.options.pointWidth;
				});
				chart.setSize(chart.chartWidth, chart.chartHeight, doAnimation = true);
                var tooltipPoint = chart.series[chart.userOptions.CustomTooltipPoint.SeriesIndex].data[chart.userOptions.CustomTooltipPoint.PointIndex];
                var tooltip = GetTooltip(tooltipPoint);
				var tooltipPosition = TooltipPositioner(tooltipPoint);
				chart.renderer.label(
						tooltip,
						tooltipPosition.x,
						tooltipPosition.y,
						null, null, null, true, true,'activelabel'
					).add();     
            }
			var series = chart.series;
		    if (chart.userOptions.credits.LogoUrl) {

                // drawing logo
                chart.renderer.image(
                    chart.userOptions.credits.LogoUrl,
                    chart.plotLeft + 24,//chart.plotLeft + chart.plotWidth - 149,
                    650,
                    144,
                    48
                ).add();
            }

            if (!chart.userOptions.plotOptions.series.dataLabels.customEnabled) {
                return;
            }
			var maxHeight = 0;
			var minHeight = 0;
            $.each(series, function(seriesIndex, seriesObject) {

                if (seriesObject.options.enableMouseTracking) {
                    $.each(seriesObject.data, function(dataIndex, dataObject) {

                        if (dataObject.y != null) {
						var currentHeight = 0;
                            var shapeArgs = dataObject.shapeArgs;
                            var barHeight = 0;
                            var textAnchor = 'end';
                            var translateOffset = -1;
                            var insidePadding = 8;
                            var outsidePadding = 8;
                            var opacityPaddingAdjust = 15;
                            var rotation = -90,
                                rotationField = 'custom';
                            if (shapeArgs.x < 0 || shapeArgs.y < 0) {
                                return;
                            }
                            var paddingVertical = chart.plotTop;

                            if (dataObject.y < 0) {
								
                                barHeight = shapeArgs.height;
                                insidePadding = insidePadding * -1;
                                textAnchor = 'start';
                                translateOffset = 1;
                            }

                            var textbox = chart.renderer.text(
                                dataObject.ShortDisplayName,
                                chart.plotLeft + shapeArgs.x + shapeArgs.width / 2 + 5,
                                chart.plotTop + shapeArgs.y + barHeight + insidePadding
                            ).attr({
                                'zIndex': '5',
                                'class': 'data-labels-text',
                                'rotation': rotation,
                                'text-anchor': textAnchor
                                    //'transform' : 'translate(Math.abs(chart.plotLeft + shapeArgs.x + shapeArgs.width/ 2 + 5) + ' ' + Math.abs(chart.plotTop + shapeArgs.y + barHeight + insidePadding) + ')'
                            }).css({
                                fontFamily: '"Whitney A", "Whitney B"',
                                color: ' #fff',
                                fontStyle: 'italic',
                                fontWeight: '400',
                                fontSize: '18px',
                                lineHeight: '33px',
                                letterSpacing: '0.5px',
                                zoom: 1
                            }).add();
							currentHeight = shapeArgs.height;
                            var bBox = textbox.getBBox();
                            var element = $(textbox.element);
                            /*if ($.browser && $.browser.msie && $.browser.version < 9) {
                                paddingVertical -= 100;
                                if (dataObject.y >= 0)
                                    $(element).css('top', (parseInt($(element).css('top')) + bBox.height) + 'px');
                            }*/
									//bBox.y + (translateOffset * (bBox.height + Math.abs(insidePadding) + outsidePadding)) < paddingVertical
                            if ((bBox.height + Math.abs(insidePadding) + opacityPaddingAdjust) > shapeArgs.height) {

                                var translateBack = bBox.height + Math.abs(insidePadding) + outsidePadding;
								currentHeight = currentHeight + bBox.height ;
                                
								var flip = (dataObject.y >0 &&( bBox.y + (translateOffset * (bBox.height + Math.abs(insidePadding) + outsidePadding)) < paddingVertical))
									|| (dataObject.y <0 && (bBox.y + (translateOffset * (bBox.height + Math.abs(insidePadding) + outsidePadding)) > paddingVertical + chart.plotHeight));
								
								
								if (flip) {
                                    insidePadding = 8;
                                    translateOffset = -translateOffset;
                                    textAnchor = 'end';
                                    translateBack = shapeArgs.height;
                                    /*if ($.browser && $.browser.msie && $.browser.version < 9) {
                                        $(element).css('top', (parseInt($(element).css('top')) + ((translateOffset) * (shapeArgs.height)) + 'px'));
                                    }*/
                                } else {
                                    /*if ($.browser && $.browser.msie && $.browser.version < 9) {
                                        $(element).css('top', (parseInt($(element).css('top')) + ((translateOffset) * (bBox.height + opacityPaddingAdjust)) + 'px'));
                                    }*/
                                }
                                element.attr('transform', 'translate(0, ' + translateOffset * (translateBack) + ') ' + element.attr('transform'));
                                element.css({
                                    'color': '#898b8e',
                                    fill: '#898b8e'
                                });
                            } else {
                                /*if ($.browser && $.browser.msie && $.browser.version < 9) {

                                    $(element).css('background-color', 'transparent');
                                }*/
                            }
												
                        }
                    });
                }
            });
			
        },

        GetConfiguration: function(seriesData, categories) {
            var equitiesColumnChart = this;
            equitiesColumnChart.Credits.text = GetDisclaimerText(AAGlobal.CONFIG[configType]['Disclaimer']);
            return {
                chart: {
                    type: 'column',
                    spacingRight: 25,
                    spacingTop: 175,
                    spacingLeft: 15,
                    spacingBottom: 70,
					marginTop: 210,
					marginBottom: 190,
					style: {
                        'font-family': '"Whitney A", "Whitney B"',
                        'text-transform': 'uppercase'
                    },
                    events: {
                        redraw: function() {
                            window.setTimeout(function() {
                                $('.data-labels-text').remove();
                                equitiesColumnChart.Callback($(equitiesColumnChart.DOM).highcharts());
                            }, 500);
                        },
						load: function(){
                            this.customTooltip = new Highcharts.Tooltip(this, this.options.tooltip);  
                              
                        }
                    },
                    zoomType: equitiesColumnChart.GetZoomType()
                },
                title: equitiesColumnChart.Title,
                subtitle: equitiesColumnChart.SubTitle,
                xAxis: $.extend(equitiesColumnChart.XAxis, {
                    categories: categories
                }),
                yAxis: equitiesColumnChart.YAxis,
                legend: equitiesColumnChart.Legend,
                credits: equitiesColumnChart.Credits,
                exporting: equitiesColumnChart.Exporting,
                tooltip: equitiesColumnChart.GetTooltip(),
                plotOptions: equitiesColumnChart.GetPlotOptions(),
                series: seriesData
            };
        }

    });

    AAGlobal.HeroColumnChartConfig = function() {
        this.Categories = [{
            Name: 'Developed Markets',
            Css: 'developedMkts',
            Label: 'Developed Markets',
            ActiveColor: 'rgba(0,82,147, 1)',
            InActiveColor: 'rgba(0,82,147, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgb(96,172,233)',
            SecondaryInActiveColor: 'rgba(96,172,233,' + this.InActiveOpacity + ')',
            Color: 'rgb(0,82,147)',
            ForeColor: 'rgb(0,82,147)',
            Symbol: 'circle',
            Rank: 2
        }, {
            Name: 'Emerging Markets',
            Css: 'emergingMkts',
            Label: 'Emerging Markets',
            ActiveColor: 'rgba(0,55,36, 1)',
            InActiveColor: 'rgba(0,55,36, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgb(89,185,152)',
            SecondaryInActiveColor: 'rgba(89,185,152,' + this.InActiveOpacity + ')',
            Color: 'rgb(0,101,66)',
            ForeColor: 'rgb(0,101,66)',
            Symbol: 'circle',
            Rank: 3
        }, {
            Name: 'US',
            Css: 'usMkts',
            Label: 'US',
            ActiveColor: 'rgba(106,0,0, 1)',
            InActiveColor: 'rgba(106,0,0, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgb(206,0,0)',
            SecondaryInActiveColor: 'rgba(206,0,0,' + this.InActiveOpacity + ')',
            Color: 'rgb(175,0,0)',
            ForeColor: 'rgb(175,0,0)',
            Symbol: 'circle',
            Rank: 1
        }];
    }
    AAGlobal.HeroColumnChartConfig.prototype = $.extend(true, {}, new AAGlobal.HeroEquitiesChartConfig(), new AAGlobal.ColumnChartConfig(), AAGlobal.HeroColumnChartConfig.prototype, {});

    AAGlobal.CoreOverviewBaseColumnChartConfig = function() {}

    AAGlobal.CoreOverviewBaseColumnChartConfig.prototype = $.extend(true, {}, AAGlobal.CoreOverviewBaseColumnChartConfig.prototype, {

        GetPlotOptions: function() {

            var plotOptions = {
                series: {
                    grouping: false,
                    dataGrouping: false,
                    events: {
                        legendItemClick: this.LegendItemClick,
						click: function(evt) {
                        var chartObj = this.chart;
                            chartObj.spacing[1] = 225;
                            chartObj.setSize(chartObj.containerWidth, chartObj.chartHeight, doAnimation = true);
                            chartObj.customTooltip.refresh(evt.point, evt);
                            CaptureAAAnalytics("Infographic-", "Callout", location.pathname);
                            RegisterTooltipClose();
                            var customTooltipPoint =  { SeriesIndex: evt.point.series.index, 
							PointIndex: evt.point.index ,ShortDisplayName :evt.point.ShortDisplayName
							};
                            chartObj.customTooltipPoint = customTooltipPoint;
                            PopulateExportChartConfig(chartObj, customTooltipPoint);
						}
                    },
                    pointWidth: 25,
                    groupPadding: 0,
                    pointPadding: 0,
                    pointPlacement: 'between',
                    shadow: false,
                    dataLabels: {
                        enabled: false,
                        customEnabled: !this.HideDataLabels,
                    }
                }
            };

            /*if (AAGlobal.FirstTimeLoad && $.browser.msie) {
                plotOptions.series.animation = false;
            }*/
            return plotOptions;
        },

        GetSeriesData: function(data) {
            var equitiesColumnChart = this;
            var seriesData = [];


            $.each(this.Categories, function(categoryIndex, categoryObject) {

                seriesData.push({
                    name: categoryObject.Name,
                    color: equitiesColumnChart.getVerticalGradientColor(categoryObject.Color, categoryObject.SecondaryColor),
                    CssClass: categoryObject.Css,
					ActiveColor: categoryObject.ActiveColor,
                    data: [],
                    enableMouseTracking: categoryObject.isActive
                });

            });
            var seriesDataEnumerable = $.Enumerable.From(seriesData);

            var categoryData = $.Enumerable.From(data).Where(function(record) {
                return record[equitiesColumnChart.CategoryField] != 'US Cash';
            });
            categoryData.ForEach(function(item, index) {
                var modifiedItem = $.extend(true, {}, item);
                modifiedItem.y = modifiedItem[equitiesColumnChart.YField];

                var category = seriesDataEnumerable.FirstOrDefault(null, function(record) {
                    return record.name == modifiedItem[equitiesColumnChart.CategoryField];
                });
                if (category != null) {
                    if (modifiedItem.y < 0) {
                        modifiedItem.color = $.extend(true, {}, category.color, {
                            linearGradient: AAGlobal.NegativeVerticalGradient
                        });
                    }
                    modifiedItem.CssClass = category.CssClass;
					modifiedItem.ActiveColor = category.ActiveColor;
                    category.data.push(modifiedItem);
                    category.added = true;
                }
                seriesDataEnumerable.Where(function(record) {
                    return record.name != item[equitiesColumnChart.CategoryField];
                }).ForEach(function(seriesDataObject, seriesDataIndex) {
                    seriesDataObject.data.push(null);
                });
            });
            return seriesDataEnumerable.Where('$.added==true').ToArray();
        },

        GetCategories: function(data) {

            return $.Enumerable.From(data).Where('$.' + this.BenchmarkColumn + ' != true').Select('$.' + this.XField).ToArray();
        },

        Callback: function(chart) {
            if(chart.userOptions.ExportConfig && chart.userOptions.CustomTooltipPoint)
            {
				chart.spacing[1] = 225;
				chart.setSize(chart.chartWidth, chart.chartHeight, doAnimation = true);
                var tooltipPoint = chart.series[chart.userOptions.CustomTooltipPoint.SeriesIndex].data[chart.userOptions.CustomTooltipPoint.PointIndex];
                var tooltip = GetTooltip(tooltipPoint);
				var tooltipPosition = TooltipPositioner(tooltipPoint);
				chart.renderer.label(
						tooltip,
						tooltipPosition.x,
						tooltipPosition.y,
						null, null, null, true, true,'activelabel'
					).add();     
            }
			var series = chart.series;

            if (chart.userOptions.credits.LogoUrl) {

                // drawing logo
                chart.renderer.image(
                    chart.userOptions.credits.LogoUrl,
                    chart.plotLeft + 24,//chart.plotLeft + chart.plotWidth - 149,
                    650,
                    144,
                    48
                ).add();
            }

            if (!chart.userOptions.plotOptions.series.dataLabels.customEnabled) {
                return;
            }

            $.each(series, function(seriesIndex, seriesObject) {

                if (seriesObject.options.enableMouseTracking) {
                    $.each(seriesObject.data, function(dataIndex, dataObject) {

                        if (dataObject.y != null) {
                            var shapeArgs = dataObject.shapeArgs;
                            var barHeight = 0;
                            var textAnchor = 'end';
                            var translateOffset = -1;
                            var insidePadding = 8;
                            var outsidePadding = 8;
                            var opacityPaddingAdjust = 15;
                            var rotation = -90,
                                rotationField = 'custom';
                            if (shapeArgs.x < 0 || shapeArgs.y < 0) {
                                return;
                            }
                            var paddingVertical = chart.plotTop;

                            if (dataObject.y < 0) {

                                barHeight = shapeArgs.height;
                                insidePadding = insidePadding * -1;
                                textAnchor = 'start';
                                translateOffset = 1;
                            }

                            var textbox = chart.renderer.text(
                                dataObject.ShortDisplayName,
                                chart.plotLeft + shapeArgs.x + shapeArgs.width / 2 + 5,
                                chart.plotTop + shapeArgs.y + barHeight + insidePadding
                            ).attr({
                                'zIndex': '5',
                                'class': 'data-labels-text',
                                'rotation': rotation,
                                'text-anchor': textAnchor
                                    //'transform' : 'translate(Math.abs(chart.plotLeft + shapeArgs.x + shapeArgs.width/ 2 + 5) + ' ' + Math.abs(chart.plotTop + shapeArgs.y + barHeight + insidePadding) + ')'
                            }).css({
                                fontSize: '14px',
                                color: '#fff',
                                fontFamily: '"Whitney A", "Whitney B"',
                                fontWeight: 'bold',
                                zoom: 1
                            }).add();

                            var bBox = textbox.getBBox();
                            var element = $(textbox.element);
                            /*if ($.browser && $.browser.msie && $.browser.version < 9) {
                                paddingVertical -= 100;
                                if (dataObject.y >= 0)
                                    $(element).css('top', (parseInt($(element).css('top')) + bBox.height) + 'px');
                            }*/

                            if ((bBox.height + Math.abs(insidePadding) + opacityPaddingAdjust) > shapeArgs.height) {

                                var translateBack = bBox.height + Math.abs(insidePadding) + outsidePadding;

                                if (bBox.y + (translateOffset * (bBox.height + Math.abs(insidePadding) + outsidePadding)) > paddingVertical + chart.plotHeight) {
                                    insidePadding = 8;
                                    translateOffset = -translateOffset;
                                    textAnchor = 'end';
                                    translateBack = shapeArgs.height;
                                    /*if ($.browser && $.browser.msie && $.browser.version < 9) {
                                        $(element).css('top', (parseInt($(element).css('top')) + ((translateOffset) * (shapeArgs.height)) + 'px'));
                                    }*/
                                } else {
                                    /*if ($.browser && $.browser.msie && $.browser.version < 9) {
                                        $(element).css('top', (parseInt($(element).css('top')) + ((translateOffset) * (bBox.height + opacityPaddingAdjust)) + 'px'));
                                    }*/
                                }
                                element.attr('transform', 'translate(0, ' + translateOffset * (translateBack) + ') ' + element.attr('transform'));
                                element.css({
                                    'color': '#707070',
                                    fill: '#707070'
                                });
                            } else {
                                /*if ($.browser && $.browser.msie && $.browser.version < 9) {

                                    $(element).css('background-color', 'transparent');
                                }*/
                            }

                        }
                    });
                }
            });
        },

        GetConfiguration: function(seriesData, categories) {
            var equitiesColumnChart = this;
            equitiesColumnChart.Credits.text = GetDisclaimerText(AAGlobal.CONFIG[configType]['Disclaimer']);
            return {
                chart: {
                    type: 'column',
                    spacingRight: 25,
                    spacingTop: 175,
                    spacingLeft: 15,
                    spacingBottom: 70,
					marginTop: 210,
					marginBottom: 190,
                    style: {
                        'font-family': '"Whitney A", "Whitney B"',
                        'text-transform': 'uppercase'
                    },
                    events: {
                        redraw: function() {
                            window.setTimeout(function() {
                                $('.data-labels-text').remove();
                                equitiesColumnChart.Callback($(equitiesColumnChart.DOM).highcharts());
                            }, 500);
                        },
					load: function(){
                            this.customTooltip = new Highcharts.Tooltip(this, this.options.tooltip);  
                              
                        }
                    },
                    zoomType: equitiesColumnChart.GetZoomType()
                },
                title: equitiesColumnChart.Title,
                subtitle: equitiesColumnChart.ColumnChartSubTitle,
                xAxis: $.extend(equitiesColumnChart.XAxis, {
                    categories: categories
                }),
                yAxis: equitiesColumnChart.YAxis,
                legend: equitiesColumnChart.Legend,
                credits: equitiesColumnChart.Credits,
                exporting: equitiesColumnChart.Exporting,
                tooltip: equitiesColumnChart.GetTooltip(),
                plotOptions: equitiesColumnChart.GetPlotOptions(),
                series: seriesData
            };
        }

    });
    //#endregion

    //#region Equities Hero chart Configuration


    //** STARTS: Asset Allocation defaults Hero Charts of type 'SCATTER' for 'EQUITIES' Page  **/
    AAGlobal.EquitiesScatterChartConfig = function(currentDOM, hideDataLabels) {
        this.DOM = currentDOM;
        this.HideDataLabels = hideDataLabels;
        this.SpacingRight = 0;
        this.LineWidth = 0;
        this.XField = 'Volatility';
       

    };

    AAGlobal.EquitiesScatterChartConfig.prototype = $.extend(true, {}, new AAGlobal.HeroEquitiesChartConfig(), new AAGlobal.ScatterChartConfig(), AAGlobal.EquitiesScatterChartConfig.prototype, {

        DataLabelFormatter: function() {
            var me = new AAGlobal.EquitiesScatterChartConfig();
            var ShortDisplayName = me.ShortDisplayName;
            if (this.point[me.BenchmarkColumn]) {
                return   this.point[ShortDisplayName] ;
            }
            return this.point[ShortDisplayName];
        }
    });

    //** ENDS.. **/

    //** STARTS: Asset Allocation defaults Hero Charts of type 'COLUMN' for 'EQUITIES' Page  **/
    AAGlobal.EquitiesColumnChartConfig = function(currentDOM, category, hideDataLabels) {
        this.DOM = currentDOM;
        this.XField = 'ShortDisplayName';
        this.SpacingRight = 0;
        this.HideDataLabels = hideDataLabels;
        this.XAxis = {
            title: {
                text: 'Markets',
                offset: 10,
                style: {
                    fontFamily: '"Whitney A", "Whitney B"',
					fontStyle: 'italic',
					fontWeight: '400',
					color: '#898b8e',
					fontSize: '14px',
					lineHeight: '33px',
					letterSpacing: '0.5px'
                },
                enabled: true
            },
            lineColor: '#bfbfbf',
            gridLineWidth: 0,
            tickWidth: 0,
            minRange: 2,
            labels: {
                enabled: false
            }

        };

        this.Title = {
            text: '<Placeholder>',
            width: parseInt(this.Width) - 50,
            style: {
                color: '#152c4d',
                fontSize: (isiPad || window.innerWidth < 1341)?'1.4em':'34px',
                fontFamily: '"Chronicle Display A", "Chronicle Display B"',
                fontWeight: '600',
                lineHeight: (isiPad || window.innerWidth < 1341)?'1.4em':'44px',
                letterSpacing: '.2px'
            },
            align: 'left',
            x: 0,
            y: -138,
            floating: true
        };
        this.SubTitle = {
            text: '<Placeholder>',
            align: 'left',
            width: parseInt(this.Width) - 70,
            style: {
                color: '#2b2a2a',
                fontSize: (isiPad || window.innerWidth < 1341)?'.9em':'14px',
                fontFamily: '"Whitney A", "Whitney B"',
                fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: (isiPad || window.innerWidth < 1341)?'12px':'22px',
                textTransform: 'none'
            },
            x: 0,
            floating: true,
            y: -110
        };
    };
    AAGlobal.EquitiesColumnChartConfig.prototype = $.extend(true, {}, new AAGlobal.HeroColumnChartConfig(), AAGlobal.EquitiesColumnChartConfig.prototype, {


    });
    //** ENDS.. **/

    //#endregion

    //#region Core Overview Charts Configuration
    AAGlobal.HeroCoreOverviewChartConfig = function() {
        this.BenchmarkColumn = 'IsHubPoint';
        this.CategoryField = 'HubPortfolioName';
        this.InActiveOpacity = 0.1;
        this.Categories = [{
            Name: 'Core Bonds',
            Css: 'developedMkts',
            Label: 'Core Bonds',
            HoverColor: 'rgba(0,82,147, 0.5)',
            ActiveColor: 'rgba(0,82,147, 0.75)',
            InActiveColor: 'rgba(0,82,147, ' + this.InActiveOpacity + ')',
            ForeColor: 'rgb(0,82,147)',
            Symbol: 'circle',
            Rank: 2
        }, {
            Name: 'Credit',
            Css: 'usCredit',
            Label: 'Credit',
            HoverColor: 'rgba(158,87,179,0.5)',
            ActiveColor: 'rgba(158,87,179,0.75)',
            InActiveColor: 'rgba(158,87,179, ' + this.InActiveOpacity + ')',
            ForeColor: 'rgb(158,87,179)',
            Symbol: 'circle',
            Rank: 3
        }, {
            Name: 'Alternatives',
            Css: 'emergingMkts',
            Label: 'Alternatives',
            HoverColor: 'rgba(0,101,66, 0.5)',
            ActiveColor: 'rgba(0,101,66, 0.75)',
            InActiveColor: 'rgba(0,101,66, ' + this.InActiveOpacity + ')',
            ForeColor: 'rgb(0,101,66)',
            Symbol: 'circle',
            Rank: 4
        }, {
            Name: 'Equity',
            Css: 'usMkts',
            Label: 'Equity',
            HoverColor: 'rgba(175,0,0, 0.5)',
            ActiveColor: 'rgba(175,0,0, 0.75)',
            InActiveColor: 'rgba(175,0,0, ' + this.InActiveOpacity + ')',
            ForeColor: 'rgb(175,0,0)',
            Symbol: 'circle',
            Rank: 1
        }, {
            Name: 'US Cash',
            Css: 'cashMkts',
            Label: 'US Cash',
            HoverColor: 'rgba(42,42,42, 0.5)',
            ActiveColor: 'rgba(42,42,42, 0.75)',
            InActiveColor: 'rgba(42,42,42, ' + this.InActiveOpacity + ')',
            ForeColor: 'rgb(42,42,42)',
            Symbol: 'circle',
            Rank: 5
        }, {
            Name: 'model-portfolio',
            Css: 'portfolios',
            Label: 'Portfolio',
            HoverColor: 'rgba(244,176,0, 0.5)',
            ActiveColor: 'rgba(244,176,0, 0.75)',
            InActiveColor: 'rgba(244,176,0, ' + this.InActiveOpacity + ')',
            ForeColor: 'rgb(244,176,0)',
            Symbol: 'circle',
            Rank: 6
        }];
        this.Title = {
            text: '<Placeholder>',
            width: parseInt(this.Width) - 50,
            style: {
                color: '#152c4d',
                fontSize: (isiPad || window.innerWidth < 1341)?'1.4em':'34px',
                fontFamily: '"Chronicle Display A", "Chronicle Display B"',
                fontWeight: '600',
                lineHeight: (isiPad || window.innerWidth < 1341)?'1.4em':'44px',
                letterSpacing: '.2px'
            },
            align: 'left',
            x: 0,
            y: -138,
            floating: true
        };
        this.SubTitle = {
            text: '<Placeholder>',
            align: 'left',
            width: parseInt(this.Width) - 70,
            style: {
                color: '#2b2a2a',
                fontSize: (isiPad || window.innerWidth < 1341)?'.9em':'14px',
                fontFamily: '"Whitney A", "Whitney B"',
                fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: (isiPad || window.innerWidth < 1341)?'12px':'22px',
                textTransform: 'none'
            },
            x: 0,
            floating: true,
            y: -110
        };

        this.ColumnChartSubTitle = {
            text: '<Placeholder>',
            align: 'left',
            width: parseInt(this.Width) - 70,
            style: {
                color: '#2b2a2a',
                fontSize: '14px',
                fontStyle: 'normal',
                lineHeight: '22px',
                fontFamily: '"Whitney A", "Whitney B"',
                fontWeight: '400',
                textTransform: 'none'
            },
            x: 0,
            floating: true,
            y: -110
        };

        this.DrilldownChartSubTitle = {
            text: '<Placeholder>',
            align: 'left',
            width: parseInt(this.Width) - 70,
            style: {
                color: '#000000',
                fontSize: '14px',
                fontFamily: '"Whitney A", "Whitney B"',
                fontWeight: 'normal',
                textTransform: 'none'
            },
            x: 0,
            floating: true,
            y: -110
        };
    }
    AAGlobal.HeroCoreOverviewChartConfig.prototype = $.extend(true, {}, new AAGlobal.HeroChartConfig(), AAGlobal.HeroCoreOverviewChartConfig.prototype, {
        
		 Callback: function(chart) {
          /*  if(chart.userOptions.ExportConfig)
            {
				chart.options.tooltip = this.GetTooltip();
				chart.customTooltip = new Highcharts.Tooltip(chart, chart.options.tooltip);  
                chart.spacing[1] = 225;
                chart.setSize(chart.chartWidth, chart.chartHeight, doAnimation = true);
                var tooltipPoint = chart.series[chart.userOptions.CustomTooltipPoint.SeriesIndex].data[chart.userOptions.CustomTooltipPoint.PointIndex];
                chart.customTooltip.refresh(tooltipPoint);      
            }*/
            if (chart.userOptions.credits.LogoUrl) {

                // drawing logo
                chart.renderer.image(
                    chart.userOptions.credits.LogoUrl,
                    24,
                    650,
                    144,
                    48
                ).add();

                if (AAGlobal.StaggerDataLabels) {
                    AAGlobal.StaggerDataLabels(chart.series);
                }

            }

        }

	});

    AAGlobal.CoreOverviewScatterChartConfig = function(currentDOM, hideDataLabels) {
        this.DOM = currentDOM;
        this.HideDataLabels = hideDataLabels;
        this.LineWidth = 0;
        this.SpacingRight = 75;
        this.XField = 'Volatility';
        this.RegressionSlope = {
            Type: 'area',
            OriginCategory: {
                Name: 'US Cash',
                Css: 'cashMkts',
                Label: 'US Cash'
            },
            SlopeValues: [{
                Value: 0.2,
                Color: '#e4e4e4'
            }, {
                Value: 0.3,
                Color: '#f4f4f4'
            }]
        };

    };
    AAGlobal.CoreOverviewScatterChartConfig.prototype = $.extend(true, {}, new AAGlobal.HeroCoreOverviewChartConfig(), new AAGlobal.ScatterChartConfig(), AAGlobal.CoreOverviewScatterChartConfig.prototype, {


        DataLabelFormatter: function() {
            var me = new AAGlobal.CoreOverviewScatterChartConfig();
            var ShortDisplayName = me.ShortDisplayName;
            if (this.point[me.BenchmarkColumn]) {
                return '<b>' + this.point[ShortDisplayName] + '</b>';
            }
            return this.point[ShortDisplayName];
        }
    });
	
	AAGlobal.CoreOverviewScatterChartWithLineConfig = function(currentDOM, hideDataLabels) {

        this.DOM = currentDOM;
        this.HideDataLabels = hideDataLabels;
        this.LineWidth = 1;
    }
    AAGlobal.CoreOverviewScatterChartWithLineConfig.prototype = $.extend(true, {}, new AAGlobal.CoreOverviewScatterChartConfig(), AAGlobal.CoreOverviewScatterChartWithLineConfig.prototype, {

        CreateHighChartData: function(data) {
            var equitiesScatterChart = this;
            var interLineJoiningData = [];

            var benchmarkData = $.extend(true, {}, $.Enumerable.From(data).FirstOrDefault(null, function(record) {
                return record[equitiesScatterChart.BenchmarkColumn] == true && record[equitiesScatterChart.CategoryField] != equitiesScatterChart.RegressionSlope.OriginCategory.Name
            }));

            if (benchmarkData[equitiesScatterChart.BenchmarkColumn]) {
                equitiesScatterChart.ProcessPoint(benchmarkData);
            }

            $.each(data, function(pointIndex, point) {
                var modifiedPoint = $.extend(true, {}, point);
                if (modifiedPoint[equitiesScatterChart.BenchmarkColumn] != true) {
                    equitiesScatterChart.ProcessPoint(modifiedPoint);
                    interLineJoiningData.push(modifiedPoint);
                    if (benchmarkData != null) {
                        interLineJoiningData.push($.extend(true, {}, benchmarkData));
                        if (benchmarkData.marker) {
                            benchmarkData.marker.enabled = false;
                        }
                    }
                }

            });
            return interLineJoiningData;

        },

        ProcessPoint: function(modifiedPoint) {
            var equitiesScatterChart = this;
            modifiedPoint.x = modifiedPoint[equitiesScatterChart.XField];
            modifiedPoint.y = modifiedPoint[equitiesScatterChart.YField];
            if (modifiedPoint[equitiesScatterChart.BenchmarkColumn]) {
                modifiedPoint.marker = {
                    radius: equitiesScatterChart.BenchmarkMarkerRadius,
                    states: {
                        hover: {
                            radiusPlus: 4,
                            lineWidthPlus: 0,
                            radius: equitiesScatterChart.BenchmarkMarkerRadius
                        }
                    }
                };
            }

          
            var cte =  $.Enumerable.From(equitiesScatterChart.Categories).First(function(record) {
                return record.Name == modifiedPoint[equitiesScatterChart.CategoryField];
            }).FirstOrDefault();

              modifiedPoint.CssClass = cte.Css;
              modifiedPoint.ActiveColor = cte.ActiveColor;
        }

    });

    AAGlobal.CoreOverviewColumnChartConfig = function(currentDOM, category, hideDataLabels) {
        this.DOM = currentDOM;
        this.XField = 'ShortDisplayName';
        this.HideDataLabels = hideDataLabels;
        this.SpacingRight = 0;
        this.Categories = [{
            Name: 'Core Bonds',
            Css: 'developedMkts',
            Label: 'Core Bonds',
            ActiveColor: 'rgba(0,82,147, 1)',
            InActiveColor: 'rgba(0,82,147, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgb(96,172,233)',
            SecondaryInActiveColor: 'rgba(96,172,233,' + this.InActiveOpacity + ')',
            ForeColor: 'rgb(0,82,147)',
            Symbol: 'circle',
            Rank: 2
        }, {
            Name: 'Credit',
            Css: 'usCredit',
            Label: 'Credit',
            ActiveColor: 'rgba(26,14,29,1)',
            InActiveColor: 'rgba(26,14,29, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(158,87,179,1)',
            SecondaryInActiveColor: 'rgba(158,87,179,' + this.InActiveOpacity + ')',
            ForeColor: 'rgb(26,14,29)',
            Symbol: 'circle',
            Rank: 3
        }, {
            Name: 'Alternatives',
            Css: 'emergingMkts',
            Label: 'Alternatives',
            ActiveColor: 'rgba(0,55,36, 1)',
            InActiveColor: 'rgba(0,55,36, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgb(89,185,152)',
            SecondaryInActiveColor: 'rgba(89,185,152,' + this.InActiveOpacity + ')',
            ForeColor: 'rgb(0,101,66)',
            Symbol: 'circle',
            Rank: 4
        }, {
            Name: 'Equity',
            Css: 'usMkts',
            Label: 'Equity',
            ActiveColor: 'rgba(106,0,0, 1)',
            InActiveColor: 'rgba(106,0,0, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgb(206,0,0)',
            SecondaryInActiveColor: 'rgba(206,0,0,' + this.InActiveOpacity + ')',
            ForeColor: 'rgb(153,0,0)',
            Symbol: 'circle',
            Rank: 1
        }];
        this.XAxis = {

            title: {
                enabled: true,
                offset: 10,
                style: {
                    fontFamily: '"Whitney A", "Whitney B"',
					fontStyle: 'italic',
					fontWeight: '400',
					color: '#898b8e',
					fontSize: '14px',
					lineHeight: '33px',
					letterSpacing: '0.5px'
                },
                text: 'Asset Classes'
            },
            lineColor: '#bfbfbf',
            gridLineWidth: 0,
            tickWidth: 0,
            minRange: 2,
            labels: {
                enabled: false
            }

        };

        this.Title = {
            text: '<Placeholder>',
            width: parseInt(this.Width) - 50,
            style: {
                color: '#152c4d',
                fontSize: (isiPad || window.innerWidth < 1341)?'1.4em':'34px',
                fontFamily: '"Chronicle Display A", "Chronicle Display B"',
                fontWeight: '600',
                lineHeight: (isiPad || window.innerWidth < 1341)?'1.4em':'44px',
                letterSpacing: '.2px'
            },
            align: 'left',
            x: 0,
            y: -138,
            floating: true
        };
        this.SubTitle = {
            text: '<Placeholder>',
            align: 'left',
            width: parseInt(this.Width) - 70,
            style: {
                color: '#2b2a2a',
                fontSize: (isiPad || window.innerWidth < 1341)?'.9em':'14px',
                fontFamily: '"Whitney A", "Whitney B"',
                fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: (isiPad || window.innerWidth < 1341)?'12px':'22px',
                textTransform: 'none'
            },
            x: 0,
            floating: true,
            y: -110
        };
    };
    AAGlobal.CoreOverviewColumnChartConfig.prototype = $.extend(true, {}, new AAGlobal.HeroCoreOverviewChartConfig(), new AAGlobal.CoreOverviewBaseColumnChartConfig(), AAGlobal.CoreOverviewColumnChartConfig.prototype, {

    });

    //Portfolio
	AAGlobal.PortfoliosScatterChartConfig = function(currentDOM, hideDataLabels) {
        this.DOM = currentDOM;
        this.HideDataLabels = hideDataLabels;
        this.LineWidth = 0;
        this.SpacingRight = 75;
		this.Width = parseInt($('.container').width())-66;
		this.Height = 948;
		this.SpacingTop = 195;
        this.XField = 'Volatility';
        this.CategoryField = 'GroupName';
        this.InActiveOpacity = 0.1;
        this.Categories = [ {
            Name: 'EFFICIENT PORTFOLIO',
            Css: 'efficientMkts',
            Label: 'EFFICIENT',
			HoverColor: 'rgba(0,82,147, 0.5)',
			ActiveColor: 'rgba(0,82,147, 1)',
            InActiveColor: 'rgba(0,82,147, ' + this.InActiveOpacity + ')',
            ForeColor: 'rgb(0,82,147)',
            Symbol: 'circle',
            Rank: 2
        }, {
            Name: 'CUSTOM PORTFOLIO',
            Css: 'usMkts',
            Label: 'CUSTOM',
            HoverColor: 'rgba(175,0,0, 0.5)',
            ActiveColor: 'rgba(175,0,0, 0.75)',
            InActiveColor: 'rgba(175,0,0, ' + this.InActiveOpacity + ')',
            ForeColor: 'rgb(175,0,0)',
            Symbol: 'circle',
            Rank: 3
        }, {
            Name: 'MODEL PORTFOLIO',
            Css: 'portfolios',
            Label: 'MODEL',
            HoverColor: 'rgba(244,176,0, 0.5)',
            ActiveColor: 'rgba(244,176,0, 0.75)',
            InActiveColor: 'rgba(244,176,0, ' + this.InActiveOpacity + ')',
            ForeColor: 'rgb(244,176,0)',
            Symbol: 'circle',
            Rank: 1
        }];
		this.Title = {
            text: '<Placeholder>',
            width: parseInt(this.Width) - 50,
            style: {
                color: '#152c4d',
                fontSize: (isiPad || window.innerWidth < 1341)?'1.4em':'34px',
                fontFamily: '"Chronicle Display A", "Chronicle Display B"',
                fontWeight: '600',
                lineHeight: (isiPad || window.innerWidth < 1341)?'1.4em':'44px',
                letterSpacing: '.2px'
            },
            align: 'left',
            x: 0,
            y: -158,
            floating: true
        };
        this.SubTitle = {
            text: '<Placeholder>',
            align: 'left',
            width: parseInt(this.Width) - 70,
            style: {
                color: '#2b2a2a',
                fontSize: (isiPad || window.innerWidth < 1341)?'.9em':'14px',
                fontFamily: '"Whitney A", "Whitney B"',
                fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: (isiPad || window.innerWidth < 1341)?'12px':'22px',
                textTransform: 'none'
            },
            x: 0,
            floating: true,
            y: -130
        }
		this.EfficientFrontierConfig = {
            Type: 'spline',
            Color: '#8c8c8c',
            Text: 'Efficient Frontier'
        };
    };
    AAGlobal.PortfoliosScatterChartConfig.prototype = $.extend(true, {}, new AAGlobal.HeroEquitiesChartConfig(), new AAGlobal.ScatterChartConfig(),  AAGlobal.PortfoliosScatterChartConfig.prototype, {


        DataLabelFormatter: function() {
            var me = new AAGlobal.PortfoliosScatterChartConfig();
            var ShortDisplayName = me.ShortDisplayName;
            if (this.point[me.CategoryField] =="EFFICIENT PORTFOLIO") {
                return '';
            }
            return this.point[ShortDisplayName];
        }
    });
    
	
	 AAGlobal.PortfoliosColumnChartConfig = function(currentDOM, category, hideDataLabels) {
        this.DOM = currentDOM;
        this.XField = 'ShortDisplayName';
        this.HideDataLabels = hideDataLabels;
		 this.CategoryField = 'GroupName';
        this.SpacingRight = 0;
        this.Categories = [ {
            Name: 'EFFICIENT PORTFOLIO',
            Css: 'efficientMkts',
            Label: 'Efficient',
            HoverColor: 'rgba(0,82,147, 0.5)',
			ActiveColor: 'rgba(0,82,147, 1)',
            InActiveColor: 'rgba(0,82,147, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgb(96,172,233)',
            SecondaryInActiveColor: 'rgba(96,172,233,' + this.InActiveOpacity + ')',
            ForeColor: 'rgb(0,82,147)',   
            Symbol: 'circle',
            Rank: 2
        }, {
            Name: 'CUSTOM PORTFOLIO',
            Css: 'usMkts',
            Label: 'Custom',
            HoverColor: 'rgba(175,0,0, 0.5)',
            ActiveColor: 'rgba(175,0,0, 0.75)',
            InActiveColor: 'rgba(175,0,0, ' + this.InActiveOpacity + ')',
			SecondaryActiveColor: 'rgb(255, 77, 77)',
            SecondaryInActiveColor: 'rgba(255, 77, 77,.5)',
            ForeColor: 'rgb(175,0,0)',
            Symbol: 'circle',
            Rank: 3
        }, {
            Name: 'MODEL PORTFOLIO',
            Css: 'portfolios',
            Label: 'Model',
			ActiveColor: 'rgba(150,108,0,1)',
            InActiveColor: 'rgba(150,108,0, .1)',
            SecondaryActiveColor: 'rgb(244,176,0)',
            SecondaryInActiveColor: 'rgba(244,176,0,.5)',
            ForeColor: 'rgb(244,176,0)',
            Symbol: 'circle',
            Rank: 1
        }];
        this.XAxis = {

            title: {
                enabled: true,
                offset: 10,
                style: {
                    fontFamily: '"Whitney A", "Whitney B"',
					fontStyle: 'italic',
					fontWeight: '400',
					color: '#898b8e',
					fontSize: '14px',
					lineHeight: '33px',
					letterSpacing: '0.5px'
                },
                text: 'Portfolios'
            },
            lineColor: '#bfbfbf',
            gridLineWidth: 0,
            tickWidth: 0,
            minRange: 2,
            labels: {
                enabled: false
            }

        };

        this.Title = {
            text: '<Placeholder>',
            width: parseInt(this.Width) - 50,
            style: {
                color: '#152c4d',
                fontSize: (isiPad || window.innerWidth < 1341)?'1.4em':'34px',
                fontFamily: '"Chronicle Display A", "Chronicle Display B"',
                fontWeight: '600',
                lineHeight: (isiPad || window.innerWidth < 1341)?'1.4em':'44px',
                letterSpacing: '.2px'
            },
            align: 'left',
            x: 0,
            y: -158,
            floating: true
        };
        this.ColumnChartSubTitle = {
            text: '<Placeholder>',
            width: parseInt(this.Width) - 70,
            align: 'left',
            style: {
                color: '#000000',
                fontSize: '14px',
                fontFamily: '"Whitney A", "Whitney B"',
                fontWeight: 'normal',
                textTransform: 'none'
            },
            x: 0,
            floating: true,
            y: -130
        };
    };
    AAGlobal.PortfoliosColumnChartConfig.prototype = $.extend(true, {}, new AAGlobal.HeroCoreOverviewChartConfig(), AAGlobal.PortfoliosColumnChartConfig.prototype, {
 GetPlotOptions: function() {

            var plotOptions = {
                series: {
                    grouping: false,
                    dataGrouping: false,
                    events: {
                        legendItemClick: this.LegendItemClick,
						click: function(evt) {
                        var chartObj = this.chart;
                            chartObj.spacing[1] = 225;
                            chartObj.setSize(chartObj.containerWidth, chartObj.chartHeight, doAnimation = true);
                            chartObj.customTooltip.refresh(evt.point, evt);
                            CaptureAAAnalytics("Infographic-", "Callout", location.pathname);
                            RegisterTooltipClose();
                            var customTooltipPoint =  { SeriesIndex: evt.point.series.index, 
							PointIndex: evt.point.index ,ShortDisplayName :evt.point.ShortDisplayName
							};
                            chartObj.customTooltipPoint = customTooltipPoint;
                            PopulateExportChartConfig(chartObj, customTooltipPoint);
						}
                    },
                    pointWidth: 18,
                    groupPadding: 0,
                    pointPadding: 0,
                    shadow: false,
                    dataLabels: {
                        enabled: false,
                        customEnabled: !this.HideDataLabels,
						formatter: function(item)
						{	
							return this.x;
						}
                    }
                }
            };

            /*if (AAGlobal.FirstTimeLoad && $.browser.msie) {
                plotOptions.series.animation = false;
            }*/
            return plotOptions;
        },

        GetSeriesData: function(data) {
            var equitiesColumnChart = this;
            var seriesData = [];


            $.each(this.Categories, function(categoryIndex, categoryObject) {

                seriesData.push({
                    name: categoryObject.Name,
                    color: equitiesColumnChart.getVerticalGradientColor(categoryObject.Color, categoryObject.SecondaryColor),
                    CssClass: categoryObject.Css,
                    data: [],
                    enableMouseTracking: categoryObject.isActive
                });

            });
            var seriesDataEnumerable = $.Enumerable.From(seriesData);

            var categoryData = $.Enumerable.From(data).Where(function(record) {
                return record[equitiesColumnChart.CategoryField] != 'US Cash';
            });
            categoryData.ForEach(function(item, index) {
                var modifiedItem = $.extend(true, {}, item);
                modifiedItem.y = modifiedItem[equitiesColumnChart.YField];
				modifiedItem.XFieldValue = modifiedItem[equitiesColumnChart.XField];;
                var category = seriesDataEnumerable.FirstOrDefault(null, function(record) {
                    return record.name == modifiedItem[equitiesColumnChart.CategoryField];
                });
                if (category != null) {
                    if (modifiedItem.y < 0) {
                        modifiedItem.color = $.extend(true, {}, category.color, {
                            linearGradient: AAGlobal.NegativeVerticalGradient
                        });
                    }
                    modifiedItem.CssClass = category.CssClass;
                    category.data.push(modifiedItem);
                    category.added = true;
                }
                seriesDataEnumerable.Where(function(record) {
                    return record.name != item[equitiesColumnChart.CategoryField];
                }).ForEach(function(seriesDataObject, seriesDataIndex) {
                    seriesDataObject.data.push(null);
                });
            });
            return seriesDataEnumerable.Where('$.added==true').ToArray();
        },

        GetCategories: function(data) {

            return $.Enumerable.From(data).Select('$.' + this.XField).ToArray();
        },

        Callback: function(chart) {
            var series = chart.series;
			
			if(chart.userOptions.ExportConfig && chart.userOptions.CustomTooltipPoint)
            {
				chart.spacing[1] = 225;
				chart.setSize(chart.chartWidth, chart.chartHeight, doAnimation = true);
                var tooltipPoint = chart.series[chart.userOptions.CustomTooltipPoint.SeriesIndex].data[chart.userOptions.CustomTooltipPoint.PointIndex];
                var tooltip = GetTooltip(tooltipPoint);
				var tooltipPosition = TooltipPositioner(tooltipPoint);
				chart.renderer.label(
						tooltip,
						tooltipPosition.x,
						tooltipPosition.y,
						null, null, null, true, true,'activelabel'
					).add();     
            }

            if (chart.userOptions.credits.LogoUrl) {

                // drawing logo
                chart.renderer.image(
                    chart.userOptions.credits.LogoUrl,
                    24,//chart.plotLeft + chart.plotWidth - 149,
                    650,
                    144,
                    48
                ).add();
            }

           if (!chart.userOptions.plotOptions.series.dataLabels.customEnabled) {
                return;
            }
			
            $.each(series, function(seriesIndex, seriesObject) {

                if (seriesObject.options.enableMouseTracking) {
                    $.each(seriesObject.data, function(dataIndex, dataObject) {

                        if (dataObject.y != null) {
                            var currentHeight = 0;
                            var shapeArgs = dataObject.shapeArgs;
                            var barHeight = shapeArgs.height;
                            var textAnchor = 'end';
                            var translateOffset = 1;
                            var insidePadding = 8;
                            var outsidePadding = 8;
                            var opacityPaddingAdjust = 15;
                            var rotation = 0,
                                rotationField = 'custom';
                            // if (shapeArgs.x < 0 || shapeArgs.y < 0) {
                                // return;
                            // }
							   //chart.plotLeft + shapeArgs.x + shapeArgs.width / 2 + 5,
                              //  chart.plotTop + shapeArgs.y + barHeight + insidePadding
                            var paddingHorizontal = chart.plotLeft;
                            var xAxis0Left = seriesObject.yAxis.toPixels(0, false) - seriesObject.yAxis.left ;
							
							if (dataObject.y < 0) {
								
                                barHeight = -shapeArgs.height;
                                insidePadding = insidePadding * -1;
                                textAnchor = 'start';
                                translateOffset = -1;
                            }
							var textbox = chart.renderer.text(
                                dataObject.ShortDisplayName, 
								chart.plotLeft + barHeight  + xAxis0Left  - insidePadding,
								chart.plotTop + chart.plotHeight - shapeArgs.x - shapeArgs.width / 2 + 5
                            ).attr({
                                'zIndex': '5',
                                'class': 'data-labels-text',
                                'rotation': rotation,
                                'text-anchor': textAnchor
                                    //'transform' : 'translate(Math.abs(chart.plotLeft + shapeArgs.x + shapeArgs.width/ 2 + 5) + ' ' + Math.abs(chart.plotTop + shapeArgs.y + barHeight + insidePadding) + ')'
                            }).css({
                                fontSize: '13px',
                                color: '#fff',
                                fontFamily: '"Whitney A", "Whitney B"',
                                fontWeight: 'bold',
                                zoom: 1
                            }).add();
							currentHeight = shapeArgs.height;
                            var bBox = textbox.getBBox();
                            var element = $(textbox.element);
                            /*if ($.browser && $.browser.msie && $.browser.version < 9) {
                                paddingHorizontal -= 3;
                                if (dataObject.y >= 0)
                                    $(element).css('left', (parseInt($(element).css('left')) - bBox.width) + 'px');
                            }*/

                            if ((bBox.width + Math.abs(insidePadding) + opacityPaddingAdjust) > shapeArgs.height) {

                                var translateBack = bBox.width + Math.abs(insidePadding) + outsidePadding;

                                currentHeight = currentHeight + bBox.width;
                                
								var flip = (dataObject.y>0 && ( bBox.x + (translateOffset * (bBox.width + Math.abs(insidePadding) + outsidePadding)) > paddingHorizontal + chart.plotWidth))
									|| (dataObject.y <0 && (bBox.x + (translateOffset * (bBox.width + Math.abs(insidePadding) + outsidePadding)) < paddingHorizontal));
								
								
								if (flip) {
									   insidePadding = 8;
									   translateOffset = -translateOffset;
									   textAnchor = 'end';
									   translateBack = shapeArgs.height;									   
									   /*if ($.browser && $.browser.msie && $.browser.version < 9) {
										   $(element).css('left', (parseInt($(element).css('left')) + ((translateOffset) * (shapeArgs.height)) + 'px'));
									   }*/
                                } else {
                                    var indexer = 1;
                                    if (dataObject.y < 0) {
                                        indexer = -1;
                                    }
									/*if ($.browser && $.browser.msie && $.browser.version < 9) {
										   $(element).css('left', (parseInt($(element).css('left')) + (translateOffset * (bBox.width + opacityPaddingAdjust)) + 'px'));
									   }*/
                                }
                                element.attr('transform', 'translate(' + translateOffset * (translateBack) + ',0) ' + element.attr('transform'));
                                 element.css({
                                     'color': '#707070',
                                     fill: '#707070'
                                 });
                            } else {
                               /*if ($.browser && $.browser.msie && $.browser.version < 9) {
                                   $(element).css('background-color', 'transparent');
                               }*/
                            }

                        }
                    });
                }
            });
        },

        GetConfiguration: function(seriesData, categories) {
            var equitiesColumnChart = this;
            equitiesColumnChart.Credits.text = GetDisclaimerText(AAGlobal.CONFIG[configType]['Disclaimer']);
            return {
                chart: {
                    type: 'bar',
                    spacingRight: 25,
                    spacingTop: 195,
                    spacingLeft: 15,
                    spacingBottom: 70,
					marginTop: 210,
					marginBottom: 190,
                    style: {
                        'font-family': '"Whitney A", "Whitney B"',
                        'text-transform': 'uppercase'
                    },
                    events: {
                        redraw: function() {
                            window.setTimeout(function() {
                                $('.data-labels-text').remove();
                                equitiesColumnChart.Callback($(equitiesColumnChart.DOM).highcharts());
                            }, 500);
                        },
					load: function(){
                            this.customTooltip = new Highcharts.Tooltip(this, this.options.tooltip);  
                              
                        }
                    },
                    zoomType: equitiesColumnChart.GetZoomType()
                },
                title: equitiesColumnChart.Title,
                subtitle: equitiesColumnChart.ColumnChartSubTitle,
                xAxis: $.extend(equitiesColumnChart.XAxis, {
                    categories: categories
					
                }),
				
               yAxis: equitiesColumnChart.YAxis,
                legend: equitiesColumnChart.Legend,
                credits: equitiesColumnChart.Credits,
                exporting: equitiesColumnChart.Exporting,
                tooltip: equitiesColumnChart.GetTooltip(),
                plotOptions: this.GetPlotOptions(),
                series: seriesData
            };
        }

    });
    //#endregion


    //** ENDS.. **/

    //#region Fixed INcome Hero Chart Configuration

    //*** FIXED INCOME
    AAGlobal.FixedIncomeChartConfig = function() {
        this.InActiveOpacity = 0.1;
        this.Categories = [{
            Name: 'Core Bonds',
            Css: 'usTreasuary',
            Label: 'Core Bonds',
            ActiveColor: 'rgba(106,0,0, 1)',
            InActiveColor: 'rgba(106,0,0, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(206,0,0,1)',
            SecondaryInActiveColor: 'rgba(206,0,0,' + this.InActiveOpacity + ')',
            Color: 'rgb(175,0,0)',
            ForeColor: 'rgb(175,0,0)',
            Symbol: 'circle',
            Rank: 1
        }, {
            Name: 'Linkers',
            Css: 'usTips',
            Label: 'Linkers',
            ActiveColor: 'rgba(150,108,0,1)',
            InActiveColor: 'rgba(150,108,0, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(244,176,0,1)',
            SecondaryInActiveColor: 'rgba(244,176,0,' + this.InActiveOpacity + ')',
            Color: 'rgb(175,0,0)',
            ForeColor: 'rgb(175,0,0)',
            Symbol: 'circle',
            Rank: 2
        }, {
            Name: 'Credit',
            Css: 'usCredit',
            Label: 'Credit',
            ActiveColor: 'rgba(26,14,29,1)',
            InActiveColor: 'rgba(26,14,29, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(158,87,179,1)',
            SecondaryInActiveColor: 'rgba(158,87,179,' + this.InActiveOpacity + ')',
            Color: 'rgb(175,0,0)',
            ForeColor: 'rgb(175,0,0)',
            Symbol: 'circle',
            Rank: 3
        }];
    }
    AAGlobal.FixedIncomeChartConfig.prototype = $.extend(true, {}, AAGlobal.FixedIncomeChartConfig.prototype, {
      
    });

    AAGlobal.FixedIncomeScatterChartConfig = function(currentDOM, hideDataLabels) {
        this.DOM = currentDOM;
        this.HideDataLabels = hideDataLabels;
        this.Title = {
            text: '<Placeholder>',
            width: parseInt(this.Width) - 50,
            style: {
                color: '#152c4d',
                fontSize: (isiPad || window.innerWidth < 1341)?'1.4em':'34px',
                fontFamily: '"Chronicle Display A", "Chronicle Display B"',
                fontWeight: '600',
                lineHeight: (isiPad || window.innerWidth < 1341)?'1.4em':'44px',
                letterSpacing: '.2px'
             },
            align: 'left',
            x: 0,
            y: -138,
            floating: true
        };
        //this.Credits.text = AAGlobal.DISCLAIMER_CONFIG["FIXED_INCOME_HERO"].Credits;
        this.SubTitle = {
            text: '<Placeholder>',
            align: 'left',
            width: parseInt(this.Width) - 70,
            style: {
                color: '#2b2a2a',
                fontSize: (isiPad || window.innerWidth < 1341)?'.9em':'14px',
                fontFamily: '"Whitney A", "Whitney B"',
                fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: (isiPad || window.innerWidth < 1341)?'12px':'22px',
                textTransform: 'none'
            },
            x: 0,
            floating: true,
            y: -110
        };
        this.SpacingRight = 75;
        this.XField = 'Volatility';
        this.RegressionSlope = {
            Type: 'area',
            OriginCategory: {
                Name: 'US Cash',
                Css: 'cashMkts',
                Label: 'US Cash'
            },
            SlopeValues: [{
                Value: 0.2,
                Color: '#e4e4e4'
            }, {
                Value: 0.3,
                Color: '#f4f4f4'
            }]
        };
        this.InActiveOpacity = 0.1;
        this.Categories = [{
            Name: 'Core Bonds',
            Css: 'usTreasuary',
            Label: 'Core Bonds',
            ActiveColor: 'rgba(175,0,0, 0.75)',
            InActiveColor: 'rgba(106,0,0, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(206,0,0,1)',
            SecondaryInActiveColor: 'rgba(206,0,0,' + this.InActiveOpacity + ')',
            Color: 'rgb(175,0,0)',
            ForeColor: 'rgb(175,0,0)',
            Symbol: 'circle',
            Rank: 1
        }, {
            Name: 'Linkers',
            Css: 'usTips',
            Label: 'Linkers',
            ActiveColor: 'rgba(150,108,0,0.75)',
            InActiveColor: 'rgba(150,108,0, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(244,176,0,1)',
            SecondaryInActiveColor: 'rgba(244,176,0,' + this.InActiveOpacity + ')',
            Color: 'rgb(175,0,0)',
            ForeColor: 'rgb(175,0,0)',
            Symbol: 'circle',
            Rank: 2
        }, {
            Name: 'Credit',
            Css: 'usCredit',
            Label: 'Credit',
            ActiveColor: 'rgba(158,87,179,0.75)',
            InActiveColor: 'rgba(158,87,179, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(158,87,179,1)',
            SecondaryInActiveColor: 'rgba(158,87,179,' + this.InActiveOpacity + ')',
            Color: 'rgb(175,0,0)',
            ForeColor: 'rgb(175,0,0)',
            Symbol: 'circle',
            Rank: 3
        }, {
            Name: 'US Cash',
            Css: 'cashMkts',
            Label: 'US Cash',
            HoverColor: 'rgba(42,42,42, 0.5)',
            ActiveColor: 'rgba(42,42,42, 0.75)',
            InActiveColor: 'rgba(42,42,42, ' + this.InActiveOpacity + ')',
            ForeColor: 'rgb(42,42,42)',
            Symbol: 'circle',
            Rank: 6
        }];
    };
    AAGlobal.FixedIncomeScatterChartConfig.prototype = $.extend(true, {}, new AAGlobal.HeroChartConfig(), new AAGlobal.FixedIncomeChartConfig(), new AAGlobal.ScatterChartConfig(), AAGlobal.FixedIncomeScatterChartConfig.prototype, {

        DataLabelFormatter: function() {
            var me = new AAGlobal.FixedIncomeScatterChartConfig();
            var ShortDisplayName = me.ShortDisplayName;
            if (this.point[me.BenchmarkColumn]) {
                return '<b>' + this.point[ShortDisplayName] + '</b>';
            }
            return this.point[ShortDisplayName];
        }
    });

    AAGlobal.FixedIncomeColumnChartConfig = function(currentDOM, category, hideDataLabels) {
        this.DOM = currentDOM;
        this.XField = 'ShortDisplayName';
        this.SpacingRight = 0;
        this.HideDataLabels = hideDataLabels;
        //this.Credits.text = AAGlobal.DISCLAIMER_CONFIG["FIXED_INCOME_HERO"].Credits;
        this.XAxis = {
            title: {
                text: 'Markets',
                offset: 10,
                style: {
					fontFamily: '"Whitney A", "Whitney B"',
					fontStyle: 'italic',
					fontWeight: '400',
					color: '#898b8e',
					fontSize: '14px',
					lineHeight: '33px',
					letterSpacing: '0.5px'
                },
                enabled: true
            },
            lineColor: '#bfbfbf',
            gridLineWidth: 0,
            tickWidth: 0,
            minRange: 2,
            labels: {
                enabled: false
            }

        };

        this.Title = {
            text: '<Placeholder>',
            width: parseInt(this.Width) - 50,
            style: {
                color: '#152c4d',
                fontSize: (isiPad || window.innerWidth < 1341)?'1.4em':'34px',
                fontFamily: '"Chronicle Display A", "Chronicle Display B"',
                fontWeight: '600',
                lineHeight: (isiPad || window.innerWidth < 1341)?'1.4em':'44px',
                letterSpacing: '.2px'
            },
            align: 'left',
            x: 0,
            y: -138,
            floating: true
        };
        this.SubTitle = {
            text: '<Placeholder>',
            width: parseInt(this.Width) - 70,
            align: 'left',
            style: {
                color: '#2b2a2a',
                fontSize: (isiPad || window.innerWidth < 1341)?'.9em':'14px',
                fontFamily: '"Whitney A", "Whitney B"',
                fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: (isiPad || window.innerWidth < 1341)?'12px':'22px',
                textTransform: 'none'
            },
            x: 0,
            floating: true,
            y: -110
        };

    };
    AAGlobal.FixedIncomeColumnChartConfig.prototype = $.extend(true, {}, new AAGlobal.HeroColumnChartConfig(), new AAGlobal.FixedIncomeChartConfig(), AAGlobal.FixedIncomeColumnChartConfig.prototype, {


    });
    //** ENDS.. **/
    //#endregion


    //#region Currencies Chart Configuration
    //*** Currencies **//

    AAGlobal.CurrenciesChartConfig = function() {}

    AAGlobal.CurrenciesChartConfig.prototype = $.extend(true, {}, AAGlobal.CurrenciesChartConfig.prototype, {

    });

    AAGlobal.CurrenciesScatterChartConfig = function(currentDOM, hideDataLabels) {
        this.DOM = currentDOM;
        this.HideDataLabels = hideDataLabels;
        this.Title = {
            text: '<Placeholder>',
            width: parseInt(this.Width) - 50,
            style: {
                color: '#152c4d',
                fontSize: (isiPad || window.innerWidth < 1341)?'1.4em':'34px',
                fontFamily: '"Chronicle Display A", "Chronicle Display B"',
                fontWeight: '600',
                lineHeight: (isiPad || window.innerWidth < 1341)?'1.4em':'44px',
                letterSpacing: '.2px'
            },
            align: 'left',
            x: 0,
            y: -138,
            floating: true
        };
        this.SubTitle = {
           text: '<Placeholder>',
            align: 'left',
            width: parseInt(this.Width) - 70,
            style: {
                color: '#2b2a2a',
                fontSize: (isiPad || window.innerWidth < 1341)?'.9em':'14px',
                fontFamily: '"Whitney A", "Whitney B"',
                fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: (isiPad || window.innerWidth < 1341)?'12px':'22px',
                textTransform: 'none'
            },
            x: 0,
            floating: true,
            y: -110
        };
        this.SpacingRight = 75;
        this.XField = 'Volatility';
        
        this.InActiveOpacity = 0.1;
         this.Categories = [{
            Name: 'US',
            Css: 'usMkts',
            Label: 'US',
            HoverColor: 'rgba(175,0,0, 0.5)',
            ActiveColor: 'rgba(175,0,0, 0.75)',
            InActiveColor: 'rgba(106,0,0, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgb(206,0,0)',
            SecondaryInActiveColor: 'rgba(206,0,0,' + this.InActiveOpacity + ')',
            ForeColor: 'rgba(175,0,0,1)',
            Symbol: 'circle',
            Rank: 1
        }, {
            Name: 'Developed Markets',
            Css: 'developedMkts',
            Label: 'Developed Markets',
            ActiveColor: 'rgba(0,82,147, 0.75)',
            InActiveColor: 'rgba(0,82,147, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(96,172,233,1)',
            SecondaryInActiveColor: 'rgba(96,172,233,' + this.InActiveOpacity + ')',
            Color: 'rgb(0,82,147)',
            ForeColor: 'rgb(0,82,147)',
            Symbol: 'circle',
            Rank: 2
        }, {
            Name: 'Emerging Markets',
            Css: 'emergingMkts',
            Label: 'Emerging Markets',
            ActiveColor: 'rgba(0,101,66, 0.75)',
            InActiveColor: 'rgba(0,101,66, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(89,185,152,1)',
            SecondaryInActiveColor: 'rgba(89,185,152,' + this.InActiveOpacity + ')',
            Color: 'rgb(0,101,66)',
            ForeColor: 'rgb(0,101,66)',
            Symbol: 'circle',
            Rank: 3
        }];
    };

 AAGlobal.CurrenciesScatterChartConfig.prototype = $.extend(true, {}, new AAGlobal.HeroChartConfig(), new AAGlobal.ScatterChartConfig(), AAGlobal.CurrenciesScatterChartConfig.prototype, {

        DataLabelFormatter: function() {
            var me = new AAGlobal.CurrenciesScatterChartConfig();
            var ShortDisplayName = me.ShortDisplayName;
            if (this.point[me.BenchmarkColumn]) {
                return '<b>' + this.point[ShortDisplayName] + '</b>';
            }
            return this.point[ShortDisplayName];
        }
    });
    AAGlobal.CurrenciesColumnChartConfig = function(currentDOM, category, hideDataLabels) {
        this.DOM = currentDOM;
        this.XField = 'ShortDisplayName';
        this.HideDataLabels = hideDataLabels;
        this.SpacingRight = 0;
        this.XAxis = {
            title: {
                text: 'Markets',
                offset: 10,
                style: {
                    fontFamily: '"Whitney A", "Whitney B"',
					fontStyle: 'italic',
					fontWeight: '400',
					color: '#898b8e',
					fontSize: '14px',
					lineHeight: '33px',
					letterSpacing: '0.5px'
                },
                enabled: true
            },
            lineColor: '#bfbfbf',
            gridLineWidth: 0,
            tickWidth: 0,
            minRange: 2,
            labels: {
                enabled: false
            }

        };
        //this.Credits.text = AAGlobal.DISCLAIMER_CONFIG["CURRENCIES_HERO"].Credits;
        this.Categories = [{
            Name: 'US',
            Css: 'usMkts',
            Label: 'US',
            HoverColor: 'rgba(175,0,0, 0.5)',
            ActiveColor: 'rgba(106,0,0, 1)',
            InActiveColor: 'rgba(106,0,0, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgb(206,0,0)',
            SecondaryInActiveColor: 'rgba(206,0,0,' + this.InActiveOpacity + ')',
            ForeColor: 'rgba(175,0,0,1)',
            Symbol: 'circle',
            Rank: 1
        }, {
            Name: 'Developed Markets',
            Css: 'developedMkts',
            Label: 'Developed Markets',
            ActiveColor: 'rgba(0,82,147, 1)',
            InActiveColor: 'rgba(0,82,147, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(96,172,233,1)',
            SecondaryInActiveColor: 'rgba(96,172,233,' + this.InActiveOpacity + ')',
            Color: 'rgb(0,82,147)',
            ForeColor: 'rgb(0,82,147)',
            Symbol: 'circle',
            Rank: 2
        }, {
            Name: 'Emerging Markets',
            Css: 'emergingMkts',
            Label: 'Emerging Markets',
            ActiveColor: 'rgba(0,55,36, 1)',
            InActiveColor: 'rgba(0,55,36, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(89,185,152,1)',
            SecondaryInActiveColor: 'rgba(89,185,152,' + this.InActiveOpacity + ')',
            Color: 'rgb(0,101,66)',
            ForeColor: 'rgb(0,101,66)',
            Symbol: 'circle',
            Rank: 3
        }];
        this.Title = {
            text: '<Placeholder>',
            width: parseInt(this.Width) - 50,
            style: {
                color: '#152c4d',
                fontSize: (isiPad || window.innerWidth < 1341)?'1.4em':'34px',
                fontFamily: '"Chronicle Display A", "Chronicle Display B"',
                fontWeight: '600',
                lineHeight: (isiPad || window.innerWidth < 1341)?'1.4em':'44px',
                letterSpacing: '.2px'
            },
            align: 'left',
            x: 0,
            y: -138,
            floating: true
        };
        this.SubTitle = {
            text: '<Placeholder>',
            align: 'left',
            width: parseInt(this.Width) - 70,
            style: {
                color: '#2b2a2a',
                fontSize: (isiPad || window.innerWidth < 1341)?'.9em':'14px',
                fontFamily: '"Whitney A", "Whitney B"',
                fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: (isiPad || window.innerWidth < 1341)?'12px':'22px',
                textTransform: 'none'
            },
            x: 0,
            floating: true,
            y: -110
        };

    };

    AAGlobal.CurrenciesColumnChartConfig.prototype = $.extend(true, {}, new AAGlobal.HeroColumnChartConfig(), new AAGlobal.CurrenciesChartConfig(), AAGlobal.CurrenciesColumnChartConfig.prototype, {


    });
    //*** Currencies End **//
    //#endregion
    //*** Commodities Begin ***//

    //#region Commodities Chart Configuration
    //** COMMODITIES : STARTS ..**/
    AAGlobal.CommoditiesChartConfig = function() {

    }
    AAGlobal.CommoditiesChartConfig.prototype = $.extend(true, {}, AAGlobal.CommoditiesChartConfig.prototype, {
       
    });


    AAGlobal.CommoditiesScatterChartConfig = function(currentDOM, hideDataLabels) {
        this.DOM = currentDOM;
        this.HideDataLabels = hideDataLabels;
        this.Title = {
            text: '<Placeholder>',
            width: parseInt(this.Width) - 50,
            style: {
                color: '#152c4d',
                fontSize: (isiPad || window.innerWidth < 1341)?'1.4em':'34px',
                fontFamily: '"Chronicle Display A", "Chronicle Display B"',
                fontWeight: '600',
                lineHeight: (isiPad || window.innerWidth < 1341)?'1.4em':'44px',
                letterSpacing: '.2px'
            },
            align: 'left',
            x: 0,
            y: -138,
            floating: true
        };
        this.SubTitle = {
            text: '<Placeholder>',
            align: 'left',
            width: parseInt(this.Width) - 70,
            style: {
                color: '#2b2a2a',
                fontSize: (isiPad || window.innerWidth < 1341)?'.9em':'14px',
                fontFamily: '"Whitney A", "Whitney B"',
                fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: (isiPad || window.innerWidth < 1341)?'12px':'22px',
                textTransform: 'none'
            },
            x: 0,
            floating: true,
            y: -110
        };
        this.SpacingRight = 75;
        this.XField = 'Volatility';
        
        this.InActiveOpacity = 0.1;
        this.CategoryField = 'GroupName';
        this.Categories = [{
            Name: 'Indices',
            Css: 'comIndices',
            Label: 'Indices',
            HoverColor: 'rgba(158,87,179,0.5)',
            ActiveColor: 'rgba(158,87,179,1)',
            InActiveColor: 'rgba(158,87,179, ' + this.InActiveOpacity + ')',
            ForeColor: 'rgb(158,87,179)',
            Symbol: 'circle',
            Rank: 3
        }, {
            Name: 'Agriculture',
            Css: 'comAgriculture',
            Label: 'Agriculture',
            HoverColor: 'rgb(0,101,66,0.5)',
            ForeColor: 'rgb(0,101,66)',
            ActiveColor: 'rgba(0,101,66, 0.75)',
            InActiveColor: 'rgba(0,101,66, ' + this.InActiveOpacity + ')',
            Symbol: 'circle',
            Rank: 5
        }, {
            Name: 'Livestock',
            Css: 'comLivestock',
            Label: 'LiveStock',
            HoverColor: 'rgba(206,0,0,0.5)',
            ActiveColor: 'rgba(206,0,0,1)',
            InActiveColor: 'rgba(206,0,0,' + this.InActiveOpacity + ')',
            ForeColor: 'rgb(206,0,0)',
            Symbol: 'circle',
            Rank: 1
        }, {
            Name: 'Precious Metals',
            Css: 'comPreciousMetals',
            Label: 'Precious Metals',
            HoverColor: 'rgb(244,176,0, 0.5)',
            ForeColor: 'rgb(244,176,0)',
            ActiveColor: 'rgba(244,176,0, 0.75)',
            InActiveColor: 'rgba(244,176,0, ' + this.InActiveOpacity + ')',
           Symbol: 'circle',
            Rank: 2
        }, {
            Name: 'Metals',
            Css: 'comMetals',
            Label: 'Base Metals',
            HoverColor: 'rgb(0,82,147,0.5)',
            ForeColor: 'rgb(0,82,147)',
            ActiveColor: 'rgba(0,82,147, 0.75)',
            InActiveColor: 'rgba(0,82,147, ' + this.InActiveOpacity + ')',
            Symbol: 'circle',
            Rank: 4
        }, {
            Name: 'Energy',
            Css: 'comEnergy',
            Label: 'Energy',
            HoverColor: 'rgb(0,153,153,0.5)',
            ForeColor: 'rgb(0,153,153)',
            ActiveColor: 'rgba(0,153,153, 0.75)',
            InActiveColor: 'rgba(0,153,153, ' + this.InActiveOpacity + ')',
            Symbol: 'circle',
            Rank: 6
        }];

    };

 AAGlobal.CommoditiesScatterChartConfig.prototype = $.extend(true, {}, new AAGlobal.HeroChartConfig(), new AAGlobal.ScatterChartConfig(), new AAGlobal.CommoditiesChartConfig(), 

AAGlobal.CommoditiesScatterChartConfig.prototype, {

        DataLabelFormatter: function() {
            var me = new AAGlobal.FixedIncomeScatterChartConfig();
            var ShortDisplayName = me.ShortDisplayName;
            if (this.point[me.BenchmarkColumn]) {
                return '<b>' + this.point[ShortDisplayName] + '</b>';
            }
            return this.point[ShortDisplayName];
        }
    });

    AAGlobal.CommoditiesColumnChartConfig = function(currentDOM, category, hideDataLabels) {
        this.DOM = currentDOM;
        this.XField = 'ShortDisplayName';
        this.SpacingRight = 0;
        this.HideDataLabels = hideDataLabels;
        //this.Credits.text = AAGlobal.DISCLAIMER_CONFIG["COMMODITIES_HERO"].Credits;
        this.XAxis = {
            title: {
                text: 'Commodities',
                offset: 10,
                style: {
                    fontFamily: '"Whitney A", "Whitney B"',
					fontStyle: 'italic',
					fontWeight: '400',
					color: '#898b8e',
					fontSize: '14px',
					lineHeight: '33px',
					letterSpacing: '0.5px'
                },
                enabled: true
            },
            lineColor: '#bfbfbf',
            gridLineWidth: 0,
            tickWidth: 0,
            minRange: 1,
            labels: {
                enabled: false
            }

        };
        this.YAxis = {
            title: {
                text: 'Real Expected Returns (Unhedged USD)',
                style: {
                    fontFamily: '"Whitney A", "Whitney B"',
					fontStyle: 'italic',
					fontWeight: '400',
					color: '#898b8e',
					fontSize: '14px',
					lineHeight: '33px',
					letterSpacing: '0.5px'
                },
                enabled: true
            },
            gridLineWidth: 0,
            lineWidth: 1,
            endOnTick: true,
            maxPadding: 0,
            startOnTick: true,
            minPadding: 0,
            lineColor: '#bfbfbf',
            minRange: 2,
            plotLines: [{
                color: '#bfbfbf',
                width: 1,
                value: 0,
                zIndex: 5
            }],
            labels: {
                format: '{value}%',
                style: {
                    fontFamily: '"Whitney A", "Whitney B"',
					fontStyle: 'italic',
					fontWeight: '400',
					color: '#898b8e',
					fontSize: '14px',
					lineHeight: '33px',
					letterSpacing: '.5px'
                }
            }
        };
        this.CategoryField = 'GroupName';
        this.Categories = [{
            Name: 'Indices',
            Css: 'comIndices',
            Label: 'Indices',
            Color: 'rgb(0,82,147)',
            ForeColor: 'rgb(0,82,147)',
            ActiveColor: 'rgba(26,14,29,0.75)',
            InActiveColor: 'rgba(26,14,29,' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(158,87,179,1)',
            SecondaryInActiveColor: 'rgba(158,87,179,' + this.InActiveOpacity + ')',
            Symbol: 'circle',
            Rank: 3
        }, {
            Name: 'Agriculture',
            Css: 'comAgriculture',
            Label: 'Agriculture',
            Color: 'rgb(10,171,5)',
            ForeColor: 'rgb(0,101,66)',
            ActiveColor: 'rgba(0,101,66, 0.75)',
            InActiveColor: 'rgba(0,101,66, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(89,185,152,1)',
            SecondaryInActiveColor: 'rgba(89,185,152,' + this.InActiveOpacity + ')',
            Symbol: 'circle',
            Rank: 5
        }, {
            Name: 'Livestock',
            Css: 'comLivestock',
            Label: 'LiveStock',
            Color: 'rgb(153,0,0)',
            ForeColor: 'rgb(175,0,0)',
            ActiveColor: 'rgba(106,0,0, 0.75)',
            InActiveColor: 'rgba(106,0,0, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(206,0,0,1)',
            SecondaryInActiveColor: 'rgba(206,0,0,' + this.InActiveOpacity + ')',
            Symbol: 'circle',
            Rank: 1
        }, {
            Name: 'Precious Metals',
            Css: 'comPreciousMetals',
            Label: 'Precious Metals',
            Color: 'rgb(42,42,42)',
            ForeColor: 'rgb(42,42,42)',
            ActiveColor: 'rgba(244,176,0, 0.75)',
            InActiveColor: 'rgba(244,176,0, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(244,176,0, 0.75)',
            SecondaryInActiveColor: 'rgba(251,233,187,' + this.InActiveOpacity + ')',
            Symbol: 'circle',
            Rank: 2
        }, {
            Name: 'Metals',
            Css: 'comMetals',
            Label: 'Base Metals',
            Color: 'rgb(42,42,42)',
            ForeColor: 'rgb(42,42,42)',
            ActiveColor: 'rgba(0,82,147, 0.75)',
            InActiveColor: 'rgba(0,82,147, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(96,172,233,1)',
            SecondaryInActiveColor: 'rgba(96,172,233,' + this.InActiveOpacity + ')',
            Symbol: 'circle',
            Rank: 4
        }, {
            Name: 'Energy',
            Css: 'comEnergy',
            Label: 'Energy',
            Color: 'rgb(42,42,42)',
            ForeColor: 'rgb(42,42,42)',
            ActiveColor: 'rgba(0,153,153, 0.75)',
            InActiveColor: 'rgba(0,153,153, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(0,153,153, 0.75)',
            SecondaryInActiveColor: 'rgba(214,246,250,' + this.InActiveOpacity + ')',
            Symbol: 'circle',
            Rank: 6
        }];
        this.Title = {
            text: '<Placeholder>',
            width: parseInt(this.Width) - 50,
            style: {
                color: '#152c4d',
                fontSize: (isiPad || window.innerWidth < 1341)?'1.4em':'34px',
                fontFamily: '"Chronicle Display A", "Chronicle Display B"',
                fontWeight: '600',
                lineHeight: (isiPad || window.innerWidth < 1341)?'1.4em':'44px',
                letterSpacing: '.2px'
            },
            align: 'left',
            x: 0,
            y: -142,
            floating: true
        };
        this.SubTitle = {
            text: '<Placeholder>',
            align: 'left',
            width: parseInt(this.Width) - 70,
            style: {
                color: '#2b2a2a',
                fontSize: (isiPad || window.innerWidth < 1341)?'.9em':'14px',
                fontFamily: '"Whitney A", "Whitney B"',
                fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: (isiPad || window.innerWidth < 1341)?'12px':'22px',
                textTransform: 'none'
            },
            x: 0,
            floating: true,
            y: -110
        };
    };
    AAGlobal.CommoditiesColumnChartConfig.prototype = $.extend(true, {}, new AAGlobal.HeroColumnChartConfig(), new AAGlobal.CommoditiesChartConfig(), AAGlobal.CommoditiesColumnChartConfig.prototype, {


    });

    //** Commodities End **//
    //#endregion
    //#region Heat Map Chart COnfiguration
    //** RISK HEATMAP BEGIN **//
    AAGlobal.RisksHeatMapChartConfig = function(correlationType, hideDataLabels) {
        
        this.CategoryField = 'DataType';
        this.HideDataLabels = hideDataLabels;
        this.InActiveOpacity = 0.1;
        this.Categories = [{
            Name: 'FORECASTED',
            Css: 'comMetals',
            Label: 'Base Metals',
            Color: 'rgb(42,42,42)',
            ForeColor: 'rgb(42,42,42)',
            ActiveColor: 'rgba(118,113,113, 0.75)',
            InActiveColor: 'rgba(118,113,113, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(229,227,227,1)',
            SecondaryInActiveColor: 'rgba(229,227,227,' + this.InActiveOpacity + ')',
            Symbol: 'circle',
            Rank: 5
        }, {
            Name: 'HISTORICAL',
            Css: 'comEnergy',
            Label: 'Energy',
            Color: 'rgb(42,42,42)',
            ForeColor: 'rgb(42,42,42)',
            ActiveColor: 'rgba(255,51,0, 0.75)',
            InActiveColor: 'rgba(255,51,0, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(250,212,202,1)',
            SecondaryInActiveColor: 'rgba(250,212,202,' + this.InActiveOpacity + ')',
            Symbol: 'circle',
            Rank: 6
        }];
        this.Fields = {
            "As of Date": function(data) {
                return ((data.DataDate) ? $.datepicker.formatDate('mm/yy', $.datepicker.parseDate('yy-mm-dd', data.DataDate.split('T')[0])) : "-")
            },
            'Time Horizon': function(data) {
                return data.DataType;
            },
            'Index': function(data) {
                return data.PIShortDisplayName;
            },
            'Secondary Index': function(data) {
                return data.SIShortDisplayName;
            },
            'Correlation': function(data) {
                return data.Correlation;
            }

        };
        this.ExportConfig = {
            PivotField: 'Secondary Index',
            OrderField: 'Index',
            ValueField: 'Correlation',
        };
        this.Title = {
            text: '<Placeholder>',
            width: parseInt(this.Width) - 50,
            style: {
                color: '#152c4d',
                fontSize: (isiPad || window.innerWidth < 1341)?'1.4em':'34px',
                fontFamily: '"Chronicle Display A", "Chronicle Display B"',
                fontWeight: '600',
                lineHeight: (isiPad || window.innerWidth < 1341)?'1.4em':'44px',
                letterSpacing: '.2px'
            },
            align: 'left',
            y: -138,
            x: 0,
            floating: true
        };
        this.Tooltip = {
            enabled: false
        };
        this.XAxis = {
            title: {
                enabled: false
            },
            labels: {
                rotation: -65,
                style: {
                    fontFamily: '"Whitney A", "Whitney B"',
					fontStyle: 'italic',
					fontWeight: '400',
					color: '#898b8e',
					fontSize: '14px',
					lineHeight: '33px',
					letterSpacing: '.5px'
                },
            },
            offset: 80,
            lineWidth: 0,
            gridLineWidth: 0,
            tickWidth: 0


        };

        this.YAxis = {
            title: {
                enabled: false
            },
            labels: {
                overflow: 'justify',
                step: 1,
                style: {
                    fontFamily: '"Whitney A", "Whitney B"',
					fontStyle: 'italic',
					fontWeight: '400',
					color: '#898b8e',
					fontSize: '14px',
					lineHeight: '33px',
					letterSpacing: '0.5px'
                },
            },
            lineWidth: 0,
            gridLineWidth: 0,
            tickWidth: 0
        };

        this.SubTitle = {
            text: '<Placeholder>',
            align: 'left',
            width: parseInt(this.Width) - 70,
            style: {
                color: '#2b2a2a',
                fontSize: (isiPad || window.innerWidth < 1341)?'.9em':'14px',
                fontFamily: '"Whitney A", "Whitney B"',
                fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: (isiPad || window.innerWidth < 1341)?'12px':'22px',
                textTransform: 'none'
            },
            x: 0,
            floating: true,
            y: -110
        };
        this.Width =  parseInt($('.container').width())-66;
        //this.Height = '1198';

        this.CorrelationType = correlationType || 'HISTORICAL';
        this.Legend = {
            align: 'left',
            layout: 'horizontal',
            margin: 0,
            floating: true,
            labelFormat: ' ',
            symbolWidth: 32,
            symbolHeight: 10,
            symbolPadding: 0,
            padding: 0,
            itemWidth: 32,
            verticalAlign: 'top',
            y: 20,
            x: 540
        };

        this.Credits = {
            enabled: true,
            //text: AAGlobal.DISCLAIMER_CONFIG["RISK_HERO"].Credits,
            useHtml: true,
            position: {
                align: 'left',
                verticalAlign: 'bottom',
                x: 20,
                y: -45
            },
            style: {
                'width': parseInt(this.Width) - 20,
                cursor: 'default',
                'text-transform': 'none'
            },
            href: ''
        };
        this.SpacingRight = 0;
        this.Exporting = {
            sourceWidth: 850,
            sourceHeight: 666,
            scale: 1
        };

        this.ColorAxis = {
            dataClasses: [{
                from: -1.0,
                to: -0.8,
                color: '#225b01'
            }, {
                from: -0.8,
                to: -0.6,
                color: '#46791a'
            }, {
                from: -0.6,
                to: -0.4,
                color: '#6a9833'
            }, {
                from: -0.4,
                to: -0.2,
                color: '#8eb64b'
            }, {
                from: -0.2,
                to: 0,
                color: '#b2d464'
            }, {
                from: 0,
                to: 0.2,
                color: '#b1ddf6'
            }, {
                from: 0.2,
                to: 0.4,
                color: '#8ab1cc'
            }, {
                from: 0.4,
                to: 0.6,
                color: '#6385a2'
            }, {
                from: 0.6,
                to: 0.8,
                color: '#3c5877'
            }, {
                from: 0.8,
                to: 1.0,
                color: '#152c4d'
            }]
        };
    };

    AAGlobal.RisksHeatMapChartConfig.prototype = $.extend({}, AAGlobal.RisksHeatMapChartConfig.prototype, {
        LegendItemClick: function(event) {
            return false;
        },
        GetPlotOptions: function() {
            return {
                heatmap: {

                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                }
            };
        },

        FindColorByCorrelation: function(correlation) {
            var dataClasses = this.ColorAxis.dataClasses;
            var color = '';
            $.each(dataClasses, function(dataClassIndex, dataClass) {
                if (correlation >= dataClass.from && correlation <= dataClass.to) {
                    color = dataClass.color;
                }
            });
            var rgb = hexToRgb(color);
            return color = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0.5)';
        },

        GetSeriesData: function(correlationData, volatilityData) {
            var equitiesColumnChart = this;
            var categories = this.GetCategories(correlationData, volatilityData);

            var primaryCategoryIndexObject = {};
            $.each(categories, function(index, value) {
                primaryCategoryIndexObject[value] = index;
            });

            var secondaryCategoryIndexObject = {};
            $.each(categories.reverse(), function(index, value) {
                secondaryCategoryIndexObject[value] = index;
            });

            var seriesCollection = $.Enumerable.From(correlationData).Where('$.DataType=="' + this.CorrelationType + '"').ToArray();

            var seriesData = [];

            $.each(seriesCollection, function(index, value) {

                var dataObject = {
                    x: primaryCategoryIndexObject[value.PIShortDisplayName],
                    y: secondaryCategoryIndexObject[value.SIShortDisplayName],
                    value: value.Correlation,
                    marker: {
                        radius: 0,
                        states: {
                            hover: {
                                color: equitiesColumnChart.FindColorByCorrelation(value.Correlation),
                                radiusPlus: 0
                            }
                        }
                    },

                };
                dataObject.TwoDecimalY = dataObject.value.toAbsFixed(2);

                if (Number(dataObject.TwoDecimalY) == 0) {
                    dataObject.value = 0;
                }

                seriesData.push($.extend(true, {}, value, dataObject));

            });

            return seriesData;

        },

        SetVolatilityData: function(volatilityData) {
            var currentVolatilityData = $.Enumerable.From(volatilityData).Where('$.DataType=="EXPECTED VOLATILITY"').OrderByDescending('$.DataDate').Distinct('$.ReferenceCode').ToArray();
            var historicVolatilityData = $.Enumerable.From(volatilityData).Where('$.DataType=="HISTORICAL VOLATILITY"').OrderByDescending('$.DataDate').Distinct('$.ReferenceCode').ToArray();
            this.VolatilityData = [{
                name: 'EXPECTED VOLATILITY',
                value: currentVolatilityData
            }, {
                name: 'HISTORICAL VOLATILITY',
                value: historicVolatilityData
            }];
        },


        GetCategories: function(correlationData, volatilityData) {
            this.SetVolatilityData(volatilityData);
            return $.Enumerable.From(correlationData).OrderBy('$.DisplayOrder').Select('$.PIShortDisplayName').Distinct().ToArray();
        },
        Callback: function(chart) {
            var series = chart.series,
                volatilityData = chart.userOptions.volatilityData,
                renderer = chart.renderer;

            // user options
            var spacingTop = chart.userOptions.chart.spacingTop,
                //tableTop = chart.plotHeight + chart.plotTop - spacingTop - 10, 
                tableTop = chart.plotHeight + chart.plotTop;
            colWidth = chart.plotWidth / chart.xAxis[0].categories.length,
                tableLeft = chart.plotLeft,
                rowHeight = 40,
                cellPadding = 2.5,
                valueDecimals = 1,
                valueSuffix = '%';
            var cellLeft = tableLeft - 165;

            var legend = chart.legend;
            var userOptionsLegend = chart.userOptions.legend;
            var legendX = userOptionsLegend.x;
            var legendY = userOptionsLegend.y + spacingTop;
            var symbolWidth = userOptionsLegend.symbolWidth;
            var symbolHeight = userOptionsLegend.symbolHeight;

            var dataClasses = chart.userOptions.colorAxis.dataClasses;
            var color = '';
            renderer.text(
                'LEGEND',
                legendX - 50,
                legendY + symbolHeight / 2 + 5
            ).add();
            $.each(dataClasses, function(dataClassIndex, dataClass) {

                if (dataClass.from == -1) {
                    renderer.text(
                        dataClass.from,
                        legendX + symbolWidth / 2 - 8,
                        legendY + symbolHeight + 15
                    ).add();
                } else if (dataClass.from == 0) {
                    renderer.text(
                        dataClass.from,
                        legendX + symbolWidth / 2 - 5,
                        legendY + symbolHeight + 15
                    ).add();
                } else {
                    if (dataClass.from < 0) {
                        renderer.text(
                            dataClass.from,
                            legendX + symbolWidth / 2 - 13,
                            legendY + symbolHeight + 15
                        ).add();
                    } else {
                        renderer.text(
                            dataClass.from,
                            legendX + symbolWidth / 2 - 8,
                            legendY + symbolHeight + 15
                        ).add();
                    }
                }
                legendX += symbolWidth;
                if (dataClass.to == 1) {
                    renderer.text(
                        dataClass.to,
                        legendX + symbolWidth / 2 - 4,
                        legendY + symbolHeight + 15
                    ).add();
                }




            });
            $.each(volatilityData, function(i) {

                if (volatilityData[i].name == 'HISTORICAL VOLATILITY') {
                    renderer.rect(
                            cellLeft,
                            tableTop + (i) * rowHeight,
                            165,
                            rowHeight
                        )
                        .attr({
                            fill: '#dddddd',
                            stroke: '#fff',
                            'stroke-width': 1
                        })
                        .add();
                } else {
                    renderer.rect(
                            cellLeft,
                            tableTop + (i) * rowHeight,
                            165,
                            rowHeight
                        )
                        .attr({
                            fill: '#ebebeb',
                            stroke: '#fff',
                            'stroke-width': 1
                        })
                        .add();
                }

                renderer.text(
                        volatilityData[i].name.replace(' ', '<br/>'),
                        cellLeft + 165 - 45,
                        tableTop + (i) * rowHeight + rowHeight / 2 - 5
                    )
                    .attr({
                        align: 'center'
                    }).css({
                        'font-family': '"Whitney A", "Whitney B"',
                        'font-size': '14px',
                        'fontWeight': 'normal',
                        'color': '#000000'
                    })
                    .add();

            });
            cellLeft += 165;
            $.each(chart.xAxis[0].categories, function(category_index, category) {


                $.each(volatilityData, function(i) {

                    if (volatilityData[i].name == 'HISTORICAL VOLATILITY') {
                        renderer.rect(
                                cellLeft,
                                tableTop + (i) * rowHeight,
                                colWidth,
                                rowHeight
                            )
                            .attr({
                                fill: '#dddddd',
                                stroke: '#fff',
                                'stroke-width': 1
                            })
                            .add();
                    } else {
                        renderer.rect(
                                cellLeft,
                                tableTop + (i) * rowHeight,
                                colWidth,
                                rowHeight
                            )
                            .attr({
                                fill: '#ebebeb',
                                stroke: '#fff',
                                'stroke-width': 1
                            })
                            .add();
                    }

                    var volObject = $.Enumerable.From(volatilityData[i].value).Where(function(record) {
                                return record.ShortDisplayName == category
                            }).ToArray()[0];
                    
                    if(volObject)
                    {
                        var volatilityTextObj = renderer.text(
                            Highcharts.numberFormat(volObject.DataValue, 1) + valueSuffix,
                            cellLeft + colWidth / 2,
                            tableTop + (i) * rowHeight + rowHeight / 2 + 5
                        )
                        .attr({
                            align: 'left'

                        }).css({
                            'text-anchor': 'middle',
                            'font-family': '"Whitney A", "Whitney B"',
                            'font-size': '14px',
                            'fontWeight': 'normal'
                        })
                        .add();

                    }
       
                    /*if ($.browser && $.browser.msie && $.browser.version < 9) {
                        window.setTimeout(function() {
                            $(volatilityTextObj.element).css({
                                'left': (parseInt($(volatilityTextObj.element).css('left')) - volatilityTextObj.getBBox().width / 2) + 'px'
                            });
                        }, 100);
                    }*/

                });

                cellLeft += colWidth;

            });

            if (chart.userOptions.credits.LogoUrl) {

                // drawing logo
                chart.renderer.image(
                    chart.userOptions.credits.LogoUrl,
                    chart.plotLeft + 24,//chart.plotLeft + chart.plotWidth - 149,
                    650,
                    144,
                    48
                ).add();
            }

        },
        GetZoomType: function() {

        },

        DataLabelFormatter: function() {


            //if(this.point.y=='0') {return '<b>'+ this.point.x +'</b>'};
        },
        GetConfiguration: function(seriesData, categories) {
            var equitiesColumnChart = this;
            equitiesColumnChart.Credits.text = GetDisclaimerText("RISK_HERO");
            var primaryCurrentCategory = {
                categories: categories
            };
            var secondaryCurrentCategory = $.extend(true, {}, primaryCurrentCategory);
            return {
                chart: {
                    type: 'heatmap',
                    spacingTop: 180,
                    spacingLeft: 15,
					marginRight: 33,
                    spacingBottom: 120,
					marginBottom: 382,
                    style: {
                        'font-family': '"Whitney A", "Whitney B"',
                        'text-transform': 'uppercase'
                    },
                },
                volatilityData: equitiesColumnChart.VolatilityData,
                title: equitiesColumnChart.Title,
                subtitle: equitiesColumnChart.SubTitle,
                xAxis: $.extend(equitiesColumnChart.XAxis, {
                    type: 'category',
                    categories: primaryCurrentCategory.categories
                }),
                yAxis: $.extend(equitiesColumnChart.YAxis, {
                    type: 'category',
                    categories: secondaryCurrentCategory.categories.reverse()
                }),
                colorAxis: equitiesColumnChart.ColorAxis,
                plotOptions: this.GetPlotOptions(),
                legend: equitiesColumnChart.Legend,
                credits: equitiesColumnChart.Credits,
                exporting: equitiesColumnChart.Exporting,
                tooltip: equitiesColumnChart.Tooltip,
                series: [{
                    data: seriesData,
                    borderWidth: 1,
                    borderColor: '#fff',
                    dataLabels: {
                        enabled: !this.HideDataLabels,
                        useHTML: false,
                        color: 'white',
                        style: {
                            fontWeight: 'bold',
                            fontSize: '14px',
                            fontFamily: '"Whitney A", "Whitney B"',
                            color: '#FFFFFF'
                        },
                        format: '{point.TwoDecimalY}'
                    }
                }]
            };
        },
        toString: function() {
            return this.Title;
        }
    });

//** Mobile start**//
    AAGlobal.RisksHeatMapMobileChartConfig = function(correlationType, hideDataLabels) {
        this.CategoryField = 'DataType';
        this.HideDataLabels = hideDataLabels;
        this.InActiveOpacity = 0.1;
        this.Categories = [{
            Name: 'FORECASTED',
            Css: 'comMetals',
            Label: 'Base Metals',
            Color: 'rgb(42,42,42)',
            ForeColor: 'rgb(42,42,42)',
            ActiveColor: 'rgba(118,113,113, 0.75)',
            InActiveColor: 'rgba(118,113,113, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(229,227,227,1)',
            SecondaryInActiveColor: 'rgba(229,227,227,' + this.InActiveOpacity + ')',
            Symbol: 'circle',
            Rank: 5
        }, {
            Name: 'HISTORICAL',
            Css: 'comEnergy',
            Label: 'Energy',
            Color: 'rgb(42,42,42)',
            ForeColor: 'rgb(42,42,42)',
            ActiveColor: 'rgba(255,51,0, 0.75)',
            InActiveColor: 'rgba(255,51,0, ' + this.InActiveOpacity + ')',
            SecondaryActiveColor: 'rgba(250,212,202,1)',
            SecondaryInActiveColor: 'rgba(250,212,202,' + this.InActiveOpacity + ')',
            Symbol: 'circle',
            Rank: 6
        }];
        this.Fields = {
            "As of Date": function(data) {
                return ((data.DataDate) ? $.datepicker.formatDate('mm/yy', $.datepicker.parseDate('yy-mm-dd', data.DataDate.split('T')[0])) : "-")
            },
            'Time Horizon': function(data) {
                return data.DataType;
            },
            'Index': function(data) {
                return data.PIShortDisplayName;
            },
            'Secondary Index': function(data) {
                return data.SIShortDisplayName;
            },
            'Correlation': function(data) {
                return data.Correlation;
            }

        };
        this.ExportConfig = {
            PivotField: 'Secondary Index',
            OrderField: 'Index',
            ValueField: 'Correlation',
        };
        this.Title = {
            text: 'Core Asset Class Correlation and Volatility',
            width: parseInt(this.Width) - 50,
            style: {
                color: '#152c4d',
                fontSize: (isiPad || window.innerWidth < 1341)?'1.4em':'34px',
                fontFamily: '"Chronicle Display A", "Chronicle Display B"',
                fontWeight: '600',
                lineHeight: (isiPad || window.innerWidth < 1341)?'1.4em':'44px',
                letterSpacing: '.2px'
            },
            align: 'left',
            y: -138,
            x: 0,
            floating: true
        };
        this.Tooltip = {
            enabled: false
        };
        this.XAxis = {
            title: {
                enabled: false
            },
            labels: {
                rotation: -65,
                style: {
                    color: '#000000',
                    fontSize: '10px',
                    fontFamily: '"Whitney A", "Whitney B"',
                    fontWeight: 'normal'
                },
            },
            offset: 80,
            lineWidth: 0,
            gridLineWidth: 0,
            tickWidth: 0


        };

        this.YAxis = {
            title: {
                enabled: false
            },
            labels: {
                overflow: 'justify',
                step: 1,
                style: {
                    color: '#333333',
                    fontSize: '10px',
                    fontFamily: '"Whitney A", "Whitney B"',
                    fontWeight: 'normal'
                },
            },
            lineWidth: 0,
            gridLineWidth: 0,
            tickWidth: 0
        };

        this.SubTitle = {
            text: '<i>Interact</i> with our broad asset class correlation heat map. <i>Locate</i> red colors to find asset classes with higher correlations. <i>Toggle</i> between forecasted and historical heat maps using the filter buttons.',
            align: 'left',
            width: parseInt(this.Width) - 70,
            style: {
                color: '#2b2a2a',
                fontSize: (isiPad || window.innerWidth < 1341)?'.9em':'14px',
                fontFamily: '"Whitney A", "Whitney B"',
                fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: (isiPad || window.innerWidth < 1341)?'12px':'22px',
                textTransform: 'none'
            },
            x: 0,
            floating: true,
            y: -110
        };
        this.Width = window.innerWidth - 100;
        this.Height = '666';

        this.CorrelationType = correlationType || 'HISTORICAL';
        this.Legend = {
            align: 'left',
            layout: 'horizontal',
            margin: 0,
            floating: true,
            labelFormat: ' ',
            symbolWidth: 20,
            symbolHeight: 10,
            symbolPadding: 0,
            padding: 0,
            itemWidth: 20,
            verticalAlign: 'top',
            y: 0,
            x: 150
        };

        this.Credits = {
            enabled: true,
            //text: AAGlobal.DISCLAIMER_CONFIG["RISK_HERO"].Credits,
            useHtml: true,
            position: {
                align: 'left',
                verticalAlign: 'bottom',
                x: 5,
                y: -55
            },
            style: {
                'width': 580,
                cursor: 'default',
                'text-transform': 'none',
				fontSize:'6px'
            },
            href: ''
        };
        this.SpacingRight = 0;
        this.Exporting = {
            sourceWidth: 850,
            sourceHeight: 666,
            scale: 1
        };

        this.ColorAxis = {
            dataClasses: [{
                from: -1.0,
                to: -0.8,
                color: '#225b01'
            }, {
                from: -0.8,
                to: -0.6,
                color: '#46791a'
            }, {
                from: -0.6,
                to: -0.4,
                color: '#6a9833'
            }, {
                from: -0.4,
                to: -0.2,
                color: '#8eb64b'
            }, {
                from: -0.2,
                to: 0,
                color: '#b2d464'
            }, {
                from: 0,
                to: 0.2,
                color: '#b1ddf6'
            }, {
                from: 0.2,
                to: 0.4,
                color: '#8ab1cc'
            }, {
                from: 0.4,
                to: 0.6,
                color: '#6385a2'
            }, {
                from: 0.6,
                to: 0.8,
                color: '#3c5877'
            }, {
                from: 0.8,
                to: 1.0,
                color: '#152c4d'
            }]
        };
    };

    AAGlobal.RisksHeatMapMobileChartConfig.prototype = $.extend({}, AAGlobal.RisksHeatMapMobileChartConfig.prototype, {
        LegendItemClick: function(event) {
            return false;
        },
        GetPlotOptions: function() {
            return {
                heatmap: {
                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                }
            };
        },

        FindColorByCorrelation: function(correlation) {
            var dataClasses = this.ColorAxis.dataClasses;
            var color = '';
            $.each(dataClasses, function(dataClassIndex, dataClass) {
                if (correlation >= dataClass.from && correlation <= dataClass.to) {
                    color = dataClass.color;
                }
            });
            var rgb = hexToRgb(color);
            return color = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0.5)';
        },

        GetSeriesData: function(correlationData, volatilityData) {
            var equitiesColumnChart = this;
            var categories = this.GetCategories(correlationData, volatilityData);

            var primaryCategoryIndexObject = {};
            $.each(categories, function(index, value) {
                primaryCategoryIndexObject[value] = index;
            });

            var secondaryCategoryIndexObject = {};
            $.each(categories.reverse(), function(index, value) {
                secondaryCategoryIndexObject[value] = index;
            });

            var seriesCollection = $.Enumerable.From(correlationData).Where('$.DataType=="' + this.CorrelationType + '"').ToArray();

            var seriesData = [];

            $.each(seriesCollection, function(index, value) {

                var dataObject = {
                    x: primaryCategoryIndexObject[value.PIShortDisplayName],
                    y: secondaryCategoryIndexObject[value.SIShortDisplayName],
                    value: value.Correlation,
                    marker: {
                        radius: 0,
                        states: {
                            hover: {
                                color: equitiesColumnChart.FindColorByCorrelation(value.Correlation),
                                radiusPlus: 0
                            }
                        }
                    },

                };
                dataObject.TwoDecimalY = dataObject.value.toAbsFixed(2);

                if (Number(dataObject.TwoDecimalY) == 0) {
                    dataObject.value = 0;
                }

                seriesData.push($.extend(true, {}, value, dataObject));

            });

            return seriesData;

        },

        SetVolatilityData: function(volatilityData) {
            var currentVolatilityData = $.Enumerable.From(volatilityData).Where('$.DataType=="EXPECTED VOLATILITY"').OrderByDescending('$.DataDate').Distinct('$.ReferenceCode').ToArray();
            var historicVolatilityData = $.Enumerable.From(volatilityData).Where('$.DataType=="HISTORICAL VOLATILITY"').OrderByDescending('$.DataDate').Distinct('$.ReferenceCode').ToArray();
            this.VolatilityData = [{
                name: 'EXPECTED VOLATILITY',
                value: currentVolatilityData
            }, {
                name: 'HISTORICAL VOLATILITY',
                value: historicVolatilityData
            }];
        },


        GetCategories: function(correlationData, volatilityData) {
            this.SetVolatilityData(volatilityData);
            return $.Enumerable.From(correlationData).OrderBy('$.DisplayOrder').Select('$.PIShortDisplayName').Distinct().ToArray();
        },
        Callback: function(chart) {
            var series = chart.series,
                volatilityData = chart.userOptions.volatilityData,
                renderer = chart.renderer;
			
            // user options
            var spacingTop = chart.userOptions.chart.spacingTop,
                //tableTop = chart.plotHeight + chart.plotTop - spacingTop - 10, 
                tableTop = chart.plotHeight + chart.plotTop;			
            colWidth = chart.plotWidth / chart.xAxis[0].categories.length,
                tableLeft = chart.plotLeft,
                rowHeight = 40,
                cellPadding = 2.5,
                valueDecimals = 1,
                valueSuffix = '%';
            var cellLeft = tableLeft - 165;

            var legend = chart.legend;
            var userOptionsLegend = chart.userOptions.legend;
            var legendX = userOptionsLegend.x;
            var legendY = userOptionsLegend.y + spacingTop;
            var symbolWidth = userOptionsLegend.symbolWidth;
            var symbolHeight = userOptionsLegend.symbolHeight;

            var dataClasses = chart.userOptions.colorAxis.dataClasses;
            var color = '';
            renderer.text(
                'LEGEND',
                legendX - 50,
                legendY + symbolHeight / 2 + 5
            ).add();
            $.each(dataClasses, function(dataClassIndex, dataClass) {

                if (dataClass.from == -1) {
                    renderer.text(
                        dataClass.from,
                        legendX + symbolWidth / 2 - 8,
                        legendY + symbolHeight + 15
                    ).add();
                } else if (dataClass.from == 0) {
                    renderer.text(
                        dataClass.from,
                        legendX + symbolWidth / 2 - 5,
                        legendY + symbolHeight + 15
                    ).add();
                } else {
                    if (dataClass.from < 0) {
                        renderer.text(
                            dataClass.from,
                            legendX + symbolWidth / 2 - 13,
                            legendY + symbolHeight + 15
                        ).add();
                    } else {
                        renderer.text(
                            dataClass.from,
                            legendX + symbolWidth / 2 - 8,
                            legendY + symbolHeight + 15
                        ).add();
                    }
                }
                legendX += symbolWidth;
                if (dataClass.to == 1) {
                    renderer.text(
                        dataClass.to,
                        legendX + symbolWidth / 2 - 4,
                        legendY + symbolHeight + 15
                    ).add();
                }




            });
            $.each(volatilityData, function(i) {

                if (volatilityData[i].name == 'HISTORICAL VOLATILITY') {
                    renderer.rect(
                            cellLeft,
                            tableTop + (i) * rowHeight,
                            165,
                            rowHeight
                        )
                        .attr({
                            fill: '#dddddd',
                            stroke: '#fff',
                            'stroke-width': 1
                        })
                        .add();
                } else {
                    renderer.rect(
                            cellLeft,
                            tableTop + (i) * rowHeight,
                            165,
                            rowHeight
                        )
                        .attr({
                            fill: '#ebebeb',
                            stroke: '#fff',
                            'stroke-width': 1
                        })
                        .add();
                }

                renderer.text(
                        volatilityData[i].name.replace(' ', '<br/>'),
                        cellLeft + 165 - 45,
                        tableTop + (i) * rowHeight + rowHeight / 2 - 5
                    )
                    .attr({
                        align: 'center'
                    }).css({
                        'font-family': '"Whitney A", "Whitney B"',
                        'font-size': '8px',
                        'fontWeight': 'normal',
                        'color': '#000000'
                    })
                    .add();

            });
            cellLeft += 165;
            $.each(chart.xAxis[0].categories, function(category_index, category) {
                $.each(volatilityData, function(i) {

                    if (volatilityData[i].name == 'HISTORICAL VOLATILITY') {
                        renderer.rect(
                                cellLeft,
                                tableTop + (i) * rowHeight,
                                colWidth,
                                rowHeight
                            )
                            .attr({
                                fill: '#dddddd',
                                stroke: '#fff',
                                'stroke-width': 1
                            })
                            .add();
                    } else {
                        renderer.rect(
                                cellLeft,
                                tableTop + (i) * rowHeight,
                                colWidth,
                                rowHeight
                            )
                            .attr({
                                fill: '#ebebeb',
                                stroke: '#fff',
                                'stroke-width': 1
                            })
                            .add();
                    }

                    var volObject = $.Enumerable.From(volatilityData[i].value).Where(function(record) {
                                return record.ShortDisplayName == category
                            }).ToArray()[0];
                    
                    if(volObject)
                    {
                        var volatilityTextObj = renderer.text(
                            Highcharts.numberFormat(volObject.DataValue, 1) + valueSuffix,
                            cellLeft + colWidth / 2,
                            tableTop + (i) * rowHeight + rowHeight / 2 + 5
                        )
                        .attr({
                            align: 'left'

                        }).css({
                            'text-anchor': 'middle',
                            'font-family': '"Whitney A", "Whitney B"',
                            'font-size': '8px',
                            'fontWeight': 'normal'
                        })
                        .add();

                    }
       
                    /*if ($.browser && $.browser.msie && $.browser.version < 9) {
                        window.setTimeout(function() {
                            $(volatilityTextObj.element).css({
                                'left': (parseInt($(volatilityTextObj.element).css('left')) - volatilityTextObj.getBBox().width / 2) + 'px'
                            });
                        }, 100);
                    }*/

                });

                cellLeft += colWidth;

            });

            if (chart.userOptions.credits.LogoUrl) {

                // drawing logo
                chart.renderer.image(
                    chart.userOptions.credits.LogoUrl,
                    chart.plotLeft + 24,//chart.plotLeft + chart.plotWidth - 149,
                    650,
                    144,
                    48
                ).add();
            }

        },
        GetZoomType: function() {

        },

        DataLabelFormatter: function() {


            //if(this.point.y=='0') {return '<b>'+ this.point.x +'</b>'};
        },
        GetConfiguration: function(seriesData, categories) {
            var equitiesColumnChart = this;
            equitiesColumnChart.Credits.text = GetDisclaimerText("RISK_HERO");
            var primaryCurrentCategory = {
                categories: categories
            };
            var secondaryCurrentCategory = $.extend(true, {}, primaryCurrentCategory);
            return {
                chart: {
                    type: 'heatmap',
                    spacingTop: 175,
                    spacingLeft: 15,
					marginRight: 33,
                    spacingBottom: 85,
                    style: {
                        'font-family': '"Whitney A", "Whitney B"',
                        'text-transform': 'uppercase'
                    },
                },
                volatilityData: equitiesColumnChart.VolatilityData,
                title: equitiesColumnChart.Title,
                subtitle: equitiesColumnChart.SubTitle,
                xAxis: $.extend(equitiesColumnChart.XAxis, {
                    type: 'category',
                    categories: primaryCurrentCategory.categories
                }),
                yAxis: $.extend(equitiesColumnChart.YAxis, {
                    type: 'category',
                    categories: secondaryCurrentCategory.categories.reverse()
                }),
                colorAxis: equitiesColumnChart.ColorAxis,
                plotOptions: this.GetPlotOptions(),
                legend: equitiesColumnChart.Legend,
                credits: equitiesColumnChart.Credits,
                exporting: equitiesColumnChart.Exporting,
                tooltip: equitiesColumnChart.Tooltip,
                series: [{
                    data: seriesData,
                    borderWidth: 1,
                    borderColor: '#fff',
                    dataLabels: {
                        enabled: !this.HideDataLabels,
                        useHTML: false,
                        color: 'white',
                        style: {
                            fontWeight: 'bold',
                            fontSize: '10px',
                            fontFamily: '"Whitney A", "Whitney B"',
                            color: '#FFFFFF'
                        },
                        format: '{point.TwoDecimalY}'
                    }
                }]
            };
        },
        toString: function() {
            return this.Title;
        }
    });
	//** Mobile HEATMAP ENDS **//
    //** RISK HEATMAP ENDS **//
    //** ENDS.. **/

    //#endregion

    //#endregion

    //#region Hero Table View Configuration
    AAGlobal.BaseTableChartConfig = function() {
        this.Width =  $('#HeroContainer').width();
        //this.Height = 740;
        this.BenchmarkColumn = 'IsBenchmarkPoint';
    }
    AAGlobal.BaseTableChartConfig.prototype = $.extend(true, {}, AAGlobal.BaseTableChartConfig.prototype, {

        Init: function() {
            function verticalDefinition(LayoutMode) {

                var Vertical = LayoutMode.create('vertical', {
                    horizontalAlignment: 0
                });

                Vertical.prototype._resetLayout = function() {
                    this.y = 0;
                    /*if ($.browser.msie && $.browser.version <= 9) {
                        this.y = 31;
                    }*/
                };

                Vertical.prototype._getItemLayoutPosition = function(item) {
                    item.getSize();
                    var x = (this.isotope.size.innerWidth - item.size.outerWidth) *
                        this.options.horizontalAlignment;
                    var y = this.y;
                    this.y += item.size.outerHeight;
                    return {
                        x: x,
                        y: y
                    };
                };

                Vertical.prototype._getContainerSize = function() {
                    return {
                        height: this.y
                    };
                };

                return Vertical;
            }

            if (typeof define === 'function' && define.amd) {

                // AMD
                define('isotope/js/layout-modes/vertical', [
                        '../layout-mode'
                    ],
                    verticalDefinition);
            } else {

                // browser global
                verticalDefinition(
                    window.Isotope.LayoutMode
                );
            }
        },
        AddDisclosure: function(obj) {
            var disclosureText = "<div class='logo'><img align='left' src='/content/dam/ra/images/highcharts/AA/ra_blue_logo.png' /></div><div class='summary'>Source: Research Affiliates, LLC, <a href='http://www.rallc.com' target='blank'>©" +  GetConfigValue("CURRENT_YEAR") + " Research Affiliates, LLC. All Rights Reserved.</a></div>";
            var x = $(obj).parent().find(".disclosure");
            if (parseInt(x.length) > 0) {
                $(x).empty().append(disclosureText);
            }
        }
    });

    AAGlobal.EquitiesTableChartConfig = function(currentDOM) {
        var heroEquitiesTableViewDefaults = this;
        this.DOM = currentDOM;

        this.Fields = {

            'As of Date': function(data) {
                return ((data.AsOnDate) ? $.datepicker.formatDate('mm/yy', $.datepicker.parseDate('yy-mm-dd', data.AsOnDate.split('T')[0])) : "-")
            },
            'Market': function(data) {
                return data.ShortDisplayName;
            },
            'Expected Return %': function(data) {
                return data.ExpectedReturn;
            },
            'Yield %': function(data) {
                return data.Yield;
            },
            'Growth %': function(data) {
                return data.Growth;
                //Growth.toAbsFixed(1)
            },
            'Roll Return %': function(data) {
                return data.RollReturn;
            },
            'Credit Loss %': function(data) {
                return data.CreditLoss;
            },
            'Collateral %': function(data) {
                return data.CollateralReturn;
            },
            'Rebalance %': function(data) {
                return data.RebalanceReturn;
            },
            'Valuation Change Return %': function(data) {
                return data.ValuationChange;
            },
            'FX Return %': function(data) {
                return data.FxReturn;
            },
            'Volatility %': function(data) {
                return data.Volatility;
            },
            'Confidence Interval -67 %': function(data) {
                return data.ConfidenceIntervalNegative1;
            },
            'Confidence Interval -95 %': function(data) {
                return data.ConfidenceIntervalNegative2;
            },
            'Confidence Interval 67 %': function(data) {
                return data.ConfidenceIntervalPositive1;
            },
            'Confidence Interval 95 %': function(data) {
                return data.ConfidenceIntervalPositive2;
            }
        };
    }
    AAGlobal.EquitiesTableChartConfig.prototype = $.extend(true, {}, new AAGlobal.BaseTableChartConfig(), AAGlobal.EquitiesTableChartConfig.prototype, {
        GetTemplate: function() {
            //left align first column
            var templateHtmlString = "<table class='isortope equitiesTableView'><thead class='fixedHeader'><th name='DisplayName' class='col4s left'>Name</th><th name='ExpectedReturn' class='col4s'>Expected Return</th><th name='Volatility' class='col5'>Volatility</th><th name='Yield' class='col5 hidden-sm hidden-xs'>Yield</th><th name='Growth' class='col5 hidden-sm hidden-xs'>Growth</th><th name='ValuationChange' class='col5 hidden-sm hidden-xs'>Valuation</th><th name='FxReturn' class='col5 hidden-sm hidden-xs'>FX</th></thead>";
            templateHtmlString += "<tbody class='scrollContent'>{{#items}}<tr data={{CssClass}}>";
            templateHtmlString += "<td name='DisplayName' class='col4s left'>{{DisplayName}}</td>";
            templateHtmlString += "{{#ExpectedReturn}}<td  name='ExpectedReturn' class='col4s digits'><span class='numbers'>{{ExpectedReturn}}%</span></td>{{/ExpectedReturn}}";
            templateHtmlString += "{{^ExpectedReturn}}<td  name='ExpectedReturn' class='col5 digits'>-</td>{{/ExpectedReturn}}";
            templateHtmlString += "{{#Volatility}}<td name='Volatility' class='col5 digits'><span class='numbers'>{{Volatility}}%</span></td>{{/Volatility}}";
            templateHtmlString += "{{^Volatility}}<td name='Volatility' class='col5 digits'>-</td>{{/Volatility}}";
            templateHtmlString += "{{#Yield}}<td name='Yield' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>{{Yield}}%</span></td>{{/Yield}}";
            templateHtmlString += "{{^Yield}}<td name='Yield' class='col5 digits hidden-sm hidden-xs'>-</td>{{/Yield}}";
            templateHtmlString += "{{#Growth}}<td name='Growth' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>{{Growth}}%</span></td>{{/Growth}}";
            templateHtmlString += "{{^Growth}}<td name='Growth' class='col5 digits hidden-sm hidden-xs'>-</td>{{/Growth}}";
            templateHtmlString += "{{#ValuationChange}}<td name='ValuationChange' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>{{ValuationChange}}%</span></td>{{/ValuationChange}}";
            templateHtmlString += "{{^ValuationChange}}<td name='ValuationChange' class='col5 digits hidden-sm hidden-xs'>-</td>{{/ValuationChange}}";
            templateHtmlString += "{{#FxReturn}}<td name='FxReturn' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>{{FxReturn}}%</span></td>{{/FxReturn}}";
            templateHtmlString += "{{^FxReturn}}<td name='FxReturn' class='col5 digits hidden-sm hidden-xs'>-</td>{{/FxReturn}}";
            templateHtmlString += "</tr>{{/items}}</tbody></table>";
            return templateHtmlString;
        },
        GetTemplateWithoutMustache:function(data){
            var templateHtmlString = '<table class="isortope equitiesTableView"><thead class="fixedHeader"><th name="DisplayName" class="col4s left">Name</th><th name="ExpectedReturn" class="col4s">Expected Return</th><th name="Volatility" class="col5">Volatility</th><th name="Yield" class="col5 hidden-sm hidden-xs">Yield</th><th name="Growth" class="col5 hidden-sm hidden-xs">Growth</th><th name="ValuationChange" class="col5 hidden-sm hidden-xs">Valuation</th><th name="FxReturn" class="col5 hidden-sm hidden-xs">FX</th></thead>';
            templateHtmlString += '<tbody class="scrollContent">';
            
            for(var i=0; i < data.items.length; ++i){
                
                var item = data.items[i];
                templateHtmlString += '<tr data = "' + item.CssClass + '">';
                templateHtmlString += '<td name="DisplayName" class="col4s left">' +item.DisplayName + '</td>';
                if(item.ExpectedReturn !=undefined && item.ExpectedReturn!=null){
                    templateHtmlString += '<td  name="ExpectedReturn" class="col4s digits"><span class="numbers">' + item.ExpectedReturn + '%</span></td>';
                }
                else{
                    templateHtmlString += "<td  name='ExpectedReturn' class='col5 digits'>-</td>";
                }
                if(item.Volatility!=undefined && item.ExpectedReturn!=null){
                    templateHtmlString += '<td name="Volatility" class="col5 digits"><span class="numbers">' + item.Volatility + '%</span></td>';
                }
                else{
                    templateHtmlString += "<td  name='Volatility' class='col5 digits'>-</td>";
                }
                if(item.Yield !=undefined && item.Yield!=null){
                    templateHtmlString += '<td name="Yield" class="col5 digits hidden-sm hidden-xs"><span class="numbers">' + item.Yield +'%</span></td>';
                }
                else{
                    templateHtmlString += "<td  name='Yield' class='col5 digits hidden-sm hidden-xs'>-</td>";
                }
                if(item.Growth!=undefined && item.Growth!=null){
                    templateHtmlString += "<td name='Growth' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>" + item.Growth +"%</span></td>";
                }
                else{
                    templateHtmlString += "<td  name='Growth' class='col5 digits hidden-sm hidden-xs'>-</td>";
                }
                if(item.ValuationChange!=undefined && item.ValuationChange!=null){
                    templateHtmlString += "<td name='ValuationChange' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>" + item.ValuationChange + "%</span></td>";
                }
                else{
                    templateHtmlString += "<td  name='ValuationChange' class='col5 digits hidden-sm hidden-xs'>-</td>";
                }
                if(item.FxReturn !=undefined && item.FxReturn!=null){
                    templateHtmlString += "<td name='FxReturn' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>" + item.FxReturn + "%</span></td>";
                }
                else{
                    templateHtmlString += "<td  name='FxReturn' class='col5 digits hidden-sm hidden-xs'>-</td>";
                }
                templateHtmlString += '</tr>';
            }
            templateHtmlString += "</tbody></table>";
            return templateHtmlString;
        },
        AddDisclosure: function(obj) {
            var disclosureText = "<div class='summary tableConfg'>" + GetDisclaimerText("EQUITIES_HERO") + "</div>";
            if ($(obj).siblings('.summary').length) {
                $(obj).siblings('.summary').remove()
            }
            $(obj).after(disclosureText);
        },

        InitializeAndSortColumn: function(thObject) {
            var heroEquitiesTableViewDefaults = this;
            heroEquitiesTableViewDefaults.Init();
            if (!thObject) {
                thObject = $(heroEquitiesTableViewDefaults.DOM).find('th').get(0);
            }
            var asc = true;
            if ($(thObject).hasClass('data-asc')) {
                asc = false;
            }

            $(heroEquitiesTableViewDefaults.DOM).find('th').removeClass('data-asc').removeClass('data-desc');
            $(heroEquitiesTableViewDefaults.DOM).find('.sort-arrow').remove();


            var options = {
                layoutMode: 'vertical',
                getSortData: {}
            };

            var className = $(thObject).attr('name');
            options.sortBy = className;

            options.sortAscending = asc;
            $(thObject).addClass(asc ? 'data-asc' : 'data-desc').append("<span class='sort-arrow'></span>");

            $.each($(heroEquitiesTableViewDefaults.DOM).find('th'), function(dataIndex, dataObject) {
                var prop = $(dataObject).attr('name').replace(" ", '');
                options.getSortData[prop] = function(object) {
                    var value = Number($(object).find('[name=' + prop + ']').text().replace('%', ''));
                    return isNaN(value) ? -999 : value;
                };

            });

            options.getSortData.DisplayName = function(object) {
                return $(object).find('[name=DisplayName]').text();
            };

            options.getSortData.MarketCategory = function(object) {
                return $(object).find('[name=MarketCategory]').text();
            };

            $(heroEquitiesTableViewDefaults.DOM).find('tbody').isotope(options);

        }
    });

    AAGlobal.FixedIncomeTableChartConfig = function(currentDOM) {
        this.DOM = currentDOM;
        this.Fields = {

            'As of Date': function(data) {
                return ((data.AsOnDate) ? $.datepicker.formatDate('mm/yy', $.datepicker.parseDate('yy-mm-dd', data.AsOnDate.split('T')[0])) : "-")
            },
            'Market': function(data) {
                return data.ShortDisplayName;
            },
            'Expected Return %': function(data) {
                return data.ExpectedReturn;
            },
            'Yield %': function(data) {
                return data.Yield;
            },
            'Growth %': function(data) {
                return data.Growth;
                //Growth.toAbsFixed(1)
            },
            'Roll Return %': function(data) {
                return data.RollReturn;
            },
            'Credit Loss %': function(data) {
                return data.CreditLoss;
            },
            'Collateral %': function(data) {
                return data.CollateralReturn;
            },
            'Rebalance %': function(data) {
                return data.RebalanceReturn;
            },
            'Valuation Change Return %': function(data) {
                return data.ValuationChange;
            },
            'FX Return %': function(data) {
                return data.FxReturn;
            },
            'Volatility %': function(data) {
                return data.Volatility;
            },
            'Confidence Interval -67 %': function(data) {
                return data.ConfidenceIntervalNegative1;
            },
            'Confidence Interval -95 %': function(data) {
                return data.ConfidenceIntervalNegative2;
            },
            'Confidence Interval 67 %': function(data) {
                return data.ConfidenceIntervalPositive1;
            },
            'Confidence Interval 95 %': function(data) {
                return data.ConfidenceIntervalPositive2;
            }
        };
    }

    AAGlobal.FixedIncomeTableChartConfig.prototype = $.extend(true, {}, new AAGlobal.BaseTableChartConfig(), AAGlobal.FixedIncomeTableChartConfig.prototype, {
        GetTemplate: function() {
            var templateHtmlString = "<table class='isortope'><thead class='fixedHeader'>" +
                "<th name='DisplayName' class='col4 left'>Name</th>" +
                "<th name='ExpectedReturn' class='col5'>Expected Return</th>" +
                "<th name='Volatility' class='col5'>Volatility</th>" +
                "<th name='Yield' class='col5 hidden-sm hidden-xs'>Yield</th>" +
                "<th name='CreditLoss' class='col5 hidden-sm hidden-xs'>Credit Loss</th>" +
                "<th name='RollReturn' class='col5 hidden-sm hidden-xs'>Roll Return</th>" +
                "<th name='ValuationChange' class='col5 hidden-sm hidden-xs'>Valuation</th>" +
                "<th name='FxReturn' class='col5 hidden-sm hidden-xs'>FX</th>" +
                "</thead>";

            templateHtmlString += "<tbody class='scrollContent'>{{#items}}<tr class={{CssClass}}>";
            templateHtmlString += "<td name='DisplayName' class='col4 left'>{{DisplayName}}</td>";

            templateHtmlString += "{{#ExpectedReturn}}<td  name='ExpectedReturn' class='col5 digits'><span class='numbers'>{{ExpectedReturn}}%</span></td>{{/ExpectedReturn}}";
            templateHtmlString += "{{^ExpectedReturn}}<td  name='ExpectedReturn' class='col5 digits'>-</td>{{/ExpectedReturn}}";

            templateHtmlString += "{{#Volatility}}<td name='Volatility' class='col5 digits'><span class='numbers'>{{Volatility}}%</span></td>{{/Volatility}}";
            templateHtmlString += "{{^Volatility}}<td name='Volatility' class='col5 digits'>-</td>{{/Volatility}}";

            templateHtmlString += "{{#Yield}}<td name='Yield' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>{{Yield}}%</span></td>{{/Yield}}";
            templateHtmlString += "{{^Yield}}<td name='Yield' class='col5 digits hidden-sm hidden-xs'>-</td>{{/Yield}}";

            templateHtmlString += "{{#CreditLoss}}<td name='CreditLoss' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>{{CreditLoss}}%</span></td>{{/CreditLoss}}";
            templateHtmlString += "{{^CreditLoss}}<td name='CreditLoss' class='col5 digits hidden-sm hidden-xs'>-</td>{{/CreditLoss}}";

            templateHtmlString += "{{#RollReturn}}<td name='RollReturn' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>{{RollReturn}}%</span></td>{{/RollReturn}}";
            templateHtmlString += "{{^RollReturn}}<td name='RollReturn' class='col5 digits hidden-sm hidden-xs'>-</td>{{/RollReturn}}";

            templateHtmlString += "{{#ValuationChange}}<td name='ValuationChange' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>{{ValuationChange}}%</span></td>{{/ValuationChange}}";
            templateHtmlString += "{{^ValuationChange}}<td name='ValuationChange' class='col5 digits hidden-sm hidden-xs'>-</td>{{/ValuationChange}}";

            templateHtmlString += "{{#FxReturn}}<td name='FxReturn' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>{{FxReturn}}%</span></td>{{/FxReturn}}";
            templateHtmlString += "{{^FxReturn}}<td name='FxReturn' class='col5 digits hidden-sm hidden-xs'>-</td>{{/FxReturn}}";

            templateHtmlString += "</tr>{{/items}}</tbody></table>";
            return templateHtmlString;
        },
        GetTemplateWithoutMustache:function(data){
            var templateHtmlString = "<table class='isortope'><thead class='fixedHeader'>" +
                "<th name='DisplayName' class='col4 left'>Name</th>" +
                "<th name='ExpectedReturn' class='col5'>Expected Return</th>" +
                "<th name='Volatility' class='col5'>Volatility</th>" +
                "<th name='Yield' class='col5 hidden-sm hidden-xs'>Yield</th>" +
                "<th name='CreditLoss' class='col5 hidden-sm hidden-xs'>Credit Loss</th>" +
                "<th name='RollReturn' class='col5 hidden-sm hidden-xs'>Roll Return</th>" +
                "<th name='ValuationChange' class='col5 hidden-sm hidden-xs'>Valuation</th>" +
                "<th name='FxReturn' class='col5 hidden-sm hidden-xs'>FX</th>" +
                "</thead>";
            templateHtmlString += "<tbody class='scrollContent'>";
            for(var i=0; i < data.items.length; ++i){
                var item = data.items[i];
                templateHtmlString += "<tr data = '" + item.CssClass + "'>";
                templateHtmlString += "<td name='DisplayName'' class='col4s left'>" +item.DisplayName + "</td>";
                if(item.ExpectedReturn !=undefined && item.ExpectedReturn!=null){
                    templateHtmlString += "<td  name='ExpectedReturn' class='col5 digits'><span class='numbers'>" + item.ExpectedReturn + "%</span></td>";
                }
                else{
                    templateHtmlString +="<td  name='ExpectedReturn' class='col5 digits'>-</td>";
                }
                if(item.Volatility!=undefined && item.Volatility!=null){
                    templateHtmlString += "<td name='Volatility' class='col5 digits'><span class='numbers'>" + item.Volatility + "%</span></td>";
                }
                else{
                    templateHtmlString +="<td name='Volatility' class='col5 digits'>-</td>";
                }
                if(item.Yield !=undefined && item.Yield!=null){
                    templateHtmlString += "<td name='Yield' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>" + item.Yield + "%</span></td>";
                }
                else{
                    templateHtmlString +="<td name='Yield' class='col5 digits hidden-sm hidden-xs'>-</td>";
                }
                if(item.CreditLoss!=undefined && item.CreditLoss!=null){
                    templateHtmlString += "<td name='CreditLoss' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>" + item.CreditLoss + "%</span></td>";
                }
                else{
                    templateHtmlString +="<td name='CreditLoss' class='col5 digits hidden-sm hidden-xs'>-</td>";
                }
                if(item.RollReturn!=undefined && item.RollReturn!=null){
                    templateHtmlString += "<td name='RollReturn' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>" + item.RollReturn + "%</span></td>";
                }
                else{
                    templateHtmlString +="<td name='RollReturn' class='col5 digits hidden-sm hidden-xs'>-</td>";
                }
                if(item.ValuationChange!=undefined && item.ValuationChange!=null){
                    templateHtmlString += "<td name='ValuationChange' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>" + item.ValuationChange + "%</span></td>";
                }
                else{
                    templateHtmlString +="<td name='ValuationChange' class='col5 digits hidden-sm hidden-xs'>-</td>";
                }
                if(item.FxReturn!=undefined && item.FxReturn!=null){
                    templateHtmlString += "<td name='FxReturn' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>" + item.FxReturn + "%</span></td>";
                }
                else{
                    templateHtmlString +="<td name='FxReturn' class='col5 digits hidden-sm hidden-xs'>-</td>";
                }
                templateHtmlString += '</tr>';
            }
             templateHtmlString += "</tbody></table>";
            return templateHtmlString;
        },
        AddDisclosure: function(obj) {
            var disclosureText = "<div class='summary tableConfg'>" + GetDisclaimerText("FIXED_INCOME_HERO") + "</div>";
            if ($(obj).siblings('.summary').length) {
                $(obj).siblings('.summary').remove()
            }
            $(obj).after(disclosureText);
        },

        InitializeAndSortColumn: function(thObject) {
            var heroEquitiesTableViewDefaults = this;
            heroEquitiesTableViewDefaults.Init();
            if (!thObject) {
                thObject = $(heroEquitiesTableViewDefaults.DOM).find('th').get(0);
            }
            var asc = true;
            if ($(thObject).hasClass('data-asc')) {
                asc = false;
            }

            $(heroEquitiesTableViewDefaults.DOM).find('th').removeClass('data-asc').removeClass('data-desc');
            $(heroEquitiesTableViewDefaults.DOM).find('.sort-arrow').remove();


            var options = {
                layoutMode: 'vertical',
                getSortData: {}
            };

            var className = $(thObject).attr('name');
            options.sortBy = className;

            options.sortAscending = asc;
            $(thObject).addClass(asc ? 'data-asc' : 'data-desc').append("<span class='sort-arrow'></span>");

            $.each($(heroEquitiesTableViewDefaults.DOM).find('th'), function(dataIndex, dataObject) {
                var prop = $(dataObject).attr('name').replace(" ", '');
                options.getSortData[prop] = function(object) {
                    var value = Number($(object).find('[name=' + prop + ']').text().replace('%', ''));
                    return isNaN(value) ? -999 : value;
                };

            });

            options.getSortData.DisplayName = function(object) {
                return $(object).find('[name=DisplayName]').text();
            };

            options.getSortData.MarketCategory = function(object) {
                return $(object).find('[name=MarketCategory]').text();
            };

            $(heroEquitiesTableViewDefaults.DOM).find('tbody').isotope(options);

        }
    });

    AAGlobal.CoreOverviewTableChartConfig = function(currentDOM) {
        this.DOM = currentDOM;
        this.BenchmarkColumn = 'IsHubPoint';
        this.CategoryField = 'HubPortfolioName';
        this.Fields = {
            'As of Date': function(data) {
                return ((data.AsOnDate) ? $.datepicker.formatDate('mm/yy', $.datepicker.parseDate('yy-mm-dd', data.AsOnDate.split('T')[0])) : "-")
            },
            'Asset class': function(data) {
                return data.ShortDisplayName;
            },
            'Expected Return %': function(data) {
                return data.ExpectedReturn;
            },
            'Yield %': function(data) {
                return data.Yield;
            },

            'Growth %': function(data) {
                return data.Growth;
                //Growth.toAbsFixed(1)
            },
            'Roll Return Net Credit Loss %': function(data) {
                return data.RollReturn;
            },
            'Valuation Change Return %': function(data) {
                return data.ValuationChange;
            },
            'FX Return %': function(data) {
                return data.FxReturn;
            },
            'Volatility %': function(data) {
                return data.Volatility;
            },
            'Credit Loss %': function(data) {
                return data.CreditLoss;
            },
            'Collateral %': function(data) {
                return data.CollateralReturn;
            },
            'Rebalance %': function(data) {
                return data.RebalanceReturn;
            },
            'Confidence Interval -67 %': function(data) {
                return data.ConfidenceIntervalNegative1;
            },
            'Confidence Interval -95 %': function(data) {
                return data.ConfidenceIntervalNegative2;
            },
            'Confidence Interval 67 %': function(data) {
                return data.ConfidenceIntervalPositive1;
            },
            'Confidence Interval 95 %': function(data) {
                return data.ConfidenceIntervalPositive2;
            }
        };

    }

    AAGlobal.CoreOverviewTableChartConfig.prototype = $.extend(true, {}, new AAGlobal.EquitiesTableChartConfig(), AAGlobal.CoreOverviewTableChartConfig.prototype, {
        GetTemplate: function() {
            var templateHtmlString = "<table class='isortope coreOverview'><thead class='fixedHeader'><th name='ShortDisplayName' class='col4 left'>Name</th><th name='ExpectedReturn' class='col5'>Expected Return</th><th name='Volatility' class='col5'>Volatility</th></thead>";
            templateHtmlString += "<tbody class='scrollContent'>{{#items}}<tr data={{CssClass}}>";
            templateHtmlString += "<td name='ShortDisplayName' class='col4 left'>{{ShortDisplayName}}</td>";
            templateHtmlString += "{{#ExpectedReturn}}<td  name='ExpectedReturn' class='col5 digits'><span class='numbers'>{{ExpectedReturn}}%</span></td>{{/ExpectedReturn}}";
            templateHtmlString += "{{^ExpectedReturn}}<td  name='ExpectedReturn' class='col5 digits'>-</td>{{/ExpectedReturn}}";
            templateHtmlString += "{{#Volatility}}<td name='Volatility' class='col5 digits'><span class='numbers'>{{Volatility}}%</span></td>{{/Volatility}}";
            templateHtmlString += "{{^Volatility}}<td name='Volatility' class='col5 digits'>-</td>{{/Volatility}}";
            templateHtmlString += "</tr>{{/items}}</tbody></table>";
            return templateHtmlString;
        },
        GetTemplateWithoutMustache:function(data){
            var templateHtmlString = "<table class='isortope coreOverview'><thead class='fixedHeader'><th name='ShortDisplayName' class='col4 left'>Name</th><th name='ExpectedReturn' class='col5'>Expected Return</th><th name='Volatility' class='col5'>Volatility</th></thead>";
            templateHtmlString += "<tbody class='scrollContent'>";
            for(var i=0; i < data.items.length; ++i){
                var item = data.items[i];
                templateHtmlString += "<tr data = '" + item.CssClass + "'>";
                templateHtmlString += "<td name='ShortDisplayName'' class='col4 left'>" +item.ShortDisplayName + "</td>";
                if(item.ExpectedReturn !=undefined && item.ExpectedReturn!=null){
                    templateHtmlString += "<td  name='ExpectedReturn' class='col5 digits'><span class='numbers'>" + item.ExpectedReturn + "%</span></td>"
                }
                else{
                    templateHtmlString += "<td  name='ExpectedReturn' class='col5 digits'>-</td>";
                }
                if(item.Volatility!=undefined && item.Volatility!=null){
                    templateHtmlString += "<td name='Volatility' class='col5 digits'><span class='numbers'>" + item.Volatility + "%</span></td>";
                }
                else{
                    templateHtmlString += "<td  name='Volatility' class='col5 digits'>-</td>";
                }
                templateHtmlString += '</tr>';
            }
             templateHtmlString += "</tbody></table>";
            return templateHtmlString;
        },
        AddDisclosure: function(obj) {
            var disclosureText = "<div class='summary tableConfg'>" + GetDisclaimerText("CORE_OVERVIEW_HERO") + "</div>";
            if ($(obj).siblings('.summary').length) {
                $(obj).siblings('.summary').remove()
            }
            $(obj).after(disclosureText);
        },

        InitializeAndSortColumn: function(thObject) {
            var heroEquitiesTableViewDefaults = this;
            heroEquitiesTableViewDefaults.Init();
            if (!thObject) {
                thObject = $(heroEquitiesTableViewDefaults.DOM).find('th').get(0);
            }
            var asc = true;
            if ($(thObject).hasClass('data-asc')) {
                asc = false;
            }

            $(heroEquitiesTableViewDefaults.DOM).find('th').removeClass('data-asc').removeClass('data-desc');
            $(heroEquitiesTableViewDefaults.DOM).find('.sort-arrow').remove();


            var options = {
                layoutMode: 'vertical',
                getSortData: {}
            };

            var className = $(thObject).attr('name');
            options.sortBy = className;

            options.sortAscending = asc;
            $(thObject).addClass(asc ? 'data-asc' : 'data-desc').append("<span class='sort-arrow'></span>");

            $.each($(heroEquitiesTableViewDefaults.DOM).find('th'), function(dataIndex, dataObject) {
                var prop = $(dataObject).attr('name').replace(" ", '');
                options.getSortData[prop] = function(object) {
                    var value = Number($(object).find('[name=' + prop + ']').text().replace('%', ''));
                    return isNaN(value) ? -999 : value;
                };

            });

            options.getSortData.ShortDisplayName = function(object) {
                return $(object).find('[name=ShortDisplayName]').text();
            };
            $(heroEquitiesTableViewDefaults.DOM).find('tbody').isotope(options);

        }

    });

    AAGlobal.CoreOverviewPortfoliosTableChartConfig = function(currentDOM) {
        this.DOM = currentDOM;
        this.BenchmarkColumn = 'IsHubPoint';
        this.CategoryField = 'BasketName';
        this.Fields = {
            'As of Date': function(data) {
                return ((data.ValidToDate) ? $.datepicker.formatDate('mm/yy', $.datepicker.parseDate('yy-mm-dd', data.ValidToDate.split('T')[0])) : "-")
            },
            'Portfolio Name': function(data) {
                return data.BasketShortDisplayName;
            },
            'Portfolio Description': function(data) {
                return data.BasketDescription;
            },
            'Asset Class Name': function(data) {
                return data.IndexShortDisplayName;
            },

            'Weight %': function(data) {
                return data.Weight;
                //Growth.toAbsFixed(1)
            }
        };

    }

    AAGlobal.CommoditiesTableChartConfig = function(currentDOM) {
        this.DOM = currentDOM;
        this.Fields = {
            'As of Date': function(data) {
                return ((data.AsOnDate) ? $.datepicker.formatDate('mm/yy', $.datepicker.parseDate('yy-mm-dd', data.AsOnDate.split('T')[0])) : "-")
            },
            'Name': function(data) {
                return data.ShortDisplayName;
            },
            'Expected Return %': function(data) {
                return data.ExpectedReturn;
            },
            'Yield %': function(data) {
                return data.Yield;
            },

            'Growth %': function(data) {
                return data.Growth;
                //Growth.toAbsFixed(1)
            },
            'Roll Return %': function(data) {
                return data.RollReturn;
            },
            'Credit Loss %': function(data) {
                return data.CreditLoss;
            },
            'Collateral %': function(data) {
                return data.CollateralReturn;
            },
            'Rebalance %': function(data) {
                return data.RebalanceReturn;
            },
            'Valuation Change Return %': function(data) {
                return data.ValuationChange;
            },
            'FX Return %': function(data) {
                return data.FxReturn;
            },
            'Volatility %': function(data) {
                return data.Volatility;
            },
            'Confidence Interval -67 %': function(data) {
                return data.ConfidenceIntervalNegative1;
            },
            'Confidence Interval -95 %': function(data) {
                return data.ConfidenceIntervalNegative2;
            },
            'Confidence Interval 67 %': function(data) {
                return data.ConfidenceIntervalPositive1;
            },
            'Confidence Interval 95 %': function(data) {
                return data.ConfidenceIntervalPositive2;
            }
        };
    }
    AAGlobal.CommoditiesTableChartConfig.prototype = $.extend(true, {}, new AAGlobal.BaseTableChartConfig(), AAGlobal.CommoditiesTableChartConfig.prototype, {
        GetTemplate: function() {
            var templateHtmlString = "<table class='isortope'><thead class='fixedHeader'>" +
                "<th name='ShortDisplayName' class='col4 left'>Name</th>" +
                "<th name='ExpectedReturn' class='col5'>Expected Return</th>" +
                "<th name='Volatility' class='col5'>Volatility</th>" +
                "<th name='CollateralReturn' class='col5 hidden-sm hidden-xs'>Collateral</th>" +
                "<th name='RollReturn' class='col5 hidden-sm hidden-xs'>Roll Return</th>" +
                "<th name='RebalanceReturn' class='col5 hidden-sm hidden-xs'>Rebalance</th>" +
                "<th name='ValuationChange' class='col5 hidden-sm hidden-xs'>Valuation</th>" +
                "</thead>";

            templateHtmlString += "<tbody class='scrollContent'>{{#items}}<tr class={{CssClass}}>";
            templateHtmlString += "<td name='ShortDisplayName' class='col4 left'>{{ShortDisplayName}}</td>";

            templateHtmlString += "{{#ExpectedReturn}}<td  name='ExpectedReturn' class='col5 digits'><span class='numbers'>{{ExpectedReturn}}%</span></td>{{/ExpectedReturn}}";
            templateHtmlString += "{{^ExpectedReturn}}<td  name='ExpectedReturn' class='col5 digits'>-</td>{{/ExpectedReturn}}";

            templateHtmlString += "{{#Volatility}}<td name='Volatility' class='col5 digits'><span class='numbers'>{{Volatility}}%</span></td>{{/Volatility}}";
            templateHtmlString += "{{^Volatility}}<td name='Volatility' class='col5 digits'>-</td>{{/Volatility}}";

            templateHtmlString += "{{#CollateralReturn}}<td name='CollateralReturn' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>{{CollateralReturn}}%</span></td>{{/CollateralReturn}}";
            templateHtmlString += "{{^CollateralReturn}}<td name='CollateralReturn' class='col5 digits hidden-sm hidden-xs'>-</td>{{/CollateralReturn}}";

            templateHtmlString += "{{#RollReturn}}<td name='RollReturn' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>{{RollReturn}}%</span></td>{{/RollReturn}}";
            templateHtmlString += "{{^RollReturn}}<td name='RollReturn' class='col5 digits hidden-sm hidden-xs'>-</td>{{/RollReturn}}";

            templateHtmlString += "{{#RebalanceReturn}}<td name='RebalanceReturn' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>{{RebalanceReturn}}%</span></td>{{/RebalanceReturn}}";
            templateHtmlString += "{{^RebalanceReturn}}<td name='RebalanceReturn' class='col5 digits hidden-sm hidden-xs'>-</td>{{/RebalanceReturn}}";

            templateHtmlString += "{{#ValuationChange}}<td name='ValuationChange' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>{{ValuationChange}}%</span></td>{{/ValuationChange}}";
            templateHtmlString += "{{^ValuationChange}}<td name='ValuationChange' class='col5 digits hidden-sm hidden-xs'>-</td>{{/ValuationChange}}";

            templateHtmlString += "</tr>{{/items}}</tbody></table>";
            return templateHtmlString;
        },
        GetTemplateWithoutMustache:function(data){
            var templateHtmlString = "<table class='isortope'><thead class='fixedHeader'>" +
                "<th name='ShortDisplayName' class='col4 left'>Name</th>" +
                "<th name='ExpectedReturn' class='col5'>Expected Return</th>" +
                "<th name='Volatility' class='col5'>Volatility</th>" +
                "<th name='CollateralReturn' class='col5 hidden-sm hidden-xs'>Collateral</th>" +
                "<th name='RollReturn' class='col5 hidden-sm hidden-xs'>Roll Return</th>" +
                "<th name='RebalanceReturn' class='col5 hidden-sm hidden-xs'>Rebalance</th>" +
                "<th name='ValuationChange' class='col5 hidden-sm hidden-xs'>Valuation</th>" +
                "</thead>";
            templateHtmlString += "<tbody class='scrollContent'>";
            for(var i=0; i < data.items.length; ++i){
                var item = data.items[i];
                templateHtmlString += "<tr class = '" + item.CssClass + "'>";
                templateHtmlString += "<td name='DisplayName'' class='col5 left'>" +item.DisplayName + "</td>";
                if(item.ExpectedReturn !=undefined && item.ExpectedReturn!=null){
                    templateHtmlString += "<td  name='ExpectedReturn' class='col5 digits'><span class='numbers'>" + item.ExpectedReturn + "%</span></td>";
                }
                else{
                    templateHtmlString += "<td  name='ExpectedReturn' class='col5 digits'>-</td>";
                }
                if(item.Volatility!=undefined && item.Volatility!=null){
                    templateHtmlString += "<td name='Volatility' class='col5 digits'><span class='numbers'>" + item.Volatility + "%</span></td>";
                }
                else{
                    templateHtmlString += "<td  name='Volatility' class='col5 digits'>-</td>";
                }
                if(item.CollateralReturn !=undefined && item.CollateralReturn!=null){
                    templateHtmlString += "<td name='Yield' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>" + item.CollateralReturn + "%</span></td>";
                }
                else{
                    templateHtmlString += "<td  name='Yield' class='col5 digits hidden-sm hidden-xs'>-</td>";
                }
                if(item.RollReturn!=undefined && item.RollReturn!=null){
                    templateHtmlString += "<td name='RollReturn' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>" + item.RollReturn + "%</span></td>";
                }
                else{
                    templateHtmlString += "<td  name='RollReturn' class='col5 digits hidden-sm hidden-xs'>-</td>";
                }
                if(item.RebalanceReturn!=undefined && item.RebalanceReturn!=null){
                    templateHtmlString += "<td name='RollReturn' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>" + item.RebalanceReturn + "%</span></td>";
                }
                else{
                    templateHtmlString += "<td  name='RollReturn' class='col5 digits hidden-sm hidden-xs'>-</td>";
                }
                if(item.ValuationChange!=undefined && item.ValuationChange!=null){
                    templateHtmlString += "<td name='ValuationChange' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>" + item.ValuationChange + "%</span></td>";
                }
                else{
                    templateHtmlString += "<td  name='ValuationChange' class='col5 digits hidden-sm hidden-xs'>-</td>";
                }
                templateHtmlString += '</tr>';
            }
             templateHtmlString += "</tbody></table>";
            return templateHtmlString;
        },
        AddDisclosure: function(obj) {
            var disclosureText = "<div class='summary tableConfg'>" + GetDisclaimerText("COMMODITIES_HERO") + "</div>";
            if ($(obj).siblings('.summary').length) {
                $(obj).siblings('.summary').remove()
            }
            $(obj).after(disclosureText);
        },

        InitializeAndSortColumn: function(thObject) {
            var heroEquitiesTableViewDefaults = this;
            heroEquitiesTableViewDefaults.Init();
            if (!thObject) {
                thObject = $(heroEquitiesTableViewDefaults.DOM).find('th').get(0);
            }
            var asc = true;
            if ($(thObject).hasClass('data-asc')) {
                asc = false;
            }

            $(heroEquitiesTableViewDefaults.DOM).find('th').removeClass('data-asc').removeClass('data-desc');
            $(heroEquitiesTableViewDefaults.DOM).find('.sort-arrow').remove();


            var options = {
                layoutMode: 'vertical',
                getSortData: {}
            };

            var className = $(thObject).attr('name');
            options.sortBy = className;

            options.sortAscending = asc;
            $(thObject).addClass(asc ? 'data-asc' : 'data-desc').append("<span class='sort-arrow'></span>");

            $.each($(heroEquitiesTableViewDefaults.DOM).find('th'), function(dataIndex, dataObject) {
                var prop = $(dataObject).attr('name').replace(" ", '');
                options.getSortData[prop] = function(object) {
                    var value = Number($(object).find('[name=' + prop + ']').text().replace('%', ''));
                    return isNaN(value) ? -999 : value;
                };

            });

            options.getSortData.ShortDisplayName = function(object) {
                return $(object).find('[name=ShortDisplayName]').text();
            };

            options.getSortData.MarketCategory = function(object) {
                return $(object).find('[name=MarketCategory]').text();
            };

            $(heroEquitiesTableViewDefaults.DOM).find('tbody').isotope(options);

        }
    });

    AAGlobal.CurrenciesTableChartConfig = function(currentDOM) {
        this.DOM = currentDOM;
        this.Fields = {
            'As of Date': function(data) {
                return ((data.AsOnDate) ? $.datepicker.formatDate('mm/yy', $.datepicker.parseDate('yy-mm-dd', data.AsOnDate.split('T')[0])) : "-")
            },
            'Country': function(data) {
                return data.ShortDisplayName;
            },
            'Expected Return %': function(data) {
                return data.ExpectedReturn;
            },
            'Yield %': function(data) {
                return data.Yield;
            },
            'Growth %': function(data) {
                return data.Growth;
                //Growth.toAbsFixed(1)
            },
            'Roll Return %': function(data) {
                return data.RollReturn;
            },
            'Credit Loss %': function(data) {
                return data.CreditLoss;
            },
            'Collateral %': function(data) {
                return data.CollateralReturn;
            },
            'Rebalance %': function(data) {
                return data.RebalanceReturn;
            },
            'Valuation Change Return %': function(data) {
                return data.ValuationChange;
            },
            'FX Return %': function(data) {
                return data.FxReturn;
            },
            'Volatility %': function(data) {
                return data.Volatility;
            },
            'Confidence Interval -67 %': function(data) {
                return data.ConfidenceIntervalNegative1;
            },
            'Confidence Interval -95 %': function(data) {
                return data.ConfidenceIntervalNegative2;
            },
            'Confidence Interval 67 %': function(data) {
                return data.ConfidenceIntervalPositive1;
            },
            'Confidence Interval 95 %': function(data) {
                return data.ConfidenceIntervalPositive2;
            }
        };
    }

    AAGlobal.CurrenciesTableChartConfig.prototype = $.extend(true, {}, new AAGlobal.BaseTableChartConfig(), AAGlobal.CurrenciesTableChartConfig.prototype, {
        GetTemplate: function() {
            var templateHtmlString = "<table class='isortope'><thead class='fixedHeader'>" +
                "<th name='ShortDisplayName' class='col4 left'>Name</th>" +
                "<th name='ExpectedReturn' class='col5'>Expected Return</th>" +
                "<th name='Yield' class='col5'>Cash Rate</th>" +
                "<th name='FxReturn' class='col5 hidden-sm hidden-xs'>FX</th>" +
                 "<th name='Volatility' class='col5 hidden-sm hidden-xs'>Volatility</th>" +
                "</thead>";

            templateHtmlString += "<tbody class='scrollContent'>{{#items}}<tr data={{CssClass}}>";
            templateHtmlString += "<td name='ShortDisplayName' class='col4 left'>{{ShortDisplayName}}</td>";

            templateHtmlString += "{{#ExpectedReturn}}<td  name='ExpectedReturn' class='col5 digits'><span class='numbers last-child'>{{ExpectedReturn}}%</span></td>{{/ExpectedReturn}}";
            templateHtmlString += "{{^ExpectedReturn}}<td  name='ExpectedReturn' class='col5 digits'>-</td>{{/ExpectedReturn}}";

            templateHtmlString += "{{#Yield}}<td  name='Yield' class='col5 digits'><span class='numbers last-child'>{{Yield}}%</span></td>{{/Yield}}";
            templateHtmlString += "{{^Yield}}<td  name='Yield' class='col5 digits'>-</td>{{/Yield}}";

            templateHtmlString += "{{#FxReturn}}<td  name='FxReturn' class='col5 digits hidden-sm hidden-xs'><span class='numbers last-child'>{{FxReturn}}%</span></td>{{/FxReturn}}";
            templateHtmlString += "{{^FxReturn}}<td  name='FxReturn' class='col5 digits hidden-sm hidden-xs'>-</td>{{/FxReturn}}";
            templateHtmlString += "{{#Volatility}}<td name='Volatility' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>{{Volatility}}%</span></td>{{/Volatility}}";
            templateHtmlString += "{{^Volatility}}<td name='Volatility' class='col5 digits hidden-sm hidden-xs'>-</td>{{/Volatility}}";
            templateHtmlString += "</tr>{{/items}}</tbody></table>";
            return templateHtmlString;
        },
        GetTemplateWithoutMustache:function(data){
            var templateHtmlString = "<table class='isortope'><thead class='fixedHeader'>" +
                "<th name='ShortDisplayName' class='col4 left'>Name</th>" +
                "<th name='ExpectedReturn' class='col5'>Expected Return</th>" +
                "<th name='Yield' class='col5'>Cash Rate</th>" +
                "<th name='FxReturn' class='col5 hidden-sm hidden-xs'>FX</th>" +
                 "<th name='Volatility' class='col5 hidden-sm hidden-xs'>Volatility</th>" +
                "</thead>";
            templateHtmlString += "<tbody class='scrollContent'>";
            for(var i=0; i < data.items.length; ++i){
                var item = data.items[i];
                templateHtmlString += "<tr data = '" + item.CssClass + "'>";
                templateHtmlString += "<td name='ShortDisplayName'' class='col5 left'>" +item.ShortDisplayName + "</td>";
                if(item.ExpectedReturn !=undefined && item.ExpectedReturn!=null){
                    templateHtmlString += "<td  name='ExpectedReturn' class='col5 digits'><span class='numbers'>" + item.ExpectedReturn + "%</span></td>";
                }
                else{
                    templateHtmlString += "<td  name='ExpectedReturn' class='col5 digits'>-</td>";
                }
                if(item.Yield !=undefined && item.Yield!=null){
                    templateHtmlString += "<td name='Yield' class='col5 digits hidden-sm hidden-xs'><span class='numbers'>" + item.Yield + "%</span></td>";
                }
                else{
                    templateHtmlString += "<td  name='Yield' class='col5 digits'>-</td>";
                }
                if(item.FxReturn!=undefined && item.FxReturn!=null){
                    templateHtmlString += "<td  name='FxReturn' class='col5 digits hidden-sm hidden-xs'><span class='numbers last-child'>" + item.FxReturn + "%</span></td>";
                }
                else{
                    templateHtmlString += "<td  name='FxReturn' class='col5 digits hidden-sm hidden-xs'>-</td>";
                }
                if(item.Volatility!=undefined && item.Volatility!=null){
                    templateHtmlString += "<td name='Volatility' class='col5 digits'><span class='numbers'>" + item.Volatility + "%</span></td>";
                }
                else{
                    templateHtmlString += "<td  name='Volatility' class='col5 digits hidden-sm hidden-xs'>-</td>";
                }

                templateHtmlString += '</tr>';
            }
             templateHtmlString += "</tbody></table>";
            return templateHtmlString;
        },
        AddDisclosure: function(obj) {
            var disclosureText = "<div class='summary tableConfg'>" + GetDisclaimerText("CURRENCIES_HERO") + "</div>";
            if ($(obj).siblings('.summary').length) {
                $(obj).siblings('.summary').remove()
            }
            $(obj).after(disclosureText);
        },

        InitializeAndSortColumn: function(thObject) {
            var heroEquitiesTableViewDefaults = this;
            heroEquitiesTableViewDefaults.Init();
            if (!thObject) {
                thObject = $(heroEquitiesTableViewDefaults.DOM).find('th').get(0);
            }
            var asc = true;
            if ($(thObject).hasClass('data-asc')) {
                asc = false;
            }

            $(heroEquitiesTableViewDefaults.DOM).find('th').removeClass('data-asc').removeClass('data-desc');
            $(heroEquitiesTableViewDefaults.DOM).find('.sort-arrow').remove();


            var options = {
                layoutMode: 'vertical',
                getSortData: {}
            };

            var className = $(thObject).attr('name');
            options.sortBy = className;

            options.sortAscending = asc;
            $(thObject).addClass(asc ? 'data-asc' : 'data-desc').append("<span class='sort-arrow'></span>");

            $.each($(heroEquitiesTableViewDefaults.DOM).find('th'), function(dataIndex, dataObject) {
                var prop = $(dataObject).attr('name').replace(" ", '');
                options.getSortData[prop] = function(object) {
                    var value = Number($(object).find('[name=' + prop + ']').text().replace('%', ''));
                    return isNaN(value) ? -999 : value;
                };

            });

            options.getSortData.ShortDisplayName = function(object) {
                return $(object).find('[name=ShortDisplayName]').text();
            };

            options.getSortData.MarketCategory = function(object) {
                return $(object).find('[name=MarketCategory]').text();
            };

            $(heroEquitiesTableViewDefaults.DOM).find('tbody').isotope(options);

        }
    });
    //#endregion
    
    AAGlobal.YieldCurveCountriesChartConfig = function(currentDOM, data, options) {
        var yieldCurveChart = this;

        this.DOM = currentDOM;
        this.Data = data;
        this.Width = '800';
        this.Height = '576';
        this.YField = 'DataValue';
        this.XField = 'Tenor',
            this.DefaultTooltipSelector = options.defaultTooltipSelector || '.forecasted-item-details';

        this.IgnoreXFieldCategories = ['AVGINF', 'SLOPE'];
        this.YieldCurveTenorCategories = {
            '3M': true,
            '10Y': true
        };
        this.YieldCurveDefaultTenorCategory = '3M';
        var categoryName = options.categoryName || 'Country';
        var categories = options.categories || ['CURRENT', 'FORECASTED', 'HISTORICAL'];
        var categoriesWithDefaults = [{
            Css: 'developedMkts',
            Color: 'rgb(0,82,147)',
            ForeColor: 'rgb(0,82,147)',
            Symbol: 'circle'
        }, {
            Css: 'emergingMkts',
            Color: 'rgb(0,101,66)',
            ForeColor: 'rgb(0,101,66)',
            Symbol: 'circle'
        }, {
            Css: 'usMkts',
            Color: 'rgb(153,0,0)',
            ForeColor: 'rgb(153,0,0)',
            Symbol: 'circle'
        }, {
            Css: 'cashMkts',
            Color: 'rgb(42,42,42)',
            ForeColor: 'rgb(42,42,42)',
            Symbol: 'circle'
        }];
        this.Categories = categoriesWithDefaults.splice(0, categories.length);
        $.each(categories, function(categoryIndex, category) {
            yieldCurveChart.Categories[categoryIndex] = $.extend(true, yieldCurveChart.Categories[categoryIndex], {
                Name: category,
                Label: category,
                ImageUrl: options.imageUrls[categoryIndex]
            });
        });
        this.Credits = {
            enabled: false,
            text: '©' + asofYear + ' Research Affiliates, LLC. All Rights Reserved.',
            href: 'http://www.rallc.com'
        };
        this.XAxis = {
            title: {
                enabled: false
            },
            type: 'datetime',
            min: 0.5,
            maxPadding: 0,
            endOnTick: false,
            startOnTick: false,
            showFirstLabel: true,
            tickmarkPlacement: 'on',
            minRange: 2,
            lineWidth: 1,
            lineColor: '#7f7f7f',
            gridLineColor: '#CDCDCD',
            gridLineWidth: 0,
            tickWidth: 0
        };
        this.YAxis = {
            title: {
                enabled: false
            },
            gridLineWidth: 1,
            gridLineColor: '#CDCDCD',
            lineWidth: 1,
            lineColor: '#7f7f7f',
            minRange: 2,
            labels: {
                format: '{value}%',
                style: {
                    fontFamily: '"Whitney A", "Whitney B"',
					fontStyle: 'italic',
					fontWeight: '400',
					color: '#898b8e',
					fontSize: '14px',
					lineHeight: '33px',
					letterSpacing: '.5px'
                }
            }

        };
        this.CategoryField = options.categoryField || 'YieldCurveDataType';
        var titleText = categoryName.toUpperCase() + ' ESTIMATED';
        this.Legend = {
            enabled: false
        };
        this.Tooltip = {
            useHTML: true,
            borderRadius: 0,
            borderWidth: 0,
            shadow: false,
            followPointer: false,
            crosshairs: true,
            hideDelay: 0,
            shared: true,
            enabled: true,
            positioner: function(labelWidth, labelHeight, point) {
                var xPos = point.plotX + 60;
                if (point.plotX - labelWidth > 0) {
                    xPos = point.plotX - labelWidth + 40;
                }
                var offsetTop = $(this.chart.container).offset().top - $('#innerContainer').offset().top;

                /*if ($.browser && $.browser.msie && $.browser.version < 9) {
                    offsetTop = 0;
                }*/

                return {
                    x: this.chart.plotLeft - 5,
                    y: -4
                };
            },
            backgroundColor: 'none',
            formatter: function() {
                return AAGlobal.ComparisonToolTipYieldCurveFormatter(yieldCurveChart.Categories, this.points);
            }
        };
        this.Title = {
            customText: titleText,
            text: ''
        };
        this.SubTitle = {
            customText: 'REAL YIELD CURVES',
            text: ''
        };
    }
    AAGlobal.YieldCurveCountriesChartConfig.prototype = $.extend(true, {}, new AAGlobal.HeroChartConfig(), AAGlobal.YieldCurveCountriesChartConfig.prototype, {
        GetPlotOptions: function() {
            return {
                spline: {
                    connectNulls: true,
                    dataLabels: {
                        enabled: false
                    },
                    stickyTracking: false,
                    tooltip: {
                        followPointer: false,
                        crosshairs: false,
                        hideDelay: 0,
                        shared: false
                    },
                    events: {
                        legendItemClick: function(event) {
                            return false;
                        }
                    }
                }
            };
        },

        Callback: function(chart) {

            var titleElement = chart.renderer.text(
                chart.userOptions.title.customText + '<br/>' + chart.userOptions.subtitle.customText,
                chart.plotLeft + chart.plotWidth,
                chart.plotTop + chart.plotHeight - 50
            ).attr({
                'zIndex': '1',
                'text-anchor': 'end'
            }).css({
                color: '#989898',
                fontFamily: '"Whitney A", "Whitney B"',
                fontSize: '40px',
                lineHeight: '40px',
                fontWeight: 'normal'
            }).add();

            /*if ($.browser && $.browser.msie && $.browser.version < 9) {
                window.setTimeout(function() {
                    $(titleElement.element).css({
                        'left': (parseInt($(titleElement.element).css('left')) - titleElement.getBBox().width) + 'px',
                        'text-align': 'right'
                    });
                }, 100);
            }*/
        },

        GetCategories: function() {
            var ignore = {};
            var yieldCurveChart = this;
            $.each(this.IgnoreXFieldCategories, function() {
                ignore[this] = true;
            });


            return $.Enumerable.From(this.Data).Where(function(record) {
                return ignore[$.trim(record[yieldCurveChart.XField])] != true
            }).Select('$.' + this.XField).Distinct().ToArray();
        },

        GetSplineSeriesData: function(category, series) {

            return {
                lineWidth: 1,
                color: category.Color,
                marker: {
                    symbol: category.Symbol,
                    fillColor: category.Color
                        /*,
                                            lineColor: category.Color ,
                                            lineWidth: 1 */
                },
                states: {
                    hover: {

                        halo: {
                            opacity: 0
                        }
                    }
                },

                name: category.Label,
                dataLabels: {
                    enabled: false
                },
                ImageUrl: category.ImageUrl,
                data: series
            }
        },

        GetSeriesData: function() {
            var yieldCurveChart = this;
            var categoryData = [];
            var ignore = {};
            $.each(this.IgnoreXFieldCategories, function() {
                ignore[this] = true;
            });

            $.each(yieldCurveChart.Categories, function(categoryIndex, category) {

                var values = $(yieldCurveChart.Data).filter(function() {
                    return (this[yieldCurveChart.CategoryField] == category.Name && (yieldCurveChart['YieldCurveTenorCategories'][this[yieldCurveChart.XField]] == true));
                }).toArray();

                var seriesData = yieldCurveChart.CreateHighChartData($(yieldCurveChart.Data).filter(function() {
                    return this[yieldCurveChart.CategoryField] == category.Name && ignore[$.trim(this[yieldCurveChart.XField])] != true
                }).toArray(), values);

                seriesData.legendColor = category.Color;

                categoryData.push(seriesData);
            });

            this.UpdateDefaultTooltip(categoryData);
            return categoryData;
        },

        UpdateDefaultTooltip: function(categoryData) {
            var defaultPoints = [];
            //YieldCurveDefaultTenorCategory
            $.each(categoryData, function(indexCategory, objectCategory) {
                defaultPoints.push({
                    key: objectCategory[0].name,
                    point: {
                        DataValue: objectCategory[0].DataValue,
                        CountryName: objectCategory[0].CountryName,
                        YieldCurveDataType: objectCategory[0].YieldCurveDataType,
                        series: {
                            color: objectCategory.legendColor
                        }
                    }
                });
            });
            $(this.DefaultTooltipSelector).html(AAGlobal.ComparisonToolTipYieldCurveFormatter(this.Categories, defaultPoints));

        },

        CreateHighChartData: function(data, values) {
            var interLineJoiningData = [];
            var yieldCurveChart = this;

            var categories = ['3M', '1Y', '2Y', '3Y', '4Y', '5Y', '6Y', '7Y', '8Y', '9Y', '10Y', '11Y', '12Y', '13Y', '14Y', '15Y'];

            $.each(categories, function(index, tenor) {

                var point = $.Enumerable.From(data).FirstOrDefault(null, function(record) {
                    return record[yieldCurveChart.XField] == tenor;
                });

                if (!point) {
                    var y = null;

                    interLineJoiningData.push({
                        name: tenor,
                        y: y
                    });



                } else {

                    point.y = Number(point.DataValue);

                    point.name = point[yieldCurveChart.XField];
                    var category = $.Enumerable.From(yieldCurveChart.Categories).First("$.Name=='" + point[yieldCurveChart.CategoryField] + "'");
                    point.CssClass = category.Css;

                    if (values.length > 1) {
                        point['3M'] = values[0].DataValue;
                        point['10Y'] = values[1].DataValue;
                        if (point['3M'] && point['10Y']) {
                            point['Slope'] = (Number(values[1].DataValue) - Number(values[0].DataValue)).toAbsFixed(1);
                        }
                    } else if (values.length == 1) {
                        point[values[0][yieldCurveChart.XField]] = values[0].DataValue;
                    }
                    interLineJoiningData.push(point);
                }


            });

            return interLineJoiningData;

        },
        GetConfiguration: function(seriesData, categories) {
            var yieldCurveChart = this;
            yieldCurveChart.Credits.text = GetDisclaimerText("FIXED_INCOME_COMPARISON");
            return {
                chart: {
                    type: 'spline',
                    spacingRight: 25,
                    spacingTop: 35,
                    plotBackgroundColor: '#ebebeb',
                    events: {
                        redraw: function() {
                            window.setTimeout(function() {
                                yieldCurveChart.Callback($(yieldCurveChart.DOM).highcharts());
                            }, 500);
                        }
                    }
                },
                title: this.Title,
                subtitle: this.SubTitle,
                xAxis: $.extend(this.XAxis, {
                    type: 'category',
                    max: categories.length - 1.5
                }),
                yAxis: this.YAxis,
                legend: this.Legend,
                credits: this.Credits,
                exporting: this.Exporting,
                tooltip: this.Tooltip,
                plotOptions: this.GetPlotOptions(),
                series: seriesData
            };
        },
        AddDisclosure: function(obj) {
            var disclosureText = "<div class='summary'>" + GetDisclaimerText("FIXED_INCOME_COMPARISON") + "</div>";
            var x = $("#yieldCurveCountry").find(".disclosure");
            if (parseInt(x.length) > 0) {
                $(x).empty().append(disclosureText);
            }
        }


    });

    //** RISK VOLATILITY COMPARE BEGIN **//


    AAGlobal.RiskVolatilityChartConfig = function(currentDOM, data, options) {
        var RiskVolatilityChart = this;

        this.DOM = currentDOM;
        this.Data = data;
        this.Width = parseInt($('.container').width())-66;
        this.Height = '576';
        this.YField = 'DataValue';
        this.XField = 'DataDate';
        this.ForecastedTooltipSelector = options.forecastedTooltipSelector || '.forecasted-item-details';
        this.Forecasted = options.Forecasted;
        this.CategoryCodes = options.categories;
        var categoriesWithDefaults = [{
            Css: 'developedMkts',
            Color: 'rgb(0,82,147)',
            ForeColor: 'rgb(0,82,147)',
            Symbol: 'circle'
        }, {
            Css: 'emergingMkts',
            Color: 'rgb(0,101,66)',
            ForeColor: 'rgb(0,101,66)',
            Symbol: 'circle'
        }, {
            Css: 'usMkts',
            Color: 'rgb(153,0,0)',
            ForeColor: 'rgb(153,0,0)',
            Symbol: 'circle'
        }, {
            Css: 'cashMkts',
            Color: 'rgb(42,42,42)',
            ForeColor: 'rgb(42,42,42)',
            Symbol: 'circle'
        }];
        this.Categories = categoriesWithDefaults.splice(0, this.CategoryCodes.length);
        $.each(this.CategoryCodes, function(categoryIndex, category) {
            RiskVolatilityChart.Categories[categoryIndex] = $.extend(true, RiskVolatilityChart.Categories[categoryIndex], {
                Name: category,
                Label: category
            });
        });
        this.Credits = {
            enabled: false,
            text: '©' + asofYear + ' Research Affiliates, LLC. All Rights Reserved.',
            href: 'http://www.rallc.com'
        };
        this.XAxis = {
            title: {
                enabled: false
            },
            type: 'datetime',
            lineWidth: 1,
            lineColor: '#CDCDCD',
            showLastLabel: false,
            tickInterval: 24 * 3600 * 1000 * 365,
            endOnTick: false

        };
        this.YAxis = {
            title: {
                enabled: false
            },
            gridLineWidth: 1,
            gridLineColor: '#CDCDCD',
            lineWidth: 1,
            lineColor: '#CDCDCD',
            minRange: 2,
            endOnTick: true,
            startOnTick: true,
            maxPadding: 0,
            minPadding: 0,
            labels: {
                format: '{value}%',
                style: {
                    fontFamily: '"Whitney A", "Whitney B"',
					fontStyle: 'italic',
					fontWeight: '400',
					color: '#898b8e',
					fontSize: '14px',
					lineHeight: '33px',
					letterSpacing: '.5px'
                }
            }

        };
        this.CategoryField = 'ReferenceCode';

        this.Legend = {
            enabled: false
        };

        this.Title = {
            text: 'HISTORICAL 10-YR VOLATILITY',
            align: 'right',
            style: {
                color: '#989898',
                fontFamily: '"Whitney A", "Whitney B"',
                fontSize: '40px',
                fontWeight: 'normal'
            },
            verticalAlign: 'bottom',
            floating: true,
            x: -25,
            y: -30
        };
        this.Tooltip = {
            useHTML: true,
            borderRadius: 0,
            borderWidth: 0,
            shadow: false,
            followPointer: false,
            crosshairs: true,
            hideDelay: 0,
            shared: true,
            enabled: true,
            positioner: function(labelWidth, labelHeight, point) {
                var xPos = point.plotX + 60;
                if (point.plotX - labelWidth > 0) {
                    xPos = point.plotX - labelWidth + 40;
                }
                //var offsetTop = 16; // $(this.chart.container).offset().top - $($(this.chart.container).parents('td')[0]).offset().top;
                //var offsetLeft = $(this.chart.container).offset().left - $($(this.chart.container).parents('td')[0]).offset().left;
                /*if ($.browser && $.browser.msie && $.browser.version < 9) {
                    offsetTop = 15;
                    offsetLeft = 0;
                }*/
                return {
                    x: this.chart.plotLeft - 5,
                    y: -4
                };
            },
            backgroundColor: 'none',

            formatter: function() {

                return AAGlobal.ComparisionTooltipFormatter(RiskVolatilityChart.Categories, this.x, 'DataValue', 'ReferenceCode', this.points);
            }
        };
        this.Fields = {
            'As of Date': function(data) {
                return data.DataDate;
            },
            'Volatility': function(data) {
                return data.DataValue;
            },
            'Market': function(data) {
                return data.DisplayName;
            }

        };

    };
    AAGlobal.RiskVolatilityChartConfig.prototype = $.extend(true, {}, new AAGlobal.HeroChartConfig(), AAGlobal.RiskVolatilityChartConfig.prototype, {
        GetPlotOptions: function() {
            return {
                series: {
                    connectNulls: true,
                    dataLabels: {
                        enabled: false
                    },
                    stickyTracking: false,
                    tooltip: {
                        enabled: true,
                        crosshairs: true
                    },
                    marker: {
                        symbol: 'circle'
                    },
                    events: {
                        legendItemClick: function(event) {
                            return false;
                        }
                    }
                }
            };
        },

        Callback: function(chart) {

            chart.renderer.rect(
                chart.plotLeft + chart.plotWidth,
                chart.plotTop,
                chart.userOptions.chart.spacingRight,
                chart.plotHeight
            ).attr({
                'stroke-width': 1,
                stroke: '#fff',
                fill: '#fff'
            }).add();
            chart.renderer.rect(
                chart.plotLeft,
                chart.plotTop - chart.userOptions.chart.spacingTop,
                chart.userOptions.chart.spacingRight + chart.plotWidth,
                chart.userOptions.chart.spacingTop
            ).attr({
                'stroke-width': 1,
                stroke: '#fff',
                fill: '#fff'
            }).add();
            $.each(chart.series, function(seriesIndex, series) {
                if (series.type == 'scatter') {
                    var dataCount = series.data.length;
                    var point = series.data[dataCount - 1];
                    if (point != null && point.y) {

                        if (point['ShortDisplayName']) {

                            /*chart.renderer.text(
									point['ShortDisplayName'],
									point.plotX + chart.plotLeft + 10,
									point.plotY + chart.plotTop
							).attr({
								'zIndex': '5',
								'class': 'shape-ratio-text',
								'text-anchor': 'start'
							}).css({ fontSize: '0.9em', color: series.color }).add();*/

                        }
                    }
                }
            });
            var forecastTextElement = chart.renderer.text(
                '10-YR<br/>FORECAST',
                chart.plotLeft + chart.plotWidth - 5,
                chart.plotTop + chart.plotHeight + 20
            ).attr({
                'zIndex': '5',
                'class': 'shape-ratio-text',
                'text-anchor': 'middle'
            }).css({
                fontSize: '0.9em',
                color: '#707070',
                lineHeight: '14px'
            }).add();

            /*if ($.browser && $.browser.msie && $.browser.version < 9) {
                window.setTimeout(function() {
                    $(forecastTextElement.element).css({
                        'left': (parseInt($(forecastTextElement.element).css('left')) - forecastTextElement.getBBox().width / 2) + 'px',
                        'text-align': 'center'
                    });
                }, 100);
            }*/
        },

        GetSplineSeriesData: function(category, series) {

            return {
                lineWidth: 1,
                color: category.Color,
                marker: {
                    enabled: false
                },
                states: {
                    hover: {

                        halo: {
                            opacity: 0
                        }
                    }
                },

                name: category.Label,
                dataLabels: {
                    enabled: false
                },
                data: series
            }
        },

        GetSeriesData: function() {
            var RiskVolatilityChartConfig = this;
            var categoryData = {
                Rolling: [],
                Forecasted: []
            };



            $.each(RiskVolatilityChartConfig.Categories, function(categoryIndex, category) {

                var filteredData = $(RiskVolatilityChartConfig.Data).filter(function() {
                    return (this[RiskVolatilityChartConfig.CategoryField] == category.Name);
                }).toArray();

                var seriesData = RiskVolatilityChartConfig.CreateHighChartData(filteredData, false);

                categoryData.Rolling.push(seriesData);

                var filteredForecastedData = $(RiskVolatilityChartConfig.Forecasted).filter(function() {
                    return (this[RiskVolatilityChartConfig.CategoryField] == category.Name);
                }).toArray();

                var seriesForecastedData = RiskVolatilityChartConfig.CreateHighChartData(filteredForecastedData, true);

                seriesForecastedData.legendColor = category.Color;
                categoryData.Forecasted.push(seriesForecastedData);

            });

            this.UpdateForecastedTooltip(categoryData.Forecasted);
            return categoryData;
        },

        UpdateForecastedTooltip: function(forecastedCategory) {
            var forecastedPoints = [];

            $.each(forecastedCategory, function(foreCastedIndex, foreCastedObject) {
                forecastedPoints.push({
                    point: {
                        DataValue: foreCastedObject[0].DataValue,
                        ReferenceCode: foreCastedObject[0].ReferenceCode,
                        series: {
                            color: foreCastedObject.legendColor
                        }
                    }
                });
            });
            $(this.ForecastedTooltipSelector).html(AAGlobal.ComparisionTooltipFormatter(this.Categories, '', 'DataValue', 'ReferenceCode', forecastedPoints));

        },

        GetScatterSeriesData: function(category, series) {

            return {
                type: 'scatter',
                color: category.Color,
                marker: {
                    symbol: 'circle'
                },
                states: {
                    hover: {

                        halo: {
                            opacity: 0
                        }
                    }
                },
                ImageUrl: category.ImageUrl,
                name: category.Label,
                dataLabels: {
                    enabled: false
                },
                data: series
            }
        },
        CreateHighChartData: function(filteredData, isForecasted) {
            var seriesData = [];
            var RiskVolatilityChart = this;
            $.each(filteredData, function(dataIndex, dataObject) {
                var pointData = $.extend(true, {}, dataObject);
                pointData.y = pointData[RiskVolatilityChart.YField];

                pointData.x = pointData[RiskVolatilityChart.XField];
                if (pointData.x && typeof pointData.x == 'string') {

                    /*if ($.browser.safari) {($.browser.msie && $.browser.version < 9) || 
                        var dateString = pointData.x.split("T");
                        pointData.x = $.datepicker.parseDate('yy-mm-dd', dateString[0]);
                    } else {*/
                        pointData.x = new Date(pointData.x);
                    /*}*/

                    if (isForecasted) {
                        pointData.x = pointData.x.setMonth(pointData.x.getMonth() + 2);
                    }
                }
                seriesData.push(pointData);
            });
            return seriesData;

        },
        GetConfiguration: function(seriesData) {
            var RiskVolatilityChart = this;
            RiskVolatilityChart.Credits.text = GetDisclaimerText("RISK_VOL");
            return {
                chart: {
                    type: 'line',
                    spacingRight: 25,
                    spacingTop: 35,
                    plotBackgroundColor: '#ebebeb',
                    events: {
                        redraw: function() {
                            window.setTimeout(function() {
                                RiskVolatilityChart.Callback($(RiskVolatilityChart.DOM).highcharts());
                            }, 500);
                        }
                    }
                },
                title: this.Title,
                subtitle: this.SubTitle,
                xAxis: this.XAxis,
                yAxis: this.YAxis,
                legend: this.Legend,
                credits: this.Credits,
                exporting: this.Exporting,
                tooltip: this.Tooltip,
                plotOptions: this.GetPlotOptions(),
                series: seriesData
            };
        },
        AddDisclosure: function(obj) {
            var disclosureText = "<div class='summary'>" + GetDisclaimerText("RISK_VOL") + "</div>";
            var x = $("#volatilityCurveCompare").find(".disclosure");
            if (parseInt(x.length) > 0) {
                $(x).empty().append(disclosureText);
            }
        }

    });

    //** RISK VOLATILITY COMPARE END**//    

    AAGlobal.CurrenciesCountriesChartConfig = function(currentDOM, data, options) {
        var CurrenciesCountriesChart = this;

        this.DOM = currentDOM;
        this.Data = data;
        this.Width = '800';
        this.Height = '576';
        this.YField = 'DataValue';
        this.XField = 'DataDate';
        this.ForecastedTooltipSelector = options.forecastedTooltipSelector;
        this.Forecasted = options.Forecasted;
        this.CategoryCodes = options.categories;
        var categoriesWithDefaults = [{
            Css: 'developedMkts',
            Color: 'rgb(0,82,147)',
            ForeColor: 'rgb(0,82,147)',
            Symbol: 'circle'
        }, {
            Css: 'emergingMkts',
            Color: 'rgb(0,101,66)',
            ForeColor: 'rgb(0,101,66)',
            Symbol: 'circle'
        }, {
            Css: 'usMkts',
            Color: 'rgb(153,0,0)',
            ForeColor: 'rgb(153,0,0)',
            Symbol: 'circle'
        }, {
            Css: 'cashMkts',
            Color: 'rgb(42,42,42)',
            ForeColor: 'rgb(42,42,42)',
            Symbol: 'circle'
        }, {
            Css: 'cashMkts',
            Color: 'rgb(227,142,39)',
            ForeColor: 'rgb(227,142,39)',
            Symbol: 'circle'
        }];
        this.Categories = categoriesWithDefaults.splice(0, this.CategoryCodes.length);
        $.each(this.CategoryCodes, function(categoryIndex, category) {
            CurrenciesCountriesChart.Categories[categoryIndex] = $.extend(true, CurrenciesCountriesChart.Categories[categoryIndex], {
                Name: category,
                Label: category,
                ImageUrl: options.imageUrls[categoryIndex]
            });
        });
        this.Credits = {
            enabled: false,
            text: '©' + asofYear + ' Research Affiliates, LLC. All Rights Reserved.',
            href: 'http://www.rallc.com'
        };
        this.XAxis = {
            title: {
                enabled: false
            },
            type: 'datetime',
            lineWidth: 1,
            lineColor: '#CDCDCD',
            showLastLabel: false,
            endOnTick: false,
            tickInterval: 24 * 3600 * 1000 * 360

        };
        this.YAxis = {
            title: {
                enabled: false
            },
            gridLineWidth: 1,
            gridLineColor: '#CDCDCD',
            lineWidth: 1,
            lineColor: '#CDCDCD',
            minRange: 2,
            endOnTick: true,
            startOnTick: true,
            maxPadding: 0,
            minPadding: 0,
            labels: {
                format: '{value}%',
                style: {
                    fontFamily: '"Whitney A", "Whitney B"',
					fontStyle: 'italic',
					fontWeight: '400',
					color: '#898b8e',
					fontSize: '14px',
					lineHeight: '33px',
					letterSpacing: '.5px'
                }
            }

        };
        this.CategoryField = 'CountryCode';

        this.Legend = {
            enabled: false
        };

        this.Title = {
            text: 'HISTORICAL REAL PRICE (USD)',
            align: 'right',
            style: {
                color: '#989898',
                fontFamily: '"Whitney A", "Whitney B"',
                fontSize: '40px',
                fontWeight: 'normal'
            },
            verticalAlign: 'bottom',
            floating: true,
            x: -25,
            y: -30
        };
        this.Tooltip = {
            useHTML: true,
            borderRadius: 0,
            borderWidth: 0,
            shadow: false,
            followPointer: false,
            crosshairs: true,
            hideDelay: 0,
            shared: true,
            enabled: true,
            positioner: function(labelWidth, labelHeight, point) {
                var xPos = point.plotX + 60;
                if (point.plotX - labelWidth > 0) {
                    xPos = point.plotX - labelWidth + 40;
                }
                var offsetTop = $(this.chart.container).offset().top - $('#innerContainer').offset().top;

                /*if ($.browser && $.browser.msie && $.browser.version < 9) {
                    offsetTop = 0;
                }*/

                return {
                    x: this.chart.plotLeft - 5,
                    y: -4
                };
            },
            backgroundColor: 'none',

            formatter: function() {

                return AAGlobal.ComparisionTooltipFormatter(CurrenciesCountriesChart.Categories, this.x, 'DataValue', 'CountryCode', this.points);
            }
        };
    }
    AAGlobal.CurrenciesCountriesChartConfig.prototype = $.extend(true, {}, new AAGlobal.HeroChartConfig(), AAGlobal.CurrenciesCountriesChartConfig.prototype, {
        GetPlotOptions: function() {
            return {
                scatter: {
                    tooltip: {
                        enabled: false
                    }
                },
                series: {
                    connectNulls: true,
                    dataLabels: {
                        enabled: false
                    },
                    stickyTracking: false,
                    tooltip: {
                        //followPointer: false,

                        //hideDelay: 0,

                        enabled: true
                    },
                    marker: {
                        symbol: 'circle'
                    },
                    events: {
                        legendItemClick: function(event) {
                            return false;
                        }
                    }
                }
            };
        },

        Callback: function(chart) {

            chart.renderer.rect(
                chart.plotLeft + chart.plotWidth,
                chart.plotTop,
                chart.userOptions.chart.spacingRight,
                chart.plotHeight
            ).attr({
                'stroke-width': 1,
                stroke: '#fff',
                fill: '#fff'
            }).add();
            chart.renderer.rect(
                chart.plotLeft,
                chart.plotTop - chart.userOptions.chart.spacingTop,
                chart.userOptions.chart.spacingRight + chart.plotWidth,
                chart.userOptions.chart.spacingTop
            ).attr({
                'stroke-width': 1,
                stroke: '#fff',
                fill: '#fff'
            }).add();

            $.each(chart.series, function(seriesIndex, series) {
                if (series.type == 'scatter') {
                    var dataCount = series.data.length;
                    var point = series.data[dataCount - 1];
                    if (point != null && point.y) {

                        if (series.options.ImageUrl) {
                            /*chart.renderer.image(
									series.options.ImageUrl,
									point.plotX + chart.plotLeft + 10,
									point.plotY + chart.plotTop -10,
									31,
									20
								).add();*/
                        }
                    }
                }
            });

            var forecastTextElement = chart.renderer.text(
                '10-YR<br/>FORECAST',
                chart.plotLeft + chart.plotWidth - 5,
                chart.plotTop + chart.plotHeight + 20
            ).attr({
                'zIndex': '5',
                'class': 'shape-ratio-text',
                'text-anchor': 'middle'
            }).css({
                fontSize: '0.9em',
                color: '#707070',
                lineHeight: '14px'
            }).add();
            /*if ($.browser && $.browser.msie && $.browser.version < 9) {
                window.setTimeout(function() {
                    $(forecastTextElement.element).css({
                        'left': (parseInt($(forecastTextElement.element).css('left')) - forecastTextElement.getBBox().width / 2) + 'px',
                        'text-align': 'center'
                    });
                }, 100);
            }*/
        },

        GetSplineSeriesData: function(category, series) {

            return {
                lineWidth: 1,
                color: category.Color,
                marker: {
                    enabled: false
                },
                states: {
                    hover: {

                        halo: {
                            opacity: 0
                        }
                    }
                },
                name: category.Label,
                dataLabels: {
                    enabled: false
                },
                ImageUrl: category.ImageUrl,
                data: series
            }
        },

        GetScatterSeriesData: function(category, series) {

            return {
                type: 'scatter',
                color: category.Color,
                marker: {
                    symbol: 'circle'
                },
                states: {
                    hover: {

                        halo: {
                            opacity: 0
                        }
                    }
                },
                ImageUrl: category.ImageUrl,
                name: category.Label,
                dataLabels: {
                    enabled: false
                },
                data: series
            }
        },

        GetSeriesData: function() {
            var CurrenciesCountriesChart = this;
            var categoryData = {
                Rolling: [],
                Forecasted: []
            };



            $.each(CurrenciesCountriesChart.Categories, function(categoryIndex, category) {

                var filteredData = $(CurrenciesCountriesChart.Data).filter(function() {
                    return (this[CurrenciesCountriesChart.CategoryField] == category.Name);
                }).toArray();

                var seriesData = CurrenciesCountriesChart.CreateHighChartData(filteredData, false);

                categoryData.Rolling.push(seriesData);

                var filteredForecastedData = $(CurrenciesCountriesChart.Forecasted).filter(function() {
                    return (this[CurrenciesCountriesChart.CategoryField] == category.Name);
                }).toArray();

                var seriesForecastedData = CurrenciesCountriesChart.CreateHighChartData(filteredForecastedData, true);
                seriesForecastedData.legendColor = category.Color;
                categoryData.Forecasted.push(seriesForecastedData);

            });
            this.UpdateForecastedTooltip(categoryData.Forecasted);
            return categoryData;
        },

        UpdateForecastedTooltip: function(forecastedCategory) {
            var forecastedPoints = [];

            $.each(forecastedCategory, function(foreCastedIndex, foreCastedObject) {
                if (foreCastedObject[0] != null) {
                    forecastedPoints.push({
                        point: {
                            DataValue: foreCastedObject[0].DataValue,
                            CountryCode: foreCastedObject[0].CountryCode,
                            series: {
                                color: foreCastedObject.legendColor
                            }
                        }
                    });
                }
            });
            $(this.ForecastedTooltipSelector).html(AAGlobal.ComparisionTooltipFormatter(this.Categories, '', 'DataValue', 'CountryCode', forecastedPoints));

        },
        CreateHighChartData: function(filteredData, isForecasted) {
            var seriesData = [];
            var CurrenciesCountriesChart = this;
            $.each(filteredData, function(dataIndex, dataObject) {
                var pointData = $.extend(true, {}, dataObject);
                pointData.y = pointData[CurrenciesCountriesChart.YField];

                pointData.x = pointData[CurrenciesCountriesChart.XField];
                if (pointData.x && typeof pointData.x == 'string') {

                    /*if ($.browser.safari) {($.browser.msie && $.browser.version < 9) ||
                        var dateString = pointData.x.split("T");
                        pointData.x = $.datepicker.parseDate('yy-mm-dd', dateString[0]);
                    } else {*/
                        pointData.x = new Date(pointData.x);
                    /*}*/
                    if (isForecasted) {
                        pointData.x = pointData.x.setMonth(pointData.x.getMonth() + 2);
                    }
                }
                seriesData.push(pointData);
            });
            return seriesData;

        },
        GetConfiguration: function(seriesData) {
            var CurrenciesCountriesChart = this;
            CurrenciesCountriesChart.Credits.text = GetDisclaimerText("CURRENCIES_COMPARISON");
            return {
                chart: {
                    type: 'spline',
                    spacingRight: 25,
                    spacingTop: 35,
                    plotBackgroundColor: '#ebebeb',
                    events: {
                        redraw: function() {
                            window.setTimeout(function() {
                                CurrenciesCountriesChart.Callback($(CurrenciesCountriesChart.DOM).highcharts());
                            }, 500);
                        }
                    }
                },
                title: this.Title,
                subtitle: this.SubTitle,
                xAxis: this.XAxis,
                yAxis: this.YAxis,
                legend: this.Legend,
                credits: this.Credits,
                exporting: this.Exporting,
                tooltip: this.Tooltip,
                plotOptions: this.GetPlotOptions(),
                series: seriesData
            };
        },
        AddDisclosure: function(obj) {
            var disclosureText = "<div class='summary'>" + GetDisclaimerText("CURRENCIES_COMPARISON") + "</div>";
            var x = $("#CurrenciesCompareCountry").find(".disclosure");
            if (parseInt(x.length) > 0) {
                $(x).empty().append(disclosureText);
            }
        }
    });

    //*** Currencies End ***//

    AAGlobal.CommoditiesComparisionChartConfig = function(currentDOM, data, options) {
        var CurrenciesCountriesChart = this;

        this.DOM = currentDOM;
        this.Data = data;
        this.Width = '800';
        this.Height = '576';
        this.YField = 'DataValue';
        this.XField = 'DataDate';
        this.suffixUnit = options.suffixUnit;
		this.logBase = options.logBase;
        this.ForecastedTooltipSelector = options.forecastedTooltipSelector;
        this.Forecasted = options.Forecasted;
        CurrenciesCountriesChart.CategoryCodes = options.categories;
        var categoriesWithDefaults = [{
            Css: 'developedMkts',
            Color: 'rgb(0,82,147)',
            ForeColor: 'rgb(0,82,147)',
            Symbol: 'circle'
        }, {
            Css: 'emergingMkts',
            Color: 'rgb(0,101,66)',
            ForeColor: 'rgb(0,101,66)',
            Symbol: 'circle'
        }, {
            Css: 'usMkts',
            Color: 'rgb(153,0,0)',
            ForeColor: 'rgb(153,0,0)',
            Symbol: 'circle'
        }, {
            Css: 'cashMkts',
            Color: 'rgb(42,42,42)',
            ForeColor: 'rgb(42,42,42)',
            Symbol: 'circle'
        }, {
            Css: 'cashMkts',
            Color: 'rgb(227,142,39)',
            ForeColor: 'rgb(227,142,39)',
            Symbol: 'circle'
        }];
        this.Categories = categoriesWithDefaults.splice(0, CurrenciesCountriesChart.CategoryCodes.length);
        $.each(CurrenciesCountriesChart.CategoryCodes, function(categoryIndex, category) {
            CurrenciesCountriesChart.Categories[categoryIndex] = $.extend(true, CurrenciesCountriesChart.Categories[categoryIndex], {
                Name: category,
                Label: category
            });
        });
        this.Credits = {
            enabled: false,
            text: '©' + asofYear + ' Research Affiliates, LLC. All Rights Reserved.',
            href: 'http://www.rallc.com'
        };
        this.XAxis = {
            title: {
                enabled: false
            },
            type: 'datetime',
            lineWidth: 1,
            lineColor: '#CDCDCD',
            showLastLabel: false,
            endOnTick: false,
            tickInterval: 24 * 3600 * 1000 * 365

        };
        this.YAxis = {
            title: {
                enabled: false
            },
            gridLineWidth: 1,
            gridLineColor: '#CDCDCD',
            lineWidth: 1,
            lineColor: '#CDCDCD',
            minRange: 2,
            endOnTick: true,
            startOnTick: true,
            maxPadding: 0,
            minPadding: 0,
			tickInterval: (this.logBase)? 1:null,
            labels: {
                format: '{value} ' + this.suffixUnit,
                style: {
                    fontFamily: '"Whitney A", "Whitney B"',
					fontStyle: 'italic',
					fontWeight: '400',
					color: '#898b8e',
					fontSize: '14px',
					lineHeight: '33px',
					letterSpacing: '.5px'
                }						
            }

        };
        this.CategoryField = 'CommodityCode';

        this.Legend = {
            enabled: false
        };

        this.Title = {
            text: this.suffixUnit != '%' ? 'HISTORICAL REAL PRICE (USD)' : 'ROLLING 10-YR RETURN',
            align: 'right',
            style: {
                color: '#989898',
                fontFamily: '"Whitney A", "Whitney B"',
                fontSize: '40px',
                fontWeight: 'normal'
            },
            verticalAlign: 'bottom',
            floating: true,
            x: -25,
            y: -35
        };
        this.Tooltip = {
            useHTML: true,
            borderRadius: 0,
            borderWidth: 0,
            shadow: false,
            followPointer: false,
            crosshairs: true,
            hideDelay: 0,
            shared: true,
            enabled: true,
            positioner: function(labelWidth, labelHeight, point) {
                var xPos = point.plotX + 60;
                if (point.plotX - labelWidth > 0) {
                    xPos = point.plotX - labelWidth + 40;
                }
                var offsetTop = $(this.chart.container).offset().top - $('#innerContainer').offset().top;
                /*if ($.browser && $.browser.msie && $.browser.version < 9) {
                    offsetTop = 0;
                }*/
                /*return {
                    x: this.chart.plotLeft - 5,
                    y: offsetTop
                };*/
                return {
                    x: this.chart.plotLeft - 5,
                    y: -4
                };
            },
            backgroundColor: 'none',

            formatter: function() {
                return AAGlobal.ComparisionTooltipFormatter(CurrenciesCountriesChart.Categories, this.x, 'DataValue', 'CommodityCode', this.points, options.suffixUnit,options.logBase);
            }
        };

    }
    AAGlobal.CommoditiesComparisionChartConfig.prototype = $.extend(true, {}, AAGlobal.CommoditiesComparisionChartConfig.prototype, {
        GetPlotOptions: function() {
            return {
                line: {
                    connectNulls: true,
                    dataLabels: {
                        enabled: false
                    },
                    stickyTracking: false,
                    tooltip: {
                        //followPointer: false,

                        //hideDelay: 0,

                        enabled: true
                    },
                    marker: {
                        symbol: 'circle'
                    },
                    events: {
                        legendItemClick: function(event) {
                            return false;
                        }
                    }
                }
            };
        },

        Callback: function(chart) {

            chart.renderer.rect(
                chart.plotLeft + chart.plotWidth,
                chart.plotTop,
                chart.userOptions.chart.spacingRight,
                chart.plotHeight
            ).attr({
                'stroke-width': 1,
                stroke: '#fff',
                fill: '#fff'
            }).add();
            chart.renderer.rect(
                chart.plotLeft,
                chart.plotTop - chart.userOptions.chart.spacingTop,
                chart.userOptions.chart.spacingRight + chart.plotWidth,
                chart.userOptions.chart.spacingTop
            ).attr({
                'stroke-width': 1,
                stroke: '#fff',
                fill: '#fff'
            }).add();
            $.each(chart.series, function(seriesIndex, series) {
                if (series.type == 'scatter') {
                    var dataCount = series.data.length;
                    var point = series.data[dataCount - 1];
                    if (point != null && point.y) {



                        if (point['DisplayLabel']) {

                            /*chart.renderer.text(
                                       point['DisplayLabel'],
                                       point.plotX + chart.plotLeft + 5,
                                       point.plotY + chart.plotTop + 2
                            ).attr({
                                   'zIndex': '5',
                                   'class': 'shape-ratio-text',
                                   'text-anchor': 'start'
                            }).css({ fontSize: '0.9em', color: series.color }).add();*/

                        }


                    }

                }
            });

            var forecastTextElement = chart.renderer.text(
                '10-YR<br/>FORECAST',
                chart.plotLeft + chart.plotWidth - 5,
                chart.plotTop + chart.plotHeight + 20
            ).attr({
                'zIndex': '5',
                'class': 'shape-ratio-text',
                'text-anchor': 'middle'
            }).css({
                fontSize: '0.9em',
                color: '#707070',
                lineHeight: '14px'
            }).add();
            /*if ($.browser && $.browser.msie && $.browser.version < 9) {
                window.setTimeout(function() {
                    $(forecastTextElement.element).css({
                        'left': (parseInt($(forecastTextElement.element).css('left')) - forecastTextElement.getBBox().width / 2) + 'px',
                        'text-align': 'center'
                    });
                }, 100);
            }*/
        },


        GetSplineSeriesData: function(category, series) {

            return {
                lineWidth: 1,
                color: category.Color,
                marker: {
                    enabled: false,
                    radius: 5
                },
                states: {
                    hover: {

                        halo: {
                            opacity: 0
                        }
                    }
                },

                name: category.Label,
                dataLabels: {
                    enabled: false
                },
                data: series
            }
        },

        GetScatterSeriesData: function(category, series) {

            return {
                type: 'scatter',
                color: category.Color,
                marker: {
                    symbol: 'circle'
                },
                states: {
                    hover: {

                        halo: {
                            opacity: 0
                        }
                    }
                },
                name: category.Label,
                dataLabels: {
                    enabled: false
                },
                data: series
            }
        },

        GetSeriesData: function() {
            var CurrenciesCountriesChart = this;
            var categoryData = {
                Rolling: [],
                Forecasted: []
            };



            $.each(CurrenciesCountriesChart.Categories, function(categoryIndex, category) {

                var filteredData = $(CurrenciesCountriesChart.Data).filter(function() {
                    return (this[CurrenciesCountriesChart.CategoryField] == category.Name);
                }).toArray();

                var seriesData = CurrenciesCountriesChart.CreateHighChartData(filteredData, false);

                categoryData.Rolling.push(seriesData);

                var filteredForecastedData = $(CurrenciesCountriesChart.Forecasted).filter(function() {
                    return (this[CurrenciesCountriesChart.CategoryField] == category.Name);
                }).toArray();

                var seriesForecastedData = CurrenciesCountriesChart.CreateHighChartData(filteredForecastedData, true);
                seriesForecastedData.legendColor = category.Color;
                categoryData.Forecasted.push(seriesForecastedData);

            });

            this.UpdateForecastedTooltip(categoryData.Forecasted);
            return categoryData;
        },

        UpdateForecastedTooltip: function(forecastedCategory) {
            var forecastedPoints = [];

            $.each(forecastedCategory, function(foreCastedIndex, foreCastedObject) {
                if (foreCastedObject[0] != null) {
                    forecastedPoints.push({
                        point: {
                            DataValue: foreCastedObject[0].DataValue,
                            CommodityCode: foreCastedObject[0].CommodityCode,
                            series: {
                                color: foreCastedObject.legendColor
                            }
                        }
                    });
                }
            });
            $(this.ForecastedTooltipSelector).html(AAGlobal.ComparisionTooltipFormatter(this.Categories, '', 'DataValue', 'CommodityCode', forecastedPoints, this.suffixUnit,this.logBase));

        },

        CreateHighChartData: function(filteredData, isForecasted) {
            var seriesData = [];
            var CurrenciesCountriesChart = this;
            $.each(filteredData, function(dataIndex, dataObject) {
                var pointData = $.extend(true, {}, dataObject);
                pointData.y = pointData[CurrenciesCountriesChart.YField];

                pointData.x = pointData[CurrenciesCountriesChart.XField];
                if (pointData.x && typeof pointData.x == 'string') {

                    /*if ($.browser.safari) {($.browser.msie && $.browser.version < 9) || 
                        var dateString = pointData.x.split("T");
                        pointData.x = $.datepicker.parseDate('yy-mm-dd', dateString[0]);
                    } else {*/
                        pointData.x = new Date(pointData.x);
                    /*}*/
                    if (isForecasted) {
                        pointData.x = pointData.x.setMonth(pointData.x.getMonth() + 2);
                    }
                }
                seriesData.push(pointData);
            });
            return seriesData;

        },

        GetConfiguration: function(seriesData) {
            var CurrenciesCountriesChart = this;
            CurrenciesCountriesChart.Credits.text = GetDisclaimerText("COMMODITIES_COMPARISON");
            return {
                chart: {
                    type: 'line',
                    spacingRight: 25,
                    spacingTop: 35,
                    plotBackgroundColor: '#ebebeb',
                    events: {
                        redraw: function() {
                            window.setTimeout(function() {
                                CurrenciesCountriesChart.Callback($(CurrenciesCountriesChart.DOM).highcharts());
                            }, 500);
                        }
                    }
                },
                title: this.Title,
                subtitle: this.SubTitle,
                xAxis: this.XAxis,
                yAxis: this.YAxis,
                legend: this.Legend,
                credits: this.Credits,
                exporting: this.Exporting,
                tooltip: this.Tooltip,
                plotOptions: this.GetPlotOptions(),
                series: seriesData
            };
        },

        AddDisclosure: function(obj) {
            var disclosureText = "<div class='summary'>" + GetDisclaimerText("COMMODITIES_COMPARISON") + "</div>";

            var x = $(obj).parent().parent().parent().find(".disclosure");
            if (parseInt(x.length) > 0) {
                $(x).empty().append(disclosureText);
            }
        }
    });

    //#endregion
    //#region Comparison Data Table configuration
    AAGlobal.BaseDataTableConfig = function(currentDOM) {
        var BaseTableViewDefaults = this;
        this.DOM = currentDOM;
    }
    AAGlobal.BaseDataTableConfig.prototype = $.extend(true, {}, AAGlobal.BaseDataTableConfig.prototype, {

        Init: function() {
      
        },

        AddDisclosure: function(obj,disclaimerConfigKey,asOfDate) {
            var disclosureText = "<div class='summary'>" + GetDisclaimerText(disclaimerConfigKey,asOfDate) + "</div>";
            var x = $(obj).parent().find(".disclosure");
            if (parseInt(x.length) > 0) {
                $(x).empty().append(disclosureText);
            }
        },
        GetTemplate: function(asOfDate) {
        var historicalHeader = 'Historical Real Total Return<!-- <span class="tableHeaderDate">(as of ' + asOfDate + ')</span>-->';
        var forecastHeader = 'Forecast Real Return<!-- <span class="tableHeaderDate">(as of ' + GetDataDate() + ')</span>-->';
            var templateHtmlString = "<table id='sortableTable' class='tablesorter' width='100%' >";
            templateHtmlString += '<thead><tr><td colspan="2" class="hideinDevice" style="background-color: #ffffff;" ></td><td colspan="5" class="hideinDevice" style="border-left: 2px solid #ffffff;font-size:14px;background-color:#666666;text-transform: uppercase;color:#ffffff;" >'+ historicalHeader + '</td><td colspan="2" style="border-left: 2px solid #ffffff;font-size:14px;background-color:#666666;text-transform: uppercase;color:#ffffff;" >'+ forecastHeader + '</td></tr>';
            templateHtmlString += "<tr>";
            templateHtmlString += '<th scope="col"  name="MarketCategory">MarketCategory</th>';
            templateHtmlString += '<th scope="col"  name="DisplayName">Index Name<span class="sort-arrow"></span></th>';
            //templateHtmlString += '<th scope="col" class="hideinDevice" name="Yield">Yield<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturnYTD">YTD<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice"  name="AnnualizedNominalReturn1Y" style="width: 45px;">1-Year<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn3Y">Annualized 3-Year<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn5Y">Annualized 5-Year<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="AnnualizedNominalReturn10Y" style="width: 120px;">Annualized 10-Year<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="ExpectedReturn" style="width: 120px;">Annualized 10-Year<span class="sort-arrow"></span></th>';
             templateHtmlString += '<th scope="col" class="hideinDevice" name="Growth10K">Growth of $10K<span class="sort-arrow"></span></th>';
            templateHtmlString += "</tr></thead><tbody>";
            templateHtmlString += "{{#items}}";
            templateHtmlString += "<tr>";
            templateHtmlString += "<td style='display:none;' name='MarketCategory'>{{MarketCategory}}</td><td class='col1 legend' name='DisplayName'>{{DisplayName}}</td>";
            //templateHtmlString += "<td class='col3 altGry hideinDevice' name='Yield'>{{#Yield}}{{Yield}}%{{/Yield}}{{^Yield}}-{{/Yield}}</td>";
            templateHtmlString += "<td class='col3 altGry hideinDevice' name='AnnualizedNominalReturnYTD'>{{#AnnualizedNominalReturnYTD}}{{AnnualizedNominalReturnYTD}}%{{/AnnualizedNominalReturnYTD}}{{^AnnualizedNominalReturnYTD}}-{{/AnnualizedNominalReturnYTD}}</td>";
            templateHtmlString += "<td class='col3 altGry hideinDevice' name='AnnualizedNominalReturn1Y'>{{#AnnualizedNominalReturn1Y}}{{AnnualizedNominalReturn1Y}}%{{/AnnualizedNominalReturn1Y}}{{^AnnualizedNominalReturn1Y}}-{{/AnnualizedNominalReturn1Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn3Y'>{{#AnnualizedNominalReturn3Y}}{{AnnualizedNominalReturn3Y}}%{{/AnnualizedNominalReturn3Y}}{{^AnnualizedNominalReturn3Y}}-{{/AnnualizedNominalReturn3Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn5Y'>{{#AnnualizedNominalReturn5Y}}{{AnnualizedNominalReturn5Y}}%{{/AnnualizedNominalReturn5Y}}{{^AnnualizedNominalReturn5Y}}-{{/AnnualizedNominalReturn5Y}}</td>";
            templateHtmlString += "<td class='col3' name='AnnualizedNominalReturn10Y'>{{#AnnualizedNominalReturn10Y}}{{AnnualizedNominalReturn10Y}}%{{/AnnualizedNominalReturn10Y}}{{^AnnualizedNominalReturn10Y}}-{{/AnnualizedNominalReturn10Y}}{{#IsPositiveAnnualizedNominalReturn10Y}}<div class='meter-green'><span style='width: {{ModAnnualizedNominalReturn10Y}}%'></span></div>{{/IsPositiveAnnualizedNominalReturn10Y}}{{^IsPositiveAnnualizedNominalReturn10Y}}<div class='meter-red red'><span style='width: {{ModAnnualizedNominalReturn10Y}}%'></span></div>{{/IsPositiveAnnualizedNominalReturn10Y}}</td>";
            templateHtmlString += "<td class='col3' name='ExpectedReturn'>{{#ExpectedReturn}}{{ExpectedReturn}}%{{/ExpectedReturn}}{{^ExpectedReturn}}-{{/ExpectedReturn}}{{#IsPositiveExpectedReturn}}<div class='meter-green'><span style='width: {{ModExpectedReturn}}%'></span></div>{{/IsPositiveExpectedReturn}}{{^IsPositiveExpectedReturn}}<div class='meter-red red'><span style='width: {{ModExpectedReturn}}%'></span></div>{{/IsPositiveExpectedReturn}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='Growth10K'>{{FormattedGrowth10K}}</td>";
            
            templateHtmlString += "</tr>";
            templateHtmlString += "{{/items}}";
            templateHtmlString += "</tbody>";
            templateHtmlString += "</table>";
            return templateHtmlString;
        },
        Sorter: function(a, b) {
          /*  var aName = a.MarketCategory.toLowerCase();
            var bName = b.MarketCategory.toLowerCase();
            return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));*/
            return null;
        },
        CustomSortOrder: function(data) {
        },
        InitializeAndSortColumn: function(thObject) {
        }

    });

    //Commodities
    AAGlobal.CommoditiesDataTableConfig = function(currentDOM) {
        var BaseTableViewDefaults = this;
        this.DOM = currentDOM;
    }
    AAGlobal.CommoditiesDataTableConfig.prototype = $.extend(true, {}, new AAGlobal.BaseDataTableConfig(), AAGlobal.CommoditiesDataTableConfig.prototype, {

        Init: function() {
      
        },

        GetTemplate: function(asOfDate) {
        var historicalHeader = 'Historical Real Total Return<!-- <span class="tableHeaderDate">(as of ' + asOfDate + ')</span>-->';
        var forecastHeader = 'Forecast Real Return<!-- <span class="tableHeaderDate">(as of ' + GetDataDate() + ')</span>-->';
               var templateHtmlString = "<table id='sortableTable' class='tablesorter' width='100%' >";
            templateHtmlString += '<thead><tr><td colspan="2" class="hideinDevice" style="background-color: #ffffff;" ></td><td colspan="6" class="hideinDevice" style="border-left: 2px solid #ffffff;font-size:14px;background-color:#666666;text-transform: uppercase;color:#ffffff;" >'+historicalHeader+'</td><td colspan="3" style="border-left: 2px solid #ffffff;font-size:14px;background-color:#666666;text-transform: uppercase;color:#ffffff;" >'+forecastHeader+'</td></tr>';
            templateHtmlString += "<tr>";
            templateHtmlString += '<th scope="col"  name="GroupName">GroupName</th>';
            templateHtmlString += '<th scope="col"  name="DisplayName">Commodity Name<span class="sort-arrow"></span></th>';
            //templateHtmlString += '<th scope="col" class="hideinDevice" name="Yield" style="text-align:center;">Yield<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturnYTD" style="text-align:center;">YTD<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn1Y" style="width: 45px;text-align:center;">1-Year<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn3Y" style="text-align:center;">3-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn5Y" style="text-align:center;">5-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn10Y" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="AnnualizedNominalReturn10YRank" style="text-align:center;"><div class="hideinDesktop">Historical </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="ExpectedReturn" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="ExpectedReturnRank" style="text-align:center;"><div class="hideinDesktop">Forecasted </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="Growth10K" style="text-align:center;">Growth</br>of $10K<span class="sort-arrow"></span></th>';
            templateHtmlString += "</tr></thead><tbody>";
            templateHtmlString += "{{#items}}";
            templateHtmlString += "<tr>";
            templateHtmlString += "<td style='display:none;' name='GroupName'>{{GroupName}}</td><td class='col1 legend' name='DisplayName'>{{DisplayName}}</td>";
            //templateHtmlString += "<td class='col3 altGry hideinDevice' name='Yield'>{{#Yield}}{{Yield}}%{{/Yield}}{{^Yield}}-{{/Yield}}</td>";
            templateHtmlString += "<td class='col3 altGry hideinDevice' name='AnnualizedNominalReturnYTD'>{{#AnnualizedNominalReturnYTD}}{{AnnualizedNominalReturnYTD}}%{{/AnnualizedNominalReturnYTD}}{{^AnnualizedNominalReturnYTD}}-{{/AnnualizedNominalReturnYTD}}</td>";
            templateHtmlString += "<td class='col3 altGry hideinDevice' name='AnnualizedNominalReturn1Y'>{{#AnnualizedNominalReturn1Y}}{{AnnualizedNominalReturn1Y}}%{{/AnnualizedNominalReturn1Y}}{{^AnnualizedNominalReturn1Y}}-{{/AnnualizedNominalReturn1Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn3Y'>{{#AnnualizedNominalReturn3Y}}{{AnnualizedNominalReturn3Y}}%{{/AnnualizedNominalReturn3Y}}{{^AnnualizedNominalReturn3Y}}-{{/AnnualizedNominalReturn3Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn5Y'>{{#AnnualizedNominalReturn5Y}}{{AnnualizedNominalReturn5Y}}%{{/AnnualizedNominalReturn5Y}}{{^AnnualizedNominalReturn5Y}}-{{/AnnualizedNominalReturn5Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn10Y'>{{#AnnualizedNominalReturn10Y}}{{AnnualizedNominalReturn10Y}}%{{/AnnualizedNominalReturn10Y}}{{^AnnualizedNominalReturn10Y}}-{{/AnnualizedNominalReturn10Y}}</td>";
            templateHtmlString += "<td class='col3' name='AnnualizedNominalReturn10YRank'><div class='rank'>{{#IsPositiveAnnualizedNominalReturn10YRank}}<div class='meter-green-text'>{{#AnnualizedNominalReturn10YRank}}{{AnnualizedNominalReturn10YRank}}%{{/AnnualizedNominalReturn10YRank}}</div><div class='meter-green'><span style='width: {{ModAnnualizedNominalReturn10YRank}}%></span></div>{{/IsPositiveAnnualizedNominalReturn10YRank}}{{^IsPositiveAnnualizedNominalReturn10YRank}}<div class='meter-red red'><span style='width: {{ModAnnualizedNominalReturn10YRank}}%'></span></div><div class='meter-red-text'>{{#AnnualizedNominalReturn10YRank}}{{AnnualizedNominalReturn10YRank}}%{{/AnnualizedNominalReturn10YRank}}{{/IsPositiveAnnualizedNominalReturn10YRank}}</div></div></td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='ExpectedReturn'>{{#ExpectedReturn}}{{ExpectedReturn}}%{{/ExpectedReturn}}{{^ExpectedReturn}}-{{/ExpectedReturn}}</td>";
            templateHtmlString += "<td class='col3' name='ExpectedReturnRank'><div class='rank'>{{#IsPositiveExpectedReturnRank}}<div class='meter-green-text'>{{#ExpectedReturnRank}}{{ExpectedReturnRank}}%{{/ExpectedReturnRank}}</div><div class='meter-green'><span style='width: {{ModExpectedReturnRank}}%'></span></div>{{/IsPositiveExpectedReturnRank}}{{^IsPositiveExpectedReturnRank}}<div class='meter-red red'><span style='width: {{ModExpectedReturnRank}}%'></span></div><div class='meter-red-text'>{{#ExpectedReturnRank}}{{ExpectedReturnRank}}%{{/ExpectedReturnRank}}{{/IsPositiveExpectedReturnRank}}</div></div></td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='Growth10K'>{{FormattedGrowth10K}}</td>";
            
            templateHtmlString += "</tr>";
            templateHtmlString += "{{/items}}";
            templateHtmlString += "</tbody>";
            templateHtmlString += "</table>";
            return templateHtmlString;
        },
        GetTemplateWithoutMustache:function(asOfDate,data){
			
			var historicalHeader = 'Historical Real Total Return<!-- <span class="tableHeaderDate">(as of ' + asOfDate + ')</span>-->';
			var forecastHeader = 'Forecast Real Return<!-- <span class="tableHeaderDate">(as of ' + GetDataDate() + ')</span>-->';
			var templateHtmlString = "<table id='sortableTable' class='tablesorter' width='100%' ><thead><tr><td colspan='2' class='datatableCaptionempty hidden-sm hidden-xs'></td><td colspan='6' class='datatableCaption hidden-sm hidden-xs'>"+historicalHeader+"</td><td colspan='2' class='datatableCaption'>"+forecastHeader+"</td></tr>";
            templateHtmlString += "<tr>";
            templateHtmlString += '<th scope="col"  style="display:none;"  name="GroupName">GroupName</th>';
            templateHtmlString += '<th scope="col"  name="DisplayName">Commodity Name<span class="sort-arrow"></span></th>';
			 templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturnYTD" style="text-align:center;">YTD<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn1Y" style="width: 45px;text-align:center;">1-Year<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn3Y" style="text-align:center;">3-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn5Y" style="text-align:center;">5-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn10Y" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="AnnualizedNominalReturn10YRank" style="text-align:center;"><div class="hideinDesktop">Historical </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="ExpectedReturn" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="ExpectedReturnRank" style="text-align:center;"><div class="hideinDesktop">Forecasted </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            //templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="Growth10K" style="text-align:center;">Growth</br>of $10K<span class="sort-arrow"></span></th>';
            templateHtmlString += "</tr></thead><tbody>";
            
            for(var i=0; i < data.items.length; ++i){
			    templateHtmlString += "<tr>";
                templateHtmlString += "<td style='display:none;' name='GroupName'>"+data.items[i].GroupName+"</td>"
				templateHtmlString += "<td class='col1 legend' name='DisplayName'>"+data.items[i].DisplayName +"</td>";
               if(data.items[i].AnnualizedNominalReturnYTD !=undefined && data.items[i].AnnualizedNominalReturnYTD!=null){
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturnYTD'>" + data.items[i].AnnualizedNominalReturnYTD + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturnYTD'>-</td>";
                }
				
				if(data.items[i].AnnualizedNominalReturn1Y !=undefined && data.items[i].AnnualizedNominalReturn1Y!=null){
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn1Y'>" + data.items[i].AnnualizedNominalReturn1Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn1Y'>-</td>";
                }
				
				if(data.items[i].AnnualizedNominalReturn3Y !=undefined && data.items[i].AnnualizedNominalReturn3Y!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='AnnualizedNominalReturn3Y'>" + data.items[i].AnnualizedNominalReturn3Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn3Y'>-</td>";
                }
				if(data.items[i].AnnualizedNominalReturn5Y !=undefined && data.items[i].AnnualizedNominalReturn5Y!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='AnnualizedNominalReturn5Y'>" + data.items[i].AnnualizedNominalReturn5Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn5Y'>-</td>";
                }
				if(data.items[i].AnnualizedNominalReturn10Y !=undefined && data.items[i].AnnualizedNominalReturn10Y!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='AnnualizedNominalReturn10Y'>" + data.items[i].AnnualizedNominalReturn10Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn10Y'>-</td>";
                }
				if(data.items[i].AnnualizedNominalReturn10YRank !=undefined && data.items[i].AnnualizedNominalReturn10YRank!=null)
				{
				templateHtmlString +="<td class='col3' name='AnnualizedNominalReturn10YRank'>"+data.items[i].AnnualizedNominalReturn10YRank+"</td>"
				}
				else{
				templateHtmlString +="<td class='col3' name='AnnualizedNominalReturn10YRank'>"+data.items[i].AnnualizedNominalReturn10YRank+"</td>";
				}
				if(data.items[i].ExpectedReturn !=undefined && data.items[i].ExpectedReturn!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='ExpectedReturn'>" + data.items[i].ExpectedReturn + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='ExpectedReturn'>-</td>";
                }
				
				if(data.items[i].ExpectedReturnRank != undefined && data.items[i].ExpectedReturnRank != null)
				{
					templateHtmlString +="<td class='col3' name='ExpectedReturnRank'>"+data.items[i].ExpectedReturnRank+"<div class='rank'>"
					
					if(data.items[i].RankChange>0){
						templateHtmlString +="<div class='meter-green'></div>"
					}
					else{
						templateHtmlString +="<div class='meter-red red'></div>"
					}
					templateHtmlString +="</div>"
				}
				else{
					templateHtmlString +="<td class='col3' name='ExpectedReturnRank'>-</td>"
				}
				
			  
           
			//templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='Growth10K'>"+data.items[i].FormattedGrowth10K+"</td>";
            
            templateHtmlString += "</tr>";
            }
            templateHtmlString += "</tbody></table>";
            return templateHtmlString;
           
        },
    

        InitializeAndSortColumn: function(thObject) {
        }

    });

    //Currencies data table
    AAGlobal.CurrenciesDataTableConfig = function(currentDOM) {
        var BaseTableViewDefaults = this;
        this.DOM = currentDOM;
    }
    AAGlobal.CurrenciesDataTableConfig.prototype = $.extend(true, {}, new AAGlobal.BaseDataTableConfig(), AAGlobal.CurrenciesDataTableConfig.prototype, {

        Init: function() {
      
        },

        GetTemplate: function(asOfDate) {
        var historicalHeader = 'Historical Real Total Return USD<!-- <span class="tableHeaderDate">(as of ' + asOfDate + ')</span>-->';
        var forecastHeader = 'Forecast Real Return USD<!-- <span class="tableHeaderDate">(as of ' + GetDataDate() + ')</span>-->';
            var templateHtmlString = "<table id='sortableTable' class='tablesorter' width='100%' >";
            templateHtmlString += '<thead><tr><td colspan="2" class="hideinDevice" style="background-color: #ffffff;" ></td><td colspan="6" class="hideinDevice" style="border-left: 2px solid #ffffff;font-size:14px;background-color:#666666;text-transform: uppercase;color:#ffffff;" >'+historicalHeader+'</td><td colspan="3" style="border-left: 2px solid #ffffff;font-size:14px;background-color:#666666;text-transform: uppercase;color:#ffffff;" >'+forecastHeader+'</td></tr>';
            templateHtmlString += "<tr>";
            templateHtmlString += '<th scope="col"  name="MarketCategory">MarketCategory</th>';
            templateHtmlString += '<th scope="col"  name="ShortDisplayName">Country Name<span class="sort-arrow"></span></th>';
            //templateHtmlString += '<th scope="col" class="hideinDevice" name="Yield" style="text-align:center;">Yield<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturnYTD" style="text-align:center;">YTD<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn1Y" style="width: 45px;text-align:center;">1-Year<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn3Y" style="text-align:center;">3-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn5Y" style="text-align:center;">5-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn10Y" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="AnnualizedNominalReturn10YRank" style="text-align:center;"><div class="hideinDesktop">Historical </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="ExpectedReturn" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="ExpectedReturnRank" style="text-align:center;"><div class="hideinDesktop">Forecasted </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="Growth10K" style="text-align:center;">Growth</br>of $10K<span class="sort-arrow"></span></th>';
            templateHtmlString += "</tr></thead><tbody>";
            templateHtmlString += "{{#items}}";
            templateHtmlString += "<tr>";
            templateHtmlString += "<td style='display:none;' name='MarketCategory'>{{MarketCategory}}</td><td class='col1 legend' name='ShortDisplayName'>{{ShortDisplayName}}</td>";
            //templateHtmlString += "<td class='col3 altGry hideinDevice' name='Yield'>{{#Yield}}{{Yield}}%{{/Yield}}{{^Yield}}-{{/Yield}}</td>";
            templateHtmlString += "<td class='col3 altGry hideinDevice' name='AnnualizedNominalReturnYTD'>{{#AnnualizedNominalReturnYTD}}{{AnnualizedNominalReturnYTD}}%{{/AnnualizedNominalReturnYTD}}{{^AnnualizedNominalReturnYTD}}-{{/AnnualizedNominalReturnYTD}}</td>";
            templateHtmlString += "<td class='col3 altGry hideinDevice' name='AnnualizedNominalReturn1Y'>{{#AnnualizedNominalReturn1Y}}{{AnnualizedNominalReturn1Y}}%{{/AnnualizedNominalReturn1Y}}{{^AnnualizedNominalReturn1Y}}-{{/AnnualizedNominalReturn1Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn3Y'>{{#AnnualizedNominalReturn3Y}}{{AnnualizedNominalReturn3Y}}%{{/AnnualizedNominalReturn3Y}}{{^AnnualizedNominalReturn3Y}}-{{/AnnualizedNominalReturn3Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn5Y'>{{#AnnualizedNominalReturn5Y}}{{AnnualizedNominalReturn5Y}}%{{/AnnualizedNominalReturn5Y}}{{^AnnualizedNominalReturn5Y}}-{{/AnnualizedNominalReturn5Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn10Y'>{{#AnnualizedNominalReturn10Y}}{{AnnualizedNominalReturn10Y}}%{{/AnnualizedNominalReturn10Y}}{{^AnnualizedNominalReturn10Y}}-{{/AnnualizedNominalReturn10Y}}</td>";
            templateHtmlString += "<td class='col3' name='AnnualizedNominalReturn10YRank'><div class='rank'>{{#IsPositiveAnnualizedNominalReturn10YRank}}<div class='meter-green-text'>{{#AnnualizedNominalReturn10YRank}}{{AnnualizedNominalReturn10YRank}}%{{/AnnualizedNominalReturn10YRank}}</div><div class='meter-green'><span style='width: {{ModAnnualizedNominalReturn10YRank}}%'></span></div>{{/IsPositiveAnnualizedNominalReturn10YRank}}{{^IsPositiveAnnualizedNominalReturn10YRank}}<div class='meter-red red'><span style='width: {{ModAnnualizedNominalReturn10YRank}}%'></span></div><div class='meter-red-text'>{{#AnnualizedNominalReturn10YRank}}{{AnnualizedNominalReturn10YRank}}%{{/AnnualizedNominalReturn10YRank}}{{/IsPositiveAnnualizedNominalReturn10YRank}}</div></div></td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='ExpectedReturn'>{{#ExpectedReturn}}{{ExpectedReturn}}%{{/ExpectedReturn}}{{^ExpectedReturn}}-{{/ExpectedReturn}}</td>";
            templateHtmlString += "<td class='col3' name='ExpectedReturnRank'><div class='rank'>{{#IsPositiveExpectedReturnRank}}<div class='meter-green-text'>{{#ExpectedReturnRank}}{{ExpectedReturnRank}}%{{/ExpectedReturnRank}}</div><div class='meter-green'><span style='width: {{ModExpectedReturnRank}}%'></span></div>{{/IsPositiveExpectedReturnRank}}{{^IsPositiveExpectedReturnRank}}<div class='meter-red red'><span style='width: {{ModExpectedReturnRank}}%'></span></div><div class='meter-red-text'>{{#ExpectedReturnRank}}{{ExpectedReturnRank}}%{{/ExpectedReturnRank}}{{/IsPositiveExpectedReturnRank}}</div></div></td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='Growth10K'>{{FormattedGrowth10K}}</td>";
            
            templateHtmlString += "</tr>";
            templateHtmlString += "{{/items}}";
            templateHtmlString += "</tbody>";
            templateHtmlString += "</table>";
            return templateHtmlString;
        },
		GetTemplateWithoutMustache:function(asOfDate,data){
		var historicalHeader = 'Historical Real Total Return USD<!-- <span class="tableHeaderDate">(as of ' + asOfDate + ')</span>-->';
        var forecastHeader = 'Forecast Real Return USD<!-- <span class="tableHeaderDate">(as of ' + GetDataDate() + ')</span>-->';
            var templateHtmlString = "<table id='sortableTable' class='tablesorter' width='100%' >";
            templateHtmlString += '<thead><tr><td colspan="2" class="datatableCaptionempty hidden-sm hidden-xs"></td><td colspan="6" class="datatableCaption hidden-sm hidden-xs">'+historicalHeader+'</td><td colspan="2" class="datatableCaption">'+forecastHeader+'</td></tr>';
            templateHtmlString += "<tr>";
            templateHtmlString += '<th scope="col"  name="MarketCategory">MarketCategory</th>';
            templateHtmlString += '<th scope="col"  name="ShortDisplayName">Country Name<span class="sort-arrow"></span></th>';
            //templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="Yield" style="text-align:center;">Yield<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturnYTD" style="text-align:center;">YTD<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn1Y" style="width: 45px;text-align:center;">1-Year<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn3Y" style="text-align:center;">3-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn5Y" style="text-align:center;">5-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn10Y" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="AnnualizedNominalReturn10YRank" style="text-align:center;"><div class="hideinDesktop">Historical </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="ExpectedReturn" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="ExpectedReturnRank" style="text-align:center;"><div class="hideinDesktop">Forecasted </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            //templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="Growth10K" style="text-align:center;">Growth</br>of $10K<span class="sort-arrow"></span></th>';
            templateHtmlString += "</tr></thead><tbody>";
            
            for(var i=0; i < data.items.length; ++i){
			
                templateHtmlString += "<tr>";
				templateHtmlString += "<td style='display:none;' name='MarketCategory'>"+data.items[i].MarketCategory+"</td>";
                templateHtmlString += "<td class='col1 legend' name='ShortDisplayName'>"+data.items[i].DisplayName+"</td>";
 
               if(data.items[i].AnnualizedNominalReturnYTD !=undefined && data.items[i].AnnualizedNominalReturnYTD!=null){
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturnYTD'>" + data.items[i].AnnualizedNominalReturnYTD + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturnYTD'>-</td>";
                }
				
				if(data.items[i].AnnualizedNominalReturn1Y !=undefined && data.items[i].AnnualizedNominalReturn1Y!=null){
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn1Y'>" + data.items[i].AnnualizedNominalReturn1Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn1Y'>-</td>";
                }
				
				if(data.items[i].AnnualizedNominalReturn3Y !=undefined && data.items[i].AnnualizedNominalReturn3Y!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='AnnualizedNominalReturn3Y'>" + data.items[i].AnnualizedNominalReturn3Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn3Y'>-</td>";
                }
				if(data.items[i].AnnualizedNominalReturn5Y !=undefined && data.items[i].AnnualizedNominalReturn5Y!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='AnnualizedNominalReturn5Y'>" + data.items[i].AnnualizedNominalReturn5Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn5Y'>-</td>";
                }
				if(data.items[i].AnnualizedNominalReturn10Y !=undefined && data.items[i].AnnualizedNominalReturn10Y!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='AnnualizedNominalReturn10Y'>" + data.items[i].AnnualizedNominalReturn10Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn10Y'>-</td>";
                }
				if(data.items[i].AnnualizedNominalReturn10YRank !=undefined && data.items[i].AnnualizedNominalReturn10YRank!=null)
				{
				templateHtmlString +="<td class='col3' name='AnnualizedNominalReturn10YRank'>"+data.items[i].AnnualizedNominalReturn10YRank+"</td>"
				}
				else{
				templateHtmlString +="<td class='col3' name='AnnualizedNominalReturn10YRank'>"+data.items[i].AnnualizedNominalReturn10YRank+"</td>";
				}
				if(data.items[i].ExpectedReturn !=undefined && data.items[i].ExpectedReturn!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='ExpectedReturn'>" + data.items[i].ExpectedReturn + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='ExpectedReturn'>-</td>";
                }
				
				if(data.items[i].ExpectedReturnRank != undefined && data.items[i].ExpectedReturnRank != null)
				{
					templateHtmlString +="<td class='col3' name='ExpectedReturnRank'>"+data.items[i].ExpectedReturnRank+"<div class='rank'>"
					
					if(data.items[i].RankChange>0){
						templateHtmlString +="<div class='meter-green'></div>"
					}
					else{
						templateHtmlString +="<div class='meter-red red'></div>"
					}
					templateHtmlString +="</div>"
				}
				else{
					templateHtmlString +="<td class='col3' name='ExpectedReturnRank'>-</td>"
				}
				
			  
           
			//templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='Growth10K'>"+data.items[i].FormattedGrowth10K+"</td>";
            
            templateHtmlString += "</tr>";
            }
            templateHtmlString += "</tbody></table>";
            return templateHtmlString;
           
        }, 
    

        InitializeAndSortColumn: function(thObject) {
        }

    });

     //Fixed Income data table
    AAGlobal.FixedIncomeDataTableConfig = function(currentDOM) {
        var BaseTableViewDefaults = this;
        this.DefaultOrderFieldIndex = 2;
		this.GroupFieldIndex = 1;
        this.DOM = currentDOM;
    }
    AAGlobal.FixedIncomeDataTableConfig.prototype = $.extend(true, {}, new AAGlobal.BaseDataTableConfig(), AAGlobal.FixedIncomeDataTableConfig.prototype, {

        Init: function() {
      
        },

        GetTemplate: function(asOfDate) {
        var historicalHeader = 'Historical Real Total Return<!-- <span class="tableHeaderDate">(as of ' + asOfDate + ')</span>-->';
        var forecastHeader = 'Forecast Real Return<!-- <span class="tableHeaderDate">(as of ' + GetDataDate() + ')</span>-->';
            var templateHtmlString = "<table id='sortableTable' class='tablesorter' width='100%' >";
            templateHtmlString += '<thead><tr><td colspan="2" class="hideinDevice" style="background-color: #ffffff;" ></td><td colspan="6" class="hideinDevice" style="border-left: 2px solid #ffffff;font-size:14px;background-color:#666666;text-transform: uppercase;color:#ffffff;" >'+historicalHeader+'</td><td colspan="3" style="border-left: 2px solid #ffffff;font-size:14px;background-color:#666666;text-transform: uppercase;color:#ffffff;" >'+forecastHeader+'</td></tr>';
            templateHtmlString += "<tr>";
            templateHtmlString += '<th scope="col" style="display:none;" name="DisplayOrder">DisplayOrder</th>';
			templateHtmlString += '<th scope="col"  name="MarketCategory">MarketCategory</th>';
            templateHtmlString += '<th scope="col"  name="DisplayName">Index Name<span class="sort-arrow"></span></th>';
            //templateHtmlString += '<th scope="col" class="hideinDevice" name="Yield" style="text-align:center;">Yield<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturnYTD" style="text-align:center;">YTD<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn1Y" style="width: 45px;text-align:center;">1-Year<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn3Y" style="text-align:center;">3-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn5Y" style="text-align:center;">5-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn10Y" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="AnnualizedNominalReturn10YRank" style="text-align:center;"><div class="hideinDesktop">Historical </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="ExpectedReturn" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="ExpectedReturnRank" style="text-align:center;"><div class="hideinDesktop">Forecasted </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="Growth10K" style="text-align:center;">Growth</br>of $10K<span class="sort-arrow"></span></th>';
            templateHtmlString += "</tr></thead><tbody>";
            templateHtmlString += "{{#items}}";
            templateHtmlString += "<tr>";
			templateHtmlString += "<td style='display:none;' name='DisplayOrder'>{{DisplayOrder}}</td>";
            templateHtmlString += "<td style='display:none;' name='MarketCategory'>{{MarketCategory}}</td><td class='col1 legend' name='DisplayName'>{{DisplayName}}</td>";
            //templateHtmlString += "<td class='col3 altGry hideinDevice' name='Yield'>{{#Yield}}{{Yield}}%{{/Yield}}{{^Yield}}-{{/Yield}}</td>";
            templateHtmlString += "<td class='col3 altGry hideinDevice' name='AnnualizedNominalReturnYTD'>{{#AnnualizedNominalReturnYTD}}{{AnnualizedNominalReturnYTD}}%{{/AnnualizedNominalReturnYTD}}{{^AnnualizedNominalReturnYTD}}-{{/AnnualizedNominalReturnYTD}}</td>";
            templateHtmlString += "<td class='col3 altGry hideinDevice' name='AnnualizedNominalReturn1Y'>{{#AnnualizedNominalReturn1Y}}{{AnnualizedNominalReturn1Y}}%{{/AnnualizedNominalReturn1Y}}{{^AnnualizedNominalReturn1Y}}-{{/AnnualizedNominalReturn1Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn3Y'>{{#AnnualizedNominalReturn3Y}}{{AnnualizedNominalReturn3Y}}%{{/AnnualizedNominalReturn3Y}}{{^AnnualizedNominalReturn3Y}}-{{/AnnualizedNominalReturn3Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn5Y'>{{#AnnualizedNominalReturn5Y}}{{AnnualizedNominalReturn5Y}}%{{/AnnualizedNominalReturn5Y}}{{^AnnualizedNominalReturn5Y}}-{{/AnnualizedNominalReturn5Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn10Y'>{{#AnnualizedNominalReturn10Y}}{{AnnualizedNominalReturn10Y}}%{{/AnnualizedNominalReturn10Y}}{{^AnnualizedNominalReturn10Y}}-{{/AnnualizedNominalReturn10Y}}</td>";
            templateHtmlString += "<td class='col3' name='AnnualizedNominalReturn10YRank'><div class='rank'>{{#IsPositiveAnnualizedNominalReturn10YRank}}<div class='meter-green-text'>{{#AnnualizedNominalReturn10YRank}}{{AnnualizedNominalReturn10YRank}}%{{/AnnualizedNominalReturn10YRank}}</div><div class='meter-green'><span style='width: {{ModAnnualizedNominalReturn10YRank}}%'></span></div>{{/IsPositiveAnnualizedNominalReturn10YRank}}{{^IsPositiveAnnualizedNominalReturn10YRank}}<div class='meter-red red'><span style='width: {{ModAnnualizedNominalReturn10YRank}}%'></span></div><div class='meter-red-text'>{{#AnnualizedNominalReturn10YRank}}{{AnnualizedNominalReturn10YRank}}%{{/AnnualizedNominalReturn10YRank}}{{/IsPositiveAnnualizedNominalReturn10YRank}}</div></div></td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='ExpectedReturn'>{{#ExpectedReturn}}{{ExpectedReturn}}%{{/ExpectedReturn}}{{^ExpectedReturn}}-{{/ExpectedReturn}}</td>";
            templateHtmlString += "<td class='col3' name='ExpectedReturnRank'><div class='rank'>{{#IsPositiveExpectedReturnRank}}<div class='meter-green-text'>{{#ExpectedReturnRank}}{{ExpectedReturnRank}}%{{/ExpectedReturnRank}}</div><div class='meter-green'><span style='width: {{ModExpectedReturnRank}}%'></span></div>{{/IsPositiveExpectedReturnRank}}{{^IsPositiveExpectedReturnRank}}<div class='meter-red red'><span style='width: {{ModExpectedReturnRank}}%'></span></div><div class='meter-red-text'>{{#ExpectedReturnRank}}{{ExpectedReturnRank}}%{{/ExpectedReturnRank}}{{/IsPositiveExpectedReturnRank}}</div></div></td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='Growth10K'>{{FormattedGrowth10K}}</td>";
            
            templateHtmlString += "</tr>";
            templateHtmlString += "{{/items}}";
            templateHtmlString += "</tbody>";
            templateHtmlString += "</table>";
            return templateHtmlString;
        },
		
		GetTemplateWithoutMustache:function(asOfDate,data){
		var historicalHeader = 'Historical Real Total Return<!-- <span class="tableHeaderDate">(as of ' + asOfDate + ')</span>-->';
        var forecastHeader = 'Forecast Real Return<!-- <span class="tableHeaderDate">(as of ' + GetDataDate() + ')</span>-->';
            var templateHtmlString = "<table id='sortableTable' class='tablesorter' width='100%' >";
            templateHtmlString += '<thead><tr><td colspan="2" class="datatableCaptionempty hidden-sm hidden-xs"></td><td colspan="6" class="datatableCaption hidden-sm hidden-xs">'+historicalHeader+'</td><td colspan="2" class="datatableCaption">'+forecastHeader+'</td></tr>';
            templateHtmlString += "<tr>";
            templateHtmlString += '<th scope="col" style="display:none;" name="DisplayOrder">DisplayOrder</th>';
			templateHtmlString += '<th scope="col"  name="MarketCategory">MarketCategory</th>';
            templateHtmlString += '<th scope="col"  name="DisplayName">Index Name<span class="sort-arrow"></span></th>';
            //templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="Yield" style="text-align:center;">Yield<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturnYTD" style="text-align:center;">YTD<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn1Y" style="width: 45px;text-align:center;">1-Year<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn3Y" style="text-align:center;">3-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn5Y" style="text-align:center;">5-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn10Y" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="AnnualizedNominalReturn10YRank" style="text-align:center;"><div class="hideinDesktop">Historical </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="ExpectedReturn" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="ExpectedReturnRank" style="text-align:center;"><div class="hideinDesktop">Forecasted </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            //templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="Growth10K" style="text-align:center;">Growth</br>of $10K<span class="sort-arrow"></span></th>';
            templateHtmlString += "</tr></thead><tbody>";
            
            for(var i=0; i < data.items.length; ++i){
			
                templateHtmlString += "<tr>";
				templateHtmlString += "<td style='display:none;' name='DisplayOrder'>"+data.items[i].DisplayOrder+"</td>";
				templateHtmlString += "<td style='display:none;' name='MarketCategory'>"+data.items[i].MarketCategory+"</td>";
                templateHtmlString += "<td class='col1 legend' name='ShortDisplayName'>"+data.items[i].DisplayName+"</td>";
 
               if(data.items[i].AnnualizedNominalReturnYTD !=undefined && data.items[i].AnnualizedNominalReturnYTD!=null){
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturnYTD'>" + data.items[i].AnnualizedNominalReturnYTD + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturnYTD'>-</td>";
                }
				
				if(data.items[i].AnnualizedNominalReturn1Y !=undefined && data.items[i].AnnualizedNominalReturn1Y!=null){
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn1Y'>" + data.items[i].AnnualizedNominalReturn1Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn1Y'>-</td>";
                }
				
				if(data.items[i].AnnualizedNominalReturn3Y !=undefined && data.items[i].AnnualizedNominalReturn3Y!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='AnnualizedNominalReturn3Y'>" + data.items[i].AnnualizedNominalReturn3Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn3Y'>-</td>";
                }
				if(data.items[i].AnnualizedNominalReturn5Y !=undefined && data.items[i].AnnualizedNominalReturn5Y!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='AnnualizedNominalReturn5Y'>" + data.items[i].AnnualizedNominalReturn5Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn5Y'>-</td>";
                }
				if(data.items[i].AnnualizedNominalReturn10Y !=undefined && data.items[i].AnnualizedNominalReturn10Y!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='AnnualizedNominalReturn10Y'>" + data.items[i].AnnualizedNominalReturn10Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn10Y'>-</td>";
                }
				if(data.items[i].AnnualizedNominalReturn10YRank !=undefined && data.items[i].AnnualizedNominalReturn10YRank!=null)
				{
				templateHtmlString +="<td class='col3' name='AnnualizedNominalReturn10YRank'>"+data.items[i].AnnualizedNominalReturn10YRank+"</td>"
				}
				else{
				templateHtmlString +="<td class='col3' name='AnnualizedNominalReturn10YRank'>"+data.items[i].AnnualizedNominalReturn10YRank+"</td>";
				}
				if(data.items[i].ExpectedReturn !=undefined && data.items[i].ExpectedReturn!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='ExpectedReturn'>" + data.items[i].ExpectedReturn + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='ExpectedReturn'>-</td>";
                }
				
				if(data.items[i].ExpectedReturnRank != undefined && data.items[i].ExpectedReturnRank != null)
				{
					templateHtmlString +="<td class='col3' name='ExpectedReturnRank'>"+data.items[i].ExpectedReturnRank+"<div class='rank'>"
					
					if(data.items[i].RankChange>0){
						templateHtmlString +="<div class='meter-green'></div>"
					}
					else{
						templateHtmlString +="<div class='meter-red red'></div>"
					}
					templateHtmlString +="</div>"
				}
				else{
					templateHtmlString +="<td class='col3' name='ExpectedReturnRank'>-</td>"
				}
				
			  
           
			//templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='Growth10K'>"+data.items[i].FormattedGrowth10K+"</td>";
            
            templateHtmlString += "</tr>";
            }
            templateHtmlString += "</tbody></table>";
            return templateHtmlString;
           
        }, 
		CustomSortOrder: function (data) {

            $.Enumerable.From(data).ForEach(function (record) {
                switch (record.MarketCategory.toUpperCase()) {
                    case "CORE BONDS": record.DisplayOrder = 1; break;
                    case "LINKERS": record.DisplayOrder = 2; break;
                    case "CREDIT": record.DisplayOrder = 3; break;
                    case "US CASH": record.DisplayOrder = 4; break;
                    default:
                        record.DisplayOrder = 5; break;
                }
            });
        },

        InitializeAndSortColumn: function(thObject) {
        }

    });

     //Equities data table
    AAGlobal.EquitiesDataTableConfig = function(currentDOM) {
        var BaseTableViewDefaults = this;
        this.DOM = currentDOM;
    }
    AAGlobal.EquitiesDataTableConfig.prototype = $.extend(true, {}, new AAGlobal.BaseDataTableConfig(), AAGlobal.EquitiesDataTableConfig.prototype, {

        Init: function() {			
        },

        GetTemplate: function(asOfDate) {
        var historicalHeader = 'Historical Real Total Return<!-- <span class="tableHeaderDate">(as of ' + asOfDate + ')</span>-->';
        var forecastHeader = 'Forecast Real Return<!-- <span class="tableHeaderDate">(as of ' + GetDataDate() + ')</span>-->';
           var templateHtmlString = "<table id='sortableTable' class='tablesorter' width='100%' >";
            templateHtmlString += '<thead><tr><td colspan="2" class="hideinDevice" style="background-color: #ffffff;" ></td><td colspan="6" class="hideinDevice" style="border-left: 2px solid #ffffff;font-size:14px;background-color:#666666;text-transform: uppercase;color:#ffffff;" >'+historicalHeader+'</td><td colspan="3" style="border-left: 2px solid #ffffff;font-size:14px;background-color:#666666;text-transform: uppercase;color:#ffffff;" >'+forecastHeader+'</td></tr>';
            templateHtmlString += "<tr>";
            templateHtmlString += '<th scope="col"  name="MarketCategory">MarketCategory</th>';
            templateHtmlString += '<th scope="col"  name="DisplayName">Index Name<span class="sort-arrow"></span></th>';
            //templateHtmlString += '<th scope="col" class="hideinDevice" name="Yield" style="text-align:center;">Yield<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturnYTD" style="text-align:center;">YTD<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn1Y" style="width: 45px;text-align:center;">1-Year<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn3Y" style="text-align:center;">3-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn5Y" style="text-align:center;">5-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn10Y" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="AnnualizedNominalReturn10YRank" style="text-align:center;"><div class="hideinDesktop">Historical </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="ExpectedReturn" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="ExpectedReturnRank" style="text-align:center;"><div class="hideinDesktop">Forecasted </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="Growth10K" style="text-align:center;">Growth</br>of $10K<span class="sort-arrow"></span></th>';
            templateHtmlString += "</tr></thead><tbody>";
            templateHtmlString += "{{#items}}";
            templateHtmlString += "<tr>";
            templateHtmlString += "<td style='display:none;' name='MarketCategory'>{{MarketCategory}}</td><td class='col1 legend' name='DisplayName'>{{DisplayName}}</td>";
            //templateHtmlString += "<td class='col3 altGry hideinDevice' name='Yield'>{{#Yield}}{{Yield}}%{{/Yield}}{{^Yield}}-{{/Yield}}</td>";
            templateHtmlString += "<td class='col3 altGry hideinDevice' name='AnnualizedNominalReturnYTD'>{{#AnnualizedNominalReturnYTD}}{{AnnualizedNominalReturnYTD}}%{{/AnnualizedNominalReturnYTD}}{{^AnnualizedNominalReturnYTD}}-{{/AnnualizedNominalReturnYTD}}</td>";
            templateHtmlString += "<td class='col3 altGry hideinDevice' name='AnnualizedNominalReturn1Y'>{{#AnnualizedNominalReturn1Y}}{{AnnualizedNominalReturn1Y}}%{{/AnnualizedNominalReturn1Y}}{{^AnnualizedNominalReturn1Y}}-{{/AnnualizedNominalReturn1Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn3Y'>{{#AnnualizedNominalReturn3Y}}{{AnnualizedNominalReturn3Y}}%{{/AnnualizedNominalReturn3Y}}{{^AnnualizedNominalReturn3Y}}-{{/AnnualizedNominalReturn3Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn5Y'>{{#AnnualizedNominalReturn5Y}}{{AnnualizedNominalReturn5Y}}%{{/AnnualizedNominalReturn5Y}}{{^AnnualizedNominalReturn5Y}}-{{/AnnualizedNominalReturn5Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn10Y'>{{#AnnualizedNominalReturn10Y}}{{AnnualizedNominalReturn10Y}}%{{/AnnualizedNominalReturn10Y}}{{^AnnualizedNominalReturn10Y}}-{{/AnnualizedNominalReturn10Y}}</td>";
            templateHtmlString += "<td class='col3' name='AnnualizedNominalReturn10YRank'><div class='rank'>{{#IsPositiveAnnualizedNominalReturn10YRank}}<div class='meter-green-text'>{{#AnnualizedNominalReturn10YRank}}{{AnnualizedNominalReturn10YRank}}%{{/AnnualizedNominalReturn10YRank}}</div><div class='meter-green'><span style='width: {{ModAnnualizedNominalReturn10YRank}}%'></span></div>{{/IsPositiveAnnualizedNominalReturn10YRank}}{{^IsPositiveAnnualizedNominalReturn10YRank}}<div class='meter-red red'><span style='width: {{ModAnnualizedNominalReturn10YRank}}%'></span></div><div class='meter-red-text'>{{#AnnualizedNominalReturn10YRank}}{{AnnualizedNominalReturn10YRank}}%{{/AnnualizedNominalReturn10YRank}}{{/IsPositiveAnnualizedNominalReturn10YRank}}</div></div></td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='ExpectedReturn'>{{#ExpectedReturn}}{{ExpectedReturn}}%{{/ExpectedReturn}}{{^ExpectedReturn}}-{{/ExpectedReturn}}</td>";
            templateHtmlString += "<td class='col3' name='ExpectedReturnRank'><div class='rank'>{{#IsPositiveExpectedReturnRank}}<div class='meter-green-text'>{{#ExpectedReturnRank}}{{ExpectedReturnRank}}%{{/ExpectedReturnRank}}</div><div class='meter-green'><span style='width: {{ModExpectedReturnRank}}%'></span></div>{{/IsPositiveExpectedReturnRank}}{{^IsPositiveExpectedReturnRank}}<div class='meter-red red'><span style='width: {{ModExpectedReturnRank}}%'></span></div><div class='meter-red-text'>{{#ExpectedReturnRank}}{{ExpectedReturnRank}}%{{/ExpectedReturnRank}}{{/IsPositiveExpectedReturnRank}}</div></div></td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='Growth10K'>{{FormattedGrowth10K}}</td>";
            
            templateHtmlString += "</tr>";
            templateHtmlString += "{{/items}}";
            templateHtmlString += "</tbody>";
            templateHtmlString += "</table>";
            return templateHtmlString;
        },
		GetTemplateWithoutMustache:function(asOfDate,data){
			var historicalHeader = 'Historical Real Total Return<!-- <span class="tableHeaderDate">(as of ' + asOfDate + ')</span>-->';
        var forecastHeader = 'Forecast Real Return<!-- <span class="tableHeaderDate">(as of ' + GetDataDate() + ')</span>-->';
           var templateHtmlString = "<table id='sortableTable' class='tablesorter' width='100%' >";
            templateHtmlString += '<thead><tr><td colspan="2" class="datatableCaptionempty hidden-sm hidden-xs"></td><td colspan="6" class="datatableCaption hidden-sm hidden-xs">'+historicalHeader+'</td><td colspan="2" class="datatableCaption">'+forecastHeader+'</td></tr>';
            templateHtmlString += "<tr>";
            templateHtmlString += '<th scope="col"  name="MarketCategory">MarketCategory</th>';
            templateHtmlString += '<th scope="col"  name="DisplayName">Index Name<span class="sort-arrow"></span></th>';
            //templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="Yield" style="text-align:center;">Yield<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturnYTD" style="text-align:center;">YTD<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn1Y" style="width: 45px;text-align:center;">1-Year<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn3Y" style="text-align:center;">3-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn5Y" style="text-align:center;">5-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn10Y" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="AnnualizedNominalReturn10YRank" style="text-align:center;"><div class="hideinDesktop">Historical </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="ExpectedReturn" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="ExpectedReturnRank" style="text-align:center;"><div class="hideinDesktop">Forecasted </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            //templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="Growth10K" style="text-align:center;">Growth</br>of $10K<span class="sort-arrow"></span></th>';
            templateHtmlString += "</tr></thead><tbody>";
            
            for(var i=0; i < data.items.length; ++i){
			
                templateHtmlString += "<tr>";
				templateHtmlString += "<td style='display:none;' name='MarketCategory'>"+data.items[i].MarketCategory+"</td>";
                templateHtmlString += "<td class='col1 legend' name='DisplayName'>"+data.items[i].DisplayName+"</td>";
 
               if(data.items[i].AnnualizedNominalReturnYTD !=undefined && data.items[i].AnnualizedNominalReturnYTD!=null){
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturnYTD'>" + data.items[i].AnnualizedNominalReturnYTD + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturnYTD'>-</td>";
                }
				
				if(data.items[i].AnnualizedNominalReturn1Y !=undefined && data.items[i].AnnualizedNominalReturn1Y!=null){
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn1Y'>" + data.items[i].AnnualizedNominalReturn1Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn1Y'>-</td>";
                }
				
				if(data.items[i].AnnualizedNominalReturn3Y !=undefined && data.items[i].AnnualizedNominalReturn3Y!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='AnnualizedNominalReturn3Y'>" + data.items[i].AnnualizedNominalReturn3Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn3Y'>-</td>";
                }
				if(data.items[i].AnnualizedNominalReturn5Y !=undefined && data.items[i].AnnualizedNominalReturn5Y!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='AnnualizedNominalReturn5Y'>" + data.items[i].AnnualizedNominalReturn5Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn5Y'>-</td>";
                }
				if(data.items[i].AnnualizedNominalReturn10Y !=undefined && data.items[i].AnnualizedNominalReturn10Y!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='AnnualizedNominalReturn10Y'>" + data.items[i].AnnualizedNominalReturn10Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn10Y'>-</td>";
                }
				if(data.items[i].AnnualizedNominalReturn10YRank !=undefined && data.items[i].AnnualizedNominalReturn10YRank!=null)
				{
				templateHtmlString +="<td class='col3' name='AnnualizedNominalReturn10YRank'>"+data.items[i].AnnualizedNominalReturn10YRank+"</td>"
				}
				else{
				templateHtmlString +="<td class='col3' name='AnnualizedNominalReturn10YRank'>"+data.items[i].AnnualizedNominalReturn10YRank+"</td>";
				}	
				if(data.items[i].ExpectedReturn !=undefined && data.items[i].ExpectedReturn!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='ExpectedReturn'>" + data.items[i].ExpectedReturn + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='ExpectedReturn'>-</td>";
                }
				
				if(data.items[i].ExpectedReturnRank != undefined && data.items[i].ExpectedReturnRank != null)
				{
					templateHtmlString +="<td class='col3' name='ExpectedReturnRank'>"+data.items[i].ExpectedReturnRank+"<div class='rank'>"
					
					if(data.items[i].RankChange>0){
						templateHtmlString +="<div class='meter-green'></div>"
					}
					else{
						templateHtmlString +="<div class='meter-red red'></div>"
					}
					templateHtmlString +="</div>"

				}
				else{
					templateHtmlString +="<td class='col3' name='ExpectedReturnRank'>-</td>"
				}
				
			  
           
			//templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='Growth10K'>"+data.items[i].FormattedGrowth10K+"</td>";
            
            templateHtmlString += "</tr>";
            }
            templateHtmlString += "</tbody></table>";
            return templateHtmlString;
           
        }, 
    

        InitializeAndSortColumn: function(thObject) {
        }

    });

    //Core overview data table
    AAGlobal.CoreOverviewDataTableConfig = function(currentDOM) {
        var BaseTableViewDefaults = this;
        this.DefaultOrderFieldIndex = 2;
		this.GroupFieldIndex = 1;
        this.DOM = currentDOM;
    }
    AAGlobal.CoreOverviewDataTableConfig.prototype = $.extend(true, {}, new AAGlobal.BaseDataTableConfig(), AAGlobal.CoreOverviewDataTableConfig.prototype, {

        Init: function() {
      
        },

        GetTemplate: function(asOfDate) {
        var historicalHeader = 'Historical Real Total Return<!-- <span class="tableHeaderDate">(as of ' + asOfDate + ')</span>-->';
        var forecastHeader = 'Forecast Real Return<!-- <span class="tableHeaderDate">(as of ' + GetDataDate() + ')</span>-->';
            var templateHtmlString = "<table id='sortableTable' class='tablesorter' width='100%' >";
            templateHtmlString += '<thead><tr><td colspan="2" class="hideinDevice" style="background-color: #ffffff;" ></td><td colspan="6" class="hideinDevice" style="border-left: 2px solid #ffffff;font-size:14px;background-color:#666666;text-transform: uppercase;color:#ffffff;" >'+historicalHeader+'</td><td colspan="3" style="border-left: 2px solid #ffffff;font-size:14px;background-color:#666666;text-transform: uppercase;color:#ffffff;" >'+forecastHeader+'</td></tr>';
            templateHtmlString += "<tr>";
            templateHtmlString += '<th scope="col" style="display:none;" name="DisplayOrder">DisplayOrder</th>';
            templateHtmlString += '<th scope="col"  name="HubPortfolioName">HubPortfolioName</th>';
            templateHtmlString += '<th scope="col"  name="DisplayName">Index Name<span class="sort-arrow"></span></th>';
            //templateHtmlString += '<th scope="col" class="hideinDevice" name="Yield" style="text-align:center;">Yield<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturnYTD" style="text-align:center;">YTD<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn1Y" style="width: 45px;text-align:center;">1-Year<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn3Y" style="text-align:center;">3-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn5Y" style="text-align:center;">5-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn10Y" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="AnnualizedNominalReturn10YRank" style="text-align:center;"><div class="hideinDesktop">Historical </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="ExpectedReturn" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="ExpectedReturnRank" style="text-align:center;"><div class="hideinDesktop">Forecasted </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="Growth10K" style="text-align:center;">Growth</br>of $10K<span class="sort-arrow"></span></th>';
            templateHtmlString += "</tr></thead><tbody>";
            templateHtmlString += "{{#items}}";
            templateHtmlString += "<tr>";
            templateHtmlString += "<td style='display:none;' name='DisplayOrder'>{{DisplayOrder}}</td>";
            templateHtmlString += "<td style='display:none;' name='HubPortfolioName'>{{HubPortfolioName}}</td><td class='col1 legend' name='DisplayName'>{{DisplayName}}</td>";
            //templateHtmlString += "<td class='col3 altGry hideinDevice' name='Yield'>{{#Yield}}{{Yield}}%{{/Yield}}{{^Yield}}-{{/Yield}}</td>";
            templateHtmlString += "<td class='col3 altGry hideinDevice' name='AnnualizedNominalReturnYTD'>{{#AnnualizedNominalReturnYTD}}{{AnnualizedNominalReturnYTD}}%{{/AnnualizedNominalReturnYTD}}{{^AnnualizedNominalReturnYTD}}-{{/AnnualizedNominalReturnYTD}}</td>";
            templateHtmlString += "<td class='col3 altGry hideinDevice' name='AnnualizedNominalReturn1Y'>{{#AnnualizedNominalReturn1Y}}{{AnnualizedNominalReturn1Y}}%{{/AnnualizedNominalReturn1Y}}{{^AnnualizedNominalReturn1Y}}-{{/AnnualizedNominalReturn1Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn3Y'>{{#AnnualizedNominalReturn3Y}}{{AnnualizedNominalReturn3Y}}%{{/AnnualizedNominalReturn3Y}}{{^AnnualizedNominalReturn3Y}}-{{/AnnualizedNominalReturn3Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn5Y'>{{#AnnualizedNominalReturn5Y}}{{AnnualizedNominalReturn5Y}}%{{/AnnualizedNominalReturn5Y}}{{^AnnualizedNominalReturn5Y}}-{{/AnnualizedNominalReturn5Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn10Y'>{{#AnnualizedNominalReturn10Y}}{{AnnualizedNominalReturn10Y}}%{{/AnnualizedNominalReturn10Y}}{{^AnnualizedNominalReturn10Y}}-{{/AnnualizedNominalReturn10Y}}</td>";
            templateHtmlString += "<td class='col3' name='AnnualizedNominalReturn10YRank'><div class='rank'>{{#IsPositiveAnnualizedNominalReturn10YRank}}<div class='meter-green-text'>{{#AnnualizedNominalReturn10YRank}}{{AnnualizedNominalReturn10YRank}}%{{/AnnualizedNominalReturn10YRank}}</div><div class='meter-green'><span style='width: {{ModAnnualizedNominalReturn10YRank}}%'></span></div>{{/IsPositiveAnnualizedNominalReturn10YRank}}{{^IsPositiveAnnualizedNominalReturn10YRank}}<div class='meter-red red'><span style='width: {{ModAnnualizedNominalReturn10YRank}}%'></span></div><div class='meter-red-text'>{{#AnnualizedNominalReturn10YRank}}{{AnnualizedNominalReturn10YRank}}%{{/AnnualizedNominalReturn10YRank}}{{/IsPositiveAnnualizedNominalReturn10YRank}}</div></div></td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='ExpectedReturn'>{{#ExpectedReturn}}{{ExpectedReturn}}%{{/ExpectedReturn}}{{^ExpectedReturn}}-{{/ExpectedReturn}}</td>";
            templateHtmlString += "<td class='col3' name='ExpectedReturnRank'><div class='rank'>{{#IsPositiveExpectedReturnRank}}<div class='meter-green-text'>{{#ExpectedReturnRank}}{{ExpectedReturnRank}}%{{/ExpectedReturnRank}}</div><div class='meter-green'><span style='width: {{ModExpectedReturnRank}}%'></span></div>{{/IsPositiveExpectedReturnRank}}{{^IsPositiveExpectedReturnRank}}<div class='meter-red red'><span style='width: {{ModExpectedReturnRank}}%'></span></div><div class='meter-red-text'>{{#ExpectedReturnRank}}{{ExpectedReturnRank}}%{{/ExpectedReturnRank}}{{/IsPositiveExpectedReturnRank}}</div></div></td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='Growth10K'>{{FormattedGrowth10K}}</td>";
            
            templateHtmlString += "</tr>";
            templateHtmlString += "{{/items}}";
            templateHtmlString += "</tbody>";
            templateHtmlString += "</table>";
            return templateHtmlString;
        },
		GetTemplateWithoutMustache:function(asOfDate,data){
			
			var historicalHeader = 'Historical Real Total Return<!-- <span class="tableHeaderDate">(as of ' + asOfDate + ')</span>-->';
        var forecastHeader = 'Forecast Real Return<!-- <span class="tableHeaderDate">(as of ' + GetDataDate() + ')</span>-->';
			 var templateHtmlString = "<table id='sortableTable' class='tablesorter' width='100%' >";
            templateHtmlString += '<thead><tr><td colspan="2" class="datatableCaptionempty hidden-sm hidden-xs"></td><td colspan="6" class="datatableCaption hidden-sm hidden-xs">'+historicalHeader+'</td><td colspan="2" class="datatableCaption">'+forecastHeader+'</td></tr>';
            templateHtmlString += "<tr>";
            templateHtmlString += '<th scope="col" style="display:none;" name="DisplayOrder">DisplayOrder</th>';
            templateHtmlString += '<th scope="col"  name="HubPortfolioName">HubPortfolioName</th>';
            templateHtmlString += '<th scope="col"  name="DisplayName">Index Name<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturnYTD" style="text-align:center;">YTD<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn1Y" style="width: 45px;text-align:center;">1-Year<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn3Y" style="text-align:center;">3-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn5Y" style="text-align:center;">5-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn10Y" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="AnnualizedNominalReturn10YRank" style="text-align:center;"><div class="hideinDesktop">Historical </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="ExpectedReturn" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="ExpectedReturnRank" style="text-align:center;"><div class="hideinDesktop">Forecasted </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            //templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="Growth10K" style="text-align:center;">Growth</br>of $10K<span class="sort-arrow"></span></th>';
            templateHtmlString += "</tr></thead><tbody>";
            
            for(var i=0; i < data.items.length; ++i){
			
                templateHtmlString += "<tr>";
				templateHtmlString += "<td style='display:none;' name='DisplayOrder'>"+data.items[i].DisplayOrder+"</td>";
                templateHtmlString += "<td style='display:none;' name='HubPortfolioName'>"+data.items[i].HubPortfolioName+"</td><td class='col1 legend' name='DisplayName'>"+data.items[i].DisplayName+"</td>";
 
               if(data.items[i].AnnualizedNominalReturnYTD !=undefined && data.items[i].AnnualizedNominalReturnYTD!=null){
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturnYTD'>" + data.items[i].AnnualizedNominalReturnYTD + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturnYTD'>-</td>";
                }
				
				if(data.items[i].AnnualizedNominalReturn1Y !=undefined && data.items[i].AnnualizedNominalReturn1Y!=null){
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn1Y'>" + data.items[i].AnnualizedNominalReturn1Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn1Y'>-</td>";
                }
				
				if(data.items[i].AnnualizedNominalReturn3Y !=undefined && data.items[i].AnnualizedNominalReturn3Y!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='AnnualizedNominalReturn3Y'>" + data.items[i].AnnualizedNominalReturn3Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn3Y'>-</td>";
                }
				if(data.items[i].AnnualizedNominalReturn5Y !=undefined && data.items[i].AnnualizedNominalReturn5Y!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='AnnualizedNominalReturn5Y'>" + data.items[i].AnnualizedNominalReturn5Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn5Y'>-</td>";
                }
				if(data.items[i].AnnualizedNominalReturn10Y !=undefined && data.items[i].AnnualizedNominalReturn10Y!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='AnnualizedNominalReturn10Y'>" + data.items[i].AnnualizedNominalReturn10Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn10Y'>-</td>";
                }
				if(data.items[i].AnnualizedNominalReturn10YRank !=undefined && data.items[i].AnnualizedNominalReturn10YRank!=null)
				{
				templateHtmlString +="<td class='col3' name='AnnualizedNominalReturn10YRank'>"+data.items[i].AnnualizedNominalReturn10YRank+"</td>"
				}
				else{
				templateHtmlString +="<td class='col3' name='AnnualizedNominalReturn10YRank'>"+data.items[i].AnnualizedNominalReturn10YRank+"</td>";
				}
				if(data.items[i].ExpectedReturn !=undefined && data.items[i].ExpectedReturn!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='ExpectedReturn'>" + data.items[i].ExpectedReturn + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='ExpectedReturn'>-</td>";
                }
				
				if(data.items[i].ExpectedReturnRank != undefined && data.items[i].ExpectedReturnRank != null)
				{
					templateHtmlString +="<td class='col3' name='ExpectedReturnRank'>"+data.items[i].ExpectedReturnRank+"<div class='rank'>"
					
					if(data.items[i].RankChange>0){
						templateHtmlString +="<div class='meter-green'></div>"
					}
					else{
						templateHtmlString +="<div class='meter-red red'></div>"
					}
					templateHtmlString +="</div>"
				}
				else{
					templateHtmlString +="<td class='col3' name='ExpectedReturnRank'>-</td>"
				}
			  
           
			//templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='Growth10K'>"+data.items[i].FormattedGrowth10K+"</td>";
            
            templateHtmlString += "</tr>";
            }
            templateHtmlString += "</tbody></table>";
            return templateHtmlString;
           
        }, 
    

        CustomSortOrder: function(data){
        
            $.Enumerable.From(data).ForEach(function(record){
                switch (record.HubPortfolioName)
                {
                   case "Equity": record.DisplayOrder = 1; break;
                   case "Core Bonds": record.DisplayOrder = 2; break;
                   case "Credit": record.DisplayOrder = 3; break;
                   case "Alternatives":  record.DisplayOrder = 4; break;
                   case "US Cash":  record.DisplayOrder = 5; break;
                   default: 
                        record.DisplayOrder = 5; break;
                }
            });
        }, 

        InitializeAndSortColumn: function(thObject) {
        }

    });

    //Portfolios data table
    AAGlobal.PortfoliosDataTableConfig = function(currentDOM) {
        var BaseTableViewDefaults = this;
        this.DOM = currentDOM;
    }
    AAGlobal.PortfoliosDataTableConfig.prototype = $.extend(true, {}, new AAGlobal.BaseDataTableConfig(), AAGlobal.PortfoliosDataTableConfig.prototype, {

        Init: function() {
      
        },

        GetTemplate: function(asOfDate) {
        var historicalHeader = 'Historical Real Total Return<!-- <span class="tableHeaderDate">(as of ' + asOfDate + ')</span>-->';
        var forecastHeader = 'Forecast Real Return<!-- <span class="tableHeaderDate">(as of ' + GetDataDate() + ')</span>-->';
               var templateHtmlString = "<table id='sortableTable' class='tablesorter' width='100%' >";
            templateHtmlString += '<thead><tr><td colspan="2" class="hideinDevice" style="background-color: #ffffff;" ></td><td colspan="6" class="hideinDevice" style="border-left: 2px solid #ffffff;font-size:14px;background-color:#666666;text-transform: uppercase;color:#ffffff;" >'+historicalHeader+'</td><td colspan="3" style="border-left: 2px solid #ffffff;font-size:14px;background-color:#666666;text-transform: uppercase;color:#ffffff;" >'+forecastHeader+'</td></tr>';
            templateHtmlString += "<tr>";
            templateHtmlString += '<th scope="col"  name="MarketCategory">GroupName</th>';
            templateHtmlString += '<th scope="col"  name="DisplayName">Portfolio Name<span class="sort-arrow"></span></th>';
            //templateHtmlString += '<th scope="col" class="hideinDevice" name="Yield" style="text-align:center;">Yield<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturnYTD" style="text-align:center;">YTD<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn1Y" style="width: 45px;text-align:center;">1-Year<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn3Y" style="text-align:center;">3-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn5Y" style="text-align:center;">5-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="AnnualizedNominalReturn10Y" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="AnnualizedNominalReturn10YRank" style="text-align:center;"><div class="hideinDesktop">Historical </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="ExpectedReturn" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="ExpectedReturnRank" style="text-align:center;"><div class="hideinDesktop">Forecasted </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hideinDevice" name="Growth10K" style="text-align:center;">Growth</br>of $10K<span class="sort-arrow"></span></th>';
            templateHtmlString += "</tr></thead><tbody>";
            templateHtmlString += "{{#items}}";
            templateHtmlString += "<tr>";
            templateHtmlString += "<td style='display:none;' name='GroupName'>{{GroupName}}</td><td class='col1 legend' name='DisplayName'>{{DisplayName}}</td>";
            //templateHtmlString += "<td class='col3 altGry hideinDevice' name='Yield'>{{#Yield}}{{Yield}}%{{/Yield}}{{^Yield}}-{{/Yield}}</td>";
            templateHtmlString += "<td class='col3 altGry hideinDevice' name='AnnualizedNominalReturnYTD'>{{#AnnualizedNominalReturnYTD}}{{AnnualizedNominalReturnYTD}}%{{/AnnualizedNominalReturnYTD}}{{^AnnualizedNominalReturnYTD}}-{{/AnnualizedNominalReturnYTD}}</td>";
            templateHtmlString += "<td class='col3 altGry hideinDevice' name='AnnualizedNominalReturn1Y'>{{#AnnualizedNominalReturn1Y}}{{AnnualizedNominalReturn1Y}}%{{/AnnualizedNominalReturn1Y}}{{^AnnualizedNominalReturn1Y}}-{{/AnnualizedNominalReturn1Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn3Y'>{{#AnnualizedNominalReturn3Y}}{{AnnualizedNominalReturn3Y}}%{{/AnnualizedNominalReturn3Y}}{{^AnnualizedNominalReturn3Y}}-{{/AnnualizedNominalReturn3Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn5Y'>{{#AnnualizedNominalReturn5Y}}{{AnnualizedNominalReturn5Y}}%{{/AnnualizedNominalReturn5Y}}{{^AnnualizedNominalReturn5Y}}-{{/AnnualizedNominalReturn5Y}}</td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='AnnualizedNominalReturn10Y'>{{#AnnualizedNominalReturn10Y}}{{AnnualizedNominalReturn10Y}}%{{/AnnualizedNominalReturn10Y}}{{^AnnualizedNominalReturn10Y}}-{{/AnnualizedNominalReturn10Y}}</td>";
            templateHtmlString += "<td class='col3' name='AnnualizedNominalReturn10YRank'><div class='rank'>{{#IsPositiveAnnualizedNominalReturn10YRank}}<div class='meter-green-text'>{{#AnnualizedNominalReturn10YRank}}{{AnnualizedNominalReturn10YRank}}%{{/AnnualizedNominalReturn10YRank}}</div><div class='meter-green'><span style='width: {{ModAnnualizedNominalReturn10YRank}}%'></span></div>{{/IsPositiveAnnualizedNominalReturn10YRank}}{{^IsPositiveAnnualizedNominalReturn10YRank}}<div class='meter-red red'><span style='width: {{ModAnnualizedNominalReturn10YRank}}%'></span></div><div class='meter-red-text'>{{#AnnualizedNominalReturn10YRank}}{{AnnualizedNominalReturn10YRank}}%{{/AnnualizedNominalReturn10YRank}}{{/IsPositiveAnnualizedNominalReturn10YRank}}</div></div></td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='ExpectedReturn'>{{#ExpectedReturn}}{{ExpectedReturn}}%{{/ExpectedReturn}}{{^ExpectedReturn}}-{{/ExpectedReturn}}</td>";
            templateHtmlString += "<td class='col3' name='ExpectedReturnRank'><div class='rank'>{{#IsPositiveExpectedReturnRank}}<div class='meter-green-text'>{{#ExpectedReturnRank}}{{ExpectedReturnRank}}%{{/ExpectedReturnRank}}</div><div class='meter-green'><span style='width: {{ModExpectedReturnRank}}%'></span></div>{{/IsPositiveExpectedReturnRank}}{{^IsPositiveExpectedReturnRank}}<div class='meter-red red'><span style='width: {{ModExpectedReturnRank}}%'></span></div><div class='meter-red-text'>{{#ExpectedReturnRank}}{{ExpectedReturnRank}}%{{/ExpectedReturnRank}}{{/IsPositiveExpectedReturnRank}}</div></div></td>";
            templateHtmlString += "<td class='col3 hideinDevice' name='Growth10K'>{{FormattedGrowth10K}}</td>";
            
            templateHtmlString += "</tr>";
            templateHtmlString += "{{/items}}";
            templateHtmlString += "</tbody>";
            templateHtmlString += "</table>";
            return templateHtmlString;
        },
		GetTemplateWithoutMustache:function(asOfDate,data){
			var historicalHeader = 'Historical Real Total Return<!-- <span class="tableHeaderDate">(as of ' + asOfDate + ')</span>-->';
			var forecastHeader = 'Forecast Real Return<!-- <span class="tableHeaderDate">(as of ' + GetDataDate() + ')</span>-->';
               var templateHtmlString = "<table id='sortableTable' class='tablesorter' width='100%' >";
            
            templateHtmlString += '<thead><tr><td colspan="2" class="datatableCaptionempty hidden-sm hidden-xs"></td><td colspan="6" class="datatableCaption hidden-sm hidden-xs">'+historicalHeader+'</td><td colspan="2" class="datatableCaption">'+forecastHeader+'</td></tr>';
            templateHtmlString += "<tr>";
            templateHtmlString += '<th scope="col"  name="MarketCategory">GroupName</th>';
            templateHtmlString += '<th scope="col"  name="DisplayName">Portfolio Name<span class="sort-arrow"></span></th>';
            //templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="Yield" style="text-align:center;">Yield<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturnYTD" style="text-align:center;">YTD<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn1Y" style="width: 45px;text-align:center;">1-Year<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn3Y" style="text-align:center;">3-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn5Y" style="text-align:center;">5-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="AnnualizedNominalReturn10Y" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="AnnualizedNominalReturn10YRank" style="text-align:center;"><div class="hideinDesktop">Historical </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="ExpectedReturn" style="text-align:center;">10-Year</br>Annualized<span class="sort-arrow"></span></th>';
            templateHtmlString += '<th scope="col" name="ExpectedReturnRank" style="text-align:center;"><div class="hideinDesktop">Forecasted </div>10-Year</br>Relative Rank<span class="sort-arrow"></span></th>';
            //templateHtmlString += '<th scope="col" class="hidden-sm hidden-xs" name="Growth10K" style="text-align:center;">Growth</br>of $10K<span class="sort-arrow"></span></th>';
            templateHtmlString += "</tr></thead><tbody>";
            
            for(var i=0; i < data.items.length; ++i){
			
                templateHtmlString += "<tr>";
				templateHtmlString += "<td style='display:none;' name='GroupName'>"+data.items[i].GroupName+"</td>";
                templateHtmlString += "<td class='col1 legend' name='DisplayName'>"+data.items[i].DisplayName+"</td>";
 
               if(data.items[i].AnnualizedNominalReturnYTD !=undefined && data.items[i].AnnualizedNominalReturnYTD!=null){
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturnYTD'>" + data.items[i].AnnualizedNominalReturnYTD + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturnYTD'>-</td>";
                }
				
				if(data.items[i].AnnualizedNominalReturn1Y !=undefined && data.items[i].AnnualizedNominalReturn1Y!=null){
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn1Y'>" + data.items[i].AnnualizedNominalReturn1Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn1Y'>-</td>";
                }
				
				if(data.items[i].AnnualizedNominalReturn3Y !=undefined && data.items[i].AnnualizedNominalReturn3Y!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='AnnualizedNominalReturn3Y'>" + data.items[i].AnnualizedNominalReturn3Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn3Y'>-</td>";
                }
				if(data.items[i].AnnualizedNominalReturn5Y !=undefined && data.items[i].AnnualizedNominalReturn5Y!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='AnnualizedNominalReturn5Y'>" + data.items[i].AnnualizedNominalReturn5Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn5Y'>-</td>";
                }
				if(data.items[i].AnnualizedNominalReturn10Y !=undefined && data.items[i].AnnualizedNominalReturn10Y!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='AnnualizedNominalReturn10Y'>" + data.items[i].AnnualizedNominalReturn10Y + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='AnnualizedNominalReturn10Y'>-</td>";
                }
				if(data.items[i].AnnualizedNominalReturn10YRank !=undefined && data.items[i].AnnualizedNominalReturn10YRank!=null)
				{
				templateHtmlString +="<td class='col3' name='AnnualizedNominalReturn10YRank'>"+data.items[i].AnnualizedNominalReturn10YRank+"</td>"
				}
				else{
				templateHtmlString +="<td class='col3' name='AnnualizedNominalReturn10YRank'>"+data.items[i].AnnualizedNominalReturn10YRank+"</td>";
				}	
				if(data.items[i].ExpectedReturn !=undefined && data.items[i].ExpectedReturn!=null){
                    templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='ExpectedReturn'>" + data.items[i].ExpectedReturn + "%</td>";
                }
                else{
                    templateHtmlString += "<td class='col3 altGry hidden-sm hidden-xs' name='ExpectedReturn'>-</td>";
                }
				
				if(data.items[i].ExpectedReturnRank != undefined && data.items[i].ExpectedReturnRank != null)
				{
					templateHtmlString +="<td class='col3' name='ExpectedReturnRank'>"+data.items[i].ExpectedReturnRank+"<div class='rank'>"
					
					if(data.items[i].RankChange>0){
						templateHtmlString +="<div class='meter-green'></div>"
					}
					else{
						templateHtmlString +="<div class='meter-red red'></div>"
					}
					templateHtmlString +="</div>"
				}
				else{
					templateHtmlString +="<td class='col3' name='ExpectedReturnRank'>-</td>"
				}
				
			  
           
			//templateHtmlString += "<td class='col3 hidden-sm hidden-xs' name='Growth10K'>"+data.items[i].FormattedGrowth10K+"</td>";
            
            templateHtmlString += "</tr>";
            }
            templateHtmlString += "</tbody></table>";
            return templateHtmlString;
           
        }, 

        InitializeAndSortColumn: function(thObject) {
        }

    });
function RegisterTooltipClose()
{
    $(".tooltipClose").click(function(e){
		var chartDiv = $('div[id*=PlotContainer]:visible');
        var chart = chartDiv.highcharts();
        chart.customTooltip.hide();
        CloseCustomTooltip(chart, chartDiv);
    });
	$(".CalloutToggleViews").click( function (){
        $('.card').toggleClass('applyflip');
        var text = $(this).text();
        text = text.substring(0,text.length-2);
		var chart = $('div[id*=PlotContainer]:visible').highcharts();
		var showAssetAllocation = $(this).attr('callout-type')=="asset-allocation"?true:false;
		PopulateExportChartConfig(chart, chart.customTooltipPoint, showAssetAllocation );
        CaptureAAAnalytics("Infographic-", "Callout - " + text, location.pathname);
    })

	//$("#card").flip({reverse:true,trigger: 'manual'});
	/* $('.CalloutToggleViews').click( function (e) {
		
        if($(this).text() == "VIEW ASSET ALLOCATION >")
		{
			$("#card").flip(true);
		}
		else{
		$("#card").flip(false);
		}       
    }); */
}
function CloseCustomTooltip(chart, chartDiv)
{
    window.setTimeout(function() {
			var customTooltipPoint = chart.customTooltipPoint;
			var previousCustomTooltip = chart.previousCustomTooltip;
			chart.customTooltipPoint = null;
			PopulateExportChartConfig(chart, null);
			chart.yAxis[0].setExtremes(chart.initialYMin, chart.initialYMax);			
			chart.spacing[1]=25;
			if(customTooltipPoint && chart.series[customTooltipPoint.SeriesIndex].name == "Efficient Frontier" && (!previousCustomTooltip || chart.series[previousCustomTooltip.SeriesIndex].name == "Efficient Frontier"))
			{
				return;
			}
			
				if(chartDiv.attr("id") == 'ScatterPlotContainer')
				{
					zoomIn(chart);
					window.setTimeout(function(){
					resetZoom(chart);},1000);				
					$.each(chart.series,function(i,o){ 
						o.update({
							dataLabels: {
								enabled: true
							},
							enableMouseTracking: true
						});
					});
					
				}
				else
				{
					$.Enumerable.From(chart.series).ForEach(function(seriesObj)
					{
						if(seriesObj.options.originalPointWidth)
						seriesObj.options.pointWidth = seriesObj.options.originalPointWidth;
					});
					chart.setSize(chart.containerWidth, chart.chartHeight, doAnimation = true);
				}
			
		}, 1000);
}
function PopulateExportChartConfig(chart, tooltipPoint, showAssetAllocation) {
	var chartOptions = chart.userOptions;
    if(chartOptions.exportOptions)
	{
		var exportOptions = chartOptions.exportOptions;
		if (tooltipPoint) {
			exportOptions.CustomTooltipPoint = tooltipPoint;
			if(AAGlobal.AssetClassData)
			{
				var point = chart.series[tooltipPoint.SeriesIndex].points[tooltipPoint.PointIndex];
				var refcode =  point.ReferenceCode;			
				var weights = $.Enumerable.From(AAGlobal.WeightsData).Where(function(rec) {
				return rec.BasketCode == refcode;}).ToArray();
				var data = [];
				$.each(AAGlobal.AssetClassData, function(i,obj){
					var weight = null;
					$.each(weights, function(index,w)
					{
						if(w.IndexCode == obj.ReferenceCode){ weight = w.Weight;}
					})
					data.push({ReferenceCode:obj.ReferenceCode,Name: obj.ShortDisplayName,HubPortfolioId:obj.HubPortfolioId, Group :obj.HubPortfolioName, Weight:weight});
				} );
				exportOptions.AssetAllocationData = data;
			}
			exportOptions.yAxis.minRange = 1;
			exportOptions.yAxis.min = chart.yAxis[0].userMin;
			exportOptions.yAxis.max = chart.yAxis[0].userMax;
			exportOptions.ShowAssetAllocation = showAssetAllocation?true:false;
		}
		else {
			exportOptions.CustomTooltipPoint = null;
		}
		//chartOptions.hiddenFieldOptions = escape(JSON.stringify(exportOptions));
	}
}
String.prototype.width = function(font) {
  var f = font || '14px "Whitney A", "Whitney B"',
      o = $('<div>' + this + '</div>')
            .css({'position': 'absolute', 'float': 'left','text-transform':'Uppercase', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f})
            .appendTo($('body')),
      w = o.width();

  o.remove();

  return w;
}

function ExpendScale(highChart, currentYValue, currentXValue) {
    
    var xAxis = highChart.xAxis[0];
    var yAxis = highChart.yAxis[0];
   
    var multiplyXIndex = 1, multiplyYIndex = 1;
    var newXMin, newXMax, newYMin, newYMax;
	
	if (currentXValue <= xAxis.min || currentXValue > xAxis.max || currentYValue <= yAxis.min || currentYValue > yAxis.max) {
		return;
	}
	/*
    if ((xAxis.min + xAxis.minRange) > currentXValue) {
        newXMin = xAxis.min;
        multiplyXIndex++;
        newXMax = xAxis.max - (xAxis.minRange * multiplyXIndex);
    } else if ((xAxis.max - xAxis.minRange) < currentXValue) {
        newXMax = xAxis.max;
        multiplyXIndex++;
        newXMin = xAxis.min + (xAxis.minRange * multiplyXIndex);
    } else {
        newXMin = xAxis.min + xAxis.minRange;
        newXMax = xAxis.max - xAxis.minRange;
    }

    if ((yAxis.min + yAxis.minRange) > currentYValue) {
        newYMin = yAxis.min;
        multiplyYIndex++;
        newYMax = yAxis.max - (yAxis.minRange * multiplyYIndex);
    } else if ((yAxis.max - yAxis.minRange) < currentYValue) {
        newYMax = yAxis.max;
        multiplyYIndex++;
        newYMin = yAxis.min + (yAxis.minRange * multiplyYIndex);
    } else {
        newYMin = yAxis.min + yAxis.minRange;
        newYMax = yAxis.max - yAxis.minRange;
    } */
    xAxis.setExtremes(currentXValue -1, currentXValue +1, false, false, { trigger: 'zoom' });
    yAxis.setExtremes(currentYValue - .5, currentYValue +.5, false, false, { trigger: 'zoom' });

    highChart.redraw();
	//highChart.zoomOut();
}

function ScatterPlotPointClick(chartObj,customTooltipPoint,evt)
{
	var point = customTooltipPoint?chartObj.series[customTooltipPoint.SeriesIndex].points[customTooltipPoint.PointIndex]:null;
		
	if(point.series.name == 'Efficient Frontier' && $('.charts-tooltip.efficient-frontier-tooltip:visible').length > 0)
	{
		return;
	}
	if(point.series.name != 'Efficient Frontier')
	{
		chartObj.spacing[1] = 225;
		chartObj.setSize(chartObj.containerWidth, chartObj.chartHeight, doAnimation = true);
	}
	else
	{
		var chartDiv = $('div[id*=PlotContainer]:visible');
		chartObj.hideEnabled = false;	
	}
	//chartObj.previousCustomTooltip =  chartObj.customTooltipPoint;
	//chartObj.customTooltipPoint =  customTooltipPoint;
	chartObj.customTooltip.refresh(point,evt);
	CaptureAAAnalytics("Infographic-", "Callout", location.pathname);
	RegisterTooltipClose();
	if(point.series.name == 'Efficient Frontier')
	{
		CloseCustomTooltip(chartObj, chartDiv);
		setTimeout(function() {
			  chartObj.hideEnabled = true;
			}, 1000);							
		$('.charts-tooltip.efficient-frontier-tooltip').delay(20000).fadeOut();
	}
	else
	{
		var yAxis = chartObj.yAxis[0];
		chartObj.zoomOut();
		yAxis.setExtremes(chartObj.initialYMin, chartObj.initialYMax, false, false);
		$.each(chartObj.series,function(i,o){ 
			
			o.update({
				dataLabels: {
					enabled: false
				},
				enableMouseTracking: (o.name != "Efficient Frontier")
			},false);
		});
		chartObj.redraw();
		
		var xAxis = chartObj.xAxis[0];
		var yAxis = chartObj.yAxis[0];
		
		var confidencePositive2Y = yAxis.toPixels(point.ConfidenceIntervalPositive2);
		
		var confidenceNegative2Y = yAxis.toPixels(point.ConfidenceIntervalNegative2);
		
		if(confidenceNegative2Y - confidencePositive2Y < 67)
		{
			ExpendScale(chartObj, point.y ,point.x);
		}
		else
		{
			chartObj.zoomOut();
		}
		chartObj.redraw();
	}
	chartObj.customTooltipPoint =  customTooltipPoint;
		
	//PopulateExportChartConfig(chartObj, customTooltipPoint);
}