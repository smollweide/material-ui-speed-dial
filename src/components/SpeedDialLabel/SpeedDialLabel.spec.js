import React from 'react';
import { shallow } from 'enzyme';
import { SpeedDialLabel } from './SpeedDialLabel';
import styles from './SpeedDialLabel.styles';

const props = {
	classes: styles,
	className: 'className',
	text: 'text',
};

describe('SpeedDialLabel', () => {
	it('snapshot: default', () => {
		const _props = { ...props };
		const tree = shallow(<SpeedDialLabel {..._props} />);
		expect(tree).toMatchSnapshot();
	});
	it('styles', () => {
		expect(
			typeof styles({
				typography: { body1: {} },
				palette: { background: { paper: '' } },
				shadows: [0, 1, 2, 3, 4, 5],
			})
		).toBe('object');
	});
});
