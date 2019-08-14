## Componente Tabla
Este componente renderiza una tabla, la estructura es basica.

Podemos importarla de la siguiente manera:

```jsx
import { Table } from 'rc-fast-components'
```
---

### Estrcutura basica
Para entender mejor de como es una estrutura basica, sabemos que tenemos 5 componentes en el componente `Table`:

* `Table`
* `Header`
* `Body`
* `Row`
* `Col`

### Table
Ya sabemos que es el componente principal, este encerrara toda la estructura de la tabla.

```jsx
<Table>
    // .. //
</Table>
```

### Header
Componente donde renderizaremos el titulos de las columnas.

```jsx
<Table>
    <Table.Header>
        // .. //
    </Table.Header>
</Table>
```

### Body
Componente donde renderizaremos el cuerpo de la tabla.

```jsx
<Table>
    <Table.Header>
        // .. //
    </Table.Header>

    <Table.Body>
        // .. //
    </Table.Body>
</Table>
```

### Row
Este componente, es el clave de que todo funcione, este es obligatorio como `children` de los componentes `Header` y `Body`.


```jsx
<Table>
    <Table.Header>
        <Table.Row>
            // .. //
        </Table.Row>
    </Table.Header>

    <Table.Body>
         <Table.Row>
            // .. //
        </Table.Row>

        <Table.Row>
            // .. //
        </Table.Row>
    </Table.Body>
</Table>
```

#### **IMPORTANTE**
___En el Componente `Header` debera llevar un solo componente `Row`___

<!-- tendremos 

| Hey, Soy la coumna 1   |      Hey, Soy la coumna 2      |
|----------|:-------------:|
| Hey, Soy la coumna 1 |  Hey, Soy la coumna 2 | -->

### Col
Este componente, es el clave de que todo funcione, este es obligatorio como `children` en el componente `Row`

```jsx
<Table>
    <Table.Header>
        <Table.Row>
            <Table.Col>
               Soy el header 1
            </Table.Col>

            <Table.Col>
               Soy el header 2
            </Table.Col>
        </Table.Row>        
    </Table.Header>

    <Table.Body>
        <Table.Row>
             <Table.Col>
                Soy la coumna 1 de la fila 1
            </Table.Col>

            <Table.Col>
                Soy la coumna 2 de la fila 1
            </Table.Col>
        </Table.Row>

        <Table.Row>
             <Table.Col>
                Soy la coumna 1 de la fila 2
            </Table.Col>

            <Table.Col>
                Soy la coumna 2 de la fila 2
            </Table.Col>
        </Table.Row>
        
    </Table.Body>
</Table>
```

tendremos una estructura similar a:

| Soy el header 1   |      Soy el header 2      |
|----------|:-------------:|
| Soy la coumna 1 de la fila 1 |  Soy la coumna 2 de la fila 1 |
| Soy la coumna 1 de la fila 2 |  Soy la coumna 2 de la fila 2 |