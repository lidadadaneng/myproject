<template>
<div>
  <div>这是重要通知</div>
  <div>手机号：<input type="text" v-model="msg.phone"></div>
  {{msg.phone}}
  <div>姓名： <input type="text"  v-model="msg.name"></div> {{msg.name}}
  <div>密码： <input type="text"  v-model="msg.scret"></div>{{msg.scret}}
  <div>验证码：<input type="text" v-model="msg.scao"></div>{{msg.scao}}
  <button @click="smit">提交</button>
</div>
</template>

<script>
    export default {
        name: "importantNotice",


        data(){

          return{

            msg:{phone:'', name:'', scret:'', scao:''}


          }

        },

      methods:{
          smit(){

            this.axios.post('http://api.komavideo.com/news/list',{data:this.msg})
            //成功返回
              .then(response => {
                console.log(response.data);
                this.msg=response.data;

              })
              //失败返回
              .catch(error => {
                console.log(error)
              })
          }
      }
    }
</script>

<style scoped>

</style>
