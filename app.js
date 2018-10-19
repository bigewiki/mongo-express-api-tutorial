const User = require('./user');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/users_test', { useNewUrlParser: true });

app.get('/api', (req, res) => {
  User.find({ name: 'Joe' })
  .then((users) => {
    res.send(users);
  });
});


module.exports = app;
