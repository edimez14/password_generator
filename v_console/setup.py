from setuptools import setup, find_packages

setup(
    name="password generator",
    version="0.4",
    description="password generator",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    author="edizon alexander meza leal",
    author_email="edimez14",
    url="https://github.com/edimez14/password_generator",
    packages=['password_generator'],
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: APACHE 2.0 License",
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
