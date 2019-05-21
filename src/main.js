import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/mtaxios'
import './apis'

Vue.config.productionTip = false
import 'reset-css'
import 'animate.css'
//引入elementUi
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import '@/mixins'

router.beforeEach((to,from,next)=>{
  //如果是直接跳转登录页面，则直接放行
  if(to.path==="/login"){
    next()
    //如果不是，判断是否一登录
  }else{
    var token = localStorage.getItem("token");
    if(token){
      next()
    }else{
      next({path:'/login',query:{redirect:to.path}})
    }
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
