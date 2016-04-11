
var scope = ['$scope', function($scope) {
    $scope.test = '异步加载';
    if(!$scope.$$phase) {
        $scope.$apply();
    }
}];

return scope;
