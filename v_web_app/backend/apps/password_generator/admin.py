from django.contrib import admin
from .models import *


class SavedPasswordsAdmin(admin.ModelAdmin):
    list_display = ("id", "name_pages",)
    list_display_links = ("name_pages",)
    list_per_page = 25


admin.site.register(SavedPasswords, SavedPasswordsAdmin)
