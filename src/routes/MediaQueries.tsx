import * as React from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import MediaQuery from '../components/MediaQuery';

const Matches: React.StatelessComponent<{ feature: string, value: string }> = ({ feature, value }) => (
	<MediaQuery mediaQuery={`(${feature}: ${value})`}>
		{(matches) => matches ? <code>{value}</code> : null}
	</MediaQuery>
);

const MediaQueries: React.StatelessComponent<BrowserRouterProps> = () => (
	<div>
		<h2>Media Queries</h2>

		<dl>
			<dt><code>hover</code></dt>
			<dd>
				<Matches feature="hover" value="none" />
				<Matches feature="hover" value="hover" />
			</dd>

			<dt><code>any-hover</code></dt>
			<dd>
				<Matches feature="any-hover" value="none" />
				<Matches feature="any-hover" value="hover" />
			</dd>

			<dt><code>pointer</code></dt>
			<dd>
				<Matches feature="pointer" value="none" />
				<Matches feature="pointer" value="coarse" />
				<Matches feature="pointer" value="fine" />
			</dd>

			<dt><code>any-pointer</code></dt>
			<dd>
				<Matches feature="any-pointer" value="none" />
				<Matches feature="any-pointer" value="coarse" />
				<Matches feature="any-pointer" value="fine" />
			</dd>
		</dl>
	</div>
);

export default MediaQueries;
