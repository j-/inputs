import * as React from 'react';
import { ButtonType, ButtonTypeLabels } from '../types';

export interface Props {
	value: number;
}

const MouseButton: React.StatelessComponent<Props> = ({ value }) => (
	<span className="MouseButton">
		{value === ButtonType.PRIMARY ? ButtonTypeLabels[ButtonType.PRIMARY] : null}
		{value === ButtonType.SECONDARY ? ButtonTypeLabels[ButtonType.SECONDARY] : null}
		{value === ButtonType.AUXILIARY ? ButtonTypeLabels[ButtonType.AUXILIARY] : null}
		{value === ButtonType.BACK ? ButtonTypeLabels[ButtonType.BACK] : null}
		{value === ButtonType.FORWARD ? ButtonTypeLabels[ButtonType.FORWARD] : null}
	</span>
);

export default MouseButton;
