<style scoped lang="scss">
@import '../assets/style/vars.scss';
.home {
  min-height: 100vh;
  position: relative;
  padding-bottom: px2rem(25);
  .count-down-w {
    padding: 0 px2rem(15) px2rem(15) px2rem(15);
  }
  .top-help {
    position: relative;
  }
  .help {
    background: url('../assets/images/help.png') no-repeat;
    background-size: 100% 100%;
    height: px2rem(25);
    width: px2rem(25);
    position: absolute;
    top: px2rem(7);
    right: px2rem(10);
  }
  .top-bar {
    padding: px2rem(5) px2rem(30);
    background-color: rgba(79,32,0,.4);
    font-size: 12px;
    color: #fff;
    text-align: center;
    margin-bottom: px2rem(10);
  }
  .main-count {
    color: #fff;
    text-align: center;
    .big-per {
      font-size: px2rem(60);
      font-weight: bold;
      text-shadow:0px 2px 4px rgba(242,36,2,0.31);
      position: relative;
      width: fit-content;
      margin: 0 auto;
      &.up::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: px2rem(-20);
        width: px2rem(10);
        height: px2rem(14);
        background: url('../assets/images/up-white.png') no-repeat;
        background-size: 100% 100%;
      }
      &.down::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: px2rem(-20);
        width: px2rem(10);
        height: px2rem(14);
        background: url('../assets/images/down-white.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    .current-price {
      font-size: px2rem(16);
      margin-top: px2rem(-7);
    }
    .click-href {
      color: #B14B00;
      font-size: px2rem(16);
      text-decoration: underline;
      margin-top: px2rem(5);
    }
  }
  .progress-warp {
    padding: px2rem(10) px2rem(15);
    .progress-bar {
      position: relative;
      background-color: #fff;
      height: px2rem(12);
      border-radius: px2rem(6);
      display: flex;
      padding: 1px;
      .bar-inner {
        flex-grow: 1;
        height: 100%;
        border-right: solid #EB9557 1px;
        &:last-child {
          border: none;
        }
      }
    }
    .progress-per {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      border-radius: px2rem(6);
      background: linear-gradient(90deg,#FF7200 0%,#EC0202 100%);
      border: solid #fff 1px;
    }
  }
  .progress-des {
    padding: 0 px2rem(15);
    color: #fff;
    font-size: px2rem(14);
    line-height: px2rem(18);
  }
  .chart-warp {
    padding: 0 px2rem(15);
    margin: px2rem(15) 0;
    .chart-radar-warp {
      background-color: #fff;
      border-radius: 8px;
      padding: px2rem(12);
    }
    .chart-des {
      background-color: #FEF9EA;
      border-radius: 8px;
      padding: px2rem(15);
      color: #99A9BD;
      font-size: px2rem(14);
      margin-top: px2rem(15);
      li {
        line-height: 20px;
      }
      .text-href {
        color: #FA6400;
        font-weight: bold;
      }
    }
  }
  .task-list {
    padding: 0 px2rem(15);
    margin-top: px2rem(15);
    .task-row {
      background-color: #fff;
      border-radius: px2rem(5);
      display: flex;
      align-items: center;
      padding: px2rem(10);
      padding-bottom: px2rem(7);
      margin-bottom: px2rem(10);
    }
    .task-icon {
      width: px2rem(45);
      height: px2rem(44);
      margin-right: px2rem(10);
      flex-shrink: 0;
      img {
        max-width: 100%;
        display: block;
      }
    }
    .task-content {
      font-size: px2rem(16);
      flex-grow: 1;
      p {
        line-height: 21px;
      }
    }
  }
  .sub-t {
    color: #99A9BD;
    font-size: px2rem(14);
  }
  .task-r-botton {
    background: linear-gradient(90deg,#FF7200 0%,#EC0202 100%);
    width: px2rem(85);
    height: px2rem(32);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: px2rem(14);
    border-radius: px2rem(16);
    flex-shrink: 0;
    &.Completed {
      background: #C7CCCF;
    }
  }
  .per-dialog {
    background-color: rgba(247, 181, 0, 0.08);
    padding: px2rem(15);
    border-radius: 5px;
  }
  .dialog-des {
    font-size: px2rem(16);
  }
  .per-title {
    text-align: center;
    font-size: px2rem(16);
    font-weight: bold;
    margin-top: px2rem(30);
    margin-bottom: px2rem(10);
  }
  .per-list {
    background-color: #fff;
    border-radius: 5px;
    li {
      display: flex;
      p {
        flex: 1;
        text-align: center;
        padding: px2rem(10) 0;
        &:first-child {
          border-right: solid 1px rgba(247, 181, 0, 0.14);
        }
      }
    }
  }
  .row-th {
    p {
      color: #FA6400
    }
  }
  .row-td {
    border-top: solid 1px rgba(247, 181, 0, 0.14);
    p {
      color: #1C2D42;
    }
  }
  .dialog-task-list {
    margin-top: px2rem(10);
  }
  .task-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(247, 181, 0, 0.08);
    padding: px2rem(15);
    border-radius: 5px;
    margin-bottom: px2rem(10);
  }
  .dialog-price-list {
    margin-top: px2rem(10);
  }
  .price-item {
    background-color: rgba(247, 181, 0, 0.08);
    padding: px2rem(15);
    border-radius: 5px;
    margin-bottom: px2rem(10);
  }
  .price-item-t {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .price-t {
      position: relative;
      font-size: px2rem(18);
      display: block;
      padding-left: px2rem(15);
      &.up::before, &.down::before {
        content: '';
        position: absolute;
        top: px2rem(4);
        left: 0;
        width: px2rem(10);
        height: px2rem(14);
      }
      &.up::before {
        background: url('../assets/images/up-red.png') no-repeat;
        background-size: 100% 100%;
      }
      &.down::before {
        background: url('../assets/images/down-green.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    .price-date {
      display: block;
      font-size: px2rem(12);
    }
  }
  .price-item-c {
    font-size: px2rem(14);
    color: #99A9BD;
    margin-top: px2rem(8);
    p {
      line-height: 18px;
    }
  }
}
</style>
<template>
  <div class="home">
    <div class="top-bar">Based on the behavior data of the past week, it is updated Based on the behavior data of the past week</div>
    <div class="count-down-w" v-if="showCountDown">
      <CountDown :showCountDown="showCountDown" :currentTime="currentDate" :endTime="endDate" @count-end="countDownEnd"></CountDown>
    </div>
    <div class="top-help">
      <Title title="— Ranked TOP —" />
      <div class="help" @click="perDialogShow = true"></div>
    </div>
    <div class="main-count">
      <h2 class="big-per">{{currentTop}}%</h2>
      <div class="current-price">Current video price: {{currentPrice}} coin/min</div>
      <p class="click-href" @click="priceDialogShow = true">Check historical prices>></p>
    </div>
    <div class="progress-warp">
      <div class="progress-bar">
        <div class="progress-per" :style="{width: currentTop + '%'}" v-show="currentTop > 0"></div>
        <span class="bar-inner" v-for="(item, index) in new Array(progressColumn)" :key="index"></span>
      </div>
    </div>
    <p class="progress-des">
      Tips: the price of video calls will be increased to {{nextPrice}} Conis/ min if the ranking proportion is increased to the top {{nextTop}}%
    </p>
    <div class="chart-warp">
      <div class="chart-radar-warp">
        <Title title="— Ability to interpret —" />
        <div class="radar-render">
          <Radar :chartData="radarData"></Radar>
        </div>
        <ul class="chart-des">
          <li>1. The data is not perfect enough, we suggest you <span class="text-href" @click="appDeepLink('profile/profileEdit')">go to perfect >></span></li>
          <li>2. You have violated many rules recently, please pay attention</li>
          <li>3. Low revenue, pay attention to improve the phone answering rate and add more friends oh</li>
          <li>4. Low degree of interaction, it is suggested that you improve the chat interaction rate with users</li>
          <li>5. Low level of activity, maintaining daily activity and increasing daily paid call time can improve the growth value.</li>
        </ul>
      </div>
    </div>
    <Title title="— Basic tasks —" />
    <div class="task-list">
      <dl class="task-row">
        <dt class="task-icon"><img src="../assets/images/icon1.png" alt=""></dt>
        <dd class="task-content">
          <p>Complete basic tasks</p>
          <!-- <p class="sub-t">Base Mission 0/200</p> -->
        </dd>
        <dd class="task-r-botton" @click="appDeepLink('profile/profileEdit')">START</dd>
      </dl>
      <dl class="task-row">
        <dt class="task-icon"><img src="../assets/images/icon2.png" alt=""></dt>
        <dd class="task-content">
          <p>Earn revenue from user video calls</p>
        </dd>
      </dl>
      <dl class="task-row">
        <dt class="task-icon"><img src="../assets/images/icon3.png" alt=""></dt>
        <dd class="task-content">
          <p>Use flash chat to call users to earn money</p>
        </dd>
      </dl>
      <dl class="task-row">
        <dt class="task-icon"><img src="../assets/images/icon4.png" alt=""></dt>
        <dd class="task-content">
          <p>Receive gifts from each other during the video process or IM chat</p>
        </dd>
      </dl>
      <!-- <dl class="task-row">
        <dt class="task-icon"><img src="../assets/images/icon5.png" alt=""></dt>
        <dd class="task-content">
          <p>In the event of a violation or being reported and a violation does occur,the growth value will be deducted</p>
        </dd>
      </dl>
      <dl class="task-row">
        <dt class="task-icon"><img src="../assets/images/icon6.png" alt=""></dt>
        <dd class="task-content">
          <p>Reward growth value when answer rate is high,deduct growth value when it is low</p>
        </dd>
      </dl> -->
    </div>
    <Loading :loading="loading" />
    <Dialog :dialogShow="perDialogShow" @dialog-close="perDialogClose" dialog-title="Introduction to anchor strength evaluation">
      <div class="per-dialog">
        <p class="dialog-des">
          The strength assessment of anchors is based on the scheduling of the behavior values of each dimension within the platform of anchors within a certain period of time. Anchors can obtain growth value through basic tasks, active rewards and income rewards, so as to improve the ranking. <br>If the growth value reaches the specified ranking range, the corresponding video call price can be obtained. The price will be the same for all paid calls on the platform.
        </p>
        <p class="per-title">Range and corresponding price rules</p>
        <ul class="per-list">
          <li class="row-th">
            <p>Ranking range</p>
            <p>Video price</p>
          </li>
          <li class="row-td" v-for="(item, index) in ruleData" :key="index">
            <p>>{{item.start}}% ~ ≤{{item.end}}%</p>
            <p>{{item.price}} coins/min</p>
          </li>
        </ul>
      </div>
    </Dialog>
    <Dialog :dialogShow="taskDialogShow" @dialog-close="taskDialogClose" dialog-title="Basic tasks">
      <div class="dialog-task-list">
        <dl class="task-item">
          <dt>
            <p>100% comlpete personal information</p>
            <p class="sub-t">Growth value +300</p>
          </dt>
          <dd class="task-r-botton" @click="taskDialogShow = true">START</dd>
        </dl>
        <dl class="task-item">
          <dt>
            <p>Complete KYC certification</p>
            <p class="sub-t">Growth value +300</p>
          </dt>
          <dd class="task-r-botton" @click="taskDialogShow = true">START</dd>
        </dl>
        <dl class="task-item">
          <dt>
            <p>Active for xx consecutive days and total paid call duration exceeds </p>
            <p class="sub-t">Growth value +300</p>
          </dt>
          <dd class="task-r-botton Completed" @click="taskDialogShow = true">Completed</dd>
        </dl>
      </div>
    </Dialog>
    <Dialog :dialogShow="priceDialogShow" @dialog-close="priceDialogClose" dialog-title="Historical price change">
      <div class="dialog-price-list">
        <dl class="price-item" v-for="(item, index) in priceData" :key="index">
          <dt class="price-item-t">
            <span class="price-t" :class="{'up': item.change === 2, 'down': item.change === 1}">{{item.price}} Coins/Min</span>
            <span class="price-date">{{formatDate(new Date(item.time), 5)}}</span>
          </dt>
          <dd class="price-item-c">
            <p>{{formatType(item.type)}}</p>
          </dd>
        </dl>
      </div>
    </Dialog>
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
import CountDown from '../common/CountDown.vue'
@Component({
  components: {
    Loading,
    Title,
    Radar,
    Dialog,
    CountDown
  }
})
export default class Home extends Vue {
  radarData: Array<any> = []
  loading:boolean = false
  // 进度条的分隔数
  progressColumn:number = 4
  // 进度条的面分比
  perDialogShow: boolean = false
  taskDialogShow: boolean = false
  priceDialogShow: boolean = false
  showCountDown: boolean = false
  currentDate: number = 0
  endDate: number = 0
  currentTop: string = ''
  currentPrice: string = ''
  nextTop: string = ''
  nextPrice: string = ''
  priceData: Array<any> = []
  ruleData: Array<any> = []
  appId:number = 2000
  platformType: number = 2
  userId: string = ''
  loadingHttp:number = 5
  loadingArr: number[] = []
  queryJson: any = {}
  created () {
    let queryJson = queryToJson(window.location.search.substr(1), true)
    this.queryJson = queryJson
    console.log(queryJson)
    this.appId = queryJson.appId
    this.platformType = queryJson.platformType
    this.userId = (queryJson.userId || queryJson.userId1) + ''
    if (queryJson.language === 'zh_CN') {
      this.$i18n.locale = 'zh_CN'
    } else {
      this.$i18n.locale = 'en'
    }
    this.getHttpData(queryJson)
  }
  mounted () {
    // enum Type { day = 1, week = 2, month = 3 }
    // document.title as string = this.$t(Type[this.type] + this.incomeType.replace(/^(\w)/, ($1) => $1.toUpperCase()) + 'Title')
  }
  @Watch('loadingArr')
  onLoadingArrChanged (v) {
    if (v.length === this.loadingHttp) {
      this.loading = false
    }
  }
  formatDate = formatDate
  perDialogClose () {
    this.perDialogShow = false
  }
  taskDialogClose () {
    this.taskDialogShow = false
  }
  priceDialogClose () {
    this.priceDialogShow = false
  }
  countDownEnd () {
    this.showCountDown = false
    this.loadingArr = []
    this.getHttpData(this.queryJson)
  }
  formatType (type: number) {
    enum TypeString {
      'Recent good performance, continue to maintain oh.' = 1,
      'Reducing the number of violations could raise prices faster.' = 2,
      '33faster.' = 3,
      '44faster.' = 4,
      '55faster.' = 5
    }
    return TypeString[type]
  }
  appDeepLink (page) {
    enum AppName {
      '2-2000' = 'livu://com.videochat.livu/',
      '2-19999' = 'tumile://com.rcplatform.livechat/',
      '2-6666' = 'yaar://com.videochat.yaar/',
      '1-2000' = 'livu://videochatiOS90001/'
    }
    let src = AppName[this.platformType + '-' + this.appId] + page + '/' + this.userId
    window.location.href = src
  }
  // 请求数据
  getHttpData (queryJson) {
    this.loading = true
    this.getTime(queryJson)
    this.getProfile(queryJson)
    this.getRadarData(queryJson)
    this.getPrice(queryJson)
    this.getRule(queryJson)
  }
  getTime (query) {
    api.getTime({
      params: {
        userId: this.userId
      }
    }).then(res => {
      console.log(res)
      if (!res.code) {
        if (res.startTime - res.nowTime > 0) {
          this.showCountDown = true
          this.currentDate = res.nowTime
          this.endDate = res.startTime
        }
      }
      this.loadingArr.push(1)
    })
  }
  // 获取总览信息
  getProfile (query) {
    api.getProfile({
      params: {
        ...query
      },
      restParams: {
        userId: this.userId
      }
    }).then(res => {
      console.log(res)
      if (!res.code) {
        this.currentTop = res.rankCurrent
        this.currentPrice = res.priceCurrent
        this.nextPrice = res.priceNext
        this.nextTop = res.rankNext
        this.progressColumn = res.segment || 1
      }
      this.loadingArr.push(1)
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
      if (!res.code) {
        this.radarData = [
          {
            value: [res.activeNext, res.violateNext, res.benefitNext, res.improveNext, res.interactNext]
          },
          {
            value: [res.active, res.violate, res.benefit, res.improve, res.interact],
            level: {
              'Activity': res.activeLevel,
              'Violations': res.violateLevel,
              'Earnings': res.benefitLevel,
              'Data': res.improveLevel,
              'Interactive': res.interactLevel
            },
            win: {
              'Activity': 100 - res.active,
              'Violations': 100 - res.violate,
              'Earnings': 100 - res.benefit,
              'Data': 100 - res.improve,
              'Interactive': 100 - res.interact
            }
          }
        ]
      }
      this.loadingArr.push(1)
    })
  }
  // 获取价格
  getPrice (query) {
    api.getPrice({
      params: {
        ...query
      },
      restParams: {
        userId: this.userId
      }
    }).then(res => {
      console.log(res)
      if (!res.code) {
        this.priceData = res.list
      }
      this.loadingArr.push(1)
    })
  }
  // 获取区间
  getRule (query) {
    api.getRule({
      params: {
        ...query
      },
      restParams: {
        userId: this.userId
      }
    }).then(res => {
      console.log(res)
      if (!res.code) {
        this.ruleData = res
      }
      this.loadingArr.push(1)
    })
  }
}
</script>
