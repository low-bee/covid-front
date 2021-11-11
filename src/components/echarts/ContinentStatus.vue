<template>
  <div id="continent-pie">
    <h2 id="world-pie">
      <a href="#world-pie">各个大洲新冠数据<small>(其他表示一些特殊位置（例如钻石公主号）)</small></a>
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
            ref="much-pip"
            autoresize
        />
      </figure>
    </section>
  </div>
</template>

<script>
import qs from "qs";
import pie from "../../js/world_pip"

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
#continent-pie {
  float: left;
  margin-top: 30px;
}

</style>
