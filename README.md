# My App

## Descripción

Este proyecto es una aplicación web desarrollada con **Next.js**. La aplicación permite buscar y mostrar usuarios de GitHub, utilizando la API de GitHub y haciendo uso de **React Query** para la gestión de datos asíncronos. La interfaz está construida con **Material UI**, lo cual proporciona una experiencia visual atractiva y moderna.

## Características

- **Búsqueda de usuarios de GitHub**: Permite a los usuarios buscar perfiles de GitHub utilizando la API pública.
- **Gestión de estado asíncrono**: Utilizamos **@tanstack/react-query** para gestionar las llamadas a la API y el almacenamiento en caché de los datos.
- **Interfaz moderna**: Implementada con **Material UI** y componentes personalizados.
- **Debounce en búsqueda**: El componente de búsqueda utiliza **lodash.debounce** para optimizar las consultas, evitando llamadas innecesarias a la API.

## Tecnologías Utilizadas

- **Next.js**: Framework React para la creación de aplicaciones web rápidas y escalables.
- **React**: Biblioteca JavaScript para construir interfaces de usuario.
- **Material UI**: Biblioteca de componentes para React que facilita la creación de interfaces modernas y accesibles.
- **React Query**: Para la gestión de datos asíncronos y el almacenamiento en caché.
- **Jest y React Testing Library**: Para realizar pruebas unitarias y de integración, asegurando la calidad del código.
- **Zustand**: Biblioteca de gestión del estado global.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone <URL del repositorio>
   cd my-app
   ```

2. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

3. Ejecuta la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Scripts Disponibles

- **`npm run dev`**: Inicia el servidor de desarrollo.
- **`npm run build`**: Construye la aplicación para producción.
- **`npm run start`**: Inicia la aplicación en modo producción.
- **`npm run lint`**: Ejecuta ESLint para analizar el código en busca de errores y advertencias.
- **`npm run test`**: Ejecuta las pruebas con **Jest**.
- **`npm run test:watch`**: Ejecuta las pruebas en modo observación, para facilitar el desarrollo.

## Pruebas

Este proyecto utiliza **Jest** y **React Testing Library** para realizar pruebas unitarias e integrales. Los tests se encuentran en la carpeta `__tests__` dentro del proyecto. Puedes ejecutarlos utilizando:

```bash
npm run test
```

## Arquitectura del Proyecto

La aplicación sigue una estructura basada en componentes reutilizables. Los componentes principales están organizados en las carpetas:

- **`components`**: Componentes reutilizables como `Searcher`, `UserCard`, `SearchResults`.
- **`pages`**: Páginas de Next.js que corresponden a las rutas del sitio.
- **`querys`**: Contiene hooks personalizados para hacer las consultas a la API de GitHub.

## Dependencias Clave

- **@mui/material**: Para componentes visuales y diseño responsive.
- **@heroicons/react**: Iconos SVG de fácil uso para React.
- **lodash.debounce**: Para reducir la frecuencia de ejecución de la búsqueda.
- **axios**: Cliente HTTP para realizar solicitudes a la API de GitHub.
- **ts-node** y **typescript**: Para facilitar el desarrollo en TypeScript.

---

¡Gracias por revisar este proyecto! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.
