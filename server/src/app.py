from flask import Flask
from config import ServerConfig
from routes.routes import Router
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
router = Router()
app.config.from_object(ServerConfig) 
if __name__ == "__main__":
    for i in router.init():app.register_blueprint(i)
    # app.register_blueprint(PatientRoutes.fetchPatients())    
    app.run()
