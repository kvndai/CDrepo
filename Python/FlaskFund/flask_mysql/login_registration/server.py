from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
app.secret_key = 'nfaoinnods'
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def process():
    session['email'] = request.form['email']
    session['fname'] = request.form['fname']
    session['lname'] = request.form['lname']
    session['password'] = request.form['password']
    session['confpw'] = request.form['confpw']
    if len(session['email']) < 1 and len(session['fname']) < 1 and len(session['lname']) < 1 and len(session['password']) < 1 and len(session['confpw']) < 1:
        flash('Email cannot be blank!')
        flash('First Name cannot be blank!')
        flash('Last Name cannot be blank!')
        flash('Password cannot be blank!')
        flash('Confirm your Password cannot be blank!')
        return redirect('/')
    if len(session['email']) < 1:
        flash('Email cannot be blank!')
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
    if len(session['fname']) < 1:
        flash('First Name cannot be blank!')
        return redirect('/')
    elif session['fname'].isalpha() == False:
        flash('First name must only contain alphabet characters')
        return  redirect('/')
    if len(session['lname']) < 1:
        flash('Last Name cannot be blank!')
        return redirect('/')
    elif session['lname'].isalpha() == False:
        flash('Last name must only contain alphabet characters')
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
    return redirect('/success')

@app.route('/success', methods=['GET'])
def success():
    flash('Thank you for submitting')
    return redirect('/')

app.run(debug=True)