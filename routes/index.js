// app.js
const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
const uri = "mongodb+srv://gonzalezkellymichelle:xNYqyF56LLKU46ie@cluster0.a8zxm9y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/traxi_test";

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = router;
