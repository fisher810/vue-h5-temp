console.log(process.env.NODE_ENV)
module.exports = {
  publicPath: './', // 公共路径
  productionSourceMap: process.env.NODE_ENV === 'dev',
  devServer: {
    proxy: {
      '/api': {
        // 要访问的跨域的域名
        target: 'https://api-test-194.livuchat.com',
        // ws: true, // 是否启用websockets
        secure: false, // 使用的是http协议则设置为false，https协议则设置为true
        changOrigin: true
      }
    }
  }

}
