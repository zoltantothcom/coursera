(function() {

	angular.module('MenuApp')
		.controller('categoryListController', categoryListController);


	categoryListController.$inject = ['categories'];
	function categoryListController(categories) {
		var list = this;

		list.items = categories;
	}

})();