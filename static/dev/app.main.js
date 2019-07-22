import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './estilos.css'
import 'flatpickr/dist/themes/airbnb.css'
import Index from './views/inicio'
import Perfiles from './views/perfiles'
import Proyectos from './views/proyectos'
import Menus from './views/menus'
import NotFound from './views/404'
import Logs from './views/logs'
import List from './components/listView'

class Main extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact path="/" component={Index} />
					<Route exact path="/proyectos" component={Proyectos} />
					<Route exact path="/perfiles-permisos" component={Perfiles} />
					<Route exact path="/historico-logs" component={Logs} />
					<Route exact path="/menus" component={Menus} />
					<Route exact path="/lista" component={List} />
					<Route component={NotFound} />
				</Switch>
			</HashRouter>
		)
	}
}

ReactDOM.render(<Main />, document.getElementById('main'))
