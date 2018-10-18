import * as React from 'react';
import { BrowserRouterProps } from 'react-router-dom';

interface State {
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
					<dd><pre>{this.state.deltaX}</pre></dd>

					<dt>deltaY</dt>
					<dd><pre>{this.state.deltaY}</pre></dd>

					<dt>deltaZ</dt>
					<dd><pre>{this.state.deltaZ}</pre></dd>

					<dt>maxDeltaX</dt>
					<dd><pre>{this.state.maxDeltaX}</pre></dd>

					<dt>maxDeltaY</dt>
					<dd><pre>{this.state.maxDeltaY}</pre></dd>

					<dt>maxDeltaZ</dt>
					<dd><pre>{this.state.maxDeltaZ}</pre></dd>

					<dt>ctrlKey</dt>
					<dd><pre>{this.state.ctrlKey ? 'true' : 'false'}</pre></dd>

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
