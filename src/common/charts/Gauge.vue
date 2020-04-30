<!--
 * @Author: fisher
 * @Date: 2020-02-24 14:14:44
 * @LastEditTime: 2020-04-03 16:35:38
 * @LastEditors: your name
 * @Description:
 * @FilePath: /assessment/src/common/charts/Radar.vue
 * @可以输入预定的版权声明、个性签名、空行等
 -->
<!-- line chart -->
<style lang='scss' scoped>
@import '../../assets/style/vars.scss';
.chart-inner {
  position: relative;
  .chart-dom {
    width: 100%;
    min-height: 220px;
  }
}
</style>
<template>
  <div class="chart-inner">
    <div class="chart-dom" ref="chartDom"></div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { queryToJson } from '../../utils/utils'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/gauge'
import chartOptions from './chartOptions'
import cloneDeep from 'lodash/cloneDeep'
@Component({})
export default class Gauge extends Vue {
  type:string = 'gauge'
  language: string = ''
  chart: any
  @Prop({ default: {} })
  chartData !: number
  created () {
    let queryJson = queryToJson(window.location.search.substr(1), true)
    this.language = queryJson.language || ''
    console.log(this.language)
  }
  mounted () {
    this.renderChart()
  }
  @Watch('chartData')
  onChartDataChanged () {
    this.chart.setOption(this.mergeOption())
  }
  destroyed () {
    this.chart.dispose()
    this.chart = null
  }
  // 合并配置
  mergeOption () {
    let defaultOpt = cloneDeep(chartOptions[this.type])
    console.log(defaultOpt)
    return defaultOpt
  }
  renderChart () {
    this.chart = echarts.init(this.$refs.chartDom)
    this.chart.setOption(this.mergeOption())
  }
}

</script>
