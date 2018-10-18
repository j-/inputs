import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from '../routes/Home';

const App: React.StatelessComponent = () => (
	<Router>
		<div className="App">
			<h1>Inputs</h1>

			<Navigation />

			<Route exact={true} path="/" component={Home} />
		</div>
	</Router>
);

export default App;
