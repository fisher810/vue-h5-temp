<!--
 * @Author: fisher
 * @Date: 2020-02-25 19:34:12
 * @LastEditTime: 2020-02-28 19:14:03
 * @LastEditors: your name
 * @Description:
 * @FilePath: /assessment/src/common/CountDown.vue
 * @可以输入预定的版权声明、个性签名、空行等
 -->
<style scoped lang="scss">
@import '../assets/style/vars.scss';
.count-down-warp {
  background-color: #762D09;
  border-radius: 5px;
  padding: px2rem(20) px2rem(40);
  .count-down-des {
    color: #fff;
    font-size: px2rem(20);
    text-align: center;
  }
  .fu-t {
    font-size: px2rem(14);
    color: #fff;
    text-align: center;
    margin-top: px2rem(15);
    margin-bottom: px2rem(10);
  }
  .date-list {
    display: flex;
    justify-content: center;
    li {
      flex: 1;
      max-width: px2rem(60);
      height: px2rem(72);
      margin-left: px2rem(10);
      display: flex;
      flex-direction: column;
      border-radius: 4px;
      overflow: hidden;
      &:first-child {
        margin-left: 0;
      }
      .date-name {
        background-color: #FA6400;
        display: flex;
        justify-content: center;
        align-items: center;
        height: px2rem(30);
        color: #fff;
        font-size: 14px;
        flex-shrink: 0;
      }
      .date-num {
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FA6400;
        flex-grow: 1;
        font-size: px2rem(32);
        font-weight: bold;
      }
    }
  }
}
</style>
<template>
  <div class="count-down-warp">
    <h2 class="count-down-des">{{$t('timeTitle')}}</h2>
    <p class="fu-t">—— {{$t('timeDesc')}} ——</p>
    <ul class="date-list">
      <li>
        <p class="date-name">DAY</p>
        <p class="date-num">{{day}}</p>
      </li>
      <li>
        <p class="date-name">HOUR</p>
        <p class="date-num">{{hour}}</p>
      </li>
      <li>
        <p class="date-name">MIN</p>
        <p class="date-num">{{min}}</p>
      </li>
      <li>
        <p class="date-name">SEC</p>
        <p class="date-num">{{sec}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator'
@Component
export default class CountDown extends Vue {
  day: string = '00'
  hour: string = '00'
  min: string = '00'
  sec: string = '00'
  timer:any = null
  @Prop({ default: 0 })
  endTime!: number
  @Prop({ default: 0 })
  currentTime!: number
  @Watch('endTime', { immediate: true })
  onEndTimeChanged (v) {
    this.countDown()
  }
  timeFormat (param) {
    return param < 10 ? '0' + param : param
  }
  destroyed () {
    clearInterval(this.timer)
    this.timer = null
  }
  countDown () {
    // 对结束时间进行处理渲染到页面
    let endTime = this.endTime
    let newTime = this.currentTime
    this.timer = setInterval(() => {
      newTime = newTime + 1000
      let obj: any
      // 如果活动未结束，对时间进行处理
      if (endTime - newTime > 0) {
        let time:number = (endTime - newTime) / 1000
        // 获取天、时、分、秒
        let day:number = parseInt(time / (60 * 60 * 24) + '')
        let hou:number = parseInt(time % (60 * 60 * 24) / 3600 + '')
        let min:number = parseInt(time % (60 * 60 * 24) % 3600 / 60 + '')
        let sec:number = parseInt(time % (60 * 60 * 24) % 3600 % 60 + '')
        obj = {
          day: this.timeFormat(day),
          hou: this.timeFormat(hou),
          min: this.timeFormat(min),
          sec: this.timeFormat(sec)
        }
      } else { // 活动已结束，全部设置为'00'
        obj = {
          day: '00',
          hou: '00',
          min: '00',
          sec: '00'
        }
        clearInterval(this.timer)
        this.timer = null
        this.countEnd()
      }
      this.day = obj.day
      this.hour = obj.hou
      this.min = obj.min
      this.sec = obj.sec
    }, 1000)
  }
  @Emit()
  countEnd () { }
}
</script>
