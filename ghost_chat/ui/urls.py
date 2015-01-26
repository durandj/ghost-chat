from django.conf.urls import patterns, url

from . import views as ui_views

# pylint: disable=invalid-name

urlpatterns = patterns('',
	url(r'^$', ui_views.UIView.as_view(), name = 'ui'),
)

