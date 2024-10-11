1.-Proyecto 1:
Aplicacion de encuestas en tiempo real Desarrollar una app con react que consuma una api hecha con express,mongo y socket.io para crear y compartir encuestas o trivias y poder ver los resultados en tiempo real. Tambien s epodra ver la informacion en graficas(recomendado[chartjs](http://www.chartjs.org/))
2.-Proyecto 2:
Plataforma de renta y venta de inmuebles Desarrollar una app con react que consuma una api con express y mongo para rentar o vender propiedades Se podra ver un catalogo de las propiedades sus datos y el precio Los usuarios tambien podran anunciar sus propiedades

Proyecto1:APP DE ENCUESTAS

API:

MODELS:
-User
-Poll
RUTAS:
/register POST
/login POST
/poll/:id GET
/poll/:id POST
/poll/:idcharts GET
SOCKET Tiempo real
Proyecto2

FRONT
/signup
/login
/create-poll
/poll/:id

PROYECTO2 :RENTA Y VENTA DE PROPIEDADES

API:
/register POST
/login POST
/property POST
/properties GET
/properties UPDATE
/properties/:id GET
/properties/:id/buy p rent PUT
/properties/history

FRONT

PRIMERA ENTREGA 09/10/2024/
1.-Repositorio de Back con ruta/ para probar que sirva express
2.-Repositorio del front hecho con vite sin el boilerplite de vite
3.-Base de datos en mongo atlas en backend URI guardado en variable de entorno .env
4.-Instalado express,mongoose,dontev
5.-front dos formulario y para register
