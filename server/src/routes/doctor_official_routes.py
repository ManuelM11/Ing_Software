from flask import Blueprint
from config import ServerConfig
#We set blueprients routes to modularize api rest

class doctorOfficialRoutes:
    DOR = []

    def fetchDoctorOfficial(self):
        simple_page = Blueprint("fetchPatients",__name__)
        @simple_page.route("/fetchDoctorOfficial")
        def index():
            return "ajdkaskjdsa"
        self.p_r.append(simple_page)
        return simple_page
    def fetchDoctorOfficialById(self):
        simple_page = Blueprint("fetchDoctorOfficialById",__name__)
        @simple_page.route("/fetchDoctorOfficial/<id>")
        def route(id):
            return f"{id}"
        self.p_r.append(simple_page)
        return simple_page
    def deletePatientById(self):
        simple_page = Blueprint("deleteDoctorOfficialById", __name__)
        @simple_page.route("/deleteDoctorOfficial/<id>")
        def route(id):
            return f"DoctorOfficial id {id} was deleted"
        self.p_r.append(simple_page)
    def getBlueprints(self):
        #We call Blueprints
        self.fetchDoctorOfficial()
        self.fetchDoctorOfficialById()
        self.deleteDoctorOfficialById()
        if (ServerConfig.DEBUG == True):
            #DEBUGGING
            print(f"Total routes created: {len(self.DOR)} {self.DOR}")
        #Return array with blueprints to use in app.py file
        return self.DOR
