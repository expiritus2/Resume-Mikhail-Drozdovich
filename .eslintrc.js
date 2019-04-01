module.exports = {
	env: {
		browser: true,
		es6: true
	},
  parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			jsx: false
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	extends: ["airbnb"],
	plugins: ["react", "prettier", "react-hooks"],
	settings: { "import/resolver": { "node": { "moduleDirectory": ["node_modules", "src"] } } },
	rules: {
    "no-plusplus": "off",
    "consistent-return": "off",
    "prefer-destructuring": ["error", { array: false, object: true }],
    "linebreak-style": "off",
    "object-curly-newline": "off",
    "no-use-before-define": ["error", { "functions": false }],
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-one-expression-per-line": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"max-len": ["error", 120,	2, {
			ignoreComments: true,
			ignoreTrailingComments: true,
			ignoreUrls: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true
		}],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn"
	}
};
