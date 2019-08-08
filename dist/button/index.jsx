import React, { Purecomponent } from 'react'
import PropType from 'prop-types'
import './estilos-button.css'

/**Componente que reemplaza el boton defecto del navegador */
class Button extends Purecomponent {

    render() {
        /**props.type definirá la clase  */
        const clase = (this.props.type) ? this.props.type : 'default'

        /**Retornamos elemento button */
        if (this.props.href) {
            /**Si es un boton de redireccion */
            return (
                <a
                    href={this.props.href}
                    className={`btn hover-effect focus-effect ${clase}`}
                    children={this.props.children} />
            )
        } else {
            /**Si es un boton con eventos */
            return (
                <button
                    className={`btn hover-effect focus-effect ${clase}`}
                    {...this.props} />
            )
        }        
    }

}

Button.prototype = {
    href: PropType.string,
    type: PropType.string,
}

export default Button