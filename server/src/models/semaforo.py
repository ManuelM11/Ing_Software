class Semaforo():
   def __init__(self,descripcion):
      self.descripcion = descripcion
   def getAttributes(self):
      return [self.descripcion]
   
def mapToSemaforo(data:any) ->"Semaforo":
    keys = ["descripcion"]
    data = {k.lower():v for k,v in data.items()}
    for i in data:
       if i not in keys:
            print("No se encontró algún atributo del funcionario")
            return None
    return Semaforo(data.get("descripcion"))
