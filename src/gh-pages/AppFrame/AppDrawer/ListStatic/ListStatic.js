// @flow
/* eslint no-inline-comments: 0*/
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import type { ContextRouter as ContextRouterType } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import type { ClassesType } from '../../../../../material-ui-speed-dial.js.flow';

export type ListStaticPropsType = {
	classes: ClassesType,
};
export type ListStaticStateType = {
	open: boolean,
};

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing.unit * 4,
	},
});

const ListExamplesStatic = withRouter(({ history }: ContextRouterType): React$Element<*> => (
	<Fragment>
		<ListItem button onClick={() => history.push('/example-static-upwards-right-aligned')}>
			<ListItemText inset secondary="Upwards and right aligned" />
		</ListItem>
		<ListItem button onClick={() => history.push('/example-static-upwards-left-aligned')}>
			<ListItemText inset secondary="Upwards and left aligned" />
		</ListItem>
		<ListItem button onClick={() => history.push('/example-static-downwards-right-aligned')}>
			<ListItemText inset secondary="Downwards and right aligned" />
		</ListItem>
		<ListItem button onClick={() => history.push('/example-static-downwards-left-aligned')}>
			<ListItemText inset secondary="Downwards and left aligned" />
		</ListItem>
	</Fragment>
));
ListExamplesStatic.displayName = 'ListExamplesStatic';

class ListStatic extends Component<ListStaticPropsType, ListStaticStateType> {
	state = { open: false };

	handleClick = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<ListItem button onClick={this.handleClick}>
					<ListItemText primary="Static position" />
					{this.state.open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.open} timeout="auto" unmountOnExit>
					{/* $FlowFixMe */}
					<List component="div" disablePadding>
						<ListExamplesStatic />
					</List>
				</Collapse>
			</div>
		);
	}
}

export default withStyles(styles)(ListStatic);
