// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
const TerserPlugin = require('terser-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_API_URL)
// 压js
let terserSetting = () => {
  let arr = []
  if (process.env.NODE_ENV === 'production') {
    arr.push(
      new TerserPlugin({
        terserOptions: {
          compress: {
            warnings: false,
            drop_debugger: true, // console
            drop_console: true, // 注释console
            pure_funcs: ['console.log'] // 移除console
          }
        },
        sourceMap: false,
        parallel: true
      })
    )
    // arr.push(
    //   new OptimizeCssAssetsPlugin({
    //     assetNameRegExp: /\.optimize\.css$/g,
    //     cssProcessor: require('cssnano'),
    //     cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
    //     canPrint: true
    //   })
    // )
  }
  return arr
}
module.exports = {
  publicPath: './', // 公共路径
  productionSourceMap: process.env.NODE_ENV === 'development',
  css: {
    extract: false
  },
  configureWebpack: {
    // resolve: {
    //   alias: {
    //     '@': resolve('src'),
    //     'vars': resolve('src/style/vars.scss'),
    //     '_utils': resolve('src/helpers/utils')
    //   }
    // },
    optimization: {
      minimizer: terserSetting(),
      // runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          lib: {
            name: 'lib',
            test: /[\\/]node_modules[\\/]/,
            priority: 11,
            minSize: 0,
            minChunks: 1
          }
        }
      }
    },
    plugins: [
      // new MiniCssExtractPlugin({
      //   filename: 'css/app.[name].css',
      //   chunkFilename: 'css/app.[contenthash:8].css' // use contenthash *
      // }),
      // new BundleAnalyzerPlugin(),
      new webpack.DllReferencePlugin({
        manifest: require('./public/library/library.json')
      }),
      new webpack.DllReferencePlugin({
        manifest: require('./public/library/echarts.json')
      })
    ]
  }
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       // 要访问的跨域的域名
  //       target: 'https://api-test-194.livuchat.com',
  //       // ws: true, // 是否启用websockets
  //       secure: false, // 使用的是http协议则设置为false，https协议则设置为true
  //       changOrigin: true
  //     }
  //   }
  // }

}
