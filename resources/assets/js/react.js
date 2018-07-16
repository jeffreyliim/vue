/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');
// window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery');
    require('../../../node_modules/mdbootstrap/js/popper.min');
    require('../../../node_modules/mdbootstrap/js/bootstrap');
    require('../../../bower_components/mdbootstrap4/compiled.min');
    // require('../../../node_modules/mdbootstrap/js/mdb');
} catch (e) {
}


/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
};

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}



require('../../../node_modules/amcharts3/amcharts/amcharts');
require('../../../node_modules/amcharts3/amcharts/serial');
require('../../../node_modules/amcharts3/amcharts/plugins/export/export');
require('../../../node_modules/amcharts3/amcharts/themes/light');

/*
 * We will import the react source and the react dom here
 * and your react code will be stored in the resources/assets/js/myreact.jsx
 * file. All imports are to be done here.
 * */

window.React = require('react');

window.ReactDOM = require('react-dom');

AmCharts = require("@amcharts/amcharts3-react");

require('babel-standalone');



