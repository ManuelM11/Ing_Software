from flask import Blueprint, request, jsonify, Response
from config import ServerConfig
from models.db import Db
from models.doctor import mapToDoctor
from flask_cors import cross_origin
import json
#We set blueprients routes to modularize api rest
DB = Db()
class DoctorRoutes:
    d_r = []
    def fetchDoctor(self):
        simple_page = Blueprint("fetchDoctors",__name__)
        @simple_page.route("/fetchDoctor",methods = ["GET"])
        @cross_origin()
        def index():
            statement= "SELECT * FROM FUNCIONARIO"
            results = DB.query(statement)
            return json.dumps(results,ensure_ascii=False)
        self.d_r.append(simple_page)
    
    def fetchDoctorByRut(self):
        simple_page = Blueprint("fetchDoctorByRut",__name__)
        @simple_page.route("/fetchDoctorByRut/<rut>",methods =["GET"])
        @cross_origin()
        def f(rut):
            statement = f"SELECT * FROM FUNCIONARIO WHERE RUT = {rut}"
            results = DB.query(statement)
            unidad = DB.query(f"SELECT nombre FROM UNIDAD_REFERENCIA WHERE id = {results[0].get('id_unidad')}")
            results[0]["unidad"] = unidad[0].get("nombre")
            return json.dumps(results, ensure_ascii = False)
        self.d_r.append(simple_page)

    def registerDoctor(self):
        simple_page = Blueprint("registerDoctor",__name__)
        @simple_page.route("/registerDoctor", methods = ["POST"])
        @cross_origin()
        def f():
            data = request.get_json()
            unidad = data.get("unidad")
            statement = f"""SELECT id FROM UNIDAD_REFERENCIA WHERE nombre = '{unidad}'"""
            id_u = DB.query(statement)
            print(data.get("unidad"))
            data["id_unidad"] = id_u[0].get("id")
            print(data)
            doctor = mapToDoctor(data)

            if (doctor!=None):
                statement = """INSERT INTO FUNCIONARIO (nombre,rut,profesion,telefono,email,direccion,password,id_unidad) values (%s, %s, %s, %s,%s,%s,%s,%s)"""
                DB.insert(statement,doctor.getAttributes())
                return Response("201 Created", status=201, mimetype='application/json')
            return Response("404 ABORTED", status=404, mimetype='application/json')
        self.d_r.append(simple_page)
        
    def getBluePrints(self):
        self.fetchDoctor()
        self.fetchDoctorByRut()
        self.registerDoctor()
        if (ServerConfig.DEBUG == True):
            print(f"Total routes created: {len(self.d_r)} {self.d_r}")
        return self.d_r


