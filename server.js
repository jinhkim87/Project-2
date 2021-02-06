//


const express = require('express');
const morgan = require('morgan');
const session = require('express-session')
const passport = require('passport')
const methodOverride = require('method-override')


// We'll need to load the env vars
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// create the Express app
const app = express();

// connect to the MongoDB with mongoose
require('./config/database');
require('./config/passport');

// require our routes
const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');

// view engine setup
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Add session middleware here
 app.use(session({
   secret: process.env.SESSION_SECRET,
   resave: false,
   saveUninitialized: true
 }));
 app.use(passport.initialize());
 app.use(passport.session());
//  Add passport middleware here


app.use('/', indexRoutes);
app.use('/', usersRoutes);



app.listen(PORT, () => {
  console.log(`Express is listening on port:${PORT}`);
});
