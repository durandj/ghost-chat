'use strict';

var constants = angular.module('ghostChat.constants', []);

constants.constant(
	'AUTH_EVENTS',
	{
		loginSuccess:     'auth-login-success',
		loginFailed:      'auth-login-failure',
		logoutSuccess:    'auth-logout-success',
		sessionTimeout:   'auth-session-timeout',
		notAuthenticated: 'auth-not-authenticated',
		notAuthorized:    'auth-not-authorized',
	}
);

