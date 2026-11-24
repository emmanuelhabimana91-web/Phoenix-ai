from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(
    app,
    resources={r"/*": {"origins": "*"}},
    supports_credentials=False
)

@app.route("/")
def home():
    return jsonify({
        "status": "running",
        "message": "Phoenix AI Backend is running!"
    })

@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json(silent=True)

    if not data:
        return jsonify({
            "status": "error",
            "message": "No JSON data received."
        }), 400

    prompt = data.get("prompt", "")

    return jsonify({
        "status": "success",
        "message": "Backend connected successfully!",
        "prompt": prompt
    })

@app.route("/health")
def health():
    return jsonify({
        "status": "ok"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
