$("#simplebutton").click(function () {
    //Get user input value
    var textvalue = document.getElementById("myinput").value;
    //Create a new LI item
    $("#mylist").append($("<li>").html(textvalue)).on('click', 'li', function () {
        $(this).toggleClass("completed");
    });
});

$("li").click(function () {
    console.log("GHANTA:" + $(this).text());
    $(this).toggleClass("completed");
});