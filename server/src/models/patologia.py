class Patologia():
   def __init__(self,nombre,descripcion):
      self.nombre = nombre
      self.descripcion = descripcion
   def getAttributes(self):
      return [self.nombre,self.descripcion]
   
def mapToSintoma(data:any) ->"Patologia":
    keys = ["nombre","descripcion"]
    data = {k.lower():v for k,v in data.items()}
    for i in data:
       if i not in keys:
            print("No se encontró algún atributo del funcionario")
            return None
    return Patologia(data.get("nombre"), data.get("descripcion"))
