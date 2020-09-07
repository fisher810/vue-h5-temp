<!--
 * @Author: fisher
 * @Date: 2020-09-07 09:51:08
 * @LastEditTime: 2020-09-07 14:52:38
 * @LastEditors: your name
 * @Description:
 * @FilePath: /vue-h5-temp/src/views/Home.vue
 * @可以输入预定的版权声明、个性签名、空行等
-->
<style scoped lang="scss">
  .title {
    font-size: 48px;
  }
</style>
<template>
  <div>
    <h1 class="title">test</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { queryToJson } from '../utils/utils'
@Component({
  components: {
  }
})
export default class Home extends Vue {
  created () {
    // let queryJson = queryToJson(window.location.search.substr(1), true)
    // console.log(queryJson)
    // this.appType = this.getAppName(queryJson.appId) || 'tumile'
  }
}
</script>
