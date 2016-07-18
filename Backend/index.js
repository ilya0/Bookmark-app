var express       = require('express'); //linking the express module
var app           = express(); //app instance of express
var db            = require('./db'); // added db
var bodyParser    = require('body-parser');
var port          = process.env.PORT || 3000; //  sets the listining port
var Linklist      = require('./model/link_model.js'); // model linking
var links         = require('./Controller/link_controller.js'); //linking the controller links file
var express       = require('express'); // including theexpress file in this file
var router        = express.Router(); //simplifying the router
var mongoose      = require('mongoose');
var logger        = require( 'morgan' ); //logs the shit into console


// Use middleware
app.use( logger( 'dev' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );

// //routes to seperate out later

// router.route('/')
//   .get(links.index)
//   .post(links.create);
//   // .delete(links.destroy);

// router.route('/show')
//   .get(links.show)




//test for just routing working without routering
app.get('/', function(req,res){
  var randarray = ["forest", "tree", "flower", "sky", "grass", "mountain"];
  var messagedisplay = randarray[Math.floor((Math.random() * randarray.length))];
  console.log(messagedisplay);
  res.json({message:messagedisplay});
});



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



app.get('/links', function(req,res){

Linklist.find( {}, function( err, links ) {
    if ( err ) {
        console.log( err );
    } else {
        console.log( links );
    }
});
});








app.listen(port, function() {
  console.log('bookmark app running on ', port);
});

module.exports = router;
