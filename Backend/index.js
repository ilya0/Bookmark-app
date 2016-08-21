var express       = require('express'); //linking the express module
var app           = express(); //app instance of express
var db            = require('./db'); // added db
var bodyParser    = require('body-parser');
var port          = process.env.PORT || 3000; //  sets the listining port
var Linklist      = require('./model/link_model.js'); // model linking
var links         = require('../Backend/Controller/link_controller.js'); //linking the controller links file
var express       = require('express'); // including theexpress file in this file
var router        = express.Router(); //simplifying the router
var mongoose      = require('mongoose');
var logger        = require( 'morgan' ); //logs the shit into console
var path          = require('path');



///cross domain working?
var allowCrossDomain = function(req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type');

   next();
};


// Use middleware
app.use( logger( 'dev' ) ); // this allows the loggin into the console
app.use( bodyParser.json() ); //parses the json
app.use( bodyParser.urlencoded( { extended: false } ) ); // this is to use routes encoding

// //routes to seperate out later

// router.route('/')
//   .get(links.index)
//   .post(links.create);
//   // .delete(links.destroy);

// router.route('/show')
//   .get(links.show)




//test for just routing working without routering will display random arrays
app.get('/', function(req,res){
  var randarray = ["forest", "tree", "flower", "sky", "grass", "mountain"];
  var messagedisplay = randarray[Math.floor((Math.random() * randarray.length))];
  console.log(messagedisplay);
  // res.json({message:messagedisplay});
  res.sendFile(path.join(__dirname + '/index.html'));
});


//this is to add the link
app.post('/links', function(req,res){

        var link = new Linklist();
        link.title = req.body.title;
        link.linkaddress = req.body.linkaddress;

        link.save(function(err) {
            if (err)
                res.send(err);

     res.json({sucess:true,message:'Link created! pow'});

        });

});

// this is to get all the links
app.get('/links', function(req,res){

  Linklist.find( {}, function( err, links ) {
      if ( err ) {
          console.log( err );
      } else {
          console.log( links );
      }
  res.sendFile(path.join(__dirname + '/index.html'));

  });
});



// this is to get all the links
app.get('/showjson', function(req,res){

  Linklist.find( {}, function( err, links ) {
      if ( err ) {
          console.log( err );
      } else {
          console.log( links );
      }
        res.json({links});
  });
});




//this is to delete the link
app.delete('/:linkaddress', function(req,res){

Linklist.findOneAndRemove({linkaddress:req.params.linkaddress},function(err,links){
 if (err){
    throw err;
  }
  res.json(links);
  console.log("account removed");
});


});








app.listen(port, function() {
  console.log('bookmark app running on ', port);
});

module.exports = router;
