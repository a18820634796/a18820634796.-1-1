//导入axios模块
import axios from 'axios'
//导入vue模块
import Vue from 'vue'
//配置基础路劲，在不同的环境下发起请求的基础连接不同
axios.defaults.baseURL = process.env.VUE_APP_BaseURL;
//配置拦截器
//请求拦截
axios.interceptors.request.use(function (config){
    console.log("config",config);
    var token = localStorage.getItem("token")
    config.headers.common['Authorization'] = "Bearer "+token;
    return config;
},function(error){
    return Promise.reject(error)
});

//响应拦截器
axios.interceptors.response.use(function(response){
    return response;
},function(error){
    return Promise.reject(error);
});
var mtaxios= {
    get:function(url,params){
        return axios.get(url,{params:params})
    },
    post:function(url,params){
        return axios.post(url,params)
    }
}

//将mtaxios注册成Vue的实例属性,以后可以通过this.$http.get或this.$http.post进行访问
Vue.prototype.$http = mtaxios;
//导出mtaxios模块
export default mtaxios;