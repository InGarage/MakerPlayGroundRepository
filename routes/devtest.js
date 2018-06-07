var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/current_version', function(req, res, next) {
  var release_date = new Date();
  release_date.setTime(1527465600000);
  res.json({
    build_name: 'Maker Playground v0.3',
    version: 0.3,
    release_date: release_date,
    download_url: 'http://makerplayground.io',
  });
});

module.exports = router;
