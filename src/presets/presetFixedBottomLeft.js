// @flow

import type { PresetRawType, ThemeType } from '../../material-ui-speed-dial.js.flow';

const styles = (theme: ThemeType): PresetRawType => {
	return {
		root: {
			position: 'fixed',
			bottom: 0,
			left: 0,
			zIndex: theme.zIndex.appBar + 2,
		},
		button: {
			position: 'absolute',
			bottom: theme.spacing.unit * 2,
			left: theme.spacing.unit * 2,
		},
		buttonOuterRim: {
			position: 'absolute',
			bottom: theme.spacing.unit * 10.8,
			left: theme.spacing.unit * 3,
		},
		list: {
			bottom: theme.spacing.unit * 2.5,
			left: 0,
		},
		item: {
			textAlign: 'left',
		},
		firstItem: {
			paddingTop: theme.spacing.unit,
		},
		avatar: {
			top: theme.spacing.unit * 0.7,
			left: theme.spacing.unit * 3,
		},
		label: {
			paddingTop: theme.spacing.unit * 0.5,
			paddingRight: theme.spacing.unit,
			paddingBottom: theme.spacing.unit * 0.5,
			paddingLeft: theme.spacing.unit,
			marginLeft: theme.spacing.unit * 9,
		},
		backdrop: {
			bottom: 0,
			left: 0,
		},
	};
};

export default styles;
