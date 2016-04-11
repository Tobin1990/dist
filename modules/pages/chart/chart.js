

module.exports = {
    url: '/chart',
    template: __inline('./chart.html'),
    //注意如果开启压缩，应采取此方式注入对象，否则压缩后将找不到
    controller : ["$scope","$injector","$http",function($scope, $injector,$http) {
        //支持异步加载controller
        require.async('/modules/pages/tables/chartCtrl.async.js','/modules/jquery/flot/jquery.flot.min.js','/modules/jquery/flot/jquery.flot.pie.min.js','/modules/jquery/flot/jquery.flot.resize.min.js', function(ctrl) {
            $injector.invoke(ctrl, this, {'$scope': $scope,'$http':$http});
        });
        // require.async('/modules/pages/tables/tablePaging.js', function(ctrl) {
        //     $injector.invoke(ctrl, this, {'$scope': $scope,'$http':$http});
        // });
        // require.async('/modules/pages/tables/tablePagings.js', function(ctrl) {
        //     $injector.invoke(ctrl, this, {'$scope': $scope,'$http':$http});
        // });
    }]
};