// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './SpeedDialItem.styles';

// Types
import type { SpeedDialItemPropsType, ClassesType } from '../../../material-ui-speed-dial.js.flow';

export type SpeedDialWithStylePropsType = {
	classes: ClassesType,
};

export const SpeedDialItem = ({
	state,
	renderAvatar,
	children,
	className,
	preset,
	classes,
	onClick,
}: SpeedDialWithStylePropsType & SpeedDialItemPropsType): React$Element<*> => {
	return (
		<li className={`${classes.root} ${className !== undefined ? className : ''}`}>
			<a className={`${classes.link} ${classes[`link--state-${state}`]}`} onClick={onClick}>
				{children({
					state,
					className: `${preset.label}`,
				})}
				{renderAvatar &&
					renderAvatar({
						state,
						className: `${classes.avatar} ${preset.avatar}`,
					})}
			</a>
		</li>
	);
};

// $FlowFixMe
export default (withStyles(styles)(SpeedDialItem): React$Element<*>);
