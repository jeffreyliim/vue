/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

Vue = require('vue');


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('../../../resources/assets/js/algolia');

require('../../../node_modules/selectize/dist/js/selectize');

require('../../../node_modules/dropzone/dist/dropzone');

// require('../../../bower_components/remarkable-bootstrap-notify/dist/bootstrap-notify.min');
iziToast = require('../../../node_modules/izitoast/dist/js/iziToast.min');

FlipClock = require('../../../node_modules/flipclock/compiled/flipclock.min');


require('../../../resources/assets/js/myvue');



/*
* We will import the react source and the react dom here
* and your react code will be stored in the resources/assets/js/myreact.jsx
* file. All imports are to be done here.
* */

React = require('react');

ReactDOM = require('react-dom');

require('babel-standalone');

