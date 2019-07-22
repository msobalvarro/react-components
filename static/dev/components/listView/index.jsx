import React, { Component } from 'react'
import Search from '../search'
import { listJson } from '../json/list'
import './estilos-listView.css'

class List extends Component {
    state = {
        checkAll: false,
        dataListJson: [],
        background: false,
        element_previous: undefined
    }

    componentWillMount() {
        this.setState({
            dataListJson: listJson
        })
    }

    /* Seleccionamos y deseleccionamos todos los elementos de la lista */
    checkedAllList = () => {
        this.checkList.map(
            (check) => {
                check.checked = !this.state.checkAll
                this.setState({ background: !this.state.background })
            }
        )
        this.setState({ checkAll: !this.state.checkAll })
    }

    /* Seleccionamos y deseleccionamos un elemento de la lista */
    /* NOTA: Se puede seleccionar y deseleccionar el mismo elemento y se puede seleccionar un elemento
    y cuando se seleccione el otro, el elemento anterior se deselecciona */
    check = (e) => {
        const element = (e.target) ? e.target : e
        const id_input = element.id.substring(9, 10)

        /* BACKGROUND en div */
        this.divList.map((div) => {
            const id_div = div.id.substring(11, 12)
            if (id_div == id_input) {
                if (element.checked) {
                    div.style.background = "#3D3D3D"
                } else {
                    div.style.background = "#FFF"
                }

                /* Seleccionamos un elemento del input, luego seleccionamos
                otro elemento y el anterior se deselecciona */
                if (this.state.element_previous != undefined) {
                    if (this.state.element_previous != element.id) {
                        this.checkList.map((check) => {
                            if (check.id == this.state.element_previous) {
                                check.checked = false
                            }
                        })
                    }
                }
            } else {
                div.style.background = "#FFF"
            }
        })

        this.setState({ element_previous: element.id })
    }

    checkList = []
    divList = []
    /* Se construye la lista embace a la lectura del json */
    list = (data, index) => {
        return (
            <li className="li_body" id="list-li" key={index}>
                <div id={`inputCheck-${data.id}`} className="inputCheck" style={{ background: (this.state.background) ? '#3D3D3D' : '#FFF' }}
                    ref={(e) => {
                        this.divList[index] = e
                    }}>
                    <input id={`checkbox-${data.id}`}
                        data-id={`checkbox-${data.id}`}
                        className="inputCheckbox"
                        type="checkbox"
                        ref={(e) => {
                            this.checkList[index] = e
                        }}
                        onChange={this.check} />
                    <span></span>
                    <label htmlFor={`checkbox-${data.id}`} name={`checkbox-${data.id}`}></label>
                </div>
                <div className="container_info">
                    <div className="container_text">
                        <h4 className="text_1">{data.titulo}</h4>
                        <h6 className="text_2">{data.descripcion}</h6>
                    </div>
                    <div className="container_text">
                        <h4 className="text_1">{data.titulo}</h4>
                        <h6 className="text_2">{data.descripcion}</h6>
                    </div>
                </div>
            </li>
        )
    }

    render() {
        return (
            <div className="container list">
                <div className="container-header">
                    <div className="inputCheck">
                        <input id="checkboxAll"
                            className="inputCheckbox"
                            type="checkbox"
                            onChange={this.checkedAllList}
                            defaultChecked={this.state.checkAll} />
                        <span></span>
                        <label htmlFor="checkboxAll" name="checkboxAll">Seleccionar todos</label>
                    </div>
                    <Search onChange={this.filter} />
                </div>
                <div className="container-body">
                    <ul className="ul_body" id="list-ul">
                        {
                            this.state.dataListJson.map(this.list)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default List