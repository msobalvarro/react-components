import React, { Component } from 'react'
import './estilos-search.css'

/**Componente que representa el campo de busqueda generico */
class Search extends Component {

    /**Evento que escucha cuando cambia el valor del input */
    onHandledChange = (e) => {
        e.preventDefault()

        if (this.props.onChange) {
            const { value } = e.target
            /**el prop onChange solo recibira el valor como argumento */
            this.props.onChange(value)
        }
    }


    render() {
        return (
            <input
                className="input-search focus-effect"
                placeholder="Filtrar datos"
                type="search"
                onChange={this.onHandledChange} />
        )
    }
}

export default Search