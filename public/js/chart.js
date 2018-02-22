/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 97);
/******/ })
/************************************************************************/
/******/ ({

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(98);


/***/ }),

/***/ 98:
/***/ (function(module, exports) {

/**
 *
 * Chart 1
 *
 */

var linechart1 = AmCharts.makeChart("lineChart1", {
    "type": "serial",
    "theme": "light",
    "marginRight": 40,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "mouseWheelZoomEnabled": true,
    "dataDateFormat": "YYYY-MM-DD",
    "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth": true
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
        "id": "g1",
        "balloon": {
            "drop": true,
            "adjustBorderColor": false,
            "color": "#ffffff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
    }],
    "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis": false,
        "offset": 30,
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount": true,
        "color": "#AAAAAA"
    },
    "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha": 1,
        "cursorColor": "#258cbb",
        "limitToGraph": "g1",
        "valueLineAlpha": 0.2,
        "valueZoomable": true
    },
    "valueScrollbar": {
        "oppositeAxis": false,
        "offset": 50,
        "scrollbarHeight": 10
    },
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true
    },
    "export": {
        "enabled": true
    },
    "dataProvider": line1Data
});

linechart1.addListener("rendered", zoomlinechart1);

zoomlinechart1();

function zoomlinechart1() {
    linechart1.zoomToIndexes(linechart1.dataProvider.length - 40, linechart1.dataProvider.length - 1);
}

/**
 *
 * chart 2
 *
 */

var linechart2 = AmCharts.makeChart("lineChart2", {
    "type": "serial",
    "theme": "light",
    "marginTop": 0,
    "marginRight": 80,
    "dataProvider": line2Data,
    "graphs": [{
        "id": "g1",
        "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
        "bullet": "round",
        "bulletSize": 8,
        "lineColor": "#d1655d",
        "lineThickness": 2,
        "negativeLineColor": "#637bb6",
        "type": "smoothedLine",
        "valueField": "value"
    }],
    "chartScrollbar": {
        "graph": "g1",
        "gridAlpha": 0,
        "color": "#888888",
        "scrollbarHeight": 55,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "autoGridCount": true,
        "selectedGraphFillAlpha": 0,
        "graphLineAlpha": 0.2,
        "graphLineColor": "#c2c2c2",
        "selectedGraphLineColor": "#888888",
        "selectedGraphLineAlpha": 1

    },
    "chartCursor": {
        "categoryBalloonDateFormat": "YYYY",
        "cursorAlpha": 0,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "valueLineAlpha": 0.5,
        "fullWidth": true
    },
    "dataDateFormat": "YYYY",
    "categoryField": "year",
    "categoryAxis": {
        "minPeriod": "YYYY",
        "parseDates": true,
        "minorGridAlpha": 0.1,
        "minorGridEnabled": true
    },
    "export": {
        "enabled": true
    }
});

linechart2.addListener("rendered", zoomChart);
if (linechart2.zoomChart) {
    linechart2.zoomChart();
}

function zoomChart() {
    linechart2.zoomToIndexes(Math.round(linechart2.dataProvider.length * 0.4), Math.round(linechart2.dataProvider.length * 0.55));
}

/**
 *  bar chart 1
 */

var barchart1 = AmCharts.makeChart("barChart1", {
    "theme": "light",
    "type": "serial",
    "dataProvider": bar1Data,
    "valueAxes": [{
        "stackType": "3d",
        "unit": "%",
        "position": "left",
        "title": "GDP growth rate"
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "GDP grow in [[category]] (2004): <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2004",
        "type": "column",
        "valueField": "year2004"
    }, {
        "balloonText": "GDP grow in [[category]] (2005): <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2005",
        "type": "column",
        "valueField": "year2005"
    }, {
        "balloonText": "GDP grow in [[category]] (2006): <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2005",
        "type": "column",
        "valueField": "year2005"
    }],
    "plotAreaFillAlphas": 0.1,
    "depth3D": 60,
    "angle": 30,
    "categoryField": "country",
    "categoryAxis": {
        "gridPosition": "start"
    },
    "export": {
        "enabled": true
    }
});
jQuery('.chart-input').off().on('input change', function () {
    var property = jQuery(this).data('property');
    var target = barchart1;
    barchart1.startDuration = 0;

    if (property == 'topRadius') {
        target = barchart1.graphs[0];
        if (this.value == 0) {
            this.value = undefined;
        }
    }

    target[property] = this.value;
    barchart1.validateNow();
});

/**
 * Pie chart 1
 */
var piechart1 = AmCharts.makeChart("pieChart1", {
    "type": "pie",
    "theme": "light",
    "titles": [{
        "text": "Visitors countries",
        "size": 16
    }],
    "dataProvider": pie1Data,
    "valueField": "visits",
    "titleField": "country",
    "startEffect": "elastic",
    "startDuration": 2,
    "labelRadius": 15,
    "innerRadius": "50%",
    "depth3D": 10,
    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
    "angle": 15,
    "export": {
        "enabled": true
    }
});

/**
 * bar line chart 1
 */
var barlinechart1 = AmCharts.makeChart("barlineChart1", {
    "type": "serial",
    "theme": "none",
    "dataDateFormat": "YYYY-MM-DD",
    "precision": 2,
    "valueAxes": [{
        "id": "v1",
        "title": "Sales",
        "position": "left",
        "autoGridCount": false,
        "labelFunction": function labelFunction(value) {
            return "$" + Math.round(value) + "M";
        }
    }, {
        "id": "v2",
        "title": "Market Days",
        "gridAlpha": 0,
        "position": "right",
        "autoGridCount": false
    }],
    "graphs": [{
        "id": "g3",
        "valueAxis": "v1",
        "lineColor": "#e1ede9",
        "fillColors": "#e1ede9",
        "fillAlphas": 1,
        "type": "column",
        "title": "Actual Sales",
        "valueField": "sales2",
        "clustered": false,
        "columnWidth": 0.5,
        "legendValueText": "$[[value]]M",
        "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
    }, {
        "id": "g4",
        "valueAxis": "v1",
        "lineColor": "#62cf73",
        "fillColors": "#62cf73",
        "fillAlphas": 1,
        "type": "column",
        "title": "Target Sales",
        "valueField": "sales1",
        "clustered": false,
        "columnWidth": 0.3,
        "legendValueText": "$[[value]]M",
        "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
    }, {
        "id": "g1",
        "valueAxis": "v2",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": "#20acd4",
        "type": "smoothedLine",
        "title": "Market Days",
        "useLineColorForBulletBorder": true,
        "valueField": "market1",
        "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
    }, {
        "id": "g2",
        "valueAxis": "v2",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": "#e1ede9",
        "type": "smoothedLine",
        "dashLength": 5,
        "title": "Market Days ALL",
        "useLineColorForBulletBorder": true,
        "valueField": "market2",
        "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
    }],
    "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis": false,
        "offset": 30,
        "scrollbarHeight": 50,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount": true,
        "color": "#AAAAAA"
    },
    "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha": 0,
        "valueLineAlpha": 0.2
    },
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true
    },
    "legend": {
        "useGraphSettings": true,
        "position": "top"
    },
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "export": {
        "enabled": true
    },
    "dataProvider": barline1data
});

/***/ })

/******/ });