from setuptools import setup, find_packages

setup(
    name="edimez14_password_generator",
    version="0.4",
    description="password generator",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    author="edizon",
    author_email="edimez14@gmail.com",
    url="https://github.com/edimez14/password_generator",
    packages=['password_generator'],
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: Apache Software License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.6",
    install_requires=[
    ],
    entry_points={
        "console_scripts": [
        ],
    },
)
