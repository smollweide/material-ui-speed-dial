// @flow
/* eslint complexity: 0*/
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

	constructor(props: SpeedDialAllPropsType) {
		super(props);
		this.state = {
			state: this.isControlled && props.isOpen ? STATE.OPENED : STATE.CLOSED,
		};
	}

	componentDidMount() {
		this.forceSetState = this.setState;
	}

	componentWillReceiveProps(nextProps: SpeedDialAllPropsType) {
		if (!this.isControlled) {
			return;
		}
		if (!this.props.isOpen && nextProps.isOpen) {
			this.open();
			return;
		}
		if (this.props.isOpen && !nextProps.isOpen) {
			this.close();
			return;
		}
	}

	componentWillUnmount() {
		/* istanbul ignore next */
		this.forceSetState = () => {};
	}

	handleOpen = () => {
		if (!this.isControlled) {
			this.open();
		}
	};
	handleClose = () => {
		if (!this.isControlled) {
			this.close();
		}
	};

	get isControlled(): boolean {
		return typeof this.props.isOpen === 'boolean';
	}

	close() {
		this.forceSetState({ state: STATE.CLOSING }, () => {
			setTimeout(() => {
				this.forceSetState({ state: STATE.CLOSED });
			}, this.props.animationDelay);
		});
	}

	open() {
		this.forceSetState({ state: STATE.OPENING }, () => {
			setTimeout(() => {
				this.forceSetState({ state: STATE.OPENED });
			}, this.props.animationDelay);
		});
	}

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
		const { classes, preset, className, renderList, renderBackdrop, renderOuterRimButton, children } = this.props;
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
					{renderOuterRimButton &&
						renderOuterRimButton(
							{
								className: `${classes.button} ${classes.buttonOuterRim} ${
									classes[`buttonOuterRim--state-${state}`]
								} ${preset.buttonOuterRim}`,
								state,
							},
							{
								className: '',
								state,
							}
						)}
					{renderList({
						className: `${classes.list} ${classes[`list--state-${state}`]} ${preset.list}`,
						children: children({
							state,
							preset,
							className: `${preset.item}`,
							handleClose: this.handleClose,
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
