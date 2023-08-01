from flask import Blueprint, request, jsonify, Response
from config import ServerConfig
from models.db import Db
from models.unidad_referencia import mapToUnidadRef
import json
db = Db()
class UnidadRoutes():
    u_bp = []
    def registerUnidad(self):
        simple_page = Blueprint("registerUnidad",__name__)
        @simple_page.route("/registerUnidad", methods = ["POST"])
        def f():
            data = request.get_json()
            unidad = mapToUnidadRef(data)
            if (unidad!=None):
                print(unidad.getAttributes())
                statement = """INSERT INTO UNIDAD_REFERENCIA (nombre,region,ciudad,calle) values (%s, %s, %s, %s)"""
                db.insert(statement,unidad.getAttributes())
                return Response("201 Created", status=201, mimetype='application/json')
            return Response("404 ABORTED", status=404, mimetype='application/json')
        self.u_bp.append(simple_page)
    def getBlueprints(self):
        self.registerUnidad()
        if (ServerConfig.DEBUG == True):
            print(f"Total routes created: {len(self.u_bp)} {self.u_bp}")
        return self.u_bp

