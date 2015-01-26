from rest_framework import authentication as rf_auth

class QuietBasicAuthentication(rf_auth.BasicAuthentication):
	def authenticate_header(self, request):
		return 'xBasic realm="{}"'.format(self.www_authenticate_realm)

