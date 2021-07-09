from flask import Flask, render_template, request
from chat import chat

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    answear = chat(userText)

    return answear #str(english_bot.get_response(userText))


if __name__ == "__main__":
    app.run()