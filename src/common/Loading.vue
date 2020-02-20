<style scoped lang="scss">
@import '../assets/style/vars.scss';
// loading 样式
.loadEffect {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.loadEffect div{
    width: 100%;
    height: 100%;
    position: absolute;
    animation: load 2.08s linear infinite;
}
.loadEffect div span{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(51, 126, 240, .7);
    position: absolute;
    left: 50%;
    margin-top: -10px;
    margin-left: -10px;
}
@keyframes load{
    0%{
        transform: rotate(0deg);
    }
    10%{
        transform: rotate(45deg);
    }
    50%{
        opacity: 1;
        transform: rotate(160deg);
    }
    62%{
        opacity: 0;
    }
    65%{
        opacity: 0;
        transform: rotate(200deg);
    }
    90%{
        transform: rotate(340deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.loadEffect div:nth-child(1){
    animation-delay:0.2s;
}
.loadEffect div:nth-child(2){
    animation-delay:0.4s;
}
.loadEffect div:nth-child(3){
    animation-delay:0.6s;
}
.loadEffect div:nth-child(4){
    animation-delay:0.8s;
}
</style>
<template>
  <div class="loadEffect" v-show="loading">
    <div><span></span></div>
    <div><span></span></div>
    <div><span></span></div>
    <div><span></span></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class FixedBar extends Vue {
  @Prop({ default: false })
  private loading!: boolean
}
</script>
