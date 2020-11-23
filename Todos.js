$("#simplebutton").click( function (){
var node = document.createElement("LI");                 // Create a <li> node

var textvalue= document.getElementById("myinput").value;
var textnode = document.createTextNode(textvalue);       // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("mylist").appendChild(node);     // Append <li> to <ul> with id="myList"
// check off specfic Todos By clicking 
$("li").click(function(){
    $(this).toggleClass("completed");
 });


});


// check off specfic Todos By clicking 
$("li").click(function(){
    $(this).toggleClass("completed");
 });