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

</style>
