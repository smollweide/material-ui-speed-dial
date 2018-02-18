// @flow
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import EditIcon from 'material-ui-icons/Edit';

import SpeedDial from '../../speed-dial';
import TemplateExample from '../TemplateExample/TemplateExample';

// types
import type {
	RenderButtonPropsType,
	RenderButtonIconPropsType,
	RenderOpenedButtonPropsType,
	RenderOpenedButtonIconPropsType,
} from '../../../material-ui-speed-dial.js.flow';
import type { StylesType, ThemeType, ClassesType } from '../../types/styles';

const styles = (theme: ThemeType): StylesType => ({
	root: {
		position: 'fixed',
		bottom: theme.spacing.unit * 2,
		right: theme.spacing.unit * 2,
	},
	button: {
		position: 'absolute',
		bottom: 0,
		right: 0,
	},
});

export type PageExampleBasicPropsType = {
	classes: ClassesType,
};

const PageExampleBasic = ({ classes }: PageExampleBasicPropsType): React$Element<*> => (
	<TemplateExample title="Basic Example">
		<SpeedDial
			className={classes.root}
			renderButton={(props: RenderButtonPropsType, propsIcon: RenderButtonIconPropsType): React$Element<*> => (
				<Button
					{...{ ...props, className: `${props.className} ${classes.button}` }}
					variant="fab"
					color="primary"
					aria-label="add"
				>
					<AddIcon {...propsIcon} />
				</Button>
			)}
			renderOpenedButton={(
				props: RenderOpenedButtonPropsType,
				propsIcon: RenderOpenedButtonIconPropsType
			): React$Element<*> => (
				<Button
					{...{ ...props, className: `${props.className} ${classes.button}` }}
					variant="fab"
					color="secondary"
					aria-label="edit"
				>
					<EditIcon {...propsIcon} />
				</Button>
			)}
		/>
	</TemplateExample>
);
PageExampleBasic.displayName = 'PageExampleBasic';

export default withStyles(styles)(PageExampleBasic);
