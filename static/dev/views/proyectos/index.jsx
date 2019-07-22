import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { submenuJson } from '../../components/json/submenu-proyect'
import { routing } from '../../util'
import Search from '../../components/search'
import './estilos-proyectos.css'

class Proyectos extends Component {
    state = {
        dataJson: [],
        filtro: '',
    }

    componentWillMount() {
        this.setState({ dataJson: submenuJson })
    }

    /* Cargamos los datos del json y validamos el filtro por título y descripción */
    item = (data, index) => {
        if (
            this.state.filtro.length === 0
            || data.titulo.toLowerCase().search(this.state.filtro) > -1
            || data.descripcion.toLowerCase().search(this.state.filtro) > -1
        ) {
            let href = routing(data.titulo)
            return (
                <Link to={`/${href}`} key={index} className="container-body-grid hover-effect">
                    <h2 className="title color-subtitulo">{data.titulo}</h2>
                    <img src={`static/img/proyecto/${data.imagen}`} />
                    <p className="color-subtitulo">{data.descripcion}</p>
                </Link>
            )
        }
    }

    /* Cambiamos el estado por el valor del filtro */
    filter = (value) => {
        this.setState({
            filtro: value
        })
    }

    render() {
        return (
            <div className="container consola">
                <div className="container-header">
                    <h1 className="header color-titulo">Consola de administración</h1>
                    <Search onChange={this.filter} />
                </div>
                <div className="container-body">
                    {
                        this.state.dataJson.map(this.item)
                    }
                </div>
            </div>
        )
    }
}

export default Proyectos