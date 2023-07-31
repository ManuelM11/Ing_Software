from flask import Blueprint, request, jsonify, Response
from config import ServerConfig
from models.db import Db
from src.models.doctor import mapToDoctor
from src.models.unidad_referencia import mapToUnidadRef
import json
db = Db()
class AdminRoutes():
    admin_bp = []   
    
    def getBlueprints(self):
        if (ServerConfig.DEBUG == True):
            print(f"Total routes created: {len(self.admin_bp)} {self.admin_bp}")
        return self.admin_bp