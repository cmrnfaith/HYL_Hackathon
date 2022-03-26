from typing import List, Tuple
import datetime
import mysql.connector

def get_all_events_DB(conn:mysql.connector.connect, table_name:str)->List:
    """Gets the user that matches the username passed in.
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

def insert_event_DB(conn:mysql.connector.connect, table_name:str, event_data:dict)->List:
    cur = conn.cursor()
    try:
        sql = f"INSERT INTO {table_name} (name, date, location, price, attire, membership, duration, private, faculty, description, eventType) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        val = (event_data["name"], event_data["date"], event_data["location"], event_data["price"], event_data["attire"], event_data["membership"], event_data["duration"], event_data["private"], event_data["faculty"], event_data["description"], event_data["eventType"])

        cur.execute(sql, val)
    except Exception as e:
        conn.rollback()
        raise e

    results = cur.fetchall()
    cur.close()
    return results
