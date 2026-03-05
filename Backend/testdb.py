import pymysql

try:
    conn = pymysql.connect(
        host='localhost',
        user='bansri',
        password='bansri@2306',
        database='as_react',
        port=3306
    )
    print("Connection successful")
except Exception as e:
    print(f"Connection failed: {e}")
