'use strict';

var application = angular.module(
	'ghostChat',
	[
		'ngCookies',
		'ngResource',
		'ngRoute',
		'mgcrea.ngStrap',
		'ghostChat.constants',
		'ghostChat.controllers',
		'ghostChat.factories',
	]
);

// Setup AngularJS to work better with Django
application.config(
	[
		'$httpProvider',
		'$interpolateProvider',
		'$resourceProvider',
		function ($httpProvider, $interpolateProvider, $resourceProvider) {
			$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
			$httpProvider.defaults.xsrfCookieName = 'csrftoken';
			$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

			$interpolateProvider.startSymbol('[[').endSymbol(']]');

			$resourceProvider.defaults.stripTrailingSlashes = false;
		}
	]
);

application.config(
	[
		'$routeProvider',
		function ($routeProvider) {
			$routeProvider
				.when(
					'/',
					{
						controller: 'RootController',
						templateUrl: 'static/partials/root.html'
					}
				)
				.when(
					'/login',
					{
						controller: 'LoginController',
						templateUrl: 'static/partials/login.html'
					}
				)
				.otherwise(
					{
						redirectTo: '/'
					}
				);
		}
	]
);

