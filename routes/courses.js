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
    db.query('SELECT p.id, p.content, p.date, p.student_id, s.firstname, s.lastname, s.email FROM posts p, student s WHERE p.student_id=s.id AND courses_id=$1 ORDER BY date', [req.params.id], (err2, res2) => {
        if (err2) {
            return next(err2)
        }
        res.send(res2.rows);
    });
});

router.get('/getinfo/:id', function(req, res, next){
  db.query('SELECT * FROM courses WHERE id=$1', [req.params.id], (err2, res2) => {
    if (err2) {
      return next(err2)
    }
    res.send(res2.rows[0]);
  });
});

module.exports = router;
