import json
from datetime import datetime as dt

import numpy as np
from flask.wrappers import Response
from flask_login.utils import logout_user
from main import app, login_manager
from flask import request, send_from_directory, session
from flask_login import current_user, login_user, login_required

import mysql.connector

from databaseFunctions import get_all_events_DB

MYSQL_HOST = '10.0.0.101'
MYSQL_USER = 'root'
MYSQL_PASSWORD = 'pmwpmwpmw'
MYSQL_DB = 'HYL_DB'
MYSQL_PORT = 3306

def get_db_connection():
    return mysql.connector.connect(host=MYSQL_HOST, user=MYSQL_USER, port=MYSQL_PORT, password=MYSQL_PASSWORD, database=MYSQL_DB)

# ========================================================
# Event APIs
# ========================================================

@app.route("/events", methods=["GET"])
def get_all_events():
    db_conn = get_db_connection()

    result = {"result": []}
    data = get_all_events_DB(db_conn, "events")

    for event in data:
        print(f"The time from event data is {event[3]}")
        result["result"].append(
            {
                "eventID": event[0],
                "name": event[1],
                "date": event[2],
                "time": str(event[3]),
                "location": event[4],
                "price": event[5],
                "attire": event[6],
                "membership": event[7],
                "duration": event[8],
                "private": event[9],
                "faculty": event[10],
                "description": event[11],
                "eventType": event[12],
                "hostID": event[13],
            }
        )

    return result

# Create event
# Update event
# Delete event
# Get event
# Get all events


# search for specific event (will be based on a query)


# ========================================================
# User APIs
# ========================================================

# create user
# login
# logout
# update user information
