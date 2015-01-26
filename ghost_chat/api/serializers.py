from django.contrib.auth import models as auth_models
from rest_framework import serializers as rf_serializers

# pylint: disable=too-few-public-methods

class UserSerializer(rf_serializers.HyperlinkedModelSerializer):
	class Meta(object):
		model  = auth_models.User
		fields = ('url', 'username', 'email', 'groups')

class GroupSerializer(rf_serializers.HyperlinkedModelSerializer):
	class Meta(object):
		model  = auth_models.Group
		fields = ('url', 'name')

