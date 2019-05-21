import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {path:'/',redirect:'/home'},
    {path:'/home',name:'home',component:()=>import(/**webpackChunkName:'Home' */'@/components/Home')},
    {path:'/login',name:'login',component:()=>import(/**weboackChunkName:'login' */'@/components/Login/login')}
  ]
})
