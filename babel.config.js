module.exports = {
  sourceType: 'unambiguous',
  presets: [
    [
      '@babel/preset-env',
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: false,
      },
    ],
  ],
}
