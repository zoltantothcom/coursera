(function() {
	angular.module('MenuApp')
		.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.tpl.html'
			})

			.state('categories', {
				url: '/categories',
				templateUrl: 'templates/categories.tpl.html',
				controller: 'categoryListController as list',
				resolve: {
					categories: ['MenuDataService', function(MenuDataService) {
						return MenuDataService.getAllCategories();
					}]
				}
			})

			.state('items', {
				url: '/items/{id}',
				templateUrl: 'templates/items.tpl.html',
				controller: 'itemListController as list',
				resolve: {
					itemlist: ['$stateParams', 'MenuDataService', 
						function($stateParams, MenuDataService) {
							return MenuDataService.getItemsForCategory($stateParams.id);
						}]
				}
			});
	}
})();