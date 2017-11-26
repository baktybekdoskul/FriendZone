var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var { Pool } = require('pg');
var passportSocketIo = require('passport.socketio');
var socket_io    = require( "socket.io" );

var expressValidator = require('express-validator');

// authentification
var session = require('express-session');
var passport = require('passport');
var pgSession = require('connect-pg-simple')(session);
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

var index = require('./routes/index');
var auth = require('./routes/auth');

var courses = require('./routes/courses');
var posts = require('./routes/posts');

// connecting to pgDB
var connectionString = 'postgresql://postgres:postgres@localhost/mydb';
var pool = new Pool({
    connectionString: connectionString
});
var sessionStore = new pgSession({
    pool : pool,                // Connection pool
    tableName : 'session'   // Use another table-name than the default "session" one
});

var app = express();

// Socket.io
var io           = socket_io();
app.io           = io;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    key: 'express.sid',
    store: sessionStore,
    secret: 'bla bla',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
    //cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    function(username, password, done) {
        var db = require('./db/index');
        db.query('SELECT * FROM student WHERE email=$1', [username], (err2, res2) => {
            if (err2) {
                done(err2);
            } else {
                console.log(res2);
                if (res2.rows.length===0){
                    done(null, false);
                } else {
                    var hash = res2.rows[0].password;
                    console.log('.'+hash+'.');
                    bcrypt.compare(password, hash, function(err, res){
                        if (res === true){
                            console.log('yes');
                            var userStudent = {
                                id: res2.rows[0].id,
                                email: res2.rows[0].email,
                                firstname: res2.rows[0].firstname,
                                lastname: res2.rows[0].lastname
                            };
                            done(null, userStudent);
                            console.log(userStudent);
                        } else {
                            console.log('no');
                            done(null, false);
                        }

                    });
                }
            }
        });
    }
));

io.use(passportSocketIo.authorize({
    key: 'express.sid',
    secret: 'bla bla',
    store: sessionStore,
    passport: passport,
    cookieParser: cookieParser,
    success: onAuthorizeSuccess,
    fail: onAuthorizeFail
}));

function onAuthorizeSuccess(data, accept){
    console.log('successful connection to socket.io');
    accept();
}

function onAuthorizeFail(data, message, error, accept){
    console.log("socket auth failed.");
    if(error){
        console.log(message);
        accept(new Error(message));
    }
}

app.use(function(req, res, next) {
    req.io = io;
    next();
});

var users = require('./routes/users')(io);

app.use('/api/', index);
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/courses', courses);
app.use('/api/posts', posts);

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', function(req, res, next){
  res.sendfile(path.join(__dirname, './dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
