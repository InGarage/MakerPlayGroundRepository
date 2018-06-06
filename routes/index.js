var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var db_config = require('../config/database').config;
var rows_to_json = require('../util/rows_to_json');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MP-Repo' });
});

router.get('/current_version', function(req, res, next) {
  var connection = new Connection(db_config);
  connection.on('connect', function(err) {
    if (err) { return next(err); }
    request = new Request(
      "SELECT TOP 1 * FROM mp_version ORDER BY release_date DESC;",
      function(err, rowCount, rows) {
        if (err) { return next(err); }
        json_obj = rows_to_json(rows);
        res.json(json_obj[0]);
        connection.close();
      }
    );
    connection.execSql(request);
  });
});

module.exports = router;
