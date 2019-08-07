# Componente Select

este componente fue creado para reemplazar el elemento `select` nativo del navegador.

Con el comportamiento similar a un `select`, este tiene su propio componente `option` lo cual recibe un prop con el valor que queremos obtener.

**Ejemplo**

```jsx

import Select from '/component/select'


...

Render() {
    return (
        <Select>
            <Select.Option value="uno">Valor 1</Select.Option>
            <Select.Option value="dos">Valor 2</Select.Option>
            <Select.Option value="tres">Valor 3</Select.Option>
        </Select>
    )
}

```

Vemos que `value` es diferente a el texto, esto se debe que el texto será que se renderize en la pantalla, un dato entendible para el usuario.

De lo contrario **value** será un dato que se manejará por debajo de la interfaz.

### onChange

El prop `onChange` recibe como parametro un método o funcion que devuelve como argumento el `value` del **Select**

**Ejemplo**

```jsx

handledChange(data) {
    console.log(data) // Imprime el value seleccionado
}

Render() {
    return (
        <Select onChange={this.handledChange}>
            <Select.Option value="uno">Valor 1</Select.Option>
            <Select.Option value="dos">Valor 2</Select.Option>
            <Select.Option value="tres">Valor 3</Select.Option>
        </Select>
    )
}

```

### Selected

Esta prop le pertenece al componente `Option` que accedemos atraves de `Select`, este recibe un parametro `boolean` a un solo `Option`.

El `Option` que tenga este prop será el valor inicial del select.

**Ejemplo**

```jsx
<Select.Option value="uno" selected={true}>Valor 1</Select.Option>
```