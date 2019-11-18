<template>
  <div class="body_con">

  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      msg: 'Product manage'
    }
  },
  mounted(){
    this.getUserList();// 获取所有用户
  },
  computed:{
    
  },
  methods:{
    getUserList(){
      this.$http.get('/getUserList',{}).then(res=>{
        console.log(res);
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
