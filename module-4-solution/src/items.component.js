(function() {
	'use strict';

	angular.module('MenuApp')
		.component('items', {
			templateUrl: 'src/templates/items.tpl.html',
			bindings: {
				items: '<'
			}
		});

})();