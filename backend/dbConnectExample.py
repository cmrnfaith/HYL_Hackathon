#EXAMPLE CONNECTION FILE

import mysql.connector

MYSQL_HOST = '10.0.0.101'
MYSQL_USER = 'root'
MYSQL_PASSWORD = 'pmwpmwpmw'
MYSQL_DB = 'HYL_DB'
MYSQL_PORT = 3306

myDb = mysql.connector.connect(host=MYSQL_HOST, user=MYSQL_USER, port=MYSQL_PORT, password=MYSQL_PASSWORD, database=MYSQL_DB)
cursor = myDb.cursor()
# cursor.execute(sql)
# df = pd.DataFrame(cursor.fetchall())
cursor.close()