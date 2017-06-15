from flask import Flask, render_template, request, redirect, session, flash
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

@app.route('/register', methods=['POST'])
def process():
    session['email_address'] = request.form['email']
    session['first_name'] = request.form['fname']
    session['last_name'] = request.form['lname']

    session['password'] = request.form['password']
    salt = binascii.b2a_hex(os.urandom(15))
    hashed_pw = md5.new(session['password'] + salt).hexdigest()

    session['confpw'] = request.form['confpw']
    if len(session['email_address']) < 1 and len(session['first_name']) < 1 and len(session['last_name']) < 1 and len(session['password']) < 1 and len(session['confpw']) < 1:
        flash('Email cannot be blank!')
        flash('First Name cannot be blank!')
        flash('Last Name cannot be blank!')
        flash('Password cannot be blank!')
        flash('Confirm your Password cannot be blank!')
        return redirect('/')
    if len(session['email_address']) < 1:
        flash('Email cannot be blank!')
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
    if len(session['first_name']) < 1:
        flash('First Name cannot be blank!')
        return redirect('/')
    elif len(session['first_name']) < 2:
        flash('First name must be more than 2 letters long')
        return redirect('/')
    if len(session['last_name']) < 1:
        flash('Last Name cannot be blank!')
        return redirect('/')
    elif len(session['last_name']) < 2:
        flash('Last name must be more than 2 letters long')
        return redirect('/')
    if len(session['password']) < 1:
        flash('Password cannot be blank!')
        return redirect('/')
    elif len(session['password']) >= 8:
        flash('Password cannot be more than 8 characters')
        return redirect('/')
    if len(session['confpw']) < 1:
        flash('Confirm your Password cannot be blank!')
        return redirect('/')
    elif session['password'] != session['confpw']:
        flash('Passwords must match')
        return redirect('/')
    check_query = "SELECT EXISTS (SELECT * FROM users WHERE email = '" + session['email_address'] + "')"
    show_query = mysql.query_db(check_query)
    for dict in show_query:
        for key in dict:
            if dict[key] == 1:
                flash('Email already exists in database')
                return redirect('/')

    insert_query = "INSERT INTO users(first_name, last_name, email, password, salt, created_at, updated_at) VALUES (:first_name, :last_name, :email_address, :hashed_pw, :salt, NOW(), NOW())"
    query_data = {'first_name': session['first_name'], 'last_name': session['last_name'], 'email': session['email_address'], 'hashed_pw': hashed_pw, 'salt': salt}
    mysql.query_db(insert_query, query_data)

    return redirect('/success')

@app.route('/login', methods=['POST'])
def login():
    email = request.form['login_email']
    password = request.form['login_password']
    # query to return email if found on db
    query = "SELECT * FROM users WHERE email = :email LIMIT 1"
    data = {'email': email}
    output = mysql.query_db(query, data)
    if len(output) != 0:
        encrypted_password = md5.new(password + output[0]['salt']).hexdigest()
        if output[0]['password'] == encrypted_password:
            session['userID'] = output[0]['id']
            print session['userID']
            return redirect('/success')
        else:
            flash('PASSWORD INCORRECT')
    else:
        flash('EMAIL DOES NOT EXIST IN DB')

    return redirect('/')

@app.route('/wall', methods=['GET'])
def success():

    return render_template('wall.html')

# @app.route('/message', methods=['POST'])
# def message():
app.run(debug=True)