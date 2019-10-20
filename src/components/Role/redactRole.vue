<template>
    <div id="redactRole">
        <div id="tableTest">
            <div class="head">
                <span class="headLeft">提示</span>
                <span class="headRight" @click="goRole">
                    <i class="el-icon-circle-close"></i>
                </span>
            </div>
            <div class="center">
                <div id="centerHead">
                    <el-form status-icon label-width="80px">
                        <el-form-item label="角色名称" prop="roleDesc">
                            <el-input v-model="roleInfo.roleDesc">{{roleInfo.roleDesc}}</el-input>
                        </el-form-item>
                    </el-form>
                </div>
                 <div id="centerFoot">
                    <div class="centerfoot">
                        <el-tree
                        :data="userRoot"
                        v-model="roleInfo"
                        
                        show-checkbox
                        node-key="id"
                        :props="defaultProps">
                        </el-tree>
                    </div>                 
                </div>
            </div>
            <div class="foot">
               <div class="footBut">
                   <el-row>
                    <template>
                        <el-button @click="pushView({name:'role'})">取消</el-button>
                    </template>
                    
                    <el-button type="primary">确定</el-button>
                </el-row>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            roleInfo:{
                roleDesc:'',
                permissions:[]
            },
            userRoot:[],
            defaultProps: {
                showcheckDel:false,
                children: 'children',
                label: 'permissionDesc'
            }
        }
    },
    methods:{
        goRole(){
            this.$http.get(this.$apis.findAllRoles)
            .then((resp)=>{
                // console.log(resp.data)
                this.allRoles =resp.data.allRoles
                this.$router.push({name:'role'})
            })
        }
    },
    mounted(){
        // console.log(this.$route)
        this.$http.get(this.$apis.showAllPermission,)
        .then((resp)=>{ 
            var allPermission  = resp.data.allPermission
                    // console.log(allPermission)
            for(var i = 0;i<allPermission.length;i++){
                if(!allPermission[i].parentid){
                    allPermission[i].children = [];
                    this.userRoot.push(allPermission[i])
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
            this.$http.get(this.$apis.findAllRoles)
            .then((resp)=>{

                this.length = resp.data.allRoles.length
                this.roleInfo = this.$route.params.roleInfo
                this.permissions = this.$route.params.roleInfo.permissions
                // console.log(this.permissions)
                // console.log(this.roleInfo)
                for(var i=0;i<this.permissions.length;i++){
                    // console.log(this.permissions[i])
                    for(var q=0;q<allPermission.length;q++){
                        if(this.permissions[i] ==allPermission[q]._id ){
                            // userRoot.permissionDesc(show-checkbox) = true
                        }
                    }
                //    console.log("this",allPermission._id)
                   
                }
            })
        })
         
        
    }
}
</script>

<style lang="scss" scoped>
    #redactRole{
       position: absolute;
        top: 8%;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        #tableTest{
            position: absolute;
            top: 50px;
            left: 250px;
            width: 35%;
            height: 65%;
            background: rgb(255, 255, 255);
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
                // background: lightblue;
                #centerHead{
                    width: 100%;
                    height:50px;
                }
            }
            .foot{
                width: 100%;
                height: 12%;
                display: flex;
                flex-direction: row;
                align-items: center;
                right: 20px;
                .footBut{
                    position: absolute;
                    right: 20px;
                }
            }
        }
    }
</style>
