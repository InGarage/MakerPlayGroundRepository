var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MP-Repo' });
});

router.get('/current_version', function(req, res, next) {
  var release_date = new Date();
  // release_date.setFullYear(2018, 6, 28);
  release_date.setTime(1527465600000);
  data = {
    'build_name': 'Maker Playground v0.2',
    'version': '0.2',
    'download_url': 'http://makerplayground.io',
    'relaese_date': release_date
  };
  res.json(data);
});

module.exports = router;
