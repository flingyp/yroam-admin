module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-essential', 'standard-with-typescript', 'plugin:prettier/recommended'],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    project: ['./tsconfig.json'],
    ecmaFeatures: true,
    tsconfigRootDir: __dirname
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0
  }
}
