<template>
  <div>
    <h2 id="china-line">
      <a href="#china-line">Pie chart <small>(with action dispatch)</small></a>
      <button
          :class="{
          round: true,
          expand: expand.pie
        }"
          @click="expand.pie = !expand.pie"
          aria-label="toggle"
      ></button>
    </h2>
    <section v-if="expand.pie">
      <figure>
        <v-chart
            class="line"
            :option="china_line"
            :init-options="initOptions"
            ref="pie"
            autoresize
        />
      </figure>
    </section>
  </div>
</template>

<script>
import china_line from "../../js/china_line";
import qs from "qs";

export default {
  name: "ChinaDayStatusData",
  data() {
    const options = qs.parse(location.search, { ignoreQueryPrefix: true });

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
  }
}
</script>

<style scoped>

</style>
