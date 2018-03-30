// @flow
import type { StylesType, ThemeType } from '../../../material-ui-speed-dial.js.flow';

let stylesRaw;

export const styles = (theme: ThemeType): StylesType => {
	stylesRaw = {
		root: {
			position: 'fixed',
			backgroundColor: theme.palette.grey['200'],
			zIndex: theme.zIndex.appBar + 1,
			transition: 'all 0.5s',
			width: '100%',
			height: '100%',
		},
		'root--state-closed': {
			opacity: 0,
			pointerEvents: 'none',
		},
		'root--state-opening': {
			opacity: 0.8,
			pointerEvents: 'none',
		},
		'root--state-opened': {
			opacity: 0.8,
		},
		'root--state-closing': {
			opacity: 0,
			pointerEvents: 'none',
		},
	};
	return stylesRaw;
};

export type ClassesType = { [key: string]: string };

export default styles;
