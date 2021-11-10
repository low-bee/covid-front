<template>
  <div id="word-component">
    <CurrWorldwideDataEChart></CurrWorldwideDataEChart>
    <OldWorldwideDataEChart></OldWorldwideDataEChart>
    <ContinentStatus></ContinentStatus>
  </div>
</template>

<script>

import CurrWorldwideDataEChart from "../echarts/CurrWorldwideDataEChart";
import OldWorldwideDataEChart from "../echarts/OldWorldwideDataEChart";
import ContinentStatus from "../echarts/ContinentStatus";

export default {
  name: "World",

  components: {
    CurrWorldwideDataEChart,
    OldWorldwideDataEChart,
    ContinentStatus
  }
}
</script>

<style scoped>

</style>
