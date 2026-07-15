# Incorporar Tailwind al proyecto

<https://tailwindcss.com/docs/installation/using-vite>

## Instalamos librería

```sh
npm install tailwindcss @tailwindcss/vite
```

## Creamos en la raíz del proyecto el archivo vite.config.js

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
``` 

## Agregamos la hoja de estilos en un archivo css

> src/style.css

```css
@import "tailwindcss";
```

## Detener el servidor de desarrollo y volver a arrancarlo
Esto es necesario porque el vite.config.js si no existe no lo lee vite.


