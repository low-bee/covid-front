<template>
  <div>
    <h2 id="map">
      <a href="#map">美国各州确诊新冠数据</a>
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
            class="map"
            :option="mapOption"
            :init-options="initOptions"
            ref="map"
            autoresize
        />
      </figure>
      <p><button @click="convert">Convert to image</button></p>
    </section>
  </div>
</template>

<script>
  // 一个异步实例
  import map from "../../js/map"
  import qs from "qs";


export default {

  name: "DeadNumberByRegion",

  data() {
    const options = qs.parse(location.search, { ignoreQueryPrefix: true });
    let mapOption = {}
    return {
      flag: true,
      mapOption,
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
      const map = this.$refs.map;
      this.img = {
        src: map.getDataURL({
          pixelRatio: window.devicePixelRatio || 1
        }),
        width: map.getWidth(),
        height: map.getHeight()
      };
      this.open = true;
    },
  },
  mounted() {
    map.then(value => {
      this.mapOption = value;
    })
  }

}
</script>

<style scoped>

</style>
