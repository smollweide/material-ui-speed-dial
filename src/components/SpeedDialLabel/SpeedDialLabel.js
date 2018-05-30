// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './SpeedDialLabel.styles';

// Types
import type { SpeedDialLabelPropsType, ClassesType } from '../../../material-ui-speed-dial.js.flow';

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
