var express       = require('express'); //linking the express module
var app           = express(); //app instance of express
var db            = require('./db'); // added db
var bodyParser    = require('body-parser');
var port          = process.env.PORT || 3000; //  sets the listining port
var Linklist      = require('./model/linkmodel.js'); // model linking


var links = require('../controller/links.js'); //linking the controller links file
var express = require('express'); // including theexpress file in this file
var router = express.Router(); //simplifying the router



//routes

router.route('/')
  .get(links.index)
  .post(links.create)
  .delete(links.destroy);


module.exports = router;
