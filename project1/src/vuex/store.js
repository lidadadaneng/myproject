import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    author: 'Wise Wrong',
    msg:''
  },
  mutations:{
    newMsg (state,msg){
      state.msg =msg
    }
  }
})

export default store
