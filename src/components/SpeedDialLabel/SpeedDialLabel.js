// @flow
import React from 'react';
import { withStyles } from 'material-ui/styles';

import styles from './SpeedDialLabel.styles';

// Types
import type { SpeedDialLabelPropsType } from '../../../material-ui-speed-dial.js.flow';
import type { ClassesType } from '../../types/styles';

export type SpeedDialLabelWithStylePropsType = {
	classes: ClassesType,
};

export const SpeedDialLabel = ({
	className,
	classes,
	text,
}: SpeedDialLabelWithStylePropsType & SpeedDialLabelPropsType): React$Element<*> => {
	return <span className={`${className} ${classes.root}`}>{text}</span>;
};

// $FlowFixMe
export default (withStyles(styles)(SpeedDialLabel): React$Element<*>);
