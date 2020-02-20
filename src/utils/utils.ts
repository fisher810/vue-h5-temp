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
