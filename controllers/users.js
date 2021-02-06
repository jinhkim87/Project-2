const User = require('../models/User');

module.exports = {
  index,
  addPost,
  delPost
};

function index(req, res, next) {
  User.find({}, function(err, users) {
    res.render('users/index', {
    users,
    user: req.user
    });
 });
}


function addPost(req, res, next) {
  User.findById(req.user.id, (err, user)=>{
    console.log(req.user.id)
      user.posts.push(req.body);
      user.save(function(err) {
      res.redirect('/users');
      });
    })
  
}


function delPost(req, res) {
  req.user.posts.splice(req.params.id, 1);
  req.user.save(function (err) {
    if (err) res.send("ERROR");
    res.redirect('/users')   
  })
}

