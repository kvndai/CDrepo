from flask import Flask, render_template, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'


@app.route('/')
def index():
    if 'counter' in session:
        session['counter'] += 1
    else:
        session['counter'] = 1

    return render_template("index.html")

@app.route('/increase')
def increase():
    if 'counter' in session:
        session['counter'] += 1
    else:
        session['counter'] = 0
    return redirect('/')
@app.route('/show')
def show():
    session['counter'] = 0
    return redirect('/')
app.run(debug=True) # run our server