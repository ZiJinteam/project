var fs = require("fs");
var express = require("express");
var student = require("./student.js");
var mysql = require("mysql");

var router = express.Router();
var db = mysql.createPool({host:"localhost",port:3306,user:"root",password:"123456",database:"managerment"});
var logStatus = false;//登录状态，默认时没登陆

//判断对象是否为空的方法
function judgeObj(obj){
           for(var item in obj){
               return true;
           }
          return false;

        }

module.exports = router;
