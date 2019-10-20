<template>
    <div id="user">
        <div id="userText">
            <div id="userhead">
                <template>
                    <div class="headButton">
                        <el-button type="primary" @click="pushView({name:'addUser'})">
                            新增用户
                        </el-button>
                    </div>
                </template>
            </div>
            <div id="usercenter">
                <table id="tablecenter">
                    <template>
                        <tr>
                            <th style="width:200px">账号名</th>
                            <th>角色列表</th>
                            <th style="width:300px;">操作</th>
                        </tr>
                        <tr >
                            <td></td>
                            <td></td>
                            <td >
                                    <el-button type="primary" @click="pushView({name:'addUser',})">
                                        编辑用户
                                    </el-button>
                                    <el-button type="danger" @click="deleteRole(item._id)">
                                        删除用户
                                    </el-button>
                                </td>
                        </tr>
                    </template>
                </table>    
            </div>
            <div id="userfoot">

            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['allUser'])
    },
    methods:{
        
        loadMore(pageNo){
            this.$http.get(this.$apis,{pageSize:10,pageNo:pageNo})
            .then((resp)=>{
                this.articls = resp.data.data;
                this.total = resp.data.total; //总数据条数
            })
        },
        deleteRole(id){
            var action = ()=>{
                this.post(this.apis.deleteUser,{_id:id})
                .then(()=>{
                    this.loadMore(1)
                })
            }
            this.operatorConfirm("删除用户",action)
       }
        
    },
    mounted(){
        // console.log(this.allUser)
         this.$http.get(this.$apis.findAllUsers)
        .then((resp)=>{
            console.log(resp.data)
        })
    },
    created(){
        // this.$http.get(this.$apis.findAllUsers)
        // .then((resp)=>{
        //     console.log(resp.data)
        // })
    }
}
</script>

<style lang="scss" scoped>
    #user{
        position: absolute;
        width: 85%;
        height: 100%;
        background: white;
        #userText{
            width:96%;
            height: 90%;
            margin:0 auto;
            margin-top: 20px;
            #userhead{
                width: 100%;
                height: 10%;
                // background: yellow;
                .headButton{
                    margin-left: 20px;
                    line-height: 55px;
                }
            }    
            #usercenter{
                width: 100%;
                height: 70%;
                // background: rgb(85, 85, 75);
                #tablecenter{
                    width: 100%;
                    width: 96%; 
                    text-align: center;
                    tr{   
                        height: 50px; 
                        td,th{
                            border: 1px solid gray;
                        }
                    }
                }
            }
            
            #userfoot{
                width: 100%;
                height: 10%;
                background: rgb(109, 159, 189);
            }
        }
    }
</style>
