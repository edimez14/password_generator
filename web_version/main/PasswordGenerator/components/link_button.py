import reflex as rx


def link_button(icon, text: str, url: str, style) -> rx.Component:
    return rx.link(
        rx.button(icon, text),
        href=url,
        is_external=True,
        style=style,
    )
