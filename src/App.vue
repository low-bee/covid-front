<template>
  <div id="app">
<!-- 调到中间 -->
<!-- flex    -->
    <div id= "center">
      <img alt="covid" src="./assets/covid.png">
      <Covid v-on:getCountry="getCountryData" msg="Welcome to Covid Analysis Page!"/>
      <div id="router" >
        <router-view></router-view>
  <!--      用router-view 替换当前的World-->
  <!--      <World></World>-->
      </div>

    </div>
  </div>
</template>

<script>
import Covid from './components/Covid'

export default {
  name: 'App',
  data() {
    return {
      country:String
    }
  },
  components: {
    Covid
  },
  methods: {
    getCountryData(dataFromInput) {
      this.country = dataFromInput
    }
  },
  watch: {
    country: function (country) {
      this.$http
          .get('http://127.0.0.1:8081/'+ country)
          .then(response => {
            if (response.status === 200) {
              console.log(response)
            }
      }).catch( error => {
        console.log(error);
      })
    }
  }
}
</script>

<style>
#app {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
#center{
  text-align: center;
  margin-top: 30px;
}
.pip {
  width: 400px;
  height: 400px;
}
.bar {
  width: 800px;
  height: 600px;
}
/*特殊化美国年龄数据*/
#america_curr_data{
  height: 400px;
}
.map {
  width: 800px;
  height: 600px;
}

.much-pip {
  width: 800px;
  height: 600px;
}

.line {
  width: 600px;
  height: 400px;
}

a {
  text-decoration: none;
  color: black;

}
</style>
