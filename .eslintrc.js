module.exports = {
	extends: [
		require.resolve('@namics/eslint-config/configurations/es8-react.js'),
		require.resolve('@namics/eslint-config/configurations/es8-react-disable-styles.js'),
		require.resolve('@namics/eslint-config/configurations/flow.js'),
		require.resolve('@namics/eslint-config/configurations/flow-disable-styles.js'),
	],
	rules: {
		'quote-props': 0,
	},
	globals: {
		global: true,
		process: true,
		__dirname: true,
		it: true,
		expect: true,
		describe: true,
		beforeEach: true,
	},
};
