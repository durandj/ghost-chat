from django.conf.urls import patterns, url, include
from rest_framework import routers as rf_routers

from . import views as api_views

# pylint: disable=invalid-name

router = rf_routers.DefaultRouter()
router.register(r'users', api_views.UserViewSet)
router.register(r'group', api_views.GroupViewSet)

urlpatterns = patterns('',
	url(r'^', include(router.urls)),
	url(r'^auth', api_views.AuthView.as_view(), name = 'auth'),
	url(r'^browse-auth/', include('rest_framework.urls', namespace = 'rest_framework')),
)

