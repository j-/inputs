import * as React from 'react';
import { DeltaMode as DeltaModeType, DeltaModeLabels } from '../types';

export interface Props {
	value: number;
}

const DeltaMode: React.StatelessComponent<Props> = ({ value }) => (
	<span className="DeltaMode">
		{value === DeltaModeType.PIXEL ? DeltaModeLabels[DeltaModeType.PIXEL] : null}
		{value === DeltaModeType.LINE ? DeltaModeLabels[DeltaModeType.LINE] : null}
		{value === DeltaModeType.PAGE ? DeltaModeLabels[DeltaModeType.PAGE] : null}
	</span>
);

export default DeltaMode;
