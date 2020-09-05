<style scoped lang="scss">
@import '../assets/style/theme.mixin.scss';
</style>
<template>
  <div class="home" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
   ss
  </div>
</template>

<script lang="ts">
import Message from '../common/messageBox/index'
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { queryToJson, formatDate, triggerService } from '../utils/utils'
import api from '../utils/api-server'
import Loading from '../common/Loading.vue'
import Title from '../components/TitleChannel.vue'
import Radar from '../common/charts/Radar.vue'
import Dialog from '../common/Dialog.vue'
import CanvasProgress from '../components/CanvasProgress.vue'
@Component({
  components: {
    Loading,
    Title,
    CanvasProgress,
    Radar,
    Dialog
  }
})
export default class Home extends Vue {
  theme: string = 'livu'
  radarData: Array<any> = []
  getCoinsData: any = {}
  loading:boolean = false
  coinsLock:boolean = false
  queryJson: any = {}
  appId:number = 20000
  platformType: number = 2
  userId: string = ''
  progressData: any = {
    value: 0,
    color: 'bad',
    date: ''
  }
  // 超过多少用户
  beyondUser: number = 0
  // 冻结功能
  frozenList: Array<string> = []
  // 升级任务
  upTask: Array<any> = []
  // 下级最低分
  nextLowScore: number = 0
  // 信誉权益各分
  creditScore: any = {
    'match_offer': 0,
    'per_day_free_coin': 0,
    'exclusive_picture_frame': 0,
    'match_queue_first': 0,
    'top_of_discovery_list': 0,
    'reputation_mark': 0
  }
  // 违规列表
  violationList: Array<any> = []
  // 新手任务(完善账户)
  accountTask: Array<any> = []
  // 新手任务(充值付费)
  rechargeTask: Array<any> = []
  // 新手任务(活跃互动)
  activeTask: Array<any> = []
  // 日常行为任务
  dailyTask: Array<any> = [
    {
      name: 'daily_behavior'
    },
    {
      name: 'report_violations'
    }
  ]
  // 等级说明
  levelList: Array<any> = []
  // tab
  currentTab: number = 1
  // 跳转绑定邮箱手机
  accountType: string = ''
  // 信誉分历史分页
  historyList: Array<any> = []
  historyPage: number = 1
  historyPageSize: number = 5
  noMoreDate: boolean = false
  historyLoading: boolean = false
  // dialog
  historyDialogShow: boolean = false
  introduceDialogShow: boolean = false
  creditDialogShow: boolean = false
  created () {
    const emailPhoneLink = {
      '0': 'hide',
      '1': 'as/phone',
      '2': 'as/email',
      '3': 'as/enter'
    }
    let queryJson = queryToJson(window.location.search.substr(1), true)
    this.theme = this.getAppName(queryJson.appId)
    this.queryJson = queryJson
    console.log(queryJson)
    // console.log(typeof queryJson.accountType)
    this.accountType = emailPhoneLink[queryJson.accountType] || ''
    this.appId = queryJson.appId
    this.platformType = queryJson.platformType
    this.userId = (queryJson.userId || queryJson.userId1) + ''
    this.$i18n.locale = this.setLanguage(queryJson.language)
    this.getHttpData(queryJson)
  }
  mounted () {
    triggerService({ eventId: '3-3-14-1', 'freeName2': 'creditScore' })
  }
  get readTips () {
    let status = this.progressData.color
    return (status === 'bad' || status === 'poor') && this.frozenList.length > 0 ? (this.$t('creditRead.' + status + 'Has') as string).replace('{func}', () => this.frozenList.map((item: any) => this.$t('creditRead.frozen.' + item.functionName)).join('、')) : this.$t('creditRead.' + status)
  }
  formatDate = formatDate
  getAppName (type: string) {
    const AppName = {
      '20000': 'livu',
      '19999': 'tumile',
      '66666': 'yaar'
    }
    return AppName[type]
  }
  setLanguage (lang: string) {
    const LANGUAGE: any[] = require.context('../language', false, /\.ts$/).keys().map(item => {
      const res = item.match(/\/(.+)\..+$/)
      return res && res[1]
    })
    console.log(LANGUAGE)
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
  /**
   * 获取金币
   */
  getCoins () {
    this.getCoinsApi(this.queryJson)
  }
  appDeepLink (page: string, name: string | undefined, open: boolean | undefined = true) {
    enum AppName {
      '2-20000' = 'livu://com.videochat.livu/',
      '2-19999' = 'tumile://com.rcplatform.livechat/',
      '2-66666' = 'yaar://com.videochat.yaar/',
      '1-20000' = 'livu://videochatiOS90001/'
    }
    if (name) {
      const triggerIdEmum = {
        'person_data': '3-3-14-6',
        'kyc_real_name': '3-3-14-7',
        'third_account': '3-3-14-8',
        'mobile_email_account': '3-3-14-13',
        'first_recharge': '3-3-14-9',
        'first_send_gift': '3-3-14-10',
        'video_call': '3-3-14-11',
        'add_friend': '3-3-14-12'
      }
      triggerService({ eventId: triggerIdEmum[name] })
    }
    // console.log(this.platformType + '-' + this.appId)
    // let src = AppName[this.platformType + '-' + this.appId] + page + '/' + this.userId
    let src = AppName[this.platformType + '-' + this.appId] + page
    if (open) {
      window.location.href = src
    } else {
      return src
    }
  }
  /**
   * 格式化升级任务
   */
  parseUpTask (str: string) {
    const themeColor = {
      'tumile': '#FF5924',
      'yaar': '#00C784',
      'livu': '#6C11FF'
    }
    const LINK = {
      'email': this.accountType,
      'account': 'social',
      'info': 'profile/profileEdit',
      'kyc': 'auth/kyc'
    }
    return str.replace(/\{\((.+)\)\((.*)\)\}/, (...arg) => {
      return '<span onclick="window.location.href = \'' + this.appDeepLink(LINK[arg[1]], '', false) + '\'" style="color: ' + themeColor[this.theme] + '" target="_blank">' + arg[2] + '</span>'
    })
  }
  /**
   * 跳tab
   */
  showTabTwo () {
    this.currentTab = 2
    triggerService({ eventId: '3-3-14-4' })
  }
  /**
   * open dialog
   */
  openHistory () {
    this.historyDialogShow = true
    triggerService({ eventId: '3-3-14-3' })
  }
  openIntroduce () {
    this.introduceDialogShow = true
    triggerService({ eventId: '3-3-14-2' })
  }
  openCredit (index:number = 1) {
    this.creditDialogShow = true
    index = index - 1
    this.$nextTick(() => {
      const ref: any = this.$refs.creditDialogRef
      const list: any = document.querySelectorAll('.credit-rights-item')
      const parent = ref.parentNode
      // ref.style.height = ref.offsetHeight + (parent.offsetHeight - list[list.length - 1].offsetHeight) + 'px'
      const top = Array.from(list).reduce((top:number, el:any, ind:number) => {
        const prev = list[ind - 1]
        return ind <= index ? (prev ? top + prev.offsetHeight + 10 : 0) : top
      }, 0)
      parent.scrollTop = top
    })
    triggerService({ eventId: '3-3-14-5' })
  }
  /**
   * close dialog
   */
  historyDialogClose () {
    this.historyDialogShow = false
  }
  introduceDialogClose () {
    this.introduceDialogShow = false
  }
  creditDialogClose () {
    this.creditDialogShow = false
  }
  // 请求数据
  getHttpData (queryJson) {
    this.getReputationDetail(queryJson)
    this.getReputationIntroduce(queryJson)
    this.getCreditChangeRecords(queryJson)
    this.getReputationLevels(queryJson)
    this.getViolationConfigs(queryJson)
  }
  /**
   * 历吏中的任务名
   */
  parseHistoryTaskName (item:any) {
    const TYPE = +item.displayType
    const TASK_NAME = item.changeSubType
    const TASK_NUM = item.taskNum
    let str = this.$t('dialog1.explain.exp' + TYPE)
    if (TYPE === 1) {
      let task = (this.$t('taskList.' + TASK_NAME) as string).replace('{value}', TASK_NUM)
      str = (this.$t('dialog1.explain.exp' + TYPE) as string).replace('{value}', task)
    }
    return str
  }
  /**
   * 处理任务列表
   */
  handleTask (task: Array<any> = []) {
    const accountTask = ['person_data', 'kyc_real_name', 'third_account', 'mobile_email_account']
    const rechargeTask = ['first_recharge', 'first_send_gift']
    const activeTask = ['video_call', 'add_friend', 'continue_login']
    const dailyTask = ['daily_behavior', 'report_violations']
    const LINK = {
      'person_data': 'profile/profileEdit',
      'person_data_type': 'perfect',
      'kyc_real_name': 'auth/kyc',
      'kyc_real_name_type': 'auth',
      'third_account': 'social',
      'third_account_type': 'bind',
      'mobile_email_account': this.accountType,
      'mobile_email_type': 'bind',
      'first_recharge': 'store',
      'first_send_gift': 'match',
      'video_call': 'match',
      'add_friend': 'match'
    }
    task.forEach(item => {
      let obj = {
        complete: item.complete,
        name: item.taskCode,
        count: item.rewardScore || 0,
        taskNum: item.taskNum || 0,
        link: LINK[item.taskCode],
        linkText: LINK[item.taskCode + '_type'] || 'default'
      }
      accountTask.includes(item.taskCode) && this.accountTask.push(obj)
      rechargeTask.includes(item.taskCode) && this.rechargeTask.push(obj)
      activeTask.includes(item.taskCode) && this.activeTask.push(obj)
      // dailyTask.includes(item.taskCode) && this.dailyTask.push(obj)
    })
  }
  /**
   * 滚动加载更多
   */
  historyScroll (e) {
    // console.log(e.target.scrollTop, e.target.clientHeight, e.target.scrollHeight)
    let target = e.target
    // console.log(target.scrollTop + target.clientHeight, target.scrollHeight)
    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 10 && !this.noMoreDate) {
      this.historyLoading = true
      this.getCreditChangeRecords(this.queryJson)
    }
  }
  /**
   * 获取基本数据
   */
  getReputationDetail (query) {
    this.loading = true
    api.getReputationDetail({
      params: {
        ...query
      }
    }).then(res => {
      console.log('getReputationDetail', res)
      if (res.code === 0) {
        enum StatusName {
          'bad' = 1,
          'poor' = 2,
          'just' = 3,
          'good' = 4,
          'best' = 5,
        }
        let resData = res.data
        const deleteData: String[] = ['risk_warning', 'match_weight_reduction', 'block_account']
        this.getCoinsData = resData.receiveCoinDto
        console.log(this.getCoinsData)
        this.progressData = {
          value: resData.score || 0,
          color: StatusName[resData.status || 1],
          date: formatDate(resData.assessmentTime, 3, '.'),
          reputationImage: resData.reputationImage
        }
        this.beyondUser = resData.beyondUser || 0
        if (resData.current) {
          this.frozenList = (JSON.parse(resData.current.punishmentMeasures) || []).filter(item => !deleteData.includes(item.functionName))
          this.nextLowScore = resData.current.highScore
        }
        this.upTask = resData.nudoUpgradeTask || []
        this.handleTask(resData.taskList || [])
        this.radarData = [
          resData.radarDailyActivity || 0,
          resData.radarPersonData || 0,
          Math.abs(+resData.radarViolation) || 0,
          resData.radarPaymentBehavior || 0,
          resData.radarSocialInteraction || 0
        ]
      }
      this.loading = false
    })
  }
  /**
   * 信誉分
   */
  getReputationIntroduce (query) {
    api.getReputationIntroduce({
      params: {
        ...query
      }
    }).then(res => {
      console.log('getReputationIntroduce', res)
      if (res.code === 0) {
        res.data.forEach(item => {
          this.$set(this.creditScore, item.functionName, item.lowScore || 0)
        })
      }
    })
  }
  /**
   * 获取金币
   */
  getCoinsApi (query) {
    if (this.coinsLock) return
    this.coinsLock = true
    api.getCoins({
      params: {
        messageId: 40000,
        userCold: this.getCoinsData.coinNum,
        ...query
      }
    }).then(res => {
      console.log('getCoinsApi', res)
      if (res.code === 0) {
        Message((this.$t('coinsSuccess') as string).replace('{value}', this.getCoinsData.coinNum))
        this.$set(this.getCoinsData, 'todayReceive', true)
      } else if (res.code === 10080) {
        Message(this.$t('coinsError1'))
        this.$set(this.getCoinsData, 'todayReceive', true)
      } else if (res.code === 10079) {
        Message(this.$t('coinsError2'))
        this.$set(this.getCoinsData, 'todayReceive', true)
      } else {
        Message(this.$t('coinsError'))
      }
      this.coinsLock = false
    })
  }
  /**
   * 信誉分历史
   */
  getCreditChangeRecords (query) {
    api.getCreditChangeRecords({
      params: {
        pageNo: this.historyPage,
        pageSize: this.historyPageSize,
        ...query
      },
      restParams: {
        userId: query.userId
      }
    }).then(res => {
      console.log('getCreditChangeRecords', res)
      if (res.code === 0) {
        if (!res.data.length) {
          this.noMoreDate = true
        } else {
          res.data.forEach(item => this.historyList.push(item))
          if (res.data.length < this.historyPageSize) {
            this.noMoreDate = true
          } else {
            this.historyPage++
          }
        }
      }
      this.historyLoading = false
    })
  }
  /**
   * 违规记录
   */
  getViolationConfigs (query) {
    api.getViolationConfigs({
      params: {
        ...query
      }
    }).then(res => {
      console.log('getViolationConfigs', res)
      if (res.code === 0) {
        res.data.forEach(item => {
          if (!this.violationList.includes(item.violationClassic)) {
            this.violationList.push(item.violationClassic)
          }
        })
      }
    })
  }
  /**
   * 信誉等级说明
   */
  getReputationLevels (query) {
    api.getReputationLevels({
      params: {
        ...query
      }
    }).then(res => {
      console.log('getReputationLevels', res)
      if (res.code === 0) {
        enum StatusName {
          'bad' = 1,
          'poor' = 2,
          'just' = 3,
          'good' = 4,
          'best' = 5,
        }
        this.levelList = res.data.map(item => {
          item.highScore > 100 && (item.highScore = 100)
          item.punishmentMeasures = JSON.parse(item.punishmentMeasures) || []
          item.rewardMeasures = JSON.parse(item.rewardMeasures) || []
          item.upgradeTask = JSON.parse(item.upgradeTask) || []
          item.levelName = StatusName[item.level]
          return item
        })
      }
    })
  }
}
</script>
