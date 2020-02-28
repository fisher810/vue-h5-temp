<!--
 * @Author: fisher
 * @Date: 2020-02-24 14:14:44
 * @LastEditTime: 2020-02-28 22:14:04
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
  .empty-tips {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    font-size: 16px;
  }
  .chart-dom {
    width: 100%;
    min-height: 350px;
  }
}
</style>
<template>
  <div class="chart-inner">
    <div class="empty-tips" v-show="isEmpty">{{$t('noData')}}</div>
    <div class="chart-dom" ref="chartDom"></div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import chartOptions from './chartOptions'
import cloneDeep from 'lodash/cloneDeep'
@Component({})
export default class Radar extends Vue {
  isEmpty: boolean = true
  type:string = 'radar'
  chart:any
  @Prop({ default: {} })
  chartData !: Array<any>
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
    let i = -1
    let nameArr: string[] = [
      'activity',
      'interactiveness',
      'profileInfo',
      'earnings',
      'non-compliance'
    ]
    if (this.chartData.length === 0) {
      this.isEmpty = true
      return {}
    }
    this.isEmpty = false
    let defaultOpt = cloneDeep(chartOptions[this.type])
    console.log(this.$t('you'))
    console.log(defaultOpt)
    defaultOpt.legend.data = [this.$t('you'), this.$t('next')]
    defaultOpt.series[0].data[0].value = this.chartData[0].value
    defaultOpt.series[0].data[0].name = this.$t('next')
    defaultOpt.series[0].data[1].value = this.chartData[1].value
    defaultOpt.series[0].data[1].name = this.$t('you')
    nameArr.forEach((item, index) => {
      defaultOpt.radar.indicator[index].name = this.$t(item)
    })
    defaultOpt.radar.name.formatter = (value: string, indicator: any) => {
      ++i
      return value + ' ' + this.$t('rateLevel.' + [this.chartData[1].level[nameArr[i]]]) + '\n' + '{b|' + this.$t('win1') + ' ' + this.chartData[1].win[nameArr[i]] + '% }' + '\n' + '{b|' + this.$t('win2') + '}'
    }
    defaultOpt.tooltip.formatter = (data) => {
      // console.log(data)
      return data.name + '<br />' + nameArr.map((item, index) => {
        return this.$t(item) + ': ' + data.value[index] + '<br />'
      }).join('')
    }
    // console.log(defaultOpt)
    return defaultOpt
  }
  renderChart () {
    this.chart = echarts.init(this.$refs.chartDom)
    this.chart.setOption(this.mergeOption())
  }
}

</script>
