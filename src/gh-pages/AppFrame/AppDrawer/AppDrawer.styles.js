// @flow
import type { StylesType } from '../../../../material-ui-speed-dial.js.flow';

let stylesRaw;

export const styles = (): StylesType => {
	stylesRaw = {
		list: {
			width: 310,
		},
		listFull: {
			width: 'auto',
		},
	};
	return stylesRaw;
};

export type ClassesType = { [key: $Keys<typeof stylesRaw>]: string };

export default styles;
