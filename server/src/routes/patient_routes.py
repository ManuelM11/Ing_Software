from flask import Blueprint
from config import ServerConfig
from models.db import Db
import json
#Initializing db
DB = Db()
#We set blueprients routes to modularize api rest
class PatientRoutes:
    #We set patient routes
    p_r = []
    def fetchPatients(self):
        simple_page = Blueprint("fetchPatients",__name__)
        @simple_page.route("/fetchPatients")
        def index():
            statement = "SELECT * FROM PACIENTE"
            results = DB.query(statement)
            return json.dumps(results,ensure_ascii=False)
        self.p_r.append(simple_page)
        return simple_page
    def fetchPatientById(self):
        simple_page = Blueprint("fetchPatientByRut",__name__)
        @simple_page.route("/fetchPatientByRut/<rut>")
        def route(rut):
            statement = f"SELECT * FROM PACIENTE WHERE RUT = {rut}"
            results = DB.query(statement)
            return json.dumps(results,ensure_ascii=False)
        self.p_r.append(simple_page)
        return simple_page
    def deletePatientById(self):
        simple_page = Blueprint("deletePatientById", __name__)
        @simple_page.route("/deletePatient/<id>")
        def route(id):
            return f"Patient id {id} was deleted"
        self.p_r.append(simple_page)
    def uploadPatientTest(self):
        simple_page = Blueprint("uploadPatientTest",__name__)
        #Here we code mysql statement
        @simple_page.route("/uploadPatientTest/<id>")
        def route(id):
            return "Daily Test Uploaded!"
        self.p_r.append(simple_page)

    def getBlueprints(self):
        #We call Blueprints
        self.fetchPatients()
        self.fetchPatientById()
        self.deletePatientById()
        self.uploadPatientTest()
        if (ServerConfig.DEBUG == True):
            #DEBUGGING
            print(f"Total routes created: {len(self.p_r)} {self.p_r}")
        #Return array with blueprints to use in app.py file
        return self.p_r
