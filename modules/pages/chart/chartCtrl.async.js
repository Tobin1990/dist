var scope = ['$scope', '$http', function($scope, $http) {
	var placeholder = $('#main').css({
		'width': '90%',
		'min-height': '150px'
	});
	if (placeholder.length) {
		var data = [{
			label: "social networks",
			data: 38.7,
			color: "#68BC31"
		}, {
			label: "search engines",
			data: 24.5,
			color: "#2091CF"
		}, {
			label: "ad campaigns",
			data: 8.2,
			color: "#AF4E96"
		}, {
			label: "direct traffic",
			data: 18.6,
			color: "#DA5430"
		}, {
			label: "other",
			data: 10,
			color: "#FEE074"
		}]

		function drawPieChart(placeholder, data, position) {
			$.plot(placeholder, data, {
				series: {
					pie: {
						show: true,
						tilt: 0.8,
						highlight: {
							opacity: 0.25
						},
						stroke: {
							color: '#fff',
							width: 2
						},
						startAngle: 2
					}
				},
				legend: {
					show: true,
					position: position || "ne",
					labelBoxBorderColor: null,
					margin: [-30, 15]
				},
				grid: {
					hoverable: true,
					clickable: true
				}
			})
		}
		drawPieChart(placeholder, data);
	}

	if (!$scope.$$phase) {
		$scope.$apply();
	}
}];

return scope;