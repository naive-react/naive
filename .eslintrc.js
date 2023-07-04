module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "files": ["src/*.ts", "src/*.tsx"],
            "rules": {
                "@typescript-eslint/no-unused-vars": [
                    2,
                    {
                        "args": "none"
                    }
                ]
            }
        },
        {
            "files": ["*.js"],
            "rules": {
                "@typescript-eslint/no-var-requires": 0
            }
        }
    ],
    "parserOptions": {
        sourceType: "module",
        ecmaFeatures: {
            "jsx": true
        },
        parser: "@typescript-eslint/parser",
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'no-unused-vars': 'warn',
        'no-undef': 'warn',
        'no-labels': 'off',
        'camelcase': 'off',
        "semi": ["error", "always"],
        "@typescript-eslint/semi": 'off',
        "block-spacing": ["error", "never"],
        "@typescript-eslint/object-curly-spacing": ["error", "never"],
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/display-name": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/member-delimiter-style": "error"
    },
    "settings": {
        react: {
            version: "detect",
        },
    },
}
