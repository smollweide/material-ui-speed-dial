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
	OPEN: 'open',
	CLOSING: 'closing',
};
export type StateEnumType = $Values<typeof STATE>;
export type SpeedDialStateType = {
	state: StateEnumType,
};
export type ForceSetStateType = ({ state: StateEnumType }, cb?: () => void) => void;

class SpeedDial extends Component<SpeedDialAllPropsType, SpeedDialStateType> {
	static displayName = 'SpeedDial';
	static defaultValues = {
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
				this.forceSetState({ state: STATE.OPEN });
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
		const { classes = {}, renderClosedButton, renderOpenedButton } = this.props;
		const { state } = this.state;

		if (state === STATE.OPEN) {
			return renderOpenedButton({
				className: classes.button,
				onClick: this.handleClose,
			});
		}

		if (state === STATE.CLOSED) {
			return renderClosedButton({
				className: classes.button,
				onClick: this.handleOpen,
			});
		}

		return [
			renderOpenedButton({
				className: classes.button,
				onClick: this.handleClose,
			}),
			renderClosedButton({
				className: classes.button,
				onClick: this.handleOpen,
			}),
		];
	}

	render(): React$Element<*> {
		const { classes } = this.props;
		return <div className={classes.root}>{this.renderButton()}</div>;
	}
}

export default withStyles(styles)(SpeedDial);
