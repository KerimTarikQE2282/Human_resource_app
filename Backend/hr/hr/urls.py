from django.contrib import admin
from django.urls import path, include, re_path
from django.contrib.auth import views as auth_views
from django.shortcuts import redirect
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('humanresource.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    re_path(r'^password/reset/confirm', lambda request: redirect(request.build_absolute_uri().replace('localhost:8000', 'localhost:3000'))),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)