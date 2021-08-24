# Vue-Portfolio
Sencilla aplicación en Vue.js 3 para realizar un portfolio usando Tailwind CSS, Iconify. Para para ello se ha usado un tema dinámico oscuro, y se ha trabajado inyectando los Metatags en cada ruta para mejorar el SEO.

[![Vue Ready](https://img.shields.io/badge/Vue.js%20v3-%20Ready-%2342b983)](https://es.vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-Ready-06b6d4)](https://tailwindcss.com/)
[![Code Style](https://img.shields.io/badge/JS%20Style-AirBnB-ff69b4)](https://airbnb.io/javascript)
[![Licence](https://img.shields.io/github/license/joseluisgs/photo-gallery-ionic)](./LICENSE)
![GitHub](https://img.shields.io/github/last-commit/joseluisgs/vue-portfolio)


![Portada](https://cms.croit.io/uploads/content/developer.svg)
- [Vue-Portfolio](#vue-portfolio)
  - [Sobre el proyecto](#sobre-el-proyecto)
    - [Tailwind CSS](#tailwind-css)
    - [Tema oscuro](#tema-oscuro)
    - [Iconify](#iconify)
    - [Store](#store)
    - [Metatag y SEO](#metatag-y-seo)
  - [Despliegue](#despliegue)
  - [Project setup](#project-setup)
    - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
    - [Compiles and minifies for production](#compiles-and-minifies-for-production)
    - [Run your unit tests](#run-your-unit-tests)
    - [Run your end-to-end tests](#run-your-end-to-end-tests)
    - [Lints and fixes files](#lints-and-fixes-files)
    - [Customize configuration](#customize-configuration)
  - [Autor](#autor)
    - [Contacto](#contacto)
  - [Licencia](#licencia)
      - [Agradecimientos](#agradecimientos)

## Sobre el proyecto
El objetivo de este proyecto es realizar una aplicación sencilla en Vue.js 3 para realizar un portfolio usando Tailwind CSS e Iconify.
A lo largo del desarrollo maquetaremos nuestro portfolio, sus secciones y componentes. 
Se ha usado un tema dinámico claro y oscuro, sin la necesidad de recargar la página.
Se ha implementado inyección dinámica de Metatags y Título de las páginas de HTML generadas en cada ruta con el objetivo de mejorar el SEO de las mismas.
Se han creado algunos componentes como los modales, la barra de navegación, footer orientados a adaptarse en cualquier dispositivo.

### Tailwind CSS
[Tailwind CSS](https://tailwindcss.com/) es un framework CSS que permite un desarrollo ágil, basado en clases de utilidad que se pueden aplicar con facilidad en el código HTML y unos flujos de desarrollo que permiten optimizar mucho el peso del código CSS.
Se ha configurado el tema para adaptarlo a las necesidades de nuestro proyecto, ya sea en colores, tipografía, resoluciones o espaciado.

![Portada](https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png)

### Tema oscuro
Se ha implementado el tema oscuro siguiendo la [documentación de TailwindCSS](https://tailwindcss.com/docs/dark-mode). Además detecta automáticamente la configuración por defecto de explorador o sistema operativo para cargar el tema según corresponda.

![Portada](https://i.ytimg.com/vi/o4Prej0wIZA/maxresdefault.jpg)

### Iconify
[Iconify](https://iconify.design/) nos ofrece poder usar iconos en nuestra aplicación de muchas fuentes disponibles, lo que nos ahorra cargar distintas fuentes de iconos y bajo demanda, es decir, no necesitamos cargar el pack completo si no solo se cargarán los iconos que necesitamos.

![Portada](https://cdn.freebiesbug.com/wp-content/uploads/2016/12/iconify-free-icons-2.png)

### Store
Se ha manejado el almacenamiento del tema usando la Store [Pinia](https://pinia.esm.dev/). Pinia es una alternativa a Vuex, pero que nos ofrece mejor compatibilidad para TypeScript usando Vue.js 3.

![Portada](https://i-cdn.embed.ly/1/display/crop?height=300&key=fd92ebbc52fc43fb98f69e50e7893c13&url=https%3A%2F%2Frepository-images.githubusercontent.com%2F222544417%2Fab2c0d09-fdb4-4fa0-b847-b6415d39322c&width=636)

### Metatag y SEO
Se ha añadido en el enrutador funciones para poder inyectar a las vistas los meta tag del HTML necesarios y con ellos mejorar el SEO.

## Despliegue
Este proyecto esta desplegado en XXX en XXXX (Por desplegar).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Autor

Codificado con :sparkling_heart: por [José Luis González Sánchez](https://twitter.com/joseluisgonsan)

[![Twitter](https://img.shields.io/twitter/follow/joseluisgonsan?style=social)](https://twitter.com/joseluisgonsan)
[![GitHub](https://img.shields.io/github/followers/joseluisgs?style=social)](https://github.com/joseluisgs)

### Contacto
<p>
  Cualquier cosa que necesites házmelo saber por si puedo ayudarte 💬.
</p>
<p>
    <a href="https://twitter.com/joseluisgonsan" target="_blank">
        <img src="https://i.imgur.com/U4Uiaef.png" 
    height="30">
    </a> &nbsp;&nbsp;
    <a href="https://github.com/joseluisgs" target="_blank">
        <img src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" 
    height="30">
    </a> &nbsp;&nbsp;
    <a href="https://www.linkedin.com/in/joseluisgonsan" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" 
    height="30">
    </a>  &nbsp;&nbsp;
    <a href="https://joseluisgs.github.io/" target="_blank">
        <img src="https://joseluisgs.github.io/favicon.png" 
    height="30">
    </a>
</p>

## Licencia

Este proyecto esta licenciado bajo licencia **MIT**, si desea saber más, visite el fichero
[LICENSE](./LICENSE) para su uso docente y educativo.

#### Agradecimientos
Este proyecto está basado en el tutorial de [Nangialai Stoman](https://vuejsexamples.com/a-simple-vue-js-tailwindcss-portfolio-theme-with-dark-mode/). Gracias por el contenido 🙂