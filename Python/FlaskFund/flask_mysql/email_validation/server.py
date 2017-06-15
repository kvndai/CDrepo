from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
app.secret_key = 'digmygold'
mysql = MySQLConnector(app,'full_friends')

@app.route('/')
def index():

    return render_template('index.html')

@app.route('/add', methods=['POST'])
def add():

    return redirect('/')


app.run(debug=True)