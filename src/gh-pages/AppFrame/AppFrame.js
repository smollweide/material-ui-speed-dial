// @flow
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';

import GitHubIcon from '../GitHub/GitHub';
import AppDrawer from './AppDrawer/AppDrawer';
import styles from './AppFrame.styles';

// types
import type { ClassesType } from './AppFrame.styles';
import type { PaletteTypeEnumType, DirectionEnumType } from '../App/App';

export type AppFramePropsType = {
	classes: ClassesType,
	children: React$Node,
	paletteType: PaletteTypeEnumType,
	direction: DirectionEnumType,
	onTogglePaletteType: () => void,
	onToggleDirection: () => void,
};
export type AppFrameStateType = {
	isDrawerOpen: boolean,
};

class AppFrame extends Component<AppFramePropsType, AppFrameStateType> {
	static displayName = 'AppFrame';

	state = {
		isDrawerOpen: false,
	};

	handleToggleDrawer = () => {
		this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
	};

	render(): React$Element<*> {
		const { classes, children } = this.props;
		const title = null;

		return (
			<div className={classes.root}>
				<AppDrawer isOpen={this.state.isDrawerOpen} onClose={this.handleToggleDrawer} />
				<AppBar
					position="static"
					className={`${classes.appBar}${title === null ? ` ${classes.appBarHome}` : ''}`}
				>
					<Toolbar>
						<IconButton onClick={this.handleToggleDrawer} color="inherit" aria-label="Menu">
							<MenuIcon />
						</IconButton>
						{title !== null && (
							<Typography className={classes.title} type="title" color="inherit" noWrap>
								{title}
							</Typography>
						)}
						<div className={classes.grow} />
						<Tooltip id="appbar-github" title="Material-UI speed dial GitHub repo" enterDelay={300}>
							<IconButton
								href="https://github.com/smollweide/material-ui-speed-dial"
								target="_blank"
								color="inherit"
								aria-labelledby="appbar-github"
							>
								<GitHubIcon />
							</IconButton>
						</Tooltip>
					</Toolbar>
				</AppBar>
				{children}
			</div>
		);
	}
}

export default withStyles(styles)(AppFrame);
