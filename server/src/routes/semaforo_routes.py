from flask import Blueprint, request, jsonify, Response
from config import ServerConfig
from models.db import Db
from models.semaforo import mapToSemaforo
import json
db = Db()
class SemaforoRoutes():
    sem_bp = []   
    def registerSemaforo(self):
        simple_page = Blueprint("registerSemaforo", __name__)
        @simple_page.route("/registerSemaforo", methods = ["POST"])
        def f():
            data = request.get_json()
            semaf = mapToSemaforo(data)
            if (semaf!=None):
                statement = """INSERT INTO SEMAFORO (descripcion) values (%s)"""
                db.insert(statement,semaf.getAttributes())
                return Response("201 Created", status=201, mimetype='application/json')
            return Response("404 ABORTED", status=404, mimetype='application/json')
        self.sem_bp.append(simple_page)
    def getBlueprints(self):
        self.registerSemaforo()
        if (ServerConfig.DEBUG == True):
            print(f"Total routes created: {len(self.sem_bp)} {self.sem_bp}")
        return self.sem_bp