class Doctor():
    def __init__ (self, nombre, rut, profesion, telefono, email, direccion, password,id_unidad):
        self.nombre = nombre
        self.rut = rut
        self.profesion = profesion
        self.telefono = telefono
        self.email = email
        self.direccion = direccion
        self.password=password
        self.id_unidad = id_unidad
    def getAttributes(self):
        return [self.nombre,self.rut,self.profesion,self.telefono,self.email,self.direccion,self.password,self.id_unidad]

def mapToDoctor(data: any) -> "Doctor":
    #Recibe un json y retorna una instancia de Doctor
    keys = ["nombre","rut","profesion","telefono","email","direccion","id_unidad","unidad"]
    data = {k.lower():v for k,v in data.items()}
    for i in data:
        if (i not in keys):
            print(i)
            print("No se encontró algún atributo del funcionario")
            return None
    nombre = data.get("nombre")
    rut = data.get("rut")
    profesion = data.get("profesion")
    telefono = data.get("telefono")
    email = data.get("email")
    direccion = data.get("direccion")
    id_unidad = data.get("id_unidad")
    password= str(rut)
    return Doctor(nombre,rut,profesion,telefono,email,direccion,password,id_unidad)


