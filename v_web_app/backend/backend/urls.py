from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import RedirectView
from django.conf.urls.static import static

from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('apps.password_generator.urls')),
    path('', RedirectView.as_view(url='http://localhost:3000', permanent=False)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
