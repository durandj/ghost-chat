'use strict';

var factories = angular.module(
	'ghostChat.factories',
	[
	]
);

factories.factory(
	'api',
	[
		'$resource',
		function ($resource) {
			function addAuthHeader(data, headersGetter) {
				var headers = headersGetter();

				headers['Authorization'] = (
					'Basic ' + btoa(data.username + ':' + data.password)
				);
			}

			return {
				auth: $resource(
					'/api/auth/login\/',
					{
					},
					{
						login: {
							method: 'POST',
							transformRequest: addAuthHeader,
						},
						logout: {
							method: 'DELETE',
						},
					}
				),
				users: $resource(
					'/api/users\/',
					{
					},
					{
						create: {
							method: 'POST',
						},
					}
				),
			};
		}
	]
);

