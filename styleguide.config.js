const path = require('path');

module.exports = {
	require: [
		path.join(__dirname, 'styleguide/global.requires.js'),
	],
	title: 'Default Style Guide',
	// components: 'src/components/**/[A-Z]*.vue',
	// defaultExample: true,
	// exampleMode: 'expand',
	styleguideDir: 'dist-styleguide',
	codeSplit: true,
	skipComponentsWithoutExample: true,
	sections: [
		{
			name: 'Layout components',
			components: [
				'src/components/Sidebar/NavLink/[A-Z]*.vue',
				'src/components/BreadcrumbHistory/**/[A-Z]*.vue'
			],
		},
	],
	renderRootJsx: path.join(__dirname, 'styleguide/styleguide.root.js'),
	dangerouslyUpdateWebpackConfig(webpackConfig) {
		let filteredFirstHMR = false;

		webpackConfig.plugins = webpackConfig.plugins.filter(plugin => {
			if (plugin.constructor.name === 'HotModuleReplacementPlugin' && !filteredFirstHMR) {
				filteredFirstHMR = true;
				return false;
			}

			return true;
		});

		return webpackConfig;
	},
}
