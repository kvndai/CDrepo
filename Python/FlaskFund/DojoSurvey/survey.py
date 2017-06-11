from flask import Flask, render_template, request, redirect, flash, session
app = Flask(__name__)
app.secret_key = "secretkey"
@app.route('/')
def index():
  return render_template("index.html")


@app.route('/process', methods=['POST'])
def create_user():
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']
    # print request.form['name']
    if len(session['name']) < 1 and len(session['comment']) < 1:
        flash("Name cannot be empty!")
        flash("Comment cannot be empty!")
        return redirect('/')
    if len(session['name']) < 1:
        flash("Name cannot be empty!")
        return redirect('/')
    if len(session['comment']) < 1:
        flash("Comment cannot be empty!")
        return redirect('/')
    if len(session['comment']) > 120:
        flash("Comment cannot exceed 120 characters")
        return redirect('/')
    return redirect('/submit')

@app.route('/submit')
def submit():
    return  render_template("result.html", name = session['name'], location = session['location'], language = session['language'], comment = session['comment'])







app.run(debug=True) # run our server