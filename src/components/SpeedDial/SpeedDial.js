// @flow

import React, { Component, Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
import styles from './SpeedDial.styles';
import type { ClassesType } from './SpeedDial.styles';
import type { SpeedDialPropsType, StateEnumType, SpeedDialStateType } from '../../../material-ui-speed-dial.js.flow';

export type SpeedDialWithStylePropsType = {
	classes: ClassesType,
};
export type SpeedDialAllPropsType = SpeedDialWithStylePropsType & SpeedDialPropsType;

export type ForceSetStateType = ({ state: StateEnumType }, cb?: () => void) => void;

const STATE = {
	CLOSED: 'closed',
	OPENING: 'opening',
	OPENED: 'opened',
	CLOSING: 'closing',
};

export class SpeedDial extends Component<SpeedDialAllPropsType, SpeedDialStateType> {
	static displayName = 'SpeedDial';
	static defaultProps = {
		animationDelay: 500,
		preset: {
			root: '',
			button: '',
			list: '',
			item: '',
			firstItem: '',
			avatar: '',
			label: '',
		},
	};

	state = {
		state: STATE.CLOSED,
	};

	componentDidMount() {
		this.forceSetState = this.setState;
	}

	componentWillUnmount() {
		/* istanbul ignore next */
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

	forceSetState: ForceSetStateType;

	renderButton(): React$Element<*> | Array<React$Element<*>> {
		const { classes, preset, renderButton, renderOpenedButton } = this.props;
		const { state } = this.state;

		if (!renderOpenedButton) {
			return renderButton(
				{
					className: `${classes.button} ${preset.button}`,
					onClick: state === STATE.OPENED ? this.handleClose : this.handleOpen,
					state,
				},
				{
					className: `${classes.buttonIcon} ${classes.buttonIconSingle} ${
						classes[`buttonIconSingle--state-${state}`]
					}`,
					state,
				}
			);
		}

		return [
			renderButton(
				{
					key: 'closed',
					className: `${classes.button} ${classes.buttonClosed} ${classes[`buttonClosed--state-${state}`]} ${
						preset.button
					}`,
					onClick: this.handleOpen,
					state,
				},
				{
					className: `${classes.buttonIcon} ${classes.buttonClosedIcon} ${
						classes[`buttonClosedIcon--state-${state}`]
					}`,
					state,
				}
			),
			renderOpenedButton(
				{
					key: 'open',
					className: `${classes.button} ${classes.buttonOpened} ${classes[`buttonOpened--state-${state}`]} ${
						preset.button
					}`,
					onClick: this.handleClose,
					state,
				},
				{
					className: `${classes.buttonIcon} ${classes.buttonOpenedIcon} ${
						classes[`buttonOpenedIcon--state-${state}`]
					}`,
					state,
				}
			),
		];
	}

	render(): React$Element<*> {
		const { classes, preset, className, renderList, renderBackdrop, children } = this.props;
		const { state } = this.state;
		return (
			<Fragment>
				{renderBackdrop &&
					renderBackdrop({
						className: `${preset.backdrop}`,
						state,
						onClick: this.handleClose,
					})}
				<div className={`${preset.root} ${className || ''}`}>
					{renderList({
						className: `${classes.list} ${classes[`list--state-${state}`]} ${preset.list}`,
						children: children({
							state,
							preset,
							className: `${preset.item}`,
						}),
						state,
					})}
					{this.renderButton()}
				</div>
			</Fragment>
		);
	}
}

export default withStyles(styles)(SpeedDial);
