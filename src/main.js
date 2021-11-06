import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import VueECharts from 'vue-echarts'

import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components"
import { PieChart } from "echarts/charts";
import { use } from "echarts/core"

Vue.config.productionTip = false
Vue.component("v-chart", VueECharts)
Vue.prototype.$http = axios
Vue.config.devtools = true;

use([
  PieChart,
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent
])

new Vue({
  render: h => h(App)
}).$mount('#app')
