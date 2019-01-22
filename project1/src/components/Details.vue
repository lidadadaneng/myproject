<template>
  <div>
    <div class="header">
      <span @click="back()">< 返回</span>
      <span>详情</span>
    </div>
    <div style="height: 40px"></div>
    <h2>{{msg[$route.params.index || 1].title}}</h2>
    <img src="../assets/img/t01d1b5bc0a8fe79e40.jpg" alt="">
    <p>&nbsp;&nbsp;&nbsp;&nbsp;{{msg[$route.params.index || 1].content}}</p>

  </div>
</template>

<script>
  export default {
    name: "Details",

    methods: {
      back() {
        this.$router.go(-1);
      }
    },
    data(){
      return{

      }
    },
    computed:{
      msg(){
        return this.$store.state.msg
      }
    }

  }
</script>

<style scoped>
  img{
    width: 80%;
  }
  h2{

    font-size: 17px;
    padding: 10px;
  }
  p{
    text-align: left;
    margin: 10px;
    padding: 0 20px;
  }
  .header {
    position: fixed;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: cornflowerblue;
    color: white;
    text-align: center;
    padding-left: 10px;
    margin-bottom: 20px;
  }

  .header :first-child {
    position: absolute;
    left: 15px;
    font-family: 微软雅黑;
  }
</style>
