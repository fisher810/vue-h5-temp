// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_API_URL)
module.exports = {
  publicPath: './', // 公共路径
  productionSourceMap: process.env.NODE_ENV === 'dev',
  chainWebpack (config) {
    // config.resolve.alias
    //   .set('@', resolve('src'))
    //   .set('api', resolve('src/api'))
    //   .set('tools', resolve('src/tools'))
    //   .set('components', resolve('src/components'))
    //   .set('echarts', resolve('src/echarts'))
    //   .set('echarts', resolve('node_modules/echarts'))
    // 入口文件 hash
    config.output.filename('js/[name].[hash:8].js').end()
    // chunk hash (路由)
    config.output.chunkFilename('js/[name].[hash:8].js').end()
  },
  // css: {
  //   extract: true
  // },
  configureWebpack: {
    // resolve: {
    //   extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
    //   alias: {
    //     '@': resolve('src'),
    //     'vars': resolve('src/style/vars.scss'),
    //     '_utils': resolve('src/helpers/utils')
    //   }
    // },
    optimization: {
      // minimizer: [
      //   // 开启并行压缩
      //   new TerserPlugin({
      //     parallel: 4,
      //     cache: true
      //   })
      // ],
      runtimeChunk: 'single',
      splitChunks: {
        // chunks: 'all',
        cacheGroups: {
          // lib: {
          //   name: 'lib',
          //   test: /[\\/]node_modules[\\/]/,
          //   priority: 12,
          //   minSize: 0,
          //   minChunks: 1
          // },
          utils: {
            name: 'utils',
            test: /[\\/]src[\\/]/,
            priority: 11,
            minSize: 0,
            minChunks: 1
          }
        }
      }
    },
    plugins: [
      new webpack.DllReferencePlugin({
        manifest: require('./public/library/library.json')
      })
      // new BundleAnalyzerPlugin()
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
