var express = require('express');
var router = express.Router();
var mysql_odbc = require('../db/db_conn')();
var conn = mysql_odbc.init(); 

router.get('/board/list/:page', function(req, res, next) {  
    var page = req.params.page;  
    var sql = "select idx, name, title, date_format(modidate,'%Y-%m-%d %H:%i:%s') modidate, date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate from board";  
   
    conn.query(sql, function (err, rows) {    
        if (err) 
            console.error("err : " + err);    
        
        res.send(rows);  
    });

});

router.get('/list', function(req, res, next) {
    res.redirect('/board/list/1');
});

module.exports = router;