module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'@vue/typescript/recommended',
		'plugin:prettier/recommended',
		'@vue/standard',
		'eslint:recommended',
		'plugin:prettier/recommended'
	],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': 'error'
	},
	overrides: [
		{
			files: ['**/*.spec.ts', '**/*.spec.ts'],
			env: {
				jest: true
			}
		}
	]
}
