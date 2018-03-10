// @flow
import type { StylesType } from '../../types/styles';

let stylesRaw;

export const styles = (): StylesType => {
	stylesRaw = {
		button: {
			transition: 'all 0.5s',
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

		// BUTTON OUTER RIM
		buttonOuterRim: {},
		'buttonOuterRim--state-closed': {},
		'buttonOuterRim--state-opening': {
			opacity: 0,
			pointerEvents: 'none',
		},
		'buttonOuterRim--state-opened': {
			opacity: 0,
			pointerEvents: 'none',
		},
		'buttonOuterRim--state-closing': {
			opacity: 1,
		},

		list: {
			transition: 'all 0.2s',
			position: 'absolute',
			padding: 0,
			margin: 0,
			listStyleType: 'none',
		},
		'list--state-closed': {
			transform: 'scale(0) translate(100%, 100%)',
		},
		'list--state-opening': {
			transform: 'scale(1) translate(0, 0)',
		},
		'list--state-opened': {
			transform: 'scale(1) translate(0, 0)',
		},
		'list--state-closing': {
			transform: 'scale(0) translate(100%, 100%)',
		},
	};
	return stylesRaw;
};

export type ClassesType = { [key: string]: string };

export default styles;
