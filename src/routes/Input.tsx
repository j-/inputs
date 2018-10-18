import * as React from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import NA from '../components/NA';

interface InputEvent extends UIEvent {
	data: string;
	isComposing: boolean;
	inputType: string;
}

declare var InputEvent: {
	prototype: InputEvent;
	new(typeArg: string, eventInitDict?: UIEventInit): InputEvent;
};

interface State {
	beforeinputEvent: InputEvent;
	inputEvent: InputEvent;
}

export default class Input extends React.Component<BrowserRouterProps, State> {
	state: State = {
		beforeinputEvent: new InputEvent('input'),
		inputEvent: new InputEvent('input'),
	};

	componentDidMount () {
		window.addEventListener('beforeinput', this.handleBeforeinput);
		window.addEventListener('input', this.handleInput);
	}

	componentWillUnmount () {
		window.removeEventListener('beforeinput', this.handleBeforeinput);
		window.removeEventListener('input', this.handleInput);
	}

	render () {
		return (
			<div>
				<h2>Input</h2>

				<h3>Test area</h3>

				<textarea />

				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<div style={{ flex: 1 }}>
						<h3>Input</h3>
						<dl>
							<dt><code>data</code></dt>
							<dd><code>{this.state.inputEvent.data || <NA />}&zwj;</code></dd>

							<dt><code>isComposing</code></dt>
							<dd><code>{this.state.inputEvent.isComposing ? 'true' : 'false'}</code></dd>

							<dt><code>inputType</code></dt>
							<dd><code>{this.state.inputEvent.inputType || <NA />}</code></dd>
						</dl>
					</div>
					<div style={{ flex: 1 }}>
						<h3>Before input</h3>
						<dl>
							<dt><code>data</code></dt>
							<dd><code>{this.state.beforeinputEvent.data || <NA />}&zwj;</code></dd>

							<dt><code>isComposing</code></dt>
							<dd><code>{this.state.beforeinputEvent.isComposing ? 'true' : 'false'}</code></dd>

							<dt><code>inputType</code></dt>
							<dd><code>{this.state.beforeinputEvent.inputType || <NA />}</code></dd>
						</dl>
					</div>
				</div>
			</div>
		);
	}

	private handleBeforeinput = (e: InputEvent) => {
		this.setState({
			beforeinputEvent: e,
		});
	};

	private handleInput = (e: InputEvent) => {
		this.setState({
			inputEvent: e,
		});
	};
}
