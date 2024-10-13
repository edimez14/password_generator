import reflex as rx
from PasswordGenerator.components.link_button import link_button


def header() -> rx.Component:
    return rx.hstack(
        link_button(rx.icon("dollar-sign", stroke_width=2), "Donate",
                    "https://www.paypal.com/donate/?hosted_button_id=TLWPKXW745KHQ", style={"align_item": "left"}),
        rx.spacer(),
        link_button(rx.icon("user", stroke_width=2), "Portfolio",
                    "https://github.com/edimez14/", style={"align_item": "right"}),
        link_button(rx.icon("github", stroke_width=2), "Github",
                    "https://github.com/edimez14/password_generator/tree/web_version", style={"align_item": "right"}),
        rx.color_mode.button(rx.color_mode.icon()),
        z_index=1,
        padding="0.3em",
        width="100%",
    )