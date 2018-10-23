import * as React from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import NA from '../components/NA';

interface State {
	event: MouseEvent,
}

export default class ContextMenu extends React.Component<BrowserRouterProps, State> {
	state: State = {
		event: new MouseEvent('contextmenu'),
	};

	componentDidMount () {
		window.addEventListener('contextmenu', this.handleContextmenu);
	}

	componentWillUnmount () {
		window.removeEventListener('contextmenu', this.handleContextmenu);
	}

	render () {
		const { timeStamp } = this.state.event;
		return (
			<div>
				<h2>Context Menu</h2>

				<h3>Values</h3>

				<dl>
					<dt><code>timeStamp</code></dt>
					<dd><code>{timeStamp || <NA />}</code></dd>
				</dl>
			</div>
		);
	}

	private handleContextmenu = (e: MouseEvent) => {
		this.setState({
			event: e,
		});
	};
}
