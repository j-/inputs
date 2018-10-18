import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from '../routes/Home';
import Gestures from '../routes/Gestures';
import Pressure from '../routes/Pressure';

const App: React.StatelessComponent = () => (
	<Router>
		<div className="App">
			<h1>Inputs</h1>

			<Navigation />

			<Route exact={true} path="/" component={Home} />
			<Route path="/gestures" component={Gestures} />
			<Route path="/pressure" component={Pressure} />
		</div>
	</Router>
);

export default App;
