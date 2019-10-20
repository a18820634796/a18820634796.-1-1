<template>
    <div id="addNewRole">
        <div id="tableTest">
            <div class="head">
                <span class="headLeft">提示</span>
                <span class="headRight" @click="outRole">
                    <i class="el-icon-circle-close"></i>
                </span>
            </div>
            <div class="center" ref="addnewRole">
                <table>
                    <tr>
                        <td style="height:50px;width:150px;">角色名称</td>
                        <td>
                            <el-input type="text" class="addInput" v-model="addnewRole.permissionName"></el-input>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:50px;">角色描述</td>
                        <td>
                            <el-input type="text" class="addInput" v-model="addnewRole.permissionDesc"></el-input>
                        </td>
                    </tr>
                </table>
                <div id="centerFoot">
                    <div class="centerfoot">
                        <el-tree
                        :data="userRoot"
                        show-checkbox                                             
                        :props="defaultProps"
                        v-model="addnewRole.permissions">
                        
                        </el-tree>
                    </div>                 
                </div>
            </div>
            <div class="foot">
                <el-row>
                    <template>
                        <el-button @click="pushView({name:'role'})">取消</el-button>
                    </template>
                    
                    <el-button type="primary" @click="addNewRole">确定</el-button>
                </el-row>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
            return {
                userRoot:[],
                addnewRole:{
                    permissionName:'',
                    permissionDesc:'',
                    permissions:[]
                },
                defaultProps: {
                    children: 'children',
                    label: 'permissionDesc'
                }
            }
        },
    methods:{
        outRole(){
            this.$router.go(-1)
        },
        addNewRole(){
            // console.log(this.userRoot)
            this.$refs['addnewRole'].validate((valid)=>{
                this.post(this.addnewRole)
                .then(()=>{
                    this.addnewRole = {}
                    this.$router.go(-1)
                    alert("更新列表");
                })
            })
            this.$route.commit(this.$apis.findAllRoles)
        },
    },
    created(){
        this.$http.get(this.$apis.showAllPermission,)
        .then((resp)=>{ 
            // console.log("resp",resp.data.allPermission)
            var allPermission  = resp.data.allPermission
                    
            for(var i = 0;i<allPermission.length;i++){
                if(!allPermission[i].parentid){
                    allPermission[i].children = [];
                    this.userRoot.push(allPermission[i])
                    console.log(allPermission[i])
                }else{
                    for(var j =0;j<this.userRoot.length;j++){                    
                        var id =this.userRoot[j]._id
                        var parentid = allPermission[i].parentid
                        if(parentid == id){
                            this.userRoot[j].children.push(allPermission[i])
                        }
                    }
                }
                localStorage.setItem("userRoot",JSON.stringify(this.userRoot))
            }
        })
    }
}
</script>

<style lang="scss" >
    #addNewRole{
        position: absolute;
        top: 8%;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        #tableTest{
            position: absolute;
            top: 50px;
            left: 250px;
            width: 40%;
            height: 75%;
            background: rgb(255, 253, 253);
            .head{
                width: 100%;
                height: 12%;
                font-size: 22px;
                .headLeft{
                    position: absolute;
                    top: 12px;
                    left: 20px;
                } 
                .headRight{
                    position: absolute;
                    right: 20px;
                    top: 12px;
                }
            }
            .center{
                width: 100%;
                height: 76%;
                display: flex;
                justify-content: center;
                display: flex;
                flex-direction: column;
                table{
                    width: 96%; 
                    height: 30%;
                    text-align: center;
                    tr{   
                        td{
                            border: 1px solid gray;
                            .addInput{
                                width: 96%;                              
                            }
                        }
                    }
                }
                #centerFoot{
                    width: 100%;
                    height: 70%;
                    .centerfoot{
                        width: 70%;
                        height: 100%;
                    }
                }
            }
            .foot{
                width: 100%;
                height: 12%;
                display: flex;
                align-items: center;
                .el-row{
                    position: absolute;
                    right: 20px;
                }
            }
        }
    }
</style>
