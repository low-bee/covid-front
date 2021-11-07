<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/covid.png">
    <Covid msg="Welcome to Covid Analysis Page!"/>
    <div id="echarts" >
      <router-view></router-view>
<!--      用router-view 替换当前的World-->
<!--      <World></World>-->
    </div>

  </div>
</template>

<script>
import Covid from './components/Covid'

export default {
  name: 'App',
  components: {
    Covid
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.pip {
  margin-right: 0;
  width: 400px;
  height: 400px;
}
#echarts {
  float:right;
  display: inline;
}
</style>
