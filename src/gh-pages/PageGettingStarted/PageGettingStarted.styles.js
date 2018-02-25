// @flow
import type { StylesType, ThemeType } from '../../types/styles';

let stylesRaw;

export const styles = (theme: ThemeType): StylesType => {
	stylesRaw = {
		text: {
			paddingLeft: theme.spacing.unit * 4,
			paddingRight: theme.spacing.unit * 4,
		},
		pre: {
			margin: theme.spacing.unit * 4,
			padding: theme.spacing.unit * 2,
			backgroundColor: theme.palette.background.paper,
		},
		code: {
			...theme.typography.caption,
		},
	};
	return stylesRaw;
};

export type ClassesType = { [key: $Keys<typeof stylesRaw>]: string };

export default styles;
