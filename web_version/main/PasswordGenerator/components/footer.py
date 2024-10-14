import reflex as rx
import datetime
from PasswordGenerator.components.link_button import link_button


def footer() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.hstack(
                link_button(
                    rx.icon("dollar-sign", stroke_width=2),
                    "donate",
                    "https://www.paypal.com/donate/?hosted_button_id=TLWPKXW745KHQ",
                    style={"align_item": "center", "display": "flex", "justify_content": "center"},
                    size="1"
                ),
                link_button(
                    rx.icon("user", stroke_width=2), 
                    "Portfolio", 
                    "https://edizon-leal.vercel.app/", 
                    style={"align_item": "center", "display": "flex", "justify_content": "center"}, 
                    size="1"
                ),
                link_button(
                    rx.icon("github", stroke_width=2), 
                    "Github",
                    "https://github.com/edimez14/password_generator/tree/web_version", 
                    style={"align_item": "center", "display": "flex", "justify_content": "center"}, 
                    size="1"
                ),
                z_index=1,
                padding_x="0.8em",
                padding_y="0.3em",
            ),
            rx.hstack(
                rx.icon("copyright", stroke_width=2),
                rx.text(
                    f"2024 - {datetime.date.today().year} all rights reserved v0.2.2_develop"
                ),
            ),
        ),
        width="100%",
    )
