var express       = require('express'); //linking the express module
var app           = express(); //app instance of express
var db            = require('../db'); // added db
var bodyParser    = require('body-parser');
var port          = process.env.PORT || 3000; //  sets the listining port
var Linklist      = require('../model/link_model.js'); // model linking
var links         = require('../Controller/link_controller.js'); //linking the controller links file
var express       = require('express'); // including theexpress file in this file
var router        = express.Router(); //simplifying the router



// //routes

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

  res.json({message:messagedisplay});
});



app.post('/', function(req,res){
//this is where the link and name is cvreated
var link = new Linklist(); // create a new object

link.title = req.body.title;  // adding the title param from the body to the title key in the object
link.linkaddress = req.body.linkaddress;
console.log(link); //just a test for the link

link.save(function(err){ ///save the link and if theres an error do this
  if(err){
    throw err;
  };

res.json({sucess:true,message:'Link created! pow'});
  });

});








app.listen(port, function() {
  console.log('bookmark app running on ', port);
});

module.exports = router;
