# Parte A — Análisis de Elementos del Framework

### Tabla de Elementos de React

| Elemento de React | ¿Dónde lo usas en este problema? | ¿Por qué es el adecuado? |
| :--- | :--- | :--- |
| **Componente** | En mi proyecto creé los componentes que pidió el profe: `App` (el principal), `PeliculaCard` (para mostrar solo una película), `ListaPeliculas` (para mostrar la lista completa) y `FiltroClasificacion` (para los botones de filtro, como se me pedía). | Creo que porque así se me permitió dividir la aplicación para que fuese más manejable. |
| **JSX** | Bueno, lo usé en la sección `return` de todos mis componentes para definir la estructura visual, junto con los `div`, los `h3`, los párrafos, etc., que aprendimos en HTML al principio. | Porque JSX nos permite escribir la estructura más visual y familiar, como lo hacíamos en las primeras evaluaciones. |
| **Props** | Lo usé para pasar la información (como título, género) desde el componente `ListaPeliculas` a cada `PeliculaCard`. | Porque es la manera que yo creo que es la más eficiente para que los componentes en sí se comuniquen. Permite que el componente `PeliculaCard` sea reutilizable pero muestre datos diferentes para cada película. |
| **Estado (useState)** | Lo usé en `App.jsx` para guardar los valores. Creé 2 estados: uno para el botón de clasificación en `FiltroClasificacion` y otro para recordar el texto de la barra de búsqueda. | Porque el estado está diseñado básicamente para que los datos cambien con el tiempo, para actualizar el estado, etc. Cuando el estado cambia, React actualiza la pantalla para mostrar los cambios. |
| **Renderizado de listas (.map + key)** | Lo usé en `ListaPeliculas.jsx` porque ahí se recibía el array de películas y por cada película se creaba y mostraba un componente `PeliculaCard`. También le asigné una `key` a cada uno. | Porque creo que es la forma más eficiente en que JavaScript convierte el array de mis películas en elementos visuales, como me pedía la evaluación. La `key` ayuda a React a ser más rápido. |
| **Renderizado condicional** | Lo usé en `App.jsx` para decidir si se mostraba la lista de películas o el mensaje de que no habían películas que coincidían, si el array tenía los elementos o si estaba vacío. | Porque me permitía que la app reaccionara y mostrara la interfaz diferente según la situación. También me permitió resaltar la info importante, como las películas de hoy, que era parte importante de la evaluación. |
---

### Preguntas

**1. ¿Qué ventaja tiene dividir la cartelera en componentes en lugar de escribir todo en un solo archivo?**

Las ventajas claves son la reutilización, la organización y la legibilidad. La reutilización, porque así solo creé un componente `PeliculaCard` y lo usé para mostrar cada una de las 12 películas; si hubiese sido todo en un solo archivo, tendría que haber copiado y pegado el código 12 veces. La organización, porque así es más fácil de entender; si hubiese un error en los filtros, sabría que tendría que mirar en `FiltroClasificacion.jsx`. Y la legibilidad, porque así el código es más limpio y cada pieza cumple con su única responsabilidad, lo que se me hace más fácil para leer.

**2. ¿Qué diferencia hay entre props y estado en tu solución? Da un ejemplo concreto de cada uno tomado de esta aplicación.**

La diferencia es que los **props** son datos que un componente recibe de su padre y son de solo lectura, el hijo no los puede modificar. Sirven para pasar información hacia abajo. Un ejemplo es cuando `ListaPeliculas` le pasa el `titulo` a `PeliculaCard`. En cambio, el **estado** son datos que un componente gestiona internamente, es su propia memoria. Un ejemplo es el estado `busqueda` en `App.jsx`, que guarda lo que el usuario escribe en el buscador y se puede modificar.