import React from 'react'
import { Link } from 'react-router-dom'
import PropType from 'prop-types'
import './estilos-button.css'

const Button = (props = { type: '', to: '' }) => {
    /**props.type definirá la clase  */
    const clase = (props.type) ? props.type : 'default'

    /**Retornamos elemento button */
    if (props.to) {
        /**Si es un boton de redireccion */
        return (
            <Link
                to={props.to}
                className={`btn hover-effect focus-effect ${clase}`}
                children={props.children} />
        )
    } else {
        /**Si es un boton con eventos */
        return (
            <button
                className={`btn hover-effect focus-effect ${clase}`}
                {...props} />
        )
    }
}

Button.prototype = {
    to: PropType.string,
    type: PropType.string,
}

export default Button