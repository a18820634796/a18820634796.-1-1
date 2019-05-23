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
            </div>
            <div class="foot">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            roleInfo:{
                roleDesc:''
            }
        }
    },
    methods:{
        goRole(){
            this.$http.get(this.$apis.findAllRoles)
            .then((resp)=>{
                // console.log(resp.data)
                this.allRoles =resp.data.allRoles
                this.length = resp.data.allRoles.length
                this.$router.push({name:'role'})
            })
        }
    },
    mounted(){
        this.$http.get(this.$apis.findAllRoles)
        .then((resp)=>{
            // console.log(resp.data)
            this.roleInfo =resp.data.allRoles
            this.length = resp.data.allRoles.length
            this.roleInfo = this.$route.params.roleInfo
            console.log(this.roleInfo)

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
                background: lightblue;
                #centerHead{
                    width: 100%;
                    height:50px;
                }
            }
            .foot{
                width: 100%;
                height: 12%;
                background: yellow;
            }
        }
    }
</style>
