var express = require('express');
//linking the express module
// var request = require('request');
// requires request node modules
var app = express();
//app instance of express
var db =




var port = process.env.PORT || 3000;
//  sets the listining port
var linkrouter = require('./routes/links');



app.get('/', function(req,res){
  res.json({message:'hello, world!'});
});

  app.use('/links', linkrouter);
// get reddit if routes start with reddit

app.listen(port, function(){
  console.log ('Server listing on port '+port);
});
