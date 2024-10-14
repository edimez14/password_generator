import reflex as rx


def link_button(icon, text: str, url: str, style, size="", is_external=True) -> rx.Component:
    return rx.link(
        rx.button(icon, text, size=size,),
        href=url,
        is_external=True if is_external else False,
        style=style,
        
    )
