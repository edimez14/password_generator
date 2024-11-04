from django.db import models
# from apps.password_generator.models import SavedPasswords


class Users(models.Model):
    email = models.EmailField(max_length=200)
    password = models.CharField(max_length=200)
    user_name = models.CharField(max_length=200)
    firt_name = models.CharField(max_length=200, default='', blank=True)
    last_name = models.CharField(max_length=200, default='', blank=True)
    number_phone = models.CharField(max_length=10)
    # saved_passwords = models.ForeignKey(
    #     SavedPasswords, on_delete=models.CASCADE)

    def __str__(self):

        return f"{self.id} user: {self.user_name}"
