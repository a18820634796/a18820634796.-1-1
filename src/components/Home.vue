<template>
    <div id="Home">
        <div id="outlogin">
            <div id="buttom" type="danger" @click="login">注销</div>
        </div>
        <div id="homepage">
            <div id="homeLeft">
                <nav-bar/>
            </div>
            <div id="homeRight"></div>
        </div>
    </div>
    
</template>

<script>
import NavBar from './NavBar'
export default {
    components:{NavBar},
    methods:{
        login(){
            var action = ()=>{
                localStorage.clear();
                this.$router.push({path:'/login'})
                console.log("跳转登录页面")
            }
            this.operatorConfirm("退出",action)
        }
    }

}
</script>
<style lang="scss" scoped>
    #Home{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        #outlogin{
                width: 100%;
                height: 8%;
                background: lightgray;
                
                #buttom {
                    width: 70px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                    background: rgb(235, 116, 116);
                     margin-top: 10px;
                    margin-left: 20px;
                    border-radius: 7px;
                }
        }
        #homepage{
            width: 100%;
            height: 92%;
            display: flex;
            flex-direction: row;
            #homeLeft{
                width: 15%;
                height: 100%;
                background: rgb(36, 36, 36);
            }
            #homeRight{
                width: 85%;
                height: 100%;
                background: url(../assets/homeRight.jpg);
                background-repeat: no-repeat;
                background-size: 100%；
                
            }
        }    
    }
</style>
