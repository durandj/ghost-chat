from django.contrib import auth as django_auth
from django.contrib.auth import models as auth_models
from rest_framework import response as rf_response, views as rf_views, viewsets as rf_viewsets

from . import authentication as api_auth, serializers as api_serializers

# pylint: disable=too-few-public-methods, too-many-ancestors

class AuthView(rf_views.APIView):
	authentication_classes = (api_auth.QuietBasicAuthentication,)
	serializer_class       = api_serializers.UserSerializer

	# pylint: disable=unused-argument
	def post(self, request, *args, **kwargs):
		django_auth.login(request, request.user)

		return rf_response.Response(
			self.serializer_class(
				request.user,
				context = {'request': request},
			).data
		)

	def delete(self, request, *args, **kwargs):
		django_auth.logout(request)

		return rf_response.Response({})
	# pylint: enable=unused-argument

class UserViewSet(rf_viewsets.ModelViewSet):
	queryset         = auth_models.User.objects.all()
	serializer_class = api_serializers.UserSerializer

class GroupViewSet(rf_viewsets.ModelViewSet):
	queryset         = auth_models.Group.objects.all()
	serializer_class = api_serializers.GroupSerializer

