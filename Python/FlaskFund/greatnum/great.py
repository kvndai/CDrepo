from flask import Flask, flash, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = "NumberGame101"
@app.route('/')
def num_game():
    try:
        session['random']
    except:
        session['random'] = random.randint(1, 101)
    return render_template('index.html')

@app.route('/check', methods=['POST'])
def check():
    guess = int(request.form['guess'])
    if guess > session['random']:
        flash("Too high", 'error')
    elif guess < session ['random']:
        flash("Too low", 'error')
    else:
        flash("You guessed correct", 'success')
    return redirect('/')

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

app.run(debug=True)