import Message from '../common/messageBox/index'
import axios from 'axios'
import Models from '../api-models/index'
interface Obj {
  [key: string]: any
}
const ApiSever: any = {}
const VERSION:number = 1
const def = {
  url: '',
  method: 'post',
  // baseURL: process.env.NODE_ENV === 'dev' ? '' : process.env.VUE_APP_API_URL,
  baseURL: process.env.VUE_APP_API_URL,
  transformRequest: [function (data: any) {
    return JSON.stringify(data)
    // return process.env.NODE_ENV === 'test' ? JSON.stringify(data) : JSON.stringify(encryptData(data))
  }],
  transformResponse: [function (data: any) {
    return data
    // return process.env.NODE_ENV === 'test' ? data : decryptData(data)
  }],
  headers: {
    'Content-Type': 'application/json',
    'Athena-Response-Encryption': 'disabled',
    'Athena-Request-Decryption': 'disabled'
  },
  timeout: 50000,
  responseType: 'json'
}

let checkStatus = (response: any, apiName: string) => {
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return typeof response.data === 'string' ? JSON.parse(response.data) : response.data
  } else {
    if (apiName === 'triggerService') {
      return { code: 0, data: 'success' }
    }
    return {
      code: 9999,
      message: 'error: ' + (response ? (response.status || JSON.stringify(response)) : 'Server Error!')
    }
  }
}
let checkCode = (response: any, apiName: string) => {
  if (response && (typeof response.code !== 'undefined' && response.code !== 0)) {
    Message(response.message || response.error || 'Server Error!')
  }
  return response
}
// restAPI
let restParams = (opt: any) => {
  if (opt.url.indexOf('{version}') !== -1) {
    opt.url = opt.url.replace('{version}', VERSION)
  }
  if (opt.api) {
    // console.log(process.env)
    opt.baseURL = process.env['VUE_APP_' + opt.api.toUpperCase() + '_API_URL']
  }
  // console.log(opt)
  Object.keys(opt.restParams || {}).forEach(item => {
    let reg = new RegExp('\\{' + item + '\\}')
    opt.url = opt.url.replace(reg, opt.restParams[item])
  })
}
// 代理
// let setProxyUrl = (opt) => {
//   opt.baseURL = opt.proxy
// }
let getSign = (config: any) => {
  let newTimestamp = new Date().getTime()
  let { deviceId, loginToken, nonce, userId } = config.params
  let joinUrl = config.baseURL + config.url + loginToken + deviceId + nonce + newTimestamp + userId
  // console.log(joinUrl)
  let sign = require('crypto').createHash('md5').update(joinUrl).digest('hex').toUpperCase()
  config.params.sign = sign
  config.params.timestamp = newTimestamp
  return config
}
axios.interceptors.request.use(config => {
  // typeof config.hasToken === 'undefined' && (config.headers.token = window.sessionStorage['token'])
  return getSign(config)
}, error => {
  return Promise.reject(error)
})
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})
Object.keys(Models).map(m => {
  ApiSever[m] = function (opts:any = {}) {
    let options = Object.assign({}, def, Models[m], opts)
    restParams(options)
    // if (config.proxyApi && options.proxy) {
    //   setProxyUrl(options)
    // }
    options.beforeRequest && options.beforeRequest(options)
    // options.data = JSON.stringify(opts.data)
    return axios(options)
      .then(
        (res) => {
          return checkStatus(res, m)
        }
      ).then(
        (res) => {
          return checkCode(res, m)
        }
      )
  }
})

export default ApiSever
