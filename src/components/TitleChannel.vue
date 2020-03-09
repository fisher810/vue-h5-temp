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
.title-warp {
  display: flex;
  justify-content: center;
  width: 100%;
  .title-bg {
    background-color: #8A3810;
    color: #fff;
    font-size: px2rem(16);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: px2rem(35);
    width: fit-content;
    padding: 0 px2rem(30);
    max-width: 90%;
    text-align: center;
    line-height: px2rem(15);
  }
}
</style>
<template>
  <div class="title-warp">
    <div class="title-bg">{{title}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class TitleChannel extends Vue {
  @Prop({ default: '' })
  private title!: string
}
</script>
