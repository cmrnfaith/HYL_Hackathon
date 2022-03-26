from typing import List, Tuple
import datetime
import mysql.connector

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

def insert_host_into_db(conn:mysql.connector.connect, table_name:str, host_name:str, username:str, hashed_password:str):
    """
    Inserts a host into the DB

    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
        host_name: Name of the host being inserted
        username: Username of the host being inserted
        hased_password: Hashed_password of the host being inserted
    
    """

    cur = conn.cursor()

    try:
        sql = f"INSERT INTO {table_name} (hostName, username, hashedPassword) VALUES (%s, %s, %s)"
        val = (host_name, username, hashed_password)
        cur.execute(sql, val)
        print(f"executing into {table_name}: {(table_name, username, hashed_password)}")
        conn.commit()

    except mysql.connector.DataError as e:
        conn.rollback()
        raise Exception(f"Username value at {username} for table {table_name} already exists.")
    
    results = cur.fetchall()
    cur.close()
    return results

def insert_event_db(conn:mysql.connector.connect, table_name:str, event_data:dict):
    cur = conn.cursor()
    try:
        sql = f"INSERT INTO {table_name} (name, dateTime, location, price, attire, membership, duration, private, faculty, description, eventType, hostID) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        val = (event_data["name"], event_data["date"], event_data["location"], event_data["price"], event_data["attire"], event_data["membership"], event_data["duration"], event_data["private"], event_data["faculty"], event_data["description"], event_data["eventType"], event_data["hostID"])

        cur.execute(sql, val)
        conn.commit()
        cur.close()
    except Exception as e:
        conn.rollback()
        raise e
    return



def update_host_in_db(conn:mysql.connector.connect, table_name:str, host_name:str, username:str, hashed_password:str):
    """
    Updates a host in the Host table.

    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
        host_name: Name of the host being inserted
        username: Username of the host being inserted
        hased_password: Hashed_password of the host being inserted
    """

    cur = conn.cursor()

    cur.execute("UPDATE public.\"%s\" SET \"Password\" = %s, SET \"hostNAame\" = %s WHERE \"Username\" = %s;",
    vars=(table_name, hashed_password, host_name, username))

    print(f"executing into {table_name}: {(host_name, username, hashed_password)}")
    conn.commit()
    return

def delete_host_from_db(conn:mysql.connector.connect, table_name:str, username:str):
    """
    Deletes a host from the database.

    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
        username: Username of the host being deleted
    """

    cur = conn.cursor()

    cur.execute("DELETE FROM public.\"%s\" WHERE \"Username\" = %s", vars=(table_name, username))

    print(f"executing into {table_name}: {(username)}")
    conn.commit()
    return
