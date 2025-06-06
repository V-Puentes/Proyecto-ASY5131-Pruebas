
# Pocket Center FrontEnd

En este repositorio se encuentra la descripción del proyecto "Pocket Center Webstore" para el ramo de Integración de Plataformas, este proyecto corresponde a un e-commerce con la finalidad  de digitalizar la pyme "Pocket Center"



## Herramientas

Las herramients utilizadas para el desarrollo de esta página web fueron las siguientes

### Tecnologias:
En este proyecto se hace uso de las siguientes técnologias:
-HTML: Lenguaje de marcado utilizado para definir la estructura del codigo
-CSS: Lenguaje de estilos utilizado para el apartado visual presentes en el codigo
-Javascript: Lenguaje de programación utilizado para funciones y logica del proyecto
-Json: formato de datos, permite manejar datos como el catalogo de productos

### Librerias y bibliotecas
-React: biblioteca de jasvascript para construir interfaces de usuario
-React Router DOM:biblioteca que facilita el enrutamiento (definir y anejar rutas)
-Axios: libreria de javascript para realizar operaciones HTTP
-Lucide React: libreria de iconos, para tener una interfaz mas amigable con el usuario
-React DOM: permite a React interacturar con paquetes DOM(Interfaz para HTML y XML) del navegador

### Framework
-Boostrap: para diseño de las vistas

### Otras Herramientas
-ESLint: herramienta para identificar errores de sintaxis en el codigo, se instala junto a sus plugin "react hooks" y "react refresh"
-Vite: herramienta de construccion de proyectos Javascript, se utilizó junto a React para construir y compilar el codigo
## Despliegue
para facilitar la visualización de la página este codigo se encuentra desplegado en Vercel, para visualizar el FrontEnd debe ingresar al url https://pocketcenter.vercel.app/








## Ejecución local
### Repositorio
Primero es necesario clonar el siguiente repositorio

```bash
  git clone https://github.com/V-Puentes/Proyecto-ASY5131-Frontend.git
```

### Entorno de Ejecución
Para la ejecución es necesario instalar el entorno de ejecución Node.js, en caso de no estar instalado siga las instrucciones presentes en el siguiente enlace https://nodejs.org/es/download

Se utilizará tambien la herramienta de compilación Vite, si no se encuentra instalada debe ejecutarse en el archivo raiz el siguiente codigo

```bash
npm install vite --save-dev~
```

### Dependencias
Para ejecutar este proyecto localmente es necesario tener instaladas las siguientes dependencias:

- "@paypal/react-paypal-js" version ^8.8.2
- "axios" version ^1.8.4
- "bootstrap" ^version 5.2.3
- "lucide-react" version ^0.482.0
- "react" = ^19.0.0
- "react-dom" version ^19.0.0
- "react-router-dom" version ^7.3.0

Para esto se debe abrir la terminal en la raiz del repositorio clonado y colocar el siguiente comando
```bash
npm install @paypal/react-paypal-js@^8.8.2 axios@^1.8.4 bootstrap@^5.2.3 lucide-react@^0.482.0 react@^19.0.0 react-dom@^19.0.0 react-router-dom@^7.3.0

```
### Ejecución

Finalmente, con el entorno y las dependencias ya instaladas se debe abrir la terminal la raiz del reositorio y ejecutar el siguiente comando

```bash
npm run dev
```
esto entregara un link de localhost que debe colocarse en el navegador



## Desglose de Funcionalidades

### Carpetas del proyecto
- node_modules : incluye los modulos de node utilizados en el proyecto
- public: incluye los archivos publicos de la página
- src: incluye los archivos que dan funcionalidad a la página

#### public
- productos.json: catalogo de productos
- vite.svg : logo de vite
- assets: carpeta que contiene:
    - jpg: carpeta con imagenes jpg utilizadas en la pagina
    - png: carpeta con imagenes png utilizadas en la pagina
    - react.svg : logo de react

#### src
Incluye las carpetas:
- components: detallado en el apartado de Interfaces
- context: contiene el archivo DataProvider.jsx el cual crea contexto local, es necesario para el correcto funcionamiento del carrito
- index.css: define aspecto de los elementos de la página
- App.jsx: importa componentes y crea rutas de la página
- main.jsx: une App.jsx con React

### Archivos ubicados en la carpeta raiz
Los siguientes arhivos se encuentran directamente en la carpeta raiz
- eslint.config.js: configura el eslint
- index.html: crea la aplicación e importa bootstrap
- package-lock.json: se encarga de consistencia entre las instalaciones de las dependencias
- package.json: define las dependencias del proyecto
- vite.config.js: configura vite
- README.md: este documento, donde se detalla el funcionamiento del frontend


## Rutas
Las rutas se encuentran definidas dentro del archivo App.jsx y son ls siguientes:
- "/" : lleva a la pagina de inicio
- "/contacto" :lleva a la pestaña de contacto
- "/pokemon" : filtra los productos y muestra los de la categoria pokemon
- "/yugioh": filtra los productos y muestra los de la categoria yugioh
- "/magic" : filtra los productos y muestra los de la categoria magic
- "/ofertas" : filtra los productos y muestra los de la categoria ofertas
- "/pagos" : pestaña de pago, se ingresa mediante el carrito, presionando el boton de "Proceder al pago"
- "/gracias" : pestaña que agradece elegir la tienda, aparece tras avanzar desde la pestaña de pagos
## Interfaces
- **Vista principal (`home.jsx`)**: pestaña principal del sitio
  - `bannerHero.jsx`: banner anidado en el home
- **Vista productos Pokémon (`pokemonPage.jsx`)**: pestaña que muestra los productos de la franquicia Pokémon
- **Vista productos Yu-Gi-Oh! (`yugiohPage.jsx`)**: pestaña que muestra los productos de la franquicia Yu-Gi-Oh!
- **Vista productos Magic (`magicPage.jsx`)**: pestaña que muestra los productos de la franquicia Magic
- **Vista productos en oferta (`salePage.jsx`)**: pestaña que muestra los productos en oferta
- **Vista de contacto (`contactPage.jsx`)**: pestaña con información de contacto de la empresa
- **Vista de pagos (`paymentsPage.jsx`)**: pestaña de pagos
  - `payPalcheckout.jsx`: botón de PayPal anidado en la pestaña de pagos
- **Vista de confirmación (`confirmationPage.jsx`)**: pestaña que confirma que el pago fue exitoso

###Partes de la interfaz
Junto a las intefaces están presentes otros componentes visibles en la mayoría de las pestañas:
- navbar.jsx: barra de navegación de la página
    - carritoModal.jsx:carrito anidado en el navbar
- footer: footer de la página


## Funcionalidades

En resumen, las funcionalidades implementadas fueron:

- Mostrar catalogo de productos
- Implementar carrito de compras funcionalidades
- Implementar pestaña de pagos con api de paypal
- Añadir formulario de contacto
## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

