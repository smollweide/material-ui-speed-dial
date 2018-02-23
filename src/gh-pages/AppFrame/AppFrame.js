// @flow
import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import MenuIcon from 'material-ui-icons/Menu';
import GitHubIcon from '../GitHub/GitHub';
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
	anchorEl: null | HTMLElement,
};

class AppFrame extends React.Component<AppFramePropsType, AppFrameStateType> {
	state = {
		anchorEl: null,
	};

	handleMenu = (event: SyntheticInputEvent<HTMLInputElement>) => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render(): React$Element<*> {
		const { classes, children } = this.props;
		const title = null;

		return (
			<div className={classes.root}>
				<AppBar
					position="static"
					className={`${classes.appBar}${title === null ? ` ${classes.appBarHome}` : ''}`}
				>
					<Toolbar>
						<IconButton color="inherit" aria-label="Menu">
							<MenuIcon />
						</IconButton>
						{title !== null && (
							<Typography className={classes.title} type="title" color="inherit" noWrap>
								{title}
							</Typography>
						)}
						<div className={classes.grow} />
						<Tooltip id="appbar-github" title="Material-UI Speed dial GitHub repo" enterDelay={300}>
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
