// @flow

import type { StylesType, StylesCreatorOrObjectType } from '../../../material-ui-speed-dial.js.flow';

const combineStyles = (...stylesCreators: Array<StylesCreatorOrObjectType>): ((...args: Array<*>) => StylesType) => {
	return (...args: Array<*>): StylesType => {
		let out = {};
		stylesCreators.forEach((stylesCreatorOrObject: StylesCreatorOrObjectType) => {
			if (typeof (stylesCreatorOrObject: StylesType) === 'object') {
				out = {
					...out,
					...(stylesCreatorOrObject: StylesType),
				};
				return;
			}

			if (typeof stylesCreatorOrObject === 'function') {
				out = {
					...out,
					...stylesCreatorOrObject(...args),
				};
				return;
			}
		});
		return out;
	};
};

export default combineStyles;
