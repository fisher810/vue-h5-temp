/*
 * @Author: fisher
 * @Date: 2020-03-02 14:41:46
 * @LastEditTime: 2020-03-02 18:16:05
 * @LastEditors: your name
 * @Description: message
 * @FilePath: /assessment/src/common/messageBox/index.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */
import Vue from 'vue'
import MessageBox from './MessageBox.vue'
let messageInstance:any = null
let getMessage = function () {
  if (!messageInstance) {
    messageInstance = new (Vue.extend(MessageBox))()
  }
  return messageInstance
}
let Message = function (conf: any) {
  let instance = getMessage()
  let duration = 3000
  if (typeof conf === 'string') {
    instance.text = conf
  } else {
    instance.text = conf.text
    duration = conf.duration || 3000
  }
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  instance.show = true
  if (duration !== 0) {
    let clock:any = setTimeout(function () {
      instance.show = false
      clearTimeout(clock)
      clock = null
    }, duration)
  }
  return instance
}

export default Message
