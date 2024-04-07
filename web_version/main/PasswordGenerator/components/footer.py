import reflex as rx
import datetime


def footer() -> rx.Component:
    return rx.center(
        rx.hstack(
        	rx.icon("copyright", stroke_width=2),
            rx.text( f"2024 - {datetime.date.today().year} all rights reserved v0.2.1"),
        ),
        width="100%",
    )
