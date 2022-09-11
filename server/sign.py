import requests
import pyrebase
from firebase_admin import auth
import firebase_admin
from msilib.schema import Error
from flask import Flask, render_template, request
sign = Flask(__name__)

config = {
    "apiKey": "AIzaSyAam6IUJFdKZ0OmGHI0aRTk_s4Xe5jLcTU",
    "authDomain": "subalert-fa7ea.firebaseapp.com",
    "databaseURL": "https://subalert-fa7ea-default-rtdb.firebaseio.com/",
    "storageBucket": "subalert-fa7ea.appspot.com"
}

firebase = pyrebase.initialize_app(config)

fauth = firebase.auth()

cred = firebase_admin.credentials.Certificate(
    "subalert-fa7ea-firebase-adminsdk-s8oud-0d241bfd12.json")
default_app = firebase_admin.initialize_app(
    cred, {"databaseURL": "https://subalert-fa7ea-default-rtdb.firebaseio.com/"})

# print(default_app.name)

# ref = db.reference("/")


to_run = input("Signing Up, Signing In, Out, or Down?: ")

s = None


def create():
    try:
        auth.create_user(email=input("Enter email: "),
                         email_verified=False, password=input("Enter password: "))
    except ValueError as e:
        print(e)
        create()
    except firebase_admin.exceptions.InvalidArgumentError as e:
        print(e)
        create()
    except firebase_admin.exceptions.AlreadyExistsError as e:
        print(e)
        create()


def signout():
    s.pop("user")
    print("Logged Out Successfully!")


@sign.route("../src/pages/SignIn", methods=["POST"], strict_slashes=False)
def signin():
    try:
        login = fauth.sign_in_with_email_and_password(
            input("Enter your email: "), input("Enter your password: "))
        print(f"Login Successful!\n\n{login}")
        s = requests.Session()
        s["user"] = login
        print(login, end="\n")
        print(fauth.get_account_info(login["idToken"]), end="\n")
        outlogs = input("Log Out?(y/n)")
        if outlogs == "y":
            signout()
    except Error as e:
        print(e)


if to_run == "up":
    create()
elif to_run == "in":
    signin()

print("Done.")
