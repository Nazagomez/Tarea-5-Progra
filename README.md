# Tarea 5 - Sistema de Biblioteca

Aplicación web desarrollada con **Vue.js 3**, **PrimeVue** y **PrimeFlex** que implementa el diseño del Sistema de Biblioteca solicitado en la Tarea 5 de Programación Web.

## URL de publicación

**Netlify:** https://tarea5-biblioteca.netlify.app

> Sustituye esta URL por la dirección real después de desplegar el proyecto en [Netlify](https://www.netlify.com/). Pasos recomendados:
> 1. Sube el repositorio a GitHub.
> 2. En Netlify, crea un nuevo sitio conectado al repositorio.
> 3. Configura el comando de build: `npm run build`
> 4. Configura el directorio de publicación: `dist`

## Descripción

La aplicación muestra un panel lateral con acordeón para navegar entre:

- Autores
- Libros
- Editoriales
- Clasificación

El panel principal utiliza pestañas para mostrar el detalle de:

- **Autor:** formulario con nombre, ocupación, nacionalidad, géneros, seudónimo y tabla de libros.
- **Libro:** formulario con nombre, ISBN, año, edición, editorial y autores.
- **Editorial:** diseño propio con datos de la editorial, estadísticas y tabla de libros publicados.

Los datos son estáticos (mock data) y la aplicación no persiste información en base de datos.

## Tecnologías

- Vue.js 3
- PrimeVue 4
- PrimeFlex
- Vite

## Instalación y ejecución local

```bash
npm install
npm run dev
```

Abrir en el navegador: http://localhost:5173

## Build de producción

```bash
npm run build
npm run preview
```

## Capturas de pantalla

Las capturas de cada sección se encuentran en la carpeta `capturas/`:

- `01-detalle-libro.png`
- `02-detalle-autor.png`
- `03-detalle-editorial.png`
- `04-clasificacion.png`

## Autor

Tarea 5 - Programación Web
