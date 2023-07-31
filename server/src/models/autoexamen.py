class AutoExamen():
   def __init__(self,rut_paciente,fecha):
      self.rut_paciente = rut_paciente
      self.fecha = fecha
   def getAttributes(self):
      return [self.rut_paciente,self.fecha]
   
def mapToAutoExamen(data:any) ->"AutoExamen":
    keys = ["rut_paciente","fecha"]
    data = {k.lower():v for k,v in data.items()}
    for i in data:
       if i not in keys:
            print("No se encontró algún atributo del funcionario")
            return None
    return AutoExamen(data.get("rut_paciente"), data.get("fecha"))
