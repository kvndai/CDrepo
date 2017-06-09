from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
  return render_template("index.html")

@app.route('/ninja')
def ninja():
    return render_template("ninja.html")

@app.route('/ninja/<color>')
def ninjacolor(color):
    print color

    return render_template("ninjacolor.html", color = color)

app.run(debug=True) # run our server