$(document).ready(() => {
    $( "#btn" ).click(function() {
    $( ".modal" ).show();
});

$(window).click((event) => {
    if (event.target.id == "myModal") {
        $(".modal").hide();
}});


$( ".close" ).click(function() {
  $( ".modal" ).hide();
    });

});