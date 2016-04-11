'use strict';

var index = require('pages/index/index');
var tables = require('pages/tables/tables');
var sourceIP = require('pages/sourceIP/sourceIP');
var chart = require('pages/chart/chart');
/**
 * Route configuration for the RDash module.
 */
angular.module('DBoss').config(function ($stateProvider, $urlRouterProvider) {

    // Application routes
    $stateProvider
        .state('index', index)
        .state('tables', tables)
        .state('sourceIP',sourceIP)
        .state('chart',chart)
    // For unmatched routes*/
    $urlRouterProvider.otherwise('/');
});