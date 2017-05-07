(function() {
	'use strict';

	angular.module('MenuApp')
		.component('categories', {
			templateUrl: 'src/templates/categories.tpl.html',
			bindings: {
				items: '<'
			}
		});

})();