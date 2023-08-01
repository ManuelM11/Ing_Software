class UnidadReferencia():
    def __init__(self,nombre,region,ciudad,calle):
        self.nombre = nombre
        self.region = region
        self.ciudad = ciudad
        self.calle = calle
    def getAttributes(self):
        return [self.nombre,self.region,self.ciudad,self.calle]

def mapToUnidadRef(data: any) -> "UnidadReferencia":
    #Recibe un json y retorna una instancia de Unidad Referencia
    keys = ["nombre","region","ciudad","calle"]
    data = {k.lower():v for k,v in data.items()}
    for i in data:
        if (i not in keys):
            print("No se encontró algún atributo del funcionario")
            return None
    nombre = data.get("nombre")
    region = data.get("region")
    ciudad = data.get("ciudad")
    calle = data.get("calle")
    return UnidadReferencia(nombre,region,ciudad,calle)