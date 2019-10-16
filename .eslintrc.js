"use strict";

module.exports = {
  extends: ["eslint:recommended", "prettier", "plugin:node/recommended"],
  plugins: ["prettier", "node"],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    strict: ["error", "global"],
    "no-shadow": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prettier/prettier": "error"
  },
  env: {
    node: true,
    es6: true
  }
};
