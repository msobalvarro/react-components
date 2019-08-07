import React, { PureComponent } from 'react'
import Typed from 'typed.js'
import './estilos-404.css'

class NotFound extends PureComponent {
    componentDidMount() {
        new Typed('#typed-404', {
            strings: ['404', 'Page not found'],
            loop: true,
            cursorChar: '_',
            backSpeed: 200,
            typeSpeed: 200,
            backDelay: 3000,
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="header-not-found">
                    <h1 className="color-titulo typed-404" id="typed-404" />
                </div>
            </React.Fragment>
        )
    }
}

export default NotFound