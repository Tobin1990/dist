


var scope = ['$scope','$http', function($scope,$http) {
       $http.get('../../../side_bar.json', {
            method: 'GET',
            // params: {
            //  'pageNo': $scope.currentPage,
            //  'pageSize': $scope.pageSize
            // },
            responseType: "json"
        }).then(function(data) {
            $scope.test_select = data.data.data;
            console.log(data.data.data)
        });
    if(!$scope.$$phase) {
        $scope.$apply();
    }
}];

return scope;
