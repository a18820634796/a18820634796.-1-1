import Vue from 'vue'
import Vuex from 'vuex'
import apis from './apis'
import mtaxios from './utils/mtaxios'

Vue.use(Vuex)
//封装请求函数
const loadAction = (commit,payload,mutationName)=>{
  axios.get(payload.api,{pageNo:payload.pageNo,pageSize:payload.pageSize})
  .then((resp)=>{
    resp = resp.data;
    commite(mutationName,resp)
  })
}
export default new Vuex.Store({
  state: {
    allUser:[]
  },
  mutations: {
    LOADALLUSER(state,payload){
      state.allUser= payload
    }
  },
  actions: {
    loadAllUser({commit},payload={}){
      payload.api = apis.signin;
      loadAction(commit,payload,'LOADALLUSER')
    }
  },
  getters:{
    alluser(state){
      state.allUser = JSON.parse(localStorage.getItem('resp').response.roles)
      return state.allUser
    }
  },
})
