module.exports = {
  env: {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  extends: ['eslint:recommended'],
  parser: '@babel/eslint-parser',
  plugins: ["jest"],
  parserOptions: {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  rules: {
    "no-constant-condition": 0
  }
}