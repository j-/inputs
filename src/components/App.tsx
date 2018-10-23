import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from '../routes/Home';
import ContextMenu from '../routes/ContextMenu';
import Input from '../routes/Input';
import MediaQueries from 'src/routes/MediaQueries';
import Motion from '../routes/Motion';
import Mouse from '../routes/Mouse';
import Orientation from '../routes/Orientation';
import Pointer from '../routes/Pointer';
import Pressure from '../routes/Pressure';
import Wheel from '../routes/Wheel';

const App: React.StatelessComponent = () => (
	<Router>
		<div className="App">
			<h1>Inputs</h1>

			<Navigation />

			<Route exact={true} path="/" component={Home} />
			<Route path="/context-menu" component={ContextMenu} />
			<Route path="/input" component={Input} />
			<Route path="/media-queries" component={MediaQueries} />
			<Route path="/motion" component={Motion} />
			<Route path="/mouse" component={Mouse} />
			<Route path="/orientation" component={Orientation} />
			<Route path="/pointer" component={Pointer} />
			<Route path="/pressure" component={Pressure} />
			<Route path="/wheel" component={Wheel} />
		</div>
	</Router>
);

export default App;
