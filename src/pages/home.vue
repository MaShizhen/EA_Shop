<template>
  <div class="body_con">
    <Header></Header>

  </div>
</template>

<script>
import {Apis} from '../api/manage';
import Header from '../components/header';
export default {
  name: 'home',
  components:{
    Header
  },
  data () {
    return {
      msg: 'Home',
      apis: new Apis()
    }
  },
  mounted(){
    this.getUserListFn();// 获取所有用户
  },
  computed:{
    
  },
  methods:{
    getUserListFn(){
      this.apis.getUserList().then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
