<style scoped lang="scss">
@import '../assets/style/vars.scss';
.home {
  background: url('../assets/images/bg.jpg') no-repeat #FF5924 ;
  background-size: 100% auto;
  min-height: 100vh;
  position: relative;
  padding: px2rem(17);
  font-size: px2rem(16);
  color: #1A1A1A;
  .row-block {
    background-color: #fff;
    border-radius: px2rem(7);
    padding: px2rem(15);
    position: relative;
    &.scroll-box {
      padding: 0;
      padding-top: px2rem(15);
    }
  }
  .block-top {
    position: absolute;
    top: 0;
    left: 0;
    padding: px2rem(15);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: px2rem(12);
    z-index: 99;
  }
  .help {
    background: url('../assets/images/help_icon.png') no-repeat;
    background-size: 100%;
    width: px2rem(22);
    height: px2rem(22);
  }
  .margin-top20 {
    margin-top: px2rem(17);
  }
  .circle-progress {
    width: 100%;
  }
  .credit-read {
    font-size: px2rem(14);
    color: #191919;
    li {
      margin-top: px2rem(15);
      line-height: px2rem(20);
      list-style-type: decimal;
      list-style-position: inside;
    }
  }
  .srcoll-wrap {
    overflow: hidden;
    padding: 0 px2rem(12);
  }
  .rights-list {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: px2rem(20) 0;
  }
  .rights-item {
    min-height: px2rem(110);
    width: px2rem(80);
    flex-shrink: 0;
    background-color: #fff;
    box-shadow:0 0 px2rem(8) rgba(127,53,8,0.26);
    margin-right: px2rem(10);
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding: px2rem(5);
    &:first-child {
      margin-left: px2rem(8);
    }
    &.ml {
      margin-right: px2rem(6);
    }
    &.center {
      flex-direction: row;
    }
  }
  .scroll-bug {
    min-height: px2rem(110);
    width: px2rem(1);
    flex-shrink: 0;
    background-color: #fff;
  }
  .icon-wrap {
    width: px2rem(45);
    height: px2rem(44);
    margin-top: px2rem(5);
    img {
      max-width: 100%;
    }
  }
  .mid-text {
    text-align: center;
    font-size: px2rem(12);
    transform: scale(.8);
    &.no-open {
      color: #AEB6BD;
    }
  }
  .footer-text {
    text-align: center;
    font-size: px2rem(12);
    transform: scale(.8);
    color: #F7B500;
    &.no-open {
      color: #AEB6BD;
    }
  }
  .tab-wrap {
    display: flex;
    margin-top: px2rem(15);
    li {
      flex: 1;
      padding-bottom: px2rem(10);
      border-bottom: solid 1px #C7CCCF;
      text-align: center;
      font-size: px2rem(16);
      color: #D7D7D7;
      &.active {
        border-bottom: solid 2px #1A1A1A;
        color: #1A1A1A;
      }
    }
  }
  .task-container, .strategy-container {
    margin-top: px2rem(15);
  }
  .tab-row-title {
    color: #AEB6BD;
    font-size: px2rem(12);
    margin-bottom: px2rem(8);
    &.mt {
      margin-top: px2rem(25);
    }
  }
  .task-row {
      background-color: #fff;
      box-shadow:0px 0px 10px 0px rgba(127,53,8,0.26);
      border-radius: px2rem(5);
      display: flex;
      align-items: center;
      padding: px2rem(10);
      padding-bottom: px2rem(7);
      margin-bottom: px2rem(12);
      &:last-child {
        margin-bottom: 0;
      }
    }
    .task-content {
      font-size: px2rem(16);
      flex-grow: 1;
      p {
        line-height: px2rem(21);
      }
    }
  }
  .sub-t {
    color: #F7B500;
    font-size: px2rem(14);
  }
  .task-r-botton {
    background: linear-gradient(90deg,#FFC200 0%,#FF5924 100%);
    width: px2rem(85);
    height: px2rem(32);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: px2rem(12);
    border-radius: px2rem(16);
    flex-shrink: 0;
    text-align: center;
    line-height: px2rem(14);
    &.completed {
      color: #C7CCCF;
      background: none;
    }
  }
  .strategy-task {
    background-color: #fff;
    box-shadow:0px 0px 10px 0px rgba(127,53,8,0.26);
    border-radius: px2rem(5);
    padding: px2rem(10);
    margin-bottom: px2rem(12);
    &:last-child {
      margin-bottom: 0;
    }
    dt {
      color: #1C2D42;
      font-size: px2rem(16);
      margin-bottom: px2rem(8);
    }
    dd {
      color: #AEB6BD;
      font-size: px2rem(12);
    }
  }
  .footer-c {
    color: #7F3408;
    font-size: px2rem(12);
    text-align: center;
    padding-top: px2rem(20);
  }
  .no-data {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: px2rem(14);
    color: #c1c1c1;
    img {
      width: px2rem(220);
      height: px2rem(143);
      display: block;
      margin-bottom: px2rem(10);
    }
  }
  .history-item {
    background: linear-gradient(90deg,#FFC200 0%,#FF5924 100%);
    border-radius: px2rem(5);
    padding: px2rem(15);
    margin-top: px2rem(10);
    display: flex;
    align-items: center;
    color: #fff;
    font-size: px2rem(12);
    &:first-child {
      margin-top: 0;
    }
  }
  .item-left {
    padding-right: px2rem(10);
  }
  .item-add {
    font-size: px2rem(16);
    margin-bottom: px2rem(5);
  }
  .item-date {
    margin-top: px2rem(5);
  }
  .item-right {
    padding-top: px2rem(5);
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: solid 1px rgba(255,255,255, .4);
    padding-left: px2rem(10);
  }
  .total-name {
    font-size: px2rem(14);
  }
  .total-num {
    font-size: px2rem(40);
  }
  .introduce-item {
    background: linear-gradient(90deg,#FFC200 0%,#FF5924 100%);
    border-radius: px2rem(5);
    padding: px2rem(15);
    margin-top: px2rem(10);
    color: #fff;
    font-size: px2rem(12);
    &:first-child {
      margin-top: 0;
    }
    p {
      line-height: px2rem(17);
    }
  }
  .info-title {
    font-size: px2rem(18);
    margin-bottom: px2rem(7);
  }
  .medal-info {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #C7CCCF;
    height: px2rem(35);
    padding: 0 px2rem(10);
    margin: px2rem(15) 0 px2rem(10) 0;
  }
  .medal-score {
    font-size: px2rem(14);
    &.best {
      color: #00C784;
    }
    &.good {
      color: #3F46DD;
    }
    &.just {
      color: #AA03FF;
    }
    &.poor {
      color: #E841B2;
    }
    &.bad {
      color: #FF004C;
    }
  }
  .medal-img {
    display: flex;
    align-items: center;
  }
  .medal-box {
    width: px2rem(21);
    height: px2rem(23);
    margin-left: px2rem(8);
    img {
      max-width: 100%;
    }
  }
  .credit-rights-item {
    background: linear-gradient(90deg,#FFC200 0%,#FF5924 100%);
    border-radius: px2rem(5);
    padding: px2rem(15);
    margin-top: px2rem(10);
    font-size: px2rem(12);
    display: flex;
    align-items: stretch;
    &:first-child {
      margin-top: 0;
    }
    .rights-item {
      box-shadow: none;
      border-radius: px2rem(5);
      justify-content: center;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  .rights-item-right {
    color: #fff;
    font-size: px2rem(12);
  }
  .rights-num {
    font-size: px2rem(22);
    margin-bottom: px2rem(8);
  }
  .rights-title {
    font-size: px2rem(14);
    margin-bottom: px2rem(5);
  }
  .div-table {
    background-color: #AE4A00;
    font-size: px2rem(14);
    margin-top: px2rem(10);
    .ul-tr {
      display: flex;
      li {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: px2rem(28);
        border-left: solid 1px #FF5924;
        border-bottom: solid 1px #FF5924;
        &:last-child {
          border-right: none;
        }
      }
    }
  }
  .medal-img-box {
    width: px2rem(21);
    height: px2rem(23);
  }
</style>
<template>
  <div class="home">
    <div class="row-block">
      <div class="block-top">
        <div @click="historyDialogShow = true">Credit history</div>
        <div @click="introduceDialogShow = true" class="help"></div>
      </div>
      <div class="circle-progress">
        <CanvasProgress :progressData="progressData">
          <template>
            <div>
              Has exceeded the global 77% of users, please continue refueling!
            </div>
          </template>
        </CanvasProgress>
      </div>
    </div>
    <div class="row-block margin-top20">
      <Title title="Credit reading"></Title>
      <ul class="credit-read">
        <li>The current credit score is good, please continue to maintain, upgrade to 5 star credit can get some privileges.</li>
        <li>Please avoid pornography and other illegal behaviors in the video</li>
      </ul>
    </div>
    <div class="row-block scroll-box margin-top20">
      <Title title="Reputation rights"></Title>
      <div class="srcoll-wrap">
        <div class="rights-list" @click="creditDialogShow = true">
          <dl class="rights-item">
            <dt class="icon-wrap">
              <img src="../assets/images/icon1.png" alt="">
            </dt>
            <dd class="mid-text">Matched queue acceleration</dd>
            <dd class="footer-text">≥80</dd>
          </dl>
          <dl class="rights-item">
            <dt class="icon-wrap">
              <img src="../assets/images/icon2.png" alt="">
            </dt>
            <dd class="mid-text">Higher ranking, more</dd>
            <dd class="footer-text">≥80</dd>
          </dl>
          <dl class="rights-item">
            <dt class="icon-wrap">
              <img src="../assets/images/icon3.png" alt="">
            </dt>
            <dd class="mid-text">Exclusive badge identification</dd>
            <dd class="footer-text no-open">Not opened</dd>
          </dl>
          <dl class="rights-item">
            <dt class="icon-wrap">
              <img src="../assets/images/icon4.png" alt="">
            </dt>
            <dd class="mid-text">Matched queue acceleration</dd>
            <dd class="footer-text">≥80</dd>
          </dl>
          <dl class="rights-item">
            <dt class="icon-wrap">
              <img src="../assets/images/icon5.png" alt="">
            </dt>
            <dd class="mid-text">Matched queue acceleration</dd>
            <dd class="footer-text">≥80</dd>
          </dl>
          <dl class="rights-item">
            <dt class="icon-wrap">
              <img src="../assets/images/icon6.png" alt="">
            </dt>
            <dd class="mid-text">Matched queue acceleration</dd>
            <dd class="footer-text">≥80</dd>
          </dl>
          <dl class="rights-item center">
            <dd class="mid-text no-open">More benefits, stay tuned</dd>
          </dl>
          <div class="scroll-bug"></div>
        </div>
      </div>
    </div>
    <div class="row-block margin-top20">
      <Title title="How to improve credit score"></Title>
      <ul class="tab-wrap">
        <li :class="{active: currentTab === 1}" @click="currentTab = 1">Task</li>
        <li :class="{active: currentTab === 2}" @click="currentTab = 2">Strategy</li>
      </ul>
      <div class="task-container" v-show="currentTab === 1">
        <h2 class="tab-row-title">New task（Perfect the account）</h2>
        <dl class="task-row">
          <dd class="task-content">
            <p>Personal data 100% perfect</p>
            <p class="sub-t">+2 credit points</p>
          </dd>
          <dd class="task-r-botton" @click="appDeepLink('profile')">START</dd>
        </dl>
        <dl class="task-row">
          <dd class="task-content">
            <p>KYC real-name authentication</p>
            <p class="sub-t">+2 credit points</p>
          </dd>
          <dd class="task-r-botton" @click="appDeepLink('profile')">START</dd>
        </dl>
        <dl class="task-row">
          <dd class="task-content">
            <p>Third-party social account binding</p>
            <p class="sub-t">+2 credit points</p>
          </dd>
          <dd class="task-r-botton" @click="appDeepLink('profile')">START</dd>
        </dl>
        <dl class="task-row">
          <dd class="task-content">
            <p>Bind to email or mobile phone number</p>
            <p class="sub-t">+2 credit points</p>
          </dd>
          <dd class="task-r-botton" @click="appDeepLink('profile')">START</dd>
        </dl>
        <h2 class="tab-row-title mt">New task（Perfect the account）</h2>
        <dl class="task-row">
          <dd class="task-content">
            <p>Personal data 100% perfect</p>
            <p class="sub-t">+2 credit points</p>
          </dd>
          <dd class="task-r-botton completed" @click="appDeepLink('profile')">COMPLETE</dd>
        </dl>
        <dl class="task-row">
          <dd class="task-content">
            <p>KYC real-name authentication</p>
            <p class="sub-t">+2 credit points</p>
          </dd>
          <dd class="task-r-botton" @click="appDeepLink('profile')">START</dd>
        </dl>
        <dl class="task-row">
          <dd class="task-content">
            <p>Third-party social account binding</p>
            <p class="sub-t">+2 credit points</p>
          </dd>
          <dd class="task-r-botton" @click="appDeepLink('profile')">START</dd>
        </dl>
      </div>
      <!-- tab2 -->
      <div class="strategy-container" v-show="currentTab === 2">
        <div class="radar-render">
          <Radar :chartData="radarData" v-if="currentTab === 2"></Radar>
        </div>
        <dl class="strategy-task">
          <dt>Personal information</dt>
          <dd>Very good: if the credit status is very good, then the prompt copy is "the current credit score is very good, please continue to maintain</dd>
        </dl>
        <dl class="strategy-task">
          <dt>Personal information</dt>
          <dd>Very good: if the credit status is very good, then the prompt copy is "the current credit score is very good, please continue to maintain</dd>
        </dl>
        <dl class="strategy-task">
          <dt>Personal information</dt>
          <dd>Very good: if the credit status is very good, then the prompt copy is "the current credit score is very good, please continue to maintain</dd>
        </dl>
      </div>
      <p class="footer-c">More credit from QA</p>
    </div>
    <Dialog :dialogShow="historyDialogShow" @dialog-close="historyDialogClose" dialog-title="Credit History">
      <div class="history-dialog">
        <!-- <div class="no-data">
          <img src="../assets/images/no-data.png" alt="">
          <p>{{$t('noData')}}</p>
        </div> -->
        <dl class="history-item">
          <dt class="item-left">
            <p class="item-add">+4</p>
            <p class="item-des">Description: daily active behavior reward honor points</p>
            <p class="item-date">2020.02.23 10:22:21</p>
          </dt>
          <dd class="item-right">
            <p class="total-name">Total score</p>
            <p class="total-num">89</p>
          </dd>
        </dl>
        <dl class="history-item">
          <dt class="item-left">
            <p class="item-add">+4</p>
            <p class="item-des">Description: daily active behavior reward honor points</p>
            <p class="item-date">2020.02.23 10:22:21</p>
          </dt>
          <dd class="item-right">
            <p class="total-name">Total score</p>
            <p class="total-num">89</p>
          </dd>
        </dl>
        <dl class="history-item">
          <dt class="item-left">
            <p class="item-add">+4</p>
            <p class="item-des">Description: daily active behavior reward honor points</p>
            <p class="item-date">2020.02.23 10:22:21</p>
          </dt>
          <dd class="item-right">
            <p class="total-name">Total score</p>
            <p class="total-num">89</p>
          </dd>
        </dl>
        <dl class="history-item">
          <dt class="item-left">
            <p class="item-add">+4</p>
            <p class="item-des">Description: daily active behavior reward honor points</p>
            <p class="item-date">2020.02.23 10:22:21</p>
          </dt>
          <dd class="item-right">
            <p class="total-name">Total score</p>
            <p class="total-num">89</p>
          </dd>
        </dl>
      </div>
    </Dialog>
    <Dialog :dialogShow="introduceDialogShow" @dialog-close="introduceDialogClose" dialog-title="Reputation sub-introduction">
      <div class="introduce-dialog">
        <!-- <div class="no-data">
          <img src="../assets/images/no-data.png" alt="">
          <p>{{$t('noData')}}</p>
        </div> -->
        <div class="introduce-item">
          <h2 class="info-title">Introduce</h2>
          <p>Credit value is a system built by the platform to judge the user's credit status. Combining with the user's video call history, violation record, consumption record, personal information and social behavior record, the total credit value of the user is judged.</p>
        </div>
        <div class="introduce-item">
          <h2 class="info-title">Calculation method</h2>
          <p>1、Credit value is a system built by the platform to judge the user's credit status.</p>
          <p>2、Combining with the user's video call history, violation record, consumption record, personal information and social behavior record, the total credit value of the user is judged.</p>
        </div>
        <div class="introduce-item">
          <h2 class="info-title">Class rules and interests</h2>
          <div class="medal-info">
            <h2 class="medal-score best">BEST ≥90-100</h2>
            <div class="medal-img">Medal award
              <div class="medal-box"><img src="../assets/images/b1.png" alt=""></div>
            </div>
          </div>
          <p>1、Credit </p>
          <div class="medal-info">
            <h2 class="medal-score good">BEST ≥60-80</h2>
            <div class="medal-img">Medal award
              <div class="medal-box"><img src="../assets/images/b2.png" alt=""></div>
            </div>
          </div>
          <p>1、Credit </p>
          <div class="medal-info">
            <h2 class="medal-score just">JUST ≥40-60</h2>
          </div>
          <p>1、Credit </p>
          <div class="medal-info">
            <h2 class="medal-score poor">POOR ≥20-40</h2>
          </div>
          <p>1、Credit </p>
          <div class="medal-info">
            <h2 class="medal-score bad">BAD ≥0-20</h2>
          </div>
          <p>1、Credit </p>
        </div>
      </div>
    </Dialog>
    <Dialog :dialogShow="creditDialogShow" @dialog-close="creditDialogClose" dialog-title="Reputation rights">
      <div class="credit-dialog">
        <!-- <div class="no-data">
          <img src="../assets/images/no-data.png" alt="">
          <p>{{$t('noData')}}</p>
        </div> -->
        <div class="credit-rights-item">
          <dl class="rights-item">
            <dt class="icon-wrap">
              <img src="../assets/images/icon1.png" alt="">
            </dt>
            <dd class="mid-text">Matched queue acceleration</dd>
            <dd class="footer-text">≥80</dd>
          </dl>
          <div class="rights-item-right">
            <h2 class="rights-num">≥80</h2>
            <h2 class="rights-title">Description of interests:</h2>
            <p>1、Credit value is a system built by the platform to judge the user's credit status.</p>
            <p>2、Combining with the user's video call history, violation record, </p>
            <div class="div-table">
              <ul class="ul-tr">
                <li>SCORE</li>
                <li>STATE</li>
                <li>MEDAL</li>
              </ul>
              <ul class="ul-tr">
                <li>60-80</li>
                <li>GOOD</li>
                <li><img src="../assets/images/b2.png" class="medal-img-box" alt=""></li>
              </ul>
              <ul class="ul-tr">
                <li>80-100</li>
                <li>BEST</li>
                <li><img src="../assets/images/b1.png" class="medal-img-box" alt=""></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="credit-rights-item">
          <dl class="rights-item">
            <dt class="icon-wrap">
              <img src="../assets/images/icon2.png" alt="">
            </dt>
            <dd class="mid-text">Matched queue acceleration</dd>
            <dd class="footer-text">≥80</dd>
          </dl>
          <div class="rights-item-right">
            <h2 class="rights-num">≥80</h2>
            <h2 class="rights-title">Description of interests:</h2>
            <p>1、Credit value is a system built by the platform to judge the user's credit status.</p>
            <p>2、Combining with the user's video call history, violation record, </p>
          </div>
        </div>
      </div>
    </Dialog>
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
  radarData: Array<any> = [45, 67, 34, 78, 90]
  loading:boolean = false
  queryJson: any = {}
  appId:number = 20000
  platformType: number = 2
  userId: string = ''
  progressData: any = {
    value: 17,
    color: 'bad',
    date: '2020-02-02'
  }
  currentTab: number = 1
  historyDialogShow: boolean = false
  introduceDialogShow: boolean = false
  creditDialogShow: boolean = false
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
