<template>
  <div id="us">
    <DeadNumberByAge/>
    <DeadNumberByRegion/>
    <DeadNumberByRegionBar/>
  </div>
</template>

<script>
  import DeadNumberByAge from "../echarts/DeadNumberByAge";
  import DeadNumberByRegion from "../echarts/DeadNumberByRegion"
  import DeadNumberByRegionBar from "@/components/echarts/DeadNumberByRegionBar";
  export default {
    name: "US",
    data() {
      return {
        param: {
          group: "By Total",
          sex: "All Sexes",
          state: "United States"
        },
        ageDeadData: {}
      }
    },
    components: {
      DeadNumberByAge,
      DeadNumberByRegion,
      DeadNumberByRegionBar
    },

}
</script>

<style scoped>
#us{
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
