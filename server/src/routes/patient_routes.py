from flask import Blueprint, Response, request
from config import ServerConfig
from models.db import Db
from models.paciente import mapToPatient
from flask_cors import cross_origin
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
        # @cross_origin()
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
            statement = f"SELECT nombre,rut,direccion,telefono,email FROM PACIENTE WHERE RUT = {rut}"
            results = DB.query(statement)
            return json.dumps(results,ensure_ascii=False)
        self.p_r.append(simple_page)
        return simple_page
    def registerPatient(self):
        simple_page = Blueprint("registerPatient", __name__)
        @simple_page.route("/registerPatient", methods = ["POST"])
        def f():
            data = request.get_json()
            patient = mapToPatient(data)
            if (patient!=None):
                statement = """INSERT INTO PACIENTE (nombre,rut,fecha_nacimiento,fecha_diagnostico,telefono,email,direccion,password,id_semaforo,rut_funcionario) values (%s, %s, %s, %s,%s,%s,%s,%s,%s,%s)"""
                DB.insert(statement,patient.getAttributes())
                return Response("201 Created", status=201, mimetype='application/json')
            return Response("404 ABORTED", status=404, mimetype='application/json')
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
        self.registerPatient()
        self.uploadPatientTest()
        if (ServerConfig.DEBUG == True):
            #DEBUGGING
            print(f"Total routes created: {len(self.p_r)} {self.p_r}")
        #Return array with blueprints to use in app.py file
        return self.p_r
