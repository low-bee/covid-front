import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import VueECharts from 'vue-echarts'
import router from "./router/index";

import {
  CanvasRenderer,
  SVGRenderer
} from 'echarts/renderers'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
  GeoComponent,
  VisualMapComponent,
} from "echarts/components"
import {
  PieChart,
  BarChart,
  MapChart,
  ScatterChart,
  EffectScatterChart
} from "echarts/charts";

import {
  use,
  registerMap
} from "echarts/core"
import VueRouter from "vue-router";

Vue.config.productionTip = false
Vue.component("v-chart", VueECharts)
Vue.prototype.$http = axios
Vue.config.devtools = true;

import chinaMap from "./assets/china.json";
import usaMap from  "./assets/usa.json"
registerMap("china", {geoJSON: chinaMap, specialAreas: {}} );
registerMap("usa", {geoJSON: usaMap, specialAreas: {
    Alaska: {
      // 把阿拉斯加移到美国主大陆左下方
      left: -131,
      top: 25,
      width: 15
    },
    Hawaii: {
      left: -110,
      top: 28,
      width: 5
    },
    'Puerto Rico': {
      // 波多黎各
      left: -76,
      top: 26,
      width: 2
    }
  }} );

// registerMap("USA", function () {
//   this.$http.get("http://127.0.0.1:8081/region/map", {
//       params: {
//         country: "usa"
//       }
//     }).then(response => {
//       if (response.status === 200) {
//         return response.data;
//       } else {
//         console.log("未请求到数据");
//       }
//     }
//   )
// })

Vue.use(VueRouter)

use([
  PieChart,
  MapChart,
  ScatterChart,
  BarChart,
  EffectScatterChart,
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
  GeoComponent,
  VisualMapComponent,
  SVGRenderer
])

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
