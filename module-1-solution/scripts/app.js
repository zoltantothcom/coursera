(function() {
	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.items = '';
		$scope.message = '';

		$scope.check = function() {
			if ($scope.items === '') {
				displayMessage(0);
			} else {
				$scope.items = $scope.items.split(',').length;
				displayMessage($scope.items);
			}
		};

		var displayMessage = function(num) {
			if (num === 0) {
				$scope.message = 'Please enter data first!';
			} else if (num <= 3) {
				$scope.message = 'Enjoy!';
			} else {
				$scope.message = 'Too much!';
			}
		};
	}

})();