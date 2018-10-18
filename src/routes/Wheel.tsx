import * as React from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import DeltaMode from '../components/DeltaMode';

interface State {
	wheelEvent: WheelEvent;
	maxDeltaX: number;
	maxDeltaY: number;
	maxDeltaZ: number;
	ctrlKey: boolean;
}

export default class Wheel extends React.Component<BrowserRouterProps, State> {
	state: State = {
		wheelEvent: new WheelEvent('wheel'),
		maxDeltaX: 0,
		maxDeltaY: 0,
		maxDeltaZ: 0,
		ctrlKey: false,
	};

	componentDidMount () {
		window.addEventListener('wheel', this.handleWheel, { passive: true });
	}

	componentWillUnmount () {
		window.removeEventListener('wheel', this.handleWheel);
	}

	render () {
		return (
			<div>
				<h2>Wheel</h2>

				<h3>Values</h3>

				<dl>
					<dt><code>deltaX</code></dt>
					<dd><code>{this.state.wheelEvent.deltaX}</code></dd>

					<dt><code>deltaY</code></dt>
					<dd><code>{this.state.wheelEvent.deltaY}</code></dd>

					<dt><code>deltaZ</code></dt>
					<dd><code>{this.state.wheelEvent.deltaZ}</code></dd>

					<dt><code>maxDeltaX</code></dt>
					<dd><code>{this.state.maxDeltaX}</code></dd>

					<dt><code>maxDeltaY</code></dt>
					<dd><code>{this.state.maxDeltaY}</code></dd>

					<dt><code>maxDeltaZ</code></dt>
					<dd><code>{this.state.maxDeltaZ}</code></dd>

					<dt><code>altKey</code></dt>
					<dd><code>{this.state.wheelEvent.altKey ? 'true' : 'false'}</code></dd>

					<dt><code>ctrlKey</code></dt>
					<dd><code>{this.state.wheelEvent.ctrlKey ? 'true' : 'false'}</code></dd>

					<dt><code>metaKey</code></dt>
					<dd><code>{this.state.wheelEvent.metaKey ? 'true' : 'false'}</code></dd>

					<dt><code>shiftKey</code></dt>
					<dd><code>{this.state.wheelEvent.shiftKey ? 'true' : 'false'}</code></dd>

					<dt><code>deltaMode</code></dt>
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
				maxDeltaX,
				maxDeltaY,
				maxDeltaZ,
				ctrlKey,
			};
		});
	};
}
