import React, { Component } from 'react'
import './estilos-table'

/* Cabecera de la tabla */
const Header = (prop) => {
    return (
        <div className="table_header">{prop.children}</div>
    )
}

/* Cuerpo de la tabla */
const Body = (prop) => {
    return (
        <div className="table_body">{prop.children}</div>
    )
}

/* Columnas de la tabla */
const Col = (prop) => {
    return (
        <div className="table_col">{prop.children}</div>
    )
}

/* Filas de la tabla */
const Row = (prop) => {
    if (prop.state === "true") {
        return (
            <div className="table_row interline">{prop.children}</div>
        )
    }
    else {
        return (
            <div className="table_row">{prop.children}</div>
        )
    }
}

class Table extends Component {   
    render() {
        return (
            <div className="table">
                {
                    this.props.children
                }
            </div>
        )
    }
}

Table.Header = Header
Table.Body = Body
Table.Col = Col
Table.Row = Row

export default Table