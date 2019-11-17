var express = require('express');
var router = express.Router();
var db = require('../db')


/* GET home page. */
router.get('/', function (req, res, next) {
  var sqlStr = 'select * from user_list;';

  db.query(sqlStr, '', (err, result) => {
    if (err) {
      res.render('index', { status: '0', message: '数据获取失败！' });
      return;
    }
    res.render('index', { status: '1', message: '数据获取成功！', res: result[0] });
  })
  // res.render('index', { title: 'Express' });
});

module.exports = router;
