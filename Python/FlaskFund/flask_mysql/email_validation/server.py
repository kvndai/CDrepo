from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = 'digmygold'
mysql = MySQLConnector(app,'email_validation')

@app.route('/')
def index():

    return render_template('index.html')

@app.route('/process', methods=['POST'])
def add():
    session['email'] = request.form['email']
    if len(session['email']) < 1:
        flash('Invalid Email Address!')
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
        return redirect('/')


    query = "INSERT INTO emails(email_address, created_at) VALUE (:email_address, NOW())"
    data = {
            'email_address': session['email']
            }
    mysql.query_db(query, data)



    return redirect('/success')

@app.route('/success')
def success():
    query = 'SELECT * FROM emails'
    emails = mysql.query_db(query)
    return  render_template("success.html", emails=emails)


app.run(debug=True)