# Web Application v0.2.1
from rxconfig import config
import reflex as rx
from password_generator import main as pg

# components
from PasswordGenerator.components.footer import footer

# views
from PasswordGenerator.views.header.header import header
from PasswordGenerator.views.content.content import content_

class State(rx.State):
    pass

def index() -> rx.Component:
    return rx.vstack(
        header(),
        rx.divider(),
        content_(),
        footer(),
    )


app = rx.App()
app.add_page(index)
