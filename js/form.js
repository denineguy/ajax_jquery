$(document).ready(function() {
  $('form').submit(function(evt) {
    evt.preventDefault();
    var url = $(this).attr("action");
    var data = $(this).serialize();
     console.log(data);
    $.post(url,data,function(response) {
      $('#signup').html("<p>Thanks for signing up!</p>")
    });
  }); 
}); // end ready

