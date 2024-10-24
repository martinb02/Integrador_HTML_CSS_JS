# Proyecto Final - Integrador_HTML_CSS_JS 

Este es un proyecto final para una tienda virtual. La tienda permite agregar productos, filtrarlos por categorías, y hacer búsquedas a través de una barra de búsqueda. Está desarrollado en HTML, CSS, y JavaScript, utilizando localStorage para la persistencia de datos en el navegador.

## Estructura del Proyecto

- **index.html**: El archivo principal que estructura la tienda virtual.
- **style.css**: Hojas de estilo para la apariencia de la tienda.
- **main.js**: Archivo JavaScript principal que maneja la lógica de la tienda.
- **src/persistence/localstorage.js**: Módulo para manejar la persistencia de los datos en localStorage.
- **src/services/categories.js**: Módulo para manejar las categorías de los productos.
- **src/services/searchBar.js**: Módulo que maneja la funcionalidad de la barra de búsqueda.
- **src/views/modal.js**: Módulo para la ventana modal que permite agregar o modificar productos.
- **src/views/store.js**: Módulo que maneja el renderizado de los productos en la tienda.

## Funcionalidades

- **Agregar productos**: Permite agregar nuevos productos a la tienda a través de una ventana modal.
- **Buscar productos**: Función de búsqueda que filtra los productos por nombre.
- **Filtrar por categorías**: Filtra los productos por las diferentes categorías disponibles.
- **Persistencia en localStorage**: Todos los productos y categorías son almacenados en localStorage, lo que permite que los datos se conserven al recargar la página.

## Instalación

Para correr el proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/proyecto-final-tienda-virtual.git
    Abre el archivo index.html en tu navegador preferido.
2. Abre el archivo index.html en tu navegador preferido.
Uso

- Al cargar la página, verás una lista de productos disponibles.
- Utiliza la barra de búsqueda para encontrar productos específicos por nombre.
- Usa el botón Agregar Producto para abrir la ventana modal y agregar un nuevo producto a la tienda.
- Filtra los productos utilizando las categorías del menú lateral.
  

Tecnologías Utilizadas:

- HTML5
- CSS3
- JavaScript
- localStorage
  

