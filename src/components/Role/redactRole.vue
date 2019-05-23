<template>
    <div id="redactRole">
        <div id="tableTest">
            <div class="head">
                <span class="headLeft">提示</span>
                <span class="headRight" @click="outRole">
                    <i class="el-icon-circle-close"></i>
                </span>
            </div>
            <div class="center"></div>
            <div class="foot"></div>
        </div>
    </div>
</template>

<script>
export default {
    

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
        }
    }
</style>
