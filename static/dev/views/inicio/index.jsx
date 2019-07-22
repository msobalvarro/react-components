import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { routing } from '../../util'
import { proyectJson } from '../../components/json/index'
import { tableJson } from '../../components/json/table'
import Search from '../../components/search'
import Modal from '../../components/modal'
import Table from '../../components/Table'
import './estilos-inicio.css'
import Input from '../../components/input';

/* Componente que representa el menu principal */
class Index extends Component {
    state = {
        dataJson: [],
        dataTableJson: [],
        filtro: '',
        href: '',
    }

    /* Cambiamos los estados que serán json antes de que el componente se renderize */
    componentWillMount() {
        this.setState({
            dataJson: proyectJson,
            dataTableJson: tableJson
        })
    }

    /* Cargamos los datos del json y validamos el filtro por título y descripción */
    item = (data) => {
        if (
            this.state.filtro.length === 0
            || data.titulo.toLowerCase().search(this.state.filtro) > -1
            || data.descripcion.toLowerCase().search(this.state.filtro) > -1
        ) {
            const href = routing(data.titulo)
            return (
                <Link to={`/${href}`} className="container-body-grid hover-effect">
                    <h2 data-content={data.titulo} className="title color-subtitulo">{data.titulo}</h2>
                    <img src={`static/img/${data.imagen}`} />
                    <p data-content={data.descripcion} className="color-subtitulo">{data.descripcion}</p>
                </Link>
            )
        }
    }

    /* Cargamos los datos del json y retornamos la tabla completa */
    table = (data) => {
        const dataHeader = data.header
        const dataBody = data.body
        return (
            <Table>
                <Table.Header>
                    {dataHeader.map(this.tableHeader)}
                </Table.Header>
                <Table.Body>
                    {dataBody.map(this.tableBodyRow)}
                </Table.Body>
            </Table>
        )
    }

    /* CABECERA DE LA TABLA / Retorna los títulos de la tabla por columna */
    tableHeader = (title) => {
        return <Table.Col>{title.title_column}</Table.Col>
    }

    /* CUERPO DE LA TABLA / Retorna la información de la tabla por fila */
    tableBodyRow = (dataTableRow, index) => {
        const dataRow = dataTableRow.row
        return (
            <Table.Row state={(index % 2 != 0) ? 'true' : 'false'}> 
                {/* El props state sirve para colocar el background por filas de por medio */}
                {dataRow.map(this.tableBodyCol)}
            </Table.Row>
        )
    }

    /* CUERPO DE LA TABLA / Retorna la información de la tabla por columna */
    tableBodyCol = (dataTableCol) => {
        return <Table.Col>{dataTableCol.description_column}</Table.Col>
    }

    /* Cambiamos el estado por el valor del filtro */
    filter = (value) => {
        this.setState({ filtro: value })
    }

    /* Llamamos al método que cambia el estado del modal */
    toggleModal = () => {
        this.modal.show()
    }

    render() {
        return (
            <div className="container inicio">
                <div className="container-header">
                    <h1 className="header color-titulo">Inicio</h1>
                    <Search onChange={this.filter} />
                </div>
                <div className="container-body">
                    {
                        this.state.dataJson.map(this.item)
                    }
                    <span onClick={this.toggleModal}>Ingrese al modal</span>
                </div>

                {/* Realizando un ejemplo del Componente Table */}
                {
                    this.state.dataTableJson.map(this.table)
                }

                {/* Realizando un ejemplo del componente Modal */}
                <Modal ref={e => this.modal = e} />
            </div>
        )
    }
}

export default Index