/*
 * @Author: fisher
 * @Date: 2020-02-20 11:24:54
 * @LastEditTime: 2020-05-15 19:42:42
 * @LastEditors: your name
 * @Description:
 * @FilePath: /assessment/src/utils/utils.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */
// 格式化 search 成 object
import api from '../utils/api-server'
interface QueryJson {
  [key:string]: any
}
/**
 * 埋点收集
 * @param opt {}
 */
function triggerService (opt: any) {
  let queryJson = queryToJson(window.location.search.substr(1), true)
  let path = window.location.pathname.match(/\/(.+)\//g)
  let date = new Date()
  let defaultParams = {
    time: date.getTime(), // 时间戳
    createTime: formatDate(date.getTime()), // create_time
    // xaid: loginType, // 登陆状态：0 未登陆，1 face ，2 phone，3 ID
    userId: queryJson.userId, // 用户编号（用户用账号或者ID登陆之后必须返回该字段信息）
    appId: queryJson.appId,
    platformType: queryJson.platformType, // 平台：1 ios，2 android，3 other
    eventId: opt.eventId || '', // 事件ID
    freeName2: opt.freeName2 || '', // 备注
    cl: queryJson.language, // 系统语言
    capi: queryJson.countryId, // 国家简称
    deviceId: queryJson.deviceId, // 用户设备唯一id
    brand: path ? path[0].replace(/\//g, '') : '' // 页面pageName
  }
  console.log(defaultParams)
  api.triggerService({
    params: {},
    data: defaultParams
  })
}
/**
 *  格式化 query 成 obj
 * @param str user=111&n=***
 * @param encode true or false
 */
function queryToJson (str:string, encode:boolean = false) {
  if (!str) {
    return {}
  }
  let param:Array<string> = str.split('&')
  let obj:QueryJson = {}
  param.forEach((item, index) => {
    let items: Array<string> = item.split('=')
    let key: string = items[0]
    if (key) {
      obj[key] = items[1]
        ? encode ? decodeURIComponent(items[1]) : items[1]
        : ''
    }
  })
  return obj
}
/**
 * 补零
 * @param num
 * @returns {string}
 */
function pad (num: string | number):string {
  return new Array(2 - ('' + num).length + 1).join('0') + num
}
/**
 * 格式化日期
 * @param val 时间戳（例如：1477363297）
 * @param type 1：完整显示，2：不显示年,3:不显示分秒
 */
function formatDate (val:number, type:number = 1, splitStr:string | undefined = '-'):string {
  if (!val) {
    return ''
  }
  let result:string = ''
  let date:Date = new Date(val)
  let year:number = date.getFullYear()
  let month:string = pad(date.getMonth() + 1)
  let day:string = pad(date.getDate())
  let hours:string = pad(date.getHours())
  let minutes:string = pad(date.getMinutes())
  let seconds:string = pad(date.getSeconds())
  switch (type) {
    case 1:
      result = year + splitStr + month + splitStr + day + ' ' + hours + ':' + minutes + ':' + seconds
      break
    case 2:
      result = month + splitStr + day + ' ' + hours + ':' + minutes
      break
    case 3:
      result = year + splitStr + month + splitStr + day
      break
    case 4:
      result = minutes + ':' + seconds
      break
    case 5:
      result = year + splitStr + month + splitStr + day + ' ' + hours + ':' + minutes
      break
    case 6:
      result = hours + ':' + minutes + ':' + seconds
      break
    default:
      result = year + splitStr + month + splitStr + day + ' ' + hours + ':' + minutes + ':' + seconds
      break
  }
  return result
}
export {
  triggerService,
  queryToJson,
  pad,
  formatDate
}
