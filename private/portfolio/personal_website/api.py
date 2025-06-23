from flask import Flask, request, jsonify
import smtplib
from email.message import EmailMessage

app = Flask(__name__)


@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not name or not email or not message:
        return jsonify({"error": "Missing fields"}), 400

    msg = EmailMessage()
    msg["Subject"] = f"Message from {name}"
    msg["From"] = email
    msg["To"] = "TJames@orionrising.dev"
    msg.set_content(message)

    try:
        with smtplib.SMTP_SSL("mail.your-server.de", 465) as smtp:
            smtp.login("messages@orionrising.dev", "X7U5KyVC7iC1uo5B")
            smtp.send_message(msg)
    except Exception as e:
        return jsonify({"error": f"Failed to send email: {e}"}), 500

    return jsonify({"success": True})
