// @flow

import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import styles from './SpeedDial.styles';
import type { ClassesType } from './SpeedDial.styles';
import type { SpeedDialPropsType } from '../../../material-ui-speed-dial.js.flow';

export type SpeedDialWithStylePropsType = {
	classes: ClassesType,
};
export type SpeedDialAllPropsType = SpeedDialWithStylePropsType & SpeedDialPropsType;

const STATE = {
	CLOSED: 'closed',
	OPENING: 'opening',
	OPENED: 'opened',
	CLOSING: 'closing',
};
export type StateEnumType = $Values<typeof STATE>;
export type SpeedDialStateType = {
	state: StateEnumType,
};
export type ForceSetStateType = ({ state: StateEnumType }, cb?: () => void) => void;

class SpeedDial extends Component<SpeedDialAllPropsType, SpeedDialStateType> {
	static displayName = 'SpeedDial';
	static defaultProps = {
		animationDelay: 500,
	};

	state = {
		state: STATE.CLOSED,
	};

	componentDidMount() {
		this.forceSetState = this.setState;
	}

	componentWillUnmount() {
		this.forceSetState = () => {};
	}

	handleOpen = () => {
		this.forceSetState({ state: STATE.OPENING }, () => {
			setTimeout(() => {
				this.forceSetState({ state: STATE.OPENED });
			}, this.props.animationDelay);
		});
	};
	handleClose = () => {
		this.forceSetState({ state: STATE.CLOSING }, () => {
			setTimeout(() => {
				this.forceSetState({ state: STATE.CLOSED });
			}, this.props.animationDelay);
		});
	};

	forceSetState: ForceSetStateType = () => {};

	renderButton(): React$Element<*> | Array<React$Element<*>> {
		const { classes, renderButton, renderOpenedButton } = this.props;
		const { state } = this.state;

		if (!renderOpenedButton) {
			return renderButton(
				{
					className: `${classes.button}`,
					onClick: state === STATE.OPENED ? this.handleClose : this.handleOpen,
				},
				{
					className: `${classes.buttonIcon} ${classes.buttonIconSingle} ${
						classes[`buttonIconSingle--state-${state}`]
					}`,
				}
			);
		}

		return [
			renderButton(
				{
					key: 'closed',
					className: `${classes.button} ${classes.buttonClosed} ${classes[`buttonClosed--state-${state}`]}`,
					onClick: state === STATE.OPENED ? this.handleClose : this.handleOpen,
				},
				{
					className: `${classes.buttonIcon} ${classes.buttonClosedIcon} ${
						classes[`buttonClosedIcon--state-${state}`]
					}`,
				}
			),
			renderOpenedButton(
				{
					key: 'open',
					className: `${classes.button} ${classes.buttonOpened} ${classes[`buttonOpened--state-${state}`]}`,
					onClick: this.handleClose,
				},
				{
					className: `${classes.buttonIcon} ${classes.buttonOpenedIcon} ${
						classes[`buttonOpenedIcon--state-${state}`]
					}`,
				}
			),
		];
	}

	render(): React$Element<*> {
		const { classes } = this.props;
		return <div className={classes.root}>{this.renderButton()}</div>;
	}
}

export default withStyles(styles)(SpeedDial);
