module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': ['error', { code: 150 }],
    // Para que Iconfy no de error de DevDependecies
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // Para los errores o warninfg de Taailwind
    // https://laracasts.com/discuss/channels/code-review/vs-code-errors-and-warnings-when-using-at-tailwind-directives
  },
};
