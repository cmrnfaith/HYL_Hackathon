from flask import Flask
from flask_cors import CORS
from flask_login import LoginManager

app = Flask(__name__)
CORS(app)

login_manager = LoginManager()
login_manager.init_app(app)

#Set up SQL connections here

from api import *

if __name__ == "__main__":
    app.config["LOGIN_DISABLED"] = True
    app.run(port=4000, debug=True, host='0.0.0.0')