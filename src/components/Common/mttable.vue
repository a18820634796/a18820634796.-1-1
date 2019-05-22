<template>
    <div id="mttable" :style="{width:width}">
        <div id="mttable-head">
            <!-- <span>{{title}}</span> -->
            <slot name="mttable-head"></slot>
        </div>
        <div id="mttable-center">
            <slot name="mttable-center"></slot>
        </div>
        <div id="mttable-foot">
            <slot name="mttable-foot"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        width:{
            default:'100%'
        },
        title:{
            default:'新增角色'
        }
    }
}
</script>

<style lang="scss" scoped>
    #mttable{
        width: 100%;
        height: 100%;
        background: rgb(228, 228, 177);
        #mttable-head{
            width:100%;
            height:50px;
        }
        #mttable-center{

        }
        #mttable-foot{
            width: 100%;
            height: 50px;
        }
    }
</style>
