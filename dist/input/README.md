# Componente Input

Componente que tiene un simple `prop`, este prop es llamado **onChange**, en este prop pasamos por argumento un método o funcion, esta se ejecutara cada vez que el usuario escriba en el input.

### onChange
>El metodo que pasamos como argumentos, recibe un solo parametro.

Este parametro es el string escrito por el usuario, Ejemplo:

```jsx

const onHandledChange = (data) => {
    console.log(data) // Imprimos en consola
}

<Input onChange={onHandledChange} />

```

La funcion `onHandledChange` se ejecutara e imprimirá en consola el dato escrito por el usuario.

## clear
> El método `clear()` se encarga de limpiar el campo input.

Para poder utilizar el método, primero debemos de crear una referencia al componente `Input` en el render.

```jsx
<Input onChange={onHandledChange} ref={e => this.input = e} />
```

Con esta referencia podremos acceder al método `clear`

```js
componentWillUpdate() {
    this.input.clear()
}

```
Automaticamente el campo no tendrá ningun valor.

**Ejecución de `onChange`**

Cuando limpiamos el campo con: 

```js
this.input.clear()
```

Podeos pasar un parametro `boolean`, `true` o `false`, esto le indicará al metodo si ejecutará la método `onHandledChange` para poder imprimir consola.

El dato puede dejarse en `null, undefined` y se tomará como falso.