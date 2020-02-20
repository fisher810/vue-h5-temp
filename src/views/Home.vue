<style scoped lang="scss">
@import '../assets/style/vars.scss';
.home {
  padding-bottom: px2rem(80);

}
</style>
<template>
  <div class="home">
    <Loading :loading="loading" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { queryToJson } from '../utils/utils'
import api from '../utils/api-server'
import Loading from '../common/Loading.vue'
@Component({
  components: {
    Loading
  }
})
export default class Home extends Vue {
  loading:boolean = false
  created () {
    let queryJson = queryToJson(window.location.search.substr(1), true)
    console.log(queryJson)
    if (queryJson.language === 'zh_CN') {
      this.$i18n.locale = 'zh_CN'
    } else {
      this.$i18n.locale = 'en'
    }
    this.getHttpDate(queryJson)
  }
  mounted () {
    // enum Type { day = 1, week = 2, month = 3 }
    // document.title as string = this.$t(Type[this.type] + this.incomeType.replace(/^(\w)/, ($1) => $1.toUpperCase()) + 'Title')
  }
  // 请求数据
  getHttpDate (queryJson) {
    this.loading = true
    api.getCallIncome({
      params: {
        ...queryJson
      }
    }).then(res => {
      console.log(res)
    })
  }
}
</script>
