// @flow
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import styles from './PageHome.styles';

// types
import type { ClassesType } from './PageHome.styles';

export type PageHomePropsType = {
	classes: ClassesType,
};

const PageHome = ({ classes }: PageHomePropsType): React$Element<*> => (
	<div>
		<div className={classes.hero}>
			<div className={classes.content}>
				<div className={classes.text}>
					<Typography variant="display2" component="h1" color="inherit" gutterBottom>
						{'Material-UI Speed dial'}
					</Typography>
					<Typography variant="headline" component="h2" color="inherit" className={classes.headline}>
						{'React Component that implements a speed dial using Material-UI.'}
					</Typography>
					<Button className={classes.button} variant="raised" href="/getting-started/installation">
						{'Get Started'}
					</Button>
				</div>
			</div>
		</div>
	</div>
);
PageHome.displayName = 'PageHome';

export default withStyles(styles)(PageHome);
