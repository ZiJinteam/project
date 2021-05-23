var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('/static', express.static('public')));
app.use(express.static('web'));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/index', indexRouter);
app.use('/login', loginRouter);


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
const cors=require("cors")
const bodyParser=require("body-parser")
const db=require("./utils/config")
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())
app.use(cors())
app.post("/login",(req,res)=>{
    console.log("服务端",req.body)
    const {name,pwd}=req.body;
    let sql=`select * from users where username=${name} and password=${pwd}`
    console.log("sql",sql)
    let sqlObj=[]
    console.log("sqlObj",sqlObj)
    let callBack=function(err,data){
        console.log("data:",data.length)
        if(err){
            console.log("失败")
            return
        }
        if(data.length!=1){
        console.log("密码或用户名出错")
        res.send({
            msg:"用户名或密码出错",
            code:400
        })
        return
        }
        res.send({
            msg:"成功登录",
            code:200
        })
    }
    db.dbConn(sql,sqlObj,callBack)
    
})

module.exports = app;
