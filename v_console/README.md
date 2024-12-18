version 0.4
# Password Generator

## Overview

The `password_generator` package provides an easy way to generate random passwords using numbers, letters, and special characters. This package allows users to create secure passwords quickly and efficiently.

## Installation

You can install the package using `pip`. Run the following command in your terminal:

```bash
pip install edimez14-password-generator-1
```

## Usage

Once the package is installed, you can use it to generate passwords directly from the command line or by importing it into your Python script.

### Command Line Usage

You can generate a password by simply running the module from the command line:

```bash
python -m password_generator
```

### Programmatic Usage

You can also use the `password_generator` function programmatically in your own Python scripts. Here is an example:

```python
from password_generator import password_generator

# Define lists for numbers, strings, and special characters
list_num = list(range(0, 10))  # List of numbers
list_str = list("abcdefghijklmnopqrstuvwxyz")  # List of lowercase letters
list_char = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']

# Generate a password
generated_password = password_generator(list_num, list_str, list_char)

# Print the generated password
print("Generated Password:", generated_password)
```

### Function Details

- **`password()`**: Generates and prints a random password composed of numbers, lowercase letters, and special characters. This function is called when you run the module directly.

- **`password_generator(list_num, list_str, list_char)`**: Accepts three lists:
  - `list_num`: A list of numbers to be used in the password.
  - `list_str`: A list of strings (letters) to be included in the password.
  - `list_char`: A list of special characters to be included in the password.
  
  It returns a randomly generated password.

## Example

To generate a password, simply call the `password()` function:

```python
from password_generator import password

# Call the password function to generate a password
password()
```

## Error Handling

If there are any errors during the generation of numbers, characters, or passwords, the package will print an error message to help you diagnose the issue.

## License

This package is licensed under the Apache 2.0 License. See the LICENSE file for more details.