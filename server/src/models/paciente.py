class Paciente():
    def __init__ (self, nombre, rut, fecha_nacimiento, fecha_diagnostico,telefono, email, direccion, password,id_semaforo,rut_funcionario):
        self.nombre = nombre
        self.rut = rut
        self.telefono = telefono
        self.email = email
        self.direccion = direccion
        self.password=password
        self.id_semaforo = id_semaforo
        self.rut_funcionario = rut_funcionario
        self.fecha_nacimiento = fecha_nacimiento
        self.fecha_diagnostico = fecha_diagnostico
    def getAttributes(self):
        return [self.nombre,self.rut,self.fecha_nacimiento,self.fecha_diagnostico,self.telefono,self.email,self.direccion,self.password,self.id_semaforo,self.rut_funcionario]

def mapToPatient(data: any) -> "Paciente":
    #Recibe un json y retorna una instancia de Doctor
    keys = ["nombre","rut","fecha_nacimiento","fecha_diagnostico","telefono","email","direccion","id_semaforo","rut_funcionario"]
    data = {k.lower():v for k,v in data.items()}
    for i in data:
        if (i not in keys):
            print("No se encontró algún atributo del funcionario")
            return None
    nombre = data.get("nombre")
    rut = data.get("rut")
    fecha_nacimiento = data.get("fecha_nacimiento")
    fecha_diagnostico = data.get("fecha_diagnostico")
    telefono = data.get("telefono")
    email = data.get("email")
    direccion = data.get("direccion")
    id_semaforo = data.get("id_semaforo")
    rut_funcionario = data.get("rut_funcionario")
    password = rut
    return Paciente(nombre,rut,fecha_nacimiento,fecha_diagnostico,telefono,email,direccion,password,id_semaforo,rut_funcionario)