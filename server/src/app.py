from flask import Flask
from config import config
from routes.patient_routes import PatientRoutes
app = Flask(__name__)

if __name__ == "__main__":
    PatientRoutes = PatientRoutes()
    app.config.from_object(config["development"]) #We pass pointer to config class located in config.py file
    for i in PatientRoutes.getBlueprints():app.register_blueprint(i)
    # app.register_blueprint(PatientRoutes.fetchPatients())
    app.run()