import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',name:'home',component:()=>import(/*webpackChunkName:'Home' */'@/components/Home'),
    children:[
      {
        path:'role', 
        name:'role',
        component:()=>import(/**webpackChunkName:'homeleftchilder */'@/components/Role/role'),
        children:[
          {path:'addNewRole',name:'addNewRole',component:()=>import(/**webpackChunkName:'addNewRole' */'@/components/Role/addNewRole')},
          {path:'redactRole',name:'redactRole',component:()=>import(/**webpackChunkName:'redactRolr' */'@/components/Role/redactRole')}
        ]
      },
      {path:'root', name:'root',component:()=>import(/**webpackChunkName:'homeleftchilder */'@/components/Root/root')},
      {path:'user', name:'user',component:()=>import(/**webpackChunkName:'homeleftchilder */'@/components/User/user'),
      children:[
        {path:'addUser',name:'addUser',component:()=>import(/**webpackChunkName:'addNewRole' */'@/components/User/addUser')},
      ]
    },
      {path:'bannerAd',name:'bannerAd',component:()=>import(/*webpackChunkName */'@/components/BannerAd/bannerAd')},
      {path:'newsList',name:'newsList',component:()=>import(/*webpackChunkName:'newsList' */'@/components/NewsList/newsList')}
    ]
  },
    {path:'/login',name:'login',component:()=>import(/**weboackChunkName:'login' */'@/components/Login/login')}
  ]
})
