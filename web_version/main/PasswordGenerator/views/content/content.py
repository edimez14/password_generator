import reflex as rx
# from password_generator.main import password as pg

import random

# It is known that it has two methods, where one method is responsible for using the element parameter to return a list of random numbers and the second method uses the element parameter to return a list of random characters.


class list_elements:
    def __init__(self, element):
        self.element = element

    def select_num(self):
        try:
            list_num = list(range(self.element))
            list_num = random.sample(list_num, 50)
            return list_num
        except Exception as e:
            return print(f"Error generating list of numbers -> {e}")

    def select_char(self):
        try:
            chars = []
            for i in range(5):
                char = random.choice(self.element)
                chars.append(char)
            return list(set(chars))
        except Exception as e:
            return print(f"Error generating character list -> {e}")


"""
function that requests three list type parameters that has a for loop that repeats 50 times to generate in each iteration a random password that is added to a list and then a variable randomly selects an index of that list of passwords and returns the variable with the chosen password
"""


def password_generator(list_num: list, list_str: list, list_char: list):
    try:
        passwords = []
        for i in range(50):
            password = f"{random.choice(list_char)}{random.choice(list_num)}{random.choice(list_str)}{random.choice(list_char)}{random.choice(list_str).upper()}{random.choice(list_str)}{random.choice(list_num)}{random.choice(list_str)}{random.choice(list_str)}{random.choice(list_char)}"
            if password not in passwords:
                passwords.append(password)
            else:
                continue
        chosen = random.choice(passwords)
        return chosen
    except Exception as e:
        return print(f"Error generating password -> {e}")


"""
password function that calls the classes through variables and returns the function that generates the random passwords and uses the variables as parameters
"""


def password():
    try:
        num = list_elements(random.randint(51, 4000))
        num = num.select_num()

        alphabet = list_elements(list("abcdefghijklmnopqrstuvwxyz"))
        alphabet = alphabet.select_char()

        char = list_elements(['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<',
                              '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', "¡", "¿", "¿", "¡", "°", "€"])
        char = char.select_char()

        return password_generator(num, alphabet, char)
    except Exception as e:
        return print(f"Error in generating data collection to generate the password -> {e}")


class Text_password(rx.State):
    password: str = "Press the button to generate a password"

    def change_password(self):

        self.password = password()


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
                    # rx.set_clipboard It is to be able to copy something to the clipboard
                    on_click=rx.set_clipboard(Text_password.password),
                ),
            ),
            rx.button("generate password",
                      on_click=Text_password.change_password),
            align="center",
            spacing="7",
            font_size="2em",
        ),
        width="100%",
        height="86vh",
    )
