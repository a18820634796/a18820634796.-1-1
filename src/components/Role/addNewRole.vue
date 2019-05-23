<template>
    <div id="addNewRole">
        <div id="tableTest">
            <div class="head">
                <span class="headLeft">提示</span>
                <span class="headRight" @click="outRole">
                    <i class="el-icon-circle-close"></i>
                </span>
            </div>
            <div class="center">
                <table>
                    <tr>
                        <td style="height:50px;width:150px;">角色名称</td>
                        <td>
                            <el-input type="text" class="addInput"></el-input>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:50px;">角色描述</td>
                        <td>
                            <el-input type="text" class="addInput"></el-input>
                        </td>
                    </tr>
                    <tr >
                        <td colspan="2">
                                <div id="checkRoot">     
                                    <el-menu
                                    default-active="2"
                                    class="black"
                                    text-color="rgb(100, 100, 100)"
                                    active-text-color="#ffd04b">
                                        <el-submenu v-for="(item,index) in userRoot" :key="index+item" :index="item._id">
                                            <template slot="title">
                                                    
                                                    <input type="checkbox"  >
                                                    <span id="footcheck">{{item.permissionDesc}}</span>                                             
                                            </template>
                                            <el-menu-item-group>
                                                <el-menu-item  v-for="(item,index) in item.systemdata" :key="index">{{item.permissionDesc}}</el-menu-item>
                                            </el-menu-item-group>
                                        </el-submenu>
                                    </el-menu>
                                </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="foot">
                <el-row>
                    <template>
                        <el-button @click="pushView({name:'role'})">取消</el-button>
                    </template>
                    
                    <el-button type="primary">确定</el-button>
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
                systemManag:[],

            }
        },
    methods:{
        outRole(){
            this.$router.go(-1)
        },
    },
    created(){
        this.$http.get(this.$apis.showAllPermission,)
        .then((resp)=>{
        //     console.log(resp.data.allPermission)
        // console.log(resp)
        // var permission = resp.data.allPermission
        // console.log(permission);
        // var permission = JSON.parse(permission);
        // var permissions = permission.data.response.permissions;
        // console.log(permissions);
        // for(var i=0;i<permissions.length;i++){
        //     var parentid = permissions[i].parentid;
        //     if(parentid == 0){
        //         permissions[i].chlidren = [];
        //         this.allmission.push(permissions[i])
        //     }else{
        //         for(var j=0;j<this.allmission.length;j++){
        //             var id = this.allmission[j]._id;
        //             if(parentid == id){
        //                 this.allmission[j].chlidren.push(permissions[i])
        //             }
        //         }
        //     }
        // }

    
            console.log("resp",resp.data.allPermission)
            this.allPermission = resp.data.allPermission
            var allPermission = this.allPermission           
            for(var i = 0;i<allPermission.length;i++){
                if(!allPermission[i].parentid){
                    this.userRoot.push(allPermission[i])
                }
            }
            for(var j =0;j<this.userRoot.length;j++){
                // console.log(this.userRoot[j]._id)
                for(var z = 0;z<allPermission.length;z++){
                    // console.log(allPermission[z].parentid)
                    if(this.allPermission[z].parentid = this.userRoot[j]._id){
                        this.userRoot[j].push(allPermission[z])
                        console.log(this.userRoot)
                    }
                }
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
            background: rgb(221, 221, 221);
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
                // background: rgb(173, 224, 123);
                display: flex;
                justify-content: center;
                table{
                    width: 96%; 
                    height: 100%;
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
                
            }
            #checkRoot{
                width: 300px;
                max-height: 200px;
                background: yellow;
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
