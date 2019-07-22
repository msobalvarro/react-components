import React, { Component } from 'react';

import './css/Opciones.css';

class Opciones extends Component {
	state = {
		visible: false,
		x: ' ',
		y: ' ',
	};

	habilitar = () => {
		this.setState({
			visible: !this.state.visible,
		});
	};

	coordenadas = e => {
		this.setState({
			x: e.clientX,
			y: e.clientY,
			visible: !this.state.visible,
		});
		// var x = e.clientX;
		// var y = e.clientY;
		var coor = 'X coords: ' + x + ', Y coords: ' + y;
		this.habilitar();
		console.log(coor);
	};

	render() {
		if (!this.state.visible) {
			return null;
		} else {
			return (
				<div className="Opciones" style={{ top: this.state.y - 20, left: this.state.x + 30 }}>
					<ul>
						<li>Subir</li>
						<li>Bajar</li>
						<li>Eliminar</li>
					</ul>
				</div>
			);
		}
	}
}

export default Opciones;
