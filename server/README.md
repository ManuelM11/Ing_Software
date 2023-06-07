Para correr el servidor de flask, primero debemos crear el entorno virtual.

1. Dentro de la carpeta del proyecto (server), ejecutar lo siguiente en el terminal: .\env\Scripts\activate
2. Installar las dependencias necesarias, en nuestro caso flask y flask_mysql: pip install flask flask_mysql


En caso de tener el error de que la ejecución de scripts está deshabilitada en el sistema, realizar los siguientes pasos.
1. Abrir PowerShell como administrador y ejecutar el siguiente comando: Set-ExecutionPolicy RemoteSigned -Force
2. Ejecutar Get-ExecutionPolicy -list y verificar que la opción LocalMachine esté como RemoteSigned
