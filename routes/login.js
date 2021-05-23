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
router.get('/login.html',function (req,res) {
    var stuname=req.query.stuname;
    var stupwd=req.query.stupwd;
    
    var selectSQL = "select * from users where username='"+stuname+"' and password='"+stupwd+"'";
    connection.query(selectSQL,function (err,rs) {
     if (err) throw err;
     console.log(rs);
     console.log('OK');
     res.sendfile("inquire.html" );
    })
   })

module.exports = router;