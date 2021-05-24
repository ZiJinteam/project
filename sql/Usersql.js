/**
 * user表操作 
 */
var User = {
    // 查询用户名
    queryUserName: function(param) {
        return "select * from users where username = '" + param.user + "'";
    },
    // 验证用户名密码
    queryUNP: function(param) {
        return "select * from users where username = '" + param.user + "' and password = '" + param.pwd + "' limit 1";
    },

}
exports = module.exports = User;