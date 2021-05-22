var express = require('express');
var router = express.Router();
var Connection = require('tedious').Connection
var Request = require('tedious').Request

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.put('/', function (req, res) {
  res.send('Got a PUT request at /user');
});
router.delete('/', function (req, res) {
  res.send('Got a DELETE request at /user');
});
router.use(function(req,res,next){
  console.log('time',Date.now());
  next();
});

module.exports = router;
