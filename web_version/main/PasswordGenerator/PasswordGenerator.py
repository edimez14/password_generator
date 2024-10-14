# Web Application v0.2.2_develop
from rxconfig import config
import reflex as rx
from PasswordGenerator.pages.index import index
from PasswordGenerator.pages.login.login import login
from PasswordGenerator.pages.register.register import register

app = rx.App()
app.add_page(index)
