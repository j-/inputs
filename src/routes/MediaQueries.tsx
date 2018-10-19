import * as React from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import MediaQuery from '../components/MediaQuery';

const Matches: React.StatelessComponent<{ query: string }> = ({ query }) => (
	<MediaQuery mediaQuery={query}>
		{(matches) => matches ? 'true' : 'false'}
	</MediaQuery>
);

const MediaQueries: React.StatelessComponent<BrowserRouterProps> = () => (
	<div>
		<h2>Media Queries</h2>

		<h3><code>pointer</code></h3>

		<dl>
			<dt><code>none</code></dt>
			<dd><code><Matches query="(pointer: none)" /></code></dd>

			<dt><code>coarse</code></dt>
			<dd><code><Matches query="(pointer: coarse)" /></code></dd>

			<dt><code>fine</code></dt>
			<dd><code><Matches query="(pointer: fine)" /></code></dd>
		</dl>

		<h3><code>hover</code></h3>

		<dl>
			<dt><code>none</code></dt>
			<dd><code><Matches query="(hover: none)" /></code></dd>

			<dt><code>hover</code></dt>
			<dd><code><Matches query="(hover: hover)" /></code></dd>
		</dl>

		<h3><code>any-pointer</code></h3>

		<dl>
			<dt><code>none</code></dt>
			<dd><code><Matches query="(any-pointer: none)" /></code></dd>

			<dt><code>coarse</code></dt>
			<dd><code><Matches query="(any-pointer: coarse)" /></code></dd>

			<dt><code>fine</code></dt>
			<dd><code><Matches query="(any-pointer: fine)" /></code></dd>
		</dl>

		<h3><code>any-hover</code></h3>

		<dl>
			<dt><code>none</code></dt>
			<dd><code><Matches query="(any-hover: none)" /></code></dd>

			<dt><code>hover</code></dt>
			<dd><code><Matches query="(any-hover: hover)" /></code></dd>
		</dl>
	</div>
);

export default MediaQueries;
