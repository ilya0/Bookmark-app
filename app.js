var express       = require('express'); //linking the express module
var app           = express(); //app instance of express
var db            = require('./db'); // added db
var bodyParser    = require('body-parser');
var port          = process.env.PORT || 3000; //  sets the listining port
var Linklist      = require('./linkmodel.js'); // model linking

// var linkrouter = require('./routes/links'); //router page



app.get('/', function(req,res){
  res.json({message:'hello, world!'});
});



app.post('/', function(req, res, next){
  console.log(req.body);
  var newLink = new Link();
  newLink.link = req.body.link;
  newLink.name = req.body.name;

});


 // app.use('/links', linkrouter);


app.listen(port, function(){
  console.log ('Server listing on port '+port);
});
