var express = require('express');
var router = express.Router();

var db = require("../utils/db"); //引入数据库封装模块

/* GET home page. */
router.get('/', function(req, res, next) {

  //查询users表
  db.query("SELECT role FROM users where username='admin'",[],function(results,fields){
    if(results=1){
    console.log(results+"is a student");
    //res.json(results)
    //res.status(500).json({ error: 'message' })
    return
  }else if(results=0){
    console.log(results+"is a managerment");
    return
  }

  })
  
});


/* GET home page. */
router.get('/home',function(req,res){
  res.send("GET request to the homepage");
});
router.post('/home', function (req, res) {
  res.send('POST request to the homepage');
});
router.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });
router.get('/users/:id', function (req, res, next) {
    console.log('ID:', req.params.id);
    next();
  }, function (req, res, next) {
    res.send('User Info');
  });
  
  // handler for the /user/:id path, which prints the user ID
router.get('/users/:id', function (req, res, next) {
    res.end(req.params.id);
  });

  var http =require('http');
  var url=require('url');
  var fs=require('fs');
  // 解析传来的数据
  var querystring=require('querystring');
   
  var server=http.createServer();
   
  var ser=server.listen(6500)
   
  //获取文件路径
  var basePath=__dirname;
  var loginPath=basePath+'/html'+'/web/index.html';
  var mainPath=basePath+'/html'+'/web/inquire.html';
   
  // 监听请求
  server.on('request',function(req,res)
  {
      // 有请求就打印
      console.log("有请求");
      //解析url
      var urlString=url.parse(req.url);
      //根据不同的URL来处理不同的请求
      switch(urlString.pathname)
      {
          case '/inquire':
              sendData(mainPath,req,res);
              break;
          case '/login/check':
              requestData(req,res); 
              break;
          case '/login':
              sendData(loginPath,req,res);
              break;
          default:
              res.writeHead(404,'err',{'content-type':'text/html;charset=utf-8'});
              res.write("出错了");
              res.end();
              break;
      };
   
      function sendData(file,req,res)
      {
          fs.readFile(file,function(err,data)
          {
              if(err)
              {
                  res.writeHead(404,'err',{'content-type':'text/html;charset=utf-8'});
                  res.write("出错辽");
                  res.end();
              }else
              {
                  res.writeHead(200,'o98k',{'content-type':'text/html;charset=utf-8'});
                  res.write(data);
                  res.end();
              }
          });
      };
      function requestData(req,res)
      {
          res.writeHead(200,'oj8k',{'content-type':'text/html;charset=utf-8'});
              // console.log(req.method);
              // console.log(urlString);
              // console.log(querystring.parse(urlString.query));
              if(req.method.toUpperCase()=="POST")
              {
                  var str=""; 
                  //从缓冲区读取数据
                  req.on('data',function(da){str+=da;});
                  // req.on('end',function(){console.log(querystring.parse(str))});
                  req.on('end',function(){res.end(str);});
              }
      }
  });
  
module.exports = router;
