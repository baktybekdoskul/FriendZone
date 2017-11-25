var express = require('express');
var router = express.Router();
var db = require('../db/index');

var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
  db.query('SELECT * FROM student', (err2, res2) => {
        if (err2) {
            return next(err2)
        }
        res.send(res2.rows);
  });
});

router.get('/profile', authentificationMiddleware(), function(req, res, next){
    res.send(req.user);
});

function authentificationMiddleware(){
    return (req, res, next) => {
        console.log('req.session.passport.user: $JSON.stringify(req.session.passport)');
        if (req.isAuthenticated()) return next();
        res.send('Not authorized');
    }
}

module.exports = router;
