import json
from datetime import datetime as dt
import hashlib

import numpy as np
from flask.wrappers import Response
from flask_login.utils import logout_user
from main import app, login_manager
from flask import request, send_from_directory, session
from flask_login import current_user, login_user, login_required

import mysql.connector

from databaseFunctions import *

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

"""
Gets all the events.
"""
@app.route("/events", methods=["GET"])
def get_all_events():
    db_conn = get_db_connection()

    result = {"result": []}
    data = get_all_events_db(db_conn, "events")

    for event in data:
        print(f"The time from event data is {event[3]}")
        result["result"].append(
            {
                "eventID": event[0],
                "name": event[1],
                "date": event[2],
                "location": event[3],
                "price": event[4],
                "attire": event[5],
                "membership": event[6],
                "duration": event[7],
                "private": event[8],
                "faculty": event[9],
                "description": event[10],
                "eventType": event[11],
                "hostID": event[12],
            }
        )

    return result

"""
Inserts an event
"""
@app.route("/events", methods=["POST", "DELETE"])
def create_event():
    if request.method == "POST":
        data = request.json
        try:
            db_conn = get_db_connection()
            insert_event_db(db_conn, "events", data)
            
        except Exception as e:
            return Response(status=409)

        return Response(status=200)

    if request.method == "DELETE":
        

# Update event
# Delete event
# Get event
# search for specific event (will be based on a query)


# ========================================================
# Host APIs
# ========================================================
@app.route("/host", methods=["POST", "DELETE"])
def create_host():
    db_conn = get_db_connection()

    if request.method == "POST":
        data = request.json

        hashed_password = hashlib.sha256(data["password"].encode()).hexdigest()

        try:
            insert_host_into_db(db_conn,"host", data["host_name"], data["username"], hashed_password)
        except Exception as e:
            return Response(status=409)

    elif request.method == "DELETE":
        data = request.json

        delete_host_from_db(db_conn, "host", data["username"])

    return Response(status=200)

@app.route("/host", methods=["PUT"])
# @login_required
def modify_host():
    db_conn = get_db_connection()

    if request.method == "PUT":
        data = request.json

        hashed_password = hashlib.sha256(data["password"].encode()).hexdigest()

        update_host_in_db(db_conn, "host", data["host_name"], data["username"], hashed_password)

        return Response(status=200)

@app.route("/api/logout/", methods=["POST"])
@login_required
def logout():
    logout_user()
    return Response(status=200)

# create user
# login
# logout
# update user information
