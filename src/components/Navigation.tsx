import * as React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.StatelessComponent = () => (
	<div className="Navigation">
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/input">Input</Link></li>
			<li><Link to="/media-queries">Media Queries</Link></li>
			<li><Link to="/mouse">Mouse</Link></li>
			<li><Link to="/orientation">Orientation</Link></li>
			<li><Link to="/pressure">Pressure</Link></li>
			<li><Link to="/wheel">Wheel</Link></li>
		</ul>
	</div>
);

export default Navigation;
