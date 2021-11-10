<template>
  <div>
    <v-chart id="curr_data" class="bar" v-if="dataDeadFromBackendOption !== null" :option="dataDeadFromBackendOption"></v-chart>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "DeadNumberByAge",
  data() {
    return {
      ageDeadData: [],
      dataDeadFromBackendOption: null,
      param: {
        group: "By Total",
        sex: "All Sexes",
        state: "United States"
      },
    }
  },

  methods: {
    parseDeadData: function () {

      const xData = this.ageDeadData.filter(item => {
        return item.age !== '' && item.age !== '0-17 years' && item.age !== '50-64 years' && item.age !== '40-49 years'
      }).map(item => {
        return item.age;
      });

      const yData = this.ageDeadData.filter(item => {
        return item.age !== '' && item.age !== '0-17 years' && item.age !== '50-64 years' && item.age !== '40-49 years'
      }).map(item => {
            return item.deaths_number * 1;
      });

      const weight = [0.0162, 0.0008, 0.0023, 0.0033, 0.0032, 0.0019, 0.0037, 0.0046, 0.0056, 0.0089, 0.013, 0.036, 0.083, 0.102, 0.148]
      const yDataRecover = []
      for (let i = 0; i < weight.length; i++) {
        // 大致算一下
        yDataRecover.push(Math.round((yData[i] / weight[i]) - yData[i]))
      }
      this.dataDeadFromBackendOption = {
        title: {
          text:  '美国年龄死亡数据',
          subtext: 'Gradient Color, Shadow, Click Zoom',
          left: "left"
        },

        legend: {},
        // 设置鼠标注意显示
        tooltip: {
          trigger: 'axis',
        },
        // 设置x轴
        xAxis: {
          type: 'category',
          data: xData,
          axisLabel: {
            inside: false,
            color: 'black'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },

        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#999'
          }
        },
        // 设置缩放显示
        dataZoom: [
          {
            type: 'inside'
          }
        ],

        grid: {
          left: 80
        },
        series: [
          {
            name: '治愈总人数',
            data: yDataRecover,
            type: 'bar',
            stack: 'total',
            showBackground: true,
            itemStyle: {
              color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#55ff00' },
                { offset: 0.5, color: '#77ff33' },
                { offset: 1, color: '#2a8000' }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            barWidth: 20
          },
          { name: '死亡总人数',
            data: yData,
            type: 'bar',
            stack: 'total',
            showBackground: true,
            itemStyle: {
              color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#ff9999' },
                { offset: 0.5, color: '#e60000' },
                { offset: 1, color: '#990000' }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            barWidth: 20
          }
        ]
      };
    },
    getAgeData: function () {
      // 获取到数据
      this.$http.get("http://127.0.0.1:8081/age", {
        params: this.param
      }).then(response => {
        if (response.status === 200){
          this.ageDeadData = response.data;
          this.parseDeadData()
        }
      }).catch(error => {
        console.log(error)
      })
    },
  },

  mounted() {
    this.getAgeData()
  }

}
</script>

<style scoped>

</style>
