from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'digmygold'

@app.route('/')
def index():
    if 'gold' not in session:
        session['gold'] = 0
    return render_template('index.html')

@app.route('/process_money', methods=['POST'])
def process():
    if 'activity' not in session:
        session['activity'] = []
    if request.form['building'] == 'farm':
        session['gold'] += random.randrange(10, 21)
        session['activity'].append(session['gold'])
        print session['gold']
    elif request.form['building'] == 'cave':
        session['gold'] += random.randrange(5, 11)
        print session['gold']
        session['activity'].append(session['gold'])
    elif request.form['building'] == 'house':
        session['gold'] += random.randrange(2, 5)
        print session['gold']
        session['activity'].append(session['gold'])
    elif request.form['building'] == 'casino':
        session['gold'] += random.randrange(-50, 51)
        print session['gold']
        session['activity'].append(session['gold'])
    return redirect('/')

@app.route('/reset', methods=['POST'])
def reset():
    session.clear()
    return redirect('/')

app.run(debug = True)