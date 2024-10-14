from rxconfig import config
import reflex as rx
import PasswordGenerator.utils as utils

# components
from PasswordGenerator.components.footer import footer

# views


title = "Login | Password Generator"
description = "This is the password generator login, here you can log in to your profile and see the saved passwords you have in your profile."

title, description, preview, meta = utils.meta(title, description)


@rx.page(
    route="/login",
    title=title,
    description=description,
    image=preview,
    meta=meta
)
def login() -> rx.Component:
    return rx.vstack(
        utils.lang(),
        rx.text("hello to login page"),
        footer(),
    )
