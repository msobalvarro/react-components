import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Axios from 'axios'
import Swal from 'sweetalert2'
import './login.css'
import Robot from './robot'

const server = "http://localhost:8888/login"

class Login extends Component {
    state = {
        usuario: '',
        clave: ''
    }

    onHanldedSubmit = (e) => {
        e.preventDefault()

        const data = { ...this.state }

        try {            
            Axios.post(server, {}, {
                auth: {
                    username: 'tda',
                    password: 'tda123'
                },
                params: data
            }).then(
                ({ data }) =>{
                    console.log(data)
                }
            ).catch(
                (reason) => {
                    throw reason
                }
            )
        } catch (error) {
            Swal.fire('Error', error, 'warning')
        }

    }

    render() {
        return (
            <Fragment>
                <h1>
                    TDA
                    <code>core</code>
                </h1>

                <form action="#" onSubmit={this.onHanldedSubmit}>
                    <div className="row robot">
                        <Robot ref={ e => this.robot = e } />
                    </div>
                    <div className="row input">
                        <span>Usuario</span>
                        <input 
                            className="textbox" 
                            required={true}
                            onChange={
                                (e) => {
                                    e.preventDefault()
                                    const usuario = e.target.value

                                    this.setState({ usuario })
                                }
                            }
                            type="text" />
                    </div>
                    <div className="row input">
                        <span>Contraseña</span>
                        <input 
                            required={true}
                            className="textbox" 
                            type="password" 
                            onChange={
                                (e) => {
                                    e.preventDefault()
                                    const clave = e.target.value

                                    this.setState({ clave })
                                }
                            }
                            onFocus={
                                () => {
                                    this.robot.hidden()
                                }
                            } 
                            onBlur={
                                () => {
                                    this.robot.show()
                                }
                            } />
                    </div>

                    <div className="row buttons">
                        <button type="submit">Acceder</button>
                    </div>
                </form>
            </Fragment>
        )
    }
}

ReactDOM.render(
    <Login />,
    document.getElementById('main')
)