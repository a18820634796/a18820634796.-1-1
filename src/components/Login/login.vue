<template>
    <div id="login">
        <div id="container">
            <div id="kmhead">
                <span>可米彩票</span>
            </div>
            <el-form id="kmconter" status-icon :model="userInfo" :rules="rules" ref="userInfo">
                <el-form-item class="conterinput" prop="accountName" id="user" >
                    <el-input  type="text"   v-model="userInfo.accountName" id="textTop" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item class="conterinput"  prop="password" id="user">
                    <el-input type="password" v-model="userInfo.password" id="textBottom" placeholder="密码"></el-input>
                </el-form-item>               
            </el-form>
            <div id="kmfoot">
                <el-button id="elButton" @click="login">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userInfo:{
                accountName:'',
                password:''
            },
            rules:{
                accountName:[
                    {required:true,message:'用户名不能为空',trigger:'blur'},
                    {min:3,max:20,message:'用户名不能小于3和大于20位字符',trigger:'blur'}
                ],
                password:[
                    {required:true,message:'密码不能为空',trigger:'blur'},
                    // {min:5,max:20,message:'密码不能小于5和大于20位字符'}
                ]
            }
        }
    },
    methods:{
        login(){
            console.log(this.$refs)
            this.$refs['userInfo'].validate((valid)=>{
                if(valid){
                    console.log("校验通过");
                    this.$http.post(this.$apis.signin,this.userInfo)
                    .then((resp)=>{
                        // console.log("resp",resp.data);
                        var username = resp.data.response.accountName
                        var token = resp.data.token
                        var success = resp.data.success
                        if(success){
                            //保存token到本地                         
                            localStorage.setItem("token",token);
                            var query = this.$route.query;
                            //判断是否需要重定向，如果不需要重定向，就直接跳转到
                            //Home组件
                            // console.log(query.redirect)
                            if(!query.redirect){
                                console.log("hello")
                                this.$router.push({path:'/home'})
                            }else{
                                this.$router.push({path:query.redirect})
                            }
                        }else{
                            this.$message.error("登录失败，请检查用户名或密码")
                        }
                    }).catch((err)=>{
                        console.log(err)
                    })
                }else{
                    console.log("校验失败")
                }
            })
        }
    }
}
</script>

<style lang="scss">
    #login{
        width: 100%;
        height: 100%;
        background: url(../../assets/logoA.jpg);
        background-repeat: no-repeat;
        background-size: 100%；
    }
    #container{
        background: rgba(0, 0, 0, 0.5); 
        width: 300px;
        min-height:100%;
        box-shadow: 0 0 20px 2px lightgray;
        // float: right;
        #kmhead{
            width: 100%;
            height: 200px;
            font-size: 40px;
            color: white;
            text-align: center;
            span{
                display: flex;
                flex-direction: row;
                padding-left: 60px;
                box-sizing: border-box;
                justify-content: center;
                
                position: absolute;
                top:150px;
                right: 20;
            }
        }
        #kmconter{
            width: 100%;
            min-height: 120px;
            // background: lawngreen;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            #user{
                width: 70%;
                 
            }
            .conterinput{
                width: 100%;
                height: 100%;
                text-align: center
            }
            input{
                width: 100%;
                height: 35px;
                border: none;
                border-bottom: 1px solid white; 
                background: rgba(0, 0, 0, 0.4)  !important;
                color: white;
                outline: none;
                
            }
            
        }
        
        #kmfoot{
            width: 100%;    
            text-align: center;      
            #elButton{
                width: 70%;
                background: rgb(50, 224, 6);
            }
        }
        
    }
</style>
