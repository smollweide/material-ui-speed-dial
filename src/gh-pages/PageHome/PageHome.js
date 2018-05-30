// @flow
/* eslint flowtype/require-return-type: 0*/
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';
import type { RouterHistory as RouterHistoryType } from 'react-router';

import styles from './PageHome.styles';

// types
import type { ClassesType } from './PageHome.styles';

export type PageHomePropsType = {
	classes: ClassesType,
};

export type ButtonGettingStartedPropsType = {
	className: string,
	history: RouterHistoryType,
};

const ButtonGettingStarted = withRouter(({ className, history }: ButtonGettingStartedPropsType): React$Element<*> => (
	<Button className={className} variant="raised" onClick={() => history.push('/getting-started')}>
		{'Get Started'}
	</Button>
));

const PageHome = ({ classes }: PageHomePropsType): React$Element<*> => (
	<div>
		<div className={classes.hero}>
			<div className={classes.content}>
				<div className={classes.text}>
					<Typography variant="display2" component="h1" color="inherit" gutterBottom>
						{'Material-UI speed dial'}
					</Typography>
					<Typography variant="headline" component="h2" color="inherit" className={classes.headline}>
						{'Components, that implements material design speed dial for material-ui v1'}
					</Typography>
					<ButtonGettingStarted className={classes.button} />
				</div>
			</div>
		</div>
	</div>
);
PageHome.displayName = 'PageHome';

export default withStyles(styles)(PageHome);
