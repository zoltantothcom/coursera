(function() {
	'use strict';

	angular.module('MenuApp')
		.component('itemsList', {
			templateUrl: 'src/templates/items-list.tpl.html',
			bindings: {
				items: '<'
			}
		});
		
})();