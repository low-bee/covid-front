<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/covid.png">
    <Covid msg="Welcome to Covid Analysis Page!"/>
    <div id="echarts">
      <CurrWorldwideDataEChart></CurrWorldwideDataEChart>
    </div>

  </div>
</template>

<script>
import Covid from './components/Covid'
import HelloWorld from './components/echarts/HelloWorld';
import CurrWorldwideDataEChart from "./components/echarts/CurrWorldwideDataEChart";

export default {
  name: 'App',
  components: {
    Covid,
    HelloWorld,
    CurrWorldwideDataEChart
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
</style>
