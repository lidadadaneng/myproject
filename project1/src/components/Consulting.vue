<template>
  <div>
    <div class="title">这是问题咨询</div>
    <img class="img" :src="msg.avatar_url">
    <div class="msg ">介绍：{{msg.bio}}</div>
    <div class="msg ">姓名：{{msg.name}}</div>
    <div class="msg ">博客：{{msg.blog}}</div>
    <div class="msg ">地址：{{msg.html_url}}</div>
    <a :href="msg.html_url">dianj</a>
  </div>
</template>

<script>
    export default {
        name: "Consulting",
        created() {
          this.axios.get('http://api.github.com/users/biaoyansu')
          //成功返回
            .then(response => {
              console.log(response.data);
              this.msg=response.data;

            })
            //失败返回
            .catch(error => {
              console.log(error)
            })
        },
        data(){
            return{
              msg:'',
            }
        }
    }
</script>

<style scoped>
.title{
  margin:20px;
  padding-top: 40px;
}
.img{
  width: 40px;
  margin-bottom:10px ;

}
.msg{

  color: #ffffff;
  font-family:"仿宋";
  font-weight: 600;
  font-size: 15px;
  padding: 5px;
  text-align:center;
  background-color: cornflowerblue;

}
  .msg a{
    color: #333333;
    display: block;
  }
</style>
