from flask import Blueprint, request, jsonify, Response
from config import ServerConfig
from models.db import Db
from models.autoexamen import mapToAutoExamen
import json
db = Db()
class AutoExamenRoutes():
    aut_bp = []   
    def registerAutoExamen(self):
        simple_page = Blueprint("registerAutoexamen", __name__)
        @simple_page.route("/registerAutoexamen", methods = ["POST"])
        def f():
            data = request.get_json()
            aut = mapToAutoExamen(data)
            if (aut!=None):
                statement = """INSERT INTO AUTOEXAMEN (rut_paciente,fecha) values (%s,%s)"""
                db.insert(statement,aut.getAttributes())
                return Response("201 Created", status=201, mimetype='application/json')
            return Response("404 ABORTED", status=404, mimetype='application/json')
        self.aut_bp.append(simple_page)
    def getBlueprints(self):
        self.registerAutoExamen()
        if (ServerConfig.DEBUG == True):
            print(f"Total routes created: {len(self.aut_bp)} {self.aut_bp}")
        return self.aut_bp