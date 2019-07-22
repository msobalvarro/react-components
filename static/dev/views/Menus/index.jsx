import React, { Component } from 'react'
import Input from '../../components/input'
import Button from '../../components/button'
import Options from '../../../img/icon-options.svg'
import './estilos-menus.css'

/**Preview de estructura de los menús y submenus */
const Arbol = ({ menus }) => {
	return (
		<ul className="Menus__arbol-padre">
			{menus.map((item, i) => (
				<li key={i}>
					{item.titulo}
					<ul className="Menus__arbol-hijo">
						{item.items.map((child, i) => (
							<li key={i}>{child.titulo}</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	)
}

class Menus extends Component {
	state = {
		/**Nombre de menu que el usuario agregará como nuevo */
		menuTitle: '',

		/**Nombre de contenido interno de los menú */
		contentTitle: '',

		/**Estado que controla la estructura de los menus */
		menus: [
			{
				id: '1',
				titulo: 'Inicio',

				/**Contenido de la vista */
				items: [{ titulo: 'Items 1' }, { titulo: 'Items 2' }],
			},
			{
				id: '2',
				titulo: 'Contacto',
				items: [{ titulo: 'Items 1' }, { titulo: 'Items 2' }],
			},
			{
				id: '3',
				titulo: 'Ayuda',
				items: [{ titulo: 'Items 1' }, { titulo: 'Items 1' }, { titulo: 'Items 3' }, { titulo: 'Items 4' }],
			},
		],
	}

	eliminarMenu = id => {
		//borrar el elemento del state
		const menus = this.state.menus.filter(menu => menu.id !== id)
		//actualizar al state
		this.setState({
			menus: menus,
		})
		//
	}

	/**funcion crearSubMenu, sirve crear los subMenus de un menu en especifico*/
	crearSubMenu = (id = 0, subMenu) => {
		subMenu = subMenu.charAt(0).toUpperCase() + subMenu.slice(1)
		/*Se hace una copia del objeto*/

		const menusOri = this.state.menus

		/*Sacamos el menu, mediante su id*/
		const menus = menusOri.filter(menu => menu.id === id)

		//Añadimos el nuevo item, mediante el ID del Menu
		menus[0].items.push({ titulo: subMenu })

		//Pasamos el menu
		this.setState({
			menus: menusOri,
		})
	}

	createContent = (index = 0) => {
		const { contentTitle, menus } = this.state

		let pass = true

		/**Iteraccion de todo el menu */
		for (let i = 0; i < menus.length; i++) {
			/**Elemento del menu */
			const vista = menus[i].items

			/**Validamos si existe registro de items (contenido de la vista) */
			if (vista.length) {

				/**
				 * SI hay contenido, iteramos todo el contenido 
				 * */
				for (let z = 0; z < vista.length; z++) {
					/**Elemento por contenido de la vista */
					const item = vista[z]
					/**validamos si el titulo es igual al nuevo titulo */
					if (item.titulo.toLocaleLowerCase() === contentTitle.toLowerCase()) {
						pass = false
					}
				}

			}
		}

		/**Validamos si existe nombre igual en el contenido */
		if (pass) {
			let menus = Object.assign(this.state.menus)

			console.log(menus)

			menus[index].items.push({ titulo: contentTitle })

			this.setState({ menus }, this.inputaddContent[index].clear)
		} else {
			console.warn('Ya existe un elemento con ese nombre')
		}

	}

	/**Referencia de todos los input para agregar contenido en la vistas */
	inputaddContent = []


	/**funcion buscarDatos, sirve para no duplicar los nombres de los menus y submenus*/
	buscarDatos = (nuevoMenu, objeto) => {
		/*Antes de agregar cualquier menu, primero buscamos si el nombre ingresado en la caja de texto no sea similar 
			a los nombres de menu ya registrado,
			* Si es igual a 1, es que hay coincidencia
			* Si es igual a 0, es que no hay coincidencia
		*/
		const result = objeto.filter(item => item.titulo.toLowerCase() === nuevoMenu.toLowerCase())
		return result.length
	}

	/**Validacion de repocisionamiento de el contenido de la vista */
	cambiar = (id, obj) => {
		const menusOri = this.state.menus

		/*Sacamos el menu, mediante su id*/


		const menus = menusOri.filter(menu => menu.id === id)


		menus[0].items = obj.items

		this.setState({
			menus: menusOri,
		})
	}

	/** */
	crearMenu = e => {
		e.preventDefault()
		let format = new Date()
		let id = format.getHours() + format.getMinutes() + format.getSeconds()

		if (this.buscarDatos(this.state.menuTitle, this.state.menus) === 1 || this.state.menuTitle === ' ') {
			alert('Hay Menu con el mismo nombre ó El campo del input esta vacio')
		} else {
			const nuevoMenu = {
				id: id,
				titulo: this.state.menuTitle.charAt(0).toUpperCase() + this.state.menuTitle.slice(1),
				items: [],
			}

			const menus = [...this.state.menus, nuevoMenu]
			this.setState({
				menus: menus,
			})

			this.input.clear(true)
		}
	}

	subir = e => {
		e.preventDefault()
		let ref = this.select
		let posicion = ref.selectedIndex
		if (posicion > 0) this.cambiarPosicion(this.select, posicion, posicion - 1)
	}

	bajar = e => {
		e.preventDefault()
		let ref = this.select
		let posicion = ref.selectedIndex
		if (posicion != -1 && posicion < ref.length - 1) this.cambiarPosicion(ref, posicion, posicion + 1)
	}

	cambiarPosicion = (obj, num1, num2) => {
		// debugger

		let previo = this.props.item.items[num1]
		this.props.item.items[num1] = this.props.item.items[num2]
		this.props.item.items[num2] = previo

		let preVal = obj.options[num1].value
		let preTex = obj.options[num1].text
		obj.options[num1].value = obj.options[num2].value
		obj.options[num1].text = obj.options[num2].text
		obj.options[num2].value = preVal
		obj.options[num2].text = preTex
		obj.selectedIndex = num2

		this.props.cambiar(this.props.item.id, this.props.item)
	}

	itemList = ({ titulo, items, id }, index) => {
		return (
			<div className="Menus__list" key={index}>
				{/* HEADER */}
				<div className="Menus__list-titulo">
					<h2>{titulo}</h2>
					<span>
						<img src={Options} alt="Icons-options" />
					</span>
				</div>

				{/* CONTENT */}
				<div className="Menus__list-items">
					<select id={id} size="4" ref={e => (this.select = e)}>
						{
							items.map(
								(submenu, i) => (
									<option key={i}>{submenu.titulo}</option>
								)
							)
						}
					</select>
					<button onClick={this.subir}>Subir</button>
					<button onClick={this.bajar}>Bajar</button>
				</div>

				{/* CONTROLLER */}
				<div className="Menus__list-input">
					<Input
						ref={ e => this.inputaddContent[index] = e }
						placholder="Agregar sub menú"
						onChange={
							(contentTitle) => {
								this.setState({ contentTitle })
							}
						} />
					<Button type="main" onClick={
						() => {
							this.createContent(index)
						}
					}>
						Agregar
					</Button>
				</div>

				<button onClick={this.eliminarMenu}>Eliminar</button>
			</div>
		)
	}

	render() {
		return (
			<div className="Menus">
				<div className="Menus__agregar">
					<div className="Menus__list-input">
						<Input ref={e => (this.input = e)} placholder="Agregar Menú" onChange={
							(menuTitle) => {
								this.setState({
									menuTitle,
								})
							}
						} />
						<Button type="primary" onClick={this.crearMenu}>
							Agregar
						</Button>
					</div>

					<div className="Menus__Items">
						{
							this.state.menus.map(this.itemList)
						}
					</div>
				</div>
				<div className="Menus__arbol">
					<Arbol menus={this.state.menus} />
				</div>
			</div>
		)
	}
}

export default Menus
