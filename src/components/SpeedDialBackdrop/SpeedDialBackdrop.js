// @flow
import React from 'react';
import { withStyles } from 'material-ui/styles';

import styles from './SpeedDialBackdrop.styles';

// Types
import type { SpeedDialBackdropPropsType, ClassesType } from '../../../material-ui-speed-dial.js.flow';

export type SpeedDialBackdropWithStylePropsType = {
	classes: ClassesType,
};

export const SpeedDialBackdrop = ({
	className,
	classes,
	state,
	onClick,
}: SpeedDialBackdropWithStylePropsType & SpeedDialBackdropPropsType): React$Element<*> => {
	return <div onClick={onClick} className={`${classes.root} ${classes[`root--state-${state}`]} ${className}`} />;
};

// $FlowFixMe
export default (withStyles(styles)(SpeedDialBackdrop): React$Element<*>);
