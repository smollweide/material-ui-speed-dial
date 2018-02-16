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
			position: 'absolute',
		},
	};
	return stylesRaw;
};

export type ClassesType = { [key: $Keys<typeof stylesRaw>]: string };

export default styles;
