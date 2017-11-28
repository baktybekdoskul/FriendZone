var express = require('express');
var router = express.Router();
var passport = require('passport');
var db = require('../db/index');

/* GET users list. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getcourses', function(req, res, next){
  if (req.isAuthenticated()){
    db.query('SELECT c.id, c.abbr, c.course_title, t.student_id FROM courses c left outer join takes t on (c.id=t.courses_id AND t.student_id=$1)', [req.user.id], (err2, res2) => {
      if (err2) {
        return next(err2)
      }
      res.send(res2.rows);
    });
  } else {
    res.send(false);
  }
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

router.post('/unselectcourse', function(req, res, next){
  if (req.isAuthenticated()){
    db.query('DELETE FROM takes WHERE student_id=$1 AND courses_id=$2', [req.user.id, req.body.courses_id], function(err2, res2){
      if (err2){
        return next(err2);
      }
      res.send(true);
    })
  } else {
    res.send(false);
  }
});

router.get('/mycourses', function(req, res, next) {
    console.log(req.session);
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

        db.query('SELECT * FROM hasrelationship WHERE first_stud_id=$1 AND second_stud_id=$2', [firstId, secondId], function(err3, res3) {
          if (err3) {
            return next(err3);
          } else {
            if (res3.rows.length==0){
              db.query('INSERT INTO hasrelationship (first_stud_id, second_stud_id, status, active_stud_id) VALUES ($1, $2, $3, $4)', [firstId, secondId, 0, req.user.id], function(err2, res2){
                if(err2) {
                  return next(err2)
                }
                res.send(true);
              });
            } else {
              db.query('UPDATE hasrelationship SET status=0, active_stud_id=$3 WHERE first_stud_id=$1 AND second_stud_id=$2', [firstId, secondId, req.user.id], function(err2, res2){
                if(err2) {
                  return next(err2)
                }
                res.send(true);
              });
            }
          }
        });
    } else {
        res.send(false);
    }
});

router.post('/deletefriend', function(req, res, next){
  if (req.isAuthenticated()){
    var firstId;
    var secondId;
    if (req.user.id<req.body.friend_id){
      firstId=req.user.id;
      secondId=req.body.friend_id;
    } else {
      firstId=req.body.friend_id;
      secondId=req.user.id;
    }
    db.query('UPDATE hasrelationship SET status=null, active_stud_id=null WHERE first_stud_id=$1 AND second_stud_id=$2', [firstId, secondId], function(err2, res2){
      if (err2){
        return next(err2);
      } else {
        res.send(true);
      }
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
                if (req.user.id!=activeStud && res2.rows[0].status!=1){
                    db.query('UPDATE hasrelationship SET status=1, last_action=now() WHERE first_stud_id=$1 AND second_stud_id=$2', [firstId, secondId], (err3, res3) => {
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
                return next(err2);
                console.log('1');
            } else {
                res.send(true);
            }
        });
    } else {
        res.send(false);
    }
});

router.get('/getstudents', function(req, res, next){
  if (req.isAuthenticated()){
    db.query('SELECT s.id, s.firstname, s.lastname, s.email, h.status, h.active_stud_id FROM student s left outer join hasrelationship h on ((h.first_stud_id=$1 AND h.second_stud_id=s.id) OR (h.first_stud_id=s.id AND h.second_stud_id=$1)) WHERE s.id<>$1 ORDER BY s.firstname, s.lastname', [req.user.id], (err2, res2) => {
      if (err2) {
        return next(err2)
      }
      res.send(res2.rows);
    });
  } else {
    res.send(null);
  }
});

router.get('/myfriends', function(req, res, next){
    if (req.isAuthenticated()) {
        db.query('SELECT h.id as chats_id, s.email, s.firstname, s.lastname, s.id FROM hasrelationship h, student s WHERE (h.first_stud_id=$1 OR h.second_stud_id=$1) AND (h.first_stud_id=s.id OR h.second_stud_id=s.id) AND s.id<>$1 AND h.status=1 ORDER BY h.last_action desc', [req.user.id], (err2, res2) => {
            if (err2) {
                return next(err2)
            } else {
              res.send(res2.rows);
            }
        });
    } else {
        res.send(null);
    }
});

router.get('/requestsin', function(req, res, next){
  if (req.isAuthenticated()) {
    db.query('SELECT s.id, s.email, s.firstname, s.lastname, s.id FROM hasrelationship h, student s WHERE (h.first_stud_id=$1 OR h.second_stud_id=$1) AND (h.first_stud_id=s.id OR h.second_stud_id=s.id) AND s.id<>$1 AND h.status=0 AND h.active_stud_id<>$1 ORDER BY h.last_action desc', [req.user.id], (err2, res2) => {
      if (err2) {
        return next(err2)
      } else {
        res.send(res2.rows);
  }
  });
  } else {
    res.send(null);
  }
});

router.get('/requestsout', function(req, res, next){
  if (req.isAuthenticated()) {
    db.query('SELECT s.id, s.email, s.firstname, s.lastname, s.id FROM hasrelationship h, student s WHERE (h.first_stud_id=$1 OR h.second_stud_id=$1) AND (h.first_stud_id=s.id OR h.second_stud_id=s.id) AND s.id<>$1 AND h.status=0 AND h.active_stud_id=$1 ORDER BY h.last_action desc', [req.user.id], (err2, res2) => {
      if (err2) {
        return next(err2)
      } else {
        res.send(res2.rows);
  }
  });
  } else {
    res.send(null);
  }
});

router.get('/newPosts', function(req, res, next){
  if (req.isAuthenticated()){
    db.query('SELECT c.id as course_id, c.abbr, c.course_title, p.id , p.student_id, p.date, p.content, s.firstname, s.lastname, s.email FROM courses c, posts p, takes t, student s WHERE p.student_id=s.id AND c.id=p.courses_id AND t.courses_id=c.id AND t.student_id=$1 ORDER BY p.date DESC', [req.user.id], function(err2, res2){
      if (err2){
        return next(err2);
      } else {
        res.send(res2.rows.splice(0, 30));
      }
    });
  } else {
    res.send(null);
  }
});

router.get('/getchatinfo/:id', function(req, res, next){
  if (req.isAuthenticated()){
    db.query('SELECT s.id, s.firstname, s.lastname, s.email FROM hasrelationship h, student s WHERE (h.first_stud_id=s.id OR h.second_stud_id=s.id) AND s.id<>$1 AND h.id=$2', [req.user.id, req.params.id], function(err2, res2){
      if (err2){
        console.log(err2)
      } else {
        res.send(res2.rows[0]);
      }
    });
  } else {
    res.send(null);
  }
});

module.exports = function(io) {

    io.on( "connection", function( socket )
    {
        socket.on('join chat', function(chats_id){
          console.log(chats_id);
          db.query('SELECT first_stud_id, second_stud_id FROM hasrelationship WHERE id=$1', [chats_id], (err2, res2) => {
            if (err2) {
              console.log(err2);
            } else {
              console.log(res2.rows);
              if (res2.rows[0].first_stud_id==socket.request.user.id || res2.rows[0].second_stud_id==socket.request.user.id){
                socket.join(chats_id.toString());
                console.log('joined '+chats_id);
                db.query('SELECT student_send, chats_id, content FROM messages WHERE chats_id=$1 ORDER BY id', [chats_id], function (err3, res3){
                  if (err3) {
                    console.log(err3);
                  }
                  socket.emit('msgs_history', res3.rows);
                });
              }
            }

          });
        });
        console.log(socket.request.user);
      socket.on('msg', function(data){
        db.query('INSERT INTO messages (content, student_send, chats_id) VALUES ($1, $2, $3)', [data.content, parseInt(socket.request.user.id), data.chats_id], function(err, res){
          if (err){
            console.log(err);
          }
          db.query('UPDATE hasrelationship SET last_action=now() WHERE id=$1', [data.chats_id], function(err2, res2){
            if (err2){
              console.log(err2);
            }
          });
        });
        socket.emit('newMsg', {student_send: parseInt(socket.request.user.id), chats_id: data.chats_id, content: data.content});
        socket.to(data.chats_id.toString()).emit('newMsg', {student_send: parseInt(socket.request.user.id), chats_id: data.chats_id, content: data.content});
      });
    });

    return router;
};
