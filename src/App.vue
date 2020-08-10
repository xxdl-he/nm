<template>
  <div id="app">
    <nice-header v-if="!$route.meta.isLogin"></nice-header>
    <router-view />
    <player-bar v-if="!$route.meta.isLogin"></player-bar>
    <nice-footer v-if="!$route.meta.isLogin"></nice-footer>
    <back-top v-if="!$route.meta.isLogin"></back-top>
    <div class="fly bg-fly-circle1"></div>
    <div class="fly bg-fly-circle2"></div>
    <div class="fly bg-fly-circle3"></div>
    <div class="fly bg-fly-circle4"></div>
  </div>
</template>

<script>
import NiceHeader from 'components/common/header/Index'
import BackTop from 'components/common/gotop/Index'
import PlayerBar from 'components/common/playerBar/Index'
import NiceFooter from 'components/common/footer/Index'
export default {
  components: {
    NiceHeader,
    BackTop,
    NiceFooter,
    PlayerBar
  }
}
</script>

<style lang="stylus">
@import './assets/styles/iconfont.css';
.fly {
  pointer-events: none;
  position: fixed;
  z-index: 100;
}
.bg-fly-circle1 {
  left: 40px;
  top: 100px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(to right, rgba(100, 84, 239, 0.07) 0%, rgba(48, 33, 236, 0.04) 100%);
  animation: move 2.5s linear infinite;
}

.bg-fly-circle2 {
  left: 20%;
  top: 70%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(to right, rgba(100, 84, 239, 0.08) 0%, rgba(48, 33, 236, 0.04) 100%);
  animation: move 3s linear infinite;
}

.bg-fly-circle3 {
  right: 100px;
  top: 140px;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background: linear-gradient(to right, rgba(100, 84, 239, 0.1) 0%, rgba(48, 33, 236, 0.04) 100%);
  animation: move 2.5s linear infinite;
}

.bg-fly-circle4 {
  left: 45%;
  top: 20%;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: linear-gradient(to right, rgba(100, 84, 239, 0.02) 0%, rgba(48, 33, 236, 0.04) 100%);
  animation: move 3.5s linear infinite;
}

@keyframes move {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(25px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
