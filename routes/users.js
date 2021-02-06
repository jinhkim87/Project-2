const router = require('express').Router();
const usersCtrl = require('../controllers/users');

// GET /users
router.get('/users', isLoggedIn, usersCtrl.index);

// POST 
router.post('/posts', isLoggedIn, usersCtrl.addPost);

// DELETE POST
router.delete('/posts/:id', isLoggedIn, usersCtrl.delPost);

 function isLoggedIn(req, res, next) {
   if (req.isAuthenticated()) return next();
   res.redirect('/auth/google');
 }

module.exports = router;
