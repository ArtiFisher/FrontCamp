var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var data = require('./data');
var connection = require('./helpers/db');
var articles = require('./routes/articles');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 8080;

app.use('/articles', articles);

app.listen(port);
console.log('Magic happens on port ' + port);
