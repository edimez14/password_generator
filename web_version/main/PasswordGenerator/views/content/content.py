import reflex as rx
from password_generator import main as pg


class Text_password(rx.State):
    password: str = "Press the button to generate a password"

    def change_password(self):

        self.password = pg.password()


def content_() -> rx.Component:
    return rx.center(
        rx.vstack(
            rx.hstack(
                rx.text(
                    Text_password.password,
                    style={
                        "padding_right": "0.5em", 
                    },
                ),
                rx.button(
                    rx.icon("copy", stroke_width=2),
                    variant="ghost",
                    spacing="10",
                    on_click=rx.set_clipboard(Text_password.password), #rx.set_clipboard It is to be able to copy something to the clipboard
                ),
            ),
            rx.button("generate password", on_click=Text_password.change_password),
            align="center",
            spacing="7",
            font_size="2em",
        ),
        width="100%",
        height="86vh",
    )
