import * as React from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import NA from '../components/NA';

interface State {
	event: DeviceOrientationEvent,
}

export default class Orientation extends React.Component<BrowserRouterProps, State> {
	state: State = {
		event: new DeviceOrientationEvent('deviceorientation'),
	};

	componentDidMount () {
		window.addEventListener('deviceorientation', this.handleDeviceorientation);
	}

	componentWillUnmount () {
		window.removeEventListener('deviceorientation', this.handleDeviceorientation);
	}

	render () {
		const { absolute, alpha, beta, gamma } = this.state.event;
		return (
			<div>
				<h2>Orientation</h2>

				<h3>Values</h3>

				<dl>
					<dt><code>absolute</code></dt>
					<dd><code>{absolute || <NA />}</code></dd>

					<dt><code>alpha</code></dt>
					<dd><code>{alpha || <NA />}</code></dd>

					<dt><code>beta</code></dt>
					<dd><code>{beta || <NA />}</code></dd>

					<dt><code>gamma</code></dt>
					<dd><code>{gamma || <NA />}</code></dd>
				</dl>
			</div>
		);
	}

	private handleDeviceorientation = (e: DeviceOrientationEvent) => {
		this.setState({
			event: e,
		});
	};
}
