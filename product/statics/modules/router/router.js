define("router",function(e){"use strict";var t=e("pages/index/index"),s=e("pages/tables/tables");angular.module("DBoss").config(["$stateProvider","$urlRouterProvider",function(e,r){e.state("index",t).state("tables",s),r.otherwise("/")}])});