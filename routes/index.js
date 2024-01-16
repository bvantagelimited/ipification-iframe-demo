var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/callback', function(req, res, next) {
  const { code = '', error = '' } = req.query;
  res.render('callback', { code , error });
});

module.exports = router;
