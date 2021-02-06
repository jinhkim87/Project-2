const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dogstagram', { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
});

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Mongoose connected to:${db.host}:${db.port}`);
});
