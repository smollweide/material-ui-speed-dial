/* eslint react/display-name: 0*/
import React from 'react';
import { shallow } from 'enzyme';
import { SpeedDial } from './SpeedDial';
import styles from './SpeedDial.styles';

const props = {
	children: () => {},
	className: 'className',
	renderButton: propsBtn => <button {...propsBtn} />,
	renderList: () => {},
	classes: styles,
};

describe('SpeedDial', () => {
	it('snapshot: default', () => {
		const _props = { ...props };
		const tree = shallow(<SpeedDial {..._props} />);
		expect(tree).toMatchSnapshot();
		expect(tree.find('button').length).toBe(1);
	});
	it('snapshot: renderOpenedButton', () => {
		const _props = { ...props, renderOpenedButton: propsBtn => <button {...propsBtn} /> };
		const tree = shallow(<SpeedDial {..._props} />);
		expect(tree).toMatchSnapshot();
		expect(tree.find('button').length).toBe(2);
	});
	it('simulate: click open', done => {
		const _props = { ...props };
		const tree = shallow(<SpeedDial {..._props} />);
		expect(tree.find('button').length).toBe(1);
		tree.find('button').simulate('click');
		expect(tree.state('state')).toBe('opening');
		setTimeout(() => {
			expect(tree.state('state')).toBe('opened');
			done();
		}, 500);
	});
	it('simulate: click close', done => {
		const _props = { ...props };
		const tree = shallow(<SpeedDial {..._props} />);
		tree.setState({
			state: 'opened',
		});
		tree.find('button').simulate('click');
		expect(tree.state('state')).toBe('closing');
		setTimeout(() => {
			expect(tree.state('state')).toBe('closed');
			done();
		}, 500);
	});
	it('simulate: click open with two buttons', done => {
		const _props = { ...props, renderOpenedButton: propsBtn => <button {...propsBtn} /> };
		const tree = shallow(<SpeedDial {..._props} />);
		expect(tree.find('button').length).toBe(2);
		tree
			.find('button')
			.first()
			.simulate('click');
		expect(tree.state('state')).toBe('opening');
		setTimeout(() => {
			expect(tree.state('state')).toBe('opened');
			done();
		}, 500);
	});
	it('unmount should work without an error while animation', done => {
		const _props = { ...props };
		const tree = shallow(<SpeedDial {..._props} />);
		tree.find('button').simulate('click');
		setTimeout(() => {
			tree.unmount();
			done();
		}, 100);
	});
	it('styles', () => {
		expect(typeof styles()).toBe('object');
	});
});