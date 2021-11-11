<template>
  <div>
    <h2 id="china-line">
      <a href="#china-line">中国新冠折线图</a>
      <button
          :class="{
          round: true,
          expand: expand.pie
        }"
          @click="expand.pie = !expand.pie"
          aria-label="toggle"
      >折叠</button>
    </h2>
    <section v-if="expand.pie">
      <figure>
        <v-chart
            class="line"
            :option="china_line"
            :init-options="initOptions"
            ref="china_line"
            autoresize
        />
      </figure>
    </section>
  </div>
</template>

<script>
import china_line_promise from "../../js/china_line";
import qs from "qs";

export default {
  name: "ChinaDayStatusData",
  data() {
    const options = qs.parse(location.search, { ignoreQueryPrefix: true });
    let china_line = {}
    return {
      china_line,

      expand: {
        bar: true,
        pie: true,
        polar: true,
        scatter: true,
        map: true,
        radar: true,
        connect: true,
        flight: true
      },

      initOptions: {
        renderer: options.renderer || "canvas"
      },
    }
  },

  mounted() {
    china_line_promise.then(
        value => {
          this.china_line = value
        }
    )
  }
}
</script>

<style scoped>

</style>
