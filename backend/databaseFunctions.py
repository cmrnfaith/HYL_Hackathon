from typing import List, Tuple
import datetime
import mysql.connector

def get_all_events(conn:mysql.connector.connect, table_name:str)->List:
    """Gets the user that matches the username passed in.
    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
    Returns:
        list: Every event in the database
    """
    cur = conn.cursor()
    cur.execute(f'SELECT * FROM {table_name}')

    results = cur.fetchall()
    cur.close()

    return results

def insert_event_db(conn:mysql.connector.connect, table_name:str)->List:
    """Gets the user that matches the username passed in.
    Args:
        conn (mysql.connector.connection): A valid connection to the mySQL Database
        table_name (str): Table name in DB to check
    Returns:
        list: Every event in the database
    """
    pass