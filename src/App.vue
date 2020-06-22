<template>
  <div id="app">
    <you-header></you-header>
    <div style="min-height: 100%;min-width: 100%">
      <router-view></router-view>
    </div>

    <you-footer class="footer"></you-footer>
  </div>
</template>

<script>
import header from './components/Header';
import footer from './components/Footer';
export default {
  name: 'App',
  components: {
    'you-header': header,
    'you-footer': footer,
  }
}
</script>

<style lang="scss">
  #app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  html,body,#app{
    /*设置满屏，并且取消边框margin*/
    height: 100%;
    margin: 0;
  }
  /**
  - No opportunity to enable
  html {
    filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
    -webkit-filter: grayscale(100%);
  }
  */
</style>
