import random


class List_num:
    def __init__(self, num):
        self.num = num

    def num_random(self):
        list_random = set(range(self.num))
        list_random = random.sample(list_random, 50)
        return list_random


class List_str:
    def __init__(self, list_str: list):
        self.list_str = list_str

    def select_str(self):
        latters = []
        for i in range(5):
            latter = random.choice(self.list_str)
            latters.append(latter)
        return list(set(latters))


class List_char:
    def __init__(self, list_char: list):
        self.list_char = list_char

    def select_char(self):
        chars = []
        for i in range(5):
            char = random.choice(self.list_char)
            chars.append(char)
        return list(set(chars))


def password_generator(list_num: list, list_str: list, list_char: list):
    passwords = []
    for i in range(50):
        password = f"{random.choice(list_char)}{random.choice(list_num)}{random.choice(list_str)}{random.choice(list_str).upper()}{random.choice(list_str)}{random.choice(list_num)}{random.choice(list_str)}{random.choice(list_str)}{random.choice(list_char)}"
        if password not in passwords:
            passwords.append(password)
        else:
            continue
    chosen = random.choice(passwords)
    return chosen


def main():
    num = List_num(random.randint(1, 4000))
    num = num.num_random()

    alphabet = List_str(list("abcdefghijklmnopqrstuvwxyz"))
    alphabet = alphabet.select_str()

    char = List_char(['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<',
                      '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', "¡", "¿", "¿", "¡", "°", "€"])
    char = char.select_char()

    return password_generator(num, alphabet, char)


if __name__ == '__main__':
    print(main())
