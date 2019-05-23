<template>
    <div id="role">
        <div id="roleCss">
            <mttable id="tableAll">
                <template slot="mttable-head">
                    <div class="headButton">
                        <el-button type="primary" @click="pushView({name:'addNewRole'})">
                            新增角色
                        </el-button>
                    </div>
                </template>
                <template slot="mttable-center" >
                    <table id="tablecenter">
                        <template v-if="allRoles.length">
                            <tr>
                                <th>角色名称</th>
                                <th>角色描述</th>
                                <th>详情</th>
                                <th>操作</th>
                            </tr>
                            <tr v-for="(item,index) in allRoles" :key="index">
                                <td>{{item.roleDesc}}</td>
                                <td>{{item.roleName}}</td>
                                <td></td>
                                <td style="width:400px">
                                    <el-button type="primary" @click="pushView({name:'redactRole'})">
                                        编辑角色
                                    </el-button>
                                    <el-button type="danger" @click="deleteRole(item._id)">
                                        删除角色
                                    </el-button>
                                </td>
                            </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="7">没有数据</td>
                            </tr>
                        </template>
                    </table>
                </template>    
            </mttable>          
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    data(){
        return {
            allRoles:[],
            length:0,
        }
    },
    methods:{
        loadMore(pageNo){
            this.$http.get(this.$apis.findAllRoles,{pageSize:10,pageNo:1})
            .then((resp)=>{
                // console.log(resp.data)
                this.allRoles =resp.data.allRoles
                this.length = resp.data.allRoles.length
            })
        },
       deleteRole(id){
           var action = ()=>{
               this.post(this.$apis.deleteRole,{_id:id})
               .then(()=>{
                   this.loadMore(1);
               })
           }
           this.operatorConfirm("删除文章",action)
       }
    },
    created(){
        this.$http.get(this.$apis.findAllRoles,{pageSize:10,pageNo:1})
        .then((resp)=>{
            // console.log(resp.data)
            this.allRoles =resp.data.allRoles
            this.length = resp.data.allRoles.length
        })
    }
}
</script>

<style lang="scss" >
    #role{
        width: 100%;
        height: 100%;
        #roleCss{
            width: 100%;
            height: 100%;
            background: white;

        }
    }
    #tableAll{
        width: 100%;
        height: 100%;
        padding: 2%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-items: center;
        .headButton{
            margin-top: 5px;
            width: 100%;
            height: 50px;
            border: 1px solid gray;
            margin: 0 auto;
            line-height: 50px;
            padding-left: 10px;
            box-sizing: border-box;
        }
        #tablecenter{
            width: 100%;                  
            font-size: 20px;
            border: 1px solid gray;
            border-top: none;
            text-align: center;
            tr{
                td,th{
                    line-height: 50px;
                    height: 30px;
                    border: 1px solid gray;
                    border-top: none;
                }
            }

        }
    }
</style>
