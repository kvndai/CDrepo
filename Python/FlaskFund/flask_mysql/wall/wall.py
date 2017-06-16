from flask import Flask, render_template, request, redirect, session, flash, escape
from mysqlconnection import MySQLConnector
import md5
import re
import os, binascii
app = Flask(__name__)
mysql = MySQLConnector(app,'wall') #database name
app.secret_key = 'ThisIsSecret'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/wall', methods=['GET'])
def wall():
    if 'user_id' in session and 'name' in session:
        return render_template('wall.html')
    return  redirect('/')


@app.route('/register', methods=['POST'])
def process():
    # because shorter
    post = request.form

    # testing post data
    if 'first_name' in post and 'last_name' in post and 'password' in post and 'confpw' in post:

        #escape inputs
        first_name = escape(post['first_name'])
        last_name = escape(post['last_name'])
        email = escape(post['email'])
        password = escape(post['password'])
        confpw = escape(post['confpw'])

        err = False

        # test for valid inputs
        if not first_name:
            err = True
            flash("Name cannot be blank", "first_name")
        if not last_name:
            err = True
            flas("Name cannot be blank", last_name)
        if not email:
            err = True
            flash("Email cannot be blank", "email")
        elif not EMAIL_REGEX.match(email):
            err = True
            flash("Invalid email address", "email")
        if not password:
            err = True
            flash("Password cannot be blank", "password")
        if not confpw:
            err = True
            flash("Password Confirmation cannot be blank", "passwordConfirm")
        if password and confpw and password != confpw:
            err = True
            flash("Passwords do not match", "password")

        # if there were no errors
        if not err:

            # encrypt password
            salt = binascii.b2a_hex(os.urandom(15))
            hashed_pw = md5.new(password + salt).hexdigest()

            # insert query
            query = "INSERT INTO users (first_name, last_name, email, password, salt, created_at, updated_at) VALUE ()"



@app.route('/login', methods=['POST'])
def login():
    # because shorter
    post = request.form

    # testing post data
    if 'login_email' in post and 'login_password' in post:
        # escape inputs
        email = escape(post['login_email']).lower()
        password = escape(post['login_password'])

        # test for valid inputs
        if email and password:

            # see if a user with 'login_email' exists
            query = "SELECT * FROM users WHERE email = :email"
            data = {'login_email': email}
            user = mysql.query_db(query, data)

            # if there is a user with 'login_email'
            if user:

                # test password
                if len(user) != 0:
                    encrypted_password = md5.new(password + user[0]['salt']).hexdigest()
                    if user[0]['password'] == encrypted_password:
                        session['userID'] = user[0]['id']
                        session['first_name'] = user[0]['first_name']
                        return redirect('/wall')
            flash('PASSWORD INCORRECT')
        # set errors for empty inputs
        else:
            if not post['login_email']:
                flash("Email cannot be blank", 'lg_email')
            if not post['login_password']:
                flash("Password cannot be blank", 'lg_password')
    # if no post, redirect
    return redirect('/')


# @app.route('/message', methods=['POST'])
# def message():
app.run(debug=True)