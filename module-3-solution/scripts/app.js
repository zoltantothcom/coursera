(function() {
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', foundItemsDirective)
	.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com/menu_items.json');

	//
	// directive
	function foundItemsDirective() {
		var ddo = {
			templateUrl: 'foundItems.html',
			transclude: true,
			scope: {
				found: '<',
				onRemove: "&"
			},
			controller: FoundItemsDirectiveController,
			controllerAs: 'list',
			bindToController: true
		};

		return ddo;
	}

	// directive controller
	function FoundItemsDirectiveController() {
		var list = this;

		// for the warning message
		list.isEmpty = function() {
			return list.found !== undefined && list.found.length === 0;
		};

		// for the list of items
		list.isNotEmpty = function() {
			return list.found !== undefined && list.found.length > 0;
		};
	}

	//
	// controller
	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var ctrl = this;

		ctrl.searchTerm = '';

		ctrl.search = function() {
			if (ctrl.searchTerm === '') {
				ctrl.found = [];
				return;
			}

			var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);

			promise
				.then(function(response) {
					ctrl.found = (response.length > 0) ? response : [];
				})
				.catch(function(error) {
					console.log(error);
				});
		};

		ctrl.removeItem = function(index) {
			ctrl.found.splice(index, 1);
		};
	}

	//
	// service
	MenuSearchService.$inject  = ['$http', 'ApiBasePath'];
	function MenuSearchService($http, ApiBasePath) {
		var service = this;

		service.getMatchedMenuItems = function(searchTerm) {
			return $http({ url: ApiBasePath }).then(function(result) {
				var foundItems = [],
					items = result.data.menu_items;

				for (var i = 0; i < items.length; i++) {
					if (items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
						foundItems.push(items[i]);
					}
				}

				return foundItems;
			});
		};
	}
})();