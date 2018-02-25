// @flow
import type { StylesType, ThemeType } from '../../types/styles';

let stylesRaw;

export const styles = (theme: ThemeType): StylesType => {
	stylesRaw = {
		content: {
			paddingTop: theme.spacing.unit * 12,
			paddingBottom: theme.spacing.unit * 8,
			[theme.breakpoints.up('sm')]: {
				paddingTop: theme.spacing.unit * 12,
				paddingBottom: theme.spacing.unit * 10,
			},
		},
		text: {
			paddingLeft: theme.spacing.unit * 4,
			paddingRight: theme.spacing.unit * 4,
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},
		headline: {
			maxWidth: 500,
			textAlign: 'center',
			marginBottom: theme.spacing.unit * 4,
		},
	};
	return stylesRaw;
};

export type ClassesType = { [key: $Keys<typeof stylesRaw>]: string };

export default styles;
