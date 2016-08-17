// MY MAIN APP JS

// Require mongoose
var mongoose = require('mongoose');
var mongo_url = process.env.MONGODB_URI || 'mongodb://localhost/sabrina';
mongoose.Promise = global.Promise;
mongoose.connect(mongo_url);


var express = require('./config/express');
var app = express();

var port = process.env.PORT || 7000;

app.set('port', port);

app.listen(app.get('port'), function() {
  console.log('My express server is running at localhost', app.get('port'));
});

module.exports = app;
