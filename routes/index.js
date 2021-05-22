var express = require('express');
var router = express.Router();

var db = require("../utils/db"); //引入数据库封装模块

/* GET home page. */
router.get('/', function(req, res, next) {

  //查询users表
  db.query("SELECT * FROM users",[],function(results,fields){
    console.log(results);
    res.json(null)
    res.json({ user: 'test' })
    res.status(500).json({ error: 'message' })
    res.render('index', { title: 'Express11' });
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
module.exports = router;
