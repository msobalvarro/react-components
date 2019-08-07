import React, { Component } from 'react'
import './estilos-input.css'

/**Componente que representa el campo de busqueda generico */
class Input extends Component {
	/**Evento que escucha cuando cambia el valor del input */
	onHandledChange = e => {
		e.preventDefault()

		const { value } = e.target

		if (this.props.onChange) {
			/**el prop onChange solo recibira el valor como argumento */
			this.props.onChange(value)
		}
	}


	/** Metodo que limpia el valor del Input */
	clear = (changeState = false) => {
		this.input.value = ""

		if(changeState) {
			this.props.onChange("")
		}
	}

	render() {
		return (
			<div className="content-input focus-effect">
				<span>{this.props.placholder}</span>
				<input type="text" className="text-input" ref={e => this.input = e} onChange={this.onHandledChange} />
			</div>
		)
	}
}

export default Input
