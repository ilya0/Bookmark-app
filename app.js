var express       = require('express'); //linking the express module
var app           = express(); //app instance of express
var db            = require('./db'); // added db
var bodyParser    = require('body-parser');
var port          = process.env.PORT || 3000; //  sets the listining port
// var linkrouter = require('./routes/links'); //router page



app.get('/', function(req,res){
  res.json({message:'hello, world!'});
});


app.get('/stored', function(req,res){
  res.json({message:'this is all the stored stuff!'});
});

 // app.use('/links', linkrouter);


app.listen(port, function(){
  console.log ('Server listing on port '+port);
});
