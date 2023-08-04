from flask import Blueprint, request, jsonify, Response
from config import ServerConfig
from models.db import Db
from models.doctor import mapToDoctor
from models.unidad_referencia import mapToUnidadRef
from pymysql import Error
from flask_cors import cross_origin
import json
db = Db()
class AdminRoutes():
    admin_bp = []   
    def fetchAdmin(self):
        simple_page = Blueprint("fetchAdmin", __name__)
        @simple_page.route("/fetchAdmin", methods = ["POST"])
        @cross_origin()
        def f():
            user = request.json["username"]
            print(user)
            password = request.json["password"]
            statement = f"SELECT username,password FROM ADMIN WHERE username = '{user}'"
            results = db.query(statement)
            if (results == () or results[0].get("password")!= password):
                return jsonify({
                "Unauthorized": "Datos incorrectos"}), 401
            # print(results[0].get("password") == password)
            return jsonify({"Authorized": "Datos Correctos"}),200
        self.admin_bp.append(simple_page)

    def getBlueprints(self):
        self.fetchAdmin()
        if (ServerConfig.DEBUG == True):
            print(f"Total routes created: {len(self.admin_bp)} {self.admin_bp}")
        return self.admin_bp