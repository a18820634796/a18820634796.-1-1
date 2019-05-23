<template>
    <div id="homeLeftchild">
        <el-row>
            <el-col>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="rgb(15, 15, 15)"
                text-color="rgb(100, 100, 100)"
                active-text-color="#ffd04b">
                    <el-submenu v-for="(item,index) in manage" :key="index" :index="item.id">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.title}}</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item  v-for="(item,index) in item.systemdata" :key="index" @click="pushView(item)">{{item.title}}</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            manage:[
                {title:'系统管理',name:'system',id:'1',
                    systemdata:[
                        {title:'用户管理',name:'user',num:2},
                        {title:'角色管理',name:'role',num:1},
                        {title:'权限管理',name:'root',num:3}
                    ]
                },
                {title:'彩票管理',name:'lottery',id:'2',
                    systemdata:[
                        {title:'更新彩票列表',name:'updateLotteyList',num:1},
                        {title:'获取所有彩种',name:'getAllKind',num:2},
                        {title:'获取指定彩种的信息',name:'getKindMessage',num:3}
                    ]
                },
                {title:'广告管理',name:'advertising',id:'3',
                    systemdata:[
                    {title:'横幅广告',name:'bannerAd',num:1},
                ]
                },
                {title:'新闻管理',name:'newmanagement',id:'4',
                    systemdata:[
                    {title:'新闻列表',name:'newsList',num:1},
                ]
                },
                
            ],
            
        }      
    },
    methods: {
        
    },
    // created(){
    //     this.$http.post(this.$apis.ssqs)
    //     .then((resp)=>{
    //         console.log("resp",resp)
    //         console.log(permissionDesc)
    //     })
    // }
}
</script>

<style lang="scss">
    #homeLeftchild{
        width: 100%;
        height: 100%;
        background:rgb(15, 15, 15);
    }
</style>
