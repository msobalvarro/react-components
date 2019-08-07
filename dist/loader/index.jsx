import React from 'react'
import './estilos-loader.css'

/** Prop que recibe dato boolean que representará si se renderiza */
const Preloader = ({ active }) => {
    if (active === true) {
        return (
            <div id="loader" />
        )
    } else {
        return null
    }
}

export default Preloader