(function() {

	angular.module('MenuApp')
		.component('categoriesList', {
			templateUrl: 'templates/categorieslist.tpl.html',
			bindings: {
				items: '<'
			}
		});
		
})();