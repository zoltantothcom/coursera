(function() {
'use strict';

angular.module('public')
.service('MyInfoService', MyInfoService);

MyInfoService.$inject = ['ApiPath'];
function MyInfoService(ApiPath) {
	var service = this;

	service.saveInfo = function(data) {
		service.userInfo = data;
		service.userInfo.img = ApiPath + '/images/' + data.short_name + '.jpg';
	};

	service.getInfo = function() {
		return service.userInfo;
	}
}

})();