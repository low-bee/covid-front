<template>
  <div id="covid-country">
    <form id="covid" class="country">
      <h1>{{ msg }}</h1>-->
      <select id="select-country" v-model="country">
        <option v-for="item in countrySet" :key="item">
          {{ item }}
        </option>
      </select>
    </form>
  </div>
</template>

<script>
export default {

  name: 'Covid',
  props: {
    msg: String
  },
  data() {
    return {
      countrySet: [],
      country: "",
      wordData: {},
    }
  },

  mounted: function () {
    this.getCountrySet()
  },

  methods: {
    getCountrySet: function () {
      this.$http
          .get('http://127.0.0.1:8081/homework/country')
          .then(response => {
            if (response.status === 200) {
              // 在后端过滤数据，这样一方面前端得到的数据更少，而且前端也无需执行复杂的过滤逻辑
              this.countrySet = response.data
            }
          })
          .catch(error => {
            console.log(error)
          })
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  background-color: #f1f1f1;
}

input {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
</style>
