Para correr el servidor de flask, primero debemos crear el entorno virtual.

1. Dentro de la carpeta del proyecto, creamos el entorno virtual ejecutando python3 -m venv env
   Esto nos crea el entorno virtual dentro de la carpeta env
   
   C:\Users\manue\OneDrive\Escritorio\Ing_Software\server> python3 -m venv env  
   
2. Una vez creado el entorno virtual, ejecutamos el activate.bat .\env\bin\activate


   PS C:\Users\manue\OneDrive\Escritorio\Ing_Software\server> ./env/bin/activate
   
   Debería aparecernos algo de este estilo en el terminal: 
   
   (env) PS C:\Users\manue\OneDrive\Escritorio\Ing_Software\server> 
   
   Lo que significa que estamos trabajando en el entorno virtual.
   
    
<<<<<<< HEAD
3. Instalar las dependencias necesarias, en nuestro caso flask y flask_mysql: pip install flask flask_sqlalchemy pymysql
=======
3. Instalar las dependencias necesarias, en nuestro caso flask y flask_mysql: pip install flask SQLAlchemy
>>>>>>> 66dd3db439fdbd0a0290b3fcfbe93bb075a5daf6

   (env) PS C:\Users\manue\OneDrive\Escritorio\Ing_Software\server> pip install flask flask_mysql



4. Finalmente, para correr el servidor ejecutamos el archivo app.py

   (env) PS C:\Users\manue\OneDrive\Escritorio\Ing_Software\server> python ./src/app.py



En caso de tener el error de que la ejecución de scripts está deshabilitada en el sistema, realizar los siguientes pasos.
1. Abrir PowerShell como administrador y ejecutar el siguiente comando: Set-ExecutionPolicy RemoteSigned -Force
2. Ejecutar Get-ExecutionPolicy -list y verificar que la opción LocalMachine esté como RemoteSigned



SETUP REACT-NATIVE

1. npm install -g expo-cli
