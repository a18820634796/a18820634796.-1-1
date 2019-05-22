import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',name:'home',component:()=>import(/**webpackChunkName:'Home' */'@/components/Home'),
    children:[
      {path:'/role', name:'role',component:()=>import(/**webpackChunkName:'homeleftchilder */'@/components/Role/role')},
      {path:'/root', name:'root',component:()=>import(/**webpackChunkName:'homeleftchilder */'@/components/Root/root')},
      {path:'/user', name:'user',component:()=>import(/**webpackChunkName:'homeleftchilder */'@/components/User/user')},
    ]
  },
    {path:'/login',name:'login',component:()=>import(/**weboackChunkName:'login' */'@/components/Login/login')}
  ]
})
