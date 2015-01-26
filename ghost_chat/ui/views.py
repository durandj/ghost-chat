from django.views import generic as django_views

# pylint: disable=too-few-public-methods

class UIView(django_views.TemplateView):
	template_name = 'root.html'

