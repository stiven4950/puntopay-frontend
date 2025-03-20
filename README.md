# PuntoPay - Frontend

## Descripción del Proyecto

PuntoPay es una aplicación web desarrollada en Angular que permite a los usuarios realizar recargas móviles, comprar pines de contenido y ejecutar transacciones bancarias. Este proyecto forma parte de una solución integral que consume los servicios API de Puntored a través de un backend desarrollado en Spring Boot.

El frontend proporciona una interfaz intuitiva y segura para que los usuarios interactúen con los servicios, permitiendo:
- Realizar recargas a operadores móviles.
- Comprar pines de contenido.
- Consultar transacciones previas.
- (Opcional) Implementar autenticación de usuario.

## Tecnologías Utilizadas

- **Angular 18.1.0** - Framework frontend para la construcción de la interfaz de usuario.
- **TypeScript** - Lenguaje de programación para una mejor estructuración del código.
- **Tailwind CSS** - Utilizado para el diseño y estilos.
- **RxJS** - Manejo de eventos y programación reactiva.
- **JWT Decode** - Para la decodificación de tokens JWT.

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:
- **Node.js v18.20.4** o superior.
- **Angular CLI** (Si no lo tienes, instálalo con `npm install -g @angular/cli`).

## Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio**
   ```sh
   git clone https://github.com/stiven4950/puntopay-frontend.git
   cd puntopay-frontend
   ```

2. **Instalar dependencias**
   ```sh
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**
   ```sh
   ng serve
   ```
   Esto iniciará el servidor en `http://localhost:4200/`.

## Construcción para Producción

Para generar los archivos de producción, ejecuta:
```sh
ng build
```
Los archivos compilados se encontrarán en la carpeta `dist/`.

## Contacto

Desarrollado por **Omar Stiven Rivera Rocha**  
**Ingeniero de Software**

