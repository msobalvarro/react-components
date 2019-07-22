import React, { Component } from 'react'
import Search from '../../components/search'
import Table from '../../components/Table'
import Button from '../../components/button'
import Flatpickr from 'react-flatpickr'
import './estilos-log.css'
import Select from '../../components/select';

class Logs extends Component {
    state = {
        filter: ''
    }

    render() {
        return (
            <div className="container logs">
                <div className="header-log">
                    <h1 className="color-titulo">Log</h1>

                    <Search />
                </div>

                <div className="body-log">
                    <div className="content-filter">
                        {/* Cabecera de filtros */}
                        <div className="header-filter">
                            <h2 className="color-subtitulo text-normal">Filtros avanzados</h2>

                            <Button type="warning">Aplicar</Button>
                        </div>

                        {/* Controles para filtar */}
                        <div className="body-filter">
                            <div className="col">
                                <span className="titulo color-subtitulo">Fecha</span>

                                <div className="row">
                                    <span>Desde</span>
                                    <Flatpickr options={{ dateFormat: 'd/m/y' }} placeholder="DD/MM/YY" />
                                </div>

                                <div className="row">
                                    <span>Hasta</span>
                                    <Flatpickr options={{ dateFormat: 'd/m/y' }} placeholder="DD/MM/YY" />
                                </div>
                            </div>
                            <div className="col">
                                <span className="titulo color-subtitulo">Hora</span>
                            </div>
                            <div className="col">
                                <span className="titulo color-subtitulo">Datos generales</span>

                                <div className="row multiple">
                                    <div className="sub-col">
                                        <span className="titulo">Proyecto</span>
                                        <Select>
                                            <Select.Option value="10">Diez</Select.Option>
                                            <Select.Option value="11">Once</Select.Option>
                                            <Select.Option value="12">Doce</Select.Option>
                                        </Select>
                                    </div>

                                    {/* <div className="sub-col">
                                        <span className="titulo">Código error</span>
                                        <Select>
                                            <Select.Option value="10">Diez</Select.Option>
                                            <Select.Option value="11">Once</Select.Option>
                                            <Select.Option value="12">Doce</Select.Option>
                                        </Select>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabla que renderizará los datos */}
                    <Table>
                        <Table.Header>

                        </Table.Header>

                        <Table.Body>

                        </Table.Body>
                    </Table>
                </div>
            </div>
        )
    }
}

export default Logs