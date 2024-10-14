import reflex as rx


def lang() -> rx.Component:
    return rx.script("document.documentElement.lang='es'")


def meta(title: str, description: str):
    title = title
    description = description
    preview = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJxlNSva3bHKxvkfMj7Mwh7UVdjguPX7NrQ&s"
    meta = [
        {"name": "og:title", "content": title},
        {"name": "og:description", "content": description},
        {"name": "og:type", "content": "website"},
        {"name": "og:image", "content": preview},
        {"name": "twitter:card", "content": "summary_large_image"},
        {"name": "twitter:site", "content": "@elax_4"},
    ]
    return title, description, preview, meta
