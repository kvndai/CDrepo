from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
  return render_template("index.html", name="jay")

@app.route('/ninja')
def ninja():
    return render_template("ninja.html")

@app.route('/dojo/news')
def dojo():
    return render_template("news.html")
    name = request.form['name']
    email = request.form['email']


app.run(debug=True)