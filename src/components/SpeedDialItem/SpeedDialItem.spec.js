/* eslint react/display-name: 0*/
import React from 'react';
import { shallow } from 'enzyme';
import { SpeedDialItem } from './SpeedDialItem';
import styles from './SpeedDialItem.styles';

const props = {
	state: 'opened',
	children: () => {},
	preset: {
		root: '',
		button: '',
		list: '',
		item: '',
		firstItem: '',
		avatar: '',
		label: '',
	},
	classes: styles,
};

describe('SpeedDialItem', () => {
	it('snapshot: default', () => {
		const _props = { ...props };
		const tree = shallow(<SpeedDialItem {..._props} />);
		expect(tree).toMatchSnapshot();
	});
	it('snapshot: with className', () => {
		const _props = { ...props, className: 'className' };
		const tree = shallow(<SpeedDialItem {..._props} />);
		expect(tree.find('li').hasClass('className')).toBe(true);
	});
	it('snapshot: with preset', () => {
		const _props = {
			...props,
			preset: {
				root: 'root',
				button: 'button',
				list: 'list',
				item: 'item',
				firstItem: 'firstItem',
				avatar: 'avatar',
				label: 'label',
			},
		};
		const tree = shallow(<SpeedDialItem {..._props} />);
		expect(tree).toMatchSnapshot();
	});
	it('snapshot: renderAvatar', () => {
		const _props = { ...props, renderAvatar: propsAvatar => <a {...propsAvatar} /> };
		const tree = shallow(<SpeedDialItem {..._props} />);
		expect(tree).toMatchSnapshot();
	});
	it('styles', () => {
		expect(typeof styles({ spacing: { unit: 2 }, shadows: [0, 1, 2, 3, 4, 5] })).toBe('object');
	});
});
