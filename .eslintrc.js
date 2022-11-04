module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/no-multiple-template-root': 0, // 关闭对Vue文件唯一节点的检测
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'vue/no-v-model-argument': 0,
    'no-unused-vars': 0,
    'no-plusplus': 0,
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
    'max-len': 0
  }
}
