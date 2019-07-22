import React, { Component } from 'react'
import Search from '../../components/search'
import './estilos-perfiles.css'

class Perfiles extends Component {
    state = {
        filter: '',
        posicionPerfil: 0,
        posicionVetana: 0,

        /**Array de objetos que se renderizarán como lista de perfil, ventas y permisos */
        data: [
            {
                nombre: 'Administrador',
                permisos: [
                    {
                        ventana: 'Menus',
                        acciones: [
                            {
                                nombre: 'Agregar',
                                status: true
                            },
                            {
                                nombre: 'Eliminar',
                                status: true
                            },
                            {
                                nombre: 'Editar',
                                status: true
                            },
                        ]
                    },
                    {
                        ventana: 'Routing',
                        acciones: [
                            {
                                nombre: 'Agregar',
                                status: true
                            },
                            {
                                nombre: 'Eliminar',
                                status: true
                            },
                            {
                                nombre: 'Editar',
                                status: true
                            },
                        ]
                    },
                ]
            },
            {
                nombre: 'Lector',
                permisos: [
                    {
                        ventana: 'Menus',
                        acciones: [
                            {
                                nombre: 'Agregar',
                                status: true
                            },
                            {
                                nombre: 'Eliminar',
                                status: false
                            },
                            {
                                nombre: 'Editar',
                                status: true
                            },
                        ]
                    },
                    {
                        ventana: 'data',
                        acciones: [
                            {
                                nombre: 'Agregar',
                                status: true
                            },
                            {
                                nombre: 'Eliminar',
                                status: true
                            },
                            {
                                nombre: 'Editar',
                                status: true
                            },
                        ]
                    },
                    {
                        ventana: 'empresas',
                        acciones: [
                            {
                                nombre: 'Agregar',
                                status: true
                            },
                            {
                                nombre: 'Eliminar',
                                status: true
                            },
                            {
                                nombre: 'Editar',
                                status: true
                            },
                        ]
                    },
                ]
            },
            {
                nombre: 'Standard',
                permisos: [
                    {
                        ventana: 'Ventana nombre',
                        acciones: [
                            {
                                nombre: 'Agregar',
                                status: false
                            },
                            {
                                nombre: 'Eliminar',
                                status: false
                            },
                            {
                                nombre: 'Editar',
                                status: false
                            },
                        ]
                    }
                ]
            },
        ]
    }

    componentWillUpdate(prevProps, prevState) {
        /**Reseteamos las referencias de los items */
        this.itemsProfiles = []
        this.itemsWindows = []

        console.log(prevState.posicionVetana)
        /**Reseteamos el estado de la posicion de la ventana item seleccionada */
        if (prevState.posicionVetana != 0) {
            this.setState({ posicionVetana: 0 })
        }
    }

    /**Variable que hace referencia a todos los elementos contenedores de itemPerfil */
    itemsProfiles = []

    /**Variable que contiene referencias de todos los elementos de las ventanas */
    itemsWindows = []

    /**Cambio de estado para filtro */
    onChangeSearch = (filter = '') => {
        this.setState({ filter })
    }

    /**Metodo que devuelve cada item perfil */
    itemPerfil = (dataItem, index) => {
        const classNameActive = (index === 0) ? ' active' : ''
        return (
            <div
                className={`item color-subtitulo${classNameActive}`}
                children={dataItem.nombre}
                ref={e => this.itemsProfiles[index] = e}
                key={index}
                onClick={
                    (e) => {
                        this.setState({ posicionPerfil: index })
                        this.handledClickProfile(e)
                    }
                } />
        )
    }

    /**Metodo que devuelve los item de las ventas de permisos por cada usuario */
    itemWindow = (data, index) => {
        const active = (index === 0) ? ' active' : ''
        if (
            this.state.filter.length === 0
            || data.ventana.toLowerCase().search(this.state.filter.toLocaleLowerCase()) > -1
        ) {
            return (
                <div
                    children={data.ventana}
                    ref={e => this.itemsWindows[index] = e}
                    onClick={
                        (e) => {
                            e.preventDefault()

                            this.setState({ posicionVetana: index })
                            this.handledClickItemWindow(e.currentTarget)
                        }
                    }
                    className={`item-window color-subtitulo${active}`}
                    key={index} />
            )
        }
    }

    handledClickItemWindow = (e) => {

        if(this.itemsWindows.length > 0) {
            this.itemsWindows.map(
                (item) => {
                    item.classList.remove('active')
                }
            )
        }

        e.classList.add('active')
    }

    handledClickProfile = (e) => {
        e.preventDefault()

        this.itemsProfiles.map(
            (itemProfile, index) => {
                itemProfile.classList.remove('active')
            }
        )

        e.currentTarget.classList.toggle('active')
    }

    render() {
        const { permisos } = this.state.data[this.state.posicionPerfil]

        return (
            <div className="container perfiles-permisos">
                {/**Panel izquierdo para perfiles */}
                <aside className="panel-perfiles">
                    <h2 className="color-titulo">Perfiles</h2>

                    <div className="list">
                        {
                            /**Mapeo de todos los perfiles */
                            this.state.data.map(this.itemPerfil)
                        }
                    </div>
                </aside>

                {/**Panel principal para los permisos de los perfiles */}
                <div className="container-permisos">
                    <h2 className="color-titulo">Permisos</h2>

                    {/** Sub panel de usua */}
                    <div className="content-data">
                        <div className="col">
                            <Search onChange={this.onChangeSearch} />

                            <div className="list-window">
                                {permisos.map(this.itemWindow)}
                            </div>
                        </div>
                        <div className="col">
                            {/* {permisos[this.state.posicionVetana].ventana} */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Perfiles