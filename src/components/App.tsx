import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from '../routes/Home';
import Input from '../routes/Input';
import Mouse from '../routes/Mouse';
import Pressure from '../routes/Pressure';
import Wheel from '../routes/Wheel';

const App: React.StatelessComponent = () => (
	<Router>
		<div className="App">
			<h1>Inputs</h1>

			<Navigation />

			<Route exact={true} path="/" component={Home} />
			<Route path="/input" component={Input} />
			<Route path="/mouse" component={Mouse} />
			<Route path="/pressure" component={Pressure} />
			<Route path="/wheel" component={Wheel} />
		</div>
	</Router>
);

export default App;
