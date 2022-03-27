from calendar import calendar
import hashlib
import numpy as np
import mysql.connector
import os.path

from main import app, login_manager

from datetime import datetime as dt
from flask.wrappers import Response
from flask import request, send_from_directory, current_app

from flask_login.utils import logout_user
from flask_login import current_user, login_user, login_required

from user import User
from databaseFunctions import *
from calenderEventFunctions import *

MYSQL_HOST = '10.0.0.101'
MYSQL_USER = 'root'
MYSQL_PASSWORD = 'pmwpmwpmw'
MYSQL_DB = 'HYL_DB'
MYSQL_PORT = 3306

def get_db_connection():
    return mysql.connector.connect(host=MYSQL_HOST, user=MYSQL_USER, port=MYSQL_PORT, password=MYSQL_PASSWORD, database=MYSQL_DB)

@login_manager.user_loader
def load_user(user_id):
    db_conn = get_db_connection()
    user_info = get_user(db_conn, "user", user_id)

    if len(user_info) == 1:
        return User(user_info[0][1], user_info[0][2], True)
    else:
        return None

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
    data = get_all_events_db(db_conn, "events2")

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
                "hostName": event[12],
            }
        )

    return result

"""
Gets a specific events.
"""
@app.route("/event/<int:id>", methods=["GET"])
def get_event(id: int):
    db_conn = get_db_connection()

    result = {"result": []}
    data = get_event_db(db_conn, "events2", id)

    for event in data:
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
                "hostName": event[12],
            }
        )

    return result



"""
Inserts or Deletes an event
"""
@app.route("/events", methods=["POST", "DELETE"])
def create_event():
    db_conn = get_db_connection()
    if request.method == "POST":
        data = request.json
        try:
            insert_event_db(db_conn, "events2", data)
        except Exception as e:
            return Response(status=409)

        return Response(status=200)

    elif request.method == "DELETE":
        data = request.json
        try:
            delete_event_from_db(db_conn, "events2", data["eventID"])
        except Exception as e:
            return Response(status=409)

        return Response(status=200)
    
    else:
        return Response(status=400)

"""
Gets all the events from a specific host
"""
@app.route("/events/<string:host_name>", methods=["GET"])
def get_all_host_events(host_name:str):
    db_conn = get_db_connection()

    result = {"result": []}
    data = get_all_events_from_host_db(db_conn, "events2", host_name)

    for event in data:
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
                "hostName": event[12],
            }
        )

    return result

"""
Gets all hosts
"""
@app.route("/hosts", methods=["GET"])
def get_all_host():
    db_conn = get_db_connection()

    result = {"result": []}
    data = get_all_hosts_from_db(db_conn, "user")

    for host in data:
        result["result"].append(
            {
                "hostName": host[0]
            }
        )

    return result


# ========================================================
# User APIs
# ========================================================
@app.route("/user", methods=["POST", "DELETE"])
def create_user():
    db_conn = get_db_connection()

    if request.method == "POST":
        data = request.json

        hashed_password = hashlib.sha256(data["password"].encode()).hexdigest()

        # try:
        if data["isHost"] is True:
            data["isHost"] = 1
        else:
            data["isHost"] = 0

        insert_user_into_db(db_conn,"user", data["username"], hashed_password, data["email"], data["firstName"], data["lastName"], \
                            data["dateOfBirth"], data["country"], data["studentID"], data["isHost"])
        # except Exception as e:
        #     return Response(status=409)

    elif request.method == "DELETE":
        data = request.json

        delete_user_from_db(db_conn, "user", data["username"])

    return Response(status=200)

@app.route("/user", methods=["PUT"])
def modify_host():
    db_conn = get_db_connection()

    if request.method == "PUT":
        data = request.json

        hashed_password = hashlib.sha256(data["password"].encode()).hexdigest()

        update_user_in_db(db_conn, "user", data["username"], data["username"], hashed_password)

        return Response(status=200)

@app.route("/logout", methods=["POST"])
def logout():
    logout_user()
    return Response(status=200)

@app.route("/login", methods=["POST"])
def login():
    db_conn = get_db_connection()

    if request.method == "POST":
        data = request.json

        hashed_password = hashlib.sha256(data["password"].encode()).hexdigest()

        data = get_user(db_conn, "user", data["username"])

        if len(data) == 1:
            data = data[0]

            if hashed_password == data[1]:
                #loaded_user = load_user(data[2])  # Loading the current user
                #login_user(loaded_user, remember=True, force=True)  # Logging in the user with flask_login to keep track of which user is active
                result = {"result": []}

                result["result"].append(
                    {   
                        "username": data[0],
                        "hashedPassword": data[1],
                        "email": data[2],
                        "firstName": data[3],
                        "lastName": data[4],
                        "dateOfBirth": data[5],
                        "country": data[6],
                        "studentID": data[7],
                        "isHost": data[8]
                    }
                )
                return result
            else:
                return Response(status=401)

        else:
            return Response(status=401)  # Code for invalid login


# ========================================================================
# Follow API
# ========================================================================

"""
Inserts an entry of a student following a host
"""
@app.route("/user/follow", methods=["POST", "DELETE"])
def follow_host():
    db_conn = get_db_connection()

    if request.method == "POST":
        data = request.json
        try:
            insert_user_follows_db(db_conn, "userFollowsHosts", data["username"], data["hostName"])
        except Exception as e:
            return Response(status=409)

        return Response(status=200)

    elif request.method == "DELETE":
        data = request.json
        try:
            delete_user_follow_from_db(db_conn, "userFollowsHosts", data["username"], data["hostName"])
        except Exception as e:
            return Response(status=409)

        return Response(status=200)
    
    else:
        return Response(status=400)


"""
Get all the hosts a user is following
"""
@app.route("/user/<string:username>/follow", methods=["GET"])
def get_all_user_follows(username:str):
    db_conn = get_db_connection()

    result = {"result": []}
    data = get_user_follows_db(db_conn, "userFollowsHosts", username)

    for follow in data:
        result["result"].append({"hostName": follow[1]})
    
    return result

"""
Get all the events a user does and does not like
"""
@app.route("/user/<string:username>/follows", methods=["GET"])
def get_all_user_follows_1(username:str):
    db_conn = get_db_connection()

    result = {"result": []}
    data = get_user_non_follow_db(db_conn, "userFollowsHosts", username)
    print(data)
    data1 = get_user_follows_db(db_conn, "userFollowsHosts", username)
    print(data1)

    for event in data:
        result["result"].append(
            {
                "hostName": event[0],
                "follow": False
            }
        )
    for event in data1:
        result["result"].append(
            {
                "hostName": event[1],
                "follow": True
            }
        )
    
    return result

# ========================================================================
# Likes API
# ========================================================================
"""
Inserts an entry of a student liking an event
"""
@app.route("/user/likes", methods=["POST", "DELETE"])
def insert_user_likes_event():
    db_conn = get_db_connection()

    if request.method == "POST":
        data = request.json
        try:
            insert_user_likes_event_into_db(db_conn, "userLikesEvents", data["username"], data["eventID"])
        except Exception as e:
            return Response(status=409)

        return Response(status=200)

    elif request.method == "DELETE":
        data = request.json
        try:
            delete_user_likes_event_from_db(db_conn, "userLikesEvents", data["username"], data["eventID"])
        except Exception as e:
            return Response(status=409)

        return Response(status=200)
    
    else:
        return Response(status=400)


@app.route("/user/<string:username>/followedLikes", methods=["GET"])
def get_all_liked_events_from_follows(username:str):
    db_conn = get_db_connection()

    result = {"result": []}
    data = get_user_liked_events_from_followed_host_db(db_conn, username)
    print(data)
    for event in data:
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
                "hostName": event[16],
                "liked": True
            }
        )
    
    return result

"""
Get all the events a user likes
"""
@app.route("/user/<string:username>/likes", methods=["GET"])
def get_all_user_likes(username:str):
    db_conn = get_db_connection()

    result = {"result": []}
    data = get_user_likes_db(db_conn, "userLikesEvents", username)

    for follow in data:
        result["result"].append({"eventID": follow[1], "liked":True})
    
    return result

"""
Get all the events a user does not like
"""
@app.route("/user/<string:username>/dislike", methods=["GET"])
def get_all_user_events_not_liked(username:str):
    db_conn = get_db_connection()

    result = {"result": []}
    data = get_user_nonliked_events_db(db_conn, "userLikesEvents", username)

    for follow in data:
        result["result"].append({"eventID": follow[1], "liked":False})
    
    return result


"""
Get all the events a user does and does not like
"""
@app.route("/user/<string:username>", methods=["GET"])
def get_all_user_events(username:str):
    db_conn = get_db_connection()

    result = {"result": []}
    data = get_user_nonliked_events_db(db_conn, "userLikesEvents", username)
    data1 = get_user_likes_db(db_conn, "userLikesEvents", username)

    for event in data:
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
                "hostName": event[12],
                "liked": False
            }
        )
    for event in data1:
        result["result"].append(
            {
                "eventID": event[2],
                "name": event[3],
                "date": event[4],
                "location": event[5],
                "price": event[6],
                "attire": event[7],
                "membership": event[8],
                "duration": event[9],
                "private": event[10],
                "faculty": event[11],
                "description": event[12],
                "eventType": event[13],
                "hostName": event[14],
                "liked": True
            }
        )
    
    return result
# ========================================================
# Calender APIs
# ========================================================
@app.route("/addToCalender/<int:eventID>", methods=["GET"])
def add_event_to_calender(eventID:int):
    print(eventID)
    data = get_event(eventID)["result"][0]
    print(data)
    generateIcs(data)
    try:
        # calendarPath = os.path.join(current_app.root_path, "calendars")
        calendarPath = current_app.root_path
        print(calendarPath)
        return send_from_directory(directory=calendarPath, path=(data['name'] + ".ics"), as_attachment=True)
    except FileNotFoundError:
        return Response(status=409)
    
    
# ========================================================================
# Signup API
# ========================================================================
"""
Inserts an entry of a student liking an event
"""
@app.route("/user/events", methods=["POST", "DELETE"])
def insert_user_signedUp_for_event():
    db_conn = get_db_connection()

    if request.method == "POST":
        data = request.json
        try:
            insert_user_signedUp_for_event_into_db(db_conn, "userSignsupEvents", data["username"], data["eventID"])
        except Exception as e:
            return Response(status=409)

        return Response(status=200)

    elif request.method == "DELETE":
        data = request.json
        try:
            delete_user_attending_event_from_db(db_conn, "userSignsupEvents", data["username"], data["eventID"])
        except Exception as e:
            return Response(status=409)

        return Response(status=200)
    
    else:
        return Response(status=400)


"""
Get all the events a user has signed up for
"""
@app.route("/user/<string:username>/events", methods=["GET"])
def get_all_user_attend_events(username:str):
    db_conn = get_db_connection()

    result = {"result": []}
    data = get_user_events_db(db_conn, "userSignsupEvents", username)

    for follow in data:
        result["result"].append({"eventID": follow[1]})
    
    return result
