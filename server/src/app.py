from flask import Flask
from config import ServerConfig
from routes.routes import Router
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
router = Router()
app.config.from_object(ServerConfig) #We pass pointer to config class located in config.py file
if __name__ == "__main__":
    
    
    for i in router.init():app.register_blueprint(i)
    # app.register_blueprint(PatientRoutes.fetchPatients())
    
    app.run()
