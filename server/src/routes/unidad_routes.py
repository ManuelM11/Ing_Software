from flask import Blueprint, request, jsonify, Response
from config import ServerConfig
from models.db import Db
from models.unidad_referencia import mapToUnidadRef
from flask_cors import cross_origin
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
    def fetchUnidad(self):
        simple_page = Blueprint("fetchUnidad",__name__)
        @simple_page.route("/fetchUnidad",methods = ["GET"])
        @cross_origin()
        def index():
            statement= "SELECT * FROM UNIDAD_REFERENCIA"
            results = db.query(statement)
            return json.dumps(results,ensure_ascii=False)
        self.u_bp.append(simple_page)
    def deleteUnidad(self):
        simple_page = Blueprint("deleteUnidad",__name__)
        @simple_page.route("/deleteUnidad/<id>",methods = ["DELETE"])
        @cross_origin()
        def index(id):
            statement= f"UPDATE  UNIDAD_REFERENCIA SET status = 0 where id = {id}"
            db.update(statement)
            print(id)
            return jsonify({
                "Estado": "Hecho"
            }), 200
        self.u_bp.append(simple_page)
    def activateUnidad(self):
        simple_page = Blueprint("activateUnidad",__name__)
        @simple_page.route("/activateUnidad/<id>",methods = ["POST"])
        @cross_origin()
        def index(id):
            statement= f"UPDATE  UNIDAD_REFERENCIA SET status = 1 where id = {id}"
            db.update(statement)
            print(id)
            return jsonify({
                "Estado": "Hecho"
            }), 200
    def getBlueprints(self):
        self.activateUnidad()
        self.fetchUnidad()
        self.registerUnidad()
        self.deleteUnidad()
        if (ServerConfig.DEBUG == True):
            print(f"Total routes created: {len(self.u_bp)} {self.u_bp}")
        return self.u_bp

