from django.contrib import admin
from .models import *


class UsersAdmin(admin.ModelAdmin):
    list_display = ("id", "user_name",)
    list_display_links = ("user_name",)
    list_per_page = 25


admin.site.register(Users, UsersAdmin)
