module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  globals: {
    defineOptions: 'writable'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/no-multiple-template-root': 0, // 关闭对Vue文件唯一节点的检测
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'vue/no-v-model-argument': 0,
    'no-unused-vars': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'import/prefer-default-export': 0,
    'no-return-await': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true, // 对开发依赖设置为true，不报错
        optionalDependencies: false,
        peerDependencies: false,
        bundledDependencies: false
      }
    ],
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': ['error', { allowAfterThis: true, allowAfterSuper: true }],
    'max-len': 0,
    indent: 0
  }
}
