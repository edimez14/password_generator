# urls.py en tu aplicación Django
from django.urls import path
from .views import response_password, save_passwords, view_all_saved_passwords, update_saved_password, delete_saved_password

urlpatterns = [
    path('response-password/', response_password, name='response password'),
    path('save-passwords/', save_passwords, name='save passwords'),
    path('view-all-saved-passwords/', view_all_saved_passwords, name='view all saved passwords'),
    path('view-all-saved-passwords/<int:pk>/update/', update_saved_password, name='update saved password'),
    path('view-all-saved-passwords/<int:pk>/delete/', delete_saved_password, name='delete saved password'),
]
