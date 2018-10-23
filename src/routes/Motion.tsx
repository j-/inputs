import * as React from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import NA from '../components/NA';

interface State {
	event: DeviceMotionEvent,
}

export default class Motion extends React.Component<BrowserRouterProps, State> {
	state: State = {
		event: new DeviceMotionEvent('devicemotion'),
	};

	componentDidMount () {
		window.addEventListener('devicemotion', this.handleDevicemotion);
	}

	componentWillUnmount () {
		window.removeEventListener('devicemotion', this.handleDevicemotion);
	}

	render () {
		const { interval, acceleration, accelerationIncludingGravity, rotationRate } = this.state.event;
		return (
			<div>
				<h2>Motion</h2>

				<h3>Values</h3>

				<dl>
					<dt><code>interval</code></dt>
					<dd><code>{interval || <NA />}</code></dd>
				</dl>

				<h4>Acceleration</h4>

				<dl>
					<dt><code>x</code></dt>
					<dd><code>{acceleration && acceleration.x || <NA />}</code></dd>

					<dt><code>y</code></dt>
					<dd><code>{acceleration && acceleration.y || <NA />}</code></dd>

					<dt><code>z</code></dt>
					<dd><code>{acceleration && acceleration.z || <NA />}</code></dd>
				</dl>

				<h4>Acceleration (including gravity)</h4>

				<dl>
					<dt><code>x</code></dt>
					<dd><code>{accelerationIncludingGravity && accelerationIncludingGravity.x || <NA />}</code></dd>

					<dt><code>y</code></dt>
					<dd><code>{accelerationIncludingGravity && accelerationIncludingGravity.y || <NA />}</code></dd>

					<dt><code>z</code></dt>
					<dd><code>{accelerationIncludingGravity && accelerationIncludingGravity.z || <NA />}</code></dd>
				</dl>

				<h4>Rotation rate</h4>

				<dl>
					<dt><code>alpha</code></dt>
					<dd><code>{rotationRate && rotationRate.alpha || <NA />}</code></dd>

					<dt><code>beta</code></dt>
					<dd><code>{rotationRate && rotationRate.beta || <NA />}</code></dd>

					<dt><code>gamma</code></dt>
					<dd><code>{rotationRate && rotationRate.gamma || <NA />}</code></dd>
				</dl>
			</div>
		);
	}

	private handleDevicemotion = (e: DeviceMotionEvent) => {
		this.setState({
			event: e,
		});
	};
}
