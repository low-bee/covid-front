<template>
  <div id="word-component">
    <div id="float-component">
      <CurrWorldwideDataEChart></CurrWorldwideDataEChart>
      <OldWorldwideDataEChart></OldWorldwideDataEChart>
    </div>

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

<style>
  #word-component {
    text-align: center;
    border-radius: 20px;
    width: 800px;
    height: 10%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }

</style>
