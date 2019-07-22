# Componente Button

El componente `Button` recibe como props:

* type
* to
* children

## **Prop `type`**
Este prop recibe como parametro el tipo boton, devolviendo un estilo diferente por cada tipo de boton.

|   Tipo Boton  | Descripcion
|--             |--
|   `dafault`   | Estilo por defecto (opcional).
|   `error`     | Estilo de error, de color rojo.
|   `warning`   | Representativo por su color amarillo pálido.
|   `primary`   | Boton principal, adecuado para un boton de Ok.



## **Prop `to`**
Al colocar este prop, indica que el boton se vuelve una etiqueta `<a />` que al dar click nos redirecionará a la ruta pasada como propiedad de `to`.

**Ejemplo:**
```html
<Button to="/">Ir a Inicio</Button>
```

Este `button` nos llevará automaticamente a Index de nuestra página.


## Children
Este será el prop más importante del documento, ya que este mismo será el titulo del botón.