// @flow
import React from 'react';
import { withStyles } from 'material-ui/styles';

import styles from './SpeedDialItem.styles';

// Types
import type { SpeedDialItemPropsType } from '../../../material-ui-speed-dial.js.flow';
import type { ClassesType } from '../../types/styles';

export type SpeedDialWithStylePropsType = {
	classes: ClassesType,
};

export const SpeedDialItem = ({
	state,
	renderAvatar,
	children,
	className,
	classes,
}: SpeedDialWithStylePropsType & SpeedDialItemPropsType): React$Element<*> => {
	return (
		<li className={`${classes.root} ${className !== undefined ? className : ''}`}>
			<a className={`${classes.link} ${classes[`link--state-${state}`]}`}>
				{children({
					className: '',
				})}
				{renderAvatar &&
					renderAvatar({
						className: classes.avatar,
					})}
			</a>
		</li>
	);
};

// $FlowFixMe
export default (withStyles(styles)(SpeedDialItem): React$Element<*>);
