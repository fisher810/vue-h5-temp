import Jsencrypt from 'jsencrypt'
import CryptoJS from 'crypto-js'
// import store from '@/store'
// import utils from '@/utils'

export let encryptRsa = new Jsencrypt()
encryptRsa.setPublicKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCBbVgtk5NbmuFHN6s1nguKZ+fQOcRZWODMpNRWm34kggR7TJB+Ltz4O8btRaYYnuvM/dEb3DaVRbttWfBHvC1rg/LWMx1hcD3/nocpe91o3FoxSok7FYnXav/ls6YgiUR/8KnX3jVFExWfseAkToPE7HFUZBNikNXUFo5oLE7NbwIDAQAB')

export let decryptRsa = new Jsencrypt()
decryptRsa.setPrivateKey('MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAKWu0HB/CeX+Dy10VwWzH/QISjEZN/AfYp90y/+QHHCZr5h5K5VK5VBxzvgh7Wem6zHVU8QZ56K//V8Klk/6oVKl/A0OzyGpx3wl9D3gnuKjAUe86FLgAOVASDa/OAqrQL0d5cWOmSIuHc5ZmVQpUPlbiGwdsJM/sBEm2RUhQl0ZAgMBAAECgYA8Dp4n6SThZbKCu4U/36pZfxfFrGqGdBn/ywqXXNmyR0NLdcDCoR92hYqMj1/LDsp6ieWPVASPDiD97oyF+Ue4ZAZ+oIHzjcH1NceZD8d28YmhXnyg92Dtse0I4f5Hn7s/KM/unrc7grnOvzZXRpnxFlmJfI1MhUaXDE+FNVbfcQJBAN64U1ym2/1lle7qlVpPY4MH7B2nVMy4ylGWYeCkZPKtetktMYBAwHGmFUHS9CmHpgaLcc84w8jCTN154SuuA48CQQC+cKe7YCKs4iXBIxpJAntdLUSaUYHu4XX7d6caPjItngEByfSrLxs9FBd7StpHEZ2kRd6yZfQTc8bBZC/P3KDXAkAxWRQXbl1GCxEqi82l4ftBmCrH80CFz9f8Nd7gAGzhnHCg2DOkoDRDujHxkMVKwmSWBKWl7YTr4alYVV3/6KGfAkA7+3u5NuR1E53UoVvMFy4IARQUjwuf0/+3Ps6xI1nmqFek2plnuaSYrlVfDgqGS/QdI6yrABXKcrLtgsLUc6dtAkBrOVTWS5R14/VMWf3GLCx15clKAfqMNmrje+4YwaetzW8au+pydzPhnejsInKaaDJkihznQzlKgCwCcfCXw8xf')

export let encryptPwd = new Jsencrypt()
encryptPwd.setKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCp7BCCDU4wkozPFvau143NvdGGAqWbOuY/eeJyX6g0o/rUtK3T2XaZEpKGNQTU/RlyQ31FeRASPEOXRJrLYju0gIpEMAhNbvpwlSDwA+T/28LxuNo919+g1YEho9ER9fzVukOrUHRp9shb8BN+WIekrxh2Zs0YSZEYXI5OocN1JwIDAQAB')

const decryptByDes = function (ciphertext, key) {
  var keyHex = CryptoJS.enc.Utf8.parse(key)
  // direct decrypt ciphertext
  var decrypted = CryptoJS.DES.decrypt({
    ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
  }, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })

  return decrypted.toString(CryptoJS.enc.Utf8)
}

const encryptByDes = function (message: any, key: any) {
  var keyHex = CryptoJS.enc.Utf8.parse(key)
  if (typeof message === 'object') {
    message = JSON.stringify(message)
  }
  var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.toString()
}

export const decryptData = function (data) {
  if (!data.key || !data.data) {
    return {
      code: 6666,
      error: '数据不合法'
    }
  }
  return decryptByDes(data.data.replace(/(?:\\[rn]|[\r\n]+)+/g, ''), decryptRsa.decrypt(data.key))
}

// api/h5 服务请求接口签名方法
// export const api = function (url) {
//   let timestamp = new Date().getTime()
//   let params = store.state
//   let diffTimestamp = timestamp - params.timestamp
//   let accessToken = utils.cookie.get('loginToken') || params.loginToken
//   let nonce = randomWord(false, 8)
//   let newTimestamp = timestamp + diffTimestamp
//   let deviceId = utils.cookie.get('deviceId') || params.deviceId
//   let userId = utils.cookie.get('userId') || params.id || params.userId
//   let host = process.env.VUE_APP_API_HOST
//   let joinUrl = host + '/' + url + accessToken + deviceId + nonce + newTimestamp + userId
//   let sign = require('crypto').createHash('md5').update(joinUrl).digest('hex').toUpperCase()
//   console.log('joinUrl=====', joinUrl)
//   return url + '?deviceId=' + deviceId + '&nonce=' + nonce + '&timestamp=' + newTimestamp + '&sign=' + sign + '&userId=' + userId + '&appId=' + utils.cookie.get('appId')
// }

// 生成随机字符串方法：用于生成deviceId
export const randomWord = function (flag:boolean, min:number, max:number) {
  let str = ''
  let range = min
  let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let pos

  if (flag) {
    range = Math.round(Math.random() * (max - min)) + min
  }
  for (var i = 0; i < range; i++) {
    pos = Math.round(Math.random() * (arr.length - 1))
    str += arr[pos]
  }
  return str
}

export const encryptData = function (data: any) {
  let key = randomWord(false, 8, 0)
  return {
    data: encryptByDes(data, key),
    key: encryptRsa.encrypt(key)
  }
}
