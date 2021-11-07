<template>
  <div id="word-component">
    <CurrWorldwideDataEChart></CurrWorldwideDataEChart>
    <OldWorldwideDataEChart></OldWorldwideDataEChart>
  </div>
</template>

<script>

import CurrWorldwideDataEChart from "../echarts/CurrWorldwideDataEChart";
import OldWorldwideDataEChart from "../echarts/OldWorldwideDataEChart";

export default {
  name: "World",

  components: {
    CurrWorldwideDataEChart,
    OldWorldwideDataEChart
  }
}
</script>

<style scoped>

</style>
