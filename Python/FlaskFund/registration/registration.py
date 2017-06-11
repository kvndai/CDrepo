from flask import Flask, render_template, request, redirect, session, flash
app = Flask(__name__)
app.secret_key = 'nfaoinnods'
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    session['email'] = request.form['email']
    session['fname'] = request.form['fname']
    session['lname'] = request.form['lname']
    session['password'] = request.form['password']
    session['confpw'] = request.form['confpw']
    if len(session['email']) < 1 and len(session['fname']) < 1 and len(session['lname']) < 1 and len(session['password']) < 1 and en(session['confpw']) < 1:
        flash('Email cannot be blank!')
        flash('First Name cannot be blank!')
        flash('Last Name cannot be blank!')
        flash('Password cannot be blank!')
        flash('Confirm your Password cannot be blank!')
    if len(session['email']) < 1:
        flash('Email cannot be blank!')
    if len(session['fname']) < 1:





    return redirect('/')

@app.route('/success', methods=['POST'])
def success():
    return redirect('/')

app.run(debug=True)