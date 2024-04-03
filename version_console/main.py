# version 0.3 
import random
import sys
sys.path.append('../version_console/')

# It is known that it has two methods, where one method is responsible for using the element parameter to return a list of random numbers and the second method uses the element parameter to return a list of random characters.
class list_elements:
    def __init__(self, element):
        self.element = element

    def select_num(self):
        list_num = set(range(self.element))
        list_num = random.sample(list_num, 50)
        return list_num

    def select_char(self):
        chars = []
        for i in range(5):
            char = random.choice(self.element)
            chars.append(char)
        return list(set(chars))
    

"""
function that requests three list type parameters that has a for loop that repeats 50 times to generate in each iteration a random password that is added to a list and then a variable randomly selects an index of that list of passwords and returns the variable with the chosen password
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
password function that calls the classes through variables and returns the function that generates the random passwords and uses the variables as parameters
"""
def password():
    num = list_elements(random.randint(1, 4000))
    num = num.select_num()

    alphabet = list_elements(list("abcdefghijklmnopqrstuvwxyz"))
    alphabet = alphabet.select_char()

    char = list_elements(['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<',
                      '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', "¡", "¿", "¿", "¡", "°", "€"])
    char = char.select_char()

    return password_generator(num, alphabet, char)


if __name__ == '__main__':
    password()
