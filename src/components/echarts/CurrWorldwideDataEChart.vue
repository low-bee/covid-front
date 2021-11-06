<template>
  <div ref="curr">
    <v-chart id="done-data" class="pip" :option="dataFromBackend"></v-chart>
    <v-chart id="curr-data" class="pip" :option="dataCurrFromBackend"></v-chart>
  </div>
</template>

<script>
export default {
  name: "CurrWorldwideDataEChart",
  data() {
    return {
      worldData: {},
      dataFromBackend: {
        PubDate:String,
        confirm: Number,
        confirmAdd: Number,
        curerate: Number,
        date: String,
        dead: Number,
        deadAdd: Number,
        deadthrate: Number,
        heal: Number,
        healAdd: Number,
        lastUpdateTime:Date.now(),
        nowConfirm:Number,
        nowConfirmAdd:Number
      },

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
              console.log(response.data)
              // 保存一份原始数据
              this.worldData = response.data;
              //
              this.dataFromBackend = {
                title: {
                  text: this.worldData.lastUpdateTime,
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
                  data: ["confirm", "dead", "heal"]
                },
                series: [
                  {
                    name: "腾讯新闻",
                    type: "pie",
                    radius: "55%",
                    center: ["50%", "60%"],
                    data: [
                      // {value: this.worldData.confirm - this.worldData.confirmAdd, name: "confirm"},
                      {value: this.worldData.confirm, name: "confirm"},
                      // {value: this.worldData.dead - this.worldData.deadAdd, name: "dead"},
                      {value: this.worldData.dead, name: "dead"},
                      // {value: this.worldData.heal - this.worldData.healAdd, name: "heal"},
                      {value: this.worldData.heal, name: "heal"},
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

              this.dataCurrFromBackend = {
                title: {
                  text: this.worldData.lastUpdateTime,
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
                  data: ["confirmAdd", "deadAdd", "healAdd"]
                },
                series: [
                  {
                    name: "Backend",
                    type: "pie",
                    radius: "55%",
                    center: ["50%", "60%"],
                    data: [
                      // {value: this.worldData.confirm - this.worldData.confirmAdd, name: "confirm"},
                      {value: this.worldData.confirmAdd, name: "confirmAdd"},
                      // {value: this.worldData.dead - this.worldData.deadAdd, name: "dead"},
                      {value: this.worldData.deadAdd, name: "deadAdd"},
                      // {value: this.worldData.heal - this.worldData.healAdd, name: "heal"},
                      {value: this.worldData.healAdd, name: "healAdd"},
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

<style scoped>
  .pip {
  width: 400px;
  height: 400px;
}
</style>
