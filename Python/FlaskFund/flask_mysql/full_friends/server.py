from flask import Flask, render_template, request, redirect, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
app.secret_key = 'digmygold'
mysql = MySQLConnector(app,'full_friends')

@app.route('/')
def index():
    query = "SELECT * FROM FRIENDS"
    friends = mysql.query_db(query)
    return render_template('index.html', friends=friends)

@app.route('/add', methods=['POST'])
def add():
    query = "INSERT INTO friends(name, age, created_at, updated_at) VALUE (:name, :age, NOW(), NOW())"
    data = {
            'name': request.form['name'],
            'age': request.form['age']
            }
    mysql.query_db(query, data)
    return redirect('/')


app.run(debug=True)