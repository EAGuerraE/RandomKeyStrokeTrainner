# Random Key Stroke Trainer

Aplicación web simple que muestra un carácter aleatorio del layout del teclado actual y espera a que el usuario lo presione. Cuando se acierta, se muestra un nuevo carácter.

## Características
- Detecta el layout de teclado disponible en el navegador.
- Muestra un botón centrado ocupando ~70% de la ventana con el carácter actual.
- Soporta modo claro y oscuro con un interruptor.
- Botón de configuración para elegir qué tipos de caracteres practicar (mayúsculas, minúsculas, números y especiales).
- Monitor de velocidad en pulsaciones por minuto y contador de aciertos con indicador de "bien", "mal" o "nada".

## Uso
1. Abre `index.html` en tu navegador.
2. Presiona la tecla que coincide con el carácter mostrado.
3. Cambia entre tema claro y oscuro con el interruptor en la esquina superior derecha.
4. Usa el botón de configuración para incluir o excluir tipos de caracteres.
5. Observa tu contador de aciertos y la velocidad de tecleo en la parte inferior.

## Nota
La detección de layout depende de la API experimental `navigator.keyboard`. Si no está disponible, se usa un conjunto básico de letras.
