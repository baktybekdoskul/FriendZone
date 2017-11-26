var express = require('express');
var router = express.Router();
var passport = require('passport');
var db = require('../db/index');

// router.get('/', function(req, res, next) {
//     db.query('SELECT * FROM posts', (err2, res2) => {
//         if (err2) {
//             return next(err2)
//         }
//         res.send(res2.rows);
//     });
// });

router.get('/getcomments/:id', function(req, res, next){
    db.query('SELECT id, content, date, student_id FROM comments WHERE posts_id=$1 ORDER BY date', [req.params.id], (err2, res2) => {
        if (err2) {
            return next(err2)
        }
        res.send(res2.rows);
    });
});

module.exports = router;
