'use strict';

var controllers = angular.module(
	'ghostChat.controllers',
	[
	]
);

controllers.controller(
	'ApplicationController',
	[
		'$scope',
		'$rootScope',
		'$cookieStore',
		'api',
		'AUTH_EVENTS',
		function ($scope, $rootScope, $cookieStore, api, AUTH_EVENTS) {
			$scope.user = $cookieStore.get('ghostChat.user');
			$scope.loginDropdown = [
				{
					text: 'Logout',
					click: 'logout();',
				}
			];

			$scope.setCurrentUser = function (user) {
				$scope.user = user;
				$cookieStore.put('ghostChat.user', user);
			};

			$scope.logout = function () {
				api.auth.logout();

				$scope.user = null;
				$cookieStore.remove('ghostChat.user');
				$rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
			};
		}
	]
);

controllers.controller(
	'RootController',
	[
		'$scope',
		function ($scope) {
		}
	]
);

controllers.controller(
	'LoginController',
	[
		'$scope',
		'$rootScope',
		'$location',
		'AUTH_EVENTS',
		'api',
		function ($scope, $rootScope, $location, AUTH_EVENTS, api) {
			$scope.onClickLogin = function () {
				api.auth.login(
					{
						username: $scope.username,
						password: $scope.password,
					}
				)
				.$promise
				.then(
					function (data) {
						$scope.setCurrentUser(data);
						$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);

						$location.path('/');

						console.log(data);
					}
				)
				.catch(
					function (data) {
						$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
						console.log(data);
					}
				);
			}

			// Angular doesn't listen for autofill type events so if
			// something like LastPass or Chrome autofills in the username
			// and password we won't know about it and the fields will
			// come back blank.
			$('.login .form-group input').checkAndTriggerAutoFillEvent();

			$scope.username = '';
			$scope.password = '';
		}
	]
);

