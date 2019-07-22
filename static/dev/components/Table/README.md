## Componente Tabla
Este componente tiene subcomponentes hijos como:
 1. Header.
 2. Body.
 3. Row.
 4. Column.

Para acceder a estos subcomponentes se tiene que realizar el siguiente código fuera de la clase. Ejemplo:

    class  Table  extends  React.Component {
    	....
    }
    
    Table.Header = Header
    Table.Body = Body
    Table.Col = Col
    Table.Row = Row
    
    export default Table

Cada subcomponente se tiene que declarar como constantes que reciben como parámetro `prop.children`.

    const  Header  = (prop) => {
    	return (
    			<div  className="table_header">{prop.children}</div>
    	)
    }
