// @flow
/* eslint no-inline-comments: 0*/
/* eslint flowtype/require-return-type: 0*/
import React, { Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemText from 'material-ui/List/ListItemText';
import ListSubheader from 'material-ui/List/ListSubheader';
import Divider from 'material-ui/Divider';
import { withRouter } from 'react-router';
import type { ContextRouter as ContextRouterType } from 'react-router';
import styles from './AppDrawer.styles';

import type { ClassesType } from './AppDrawer.styles';
export type AppDrawerHocPropsType = {
	classes: ClassesType,
};
export type AppDrawerOriginPropsType = {
	isOpen: boolean,
	onClose: () => void,
};
export type AppDrawerPropsType = AppDrawerHocPropsType & AppDrawerOriginPropsType;
export type AppDrawerStateType = {
	left: boolean,
};

const ListExamples = withRouter(({ history }: ContextRouterType): React$Element<*> => (
	<Fragment>
		<ListItem button onClick={() => history.push('/example-basic')}>
			<ListItemText primary="Basic" />
		</ListItem>
		<ListItem button onClick={() => history.push('/example-outer-rim-button')}>
			<ListItemText primary="Outer rim button" />
		</ListItem>
		<ListItem button onClick={() => history.push('/example-close-on-click-item')}>
			<ListItemText primary="Close onClick item" />
		</ListItem>
	</Fragment>
));
ListExamples.displayName = 'ListExamples';

const ListHeader = withRouter(({ history }: ContextRouterType): React$Element<*> => (
	<ListItem button onClick={() => history.push('/')}>
		<ListItemText primary="Material-UI speed dial" />
	</ListItem>
));
ListHeader.displayName = 'ListHeader';

const ListGettingStarted = withRouter(({ history }: ContextRouterType): React$Element<*> => (
	<ListItem button onClick={() => history.push('/getting-started')}>
		<ListItemText primary="Getting Started" />
	</ListItem>
));
ListGettingStarted.displayName = 'ListGettingStarted';

const AppDrawer = ({ isOpen, onClose, classes }: AppDrawerPropsType): React$Element<*> => (
	<Drawer open={isOpen} onClose={onClose}>
		<div tabIndex={0} role="button" onClick={onClose} onKeyDown={onClose}>
			<div className={classes.list}>
				<List component="nav">
					<ListHeader />
					<Divider />
					<ListGettingStarted />
					<ListSubheader component="div">Examples</ListSubheader>
					<ListExamples />
					<Divider />
				</List>
			</div>
		</div>
	</Drawer>
);
AppDrawer.displayName = 'AppDrawer';

// $FlowFixMe
export default (withStyles(styles)(AppDrawer): React$Element<*>);
