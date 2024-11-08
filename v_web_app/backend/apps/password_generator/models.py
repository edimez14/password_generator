from django.db import models
from apps.users.models import Users


class SavedPasswords(models.Model):
    name_pages = models.CharField(max_length=200, blank=True)
    url = models.URLField(max_length=200)
    password_saved = models.CharField(max_length=200)
    user = models.ForeignKey(
        Users, on_delete=models.CASCADE, related_name="saved_passwords"
    )

    def __str__(self):
        return f"{self.id} - {self.name_pages} (User: {self.user.username})"
