(function() {
	'use strict';

	angular.module('MenuApp')
		.component('categoriesList', {
			templateUrl: 'src/templates/categories-list.tpl.html',
			bindings: {
				items: '<'
			}
		});
		
})();