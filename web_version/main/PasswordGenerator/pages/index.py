from rxconfig import config
import reflex as rx
import PasswordGenerator.utils as utils

# components
from PasswordGenerator.components.footer import footer
from PasswordGenerator.components.navBar import navBar

# views
from PasswordGenerator.views.header.header import header
from PasswordGenerator.views.content.content import content_

title = "Password Generator"
description = "Page that generates passwords in a totally random, secure and free way"

title, description, preview, meta = utils.meta(title, description)


@rx.page(
    route="/",
    title=title,
    description=description,
    image=preview,
    meta=meta
)
def index() -> rx.Component:
    return rx.vstack(
        utils.lang(),
        navBar(),
        content_(),
        footer(),
    )
