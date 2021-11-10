<template>
  <div>
    <h2 id="bar">
      <a href="#bar">美国各州确诊数据排行</a>
      <button
          :class="{
          round: true,
          expand: expand.map
        }"
          @click="expand.map = !expand.map"
          aria-label="toggle"
      >折叠</button>
    </h2>

    <section v-if="expand.map">
      <figure style="background-color: #404a59">
        <v-chart
            class="bar"
            :option="barOption"
            :init-options="initOptions"
            ref="bar"
            autoresize
        />
      </figure>
    </section>
  </div>
</template>

<script>
// 一个异步实例
import bar from "../../js/usa_bar"
import qs from "qs";

export default {
  name: "DeadNumberByRegionBar",

  data() {
    let barOption = {}
    const options = qs.parse(location.search, { ignoreQueryPrefix: true });
    return {
      flag: true,
      barOption,
      initOptions: {
        renderer: options.renderer || "canvas"
      },
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
    }
  },
  methods: {
    convert() {
      const bar1 = this.$refs.bar;
      this.img = {
        src: bar1.getDataURL({
          pixelRatio: window.devicePixelRatio || 1
        }),
        width: bar1.getWidth(),
        height: bar1.getHeight()
      };
      this.open = true;
    },
  },
  mounted() {
    bar.then(value => {
      this.barOption = value;
    })

  }

}
</script>

<style scoped>

</style>
