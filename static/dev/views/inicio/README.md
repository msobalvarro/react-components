## Menú Principal - Inicio

Esta vista tiene como funciones:
- item()
- table()
- tableHeader()
- tableBodyRow()
- tableBodyCol()
- filter()
- toogleModal()

Antes de que el componente se renderize, se cargan los datos del json a un estado para luego ser manipulados.

    componentWillMount() {
    	this.setState({ dataJson: proyectJson })
    }

## `item()`
En esta función cargamos los datos del json y validamos el filtro por título y descripción. Es llamado por medio de un `map()`y recibe como parámetro un `data`.

## table()
Esta función construye la tabla por `header` (cabecera) y por `body` (cuerpo) llamando al componente `<Table></Table>`. Recibe como parámetro un dato `json` que trae toda la información de la tabla.

    <Table>
    	<Table.Header>....</Table.Header>
    	<Table.Body>....</Table.Body>
    </Table>
  
## tableHeader()
Retorna los títulos de la tabla por columna haciendo uso del componente Tabla y se va construyendo cada columna de la cabecera. Recibe como parámetro los títulos de cada columna de la tabla. Ejemplo:

    <Table.Col>Titulo</Table.Col>
    
## tableBodyRow() y tableBodyCol()

 - tableBodyRow retorna la información de la tabla por fila.
 - tableBodyCol retorna la información de la tabla por columna.

Para tener el cuerpo de la tabla, primero se construye la fila para luego construir las columnas y realizar el llenado de la información. Ambas reciben como parámetro un dato json.

    <Table.Row>
    	<Table.Col>....</Table.Col>
    	<Table.Col>....</Table.Col>
    	<Table.Col>....</Table.Col>
    </Table.Row>
    <Table.Row>
    	<Table.Col>....</Table.Col>
    	<Table.Col>....</Table.Col>
    	<Table.Col>....</Table.Col>
    </Table.Row>
    ...

## filter()
La función `filter()` cambia un estado por el valor del filtro. Con este método realizamos el filtro por título y descripción. Recibe como parámetro un `value`.

> **Nota:** Este método es llamado por un props `onChange` del *Componente Search* que se encarga de realizar la búsqueda de la información.

## toogleModal()
Esta función llama un método del *Componente Modal* que se encarga de cambiar el estado del modal (activar o desactivar modal).