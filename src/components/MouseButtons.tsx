import * as React from 'react';
import { ButtonsType, ButtonsTypeLabels } from '../types';

export interface Props {
	value: number;
}

const MouseButtons: React.StatelessComponent<Props> = ({ value }) => (
	<span className="MouseButtons">
		{value === ButtonsType.UNINITIALIZED ? ButtonsTypeLabels[ButtonsType.UNINITIALIZED] : null}
		{value & ButtonsType.PRIMARY ? ButtonsTypeLabels[ButtonsType.PRIMARY] : null}
		{value & ButtonsType.SECONDARY ? ButtonsTypeLabels[ButtonsType.SECONDARY] : null}
		{value & ButtonsType.AUXILIARY ? ButtonsTypeLabels[ButtonsType.AUXILIARY] : null}
		{value & ButtonsType.BACK ? ButtonsTypeLabels[ButtonsType.BACK] : null}
		{value & ButtonsType.FORWARD ? ButtonsTypeLabels[ButtonsType.FORWARD] : null}
	</span>
);

export default MouseButtons;
