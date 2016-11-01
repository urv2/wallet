'use strict';

var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public'));
});
app.listen(port);
console.log("App listening on port " + port);
