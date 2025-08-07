# Random Key Stroke Trainer

Aplicación web simple que muestra un carácter aleatorio del layout del teclado actual y espera a que el usuario lo presione. Cuando se acierta, se muestra un nuevo carácter.

## Características
- Detecta el layout de teclado disponible en el navegador.
- Muestra un botón centrado ocupando ~70% de la ventana con el carácter actual.
- Soporta modo claro y oscuro con un interruptor.

## Uso
1. Abre `index.html` en tu navegador.
2. Presiona la tecla que coincide con el carácter mostrado.
3. Cambia entre tema claro y oscuro con el interruptor en la esquina superior derecha.

## Nota
La detección de layout depende de la API experimental `navigator.keyboard`. Si no está disponible, se usa un conjunto básico de letras.
