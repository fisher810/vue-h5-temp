<!--
 * @Author: fisher
 * @Date: 2020-02-20 11:24:54
 * @LastEditTime: 2020-03-02 18:22:19
 * @LastEditors: your name
 * @Description:
 * @FilePath: /assessment/src/common/messageBox/MessageBox.vue
 * @可以输入预定的版权声明、个性签名、空行等
 -->
<style scoped lang="scss">
@import '../../assets/style/vars.scss';
.message-box {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  background-color: rgba(0,0,0,.8);
  color: #fff;
  padding: px2rem(15);
  width: 80%;
  border-radius: 7px;
  font-size: 16px;
  text-align: center;
  transition: all .5s linear;
  z-index: 9999;
}
</style>
<template>
  <div class="message-box" v-show="show">
    {{text}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class MessageBox extends Vue {
  @Prop({ default: '' })
  text!: string
  @Prop({ default: false })
  show!: boolean
}
</script>
