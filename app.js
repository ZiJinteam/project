var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var birdsRouter = require('./routes/birds');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/birds', birdsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');

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

module.exports = app;
