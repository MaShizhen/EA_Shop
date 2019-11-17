<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{msg}}
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'vue框架后台管理'
    }
  },
  mounted () {
      this.getUserList()
  },
  computed: {},
  methods: {
    getUserList(){
      this.$http.get('/getUserList',{}).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  watch: {}

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
