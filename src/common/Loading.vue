<!--
 * @Author: fisher
 * @Date: 2020-02-20 11:24:54
 * @LastEditTime: 2020-02-27 14:20:04
 * @LastEditors: your name
 * @Description:
 * @FilePath: /assessment/src/common/Loading.vue
 * @可以输入预定的版权声明、个性签名、空行等
 -->
<template>
  <div class="loading" v-show="loading">
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
