import * as React from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import NA from '../components/NA';

interface State {
	pointerdown: PointerEvent,
}

export default class Pointer extends React.Component<BrowserRouterProps, State> {
	state: State = {
		pointerdown: new PointerEvent('pointerdown'),
	};

	componentDidMount () {
		window.addEventListener('pointerdown', this.handlePointerdown);
	}

	componentWillUnmount () {
		window.removeEventListener('pointerdown', this.handlePointerdown);
	}

	render () {
		const {
			pointerId,
			width,
			height,
			pressure,
			tangentialPressure,
			tiltX,
			tiltY,
			twist,
			pointerType,
			isPrimary,
		} = this.state.pointerdown;
		return (
			<div>
				<h2>Pointer</h2>

				<h3>Values</h3>

				<h4>pointerdown</h4>

				<dl>
					<dt><code>pointerId</code></dt>
					<dd><code>{pointerId || <NA />}</code></dd>

					<dt><code>width</code></dt>
					<dd><code>{width || <NA />}</code></dd>

					<dt><code>height</code></dt>
					<dd><code>{height || <NA />}</code></dd>

					<dt><code>pressure</code></dt>
					<dd><code>{pressure || <NA />}</code></dd>

					<dt><code>tangentialPressure</code></dt>
					<dd><code>{tangentialPressure || <NA />}</code></dd>

					<dt><code>tiltX</code></dt>
					<dd><code>{tiltX || <NA />}</code></dd>

					<dt><code>tiltY</code></dt>
					<dd><code>{tiltY || <NA />}</code></dd>

					<dt><code>twist</code></dt>
					<dd><code>{twist || <NA />}</code></dd>

					<dt><code>pointerType</code></dt>
					<dd><code>{pointerType || <NA />}</code></dd>

					<dt><code>isPrimary</code></dt>
					<dd><code>{isPrimary == null ? <NA /> : isPrimary ? 'true' : 'false'}</code></dd>
				</dl>
			</div>
		);
	}

	private handlePointerdown = (e: PointerEvent) => {
		this.setState({
			pointerdown: e,
		});
	};
}
