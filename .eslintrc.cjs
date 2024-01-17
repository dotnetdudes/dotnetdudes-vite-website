module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "@open-wc/eslint-config", "prettier"],
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "rules": {
        "import/no-extraneous-dependencies": "off",
        "import/extensions": "off",
        "no-restricted-globals": "off",
        "class-methods-use-this": "off",
        "no-useless-constructor": "off",
        "no-param-reassign": "off",
    },
  }
