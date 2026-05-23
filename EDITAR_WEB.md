# Como modificar la web

Los archivos importantes son:

- `index.html`: textos, enlaces, imagen principal y reproductor de YouTube.
- `styles.css`: colores, tamaños, diseño y aspecto visual.
- `script.js`: menu movil, coplas cambiantes y boton de musica.

## Cambiar textos

Abre `index.html` y busca el texto que quieres cambiar. Por ejemplo:

```html
<h1>Vicente Galve Valero<br><span>"El Panollo"</span></h1>
```

Guarda el archivo y vuelve a abrir la pagina.

## Cambiar la cancion de YouTube

En `index.html`, busca `youtubePlayer`. Veras una linea parecida a esta:

```html
src="https://www.youtube.com/embed/ViYWdJ6Ic3s?autoplay=1&loop=1&playlist=ViYWdJ6Ic3s&start=54&controls=0&rel=0&enablejsapi=1"
```

Para otra cancion:

1. Copia el codigo del video de YouTube. En `https://www.youtube.com/watch?v=ViYWdJ6Ic3s`, el codigo es `ViYWdJ6Ic3s`.
2. Cambia ese codigo en `embed/ViYWdJ6Ic3s` y en `playlist=ViYWdJ6Ic3s`.
3. Cambia `start=54` si quieres que empiece en otro segundo.

## Cambiar colores

Abre `styles.css` y modifica los colores del bloque inicial:

```css
:root {
  --red: #b52128;
  --gold: #d7a83c;
  --blue: #244c66;
  --green: #466c52;
}
```

## Cambiar coplas

Abre `script.js` y edita la lista `coplas`.

Cada linea puede usar `<br>` para saltos de verso:

```js
"Primer verso<br>Segundo verso<br>Tercer verso<br>Cuarto verso."
```

## Publicar cambios en GitHub Pages

Si editas desde GitHub, cada cambio guardado actualiza la web automaticamente en unos segundos o minutos.
