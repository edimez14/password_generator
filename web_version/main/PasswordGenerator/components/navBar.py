import reflex as rx
from PasswordGenerator.components.link_button import link_button


def navBar() -> rx.Component:
    return rx.hstack(
        link_button(
            rx.icon("menu", stroke_width=2),
            "",
            "#",
            style={"align_item": "left"},
        ),
        rx.spacer(),
        link_button(
            rx.icon("log-in", stroke_width=2),
            "Login",
            "/login",
            style={"align_item": "right"},
            is_external=False,
        ),
        link_button(
            rx.icon("clipboard-pen", stroke_width=2),
            "Register",
            "/register", style={"align_item": "right"},
            is_external=False
        ),
        rx.color_mode.button(rx.color_mode.icon()),
        z_index=1,
        padding="0.3em",
        width="100%",
        border_bottom="1px solid",
    )
