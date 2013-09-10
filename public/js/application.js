$(document).ready(function(){


  $("#get_color").on("click", function(e) {
    $.ajax({
      type: "post",
      url: "/color"
    }).done(function(server_data){
            console.log("success" + server_data);
      change_color(server_data.cell, server_data.color);
    }).fail(function(){
            console.log("fail");
    });
  });
});

var change_color = function(cell, color){
$('#color_me li:nth-child(' + cell + ')').css('background-color', color);
}
