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
	it('snapshot: without className', () => {
		const _props = { ...props, className: undefined };
		const tree = shallow(<SpeedDial {..._props} />);
		expect(tree).toMatchSnapshot();
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
	it('snapshot: renderBackdrop', () => {
		const _props = {
			...props,
			renderBackdrop: propsBackdrop => (
				<div className="backdrop" {...{ ...propsBackdrop, className: `${propsBackdrop.className} backdrop` }} />
			),
		};
		const tree = shallow(<SpeedDial {..._props} />);
		expect(tree).toMatchSnapshot();
		expect(tree.find('.backdrop').length).toBe(1);
	});
	it('simulate: close by backdrop', done => {
		const _props = {
			...props,
			renderBackdrop: propsBackdrop => (
				<div className="backdrop" {...{ ...propsBackdrop, className: `${propsBackdrop.className} backdrop` }} />
			),
		};
		const tree = shallow(<SpeedDial {..._props} />);
		tree.setState({
			state: 'opened',
		});
		tree.find('.backdrop').simulate('click');
		setTimeout(() => {
			expect(tree.state('state')).toBe('closed');
			done();
		}, 500);
	});
	it('snapshot: renderOuterRimButton', () => {
		const _props = {
			...props,
			renderOuterRimButton: propsOuterRimButtom => (
				<div
					className="backdrop"
					{...{ ...propsOuterRimButtom, className: `${propsOuterRimButtom.className} outerRimButtom` }}
				/>
			),
		};
		const tree = shallow(<SpeedDial {..._props} />);
		expect(tree).toMatchSnapshot();
		expect(tree.find('.outerRimButtom').length).toBe(1);
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

	describe('controlled', () => {
		it('simulate: click open in controlled mode', done => {
			const _props = { ...props, isOpen: false };
			const tree = shallow(<SpeedDial {..._props} />);
			tree.find('button').simulate('click');
			expect(tree.state('state')).toBe('closed');
			setTimeout(() => {
				expect(tree.state('state')).toBe('closed');
				done();
			}, 500);
		});
		it('simulate: click close in controlled mode', done => {
			const _props = { ...props, isOpen: true };
			const tree = shallow(<SpeedDial {..._props} />);
			tree.find('button').simulate('click');
			expect(tree.state('state')).toBe('opened');
			setTimeout(() => {
				expect(tree.state('state')).toBe('opened');
				done();
			}, 500);
		});
		it('defined isOpen should switch on controlled mode', () => {
			const _props = { ...props, isOpen: false };
			const inst = new SpeedDial(_props);
			expect(inst.isControlled).toBe(true);
		});
		it('wrong defined isOpen should switch off controlled mode', () => {
			const _props = { ...props, isOpen: 'false' };
			const inst = new SpeedDial(_props);
			expect(inst.isControlled).toBe(false);
		});
		it('simulate: opening', done => {
			const _props = { ...props, isOpen: false };
			const tree = shallow(<SpeedDial {..._props} />);
			tree.setProps({
				isOpen: true,
			});
			expect(tree.state('state')).toBe('opening');
			setTimeout(() => {
				expect(tree.state('state')).toBe('opened');
				done();
			}, 500);
		});
		it('simulate: closing', done => {
			const _props = { ...props, isOpen: true };
			const tree = shallow(<SpeedDial {..._props} />);
			tree.setProps({
				isOpen: false,
			});
			expect(tree.state('state')).toBe('closing');
			setTimeout(() => {
				expect(tree.state('state')).toBe('closed');
				done();
			}, 500);
		});
		it('recieve props but uncontrolled', () => {
			const _props = { ...props };
			const tree = shallow(<SpeedDial {..._props} />);
			tree.setProps({
				className: 'test',
			});
			expect(tree.state('state')).toBe('closed');
		});
		it('recieve props but nothing changes (controlled)', () => {
			const _props = { ...props, isOpen: true };
			const tree = shallow(<SpeedDial {..._props} />);
			tree.setProps({
				isOpen: true,
			});
			expect(tree.state('state')).toBe('opened');
		});
	});

	it('styles', () => {
		expect(typeof styles()).toBe('object');
	});
});
