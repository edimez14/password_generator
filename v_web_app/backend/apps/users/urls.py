# urls.py en tu aplicación Django
from django.urls import path
from .views import sign_in, sign_up, UsersData, profile

urlpatterns = [
    path('user-data/',
         UsersData.as_view({'get': 'list', 'post': 'create'}), name='user data'),
    path('sign-in/', sign_in, name='sign-in'),
    path('sign-up/', sign_up, name='sign-up'),
    path('profile/', profile, name='profile'),
]
