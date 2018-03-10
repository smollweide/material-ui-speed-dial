import React from 'react';
import { shallow } from 'enzyme';
import { SpeedDialBackdrop } from './SpeedDialBackdrop';
import styles from './SpeedDialBackdrop.styles';

const props = {
	classes: styles,
	className: 'className',
	state: 'opened',
	onClick() {},
};

describe('SpeedDialBackdrop', () => {
	it('snapshot: default', () => {
		const _props = { ...props };
		const tree = shallow(<SpeedDialBackdrop {..._props} />);
		expect(tree).toMatchSnapshot();
	});
	it('styles', () => {
		expect(
			typeof styles({
				zIndex: { appBar: 1000 },
				palette: { grey: { 200: '' } },
			})
		).toBe('object');
	});
});
