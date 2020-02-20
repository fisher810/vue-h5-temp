<!--
 * @Author: fisher
 * @Date: 2020-01-19 14:35:26
 * @LastEditTime : 2020-01-20 15:13:26
 * @LastEditors  : your name
 * @Description: 卡片组件
 * @FilePath: /income-report/src/components/IncomeCard.vue
 -->
<style scoped lang="scss">
@import '../assets/style/vars.scss';
.fixed-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: px2rem(12);
  box-shadow: 0 -2px 8px rgba(0,0,0,.1);
  .bar-left {
    text-align: left;
    font-size: px2rem(14);
    color: #333;
    font-weight: bold;
  }
  .bar-right {
    text-align: right;
    font-size: px2rem(16);
    color: #FF528D;
  }
  .title-fu {
    color: #919191;
    font-size: px2rem(12);
    font-weight: normal;
  }
  .right-t {
    display: flex;
    align-items: center;
    &::before {
      display: block;
      content: '';
      height: px2rem(14);
      width: px2rem(14);
      background: url('../assets/images/coins_icon.png') no-repeat;
      background-size: cover;
      margin-right: px2rem(5);
    }
  }
}
</style>
<template>
  <div class="fixed-bar">
    <div class="bar-left">
      <p class="left-t">{{date}}</p>
      <p class="title-fu">{{$t('utcTime')}}</p>
    </div>
    <div class="bar-right">
      <p class="right-t">{{fixTotal}} Coins</p>
      <p class="title-fu">{{$t('total')}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class FixedBar extends Vue {
  @Prop({ default: '' })
  private date!: string
  @Prop({ default: 0 })
  private fixTotal!: number
}
</script>
