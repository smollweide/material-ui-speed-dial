// @flow
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import styles from './TemplateExample.styles';

// types
import type { ClassesType } from './TemplateExample.styles';

export type TemplateExamplePropsType = {
	classes: ClassesType,
	title: string,
	children: React$Node,
};

const TemplateExample = ({ classes, title, children }: TemplateExamplePropsType): React$Element<*> => (
	<div>
		<div className={classes.content}>
			<div className={classes.text}>
				<Typography gutterBottom variant="headline" component="h1" color="inherit" className={classes.headline}>
					{title}
				</Typography>
			</div>
			{children}
		</div>
	</div>
);
TemplateExample.displayName = 'TemplateExample';

// $FlowFixMe
export default (withStyles(styles)(TemplateExample): React$Element<*>);
