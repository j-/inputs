import * as React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.StatelessComponent = () => (
	<div className="Navigation">
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/gestures">Gestures</Link></li>
			<li><Link to="/pressure">Pressure</Link></li>
		</ul>
	</div>
);

export default Navigation;
