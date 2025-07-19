from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/pets")
def pets():
    return "<p>dogs</p>"

@app.route("/cats")
def cats():
    return render_template("test.html")