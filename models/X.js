const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
  name: String,
  breed: String,
  gender: String,
  age: String,
  temp: String,
  rescue: String,
  tips: String,
}, {
  timestamps: true
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  posts: [postSchema],
   googleId: String
}, {
  timestamps: true
});

// module.exports = mongoose.model('User', userSchema);

const User = mongoose.model('User', userSchema);

module.exports = User