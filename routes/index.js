var express = require('express');
var router = express.Router();

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
