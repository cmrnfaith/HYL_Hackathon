import json
from datetime import datetime as dt

import numpy as np
from flask.wrappers import Response
from flask_login.utils import logout_user
from main import login_manager
from flask import request, send_from_directory, session
from flask_login import current_user, login_user, login_required
