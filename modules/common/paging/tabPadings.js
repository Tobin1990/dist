define('common/paging/tabPadings', function(require, exports, module) {
	angular.module('DBoss').directive('pagings', function() {
		return {
			restrict: 'E',
			//scope: {
			//    numPages: '=',
			//    currentPage: '=',
			//    onSelectPage: '&'
			//},
			template: '',
			replace: true,
			link: function(scope, element, attrs) {
				scope.$watch('numPages', function(value) {
					scope.pages = [];
					for (var i = 1; i <= value; i++) {
						scope.pages.push(i);
					}
					
					if (scope.currentPage > value) {
						scope.selectPage(value);
					}
				});
				scope.isActives = function(page) {
					return scope.currentPage === page;
				};
				scope.selectPages = function(page) {
					if (!scope.isActives(page)) {
						scope.currentPage = page;
						scope.onSelectPages(page);
					}
				};
				scope.selectPreviouss = function() {
					if (!scope.noPreviouss()) {
						scope.selectPages(scope.currentPage - 1);
					}
				};
				scope.selectNexts = function() {
					if (!scope.noNext()) {
						scope.selectPages(scope.currentPage + 1);
					}
				};
				scope.noPreviouss = function() {
					return scope.currentPage == 1;
				};
				scope.noNexts = function() {
					return scope.currentPage == scope.numPages;
				};

			}
		};
	})

})