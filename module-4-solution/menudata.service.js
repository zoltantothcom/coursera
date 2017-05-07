(function () {

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiCategories', 'https://davids-restaurant.herokuapp.com/categories.json')
        .constant('ApiCategoryItems', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=');

    MenuDataService.$inject = ['$http', 'ApiCategories', 'ApiCategoryItems'];
    function MenuDataService($http, ApiCategories, ApiCategoryItems) {
    	var service = this;

    	service.getAllCategories = function() {
            return $http({ url: ApiCategories }).then(function(result) {
    			return result.data;
    		});
    	};

    	service.getItemsForCategory = function(categoryShortName) {
            return $http({ url: ApiCategoryItems + categoryShortName }).then(function(result) {
                console.log(result.data)
                return result.data;
            });
    	};
    }

    })();