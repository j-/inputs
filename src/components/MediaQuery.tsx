import * as React from 'react';

export interface Props {
	mediaQuery: string;
	children: (matches: boolean) => React.ReactNode;
}

const MediaQuery: React.StatelessComponent<Props> = ({ mediaQuery, children }) => (
	<>
		{children(window.matchMedia(mediaQuery).matches)}
	</>
);

export default MediaQuery;
