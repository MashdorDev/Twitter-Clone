// TODO add mongoose
const mongoose = require('mongoose');

// TODO add MongoDB URI
mongoose.connect('mongodb://localhost/Twitter', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// TODO add DB

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
