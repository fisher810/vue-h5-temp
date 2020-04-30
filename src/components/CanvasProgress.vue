<style scoped lang="scss">
@import '../assets/style/vars.scss';
.canvas-warp {
  width: 100%;
  position: relative;
  .canvas-des {
    position: absolute;
    top: px2rem(60);
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .date {
    color: #C7CCCF;
    font-size: px2rem(14);
  }
  .value {
    font-size: px2rem(80);
    font-weight: bold;
  }
  .value-des {
    text-align: center;
    padding-top: px2rem(40);
    color: #1A1A1A;
  }
  .value-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: px2rem(155);
    height: px2rem(40);
    border-radius: px2rem(40);
    color: #fff;
    font-size: px2rem(20);
  }
}
</style>
<template>
  <div id="canvas-wrap" class="canvas-warp">
      <canvas id="progress-c">
        您的浏览器暂不支持canvas
      </canvas>
      <div class="canvas-des">
        <p class="date">{{progressData.date || '-.-.-'}}</p>
        <p class="value" :style="{color: colorObj[progressData.color][2]}">{{progressData.value}}</p>
        <a href="javascript:;" class="value-button" :style="{'background-color': colorObj[progressData.color][2]}">{{progressData.color.toUpperCase()}}</a>
      </div>
      <div class="value-des">
        <slot></slot>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
@Component
export default class CanvasProgress extends Vue {
  colorObj: any = {
    bad: ['#FF004C', '#F54EA2', '#FF004C'],
    poor: ['#AA03FF', '#F54EA2', '#E841B2'],
    just: ['#F54EA2', '#AA03FF', '#AA03FF'],
    good: ['#AA03FF', '#3F46DD', '#3F46DD'],
    best: ['#3F46DD', '#00EA9B', '#00C784']
  }
  context: any
  width: number = 0
  height: number = 0
  // 画笔大小
  lineWidth: number = 15
  // 开始的弧度 范围0.5-1.5 结束的弧度  范围1.5-2.5
  startAngle: number = 1
  endAngle: number = 2
  @Prop({ default: {} })
  private progressData!: any
  created () {
  }
  mounted () {
    this.renderCanvas()
    this.renderProgress()
  }
  @Watch('progressData')
  onProgressDataChanged () {
    this.renderProgress()
  }
  renderCanvas () {
    let canvas: any = document.getElementById('progress-c')
    let wrap: any = document.getElementById('canvas-wrap')
    let ctx = this.context = canvas.getContext('2d')
    let img = new Image()
    img.onload = () => {
      ctx.drawImage(img, 65, 65, 183, 139)
    }
    img.src = require('../assets/images/pro-bg.png')
    this.width = wrap.clientWidth
    this.height = wrap.clientWidth / 2 + 40
    canvas.setAttribute('width', this.width)
    canvas.setAttribute('height', this.height)
    ctx.beginPath()
    ctx.arc(this.width / 2, this.height - 40, this.width / 2 - 30, this.startAngle * Math.PI, this.endAngle * Math.PI)
    ctx.lineWidth = this.lineWidth
    ctx.shadowBlur = 0
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#EFEFEF'
    ctx.stroke()
    ctx.font = '14px Arial, sans-serif'
    ctx.fillStyle = '#1A1A1A'
    ctx.fillText('0', 25, this.height - 10)
    ctx.fillText('100', this.width - 40, this.height - 10)
  }
  renderProgress () {
    let myColor = this.progressData.color
    let ctx = this.context
    let width = this.width
    let height = this.height
    let endAngle = (1.5 - this.startAngle) / 150 * (this.progressData.value * 3) + this.startAngle
    ctx.beginPath()
    ctx.arc(width / 2, height - 40, width / 2 - 30, this.startAngle * Math.PI, endAngle * Math.PI) // 进度绘制
    ctx.lineWidth = this.lineWidth
    ctx.shadowBlur = 0
    ctx.lineCap = 'round'
    let g = ctx.createLinearGradient(0, height / 2, width, height / 2) // 创建渐变对象  渐变开始点和渐变结束点
    g.addColorStop(0, this.colorObj[myColor][0]) // 添加颜色点
    g.addColorStop(myColor === 'poor' || myColor === 'just' ? 0.3 : 0.6, this.colorObj[myColor][1]) // 添加颜色点
    ctx.strokeStyle = g // 使用渐变对象作为圆环的颜色
    ctx.stroke()
  }
}
</script>
