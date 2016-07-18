// frontend.js
console.log("js frontend script connected");

$( document ).ready(function(){ //on ready command

    $("#inputbutton").click(function(){ //on button click do this following stuff
       var linkaddressvalue = $('#linkaddressbox').val();
       var titleboxvalue = $('#titlebox').val();


      $(".ulclass").append("<li>" +titleboxvalue+" "+linkaddressvalue+ "</li>"  );
        console.log(linkaddressvalue); //console log theut value
        console.log(titleboxvalue); //console log theut value


         $.ajax({ //ajax post request
          method: "POST", //post
          url: "/links", //api url
          data: {
            link: linkaddressvalue,
            title: titlebox
          }, //data is textboxinfo var but it needs to be in object format for the ajax data
          error: function( response ){ //if error do this
            console.log("There was a problemmo.");
          }
        })

      .done(function( textboxinfo ){ //on done do this function
        console.log(textboxinfo); // console log var textboxinfo
       alert( "Data Saved: " + textboxinfo ); //alert textbox var


      });




  });


});






