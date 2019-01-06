const CleanWebpackPlugin = require('clean-webpack-plugin');

const {
  resolve
} = require('path');

module.exports = env => {

  const cleanOptions = {
    root: resolve('.'),
    verbose: true,
    dry: false
  }

  const rc = {
    mode: 'development',
    entry: resolve('./index.ts'),
    module: {
      rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }]
    },
    resolve: {
      extensions: ['.ts','.js']
    },
    output: {
      filename: 'bundle.js',
      path: resolve('./dist')
    },
    plugins: [
      new CleanWebpackPlugin('./dist', cleanOptions)
    ]
  }
  return rc;
}