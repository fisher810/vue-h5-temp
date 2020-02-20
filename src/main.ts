/*
 * @Author: fisher
 * @Date: 2020-01-19 14:35:26
 * @LastEditTime : 2020-01-19 17:22:20
 * @Description: 入口文析
 * @FilePath: /income-report/src/main.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */
import './assets/style/reset.css'
import './assets/style/common.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
Vue.config.productionTip = false
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en', // 语言标识 //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh_CN': require('./language/zh'),
    'en': require('./language/en')
  }
})
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
