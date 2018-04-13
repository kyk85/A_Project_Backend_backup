var express = require ('express');
var app = express();
var mongoose = require('mongoose');
var logger = require('morgan') // outputs some useful debugging information for us
var bodyParser = require('body-parser');
var cors = require('cors');
//var nodemailer = require('nodemailer');

var databaseConfig = require('./config/database');
var router = require('./app/routes');

mongoose.connect(databaseConfig.url);

app.listen(process.env.PORT || 8080);

console.log("App listening on port 8080");

app.use(bodyParser.urlencoded({extended: false})); // Parses urlencoded bodies (url bar)
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using Morgan
app.use(cors());

router(app);

// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// var nodemailer = require('nodemailer');
 
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

// var port = process.env.PORT || 8080;

// var router = express.Router();

// app.use('/api', router)
// app.listen(port);
// console.log('Magic happens on port' + port)