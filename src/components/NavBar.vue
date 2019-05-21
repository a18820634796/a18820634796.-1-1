<template>
    <div id="homeLeftchild">
        <ul>
            <li v-for="(item,index) in manage" :key="index">
                <i class="el-icon-arrow-down"></i>
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            manage:[
                {title:'系统管理',name:'system',},
                {title:'彩票管理',name:'lottery',},
                {title:'广告管理',name:'advertising',},
                {title:'新闻管理',name:'newmanagement',},
                
            ]
        }      
    }
}
</script>

<style lang="scss">
    #homeLeftchild{
        width: 100%;
        height: 100%;
        ul{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            
            li{
                width: 100%;
                height: 80px;
                font-size: 20px;
                color: white;
                text-align: center;

            }
        }
    }
</style>
