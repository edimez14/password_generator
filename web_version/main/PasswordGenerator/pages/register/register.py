from rxconfig import config
import reflex as rx
import PasswordGenerator.utils as utils

# components
from PasswordGenerator.components.footer import footer

# views


title = "Register | Password Generator"
description = "This is the page to register in Password Generator, here you can register in the application database and create your profile, in order to access the benefits of having a profile in Password Generator such as saving passwords."

title, description, preview, meta = utils.meta(title, description)


@rx.page(
    route="/register",
    title=title,
    description=description,
    image=preview,
    meta=meta
)
def register() -> rx.Component:
    return rx.vstack(
        utils.lang(),
        rx.text("hello to Register page"),
        footer(),
    )
