<template>
  <div>
    <component :is="appType"></component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { queryToJson } from '../utils/utils'
import livu from './Livu.vue'
import tumile from './Tumile.vue'
@Component({
  components: {
    livu,
    tumile
  }
})
export default class Home extends Vue {
  appType: string = ''
  created () {
    let queryJson = queryToJson(window.location.search.substr(1), true)
    console.log(queryJson)
    this.appType = this.getAppName(queryJson.platformType) || 'tumile'
  }
  getAppName (type: string) {
    enum AppName {
      '2-20000' = 'livu',
      '2-19999' = 'tumile',
      '2-66666' = 'yaar',
      '1-20000' = 'livu'
    }
    return AppName[type]
  }
}
</script>
