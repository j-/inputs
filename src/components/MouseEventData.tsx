import * as React from 'react';
import MouseButton from './MouseButton';
import MouseButtons from './MouseButtons';

export interface Props {
	event: MouseEvent;
}

const TEN_SECONDS = 10 * 60 * 1000;

const MouseEventData: React.StatelessComponent<Props> = ({ event }) => (
	<dl>
		<dt><code>timeStamp</code></dt>
		<dd><code>{Math.floor(event.timeStamp) % TEN_SECONDS}</code></dd>

		<dt><code>button</code></dt>
		<dd>
			<code>{event.button}</code>
			<MouseButton value={event.button} />
		</dd>

		<dt><code>buttons</code></dt>
		<dd>
			<code>{event.buttons}</code>
			<MouseButtons value={event.buttons} />
		</dd>

		<dt><code>altKey</code></dt>
		<dd><code>{event.altKey ? 'true' : 'false'}</code></dd>

		<dt><code>ctrlKey</code></dt>
		<dd><code>{event.ctrlKey ? 'true' : 'false'}</code></dd>

		<dt><code>metaKey</code></dt>
		<dd><code>{event.metaKey ? 'true' : 'false'}</code></dd>

		<dt><code>shiftKey</code></dt>
		<dd><code>{event.shiftKey ? 'true' : 'false'}</code></dd>

		<dt><code>detail</code></dt>
		<dd><code>{event.detail}</code></dd>
	</dl>
);

export default MouseEventData;
