import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropType from 'prop-types'
import './estilos-select.css'

const Option = ({ children }) => {
    <div className="option">{children}</div>
}

/**Componente que remplaza el select nativo del navegador por defecto */
class Select extends Component {
    state = {
        text: 'Seleccionar dato',
        items: [],
        showItems: false,
        dataSelect: {},
    }

    componentWillMount() {
        /**Comprobamos que si hay Options */
        if (this.props.children && this.props.children.length > 0) {
            /**Variable que almacenará los props del componente Option */
            let items = []

            this.props.children.map(
                ({ props }) => {
                    if (props != undefined) {
                        items.push(props)

                        /**Verificamos si algún elemento este marcado por defecto */
                        if (props.selected) {
                            this.setState({
                                dataSelect: {
                                    value: props.value,
                                    children: props.children
                                }
                            })
                        }
                    }
                }
            )

            this.setState({ items })
        }
    }

    /**Render de todas las opciones del select */
    renderItem = ({ value, children }, index) => {

        return (
            <div className="item" key={index} onClick={
                () => {
                    this.setState({ value, dataSelect: { value, children } })
                    this.onHandledChange(value)
                    this.hiddenItems()
                }
            } children={children} />
        )
    }

    /**Muestra la ventana modal */
    showItems = () => {
        if (this.state.items.length > 0) {
            this.setState({ showItems: true })

            setTimeout(
                () => {
                    this.backgroundModal.style.opacity = 1
                }, 100
            )
        }
    }

    /**Cierre de la ventana modal items */
    hiddenItems = () => {
        this.backgroundModal.style.opacity = 0

        setTimeout(
            () => {
                this.setState({ showItems: false })
            }, 500
        )
    }

    /**
     * Metodo que se invica al cambiar el select
     * Recibe como parametro el value de la opcion
     * y la ejecuta el onChange pasando el argumento 
     * */
    onHandledChange = (data = "") => {
        if (this.props.onChange) {
            this.props.onChange(data)
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="selection" onClick={this.showItems}>

                    {
                        /** 
                         * Creamos una condicial que si no tiene opciones 
                         * renderizar el mensaje de que no hay datos
                         */

                        (this.state.items.length === 0)
                            ? <span className="empty">No hay datos</span>

                            : <span className="text">
                                {
                                    (this.state.dataSelect.children) ? this.state.dataSelect.children : this.state.text
                                }
                            </span>

                    }
                </div>

                {
                    (this.state.showItems) &&
                    ReactDOM.createPortal(
                        <div className="background-select" ref={
                            (e) => {
                                /**Referencia de la ventana modal */
                                this.backgroundModal = e
                            }
                        }>
                            <div className="content">
                                {
                                    this.state.items.map(this.renderItem)
                                }
                            </div>
                        </div>,
                        document.getElementById('root')
                    )
                }
            </React.Fragment>
        )
    }
}

Option.prototype = {
    value: PropType.string.isRequired,
    selected: PropType.bool
}

// Select.prototype = {
//     onChange: PropType.func
// }

/**Option es un componente hijo de Select para definir las opciones */
Select.Option = Option

export default Select