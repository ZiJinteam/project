var express = require('express')
var path = require("path");
var mysql = require('mysql')
var router = express.Router()
 
var connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123456',//修改为自己的密码
    database:'managerment'//修改为自己的数据库
})
connection.connect()
router.get('/',function(req,res){
    res.sendfile(path.join(__dirname,"../web/login.html"))
    //_dirname:当前文件的路径，path.join():合并路径
})
/**
*登录验证功能
*/
router.get('/login',function(req,res){
    var name = req.query.name
    var pwd = req.query.pwd
    var query1 = "select * from login where name='"+name+"' and pwd='"+pwd+"'"
    connection.query(query1,function(err,result){
        if (err) throw err;
        console.log("!!!",result)
        if(result.length==0){
            res.send("用户名或密码错误")
        }else{res.send("<h2>登录成功，欢迎<h2>")}
    })
})
module.exports = router;