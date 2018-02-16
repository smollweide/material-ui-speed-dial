// @flow
import type { StylesType, ThemeType } from '../../types/styles';

let stylesRaw;

export const styles = (theme: ThemeType): StylesType => {
	stylesRaw = {
		root: {},
		appBar: {
			transition: theme.transitions.create('width'),
			position: 'fixed',
			'@media print': {
				position: 'absolute',
			},
		},
		appBarHome: {
			boxShadow: 'none',
		},
		grow: {
			flex: '1 1 auto',
		},
		title: {
			marginLeft: 24,
			flex: '0 1 auto',
		},
	};
	return stylesRaw;
};

export type ClassesType = { [key: $Keys<typeof stylesRaw>]: string };

export default styles;
