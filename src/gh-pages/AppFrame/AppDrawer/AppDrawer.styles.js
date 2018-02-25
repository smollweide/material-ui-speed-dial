// @flow
import type { StylesType } from '../../../types/styles';

let stylesRaw;

export const styles = (): StylesType => {
	stylesRaw = {
		list: {
			width: 250,
		},
		listFull: {
			width: 'auto',
		},
	};
	return stylesRaw;
};

export type ClassesType = { [key: $Keys<typeof stylesRaw>]: string };

export default styles;
