<!--
 * @Author: fisher
 * @Date: 2020-02-25 10:25:08
 * @LastEditTime: 2020-02-28 13:05:28
 * @LastEditors: your name
 * @Description:
 * @FilePath: /assessment/src/common/Dialog.vue
 * @可以输入预定的版权声明、个性签名、空行等
 -->
<style scoped lang="scss">
@import '../assets/style/vars.scss';
.dialog-mask {
  background-color: rgba(0,0,0, .5);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
}
.dialog-warp {
  background-color: #fff;
  border-radius: 8px 8px 0 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: px2rem(10) px2rem(15) px2rem(20) px2rem(15);
}
.close-dialog {
  width: px2rem(18);
  height: px2rem(18);
  background: url('../assets/images/close.png') no-repeat;
  background-size: 100%;
  margin-top: px2rem(5);
  margin-left: px2rem(15);
  flex-shrink: 0;
}
.dialog-title {
  font-size: px2rem(20);
  line-height: 22px;
  padding-top: px2rem(5);
  padding-bottom: px2rem(15);
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  span {
    display: block;
  }
}
.dialog-content {
  font-size: px2rem(16);
  max-height: calc(100vh - 270px);
  overflow-y: auto;
}
</style>
<template>
  <div class="dialog-mask" v-show="dialogShow" :style="{height: curentHeight + 'px'}">
    <div class="dialog-warp">
      <h2 class="dialog-title">
        <span>{{dialogTitle}}</span>
        <span class="close-dialog" @click="closeDialogFn"></span>
      </h2>
      <div class="dialog-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator'
@Component
export default class Dialog extends Vue {
  curentHeight: number = 0
  @Prop({ default: false })
  dialogShow!: boolean
  @Prop({ default: 'No Title' })
  dialogTitle!: string
  @Watch('dialogShow')
  onDialogShowChanged (val: boolean) {
    let bodySel = document.body
    let htmlSel = document.documentElement
    if (val) {
      let autoTop = htmlSel.scrollTop || bodySel.scrollTop
      this.curentHeight = bodySel.offsetHeight
      bodySel.style.overflow = 'hidden'
      htmlSel.style.overflow = 'hidden'
    } else {
      bodySel.style.overflow = ''
      htmlSel.style.overflow = ''
    }
  }
  @Emit()
  dialogClose () { }
  closeDialogFn () {
    this.dialogShow = false
    this.dialogClose()
  }
}
</script>
