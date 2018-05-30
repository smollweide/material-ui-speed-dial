// @flow
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import styles from './PageGettingStarted.styles';
import TemplateExample from '../TemplateExample/TemplateExample';

// types
import type { ClassesType } from './PageGettingStarted.styles';

export type PageGettingStartedPropsType = {
	classes: ClassesType,
};

export type ButtonGettingStartedPropsType = {
	className: string,
};

const PageGettingStarted = ({ classes }: PageGettingStartedPropsType): React$Element<*> => (
	<TemplateExample title="Getting Started">
		<Typography gutterBottom variant="subheading" component="h2" color="inherit" className={classes.text}>
			{'Installation'}
		</Typography>
		<Typography gutterBottom variant="body1" component="p" color="inherit" className={classes.text}>
			{'Material-UI speed dial is available as an '}
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.npmjs.com/package/smollweide-material-ui-speed-dial"
			>
				npm package
			</a>
			{'.'}
		</Typography>
		<pre className={classes.pre}>
			<code className={classes.code}>npm install --save @smollweide/material-ui-speed-dial</code>
		</pre>
	</TemplateExample>
);
PageGettingStarted.displayName = 'PageGettingStarted';

export default withStyles(styles)(PageGettingStarted);
