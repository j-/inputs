import * as React from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import DeltaMode from '../components/DeltaMode';

interface State {
	wheelEvent: WheelEvent;
	deltaX: number;
	deltaY: number;
	deltaZ: number;
	maxDeltaX: number;
	maxDeltaY: number;
	maxDeltaZ: number;
	ctrlKey: boolean;
}

export default class Gestures extends React.Component<BrowserRouterProps, State> {
	state: State = {
		wheelEvent: new WheelEvent('wheel'),
		deltaX: 0,
		deltaY: 0,
		deltaZ: 0,
		maxDeltaX: 0,
		maxDeltaY: 0,
		maxDeltaZ: 0,
		ctrlKey: false,
	};

	componentDidMount () {
		window.addEventListener('wheel', this.handleWheel);
	}

	componentWillUnmount () {
		window.removeEventListener('wheel', this.handleWheel);
	}

	render () {
		return (
			<div>
				<h2>Gestures</h2>

				<h3>Values</h3>

				<dl>
					<dt>deltaX</dt>
					<dd><code>{this.state.deltaX}</code></dd>

					<dt>deltaY</dt>
					<dd><code>{this.state.deltaY}</code></dd>

					<dt>deltaZ</dt>
					<dd><code>{this.state.deltaZ}</code></dd>

					<dt>maxDeltaX</dt>
					<dd><code>{this.state.maxDeltaX}</code></dd>

					<dt>maxDeltaY</dt>
					<dd><code>{this.state.maxDeltaY}</code></dd>

					<dt>maxDeltaZ</dt>
					<dd><code>{this.state.maxDeltaZ}</code></dd>

					<dt>ctrlKey</dt>
					<dd><code>{this.state.ctrlKey ? 'true' : 'false'}</code></dd>

					<dt>deltaMode</dt>
					<dd>
						<code>{this.state.wheelEvent.deltaMode}</code>
						<DeltaMode value={this.state.wheelEvent.deltaMode} />
					</dd>

				</dl>
			</div>
		);
	}

	private handleWheel = (e: WheelEvent) => {
		const { deltaX, deltaY, deltaZ, ctrlKey } = e;
		const absDeltaX = Math.abs(deltaX);
		const absDeltaY = Math.abs(deltaY);
		const absDeltaZ = Math.abs(deltaZ);
		this.setState((state) => {
			let { maxDeltaX, maxDeltaY, maxDeltaZ } = state;
			maxDeltaX = Math.max(absDeltaX, maxDeltaX);
			maxDeltaY = Math.max(absDeltaY, maxDeltaY);
			maxDeltaZ = Math.max(absDeltaZ, maxDeltaZ);
			return {
				wheelEvent: e,
				deltaX,
				deltaY,
				deltaZ,
				maxDeltaX,
				maxDeltaY,
				maxDeltaZ,
				ctrlKey,
			};
		});
	};
}
