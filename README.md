# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Eco Finder

Este repositorio cuenta con dos secciones bien demarcadas en carpetas separadas en la raíz: **frontend** / **backend**.


Para levantar el servidor de **express** y poder acceder a la API hay que posicionarse con la terminal en
la carpeta `backend` y desde ahí ejecutar:
```
npm i
npm run dev
```
Estos comandos instalan las dependencias necesaias y levantan el servidor con
`nodemon`, que se usa para reiniciar el servidor automáticamente al guardar cambios en este.
La aplicación por defecto se levanta en `http://localhost:3000`, el peurto 3000 se puede
cambiar por cualquer otro dispobible, desde el archivo `.env` en la variable `PORT` o si no se cuenta con archivo .env desde /backend/index.js en la constante `port`, el path
para acceder a la API es
```
http://localhost:3000/api
```
para obtener todos los resultados crudos, o también
```
http://localhost:3000/api/:order
```
donde order es un número de posición para traer un sólo elemento, ejemplo
```
http://localhost:3000/api/536
```

lo que devuelve un JSON como el siguiente:
```
{
    "nombre": "Carreros Cuartel Quinto",
    "categoria": "Unidad Productiva",
    "color": "verde",
    "municipio": "Moreno",
    "provincia": "Buenos Aires (AMBA)",
    "region": "Buenos Aires",
    "direccion": "Luis de Tejeda y Maximo Paz",
    "latitud": "-34.55900977",
    "longitud": "-58.81748212"
}
```
La sección del frontend, en la carpeta contigua, se debe levantar también ubicando la terminal dentro de la carpeta `/frontend` y corriendo los comandos necesarios, sin modificar el arbol de directorios o carpetaasen la raíz del proyecto `/`. Tambien ubicar dentro, el archivo `.gitignore` para exluir `node_modules` y un probable `.env`.




