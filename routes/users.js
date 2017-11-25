var express = require('express');
var router = express.Router();
var passport = require('passport');
var db = require('../db/index');

/* GET users list. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/selectcourse', function(req, res, next) {
    if (req.isAuthenticated()) {
        db.query('INSERT INTO takes (student_id, courses_id) VALUES ($1, $2)', [req.user.id, req.body.courses_id], (err2, res2) => {
            if (err2) {
                return next(err2)
            }
            res.send(true);
        });
    } else {
        res.send(false);
    }

});

router.get('/mycourses', function(req, res, next) {
    if (req.isAuthenticated()) {
        db.query('SELECT c.id, c.abbr, c.course_title FROM takes t, courses c WHERE t.student_id=$1 AND t.courses_id=c.id', [req.user.id], (err2, res2) => {
            if (err2) {
                return next(err2)
            }
            res.send(res2.rows);
        });
    } else {
        res.send(false);
    }

});

router.post('/addpost', function(req, res, next) {
    if (req.isAuthenticated()) {
        db.query('INSERT INTO posts (content, student_id, courses_id) VALUES ($1, $2, $3)', [req.body.content, req.user.id, req.body.courses_id], (err2, res2) => {
            if (err2) {
                return next(err2)
            }
            res.send(true);
        });
    } else {
        res.send(false);
    }
});

router.post('/addfriend', function (req, res, next) {
    if (req.isAuthenticated()) {
        var firstId;
        var secondId;
        if (req.user.id<req.body.friend_id){
            firstId=req.user.id;
            secondId=req.body.friend_id;
        } else {
            firstId=req.body.friend_id;
            secondId=req.user.id;
        }
        db.query('INSERT INTO hasrelationship (first_stud_id, second_stud_id, status, active_stud_id) VALUES ($1, $2, $3, $4)', [firstId, secondId, 0, req.user.id], (err2, res2) => {
            if (err2) {
                return next(err2)
            }
            res.send(true);
        });
    } else {
        res.send(false);
    }
});

router.post('/confirmfriend', function (req, res, next) {
    if (req.isAuthenticated()) {
        var firstId;
        var secondId;
        if (req.user.id<req.body.friend_id){
            firstId=req.user.id;
            secondId=req.body.friend_id;
        } else {
            firstId=req.body.friend_id;
            secondId=req.user.id;
        }

        db.query('SELECT active_stud_id FROM hasrelationship WHERE first_stud_id=$1 AND second_stud_id=$2', [firstId, secondId], (err2, res2) => {
            if (err2) {
                return next(err2)
            }
            if (res2.rows.length===0){
                res.send(false);
            } else {
                var activeStud=res2.rows[0].active_stud_id;
                console.log(res2.rows);
                if (req.user.id!=activeStud){
                    db.query('UPDATE hasrelationship SET status=1 WHERE first_stud_id=$1 AND second_stud_id=$2', [firstId, secondId], (err3, res3) => {
                        if (err3) {
                            return next(err3)
                        }
                        res.send(true);
                    });
                } else {
                    res.send(false);
                }
            }
        });
    } else {
        res.send(false);
    }
});

router.post('/addcomment', function(req, res, next){
    if (req.isAuthenticated()) {
        db.query('INSERT INTO comments (content, student_id, posts_id) VALUES ($1, $2, $3)', [req.body.content, req.user.id, req.body.posts_id], (err2, res2) => {
            if (err2) {
                return next(err2)
            }
            res.send(true);
        });
    } else {
        res.send(false);
    }
});

router.get('/myfriends', function(req, res, next){
    if (req.isAuthenticated()) {
        db.query('SELECT s.email, s.firstname, s.lastname, s.id FROM hasrelationship h, student s WHERE (h.first_stud_id=$1 OR h.second_stud_id=$1) AND (h.first_stud_id=s.id OR h.second_stud_id=s.id) AND s.id<>$1 AND h.status=1', [req.user.id], (err2, res2) => {
            if (err2) {
                return next(err2)
            }
            res.send(res2.rows);
        });
    } else {
        res.send(false);
    }
});

module.exports = router;