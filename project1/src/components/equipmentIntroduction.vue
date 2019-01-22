<template>
<div>
  <strong>这是设备介绍</strong>
  <div v-for="(item,index) in msg">
    <div class="title" @click="details(index)">{{item.title}}</div>
  </div>

</div>
</template>

<script>
    export default {
        name: "equipmentIntroduction",
      created() {
        this.axios.get('http://api.komavideo.com/news/list')
        //成功返回
          .then(response => {

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
      },
      methods:{
        details(index){
          this.$router.push({path:'/Details/'+index});
          this.$store.commit('newMsg',this.msg)

        }
      }
    }
</script>

<style scoped>
  .title{
    display: block;
    margin: 10px;
    color: #ccc;
  }
  .title:hover{
    color: cornflowerblue;
  }

</style>
