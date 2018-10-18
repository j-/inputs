import * as React from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import MouseEventData from '../components/MouseEventData';

interface State {
	mousedownEvent: MouseEvent;
	mouseupEvent: MouseEvent;
	clickEvent: MouseEvent;
	dblclickEvent: MouseEvent;
}

export default class Mouse extends React.Component<BrowserRouterProps, State> {
	state: State = {
		mousedownEvent: new MouseEvent('mousedown'),
		mouseupEvent: new MouseEvent('mouseup'),
		clickEvent: new MouseEvent('click'),
		dblclickEvent: new MouseEvent('dblclick'),
	};

	componentDidMount () {
		window.addEventListener('mousedown', this.handleMousedown);
		window.addEventListener('mouseup', this.handleMouseup);
		window.addEventListener('click', this.handleClick);
		window.addEventListener('dblclick', this.handleDblclick);
	}

	componentWillUnmount () {
		window.removeEventListener('mousedown', this.handleMousedown);
		window.removeEventListener('mouseup', this.handleMouseup);
		window.removeEventListener('click', this.handleClick);
		window.removeEventListener('dblclick', this.handleDblclick);
	}

	render () {
		return (
			<div>
				<h2>Mouse</h2>

				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<div style={{ flex: 1 }}>
						<h3>Mousedown</h3>
						<MouseEventData event={this.state.mousedownEvent} />
					</div>
					<div style={{ flex: 1 }}>
						<h3>Mouseup</h3>
						<MouseEventData event={this.state.mouseupEvent} />
					</div>
					<div style={{ flex: 1 }}>
						<h3>Click</h3>
						<MouseEventData event={this.state.clickEvent} />
					</div>
					<div style={{ flex: 1 }}>
						<h3>Double click</h3>
						<MouseEventData event={this.state.dblclickEvent} />
					</div>
				</div>
			</div>
		);
	}

	private handleMousedown = (e: MouseEvent) => {
		this.setState({
			mousedownEvent: e,
		});
	};

	private handleMouseup = (e: MouseEvent) => {
		this.setState({
			mouseupEvent: e,
		});
	};

	private handleClick = (e: MouseEvent) => {
		this.setState({
			clickEvent: e,
		});
	};

	private handleDblclick = (e: MouseEvent) => {
		this.setState({
			dblclickEvent: e,
		});
	};
}
