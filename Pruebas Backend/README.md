
# Pocket Center FrontEnd

En este repositorio se encuentra el BackEnd del proyecto "Pocket Center Webstore" para el ramo de Integración de Plataformas, este proyecto corresponde a un e-commerce con la finalidad de digitalizar la pyme "Pocket Center"

## Herramientas

Las herramientas utilizadas para el desarrollo de esta página web fueron las siguientes

### Tecnologias:
En este proyecto se hace uso de las siguientes técnologias:
- Javascript: Lenguaje de programación utilizado para funciones y logica del proyecto
- Node.js: Entorno de ejecución del BackEnd
- Express: Framework del proyecto especializado para aplicaciones web y APIs, permite manejar solicitudes HTTP, definir rutas y utilizar middleware

### Librerias y bibliotecas
- paypal/checkout-server-sdk: permite la conexión con Paypal
- Mysql2: permite conectar con bases de datos en MySql
- Axios: libreria de javascript para realizar operaciones HTTP
- Cors: Cross-Origin Resource Sharing, mecanismo de seguridad en navegadores que permite manejar permisos
- Dotenv: permite manejar variables de entorno
- Serverless-http:  biblioteca de JavaScript que permite crear y utilizar funciones sin servidor

## Despliegue
El BackEnd se encuentra desplegado en Vercel para permitir la conexion del BackEnd con el FrontEnd y la base de datos, para visualizar el BackEnd se debe ingresar al url https://pocketcenter-backend.vercel.app

## Ejecución local
No se es posible la ejecución local, dado que las variables de entorno que permiten la conexion con la base de datos se encuentran almacenadas en vercel, para ejecutar localmente es necesario crear un .env con las credenciales necesarias.

### Ejecución
Para acceder al BackEnd se debe ingresar a https://pocketcenter-backend.vercel.app en el navegador, aqui se muestran las rutas para ingresar a las APIs REST health y productos

## Desglose de APIs

- API health: indica el estado de conexion con la base de datos y el FrontEnd, se accede mediante https://pocketcenter-backend.vercel.app/api/health
- API productos: Conecta la base de datos con el BackEnd y permite visualizarla en JSON, se accede mediante https://pocketcenter-backend.vercel.app/api/productos


### Carpetas del proyecto
- api : incluye las API utilizadas en el proyecto
- db: incluye las imagenes que se utilizan para los productos, sus links son utilizados en la bdd y accedidos por el FrontEnd
- routes: incluye funciones de la API de Paypal