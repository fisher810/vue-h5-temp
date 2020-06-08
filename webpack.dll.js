const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: {
    library: [
      'vue',
      'vue-i18n',
      'vue-router'
    ],
    echarts: [
      'echarts/lib/echarts',
      'echarts/lib/chart/radar',
      'echarts/lib/component/tooltip',
      'echarts/lib/component/title',
      'echarts/lib/component/legend'
    ]
  },
  output: {
    filename: '[name]_[hash:8].dll.js',
    path: path.join(__dirname, 'public/library'),
    library: '[name]'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, 'public/library/[name].json')
    })
  ]
}
