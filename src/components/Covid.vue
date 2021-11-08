<template>
  <div id="covid-country">
    <form id="covid" class="country">
      <h1>{{ msg }}</h1>
<!--  当用户选择一个国家，应该一个路由，这样就可以在不同的组件之间切换 -->
      <router-link class="router-link" to="/US" @click="submitCountry">美国</router-link>
      <br/><br/>
      <router-link class="router-link" to="/French" @click="submitCountry">法国</router-link>
      <br/><br/>
      <router-link class="router-link" to="/China" @click="submitCountry">中国</router-link>
      <br/><br/>
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
      countrySet: null,
      country: "",
      wordData: {},

    }
  },

  mounted: function () {
    this.getCountrySet()
  },

  watch: {
    country: function (newValue) {
      console.log(newValue);
    }
  },

  methods: {
    getCountrySet: function () {
      this.$http
          .get('http://127.0.0.1:8081/homework/country')
          .then(response => {
            if (response.status === 200) {
              // 在后端过滤数据，这样一方面前端得到的数据更少，而且前端也无需执行复杂的过滤逻辑
              this.countrySet = new Set(response.data);
            }
          })
          .catch(error => {
            console.log(error)
          })
    },

    submitCountry: function () {
      if (this.countrySet !== null && this.countrySet.has(this.country) !== -1){
        // 子组件将数据发送给父组件
        this.$emit('getCountry',this.country);
        // this.$http
        //     .get('http://127.0.0.1:8081/'+ this.country +'/age')
        // .then(response => {
        //   if (response.status === 200) {
        //     console.log(response)
        //   }
        // })
      }

    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
