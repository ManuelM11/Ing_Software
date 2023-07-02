from flask import Flask
from config import ServerConfig
from routes.patient_routes import PatientRoutes
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
PatientRoutes = PatientRoutes()
app.config.from_object(ServerConfig) #We pass pointer to config class located in config.py file


if __name__ == "__main__":
    
    
    for i in PatientRoutes.getBlueprints():app.register_blueprint(i)
    # app.register_blueprint(PatientRoutes.fetchPatients())
    
    app.run()