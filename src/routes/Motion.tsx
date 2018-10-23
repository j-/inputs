import * as React from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import NA from '../components/NA';

interface State {
	event: DeviceMotionEvent,
}

export default class Motion extends React.Component<BrowserRouterProps, State> {
	state: State = {
		event: new DeviceMotionEvent('devicemotionevent'),
	};

	componentDidMount () {
		window.addEventListener('devicemotionevent', this.handleDevicemotionevent);
	}

	componentWillUnmount () {
		window.removeEventListener('devicemotionevent', this.handleDevicemotionevent);
	}

	render () {
		return (
			<div>
				<h2>Motion</h2>

				<h3>Values</h3>

				<dl>
					<dt><code>x</code></dt>
					<dd><code>{this.state.event.acceleration && this.state.event.acceleration.x || <NA />}</code></dd>

					<dt><code>y</code></dt>
					<dd><code>{this.state.event.acceleration && this.state.event.acceleration.y || <NA />}</code></dd>

					<dt><code>z</code></dt>
					<dd><code>{this.state.event.acceleration && this.state.event.acceleration.z || <NA />}</code></dd>
				</dl>
			</div>
		);
	}

	private handleDevicemotionevent = (e: DeviceMotionEvent) => {
		e.preventDefault();
		this.setState({
			event: e,
		});
	};
}
