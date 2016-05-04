var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost/contracts')

var contracts = require('./contracts.js')(app);

var server = app.listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000')
});