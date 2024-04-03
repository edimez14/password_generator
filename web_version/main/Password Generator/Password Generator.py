# Web Application v0.2
from rxconfig import config
import reflex as rx
from password_generator import main as pg

class State(rx.State):
    password: str = "Press the button to generate a password"

    def change_password(self):

        self.password = pg.password()


def index() -> rx.Component:
    return rx.center(
        # rx.theme_panel(),
        rx.vstack(
            rx.link(
                rx.button((rx.icon("github", stroke_width=2)), "github"),
                href="https://github.com/edimez14/password_generator/tree/web_version",
                is_external=True,

            ),
            rx.color_mode.button((rx.color_mode.icon())),
            rx.text(State.password),
            rx.button("generate password", on_click=State.change_password),
            align="center",
            spacing="7",
            font_size="2em",
        ),
        height="100vh",
    )


app = rx.App()
app.add_page(index)
