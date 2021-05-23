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

  app.get("/web/login.html", function(request, response) {
    fs.readFile("./"+request.path.substr(1),function(err,data){
         // body
         if(err){
             console.log(err);
             //404：NOT FOUND
             response.writeHead(404,{"Content-Type":"text/html"});
         }
         else{
             //200：OK
             response.writeHead(200,{"Content-Type":"text/html"});
             response.write(data.toString());
         }
         response.end();
     });
  });
module.exports = router;
