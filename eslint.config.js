import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['test/input/**'],
  rules: {
    'markdown/no-multiple-h1': 'off',
  },
})
