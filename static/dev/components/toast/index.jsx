import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './estilos-toast.css'

class Toast extends Component {
    constructor(props) {
        super(props)
        this.container = document.getElementById("root")

        this.state = {
            titulo: '',
            descripcion: '',
            show: false,
        }
    }

    componentWillUnmount() {
        this.hidden()
    }

    /** Metodo que será ejecutado en el componente padre */
    show = (titulo = '', descripcion = '') => {
        let error = false
        try {
            this.setState({ show: true }, () => {
                setTimeout(
                    () => {
                        this.toast.classList.add('show')
                    }, 200
                )
            })

            /** Comprobamos que si existe algun parametro */
            if (!titulo.length && !descripcion.length) {
                throw 'Ingresa un titulo o descripción'
            } else {
                /**Cambiamos los estados */

                if (titulo.length) {
                    this.setState({ titulo })
                }

                if (descripcion.length) {
                    this.setState({ descripcion })
                }
            }

        } catch (error) {
            alert(`Erro en el componente toast: ${error}`)
            error = true
        } finally {
            if (!error) {
                setTimeout(this.hidden, 3000)
            }
        }
    }

    /**Método que ocuta el toast, esto se ejecuta despues de cierto tiempo */
    hidden = () => {
        this.toast.style.opacity = '0'
        this.toast.style.transform = "translateX(100px)"

        setTimeout(
            () => {
                this.setState({ show: false })
            },
            500
        )
    }

    hiddenFast = () => {
        this.setState({ show: false })
    }

    render() {
        if(this.state.show) {
            return (
                ReactDOM.createPortal(
                    <div className="toast-container" onClick={this.hidden} ref={e => this.toast = e}>
                        <h2>{this.state.titulo}</h2>
    
                        <p>
                            {this.state.descripcion}
                        </p>
                    </div>,
                    this.container
                )
            )
        } else return null
    }
}

export default Toast