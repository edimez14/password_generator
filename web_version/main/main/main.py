<<<<<<< HEAD:version_console/main.py
# version 0.2 
=======
# Web Application v0.1
from rxconfig import config
import reflex as rx
>>>>>>> web_version:web_version/main/main/main.py
import random
import sys


# class to create a list of random numbers from num1 to num2


class List_num:
    def __init__(self, num):
        self.num = num

    def num_random(self):
        list_random = set(range(self.num))
        list_random = random.sample(list_random, 50)
        return list_random

# class to create a list of randomly selected letters from the alphabet


class List_str:
    def __init__(self, list_str: list):
        self.list_str = list_str

    def select_str(self):
        latters = []
        for i in range(5):
            latter = random.choice(self.list_str)
            latters.append(latter)
        return list(set(latters))

# class to create a list of randomly selected special symbols


class List_char:
    def __init__(self, list_char: list):
        self.list_char = list_char

    def select_char(self):
        chars = []
        for i in range(5):
            char = random.choice(self.list_char)
            chars.append(char)
        return list(set(chars))


"""
function that requests three list type parameters that has a for bubble that is repeated 50 times to generate each iteration a random password that is added to a list and then a variable randomly selects an index from that list of passwords and returns the variable with the chosen password
"""


def password_generator(list_num: list, list_str: list, list_char: list):
    passwords = []
    for i in range(50):
        password = f"{random.choice(list_char)}{random.choice(list_num)}{random.choice(list_str)}{random.choice(list_char)}{random.choice(list_str).upper()}{random.choice(list_str)}{random.choice(list_num)}{random.choice(list_str)}{random.choice(list_str)}{random.choice(list_char)}"
        if password not in passwords:
            passwords.append(password)
        else:
            continue
    chosen = random.choice(passwords)
    return chosen


"""
main function that calls the classes through variables and returns the function that generates the random passwords and uses the variables as parameters
"""


<<<<<<< HEAD:version_console/main.py
if __name__ == '__main__':
    main()
=======
class State(rx.State):
    password: str = "Press the button to generate a password"

    def generate_password(self):
        num = List_num(random.randint(1, 4000))
        num = num.num_random()

        alphabet = List_str(list("abcdefghijklmnopqrstuvwxyz"))
        alphabet = alphabet.select_str()

        char = List_char(['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<',
                          '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', "¡", "¿", "¿", "¡", "°", "€"])
        char = char.select_char()

        self.password = password_generator(num, alphabet, char)


def index() -> rx.Component:
    return rx.center(
        # rx.theme_panel(),
        rx.vstack(
            rx.color_mode.button((rx.color_mode.icon())),
            rx.text(State.password),
            rx.button("generate password", on_click=State.generate_password),
            align="center",
            spacing="7",
            font_size="2em",
        ),
        height="100vh",
    )


app = rx.App()
app.add_page(index)
>>>>>>> web_version:web_version/main/main/main.py
