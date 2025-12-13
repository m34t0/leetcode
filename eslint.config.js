import tsParser from '@typescript-eslint/parser';

export default [
	{
		files: ['**/*.js', '**/*.ts'],
		ignores: ['dist/', 'build/', 'node_modules/'],

		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2021,
			sourceType: 'module',
		},

		rules: {
			/* ==== Стиль кода (Airbnb-like) ==== */
			'quotes': ['error', 'single', { avoidEscape: true }],
			'semi': ['error', 'always'],
			'comma-dangle': ['error', 'always-multiline'],
			'no-trailing-spaces': 'error',
			'object-curly-spacing': ['error', 'always'],
			'array-bracket-spacing': ['error', 'never'],
			'space-in-parens': ['error', 'never'],
			'keyword-spacing': ['error', { before: true, after: true }],
			'space-before-function-paren': ['error', 'never'],
			'func-call-spacing': ['error', 'never'],
			'arrow-spacing': ['error', { before: true, after: true }],
			'no-multi-spaces': 'error',
			'padded-blocks': ['error', 'never'],
			'block-spacing': ['error', 'always'],
			'brace-style': ['error', '1tbs', { allowSingleLine: true }],
			'camelcase': 'error',
			'comma-spacing': ['error', { 'before': false, 'after': true }],

			/* ==== Переменные и константы ==== */
			'no-var': 'error',
			'prefer-const': 'error',
			'no-unused-vars': [
				'error',
				{ args: 'none', ignoreRestSiblings: true },
			],

			/* ==== Массивы, объекты и функции ==== */
			'prefer-arrow-callback': 'error',
			'arrow-body-style': ['error', 'as-needed'],
			'no-new-object': 'error',
			'object-shorthand': ['error', 'always'],

			/* ==== Прочие правила Airbnb ==== */
			'eqeqeq': 'error',
			'curly': ['error', 'all'],
			'no-console': 'warn',
			'no-else-return': 'error',
			'no-unused-expressions': 'error',
			'no-param-reassign': 'error',
			'no-nested-ternary': 'error',
			'radix': ['error', 'always'],
		},
	},
];
