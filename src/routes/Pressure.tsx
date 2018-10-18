import * as React from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import NA from '../components/NA';

interface State {
	force: number | null;
	max: number;
	forceAtForceMouseDown: number | null,
	forceAtMouseDown: number | null,
}

export default class Pressure extends React.Component<BrowserRouterProps, State> {
	state: State = {
		force: null,
		max: 0,
		forceAtForceMouseDown: MouseEvent['WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN'],
		forceAtMouseDown: MouseEvent['WEBKIT_FORCE_AT_MOUSE_DOWN'],
	};

	componentDidMount () {
		window.addEventListener('webkitmouseforcechanged', this.handleWebkitmouseforcechanged);
	}

	componentWillUnmount () {
		window.removeEventListener('webkitmouseforcechanged', this.handleWebkitmouseforcechanged);
	}

	render () {
		return (
			<div>
				<h2>Pressure</h2>

				<h3>Values</h3>

				<dl>
					<dt>Force (current)</dt>
					<dd><pre>{this.state.force || <NA />}</pre></dd>

					<dt>Force (max)</dt>
					<dd><pre>{this.state.max || <NA />}</pre></dd>

					<dt>Force at mouse down</dt>
					<dd><pre>{this.state.forceAtMouseDown || <NA />}</pre></dd>

					<dt>Force at force mouse down</dt>
					<dd><pre>{this.state.forceAtForceMouseDown || <NA />}</pre></dd>
				</dl>
			</div>
		);
	}

	private handleWebkitmouseforcechanged = (e: MouseEvent) => {
		e.preventDefault();
		const force = e['webkitForce'] || null;
		this.setState((state) => ({
			force,
			max: Math.max(state.max, force),
		}));
	};
}
