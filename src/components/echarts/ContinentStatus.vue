<template>
  <div>
    <h2 id="pie">
      <a href="#pie">Pie chart <small>(with action dispatch)</small></a>
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
            class="much-pip"
            :option="pieOption"
            :init-options="initOptions"
            ref="pie"
            autoresize
        />
      </figure>
    </section>
  </div>
</template>

<script>
import qs from "qs";
import pie from "../../js/pip"

export default {
  name: "ContinentStatus",
  data() {
    const options = qs.parse(location.search, { ignoreQueryPrefix: true });
    let pieOption = {}
    return {
      pieOption,
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
    pie.then(
        value => {
          this.pieOption = value;
        }
    )
  }
}
</script>

<style>

</style>
