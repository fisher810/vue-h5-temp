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
    color: #1A1A1A;
    font-size: px2rem(16);
    font-weight: bold;
    font-style: italic;
    text-align: center;
  }
}
</style>
<template>
  <div class="title-warp">
    <div class="title-bg">{{title.toUpperCase()}}</div>
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
