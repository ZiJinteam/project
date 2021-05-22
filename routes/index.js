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

module.exports = router;
