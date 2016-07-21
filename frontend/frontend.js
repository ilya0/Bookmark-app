// frontend.js
console.log("js frontend script connected");
var allowCrossDomain = function(req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type');

   next();
};


$( document ).ready(function(){ //on ready command




    $("#inputbutton").click(function(){ //on button click do this following stuff
       var linkaddressvalue = $('#linkaddressbox').val();
       var titleboxvalue = $('#titlebox').val();


      $(".ulclass").append("<li>" +titleboxvalue+" "+linkaddressvalue+ "</li>"  );
        console.log(linkaddressvalue); //console log theut value
        console.log(titleboxvalue); //console log theut value


        pushdata(linkaddressvalue,titleboxvalue);
        console.log("pushdata ran");




  });


});

function pushdata(linkaddressvalue,titleboxvalue){
         $.ajax({ //ajax post request
          method: "POST", //post
          crossDomain: false,
          url: "/links", //api url
          data: {
            link: linkaddressvalue,
            title: titleboxvalue
          }, //data is textboxinfo var but it needs to be in object format for the ajax data
          error: function( response ){ //if error do this
            console.log("There was a problemmo.");
          }
        })

      .done(function( textboxinfo ){ //on done do this function
        console.log(textboxinfo); // console log var textboxinfo
       alert( "Data Saved: " + textboxinfo ); //alert textbox var


    });
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.example.org/ajax.php", true);
xhr.setRequestHeader("X-My-Custom-Header", "some value");
xhr.onload = function () {
    console.log(xhr.responseText);
};
xhr.send();

};



