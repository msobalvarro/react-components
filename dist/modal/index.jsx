import React, { Component } from 'react'
import './estilos-modal.css'
import iconClose from './cerrar.svg'

class Modal extends Component {
    state = {
        active: false,
    }

    /* Cambia las acciones del modal: activar o desactivar modal */
    show = () => {
        this.setState({
            active: true
        })

        setTimeout(
            () => {
                this.modal.style.opacity = 1
            }, 100
        )

    }

    hidden = () => {
        this.modal.style.opacity = 0;

        setTimeout(
            () => {
                this.setState({ active: false })
            }, 500
        )
    }

    render() {
        if (this.state.active) {
            return (
                <div className="container_modal" ref={e => this.modal = e}>
                    <div className="container_items">
                        <div className="container_header_modal">
                            <h1 className="title_modal">Acciones</h1>
                            <div className="container_icon">
                                <img style={{ height: '15px' }} src={iconClose} onClick={this.hidden} />
                            </div>
                        </div>
                        <div className="container_body_modal">
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Modal