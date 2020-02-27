/*
 * @Author: fisher
 * @Date: 2020-02-20 11:24:54
 * @LastEditTime: 2020-02-27 16:58:51
 * @LastEditors: your name
 * @Description:
 * @FilePath: /assessment/src/utils/utils.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */
// 格式化 search 成 object
interface QueryJson {
  [key:string]: any
}
export function queryToJson (str:string, encode:boolean) {
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
export function pad (num: string | number):string {
  return new Array(2 - ('' + num).length + 1).join('0') + num
}
/**
 * 格式化日期
 * @param val 时间戳（例如：1477363297）
 * @param type 1：完整显示，2：不显示年,3:不显示分秒
 */
export function formatDate (val:number, type:number = 1):string {
  if (!val) {
    return ''
  }
  let result:string = ''
  let date:Date = new Date(val)
  let year:number = date.getFullYear()
  let month:string = pad(date.getMonth() + 1)
  let day:string = pad(date.getDate())
  let housrs:string = pad(date.getHours())
  let minutes:string = pad(date.getMinutes())
  let seconds:string = pad(date.getSeconds())
  switch (type) {
    case 1:
      result = year + '-' + month + '-' + day + ' ' + housrs + ':' + minutes + ':' + seconds
      break
    case 2:
      result = month + '-' + day + ' ' + housrs + ':' + minutes
      break
    case 3:
      result = year + '-' + month + '-' + day
      break
    case 4:
      result = minutes + ':' + seconds
      break
    case 5:
      result = year + '-' + month + '-' + day + ' ' + housrs + ':' + minutes
      break
    case 6:
      result = housrs + ':' + minutes + ':' + seconds
      break
    default:
      result = year + '-' + month + '-' + day + ' ' + housrs + ':' + minutes + ':' + seconds
      break
  }
  return result
}
