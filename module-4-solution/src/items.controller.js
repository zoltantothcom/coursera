(function() {
	'use strict';

	angular.module('MenuApp')
		.controller('itemListController', itemListController);

	itemListController.$inject = ['itemlist'];
	function itemListController(itemlist) {
		var list = this;

		list.items = itemlist;
	}

})();