<template>
  <div ref="curr" id="curr">
    <v-chart id="curr_data" class="pip" :option="dataCurrFromBackend"></v-chart>
  </div>
</template>

<script>
export default {
  name: "CurrWorldwideDataEChart",
  data() {
    return {
      worldData: {},

      dataCurrFromBackend: {
        lastUpdateTime:Date.now(),
      }
    }
  },
  mounted() {
    this.getWorldData()
  },
  methods: {
    getWorldData: function () {
      this.$http
          .get("http://127.0.0.1:8081/homework/world")
          .then(response => {
            if (response.status === 200) {
              // 保存一份原始数据
              this.worldData = response.data;
              //
              this.dataCurrFromBackend = {
                title: {
                  text: this.worldData.lastUpdateTime.substr(0, 11) + "当日新增",
                  left: "center"
                },
                tooltip: {
                  trigger: "item",
                  formatter: "{a}{b} : {c} ({d}%)"
                },
                legend: {
                  orient: "vertical",
                  left: "left",
                  // data: ["confirm", "confirmAdd", "dead", "deadAdd", "heal", "healAdd"]
                  data: ["确诊", "死亡", "康复"]
                },
                series: [
                  {
                    name: "新增",
                    type: "pie",
                    radius: "55%",
                    center: ["50%", "60%"],
                    data: [
                      // {value: this.worldData.confirm - this.worldData.confirmAdd, name: "confirm"},
                      {value: this.worldData.confirmAdd, name: "确诊"},
                      // {value: this.worldData.dead - this.worldData.deadAdd, name: "dead"},
                      {value: this.worldData.deadAdd, name: "死亡"},
                      // {value: this.worldData.heal - this.worldData.healAdd, name: "heal"},
                      {value: this.worldData.healAdd, name: "康复"},
                    ],
                    emphasis: {
                      itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                      }
                    }
                  }
                ]
              }
            }
          }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
#curr {
  float: left;
  margin-top: 30px;
}
</style>
