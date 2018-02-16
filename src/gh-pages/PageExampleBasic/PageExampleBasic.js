// @flow
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import EditIcon from 'material-ui-icons/Edit';

import SpeedDial from '../../speed-dial';
import styles from './PageExampleBasic.styles';

// types
import type { ClassesType } from './PageExampleBasic.styles';
import type { RenderClosedButtonPropsType, RenderOpenedButtonPropsType } from '../../../material-ui-speed-dial.js.flow';

export type PageExampleBasicPropsType = {
	classes: ClassesType,
};

const PageExampleBasic = ({ classes }: PageExampleBasicPropsType): React$Element<*> => (
	<div>
		<div className={classes.content}>
			<div className={classes.text}>
				<Typography variant="headline" component="h1" color="inherit" className={classes.headline}>
					{'Basic Example'}
				</Typography>
			</div>
			<SpeedDial
				renderClosedButton={(props: RenderClosedButtonPropsType): React$Element<*> => (
					<Button {...props} variant="fab" color="primary" aria-label="add">
						<AddIcon />
					</Button>
				)}
				renderOpenedButton={(props: RenderOpenedButtonPropsType): React$Element<*> => (
					<Button {...props} variant="fab" color="primary" aria-label="edit">
						<EditIcon />
					</Button>
				)}
			/>
		</div>
	</div>
);
PageExampleBasic.displayName = 'PageExampleBasic';

export default withStyles(styles)(PageExampleBasic);
