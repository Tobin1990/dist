
var scope = ['$scope','$http', function($scope,$http) {
    		$scope.currentPage = 1;
			$scope.pageSize = 4;
			$scope.pages = [];
			$http.get('../../../tables.json', {
				method: 'GET',
				params: {
					'pageNo': $scope.currentPage,
					'pageSize': $scope.pageSize
				},
				responseType: "json"
			}).then(function(data) {
				$scope.userName = data.data.records;
				$scope.numPages = Math.ceil(data.data.Total / data.data.pageSize);
				console.log($scope.numPages)
			});
			$scope.onSelectPage = function(page) {
				//replace your real data
				$http.get('../../../tables.json', {
					method: 'GET',
					params: {
						'pageNo': page,
						'pageSize': $scope.pageSize
					},
					responseType: "json"
				}).then(function(data) {
					$scope.userName = data.data.records;
					$scope.numPages = Math.ceil(data.data.Total / data.data.pageSize);
				});
			};
    if(!$scope.$$phase) {
        $scope.$apply();
    }
}];

return scope;
