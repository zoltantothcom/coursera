(function() {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'MyInfoService'];
function SignUpController(MenuService, MyInfoService) {
	var ctrl = this;
	var user = {};

	ctrl.submit = function() {
		MenuService.getFavoriteDish(ctrl.user.dish)
			.then(function (response) {
				ctrl.noDish = false;
				ctrl.submitted = true;

				var data = angular.extend(ctrl.user, response.data);

				MyInfoService.saveInfo(data);
			})
			.catch(function() {
				ctrl.noDish = true;
				ctrl.submitted = false;
			});;
	};
}

})();