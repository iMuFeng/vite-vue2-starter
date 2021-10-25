module.exports = {
  extends: [
    'eslint-config-prettier',
    'plugin:vue/recommended',
    'plugin:prettier-vue/recommended',
    'prettier/vue'
  ],
  plugins: [
    'eslint-plugin-prettier'
  ],
  rules: {
    'prettier/prettier': 'error'
  },
  "parserOptions": {
    "parser": "babel-eslint"
  }
}