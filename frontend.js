// frontend.js
console.log("js frontend script connected");

$( document ).ready(function(){ //on ready command

$("#inputbutton").click(function(){ //on button click do this following stuff
  $(".ulclass").append("<li>" +inputboxvalue+ "</li>" );

  var inputboxvalue = $('#inputbox').val();
  console.log(inputboxvalue);




});


});






