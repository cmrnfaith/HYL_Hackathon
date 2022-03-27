from tkinter import E
from typing import List, Tuple
import datetime
import mysql.connector

# =============================================================================
# Database Functions for the Event Table
# =============================================================================
def get_all_events_db(conn:mysql.connector.connect, table_name:str)->List:
    """
    Gets all the events from the database.

    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
    Returns:
        list: Every event in the database
    """
    cur = conn.cursor()
    try:
        cur.execute(f'SELECT * FROM {table_name}')
    except Exception as e:
        conn.rollback()
        raise e

    results = cur.fetchall()
    cur.close()
    return results

def get_event_db(conn:mysql.connector.connect, table_name:str, eventID:int)->List:
    """
    Gets a specific events from the database.

    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
        eventID (int): The event to find
    Returns:
        dict: Every event in the database
    """
    cur = conn.cursor()
    try:
        cur.execute(f'SELECT * FROM {table_name} WHERE eventID = {eventID}')
    except Exception as e:
        conn.rollback()
        raise e

    results = cur.fetchall()
    cur.close()
    return results

def insert_event_db(conn:mysql.connector.connect, table_name:str, event_data:dict):
    cur = conn.cursor()
    try:
        sql = f"INSERT INTO {table_name} (name, dateTime, location, price, attire, membership, duration, private, faculty, description, eventType, hostName) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        val = (event_data["name"], event_data["dateTime"], event_data["location"], event_data["price"], event_data["attire"], event_data["membership"], event_data["duration"], event_data["private"], event_data["faculty"], event_data["description"], event_data["eventType"], event_data["hostName"])

        cur.execute(sql, val)
        conn.commit()
        cur.close()
    except Exception as e:
        conn.rollback()
        raise e
    return

def delete_event_from_db(conn:mysql.connector.connect, table_name:str, host_name:str):
    cur = conn.cursor()
    try:
        sql = f"DELETE FROM {table_name} WHERE eventID = %s;"
        val = (host_name,)
        cur.execute(sql, val)
        conn.commit()
        cur.close()
    except Exception as e:
        conn.rollback()
        raise e
    return

def get_all_events_from_host_db(conn:mysql.connector.connect, table_name:str, host_name:str)->List:
    """
    Gets all the events from a host in the database.

    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
        host_name: The host name to check for, for events
    Returns:
        list: Every event by a specific host in the database
    """
    cur = conn.cursor()
    try:
        sql = f'SELECT * FROM {table_name} WHERE hostName = %s;'
        val = (host_name,)
        cur.execute(sql, val)

    except Exception as e:
        conn.rollback()
        raise e

    results = cur.fetchall()
    cur.close()
    return results

# =============================================================================
# Database Functions for the User Table
# =============================================================================

def insert_user_into_db(conn:mysql.connector.connect, table_name:str, username:str, hashed_password:str, \
                        email:str, firstName:str, lastName:str, dateOfBirth:str, country:str, studentID:int, isHost:int):
    """
    Inserts a regular user or host into the DB

    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
        username: Username of the host being inserted
        hased_password: Hashed_password of the host being inserted
        email: Email of the user
        firstName: First name of the user
        lastName: Last name of the user
        dateOfBirth: The date of birth of a user
        country: The country the user is from
        studentID: The student ID of a user if applicable
        isHost: Boolean representing if the user is a host or a student
    
    """

    cur = conn.cursor()

    try:
        sql = f"INSERT INTO {table_name} (username, hashedPassword, email, firstName, lastName, dateOfBirth, \
            country, studentID, isHost) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
        val = (username, hashed_password, email, firstName, lastName, dateOfBirth, country, \
            studentID, isHost)
        cur.execute(sql, val)
        # print(f"executing into {table_name}: {(username, hashed_password)}")
        conn.commit()

    except mysql.connector.DataError as e:
        conn.rollback()
        raise Exception(f"Username value at {username} for table {table_name} already exists.")
    
    results = cur.fetchall()
    cur.close()
    return results

def update_user_in_db(conn:mysql.connector.connect, table_name:str, username:str, hashed_password:str, email:str, firstName:str, lastName:str, \
    dateOfBirth:str, country:str, studentID:int):
    """
    Updates a person in the user table.

    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
        username: Username of the host being updated
        hased_password: Hashed_password of the host being inserted
        email: Email of the user
        firstName: First name of the user
        lastName: Last name of the user
        dateOfBirth: The date of birth of a user
        country: The country the user is from
        studentID: The student ID of a user if applicable
    """

    cur = conn.cursor()

    sql = f"UPDATE {table_name} SET hashedPassword = %s, email = %s, firstName = %s, lastName = %s, dateOfBirth = %s, country = %s, studentID = %s WHERE username = %s;"
    val = (hashed_password, email, firstName, lastName, dateOfBirth, country, studentID)
    cur.execute(sql, val)

    # print(f"executing into {table_name}: {(host_name, username, hashed_password, username)}")
    conn.commit()
    cur.close()
    return

def delete_user_from_db(conn:mysql.connector.connect, table_name:str, username:str):
    """
    Deletes a user from the database.

    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
        username: Username of the user being deleted
    """

    cur = conn.cursor()

    sql = f"DELETE FROM {table_name} WHERE username = %s;"
    val = (username,)
    cur.execute(sql, val)

    print(f"executing into {table_name}: {(username)}")
    conn.commit()
    cur.close()
    return

def get_user(conn:mysql.connector.connect, table_name:str, username:str)->List:
    """
    Gets a user from the user table.

    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
        username: Username of the host being inserted
    
    Returns:
        List: The user's information
    """ 

    cur = conn.cursor()

    sql = f"SELECT * FROM {table_name}  WHERE username = %s;"
    val = (username,)
    cur.execute(sql, val)

    results = cur.fetchall()
    cur.close()
    return results

def get_all_hosts_from_db(conn:mysql.connector.connect, table_name:str)->List:
    """
    Gets all the hosts in the database.

    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
    Returns:
        list: Every host in the database
    """
    cur = conn.cursor()
    try:
        sql = f'SELECT * FROM {table_name} WHERE isHost = 1;'
        cur.execute(sql)

    except Exception as e:
        conn.rollback()
        raise e

    results = cur.fetchall()
    cur.close()
    return results


# =============================================================================
# Database Functions for the Follows Table
# =============================================================================

def insert_user_follows_db(conn:mysql.connector.connect, table_name:str, username:str, hostName:str):
    """
    Inserts a follow by a user for a host

    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
        username: Username of the host being inserted
        hostName: Username of the host being followed
        isHost: Boolean representing if the user is a host or a student
    
    """

    cur = conn.cursor()

    try:
        sql = f"INSERT INTO {table_name} (username, hostName) VALUES (%s, %s)"
        val = (username, hostName)
        cur.execute(sql, val)
        # print(f"executing into {table_name}: {(username, hashed_password)}")
        conn.commit()

    except mysql.connector.DataError as e:
        conn.rollback()
        raise Exception(f"Username value at {username} for table {table_name} already exists.")
    
    results = cur.fetchall()
    cur.close()
    return results

def get_user_follows_db(conn:mysql.connector.connect, table_name:str, username:str):
    """
    Gets all the hosts a user follows

    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
        username: Username of the host being inserted
    
    """

    cur = conn.cursor()

    sql = f"SELECT * FROM {table_name}  WHERE username = %s;"
    val = (username,)
    cur.execute(sql, val)

    results = cur.fetchall()
    cur.close()
    return results


def get_user_liked_events_from_followed_host_db(conn:mysql.connector.connect, username:str):
    """
    Gets all the hosts a user follows

    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        username: Username of the host being inserted
    
    """

    cur = conn.cursor()

    sql = "SELECT * FROM events AS e, userLikesEvents AS l, userFollowsHosts AS f, user AS u WHERE u.username = %s AND e.eventID = l.eventID AND l.username = f.username;"
    val = (username,)
    cur.execute(sql, val)

    results = cur.fetchall()
    cur.close()
    return results

def delete_user_follow_from_db(conn:mysql.connector.connect, table_name:str, username:str, hostName:str):
    cur = conn.cursor()
    try:
        sql = f"DELETE FROM {table_name} WHERE username = %s AND hostName = %s;"
        val = (username, hostName)
        cur.execute(sql, val)
        conn.commit()
        cur.close()
    except Exception as e:
        conn.rollback()
        raise e
    return


# =============================================================================
# Database Functions for the Likes Table
# =============================================================================

def insert_user_likes_event_into_db(conn:mysql.connector.connect, table_name:str, username:str, eventID:int):
    """
    Inserts a liked event by a user

    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
        username: Username of the host being inserted
        eventID: ID of the vent being liked
    
    """

    cur = conn.cursor()

    try:
        sql = f"INSERT INTO {table_name} (username, eventID) VALUES (%s, %s)"
        val = (username, eventID)
        cur.execute(sql, val)
        # print(f"executing into {table_name}: {(username, hashed_password)}")
        conn.commit()

    except mysql.connector.DataError as e:
        conn.rollback()
        raise Exception(f"Username value at {username} and {eventID} for table {table_name} already exists.")
    
    results = cur.fetchall()
    cur.close()
    return results

def get_user_likes_db(conn:mysql.connector.connect, table_name:str, username:str):
    """
    Gets all the user liked events.

    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
        username: Username of the host being used to gather all their likes
    
    """

    cur = conn.cursor()

    sql = f"SELECT * FROM {table_name}  WHERE username = %s;"
    val = (username,)
    cur.execute(sql, val)

    results = cur.fetchall()
    cur.close()
    return results

def delete_user_likes_event_from_db(conn:mysql.connector.connect, table_name:str, username:str, eventID:int):
    cur = conn.cursor()
    try:
        sql = f"DELETE FROM {table_name} WHERE username = %s AND eventID = %s;"
        val = (username, eventID)
        cur.execute(sql, val)
        conn.commit()
        cur.close()
    except Exception as e:
        conn.rollback()
        raise e
    return


# =============================================================================
# Database Functions for the signedup Table
# =============================================================================

def insert_user_signedUp_for_event_into_db(conn:mysql.connector.connect, table_name:str, username:str, eventID:int):
    """
    Inserts a liked event by a user

    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
        username: Username of the user being inserted
        eventID: ID of the vent being signedup for
    
    """

    cur = conn.cursor()

    try:
        sql = f"INSERT INTO {table_name} (username, eventID) VALUES (%s, %s)"
        val = (username, eventID)
        cur.execute(sql, val)
        # print(f"executing into {table_name}: {(username, hashed_password)}")
        conn.commit()

    except mysql.connector.DataError as e:
        conn.rollback()
        raise Exception(f"Username value at {username} and {eventID} for table {table_name} already exists.")
    
    results = cur.fetchall()
    cur.close()
    return results

def get_user_events_db(conn:mysql.connector.connect, table_name:str, username:str):
    """
    Gets all the user liked events.

    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
        username: Username of the host being used to gather all their likes
    
    """

    cur = conn.cursor()

    sql = f"SELECT * FROM {table_name}  WHERE username = %s;"
    val = (username,)
    cur.execute(sql, val)

    results = cur.fetchall()
    cur.close()
    return results

def delete_user_attending_event_from_db(conn:mysql.connector.connect, table_name:str, username:str, eventID:int):
    cur = conn.cursor()
    try:
        sql = f"DELETE FROM {table_name} WHERE username = %s AND eventID = %s;"
        val = (username, eventID)
        cur.execute(sql, val)
        conn.commit()
        cur.close()
    except Exception as e:
        conn.rollback()
        raise e
    return