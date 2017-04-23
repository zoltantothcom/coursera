(function() {
	angular.module('ShoppingListCheckOff', [])
		.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
		.controller('ShoppingListCheckOffToBuyController', ShoppingListCheckOffToBuyController)
		.controller('ShoppingListCheckOffBoughtController', ShoppingListCheckOffBoughtController);

	// BUY controller
	ShoppingListCheckOffToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ShoppingListCheckOffToBuyController(ShoppingListCheckOffService) {
		var ToBuyController = this;

		ToBuyController.items = ShoppingListCheckOffService.toBuy;

		ToBuyController.buyItem = function(index)  {
			ShoppingListCheckOffService.buyItem(index);
		};
	}

	// BOUGHT controller
	ShoppingListCheckOffBoughtController.$inject = ['ShoppingListCheckOffService'];
	function ShoppingListCheckOffBoughtController(ShoppingListCheckOffService) {
		var AlreadyBoughtController = this;

		AlreadyBoughtController.items = ShoppingListCheckOffService.bought;
	}

	// service
	function ShoppingListCheckOffService() {
		var service = this;

		// initial list
		var items = [
			{ name: 'mangos',  quantity: 10 },
			{ name: 'apples',  quantity: 12 },
			{ name: 'peaches', quantity: 14 },
			{ name: 'oranges', quantity: 16 },
			{ name: 'kiwis',   quantity: 18 },
			{ name: 'bananas', quantity: 20 },
			{ name: 'papayas', quantity: 22 }
		];

		// to buy array
		service.toBuy = items;
		// already bought array
		service.bought = [];

		service.buyItem = function(index) {
			// add to bought array
			service.bought.push(items[index]);
			// remove from buy array
			service.toBuy.splice(index, 1);
		}
	}

})();