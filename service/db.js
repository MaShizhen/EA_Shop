const MYSQL = require('mysql');
 const MYSQLCONFIG = require ('./sql.config');


let db = {};

db.query = (sqlStr, params, callback) => {
    let connection = MYSQL.createConnection(MYSQLCONFIG);
    connection.connect(err => {
        if (err) {
            console.log('Mysql connect error:', err);
            return;
        }
    });

    connection.query(sqlStr, params, (err,result) => {
        if (err) {
            console.log('Mysql query error:', err);
            callback(err, null);
            return;
        }
        callback(err, result);
    })

    connection.end(err => {
        if (err) {
            console.log('Mysql end error:', err);
            return;
        }
    })
}

module.exports = db;