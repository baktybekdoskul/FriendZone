var express = require('express');
var router = express.Router();
var passport = require('passport');
var db = require('../db/index');

// router.get('/', function(req, res, next) {
//         db.query('SELECT * FROM courses', (err2, res2) => {
//             if (err2) {
//                 return next(err2)
//             }
//             res.send(res2.rows);
//         });
// });

router.get('/getposts/:id', function(req, res, next){
    db.query('SELECT id, content, date, student_id FROM posts WHERE courses_id=$1 ORDER BY date', [req.params.id], (err2, res2) => {
        if (err2) {
            return next(err2)
        }
        res.send(res2.rows);
    });
});

module.exports = router;
