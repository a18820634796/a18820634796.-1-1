//管理接口
import Vue from 'vue'

var apis = {
    signin:'/signin',    //登录接口

    //彩票管理
    addNewGame:'/addNewGame',     //更新彩票列表
    findAllGames:'/findAllGames', //获取所有彩种
    findByGameName:'/findByGameName', //获取指定彩种信息
    
    //系统管理
    //权限管理
    deletePermission:'/deletePermission', //删除权限
    addNewPersmission:'/addNewPersmission', //新增权限
    showAllPermission:'/showAllPermission',  //查询所有权限
    findPermissionById:'/findPermissionById',  //根据权限id查询权限信息

    //角色管理
    deleteRole:'/deleteRole',  //删除角色
    addNewRole:'/addNewRole',  //新增角色
    updateRoleInfo:'/updateRoleInfo', //更新角色信息
    findAllRoles:'/system/role/findAllRoles', //查询所有的角色
    findRoleInfoById:'/findRoleInfoById', //查询角色信息

    //账号管理
    deleteUser:'/deleteUser',  //删除用户
    addNewUser:'/addNewUser',  //新增用户
    updateUserInfo:'/updateUserInfo',  //更新用户信息
    findUserInfoById:'/findUserInfoById', ///查询用户信息
    findAllUsers:'/findAllUsers'  //获取所有账号
}
Vue.prototype.$apis = apis;
export default apis;