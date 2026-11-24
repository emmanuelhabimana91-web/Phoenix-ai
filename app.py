from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Phoenix AI Backend is running!"

@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json()
    prompt = data.get("prompt", "")

    return jsonify({
        "status": "success",
        "message": "Backend received your prompt.",
        "prompt": prompt
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
