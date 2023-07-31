from routes.patient_routes import PatientRoutes
from routes.doctor_routes import DoctorRoutes
from routes.admin_routes import AdminRoutes
from routes.unidad_routes import UnidadRoutes
from routes.semaforo_routes import SemaforoRoutes
from routes.autoexamen_routes import AutoExamenRoutes
class Router:
    bp = []
    def init(self):
        dr = DoctorRoutes()
        pr = PatientRoutes()
        adm = AdminRoutes()
        un = UnidadRoutes()
        sem = SemaforoRoutes()
        aut = AutoExamenRoutes()
        for i in dr.getBluePrints():
            self.bp.append(i)
        for i in pr.getBlueprints():
            self.bp.append(i)
        for i in adm.getBlueprints():
            self.bp.append(i)
        for i in un.getBlueprints():
            self.bp.append(i)
        for i in sem.getBlueprints():
            self.bp.append(i)
        for i in aut.getBlueprints():
            self.bp.append(i)
        return self.bp
