<style scoped lang="scss">
@import '../assets/style/theme.mixin.scss';
.home {
  @include body-bg(body-bg);
  background-repeat: no-repeat;
  background-size: 100% auto;
  min-height: 100vh;
  padding: px2rem(15);
  font-size: px2rem(16);
  color: #1A1A1A;
  position: relative;
  z-index: 9;
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
    @include bg-color(light-primary);
    border-radius: 50%;
    background-image: url('../assets/images/help_icon.png');
    background-size: 100%;
    width: px2rem(22);
    height: px2rem(22);
  }
  .margin-top20 {
    margin-top: px2rem(15);
  }
  .margin-btm20 {
    margin-bottom: px2rem(15);
  }
  .circle-progress {
    width: 100%;
  }
  .credit-read {
    font-size: px2rem(14);
    color: #191919;
    padding-top: px2rem(5);
    li {
      margin-top: px2rem(8);
      line-height: px2rem(18);
      list-style-type: decimal;
      list-style-position: inside;
      p {
        padding-left: px2rem(10);
        color: #666;
        &:first-child {
          margin-top: px2rem(5);
        }
      }
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
    box-shadow:0px 0px 7px 0px rgba(0,0,0,.14);
    margin-right: px2rem(10);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    flex-shrink: 1;
    min-height: px2rem(12);
    @include font-color(primary);
    &.no-open {
      color: #AEB6BD;
    }
  }
  .tab-wrap {
    display: flex;
    margin-top: px2rem(15);
    li {
      flex: 1;
      display: flex;
      padding-bottom: px2rem(10);
      border-bottom: solid 1px #C7CCCF;
      justify-content: center;
      align-items: center;
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
      @include box-shadow(light-primary-1);
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
      font-size: px2rem(14);
      flex-grow: 1;
      p {
        line-height: px2rem(21);
      }
    }
  }
  .sub-t {
    @include font-color(primary);
    margin-top: px2rem(3);
    font-size: px2rem(12);
  }
  .task-r-botton {
    @include linear-bg(linear-bg);
    width: px2rem(85);
    min-height: px2rem(32);
    padding: 0 px2rem(7);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: px2rem(12);
    border-radius: px2rem(16);
    flex-shrink: 0;
    text-align: center;
    line-height: px2rem(12);
    &.completed {
      color: #C7CCCF;
      background: none;
    }
  }
  .strategy-task {
    background-color: #fff;
    @include box-shadow(light-primary-1);
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
    @include font-color(dark-primary);
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
    @include linear-bg(linear-bg);
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
    flex-grow: 1;
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
    @include linear-bg(linear-bg);
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
    margin: px2rem(10) 0 0 0;
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
    @include linear-bg(linear-bg);
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
      margin-right: 0;
      justify-content: center;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  .rights-item-right {
    color: #fff;
    font-size: px2rem(12);
    padding: 0 px2rem(10);
  }
  .rights-num {
    font-size: px2rem(22);
    margin-bottom: px2rem(8);
  }
  .rights-title {
    font-size: px2rem(12);
    margin-bottom: px2rem(5);
  }
  .div-table {
    @include bg-color(dark-primary);
    font-size: px2rem(14);
    margin-top: px2rem(10);
    .ul-tr {
      display: flex;
      li {
        flex: 1;
        display: flex;
        justify-content: center;
        font-size: px2rem(12);
        align-items: center;
        text-align: center;
        height: px2rem(28);
        border-left: solid 1px rgba(255,255,255, .5);
        border-bottom: solid 1px rgba(255,255,255, .5);
        &:last-child {
          border-right: none;
        }
        &:first-child {
          border-left: none;
        }
      }
    }
  }
  .medal-img-box {
    width: px2rem(21);
    height: px2rem(23);
  }
  .level-task {
    background-color: rgba(255,255,255,.2);
    padding: px2rem(10);
  }
  .task-w-t {
    font-size: px2rem(14);
    font-weight: bold;
    margin: px2rem(8) 0;
  }
  .task-ww-list {
    li {
      line-height: px2rem(18);
      list-style-type: decimal;
      list-style-position: inside;
    }
  }
  .list-no-more {
    margin-top: px2rem(10);
    text-align: center;
    font-size: px2rem(12);
  }
  .history-list-loading {
    position: fixed;
    bottom: px2rem(10);
    left: 0;
    width: 100%;
    .loading {
      margin-top: -.1.5rem;
      margin-left: -.1.5rem;
      width: .3rem;
      height: .3rem;
      border: 0.03rem solid #eeeeee;
      border-top: 0.03rem solid #33adee;
    }
  }
  .get-coins-w {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .get-coing-bt {
      width: fit-content;
      max-width: px2rem(90);
      padding:0 px2rem(8);
      background: linear-gradient(90deg,#FFC200 0%,#FF5924 100%);
      &.disabled {
        background: #909399;
      }
    }
  }
  .coins-icon {
    display: flex;
    align-items: center;
    text-justify: center;
    .coins-img {
      width: px2rem(50);
      height: px2rem(50);
      flex-shrink: 0;
      margin-top: px2rem(4);
      img {
        max-width: 100%;
      }
    }
    .coins-explain {
      margin: 0 px2rem(8);
      font-size: px2rem(12);
      .title {
        // @include font-color(primary);
        color: #FF5924;
        font-size: px2rem(16);
        margin-bottom: px2rem(3);
      }
    }
  }
  .fix-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    opacity: .9;
    img {
      max-width: 100%;
    }
  }
</style>
<template>
  <div class="home" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <div class="fix-bg">
      <img src="../assets/images/bg.png" alt="">
    </div>
    <div class="row-block margin-btm20" v-if="getCoinsData.receiveReputation && !getCoinsData.todayReceive">
        <div class="get-coins-w">
          <dl class="coins-icon">
            <dt class="coins-img"><img src="../assets/images/coins.png" alt=""></dt>
            <dd class="coins-explain">
              <p class="title">{{$t('backTitle')}}</p>
              <p>{{$t('backDes')}}</p>
            </dd>
          </dl>
          <div class="task-r-botton get-coing-bt" :class="{'disabled': coinsLock}" @click="getCoins">{{$t('getCoins').replace('{value}', getCoinsData.coinNum)}}</div>
        </div>
    </div>
    <div class="row-block">
      <div class="block-top">
        <div @click="openHistory">{{$t('creditHistory')}}</div>
        <div @click="openIntroduce" class="help"></div>
      </div>
      <div class="circle-progress">
        <CanvasProgress :progressData="progressData">
          <template>
            <div>
              {{$t('scoreTips').replace('{value}', beyondUser)}}
            </div>
          </template>
        </CanvasProgress>
      </div>
    </div>
    <div class="row-block margin-top20">
      <Title :title="$t('title1')"></Title>
      <ul class="credit-read">
        <li>{{readTips}}</li>
        <li v-if="upTask.length">
          {{$t('creditRead.upTask.upTips').replace('{value}', nextLowScore)}}
          <p v-for="item in upTask" :key="item" v-show="item.link !== 'hide'" v-html="'- ' + parseUpTask($t('creditRead.upTask.' + item.taskCode))"></p>
        </li>
        <li v-if="violationList.length">{{$t('creditRead.globalTips').replace('{value}', violationList.map(item => $t('creditRead.' + item)).join('、'))}}</li>
      </ul>
    </div>
    <div class="row-block scroll-box margin-top20">
      <Title :title="$t('title2')"></Title>
      <div class="srcoll-wrap">
        <div class="rights-list">
          <dl class="rights-item" @click="openCredit(1)">
            <dt class="icon-wrap">
              <img src="../assets/images/match_offer.png" alt="">
            </dt>
            <dd class="mid-text">{{$t('creditList.match_offer')}}</dd>
            <dd class="footer-text">≥{{creditScore.match_offer}}</dd>
          </dl>
          <dl class="rights-item" @click="openCredit(2)">
            <dt class="icon-wrap">
              <img src="../assets/images/per_day_free_coin.png" alt="">
            </dt>
            <dd class="mid-text">{{$t('creditList.per_day_free_coin')}}</dd>
            <dd class="footer-text">≥{{creditScore.per_day_free_coin}}</dd>
          </dl>
          <dl class="rights-item" @click="openCredit(3)">
            <dt class="icon-wrap">
              <img src="../assets/images/exclusive_picture_frame.png" alt="">
            </dt>
            <dd class="mid-text">{{$t('creditList.exclusive_picture_frame')}}</dd>
            <dd class="footer-text">≥{{creditScore.exclusive_picture_frame}}</dd>
          </dl>
          <dl class="rights-item" @click="openCredit(4)">
            <dt class="icon-wrap">
              <img src="../assets/images/match_queue_first.png" alt="">
            </dt>
            <dd class="mid-text">{{$t('creditList.match_queue_first')}}</dd>
            <dd class="footer-text">≥{{creditScore.match_queue_first}}</dd>
          </dl>
          <dl class="rights-item" @click="openCredit(5)">
            <dt class="icon-wrap">
              <img src="../assets/images/top_of_discovery_list.png" alt="">
            </dt>
            <dd class="mid-text">{{$t('creditList.top_of_discovery_list')}}</dd>
            <dd class="footer-text">≥{{creditScore.top_of_discovery_list}}</dd>
          </dl>
          <dl class="rights-item" @click="openCredit(6)">
            <dt class="icon-wrap">
              <img src="../assets/images/reputation_mark.png" alt="">
            </dt>
            <dd class="mid-text">{{$t('creditList.reputation_mark')}}</dd>
            <dd class="footer-text">≥{{creditScore.reputation_mark}}</dd>
          </dl>
          <dl class="rights-item center">
            <dd class="mid-text no-open">{{$t('creditList.moreCredit')}}</dd>
          </dl>
          <div class="scroll-bug"></div>
        </div>
      </div>
    </div>
    <div class="row-block margin-top20">
      <Title :title="$t('title3')"></Title>
      <ul class="tab-wrap">
        <li :class="{active: currentTab === 1}" @click="currentTab = 1">{{$t('tab1')}}</li>
        <li :class="{active: currentTab === 2}" @click="showTabTwo">{{$t('tab2')}}</li>
      </ul>
      <div class="task-container" v-show="currentTab === 1">
        <h2 class="tab-row-title" v-show="accountTask.length">{{$t('taskCategory.category1')}}</h2>
        <dl class="task-row" v-for="item in accountTask" v-show="item.link !== 'hide'" :key="item.taskCode">
          <dd class="task-content">
            <p>{{$t('taskList.' + item.name).replace('{value}', item.taskNum)}}</p>
            <p class="sub-t">+{{item.count}} {{$t('taskList.creditPoints')}}</p>
          </dd>
          <dd class="task-r-botton" v-if="!item.complete && item.link" @click="appDeepLink(item.link, item.name)">{{$t('taskList.' + item.linkText)}}</dd>
          <dd class="task-r-botton completed" v-if="item.complete">{{$t('taskList.' + item.linkText + 'Complete')}}</dd>
        </dl>
        <h2 class="tab-row-title mt" v-if="rechargeTask.length">{{$t('taskCategory.category2')}}</h2>
        <dl class="task-row" v-for="item in rechargeTask" :key="item.taskCode">
          <dd class="task-content">
            <p>{{$t('taskList.' + item.name).replace('{value}', item.taskNum)}}</p>
            <p class="sub-t">+{{item.count}} {{$t('taskList.creditPoints')}}</p>
          </dd>
         <dd class="task-r-botton" v-if="!item.complete && item.link" @click="appDeepLink(item.link, item.name)">{{$t('taskList.' + item.linkText)}}</dd>
          <dd class="task-r-botton completed" v-if="item.complete">{{$t('taskList.' + item.linkText + 'Complete')}}</dd>
        </dl>
        <h2 class="tab-row-title mt" v-if="activeTask.length">{{$t('taskCategory.category3')}}</h2>
        <dl class="task-row" v-for="item in activeTask" :key="item.taskCode">
          <dd class="task-content">
            <p>{{$t('taskList.' + item.name).replace('{value}', item.taskNum)}}</p>
            <p class="sub-t">+{{item.count}} {{$t('taskList.creditPoints')}}</p>
          </dd>
          <dd class="task-r-botton" v-if="!item.complete && item.link" @click="appDeepLink(item.link, item.name)">{{$t('taskList.' + item.linkText)}}</dd>
          <dd class="task-r-botton completed" v-if="item.complete">{{$t('taskList.' + item.linkText + 'Complete')}}</dd>
        </dl>
        <h2 class="tab-row-title mt" v-if="dailyTask.length">{{$t('taskCategory.category4')}}</h2>
        <dl class="task-row" v-for="item in dailyTask" :key="item.taskCode">
          <dd class="task-content">
            <p>{{$t('taskList.' + item.name)}}</p>
            <p class="sub-t">+N {{$t('taskList.' + item.name + '_tips')}}</p>
          </dd>
        </dl>
      </div>
      <!-- tab2 -->
      <div class="strategy-container" v-show="currentTab === 2">
        <div class="radar-render">
          <Radar :chartData="radarData" v-if="currentTab === 2"></Radar>
        </div>
        <dl class="strategy-task">
          <dt>{{$t('explain.t1')}}</dt>
          <dd>{{$t('explain.des1')}}</dd>
        </dl>
         <dl class="strategy-task">
          <dt>{{$t('explain.t2')}}</dt>
          <dd>{{$t('explain.des2')}}</dd>
        </dl>
         <dl class="strategy-task">
          <dt>{{$t('explain.t3')}}</dt>
          <dd>{{$t('explain.des3')}}</dd>
        </dl>
         <dl class="strategy-task">
          <dt>{{$t('explain.t4')}}</dt>
          <dd>{{$t('explain.des4')}}</dd>
        </dl>
         <dl class="strategy-task">
          <dt>{{$t('explain.t5')}}</dt>
          <dd>{{$t('explain.des5')}}</dd>
        </dl>
      </div>
      <!-- <p class="footer-c">{{$t('moreTips')}}</p> -->
    </div>
    <Dialog :dialogShow="historyDialogShow" @dialog-scroll="historyScroll" name="history" @dialog-close="historyDialogClose" :dialog-title="$t('dialog1.title')">
      <div class="history-dialog">
        <div class="no-data" v-show="!historyList.length">
          <img src="../assets/images/no-data.png" alt="">
        </div>
        <dl class="history-item" v-for="item in historyList" :key="item.afterScore">
          <dt class="item-left">
            <p class="item-add">{{item.beforeScore > item.afterScore ? '-' : (item.beforeScore === item.afterScore ? '' : '+')}}{{item.changeScore}}</p>
            <p class="item-des">{{parseHistoryTaskName(item)}}</p>
            <p class="item-date">{{formatDate(item.createTime)}}</p>
          </dt>
          <dd class="item-right">
            <p class="total-name">{{$t('dialog1.total')}}</p>
            <p class="total-num">{{item.afterScore}}</p>
          </dd>
        </dl>
        <div class="history-list-loading" v-show="historyLoading">
          <div class="loading"></div>
        </div>
        <div class="list-no-more" v-show="noMoreDate">{{$t('listNo')}}</div>
      </div>
    </Dialog>
    <Dialog :dialogShow="introduceDialogShow" @dialog-close="introduceDialogClose" :dialog-title="$t('dialog2.title')">
      <div class="introduce-dialog">
        <!-- <div class="no-data">
          <img src="../assets/images/no-data.png" alt="">
        </div> -->
        <div class="introduce-item">
          <h2 class="info-title">{{$t('dialog2.p1title')}}</h2>
          <p>{{$t('dialog2.p1des')}}</p>
        </div>
        <div class="introduce-item">
          <h2 class="info-title">{{$t('dialog2.p2title')}}</h2>
          <p v-html="$t('dialog2.p2des')"></p>
        </div>
        <div class="introduce-item">
          <h2 class="info-title">{{$t('dialog2.p3title')}}</h2>
          <div class="level-wrap" v-for="item in levelList" :key="item.id">
            <div class="medal-info">
              <h2 :class="'medal-score ' + item.levelName">{{$t(item.levelName)}} {{item.level === 1 ? '&lt;' + item.highScore : '≥' + item.lowScore + ' - ' + (item.level === 5 ? '≤' : '&lt;') + item.highScore}}</h2>
              <div class="medal-img" v-if="item.reputationImage">
                <div class="medal-box"><img :src="item.reputationImage" alt=""></div>
              </div>
            </div>
            <div class="level-task">
              <div v-show="!item.upgradeTask.length && !item.rewardMeasures.length && !item.punishmentMeasures.length">{{$t('noData')}}</div>
              <div class="task-ww" v-if="item.upgradeTask.length">
                <h2 class="task-w-t">{{$t('dialog2.upTask')}}</h2>
                <ul class="task-ww-list">
                  <li v-for="itemData in item.upgradeTask" :key="itemData.functionName">{{$t('dialog2.task.' + itemData.functionName).replace('{value}', itemData.num)}}</li>
                </ul>
              </div>
              <div class="task-ww" v-if="item.rewardMeasures.length || item.punishmentMeasures.length">
                <h2 class="task-w-t">{{$t('dialog2.reward')}}</h2>
                <ul class="task-ww-list">
                  <li v-for="itemData in item.rewardMeasures" :key="itemData.functionName">{{$t('creditList.' + itemData.functionName)}}</li>
                  <li v-for="itemData in item.punishmentMeasures" :key="itemData.punishmentMeasures">{{$t('dialog2.punishment.' + itemData.functionName)}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
    <Dialog :dialogShow="creditDialogShow" @dialog-close="creditDialogClose" :dialog-title="$t('dialog3.title')">
      <div class="credit-dialog" ref="creditDialogRef">
        <!-- <div class="no-data">
          <img src="../assets/images/no-data.png" alt="">
        </div> -->
        <div class="credit-rights-item" v-for="item in Object.keys(creditScore)" :key="item">
          <dl class="rights-item">
            <dt class="icon-wrap">
              <img :src="require('../assets/images/' + item + '.png')" alt="">
            </dt>
            <dd class="mid-text">{{$t('creditList.' + item)}}</dd>
            <dd class="footer-text">≥{{creditScore[item]}}</dd>
          </dl>
          <div class="rights-item-right">
            <h2 class="rights-num">≥{{creditScore[item]}}</h2>
            <h2 class="rights-title">{{$t('creditList.' + item + '_require').replace('{value}', creditScore[item])}}</h2>
            <p>{{$t('creditList.' + item + '_explain')}}</p>
            <div class="div-table" v-if="item === 'reputation_mark'">
              <ul class="ul-tr">
                <li>{{$t('dialog3.score')}}</li>
                <li>{{$t('dialog3.status')}}</li>
                <li>{{$t('dialog3.medal')}}</li>
              </ul>
              <ul class="ul-tr">
                <li>{{'≥' + (levelList[0] && levelList[0].lowScore) + ' - ≤' + (levelList[0] && levelList[0].highScore)}}</li>
                <li>{{$t('best')}}</li>
                <li><img :src="levelList[0] && levelList[0].reputationImage" class="medal-img-box" alt=""></li>
              </ul>
              <ul class="ul-tr">
                <li>{{'≥' + (levelList[1] && levelList[1].lowScore) + ' - &lt;' + (levelList[1] && levelList[1].highScore)}}</li>
                <li>{{$t('good')}}</li>
                <li><img :src="levelList[1] && levelList[1].reputationImage" class="medal-img-box" alt=""></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
    <Loading :loading="loading" />
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
