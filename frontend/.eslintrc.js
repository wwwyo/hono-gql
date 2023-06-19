/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    '../.eslintrc.json',
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
  ],
}
