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
  appType: string = 'tumile'
  created () {
    // let queryJson = queryToJson(window.location.search.substr(1), true)
    // console.log(queryJson)
    // this.appType = this.getAppName(queryJson.appId) || 'tumile'
  }
  getAppName (type: string) {
    const AppName = {
      '20000': 'livu',
      '19999': 'tumile',
      '66666': 'yaar'
    }
    return AppName[type]
  }
}
</script>
