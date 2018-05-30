// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from './TemplateExample.styles';

// types
import type { ClassesType } from './TemplateExample.styles';

export type TemplateExamplePropsType = {|
	classes: ClassesType,
	title: string,
	hrefCode: string,
	children: React$Node,
|};

const TemplateExample = ({ classes, title, children, hrefCode }: TemplateExamplePropsType): React$Element<*> => (
	<div>
		<div className={classes.content}>
			<div className={classes.text}>
				<Typography gutterBottom variant="headline" component="h1" color="inherit" className={classes.headline}>
					{title}
				</Typography>
				<Button variant="raised" href={hrefCode} target="_blank" rel="noopener noreferrer">
					View code
				</Button>
			</div>
			{children}
		</div>
	</div>
);
TemplateExample.displayName = 'TemplateExample';

// $FlowFixMe
export default (withStyles(styles)(TemplateExample): React$Element<*>);
