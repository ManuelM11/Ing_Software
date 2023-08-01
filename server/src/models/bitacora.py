class Bitacora():
   def __init__(self,id_paciente,descripcion):
      self.id_paciente = id_paciente
      self.descripcion = descripcion
   def getAttributes(self):
      return [self.id_paciente,self.descripcion]
   
def mapToBitacora(data:any) ->"Bitacora":
    keys = ["id_paciente","descripcion"]
    data = {k.lower():v for k,v in data.items()}
    for i in data:
       if i not in keys:
            print("No se encontró algún atributo del funcionario")
            return None
    return Bitacora(data.get("id_paciente"),data.get("descripcion"))
