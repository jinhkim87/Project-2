const mongoose = require('mongoose');
require("dotenv").config()

mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
});

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Mongoose connected to:${db.host}:${db.port}`);
});
