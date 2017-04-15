(function() {
	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.list = [];
		$scope.items = '';
		$scope.message = '';
		$scope.className = '';

		$scope.check = function() {
			if ($scope.items === '') {
				$scope.list = [];
				displayMessage(0);
			} else {
				var dirtyArray = $scope.items.split(','),
					cleanArray = [];

				for (var i = 0; i < dirtyArray.length; i++) {
					if (dirtyArray[i] !== '') {
						cleanArray.push(dirtyArray[i]);
					}
				}

				$scope.list = cleanArray;
				displayMessage(cleanArray.length);
			}
		};

		var displayMessage = function(num) {
			if (num === 0) {
				$scope.message = 'Please enter data first!';
				$scope.className = 'danger';
			} else if (num <= 3) {
				$scope.message = 'Enjoy!';
				$scope.className = 'success';
			} else {
				$scope.message = 'Too much!';
				$scope.className = 'success';
			}
		};
	}

})();