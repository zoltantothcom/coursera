(function() {
	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.items = '';
		$scope.message = '';
		$scope.className = '';

		$scope.checkQuantity = function() {
			$scope.list = [];
			var quantity = 0;

			if ($scope.items !== '') {
				var dirtyArray = $scope.items.split(','),
					cleanArray = [];

				for (var i = 0; i < dirtyArray.length; i++) {
					if (dirtyArray[i].trim() !== '') {
						cleanArray.push(dirtyArray[i]);
					}
				}

				$scope.list = cleanArray;
				quantity = cleanArray.length;
			}

			// show message to the user
			displayMessage(quantity);
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