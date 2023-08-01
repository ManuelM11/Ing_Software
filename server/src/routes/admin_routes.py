from flask import Blueprint, request, jsonify, Response
from config import ServerConfig
from models.db import Db
from src.models.doctor import mapToDoctor
from src.models.unidad_referencia import mapToUnidadRef
import json
db = Db()
class AdminRoutes():
    admin_bp = []   
    def fetchAdmin(self):
        simple_page = Blueprint("fetchAdmin", __name__)
        @simple_page.route("/fetchAdmin", methods = ["POST"])
        def f():
            user = request.json("user")
            password = request.json("pass")
            statement = f"SELECT nombre,rut,direccion,telefono,email FROM PACIENTE WHERE RUT = {rut}"
            results = db.query("SELECT")

    def getBlueprints(self):
        if (ServerConfig.DEBUG == True):
            print(f"Total routes created: {len(self.admin_bp)} {self.admin_bp}")
        return self.admin_bp