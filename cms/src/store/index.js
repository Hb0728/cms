import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading:true
  },
  //同步操作   
    mutations: {
      //配置全局loading状态   
      setLoading(state, isLoading) { 
          console.log(isLoading)
          state.isLoading=isLoading
      }
  },
  //异步操作   
  actions: {
    
  },
  modules: {
  }
})
