import combineStyles from './index';

describe('combineStyles', () => {
	it('default', () => {
		const stylesCreatorA = () => ({
			a: {},
		});
		const stylesCreatorB = () => ({
			b: {},
		});
		expect(combineStyles(stylesCreatorA, stylesCreatorB)()).toEqual({
			a: {},
			b: {},
		});
	});
	it('style object', () => {
		const stylesA = {
			a: {},
		};
		const stylesCreatorB = () => ({
			b: {},
		});
		expect(combineStyles(stylesA, stylesCreatorB)()).toEqual({
			a: {},
			b: {},
		});
	});
	it('invalid argument', () => {
		const stylesA = 'styles';
		const stylesCreatorB = () => ({
			b: {},
		});
		expect(combineStyles(stylesA, stylesCreatorB)()).toEqual({
			b: {},
		});
	});
});
