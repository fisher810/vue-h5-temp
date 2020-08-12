<style scoped lang="scss">
@import '../assets/style/vars.scss';
.home {
  background: url('../assets/images/bg-tumile.jpg') no-repeat #FF5924 ;
  background-size: 100% auto;
  min-height: 100vh;
  position: relative;
  padding-bottom: px2rem(25);
}
</style>
<template>
  <div class="home">
    <Loading :loading="loading" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { queryToJson, formatDate } from '../utils/utils'
import api from '../utils/api-server'
import Loading from '../common/Loading.vue'
import Title from '../components/TitleChannel.vue'
import Radar from '../common/charts/Radar.vue'
import Dialog from '../common/Dialog.vue'
@Component({
  components: {
    Loading
    // Title,
    // Radar,
    // Dialog
  }
})
export default class Home extends Vue {
  radarData: Array<any> = []
  loading:boolean = true
  queryJson: any = {}
  appId:number = 20000
  platformType: number = 2
  userId: string = ''
  created () {
    let queryJson = queryToJson(window.location.search.substr(1), true)
    this.queryJson = queryJson
    console.log(queryJson)
    this.appId = queryJson.appId
    this.platformType = queryJson.platformType
    this.userId = (queryJson.userId || queryJson.userId1) + ''
    this.$i18n.locale = this.setLanguage(queryJson.language)
    // this.getHttpData(queryJson)
  }
  mounted () {
    // enum Type { day = 1, week = 2, month = 3 }
    // document.title as string = this.$t(Type[this.type] + this.incomeType.replace(/^(\w)/, ($1) => $1.toUpperCase()) + 'Title')
  }
  @Watch('loadingArr')
  formatDate = formatDate
  setLanguage (lang: string) {
    const LANGUAGE: string[] = ['en', 'ar', 'ru', 'tr', 'zh']
    let language = 'en'
    if (lang) {
      LANGUAGE.some(item => {
        if (lang.includes(item)) {
          language = item
          return true
        }
      })
    }
    return language
  }
  appDeepLink (page) {
    enum AppName {
      '2-20000' = 'livu://com.videochat.livu/',
      '2-19999' = 'tumile://com.rcplatform.livechat/',
      '2-66666' = 'yaar://com.videochat.yaar/',
      '1-20000' = 'livu://videochatiOS90001/'
    }
    // console.log(this.platformType + '-' + this.appId)
    let src = AppName[this.platformType + '-' + this.appId] + page + '/' + this.userId
    // console.log(src)
    window.location.href = src
  }
  // 请求数据
  getHttpData (queryJson) {
    this.getProfileRate(queryJson)
  }
  getProfileRate (query) {
    api.getProfileRate({
      params: {
        ...query
      }
    }).then(res => {
      console.log(res)
      if (!res.code) {
      }
    })
  }
  // 获取雷达图数据
  getRadarData (query) {
    api.getRadarData({
      params: {
        ...query
      },
      restParams: {
        userId: this.userId
      }
    }).then(res => {
      console.log(res)
      if (res.code === 0) {
      }
    })
  }
}
</script>
