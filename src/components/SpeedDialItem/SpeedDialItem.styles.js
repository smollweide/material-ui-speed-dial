// @flow
import type { StylesType, ThemeType } from '../../types/styles';

let stylesRaw;

export const styles = (theme: ThemeType): StylesType => {
	stylesRaw = {
		root: {
			display: 'block',
			textAlign: 'right',
		},
		link: {
			transition: 'all 0.2s',
			position: 'relative',
			display: 'inline-block',
			cursor: 'pointer',
			padding: theme.spacing.unit * 2,
		},
		'link--state-closed': {
			opacity: 0,
			transform: 'scale(0)',
		},
		'link--state-opening': {
			opacity: 1,
			transform: 'scale(1)',
		},
		'link--state-opened': {
			opacity: 1,
			transform: 'scale(1)',
		},
		'link--state-closing': {
			opacity: 0,
			transform: 'scale(0.5)',
		},

		avatar: {
			boxShadow: theme.shadows[5],
			position: 'absolute',
		},
	};
	return stylesRaw;
};

export default styles;
