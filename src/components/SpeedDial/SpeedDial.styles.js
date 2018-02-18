// @flow
import type { StylesType, ThemeType } from '../../types/styles';

let stylesRaw;

export const styles = (theme: ThemeType): StylesType => {
	stylesRaw = {
		root: {
			position: 'fixed',
			bottom: theme.spacing.unit * 2,
			right: theme.spacing.unit * 2,
		},
		button: {
			transition: 'all 0.5s',
			position: 'absolute',
			bottom: 0,
			right: 0,
		},
		buttonIcon: {
			transition: 'all 0.5s',
		},

		// BUTTON SINGLE
		buttonIconSingle: {},
		'buttonIconSingle--state-closed': {},
		'buttonIconSingle--state-opening': {
			transform: 'rotate(135deg)',
		},
		'buttonIconSingle--state-opened': {
			transform: 'rotate(135deg)',
		},
		'buttonIconSingle--state-closing': {},

		// BUTTON CLOSED
		buttonClosed: {},
		'buttonClosed--state-closed': {},
		'buttonClosed--state-opening': {
			opacity: 0.1,
		},
		'buttonClosed--state-opened': {
			opacity: 0,
		},
		'buttonClosed--state-closing': {},

		buttonClosedIcon: {},
		'buttonClosedIcon--state-closed': {},
		'buttonClosedIcon--state-opening': {
			transform: 'rotate(180deg)',
		},
		'buttonClosedIcon--state-opened': {
			transform: 'rotate(180deg)',
		},
		'buttonClosedIcon--state-closing': {},

		// BUTTON OPENED
		buttonOpened: {},
		'buttonOpened--state-closed': {
			opacity: 0,
			pointerEvents: 'none',
		},
		'buttonOpened--state-opening': {
			opacity: 0.5,
		},
		'buttonOpened--state-opened': {
			opacity: 1,
		},
		'buttonOpened--state-closing': {
			opacity: 0,
		},

		buttonOpenedIcon: {},
		'buttonOpenedIcon--state-closed': {
			transform: 'rotate(-180deg)',
		},
		'buttonOpenedIcon--state-opening': {},
		'buttonOpenedIcon--state-opened': {
			transform: 'rotate(0deg)',
		},
		'buttonOpenedIcon--state-closing': {
			transform: 'rotate(-180deg)',
		},
	};
	return stylesRaw;
};

export type ClassesType = { [key: string]: string };

export default styles;
