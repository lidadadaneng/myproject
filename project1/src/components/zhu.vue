<template>
  <div>
    <div class="layout">
      <div class="banner">
        <ul class="clearfix">
          <li><a href="#"><img src="../assets/img/t01d1b5bc0a8fe79e40.jpg"></a></li>
          <li><a href="#"><img src="../assets/img/t01439cb8875c2b2e96.jpg"></a></li>
          <li><a href="#"><img src="../assets/img/t0130054c60a8cf3d2f.jpg"></a></li>
          <li><a href="#"><img src="../assets/img/t01d1b5bc0a8fe79e40.jpg"></a></li>
          <li><a href="#"><img src="../assets/img/t01439cb8875c2b2e96.jpg"></a></li>


        </ul>
        <ul>
          <li class="now"></li>
          <li></li>
          <li></li>

        </ul>

      </div>
    </div>
    <div class="tab">
      <router-link to="/zhu/companyProfile" >公司简介</router-link>
      <router-link to="/zhu/equipmentIntroduction">设备介绍</router-link>
      <router-link to="/zhu/PlansIntroduce">套餐介绍</router-link>
      <router-link to="/zhu/importantNotice">重要通知</router-link>
      <router-link to="/zhu/Consulting">问题咨询</router-link>

    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: "zhu",
    computed: {
      author () {
        return this.$store.state.author
      }
    }

  }
</script>

<style scoped>

</style>
