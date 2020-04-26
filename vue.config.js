// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_API_URL)
module.exports = {
  publicPath: './', // 公共路径
  productionSourceMap: process.env.NODE_ENV === 'development',
  // chainWebpack (config) {
  //   config.resolve.alias
  //     .set('style', resolve('public/style'))
  //     .set('api', resolve('src/api'))
  //     .set('tools', resolve('src/tools'))
  //     .set('components', resolve('src/components'))
  //     .set('echarts', resolve('src/echarts'))
  //     .set('echarts', resolve('node_modules/echarts'))
  //   入口文件 hash
  //   config.output.filename('js/[name].[hash:8].js').end()
  //   chunk hash (路由)
  //   config.output.chunkFilename('js/[name].[hash:8].js').end()
  // },
  css: {
    extract: false
  },
  configureWebpack: {
    optimization: {
      minimizer: [
        // 压缩js
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
        // new OptimizeCSSAssetsPlugin({
        //   assetNameRegExp: /\.css$/g,
        //   cssProcessor: require('cssnano'),
        //   cssProcessorOptions: {
        //     autoprefixer: false,
        //     preset: [
        //       'default',
        //       {
        //         discardComments: {
        //           removeAll: true
        //         }
        //       }
        //     ]
        //   }
        // })
      ]
      // runtimeChunk: 'single',
      // splitChunks: {
      //   chunks: 'all',
      //   cacheGroups: {
      //     utils: {
      //       name: 'utils',
      //       test: /[\\/]src[\\/]utils[\\/]/,
      //       priority: 11,
      //       minSize: 0,
      //       minChunks: 1
      //     }
      //   }
      // }
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
