from rest_framework import serializers
from .models import *


class SavedPasswordsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavedPasswords
        fields = "__all__"