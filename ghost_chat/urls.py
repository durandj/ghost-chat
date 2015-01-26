from django.conf.urls import patterns, include, url
from django.contrib import admin

import ghost_chat.api.urls
import ghost_chat.ui.urls

# pylint: disable=invalid-name

urlpatterns = patterns('',
	url(r'^$',      include(ghost_chat.ui.urls)),
	url(r'^admin/', include(admin.site.urls)),
	url(r'^api/',   include(ghost_chat.api.urls)),
)

