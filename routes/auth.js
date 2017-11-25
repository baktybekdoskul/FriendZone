var express = require('express');
var router = express.Router();
var db = require('../db/index');

var expressValidator = require('express-validator');
var passport = require('passport');

var bcrypt=require('bcrypt');
var saltRounds = 10;

router.get('/checksession', function(req, res){
    if (req.isAuthenticated()) {
        res.send(req.user);
    } else {
        res.send(false);
    }
});

router.post('/login', function(req, res, next) {
    if (req.isAuthenticated()===true){
        return res.send(null);
    }
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.send(false);
        }
        req.logIn(user, function(err2) {
            if (err2) {
                return next(err2);
            }
            return res.send(user);
        });
    })(req, res, next);
});

router.get('/logout', function(req, res){
    req.logout();
    req.session.destroy();
    res.send(true);
});

router.post('/register', function(req, res, next) {
    if (req.isAuthenticated()) {
        res.send(null);
    } else {
        var student=req.body;
        req.checkBody('email', 'Username field cannot be empty.').notEmpty();
        req.checkBody('email', 'The email you entered is invalid, please try again.').isEmail();
        req.checkBody('email', 'Email address must be between 4-100 characters long, please try again.').len(4, 100);
        req.checkBody('password', 'Password must be between 8-100 characters long.').len(8, 100);
        //req.checkBody('password', 'Password must include one lowercase character, one uppercase character, a number, and a special character.').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");
        req.checkBody('passwordMatch', 'Passwords do not match, please try again.').equals(req.body.password);

        const errors=req.validationErrors();

        if (errors){
            console.log('Errors:'+JSON.stringify(errors));
            res.send(errors);
        } else {

            bcrypt.hash(student.password, saltRounds, function(err3, hash) {
                db.query('INSERT INTO student (id, email, firstname, lastname, password) VALUES ($1, $2, $3, $4, $5)', [student.id, student.email, student.firstname, student.lastname, hash], (err2, res2) => {
                    if (err2) {
                        res.send(err2);
                    } else {
                        var userStudent = {
                            email: student.email,
                            firstname: student.firstname,
                            lastname: student.lastname,
                            id: student.id
                        };
                        req.login(userStudent, function(err4){
                            if (err4) {
                                res.send(err4);
                            } else {
                                res.send(userStudent);
                            }
                        });
                    }
                });
            });

        }
    }
});

passport.serializeUser(function(userStudent, done) {
    done(null, userStudent);
});

passport.deserializeUser(function(userStudent, done) {
    done(null, userStudent);
});

function authentificationMiddleware(){
    return (req, res, next) => {
        console.log('req.session.passport.user: $JSON.stringify(req.session.passport)');
        if (req.isAuthenticated()) return next();
        res.send('Not authorized');
    }
}

module.exports = router;