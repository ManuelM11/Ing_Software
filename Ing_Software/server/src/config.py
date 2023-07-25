class ServerConfig:
    DEBUG = True
    MYSQL_USERNAME = "vymtecno_FlaskServer"
    MYSQL_PASSWORD = "=#Ym&ZY+TUxD"
    MYSQL_DB_NAME = "vymtecno_Ing_Software"
    SQL_ALCHEMY_DATABASE_URI = f"mysql+pymysql://vymtecno_FlaskServer:#Ym&ZY+TUxD@162.241.61.64:3306/vymtecno_Ing_Software"
    SQL_ALCHEMY_DATABASE_URI = f"mysql+pymysql://{MYSQL_USERNAME}:{MYSQL_PASSWORD}@162.241.61.64:3306/{MYSQL_DB_NAME}"
    SQL_ALCHEMY_TRACK_MODIFICATIONS = False
