<template>
  <div ref="old" id="old">
    <v-chart id="done-data" class="pip" :option="dataFromBackend"></v-chart>
  </div>
</template>

<script>
export default {
  name: "OldWorldwideDataEChart",
  data() {
    return {
      worldData: {},
      dataFromBackend: {
      },
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
              this.dataFromBackend = {
                title: {
                  text: this.worldData.lastUpdateTime.substr(0, 11) + "汇总数据",
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
                    name: "总",
                    type: "pie",
                    radius: "55%",
                    center: ["50%", "60%"],
                    data: [
                      // {value: this.worldData.confirm - this.worldData.confirmAdd, name: "confirm"},
                      {value: this.worldData.confirm, name: "确诊"},
                      // {value: this.worldData.dead - this.worldData.deadAdd, name: "dead"},
                      {value: this.worldData.dead, name: "死亡"},
                      // {value: this.worldData.heal - this.worldData.healAdd, name: "heal"},
                      {value: this.worldData.heal, name: "康复"},
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
              };
            }
          }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
#old {
  float: left;
  margin-top: 30px;
}
</style>
