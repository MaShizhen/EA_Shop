var express = require('express');
var router = express.Router();
var db = require('../db')


/* GET users listing. */
router.get('/getUserList', function (req, res, next) {
    var sqlStr = 'select * from user_list;';
    db.query(sqlStr, '', (err, result) => {
        if (err) {
            res.end(JSON.stringify(err));
            return;
        }
        res.end(JSON.stringify(result));
    })
});

module.exports = router;
