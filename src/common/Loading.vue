<!--
 * @Author: fisher
 * @Date: 2020-02-20 11:24:54
 * @LastEditTime: 2020-02-27 14:20:04
 * @LastEditors: your name
 * @Description:
 * @FilePath: /assessment/src/common/Loading.vue
 * @可以输入预定的版权声明、个性签名、空行等
 -->
 <style lang='scss' scoped>
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.1);
  }
 </style>
<template>
  <div class="loading-wrap" v-show="loading">
    <div class="mask"></div>
    <div class="loading">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class Loading extends Vue {
  @Prop({ default: false })
  loading!: boolean
}
</script>
