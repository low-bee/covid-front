<template>
  <div id="china">
    <ChinaDayStatusData></ChinaDayStatusData>
  </div>
</template>

<script>
import ChinaDayStatusData from "../echarts/ChinaDayStatusData";

export default {

  name: "China",
  components: {
    ChinaDayStatusData
  }
}
</script>

<style scoped>
#china{
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
