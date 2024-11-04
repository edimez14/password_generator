# urls.py en tu aplicación Django
from django.urls import path
from .views import response_password

urlpatterns = [
    path('response-password/', response_password, name='response password'),
]
